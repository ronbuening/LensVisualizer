/**
 * Aberration shared math — image-plane intercepts, focus scoring, and symmetric real-ray samples.
 *
 * Centralizes the coordinate and best-focus conventions reused by spherical, coma, field-curvature, and bokeh modules.
 */

import { runtimeView } from "../../prescription/runtimeView.js";
import type { AnalysisRequest } from "../request.js";

import { MARGINAL_PUPIL_FRACTIONS } from "../sampling.js";
import type { ChromaticChannel, RuntimeLens } from "../../../types/optics.js";
import { prepareAimedPupilLaunch, prepareAimedPupilTrace } from "../pupils/aimedPupil.js";
import type { AimedObjectPlaneField, AimedPupilLaunch, AimedPupilRay, AimedPupilTrace } from "../pupils/aimedPupil.js";

/**
 * Candidate stop fractions for the marginal ray sample. Each zone is aimed at that fraction of the stop radius, so the
 * stop never clips it; a later candidate is tried only when another aperture vignettes the earlier one.
 */
export const MARGINAL_FRACS = MARGINAL_PUPIL_FRACTIONS;

/** Unlike the orthogonal fan, SA profile zones are positive, rim-dense and omit both endpoints. */
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
  /** Bulk-material intensity transmission carried by the traced ray. */
  transmission?: number;
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

/** The axial object at infinity: a collimated launch along the axis, whose chief is the axis itself. */
const AXIAL_FIELD: AimedObjectPlaneField = { uField: 0, yChief: 0 };

/** On-axis meridional zones aimed at the stop, one launch per channel. */
export interface AxialZoneLaunch {
  launch: AimedPupilLaunch;
  trace: AimedPupilTrace;
  /** Aimed ray of a signed stop fraction the launch was prepared with, or null. */
  ray(signedFraction: number): AimedPupilRay | null;
  /** True when no ray could be aimed at either side of a zone pair. */
  unaimed(fraction: number): boolean;
}

/**
 * Aim on-axis zones at the stop: zone f is the meridional ray from the axial object that crosses the stop at f·R.
 *
 * On the axis this is a one-dimensional solve for the launch height; the sagittal launch coordinate stays zero.
 *
 * @param request - prepared geometry and current stop radius
 * @param signedFractions - signed stop fractions, each in [-1, 1]
 * @param channel - chromatic channel the zones are aimed and traced at
 * @returns zone launch, or null when the request has no stop
 */
export function prepareAxialZoneLaunch(
  request: AnalysisRequest,
  signedFractions: readonly number[],
  channel?: ChromaticChannel,
): AxialZoneLaunch | null {
  const samples = signedFractions.map((yFraction) => ({ xFraction: 0, yFraction }));
  const launch = prepareAimedPupilLaunch(request, samples, AXIAL_FIELD, channel);
  if (launch === null) return null;
  const byFraction = new Map(signedFractions.map((fraction, index) => [fraction, launch.rays[index]]));
  const ray = (signedFraction: number) => byFraction.get(signedFraction) ?? null;
  return {
    launch,
    trace: prepareAimedPupilTrace(request.preparedGeometry, launch, channel),
    ray,
    unaimed: (fraction) => ray(fraction)?.status === "unaimed" || ray(-fraction)?.status === "unaimed",
  };
}

/** Signed zone list for symmetric pairs: +f then −f for every fraction. */
export function symmetricZoneFractions(fractions: readonly number[]): number[] {
  return fractions.flatMap((fraction) => [fraction, -fraction]);
}

/**
 * Trace one real on-axis zone aimed at the stop and derive intercept/focus metrics.
 *
 * @param request - prepared geometry and aperture snapshot
 * @param lastSurfZ - last surface vertex z coordinate in mm
 * @param imagePlaneZ - image-plane z coordinate in mm
 * @param signedFraction - signed stop fraction the zone crosses the stop at
 * @param zones - aimed zones including this fraction
 * @returns real-ray hit metrics, or null when unaimed, vignetted or degenerate
 */
export function computeRealRayHit(
  request: AnalysisRequest,
  lastSurfZ: number,
  imagePlaneZ: number,
  signedFraction: number,
  zones: AxialZoneLaunch,
): RealRayHit | null {
  const L = runtimeView(request.preparedGeometry.lens);
  const aimed = zones.ray(signedFraction);
  if (aimed === null || aimed.status === "unaimed") return null;
  const ray = zones.trace.meridional(aimed);
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
    transmission: ray.transmission ?? 1,
    slope: ray.u,
    referenceZ,
    y: referenceY,
    u: ray.u,
    intercept,
    imageHeight,
  };
}

/**
 * Trace symmetric plus/minus zones and average their intercepts.
 *
 * Symmetric pairing prevents one-sided clipping or decentering from biasing the
 * on-axis spherical-aberration reference.
 *
 * @param request - prepared geometry and aperture snapshot
 * @param lastSurfZ - last surface vertex z coordinate in mm
 * @param imagePlaneZ - image-plane z coordinate in mm
 * @param fraction - positive stop fraction
 * @param zones - aimed zones including ±fraction
 * @returns averaged real-ray sample, or null when either side fails
 */
// Unlike sampleOrthogonalPupilFan, trace only the requested +/- pair and average its axial/spherical readouts.
export function computeSymmetricRealSample(
  request: AnalysisRequest,
  lastSurfZ: number,
  imagePlaneZ: number,
  fraction: number,
  zones: AxialZoneLaunch,
): SymmetricRealSample | null {
  const plusHit = computeRealRayHit(request, lastSurfZ, imagePlaneZ, fraction, zones);
  const minusHit = computeRealRayHit(request, lastSurfZ, imagePlaneZ, -fraction, zones);
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
