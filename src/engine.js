// Thin wrapper over the Tailwind v4 compiler. Bun inlines the four stylesheet
// assets as strings so the built bundle is self-contained.
import { compile, __unstable__loadDesignSystem } from "tailwindcss";
import indexCss from "tailwindcss/index.css" with { type: "text" };
import themeCss from "tailwindcss/theme.css" with { type: "text" };
import preflightCss from "tailwindcss/preflight.css" with { type: "text" };
import utilitiesCss from "tailwindcss/utilities.css" with { type: "text" };

// virtual files resolved for @import inside the compile input
const assets = {
  tailwindcss: indexCss,
  "tailwindcss/index.css": indexCss,
  "tailwindcss/theme.css": themeCss,
  "tailwindcss/preflight.css": preflightCss,
  "tailwindcss/utilities.css": utilitiesCss,
};

const options = {
  base: "/",
  async loadStylesheet(id, base) {
    const content = assets[id] ?? assets[id + ".css"];
    if (content === undefined) {
      throw new Error(`[postwind] unsupported @import "${id}"`);
    }
    return { base, content };
  },
};

// build(candidates) returns the full stylesheet for every candidate seen so far
export function createCompiler(css) {
  return compile(css, options);
}

// candidatesToCss(list) gives per-class CSS (null for unknown classes)
export function loadDesignSystem(css) {
  return __unstable__loadDesignSystem(css, options);
}
