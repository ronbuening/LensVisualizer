/**
 * useOffAxisRays — Computes off-axis ray fan segments.
 *
 * Traces rays entering at an angle corresponding to offAxisFieldDeg.
 * Two projection modes after the last surface:
 *   "trueAngle" — extend at the ray's natural exit slope, clamped to viewport
 *   "edge"      — project to the paraxial image height on the image plane
 */
import { useMemo } from "react";
import { eflAtZoom, halfFieldAtZoom, yRatioAtZoom, bAtZoom, traceRay } from "../../optics/optics.js";
import { ENABLE_EDGE_PROJECTION } from "../../utils/featureFlags.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { RaySegment } from "./useOnAxisRays.js";
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
  showOffAxis: string;
  lensKey: string;
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
}: UseOffAxisRaysParams): RaySegment[] {
  return useMemo((): RaySegment[] => {
    if (!L || showOffAxis === "off") return [];
    try {
      const out: RaySegment[] = [];
      /* Zoom-aware field angle and chief ray entry position.
       * Note: yChief uses the paraxial EP position (B/yRatio), which is
       * field-independent.  Real entrance pupils shift with field angle due
       * to pupil aberration (pupil coma), but computing the field-dependent
       * EP requires iterative real ray tracing — deferred as a known
       * limitation since the error is small for typical visualization angles. */
      const currentOffAxisDeg = halfFieldAtZoom(zoomT, L) * L.offAxisFieldFrac;
      const uField = -Math.tan((currentOffAxisDeg * Math.PI) / 180);
      const yChief = -(bAtZoom(zoomT, L) / yRatioAtZoom(zoomT, L)) * uField;

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
      return out;
    } catch (e) {
      console.error(`[useOffAxisRays] Off-axis ray trace failed for "${lensKey}":`, e);
      return [];
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
