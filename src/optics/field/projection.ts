/**
 * Projection model helpers — rectilinear and fisheye image-height and launch mappings.
 *
 * Centralizes field-angle limits, zoom-dependent projection data, and bounding-sphere launch math
 * so callers do not inline Math.tan conventions.
 */

import type { LensProjectionConfig, RuntimeLens } from "../../types/optics.js";

export type ProjectionReferenceKind = "rectilinear" | "fisheye-equidistant" | "fisheye-equisolid";

export interface ProjectionReference2 {
  kind: ProjectionReferenceKind;
  label: string;
  shortLabel: string;
  focalScaleMm: number;
}

export interface ProjectionFieldSlopes2 {
  fieldSlopeX: number;
  fieldSlopeY: number;
  equivalentAngleDeg: number;
}

export interface ProjectionLaunchSlope2 {
  uField: number;
  status: "ok" | "out-of-domain";
}

export interface ProjectionAngularLaunch2 {
  fieldSlopeX: number;
  fieldSlopeY: number;
  totalFieldDeg: number;
  idealImageX: number;
  idealImageY: number;
  status: "ok" | "on-axis" | "out-of-domain";
}

export interface BoundingSphereLaunch2 {
  origin: [number, number, number];
  direction: [number, number, number];
  launchRadiusMm: number;
  status: "ok" | "invalid";
}

export const MAX_FIELD_LAUNCH_DEG = 89;
export const ABSOLUTE_HALF_FIELD_CEILING = 175;
export const TRACING_SAFETY_FACTOR = 0.9;

export type LaunchSurface2 = "object-plane" | "bounding-sphere";

type FisheyeProjectionConfig = Extract<LensProjectionConfig, { kind: `fisheye-${string}` }>;
type ProjectionZoomValue = FisheyeProjectionConfig["focalLengthMm"];

/**
 * Resolve missing projection data to the engine default.
 *
 * @param projection - optional lens-data projection block
 * @returns explicit projection config, defaulting to rectilinear
 */
export function resolveProjection2(projection?: LensProjectionConfig): LensProjectionConfig {
  return projection ?? { kind: "rectilinear" };
}

/**
 * Identify projection configs that use fisheye field-to-image mappings.
 *
 * @param projection - optional lens projection config
 * @returns true when callers must avoid rectilinear-only Math.tan assumptions
 */
export function isFisheyeProjection2(
  projection: LensProjectionConfig | undefined,
): projection is FisheyeProjectionConfig {
  return projection?.kind === "fisheye-equidistant" || projection?.kind === "fisheye-equisolid";
}

/**
 * Interpolate a zoom-dependent projection value.
 *
 * @param value - scalar or zoom-position array from lens data
 * @param zoomT - normalized zoom position, where 0 is wide and 1 is tele
 * @returns interpolated value, or undefined when no finite value exists
 */
export function projectionValueAtZoom2(value: ProjectionZoomValue | undefined, zoomT = 0): number | undefined {
  if (value === undefined) return undefined;
  if (typeof value === "number") return value;
  if (value.length === 0) return undefined;
  if (value.length === 1) return value[0];

  const t = Math.max(0, Math.min(1, Number.isFinite(zoomT) ? zoomT : 0));
  const scaled = t * (value.length - 1);
  const lo = Math.floor(scaled);
  const hi = Math.min(value.length - 1, lo + 1);
  const localT = scaled - lo;
  return value[lo] + (value[hi] - value[lo]) * localT;
}

/**
 * Resolve fisheye projection focal scale at the current zoom position.
 *
 * @param projection - optional lens projection config
 * @param zoomT - normalized zoom position
 * @returns projection focal scale in mm, or null for non-fisheye/missing data
 */
export function fisheyeProjectionFocalLengthAtZoom2(
  projection: LensProjectionConfig | undefined,
  zoomT = 0,
): number | null {
  if (!isFisheyeProjection2(projection)) return null;
  const value = projectionValueAtZoom2(projection.focalLengthMm, zoomT);
  return typeof value === "number" && Number.isFinite(value) ? value : null;
}

