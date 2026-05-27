/**
 * Field-geometry compatibility barrel — stable public exports for field/chief-ray helpers.
 *
 * Keeps legacy imports working while the implementation lives under optics/field.
 */

export {
  chiefRayImageHeight2 as chiefRayImageHeight,
  chiefRayImageHeightAccurate2 as chiefRayImageHeightAccurate,
  computeAnalysisFieldGeometryAtState2 as computeAnalysisFieldGeometryAtState,
  computeBoundingSphereLaunchRadiusMm2 as computeBoundingSphereLaunchRadiusMm,
  computeBoundingSphereVectorFieldLaunch2 as computeBoundingSphereVectorFieldLaunch,
  computeFieldGeometryAtState2 as computeFieldGeometryAtState,
  conjugateK2 as conjugateK,
  entrancePupilAtState2 as entrancePupilAtState,
  offsetVectorFieldRay2 as offsetVectorFieldRay,
  solveChiefRay2 as solveChiefRay,
  solveChiefRayBoundingSphere2 as solveChiefRayBoundingSphere,
  solveFieldAngleForImageHeight2 as solveFieldAngleForImageHeight,
  solveFieldAngleForImageHeightAccurate2 as solveFieldAngleForImageHeightAccurate,
  solveFieldAnglesForImageHeightsAccurate2 as solveFieldAnglesForImageHeightsAccurate,
  traceChiefRayAtAngle2 as traceChiefRayAtAngle,
  traceParaxialRay2 as traceParaxialRay,
  type ChiefRaySolveResult2 as ChiefRaySolveResult,
  type EntrancePupilState2 as EntrancePupilState,
  type FieldGeometryState2 as FieldGeometryState,
  type OffsetVectorFieldRay2 as OffsetVectorFieldRay,
  type VectorFieldRayLaunch2 as VectorFieldRayLaunch,
} from "./compat.js";
