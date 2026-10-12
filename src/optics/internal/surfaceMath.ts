/**
 * Surface sag math — transitional re-export of `geometry/surfaceProfile.ts`.
 *
 * The implementation lives in the geometry module. This path stays only until its importers move there, and is
 * then deleted.
 */

export {
  DEFAULT_MAX_RIM_ANGLE_DEG,
  FLAT_R_THRESHOLD,
  MAX_RIM_SLOPE_TAN,
  conicPolySag,
  sag,
  sagSlopeRaw,
} from "../geometry/surfaceProfile.js";
