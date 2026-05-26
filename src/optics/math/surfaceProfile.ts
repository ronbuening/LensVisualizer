import { FLAT_R_THRESHOLD, VECTOR_EPSILON } from "../constants.js";
import type { SurfaceProfile, Vec3 } from "../types.js";
import type { AsphericCoefficients, SurfaceData } from "../../types/optics.js";
import { conicPolySag, sag, sagSlopeRaw } from "../internal/surfaceMath.js";
import { normalize } from "./vector.js";

export function createSurfaceProfile(
  surface: Pick<SurfaceData, "R" | "interaction">,
  asphere?: AsphericCoefficients,
): SurfaceProfile {
  if (surface.interaction?.normal) {
    return createTiltedPlaneProfile(surface.interaction.normal);
  }
  if (Math.abs(surface.R) > FLAT_R_THRESHOLD && !asphere) {
    return createFlatProfile();
  }
  if (asphere) {
    return createAsphericProfile(surface.R, asphere);
  }
  return createSphericalProfile(surface.R);
}

export function createFlatProfile(): SurfaceProfile {
  return Object.freeze({
    kind: "flat" as const,
    sag: () => 0,
    slope: () => 0,
    normalAt: () => [0, 0, 1] as Vec3,
    pointAt: (vertexZ: number, x: number, y: number) => [x, y, vertexZ] as Vec3,
    finiteRadiusLimit: () => null,
  });
}

export function createSphericalProfile(R: number): SurfaceProfile {
  return Object.freeze({
    kind: "spherical" as const,
    sag: (radius: number) => sag(radius, R),
    slope: (radius: number) => sagSlopeRaw(radius, R, undefined),
    normalAt: (point: Vec3) => radialNormalAt(point, sagSlopeRaw(Math.hypot(point[0], point[1]), R, undefined)),
    pointAt: (vertexZ: number, x: number, y: number) => [x, y, vertexZ + sag(Math.hypot(x, y), R)] as Vec3,
    finiteRadiusLimit: () => Math.abs(R),
  });
}

export function createAsphericProfile(R: number, asphere: AsphericCoefficients): SurfaceProfile {
  return Object.freeze({
    kind: "aspheric" as const,
    sag: (radius: number) => conicPolySag(radius, R, asphere),
    slope: (radius: number) => sagSlopeRaw(radius, R, asphere),
    normalAt: (point: Vec3) => radialNormalAt(point, sagSlopeRaw(Math.hypot(point[0], point[1]), R, asphere)),
    pointAt: (vertexZ: number, x: number, y: number) =>
      [x, y, vertexZ + conicPolySag(Math.hypot(x, y), R, asphere)] as Vec3,
    finiteRadiusLimit: () => conicFiniteRadiusLimit(R, asphere.K),
  });
}

export function createTiltedPlaneProfile(normal: { z: number; y: number }): SurfaceProfile {
  const unit = normalize([0, normal.y, normal.z]);
  const planeNormal = unit ?? ([0, 0, 1] as Vec3);
  const normalY = planeNormal[1];
  const normalZ = planeNormal[2];
  const zFromY = (vertexZ: number, y: number): number => {
    if (Math.abs(normalZ) <= VECTOR_EPSILON) return vertexZ;
    return vertexZ - (normalY * y) / normalZ;
  };

  return Object.freeze({
    kind: "tilted-plane" as const,
    sag: (radius: number) => zFromY(0, radius),
    slope: () => (Math.abs(normalZ) <= VECTOR_EPSILON ? 0 : -normalY / normalZ),
    normalAt: () => planeNormal,
    pointAt: (vertexZ: number, x: number, y: number) =>
      Math.abs(normalZ) <= VECTOR_EPSILON ? ([x, 0, vertexZ] as Vec3) : ([x, y, zFromY(vertexZ, y)] as Vec3),
    finiteRadiusLimit: () => null,
  });
}

function radialNormalAt(point: Vec3, slope: number): Vec3 {
  const radius = Math.hypot(point[0], point[1]);
  if (radius < VECTOR_EPSILON) return [0, 0, 1];
  const dzdx = (slope * point[0]) / radius;
  const dzdy = (slope * point[1]) / radius;
  return normalize([-dzdx, -dzdy, 1]) ?? [0, 0, 1];
}

function conicFiniteRadiusLimit(R: number, K: number): number | null {
  if (Math.abs(R) > FLAT_R_THRESHOLD) return null;
  const c = 1 / R;
  const factor = (1 + K) * c * c;
  if (factor <= 0) return null;
  return 1 / Math.sqrt(factor);
}
