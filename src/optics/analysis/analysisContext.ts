/**
 * Analysis computation context — lazy, per-state accessors for expensive optical diagnostics.
 *
 * The analysis drawer often needs several metrics from the same PreparedOpticalState. This
 * context stores the shared slider-derived aperture, EFL, and field geometry inputs, then
 * memoizes each analysis result on first read so sibling panels do not repeat ray sweeps.
 */

import { analysisJobsForState2 } from "./analysisJobs.js";
import { CHROMATIC_CHANNEL_ORDER } from "../chromatic/channels.js";
import type { FieldGeometryState } from "../optics.js";
import type { PreparedOpticalState } from "../types.js";
import type { AnalysisSamplingOptions } from "./analysisQuality.js";

/**
 * Shared inputs for a set of analysis computations at one focus/zoom/aperture state.
 *
 * @param preparedState - compiled optical state for the current RuntimeLens and sliders
 * @param dynamicEFL - current effective focal length in mm, including focus/zoom state
 * @param currentEPSD - entrance-pupil semi-diameter in mm after stopdown
 * @param currentPhysStopSD - physical stop semi-diameter in mm after stopdown
 * @param fieldGeometry - optional solved-chief-ray field geometry for the same state
 */
export interface AnalysisComputationContextParams {
  preparedState: PreparedOpticalState;
  dynamicEFL: number;
  currentEPSD: number;
  currentPhysStopSD: number;
  fieldGeometry?: FieldGeometryState | null;
  sampling?: AnalysisSamplingOptions;
}

/**
 * Lazy analysis facade for one immutable prepared state.
 *
 * Accessors return cached results after their first call. They have no side effects outside
 * the closure, but the retained results intentionally share the exact same optical inputs.
 */
export interface AnalysisComputationContext extends AnalysisComputationContextParams {
  computeOpticalSummary: () => ReturnType<typeof analysisJobsForState2.computeOpticalSummary>;
  computeDistortionCurve: () => ReturnType<typeof analysisJobsForState2.computeDistortionCurve>;
  computeDistortionFieldGrid: () => ReturnType<typeof analysisJobsForState2.computeDistortionFieldGrid>;
  computeVignettingCurve: () => ReturnType<typeof analysisJobsForState2.computeVignettingCurve>;
  computeBothPupilAberrationProfiles: () => ReturnType<typeof analysisJobsForState2.computeBothPupilAberrationProfiles>;
  computeBokehPreviewPair: () => ReturnType<typeof analysisJobsForState2.computeBokehPreviewPair>;
  computeBestFocusZ: () => ReturnType<typeof analysisJobsForState2.computeBestFocusZ>;
  computeSphericalAberration: () => ReturnType<typeof analysisJobsForState2.computeSphericalAberration>;
  computeSAProfile: () => ReturnType<typeof analysisJobsForState2.computeSAProfile>;
  computeSphericalAberrationBlurCharacter: () => ReturnType<
    typeof analysisJobsForState2.computeSphericalAberrationBlurCharacter
  >;
  computeFieldCurvatureBundle: () => ReturnType<typeof analysisJobsForState2.computeFieldCurvatureBundle>;
  computeChromaticAnalysis: () => ReturnType<typeof analysisJobsForState2.computeChromaticAnalysis>;
  computeChromaticRayTraceAnalysis: () => ReturnType<typeof analysisJobsForState2.computeChromaticRayTraceAnalysis>;
  computeComaAnalysis: () => ReturnType<typeof analysisJobsForState2.computeComaAnalysis>;
}

/**
 * Build a lazy analysis context for drawer/render code.
 *
 * `fieldGeometry: null` is normalized to `undefined` before dispatch so callers can
 * distinguish "not precomputed" from a concrete solved geometry without changing the
 * existing analysis helper signatures.
 *
 * @param params - prepared state plus aperture, EFL, and optional field geometry inputs
 * @returns memoizing analysis accessors bound to the provided state
 */
