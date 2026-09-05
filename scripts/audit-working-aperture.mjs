/** Targeted catalog audit of centered working aperture. Does not validate patent prescriptions.
 * npm run audit:working-aperture -- [data.ts ...] [--output report.json]
 * Reports ordinary clipping separately from unavailable rays. Fails only on execution errors,
 * shared-report disagreement, or discontinuities across the former infinity cutoffs.
 */
import { readdirSync, writeFileSync } from "node:fs";
import { resolve, relative } from "node:path";
import { pathToFileURL } from "node:url";
import buildLens from "../src/optics/buildLens.ts";
import { prepareRuntimeState } from "../src/optics/state/runtimeState.ts";
import { apertureMetricsForState, resolveApertureStop } from "../src/optics/first-order/aperture.ts";
import { effectiveFNumber2 } from "../src/optics/first-order/fNumber.ts";
import { computeOpticalSummaryForState2 } from "../src/optics/analysis/summary.ts";

const root = resolve(import.meta.dirname, "..");
const lensDir = resolve(root, "src/lens-data");
const args = process.argv.slice(2);
const outputIndex = args.indexOf("--output");
let output;
if (outputIndex >= 0) {
  output = args[outputIndex + 1];
  if (!output || output.startsWith("--")) throw new Error("--output requires a JSON file path");
  args.splice(outputIndex, 2);
}
if (args.some((arg) => arg.startsWith("--"))) throw new Error("Unknown option");
const files = args.length
  ? args.map((file) => resolve(file))
  : readdirSync(lensDir, { recursive: true })
      .filter((file) => file.endsWith(".data.ts") && !file.startsWith("reference/"))
      .map((file) => resolve(lensDir, file))
      .sort();
const focusSamples = [0, 0.0001 - 1e-8, 0.0001 + 1e-8, 0.003 - 1e-8, 0.003 + 1e-8, 0.25, 0.5, 1];
const totals = { lenses: 0, foldedSkipped: 0, states: 0, ok: 0, clipped: 0, failed: 0, degenerate: 0, unsupported: 0 };
const lenses = [],
  errors = [],
  regressions = [];
const started = performance.now();
for (const file of files) {
  try {
    const L = buildLens((await import(pathToFileURL(file).href)).default);
    if (L.isFoldedOptics) {
      totals.foldedSkipped++;
      continue;
    }
    const lens = {
      key: L.data.key,
      file: relative(root, file),
      states: 0,
      ok: 0,
      clipped: 0,
      failed: 0,
      degenerate: 0,
      unsupported: 0,
      unavailable: [],
    };
    for (const zoom of L.isZoom ? [0, 0.5, 1] : [0]) {
      const open = resolveApertureStop(L, zoom, 0.1).fNumber;
      const marked = [...new Set([open, Math.min(open * 2, L.maxFstop), Math.min(8, L.maxFstop), L.maxFstop])];
      for (const fNumber of marked) {
        const stop = resolveApertureStop(L, zoom, fNumber).stopSemiDiameterMm;
        const samples = [];
        for (const focus of focusSamples) {
          const state = prepareRuntimeState(L, focus, zoom);
          const report = apertureMetricsForState(state, stop);
          const value = effectiveFNumber2(fNumber, focus, zoom, L);
          const summary = computeOpticalSummaryForState2(state, L.EFL, L.EP.epSD, stop);
          const normalized = Number.isNaN(value) ? null : value;
          if (
            normalized !== report.workingFNumber ||
            summary.effectiveFNumber !== normalized ||
            summary.apertureClippedSurfaceIndices !== report.clippedSurfaceIndices
          ) {
            regressions.push({ key: L.data.key, zoom, focus, fNumber, reason: "shared report disagreement" });
          }
          lens.states++;
          totals.states++;
          lens[report.status]++;
          totals[report.status]++;
          if (report.clippedSurfaceIndices?.length) {
            lens.clipped++;
            totals.clipped++;
          }
          if (report.status !== "ok") lens.unavailable.push({ zoom, focus, fNumber, status: report.status });
          samples.push(report);
        }
        for (const [i, j] of [
          [1, 2],
          [3, 4],
        ]) {
          const a = samples[i],
            b = samples[j];
          const jump =
            a.workingFNumber !== null && b.workingFNumber !== null
              ? Math.abs(b.workingFNumber / a.workingFNumber - 1)
              : 0;
          if ((a.status === "ok") !== (b.status === "ok") || jump > 0.0005) {
            regressions.push({
              key: L.data.key,
              zoom,
              fNumber,
              focus: [focusSamples[i], focusSamples[j]],
              reason: "threshold discontinuity",
              relativeJump: jump,
              status: [a.status, b.status],
            });
          }
        }
      }
    }
    totals.lenses++;
    lenses.push(lens);
  } catch (error) {
    errors.push({ file: relative(root, file), error: String(error) });
  }
}
const report = {
  totals,
  elapsedSeconds: (performance.now() - started) / 1000,
  focusSamples,
  zoomSamples: [0, 0.5, 1],
  errors,
  regressions,
  lenses,
};
if (output) writeFileSync(resolve(output), JSON.stringify(report, null, 2) + "\n");
console.log(
  JSON.stringify(
    { ...totals, errors: errors.length, regressions: regressions.length, elapsedSeconds: report.elapsedSeconds },
    null,
    2,
  ),
);
if (output) console.log(`Detailed report: ${resolve(output)}`);
if (errors.length || regressions.length) process.exitCode = 1;
