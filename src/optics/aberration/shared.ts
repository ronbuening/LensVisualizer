import { traceRay } from "../optics.js";
import type { RuntimeLens } from "../../types/optics.js";

/** Candidate fractions of the entrance pupil for the marginal ray sample. */
export const MARGINAL_FRACS = [0.97, 0.95, 0.9, 0.85, 0.8] as const;

/** Pupil zone fractions sampled for the SA profile curve. */
export const PROFILE_FRACS = [
  0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.88, 0.91, 0.93, 0.95,
  0.97,
] as const;

const MIN_SLOPE = 1e-12;

export interface SymmetricRealSample {
  fraction: number;
  intercept: number;
  imageHeight: number;
}

export interface TransverseFocusHit {
  coordinate: number;
  slope: number;
}

export interface RealRayHit extends TransverseFocusHit {
  fraction: number;
  signedFraction: number;
  y: number;
  u: number;
  intercept: number;
  imageHeight: number;
}

export function axialIntercept(y: number, u: number, lastSurfZ: number): number | null {
  if (Math.abs(u) < MIN_SLOPE) return null;
  return lastSurfZ - y / u;
}

export function imagePlaneIntercept(y: number, u: number, lastSurfZ: number, imagePlaneZ: number): number | null {
  const dz = imagePlaneZ - lastSurfZ;
  const imageHeight = y + u * dz;
  return isFinite(imageHeight) ? imageHeight : null;
}

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
): RealRayHit | null {
  const h = signedFraction * currentEPSD;
  const ray = traceRay(h, 0, zPos, focusT, zoomT, currentPhysStopSD, true, L);
  if (ray.clipped) return null;

  const intercept = axialIntercept(ray.y, ray.u, lastSurfZ);
  const imageHeight = imagePlaneIntercept(ray.y, ray.u, lastSurfZ, imagePlaneZ);
  if (intercept === null || imageHeight === null) return null;

  return {
    coordinate: ray.y,
    fraction: Math.abs(signedFraction),
    signedFraction,
    slope: ray.u,
    y: ray.y,
    u: ray.u,
    intercept,
    imageHeight,
  };
}

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
  );
  if (plusHit === null || minusHit === null) return null;

  return {
    fraction,
    intercept: (plusHit.intercept + minusHit.intercept) / 2,
    imageHeight: (plusHit.imageHeight + minusHit.imageHeight) / 2,
  };
}

export function transverseCoordinateAtPlane(hit: TransverseFocusHit, lastSurfZ: number, planeZ: number): number {
  return hit.coordinate + hit.slope * (planeZ - lastSurfZ);
}

export function rmsAtPlane(hits: TransverseFocusHit[], lastSurfZ: number, planeZ: number): number {
  return Math.sqrt(
    hits.reduce((sum, hit) => {
      const imageHeight = transverseCoordinateAtPlane(hit, lastSurfZ, planeZ);
      return sum + imageHeight * imageHeight;
    }, 0) / hits.length,
  );
}

export function peakAtPlane(hits: TransverseFocusHit[], lastSurfZ: number, planeZ: number): number {
  return Math.max(...hits.map((hit) => Math.abs(transverseCoordinateAtPlane(hit, lastSurfZ, planeZ))));
}

export function bestFocusPlane(hits: TransverseFocusHit[], lastSurfZ: number): number {
  const denom = hits.reduce((sum, hit) => sum + hit.slope * hit.slope, 0);
  if (denom <= 1e-12) return lastSurfZ;
  const numer = hits.reduce((sum, hit) => sum + hit.coordinate * hit.slope, 0);
  return lastSurfZ - numer / denom;
}

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
    const dy = hit.coordinate - referenceHit.coordinate;
    const du = hit.slope - referenceHit.slope;
    return sum + dy * du;
  }, 0);

  return lastSurfZ - numer / denom;
}
