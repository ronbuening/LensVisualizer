/**
 * Trace interaction physics — reflection, refraction, incident-side, and origin-advance helpers.
 *
 * Encapsulates Snell/reflection conventions for generalized tracing across refractive, mirrored, and passive surfaces.
 */

import type { CompiledStateSurface, Vec3 } from "../types.js";
import { dot, normalize, reflect, refract, scale } from "../math/vector.js";

/** Side of a surface reached by an incoming ray relative to the compiled normal. */
export type IncidentSide = "front" | "rear";

/**
 * Classify which side of a surface a ray approaches from.
 *
 * The compiled normal points toward the front side, so a non-negative dot product
 * means the ray is traveling with the normal and sees the authored front side.
 *
 * @param direction - normalized incoming ray direction
 * @param normal - compiled surface normal
 * @returns incident side used by interaction-side filters
 */
export function incidentSideFor(direction: Vec3, normal: Vec3): IncidentSide {
  return dot(direction, normal) >= 0 ? "front" : "rear";
}

/**
 * Test whether a surface interaction is active for the current incident side.
 *
 * @param surface - prepared surface with interaction metadata
 * @param side - incident side from incidentSideFor()
 * @returns true when the ray should interact instead of treating the surface as inactive
 */
export function isSurfaceSideActive(surface: CompiledStateSurface, side: IncidentSide): boolean {
  const configured = surface.interaction.incidentSide;
  return configured === "both" || configured === side;
}

/**
 * Reflect a ray direction at a surface.
 *
 * @param direction - incoming ray direction
 * @param normal - oriented reflection normal
 * @returns normalized reflected direction, or null for invalid inputs
 */
export function reflectedDirection(direction: Vec3, normal: Vec3): Vec3 | null {
  return reflect(direction, normal);
}

/**
 * Refract a ray direction with Snell's law.
 *
 * @param direction - incoming ray direction
 * @param normal - normal oriented toward the outgoing medium
 * @param nFrom - incident refractive index
 * @param nTo - transmitted refractive index
 * @returns refracted direction, or null for total internal reflection
 */
export function refractedDirection(direction: Vec3, normal: Vec3, nFrom: number, nTo: number): Vec3 | null {
  return refract(direction, normal, nFrom, nTo);
}

/**
 * Orient a normal for refraction across front or rear incidence.
 *
 * @param normal - compiled surface normal
 * @param incidentSide - side seen by the incoming ray
 * @returns normal pointing into the transmitted medium for vector Snell's law
 */
export function orientedRefractionNormal(normal: Vec3, incidentSide: IncidentSide): Vec3 {
  return incidentSide === "front" ? normal : scale(normal, -1);
}

/**
 * Resolve the refractive index after crossing a surface.
 *
 * Rear-side incidence walks back to the previous physical medium; front-side incidence
 * uses the surface's authored nd. The optional resolver swaps d-line nd for a chromatic
 * channel index without changing the physical medium sequence.
 *
 * @param surfaceIndex - zero-based prepared surface index
 * @param incidentSide - side approached by the ray
 * @param surface - current prepared surface
 * @param surfaces - full prepared surface list for rear-side media lookup
 * @param indexAtSurface - optional chromatic index resolver
 * @returns next medium refractive index
 */
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

/**
 * Move the ray origin slightly along its direction after a hit.
 *
 * This prevents the generalized tracer from immediately re-hitting the same
 * surface due to floating-point residuals.
 *
 * @param point - exact hit point
 * @param direction - outgoing direction
 * @returns advanced origin in engine coordinates
 */
export function advanceOrigin(point: Vec3, direction: Vec3): Vec3 {
  const unit = normalize(direction) ?? direction;
  const eps = 1e-7;
  return [point[0] + unit[0] * eps, point[1] + unit[1] * eps, point[2] + unit[2] * eps];
}
