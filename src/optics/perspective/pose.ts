/**
 * Rigid transforms between an intrinsic lens frame and the fixed camera frame.
 */

import type { TiltPivot } from "../../types/optics.js";
import type { LensMovementState } from "../lensMovement.js";
import { formatCacheNumber } from "../math/numerics.js";
import type { Plane3, Ray3, Vec3 } from "../types.js";

/** Inputs required to construct one perspective-control lens pose. */
export interface CreatePerspectivePoseParams {
  /** Clamped physical shift and tilt applied to the complete optical stack. */
  movement: LensMovementState;
  /** Fixed sensor plane expressed in camera coordinates. */
  sensorPlane: Plane3;
  /** Camera-fixed tilt reference; required whenever a non-zero tilt is requested. */
  tiltPivot?: TiltPivot | null;
}

/** Bidirectional rigid transform for one perspective-control position. */
export interface PerspectivePose {
  readonly movement: Readonly<LensMovementState>;
  readonly active: boolean;
  readonly sensorPlane: Plane3;
  readonly tiltPivot: Readonly<TiltPivot> | null;
  /** Deterministic identity for movement, pivot basis, and fixed-sensor geometry. */
  readonly cacheKey: string;
  /** Point on the camera-fixed x-axis about which lens tilt is applied. */
  readonly pivotPoint: Vec3;
  lensToCameraPoint(point: Vec3): Vec3;
  cameraToLensPoint(point: Vec3): Vec3;
  lensToCameraDirection(direction: Vec3): Vec3;
  cameraToLensDirection(direction: Vec3): Vec3;
  lensToCameraRay(ray: Ray3): Ray3;
  cameraToLensRay(ray: Ray3): Ray3;
  lensToCameraPlane(plane: Plane3): Plane3;
  cameraToLensPlane(plane: Plane3): Plane3;
}

/** Error raised when a requested physical pose does not define finite geometry. */
export class PerspectivePoseError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PerspectivePoseError";
  }
}

const DEG_TO_RAD = Math.PI / 180;
const IDENTITY_EPSILON = 1e-9;

/**
 * Create a lens pose relative to a fixed camera/sensor coordinate system.
 *
 * Tilt uses the standard right-handed `Rx(+tiltDeg)` rotation: looking along
 * +x, the objectward optical axis rotates toward +y. Positive shift translates
 * the lens toward camera -y because optical +y renders downward in the diagram.
 */
export function createPerspectivePose({
  movement,
  sensorPlane: sensorPlaneInput,
  tiltPivot,
}: CreatePerspectivePoseParams): PerspectivePose {
  const resolvedMovement = Object.freeze({ shiftMm: movement.shiftMm, tiltDeg: movement.tiltDeg });
  const sensorPlane = freezePlane(sensorPlaneInput);
  const resolvedTiltPivot = tiltPivot ? Object.freeze({ ...tiltPivot }) : null;
  assertFiniteMovement(resolvedMovement);
  const active = !isIdentityMovement(resolvedMovement);
  if (active && Math.abs(resolvedMovement.tiltDeg) > 0 && !resolvedTiltPivot) {
    throw new PerspectivePoseError("A camera-frame tilt pivot is required for non-zero lens tilt");
  }

  const pivotOffset = resolvedTiltPivot?.zOffsetFromImagePlaneMm ?? 0;
  if (!Number.isFinite(pivotOffset)) {
    throw new PerspectivePoseError("Tilt-pivot offset must be finite");
  }
  const pivotPoint = Object.freeze([
    sensorPlane.point[0],
    sensorPlane.point[1],
    sensorPlane.point[2] + pivotOffset,
  ]) as Vec3;
  const cacheKey = perspectivePoseCacheKey(resolvedMovement, sensorPlane, resolvedTiltPivot);

  if (!active) return identityPose(resolvedMovement, sensorPlane, resolvedTiltPivot, pivotPoint, cacheKey);

  const theta = resolvedMovement.tiltDeg * DEG_TO_RAD;
  const cos = Math.cos(theta);
  const sin = Math.sin(theta);

  const lensToCameraDirection = (direction: Vec3): Vec3 => [
    direction[0],
    direction[1] * cos - direction[2] * sin,
    direction[1] * sin + direction[2] * cos,
  ];
  const cameraToLensDirection = (direction: Vec3): Vec3 => [
    direction[0],
    direction[1] * cos + direction[2] * sin,
    direction[2] * cos - direction[1] * sin,
  ];
  const lensToCameraPoint = (point: Vec3): Vec3 => {
    const y = point[1] - pivotPoint[1];
    const z = point[2] - pivotPoint[2];
    return [point[0], pivotPoint[1] + y * cos - z * sin - resolvedMovement.shiftMm, pivotPoint[2] + y * sin + z * cos];
  };
  const cameraToLensPoint = (point: Vec3): Vec3 => {
    const y = point[1] + resolvedMovement.shiftMm - pivotPoint[1];
    const z = point[2] - pivotPoint[2];
    return [point[0], pivotPoint[1] + y * cos + z * sin, pivotPoint[2] - y * sin + z * cos];
  };
  const lensToCameraRay = (ray: Ray3): Ray3 => ({
    origin: lensToCameraPoint(ray.origin),
    direction: lensToCameraDirection(ray.direction),
  });
  const cameraToLensRay = (ray: Ray3): Ray3 => ({
    origin: cameraToLensPoint(ray.origin),
    direction: cameraToLensDirection(ray.direction),
  });
  const lensToCameraPlane = (plane: Plane3): Plane3 => ({
    ...plane,
    point: lensToCameraPoint(plane.point),
    normal: lensToCameraDirection(plane.normal),
  });
  const cameraToLensPlane = (plane: Plane3): Plane3 => ({
    ...plane,
    point: cameraToLensPoint(plane.point),
    normal: cameraToLensDirection(plane.normal),
  });

  return Object.freeze({
    movement: resolvedMovement,
    active,
    sensorPlane,
    tiltPivot: resolvedTiltPivot,
    cacheKey,
    pivotPoint,
    lensToCameraPoint,
    cameraToLensPoint,
    lensToCameraDirection,
    cameraToLensDirection,
    lensToCameraRay,
    cameraToLensRay,
    lensToCameraPlane,
    cameraToLensPlane,
  });
}

