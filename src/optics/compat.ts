/**
 * Engine compatibility facade — maps runtime-lens APIs onto optics-engine modules.
 *
 * Preserves the historical helper names consumed by UI code and tests while the
 * implementation lives in focused prescription, state, trace, field, and analysis modules.
 */

import { layoutFromPrepared } from "./state/layout.js";
import { eflAtZoom, epAtZoom, fopenAtZoom, clampStationControl } from "./state/stationTables.js";
import { runtimeView } from "./prescription/runtimeView.js";
import type { LayoutResult, LensData, RuntimeLens } from "../types/optics.js";
import type { CanonicalLens, IngestedPrescription } from "./prescription/canonical.js";
import type { CompiledLens, PreparedOpticalState } from "./types.js";
import { compiledLensFromRuntime, compileLensData, compileLens } from "./prescription/compile.js";
import { prepareState } from "./state/preparedGeometry.js";
/**
 * Build and register a RuntimeLens from defaulted lens data.
 *
 * @param data - lens prescription after catalog defaults are acceptable
 * @returns the shared frozen RuntimeLens for the canonical identity
 */
export function buildLens2(data: LensData): RuntimeLens {
  return runtimeView(compileLensData(data));
}

/**
 * Compile a transported canonical input and publish its compatibility view.
 *
 * @param input - canonical lens and source provenance, before rear-plate expansion
 * @returns frozen runtime sharing one successful compilation per prescription identity
 */
export function buildCanonicalLens(input: IngestedPrescription<CanonicalLens>): RuntimeLens {
  return runtimeView(compileLens(input));
}

/**
 * Retrieve the compiled owner of a RuntimeLens.
 *
 * The association is lookup-only; callers must not mutate a RuntimeLens in
 * place because prepared-state caches assume a fresh object for changed optics.
 *
 * @param L - runtime lens object returned by buildLens
 * @returns normalized engine lens used by prepared-state modules
 */
export function engineLensFromRuntime(L: RuntimeLens): CompiledLens {
  return compiledLensFromRuntime(L);
}

/**
 * Compile current focus/zoom/aberration state for a RuntimeLens.
 *
 * @param L - runtime lens object
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, ignored by prime lenses
 * @param aberrationT - normalized aberration spacing slider
 * @returns prepared optical state with current surface spacings and image plane
 */
export function prepareRuntimeState(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  aberrationT = 0,
): PreparedOpticalState {
  return prepareState(engineLensFromRuntime(L), focusT, zoomT, aberrationT);
}

/**
 * Compute current surface layout in RuntimeLens-compatible shape.
 *
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, ignored by prime lenses
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns vertex positions, current thicknesses, and image-plane z in mm
 */
export function doLayout2(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): LayoutResult {
  const state = prepareRuntimeState(L, focusT, zoomT, aberrationT);
  return layoutFromPrepared(state);
}

/**
 * Return current axial thickness after surface `i`.
 *
 * @param i - physical surface index
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, ignored by prime lenses
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns current distance to the next surface in mm, or 0 for invalid indices
 */
export function thick2(i: number, focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  return prepareRuntimeState(L, focusT, zoomT, aberrationT).surfaces[i]?.d ?? 0;
}

/**
 * Interpolate effective focal length for the current zoom position.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns effective focal length in mm
 */
export function eflAtZoom2(zoomT: number, L: RuntimeLens): number {
  return eflAtZoom(clampStationControl(zoomT), L);
}

/**
 * Interpolate entrance-pupil semi-diameter for the current zoom position.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns entrance-pupil semi-diameter in mm
 */
export function epAtZoom2(zoomT: number, L: RuntimeLens): number {
  return epAtZoom(clampStationControl(zoomT), L);
}

/**
 * Interpolate wide-open f-number for the current zoom position.
 *
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns wide-open f-number for the selected zoom state
 */
export function fopenAtZoom2(zoomT: number, L: RuntimeLens): number {
  return fopenAtZoom(clampStationControl(zoomT), L);
}