export function createAnalysisComputationContext({
  preparedState,
  dynamicEFL,
  currentEPSD,
  currentPhysStopSD,
  fieldGeometry = null,
  sampling = {},
}: AnalysisComputationContextParams): AnalysisComputationContext {
  const resolvedFieldGeometry = fieldGeometry ?? undefined;
  let opticalSummary: ReturnType<typeof analysisJobsForState2.computeOpticalSummary> | undefined;
  let distortionCurve: ReturnType<typeof analysisJobsForState2.computeDistortionCurve> | undefined;
  let distortionFieldGrid: ReturnType<typeof analysisJobsForState2.computeDistortionFieldGrid> | undefined;
  let vignettingCurve: ReturnType<typeof analysisJobsForState2.computeVignettingCurve> | undefined;
  let pupilProfiles: ReturnType<typeof analysisJobsForState2.computeBothPupilAberrationProfiles> | undefined;
  let bokehPreviewPair: ReturnType<typeof analysisJobsForState2.computeBokehPreviewPair> | undefined;
  let bestFocusZ: ReturnType<typeof analysisJobsForState2.computeBestFocusZ> | undefined;
  let sphericalAberration: ReturnType<typeof analysisJobsForState2.computeSphericalAberration> | undefined;
  let saProfile: ReturnType<typeof analysisJobsForState2.computeSAProfile> | undefined;
  let sphericalAberrationBlurCharacter:
    | ReturnType<typeof analysisJobsForState2.computeSphericalAberrationBlurCharacter>
    | undefined;
  let fieldCurvatureBundle: ReturnType<typeof analysisJobsForState2.computeFieldCurvatureBundle> | undefined;
  let chromaticAnalysis: ReturnType<typeof analysisJobsForState2.computeChromaticAnalysis> | undefined;
  let chromaticRayTraceAnalysis: ReturnType<typeof analysisJobsForState2.computeChromaticRayTraceAnalysis> | undefined;
  let comaAnalysis: ReturnType<typeof analysisJobsForState2.computeComaAnalysis> | undefined;

  return {
    preparedState,
    dynamicEFL,
    currentEPSD,
    currentPhysStopSD,
    fieldGeometry,
    computeOpticalSummary: () =>
      (opticalSummary ??= analysisJobsForState2.computeOpticalSummary(
        preparedState,
        dynamicEFL,
        currentEPSD,
        currentPhysStopSD,
        resolvedFieldGeometry,
      )),
    computeDistortionCurve: () =>
      (distortionCurve ??= analysisJobsForState2.computeDistortionCurve(
        preparedState,
        dynamicEFL,
        currentPhysStopSD,
        resolvedFieldGeometry,
        sampling,
      )),
    computeDistortionFieldGrid: () =>
      (distortionFieldGrid ??= analysisJobsForState2.computeDistortionFieldGrid(
        preparedState,
        currentPhysStopSD,
        resolvedFieldGeometry,
      )),
    computeVignettingCurve: () =>
      (vignettingCurve ??= analysisJobsForState2.computeVignettingCurve(
        preparedState,
        currentEPSD,
        currentPhysStopSD,
        resolvedFieldGeometry,
        sampling,
      )),
    computeBothPupilAberrationProfiles: () =>
      (pupilProfiles ??= analysisJobsForState2.computeBothPupilAberrationProfiles(
        preparedState,
        sampling.pupilAberrationSampleCount ?? undefined,
        resolvedFieldGeometry,
      )),
    computeBokehPreviewPair: () =>
      (bokehPreviewPair ??= analysisJobsForState2.computeBokehPreviewPair(
        preparedState,
        currentEPSD,
        currentPhysStopSD,
        sampling,
      )),
    computeBestFocusZ: () =>
      (bestFocusZ ??= analysisJobsForState2.computeBestFocusZ(preparedState, currentEPSD, currentPhysStopSD)),
    computeSphericalAberration: () =>
      (sphericalAberration ??= analysisJobsForState2.computeSphericalAberration(
        preparedState,
        currentEPSD,
        currentPhysStopSD,
      )),
    computeSAProfile: () =>
      (saProfile ??= analysisJobsForState2.computeSAProfile(preparedState, currentEPSD, currentPhysStopSD)),
    computeSphericalAberrationBlurCharacter: () => {
      if (sphericalAberrationBlurCharacter === undefined) {
        sphericalAberration ??= analysisJobsForState2.computeSphericalAberration(
          preparedState,
          currentEPSD,
          currentPhysStopSD,
        );
        sphericalAberrationBlurCharacter = analysisJobsForState2.computeSphericalAberrationBlurCharacter(
          preparedState,
          currentEPSD,
          currentPhysStopSD,
          sphericalAberration,
          sampling,
        );
      }
      return sphericalAberrationBlurCharacter;
    },
    computeFieldCurvatureBundle: () =>
      (fieldCurvatureBundle ??= analysisJobsForState2.computeFieldCurvatureBundle(
        preparedState,
        currentEPSD,
        currentPhysStopSD,
        resolvedFieldGeometry,
        sampling,
      )),
    computeChromaticAnalysis: () =>
      (chromaticAnalysis ??= analysisJobsForState2.computeChromaticAnalysis(
        preparedState,
        currentEPSD,
        currentPhysStopSD,
        resolvedFieldGeometry,
        sampling,
      )),
    computeChromaticRayTraceAnalysis: () =>
      (chromaticRayTraceAnalysis ??= analysisJobsForState2.computeChromaticRayTraceAnalysis(
        preparedState,
        currentEPSD,
        currentPhysStopSD,
        resolvedFieldGeometry,
        { channels: CHROMATIC_CHANNEL_ORDER },
      )),
    computeComaAnalysis: () =>
      (comaAnalysis ??= analysisJobsForState2.computeComaAnalysis(
        preparedState,
        currentEPSD,
        currentPhysStopSD,
        resolvedFieldGeometry,
        sampling,
      )),
  };
}
