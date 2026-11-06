/**
 * Curved image geometry in a vertex-local frame, shared by sequential landing and folded tracing.
 * Profiles own radial sag/slope arithmetic; this adapter rejects their out-of-domain continuations.
 */

import { expandAsphericCoefficients } from "../../types/asphericSchema.js";
import type { ResolvedImageSurfaceData } from "../../types/optics.js";
import { INTERSECTION_TOLERANCE } from "../math/constants.js";
import { add, cross, dot, normalize, scale, subtract } from "../math/vector.js";
import type { ImageSurfaceShape, Plane3, Ray3, Vec3 } from "../types.js";
import { intersectSurfaceProfile } from "./intersect.js";
import { createSurfaceProfile, normalFromSlope } from "./surfaceProfile.js";

/** Base-conic root seeding a landing: a forward ray's first past `minT`, else the one nearest the vertex. */
function conicSeed(origin: Vec3, direction: Vec3, c: number, K: number, minT: number | undefined): number | null {
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
    if (minT !== undefined && !(t0 + tau > minT)) continue;
    // Unlike baseConicRoot's first-in-interval policy, a signed transfer selects the root nearest the vertex.
    if (selected === null || (minT === undefined ? Math.abs(tau) < Math.abs(selected) : tau < selected)) selected = tau;
  }
  return selected === null ? null : t0 + selected;
}

/**
 * Sine and cosine of a cylinder's angle, exact at the two axis-aligned angles so x-mirror symmetry and straight
 * sections hold bitwise there; zeros for a radial shape.
 */
function cylinderComponents(angle: number | null): readonly [number, number] {
  if (angle === null) return [0, 0];
  if (angle === 0) return [0, 1];
  if (angle === Math.PI / 2) return [1, 0];
  return [Math.sin(angle), Math.cos(angle)];
}

/** Frame dimensions in mm, any orientation. */
export interface ImageFrameSize {
  widthMm: number;
  heightMm: number;
}

/**
 * Where a cylinder sits for the viewed frame direction: the angle from the drawn meridian to its curved direction,
 * and the frame's half-length along the drawn meridian, on the unrolled film and as a lateral height.
 *
 * The lens is rotationally symmetric, so viewing a frame direction is turning the frame, cylinder and all, until that
 * direction lies in the drawn meridian. The corner is the film's, whose curved side of arc length s spans R·sin(s/R)
 * laterally. Without a frame the corner is taken at 45°.
 */
function cylinderPlacement(
  data: ResolvedImageSurfaceData,
  frame: ImageFrameSize | null,
): { angle: number; fieldExtentMm: number | null; drawnExtentMm: number | null } {
  const section = data.section ?? "long";
  const curvedAngle = data.curvedAlong === "short" ? Math.PI / 2 : 0;
  if (!frame) {
    const viewAngle = section === "short" ? Math.PI / 2 : section === "corner" ? Math.PI / 4 : 0;
    return { angle: Math.abs(curvedAngle - viewAngle), fieldExtentMm: null, drawnExtentMm: null };
  }
  const long = Math.max(frame.widthMm, frame.heightMm) / 2;
  const short = Math.min(frame.widthMm, frame.heightMm) / 2;
  const lateralLong = data.curvedAlong === "short" ? long : data.R * Math.sin(long / data.R);
  const lateralShort = data.curvedAlong === "short" ? data.R * Math.sin(short / data.R) : short;
  const [viewAngle, fieldExtentMm, drawnExtentMm] =
    section === "short"
      ? [Math.PI / 2, short, lateralShort]
      : section === "corner"
        ? [Math.atan2(lateralShort, lateralLong), Math.hypot(long, short), Math.hypot(lateralLong, lateralShort)]
        : [0, long, lateralLong];
  return { angle: Math.abs(curvedAngle - viewAngle), fieldExtentMm, drawnExtentMm };
}

/**
 * Prepare an immutable image shape; its semi-diameter describes drawing extent, never a landing clip.
 *
 * A cylinder's curved coordinate is c = x·sin φ + y·cos φ for its angle φ from the drawn meridian; along it the
 * profile is a circle, across it straight. A cylinder unrolls without stretching, so its image coordinates are
 * distances along the unrolled film: R·asin(c/R) across the curve, unchanged along it.
 *
 * @param data - signed radius, sparse coefficients or cylinder orientation and viewed section, and half-height in mm
 * @param frame - frame size placing a cylinder's sections; null without a declared format
 * @returns frozen local sag, positive-z normal and image-coordinate evaluators
 */
