/**
 * Analysis computation context — lazy, per-state accessors for expensive optical diagnostics.
 *
 * The analysis drawer often needs several metrics from the same PreparedOpticalState. This
 * context stores the shared slider-derived aperture, EFL, and field geometry inputs, then
 * memoizes each analysis result on first read so sibling panels do not repeat ray sweeps.
 */

import { runtimeView } from "../prescription/runtimeView.js";
import { analysisJobsForState2 } from "./analysisJobs.js";
import { computeLongitudinalChromaticFocus } from "../chromatic/analysis.js";
import { CHROMATIC_CHANNEL_ORDER } from "../chromatic/channels.js";
import { createAnalysisRequest, type AnalysisRequest, type AnalysisRequestParams } from "./request.js";
import {
  analysisSectionAvailability,
  assertAnalysisSectionAvailable,
  assertCenteredAnalysisSectionAvailable,
  type AnalysisSectionAvailability,
  type AnalysisSectionId,
} from "./analysisMovementSupport.js";
import { zPosForPreparedAnalysis2 } from "./preparedStateAdapters.js";
import { createPerspectiveAnalysisJobs, type PerspectiveAnalysisJobs } from "./perspectiveAnalysisJobs.js";

export type AnalysisComputationContextParams = AnalysisRequestParams;

const CONTEXT_BY_REQUEST = new WeakMap<AnalysisRequest, AnalysisComputationContext>();

/**
 * Lazy analysis facade for one immutable prepared state.
 *
 * Accessors return cached results after their first call. They have no side effects outside
 * the closure, but the retained results intentionally share the exact same optical inputs.
 */
