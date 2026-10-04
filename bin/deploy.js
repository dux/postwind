#!/usr/bin/env bun

import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { formatVersion, stampFor } from "./version.js";

const USAGE = `Usage: bun run deploy [--dry-run]

Release PostWind: stamp .version with the main commit count + 100 (counting the
release commit; v151 -> 1.5.1) and package.json with its dotted form, run the
tests (they build dist/), npm publish, commit "chore: release <version>" with
package.json, .version and dist/, then push main.
Requires a clean main checkout that is ahead of or equal to origin/main.

Options:
  --dry-run   stamp, test and build, then restore .version and package.json; no publish, commit or push
  -h, --help  show this description
`;

function run(command, args, options = {}) {
  try {
    return execFileSync(command, args, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"], ...options });
  } catch (error) {
    const detail = [error.stdout, error.stderr].filter(Boolean).join("").trim();
    throw new Error(`${command} ${args.join(" ")} failed${detail ? "\n" + detail : ""}`);
  }
}

const git = (...args) => run("git", args).trim();

// 1.5.1 > 0.6.1
function newer(a, b) {
  const pa = a.split(".").map(Number);
  const pb = b.split(".").map(Number);
  for (let i = 0; i < 3; i++) if (pa[i] !== pb[i]) return pa[i] > pb[i];
  return false;
}

function deploy(args) {
  if (args.includes("--help") || args.includes("-h")) {
    process.stdout.write(USAGE);
    return;
  }
  if (args.some((arg) => arg !== "--dry-run")) {
    throw new Error("Unknown option. See bun run deploy --help.");
  }
  const dryRun = args.includes("--dry-run");
  const root = git("rev-parse", "--show-toplevel");
  process.chdir(root);
  if (git("branch", "--show-current") !== "main") {
    throw new Error("Switch to main before deploying.");
  }
  if (git("status", "--porcelain")) {
    throw new Error("Commit all changes before deploying; main must be clean.");
  }

  const manifestPath = path.join(root, "package.json");
  const originalManifest = fs.readFileSync(manifestPath, "utf8");
  const manifest = JSON.parse(originalManifest);
  // +1: the release commit made below is part of the count it is named after
  const stamp = stampFor(Number(git("rev-list", "--count", "main")) + 1);
  const version = formatVersion(stamp).slice(1);
  const versionPath = path.join(root, ".version");
  // [path, content before the deploy (null when missing), stamped content]
  const stamped = [
    [manifestPath, originalManifest, JSON.stringify({ ...manifest, version }, null, 2) + "\n"],
    [versionPath, fs.existsSync(versionPath) ? fs.readFileSync(versionPath, "utf8") : null, `${stamp}\n`],
  ];

  if (!dryRun) {
    git("fetch", "--prune", "origin");
    git("merge-base", "--is-ancestor", "origin/main", "HEAD");
    const latest = run("npm", ["view", manifest.name, "version"]).trim();
    if (!newer(version, latest)) {
      throw new Error(`${version} is not newer than the published ${latest}.`);
    }
  }

  let published = false;
  try {
    for (const [file, , next] of stamped) fs.writeFileSync(file, next);
    process.stdout.write(`deploy: ${manifest.version} -> ${version} (${stamp})\n`);
    run("bun", ["test", "src/"], { stdio: "inherit" });
    if (!fs.readFileSync(path.join(root, "dist/postwind.global.min.js"), "utf8").includes(`"${version}"`)) {
      throw new Error(`dist/ does not carry version ${version}.`);
    }
    if (dryRun) {
      process.stdout.write("deploy: dry run built successfully; no publish, commit or push.\n");
      return;
    }

    // interactive, so npm can ask for a 2FA code
    run("npm", ["publish"], { stdio: "inherit" });
    published = true;
    process.stdout.write(`deploy: published ${manifest.name}@${version}\n`);

    git("add", "--", "package.json", ".version", "dist/");
    git("commit", "-m", `chore: release ${version}`);
    process.stdout.write(`${git("rev-parse", "--short", "HEAD")} chore: release ${version}\n`);
    git("push", "origin", "refs/heads/main:refs/heads/main");
    process.stdout.write("deploy: pushed main to origin.\n");
  } finally {
    // until npm has the version, a failed or dry run leaves no trace
    if (!published) {
      for (const [file, original, next] of stamped) {
        if (!fs.existsSync(file) || fs.readFileSync(file, "utf8") !== next) continue;
        if (original === null) fs.rmSync(file);
        else fs.writeFileSync(file, original);
      }
      run("bun", ["run", "build"]);
    }
  }
}

try {
  deploy(process.argv.slice(2));
} catch (error) {
  console.error(`deploy: ${error.message}`);
  process.exit(1);
}