function identityPose(
  movement: Readonly<LensMovementState>,
  sensorPlane: Plane3,
  tiltPivot: Readonly<TiltPivot> | null,
  pivotPoint: Vec3,
  cacheKey: string,
): PerspectivePose {
  return Object.freeze({
    movement,
    active: false,
    sensorPlane,
    tiltPivot,
    cacheKey,
    pivotPoint,
    lensToCameraPoint: (point: Vec3) => point,
    cameraToLensPoint: (point: Vec3) => point,
    lensToCameraDirection: (direction: Vec3) => direction,
    cameraToLensDirection: (direction: Vec3) => direction,
    lensToCameraRay: (ray: Ray3) => ray,
    cameraToLensRay: (ray: Ray3) => ray,
    lensToCameraPlane: (plane: Plane3) => plane,
    cameraToLensPlane: (plane: Plane3) => plane,
  });
}

function assertFiniteMovement(movement: LensMovementState): void {
  if (!Number.isFinite(movement.shiftMm) || !Number.isFinite(movement.tiltDeg)) {
    throw new PerspectivePoseError("Lens shift and tilt must be finite");
  }
}

function isIdentityMovement(movement: Readonly<LensMovementState>): boolean {
  return Math.abs(movement.shiftMm) < IDENTITY_EPSILON && Math.abs(movement.tiltDeg) < IDENTITY_EPSILON;
}

function freezePlane(plane: Plane3): Plane3 {
  if (![...plane.point, ...plane.normal].every(Number.isFinite) || Math.hypot(...plane.normal) <= 1e-12) {
    throw new PerspectivePoseError("Sensor plane must have finite coordinates and a non-zero normal");
  }
  return Object.freeze({
    ...plane,
    point: Object.freeze([plane.point[0], plane.point[1], plane.point[2]] as const),
    normal: Object.freeze([plane.normal[0], plane.normal[1], plane.normal[2]] as const),
  });
}

function perspectivePoseCacheKey(
  movement: Readonly<LensMovementState>,
  sensorPlane: Plane3,
  tiltPivot: Readonly<TiltPivot> | null,
): string {
  const number = formatCacheNumber;
  return [
    "perspective-pose-v1",
    `shift=${number(movement.shiftMm)}`,
    `tilt=${number(movement.tiltDeg)}`,
    `pivot-frame=${tiltPivot?.frame ?? "none"}`,
    `pivot-basis=${tiltPivot?.basis ?? "none"}`,
    `pivot-z=${number(tiltPivot?.zOffsetFromImagePlaneMm ?? 0)}`,
    `sensor-point=${sensorPlane.point.map(number).join(",")}`,
    `sensor-normal=${sensorPlane.normal.map(number).join(",")}`,
    `sensor-label=${sensorPlane.label}`,
  ].join("|");
}
