/**
 * Engine analysis job registry — grouped synchronous analysis entry points for UI dispatch.
 *
 * Collects RuntimeLens and PreparedOpticalState helpers under stable keys so the
 * call surface can later move to workers.
 */

import type { FieldGeometryState } from "../optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";
import {
  computeComaAnalysisForState2,
  computeFieldCurvatureForState2,
  computeSAProfileForState2,
  computeSphericalAberrationBlurCharacterForState2,
  computeSphericalAberrationForState2,
} from "./aberrations.js";
import {
  computeBestFocusZ2,
  computeBestFocusZForState2,
  computeBokehPreviewPair2,
  computeBokehPreviewPairForState2,
} from "./bokeh.js";
import {
  computeDistortionCurve2,
  computeDistortionCurveForState2,
  computeDistortionFieldGrid2,
  computeDistortionFieldGridForState2,
} from "./distortion.js";
import {
  computeBothPupilAberrationProfiles2,
  computeBothPupilAberrationProfilesForState2,
  PUPIL_ABERRATION_SAMPLE_COUNT_2,
} from "./pupilAberration.js";
import { computeVignettingCurve2, computeVignettingCurveForState2 } from "./vignetting.js";

export const analysisJobs2 = {
  computeDistortionCurve(
    L: RuntimeLens,
    zPos: number[],
    focusT: number,
    zoomT: number,
    dynamicEFL: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
    aberrationT = 0,
  ) {
    return computeDistortionCurve2(L, zPos, focusT, zoomT, dynamicEFL, currentPhysStopSD, fieldGeometry, aberrationT);
  },

  computeDistortionFieldGrid(
    L: RuntimeLens,
    zPos: number[],
    focusT: number,
    zoomT: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
    aberrationT = 0,
  ) {
    return computeDistortionFieldGrid2(L, zPos, focusT, zoomT, currentPhysStopSD, fieldGeometry, aberrationT);
  },

  computeVignettingCurve(
    L: RuntimeLens,
    zPos: number[],
    focusT: number,
    zoomT: number,
    currentEPSD: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
    aberrationT = 0,
  ) {
    return computeVignettingCurve2(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, fieldGeometry, aberrationT);
  },

  computeBestFocusZ(
    L: RuntimeLens,
    focusT: number,
    zoomT: number,
    currentEPSD: number,
    currentPhysStopSD: number,
    aberrationT = 0,
  ) {
    return computeBestFocusZ2(L, focusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT);
  },

  computeBokehPreviewPair(
    L: RuntimeLens,
    focusT: number,
    zoomT: number,
    currentEPSD: number,
    currentPhysStopSD: number,
    aberrationT = 0,
  ) {
    return computeBokehPreviewPair2(L, focusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT);
  },

  computeBothPupilAberrationProfiles(
    focusT: number,
    zoomT: number,
    L: RuntimeLens,
    sampleCount = PUPIL_ABERRATION_SAMPLE_COUNT_2,
    geometry?: FieldGeometryState,
    aberrationT = 0,
  ) {
    return computeBothPupilAberrationProfiles2(focusT, zoomT, L, sampleCount, geometry, aberrationT);
  },
};

export const analysisJobsForState2 = {
  computeSphericalAberration(state: PreparedOpticalState, currentEPSD: number, currentPhysStopSD: number) {
    return computeSphericalAberrationForState2(state, currentEPSD, currentPhysStopSD);
  },

  computeSAProfile(state: PreparedOpticalState, currentEPSD: number, currentPhysStopSD: number) {
    return computeSAProfileForState2(state, currentEPSD, currentPhysStopSD);
  },

  computeSphericalAberrationBlurCharacter(
    state: PreparedOpticalState,
    currentEPSD: number,
    currentPhysStopSD: number,
    baseResult: Parameters<typeof computeSphericalAberrationBlurCharacterForState2>[3] = null,
  ) {
    return computeSphericalAberrationBlurCharacterForState2(state, currentEPSD, currentPhysStopSD, baseResult);
  },

  computeFieldCurvature(
    state: PreparedOpticalState,
    currentEPSD: number,
    currentPhysStopSD: number,
    chromatic = false,
    fieldGeometry?: FieldGeometryState,
  ) {
    return computeFieldCurvatureForState2(state, currentEPSD, currentPhysStopSD, chromatic, fieldGeometry);
  },

  computeComaAnalysis(
    state: PreparedOpticalState,
    currentEPSD: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
  ) {
    return computeComaAnalysisForState2(state, currentEPSD, currentPhysStopSD, fieldGeometry);
  },

  computeBestFocusZ(state: PreparedOpticalState, currentEPSD: number, currentPhysStopSD: number) {
    return computeBestFocusZForState2(state, currentEPSD, currentPhysStopSD);
  },

  computeBokehPreviewPair(state: PreparedOpticalState, currentEPSD: number, currentPhysStopSD: number) {
    return computeBokehPreviewPairForState2(state, currentEPSD, currentPhysStopSD);
  },

  computeDistortionCurve(
    state: PreparedOpticalState,
    dynamicEFL: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
  ) {
    return computeDistortionCurveForState2(state, dynamicEFL, currentPhysStopSD, fieldGeometry);
  },

  computeDistortionFieldGrid(
    state: PreparedOpticalState,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
  ) {
    return computeDistortionFieldGridForState2(state, currentPhysStopSD, fieldGeometry);
  },

  computeVignettingCurve(
    state: PreparedOpticalState,
    currentEPSD: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
  ) {
    return computeVignettingCurveForState2(state, currentEPSD, currentPhysStopSD, fieldGeometry);
  },

  computeBothPupilAberrationProfiles(
    state: PreparedOpticalState,
    sampleCount = PUPIL_ABERRATION_SAMPLE_COUNT_2,
    geometry?: FieldGeometryState,
  ) {
    return computeBothPupilAberrationProfilesForState2(state, sampleCount, geometry);
  },
};
