/**
 * Plane geometry helpers shared by exact tracing and perspective-control adapters.
 */

import { dot, subtract } from "./vector.js";
import type { Plane3, Ray3, Vec3 } from "../types.js";

/** Intersection of a forward ray with a plane. */
export interface RayPlaneIntersection {
  point: Vec3;
  t: number;
}

/** Options for a ray-plane intersection. */
export interface RayPlaneIntersectionOptions {
  /** Smallest accepted parametric ray distance. Defaults to the exact-trace self-hit tolerance. */
  minT?: number;
}

/**
 * Intersect a ray with an arbitrary plane.
 *
 * The ray direction does not need to be normalized; `t` uses the direction's
 * native parameterization. Intersections at or behind `minT` are rejected.
 *
 * @param ray - ray origin and direction
 * @param plane - target plane
 * @param options - minimum forward distance
 * @returns finite forward intersection, or null for parallel/behind rays
 */
export function intersectRayPlane(
  ray: Ray3,
  plane: Plane3,
  options: RayPlaneIntersectionOptions = {},
): RayPlaneIntersection | null {
  const minT = options.minT ?? 1e-7;
  const denominator = dot(plane.normal, ray.direction);
  if (!Number.isFinite(denominator) || Math.abs(denominator) <= 1e-12) return null;

  const t = dot(plane.normal, subtract(plane.point, ray.origin)) / denominator;
  if (!Number.isFinite(t) || t <= minT) return null;

  return {
    t,
    point: [
      ray.origin[0] + ray.direction[0] * t,
      ray.origin[1] + ray.direction[1] * t,
      ray.origin[2] + ray.direction[2] * t,
    ],
  };
}
