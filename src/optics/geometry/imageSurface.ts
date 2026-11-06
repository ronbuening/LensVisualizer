/**
 * Curved image geometry in a vertex-local frame, shared by sequential landing and folded tracing.
 * Profiles own radial sag/slope arithmetic; this adapter rejects their out-of-domain continuations.
 */

import { expandAsphericCoefficients } from "../../types/asphericSchema.js";
import type { ResolvedImageSurfaceData } from "../../types/optics.js";
import { INTERSECTION_TOLERANCE } from "../math/constants.js";
import { add, cross, dot, normalize, scale, subtract } from "../math/vector.js";
import type { ImageSurfaceShape, Plane3, Ray3, Vec3 } from "../types.js";
import { createSurfaceProfile, normalFromSlope } from "./surfaceProfile.js";

function conicSeed(origin: Vec3, direction: Vec3, c: number, K: number): number | null {
  const [ox, oy, oz] = origin;
  const [dx, dy, dz] = direction;
  const t0 = -dot(origin, direction) / dot(direction, direction);
  const [px, py, pz] = [ox + t0 * dx, oy + t0 * dy, oz + t0 * dz];
  const kappa = 1 + K;
  // As in intersectConic.ts, the perpendicular foot avoids distant-origin cancellation.
  const a = c * (dx * dx + dy * dy + kappa * dz * dz);
  const b = c * (px * dx + py * dy + kappa * pz * dz) - dz;
  const g = c * (px * px + py * py + kappa * pz * pz) - 2 * pz;
  const discriminant = b * b - a * g;
  if (!(discriminant >= 0) || !Number.isFinite(discriminant)) return null;
  const s = Math.sqrt(discriminant);
  const q = b < 0 ? s - b : -(b + s);
  let selected: number | null = null;
  for (const tau of [g / q, q / a]) {
    if (!Number.isFinite(tau) || !(1 - kappa * c * (pz + tau * dz) > 0)) continue;
    // Unlike baseConicRoot's first-in-interval policy, image transfer selects the root nearest the vertex.
    if (selected === null || Math.abs(tau) < Math.abs(selected)) selected = tau;
  }
  return selected === null ? null : t0 + selected;
}

/**
 * Prepare an immutable image shape; its semi-diameter describes drawing extent, never a landing clip.
 * @param data - signed radius, sparse coefficients or cylinder orientation, and half-height in mm
 * @returns frozen local sag and positive-z normal evaluators
 */
export function createImageSurfaceShape(data: ResolvedImageSurfaceData): ImageSurfaceShape {
  const cylinderAxis = data.cylindrical ? (data.meridian === "flat" ? "y" : "x") : null;
  const asphere = !cylinderAxis && data.asphere ? Object.freeze(expandAsphericCoefficients(data.asphere)) : undefined;
  const profile = createSurfaceProfile({ R: data.R }, asphere);
  const radiusAt = (x: number, y: number): number =>
    cylinderAxis === "x" ? Math.abs(y) : cylinderAxis === "y" ? Math.abs(x) : Math.hypot(x, y);
  const inDomain = (x: number, y: number, r: number): boolean =>
    Number.isFinite(x) &&
    Number.isFinite(y) &&
    1 - (1 + profile.conic) * profile.curvature * profile.curvature * (r * r) > 0;
  return Object.freeze({
    kind: cylinderAxis ? "cylindrical" : asphere ? "aspheric" : "spherical",
    radius: data.R,
    curvature: 1 / data.R,
    conic: asphere?.K ?? 0,
    cylinderAxis,
    semiDiameter: data.sd,
    profile,
    sagAt: (x: number, y: number): number => {
      const r = radiusAt(x, y);
      return inDomain(x, y, r) ? profile.sag(r) : NaN;
    },
    normalAt: (x: number, y: number): Vec3 => {
      const r = radiusAt(x, y);
      if (!inDomain(x, y, r)) return [NaN, NaN, NaN];
      return normalFromSlope(cylinderAxis === "x" ? 0 : x, cylinderAxis === "y" ? 0 : y, r, profile.slope(r));
    },
  });
}

/**
 * Land an unbounded, signed line on the sheet through the vertex, retaining its direction's parameterization.
 * If a line crosses that sheet twice, the base-conic root nearest the vertex seeds the landing.
 * @param shape - curved image shape in its local frame
 * @param origin - local line origin in mm
 * @param direction - local direction, not necessarily normalized
 * @returns point and signed parameter, or null for a miss, invalid input, or failed residual validation
 */
