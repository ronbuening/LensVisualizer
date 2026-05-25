/**
 * useOffAxisRays — Computes off-axis ray fan segments.
 *
 * Traces rays entering at a state-aware angle corresponding to offAxisFieldDeg.
 * Two projection modes after the last surface:
 *   "trueAngle" — extend at the ray's natural exit slope, clamped to viewport
 *   "edge"      — project to the paraxial image height on the image plane
 */
import { useMemo } from "react";
import { offsetVectorFieldRay, traceRay, traceRayVector } from "../../optics/optics.js";
import { rayFractionsForDensity } from "../../optics/raySampling.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { LensMovementTransform } from "../../optics/lensMovement.js";
import type { RaySegment } from "./useOnAxisRays.js";
import type { OffAxisMode, RayDensity } from "../../types/state.js";
import { compileRaySegment } from "./raySegmentUtils.js";
import { computeOffAxisTraceGeometry } from "./offAxisRayUtils.js";

interface UseOffAxisRaysParams {
  L: RuntimeLens | undefined;
  zPos: number[];
  IMG_MM: number;
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  sx: (z: number) => number;
  sy: (y: number) => number;
  clampedRayEnd: (lastZ: number, lastY: number, u: number, targetZ: number) => [number, number];
  movementTransform?: LensMovementTransform;
  currentPhysStopSD: number;
  currentEPSD: number;
  rayDensity: RayDensity;
  rayTracksF: boolean;
  focusK: number;
  showOffAxis: OffAxisMode;
  lensKey: string;
}

interface UseOffAxisRaysResult {
  segments: RaySegment[];
  error: unknown;
}

export default function useOffAxisRays({
  L,
  zPos,
  IMG_MM,
  focusT,
  zoomT,
  aberrationT = 0,
  sx,
  sy,
  clampedRayEnd,
  movementTransform,
  currentPhysStopSD,
  currentEPSD,
  rayDensity,
  rayTracksF,
  focusK,
  showOffAxis,
  lensKey,
}: UseOffAxisRaysParams): UseOffAxisRaysResult {
  return useMemo((): UseOffAxisRaysResult => {
    if (!L || showOffAxis === "off") return { segments: [], error: null };
    try {
      const out: RaySegment[] = [];
      const geometry = computeOffAxisTraceGeometry({
        L,
        zPos,
        IMG_MM,
        focusT,
        zoomT,
        aberrationT,
        sx,
        sy,
        showOffAxis,
      });
      if (geometry === null) return { segments: [], error: null };
      for (const f of rayFractionsForDensity(L.offAxisFractions, rayDensity)) {
        const h = f * currentEPSD;
        const uConverge = rayTracksF ? h * focusK : 0;
        const rawResult =
          geometry.kind === "vector"
            ? traceRayVector(
                offsetVectorFieldRay(geometry.vectorLaunch, 0, h, uConverge),
                zPos,
                currentPhysStopSD,
                true,
                L,
              )
            : traceRay(
                geometry.yChief + h,
                geometry.uField + uConverge,
                zPos,
                focusT,
                zoomT,
                currentPhysStopSD,
                true,
                L,
                aberrationT,
              );
        const result = movementTransform ? movementTransform.trace(rawResult) : rawResult;
        out.push(
          compileRaySegment(
            result.pts,
            result.ghostPts,
            result.u,
            result.clipped,
            sx,
            sy,
            clampedRayEnd,
            IMG_MM,
            geometry.useEdge ? geometry.edgeEnd : undefined,
            result.reachedImagePlane,
          ),
        );
      }
      return { segments: out, error: null };
    } catch (e) {
      console.error(`[useOffAxisRays] Off-axis ray trace failed for "${lensKey}":`, e);
      return { segments: [], error: e };
    }
  }, [
    showOffAxis,
    zPos,
    focusT,
    aberrationT,
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
  ]);
}
