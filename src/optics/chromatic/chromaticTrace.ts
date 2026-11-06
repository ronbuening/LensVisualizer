/**
 * Chromatic trace adapter — exact tracing with wavelength-specific refractive indices.
 *
 * Converts prepared-state dispersion resolvers into RGB/V ray traces and channel spread summaries for UI displays.
 */

import { landImageSurfaceMeridional, meridionalImageHeight } from "../geometry/imageSurface.js";
import type { ImageSurfaceShape } from "../types.js";
import { CHROMATIC_CHANNEL_ORDER } from "./channels.js";
import type { ChromaticChannel, ChromaticRayFanSpread, RayTraceResult, RuntimeLens } from "../../types/optics.js";
import {
  traceRayChromatic,
  traceRayVectorChromatic,
  traceSkewRayChromatic,
  traceSkewRayVectorChromatic,
} from "../trace/rayAdapters.js";
import type { VectorRayTraceInput } from "../trace/rayAdapters.js";

interface MarginalRayData {
  y: number;
  u: number;
  clipped: boolean;
  z?: number;
  reachedImagePlane?: boolean;
}

/**
 * Where a meridional chromatic ray ends: on the image when it reached it (the plane's z when flat, its own landing on a
 * curved surface), else at the last surface. Only a curved surface carries the reached flag.
 *
 * @param imageSurface - local image shape, or null for a flat plane
 * @param reachedImagePlane - whether the trace reached the image surface
 * @param imagePlaneZ - caller's flat image-plane z coordinate in mm
 * @param terminalZ - trace's terminal z coordinate in mm, used for reached curved landings
 * @param lastSurfaceZ - final surface vertex z coordinate in mm
 * @returns endpoint z in mm, with the reached flag only for curved surfaces
 */
export function chromaticMeridionalEndpoint(
  imageSurface: ImageSurfaceShape | null,
  reachedImagePlane: boolean | undefined,
  imagePlaneZ: number,
  terminalZ: number,
  lastSurfaceZ: number,
): { z: number; reachedImagePlane?: boolean } {
  if (imageSurface === null) return { z: reachedImagePlane ? imagePlaneZ : lastSurfaceZ };
  return { z: reachedImagePlane ? terminalZ : lastSurfaceZ, reachedImagePlane };
}

function spanOf(values: number[]): number {
  if (values.length < 2) return 0;
  return Math.max(...values) - Math.min(...values);
}

/**
 * Measure chromatic ray-fan spread from traced marginal rays.
 *
 * LoCA spread is the span of per-channel axial intercepts; fan image-height spread
 * is the span of lateral landing heights on the image surface with vertex at `imgZ`.
 * Clipped channels are ignored so a failed color does not bias the spread.
 *
 * @param marginalRays - per-channel marginal ray state after the last surface
 * @param imgZ - image-surface vertex z coordinate in mm
 * @param lastSurfZ - final surface vertex z coordinate in mm
 * @param imageSurface - local image shape at imgZ, or null for a flat plane
 * @returns ray-fan spans plus per-channel axial intercepts and image heights in mm
 */
export function computeChromaticRayFanSpread(
  marginalRays: Partial<Record<ChromaticChannel, MarginalRayData>>,
  imgZ: number,
  lastSurfZ: number,
  imageSurface: ImageSurfaceShape | null = null,
): ChromaticRayFanSpread {
  const axialIntercepts: Partial<Record<ChromaticChannel, number>> = {};
  const imagePlaneHeights: Partial<Record<ChromaticChannel, number>> = {};
  for (const ch of CHROMATIC_CHANNEL_ORDER) {
    const ray = marginalRays[ch];
    if (!ray || ray.clipped) continue;
    const rayZ = Number.isFinite(ray.z) ? ray.z! : lastSurfZ;
    if (Math.abs(ray.u) > 1e-15) {
      axialIntercepts[ch] = rayZ - ray.y / ray.u;
    }
    const dz = imgZ - rayZ;
    if (imageSurface === null) {
      imagePlaneHeights[ch] = ray.y + dz * ray.u;
    } else {
      // Folded traces already end on the placed surface, whose normal need not be axial.
      const lateral = ray.reachedImagePlane
        ? ray.y
        : landImageSurfaceMeridional(imageSurface, ray.y, ray.u, rayZ, imgZ)?.y;
      const height = lateral === undefined ? NaN : meridionalImageHeight(imageSurface, lateral);
      if (Number.isFinite(height)) imagePlaneHeights[ch] = height;
    }
  }

  const axialInterceptSpreadMm = spanOf(Object.values(axialIntercepts));
  const imagePlaneHeightSpreadMm = spanOf(Object.values(imagePlaneHeights));
  return { axialInterceptSpreadMm, imagePlaneHeightSpreadMm, axialIntercepts, imagePlaneHeights };
}

export {
  traceRayChromatic,
  traceRayVectorChromatic,
  traceSkewRayChromatic,
  traceSkewRayVectorChromatic,
  type VectorRayTraceInput,
};

export type { ChromaticChannel, ChromaticRayFanSpread, RayTraceResult, RuntimeLens };
