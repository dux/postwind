# PostWind

PostWind is a browser runtime for [Tailwind CSS v4](https://tailwindcss.com) with extra syntax: pipe notation, shortcuts, scroll animations, dark mode, container queries, and more.
It bundles Tailwind's own compiler (one file, no CDN, no build step), so every standard Tailwind v4 class, variant and `@theme` setting works unchanged.

### Features unique to PostWind

- **Pipe responsive** — `p-4|8` or `p-4|8|12` for mobile/tablet/desktop in one class
- **Colon responsive** — `p-4:8` as alias for pipe notation
- **Unit suffixes** — `p-10px`, `mt-2rem`, `w-50%` without bracket syntax
- **@ notation** — `text-sm@m` instead of `m:text-sm` (breakpoint after class)
- **Shortcuts** — composable class aliases: `btn-primary` expands to multiple classes
- **visible:** — IntersectionObserver scroll animations: `visible:opacity-100`
- **onload:** — entrance animations: `onload:opacity-100` adds class 100ms after the page is revealed
- **dark:** — dark mode via a `.dark` class on `<html>`, `<body>` or any subtree: `dark:bg-gray-900`
- **dark-auto** — auto-detect OS dark mode on `<body class="dark-auto">`
- **Container queries** — `min-480:flex` / `max-320:hidden` based on element width (ResizeObserver)
- **Body breakpoint class** — `init({ body: true })` adds `mobile`/`tablet`/`desktop` to `<body>`, following the `m:`/`d:` breakpoints
- **m: t: d: prefixes** — short breakpoint aliases for mobile/tablet/desktop

## Setup

### Script tag

```html
<script src="https://cdn.jsdelivr.net/npm/postwind@latest"></script>
<script>
  PostWind.init({
    shortcuts: {
      'btn': 'px-4 py-2 rounded font-medium cursor-pointer transition-colors',
      'btn-primary': 'btn bg-blue-600 text-white hover:bg-blue-500',
    }
  });
</script>
```

One self-contained file (`dist/postwind.global.min.js`, ~90 KB gzip) that sets `window.PostWind` and includes the Tailwind v4 compiler.
`init()` is optional; without it PostWind starts with defaults on `DOMContentLoaded`.

### npm (ESM)

```js
import PostWind from 'postwind';

PostWind.init({
  shortcuts: { ... }
});
```

The ESM build is browser-only; imported on the server (SSR) it returns a no-op stub.

## Features

### Pipe notation (responsive)

Compact responsive values. 2 values = mobile|tablet, 3 values = mobile|tablet|desktop.

```html
<div class="p-4|8">padding: 16px mobile, 32px tablet+</div>
<div class="text-sm|base|2xl">3-breakpoint font size</div>
```

### Colon responsive notation

Colon as an alias for pipe:

```html
<div class="p-4:8">same as p-4|8</div>
<div class="p-4:8:12">same as p-4|8|12</div>
```

### Breakpoint prefixes

Short aliases: `m:` = mobile (max-width: 767px), `t:` = tablet (min-width: 768px), `d:` = desktop (min-width: 1024px).

```html
<div class="m:text-sm d:text-2xl">Small on mobile, large on desktop</div>
```

Breakpoints are compiled as Tailwind `@custom-variant`s sorted by width: `max-width` breakpoints widest first, then `min-width` breakpoints narrowest first, then any other media query.
So a narrower rule always comes first and the wider one wins, no matter when a breakpoint was registered or which class is discovered first.
Tailwind's own `sm:`/`md:`/`lg:`/`max-md:`/`@sm:` variants work as usual.

### Unit suffix shorthand

Write `p-10px` instead of `p-[10px]`. Supports px, rem, em, vh, vw, %, and more.

```html
<div class="p-10px mt-2rem w-50%">clean arbitrary values</div>
```

### Shortcuts

Composable class aliases defined at runtime. Can nest other shortcuts.

```js
PostWind.init({
  shortcuts: {
    'btn': 'px-4 py-2 rounded font-medium cursor-pointer transition-colors',
    'btn-primary': 'btn bg-blue-600 text-white hover:bg-blue-500',
    'btn-danger': 'btn bg-red-600 text-white hover:bg-red-500',
    'card': 'bg-white rounded-2xl border p-6 shadow-md',
  }
});
```

```html
<button class="btn-primary">Click me</button>
<div class="card">Card content</div>
```

A bare key (`'btn'`) is a class name and becomes `.btn`; any other key is used as a CSS selector (`'h4, .h4'`, `'.card > a'`).
They compile to `@apply` rules in Tailwind's `components` layer, so utilities on the same element override them: `<button class="btn p-0">` gets `p-0`.
Variants inside shortcuts work (`hover:bg-blue-500`, `t:px-6`); classes Tailwind does not know are dropped (reported with `warn: true`).

### `dark:` dark mode

Add `.dark` to `<html>`, `<body>` or any element to activate `dark:` classes on it and everything inside it.
PostWind compiles `dark:` as `&:where(.dark, .dark *)`.

```html
<body class="dark">
  <div class="bg-white dark:bg-gray-900 text-black dark:text-white">
    adapts to dark mode
  </div>
</body>

<aside class="dark">only this sidebar is dark</aside>
```

Toggle via JS:

```js
document.documentElement.classList.toggle('dark');
```

### `dark-auto` (auto-detect OS preference)

Add `dark-auto` to `<body>` to automatically detect OS dark mode preference and listen for changes.

```html
<body class="dark-auto">
  <!-- automatically adds .dark class based on OS prefers-color-scheme -->
</body>
```

### `@` notation (property-first breakpoints)

Write the breakpoint suffix after the class with `@`. `text-sm@m` becomes `m:text-sm`.

```html
<div class="text-sm@m text-2xl@d">small on mobile, large on desktop</div>
<div class="flex@d hidden@m">desktop flex, mobile hidden</div>
```

### `onload:` prefix

Adds a class 100ms after the page is revealed (PostWind hides `<body>` and suppresses transitions until its CSS is ready, so entrance animations always start from their initial state). Useful for entrance animations.

```html
<div class="opacity-0 transition duration-500 onload:opacity-100">
  fades in on page load
</div>
```

### Container queries (`min-`/`max-` width)

Element-width container queries using ResizeObserver. Toggles inner classes based on the element's own width (not viewport), which CSS container queries cannot do.
PostWind only removes classes it added, so a class you wrote yourself (`class="block min-480:block"`) is never stripped.

```html
<div class="min-480:flex">becomes flex when this element is >= 480px wide</div>
<div class="max-320:hidden">hidden when this element is <= 320px wide</div>
```

### Body breakpoint class

Adds `mobile`, `tablet`, or `desktop` class to `<body>`: `mobile` when the `m:` media query matches, `desktop` when `d:` matches, `tablet` otherwise.
It follows custom `m`/`d` breakpoints and updates on change. Opt-in via `init({ body: true })`.

```js
PostWind.init({ body: true });
```

```html
<!-- default breakpoints: "mobile" (<768px), "tablet" (768-1023px), "desktop" (>=1024px) -->
<style>
  body.mobile .sidebar { display: none; }
</style>
```

### `visible:` scroll animations

IntersectionObserver-based. Classes activate when half of the element is visible, or when it fills half of the viewport (so very tall sections work too).

```html
<div class="opacity-0 translate-y-8 transition duration-700 visible:opacity-100 visible:translate-y-0">
  slides up and fades in when scrolled into view
</div>
```

## API

```js
PostWind.init(options)            // initialize (shortcuts, breakpoints, css, preflight, body, preload, warn, nonce)
PostWind.shortcut(name, classes)  // register a shortcut
PostWind.breakpoint(name, media)  // register a breakpoint
PostWind.resolve(className)       // resolve a class to CSS without injecting it (Promise)
PostWind.ready()                  // Promise that resolves when Tailwind is ready
PostWind.version                  // release version of the loaded build, e.g. "1.5.1"
PostWind(className)               // inject CSS for a class (Promise)
```

### Debug warnings

`init({ warn: true })` logs a `console.warn` for every PostWind class that produces no CSS, with a hint (`[postwind] no CSS for "d:pading-4" ("pading-4" is not a Tailwind class)`).
Off by default; plain Tailwind classes are never checked.
Unknown `init()` options always log a warning.

### CSP nonce

PostWind inherits the `nonce` of the `<script>` tag that loaded it.
Module builds have no script tag, so pass `init({ nonce })`; it is applied to every injected `<style>`.

### Tailwind configuration

Tailwind v4 is configured in CSS, and PostWind passes that CSS straight to the compiler.
Either put it in `<style type="text/tailwindcss">` tags or in `init({ css })`:

```html
<style type="text/tailwindcss">
  @theme { --color-brand-500: #0066ff; --font-display: "Inter", sans-serif; }
  @utility card { @apply rounded-2xl border p-6 shadow-md; }
</style>
```

```js
PostWind.init({ css: '@theme { --breakpoint-xl: 80rem; }', preflight: false });
```

`preflight: false` skips Tailwind's base reset for pages that bring their own.

## Development

```bash
bun run dev      # start dev server (port 8000) + watch/rebuild dist
bun run start    # start dev server only
bun run build    # production build (dist/)
bun run test     # run tests via Playwright
bun run deploy   # stamp version, test + build, npm publish, commit release, push main (--dry-run to try)
```

The version is the number of commits on `main` (including the release commit) plus 100, written dotted like Fez: 151 commits -> `1.5.1`.
The raw stamp is kept in `.version`; the bundle exposes it as `PostWind.version`.

Tests are defined in `example/index.html` as inline browser tests. `bun test` launches Playwright, loads the demo page, and reads the results — single source of truth, no duplication.

### Project structure

```
src/postwind.js       # the library (ES module, sets window.PostWind)
src/engine.js         # wraps the tailwindcss compiler + its bundled stylesheets
src/postwind.test.js  # Playwright test runner
example/index.html    # demo page + inline tests
bin/server.js         # dev server
bin/deploy.js         # release: version stamp, npm publish, release commit, push
dist/                 # built output: ESM, IIFE (global), minified variants
```

## How it works

PostWind bundles the `tailwindcss` v4 compiler and is the only stylesheet generator on the page.

1. On `DOMContentLoaded` it compiles `@import "tailwindcss"` plus PostWind's `@custom-variant`s (`m:`, `t:`, `d:`, `dark:`, `visible:`), your `@theme`/`@utility` CSS and the shortcuts as `@apply` rules
2. Every class on every element is a candidate; PostWind sugar is rewritten first (`p-10px` -> `p-[10px]`, `p-4|8|12` -> `p-4 t:p-8 d:p-12`, `text-sm@m` -> `m:text-sm`)
3. `compiler.build(candidates)` produces one layered stylesheet, and rewritten classes are aliased onto their Tailwind rules with `:is(.p-\[10px\], .p-10px)` so they keep Tailwind's cascade order and specificity
4. The result goes into `<style id="postwind">`; the body is revealed once it is in place

A MutationObserver feeds dynamically added elements and class changes to the same pipeline, batched to one rebuild per animation frame (before paint).
A new class rebuilds the whole stylesheet (a few ms) while known classes cost nothing, so use inline styles, not `w-[${x}px]` classes, for values that change every frame.
A late `<style type="text/tailwindcss">`, `shortcut()` or `breakpoint()` recompiles (about 10 ms).

## Browser support

Any browser that supports Tailwind CSS v4 (CSS nesting, `@layer`, `color-mix()`, `@property`).

## License

MIT
