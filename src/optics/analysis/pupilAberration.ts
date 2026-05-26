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

export const PUPIL_ABERRATION_SAMPLE_COUNT_2 = PUPIL_ABERRATION_SAMPLE_COUNT;

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