export function createImageSurfaceShape(
  data: ResolvedImageSurfaceData,
  frame: ImageFrameSize | null = null,
): ImageSurfaceShape {
  const placement = data.cylindrical ? cylinderPlacement(data, frame) : null;
  const angle = placement?.angle ?? null;
  const [sin, cos] = cylinderComponents(angle);
  const asphere = angle === null && data.asphere ? Object.freeze(expandAsphericCoefficients(data.asphere)) : undefined;
  const profile = createSurfaceProfile({ R: data.R }, asphere);
  const curvedAt = (x: number, y: number): number => x * sin + y * cos;
  const radiusAt = (x: number, y: number): number => (angle === null ? Math.hypot(x, y) : Math.abs(curvedAt(x, y)));
  const inDomain = (x: number, y: number, r: number): boolean =>
    Number.isFinite(x) &&
    Number.isFinite(y) &&
    1 - (1 + profile.conic) * profile.curvature * profile.curvature * (r * r) > 0;
  const R = data.R;
  const normalAt = (x: number, y: number): Vec3 => {
    const r = radiusAt(x, y);
    if (!inDomain(x, y, r)) return [NaN, NaN, NaN];
    if (angle === null) return normalFromSlope(x, y, r, profile.slope(r));
    const c = curvedAt(x, y);
    return normalFromSlope(c * sin, c * cos, r, profile.slope(r));
  };
  const fromImageCoordinates = (u: number, v: number): readonly [number, number] => {
    if (angle === null) return [u, v];
    const unrolled = u * sin + v * cos;
    const t = u * cos - v * sin;
    const c = R * Math.sin(unrolled / R);
    return [t * cos + c * sin, -t * sin + c * cos];
  };
  return Object.freeze({
    kind: angle !== null ? "cylindrical" : asphere ? "aspheric" : "spherical",
    radius: R,
    curvature: 1 / R,
    conic: asphere?.K ?? 0,
    cylinderAngle: angle,
    xSymmetric: angle === null || sin === 0 || cos === 0,
    fieldExtentMm: placement?.fieldExtentMm ?? null,
    drawnExtentMm: placement?.drawnExtentMm ?? null,
    semiDiameter: data.sd,
    profile,
    sagAt: (x: number, y: number): number => {
      const r = radiusAt(x, y);
      return inDomain(x, y, r) ? profile.sag(r) : NaN;
    },
    normalAt,
    toImageCoordinates: (x: number, y: number): readonly [number, number] => {
      if (angle === null) return [x, y];
      const c = curvedAt(x, y);
      const t = x * cos - y * sin;
      const unrolled = R * Math.asin(c / R);
      return [t * cos + unrolled * sin, -t * sin + unrolled * cos];
    },
    fromImageCoordinates,
    imageTangentsAt: (u: number, v: number): readonly [Vec3, Vec3] => {
      const [x, y] = fromImageCoordinates(u, v);
      if (angle === null) {
        // Lateral coordinates: the surface point is (u, v, sag), so each axis tilts by its sag slope.
        const [nx, ny, nz] = normalAt(x, y);
        return [
          [1, 0, -nx / nz],
          [0, 1, -ny / nz],
        ];
      }
      // Unrolled coordinates: unit length along the curve and across it, turned back to the drawn axes.
      const c = curvedAt(x, y);
      const slope = Math.sign(c) * profile.slope(Math.abs(c));
      const step = Math.cos((u * sin + v * cos) / R);
      const along: Vec3 = [step * sin, step * cos, step * slope];
      const across: Vec3 = [cos, -sin, 0];
      return [add(scale(along, sin), scale(across, cos)), subtract(scale(along, cos), scale(across, sin))];
    },
  });
}

/**
 * Land a line on the sheet through the vertex, retaining its direction's parameterization: a forward ray at its first
 * crossing past `minT`, a signed transfer (no `minT`) at the crossing nearest the vertex. A polynomial asphere refines
 * its base conic's crossing, and searches its full sag when that misses or does not converge.
 * @param shape - curved image shape in its local frame
 * @param origin - local line origin in mm
 * @param direction - local direction, not necessarily normalized
 * @param minT - a forward ray's exclusive lower parameter bound; omitted for a signed transfer
 * @returns point and parameter, or null for a miss, invalid input, or failed residual validation
 */
