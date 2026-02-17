var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __moduleCache = /* @__PURE__ */ new WeakMap;
var __toCommonJS = (from) => {
  var entry = __moduleCache.get(from), desc;
  if (entry)
    return entry;
  entry = __defProp({}, "__esModule", { value: true });
  if (from && typeof from === "object" || typeof from === "function")
    __getOwnPropNames(from).map((key) => !__hasOwnProp.call(entry, key) && __defProp(entry, key, {
      get: () => from[key],
      enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
    }));
  __moduleCache.set(from, entry);
  return entry;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};

// src/bundle.js
var exports_bundle = {};
__export(exports_bundle, {
  default: () => bundle_default
});
module.exports = __toCommonJS(exports_bundle);

// src/postwind.js
window.PostWind = (() => {
  const breakpoints = {};
  const shortcuts = {};
  const cache = {};
  const styleMain = document.createElement("style");
  styleMain.id = "postwind-main";
  document.head.appendChild(styleMain);
  const styleShortcuts = document.createElement("style");
  styleShortcuts.id = "postwind-shortcuts";
  document.head.appendChild(styleShortcuts);
  const visibleObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      entry.target.classList.toggle("pw-visible", entry.isIntersecting);
    }
  }, { threshold: 0.5 });
  const observedElements = new WeakSet;
  function twRule(className) {
    const needle = "." + CSS.escape(className);
    for (const sheet of document.styleSheets) {
      try {
        for (const layer of sheet.cssRules) {
          if (!layer.cssRules)
            continue;
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
  function twFull(className) {
    const needle = "." + CSS.escape(className);
    for (const sheet of document.styleSheets) {
      try {
        for (const layer of sheet.cssRules) {
          if (!layer.cssRules)
            continue;
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
    return new Promise((resolve2) => {
      requestAnimationFrame(() => {
        resolve2(twRule(className));
        el.remove();
      });
    });
  }
  function breakpoint(name, media) {
    breakpoints[name] = media;
  }
  function extractInner(cssText) {
    const first = cssText.indexOf("{");
    const last = cssText.lastIndexOf("}");
    if (first === -1 || last === -1)
      return null;
    return cssText.substring(first + 1, last).trim();
  }
  function shortcut(name, classes) {
    shortcuts[name] = classes;
  }
  function resolveShortcut(name) {
    const classes = shortcuts[name];
    if (!classes)
      return Promise.resolve(null);
    const list = classes.split(/\s+/);
    const expanded = [];
    for (const cls of list) {
      const nested = shortcuts[cls] || shortcuts[`.${cls}`];
      if (nested) {
        expanded.push(...nested.split(/\s+/));
      } else {
        expanded.push(cls);
      }
    }
    const baseExtras = [];
    for (const cls of expanded) {
      const sep = cls.indexOf(":");
      if (sep !== -1) {
        const prefix = cls.substring(0, sep);
        if (breakpoints[prefix])
          baseExtras.push(cls.substring(sep + 1));
      }
    }
    const el = document.createElement("div");
    el.className = [...expanded, ...baseExtras].join(" ");
    document.body.appendChild(el);
    return new Promise((resolve2) => {
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
              const full2 = twFull(base);
              if (full2) {
                if (!mediaParts[media])
                  mediaParts[media] = [];
                mediaParts[media].push(extractInner(full2));
              }
              continue;
            }
          }
          const full = twFull(cls);
          if (full)
            baseParts.push(extractInner(full));
        }
        el.remove();
        const mediaKeys = Object.keys(mediaParts);
        if (!baseParts.length && !mediaKeys.length)
          return resolve2(null);
        let css = "";
        if (baseParts.length)
          css += `${name} { ${baseParts.join(" ")} }`;
        for (const media of mediaKeys) {
          if (css)
            css += " ";
          css += `${media} { ${name} { ${mediaParts[media].join(" ")} } }`;
        }
        resolve2(css);
      });
    });
  }
  const unitRe = /^(.+-)(\d+(?:\.\d+)?)(px|rem|em|vh|vw|vmin|vmax|%|ch|ex|cap|lh|dvh|dvw|svh|svw|cqw|cqh)$/;
  function isColonResponsive(className) {
    const first = className.indexOf(":");
    if (first === -1)
      return false;
    const before = className.substring(0, first);
    return before.includes("-") && !before.startsWith("visible");
  }
  function resolvePipe(className, parts) {
    const base = parts[0];
    const dashIdx = base.lastIndexOf("-");
    const prop = dashIdx !== -1 ? base.substring(0, dashIdx + 1) : "";
    const sel = CSS.escape(className);
    function expandClass(val) {
      const cls = prop + val;
      const m = cls.match(unitRe);
      return m ? `${m[1]}[${m[2]}${m[3]}]` : cls;
    }
    if (parts.length === 2) {
      const tabletClass = expandClass(parts[1]);
      const baseClass = (() => {
        const m = base.match(unitRe);
        return m ? `${m[1]}[${m[2]}${m[3]}]` : base;
      })();
      return Promise.all([twCSS(baseClass), twCSS(tabletClass)]).then(([bCss, tCss]) => {
        const rules = [];
        if (bCss)
          rules.push(`.${sel} { ${bCss} }`);
        if (tCss)
          rules.push(`${breakpoints.t} { .${sel} { ${tCss} } }`);
        return rules.length ? rules.join(`
`) : null;
      });
    }
    if (parts.length === 3) {
      const tabletClass = expandClass(parts[1]);
      const desktopClass = expandClass(parts[2]);
      const baseClass = (() => {
        const m = base.match(unitRe);
        return m ? `${m[1]}[${m[2]}${m[3]}]` : base;
      })();
      return Promise.all([
        twCSS(baseClass),
        twCSS(tabletClass),
        twCSS(desktopClass)
      ]).then(([bCss, tCss, dCss]) => {
        const rules = [];
        if (bCss)
          rules.push(`.${sel} { ${bCss} }`);
        if (tCss)
          rules.push(`${breakpoints.t} { .${sel} { ${tCss} } }`);
        if (dCss)
          rules.push(`${breakpoints.d} { .${sel} { ${dCss} } }`);
        return rules.length ? rules.join(`
`) : null;
      });
    }
    return Promise.resolve(null);
  }
  function resolve(className) {
    if (className.includes("@")) {
      const atMatch = className.match(/^([^@]+)@([a-z]+)$/);
      if (atMatch) {
        const rewritten = atMatch[2] + ":" + atMatch[1];
        return resolve(rewritten).then((css) => {
          if (!css)
            return null;
          return css.replace(CSS.escape(rewritten), CSS.escape(className));
        });
      }
    }
    if (shortcuts[className])
      return resolveShortcut(className);
    if (className.includes("|")) {
      return resolvePipe(className, className.split("|"));
    }
    if (isColonResponsive(className)) {
      return resolvePipe(className, className.split(":"));
    }
    const unitMatch = className.match(unitRe);
    if (unitMatch) {
      const twClass = `${unitMatch[1]}[${unitMatch[2]}${unitMatch[3]}]`;
      return twCSS(twClass).then((css) => {
        if (!css)
          return null;
        return `.${CSS.escape(className)} { ${css} }`;
      });
    }
    if (className.startsWith("dark:")) {
      const base2 = className.substring(5);
      return twCSS(base2).then((css) => {
        if (!css)
          return null;
        return `body.dark .${CSS.escape(className)} { ${css} }`;
      });
    }
    if (className.startsWith("visible:")) {
      const base2 = className.substring(8);
      return twCSS(base2).then((css) => {
        if (!css)
          return null;
        return `.pw-visible.${CSS.escape(className)} { ${css} }`;
      });
    }
    const sep = className.indexOf(":");
    if (sep === -1)
      return twCSS(className).then((css) => css ? `.${CSS.escape(className)} { ${css} }` : null);
    const prefix = className.substring(0, sep);
    const base = className.substring(sep + 1);
    const media = breakpoints[prefix];
    if (!media)
      return twCSS(className).then((css) => css ? `.${CSS.escape(className)} { ${css} }` : null);
    return twCSS(base).then((css) => {
      if (!css)
        return null;
      return `${media} { .${CSS.escape(className)} { ${css} } }`;
    });
  }
  function inject(className) {
    if (cache[className])
      return cache[className];
    const isShortcut = !!shortcuts[className];
    const p = resolve(className).then((css) => {
      if (css && !cache[className]._injected) {
        const target = isShortcut ? styleShortcuts : styleMain;
        target.textContent += css + `
`;
        cache[className]._injected = true;
      }
      return css;
    });
    p._injected = false;
    cache[className] = p;
    return p;
  }
  function observeVisible(el) {
    if (observedElements.has(el))
      return;
    observedElements.add(el);
    visibleObserver.observe(el);
  }
  const containerQueryRe = /^(min|max)-(\d+):(.+)$/;
  const containerQueryElements = new WeakMap;
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
  function handleOnload(el, cls) {
    const targetClass = cls.substring(7);
    setTimeout(() => el.classList.add(targetClass), 100);
  }
  function needsProcessing(cls) {
    if (shortcuts[cls])
      return true;
    if (cls.startsWith("dark:"))
      return true;
    if (cls.startsWith("visible:"))
      return true;
    if (cls.startsWith("onload:"))
      return true;
    if (cls.includes("|"))
      return true;
    if (cls.includes("@"))
      return true;
    if (isColonResponsive(cls))
      return true;
    if (unitRe.test(cls))
      return true;
    if (containerQueryRe.test(cls))
      return true;
    const colonIdx = cls.indexOf(":");
    if (colonIdx > 0 && breakpoints[cls.substring(0, colonIdx)])
      return true;
    return false;
  }
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
  function initClasses(root) {
    const all = (root || document).querySelectorAll("*");
    for (const el of all) {
      if (!el.className || typeof el.className !== "string")
        continue;
      for (const cls of el.classList) {
        if (needsProcessing(cls)) {
          processElement(el);
          break;
        }
      }
    }
  }
  function autoInit() {
    function scan() {
      if (!_ready) {
        requestAnimationFrame(scan);
        return;
      }
      _ready.then(() => initClasses());
    }
    scan();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoInit);
  } else {
    autoInit();
  }
  const domObserver = new MutationObserver((mutations) => {
    if (!_ready)
      return;
    _ready.then(() => {
      for (const m of mutations) {
        if (m.type === "attributes") {
          if (m.target.nodeType === 1)
            processElement(m.target);
          continue;
        }
        for (const node of m.addedNodes) {
          if (node.nodeType !== 1)
            continue;
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
    attributeFilter: ["class"]
  });
  let _bodyClassCurrent = null;
  function _setupBodyClass() {
    function update() {
      if (!document.body)
        return;
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
  let _ready = null;
  function init(opts) {
    if (opts) {
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
    if (typeof window !== "undefined" && window.matchMedia) {
      const initDarkMode = () => {
        if (document.body?.classList.contains("dark-auto")) {
          const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
          if (prefersDark)
            document.body.classList.add("dark");
          window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
            document.body.classList.toggle("dark", e.matches);
          });
        }
      };
      if (document.body)
        initDarkMode();
      else
        document.addEventListener("DOMContentLoaded", initDarkMode);
    }
    if (opts && opts.body) {
      _setupBodyClass();
    }
    if (_ready)
      return _ready;
    if (!opts || !opts.tailwind) {
      _ready = Promise.resolve();
    } else if (document.querySelector('script[src*="tailwindcss/browser"]')) {
      _ready = _waitForTailwind();
    } else {
      _ready = new Promise((resolve2, reject) => {
        const s = document.createElement("script");
        s.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
        s.onload = () => _waitForTailwind().then(resolve2);
        s.onerror = () => reject(new Error("Failed to load Tailwind"));
        document.head.appendChild(s);
      });
    }
    if (opts && opts.preload) {
      const classes = Array.isArray(opts.preload) ? opts.preload : opts.preload.split(/\s+/).filter(Boolean);
      const doPreload = () => _ready.then(() => Promise.all(classes.map((cls) => inject(cls))));
      if (document.body) {
        doPreload();
      } else {
        document.addEventListener("DOMContentLoaded", doPreload);
      }
    }
    if (opts && opts.shortcuts) {
      const names = Object.keys(opts.shortcuts);
      const doShortcuts = () => _ready.then(() => Promise.all(names.map((name) => inject(name))));
      if (document.body) {
        doShortcuts();
      } else {
        document.addEventListener("DOMContentLoaded", doShortcuts);
      }
    }
    return _ready;
  }
  function _waitForTailwind() {
    return new Promise((resolve2) => {
      function check() {
        for (const sheet of document.styleSheets) {
          try {
            if (sheet.ownerNode?.hasAttribute?.("data-tailwindcss")) {
              resolve2();
              return;
            }
          } catch (e) {}
        }
        const probe = document.createElement("div");
        probe.className = "hidden";
        document.body?.appendChild(probe);
        requestAnimationFrame(() => {
          const css = twRule("hidden");
          probe.remove();
          if (css) {
            resolve2();
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
  breakpoint("m", "@media (max-width: 767px)");
  breakpoint("t", "@media (min-width: 768px)");
  breakpoint("d", "@media (min-width: 1024px)");
  return inject;
})();

// src/bundle.js
if (typeof document !== "undefined" && !document.querySelector('script[src*="tailwindcss/browser"]')) {
  const script = document.createElement("script");
  script.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4";
  document.head.appendChild(script);
}
var bundle_default = typeof window !== "undefined" ? window.PostWind : undefined;
