/**
 * Asphere compiler — maps authored aspheric coefficients to zero-based surface indices.
 *
 * Keeps conic polynomial data in a trace-friendly lookup table shared by layout and exact surface math.
 */

import type { AsphericCoefficients } from "../../types/optics.js";
import { resolveLabel } from "./compileLabels.js";

/**
 * Compile authored asphere coefficients into an index-keyed lookup.
 *
 * Authored lens files name surfaces by label; trace and surface-profile code use
 * zero-based physical indices to avoid string lookups in hot paths.
 *
 * @param aspheres - optional surface-label keyed aspheric coefficient map
 * @param labelToSurfaceIndex - normalized label lookup for the lens
 * @returns frozen surface-index keyed coefficient map
 */
export function compileAspheres(
  aspheres: Record<string, AsphericCoefficients> | undefined,
  labelToSurfaceIndex: Readonly<Record<string, number>>,
): Readonly<Record<number, AsphericCoefficients>> {
  for (const label of Object.keys(aspheres ?? {})) resolveLabel(label, labelToSurfaceIndex, "asph");
  return Object.freeze(buildAsphereIndex(aspheres, labelToSurfaceIndex));
}

export function buildAsphereIndex(
  asph: Record<string, AsphericCoefficients> | undefined,
  labelIdx: Record<string, number>,
): Record<number, AsphericCoefficients> {
  const asphByIdx: Record<number, AsphericCoefficients> = {};
  for (const [label, coeffs] of Object.entries(asph || {})) {
    const idx = labelIdx[label];
    if (idx !== undefined) asphByIdx[idx] = Object.freeze({ ...coeffs });
  }
  return asphByIdx;
}
