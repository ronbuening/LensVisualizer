/**
 * Aberration shared math — image-plane intercepts, focus scoring, and symmetric real-ray samples.
 *
 * Centralizes the coordinate and best-focus conventions reused by spherical, coma, field-curvature, and bokeh modules.
 */

import { traceRay2 as traceRay } from "../trace/rayAdapters.js";
import type { RuntimeLens } from "../../types/optics.js";

/** Candidate fractions of the entrance pupil for the marginal ray sample. */
export const MARGINAL_FRACS = [0.97, 0.95, 0.9, 0.85, 0.8] as const;

/** Pupil zone fractions sampled for the SA profile curve. */
export const PROFILE_FRACS = [
  0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.88, 0.91, 0.93, 0.95,
  0.97,
] as const;

const MIN_SLOPE = 1e-12;

/** Symmetric plus/minus real-ray sample collapsed to an axial intercept and image height. */
export interface SymmetricRealSample {
  fraction: number;
  intercept: number;
  imageHeight: number;
}

/** Ray hit representation used by transverse best-focus solvers. */
export interface TransverseFocusHit {
  coordinate: number;
  slope: number;
  referenceZ?: number;
}

/** Real meridional ray hit with pupil fraction and image-plane coordinates. */
export interface RealRayHit extends TransverseFocusHit {
  fraction: number;
  signedFraction: number;
  y: number;
  u: number;
  intercept: number;
  imageHeight: number;
}

/**
 * Compute the axial intercept of a meridional ray.
 *
 * @param y - ray height at `lastSurfZ` in mm
 * @param u - meridional slope dy/dz
 * @param lastSurfZ - reference z coordinate in mm
 * @returns z intercept in mm, or null for near-parallel rays
 */
export function axialIntercept(y: number, u: number, lastSurfZ: number): number | null {
  if (Math.abs(u) < MIN_SLOPE) return null;
  return lastSurfZ - y / u;
}

/**
 * Project a meridional ray to an ordinary vertical image plane.
 *
 * @param y - ray height at `lastSurfZ` in mm
 * @param u - meridional slope dy/dz
 * @param lastSurfZ - reference z coordinate in mm
 * @param imagePlaneZ - image-plane z coordinate in mm
 * @returns image height in mm, or null when non-finite
 */
export function imagePlaneIntercept(y: number, u: number, lastSurfZ: number, imagePlaneZ: number): number | null {
  const dz = imagePlaneZ - lastSurfZ;
  const imageHeight = y + u * dz;
  return isFinite(imageHeight) ? imageHeight : null;
}

/**
 * Convert a point on an arbitrary meridional image plane to its signed coordinate.
 *
 * @param z - point z coordinate in mm
 * @param y - point y coordinate in mm
 * @param L - runtime lens with optional folded image-plane normal
 * @param planeZ - image-plane z coordinate in mm
 * @returns signed coordinate along the plane tangent in mm
 */
export function meridionalImagePlaneCoordinate(
  z: number,
  y: number,
  L: RuntimeLens,
  planeZ = L.imagePlane?.z ?? z,
): number {
  const normal = L.imagePlane?.normal ?? { z: 1, y: 0 };
  const imageY = L.imagePlane?.y ?? 0;
  const tangentZ = -normal.y;
  const tangentY = normal.z;
  return (z - planeZ) * tangentZ + (y - imageY) * tangentY;
}

/**
 * Intersect a meridional ray with the lens image plane and return plane coordinate.
 *
 * Handles tilted folded image planes by solving the line/plane equation in the
 * y/z meridional section, then measuring along the plane tangent.
 *
 * @param y - ray height at `referenceZ` in mm
 * @param u - meridional slope dy/dz
 * @param referenceZ - ray reference z coordinate in mm
 * @param L - runtime lens with image-plane metadata
 * @param planeZ - image-plane z coordinate in mm
 * @returns signed image-plane coordinate in mm, or null when parallel/off-plane
 */
