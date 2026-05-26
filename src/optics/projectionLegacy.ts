import type { LensProjectionConfig, RuntimeLens } from "../types/optics.js";

export type ProjectionReferenceKind = "rectilinear" | "fisheye-equidistant" | "fisheye-equisolid";

export interface ProjectionReference {
  kind: ProjectionReferenceKind;
  label: string;
  shortLabel: string;
  focalScaleMm: number;
}

export interface ProjectionFieldSlopes {
  fieldSlopeX: number;
  fieldSlopeY: number;
  equivalentAngleDeg: number;
}

export function resolveProjection(projection?: LensProjectionConfig): LensProjectionConfig {
  return projection ?? { kind: "rectilinear" };
}

type FisheyeProjectionConfig = Extract<LensProjectionConfig, { kind: `fisheye-${string}` }>;
type ProjectionZoomValue = FisheyeProjectionConfig["focalLengthMm"];

export function isFisheyeProjection(
  projection: LensProjectionConfig | undefined,
): projection is FisheyeProjectionConfig {
  return projection?.kind === "fisheye-equidistant" || projection?.kind === "fisheye-equisolid";
}

export function projectionValueAtZoom(value: ProjectionZoomValue | undefined, zoomT = 0): number | undefined {
  if (value === undefined) return undefined;
  if (typeof value === "number") return value;
  if (value.length === 0) return undefined;
  if (value.length === 1) return value[0];

  const t = Math.max(0, Math.min(1, isFinite(zoomT) ? zoomT : 0));
  const scaled = t * (value.length - 1);
  const lo = Math.floor(scaled);
  const hi = Math.min(value.length - 1, lo + 1);
  const localT = scaled - lo;
  return value[lo] + (value[hi] - value[lo]) * localT;
}

export function fisheyeProjectionFocalLengthAtZoom(
  projection: LensProjectionConfig | undefined,
  zoomT = 0,
): number | null {
  if (!isFisheyeProjection(projection)) return null;
  const value = projectionValueAtZoom(projection.focalLengthMm, zoomT);
  return typeof value === "number" && isFinite(value) ? value : null;
}

export function fisheyeProjectionMaxTraceFieldAtZoom(
  projection: LensProjectionConfig | undefined,
  zoomT = 0,
): number | undefined {
  if (!isFisheyeProjection(projection)) return undefined;
  return projectionValueAtZoom(projection.maxTraceFieldDeg, zoomT);
}

export function rectilinearProjectionMaxTraceField(projection: LensProjectionConfig | undefined): number | undefined {
  if (projection?.kind !== "rectilinear") return undefined;
  if (typeof projection.maxTraceFieldDeg === "number" && isFinite(projection.maxTraceFieldDeg)) {
    return projection.maxTraceFieldDeg;
  }
  if (typeof projection.fullFieldDeg === "number" && isFinite(projection.fullFieldDeg)) {
    return projection.fullFieldDeg / 2;
  }
  return undefined;
}

export function distortionProjectionReferenceForLens(
  L: RuntimeLens,
  rectilinearScale: number,
  zoomT = 0,
): ProjectionReference {
  const projection = resolveProjection(L.projection);
  if (projection.kind === "fisheye-equidistant") {
    return {
      kind: "fisheye-equidistant",
      label: "Equidistant projection residual",
      shortLabel: "equidistant",
      focalScaleMm: projectionValueAtZoom(projection.focalLengthMm, zoomT) ?? NaN,
    };
  }
  if (projection.kind === "fisheye-equisolid") {
    return {
      kind: "fisheye-equisolid",
      label: "Equisolid-angle projection residual",
      shortLabel: "equisolid",
      focalScaleMm: projectionValueAtZoom(projection.focalLengthMm, zoomT) ?? NaN,
    };
  }

  return {
    kind: "rectilinear",
    label: "Rectilinear distortion",
    shortLabel: "rectilinear",
    focalScaleMm: rectilinearScale,
  };
}

