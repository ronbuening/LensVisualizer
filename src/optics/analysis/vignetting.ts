/**
 * Vignetting analysis adapter — prepared-state and RuntimeLens wrappers for relative illumination curves.
 *
 * Keeps vignetting calculations current-state aware while preserving the public compatibility exports.
 */

import type { FieldGeometryState } from "../optics.js";
import { computeVignettingCurve } from "../vignetteAnalysis.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";
import { zPosForPreparedAnalysis2 } from "./preparedStateAdapters.js";

/**
 * Compute relative illumination/vignetting from a prepared optical state.
 *
 * Uses the supplied current entrance-pupil and physical stop semi-diameters so
 * aperture clipping is evaluated at the same stopdown state as the diagram.
 *
 * @param state - prepared optical state for current focus/zoom/aberration sliders
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param fieldGeometry - optional solved-chief-ray field geometry for the same state
 * @returns field samples with geometric and cos^4-normalized relative illumination
 */
export function computeVignettingCurveForState2(
  state: PreparedOpticalState,
  currentEPSD: number,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
) {
  return computeVignettingCurve(
    state.lens.runtime,
    zPosForPreparedAnalysis2(state),
    state.focusT,
    state.zoomT,
    currentEPSD,
    currentPhysStopSD,
    fieldGeometry,
    state.aberrationT,
  );
}

/**
 * Compatibility wrapper for RuntimeLens vignetting curves.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, ignored by prime lenses
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param fieldGeometry - optional solved-chief-ray field geometry
 * @param aberrationT - normalized aberration spacing slider
 * @returns vignetting and relative-illumination curve
 */
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