export interface AnalysisComputationContext extends AnalysisComputationContextParams, PerspectiveAnalysisJobs {
  readonly request: AnalysisRequest;
  /** Diagnostic description only; memoization uses request identity. */
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
  /** Classical on-axis LoCA in the intrinsic lens frame, independent of rigid camera pose. */
  computeIntrinsicLongitudinalChromaticFocus: () => ReturnType<typeof computeLongitudinalChromaticFocus>;
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
export function createAnalysisComputationContext(
  params: AnalysisComputationContextParams | AnalysisRequest,
): AnalysisComputationContext {
  const request = "preparedGeometry" in params ? params : createAnalysisRequest(params);
  const cached = CONTEXT_BY_REQUEST.get(request);
  if (cached) return cached;
  const {
    preparedGeometry: preparedState,
    dynamicEFL,
    aperture: { entrancePupilSemiDiameterMm: currentEPSD, stopSemiDiameterMm: currentPhysStopSD },
    fieldGeometry,
    analysisQuality,
    sampling,
    perspectiveTraceContext,
  } = request;
  const resolvedFieldGeometry = fieldGeometry ?? undefined;
  const perspectiveCacheKey = perspectiveTraceContext?.cacheKey ?? "centered";
  let diagnosticKey: string | undefined;
  const computeSection = <Result>(section: AnalysisSectionId, compute: () => Result): Result => {
    assertAnalysisSectionAvailable(section, perspectiveTraceContext);
    return compute();
  };
  const computeCenteredSection = <Result>(section: AnalysisSectionId, compute: () => Result): Result => {
    assertCenteredAnalysisSectionAvailable(section, perspectiveTraceContext);
    return compute();
  };
  const perspectiveJobs = createPerspectiveAnalysisJobs({
    perspectiveTraceContext,
    dynamicEFL,
    currentEPSD,
    currentPhysStopSD,
    analysisQuality,
    sampling,
  });
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
  let intrinsicLongitudinalChromaticFocus: { value: ReturnType<typeof computeLongitudinalChromaticFocus> } | undefined;
  let comaAnalysis: ReturnType<typeof analysisJobsForState2.computeComaAnalysis> | undefined;

  const context: AnalysisComputationContext = {
    request,
    preparedState,
    dynamicEFL,
    currentEPSD,
    currentPhysStopSD,
    fieldGeometry,
    analysisQuality,
    sampling,
    perspectiveTraceContext,
    // Existing diagnostics retain their serialized description, off the memoization path.
    get cacheKey() {
      return (diagnosticKey ??= analysisContextDiagnosticKey(request));
    },
    perspectiveCacheKey,
    movementActive: perspectiveTraceContext?.pose.active ?? false,
    sectionAvailability: (section) => analysisSectionAvailability(section, perspectiveTraceContext),
    ...perspectiveJobs,
    computeOpticalSummary: () =>
      (opticalSummary ??= computeSection("summary", () => analysisJobsForState2.computeOpticalSummary(request))),
    computeDistortionCurve: () =>
      (distortionCurve ??= computeCenteredSection("distortion", () =>
        analysisJobsForState2.computeDistortionCurve(
          preparedState,
          dynamicEFL,
          currentPhysStopSD,
          resolvedFieldGeometry,
          sampling,
        ),
      )),
    computeDistortionFieldGrid: () =>
      (distortionFieldGrid ??= computeCenteredSection("distortion", () =>
        analysisJobsForState2.computeDistortionFieldGrid(preparedState, currentPhysStopSD, resolvedFieldGeometry),
      )),
    computeVignettingCurve: () =>
      (vignettingCurve ??= computeCenteredSection("vignetting", () =>
        analysisJobsForState2.computeVignettingCurve(
          preparedState,
          currentEPSD,
          currentPhysStopSD,
          resolvedFieldGeometry,
          sampling,
        ),
      )),
    computeBothPupilAberrationProfiles: () =>
      (pupilProfiles ??= computeCenteredSection("pupils", () =>
        analysisJobsForState2.computeBothPupilAberrationProfiles(
          preparedState,
          sampling.pupilAberrationSampleCount ?? undefined,
          resolvedFieldGeometry,
        ),
      )),
    computeBokehPreviewPair: () =>
      (bokehPreviewPair ??= computeCenteredSection("bokeh", () =>
        analysisJobsForState2.computeBokehPreviewPair(preparedState, currentEPSD, currentPhysStopSD, sampling),
      )),
    computeBestFocusZ: () =>
      (bestFocusZ ??= computeSection("spherical-aberration", () => analysisJobsForState2.computeBestFocusZ(request))),
    computeSphericalAberration: () =>
      (sphericalAberration ??= computeSection("spherical-aberration", () =>
        analysisJobsForState2.computeSphericalAberration(request),
      )),
    computeSAProfile: () =>
      (saProfile ??= computeSection("spherical-aberration", () => analysisJobsForState2.computeSAProfile(request))),
    computeSphericalAberrationBlurCharacter: () => {
      assertAnalysisSectionAvailable("spherical-aberration", perspectiveTraceContext);
      if (sphericalAberrationBlurCharacter === undefined) {
        sphericalAberration ??= analysisJobsForState2.computeSphericalAberration(request);
        sphericalAberrationBlurCharacter = analysisJobsForState2.computeSphericalAberrationBlurCharacter(
          request,
          sphericalAberration,
        );
      }
      return sphericalAberrationBlurCharacter;
    },
    computeFieldCurvatureBundle: () =>
      (fieldCurvatureBundle ??= computeCenteredSection("field-curvature", () =>
        analysisJobsForState2.computeFieldCurvatureBundle(request),
      )),
    computeChromaticAnalysis: () =>
      (chromaticAnalysis ??= computeCenteredSection("chromatic", () =>
        analysisJobsForState2.computeChromaticAnalysis(
          preparedState,
          currentEPSD,
          currentPhysStopSD,
          resolvedFieldGeometry,
          sampling,
        ),
      )),
    computeChromaticRayFanAnalysis: () =>
      (chromaticRayFanAnalysis ??= computeCenteredSection("chromatic", () =>
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
    computeIntrinsicLongitudinalChromaticFocus: () => {
      intrinsicLongitudinalChromaticFocus ??= {
        value: computeLongitudinalChromaticFocus(
          runtimeView(preparedState.lens),
          zPosForPreparedAnalysis2(preparedState),
          preparedState.focusT,
          preparedState.zoomT,
          currentEPSD,
          currentPhysStopSD,
          preparedState.aberrationT,
          {
            channels: CHROMATIC_CHANNEL_ORDER,
            longitudinalFractions: sampling.chromaticLongitudinalFractions,
          },
        ),
      };
      return intrinsicLongitudinalChromaticFocus.value;
    },
    computeComaAnalysis: () =>
      (comaAnalysis ??= computeCenteredSection("coma", () =>
        analysisJobsForState2.computeComaAnalysis(
          preparedState,
          currentEPSD,
          currentPhysStopSD,
          resolvedFieldGeometry,
          sampling,
        ),
      )),
  };
  CONTEXT_BY_REQUEST.set(request, context);
  return context;
}

function analysisContextDiagnosticKey(request: AnalysisRequest): string {
  return JSON.stringify({
    state: request.preparedGeometry.cacheKey,
    perspective: request.perspectiveTraceContext?.cacheKey ?? "centered",
    dynamicEFL: request.dynamicEFL,
    currentEPSD: request.aperture.entrancePupilSemiDiameterMm,
    currentPhysStopSD: request.aperture.stopSemiDiameterMm,
    fieldGeometry: request.fieldGeometry,
    analysisQuality: request.analysisQuality,
    sampling: request.sampling,
  });
}
