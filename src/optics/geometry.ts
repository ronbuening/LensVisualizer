/**
 * Geometry barrel — surface sag, slope, and flat-radius constants for code outside the engine.
 *
 * Components, scripts, and benchmarks import surface geometry from here. Engine modules import
 * `geometry/surfaceProfile.ts` directly.
 */

export {
  DEFAULT_MAX_RIM_ANGLE_DEG,
  FLAT_R_THRESHOLD,
  MAX_RIM_SLOPE_TAN,
  conicPolySag,
  sag,
  sagSlopeRaw,
} from "./geometry/surfaceProfile.js";
