/**
 * Vignetting analysis adapter — prepared-state and RuntimeLens wrappers for relative illumination curves.
 *
 * Keeps vignetting calculations current-state aware while preserving the public compatibility exports.
 */

import type { FieldGeometryState } from "../optics.js";
import { computeVignettingCurve } from "../vignetteAnalysis.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";

export function computeVignettingCurveForState2(
  state: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
) {
  return computeVignettingCurve(
    state.lens.runtime,
    [...state.z],
    state.focusT,
    state.zoomT,
    currentEPSD,
    currentPhysStopSD,
    fieldGeometry,
    state.aberrationT,
  );
}

export function computeVignettingCurve2(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
  aberrationT = 0,
) {
  return computeVignettingCurve(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, fieldGeometry, aberrationT);
}
