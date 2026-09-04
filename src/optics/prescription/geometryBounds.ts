/** Conservative axial enclosure for centered conic/polynomial surfaces. */
import { ASPHERIC_POLYNOMIAL_TERMS } from "../../types/asphericSchema.js";
import type { PreparedOpticalState } from "../types.js";

export function conservativeAxialBounds(state: PreparedOpticalState) {
  let frontZ = Infinity,
    rearZ = -Infinity,
    radius = 0;
  for (const surface of state.surfaces) {
    if (surface.interaction.normal) return null;
    // On the real conic domain the sag denominator is >= 1. Absolute
    // polynomial terms also bound nonmonotonic profiles between vertex and rim.
    let sagBound = surface.sd ** 2 / Math.abs(surface.R);
    for (const term of ASPHERIC_POLYNOMIAL_TERMS) {
      sagBound += Math.abs(surface.asphere?.[term.key] ?? 0) * surface.sd ** term.power;
    }
    frontZ = Math.min(frontZ, surface.z - sagBound);
    rearZ = Math.max(rearZ, surface.z + sagBound);
    radius = Math.max(radius, surface.sd);
  }
  return [frontZ, rearZ, radius].every(Number.isFinite) ? { frontZ, rearZ, radius } : null;
}
