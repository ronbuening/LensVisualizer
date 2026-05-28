/**
 * Distortion analysis adapter — prepared-state and RuntimeLens wrappers for distortion sampling.
 *
 * Lets engine-native callers reuse prepared state while preserving the legacy RuntimeLens function signatures.
 */

import { computeDistortionCurve, computeDistortionFieldGrid } from "../distortionAnalysis.js";
import type { FieldGeometryState } from "../optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";
import { zPosForPreparedAnalysis2 } from "./preparedStateAdapters.js";

/**
 * Compute a state-aware distortion curve from a prepared optical state.
 *
 * Distortion is reported relative to the projection reference associated with the lens:
 * rectilinear designs compare against `f * tan(theta)`, while fisheyes compare against
 * their declared equidistant/equisolid mapping.
 *
 * @param state - prepared optical state for current focus/zoom/aberration sliders
 * @param dynamicEFL - current effective focal length in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param fieldGeometry - optional solved-chief-ray field geometry for the same state
 * @returns sampled distortion curve across the current half field
 */
export function computeDistortionCurveForState2(
  state: PreparedOpticalState,
  dynamicEFL: number,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
) {
  return computeDistortionCurve(
    state.lens.runtime,
    zPosForPreparedAnalysis2(state),
    state.focusT,
    state.zoomT,
    dynamicEFL,
    currentPhysStopSD,
    fieldGeometry,
    state.aberrationT,
  );
}

/**
 * Compute the traced 2D distortion field grid from a prepared optical state.
 *
 * @param state - prepared optical state for current focus/zoom/aberration sliders
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param fieldGeometry - optional solved-chief-ray field geometry for the same state
 * @returns horizontal/vertical traced grid lines in image-space millimeters
 */
export function computeDistortionFieldGridForState2(
  state: PreparedOpticalState,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
) {
  return computeDistortionFieldGrid(
    state.lens.runtime,
    zPosForPreparedAnalysis2(state),
    state.focusT,
    state.zoomT,
    currentPhysStopSD,
    fieldGeometry,
    state.aberrationT,
  );
}

/**
 * Compatibility wrapper for RuntimeLens distortion curves.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, ignored by prime lenses
 * @param dynamicEFL - current effective focal length in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param fieldGeometry - optional solved-chief-ray field geometry
 * @param aberrationT - normalized aberration spacing slider
 * @returns sampled distortion curve
 */
export function computeDistortionCurve2(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  dynamicEFL: number,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
  aberrationT = 0,
) {
  return computeDistortionCurve(L, zPos, focusT, zoomT, dynamicEFL, currentPhysStopSD, fieldGeometry, aberrationT);
}

/**
 * Compatibility wrapper for RuntimeLens traced distortion grids.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, ignored by prime lenses
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param fieldGeometry - optional solved-chief-ray field geometry
 * @param aberrationT - normalized aberration spacing slider
 * @returns traced 2D grid lines in image-space millimeters
 */
export function computeDistortionFieldGrid2(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentPhysStopSD: number,
  fieldGeometry?: FieldGeometryState,
  aberrationT = 0,
) {
  return computeDistortionFieldGrid(L, zPos, focusT, zoomT, currentPhysStopSD, fieldGeometry, aberrationT);
}
