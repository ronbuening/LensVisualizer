/** Audit inferred zoom motion against source anchors, rigidity, clearance and continuity.
 * npm run audit:zoom -- [data.ts ...] [--output report.json]
 * Source focus residuals are retained, not treated as measured production errors.
 */
import { readdirSync, writeFileSync } from "node:fs";
import { resolve, relative } from "node:path";
import { pathToFileURL } from "node:url";
import buildLens from "../src/optics/buildLens.ts";
import { prepareRuntimeState } from "../src/optics/state/runtimeState.ts";
import { resolveVariableThickness } from "../src/optics/prescription/variables.ts";
import { traceParaxialSurfaces2 } from "../src/optics/math/paraxial.ts";

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
if (args.some((a) => a.startsWith("--"))) throw new Error("Unknown option");
const files = args.length
  ? args.map((f) => resolve(f))
  : readdirSync(lensDir, { recursive: true })
      .filter((f) => f.endsWith(".data.ts") && !f.startsWith("reference/"))
      .map((f) => resolve(lensDir, f))
      .sort();
const lenses = [],
  errors = [];
const started = performance.now();
const metrics = (surfaces) => {
  const ray = traceParaxialSurfaces2(surfaces, 1, 0);
  return { focal: -1 / ray.u, focus: -ray.y / ray.u - surfaces.at(-1).d };
};
for (const file of files) {
  try {
    const L = buildLens((await import(pathToFileURL(file).href)).default);
    if (!L.isZoom || L.isFoldedOptics) continue;
    const engine = prepareRuntimeState(L, 0, 0).lens;
    const raw = (focus, zoom) =>
      engine.surfaces.map((s) => ({
        ...s,
        d: resolveVariableThickness(
          s.d,
          engine.variables.bySurfaceIndex[s.physicalIndex],
          true,
          focus,
          zoom,
          engine.variables.focusPositions,
        ),
      }));
    const stations = L.zoomPositions.length;
    const lens = {
      key: L.data.key,
      file: relative(root, file),
      samples: 0,
      maxLinearFocusErrorMm: 0,
      maxFocusErrorMm: 0,
      maxFocalLengthErrorMm: 0,
      maxNearbyMotionMm: 0,
      unavailable: [],
    };
    for (let station = 0; station < stations; station++) {
      const t = station / (stations - 1);
      for (const focus of engine.variables.focusPositions) {
        const state = prepareRuntimeState(L, focus, t);
        if (state.surfaces.some((s, i) => s.d !== raw(focus, t)[i].d))
          errors.push({ key: lens.key, t, focus, reason: "source changed" });
      }
    }
    for (let interval = 0; interval < stations - 1; interval++) {
      const lo = interval / (stations - 1),
        hi = (interval + 1) / (stations - 1);
      const left = raw(0, lo),
        right = raw(0, hi),
        a = metrics(left),
        b = metrics(right);
      const airGaps = left.flatMap((s, i) => (s.nd === 1 && Math.abs(s.d - right[i].d) > 1e-9 ? [i] : []));
      const clearance = (i) => {
        if (i === left.length - 1) return 0;
        const radius = Math.min(left[i].sd, left[i + 1].sd);
        return Math.max(
          0,
          ...Array.from({ length: 129 }, (_, j) => {
            const r = (radius * j) / 128;
            const d = left[i].profile.sag(r) - left[i + 1].profile.sag(r);
            return Number.isFinite(d) ? d : 0;
          }),
        );
      };
      const rims = airGaps.map(clearance);
      for (let sample = 1; sample < 64; sample++) {
        const fraction = sample / 64,
          t = lo + (hi - lo) * fraction;
        const state = prepareRuntimeState(L, 0, t),
          base = raw(0, t),
          m = metrics(state.surfaces),
          linear = metrics(base);
        const focusTarget = a.focus + (b.focus - a.focus) * fraction,
          focalTarget = a.focal + (b.focal - a.focal) * fraction;
        lens.samples++;
        lens.maxLinearFocusErrorMm = Math.max(lens.maxLinearFocusErrorMm, Math.abs(linear.focus - focusTarget));
        lens.maxFocusErrorMm = Math.max(lens.maxFocusErrorMm, Math.abs(m.focus - focusTarget));
        lens.maxFocalLengthErrorMm = Math.max(lens.maxFocalLengthErrorMm, Math.abs(m.focal - focalTarget));
        if (state.zoomReconstruction?.status !== "reconstructed") lens.unavailable.push(t);
        for (const focus of engine.variables.focusPositions) {
          const current = prepareRuntimeState(L, focus, t),
            original = raw(focus, t),
            sourceLeft = raw(focus, lo),
            sourceRight = raw(focus, hi);
          for (let i = 0; i < current.surfaces.length; i++) {
            if (current.surfaces[i].d < -1e-9) errors.push({ key: lens.key, t, focus, i, reason: "negative gap" });
            if (Math.abs(current.surfaces[i].d - state.surfaces[i].d - (original[i].d - base[i].d)) > 1e-8)
              errors.push({ key: lens.key, t, focus, i, reason: "focus stroke changed" });
            if (!airGaps.includes(i) && Math.abs(current.surfaces[i].d - original[i].d) > 1e-8)
              errors.push({ key: lens.key, t, focus, i, reason: "rigid spacing changed" });
          }
          airGaps.forEach((i, j) => {
            const floor = Math.max(0, Math.min(rims[j], sourceLeft[i].d, sourceRight[i].d));
            if (current.surfaces[i].d < floor - 1e-6)
              errors.push({ key: lens.key, t, focus, i, reason: "clearance reduced below source floor" });
          });
        }
        const nearby = prepareRuntimeState(L, 0, t + 1e-7);
        const travel = Math.max(...state.z.map((z, i) => Math.abs(nearby.z[i] - nearby.imgZ - (z - state.imgZ))));
        lens.maxNearbyMotionMm = Math.max(lens.maxNearbyMotionMm, travel);
      }
    }
    if (
      lens.maxFocusErrorMm > 1e-6 ||
      lens.maxFocalLengthErrorMm > 1e-6 ||
      lens.maxNearbyMotionMm > 0.1 ||
      lens.unavailable.length
    )
      errors.push({ key: lens.key, reason: "reconstruction or continuity failed" });
    lenses.push(lens);
  } catch (error) {
    errors.push({ file, message: String(error) });
  }
}
const totals = {
  lenses: lenses.length,
  states: lenses.reduce((s, l) => s + l.samples, 0),
  errors: errors.length,
  maxFocusErrorMm: Math.max(...lenses.map((l) => l.maxFocusErrorMm)),
  maxFocalLengthErrorMm: Math.max(...lenses.map((l) => l.maxFocalLengthErrorMm)),
  maxNearbyMotionMm: Math.max(...lenses.map((l) => l.maxNearbyMotionMm)),
  seconds: (performance.now() - started) / 1000,
};
if (output) writeFileSync(resolve(output), JSON.stringify({ totals, errors, lenses }, null, 2) + "\n");
console.log(totals);
if (errors.length) {
  console.error(errors.slice(0, 20));
  process.exitCode = 1;
}
