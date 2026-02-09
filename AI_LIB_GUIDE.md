# PostWind - AI Library Guide

PostWind is a lightweight (~420 lines) runtime extension for Tailwind CSS v4 browser runtime. It runs entirely in the browser — no build step needed for development. All standard Tailwind classes work unchanged; PostWind only adds extra syntax.

## Architecture

Single source file: `src/postwind.js` — a browser IIFE that sets `window.PostWind`.

Two ESM entry points for npm:
- `src/bundle.js` — auto-loads Tailwind CDN, re-exports PostWind (default `import PostWind from 'postwind'`)
- `src/lib.js` — exports PostWind without Tailwind CDN (user loads Tailwind themselves)

## How it works

1. PostWind creates two `<style>` elements: `postwind-main` (pipes, breakpoints, units, visible:) and `postwind-shortcuts` (shortcut classes)
2. When it encounters a PostWind class (pipe, shortcut, breakpoint prefix, unit suffix, visible:), it:
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

## Public API

```js
PostWind.init({ tailwind: true, shortcuts: {...}, breakpoints: {...} })
PostWind.shortcut(name, classes)
PostWind.breakpoint(name, mediaQuery)
PostWind.resolve(className)     // returns Promise<cssText>
PostWind.twCSS(className)       // returns Promise<cssDeclarations>
PostWind.ready()                // returns Promise (resolved when Tailwind is ready)
PostWind(className)             // inject CSS for a class (returns Promise)
PostWind.cache                  // object of cached class promises
PostWind.observeVisible(el)     // manually observe an element for visible: classes
```

## Build

```bash
bun run build    # builds dist/ (ESM, CJS, minified variants)
bun run start    # serves example/ for development
```

## Key files

- `src/postwind.js` — entire library (420 lines)
- `src/bundle.js` — ESM entry with Tailwind CDN auto-load
- `src/lib.js` — ESM entry without Tailwind CDN
- `example/index.html` — demo page
