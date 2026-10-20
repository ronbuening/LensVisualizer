/**
 * Shared optics constants — numerical tolerances and wavelength references for the engine.
 *
 * Centralizes trace, intersection and vector thresholds; channel wavelengths are re-exported
 * from the chromatic metadata.
 */

/** Minimum useful vector magnitude before normalization is treated as degenerate. */
export const VECTOR_EPSILON = 1e-12;
/** Intersection root tolerance in millimeters along the surface equation. */
export const INTERSECTION_TOLERANCE = 1e-12;
/**
 * Cap for one solve. The fixtures need 23; the slowest Tier P solves, four Zeiss ZX1 analysis solves making slow
 * progress on an asphere's polynomial continuation, need 71. A measured margin, not a convergence guarantee.
 */
export const INTERSECTION_MAX_ITERATIONS = 72;
/** Number of coarse samples used to bracket a surface intersection. */
export const INTERSECTION_BRACKET_SAMPLES = 24;

export { CHROMATIC_CHANNEL_WAVELENGTH_NM } from "../chromatic/channels.js";
