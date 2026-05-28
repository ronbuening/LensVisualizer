/**
 * Surface interaction compiler — normalizes mirror, blocker, refraction, and image-plane metadata.
 *
 * Translates lens-data folded-path fields into engine Vec3/Plane3 structures used by generalized tracing.
 */

import type { CompiledSurfaceInteraction, Plane3, Vec3 } from "../types.js";
import type { ImagePlaneData, ResolvedImagePlane, SurfaceInteraction } from "../../types/optics.js";
import { normalize } from "../math/vector.js";

/**
 * Convert a meridional y/z normal into a normalized 3D engine vector.
 *
 * Lens data omits x because current folded fixtures only tilt in the meridional
 * plane. Missing normals default to the ordinary image-side +z direction.
 *
 * @param normal - optional lens-data normal with z/y components
 * @returns normalized `[x, y, z]` vector
 */
export function yzNormalToVec3(normal: { z: number; y: number } | undefined): Vec3 {
  return normalize([0, normal?.y ?? 0, normal?.z ?? 1]) ?? [0, 0, 1];
}

/**
 * Compile authored surface interaction metadata for generalized tracing.
 *
 * Ordinary surfaces default to refraction from both sides. Reflective surfaces
 * default inactive-side behavior to blocking so mirror backs are opaque unless
 * lens data says otherwise.
 *
 * @param interaction - optional authored refract/reflect/block metadata
 * @returns frozen engine interaction descriptor
 */
export function compileSurfaceInteraction(interaction: SurfaceInteraction | undefined): CompiledSurfaceInteraction {
  return Object.freeze({
    type: interaction?.type ?? "refract",
    incidentSide: interaction?.incidentSide ?? "both",
    inactiveSide: interaction?.inactiveSide ?? (interaction?.type === "reflect" ? "block" : "ignore"),
    mirrorKind: interaction?.mirrorKind ?? null,
    normal: interaction?.normal ? yzNormalToVec3(interaction.normal) : null,
    source: interaction ? Object.freeze({ ...interaction }) : null,
  });
}

/**
 * Convert a resolved RuntimeLens image plane into an engine plane.
 *
 * @param imagePlane - resolved image-plane position and meridional normal
 * @returns frozen 3D plane used by generalized tracing
 */
export function resolvedImagePlaneToPlane3(imagePlane: ResolvedImagePlane): Plane3 {
  return Object.freeze({
    point: [0, imagePlane.y, imagePlane.z] as Vec3,
    normal: yzNormalToVec3(imagePlane.normal),
    label: imagePlane.label,
  });
}

/**
 * Convert authored image-plane data directly into an engine plane.
 *
 * @param imagePlane - authored image-plane data
 * @param fallbackLabel - label used when the data omits one
 * @returns frozen 3D plane used for validation/probing
 */
export function imagePlaneDataToPlane3(imagePlane: ImagePlaneData, fallbackLabel = "IMG"): Plane3 {
  return Object.freeze({
    point: [0, imagePlane.y ?? 0, imagePlane.z] as Vec3,
    normal: yzNormalToVec3(imagePlane.normal),
    label: imagePlane.label ?? fallbackLabel,
  });
}
