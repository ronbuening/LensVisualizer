/**
 * useChromaticRays — Computes chromatic ray fan segments and aberration spread.
 *
 * Traces the same ray heights as on-axis but through wavelength-dependent
 * refractive indices (R/G/B channels). CHROM_FRACS = [chief, upper marginal,
 * lower marginal] — shows both axial and lateral color (LCA and TCA).
 */
import { useMemo } from "react";
import { traceRayChromatic, computeChromaticSpread } from "../../optics/optics.js";
import type { RuntimeLens, ChromaticChannel, ChromaticSpread } from "../../types/optics.js";
import type { LensMovementTransform } from "../../optics/lensMovement.js";
import type { RaySegment } from "./useOnAxisRays.js";
import { compileRaySegment, filterChannels } from "./raySegmentUtils.js";

/** Chief ray + upper/lower marginal fractions for chromatic tracing */
const CHROM_FRACS: number[] = [0, 0.75, -0.75];

export interface ChromaticRaySegment extends RaySegment {
  channel: ChromaticChannel;
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
  rayTracksF: boolean;
  focusK: number;
  showChromatic: boolean;
  chromR: boolean;
  chromG: boolean;
  chromB: boolean;
  lensKey: string;
}

interface UseChromaticRaysResult {
  chromaticRays: ChromaticRaySegment[];
  chromSpread: ChromaticSpread | null;
  error: unknown;
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
  rayTracksF,
  focusK,
  showChromatic,
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
      for (const f of CHROM_FRACS) {
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
          out.push({ ...seg, channel: ch, y: result.y, u: result.u, clipped: result.clipped });
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
    rayTracksF,
    focusK,
    L,
    IMG_MM,
    lensKey,
    clampedRayEnd,
    movementTransform,
    zoomT,
  ]);

  const chromaticRays = chromaticResult.segments;

  /* Compute LCA (longitudinal chromatic aberration) and TCA (transverse)
   * from the marginal chromatic rays. Requires at least 2 active channels. */
  const chromSpread = useMemo((): ChromaticSpread | null => {
    if (!L || !showChromatic || chromaticRays.length === 0) return null;
    const channels = filterChannels(chromR, chromG, chromB);
    if (channels.length < 2) return null;
    const marginalRays: Partial<Record<ChromaticChannel, { y: number; u: number; clipped: boolean }>> = {};
    for (let ci = 0; ci < channels.length; ci++) {
      const rayIdx = 1 * channels.length + ci;
      if (rayIdx < chromaticRays.length) {
        const r = chromaticRays[rayIdx];
        marginalRays[r.channel] = { y: r.y, u: r.u, clipped: r.clipped };
      }
    }
    const lastSurfaceZ = movementTransform ? movementTransform.point(zPos[L.N - 1], 0)[0] : zPos[L.N - 1];
    return computeChromaticSpread(marginalRays, IMG_MM, lastSurfaceZ);
  }, [showChromatic, chromR, chromG, chromB, chromaticRays, IMG_MM, zPos, L, movementTransform]);

  return { chromaticRays, chromSpread, error: chromaticResult.error };
}
