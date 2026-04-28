/**
 * useChromaticRays — Computes chromatic ray fan segments and aberration spread.
 *
 * Traces density-derived axial and off-axis ray fans through wavelength-dependent
 * refractive indices (R/G/B channels). Axial rays feed the LCA/TCA spread metric;
 * off-axis chromatic rays share the same state-aware field geometry as the
 * monochrome off-axis fan.
 */
import { useMemo } from "react";
import { traceRayChromatic, computeChromaticSpread } from "../../optics/optics.js";
import { rayFractionsForDensity } from "../../optics/raySampling.js";
import type { RuntimeLens, ChromaticChannel, ChromaticSpread, ChromaticSpreadByAxis } from "../../types/optics.js";
import type { LensMovementTransform } from "../../optics/lensMovement.js";
import type { OffAxisMode, RayDensity } from "../../types/state.js";
import type { RaySegment } from "./useOnAxisRays.js";
import { compileRaySegment, filterChannels } from "./raySegmentUtils.js";
import { computeOffAxisTraceGeometry } from "./offAxisRayUtils.js";

export interface ChromaticRaySegment extends RaySegment {
  channel: ChromaticChannel;
  axis: "onAxis" | "offAxis";
  fraction: number;
  y: number;
  u: number;
  clipped: boolean;
}

interface UseChromaticRaysParams {
  L: RuntimeLens | undefined;
  zPos: number[];
  IMG_MM: number;
  focusT: number;
  zoomT: number;
  sx: (z: number) => number;
  sy: (y: number) => number;
  clampedRayEnd: (lastZ: number, lastY: number, u: number, targetZ: number) => [number, number];
  movementTransform?: LensMovementTransform;
  currentPhysStopSD: number;
  currentEPSD: number;
  rayDensity: RayDensity;
  rayTracksF: boolean;
  focusK: number;
  showChromatic: boolean;
  showOnAxis: boolean;
  showOffAxis: OffAxisMode;
  chromR: boolean;
  chromG: boolean;
  chromB: boolean;
  lensKey: string;
}

interface UseChromaticRaysResult {
  chromaticRays: ChromaticRaySegment[];
  chromSpread: ChromaticSpread | null;
  chromaticSpreads: ChromaticSpreadByAxis;
  error: unknown;
}

function spreadForAxis(
  chromaticRays: ChromaticRaySegment[],
  axis: ChromaticRaySegment["axis"],
  IMG_MM: number,
  lastSurfaceZ: number,
): ChromaticSpread | null {
  const axisRays = chromaticRays.filter((r) => r.axis === axis);
  if (axisRays.length === 0) return null;

  const candidateFractions = Array.from(new Set(axisRays.map((r) => r.fraction))).sort((a, b) => {
    const absDelta = Math.abs(b) - Math.abs(a);
    return Math.abs(absDelta) > 1e-12 ? absDelta : b - a;
  });

  for (const fraction of candidateFractions) {
    const marginalRays: Partial<Record<ChromaticChannel, { y: number; u: number; clipped: boolean }>> = {};
    for (const r of axisRays) {
      if (Math.abs(r.fraction - fraction) < 1e-12 && !r.clipped && Math.abs(r.u) > 1e-15) {
        marginalRays[r.channel] = { y: r.y, u: r.u, clipped: false };
      }
    }
    if (Object.keys(marginalRays).length >= 2) {
      return computeChromaticSpread(marginalRays, IMG_MM, lastSurfaceZ);
    }
  }

  return null;
}

