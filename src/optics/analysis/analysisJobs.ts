/**
 * Engine analysis job registry — grouped synchronous analysis entry points for UI dispatch.
 *
 * Collects request-facing helpers under stable historical keys so the
 * call surface can later move to workers.
 */

import { computeComaAnalysis } from "./aberration/coma.js";
import { computeFieldCurvature, computeFieldCurvatureBundle } from "./aberration/fieldCurvature.js";
import { computeBokehPreviewPair } from "./bokeh/bokeh.js";
import { computeChromaticAnalysis } from "./chromatic/analysis.js";
import { computeChromaticRayFanAnalysis } from "./chromatic/rayFan.js";
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
 * Historical analysis job registry for compatibility callers.
 *
 * Each method forwards one request with geometry, controls and aperture radii in mm.
 *
 * @returns grouped synchronous functions for request-facing analysis work
 */
export const analysisPreviewJobs = {
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

  computeChromaticAnalysis(request: AnalysisRequest) {
    return computeChromaticAnalysis(request);
  },

  computeChromaticRayFanAnalysis(request: AnalysisRequest) {
    return computeChromaticRayFanAnalysis(request);
  },

  computeBestFocusZ(request: AnalysisRequest) {
    return computeBestFocusZ(request);
  },

  computeBokehPreviewPair(request: AnalysisRequest) {
    return computeBokehPreviewPair(request);
  },

  computeBothPupilAberrationProfiles(request: AnalysisRequest) {
    return computeBothPupilAberrationProfiles(request);
  },
};

/**
 * Analysis job registry: every centered family takes an explicit request.
 *
 * Request geometry and aperture inputs stay tied to the same control snapshot.
 *
 * @returns grouped synchronous functions bound by explicit request inputs
 */
export const analysisJobs = {
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

  computeChromaticAnalysis(request: AnalysisRequest) {
    return computeChromaticAnalysis(request);
  },

  computeChromaticRayFanAnalysis(request: AnalysisRequest) {
    return computeChromaticRayFanAnalysis(request);
  },

  computeComaAnalysis(request: AnalysisRequest) {
    return computeComaAnalysis(request);
  },

  computeBestFocusZ(request: AnalysisRequest) {
    return computeBestFocusZ(request);
  },

  computeBokehPreviewPair(request: AnalysisRequest) {
    return computeBokehPreviewPair(request);
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
