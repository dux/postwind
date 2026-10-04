* when you need to write CSS, consult AI_LIB_GUIDE.md
* when you add new features, ensure related tests exists.
* demo is ./example/index.html
* use bun, not npm
* after you are done with work and changes, run "bun run build"
* the demo and tests load ./dist/postwind.global.js (Tailwind compiler bundled in), so build before opening the demo; "bun test src/" builds by itself
* release with "bun run deploy" (needs a clean main): version = main commit count + 100, dotted like fez (v151 -> 1.5.1); never bump package.json by hand
