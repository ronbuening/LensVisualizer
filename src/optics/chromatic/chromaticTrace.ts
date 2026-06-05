/**
 * Chromatic trace adapter — exact tracing with wavelength-specific refractive indices.
 *
 * Converts prepared-state dispersion resolvers into RGB/V ray traces and channel spread summaries for UI displays.
 */

import type { ChromaticChannel, ChromaticSpread, RayTraceResult, RuntimeLens } from "../../types/optics.js";
import type { Ray3, PreparedOpticalState } from "../types.js";
import {
  traceEngineRay2,
  traceRayChromatic2,
  traceRayVectorChromatic2,
  traceSkewRayChromatic2,
  traceSkewRayVectorChromatic2,
} from "../trace/rayAdapters.js";
import type { TraceOptions, EngineTraceResult } from "../trace/types.js";
import type { VectorRayTraceInput2 } from "../trace/rayAdapters.js";
import { channelIndexResolverForState2 } from "./indexResolver.js";

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
 * Trace one engine ray with wavelength-specific refractive indices.
 *
 * The input ray is in optical millimeters with a normalized 3D direction. The
 * supplied channel replaces each surface's d-line index with its resolved index
 * for C/d/F/g spectral lines before exact surface tracing.
 *
 * @param state - prepared optical state for the current lens controls
 * @param input - 3D ray origin/direction in optical coordinates
 * @param channel - chromatic channel to trace
 * @param options - trace limits such as stop/image-plane termination
 * @returns exact engine trace result for the selected wavelength
 */
export function traceEngineRayChromatic2(
  state: PreparedOpticalState,
  input: Ray3,
  channel: ChromaticChannel,
  options: TraceOptions = {},
): EngineTraceResult {
  return traceEngineRay2(state, input, {
    ...options,
    indexAtSurface: channelIndexResolverForState2(state, channel),
  });
}

/**
 * Measure longitudinal and transverse chromatic spread from traced marginal rays.
 *
 * Longitudinal chromatic aberration is the span of per-channel axial intercepts;
 * transverse chromatic aberration is the span of per-channel heights at `imgZ`.
 * Clipped channels are ignored so a failed color does not bias the spread.
 *
 * @param marginalRays - per-channel marginal ray state after the last surface
 * @param imgZ - image-plane z coordinate in mm
 * @param lastSurfZ - final surface vertex z coordinate in mm
 * @returns LCA/TCA spans plus per-channel intercepts and image heights in mm
 */
export function computeChromaticSpread2(
  marginalRays: Partial<Record<ChromaticChannel, MarginalRayData>>,
  imgZ: number,
  lastSurfZ: number,
): ChromaticSpread {
  const intercepts: Partial<Record<ChromaticChannel, number>> = {};
  const imgHeights: Partial<Record<ChromaticChannel, number>> = {};
  for (const ch of ["R", "G", "B", "V"] as ChromaticChannel[]) {
    const ray = marginalRays[ch];
    if (!ray || ray.clipped) continue;
    const rayZ = Number.isFinite(ray.z) ? ray.z! : lastSurfZ;
    if (Math.abs(ray.u) > 1e-15) {
      intercepts[ch] = rayZ - ray.y / ray.u;
    }
    const dz = imgZ - rayZ;
    imgHeights[ch] = ray.y + dz * ray.u;
  }

  const lcaMm = spanOf(Object.values(intercepts));
  const tcaMm = spanOf(Object.values(imgHeights));
  return { lcaMm, tcaMm, intercepts, imgHeights };
}

export {
  traceRayChromatic2,
  traceRayVectorChromatic2,
  traceSkewRayChromatic2,
  traceSkewRayVectorChromatic2,
  type VectorRayTraceInput2,
};

export type { ChromaticChannel, ChromaticSpread, RayTraceResult, RuntimeLens };
