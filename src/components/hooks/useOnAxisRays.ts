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
import type { LensMovementTransform } from "../../optics/lensMovement.js";
import { compileRaySegment } from "./raySegmentUtils.js";

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
  movementTransform?: LensMovementTransform;
  currentPhysStopSD: number;
  currentEPSD: number;
  rayTracksF: boolean;
  focusK: number;
  lensKey: string;
}

interface UseOnAxisRaysResult {
  segments: RaySegment[];
  error: unknown;
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
  movementTransform,
  currentPhysStopSD,
  currentEPSD,
  rayTracksF,
  focusK,
  lensKey,
}: UseOnAxisRaysParams): UseOnAxisRaysResult {
  return useMemo((): UseOnAxisRaysResult => {
    if (!L) return { segments: [], error: null };
    try {
      const out: RaySegment[] = [];
      for (const f of L.rayFractions) {
        const h = f * currentEPSD;
        const uIn = rayTracksF ? h * focusK : 0;
        const rawResult = traceRay(h, uIn, zPos, focusT, zoomT, currentPhysStopSD, true, L);
        const result = movementTransform ? movementTransform.trace(rawResult) : rawResult;
        out.push(
          compileRaySegment(result.pts, result.ghostPts, result.u, result.clipped, sx, sy, clampedRayEnd, IMG_MM),
        );
      }
      return { segments: out, error: null };
    } catch (e) {
      console.error(`[useOnAxisRays] On-axis ray trace failed for "${lensKey}":`, e);
      return { segments: [], error: e };
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
    movementTransform,
  ]);
}
