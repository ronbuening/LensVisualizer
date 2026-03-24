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
import type { RaySegment } from "./useOnAxisRays.js";

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
  const chromaticRays = useMemo((): ChromaticRaySegment[] => {
    if (!L || !showChromatic) return [];
    const channels: ChromaticChannel[] = [];
    if (chromR) channels.push("R");
    if (chromG) channels.push("G");
    if (chromB) channels.push("B");
    if (channels.length === 0) return [];
    try {
      const out: ChromaticRaySegment[] = [];
      for (const f of CHROM_FRACS) {
        const h = f * currentEPSD;
        const uIn = rayTracksF ? h * focusK : 0;
        for (const ch of channels) {
          const { pts, ghostPts, y, u, clipped } = traceRayChromatic(
            h,
            uIn,
            zPos,
            focusT,
            zoomT,
            currentPhysStopSD,
            true,
            L,
            ch,
          );
          const sp: number[][] = pts.map(([z, yy]) => [sx(z), sy(yy)]);
          let gp: number[][] = [];
          if (clipped && ghostPts.length > 0) {
            const lastSolid = pts[pts.length - 1];
            if (lastSolid) gp.push([sx(lastSolid[0]), sy(lastSolid[1])]);
            gp = gp.concat(ghostPts.map(([z, yy]) => [sx(z), sy(yy)]));
            const lastGhost = ghostPts[ghostPts.length - 1];
            if (lastGhost) {
              gp.push(clampedRayEnd(lastGhost[0], lastGhost[1], u, IMG_MM));
            }
          }
          if (!clipped) {
            const last = pts[pts.length - 1];
            if (last) {
              sp.push(clampedRayEnd(last[0], last[1], u, IMG_MM));
            }
          }
          out.push({ sp, gp, channel: ch, y, u, clipped });
        }
      }
      return out;
    } catch (e) {
      console.error(`[useChromaticRays] Chromatic ray trace failed for "${lensKey}":`, e);
      return [];
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
    zoomT,
  ]);

  /* Compute LCA (longitudinal chromatic aberration) and TCA (transverse)
   * from the marginal chromatic rays. Requires at least 2 active channels. */
  const chromSpread = useMemo((): ChromaticSpread | null => {
    if (!L || !showChromatic || chromaticRays.length === 0) return null;
    const channels: ChromaticChannel[] = [];
    if (chromR) channels.push("R");
    if (chromG) channels.push("G");
    if (chromB) channels.push("B");
    if (channels.length < 2) return null;
    const marginalRays: Partial<Record<ChromaticChannel, { y: number; u: number; clipped: boolean }>> = {};
    for (let ci = 0; ci < channels.length; ci++) {
      const rayIdx = 1 * channels.length + ci;
      if (rayIdx < chromaticRays.length) {
        const r = chromaticRays[rayIdx];
        marginalRays[r.channel] = { y: r.y, u: r.u, clipped: r.clipped };
      }
    }
    return computeChromaticSpread(marginalRays, IMG_MM, zPos[L.N - 1]);
  }, [showChromatic, chromR, chromG, chromB, chromaticRays, IMG_MM, zPos, L]);

  return { chromaticRays, chromSpread };
}
