/**
 * Shared optics constants — numerical tolerances and wavelength references for the engine.
 *
 * Centralizes trace, intersection, vector, and chromatic constants so low-level modules use
 * one set of physical and numerical thresholds.
 */

import { LINE_NM } from "./glassCatalog.js";
import { DEFAULT_MAX_RIM_ANGLE_DEG, FLAT_R_THRESHOLD, MAX_RIM_SLOPE_TAN } from "./internal/surfaceMath.js";
import type { ChromaticChannel } from "../types/optics.js";

export { DEFAULT_MAX_RIM_ANGLE_DEG, FLAT_R_THRESHOLD, MAX_RIM_SLOPE_TAN };

/** Minimum useful vector magnitude before normalization is treated as degenerate. */
export const VECTOR_EPSILON = 1e-12;
/** Intersection root tolerance in millimeters along the surface equation. */
export const INTERSECTION_TOLERANCE = 1e-9;
/** Newton/bisection iteration cap for one surface-intersection solve. */
export const INTERSECTION_MAX_ITERATIONS = 32;
/** Number of coarse samples used to bracket a surface intersection. */
export const INTERSECTION_BRACKET_SAMPLES = 24;

/** Channel wavelengths in nanometers for public RuntimeLens chromatic helpers. */
export const CHROMATIC_CHANNEL_WAVELENGTH_NM: Readonly<Record<ChromaticChannel, number>> = Object.freeze({
  R: LINE_NM.C,
  G: LINE_NM.d,
  B: LINE_NM.F,
  V: LINE_NM.g,
});
