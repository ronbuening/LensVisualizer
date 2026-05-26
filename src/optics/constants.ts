import { LINE_NM } from "./glassCatalog.js";
import { DEFAULT_MAX_RIM_ANGLE_DEG, FLAT_R_THRESHOLD, MAX_RIM_SLOPE_TAN } from "./internal/surfaceMath.js";
import type { ChromaticChannel } from "../types/optics.js";

export { DEFAULT_MAX_RIM_ANGLE_DEG, FLAT_R_THRESHOLD, MAX_RIM_SLOPE_TAN };

export const VECTOR_EPSILON = 1e-12;
export const INTERSECTION_TOLERANCE = 1e-9;
export const INTERSECTION_MAX_ITERATIONS = 32;
export const INTERSECTION_BRACKET_SAMPLES = 24;

export const CHROMATIC_CHANNEL_WAVELENGTH_NM: Readonly<Record<ChromaticChannel, number>> = Object.freeze({
  R: LINE_NM.C,
  G: LINE_NM.d,
  B: LINE_NM.F,
  V: LINE_NM.g,
});
