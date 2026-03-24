/**
 * useRayTracing — Custom hook for all ray computation: on-axis, off-axis,
 * chromatic ray fans, and chromatic aberration spread.
 *
 * Extracted from LensDiagramPanel to isolate ray tracing logic from
 * rendering concerns.
 */

import { useMemo } from "react";
import {
  eflAtZoom,
  halfFieldAtZoom,
  yRatioAtZoom,
  bAtZoom,
  traceRay,
  traceRayChromatic,
  computeChromaticSpread,
  conjugateK,
} from "../optics/optics.js";
import { ENABLE_EDGE_PROJECTION } from "../utils/featureFlags.js";
import type { RuntimeLens, ChromaticChannel, ChromaticSpread } from "../types/optics.js";

/** Chief ray + upper/lower marginal fractions for chromatic tracing */
const CHROM_FRACS: number[] = [0, 0.75, -0.75];

interface RaySegment {
  sp: number[][];
  gp: number[][];
}

interface ChromaticRaySegment extends RaySegment {
  channel: ChromaticChannel;
  y: number;
  u: number;
  clipped: boolean;
}

interface UseRayTracingParams {
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
  showOffAxis: string;
  showChromatic: boolean;
  chromR: boolean;
  chromG: boolean;
  chromB: boolean;
  lensKey: string;
}

interface UseRayTracingResult {
  focusK: number;
  rays: RaySegment[];
  offAxisRays: RaySegment[];
  chromaticRays: ChromaticRaySegment[];
  chromSpread: ChromaticSpread | null;
}

export default function useRayTracing({
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
  showOffAxis,
  showChromatic,
  chromR,
  chromG,
  chromB,
  lensKey,
}: UseRayTracingParams): UseRayTracingResult {
  /* focusK = convergence curvature at the entrance pupil for "tracks focus"
   * ray mode; 0 when rays arrive from infinity. */
  const focusK = useMemo(() => (L && rayTracksF ? conjugateK(focusT, zoomT, L) : 0), [focusT, zoomT, rayTracksF, L]);

  /* ── On-axis rays ──
   * Trace a fan of rays parallel to the optical axis (or converging if
   * rayTracksF is true). Each ray enters at height h = fraction × EP radius.
   * "Solid" segments (sp) show the real traced path; "ghost" segments (gp)
   * show the extrapolated path of rays clipped by the aperture stop. */
  const rays = useMemo((): RaySegment[] => {
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
      console.error(`[useRayTracing] On-axis ray trace failed for "${lensKey}":`, e);
      return [];
    }
  }, [zPos, focusT, sx, sy, currentPhysStopSD, currentEPSD, rayTracksF, focusK, L, IMG_MM, lensKey, clampedRayEnd]);

  /* ── Off-axis rays ──
   * Trace rays entering at an angle corresponding to offAxisFieldDeg.
   * uField is the incoming ray slope; yChief is the height at the entrance
   * pupil plane so the chief ray passes through the center of the stop.
   * These rays visualize field coverage and vignetting.
   *
   * Two projection modes after the last surface:
   *   "trueAngle" — extend at the ray's natural exit slope, clamped to viewport
   *   "edge"      — project to the paraxial image height on the image plane */
  const offAxisRays = useMemo((): RaySegment[] => {
    if (!L || showOffAxis === "off") return [];
    try {
      const out: RaySegment[] = [];
      /* Zoom-aware field angle and chief ray entry position */
      const currentOffAxisDeg = halfFieldAtZoom(zoomT, L) * L.offAxisFieldFrac;
      const uField = -Math.tan((currentOffAxisDeg * Math.PI) / 180);
      const yChief = -(bAtZoom(zoomT, L) / yRatioAtZoom(zoomT, L)) * uField;

      /* Paraxial image height for "edge" mode */
      const edgeImgH = -(eflAtZoom(zoomT, L) * Math.tan((currentOffAxisDeg * Math.PI) / 180));
      const edgeEnd: number[] = [sx(IMG_MM), sy(edgeImgH)];
      const useEdge = ENABLE_EDGE_PROJECTION && showOffAxis === "edge";

      for (const f of L.offAxisFractions) {
        const h = f * currentEPSD;
        const y0 = yChief + h;
        const uConverge = rayTracksF ? h * focusK : 0;
        const uIn = uField + uConverge;
        const { pts, ghostPts, u, clipped } = traceRay(y0, uIn, zPos, focusT, zoomT, currentPhysStopSD, true, L);
        const sp: number[][] = pts.map(([z, yy]) => [sx(z), sy(yy)]);
        let gp: number[][] = [];
        if (clipped && ghostPts.length > 0) {
          const lastSolid = pts[pts.length - 1];
          if (lastSolid) gp.push([sx(lastSolid[0]), sy(lastSolid[1])]);
          gp = gp.concat(ghostPts.map(([z, yy]) => [sx(z), sy(yy)]));
          const lastGhost = ghostPts[ghostPts.length - 1];
          if (lastGhost) {
            gp.push(useEdge ? edgeEnd : clampedRayEnd(lastGhost[0], lastGhost[1], u, IMG_MM));
          }
        }
        if (!clipped) {
          const last = pts[pts.length - 1];
          if (last) {
            sp.push(useEdge ? edgeEnd : clampedRayEnd(last[0], last[1], u, IMG_MM));
          }
        }
        out.push({ sp, gp });
      }
      return out;
    } catch (e) {
      console.error(`[useRayTracing] Off-axis ray trace failed for "${lensKey}":`, e);
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

  /* ── Chromatic rays ──
   * Trace the same ray heights as on-axis but through wavelength-dependent
   * refractive indices (R/G/B channels). CHROM_FRACS = [chief, upper marginal,
   * lower marginal] — shows both axial and lateral color (LCA and TCA). */
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
      console.error(`[useRayTracing] Chromatic ray trace failed for "${lensKey}":`, e);
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

  /* ── Chromatic spread ──
   * Compute LCA (longitudinal chromatic aberration) and TCA (transverse)
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

  return { focusK, rays, offAxisRays, chromaticRays, chromSpread };
}