/**
 * Resolve the declared fisheye trace field at the current zoom position.
 *
 * @param projection - optional lens projection config
 * @param zoomT - normalized zoom position
 * @returns half-field trace limit in degrees, or undefined for non-fisheye lenses
 */
export function fisheyeProjectionMaxTraceFieldAtZoom2(
  projection: LensProjectionConfig | undefined,
  zoomT = 0,
): number | undefined {
  if (!isFisheyeProjection2(projection)) return undefined;
  return projectionValueAtZoom2(projection.maxTraceFieldDeg, zoomT);
}

/**
 * Resolve rectilinear declared field override for ultrawide lenses.
 *
 * @param projection - optional lens projection config
 * @returns half-field trace limit in degrees when authored
 */
export function rectilinearProjectionMaxTraceField2(projection: LensProjectionConfig | undefined): number | undefined {
  if (projection?.kind !== "rectilinear") return undefined;
  if (typeof projection.maxTraceFieldDeg === "number" && Number.isFinite(projection.maxTraceFieldDeg)) {
    return projection.maxTraceFieldDeg;
  }
  if (typeof projection.fullFieldDeg === "number" && Number.isFinite(projection.fullFieldDeg)) {
    return projection.fullFieldDeg / 2;
  }
  return undefined;
}

/**
 * Build the projection reference used for distortion residuals.
 *
 * @param L - runtime lens with projection metadata
 * @param rectilinearScale - reference focal scale in mm for rectilinear lenses
 * @param zoomT - normalized zoom position
 * @returns projection kind, labels, and image-height focal scale
 */
export function distortionProjectionReferenceForLens2(
  L: RuntimeLens,
  rectilinearScale: number,
  zoomT = 0,
): ProjectionReference2 {
  const projection = resolveProjection2(L.projection);
  if (projection.kind === "fisheye-equidistant") {
    return {
      kind: "fisheye-equidistant",
      label: "Equidistant projection residual",
      shortLabel: "equidistant",
      focalScaleMm: projectionValueAtZoom2(projection.focalLengthMm, zoomT) ?? NaN,
    };
  }
  if (projection.kind === "fisheye-equisolid") {
    return {
      kind: "fisheye-equisolid",
      label: "Equisolid-angle projection residual",
      shortLabel: "equisolid",
      focalScaleMm: projectionValueAtZoom2(projection.focalLengthMm, zoomT) ?? NaN,
    };
  }

  return {
    kind: "rectilinear",
    label: "Rectilinear distortion",
    shortLabel: "rectilinear",
    focalScaleMm: rectilinearScale,
  };
}

/**
 * Map field angle to ideal image height for a projection model.
 *
 * Formulae: rectilinear y=f*tan(theta), equidistant y=f*theta, and
 * equisolid y=2*f*sin(theta/2).
 *
 * @param reference - projection reference and focal scale
 * @param fieldAngleRad - unsigned field angle in radians
 * @returns ideal image height in mm
 */
export function projectionImageHeightForAngle2(reference: ProjectionReference2, fieldAngleRad: number): number {
  switch (reference.kind) {
    case "fisheye-equidistant":
      return reference.focalScaleMm * fieldAngleRad;
    case "fisheye-equisolid":
      return 2 * reference.focalScaleMm * Math.sin(fieldAngleRad / 2);
    case "rectilinear":
    default:
      return reference.focalScaleMm * Math.tan(fieldAngleRad);
  }
}

/**
 * Map a RuntimeLens field angle to ideal image height at the active zoom.
 *
 * @param L - runtime lens with optional projection metadata
 * @param rectilinearScaleMm - focal scale for rectilinear fallback
 * @param fieldAngleRad - unsigned field angle in radians
 * @param zoomT - normalized zoom position
 * @returns ideal image height in mm
 */
export function projectionImageHeightForLensAngle2(
  L: RuntimeLens,
  rectilinearScaleMm: number,
  fieldAngleRad: number,
  zoomT = 0,
): number {
  const projection = resolveProjection2(L.projection);
  switch (projection.kind) {
    case "fisheye-equidistant":
      return (projectionValueAtZoom2(projection.focalLengthMm, zoomT) ?? NaN) * fieldAngleRad;
    case "fisheye-equisolid":
      return 2 * (projectionValueAtZoom2(projection.focalLengthMm, zoomT) ?? NaN) * Math.sin(fieldAngleRad / 2);
    default:
      return rectilinearScaleMm * Math.tan(fieldAngleRad);
  }
}

