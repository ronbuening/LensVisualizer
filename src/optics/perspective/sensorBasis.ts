/** Orthonormal in-plane coordinates for the fixed camera sensor. */

import { cross, dot, normalize, scale, subtract } from "../math/vector.js";
import type { Plane3, Vec3 } from "../types.js";

/** Camera-fixed sensor axes: right, down/meridional, and canonical normal. */
export interface SensorBasis {
  readonly u: Vec3;
  readonly v: Vec3;
  readonly normal: Vec3;
}

/** Error raised when a sensor plane cannot produce a stable orthonormal basis. */
export class SensorBasisError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "SensorBasisError";
  }
}

/**
 * Derive deterministic right/down axes from a sensor plane.
 *
 * Plane normals have a sign ambiguity. The canonical normal makes the first
 * non-zero component in z/y/x priority positive, so opposite descriptions of
 * the same plane produce the same basis. Camera +x is projected onto the plane
 * for `u`; the axial sensor therefore resolves to x-right, y-down, z-normal.
 */
export function createSensorBasis(sensorPlane: Plane3): SensorBasis {
  const normalized = normalize(sensorPlane.normal);
  if (!normalized) throw new SensorBasisError("Sensor plane must have a finite non-zero normal");
  const normal = freezeVec3(canonicalNormal(normalized));
  const projectedCameraRight = subtract([1, 0, 0], scale(normal, dot([1, 0, 0], normal)));
  const projectedFallback = subtract([0, 1, 0], scale(normal, dot([0, 1, 0], normal)));
  const uValue = normalize(projectedCameraRight) ?? normalize(projectedFallback);
  if (!uValue) throw new SensorBasisError("Sensor plane does not define a stable in-plane right axis");
  const u = freezeVec3(uValue);
  const vValue = normalize(cross(normal, u));
  if (!vValue) throw new SensorBasisError("Sensor plane does not define a stable in-plane meridional axis");
  const v = freezeVec3(vValue);
  return Object.freeze({ u, v, normal });
}

function canonicalNormal(normal: Vec3): Vec3 {
  for (const index of [2, 1, 0] as const) {
    if (Math.abs(normal[index]) <= 1e-12) continue;
    return normal[index] < 0 ? scale(normal, -1) : normal;
  }
  return normal;
}

function freezeVec3(value: Vec3): Vec3 {
  return Object.freeze([cleanZero(value[0]), cleanZero(value[1]), cleanZero(value[2])] as const);
}

function cleanZero(value: number): number {
  return Object.is(value, -0) ? 0 : value;
}
