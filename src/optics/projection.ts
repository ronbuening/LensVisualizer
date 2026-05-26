/**
 * Stable projection helpers backed by Optics 2.
 *
 * The previous implementation is retained in `projectionLegacy.ts` for
 * rollback/parity comparison while callers keep this module path.
 */

export {
  ABSOLUTE_HALF_FIELD_CEILING,
  MAX_FIELD_LAUNCH_DEG,
  TRACING_SAFETY_FACTOR,
  boundingSphereLaunchVector2 as boundingSphereLaunchVector,
  distortionProjectionReferenceForLens2 as distortionProjectionReferenceForLens,
  fisheyeProjectionFocalLengthAtZoom2 as fisheyeProjectionFocalLengthAtZoom,
  fisheyeProjectionMaxTraceFieldAtZoom2 as fisheyeProjectionMaxTraceFieldAtZoom,
  isFisheyeProjection2 as isFisheyeProjection,
  launchSurfaceForFieldDeg2 as launchSurfaceForFieldDeg,
  projectionFieldAngleForImageHeight2 as projectionFieldAngleForImageHeight,
  projectionFieldSlopesForImagePoint2 as projectionFieldSlopesForImagePoint,
  projectionImageHeightForAngle2 as projectionImageHeightForAngle,
  projectionImageHeightForLensAngle2 as projectionImageHeightForLensAngle,
  projectionLaunchSlopeForField2 as projectionLaunchSlopeForField,
  projectionLaunchVectorForFieldAngles2 as projectionLaunchVectorForFieldAngles,
  projectionValueAtZoom2 as projectionValueAtZoom,
  rectilinearProjectionMaxTraceField2 as rectilinearProjectionMaxTraceField,
  resolveProjection2 as resolveProjection,
  type LaunchSurface2 as LaunchSurface,
  type ProjectionAngularLaunch2 as ProjectionAngularLaunch,
  type ProjectionFieldSlopes2 as ProjectionFieldSlopes,
  type ProjectionLaunchSlope2 as ProjectionLaunchSlope,
  type ProjectionReference2 as ProjectionReference,
} from "../optics-2/compat.js";

export type ProjectionReferenceKind = "rectilinear" | "fisheye-equidistant" | "fisheye-equisolid";
