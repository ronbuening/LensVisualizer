export type ProjectionReferenceKind = "rectilinear" | "fisheye-equidistant" | "fisheye-equisolid";

/** Public projection seam; implementations live in the focused engine subdirectories. */
export {
  ABSOLUTE_HALF_FIELD_CEILING,
  MAX_FIELD_LAUNCH_DEG,
  TRACING_SAFETY_FACTOR,
  boundingSphereLaunchVector,
  distortionProjectionReferenceForLens,
  fisheyeProjectionFocalLengthAtZoom,
  fisheyeProjectionMaxTraceFieldAtZoom,
  isFisheyeProjection,
  launchSurfaceForFieldDeg,
  projectionFieldAngleForImageHeight,
  projectionFieldSlopesForImagePoint,
  projectionImageHeightForAngle,
  projectionImageHeightForLensAngle,
  projectionLaunchSlopeForField,
  projectionLaunchVectorForFieldAngles,
  projectionValueAtZoom,
  rectilinearProjectionMaxTraceField,
  resolveProjection,
} from "./field/projection.js";
export type {
  LaunchSurface,
  ProjectionAngularLaunch,
  ProjectionFieldSlopes,
  ProjectionLaunchSlope,
  ProjectionReference,
} from "./field/projection.js";
