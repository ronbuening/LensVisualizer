/**
 * Analysis computation context — lazy, per-state accessors for expensive optical diagnostics.
 *
 * The analysis drawer often needs several metrics from the same PreparedOpticalState. This
 * context stores the shared slider-derived aperture, EFL, and field geometry inputs, then
 * memoizes each analysis result on first read so sibling panels do not repeat ray sweeps.
 */

import { analysisJobs } from "./analysisJobs.js";
import { computeLongitudinalChromaticFocus } from "./chromatic/analysis.js";
import { createAnalysisRequest } from "./request.js";
import type { AnalysisRequest, AnalysisRequestParams } from "./request.js";
import {
  analysisSectionAvailability,
  assertAnalysisSectionAvailable,
  assertCenteredAnalysisSectionAvailable,
} from "./analysisMovementSupport.js";
import type { AnalysisSectionAvailability, AnalysisSectionId } from "./analysisMovementSupport.js";
import { createPerspectiveAnalysisJobs } from "./perspectiveAnalysisJobs.js";
import type { PerspectiveAnalysisJobs } from "./perspectiveAnalysisJobs.js";

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
  computeOpticalSummary: () => ReturnType<typeof analysisJobs.computeOpticalSummary>;
  computeDistortionCurve: () => ReturnType<typeof analysisJobs.computeDistortionCurve>;
  computeDistortionFieldGrid: () => ReturnType<typeof analysisJobs.computeDistortionFieldGrid>;
  computeVignettingCurve: () => ReturnType<typeof analysisJobs.computeVignettingCurve>;
  computeBothPupilAberrationProfiles: () => ReturnType<typeof analysisJobs.computeBothPupilAberrationProfiles>;
  computeBokehPreviewPair: () => ReturnType<typeof analysisJobs.computeBokehPreviewPair>;
  computeBestFocusZ: () => ReturnType<typeof analysisJobs.computeBestFocusZ>;
  computeSphericalAberration: () => ReturnType<typeof analysisJobs.computeSphericalAberration>;
  computeSAProfile: () => ReturnType<typeof analysisJobs.computeSAProfile>;
  computeSphericalAberrationBlurCharacter: () => ReturnType<
    typeof analysisJobs.computeSphericalAberrationBlurCharacter
  >;
  computeFieldCurvatureBundle: () => ReturnType<typeof analysisJobs.computeFieldCurvatureBundle>;
  computeChromaticAnalysis: () => ReturnType<typeof analysisJobs.computeChromaticAnalysis>;
  computeChromaticRayFanAnalysis: () => ReturnType<typeof analysisJobs.computeChromaticRayFanAnalysis>;
  /** Classical on-axis LoCA in the intrinsic lens frame, independent of rigid camera pose. */
  computeIntrinsicLongitudinalChromaticFocus: () => ReturnType<typeof computeLongitudinalChromaticFocus>;
  computeComaAnalysis: () => ReturnType<typeof analysisJobs.computeComaAnalysis>;
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
  const perspectiveJobs = createPerspectiveAnalysisJobs(request);
  let opticalSummary: ReturnType<typeof analysisJobs.computeOpticalSummary> | undefined;
  let distortionCurve: ReturnType<typeof analysisJobs.computeDistortionCurve> | undefined;
  let distortionFieldGrid: ReturnType<typeof analysisJobs.computeDistortionFieldGrid> | undefined;
  let vignettingCurve: ReturnType<typeof analysisJobs.computeVignettingCurve> | undefined;
  let pupilProfiles: ReturnType<typeof analysisJobs.computeBothPupilAberrationProfiles> | undefined;
  let bokehPreviewPair: ReturnType<typeof analysisJobs.computeBokehPreviewPair> | undefined;
  let bestFocusZ: ReturnType<typeof analysisJobs.computeBestFocusZ> | undefined;
  let sphericalAberration: ReturnType<typeof analysisJobs.computeSphericalAberration> | undefined;
  let saProfile: ReturnType<typeof analysisJobs.computeSAProfile> | undefined;
  let sphericalAberrationBlurCharacter:
    | ReturnType<typeof analysisJobs.computeSphericalAberrationBlurCharacter>
    | undefined;
  let fieldCurvatureBundle: ReturnType<typeof analysisJobs.computeFieldCurvatureBundle> | undefined;
  let chromaticAnalysis: ReturnType<typeof analysisJobs.computeChromaticAnalysis> | undefined;
  let chromaticRayFanAnalysis: ReturnType<typeof analysisJobs.computeChromaticRayFanAnalysis> | undefined;
  let intrinsicLongitudinalChromaticFocus: { value: ReturnType<typeof computeLongitudinalChromaticFocus> } | undefined;
  let comaAnalysis: ReturnType<typeof analysisJobs.computeComaAnalysis> | undefined;

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
      (opticalSummary ??= computeSection("summary", () => analysisJobs.computeOpticalSummary(request))),
    computeDistortionCurve: () =>
      (distortionCurve ??= computeCenteredSection("distortion", () => analysisJobs.computeDistortionCurve(request))),
    computeDistortionFieldGrid: () =>
      (distortionFieldGrid ??= computeCenteredSection("distortion", () =>
        // The context has always kept grid defaults independent of curve/quality sampling.
        analysisJobs.computeDistortionFieldGrid({ ...request, sampling: {} }),
      )),
    computeVignettingCurve: () =>
      (vignettingCurve ??= computeCenteredSection("vignetting", () => analysisJobs.computeVignettingCurve(request))),
    computeBothPupilAberrationProfiles: () =>
      (pupilProfiles ??= computeCenteredSection("pupils", () =>
        analysisJobs.computeBothPupilAberrationProfiles(request),
      )),
    computeBokehPreviewPair: () =>
      (bokehPreviewPair ??= computeCenteredSection("bokeh", () => analysisJobs.computeBokehPreviewPair(request))),
    computeBestFocusZ: () =>
      (bestFocusZ ??= computeSection("spherical-aberration", () => analysisJobs.computeBestFocusZ(request))),
    computeSphericalAberration: () =>
      (sphericalAberration ??= computeSection("spherical-aberration", () =>
        analysisJobs.computeSphericalAberration(request),
      )),
    computeSAProfile: () =>
      (saProfile ??= computeSection("spherical-aberration", () => analysisJobs.computeSAProfile(request))),
    computeSphericalAberrationBlurCharacter: () => {
      assertAnalysisSectionAvailable("spherical-aberration", perspectiveTraceContext);
      if (sphericalAberrationBlurCharacter === undefined) {
        sphericalAberration ??= analysisJobs.computeSphericalAberration(request);
        sphericalAberrationBlurCharacter = analysisJobs.computeSphericalAberrationBlurCharacter(
          request,
          sphericalAberration,
        );
      }
      return sphericalAberrationBlurCharacter;
    },
    computeFieldCurvatureBundle: () =>
      (fieldCurvatureBundle ??= computeCenteredSection("field-curvature", () =>
        analysisJobs.computeFieldCurvatureBundle(request),
      )),
    computeChromaticAnalysis: () =>
      (chromaticAnalysis ??= computeCenteredSection("chromatic", () => analysisJobs.computeChromaticAnalysis(request))),
    computeChromaticRayFanAnalysis: () =>
      (chromaticRayFanAnalysis ??= computeCenteredSection("chromatic", () =>
        analysisJobs.computeChromaticRayFanAnalysis(request),
      )),
    computeIntrinsicLongitudinalChromaticFocus: () => {
      intrinsicLongitudinalChromaticFocus ??= {
        value: computeLongitudinalChromaticFocus(request),
      };
      return intrinsicLongitudinalChromaticFocus.value;
    },
    computeComaAnalysis: () =>
      (comaAnalysis ??= computeCenteredSection("coma", () => analysisJobs.computeComaAnalysis(request))),
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