export {
  traceEngineRay2,
  traceRay2,
  traceRayChromatic2,
  traceRayVector2,
  traceRayVectorChromatic2,
  traceSkewRay2,
  traceSkewRayChromatic2,
  traceSkewRayVector2,
  traceSkewRayVectorChromatic2,
  type VectorRayTraceInput2,
} from "./trace/rayAdapters.js";
export { traceToStopViaGeneralized2 } from "./trace/stopTrace.js";
export {
  chiefRayImageHeight2,
  chiefRayImageHeightAccurate2,
  invertChiefRayImageHeights,
  type ImageHeightInversionResult,
  computeAnalysisFieldGeometryAtState2,
  computeBoundingSphereLaunchRadiusMm2,
  computeBoundingSphereVectorFieldLaunch2,
  computeFieldGeometryAtState2,
  conjugateK2,
  entrancePupilAtState2,
  offsetVectorFieldRay2,
  solveChiefRay2,
  solveChiefRayBoundingSphere2,
  solveFieldAngleForImageHeight2,
  solveFieldAngleForImageHeightAccurate2,
  solveFieldAnglesForImageHeightsAccurate2,
  traceChiefRayAtAngle2,
  traceParaxialRay2,
  type ChiefRaySolveResult2,
  type EntrancePupilState2,
  type FieldGeometryState2,
  type OffsetVectorFieldRay2,
  type VectorFieldRayLaunch2,
} from "./state/fieldAdapters.js";
export {
  ABSOLUTE_HALF_FIELD_CEILING,
  MAX_FIELD_LAUNCH_DEG,
  TRACING_SAFETY_FACTOR,
  boundingSphereLaunchVector2,
  distortionProjectionReferenceForLens2,
  fisheyeProjectionFocalLengthAtZoom2,
  fisheyeProjectionMaxTraceFieldAtZoom2,
  isFisheyeProjection2,
  launchSurfaceForFieldDeg2,
  projectionFieldAngleForImageHeight2,
  projectionFieldSlopesForImagePoint2,
  projectionImageHeightForAngle2,
  projectionImageHeightForLensAngle2,
  projectionLaunchSlopeForField2,
  projectionLaunchVectorForFieldAngles2,
  projectionValueAtZoom2,
  rectilinearProjectionMaxTraceField2,
  resolveProjection2,
  type LaunchSurface2,
  type ProjectionAngularLaunch2,
  type ProjectionFieldSlopes2,
  type ProjectionLaunchSlope2,
  type ProjectionReference2,
} from "./field/projection.js";
export {
  getChiefRayDiagnostics2,
  resetChiefRayDiagnostics2,
  type ChiefRayDiagnostics2,
  type ChiefRayStatus2,
} from "./diagnostics/chiefRay.js";
export {
  computeCardinalElements2,
  computeCardinalElementsAtState2,
  type CardinalDistance2,
  type CardinalElements2,
  type CardinalPoint2,
} from "./first-order/cardinals.js";
export { effectiveFNumber2 } from "./first-order/fNumber.js";
export { eflAtFocus2 } from "./first-order/focusBreathing.js";
export {
  CHANNEL_WAVELENGTH_NM_2,
  CHROMATIC_CHANNELS_2,
  channelIndexResolverForState2,
  indexAtPreparedSurface2,
  indexAtRuntimeSurface2,
  wavelengthNd2,
  type SurfaceIndexResolver2,
} from "./chromatic/indexResolver.js";
export { computeChromaticRayFanSpread2 } from "./chromatic/chromaticTrace.js";
export { dispersionTableFromRuntime2, makeSurfaceDispersion2 } from "./chromatic/dispersionAdapter.js";
export {
  summarizeDispersionQuality2,
  summarizeDispersionQualityForLens2,
  summarizeDispersionQualityForState2,
} from "./chromatic/dispersionQuality.js";
export {
  computeElementRenderDiagnostics2,
  computeElementShapes2,
  computeStandaloneMirrorPaths2,
  createCoordinateTransforms2,
  stateForRuntimeDiagram2,
} from "./diagram/runtimeDiagramAdapter.js";
export { computeElementRenderDiagnosticsForState2 } from "./diagram/renderDiagnostics.js";
export { computeElementShapesForState2 } from "./diagram/elementShapes.js";
export { surfacePathD2, SVG_PATH_SUBDIVISIONS_2, type DiagramPointTransform2 } from "./diagram/surfaceOutline.js";
export { analysisJobs2, analysisJobsForState2 } from "./analysis/analysisJobs.js";
export {
  createAnalysisComputationContext,
  type AnalysisComputationContext,
  type AnalysisComputationContextParams,
} from "./analysis/analysisContext.js";
export {
  AnalysisSectionUnavailableError,
  analysisSectionAvailability,
  assertAnalysisSectionAvailable,
  assertCenteredAnalysisSectionAvailable,
  type AnalysisSectionAvailability,
  type AnalysisSectionId,
  type AnalysisSectionMode,
} from "./analysis/analysisMovementSupport.js";
export {
  computeComaAnalysis2,
  computeComaAnalysisForState2,
  computeComaPointCloudPreview2,
  computeComaPreview2,
  computeFieldCurvature2,
  computeFieldCurvatureBundle2,
  computeFieldCurvatureBundleForState2,
  computeFieldCurvatureForState2,
  computeMeridionalComa2,
  computeSAProfile2,
  computeSAProfileForState2,
  computeSagittalComa2,
  computeSphericalAberration2,
  computeSphericalAberrationBlurCharacter2,
  computeSphericalAberrationBlurCharacterForState2,
  computeSphericalAberrationForState2,
} from "./analysis/aberrations.js";
export {
  computeChromaticAnalysis2,
  computeChromaticAnalysisForState2,
  computeChromaticRayFanAnalysis2,
  computeChromaticRayFanAnalysisForState2,
  computeLateralColorCurve2,
  computeLongitudinalChromaticFocus2,
  summarizeChromaticFieldFocus2,
  type ChromaticAnalysisOptions,
  type ChromaticAnalysisResult,
  type ChromaticChannelSpan2,
  type ChromaticFieldFocusFieldSummary2,
  type ChromaticFieldFocusSummary2,
  type ChromaticRayFanAnalysis2,
  type ChromaticRayFanAnalysisOptions2,
  type LateralColorChannelSample,
  type LateralColorCurveResult,
  type LateralColorFieldSample,
  type LongitudinalChromaticFocusResult,
  type LongitudinalChromaticFocusSample,
} from "./analysis/chromatic.js";
export {
  buildBokehDensityGrid2,
  buildBokehRadialProfile2,
  classifyBokehBrightnessCharacter2,
  computeBestFocusZ2,
  computeBestFocusZForState2,
  computeBokehPreview2,
  computeBokehPreviewPair2,
  computeBokehPreviewPairForState2,
  describeBokehDefocusSide2,
} from "./analysis/bokeh.js";
export {
  computeDistortionCurve2,
  computeDistortionCurveForState2,
  computeDistortionFieldGrid2,
  computeDistortionFieldGridForState2,
} from "./analysis/distortion.js";
export { computeVignettingCurve2, computeVignettingCurveForState2 } from "./analysis/vignetting.js";
export {
  computeBothPupilAberrationProfiles2,
  computeBothPupilAberrationProfilesForState2,
  computeExitPupilAberrationProfile2,
  computePupilAberrationProfile2,
  PUPIL_ABERRATION_SAMPLE_COUNT_2,
} from "./analysis/pupilAberration.js";
export { computeOpticalSummaryForState2, type OpticalSummaryMetrics2 } from "./analysis/summary.js";
export {
  computeGroupMovementProfile2,
  computeGroupMovementProfileForState2,
  firstAvailableGroupMovementMode2,
  getGroupMovementAvailability2,
  inferLensMovementGroups2,
  isGroupMovementModeAvailable2,
} from "./analysis/groupMovement.js";
export {
  computeAsphericDeparture2,
  computeBestFitSphereR2,
  computeDepartureProfile2,
  nearestSurfaceForClick2,
  peakAbsDeparture2,
  rmsDeparture2,
  type DepartureSample2,
} from "./analysis/asphericComparison.js";
export {
  computeLocaBarOffsets2,
  REFERENCE_LOCA_MM_2,
  type ChromaticBarResult2,
} from "./analysis/chromaticRayFanScaling.js";
