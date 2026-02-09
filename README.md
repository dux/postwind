# PostWind

PostWind is a lightweight runtime extension for [Tailwind CSS v4](https://tailwindcss.com) browser runtime. It adds pipe notation, shortcuts, scroll animations, dark mode, container queries, and more — all in a single ~500-line file. Every standard Tailwind class works unchanged.

### Features unique to PostWind

- **Pipe responsive** — `p-4|8` or `p-4|8|12` for mobile/tablet/desktop in one class
- **Colon responsive** — `p-4:8` as alias for pipe notation
- **Unit suffixes** — `p-10px`, `mt-2rem`, `w-50%` without bracket syntax
- **@ notation** — `text-sm@m` instead of `m:text-sm` (breakpoint after class)
- **Shortcuts** — composable class aliases: `btn-primary` expands to multiple classes
- **visible:** — IntersectionObserver scroll animations: `visible:opacity-100`
- **onload:** — entrance animations: `onload:opacity-100` adds class after 100ms
- **dark:** — dark mode via `body.dark` class: `dark:bg-gray-900`
- **dark-auto** — auto-detect OS dark mode on `<body class="dark-auto">`
- **Container queries** — `min-480:flex` / `max-320:hidden` based on element width (ResizeObserver)
- **Body breakpoint class** — `init({ body: true })` adds `mobile`/`tablet`/`desktop` to `<body>`
- **m: t: d: prefixes** — short breakpoint aliases for mobile/tablet/desktop

## Setup

### CDN / script tag

```html
<script src="https://cdn.jsdelivr.net/npm/postwind@latest/src/postwind.js"></script>
<script>
  PostWind.init({
    tailwind: true,
    shortcuts: {
      'btn': 'px-4 py-2 rounded font-medium cursor-pointer transition-colors',
      'btn-primary': 'btn bg-blue-600 text-white hover:bg-blue-500',
    }
  });
</script>
```

Loads the IIFE directly — sets `window.PostWind`, no bundler needed. Pass `tailwind: true` to auto-load the Tailwind CSS v4 browser runtime from CDN.

### npm (ESM)

```js
import PostWind from 'postwind'; // auto-loads Tailwind CDN

PostWind.init({
  shortcuts: { ... }
});
```

The default import auto-injects the Tailwind CDN script. If you already load Tailwind yourself, use the lib-only import:

```js
import PostWind from 'postwind/lib'; // no Tailwind CDN injection
```

### npm (CJS)

```js
const PostWind = require('postwind');
```

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

Shortcut CSS goes into `<style id="postwind-shortcuts">`, everything else into `<style id="postwind-main">`.

### `dark:` dark mode

Add `.dark` to `<body>` to activate all `dark:` prefixed classes. PostWind generates `body.dark .dark\:class` selectors.

```html
<body class="dark">
  <div class="bg-white dark:bg-gray-900 text-black dark:text-white">
    adapts to dark mode
  </div>
</body>
```

Toggle via JS:

```js
document.body.classList.toggle('dark');
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

Adds a class 100ms after page load. Useful for entrance animations.

```html
<div class="opacity-0 transition duration-500 onload:opacity-100">
  fades in on page load
</div>
```

### Container queries (`min-`/`max-` width)

Element-width container queries using ResizeObserver. Toggles inner classes based on the element's own width (not viewport).

```html
<div class="min-480:flex">becomes flex when this element is >= 480px wide</div>
<div class="max-320:hidden">hidden when this element is <= 320px wide</div>
```

### Body breakpoint class

Adds `mobile`, `tablet`, or `desktop` class to `<body>` based on viewport width. Opt-in via `init({ body: true })`.

```js
PostWind.init({ body: true });
```

```html
<!-- body gets class="mobile" (<768px), "tablet" (768-1023px), or "desktop" (>=1024px) -->
<style>
  body.mobile .sidebar { display: none; }
</style>
```

### `visible:` scroll animations

IntersectionObserver-based. Classes activate when element is 50% visible in the viewport.

```html
<div class="opacity-0 translate-y-8 transition duration-700 visible:opacity-100 visible:translate-y-0">
  slides up and fades in when scrolled into view
</div>
```

## API

```js
PostWind.init(options)            // initialize (tailwind, shortcuts, breakpoints, body)
PostWind.shortcut(name, classes)  // register a shortcut
PostWind.breakpoint(name, media)  // register a breakpoint
PostWind.resolve(className)       // resolve a class to CSS (Promise)
PostWind.twCSS(className)         // get Tailwind CSS for a class (Promise)
PostWind.ready()                  // Promise that resolves when Tailwind is ready
PostWind(className)               // inject CSS for a class (Promise)
PostWind.cache                    // object of cached class promises
PostWind.observeVisible(el)       // manually observe element for visible: classes
PostWind.processElement(el)       // manually process all PostWind classes on an element
```

## Development

```bash
bun run dev      # start dev server (port 8000) + watch/rebuild dist
bun run start    # start dev server only
bun run build    # production build (dist/)
bun run test     # run tests via Playwright
bun run publish  # bump patch version, build, test, publish to npm
```

Tests are defined in `example/index.html` as inline browser tests. `bun test` launches Playwright, loads the demo page, and reads the results — single source of truth, no duplication.

### Project structure

```
src/postwind.js    # entire library (~500 lines, browser IIFE)
src/bundle.js      # ESM entry — auto-loads Tailwind CDN
src/lib.js         # ESM entry — no Tailwind CDN
src/postwind.test.js  # Playwright test runner
example/index.html # demo page + inline tests
bin/server.js      # dev server
dist/              # built output (ESM, CJS, minified)
```

## How it works

PostWind runs in the browser alongside `@tailwindcss/browser`. When it encounters a PostWind class (pipe notation, shortcut, breakpoint prefix, unit suffix, `visible:`, `dark:`, `onload:`, `@` notation, or container query), it:

1. Creates a temporary DOM element with the equivalent Tailwind class
2. Waits for Tailwind to generate CSS (via `requestAnimationFrame`)
3. Reads the CSS from `document.styleSheets`
4. Re-wraps it with the PostWind selector and media queries
5. Appends to `<style id="postwind-main">` or `<style id="postwind-shortcuts">`

A MutationObserver automatically processes dynamically added elements.

## Browser support

Requires `@tailwindcss/browser` v4+ and any modern browser.

## License

MIT
