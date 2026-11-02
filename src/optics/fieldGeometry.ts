/** Public fieldGeometry seam; implementations live in the focused engine subdirectories. */
export { getChiefRayDiagnostics, resetChiefRayDiagnostics } from "./diagnostics/chiefRay.js";
export type { ChiefRayDiagnostics, ChiefRayStatus } from "./diagnostics/chiefRay.js";
export type { ChiefRaySolveResult } from "./field/chiefRaySolve.js";
export type { EntrancePupilState } from "./field/geometry.js";
export type { ImageHeightInversionResult } from "./field/imageHeight.js";
export { offsetVectorFieldRay } from "./field/launch.js";
export type { FieldGeometryState, OffsetVectorFieldRay, VectorFieldRayLaunch } from "./field/launch.js";
export {
  chiefRayImageHeightAccurateForRuntimeLens,
  chiefRayImageHeightForRuntimeLens,
  computeAnalysisFieldGeometryAtState,
  computeBoundingSphereLaunchRadiusMmForRuntimeLens,
  computeBoundingSphereVectorFieldLaunchForRuntimeLens,
  computeFieldGeometryAtState,
  conjugateKForRuntimeLens,
  entrancePupilAtState,
  invertChiefRayImageHeights,
  paraxialObjectVergenceForRuntimeLens,
  solveChiefRayBoundingSphereForRuntimeLens,
  solveChiefRayForRuntimeLens,
  solveFieldAngleForImageHeightAccurateForRuntimeLens,
  solveFieldAngleForImageHeightForRuntimeLens,
  solveFieldAnglesForImageHeightsAccurateForRuntimeLens,
  traceChiefRayAtAngleForRuntimeLens,
  traceParaxialRayForRuntimeLens,
} from "./state/fieldAdapters.js";
