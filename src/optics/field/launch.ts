/**
 * Field launch helpers — constructs bounding-sphere vector rays for wide-field tracing.
 *
 * Used by chief-ray, distortion, vignetting, and diagram code when slope launches cannot represent
 * fisheye or past-cap fields safely.
 */

import type { RuntimeLens } from "../../types/optics.js";
import type { Vec3 } from "../types.js";
import { boundingSphereLaunchVector2 } from "./projection.js";

export interface FieldGeometryState2 {
  halfFieldDeg: number;
  yRatio: number;
  b: number;
  epRatio: number;
}

export interface VectorFieldRayLaunch2 {
  origin: Vec3;
  direction: Vec3;
  launchBoundT: number;
  launchRadiusMm: number;
  fieldAngleXDeg: number;
  fieldAngleYDeg: number;
  totalFieldDeg: number;
  radialPupilAxis: Vec3;
  sagittalPupilAxis: Vec3;
  launchSurface: "bounding-sphere";
}

export interface OffsetVectorFieldRay2 {
  origin: Vec3;
  direction: Vec3;
  launchBoundT: number;
}

/**
 * Choose a sphere large enough to start vector field rays outside the lens envelope.
 *
 * @param L - runtime lens prescription
 * @param chiefB - current chief-ray/pupil axial reference in mm
 * @returns launch radius in mm, including margin beyond glass and stop geometry
 */
export function computeBoundingSphereLaunchRadiusMm2(L: RuntimeLens, chiefB: number): number {
  let totalThickness = 0;
  let maxSD = 0;
  for (const surface of L.S) {
    totalThickness += Math.abs(surface.d ?? 0);
    if (surface.sd && surface.sd > maxSD) maxSD = surface.sd;
  }
  return Math.max(2 * maxSD, totalThickness + Math.abs(chiefB) + 5);
}

/**
 * Build a vector launch for a 2D field angle using the bounding-sphere convention.
 *
 * @param L - runtime lens prescription
 * @param geometry - current field geometry and entrance-pupil reference
 * @param fieldAngleXDeg - sagittal field angle in degrees
 * @param fieldAngleYDeg - meridional field angle in degrees
 * @param aberrationT - reserved for callers whose current state also varies by aberration control
 * @returns vector launch metadata, or null when the launch is outside the numeric domain
 */
export function computeBoundingSphereVectorFieldLaunch2(
  L: RuntimeLens,
  geometry: FieldGeometryState2,
  fieldAngleXDeg: number,
  fieldAngleYDeg: number,
  aberrationT = 0,
): VectorFieldRayLaunch2 | null {
  void aberrationT;
  const launchRadius = computeBoundingSphereLaunchRadiusMm2(L, geometry.b);
  const launch = boundingSphereLaunchVector2(geometry.epRatio, fieldAngleXDeg, fieldAngleYDeg, launchRadius);
  if (launch.status !== "ok") return null;

  const axes = vectorFieldAxes(fieldAngleXDeg, fieldAngleYDeg);
  return {
    origin: launch.origin,
    direction: launch.direction,
    launchBoundT: 2 * launchRadius,
    launchRadiusMm: launchRadius,
    fieldAngleXDeg,
    fieldAngleYDeg,
    totalFieldDeg: axes.totalFieldDeg,
    radialPupilAxis: axes.radialPupilAxis,
    sagittalPupilAxis: axes.sagittalPupilAxis,
    launchSurface: "bounding-sphere",
  };
}

/**
 * Offset a vector field ray across sagittal/radial pupil coordinates.
 *
 * @param launch - base chief-like vector field launch
 * @param sagittalOffsetMm - offset perpendicular to the field meridian in mm
 * @param radialOffsetMm - offset inside the field meridian in mm
 * @param radialDirectionDelta - optional direction perturbation along the radial pupil axis
 * @returns origin/direction pair ready for exact vector tracing
 */
export function offsetVectorFieldRay2(
  launch: VectorFieldRayLaunch2,
  sagittalOffsetMm: number,
  radialOffsetMm: number,
  radialDirectionDelta = 0,
): OffsetVectorFieldRay2 {
  let origin = addScaledVector(launch.origin, launch.sagittalPupilAxis, sagittalOffsetMm);
  origin = addScaledVector(origin, launch.radialPupilAxis, radialOffsetMm);
  const direction =
    Math.abs(radialDirectionDelta) > 1e-15
      ? normalizeVector(addScaledVector(launch.direction, launch.radialPupilAxis, radialDirectionDelta))
      : launch.direction;
  return { origin, direction, launchBoundT: launch.launchBoundT };
}

function vectorFieldAxes(
  fieldAngleXDeg: number,
  fieldAngleYDeg: number,
): {
  radialPupilAxis: Vec3;
  sagittalPupilAxis: Vec3;
  totalFieldDeg: number;
} {
  const totalFieldDeg = Math.hypot(fieldAngleXDeg, fieldAngleYDeg);
  if (totalFieldDeg < 1e-12) {
    return {
      radialPupilAxis: [0, 1, 0],
      sagittalPupilAxis: [1, 0, 0],
      totalFieldDeg,
    };
  }

  const thetaRad = (totalFieldDeg * Math.PI) / 180;
  const cosTheta = Math.cos(thetaRad);
  const sinTheta = Math.sin(thetaRad);
  const cosAz = fieldAngleXDeg / totalFieldDeg;
  const sinAz = fieldAngleYDeg / totalFieldDeg;
  return {
    radialPupilAxis: normalizeVector([cosTheta * cosAz, cosTheta * sinAz, sinTheta]),
    sagittalPupilAxis: normalizeVector([-sinAz, cosAz, 0]),
    totalFieldDeg,
  };
}

function normalizeVector([x, y, z]: Vec3): Vec3 {
  const length = Math.hypot(x, y, z);
  if (!Number.isFinite(length) || length <= 0) return [NaN, NaN, NaN];
  return [x / length, y / length, z / length];
}

function addScaledVector(a: Vec3, b: Vec3, scale: number): Vec3 {
  return [a[0] + b[0] * scale, a[1] + b[1] * scale, a[2] + b[2] * scale];
}
