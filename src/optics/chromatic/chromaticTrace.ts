/**
 * Chromatic trace adapter — exact tracing with wavelength-specific refractive indices.
 *
 * Converts prepared-state dispersion resolvers into RGB/V ray traces and channel spread summaries for UI displays.
 */

import type { ChromaticChannel, ChromaticRayFanSpread, RayTraceResult, RuntimeLens } from "../../types/optics.js";
import {
  traceRayChromatic2,
  traceRayVectorChromatic2,
  traceSkewRayChromatic2,
  traceSkewRayVectorChromatic2,
} from "../trace/rayAdapters.js";
import type { VectorRayTraceInput2 } from "../trace/rayAdapters.js";

interface MarginalRayData {
  y: number;
  u: number;
  clipped: boolean;
  z?: number;
}

function spanOf(values: number[]): number {
  if (values.length < 2) return 0;
  return Math.max(...values) - Math.min(...values);
}

/**
 * Measure chromatic ray-fan spread from traced marginal rays.
 *
 * LoCA spread is the span of per-channel axial intercepts; fan image-height spread
 * is the span of per-channel heights at `imgZ`.
 * Clipped channels are ignored so a failed color does not bias the spread.
 *
 * @param marginalRays - per-channel marginal ray state after the last surface
 * @param imgZ - image-plane z coordinate in mm
 * @param lastSurfZ - final surface vertex z coordinate in mm
 * @returns ray-fan spans plus per-channel axial intercepts and image heights in mm
 */
export function computeChromaticRayFanSpread2(
  marginalRays: Partial<Record<ChromaticChannel, MarginalRayData>>,
  imgZ: number,
  lastSurfZ: number,
): ChromaticRayFanSpread {
  const axialIntercepts: Partial<Record<ChromaticChannel, number>> = {};
  const imagePlaneHeights: Partial<Record<ChromaticChannel, number>> = {};
  for (const ch of ["R", "G", "B", "V"] as ChromaticChannel[]) {
    const ray = marginalRays[ch];
    if (!ray || ray.clipped) continue;
    const rayZ = Number.isFinite(ray.z) ? ray.z! : lastSurfZ;
    if (Math.abs(ray.u) > 1e-15) {
      axialIntercepts[ch] = rayZ - ray.y / ray.u;
    }
    const dz = imgZ - rayZ;
    imagePlaneHeights[ch] = ray.y + dz * ray.u;
  }

  const axialInterceptSpreadMm = spanOf(Object.values(axialIntercepts));
  const imagePlaneHeightSpreadMm = spanOf(Object.values(imagePlaneHeights));
  return { axialInterceptSpreadMm, imagePlaneHeightSpreadMm, axialIntercepts, imagePlaneHeights };
}

export {
  traceRayChromatic2,
  traceRayVectorChromatic2,
  traceSkewRayChromatic2,
  traceSkewRayVectorChromatic2,
  type VectorRayTraceInput2,
};

export type { ChromaticChannel, ChromaticRayFanSpread, RayTraceResult, RuntimeLens };
