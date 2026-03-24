/**
 * useOnAxisRays — Computes on-axis ray fan segments.
 *
 * Traces a fan of rays parallel to the optical axis (or converging if
 * rayTracksF is true). Each ray enters at height h = fraction × EP radius.
 * "Solid" segments (sp) show the real traced path; "ghost" segments (gp)
 * show the extrapolated path of rays clipped by the aperture stop.
 */
import { useMemo } from "react";
import { traceRay } from "../../optics/optics.js";
import type { RuntimeLens } from "../../types/optics.js";

export interface RaySegment {
  sp: number[][];
  gp: number[][];
}

interface UseOnAxisRaysParams {
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
  lensKey: string;
}

export default function useOnAxisRays({
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
  lensKey,
}: UseOnAxisRaysParams): RaySegment[] {
  return useMemo((): RaySegment[] => {
    if (!L) return [];
    try {
      const out: RaySegment[] = [];
      for (const f of L.rayFractions) {
        const h = f * currentEPSD;
        const uIn = rayTracksF ? h * focusK : 0;
        const { pts, ghostPts, u, clipped } = traceRay(h, uIn, zPos, focusT, zoomT, currentPhysStopSD, true, L);
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
        out.push({ sp, gp });
      }
      return out;
    } catch (e) {
      console.error(`[useOnAxisRays] On-axis ray trace failed for "${lensKey}":`, e);
      return [];
    }
  }, [
    zPos,
    focusT,
    zoomT,
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
  ]);
}
