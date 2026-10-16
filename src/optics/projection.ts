/**
 * Projection public barrel — stable exports for field-angle and fisheye launch helpers.
 *
 * Keeps callers on the historic optics/projection path while implementation lives in optics/field/projection,
 * which it re-exports directly (not through compat.ts), so it stays out of the compat import cycle.
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
} from "./field/projection.js";

/** Supported projection-reference families for distortion and image-height mapping. */
export type ProjectionReferenceKind = "rectilinear" | "fisheye-equidistant" | "fisheye-equisolid";