/**
 * Invert image height back to field angle for a projection reference.
 *
 * @param reference - projection reference and focal scale
 * @param imageHeight - signed image height in mm
 * @returns unsigned field angle in radians, or NaN outside the projection domain
 */
export function projectionFieldAngleForImageHeight2(reference: ProjectionReference2, imageHeight: number): number {
  const radius = Math.abs(imageHeight);
  if (!Number.isFinite(radius) || reference.focalScaleMm <= 0) return NaN;

  switch (reference.kind) {
    case "fisheye-equidistant":
      return radius / reference.focalScaleMm;
    case "fisheye-equisolid": {
      const sinHalf = radius / (2 * reference.focalScaleMm);
      if (sinHalf > 1) return NaN;
      return 2 * Math.asin(sinHalf);
    }
    case "rectilinear":
    default:
      return Math.atan(radius / reference.focalScaleMm);
  }
}

/**
 * Choose whether a field should launch from an object plane or bounding sphere.
 *
 * Fisheye projections always use the vector path so every fisheye solve exercises
 * the same geometry; rectilinear launches switch only at the tangent singularity guard.
 *
 * @param fieldAngleDeg - signed field angle in degrees
 * @param projection - optional lens projection config
 * @returns launch-surface discriminator for chief-ray and analysis tracing
 */
export function launchSurfaceForFieldDeg2(fieldAngleDeg: number, projection?: LensProjectionConfig): LaunchSurface2 {
  if (isFisheyeProjection2(projection)) return "bounding-sphere";
  return Math.abs(fieldAngleDeg) >= MAX_FIELD_LAUNCH_DEG ? "bounding-sphere" : "object-plane";
}

/**
 * Construct a vector ray from a sphere centered near the entrance pupil.
 *
 * @param epZ - axial entrance-pupil reference position in mm
 * @param fieldAngleXDeg - sagittal field angle in degrees
 * @param fieldAngleYDeg - meridional field angle in degrees
 * @param launchRadiusMm - bounding sphere radius in mm
 * @returns launch origin/direction and status for vector tracing
 */
export function boundingSphereLaunchVector2(
  epZ: number,
  fieldAngleXDeg: number,
  fieldAngleYDeg: number,
  launchRadiusMm: number,
): BoundingSphereLaunch2 {
  if (
    !Number.isFinite(fieldAngleXDeg) ||
    !Number.isFinite(fieldAngleYDeg) ||
    !Number.isFinite(launchRadiusMm) ||
    launchRadiusMm <= 0
  ) {
    return { origin: [NaN, NaN, NaN], direction: [NaN, NaN, NaN], launchRadiusMm: NaN, status: "invalid" };
  }
  const totalFieldDeg = Math.hypot(fieldAngleXDeg, fieldAngleYDeg);
  const thetaRad = (totalFieldDeg * Math.PI) / 180;
  const azimuthRad = Math.atan2(fieldAngleYDeg, fieldAngleXDeg);
  const sinTheta = Math.sin(thetaRad);
  const cosTheta = Math.cos(thetaRad);
  const cosAz = totalFieldDeg < 1e-12 ? 1 : Math.cos(azimuthRad);
  const sinAz = totalFieldDeg < 1e-12 ? 0 : Math.sin(azimuthRad);
  /* Incoming rays point from the object-field direction toward image space.
   * Positive z remains image-ward, so off-axis object direction is negated in x/y. */
  const direction: [number, number, number] = [-sinTheta * cosAz, -sinTheta * sinAz, cosTheta];
  const origin: [number, number, number] = [
    -launchRadiusMm * direction[0],
    -launchRadiusMm * direction[1],
    epZ - launchRadiusMm * direction[2],
  ];
  return { origin, direction, launchRadiusMm, status: "ok" };
}

/**
 * Convert a meridional field angle into the scalar launch slope u.
 *
 * @param L - lens projection holder
 * @param fieldAngleDeg - signed field angle in degrees
 * @returns slope launch or out-of-domain status near the tan(theta) singularity
 */