export function landImageSurfaceLine(
  shape: ImageSurfaceShape,
  origin: Vec3,
  direction: Vec3,
  minT?: number,
): { point: Vec3; t: number } | null {
  if (!origin.every(Number.isFinite) || !direction.every(Number.isFinite) || direction.every((v) => v === 0))
    return null;
  const angle = shape.cylinderAngle;
  const [sin, cos] = cylinderComponents(angle);
  const project = (v: Vec3): Vec3 => (angle === null ? v : [0, v[0] * sin + v[1] * cos, v[2]]);
  const profile = shape.profile;
  const polynomial = profile.hasPolynomial;
  const refine = (seed: number): { point: Vec3; t: number } | null => {
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
  };
  // Dropping a cylinder's straight coordinate preserves t while reducing it to the same conic quadratic.
  const seed = conicSeed(project(origin), project(direction), profile.curvature, shape.conic, minT);
  const landed = seed === null ? null : refine(seed);
  if (landed !== null && (minT === undefined || landed.t > minT)) return landed;
  return polynomial ? bracketedLanding(shape, origin, direction, minT) : null;
}

/**
 * Land a line on a radial polynomial asphere with the lens surfaces' bracketed solver, under the same root policy as
 * `landImageSurfaceLine`. The search spans the line inside the surface's domain, or inside twice its drawn
 * semi-diameter when the domain is unbounded.
 */
function bracketedLanding(
  shape: ImageSurfaceShape,
  origin: Vec3,
  direction: Vec3,
  minT: number | undefined,
): { point: Vec3; t: number } | null {
  const speed = Math.hypot(...direction);
  const unit = scale(direction, 1 / speed);
  const radius = shape.profile.finiteRadiusLimit() ?? 2 * shape.semiDiameter;
  const across = unit[0] ** 2 + unit[1] ** 2;
  const offset = origin[0] * unit[0] + origin[1] * unit[1];
  const discriminant = offset ** 2 - across * (origin[0] ** 2 + origin[1] ** 2 - radius ** 2);
  if (!(across > 0 && discriminant > 0)) return null;
  const enter = (-offset - Math.sqrt(discriminant)) / across;
  const leave = (-offset + Math.sqrt(discriminant)) / across;
  // First root from `from` toward `to`, in unit-length parameter; the solver searches forward along its ray.
  const search = (from: number, to: number): number | null => {
    if (!(Math.abs(to - from) > 0)) return null;
    const sign = Math.sign(to - from);
    const ray = { origin: add(origin, scale(unit, from)), direction: scale(unit, sign) };
    const hit = intersectSurfaceProfile(ray, shape.profile, 0, {
      maxT: Math.abs(to - from),
      tolerance: 1e-9,
      directionNormalized: true,
    });
    return hit.ok ? from + sign * hit.t : null;
  };
  let t: number | null;
  if (minT !== undefined) t = search(Math.max(enter, minT * speed), leave);
  else {
    const foot = Math.min(Math.max(-dot(origin, unit), enter), leave);
    const ahead = search(foot, leave);
    const behind = search(foot, enter);
    t = ahead === null || (behind !== null && foot - behind < ahead - foot) ? behind : ahead;
  }
  return t === null ? null : { point: add(origin, scale(unit, t)), t: t / speed };
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
  const hit = landImageSurfaceLine(shape, toLocal(subtract(ray.origin, plane.point)), toLocal(ray.direction), minT);
  if (!hit) return null;
  const point = add(plane.point, toGlobal(hit.point));
  const normal = normalize(toGlobal(shape.normalAt(hit.point[0], hit.point[1])));
  return normal && point.every(Number.isFinite) ? { point, t: hit.t, normal } : null;
}

/**
 * Signed image height of a landing at lateral height y in the drawn meridian: y itself on a radial surface; on a
 * cylinder, the distance from the axis on the unrolled film, which an oblique cylinder moves off the meridian.
 *
 * @param shape - curved image surface
 * @param y - lateral height of the landing in the drawn meridian, in mm
 * @returns signed image height in mm, NaN past a cylinder's edge
 */
export function meridionalImageHeight(shape: ImageSurfaceShape, y: number): number {
  const [u, v] = shape.toImageCoordinates(0, y);
  return u === 0 ? v : Math.sign(v) * Math.hypot(u, v);
}