export function imagePlaneCoordinate(
  y: number,
  u: number,
  referenceZ: number,
  L: RuntimeLens,
  planeZ = L.imagePlane?.z ?? referenceZ,
): number | null {
  const normal = L.imagePlane?.normal ?? { z: 1, y: 0 };
  const imageY = L.imagePlane?.y ?? 0;
  const normalY = normal.y;
  const normalZ = normal.z;
  const numer = normalY * (y - imageY) + normalZ * (referenceZ - planeZ);
  const denom = normalY * u + normalZ;
  if (Math.abs(denom) <= 1e-12) {
    return Math.abs(numer) <= 1e-9 ? meridionalImagePlaneCoordinate(referenceZ, y, L, planeZ) : null;
  }
  const dz = -numer / denom;
  const zHit = referenceZ + dz;
  const yHit = y + u * dz;
  if (!isFinite(zHit) || !isFinite(yHit)) return null;
  return meridionalImagePlaneCoordinate(zHit, yHit, L, planeZ);
}

/**
 * Convenience image-plane intercept using the lens's generalized image plane.
 *
 * @param y - ray height at `referenceZ` in mm
 * @param u - meridional slope dy/dz
 * @param referenceZ - ray reference z coordinate in mm
 * @param L - runtime lens with image-plane metadata
 * @returns signed image-plane coordinate in mm, or null
 */
export function generalizedImagePlaneIntercept(
  y: number,
  u: number,
  referenceZ: number,
  L: RuntimeLens,
): number | null {
  return imagePlaneCoordinate(y, u, referenceZ, L, L.imagePlane?.z ?? referenceZ);
}

/**
 * Trace one real on-axis ray and derive intercept/focus metrics.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param lastSurfZ - last surface vertex z coordinate in mm
 * @param imagePlaneZ - image-plane z coordinate in mm
 * @param signedFraction - signed entrance-pupil fraction
 * @param aberrationT - normalized aberration spacing slider
 * @returns real-ray hit metrics, or null when clipped/degenerate
 */
export function computeRealRayHit(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  lastSurfZ: number,
  imagePlaneZ: number,
  signedFraction: number,
  aberrationT = 0,
): RealRayHit | null {
  const h = signedFraction * currentEPSD;
  const ray = traceRay(h, 0, zPos, focusT, zoomT, currentPhysStopSD, true, L, aberrationT);
  if (ray.clipped) return null;

  const terminalPoint = ray.reachedImagePlane ? ray.pts[ray.pts.length - 1] : undefined;
  const referenceZ = terminalPoint ? terminalPoint[0] : lastSurfZ;
  const referenceY = terminalPoint ? terminalPoint[1] : ray.y;
  const intercept = axialIntercept(referenceY, ray.u, referenceZ);
  const imageHeight = imagePlaneCoordinate(referenceY, ray.u, referenceZ, L, imagePlaneZ);
  if (intercept === null || imageHeight === null) return null;

  return {
    coordinate: referenceY,
    fraction: Math.abs(signedFraction),
    signedFraction,
    slope: ray.u,
    referenceZ,
    y: referenceY,
    u: ray.u,
    intercept,
    imageHeight,
  };
}

/**
 * Trace symmetric plus/minus pupil rays and average their intercepts.
 *
 * Symmetric pairing prevents one-sided clipping or decentering from biasing the
 * on-axis spherical-aberration reference.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param lastSurfZ - last surface vertex z coordinate in mm
 * @param imagePlaneZ - image-plane z coordinate in mm
 * @param fraction - positive entrance-pupil fraction
 * @param aberrationT - normalized aberration spacing slider
 * @returns averaged real-ray sample, or null when either side fails
 */
export function computeSymmetricRealSample(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  lastSurfZ: number,
  imagePlaneZ: number,
  fraction: number,
  aberrationT = 0,
): SymmetricRealSample | null {
  const plusHit = computeRealRayHit(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    lastSurfZ,
    imagePlaneZ,
    fraction,
    aberrationT,
  );
  const minusHit = computeRealRayHit(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    lastSurfZ,
    imagePlaneZ,
    -fraction,
    aberrationT,
  );
  if (plusHit === null || minusHit === null) return null;

  return {
    fraction,
    intercept: (plusHit.intercept + minusHit.intercept) / 2,
    imageHeight: (plusHit.imageHeight + minusHit.imageHeight) / 2,
  };
}

