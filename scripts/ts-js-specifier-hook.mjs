/**
 * Module resolution hook mapping the project's ESM-style ".js" specifiers onto
 * the ".ts" sources on disk.
 *
 * Node strips TypeScript types natively, so `src/**` modules can be imported by
 * plain `node` — but only if their relative specifiers resolve. Vite rewrites
 * `./foo.js` to `./foo.ts` at build time; Node does not, so a script importing
 * anything that reaches a value import (rather than a type-only one) fails.
 *
 * Register it before importing such a module:
 *
 *   node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/whatever.mjs
 */

import { existsSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";

/** Resolve `./x.js` to `./x.ts` when only the TypeScript source exists. */
export async function resolve(specifier, context, nextResolve) {
  if (!specifier.endsWith(".js") || !(specifier.startsWith(".") || specifier.startsWith("/"))) {
    return nextResolve(specifier, context);
  }
  try {
    return await nextResolve(specifier, context);
  } catch (error) {
    const base = context.parentURL ?? pathToFileURL(`${process.cwd()}/`).href;
    const typescriptUrl = new URL(specifier.replace(/\.js$/, ".ts"), base);
    if (!existsSync(fileURLToPath(typescriptUrl))) throw error;
    return { url: typescriptUrl.href, shortCircuit: true, format: "module-typescript" };
  }
}