export function landImageSurfaceLine(
  shape: ImageSurfaceShape,
  origin: Vec3,
  direction: Vec3,
): { point: Vec3; t: number } | null {
  if (!origin.every(Number.isFinite) || !direction.every(Number.isFinite) || direction.every((v) => v === 0))
    return null;
  const project = (v: Vec3): Vec3 =>
    shape.cylinderAxis === "x" ? [0, v[1], v[2]] : shape.cylinderAxis === "y" ? [v[0], 0, v[2]] : v;
  const profile = shape.profile;
  // Dropping a cylinder's straight coordinate preserves t while reducing it to the same conic quadratic.
  const seed = conicSeed(project(origin), project(direction), profile.curvature, shape.conic);
  if (seed === null) return null;
  const polynomial = profile.hasPolynomial;
  const tolerance = polynomial ? 1e-9 : INTERSECTION_TOLERANCE;
  const maxSteps = polynomial ? 32 : 1;
  let t = seed;
  for (let step = 0; step <= maxSteps; step++) {
    const point = add(origin, scale(direction, t));
    if (!Number.isFinite(t) || !point.every(Number.isFinite)) return null;
    const residual = point[2] - shape.sagAt(point[0], point[1]);
    if (!Number.isFinite(residual)) return null;
    if (Math.abs(residual) <= tolerance) return { point, t };
    if (step === maxSteps) return null;
    const local = project(point);
    const d = project(direction);
    const r = Math.hypot(local[0], local[1]);
    // Chain rule: df/dt = dz/dt - (dz/dr)(x dx/dt + y dy/dt)/r.
    const derivative = d[2] - (r === 0 ? 0 : (profile.slope(r) * (local[0] * d[0] + local[1] * d[1])) / r);
    if (!Number.isFinite(derivative) || derivative === 0) return null;
    t -= residual / derivative;
  }
  return null;
}

/**
 * Transfer an axial slope-form skew ray to a curved image surface, including backward transfers.
 * @param shape - image shape with an axial (+z) vertex normal
 * @param x - sagittal origin coordinate in mm
 * @param y - meridional origin coordinate in mm
 * @param ux - sagittal slope dx/dz
 * @param uy - meridional slope dy/dz
 * @param fromZ - global axial origin in mm
 * @param vertexZ - global axial vertex in mm
 * @returns global landing point in mm, or null when no landing converges
 */
export function landImageSurfaceSkew(
  shape: ImageSurfaceShape,
  x: number,
  y: number,
  ux: number,
  uy: number,
  fromZ: number,
  vertexZ: number,
): Vec3 | null {
  const hit = landImageSurfaceLine(shape, [x, y, fromZ - vertexZ], [ux, uy, 1]);
  if (!hit) return null;
  const point: Vec3 = [hit.point[0], hit.point[1], hit.point[2] + vertexZ];
  return point.every(Number.isFinite) ? point : null;
}

/**
 * Transfer a meridional slope-form ray (x = 0) to an axial curved image surface.
 * @param shape - local image shape
 * @param y - meridional origin coordinate in mm
 * @param u - meridional slope dy/dz
 * @param fromZ - global axial origin in mm
 * @param vertexZ - global axial vertex in mm
 * @returns global meridional landing in mm, or null when no landing converges
 */
export function landImageSurfaceMeridional(
  shape: ImageSurfaceShape,
  y: number,
  u: number,
  fromZ: number,
  vertexZ: number,
): { y: number; z: number } | null {
  const point = landImageSurfaceSkew(shape, 0, y, 0, u, fromZ, vertexZ);
  return point ? { y: point[1], z: point[2] } : null;
}

/**
 * Construct the right-handed image frame; meridional normals keep local x on global x.
 * @param plane - vertex and normal defining the image surface's placement
 * @returns orthonormal axes, or null for a non-finite vertex or an undefined projected-x axis
 */
export function imageSurfaceLocalFrame(plane: Plane3): { ex: Vec3; ey: Vec3; ez: Vec3 } | null {
  if (!plane.point.every(Number.isFinite)) return null;
  const ez = normalize(plane.normal);
  if (!ez) return null;
  const ex = normalize(subtract([1, 0, 0], scale(ez, ez[0])));
  return ex ? { ex, ey: cross(ez, ex), ez } : null;
}

/**
 * Intersect a forward global ray with a placed image shape for generalized tracing.
 * @param shape - vertex-local image geometry
 * @param plane - global vertex and local-z normal
 * @param ray - global ray; direction need not be normalized
 * @param minT - exclusive lower parameter bound, defaulting to the plane self-hit tolerance
 * @returns global point, parameter and unit normal, or null for invalid geometry or a non-forward landing
 */
export function intersectImageSurface(
  shape: ImageSurfaceShape,
  plane: Plane3,
  ray: Ray3,
  minT = 1e-7,
): { point: Vec3; t: number; normal: Vec3 } | null {
  const frame = imageSurfaceLocalFrame(plane);
  if (!frame || !Number.isFinite(minT)) return null;
  const { ex, ey, ez } = frame;
  const toLocal = (v: Vec3): Vec3 => [dot(v, ex), dot(v, ey), dot(v, ez)];
  const toGlobal = (v: Vec3): Vec3 => add(add(scale(ex, v[0]), scale(ey, v[1])), scale(ez, v[2]));
  const hit = landImageSurfaceLine(shape, toLocal(subtract(ray.origin, plane.point)), toLocal(ray.direction));
  if (!hit || hit.t <= minT) return null;
  const point = add(plane.point, toGlobal(hit.point));
  const normal = normalize(toGlobal(shape.normalAt(hit.point[0], hit.point[1])));
  return normal && point.every(Number.isFinite) ? { point, t: hit.t, normal } : null;
}