/**
 * Evaluate a traced transverse coordinate at an arbitrary plane.
 *
 * @param hit - transverse hit coordinate/slope
 * @param lastSurfZ - fallback reference z coordinate in mm
 * @param planeZ - target plane z coordinate in mm
 * @returns coordinate in mm at the target plane
 */
export function transverseCoordinateAtPlane(hit: TransverseFocusHit, lastSurfZ: number, planeZ: number): number {
  return hit.coordinate + hit.slope * (planeZ - (hit.referenceZ ?? lastSurfZ));
}

/**
 * Compute RMS transverse spot radius at a plane.
 *
 * @param hits - traced transverse hits
 * @param lastSurfZ - fallback reference z coordinate in mm
 * @param planeZ - target plane z coordinate in mm
 * @returns RMS coordinate magnitude in mm
 */
export function rmsAtPlane(hits: TransverseFocusHit[], lastSurfZ: number, planeZ: number): number {
  return Math.sqrt(
    hits.reduce((sum, hit) => {
      const imageHeight = transverseCoordinateAtPlane(hit, lastSurfZ, planeZ);
      return sum + imageHeight * imageHeight;
    }, 0) / hits.length,
  );
}

/**
 * Compute peak transverse spot radius at a plane.
 *
 * @param hits - traced transverse hits
 * @param lastSurfZ - fallback reference z coordinate in mm
 * @param planeZ - target plane z coordinate in mm
 * @returns maximum absolute coordinate in mm
 */
export function peakAtPlane(hits: TransverseFocusHit[], lastSurfZ: number, planeZ: number): number {
  return Math.max(...hits.map((hit) => Math.abs(transverseCoordinateAtPlane(hit, lastSurfZ, planeZ))));
}

/**
 * Least-squares best-focus plane for a set of transverse ray hits.
 *
 * Minimizes the sum of squared transverse coordinates after propagating each
 * ray linearly to a common z plane.
 *
 * @param hits - traced transverse hits
 * @param lastSurfZ - fallback reference z coordinate in mm
 * @returns best-focus z coordinate in mm
 */
export function bestFocusPlane(hits: TransverseFocusHit[], lastSurfZ: number): number {
  const denom = hits.reduce((sum, hit) => sum + hit.slope * hit.slope, 0);
  if (denom <= 1e-12) return lastSurfZ;
  const numer = hits.reduce((sum, hit) => {
    const referenceZ = hit.referenceZ ?? lastSurfZ;
    return sum + hit.slope * hit.slope * referenceZ - hit.coordinate * hit.slope;
  }, 0);
  return numer / denom;
}

/**
 * Least-squares best-focus plane relative to a reference/chief ray.
 *
 * Used for off-axis bundles where blur should be centered on the chief ray
 * rather than on the optical axis.
 *
 * @param hits - traced transverse hits
 * @param referenceHit - reference ray to subtract before RMS minimization
 * @param lastSurfZ - fallback reference z coordinate in mm
 * @returns best-focus z coordinate in mm
 */
export function bestRelativeFocusPlane(
  hits: TransverseFocusHit[],
  referenceHit: TransverseFocusHit,
  lastSurfZ: number,
): number {
  const denom = hits.reduce((sum, hit) => {
    const du = hit.slope - referenceHit.slope;
    return sum + du * du;
  }, 0);
  if (denom <= 1e-12) return lastSurfZ;

  const numer = hits.reduce((sum, hit) => {
    const du = hit.slope - referenceHit.slope;
    const referenceZ = hit.referenceZ ?? lastSurfZ;
    const referenceHitZ = referenceHit.referenceZ ?? lastSurfZ;
    const offset =
      hit.coordinate - hit.slope * referenceZ - referenceHit.coordinate + referenceHit.slope * referenceHitZ;
    return sum + offset * du;
  }, 0);

  return -numer / denom;
}
