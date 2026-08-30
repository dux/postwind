import { createCompiler, loadDesignSystem } from "./engine.js";

const PostWind = (() => {
  const breakpoints = {}; // name -> media query; registration order = variant order
  const shortcuts = {}; // selector -> classes
  const cache = {}; // class -> Promise<css|null>, results of PostWind(cls)
  const candidates = new Set(); // canonical Tailwind candidates handed to build()
  const aliases = new Map(); // canonical -> Set of sugar class names sharing its rules
  const seen = new Set(); // raw class names already processed
  const knownCache = new Map();
  let pending = []; // candidates not yet passed to build()
  let compiler = null;
  let ds = null;
  let _ready = null; // resolves after first compile + initial scan
  let _work = Promise.resolve(); // serializes recompiles
  let _lastCss = "";
  let _css = ""; // user CSS from init({ css })
  let _preflight = true;
  let _preload = [];
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

  // anti-FOUC: hide body until the stylesheet is built. Transitions are
  // suppressed under the veil so transform/opacity utilities don't animate from
  // their defaults and show mid-flight at reveal.
  const styleHide = createStyle("postwind-fouc");
  styleHide.textContent =
    "body:not(.pw-ready){opacity:0}body.pw-ready{opacity:1;transition:opacity .15s ease-in}" +
    "body:not(.pw-ready) *,body:not(.pw-ready) *::before,body:not(.pw-ready) *::after{transition:none !important}";
  document.head.appendChild(styleHide);

  const styleMain = createStyle("postwind");
  document.head.appendChild(styleMain);

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

  // ---------------------------------------------------------------------------
  // class name sugar -> Tailwind candidates

  // unit-suffix pattern: p-10px -> p-[10px], mt-2rem -> mt-[2rem], w-50% -> w-[50%]
  const unitRe = /^(.+-)(\d+(?:\.\d+)?)(px|rem|em|vh|vw|vmin|vmax|%|ch|ex|cap|lh|dvh|dvw|svh|svw|cqw|cqh)$/;
  const containerQueryRe = /^(min|max)-(\d+):(.+)$/;

  // index of the last ":" outside [] and (), i.e. the variant/utility boundary
  function lastVariantSep(cls) {
    let depth = 0;
    let idx = -1;
    for (let i = 0; i < cls.length; i++) {
      const c = cls[i];
      if (c === "[" || c === "(") depth++;
      else if (c === "]" || c === ")") depth--;
      else if (c === ":" && depth === 0) idx = i;
    }
    return idx;
  }

  // unit suffix to bracket notation, keeping variants: d:pt-51px -> d:pt-[51px]
  function toTw(cls) {
    const i = lastVariantSep(cls);
    const head = i === -1 ? "" : cls.slice(0, i + 1);
    const tail = i === -1 ? cls : cls.slice(i + 1);
    const m = tail.match(unitRe);
    return m ? `${head}${m[1]}[${m[2]}${m[3]}]` : cls;
  }

  // does Tailwind produce CSS for this candidate?
  function known(candidate) {
    if (!ds) return true;
    if (!knownCache.has(candidate)) {
      knownCache.set(candidate, ds.candidatesToCss([candidate])[0] !== null);
    }
    return knownCache.get(candidate);
  }

  // p-4:8 is colon responsive only when the head is a complete utility
  // (p-4), so hover:flex, group-hover:flex, max-md:p-2 stay Tailwind variants
  function isColonResponsive(cls) {
    const first = cls.indexOf(":");
    if (first <= 0) return false;
    const head = cls.slice(0, first);
    if (!head.includes("-") || head.includes("[") || breakpoints[head]) return false;
    return known(toTw(head));
  }

  // p-4|8|12 -> [p-4, t:p-8, d:p-12]; values reuse the property of the first segment
  function responsive(parts) {
    if (parts.length !== 2 && parts.length !== 3) return [];
    const base = parts[0];
    const prop = base.slice(0, base.lastIndexOf("-") + 1);
    const bps = [null, "t", "d"];
    return parts.map((v, i) => {
      const c = toTw(i === 0 ? base : prop + v);
      return bps[i] ? `${bps[i]}:${c}` : c;
    });
  }

  // canonical Tailwind candidates for a raw class name
  function canonical(cls) {
    // text-sm@m -> m:text-sm (property-first breakpoint)
    const at = cls.match(/^([^@\s]+)@([a-z][a-z0-9-]*)$/);
    if (at && breakpoints[at[2]]) return canonical(`${at[2]}:${at[1]}`);
    if (cls.includes("|")) return responsive(cls.split("|"));
    if (isColonResponsive(cls)) return responsive(cls.split(":"));
    return [toTw(cls)];
  }

  const reSpecial = /[\\^$.*+?()[\]{}|]/g;

  // rewrite ".canonical" selectors to ":is(.canonical, .alias, ...)" so sugar
  // classes share Tailwind's rules, cascade position and specificity
  function aliasSelector(css, canon, names) {
    const esc = CSS.escape(canon);
    const re = new RegExp("\\." + esc.replace(reSpecial, "\\$&") + "(?![\\w\\\\-])", "g");
    const list = [...names].map((n) => "." + CSS.escape(n)).join(", ");
    return css.replace(re, `:is(.${esc}, ${list})`);
  }

  function applyAliases(css) {
    for (const [canon, names] of aliases) css = aliasSelector(css, canon, names);
    return css;
  }

  // init({ warn: true }): explain why a PostWind class produced no CSS
  function warnIfUnresolved(cls, list) {
    const sugar = list.length !== 1 || list[0] !== cls;
    const sep = cls.indexOf(":");
    const prefix = sep > 0 ? cls.slice(0, sep) : null;
    const ours = sugar || (prefix && (breakpoints[prefix] || prefix === "dark" || prefix === "visible"));
    if (!ours) return;
    const missing = list.filter((c) => !known(c));
    if (list.length && !missing.length) return;
    let hint;
    if (!list.length) hint = "expected 2 or 3 responsive segments";
    else if (prefix && breakpoints[prefix]) hint = `"${cls.slice(sep + 1)}" is not a Tailwind class`;
    else hint = `not Tailwind classes: ${missing.join(", ")}`;
    console.warn(`[postwind] no CSS for "${cls}" (${hint})`);
  }

  function addClass(cls) {
    if (seen.has(cls)) return;
    seen.add(cls);
    // handled in JS, never a stylesheet rule
    if (cls.startsWith("onload:") || containerQueryRe.test(cls)) return;
    const list = canonical(cls);
    for (const c of list) {
      if (c !== cls) {
        if (!aliases.has(c)) aliases.set(c, new Set());
        aliases.get(c).add(cls);
      }
      if (!candidates.has(c)) {
        candidates.add(c);
        pending.push(c);
      }
    }
    if (_warn) warnIfUnresolved(cls, list);
  }

  // ---------------------------------------------------------------------------
  // compile + build

  function expandShortcut(sel, depth = 0) {
    const out = [];
    for (const cls of shortcuts[sel].split(/\s+/).filter(Boolean)) {
      const nested = shortcuts[cls] ? cls : shortcuts["." + cls] ? "." + cls : null;
      if (nested && depth < 10) out.push(...expandShortcut(nested, depth + 1));
      else out.push(cls);
    }
    return out;
  }

  // shortcuts compile to @apply rules in the components layer, so utilities on
  // the same element override them (Tailwind convention)
  function shortcutCss() {
    const rules = [];
    for (const sel of Object.keys(shortcuts)) {
      const list = expandShortcut(sel).map(toTw).filter((c) => {
        const ok = known(c);
        if (!ok && _warn) console.warn(`[postwind] shortcut "${sel}": "${c}" is not a Tailwind class`);
        return ok;
      });
      if (list.length) rules.push(`  ${sel} { @apply ${list.join(" ")}; }`);
    }
    return rules.length ? `@layer components {\n${rules.join("\n")}\n}` : "";
  }

  function baseCss() {
    const parts = [
      // index.css declares the layer order; without preflight we must declare it ourselves
      _preflight
        ? '@import "tailwindcss";'
        : '@layer theme, base, components, utilities;\n@import "tailwindcss/theme.css" layer(theme);\n@import "tailwindcss/utilities.css" layer(utilities);',
    ];
    for (const [name, media] of Object.entries(breakpoints)) {
      parts.push(`@custom-variant ${name} (${media});`);
    }
    parts.push("@custom-variant dark (&:where(body.dark, body.dark *));");
    parts.push("@custom-variant visible (&:where(.pw-visible));");
    parts.push(_css);
    for (const el of document.querySelectorAll('style[type="text/tailwindcss"]')) {
      parts.push(el.textContent);
    }
    return parts.join("\n");
  }

  async function compileAll() {
    const base = baseCss();
    try {
      ds = await loadDesignSystem(base);
      knownCache.clear();
      compiler = await createCompiler(base + "\n" + shortcutCss());
    } catch (e) {
      console.error("[postwind] compile failed:", e.message);
      throw e;
    }
    pending = [...candidates];
    _lastCss = "";
    rebuild();
  }

  function recompile() {
    _work = _work.then(compileAll, compileAll);
    return _work;
  }

  // synchronous: hands new candidates to Tailwind and swaps the stylesheet
  function rebuild() {
    if (!compiler) return;
    if (!pending.length && _lastCss) return;
    const list = pending;
    pending = [];
    _lastCss = compiler.build(list);
    styleMain.textContent = applyAliases(_lastCss);
  }

  let scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    queueMicrotask(() => {
      scheduled = false;
      rebuild();
    });
  }

  // the compiled rule for a shortcut selector, taken from the components layer
  function extractRule(css, selector) {
    let i = css.indexOf(`\n  ${selector} {`);
    if (i === -1) return null;
    i += 3;
    let depth = 0;
    for (let k = css.indexOf("{", i); k < css.length; k++) {
      if (css[k] === "{") depth++;
      else if (css[k] === "}" && --depth === 0) {
        return css.slice(i, k + 1).replace(/^ {2}/gm, "");
      }
    }
    return null;
  }

  // strip @media/@supports wrappers and the selector, keep the declaration block
  function declarations(css) {
    let s = css.trim();
    while (s.startsWith("@")) s = s.slice(s.indexOf("{") + 1, s.lastIndexOf("}")).trim();
    return s.slice(s.indexOf("{") + 1, s.lastIndexOf("}")).trim();
  }

  // ---------------------------------------------------------------------------
  // public API

  function ready() {
    if (!_ready) init();
    return _work;
  }

  async function resolve(cls) {
    await ready();
    if (shortcuts[cls]) {
      rebuild();
      return extractRule(_lastCss, cls);
    }
    const list = canonical(cls);
    if (!list.length) return null;
    const out = ds.candidatesToCss(list).filter(Boolean);
    if (!out.length) return null;
    let css = out.join("\n");
    for (const c of list) if (c !== cls) css = aliasSelector(css, c, [cls]);
    return css;
  }

  async function twCSS(cls) {
    const css = await resolve(cls);
    return css ? declarations(css) : null;
  }

  function inject(cls) {
    if (cache[cls]) return cache[cls];
    cache[cls] = ready().then(() => {
      addClass(cls);
      rebuild();
      return resolve(cls);
    });
    return cache[cls];
  }

  function breakpoint(name, media) {
    breakpoints[name] = media;
    return _ready ? recompile() : Promise.resolve();
  }

  function shortcut(name, classes) {
    if (typeof name === "object") Object.assign(shortcuts, name);
    else shortcuts[name] = classes;
    return _ready ? recompile() : Promise.resolve();
  }

  // ---------------------------------------------------------------------------
  // DOM

  // observe an element for visible: classes; deferred until reveal so
  // in-viewport elements animate after the page is shown, not under the veil
  function observeVisible(el) {
    if (observedElements.has(el)) return;
    observedElements.add(el);
    _revealed.then(() => visibleObserver.observe(el));
  }

  // container query pattern: min-480:flex, max-320:hidden
  const containerQueryElements = new WeakMap();

  function setupContainerQuery(el, mode, width, innerClass) {
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

  // per element, which JS-driven classes were already wired up
  const wired = new WeakMap();

  function processElement(el) {
    if (!el.classList) return;
    for (const cls of el.classList) {
      if (cls.startsWith("onload:") || containerQueryRe.test(cls)) {
        if (!wired.has(el)) wired.set(el, new Set());
        if (wired.get(el).has(cls)) continue;
        wired.get(el).add(cls);
        if (cls.startsWith("onload:")) {
          handleOnload(el, cls);
        } else {
          const m = cls.match(containerQueryRe);
          setupContainerQuery(el, m[1], parseInt(m[2]), m[3]);
        }
        continue;
      }
      if (cls.startsWith("visible:")) observeVisible(el);
      if (compiler) addClass(cls);
    }
  }

  function initClasses(root) {
    for (const el of (root || document).querySelectorAll("[class]")) processElement(el);
  }

  // anti-FOUC: reveal body once the stylesheet is built
  function _reveal() {
    if (!document.body) return;
    document.body.classList.add("pw-ready");
    _revealResolve();
  }

  // safety: always reveal after 1.5s even if compile fails
  setTimeout(_reveal, 1500);

  function whenDom() {
    if (document.readyState !== "loading") return Promise.resolve();
    return new Promise((r) => document.addEventListener("DOMContentLoaded", r));
  }

  // dynamically added elements, class changes and late <style type="text/tailwindcss">
  const domObserver = new MutationObserver((mutations) => {
    if (!compiler) return;
    let needsCompile = false;
    const isTwStyle = (n) => n.matches?.('style[type="text/tailwindcss"]') || n.querySelector?.('style[type="text/tailwindcss"]');
    for (const m of mutations) {
      if (m.type === "attributes") {
        if (m.target.nodeType === 1) processElement(m.target);
        continue;
      }
      for (const node of m.addedNodes) {
        if (node.nodeType !== 1) continue;
        if (isTwStyle(node)) needsCompile = true;
        processElement(node);
        for (const child of node.querySelectorAll?.("[class]") || []) processElement(child);
      }
    }
    if (needsCompile) recompile();
    else schedule();
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
        if (_bodyClassCurrent) document.body.classList.remove(_bodyClassCurrent);
        document.body.classList.add(name);
        _bodyClassCurrent = name;
      }
    }
    if (document.body) update();
    else document.addEventListener("DOMContentLoaded", update);
    window.addEventListener("resize", update);
  }

  // dark-auto: mirror the OS preference into body.dark
  function _setupDarkAuto() {
    if (!window.matchMedia) return;
    const run = () => {
      if (!document.body?.classList.contains("dark-auto")) return;
      const query = window.matchMedia("(prefers-color-scheme: dark)");
      if (query.matches) document.body.classList.add("dark");
      query.addEventListener("change", (e) => document.body.classList.toggle("dark", e.matches));
    };
    if (document.body) run();
    else document.addEventListener("DOMContentLoaded", run);
  }

  function init(opts = {}) {
    if (opts.warn !== undefined) _warn = !!opts.warn;
    if (opts.nonce) {
      _nonce = opts.nonce;
      applyNonce(styleMain);
      applyNonce(styleHide);
    }
    let dirty = false;
    if (opts.preflight !== undefined && _preflight !== !!opts.preflight) {
      _preflight = !!opts.preflight;
      dirty = true;
    }
    if (opts.css) {
      _css += "\n" + opts.css;
      dirty = true;
    }
    if (opts.breakpoints) {
      Object.assign(breakpoints, opts.breakpoints);
      dirty = true;
    }
    if (opts.shortcuts) {
      Object.assign(shortcuts, opts.shortcuts);
      dirty = true;
    }
    if (opts.preload) {
      const list = Array.isArray(opts.preload) ? opts.preload : opts.preload.split(/\s+/).filter(Boolean);
      _preload.push(...list);
      if (_ready) list.forEach(inject);
    }
    if (opts.body) _setupBodyClass();

    if (_ready) {
      if (dirty) recompile();
      return _work;
    }

    _setupDarkAuto();
    _ready = whenDom()
      .then(compileAll)
      .then(() => {
        for (const cls of _preload) {
          addClass(cls);
          cache[cls] ||= Promise.resolve().then(() => resolve(cls));
        }
        initClasses();
        rebuild();
        _reveal();
      });
    _work = _ready;
    return _work;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => _ready || init());
  } else if (!_ready) {
    queueMicrotask(() => _ready || init());
  }

  inject.init = init;
  inject.ready = ready;
  inject.breakpoint = breakpoint;
  inject.shortcut = shortcut;
  inject.resolve = resolve;
  inject.twCSS = twCSS;
  inject.cache = cache;
  inject.observeVisible = observeVisible;
  inject.processElement = processElement;

  // default breakpoints, registered narrow to wide
  breakpoint("m", "@media (max-width: 767px)");
  breakpoint("t", "@media (min-width: 768px)");
  breakpoint("d", "@media (min-width: 1024px)");

  return inject;
})();

window.PostWind = PostWind;

export default PostWind;
