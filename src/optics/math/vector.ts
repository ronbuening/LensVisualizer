/**
 * Vector math primitives — small Vec3 operations for exact surface tracing.
 *
 * Keeps reflection, refraction, normalization, and slope-to-direction conversion free of
 * RuntimeLens state so trace modules can share one coordinate convention.
 */

import { VECTOR_EPSILON } from "../constants.js";
import type { Vec3 } from "../types.js";

/**
 * Construct a 3D vector in engine coordinates.
 *
 * @param x - sagittal coordinate in mm
 * @param y - meridional coordinate in mm
 * @param z - axial coordinate in mm, positive toward image space
 * @returns immutable-by-convention Vec3 tuple
 */
export function vec3(x: number, y: number, z: number): Vec3 {
  return [x, y, z];
}

/** @param a - first vector @param b - second vector @returns component-wise sum */
export function add(a: Vec3, b: Vec3): Vec3 {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

/** @param a - first vector @param b - second vector @returns component-wise difference a - b */
export function subtract(a: Vec3, b: Vec3): Vec3 {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

/** @param v - vector to scale @param scalar - multiplier @returns scaled vector */
export function scale(v: Vec3, scalar: number): Vec3 {
  return [v[0] * scalar, v[1] * scalar, v[2] * scalar];
}

/** @param a - first vector @param b - second vector @returns Euclidean dot product */
export function dot(a: Vec3, b: Vec3): number {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

/** @param a - first vector @param b - second vector @returns right-handed cross product a x b */
export function cross(a: Vec3, b: Vec3): Vec3 {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

/** @param v - vector to measure @returns Euclidean length in the vector's units */
export function length(v: Vec3): number {
  return Math.hypot(v[0], v[1], v[2]);
}

/**
 * Normalize a vector unless it is non-finite or below the engine epsilon.
 *
 * @param v - vector to normalize
 * @returns unit vector, or null when no stable direction exists
 */
export function normalize(v: Vec3): Vec3 | null {
  const magnitude = length(v);
  if (!Number.isFinite(magnitude) || magnitude <= VECTOR_EPSILON) return null;
  return [v[0] / magnitude, v[1] / magnitude, v[2] / magnitude];
}

/** @param v - vector to test @param tolerance - allowed length error @returns true for unit-length directions */
export function isUnitVector(v: Vec3, tolerance = 1e-10): boolean {
  return Math.abs(length(v) - 1) <= tolerance;
}

/**
 * Convert a meridional slope u = dy/dz to a normalized 3D direction.
 *
 * @param u - meridional ray slope
 * @returns normalized [0, u, 1] direction, or null for invalid input
 */
export function directionFromMeridionalSlope(u: number): Vec3 | null {
  return normalize([0, u, 1]);
}

/**
 * Convert sagittal and meridional slopes to a normalized 3D direction.
 *
 * @param ux - sagittal slope dx/dz
 * @param uy - meridional slope dy/dz
 * @returns normalized [ux, uy, 1] direction, or null for invalid input
 */
export function directionFromSkewSlope(ux: number, uy: number): Vec3 | null {
  return normalize([ux, uy, 1]);
}

/**
 * Reflect a direction around a surface normal.
 *
 * Uses vector reflection d' = d - 2*(d·n)*n after normalizing both inputs.
 *
 * @param direction - incoming ray direction
 * @param normal - surface normal oriented by the caller
 * @returns normalized reflected direction, or null for invalid inputs
 */
export function reflect(direction: Vec3, normal: Vec3): Vec3 | null {
  const d = normalize(direction);
  const n = normalize(normal);
  if (!d || !n) return null;
  const reflected = subtract(d, scale(n, 2 * dot(d, n)));
  return normalize(reflected);
}

/**
 * Refract a direction across an interface using vector Snell's law.
 *
 * The normal must point toward the outgoing side selected by the caller.
 * Returns null for total internal reflection or invalid refractive indices.
 *
 * @param direction - incoming ray direction
 * @param normal - oriented surface normal
 * @param nFrom - refractive index of the incident medium
 * @param nTo - refractive index of the transmitted medium
 * @returns normalized refracted direction, or null when no transmitted ray exists
 */
export function refract(direction: Vec3, normal: Vec3, nFrom: number, nTo: number): Vec3 | null {
  const d = normalize(direction);
  const n = normalize(normal);
  if (!d || !n || !Number.isFinite(nFrom) || !Number.isFinite(nTo) || nFrom <= 0 || nTo <= 0) return null;

  const eta = nFrom / nTo;
  const cosIncident = dot(d, n);
  const tangent = subtract(d, scale(n, cosIncident));
  const tangentSq = dot(tangent, tangent);
  const scaledTangentSq = eta * eta * tangentSq;
  if (scaledTangentSq > 1 + 1e-12) return null;

  const normalScale = Math.sqrt(Math.max(0, 1 - scaledTangentSq));
  return normalize(add(scale(tangent, eta), scale(n, normalScale)));
}
