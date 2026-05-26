import { VECTOR_EPSILON } from "../constants.js";
import type { Vec3 } from "../types.js";

export function vec3(x: number, y: number, z: number): Vec3 {
  return [x, y, z];
}

export function add(a: Vec3, b: Vec3): Vec3 {
  return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
}

export function subtract(a: Vec3, b: Vec3): Vec3 {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}

export function scale(v: Vec3, scalar: number): Vec3 {
  return [v[0] * scalar, v[1] * scalar, v[2] * scalar];
}

export function dot(a: Vec3, b: Vec3): number {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

export function cross(a: Vec3, b: Vec3): Vec3 {
  return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
}

export function length(v: Vec3): number {
  return Math.hypot(v[0], v[1], v[2]);
}

export function normalize(v: Vec3): Vec3 | null {
  const magnitude = length(v);
  if (!Number.isFinite(magnitude) || magnitude <= VECTOR_EPSILON) return null;
  return [v[0] / magnitude, v[1] / magnitude, v[2] / magnitude];
}

export function isUnitVector(v: Vec3, tolerance = 1e-10): boolean {
  return Math.abs(length(v) - 1) <= tolerance;
}

export function directionFromMeridionalSlope(u: number): Vec3 | null {
  return normalize([0, u, 1]);
}

export function directionFromSkewSlope(ux: number, uy: number): Vec3 | null {
  return normalize([ux, uy, 1]);
}

export function reflect(direction: Vec3, normal: Vec3): Vec3 | null {
  const d = normalize(direction);
  const n = normalize(normal);
  if (!d || !n) return null;
  const reflected = subtract(d, scale(n, 2 * dot(d, n)));
  return normalize(reflected);
}

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
