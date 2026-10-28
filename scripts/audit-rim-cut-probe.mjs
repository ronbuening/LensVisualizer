/**
 * Dense rim-cut probe: a brute-force check of a lens's inferred rim cuts against its wide-open beams, independent of
 * the beam rule's search (`rimCutDenseProbe`, from the validation seam).
 *
 * Per inferred cut it prints the furthest grid ray and where it is, the furthest ray once each state's own is refined,
 * and how many grid rays the cut would clip and how many come within its margin. It exits 1 when a refined ray comes
 * within a cut's margin or a field cannot be launched.
 *
 * Usage:
 *   node --import ./scripts/ts-js-specifier-hook-register.mjs \
 *     scripts/audit-rim-cut-probe.mjs <data.ts> [--grid 41] [--field-step 0.5] [--control-step 0.05]
 *
 * The `--import` hook is required: the engine reaches value imports written with ".js" specifiers.
 */

import { join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const ROOT = join(import.meta.dirname, "..");
const { default: buildLens, ingestLens } = await import(pathToFileURL(join(ROOT, "src/optics/buildLens.ts")).href);
const { rimCutDenseProbe } = await import(pathToFileURL(join(ROOT, "src/optics/validation.ts")).href);

const argv = process.argv.slice(2);
const dataFile = argv[0];
const option = (name, fallback) => {
  const index = argv.indexOf(name);
  return index > 0 ? Number(argv[index + 1]) : fallback;
};
if (!dataFile) {
  console.error(
    "usage: node --import ./scripts/ts-js-specifier-hook-register.mjs scripts/audit-rim-cut-probe.mjs <data.ts> [--grid 41] [--field-step 0.5] [--control-step 0.05]",
  );
  process.exit(2);
}
const grid = option("--grid", 41);
const fieldStep = option("--field-step", 0.5);
const controlStep = option("--control-step", 0.05);

const file = (await import(pathToFileURL(resolve(dataFile)).href)).default;
const L = buildLens(ingestLens(file, { path: dataFile }).prescription);
const probe = rimCutDenseProbe(L, { grid, fieldStep, controlStep });
if (probe.cuts.length === 0) {
  console.log("No inferred rim cuts to probe.");
  process.exit(0);
}

const where = (at) =>
  at ? `zoom ${at.zoomT.toFixed(3)}, focus ${at.focusT.toFixed(3)}, field ${at.fieldDeg.toFixed(3)}°` : "no ray";
console.log(
  `${L.source?.key ?? dataFile}: ${probe.zoomStates} zoom × ${probe.focusStates} focus states, grid ${grid}, field step ${fieldStep}°, ${probe.rays} rays in the beams`,
);
for (const cut of probe.cuts) {
  const verdict = cut.reach > cut.cutRadius - cut.margin ? "INSIDE MARGIN" : "clear";
  console.log(
    `  ${cut.label.padEnd(5)} cut ${cut.cutRadius.toFixed(4)} margin ${cut.margin.toFixed(4)} grid reach ${cut.gridReach.toFixed(4)} at ${where(cut.gridAt)}; refined ${cut.reach.toFixed(4)} at ${where(cut.at)}; clipped ${cut.clipped}, within margin ${cut.withinMargin}: ${verdict}`,
  );
}
if (probe.untraced.length > 0)
  console.log(
    `  ${probe.untraced.length} fields cannot be launched, first ${where(probe.untraced[0])}: ${probe.untraced[0].reason}`,
  );
process.exitCode =
  probe.cuts.some((cut) => cut.reach > cut.cutRadius - cut.margin) || probe.untraced.length > 0 ? 1 : 0;
