If you write css use postwind reference that is layer of extra features on top of tailwind

---

# PostWind - AI Library Guide (css and js guide)

PostWind is a browser runtime for Tailwind CSS v4 that bundles Tailwind's own compiler (`tailwindcss` npm package) into one file. No CDN, no build step. All standard Tailwind v4 classes, variants and CSS config (`@theme`, `@utility`, `@custom-variant`) work unchanged; PostWind adds extra syntax on top.

## Architecture

- `src/postwind.js` — the library (ES module, sets `window.PostWind`, default export)
- `src/engine.js` — wraps `compile()` / `__unstable__loadDesignSystem()` from `tailwindcss`; the four Tailwind stylesheets are inlined as strings at build time

Builds (`bun run build`): `dist/postwind.js` (ESM, browser-only; on the server it exports a no-op stub), `dist/postwind.global.js` (IIFE for `<script src>`), plus `.min.js` variants. The demo and tests load `dist/postwind.global.js`, so build before opening them.

## How it works

1. On `DOMContentLoaded` PostWind compiles: `@import "tailwindcss"` + `@custom-variant` per breakpoint (`m`, `t`, `d`, sorted: max-width widest first, then min-width narrowest first) + `dark` (`.dark` on any ancestor or the element) + `visible` (`.pw-visible`) + user CSS (`init({ css })`, `<style type="text/tailwindcss">`) + shortcuts as `@layer components { sel { @apply ... } }`
2. Every class on every element is a candidate. PostWind sugar is rewritten to canonical candidates first: `p-10px` -> `p-[10px]`, `p-4|8|12` -> `p-4 t:p-8 d:p-12`, `p-4:8` -> `p-4 t:p-8`, `text-sm@m` -> `m:text-sm`
3. `compiler.build(candidates)` returns the full layered stylesheet; rewritten classes are aliased onto their rules as `:is(.p-\[10px\], .p-10px)` so they keep Tailwind's ordering and single-class specificity
4. Output goes into one `<style id="postwind">`; `body.pw-ready` is set afterwards
5. MutationObserver feeds new elements / class changes into the same build, batched to one rebuild per animation frame (before paint). A new class costs a full stylesheet rebuild (~5-10 ms); a known class costs nothing, so avoid per-frame arbitrary values like `w-[${x}px]` (use inline style). A late `<style type="text/tailwindcss">`, `shortcut()`, `breakpoint()` or `init({ css })` recompiles (~10 ms), re-interprets every class seen so far and rebuilds
6. `onload:` and `min-480:`/`max-320:` container classes stay JS-driven (class toggles), never stylesheet rules

## PostWind syntax features

### Pipe notation (responsive)
`p-4|8` = mobile p-4, tablet p-8
`p-4|8|12` = mobile p-4, tablet p-8, desktop p-12

### Colon responsive notation
`p-4:8` = same as `p-4|8` (colon as pipe alias)
`p-4:8:12` = same as `p-4|8|12`

### Breakpoint prefixes
- `m:` = `@media (max-width: 767px)` (mobile) - not needed because tailwind is mobile first
- `t:` = `@media (min-width: 768px)` (tablet)
- `d:` = `@media (min-width: 1024px)` (desktop)

### Unit suffix shorthand
`p-10px` becomes `p-[10px]`
`mt-2rem` becomes `mt-[2rem]`
`w-50%` becomes `w-[50%]`
Supported units: px, rem, em, vh, vw, vmin, vmax, %, ch, ex, cap, lh, dvh, dvw, svh, svw, cqw, cqh

### dark: prefix
Dark mode via a `.dark` class on `<html>`, `<body>` or any subtree. `dark:bg-gray-900` compiles as `.dark\:bg-gray-900:where(.dark, .dark *) { ... }`.
```html
<body class="dark">
  <div class="bg-white dark:bg-gray-900">adapts to dark mode</div>
</body>
```
Toggle: `document.documentElement.classList.toggle('dark')`

### Shortcuts
Composable class aliases. Can nest other shortcuts. A bare key (`'btn'`) means `.btn`; any other key is a raw selector (`'h4, .h4'`).
```js
PostWind.shortcut('btn', 'px-4 py-2 rounded font-medium');
PostWind.shortcut('btn-primary', 'btn bg-blue-600 text-white');
```

