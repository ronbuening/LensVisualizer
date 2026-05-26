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
  referenceZ?: number;
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

export function generalizedImagePlaneIntercept(
  y: number,
  u: number,
  referenceZ: number,
  L: RuntimeLens,
): number | null {
  return imagePlaneCoordinate(y, u, referenceZ, L, L.imagePlane?.z ?? referenceZ);
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

export function transverseCoordinateAtPlane(hit: TransverseFocusHit, lastSurfZ: number, planeZ: number): number {
  return hit.coordinate + hit.slope * (planeZ - (hit.referenceZ ?? lastSurfZ));
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
  const numer = hits.reduce((sum, hit) => {
    const referenceZ = hit.referenceZ ?? lastSurfZ;
    return sum + hit.slope * hit.slope * referenceZ - hit.coordinate * hit.slope;
  }, 0);
  return numer / denom;
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
    const du = hit.slope - referenceHit.slope;
    const referenceZ = hit.referenceZ ?? lastSurfZ;
    const referenceHitZ = referenceHit.referenceZ ?? lastSurfZ;
    const offset =
      hit.coordinate - hit.slope * referenceZ - referenceHit.coordinate + referenceHit.slope * referenceHitZ;
    return sum + offset * du;
  }, 0);

  return -numer / denom;
}
