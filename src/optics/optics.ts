/** Public optics seam; implementations live in the focused engine subdirectories. */
export { effectiveFNumber } from "./first-order/fNumber.js";
export { eflAtFocus } from "./first-order/focusBreathing.js";
export { formatDist, formatFNumber, formatPetzvalRadius, marketedApertureNote } from "./first-order/format.js";
export { paraxialTrace, realTraceToStop } from "./first-order/lensConstants.js";
export { computeElementFocalLength } from "./first-order/thickLens.js";
export type { ProjectionReferenceKind } from "./projection.js";
export { fNumberAtStopdown } from "./state/aperture.js";
export { anchorLayoutToCamera } from "./state/cameraLayout.js";
export type { CameraAnchoredLayout } from "./state/cameraLayout.js";
export { FOCUS_INFINITY_CUTOFF, focusDistanceAt, remapFocusDistance } from "./state/focusDistance.js";
export { doLayout, stateSurfaces, thick } from "./state/layout.js";
export { stateWithZ } from "./state/preparedGeometry.js";
export {
  doLayoutForRuntimeLens,
  eflAtZoomClamped,
  engineLensFromRuntime,
  epAtZoomClamped,
  fopenAtZoomClamped,
  prepareRuntimeState,
  thickOrZero,
} from "./state/runtimeAdapters.js";
export {
  bAtZoom,
  closeFocusAtZoom,
  eflAtZoom,
  epAtZoom,
  epZRelStopAtZoom,
  fopenAtZoom,
  halfFieldAtZoom,
  interpolateStationTable,
  tracingHalfFieldAtZoom,
  wideOpenStopAtZoom,
  xpAtZoom,
  xpZRelLastSurfAtZoom,
  yRatioAtZoom,
} from "./state/stationTables.js";
export { traceChiefRelativeSkewRay, traceChiefRelativeSkewRayChromatic } from "./trace/chiefRelative.js";
export {
  skewImagePlaneIntercept,
  traceEngineRay,
  traceRay,
  traceRayChromatic,
  traceRayVector,
  traceRayVectorChromatic,
  traceSkewRay,
  traceSkewRayChromatic,
  traceSkewRayVector,
  traceSkewRayVectorChromatic,
} from "./trace/rayAdapters.js";
export type { SkewImagePlaneIntercept, VectorRayTraceInput } from "./trace/rayAdapters.js";
export {
  isHeavyLensForRayWork,
  obstructionAwareRayFractionsForDensity,
  rayFractionsForDensity,
  raySampleCountForDensity,
} from "./trace/raySampling.js";
export type { RuntimeSkewRayTraceResult } from "./trace/runtimeRayResult.js";
export { stopInnerBlockedSemiDiameter } from "./trace/stopObstruction.js";
export { traceToStopViaGeneralized } from "./trace/stopTrace.js";
