/**
 * Surface probe for semi-diameter work.
 *
 * Answers the two questions that decide whether a proposed `sd` is allowed:
 *
 *   --scan <label>    How far out does this surface stay physical? Prints sag,
 *                     departure from the paraxial sphere, and rim slope against
 *                     height. Transcribed aspheric polynomials are only valid
 *                     over the aperture they were fitted on and diverge outside
 *                     it — watch for the slope changing sign, which is the
 *                     surface turning over. Never take an `sd` past that height.
 *
 *   --sd <label>=<mm> Run the full validator with those semi-diameters
 *                     substituted (edge thickness, SD ratio, rim slope, conic
 *                     height, cross-gap sag intrusion) without touching the file.
 *
 * With no flags it validates the file as stored.
 *
 * Usage:
 *   node --import ./scripts/ts-js-specifier-hook-register.mjs \
 *     scripts/audit-surface-probe.mjs <data.ts> [--scan <label> [maxHeight]] [--sd L=mm ...]
 *
 * The `--import` hook is required: the validator reaches a value import written
 * with a ".js" specifier, which plain Node cannot resolve to the ".ts" source.
 */

import { join } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = join(import.meta.dirname, "..");
const { conicPolySag, sag, sagSlopeRaw } = await import(
  pathToFileURL(join(ROOT, "src/optics/internal/surfaceMath.ts")).href
);
const validateLensData = (await import(pathToFileURL(join(ROOT, "src/optics/validateLensData.ts")).href)).default;
const LENS_DEFAULTS = (await import(pathToFileURL(join(ROOT, "src/lens-data/defaults.ts")).href)).default;

const argv = process.argv.slice(2);
const dataFile = argv[0];
if (!dataFile) {
  console.error(
    "usage: node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-surface-probe.mjs <data.ts> [--scan <label> [max]] [--sd L=mm ...]",
  );
  process.exit(2);
}
const lens = (await import(pathToFileURL(join(process.cwd(), dataFile)).href)).default;

/* ── --scan: how far can this surface be drawn? ── */
const scanIndex = argv.indexOf("--scan");
if (scanIndex >= 0) {
  const label = argv[scanIndex + 1];
  const surface = lens.surfaces.find((candidate) => candidate.label === label);
  if (!surface) throw new Error(`no surface labelled "${label}"`);
  const asphere = lens.asph?.[label];
  const maxHeight = Number(argv[scanIndex + 2] ?? surface.sd * 2);

  console.log(
    `${lens.name}  surface ${label}  R=${surface.R}  sd(stored)=${surface.sd}  ${asphere ? "aspheric" : "spherical"}`,
  );
  console.log("     h      sag(mm)   departure(µm)     slope   angle°");
  let previousSlope = null;
  for (let step = 1; step <= 20; step++) {
    const height = (maxHeight * step) / 20;
    const surfaceSag = conicPolySag(height, surface.R, asphere);
    const departure = (surfaceSag - sag(height, surface.R)) * 1000;
    const slope = sagSlopeRaw(height, surface.R, asphere);
    const turnedOver = previousSlope !== null && Math.sign(slope) !== Math.sign(previousSlope);
    previousSlope = slope;
    console.log(
      `${height.toFixed(2).padStart(6)} ${surfaceSag.toFixed(4).padStart(12)} ${departure.toFixed(1).padStart(15)} ${slope
        .toFixed(3)
        .padStart(
          9,
        )} ${((Math.atan(slope) * 180) / Math.PI).toFixed(1).padStart(8)}${turnedOver ? "   <-- TURNS OVER: do not take sd past here" : ""}`,
    );
  }
  console.log("");
}

/* ── validation, optionally with substituted semi-diameters ── */
const overrides = new Map();
for (let index = 0; index < argv.length; index++) {
  if (argv[index] !== "--sd") continue;
  for (let next = index + 1; next < argv.length && !argv[next].startsWith("--"); next++) {
    const [label, value] = argv[next].split("=");
    overrides.set(label, Number(value));
  }
}

const candidate = structuredClone({ ...LENS_DEFAULTS, ...lens });
for (const surface of candidate.surfaces) if (overrides.has(surface.label)) surface.sd = overrides.get(surface.label);
for (const label of overrides.keys()) {
  if (!candidate.surfaces.some((surface) => surface.label === label)) console.log(`!! no surface labelled "${label}"`);
}

const errors = validateLensData(candidate);
if (overrides.size) console.log(`validating with ${[...overrides].map(([l, v]) => `${l}=${v}`).join(" ")}`);
if (!errors.length) console.log("OK — no validation errors");
else for (const error of errors) console.log(`ERR ${error}`);
process.exitCode = errors.length ? 1 : 0;
