import buildLens from "../optics/buildLens.js";
import type { LensData, RuntimeLens } from "../types/optics.js";
import type { EngineLens, PreparedOpticalState } from "./types.js";
import { normalizeRuntimeLens, withLensDefaults } from "./prescription/normalizeLensData.js";
import { prepareState } from "./state/prepareState.js";

const ENGINE_LENS_BY_RUNTIME = new WeakMap<RuntimeLens, EngineLens>();

export function buildLens2(data: LensData): RuntimeLens {
  const runtime = buildLens(withLensDefaults(data));
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

export function prepareLegacyState(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  aberrationT = 0,
): PreparedOpticalState {
  return prepareState(engineLensFromRuntime(L), focusT, zoomT, aberrationT);
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
} from "./field/chiefRayCache.js";
export {
  computeCardinalElements2,
  computeCardinalElementsAtState2,
  type CardinalElements2,
} from "./first-order/cardinals.js";
export { effectiveFNumber2 } from "./first-order/fNumber.js";
export { eflAtFocus2 } from "./first-order/focusBreathing.js";
