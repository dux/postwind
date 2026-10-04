import { createCompiler, loadDesignSystem } from "./engine.js";
import { version } from "../package.json";

// server-side import (SSR): no DOM, every call is a no-op
function serverStub() {
  const noop = () => Promise.resolve(null);
  return Object.assign(noop, { version, init: noop, ready: noop, shortcut: noop, breakpoint: noop, resolve: noop });
}

const PostWind = typeof document === "undefined" ? serverStub() : (() => {
  const breakpoints = {}; // name -> media query
  const shortcuts = {}; // selector -> classes
  const cache = {}; // class -> Promise<css|null>, results of PostWind(cls)
  const candidates = new Set(); // canonical Tailwind candidates handed to build()
  const aliases = new Map(); // canonical -> Set of sugar class names sharing its rules
  const seen = new Set(); // raw class names already processed
  const warned = new Set(); // classes already reported by warn: true
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

  const initOptions = ["css", "preflight", "breakpoints", "shortcuts", "preload", "body", "warn", "nonce"];

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

  // IntersectionObserver for visible: prefix. Visible when half the element
  // shows, or when it fills half the viewport: an element taller than 2x the
  // viewport never reaches a 0.5 ratio.
  const visibleObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const vh = entry.rootBounds?.height || window.innerHeight;
        const on = entry.isIntersecting && (entry.intersectionRatio >= 0.5 || entry.intersectionRect.height >= vh / 2);
        entry.target.classList.toggle("pw-visible", on);
      }
    },
    { threshold: Array.from({ length: 21 }, (_, i) => i / 20) }
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
  // classes share Tailwind's rules, cascade position and specificity.
  // map: canonical -> iterable of alias names; one regex pass for all of them
  function aliasRewriter(map) {
    const lookup = new Map();
    for (const [canon, names] of map) {
      const esc = CSS.escape(canon);
      const list = [...names].map((n) => "." + CSS.escape(n)).join(", ");
      lookup.set(esc, `:is(.${esc}, ${list})`);
    }
    if (!lookup.size) return (css) => css;
    const alt = [...lookup.keys()].map((e) => e.replace(reSpecial, "\\$&")).join("|");
    const re = new RegExp(`\\.(${alt})(?![\\w\\\\-])`, "g");
    return (css) => css.replace(re, (_, esc) => lookup.get(esc));
  }

  let _aliasRewrite = null; // cached rewriter for `aliases`, reset when they change

  function applyAliases(css) {
    _aliasRewrite ||= aliasRewriter(aliases);
    return _aliasRewrite(css);
  }

  // init({ warn: true }): explain why a PostWind class produced no CSS
  function warnIfUnresolved(cls, list) {
    if (warned.has(cls)) return;
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
    warned.add(cls);
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
        _aliasRewrite = null;
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

  // bare class name 'btn' -> '.btn'; anything else is used as a selector
  function shortcutKey(name) {
    return /^[A-Za-z_][\w-]*$/.test(name) ? "." + name : name;
  }

  function addShortcuts(map) {
    for (const [name, classes] of Object.entries(map)) shortcuts[shortcutKey(name)] = classes;
  }

  function expandShortcut(sel, depth = 0) {
    const out = [];
    for (const cls of shortcuts[sel].split(/\s+/).filter(Boolean)) {
      const nested = shortcuts["." + cls] ? "." + cls : null;
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

  // px value of a media query's min-width/max-width (rem/em at 16px), or null
  function mediaWidth(media, kind) {
    const m = media.match(new RegExp(`${kind}-width:\\s*(\\d+(?:\\.\\d+)?)(px|rem|em)`));
    return m ? parseFloat(m[1]) * (m[2] === "px" ? 1 : 16) : null;
  }

  // Tailwind orders custom variants by declaration, and later rules win:
  // max-width widest first, then min-width narrowest first, then the rest
  function sortedBreakpoints() {
    const rank = (media) => {
      const min = mediaWidth(media, "min");
      if (min !== null) return [1, min];
      const max = mediaWidth(media, "max");
      return max !== null ? [0, -max] : [2, 0];
    };
    return Object.entries(breakpoints).sort(([, a], [, b]) => {
      const ra = rank(a);
      const rb = rank(b);
      return ra[0] - rb[0] || ra[1] - rb[1];
    });
  }

  function baseCss() {
    const parts = [
      // index.css declares the layer order; without preflight we must declare it ourselves
      _preflight
        ? '@import "tailwindcss";'
        : '@layer theme, base, components, utilities;\n@import "tailwindcss/theme.css" layer(theme);\n@import "tailwindcss/utilities.css" layer(utilities);',
    ];
    for (const [name, media] of sortedBreakpoints()) {
      parts.push(`@custom-variant ${name} (${media});`);
    }
    parts.push("@custom-variant dark (&:where(.dark, .dark *));");
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
    // canonical() depends on breakpoints and the design system, so re-run every class
    const raw = [...seen];
    seen.clear();
    aliases.clear();
    candidates.clear();
    _aliasRewrite = null;
    for (const cls of raw) addClass(cls);
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

  // one rebuild per frame: rAF runs before paint, so classes added in any task
  // of this frame are styled before they are shown
  let scheduled = false;
  function schedule() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
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

  // ---------------------------------------------------------------------------
  // public API

  function ready() {
    if (!_ready) init();
    return _work;
  }

  async function resolve(cls) {
    await ready();
    const key = shortcutKey(cls);
    if (shortcuts[key]) {
      rebuild();
      return extractRule(_lastCss, key);
    }
    const list = canonical(cls);
    if (!list.length) return null;
    const out = ds.candidatesToCss(list).filter(Boolean);
    if (!out.length) return null;
    const own = list.filter((c) => c !== cls).map((c) => [c, [cls]]);
    return aliasRewriter(new Map(own))(out.join("\n"));
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
    bindBodyClass();
    return _ready ? recompile() : Promise.resolve();
  }

  function shortcut(name, classes) {
    addShortcuts(typeof name === "object" ? name : { [name]: classes });
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

  // container query pattern: min-480:flex, max-320:hidden, against the
  // element's own width. Only classes added here are ever removed, so a class
  // the author wrote stays put.
  const cqState = new WeakMap(); // el -> { queries: Map<cls, query>, added: Set<class> }
  const cqObserver = new ResizeObserver((entries) => {
    for (const entry of entries) applyContainerQueries(entry.target, entry.contentRect.width);
  });

  function applyContainerQueries(el, width) {
    const state = cqState.get(el);
    if (!state) return;
    const on = new Set();
    for (const q of state.queries.values()) {
      if (q.mode === "min" ? width >= q.width : width <= q.width) on.add(q.cls);
    }
    for (const { cls } of state.queries.values()) {
      if (on.has(cls)) {
        if (!el.classList.contains(cls)) {
          el.classList.add(cls);
          state.added.add(cls);
        }
      } else if (state.added.has(cls)) {
        el.classList.remove(cls);
        state.added.delete(cls);
      }
    }
  }

  // sync the element's min-N:/max-N: classes with its observed queries
  function syncContainerQueries(el) {
    const classes = [...el.classList].filter((c) => containerQueryRe.test(c));
    let state = cqState.get(el);
    if (!state) {
      if (!classes.length) return;
      state = { queries: new Map(), added: new Set() };
      cqState.set(el, state);
    }
    let changed = false;
    for (const cls of classes) {
      if (state.queries.has(cls)) continue;
      const [, mode, width, inner] = cls.match(containerQueryRe);
      state.queries.set(cls, { mode, width: +width, cls: inner });
      if (compiler) addClass(inner);
      changed = true;
    }
    for (const cls of state.queries.keys()) {
      if (classes.includes(cls)) continue;
      state.queries.delete(cls);
      changed = true;
    }
    if (!changed) return;
    const targets = new Set([...state.queries.values()].map((q) => q.cls));
    for (const cls of state.added) {
      if (targets.has(cls)) continue;
      el.classList.remove(cls);
      state.added.delete(cls);
    }
    // re-observing reports the current size again, which applies new queries
    cqObserver.unobserve(el);
    if (state.queries.size) cqObserver.observe(el);
    else cqState.delete(el);
  }

  // onload: prefix — adds class 100ms after the page is revealed
  function handleOnload(el, cls) {
    const targetClass = cls.substring(7); // remove "onload:"
    _revealed.then(() => setTimeout(() => el.classList.add(targetClass), 100));
  }

  // per element, which onload: classes were already wired up
  const wired = new WeakMap();

  function processElement(el) {
    if (!el.classList) return;
    for (const cls of el.classList) {
      if (cls.startsWith("onload:")) {
        if (!wired.has(el)) wired.set(el, new Set());
        if (!wired.get(el).has(cls)) {
          wired.get(el).add(cls);
          handleOnload(el, cls);
        }
        continue;
      }
      if (containerQueryRe.test(cls)) continue;
      if (cls.startsWith("visible:")) observeVisible(el);
      if (compiler) addClass(cls);
    }
    syncContainerQueries(el);
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

  // body class (init({ body: true })): mobile when m: matches, desktop when d:
  // matches, tablet otherwise
  let _bodyClass = false;
  let _bodyClassCurrent = null;
  let _bodyQueries = [];

  function updateBodyClass() {
    if (!document.body) return;
    const [m, d] = _bodyQueries;
    const name = m?.matches ? "mobile" : d?.matches ? "desktop" : "tablet";
    if (name === _bodyClassCurrent) return;
    if (_bodyClassCurrent) document.body.classList.remove(_bodyClassCurrent);
    document.body.classList.add(name);
    _bodyClassCurrent = name;
  }

  // (re)bind matchMedia listeners to the current m: and d: breakpoints
  function bindBodyClass() {
    if (!_bodyClass) return;
    for (const q of _bodyQueries) q?.removeEventListener("change", updateBodyClass);
    _bodyQueries = ["m", "d"].map((n) => breakpoints[n] && window.matchMedia(breakpoints[n].replace(/^@media\s*/, "")));
    for (const q of _bodyQueries) q?.addEventListener("change", updateBodyClass);
    updateBodyClass();
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
    for (const key of Object.keys(opts)) {
      if (!initOptions.includes(key)) console.warn(`[postwind] unknown init option "${key}"`);
    }
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
      addShortcuts(opts.shortcuts);
      dirty = true;
    }
    if (opts.preload) {
      const list = Array.isArray(opts.preload) ? opts.preload : opts.preload.split(/\s+/).filter(Boolean);
      _preload.push(...list);
      if (_ready) list.forEach(inject);
    }
    if (opts.body) _bodyClass = true;
    if (opts.body || opts.breakpoints) whenDom().then(bindBodyClass);

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

  inject.version = version;
  inject.init = init;
  inject.ready = ready;
  inject.breakpoint = breakpoint;
  inject.shortcut = shortcut;
  inject.resolve = resolve;

  // default breakpoints
  breakpoint("m", "@media (max-width: 767px)");
  breakpoint("t", "@media (min-width: 768px)");
  breakpoint("d", "@media (min-width: 1024px)");

  return inject;
})();

if (typeof window !== "undefined") window.PostWind = PostWind;

export default PostWind;
