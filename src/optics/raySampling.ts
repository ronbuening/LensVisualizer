import type { RayDensity } from "../types/state.js";
import type { RuntimeLens } from "../types/optics.js";

/**
 * Heuristic for "expensive" lenses where ray-bundle analyses should drop to a
 * lower sample density to keep settled-compute time and memory tolerable.
 *
 * Triggers on any of:
 *   - non-rectilinear projection (fisheye), which forces wide ray cones
 *   - high surface count (≥32), which multiplies trace cost linearly
 *   - large physical aperture (maxSD ≥ 50 mm), which forces dense pupil sweeps
 *   - very wide field (halfField ≥ 40°), which forces dense field sampling
 *
 * Shared by [LensDiagramPanel.tsx](../components/layout/LensDiagramPanel.tsx)
 * for interactive ray-density downgrade and by analysis modules for settled
 * sample-count reduction.
 */
export function isHeavyLensForRayWork(L: Pick<RuntimeLens, "projection" | "N" | "maxSD" | "halfField">): boolean {
  if ((L.projection?.kind ?? "rectilinear") !== "rectilinear") return true;
  if (L.N >= 32) return true;
  if (L.maxSD >= 50) return true;
  if (L.halfField >= 40) return true;
  return false;
}

const DENSITY_MULTIPLIERS: Record<RayDensity, number> = {
  normal: 1,
  dense: 2,
  diagnostic: 3,
};

function hasChiefRay(fractions: readonly number[]): boolean {
  return fractions.some((f) => Math.abs(f) < 1e-12);
}

function sampleCountForDensity(fractions: readonly number[], density: RayDensity): number {
  const baseline = Math.max(0, fractions.length);
  let count = baseline * DENSITY_MULTIPLIERS[density];
  if (density === "normal" || count <= baseline) return baseline;

  if (hasChiefRay(fractions)) {
    if (count % 2 === 0) count += 1;
  } else if (count % 2 !== 0) {
    count += 1;
  }
  return count;
}

/**
 * Derive viewport ray samples from the lens's normal ray fan. Lens data keeps
 * owning the normal baseline; denser modes only affect interactive rendering.
 */
export function rayFractionsForDensity(fractions: readonly number[], density: RayDensity): number[] {
  if (density === "normal") return [...fractions];
  if (fractions.length === 0) return [];

  const count = sampleCountForDensity(fractions, density);
  const maxAbs = Math.max(...fractions.map((f) => Math.abs(f)));
  if (maxAbs === 0) return Array.from({ length: count }, () => 0);
  if (count === 1) return [0];

  const step = (2 * maxAbs) / (count - 1);
  return Array.from({ length: count }, (_, i) => -maxAbs + i * step).map((f) => (Math.abs(f) < 1e-12 ? 0 : f));
}

export function obstructionAwareRayFractionsForDensity(
  L: Pick<RuntimeLens, "isFoldedOptics" | "S">,
  fractions: readonly number[],
  density: RayDensity,
  entrancePupilSemiDiameter: number,
): number[] {
  const samples = rayFractionsForDensity(fractions, density);
  if (!L.isFoldedOptics || entrancePupilSemiDiameter <= 0) return samples;

  const blockedRadius = L.S.reduce((max, surface) => {
    if (surface.interaction?.type === "block" && (surface.innerSd ?? 0) <= 0) return Math.max(max, surface.sd);
    if (surface.interaction?.type === "reflect" && (surface.innerSd ?? 0) > 0) return Math.max(max, surface.innerSd!);
    return max;
  }, 0);
  if (blockedRadius <= 0) return samples;

  const minFraction = blockedRadius / entrancePupilSemiDiameter;
  const filtered = samples.filter((fraction) => Math.abs(fraction) >= minFraction - 1e-9);
  if (filtered.length > 0) return filtered;

  const maxAbs = Math.max(...samples.map((fraction) => Math.abs(fraction)), 0);
  return maxAbs > 0 ? [-maxAbs, maxAbs] : [];
}

export function raySampleCountForDensity(fractions: readonly number[], density: RayDensity): number {
  return rayFractionsForDensity(fractions, density).length;
}
