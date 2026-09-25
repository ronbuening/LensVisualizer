/** Scalar wavefront at an image-centered reference sphere. Lengths are mm, phases are not wrapped. */
import type { Vec3 } from "../types.js";
import type { MtfPupilRay } from "./mtfTracing.js";

export interface WavefrontSample {
  /** Transverse direction cosines from the common image reference to the reference sphere. */
  qx: number;
  qy: number;
  opticalPathMm: number;
}

export function launchPhaseMm(ray: MtfPupilRay["trace"], objectPoint?: Vec3): number {
  const { origin, direction } = ray.input;
  // Infinite conjugates have a plane incident wave; finite conjugates share one spherical source.
  return objectPoint
    ? Math.hypot(origin[0] - objectPoint[0], origin[1] - objectPoint[1], origin[2] - objectPoint[2])
    : origin[0] * direction[0] + origin[1] * direction[1] + origin[2] * direction[2];
}

export function sampleReferenceWavefront(
  ray: MtfPupilRay["trace"],
  imageReference: Vec3,
  radiusMm: number,
  objectPoint?: Vec3,
): WavefrontSample | null {
  if (!Number.isFinite(ray.opticalPathLengthMm) || !(radiusMm > 0)) return null;
  const delta = ray.terminalPoint.map((v, i) => v - imageReference[i]);
  const b = delta.reduce((sum, v, i) => sum + v * ray.terminalDirection[i], 0);
  const c = delta.reduce((sum, v) => sum + v * v, 0) - radiusMm * radiusMm;
  const discriminant = b * b - c;
  if (!(discriminant >= 0)) return null;
  // The near hemisphere is before the image. A negative transfer is a virtual-pupil back projection.
  const transfer = -b - Math.sqrt(discriminant);
  const qx = (delta[0] + transfer * ray.terminalDirection[0]) / radiusMm;
  const qy = (delta[1] + transfer * ray.terminalDirection[1]) / radiusMm;
  if (qx * qx + qy * qy >= 1) return null;
  return {
    qx,
    qy,
    opticalPathMm: launchPhaseMm(ray, objectPoint) + ray.opticalPathLengthMm! + ray.finalMedium * transfer,
  };
}
