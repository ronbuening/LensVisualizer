import buildRuntimeLens from "./runtimeLens.js";
import type { LayoutResult, LensData, RuntimeLens } from "../types/optics.js";
import type { EngineLens, PreparedOpticalState } from "./types.js";
import { normalizeRuntimeLens, withLensDefaults } from "./prescription/normalizeLensData.js";
import { prepareState } from "./state/prepareState.js";

const ENGINE_LENS_BY_RUNTIME = new WeakMap<RuntimeLens, EngineLens>();

export function buildLens2(data: LensData): RuntimeLens {
  const runtime = buildRuntimeLens(withLensDefaults(data));
  ENGINE_LENS_BY_RUNTIME.set(runtime, normalizeRuntimeLens(runtime));
  return runtime;
}

export function engineLensFromRuntime(L: RuntimeLens): EngineLens {
  const cached = ENGINE_LENS_BY_RUNTIME.get(L);
  if (cached) return cached;
  const engineLens = normalizeRuntimeLens(L);
  ENGINE_LENS_BY_RUNTIME.set(L, engineLens);
  return engineLens;
}

export function prepareRuntimeState(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  aberrationT = 0,
): PreparedOpticalState {
  return prepareState(engineLensFromRuntime(L), focusT, zoomT, aberrationT);
}

export function doLayout2(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): LayoutResult {
  const state = prepareRuntimeState(L, focusT, zoomT, aberrationT);
  return {
    z: [...state.z],
    th: state.surfaces.map((surface) => surface.d),
    imgZ: state.imgZ,
  };
}

export function thick2(i: number, focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  return prepareRuntimeState(L, focusT, zoomT, aberrationT).surfaces[i]?.d ?? 0;
}

export function eflAtZoom2(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.EFL;
  return interpolateZoomArray2(zoomT, L.zoomEFLs!);
}

export function epAtZoom2(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom) return L.EP.epSD;
  return interpolateZoomArray2(zoomT, L.zoomEPs!);
}

export function fopenAtZoom2(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom || !L.zoomFOPENs) return L.FOPEN;
  return interpolateZoomArray2(zoomT, L.zoomFOPENs);
}

function interpolateZoomArray2(zoomT: number, values: readonly number[]): number {
  if (values.length === 1) return values[0];
  const t = Math.max(0, Math.min(1, Number.isFinite(zoomT) ? zoomT : 0));
  const pos = t * (values.length - 1);
  const idx = Math.min(Math.floor(pos), values.length - 2);
  const frac = pos - idx;
  return values[idx] + (values[idx + 1] - values[idx]) * frac;
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
  traceChiefRayAtAngle2,
  traceParaxialRay2,
  type ChiefRaySolveResult2,
  type EntrancePupilState2,
  type FieldGeometryState2,
  type OffsetVectorFieldRay2,
  type VectorFieldRayLaunch2,
} from "./field/fieldGeometry.js";
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
} from "./field/chiefRayCache.js";
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
export { computeChromaticSpread2, traceEngineRayChromatic2 } from "./chromatic/chromaticTrace.js";
export { dispersionTableFromRuntime2, makeSurfaceDispersion2 } from "./chromatic/dispersionAdapter.js";
export {
  summarizeDispersionQuality2,
  summarizeDispersionQualityForLens2,
  summarizeDispersionQualityForState2,
} from "./chromatic/dispersionQuality.js";
export {
  computeElementRenderDiagnostics2,
  computeElementShapes2,
  createCoordinateTransforms2,
  stateForRuntimeDiagram2,
} from "./diagram/runtimeDiagramAdapter.js";
export { computeElementRenderDiagnosticsForState2 } from "./diagram/renderDiagnostics.js";
export { computeElementShapesForState2 } from "./diagram/elementShapes.js";
export { surfacePathD2, SVG_PATH_SUBDIVISIONS_2, type DiagramPointTransform2 } from "./diagram/surfaceOutline.js";
export { analysisJobs2, analysisJobsForState2 } from "./analysis/analysisJobs.js";
export {
  computeComaAnalysis2,
  computeComaAnalysisForState2,
  computeComaPointCloudPreview2,
  computeComaPreview2,
  computeFieldCurvature2,
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
export { computeLcaBarOffsets2, REFERENCE_LCA_MM_2, type LcaBarResult2 } from "./analysis/lcaScaling.js";
