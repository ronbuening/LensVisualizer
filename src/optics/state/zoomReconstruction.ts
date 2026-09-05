/** Paraxial reconstruction between source zoom states, in camera-fixed group coordinates.
 * Preserves source states and fixed groups. This estimates motion, not a manufacturer's cam curve.
 */
import type { EngineLens } from "../types.js";
import { resolveVariableThickness } from "../prescription/variables.js";
import { uniformInterpolationSegment } from "../math/uniformInterpolation.js";
import { traceParaxialSurfaces2 } from "../math/paraxial.js";

export interface ZoomReconstructionReport {
  status: "source" | "reconstructed" | "unavailable" | "unsupported";
  focusErrorMm: number | null;
  focalLengthErrorMm: number | null;
  referenceFocusOffsetMm: number | null;
  maxGroupShiftMm: number;
}
interface Reconstruction {
  offsets: readonly number[];
  report: Readonly<ZoomReconstructionReport>;
}
const caches = new WeakMap<EngineLens, Map<number, Reconstruction>>();

export function reconstructZoom(lens: EngineLens, zoomT: number): Reconstruction | null {
  if (!lens.flags.isZoom) return null;
  let cache = caches.get(lens);
  if (!cache) {
    cache = new Map();
    caches.set(lens, cache);
  }
  const cached = cache.get(zoomT);
  if (cached) return cached;
  const result = solveZoom(lens, zoomT);
  if (cache.size >= 128) cache.delete(cache.keys().next().value!);
  cache.set(zoomT, result);
  return result;
}

