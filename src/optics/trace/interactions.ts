import type { CompiledStateSurface, Vec3 } from "../types.js";
import { dot, normalize, reflect, refract, scale } from "../math/vector.js";

export type IncidentSide = "front" | "rear";

export function incidentSideFor(direction: Vec3, normal: Vec3): IncidentSide {
  return dot(direction, normal) >= 0 ? "front" : "rear";
}

export function isSurfaceSideActive(surface: CompiledStateSurface, side: IncidentSide): boolean {
  const configured = surface.interaction.incidentSide;
  return configured === "both" || configured === side;
}

export function reflectedDirection(direction: Vec3, normal: Vec3): Vec3 | null {
  return reflect(direction, normal);
}

export function refractedDirection(direction: Vec3, normal: Vec3, nFrom: number, nTo: number): Vec3 | null {
  return refract(direction, normal, nFrom, nTo);
}

export function orientedRefractionNormal(normal: Vec3, incidentSide: IncidentSide): Vec3 {
  return incidentSide === "front" ? normal : scale(normal, -1);
}

export function resolvedNextIndex(
  surfaceIndex: number,
  incidentSide: IncidentSide,
  surface: CompiledStateSurface,
  surfaces: readonly CompiledStateSurface[],
  indexAtSurface?: (surfaceIndex: number, nd: number) => number,
): number {
  const physicalNextNd = incidentSide === "front" ? surface.nd : surfaceIndex > 0 ? surfaces[surfaceIndex - 1].nd : 1;
  if (!indexAtSurface) return physicalNextNd === 1 ? 1 : physicalNextNd;
  return physicalNextNd === 1 ? 1 : indexAtSurface(surfaceIndex, physicalNextNd);
}

export function advanceOrigin(point: Vec3, direction: Vec3): Vec3 {
  const unit = normalize(direction) ?? direction;
  const eps = 1e-7;
  return [point[0] + unit[0] * eps, point[1] + unit[1] * eps, point[2] + unit[2] * eps];
}