export function projectionLaunchSlopeForField2(
  L: Pick<RuntimeLens, "projection">,
  fieldAngleDeg: number,
): ProjectionLaunchSlope2 {
  void resolveProjection2(L.projection);
  if (!Number.isFinite(fieldAngleDeg) || Math.abs(fieldAngleDeg) >= MAX_FIELD_LAUNCH_DEG) {
    return { uField: NaN, status: "out-of-domain" };
  }
  const thetaRad = (fieldAngleDeg * Math.PI) / 180;
  return { uField: -Math.tan(thetaRad), status: "ok" };
}

/**
 * Convert 2D angular field coordinates into skew launch slopes and ideal image coordinates.
 *
 * @param reference - projection reference and focal scale
 * @param fieldAngleXDeg - sagittal field angle in degrees
 * @param fieldAngleYDeg - meridional field angle in degrees
 * @returns slopes, ideal image point, total field, and domain status
 */
export function projectionLaunchVectorForFieldAngles2(
  reference: ProjectionReference2,
  fieldAngleXDeg: number,
  fieldAngleYDeg: number,
): ProjectionAngularLaunch2 {
  if (!Number.isFinite(fieldAngleXDeg) || !Number.isFinite(fieldAngleYDeg)) {
    return {
      fieldSlopeX: NaN,
      fieldSlopeY: NaN,
      totalFieldDeg: NaN,
      idealImageX: NaN,
      idealImageY: NaN,
      status: "out-of-domain",
    };
  }
  const totalFieldDeg = Math.hypot(fieldAngleXDeg, fieldAngleYDeg);
  if (totalFieldDeg < 1e-9) {
    return { fieldSlopeX: 0, fieldSlopeY: 0, totalFieldDeg: 0, idealImageX: 0, idealImageY: 0, status: "on-axis" };
  }

  const thetaTotalRad = (totalFieldDeg * Math.PI) / 180;
  const azimuthX = fieldAngleXDeg / totalFieldDeg;
  const azimuthY = fieldAngleYDeg / totalFieldDeg;
  const imageRadius = projectionImageHeightForAngle2(reference, thetaTotalRad);
  const idealImageX = azimuthX * imageRadius;
  const idealImageY = azimuthY * imageRadius;

  if (totalFieldDeg >= MAX_FIELD_LAUNCH_DEG) {
    return { fieldSlopeX: NaN, fieldSlopeY: NaN, totalFieldDeg, idealImageX, idealImageY, status: "out-of-domain" };
  }

  /* A single 3D object angle is decomposed azimuthally so rectangular distortion
   * grids do not treat x/y angles as independent tangents. */
  const slopeMagnitude = Math.tan(thetaTotalRad);
  return {
    fieldSlopeX: azimuthX * slopeMagnitude,
    fieldSlopeY: -azimuthY * slopeMagnitude,
    totalFieldDeg,
    idealImageX,
    idealImageY,
    status: "ok",
  };
}

/**
 * Invert an ideal image point into field slopes for projection-aware distortion grids.
 *
 * @param reference - projection reference and focal scale
 * @param imageX - sagittal ideal image coordinate in mm
 * @param imageY - meridional ideal image coordinate in mm
 * @returns field slopes and equivalent angle, or null outside the projection domain
 */
export function projectionFieldSlopesForImagePoint2(
  reference: ProjectionReference2,
  imageX: number,
  imageY: number,
): ProjectionFieldSlopes2 | null {
  const radius = Math.hypot(imageX, imageY);
  if (!Number.isFinite(radius)) return null;
  if (radius < 1e-12) {
    return { fieldSlopeX: 0, fieldSlopeY: 0, equivalentAngleDeg: 0 };
  }

  const theta = projectionFieldAngleForImageHeight2(reference, radius);
  if (!Number.isFinite(theta) || theta < 0 || theta >= Math.PI / 2) return null;

  const slopeMagnitude = Math.tan(theta);
  return {
    fieldSlopeX: (imageX / radius) * slopeMagnitude,
    fieldSlopeY: (-imageY / radius) * slopeMagnitude,
    equivalentAngleDeg: (theta * 180) / Math.PI,
  };
}
