// Release version, mirroring fez: ./.version holds v<main commit count + OFFSET>,
// stamped by bin/deploy.js. It renders dotted - b and c are the last two digits
// of the count, a is the rest: v151 -> v1.5.1, v1123 -> v11.2.3. Anything else
// is returned unchanged.
// OFFSET keeps releases above the 0.x versions published before this scheme.
export const OFFSET = 100;

export function formatVersion(raw) {
  const count = /^v(\d+)$/.exec(String(raw).trim())?.[1];
  if (!count) {
    return String(raw).trim();
  }
  const digits = count.padStart(3, "0");
  return `v${Number(digits.slice(0, -2))}.${digits.at(-2)}.${digits.at(-1)}`;
}

// raw stamp for a main branch with `count` commits
export function stampFor(count) {
  return `v${count + OFFSET}`;
}
