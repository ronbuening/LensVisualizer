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
import { computeComaAnalysis } from "./aberration/coma.js";
import { computeFieldCurvature, computeFieldCurvatureBundle } from "./aberration/fieldCurvature.js";
import { computeBokehPreviewPair2, computeBokehPreviewPairForState2 } from "./bokeh.js";
import {
  computeChromaticAnalysis2,
  computeChromaticAnalysisForState2,
  computeChromaticRayFanAnalysis2,
  computeChromaticRayFanAnalysisForState2,
  type ChromaticRayFanAnalysisOptions2,
} from "./chromatic.js";
import { CHROMATIC_CHANNEL_ORDER } from "../chromatic/channels.js";
import { computeDistortionCurve, computeDistortionFieldGrid } from "./distortion/distortion.js";
import { computeBothPupilAberrationProfiles } from "./pupils/pupilAberration.js";
import { computeOpticalSummary } from "./summary/summary.js";
import {
  computeSphericalAberration,
  computeSAProfile,
  computeSphericalAberrationBlurCharacter,
} from "./aberration/spherical.js";
import { computeBestFocusZ } from "./aberration/bestFocus.js";
import type { AnalysisRequest } from "./request.js";
import { computeVignettingCurve } from "./vignetting/vignetting.js";

/**
 * RuntimeLens analysis job registry for compatibility callers.
 *
 * Each method forwards all state explicitly: `zPos` is in mm, `focusT`/`zoomT`
 * are normalized sliders, and aperture values are semi-diameters in mm.
 *
 * @returns grouped synchronous functions for RuntimeLens analysis work
 */
export const analysisJobs2 = {
  computeDistortionCurve(request: AnalysisRequest) {
    return computeDistortionCurve(request);
  },

  computeDistortionFieldGrid(request: AnalysisRequest) {
    return computeDistortionFieldGrid(request);
  },

  computeVignettingCurve(request: AnalysisRequest) {
    return computeVignettingCurve(request);
  },

  computeFieldCurvatureBundle(request: AnalysisRequest) {
    return computeFieldCurvatureBundle(request);
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
        channels: CHROMATIC_CHANNEL_ORDER,
        longitudinalFractions: sampling?.chromaticLongitudinalFractions,
        fieldFractions: sampling?.chromaticLateralFieldFractions ?? sampling?.fieldCurvatureFieldFractions,
      },
    );
  },

  computeChromaticRayFanAnalysis(
    L: RuntimeLens,
    zPos: number[],
    focusT: number,
    zoomT: number,
    currentEPSD: number,
    currentPhysStopSD: number,
    aberrationT = 0,
    options?: ChromaticRayFanAnalysisOptions2,
  ) {
    return computeChromaticRayFanAnalysis2(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      aberrationT,
      options,
    );
  },

  computeBestFocusZ(request: AnalysisRequest) {
    return computeBestFocusZ(request);
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

  computeBothPupilAberrationProfiles(request: AnalysisRequest) {
    return computeBothPupilAberrationProfiles(request);
  },
};

/**
 * Incremental analysis registry: summary and spherical families take requests; other families still take prepared state.
 *
 * Prepared-state jobs recover RuntimeLens-compatible z positions only at the boundary,
 * keeping all analysis state tied to the same compiled focus/zoom/aberration snapshot.
 *
 * @returns grouped synchronous functions bound by explicit PreparedOpticalState inputs
 */
export const analysisJobsForState2 = {
  computeSphericalAberration(request: AnalysisRequest) {
    return computeSphericalAberration(request);
  },

  computeSAProfile(request: AnalysisRequest) {
    return computeSAProfile(request);
  },

  computeSphericalAberrationBlurCharacter(
    request: AnalysisRequest,
    baseResult: Parameters<typeof computeSphericalAberrationBlurCharacter>[1] = null,
  ) {
    return computeSphericalAberrationBlurCharacter(request, baseResult);
  },

  computeFieldCurvature(request: AnalysisRequest, chromatic = false) {
    return computeFieldCurvature(request, chromatic);
  },

  computeFieldCurvatureBundle(request: AnalysisRequest) {
    return computeFieldCurvatureBundle(request);
  },

  computeChromaticAnalysis(
    state: PreparedOpticalState,
    currentEPSD: number,
    currentPhysStopSD: number,
    fieldGeometry?: FieldGeometryState,
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeChromaticAnalysisForState2(state, currentEPSD, currentPhysStopSD, fieldGeometry, {
      channels: CHROMATIC_CHANNEL_ORDER,
      longitudinalFractions: sampling?.chromaticLongitudinalFractions,
      fieldFractions: sampling?.chromaticLateralFieldFractions ?? sampling?.fieldCurvatureFieldFractions,
    });
  },

  computeChromaticRayFanAnalysis(
    state: PreparedOpticalState,
    currentEPSD: number,
    currentPhysStopSD: number,
    _fieldGeometry?: FieldGeometryState,
    options?: ChromaticRayFanAnalysisOptions2,
  ) {
    return computeChromaticRayFanAnalysisForState2(state, currentEPSD, currentPhysStopSD, options);
  },

  computeComaAnalysis(request: AnalysisRequest) {
    return computeComaAnalysis(request);
  },

  computeBestFocusZ(request: AnalysisRequest) {
    return computeBestFocusZ(request);
  },

  computeBokehPreviewPair(
    state: PreparedOpticalState,
    currentEPSD: number,
    currentPhysStopSD: number,
    sampling?: AnalysisSamplingOptions,
  ) {
    return computeBokehPreviewPairForState2(state, currentEPSD, currentPhysStopSD, sampling);
  },

  computeOpticalSummary(request: AnalysisRequest) {
    return computeOpticalSummary(request);
  },

  computeDistortionCurve(request: AnalysisRequest) {
    return computeDistortionCurve(request);
  },

  computeDistortionFieldGrid(request: AnalysisRequest) {
    return computeDistortionFieldGrid(request);
  },

  computeVignettingCurve(request: AnalysisRequest) {
    return computeVignettingCurve(request);
  },

  computeBothPupilAberrationProfiles(request: AnalysisRequest) {
    return computeBothPupilAberrationProfiles(request);
  },
};
