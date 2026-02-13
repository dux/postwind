# PostWind - AI Library Guide (css and js guide)

PostWind is a lightweight (~500 lines) runtime extension for Tailwind CSS v4 browser runtime. It runs entirely in the browser — no build step needed for development. All standard Tailwind classes work unchanged; PostWind only adds extra syntax.

## Architecture

Single source file: `src/postwind.js` — a browser IIFE that sets `window.PostWind`.

Two ESM entry points for npm:
- `src/bundle.js` — auto-loads Tailwind CDN, re-exports PostWind (default `import PostWind from 'postwind'`)
- `src/lib.js` — exports PostWind without Tailwind CDN (user loads Tailwind themselves)

## How it works

1. PostWind creates two `<style>` elements: `postwind-main` (pipes, breakpoints, units, visible:, dark:, @notation) and `postwind-shortcuts` (shortcut classes)
2. When it encounters a PostWind class (pipe, shortcut, breakpoint prefix, unit suffix, visible:, dark:, onload:, @notation, container query), it:
   - Creates a temp DOM element with the equivalent Tailwind class
   - Waits one `requestAnimationFrame` for Tailwind to generate CSS
   - Reads the CSS from `document.styleSheets`
   - Re-wraps it with the PostWind selector and any media queries
   - Appends to the appropriate `<style>` element
3. MutationObserver auto-processes dynamically added elements

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
Dark mode via `body.dark` class. `dark:bg-gray-900` generates `body.dark .dark\:bg-gray-900 { ... }`.
```html
<body class="dark">
  <div class="bg-white dark:bg-gray-900">adapts to dark mode</div>
</body>
```
Toggle: `document.body.classList.toggle('dark')`

### Shortcuts
Composable class aliases. Can nest other shortcuts.
```js
PostWind.shortcut('btn', 'px-4 py-2 rounded font-medium');
PostWind.shortcut('btn-primary', 'btn bg-blue-600 text-white');
```

### visible: prefix
IntersectionObserver-based. Adds `.pw-visible` class when element is 50% in viewport.
```html
<div class="opacity-0 transition visible:opacity-100">fades in on scroll</div>
```

### @ notation (property-first breakpoints)
`text-sm@m` becomes `m:text-sm`. The CSS selector uses the original `@` class name.
```html
<div class="text-sm@m text-2xl@d">breakpoint after class</div>
```

### onload: prefix
Adds a class 100ms after page load. Handled in `processElement()`, not `resolve()`.
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

### Preload classes
`init({ preload: 'mt-10px text-sm@m' })` pre-injects CSS for classes that aren't yet in the DOM. Accepts a space-separated string or an array. Useful for classes added dynamically later (e.g. via JS) to avoid flash of unstyled content.

### Body breakpoint class
`init({ body: true })` adds `mobile`/`tablet`/`desktop` class to `<body>` based on viewport width. Updates on resize.
- `mobile`: < 768px
- `tablet`: 768px - 1023px
- `desktop`: >= 1024px

## Public API

```js
PostWind.init({ tailwind: true, shortcuts: {...}, breakpoints: {...}, body: true, preload: 'mt-10px text-sm@m' })
PostWind.shortcut(name, classes)
PostWind.breakpoint(name, mediaQuery)
PostWind.resolve(className)     // returns Promise<cssText>
PostWind.twCSS(className)       // returns Promise<cssDeclarations>
PostWind.ready()                // returns Promise (resolved when Tailwind is ready)
PostWind(className)             // inject CSS for a class (returns Promise)
PostWind.cache                  // object of cached class promises
PostWind.observeVisible(el)     // manually observe an element for visible: classes
PostWind.processElement(el)     // manually process all PostWind classes on an element
```

## Build

```bash
bun run build    # builds dist/ (ESM, CJS, minified variants)
bun run start    # serves example/ for development
```

## Key files

- `src/postwind.js` — entire library (~500 lines)
- `src/bundle.js` — ESM entry with Tailwind CDN auto-load
- `src/lib.js` — ESM entry without Tailwind CDN
- `example/index.html` — demo page
