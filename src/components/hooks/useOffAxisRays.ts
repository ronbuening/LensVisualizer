/**
 * useOffAxisRays — Computes off-axis ray fan segments.
 *
 * Traces rays entering at a state-aware angle corresponding to offAxisFieldDeg.
 * Two projection modes after the last surface:
 *   "trueAngle" — extend at the ray's natural exit slope, clamped to viewport
 *   "edge"      — project to the paraxial image height on the image plane
 */
import { useMemo } from "react";
import { eflAtZoom, traceRay } from "../../optics/optics.js";
import { computeStateAwareOffAxisFieldGeometry } from "../../optics/aberration/offAxis.js";
import { ENABLE_EDGE_PROJECTION } from "../../utils/featureFlags.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { RaySegment } from "./useOnAxisRays.js";
import type { OffAxisMode } from "../../types/state.js";
import { compileRaySegment } from "./raySegmentUtils.js";

interface UseOffAxisRaysParams {
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
  sx,
  sy,
  clampedRayEnd,
  currentPhysStopSD,
  currentEPSD,
  rayTracksF,
  focusK,
  showOffAxis,
  lensKey,
}: UseOffAxisRaysParams): UseOffAxisRaysResult {
  return useMemo((): UseOffAxisRaysResult => {
    if (!L || showOffAxis === "off") return { segments: [], error: null };
    try {
      const out: RaySegment[] = [];
      const geometry = computeStateAwareOffAxisFieldGeometry(L, zPos, focusT, zoomT, L.offAxisFieldFrac);
      if (geometry === null) return { segments: [], error: null };
      const { fieldAngleDeg: currentOffAxisDeg, uField, yChief } = geometry;

      /* Image height for "edge" mode — trace a real chief ray to account for
       * distortion, falling back to the paraxial estimate on failure. */
      const useEdge = ENABLE_EDGE_PROJECTION && showOffAxis === "edge";
      let edgeImgH: number;
      if (useEdge) {
        const chiefTrace = traceRay(yChief, uField, zPos, focusT, zoomT, undefined, false, L);
        const lastSurfZ = zPos[L.N - 1];
        const chiefEndY = chiefTrace.y + chiefTrace.u * (IMG_MM - lastSurfZ);
        edgeImgH = isFinite(chiefEndY)
          ? chiefEndY
          : -(eflAtZoom(zoomT, L) * Math.tan((currentOffAxisDeg * Math.PI) / 180));
      } else {
        edgeImgH = -(eflAtZoom(zoomT, L) * Math.tan((currentOffAxisDeg * Math.PI) / 180));
      }
      const edgeEnd: number[] = [sx(IMG_MM), sy(edgeImgH)];

      for (const f of L.offAxisFractions) {
        const h = f * currentEPSD;
        const y0 = yChief + h;
        const uConverge = rayTracksF ? h * focusK : 0;
        const uIn = uField + uConverge;
        const result = traceRay(y0, uIn, zPos, focusT, zoomT, currentPhysStopSD, true, L);
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
            useEdge ? edgeEnd : undefined,
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
}