function solveZoom(lens: EngineLens, zoomT: number): Reconstruction {
  let referenceFocusOffsetMm: number | null = null;
  const surfaces = lens.surfaces,
    count = surfaces.length;
  const finish = (
    status: ZoomReconstructionReport["status"],
    offsets: number[] = Array(count).fill(0),
    focusErrorMm: number | null = null,
    focalLengthErrorMm: number | null = null,
    maxGroupShiftMm = 0,
  ): Reconstruction =>
    Object.freeze({
      offsets: Object.freeze(offsets),
      report: Object.freeze({ status, focusErrorMm, focalLengthErrorMm, maxGroupShiftMm, referenceFocusOffsetMm }),
    });
  const stations = lens.runtime.zoomPositions!.length;
  const { index, fraction } = uniformInterpolationSegment(stations, zoomT);
  if (fraction < 1e-12 || fraction > 1 - 1e-12) return finish("source", undefined, 0, 0);
  if (
    lens.aberrationControl ||
    lens.flags.isFoldedOptics ||
    surfaces.some((s) => s.interaction.type !== "refract" || s.interaction.normal)
  )
    return finish("unsupported");
  const thicknesses = (t: number) =>
    surfaces.map((s) =>
      resolveVariableThickness(
        s.d,
        lens.variables.bySurfaceIndex[s.physicalIndex],
        true,
        0,
        t,
        lens.variables.focusPositions,
      ),
    );
  const from = thicknesses(index / (stations - 1)),
    to = thicknesses((index + 1) / (stations - 1));
  const base = from.map((d, i) => d + (to[i] - d) * fraction);
  const metrics = (d: readonly number[]) => {
    const ray = traceParaxialSurfaces2(
      surfaces.map((s, i) => ({ ...s, d: d[i] })),
      1,
      0,
    );
    return { focal: -1 / ray.u, focus: -ray.y / ray.u - d[count - 1] };
  };
  const a = metrics(from),
    b = metrics(to);
  const targetFocal = a.focal + (b.focal - a.focal) * fraction;
  const targetFocus = a.focus + (b.focus - a.focus) * fraction;
  referenceFocusOffsetMm = targetFocus;
  if (![targetFocal, targetFocus].every(Number.isFinite) || targetFocal <= 0) return finish("unsupported");
  const positions = (d: readonly number[]) => {
    const total = d.reduce((sum, x) => sum + x, 0);
    let z = -total;
    return d.map((x) => {
      const p = z;
      z += x;
      return p;
    });
  };
  const fromZ = positions(from),
    toZ = positions(to);
  // Only air gaps with actual zoom travel separate rigid zoom groups. Focus-only
  // spacings stay inside their group; their authored focus motion is added later.
  const boundaries = surfaces.flatMap((s, i) =>
    i < count - 1 && s.nd === 1 && Math.abs(to[i] - from[i]) > 1e-9 ? [i] : [],
  );
  const starts = [0, ...boundaries.map((i) => i + 1)];
  const movable = starts
    .map((start, group) => ({ start, group, travel: toZ[start] - fromZ[start] }))
    .filter((g) => Math.abs(g.travel) > 1e-7);
  if (movable.length < 2) return finish("unavailable");
  const gapMinimum = base.map(() => 0);
  for (const i of [...boundaries, count - 1]) {
    let needed = 0;
    const radius = i + 1 < count ? Math.min(surfaces[i].sd, surfaces[i + 1].sd) : 0;
    for (let j = 0; j <= 32; j++) {
      const r = (radius * j) / 32;
      const separation = i + 1 < count ? surfaces[i].profile.sag(r) - surfaces[i + 1].profile.sag(r) : 0;
      if (Number.isFinite(separation)) needed = Math.max(needed, separation);
    }
    // Existing source rim estimates can already overlap. Never worsen their
    // minimum clearance, and never introduce negative vertex air gaps.
    for (const focus of lens.variables.focusPositions) {
      const at = (t: number) =>
        resolveVariableThickness(
          surfaces[i].d,
          lens.variables.bySurfaceIndex[i],
          true,
          focus,
          t,
          lens.variables.focusPositions,
        );
      const left = at(index / (stations - 1)),
        right = at((index + 1) / (stations - 1));
      const current = left + (right - left) * fraction;
      const minimum = Math.max(0, Math.min(needed + 0.001, left, right));
      gapMinimum[i] = Math.max(gapMinimum[i], minimum - current + base[i]);
    }
  }
  const gaps = (shifts: readonly number[]) => {
    const displacement = Array(starts.length).fill(0);
    movable.forEach((g, i) => {
      displacement[g.group] = shifts[i];
    });
    const result = [...base];
    boundaries.forEach((boundary, i) => {
      result[boundary] += displacement[i + 1] - displacement[i];
    });
    result[count - 1] -= displacement.at(-1)!;
    return result;
  };
  const valid = (d: readonly number[]) => d.every((x, i) => Number.isFinite(x) && x >= gapMinimum[i] - 1e-9);
  const evaluate = (shifts: readonly number[]) => {
    const d = gaps(shifts),
      m = metrics(d);
    return { d, error: [(m.focus - targetFocus) / targetFocal, (m.focal - targetFocal) / targetFocal] };
  };
  let shifts = movable.map(() => 0),
    value = evaluate(shifts);
  const norm = (e: readonly number[]) => Math.hypot(...e);
  for (let iteration = 0; iteration < 32; iteration++) {
    if (norm(value.error) < 1e-10 && value.error[1] > -1 && valid(value.d)) {
      return finish(
        "reconstructed",
        value.d.map((d, i) => d - base[i]),
        value.error[0] * targetFocal,
        value.error[1] * targetFocal,
        Math.max(...shifts.map(Math.abs)),
      );
    }
    const jacobian = shifts.map((_, i) => {
      const plus = [...shifts],
        minus = [...shifts];
      plus[i] += 0.001;
      minus[i] -= 0.001;
      const p = evaluate(plus).error,
        m = evaluate(minus).error;
      return [(p[0] - m[0]) / 0.002, (p[1] - m[1]) / 0.002];
    });
    // Parametrize the reconstructed curve by focal length while preserving the
    // source focus residual. Active clearance constraints keep rigid groups apart.
    const rows = [jacobian.map((c) => c[0]), jacobian.map((c) => c[1])];
    const targets = value.error.map((e) => -e);
    let step = minimumNormStep(rows, targets);
    const active = new Set<number>();
    for (let constraint = 0; step && constraint < shifts.length; constraint++) {
      const predicted = gaps(shifts.map((x, i) => x + step![i]));
      const violation = predicted.findIndex((d, i) => d < gapMinimum[i] - 1e-9 && !active.has(i));
      if (violation < 0) break;
      active.add(violation);
      const row = shifts.map((_, i) => {
        const displaced = [...shifts];
        displaced[i] += 1;
        return gaps(displaced)[violation] - value.d[violation];
      });
      rows.push(row);
      targets.push(gapMinimum[violation] - value.d[violation]);
      step = minimumNormStep(rows, targets);
    }
    if (!step) break;
    const maxStep = Math.max(...step.map(Math.abs));
    let accepted = false;
    for (let scale = Math.min(1, 5 / maxStep); scale > 1e-6; scale /= 2) {
      const trial = shifts.map((x, i) => x + scale * step[i]),
        next = evaluate(trial);
      if (valid(next.d) && next.error[1] > -1 && norm(next.error) < norm(value.error)) {
        shifts = trial;
        value = next;
        accepted = true;
        break;
      }
    }
    if (!accepted) break;
  }
  const original = metrics(base);
  return finish("unavailable", undefined, original.focus - targetFocus, original.focal - targetFocal);
}

/** Small dense dual solve for the minimum-norm displacement under active constraints. */
function minimumNormStep(rows: readonly number[][], targets: readonly number[]): number[] | null {
  const matrix = rows.map((row, i) => [
    ...rows.map((other, j) => row.reduce((sum, v, k) => sum + v * other[k], 0) + (i === j ? 1e-18 : 0)),
    targets[i],
  ]);
  for (let i = 0; i < rows.length; i++) {
    let pivot = i;
    for (let j = i + 1; j < rows.length; j++) if (Math.abs(matrix[j][i]) > Math.abs(matrix[pivot][i])) pivot = j;
    [matrix[i], matrix[pivot]] = [matrix[pivot], matrix[i]];
    const divisor = matrix[i][i];
    if (Math.abs(divisor) < 1e-20) return null;
    for (let k = i; k <= rows.length; k++) matrix[i][k] /= divisor;
    for (let j = 0; j < rows.length; j++)
      if (j !== i) {
        const factor = matrix[j][i];
        for (let k = i; k <= rows.length; k++) matrix[j][k] -= factor * matrix[i][k];
      }
  }
  const result = rows[0].map((_, column) =>
    rows.reduce((sum, row, i) => sum + row[column] * matrix[i][rows.length], 0),
  );
  return result.every(Number.isFinite) ? result : null;
}
