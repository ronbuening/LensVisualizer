/**
 * Engine analysis job registry — grouped synchronous analysis entry points for UI dispatch.
 *
 * Collects RuntimeLens and PreparedOpticalState helpers under stable keys so the
 * call surface can later move to workers.
 */

import type { FieldGeometryState } from "../optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";
import type { AnalysisSamplingOptions } from "./analysisQuality.js";
import {
  computeComaAnalysisForState2,
  computeFieldCurvatureBundle2,
  computeFieldCurvatureBundleForState2,
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
  computeChromaticAnalysis2,
  computeChromaticAnalysisForState2,
  computeChromaticRayTraceAnalysis2,
  computeChromaticRayTraceAnalysisForState2,
} from "./chromatic.js";
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
import { computeOpticalSummaryForState2 } from "./summary.js";
import { computeVignettingCurve2, computeVignettingCurveForState2 } from "./vignetting.js";

/**
 * RuntimeLens analysis job registry for compatibility callers.
 *
 * Each method forwards all state explicitly: `zPos` is in mm, `focusT`/`zoomT`
 * are normalized sliders, and aperture values are semi-diameters in mm.
 *
 * @returns grouped synchronous functions for RuntimeLens analysis work
 */
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
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeDistortionCurve2(
      L,
      zPos,
      focusT,
      zoomT,
      dynamicEFL,
      currentPhysStopSD,
      fieldGeometry,
      aberrationT,
      sampling,
    );
  },

  computeDistortionFieldGrid(
    L: RuntimeLens,
    zPos: number[],
    focusT: number,
    zoomT: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
    aberrationT = 0,
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeDistortionFieldGrid2(L, zPos, focusT, zoomT, currentPhysStopSD, fieldGeometry, aberrationT, sampling);
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
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeVignettingCurve2(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      fieldGeometry,
      aberrationT,
      sampling,
    );
  },

  computeFieldCurvatureBundle(
    L: RuntimeLens,
    zPos: number[],
    focusT: number,
    zoomT: number,
    currentEPSD: number,
    currentPhysStopSD: number,
    aberrationT = 0,
    fieldGeometry?: FieldGeometryState,
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeFieldCurvatureBundle2(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      aberrationT,
      fieldGeometry,
      sampling,
    );
  },

  computeChromaticAnalysis(
    L: RuntimeLens,
    zPos: number[],
    focusT: number,
    zoomT: number,
    currentEPSD: number,
    currentPhysStopSD: number,
    aberrationT = 0,
    fieldGeometry?: FieldGeometryState,
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeChromaticAnalysis2(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      aberrationT,
      fieldGeometry,
      {
        fieldFractions: sampling?.fieldCurvatureFieldFractions,
      },
    );
  },

  computeChromaticRayTraceAnalysis(
    L: RuntimeLens,
    zPos: number[],
    focusT: number,
    zoomT: number,
    currentEPSD: number,
    currentPhysStopSD: number,
    aberrationT = 0,
  ) {
    return computeChromaticRayTraceAnalysis2(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT);
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
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeBokehPreviewPair2(L, focusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT, sampling);
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

/**
 * Prepared-state analysis job registry for engine-native callers.
 *
 * Prepared-state jobs recover RuntimeLens-compatible z positions only at the boundary,
 * keeping all analysis state tied to the same compiled focus/zoom/aberration snapshot.
 *
 * @returns grouped synchronous functions bound by explicit PreparedOpticalState inputs
 */
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
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeSphericalAberrationBlurCharacterForState2(
      state,
      currentEPSD,
      currentPhysStopSD,
      baseResult,
      sampling,
    );
  },

  computeFieldCurvature(
    state: PreparedOpticalState,
    currentEPSD: number,
    currentPhysStopSD: number,
    chromatic = false,
    fieldGeometry?: FieldGeometryState,
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeFieldCurvatureForState2(state, currentEPSD, currentPhysStopSD, chromatic, fieldGeometry, sampling);
  },

  computeFieldCurvatureBundle(
    state: PreparedOpticalState,
    currentEPSD: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeFieldCurvatureBundleForState2(state, currentEPSD, currentPhysStopSD, fieldGeometry, sampling);
  },

  computeChromaticAnalysis(
    state: PreparedOpticalState,
    currentEPSD: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeChromaticAnalysisForState2(state, currentEPSD, currentPhysStopSD, fieldGeometry, {
      fieldFractions: sampling?.fieldCurvatureFieldFractions,
    });
  },

  computeChromaticRayTraceAnalysis(
    state: PreparedOpticalState,
    currentEPSD: number,
    currentPhysStopSD: number,
    _fieldGeometry?: FieldGeometryState,
  ) {
    return computeChromaticRayTraceAnalysisForState2(state, currentEPSD, currentPhysStopSD);
  },

  computeComaAnalysis(
    state: PreparedOpticalState,
    currentEPSD: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeComaAnalysisForState2(state, currentEPSD, currentPhysStopSD, fieldGeometry, sampling);
  },

  computeBestFocusZ(state: PreparedOpticalState, currentEPSD: number, currentPhysStopSD: number) {
    return computeBestFocusZForState2(state, currentEPSD, currentPhysStopSD);
  },

  computeBokehPreviewPair(
    state: PreparedOpticalState,
    currentEPSD: number,
    currentPhysStopSD: number,
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeBokehPreviewPairForState2(state, currentEPSD, currentPhysStopSD, sampling);
  },

  computeOpticalSummary(
    state: PreparedOpticalState,
    dynamicEFL: number,
    currentEPSD: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
  ) {
    return computeOpticalSummaryForState2(state, dynamicEFL, currentEPSD, currentPhysStopSD, fieldGeometry);
  },

  computeDistortionCurve(
    state: PreparedOpticalState,
    dynamicEFL: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeDistortionCurveForState2(state, dynamicEFL, currentPhysStopSD, fieldGeometry, sampling);
  },

  computeDistortionFieldGrid(
    state: PreparedOpticalState,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeDistortionFieldGridForState2(state, currentPhysStopSD, fieldGeometry, sampling);
  },

  computeVignettingCurve(
    state: PreparedOpticalState,
    currentEPSD: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeVignettingCurveForState2(state, currentEPSD, currentPhysStopSD, fieldGeometry, sampling);
  },

  computeBothPupilAberrationProfiles(
    state: PreparedOpticalState,
    sampleCount = PUPIL_ABERRATION_SAMPLE_COUNT_2,
    geometry?: FieldGeometryState,
  ) {
    return computeBothPupilAberrationProfilesForState2(state, sampleCount, geometry);
  },
};
