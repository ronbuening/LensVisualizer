/**
 * Field-geometry barrel — re-exports current-state field and pupil helpers from chiefRay.
 *
 * Maintains a focused import path for analysis modules without duplicating launch logic.
 */

export {
  chiefRayImageHeight2,
  chiefRayImageHeightAccurate2,
  computeAnalysisFieldGeometryAtState2,
  computeFieldGeometryAtState2,
  conjugateK2,
  entrancePupilAtState2,
  solveChiefRay2,
  solveChiefRayBoundingSphere2,
  solveFieldAngleForImageHeight2,
  solveFieldAngleForImageHeightAccurate2,
  traceChiefRayAtAngle2,
  traceParaxialRay2,
  type ChiefRaySolveResult2,
  type EntrancePupilState2,
} from "./chiefRay.js";
export {
  computeBoundingSphereLaunchRadiusMm2,
  computeBoundingSphereVectorFieldLaunch2,
  offsetVectorFieldRay2,
  type FieldGeometryState2,
  type OffsetVectorFieldRay2,
  type VectorFieldRayLaunch2,
} from "./launch.js";
