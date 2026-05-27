/**
 * Surface interaction compiler — normalizes mirror, blocker, refraction, and image-plane metadata.
 *
 * Translates lens-data folded-path fields into engine Vec3/Plane3 structures used by generalized tracing.
 */

import type { CompiledSurfaceInteraction, Plane3, Vec3 } from "../types.js";
import type { ImagePlaneData, ResolvedImagePlane, SurfaceInteraction } from "../../types/optics.js";
import { normalize } from "../math/vector.js";

export function yzNormalToVec3(normal: { z: number; y: number } | undefined): Vec3 {
  return normalize([0, normal?.y ?? 0, normal?.z ?? 1]) ?? [0, 0, 1];
}

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

export function resolvedImagePlaneToPlane3(imagePlane: ResolvedImagePlane): Plane3 {
  return Object.freeze({
    point: [0, imagePlane.y, imagePlane.z] as Vec3,
    normal: yzNormalToVec3(imagePlane.normal),
    label: imagePlane.label,
  });
}

export function imagePlaneDataToPlane3(imagePlane: ImagePlaneData, fallbackLabel = "IMG"): Plane3 {
  return Object.freeze({
    point: [0, imagePlane.y ?? 0, imagePlane.z] as Vec3,
    normal: yzNormalToVec3(imagePlane.normal),
    label: imagePlane.label ?? fallbackLabel,
  });
}
