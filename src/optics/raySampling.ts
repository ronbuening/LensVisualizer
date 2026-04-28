import type { RayDensity } from "../types/state.js";

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

export function raySampleCountForDensity(fractions: readonly number[], density: RayDensity): number {
  return rayFractionsForDensity(fractions, density).length;
}
