window.PostWind = (() => {
  const breakpoints = {};
  const shortcuts = {};
  const cache = {};
  // one <style> per breakpoint, in registration order (= cascade order)
  const bpStyles = {};
  // Tailwind-ready promise; declared up here so the eager autoInit() below never hits a TDZ
  let _ready = null;
  let _warn = false;
  // CSP: inherit the nonce of the loading <script>; init({ nonce }) covers module builds
  let _nonce = document.currentScript?.nonce || null;
  let _revealResolve;
  // resolves once body.pw-ready is set; onload:/visible: animations wait for it
  const _revealed = new Promise((r) => (_revealResolve = r));

  function applyNonce(el) {
    if (_nonce) el.nonce = _nonce;
    return el;
  }

  function createStyle(id) {
    const style = document.createElement("style");
    style.id = id;
    return applyNonce(style);
  }

  const styleMain = createStyle("postwind-main");
  document.head.appendChild(styleMain);
  const styleShortcuts = createStyle("postwind-shortcuts");
  document.head.appendChild(styleShortcuts);

  // anti-FOUC: hide body until PostWind CSS is ready. Transitions are suppressed
  // under the veil so transform/opacity utilities don't animate from their
  // defaults and show mid-flight at reveal.
  const styleHide = createStyle("postwind-fouc");
  styleHide.textContent =
    "body:not(.pw-ready){opacity:0}body.pw-ready{opacity:1;transition:opacity .15s ease-in}" +
    "body:not(.pw-ready) *,body:not(.pw-ready) *::before,body:not(.pw-ready) *::after{transition:none !important}";
  document.head.appendChild(styleHide);

  // IntersectionObserver for visible: prefix
  const visibleObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        entry.target.classList.toggle("pw-visible", entry.isIntersecting);
      }
    },
    { threshold: 0.5 }
  );
  const observedElements = new WeakSet();

  function twRule(className) {
    const needle = "." + CSS.escape(className);
    for (const sheet of document.styleSheets) {
      try {
        for (const layer of sheet.cssRules) {
          if (!layer.cssRules) continue;
          for (const rule of layer.cssRules) {
            if (rule.selectorText === needle) {
              const match = rule.cssText.match(/\{\s*([^}]+)\s*\}/);
              return match ? match[1].trim() : null;
            }
          }
        }
      } catch (e) {}
    }
    return null;
  }

  // get full cssText (including nested media/hover blocks)
  function twFull(className) {
    const needle = "." + CSS.escape(className);
    for (const sheet of document.styleSheets) {
      try {
        for (const layer of sheet.cssRules) {
          if (!layer.cssRules) continue;
          for (const rule of layer.cssRules) {
            if (rule.selectorText === needle) {
              return rule.cssText;
            }
          }
        }
      } catch (e) {}
    }
    return null;
  }

  function twCSS(className) {
    const el = document.createElement("div");
    el.className = className;
    document.body.appendChild(el);
    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        resolve(twRule(className));
        el.remove();
      });
    });
  }

  // registration order is cascade order: each breakpoint gets its own <style>
  // inserted before the shortcuts sheet, so t: rules always precede d: rules
  // regardless of the order classes are discovered in the DOM
  function breakpoint(name, media) {
    breakpoints[name] = media;
    if (!bpStyles[name]) {
      bpStyles[name] = createStyle("postwind-bp-" + name);
      document.head.insertBefore(bpStyles[name], styleShortcuts);
    }
  }

  // extract inner block from ".selector { ...inner... }"
  function extractInner(cssText) {
    const first = cssText.indexOf("{");
    const last = cssText.lastIndexOf("}");
    if (first === -1 || last === -1) return null;
    return cssText.substring(first + 1, last).trim();
  }

  function shortcut(name, classes) {
    if (typeof name === 'object') {
      const keys = Object.keys(name);
      for (const k of keys) shortcuts[k] = name[k];
      const doInject = () => Promise.all(keys.map(k => inject(k)));
      (_ready || Promise.resolve()).then(doInject);
      return;
    }
    shortcuts[name] = classes;
  }

  // convert unit-suffix class to bracket notation for Tailwind
  // e.g. max-w-1300px -> max-w-[1300px], p-10px -> p-[10px]
  function toTwClass(cls) {
    const m = cls.match(unitRe);
    return m ? `${m[1]}[${m[2]}${m[3]}]` : cls;
  }

  function resolveShortcut(name) {
    const classes = shortcuts[name];
    if (!classes) return Promise.resolve(null);
    const list = classes.split(/\s+/);

    // expand nested shortcuts (values reference by class name, keys are selectors)
    const expanded = [];
    for (const cls of list) {
      const nested = shortcuts[cls] || shortcuts[`.${cls}`];
      if (nested) {
        expanded.push(...nested.split(/\s+/));
      } else {
        expanded.push(cls);
      }
    }

    // separate breakpoint-prefixed classes and collect their base classes
    // so Tailwind generates CSS for them (it doesn't know custom prefixes like m:)
    // convert unit-suffix to bracket notation so Tailwind recognizes them
    const baseExtras = [];
    for (const cls of expanded) {
      const sep = cls.indexOf(":");
      if (sep !== -1) {
        const prefix = cls.substring(0, sep);
        if (breakpoints[prefix]) baseExtras.push(toTwClass(cls.substring(sep + 1)));
      }
    }

    // build Tailwind-compatible class names for the temp element
    // unit-suffix classes like max-w-1300px must become max-w-[1300px]
    const twClasses = expanded.map((cls) => {
      const sep = cls.indexOf(":");
      if (sep !== -1 && breakpoints[cls.substring(0, sep)]) return "";
      return toTwClass(cls);
    });

    const el = document.createElement("div");
    el.className = [...twClasses, ...baseExtras].filter(Boolean).join(" ");
    document.body.appendChild(el);

    return new Promise((resolve) => {
      requestAnimationFrame(() => {
        const baseParts = [];
        const mediaParts = {};

        for (const cls of expanded) {
          const sep = cls.indexOf(":");
          if (sep !== -1) {
            const prefix = cls.substring(0, sep);
            const base = cls.substring(sep + 1);
            const media = breakpoints[prefix];
            if (media) {
              // resolve the base class and group under its media query
              const full = twFull(toTwClass(base));
              if (full) {
                if (!mediaParts[media]) mediaParts[media] = [];
                mediaParts[media].push(extractInner(full));
              }
              continue;
            }
          }
          const full = twFull(toTwClass(cls));
          if (full) baseParts.push(extractInner(full));
        }

        el.remove();
        // emit media blocks in breakpoint registration order, not in the
        // order they appear in the shortcut string
        const mediaKeys = Object.values(breakpoints).filter((m) => mediaParts[m]);
        if (!baseParts.length && !mediaKeys.length) return resolve(null);

        // name is always a CSS selector (e.g. '.f-row', 'h2, .h2')
        let css = "";
        if (baseParts.length) css += `${name} { ${baseParts.join(" ")} }`;
        for (const media of mediaKeys) {
          if (css) css += " ";
          css += `${media} { ${name} { ${mediaParts[media].join(" ")} } }`;
        }
        resolve(css);
      });
    });
  }

  // unit-suffix pattern: p-10px -> p-[10px], mt-2rem -> mt-[2rem], w-50% -> w-[50%]
  const unitRe = /^(.+-)(\d+(?:\.\d+)?)(px|rem|em|vh|vw|vmin|vmax|%|ch|ex|cap|lh|dvh|dvw|svh|svw|cqw|cqh)$/;

  // colon-responsive pattern: p-10:20 or p-10:20:30 (but NOT m:flex, d:block, visible:x)
  // detected by: contains ":" AND the part before first ":" contains "-" with a value
  function isColonResponsive(className) {
    const first = className.indexOf(":");
    if (first === -1) return false;
    const before = className.substring(0, first);
    // must have a dash followed by a value (e.g. "p-10", "grid-cols-1", "text-xl")
    // skip known prefixes and pseudo-classes
    return before.includes("-") && !before.startsWith("visible");
  }

  function resolvePipe(className, parts) {
    const base = parts[0];
    const dashIdx = base.lastIndexOf("-");
    const prop = dashIdx !== -1 ? base.substring(0, dashIdx + 1) : "";
    const sel = CSS.escape(className);

    // resolve each part, expanding unit suffixes
    function expandClass(val) {
      return toTwClass(prop + val);
    }

    if (parts.length !== 2 && parts.length !== 3) return Promise.resolve(null);

    // segments map to: base, t, d
    const bps = [null, "t", "d"];
    const classes = [toTwClass(base), ...parts.slice(1).map(expandClass)];
    return Promise.all(classes.map(twCSS)).then((cssList) => {
      const out = [];
      cssList.forEach((css, i) => {
        if (!css) return;
        const bp = bps[i];
        const rule = `.${sel} { ${css} }`;
        out.push({ bp, css: bp ? `${breakpoints[bp]} { ${rule} }` : rule });
      });
      return out.length ? out : null;
    });
  }

  // wrap a single rule as a parts list (see resolveParts)
  function part(bp, css) {
    return css ? [{ bp, css }] : null;
  }

  // resolves a class to [{ bp, css }] so inject() can place each rule in the
  // sheet for its breakpoint (bp null = main, "shortcut" = shortcuts sheet)
  function resolveParts(className) {
    // @ notation: text-sm@m → m:text-sm (property-first breakpoint)
    if (className.includes("@")) {
      const atMatch = className.match(/^([^@]+)@([a-z]+)$/);
      if (atMatch) {
        const rewritten = atMatch[2] + ":" + atMatch[1];
        return resolveParts(rewritten).then((parts) => {
          if (!parts) return null;
          // rewrite selector to use original @ class name
          return parts.map((p) => ({
            bp: p.bp,
            css: p.css.replace(CSS.escape(rewritten), CSS.escape(className)),
          }));
        });
      }
    }

    // shortcut?
    if (shortcuts[className]) {
      return resolveShortcut(className).then((css) => part("shortcut", css));
    }

    // pipe notation: p-4|12, p-4|8|12
    if (className.includes("|")) {
      return resolvePipe(className, className.split("|"));
    }

    // colon-responsive: p-10:20, p-10:20:30 (colon as pipe alias)
    if (isColonResponsive(className)) {
      return resolvePipe(className, className.split(":"));
    }

    // prefix notation: m:p-10, d:flex, d:pt-51px, t:block
    // must check before unit-suffix so "d:pt-51px" isn't consumed by unitRe
    {
      const sep = className.indexOf(":");
      if (sep > 0) {
        const prefix = className.substring(0, sep);
        const media = breakpoints[prefix];
        if (media) {
          const base = className.substring(sep + 1);
          // apply unit-suffix conversion to base if needed
          const twBase = toTwClass(base);
          return twCSS(twBase).then((css) =>
            part(prefix, css && `${media} { .${CSS.escape(className)} { ${css} } }`)
          );
        }
      }
    }

    // unit-suffix: p-10px -> p-[10px], mt-2rem -> mt-[2rem]
    if (unitRe.test(className)) {
      return twCSS(toTwClass(className)).then((css) =>
        part(null, css && `.${CSS.escape(className)} { ${css} }`)
      );
    }

    // dark: prefix — activated by body.dark class
    if (className.startsWith("dark:")) {
      const base = className.substring(5);
      return twCSS(base).then((css) =>
        part(null, css && `body.dark .${CSS.escape(className)} { ${css} }`)
      );
    }

    // visible: prefix — activated by IntersectionObserver
    if (className.startsWith("visible:")) {
      const base = className.substring(8);
      return twCSS(base).then((css) =>
        part(null, css && `.pw-visible.${CSS.escape(className)} { ${css} }`)
      );
    }

    // fallback: try as plain Tailwind class
    return twCSS(className).then((css) =>
      part(null, css && `.${CSS.escape(className)} { ${css} }`)
    );
  }

  function resolve(className) {
    return resolveParts(className).then((parts) =>
      parts ? parts.map((p) => p.css).join("\n") : null
    );
  }

  // init({ warn: true }): explain why a PostWind class produced no CSS
  function warnUnresolved(className) {
    let hint = "";
    const sep = className.indexOf(":");
    if (shortcuts[className]) {
      hint = `shortcut "${className}" produced no CSS`;
    } else if (sep > 0 && breakpoints[className.substring(0, sep)]) {
      hint = `"${className.substring(sep + 1)}" is not a Tailwind class`;
    } else if (className.includes("|") || isColonResponsive(className)) {
      hint = "no segment of the responsive value is a Tailwind class";
    }
    console.warn(`[postwind] no CSS for "${className}"${hint ? ` (${hint})` : ""}`);
  }

  function inject(className) {
    if (cache[className]) return cache[className];
    const p = resolveParts(className).then((parts) => {
      if (parts && !cache[className]._injected) {
        for (const { bp, css } of parts) {
          const target =
            bp === "shortcut" ? styleShortcuts : bpStyles[bp] || styleMain;
          target.textContent += css + "\n";
        }
        cache[className]._injected = true;
      }
      if (!parts && _warn) warnUnresolved(className);
      return parts ? parts.map((x) => x.css).join("\n") : null;
    });
    p._injected = false;
    cache[className] = p;
    return p;
  }

  // observe an element for visible: classes; deferred until reveal so
  // in-viewport elements animate after the page is shown, not under the veil
  function observeVisible(el) {
    if (observedElements.has(el)) return;
    observedElements.add(el);
    _revealed.then(() => visibleObserver.observe(el));
  }

  // container query pattern: min-480:flex, max-320:hidden
  const containerQueryRe = /^(min|max)-(\d+):(.+)$/;
  const containerQueryElements = new WeakMap();

  function setupContainerQuery(el, cls, mode, width, innerClass) {
    if (!containerQueryElements.has(el)) {
      containerQueryElements.set(el, []);
      const ro = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const w = entry.contentRect.width;
          for (const q of containerQueryElements.get(el) || []) {
            const active = q.mode === "min" ? w >= q.width : w <= q.width;
            el.classList.toggle(q.innerClass, active);
          }
        }
      });
      ro.observe(el);
    }
    containerQueryElements.get(el).push({ mode, width, innerClass });
  }

  // onload: prefix — adds class 100ms after the page is revealed
  function handleOnload(el, cls) {
    const targetClass = cls.substring(7); // remove "onload:"
    _revealed.then(() => setTimeout(() => el.classList.add(targetClass), 100));
  }

  // check if a class needs PostWind processing
  function needsProcessing(cls) {
    if (shortcuts[cls]) return true;
    if (cls.startsWith("dark:")) return true;
    if (cls.startsWith("visible:")) return true;
    if (cls.startsWith("onload:")) return true;
    if (cls.includes("|")) return true;
    if (cls.includes("@")) return true;
    if (isColonResponsive(cls)) return true;
    if (unitRe.test(cls)) return true;
    if (containerQueryRe.test(cls)) return true;
    // registered breakpoint prefixes: d:hidden, m:flex, t:block, etc.
    const colonIdx = cls.indexOf(":");
    if (colonIdx > 0 && breakpoints[cls.substring(0, colonIdx)]) return true;
    return false;
  }

  // process a single element: inject CSS for PostWind classes, observe visible: elements
  function processElement(el) {
    for (const cls of el.classList) {
      if (cls.startsWith("onload:")) {
        handleOnload(el, cls);
      } else if (cls.startsWith("visible:")) {
        observeVisible(el);
        inject(cls);
      } else if (containerQueryRe.test(cls)) {
        const m = cls.match(containerQueryRe);
        setupContainerQuery(el, cls, m[1], parseInt(m[2]), m[3]);
      } else if (shortcuts[cls]) {
        inject(cls);
      } else if (needsProcessing(cls)) {
        inject(cls);
      }
    }
  }

  // scan DOM for all PostWind classes
  function initClasses(root) {
    const all = (root || document).querySelectorAll("*");
    for (const el of all) {
      if (!el.className || typeof el.className !== "string") continue;
      for (const cls of el.classList) {
        if (needsProcessing(cls)) {
          processElement(el);
          break;
        }
      }
    }
  }

  // anti-FOUC: reveal body after CSS is ready
  function _reveal() {
    if (!document.body) return;
    document.body.classList.add("pw-ready");
    _revealResolve();
  }

  // auto-scan: wait for both DOM and Tailwind before scanning
  function autoInit() {
    function scan() {
      if (!_ready) {
        requestAnimationFrame(scan);
        return;
      }
      _ready.then(() => {
        initClasses();
        Promise.all(Object.values(cache)).then(() => setTimeout(_reveal, 1));
      });
    }
    scan();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoInit);
  } else {
    autoInit();
  }

  // safety: always reveal after 1.5s even if init fails
  setTimeout(_reveal, 1500);

  // MutationObserver to catch dynamically added elements and class attribute changes
  const domObserver = new MutationObserver((mutations) => {
    if (!_ready) return;
    _ready.then(() => {
      for (const m of mutations) {
        if (m.type === "attributes") {
          if (m.target.nodeType === 1) processElement(m.target);
          continue;
        }
        for (const node of m.addedNodes) {
          if (node.nodeType !== 1) continue;
          if (node.className && typeof node.className === "string") {
            processElement(node);
          }
          const children = node.querySelectorAll?.("*");
          if (children) {
            for (const child of children) {
              if (child.className && typeof child.className === "string") {
                processElement(child);
              }
            }
          }
        }
      }
    });
  });
  domObserver.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["class"],
  });

  // body breakpoint class: adds mobile/tablet/desktop to <body> based on viewport width
  let _bodyClassCurrent = null;
  function _setupBodyClass() {
    function update() {
      if (!document.body) return;
      const w = window.innerWidth;
      const name = w < 768 ? "mobile" : w < 1024 ? "tablet" : "desktop";
      if (name !== _bodyClassCurrent) {
        if (_bodyClassCurrent)
          document.body.classList.remove(_bodyClassCurrent);
        document.body.classList.add(name);
        _bodyClassCurrent = name;
      }
    }
    if (document.body) {
      update();
    } else {
      document.addEventListener("DOMContentLoaded", update);
    }
    window.addEventListener("resize", update);
  }

  // load Tailwind browser runtime
  // returns a Promise that resolves when Tailwind is loaded and has processed the page
  function init(opts) {
    if (opts) {
      if (opts.warn !== undefined) _warn = !!opts.warn;
      if (opts.nonce) {
        _nonce = opts.nonce;
        for (const el of document.querySelectorAll('style[id^="postwind-"]')) {
          applyNonce(el);
        }
      }
      if (opts.breakpoints) {
        for (const [name, media] of Object.entries(opts.breakpoints)) {
          breakpoint(name, media);
        }
      }
      if (opts.shortcuts) {
        for (const [name, classes] of Object.entries(opts.shortcuts)) {
          shortcut(name, classes);
        }
      }
    }

    // dark-auto: detect OS dark mode preference
    if (typeof window !== "undefined" && window.matchMedia) {
      const initDarkMode = () => {
        if (document.body?.classList.contains("dark-auto")) {
          const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
            .matches;
          if (prefersDark) document.body.classList.add("dark");
          window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) => {
              document.body.classList.toggle("dark", e.matches);
            });
        }
      };
      if (document.body) initDarkMode();
      else document.addEventListener("DOMContentLoaded", initDarkMode);
    }

    // body breakpoint class: adds mobile/tablet/desktop to <body>
    if (opts && opts.body) {
      _setupBodyClass();
    }

    // already loaded or loading
    if (_ready) return _ready;

    // skip Tailwind CDN unless explicitly requested
    if (!opts || !opts.tailwind) {
      _ready = Promise.resolve();
    } else if (document.querySelector('script[src*="tailwindcss/browser"]')) {
      // Tailwind already on page (loaded via <script> tag)
      _ready = _waitForTailwind();
    } else {
      // inject Tailwind and wait for it
      _ready = new Promise((resolve, reject) => {
        const s = applyNonce(document.createElement("script"));
        s.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
        s.onload = () => _waitForTailwind().then(resolve);
        s.onerror = () => reject(new Error("Failed to load Tailwind"));
        document.head.appendChild(s);
      });
    }

    // preload classes: resolve and inject CSS for given classes when ready
    if (opts && opts.preload) {
      const classes = Array.isArray(opts.preload)
        ? opts.preload
        : opts.preload.split(/\s+/).filter(Boolean);
      const doPreload = () =>
        _ready.then(() => Promise.all(classes.map((cls) => inject(cls))));
      if (document.body) {
        doPreload();
      } else {
        document.addEventListener("DOMContentLoaded", doPreload);
      }
    }

    // eagerly resolve all registered shortcuts so CSS is available on load
    if (opts && opts.shortcuts) {
      const names = Object.keys(opts.shortcuts);
      const doShortcuts = () =>
        _ready.then(() => Promise.all(names.map((name) => inject(name))));
      if (document.body) {
        doShortcuts();
      } else {
        document.addEventListener("DOMContentLoaded", doShortcuts);
      }
    }

    return _ready;
  }

  // wait for Tailwind to generate its stylesheet
  function _waitForTailwind() {
    return new Promise((resolve) => {
      function check() {
        // Tailwind browser creates a <style> with data-tailwindcss
        for (const sheet of document.styleSheets) {
          try {
            if (sheet.ownerNode?.hasAttribute?.("data-tailwindcss")) {
              resolve();
              return;
            }
          } catch (e) {}
        }
        // Fallback: probe Tailwind by resolving a known utility class.
        // Don't match any @layer rule — pages with their own @layer base/theme
        // would cause a false positive before Tailwind is actually ready.
        const probe = document.createElement("div");
        probe.className = "hidden";
        document.body?.appendChild(probe);
        requestAnimationFrame(() => {
          const css = twRule("hidden");
          probe.remove();
          if (css) {
            resolve();
          } else {
            requestAnimationFrame(check);
          }
        });
      }
      check();
    });
  }

  inject.init = init;
  inject.ready = () => _ready || Promise.resolve();
  inject.breakpoint = breakpoint;
  inject.shortcut = shortcut;
  inject.resolve = resolve;
  inject.twCSS = twCSS;
  inject.cache = cache;
  inject.observeVisible = observeVisible;
  inject.processElement = processElement;

  // default breakpoints
  breakpoint("m", "@media (max-width: 767px)");
  breakpoint("t", "@media (min-width: 768px)");
  breakpoint("d", "@media (min-width: 1024px)");

  return inject;
})();
