/**
 * Asphere compiler — maps authored aspheric coefficients to zero-based surface indices.
 *
 * Keeps conic polynomial data in a trace-friendly lookup table shared by layout and exact surface math.
 */

import type { AsphericCoefficients } from "../../types/optics.js";
import { resolveLabel } from "./labels.js";

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
  const out: Record<number, AsphericCoefficients> = {};
  for (const [label, coefficients] of Object.entries(aspheres ?? {})) {
    out[resolveLabel(label, labelToSurfaceIndex, "asph")] = Object.freeze({ ...coefficients });
  }
  return Object.freeze(out);
}