### visible: prefix
IntersectionObserver-based. Adds `.pw-visible` class when 50% of the element is in the viewport, or when it fills 50% of the viewport height.
```html
<div class="opacity-0 transition visible:opacity-100">fades in on scroll</div>
```

### @ notation (property-first breakpoints)
`text-sm@m` becomes `m:text-sm`. The CSS selector uses the original `@` class name.
```html
<div class="text-sm@m text-2xl@d">breakpoint after class</div>
```

### onload: prefix
Adds a class 100ms after the page is revealed. JS-driven, never a stylesheet rule.
```html
<div class="opacity-0 transition onload:opacity-100">fades in on load</div>
```

### dark-auto
Add `dark-auto` to `<body>` to auto-detect OS dark mode and listen for changes.
```html
<body class="dark-auto"><!-- auto-adds .dark based on prefers-color-scheme --></body>
```

### Container queries (min-/max- width)
Element-width queries via ResizeObserver. Toggles inner classes based on the element's own width.
`min-480:flex` = add `flex` when element >= 480px wide
`max-320:hidden` = add `hidden` when element <= 320px wide
Pattern: `(min|max)-{number}:{class}`
Only classes PostWind added are removed; removing the query class drops its added class and stops observing.

### Preload classes
`init({ preload: 'mt-10px text-sm@m' })` pre-injects CSS for classes that aren't yet in the DOM. Accepts a space-separated string or an array. Useful for classes added dynamically later (e.g. via JS) to avoid flash of unstyled content.

### Body breakpoint class
`init({ body: true })` adds `mobile`/`tablet`/`desktop` class to `<body>` via `matchMedia` on the defined breakpoints.
- `mobile`: `m:` media matches (default < 768px)
- `desktop`: `d:` media matches (default >= 1024px)
- `tablet`: neither

### Anti-FOUC and entrance animations
`<body>` is hidden (`opacity:0`) and all transitions are suppressed until PostWind CSS is ready, then `body.pw-ready` is set. `onload:` classes are added 100ms after reveal and `visible:` observation starts at reveal, so entrance animations play from their initial state.

### Debug warnings
`init({ warn: true })` logs `[postwind] no CSS for "<class>"` with a hint for PostWind classes that resolve to nothing, once per class. Off by default.
Unknown `init()` options always log `[postwind] unknown init option "<key>"`.

### CSP nonce
Inherits the loading `<script>` nonce; module builds pass `init({ nonce })`. Applied to every injected `<style>`.

### Tailwind CSS config
Tailwind v4 is configured in CSS. Put it in `<style type="text/tailwindcss">` tags or `init({ css })`: `@theme { --color-brand-500: #0066ff; }`, `@utility`, `@custom-variant`, `@source inline(...)`. `init({ preflight: false })` skips Tailwind's base reset.

### Shortcuts cascade
Shortcuts compile into `@layer components`, so a utility on the same element wins (`class="btn p-0"` has no padding). Classes Tailwind does not know are dropped from the shortcut (logged with `warn: true`).

## Public API

```js
PostWind.init({ shortcuts: {...}, breakpoints: {...}, css: '@theme {...}', preflight: true, body: true, preload: 'mt-10px text-sm@m', warn: false, nonce: null })
PostWind.shortcut(name, classes) // returns Promise (recompiles when called after init)
PostWind.breakpoint(name, mediaQuery) // same
PostWind.resolve(className)     // returns Promise<cssText> (rule as Tailwind emits it, aliased to the given class)
PostWind.ready()                // returns Promise (resolved when the stylesheet is built)
PostWind.version                // release version baked in at build time
PostWind(className)             // inject CSS for a class (returns Promise)
```

## Build

```bash
bun run build    # builds dist/ (ESM, IIFE global, minified variants)
bun run start    # serves example/ for development (run build first)
bun test src/    # builds, then runs the inline browser tests via Playwright
bun run deploy   # release; version = main commit count + 100, dotted (v151 -> 1.5.1)
```

## Key files

- `src/postwind.js` — the library
- `src/engine.js` — Tailwind compiler wrapper
- `example/index.html` — demo page + inline tests (single source of truth for tests)
- `example/test-existing-layers.html` — regression page: own `@layer` rules + `preflight: false`
