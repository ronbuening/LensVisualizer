/**
 * Pupil aberration analysis adapter — prepared-state and RuntimeLens wrappers for entrance/exit profiles.
 *
 * Keeps pupil calculations state-aware without duplicating the public pupilAberration implementation.
 */

import type { FieldGeometryState } from "../optics.js";
import {
  computeBothPupilAberrationProfiles,
  computeExitPupilAberrationProfile,
  computePupilAberrationProfile,
  PUPIL_ABERRATION_SAMPLE_COUNT,
} from "../pupilAberration.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";

/**
 * Default entrance/exit pupil aberration field-sample count for prepared-state callers.
 *
 * Kept equal to the RuntimeLens helper so charts do not change density between adapter paths.
 */
export const PUPIL_ABERRATION_SAMPLE_COUNT_2 = PUPIL_ABERRATION_SAMPLE_COUNT;

/**
 * Compute entrance and exit pupil aberration profiles from a prepared state.
 *
 * @param state - prepared optical state for current focus/zoom/aberration sliders
 * @param sampleCount - number of field-angle samples from axis to half field
 * @param geometry - optional solved-chief-ray field geometry for the same state
 * @returns paired entrance/exit pupil shift and magnification profiles
 */
export function computeBothPupilAberrationProfilesForState2(
  state: PreparedOpticalState,
  sampleCount = PUPIL_ABERRATION_SAMPLE_COUNT,
  geometry?: FieldGeometryState,
) {
  return computeBothPupilAberrationProfiles(
    state.focusT,
    state.zoomT,
    state.lens.runtime,
    sampleCount,
    geometry,
    state.aberrationT,
  );
}

/**
 * Compatibility wrapper for entrance-pupil aberration profiles.
 *
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, ignored by prime lenses
 * @param L - runtime lens object
 * @param sampleCount - number of field-angle samples from axis to half field
 * @param geometry - optional solved-chief-ray field geometry
 * @param aberrationT - normalized aberration spacing slider
 * @returns entrance pupil position/magnification profile
 */
export function computePupilAberrationProfile2(
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  sampleCount = PUPIL_ABERRATION_SAMPLE_COUNT,
  geometry?: FieldGeometryState,
  aberrationT = 0,
) {
  return computePupilAberrationProfile(focusT, zoomT, L, sampleCount, geometry, aberrationT);
}

/**
 * Compatibility wrapper for exit-pupil aberration profiles.
 *
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, ignored by prime lenses
 * @param L - runtime lens object
 * @param sampleCount - number of field-angle samples from axis to half field
 * @param geometry - optional solved-chief-ray field geometry
 * @param aberrationT - normalized aberration spacing slider
 * @returns exit pupil position/magnification profile
 */
export function computeExitPupilAberrationProfile2(
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  sampleCount = PUPIL_ABERRATION_SAMPLE_COUNT,
  geometry?: FieldGeometryState,
  aberrationT = 0,
) {
  return computeExitPupilAberrationProfile(focusT, zoomT, L, sampleCount, geometry, aberrationT);
}

/**
 * Compatibility wrapper that computes entrance and exit profiles together.
 *
 * Sharing the solve lets both profiles use the same chief-ray and field sampling
 * decisions for wide-angle and folded systems.
 *
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, ignored by prime lenses
 * @param L - runtime lens object
 * @param sampleCount - number of field-angle samples from axis to half field
 * @param geometry - optional solved-chief-ray field geometry
 * @param aberrationT - normalized aberration spacing slider
 * @returns paired entrance/exit pupil aberration profiles
 */
export function computeBothPupilAberrationProfiles2(
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  sampleCount = PUPIL_ABERRATION_SAMPLE_COUNT,
  geometry?: FieldGeometryState,
  aberrationT = 0,
) {
  return computeBothPupilAberrationProfiles(focusT, zoomT, L, sampleCount, geometry, aberrationT);
}
