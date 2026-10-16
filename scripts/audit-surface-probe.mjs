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
 *   --sd <label>=<mm> Run the full validator and canonical ingest, as buildLens
 *                     runs them, with those semi-diameters substituted (edge
 *                     thickness, SD ratio, rim slope, conic height, cross-gap
 *                     sag intrusion) without touching the file.
 *
 * With no flags it validates the file as stored. A file of either version is read
 * through canonical ingest's V1 view, so --scan reads a V2 file's aspheres and
 * restored flat radii as it reads a V1 file's; a file ingest refuses prints the
 * refusal's issues as ERR lines and exits 1.
 *
 * Usage:
 *   node --import ./scripts/ts-js-specifier-hook-register.mjs \
 *     scripts/audit-surface-probe.mjs <data.ts> [--scan <label> [maxHeight]] [--sd L=mm ...]
 *
 * The `--import` hook is required: the validator reaches a value import written
 * with a ".js" specifier, which plain Node cannot resolve to the ".ts" source.
 */

import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = join(import.meta.dirname, "..");
const { conicPolySag, sag, sagSlopeRaw } = await import(pathToFileURL(join(ROOT, "src/optics/geometry.ts")).href);
const { default: validateLensData, validateLensInput } = await import(
  pathToFileURL(join(ROOT, "src/optics/validateLensData.ts")).href
);
const {
  default: buildLens,
  ingestLens,
  isV1File,
  toLensData,
} = await import(pathToFileURL(join(ROOT, "src/optics/buildLens.ts")).href);

const argv = process.argv.slice(2);
const dataFile = argv[0];
if (!dataFile) {
  console.error(
    "usage: node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-surface-probe.mjs <data.ts> [--scan <label> [max]] [--sd L=mm ...]",
  );
  process.exit(2);
}
const lens = (await import(pathToFileURL(resolve(dataFile)).href)).default;

/** Print each error as an ERR line and set the exit code: 1 when there is any. */
function report(errors) {
  if (!errors.length) console.log("OK — no validation errors");
  else for (const error of errors) console.log(`ERR ${error}`);
  process.exitCode = errors.length ? 1 : 0;
}

/**
 * Canonical ingest's V1 view of a file of either version; an authored V1 file reads as written, with the schema
 * defaults. A refusal is returned as its issues.
 */
function ingestView(file) {
  try {
    return { view: toLensData(ingestLens(file)), errors: [] };
  } catch (error) {
    if (!Array.isArray(error?.issues)) throw error;
    return { view: null, errors: error.issues };
  }
}

/* Ingest first: a file ingest refuses has nothing to scan or validate. */
const stored = ingestView(lens);
if (!stored.view) {
  report(stored.errors);
  process.exit();
}

/* ── --scan: how far can this surface be drawn? ── */
const scanIndex = argv.indexOf("--scan");
if (scanIndex >= 0) {
  const label = argv[scanIndex + 1];
  const view = stored.view;
  const surface = view.surfaces.find((candidate) => candidate.label === label);
  if (!surface) throw new Error(`no surface labelled "${label}"`);
  const asphere = view.asph?.[label];
  const given = argv[scanIndex + 2];
  /* A derived stop stores no radius: unless a height is given, its scan runs to twice the radius the engine derives. */
  const derived =
    surface.sd === undefined && given === undefined
      ? buildLens(view).S.find((candidate) => candidate.label === label).sd
      : undefined;
  const maxHeight = Number(given ?? (surface.sd ?? derived) * 2);
  const storedSd = surface.sd ?? (derived === undefined ? "none" : `none, derived ${derived.toFixed(3)}`);

  console.log(
    `${view.name}  surface ${label}  R=${surface.R}  sd(stored)=${storedSd}  ${asphere ? "aspheric" : "spherical"}`,
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
    const sd = Number(value);
    if (!label || !Number.isFinite(sd) || sd <= 0) {
      console.error(`--sd expects <label>=<mm> with a finite positive value, got "${argv[next]}"`);
      process.exit(2);
    }
    overrides.set(label, sd);
  }
}

/* The file as authored, with the substituted semi-diameters, checked in the order buildLens checks it: the validator
 * first on a V1 file, then canonical ingest, whose refusals are errors too, then the validator on a V2 file's view. */
const candidate = structuredClone(lens);
for (const surface of candidate.surfaces) if (overrides.has(surface.label)) surface.sd = overrides.get(surface.label);
for (const label of overrides.keys()) {
  if (!candidate.surfaces.some((surface) => surface.label === label)) console.log(`!! no surface labelled "${label}"`);
}

let errors = isV1File(candidate) ? validateLensInput(candidate) : [];
if (errors.length === 0) {
  const { view, errors: refused } = ingestView(candidate);
  errors = view && !isV1File(candidate) ? validateLensData(view) : refused;
}
if (overrides.size) console.log(`validating with ${[...overrides].map(([l, v]) => `${l}=${v}`).join(" ")}`);
report(errors);