export function projectionImageHeightForAngle(reference: ProjectionReference, fieldAngleRad: number): number {
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

// Ideal projection image height for a lens at a given field angle, using the
// lens's declared projection (fisheye focal length) or falling back to
// `rectilinearScaleMm * tan(θ)` for rectilinear lenses.
export function projectionImageHeightForLensAngle(
  L: RuntimeLens,
  rectilinearScaleMm: number,
  fieldAngleRad: number,
  zoomT = 0,
): number {
  const projection = resolveProjection(L.projection);
  switch (projection.kind) {
    case "fisheye-equidistant":
      return (projectionValueAtZoom(projection.focalLengthMm, zoomT) ?? NaN) * fieldAngleRad;
    case "fisheye-equisolid":
      return 2 * (projectionValueAtZoom(projection.focalLengthMm, zoomT) ?? NaN) * Math.sin(fieldAngleRad / 2);
    default:
      return rectilinearScaleMm * Math.tan(fieldAngleRad);
  }
}

export function projectionFieldAngleForImageHeight(reference: ProjectionReference, imageHeight: number): number {
  const radius = Math.abs(imageHeight);
  if (!isFinite(radius) || reference.focalScaleMm <= 0) return NaN;

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

export interface ProjectionLaunchSlope {
  uField: number;
  status: "ok" | "out-of-domain";
}

/**
 * Forward-cone field-angle limit beyond which slope-based ray launch overflows
 * and the exact tracer's `direction[2] > 0` precondition fails. For fisheye
 * projections, `solveChiefRay` dispatches past this cap through the
 * bounding-sphere arm (`solveChiefRayBoundingSphere`); analysis modules that
 * still consume slopes directly use this cap to short-circuit. Non-fisheye
 * lenses always clamp at this value.
 */
export const MAX_FIELD_LAUNCH_DEG = 89;

/**
 * Physical/numerical ceiling on the half-field a lens may declare. The
 * forward hemisphere is 180°; we leave a margin so a ray exactly anti-parallel
 * to the optical axis (cos θ = -1, the bounding-sphere geometry's singular
 * point) is not representable as a finite-cap field. Used by `computeFieldGeometryAtState`
 * for fisheye lenses where the slope-launch cap doesn't apply.
 */
export const ABSOLUTE_HALF_FIELD_CEILING = 175;

/**
 * Safety margin applied to the slope-launch-bisected half-field when
 * producing `RuntimeLens.tracingHalfField`. The diagram renders off-axis
 * ray bundles at `tracingHalfField × offAxisFieldFrac`, so this factor sets
 * the visual headroom between the widest drawn ray and the lens's clipping
 * boundary. 0.9 = 10% margin.
 */
export const TRACING_SAFETY_FACTOR = 0.9;

export type LaunchSurface = "object-plane" | "bounding-sphere";

/**
 * Decide which launch-surface strategy applies for a given field angle.
 *
 * For non-rectilinear projections (fisheye-equidistant, fisheye-equisolid) the
 * bounding-sphere arm is used at every field angle. At θ < `MAX_FIELD_LAUNCH_DEG`
 * the two paths describe the same physical chief ray to ~1e-12 mm (see the
 * parity tests in `boundingSphereLaunch.test.ts`), but routing all fisheye
 * solves through the bounding-sphere path exercises that code on every fisheye
 * lens in the catalog rather than only past the cap. Rectilinear projections
 * keep the slope-launch / past-cap dispatch since they have no past-cap
 * representation in the engine.
 */
export function launchSurfaceForFieldDeg(fieldAngleDeg: number, projection?: LensProjectionConfig): LaunchSurface {
  if (isFisheyeProjection(projection)) return "bounding-sphere";
  return Math.abs(fieldAngleDeg) >= MAX_FIELD_LAUNCH_DEG ? "bounding-sphere" : "object-plane";
}

export interface BoundingSphereLaunch {
  origin: [number, number, number];
  direction: [number, number, number];
  launchRadiusMm: number;
  status: "ok" | "invalid";
}

/**
 * Compute the origin and unit direction for a bounding-sphere chief-ray launch
 * at a given object-space field direction. The sphere is centered near the
 * entrance pupil z-position and sized large enough to bound the lens; the
 * launch ray then enters the lens from outside the forward cone.
 *
 * Direction follows the standard fisheye convention: `θ_total` is the off-axis
 * magnitude, azimuth from `(θ_x, θ_y)`. For θ > 90° the direction's z-component
 * is negative, which is why vector callers must provide a finite
 * `launchBoundT` to the exact tracer instead of relying on a slope-style
 * z-projected intersection bound.
 */
export function boundingSphereLaunchVector(
  epZ: number,
  fieldAngleXDeg: number,
  fieldAngleYDeg: number,
  launchRadiusMm: number,
): BoundingSphereLaunch {
  if (!isFinite(fieldAngleXDeg) || !isFinite(fieldAngleYDeg) || !isFinite(launchRadiusMm) || launchRadiusMm <= 0) {
    return { origin: [NaN, NaN, NaN], direction: [NaN, NaN, NaN], launchRadiusMm: NaN, status: "invalid" };
  }
  const totalFieldDeg = Math.hypot(fieldAngleXDeg, fieldAngleYDeg);
  const thetaRad = (totalFieldDeg * Math.PI) / 180;
  const azimuthRad = Math.atan2(fieldAngleYDeg, fieldAngleXDeg);

  const sinTheta = Math.sin(thetaRad);
  const cosTheta = Math.cos(thetaRad);
  const cosAz = totalFieldDeg < 1e-12 ? 1 : Math.cos(azimuthRad);
  const sinAz = totalFieldDeg < 1e-12 ? 0 : Math.sin(azimuthRad);

  const direction: [number, number, number] = [-sinTheta * cosAz, -sinTheta * sinAz, cosTheta];
  const origin: [number, number, number] = [
    -launchRadiusMm * direction[0],
    -launchRadiusMm * direction[1],
    epZ - launchRadiusMm * direction[2],
  ];
  return { origin, direction, launchRadiusMm, status: "ok" };
}

export function projectionLaunchSlopeForField(
  L: Pick<RuntimeLens, "projection">,
  fieldAngleDeg: number,
): ProjectionLaunchSlope {
  void resolveProjection(L.projection);
  if (!isFinite(fieldAngleDeg) || Math.abs(fieldAngleDeg) >= MAX_FIELD_LAUNCH_DEG) {
    return { uField: NaN, status: "out-of-domain" };
  }
  const thetaRad = (fieldAngleDeg * Math.PI) / 180;
  return { uField: -Math.tan(thetaRad), status: "ok" };
}

export interface ProjectionAngularLaunch {
  fieldSlopeX: number;
  fieldSlopeY: number;
  totalFieldDeg: number;
  idealImageX: number;
  idealImageY: number;
  status: "ok" | "on-axis" | "out-of-domain";
}

/**
 * Forward-map an object-space field direction into chief-ray launch slopes and
 * the ideal image-plane coordinate under the lens's declared projection.
 *
 * Input semantics: `(θ_x, θ_y)` are the azimuthal projections of a single
 * off-axis direction, with `θ_total = hypot(θ_x, θ_y)` and image-plane azimuth
 * `atan2(θ_y, θ_x)`. For fisheye-equidistant this means the angular Cartesian
 * grid maps directly to image-space Cartesian via `(θ_x, θ_y) → (f·θ_x, f·θ_y)`,
 * unblocking grid corners that would inverse-map past π/2 through
 * `projectionFieldSlopesForImagePoint`.
 *
 * Sign convention matches the legacy distortion grid: `idealImageY` is positive
 * for positive `θ_y` (the image-plane Y flip happens at trace time, not at
 * forward-map time), while `fieldSlopeY` is negated relative to `θ_y` to match
 * the object-to-image flip used by `traceSkewRay`.
 */
export function projectionLaunchVectorForFieldAngles(
  reference: ProjectionReference,
  fieldAngleXDeg: number,
  fieldAngleYDeg: number,
): ProjectionAngularLaunch {
  if (!isFinite(fieldAngleXDeg) || !isFinite(fieldAngleYDeg)) {
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

  const imageRadius = projectionImageHeightForAngle(reference, thetaTotalRad);
  const idealImageX = azimuthX * imageRadius;
  const idealImageY = azimuthY * imageRadius;

  if (totalFieldDeg >= MAX_FIELD_LAUNCH_DEG) {
    return { fieldSlopeX: NaN, fieldSlopeY: NaN, totalFieldDeg, idealImageX, idealImageY, status: "out-of-domain" };
  }

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

export function projectionFieldSlopesForImagePoint(
  reference: ProjectionReference,
  imageX: number,
  imageY: number,
): ProjectionFieldSlopes | null {
  const radius = Math.hypot(imageX, imageY);
  if (!isFinite(radius)) return null;
  if (radius < 1e-12) {
    return { fieldSlopeX: 0, fieldSlopeY: 0, equivalentAngleDeg: 0 };
  }

  const theta = projectionFieldAngleForImageHeight(reference, radius);
  if (!isFinite(theta) || theta < 0 || theta >= Math.PI / 2) return null;

  const slopeMagnitude = Math.tan(theta);
  return {
    fieldSlopeX: (imageX / radius) * slopeMagnitude,
    fieldSlopeY: (-imageY / radius) * slopeMagnitude,
    equivalentAngleDeg: (theta * 180) / Math.PI,
  };
}
