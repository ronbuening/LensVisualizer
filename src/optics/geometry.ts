/** Public geometry seam; implementations live in the focused engine subdirectories. */
export {
  DEFAULT_MAX_RIM_ANGLE_DEG,
  FLAT_R_THRESHOLD,
  MAX_RIM_SLOPE_TAN,
  conicPolySag,
  sag,
  sagSlopeRaw,
} from "./geometry/surfaceProfile.js";
export {
  INTERSECTION_BRACKET_SAMPLES,
  INTERSECTION_MAX_ITERATIONS,
  INTERSECTION_TOLERANCE,
  VECTOR_EPSILON,
} from "./math/constants.js";
export { dot, subtract } from "./math/vector.js";
