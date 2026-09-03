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
import type { PerspectiveTraceContext } from "../perspective/trace.js";
import {
  analysisSectionAvailability,
  assertAnalysisSectionAvailable,
  type AnalysisSectionAvailability,
  type AnalysisSectionId,
} from "./analysisMovementSupport.js";

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
  perspectiveTraceContext?: PerspectiveTraceContext | null;
}

/**
 * Lazy analysis facade for one immutable prepared state.
 *
 * Accessors return cached results after their first call. They have no side effects outside
 * the closure, but the retained results intentionally share the exact same optical inputs.
 */
export interface AnalysisComputationContext extends AnalysisComputationContextParams {
  /** Complete identity for all scalar inputs plus fixed-camera lens pose. */
  cacheKey: string;
  /** Perspective-only identity, or `centered` when no trace context was supplied. */
  perspectiveCacheKey: string;
  movementActive: boolean;
  sectionAvailability: (section: AnalysisSectionId) => AnalysisSectionAvailability;
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
  computeChromaticRayFanAnalysis: () => ReturnType<typeof analysisJobsForState2.computeChromaticRayFanAnalysis>;
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
  perspectiveTraceContext = null,
}: AnalysisComputationContextParams): AnalysisComputationContext {
  const resolvedFieldGeometry = fieldGeometry ?? undefined;
  const perspectiveCacheKey = perspectiveTraceContext?.cacheKey ?? "centered";
  const cacheKey = analysisComputationCacheKey({
    preparedState,
    dynamicEFL,
    currentEPSD,
    currentPhysStopSD,
    fieldGeometry,
    sampling,
    perspectiveTraceContext,
  });
  const computeSection = <Result>(section: AnalysisSectionId, compute: () => Result): Result => {
    assertAnalysisSectionAvailable(section, perspectiveTraceContext);
    return compute();
  };
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
  let chromaticRayFanAnalysis: ReturnType<typeof analysisJobsForState2.computeChromaticRayFanAnalysis> | undefined;
  let comaAnalysis: ReturnType<typeof analysisJobsForState2.computeComaAnalysis> | undefined;

  return {
    preparedState,
    dynamicEFL,
    currentEPSD,
    currentPhysStopSD,
    fieldGeometry,
    sampling,
    perspectiveTraceContext,
    cacheKey,
    perspectiveCacheKey,
    movementActive: perspectiveTraceContext?.pose.active ?? false,
    sectionAvailability: (section) => analysisSectionAvailability(section, perspectiveTraceContext),
    computeOpticalSummary: () =>
      (opticalSummary ??= computeSection("summary", () =>
        analysisJobsForState2.computeOpticalSummary(
          preparedState,
          dynamicEFL,
          currentEPSD,
          currentPhysStopSD,
          resolvedFieldGeometry,
        ),
      )),
    computeDistortionCurve: () =>
      (distortionCurve ??= computeSection("distortion", () =>
        analysisJobsForState2.computeDistortionCurve(
          preparedState,
          dynamicEFL,
          currentPhysStopSD,
          resolvedFieldGeometry,
          sampling,
        ),
      )),
    computeDistortionFieldGrid: () =>
      (distortionFieldGrid ??= computeSection("distortion", () =>
        analysisJobsForState2.computeDistortionFieldGrid(preparedState, currentPhysStopSD, resolvedFieldGeometry),
      )),
    computeVignettingCurve: () =>
      (vignettingCurve ??= computeSection("vignetting", () =>
        analysisJobsForState2.computeVignettingCurve(
          preparedState,
          currentEPSD,
          currentPhysStopSD,
          resolvedFieldGeometry,
          sampling,
        ),
      )),
    computeBothPupilAberrationProfiles: () =>
      (pupilProfiles ??= computeSection("pupils", () =>
        analysisJobsForState2.computeBothPupilAberrationProfiles(
          preparedState,
          sampling.pupilAberrationSampleCount ?? undefined,
          resolvedFieldGeometry,
        ),
      )),
    computeBokehPreviewPair: () =>
      (bokehPreviewPair ??= computeSection("bokeh", () =>
        analysisJobsForState2.computeBokehPreviewPair(preparedState, currentEPSD, currentPhysStopSD, sampling),
      )),
    computeBestFocusZ: () =>
      (bestFocusZ ??= computeSection("spherical-aberration", () =>
        analysisJobsForState2.computeBestFocusZ(preparedState, currentEPSD, currentPhysStopSD),
      )),
    computeSphericalAberration: () =>
      (sphericalAberration ??= computeSection("spherical-aberration", () =>
        analysisJobsForState2.computeSphericalAberration(preparedState, currentEPSD, currentPhysStopSD),
      )),
    computeSAProfile: () =>
      (saProfile ??= computeSection("spherical-aberration", () =>
        analysisJobsForState2.computeSAProfile(preparedState, currentEPSD, currentPhysStopSD),
      )),
    computeSphericalAberrationBlurCharacter: () => {
      assertAnalysisSectionAvailable("spherical-aberration", perspectiveTraceContext);
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
      (fieldCurvatureBundle ??= computeSection("field-curvature", () =>
        analysisJobsForState2.computeFieldCurvatureBundle(
          preparedState,
          currentEPSD,
          currentPhysStopSD,
          resolvedFieldGeometry,
          sampling,
        ),
      )),
    computeChromaticAnalysis: () =>
      (chromaticAnalysis ??= computeSection("chromatic", () =>
        analysisJobsForState2.computeChromaticAnalysis(
          preparedState,
          currentEPSD,
          currentPhysStopSD,
          resolvedFieldGeometry,
          sampling,
        ),
      )),
    computeChromaticRayFanAnalysis: () =>
      (chromaticRayFanAnalysis ??= computeSection("chromatic", () =>
        analysisJobsForState2.computeChromaticRayFanAnalysis(
          preparedState,
          currentEPSD,
          currentPhysStopSD,
          resolvedFieldGeometry,
          {
            channels: CHROMATIC_CHANNEL_ORDER,
            onAxisFractions: sampling.chromaticRayTraceOnAxisFractions,
            offAxisFractions: sampling.chromaticRayTraceOffAxisFractions,
          },
        ),
      )),
    computeComaAnalysis: () =>
      (comaAnalysis ??= computeSection("coma", () =>
        analysisJobsForState2.computeComaAnalysis(
          preparedState,
          currentEPSD,
          currentPhysStopSD,
          resolvedFieldGeometry,
          sampling,
        ),
      )),
  };
}

function analysisComputationCacheKey(params: AnalysisComputationContextParams): string {
  return JSON.stringify({
    state: params.preparedState.cacheKey,
    perspective: params.perspectiveTraceContext?.cacheKey ?? "centered",
    dynamicEFL: params.dynamicEFL,
    currentEPSD: params.currentEPSD,
    currentPhysStopSD: params.currentPhysStopSD,
    fieldGeometry: params.fieldGeometry ?? null,
    sampling: params.sampling ?? {},
  });
}