export default function useChromaticRays({
  L,
  zPos,
  IMG_MM,
  focusT,
  zoomT,
  sx,
  sy,
  clampedRayEnd,
  movementTransform,
  currentPhysStopSD,
  currentEPSD,
  rayDensity,
  rayTracksF,
  focusK,
  showChromatic,
  showOnAxis,
  showOffAxis,
  chromR,
  chromG,
  chromB,
  lensKey,
}: UseChromaticRaysParams): UseChromaticRaysResult {
  /* Separate ref to surface a caught error from the chromatic useMemo to the
   * combined return value (useMemo cannot return a tuple with a separate
   * error field without restructuring, so we pair the error here). */
  const chromaticResult = useMemo((): { segments: ChromaticRaySegment[]; error: unknown } => {
    if (!L || !showChromatic) return { segments: [], error: null };
    const channels = filterChannels(chromR, chromG, chromB);
    if (channels.length === 0) return { segments: [], error: null };
    try {
      const out: ChromaticRaySegment[] = [];
      if (showOnAxis) {
        for (const f of rayFractionsForDensity(L.rayFractions, rayDensity)) {
          const h = f * currentEPSD;
          const uIn = rayTracksF ? h * focusK : 0;
          for (const ch of channels) {
            const rawResult = traceRayChromatic(h, uIn, zPos, focusT, zoomT, currentPhysStopSD, true, L, ch);
            const result = movementTransform ? movementTransform.trace(rawResult) : rawResult;
            const seg = compileRaySegment(
              result.pts,
              result.ghostPts,
              result.u,
              result.clipped,
              sx,
              sy,
              clampedRayEnd,
              IMG_MM,
            );
            out.push({
              ...seg,
              channel: ch,
              axis: "onAxis",
              fraction: f,
              y: result.y,
              u: result.u,
              clipped: result.clipped,
            });
          }
        }
      }

      if (showOffAxis !== "off") {
        const geometry = computeOffAxisTraceGeometry({ L, zPos, IMG_MM, focusT, zoomT, sx, sy, showOffAxis });
        if (geometry) {
          const { uField, yChief, edgeEnd, useEdge } = geometry;
          for (const f of rayFractionsForDensity(L.offAxisFractions, rayDensity)) {
            const h = f * currentEPSD;
            const y0 = yChief + h;
            const uConverge = rayTracksF ? h * focusK : 0;
            const uIn = uField + uConverge;
            for (const ch of channels) {
              const rawResult = traceRayChromatic(y0, uIn, zPos, focusT, zoomT, currentPhysStopSD, true, L, ch);
              const result = movementTransform ? movementTransform.trace(rawResult) : rawResult;
              const seg = compileRaySegment(
                result.pts,
                result.ghostPts,
                result.u,
                result.clipped,
                sx,
                sy,
                clampedRayEnd,
                IMG_MM,
                useEdge ? edgeEnd : undefined,
              );
              out.push({
                ...seg,
                channel: ch,
                axis: "offAxis",
                fraction: f,
                y: result.y,
                u: result.u,
                clipped: result.clipped,
              });
            }
          }
        }
      }
      return { segments: out, error: null };
    } catch (e) {
      console.error(`[useChromaticRays] Chromatic ray trace failed for "${lensKey}":`, e);
      return { segments: [], error: e };
    }
  }, [
    showChromatic,
    chromR,
    chromG,
    chromB,
    zPos,
    focusT,
    sx,
    sy,
    currentPhysStopSD,
    currentEPSD,
    rayDensity,
    rayTracksF,
    focusK,
    L,
    IMG_MM,
    lensKey,
    clampedRayEnd,
    movementTransform,
    zoomT,
    showOnAxis,
    showOffAxis,
  ]);

  const chromaticRays = chromaticResult.segments;

  /* Compute LCA (longitudinal chromatic aberration) and TCA (transverse)
   * from each visible marginal chromatic ray fan. Requires at least 2 active channels. */
  const chromaticSpreads = useMemo((): ChromaticSpreadByAxis => {
    const empty = { onAxis: null, offAxis: null };
    if (!L || !showChromatic || chromaticRays.length === 0) return empty;
    const channels = filterChannels(chromR, chromG, chromB);
    if (channels.length < 2) return empty;
    const lastSurfaceZ = movementTransform ? movementTransform.point(zPos[L.N - 1], 0)[0] : zPos[L.N - 1];
    return {
      onAxis: spreadForAxis(chromaticRays, "onAxis", IMG_MM, lastSurfaceZ),
      offAxis: spreadForAxis(chromaticRays, "offAxis", IMG_MM, lastSurfaceZ),
    };
  }, [showChromatic, chromR, chromG, chromB, chromaticRays, IMG_MM, zPos, L, movementTransform]);

  const chromSpread = chromaticSpreads.onAxis ?? chromaticSpreads.offAxis;

  return { chromaticRays, chromSpread, chromaticSpreads, error: chromaticResult.error };
}
