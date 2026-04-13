/**
 * Pure-function utilities for diagram geometry, extracted from LensDiagramPanel.
 * No React dependencies — these are testable coordinate-transform and
 * element-shape computations used by the SVG rendering layer.
 */

import { renderSag, gapTrimHeight, slopeTrimHeight, SVG_PATH_SUBDIVISIONS } from "./optics.js";
import type { RuntimeLens, CoordinateTransforms, ElementShape, AsphPathData, ElementSpan } from "../types/optics.js";

interface CoordTransformParams {
  svgW: number;
  svgH: number;
  SC: number;
  YSC: number;
  lensShiftFrac: number;
  imgMM: number;
  scaleRatio: number | null;
}

/* ── Coordinate transforms (optical mm → SVG pixels) ──
 * SC  = horizontal scale (mm → px), YSC = vertical scale.
 * In normalized comparison mode, scaleRatio adjusts both so two lenses
 * share the same physical mm-per-pixel, making sizes visually comparable.
 * sx(z) maps an axial position z (mm) to an SVG x coordinate.
 * sy(y) maps a ray height y (mm) to an SVG y coordinate (Y inverted). */
export function createCoordinateTransforms({
  svgW,
  svgH,
  SC,
  YSC,
  lensShiftFrac,
  imgMM,
  scaleRatio,
}: CoordTransformParams): CoordinateTransforms {
  const effectiveSC = scaleRatio != null ? SC * scaleRatio : SC;
  const effectiveYSC = scaleRatio != null ? YSC * scaleRatio : YSC;
  const MID = imgMM / 2;
  const CX = svgW / 2 + svgW * lensShiftFrac;
  const CY = svgH / 2;
  const IX = CX + MID * effectiveSC;

  const sx = (z: number): number => IX - (imgMM - z) * effectiveSC;
  const sy = (y: number): number => CY + y * effectiveYSC;

  /* Maximum ray height (optical mm) that fits within the SVG viewport.
   * Rays projecting beyond this are terminated at the viewport edge so they
   * exit at their true angle rather than extending to an invisible point. */
  const yViewMax = (svgH / 2 - 10) / effectiveYSC;

  const clampedRayEnd = (lastZ: number, lastY: number, u: number, targetZ: number): [number, number] => {
    const yImg = lastY + (targetZ - lastZ) * u;
    const yClamped = Math.max(-yViewMax, Math.min(yViewMax, yImg));
    if (yClamped !== yImg && Math.abs(u) > 1e-9) {
      const zEdge = lastZ + (yClamped - lastY) / u;
      return [sx(zEdge), sy(yClamped)];
    }
    return [sx(targetZ), sy(yImg)];
  };

  return { sx, sy, clampedRayEnd, yViewMax, CX, IX, effectiveSC };
}

/* ── Element shapes ──
 * For each element [eid, frontSurfIdx, rearSurfIdx], build a closed SVG path:
 *   front arc (top→bottom) + rear arc (bottom→top) → closed polygon.
 *
 * Trimming logic prevents surfaces from visually overlapping neighboring
 * elements. Two trim passes handle front (backward-curving into preceding gap)
 * and rear (forward-curving into following gap) surfaces independently.
 * Each surface is also clamped to its conic height limit to avoid rendering
 * artifacts where the conic slope approaches infinity. */

/**
 * Build closed SVG paths for each glass element, with surface trimming
 * and aspheric overlay paths.
 *
 * @param L    — frozen runtime lens object from buildLens()
 * @param zPos — axial z-position of each surface (mm, shifted for focus/zoom)
 * @param sx   — optical z (mm) → SVG x coordinate
 * @param sy   — optical y (mm) → SVG y coordinate
 * @returns One entry per element with its closed SVG path string and any aspheric overlay paths.
 */
export function computeElementShapes(
  L: RuntimeLens,
  zPos: number[],
  sx: (z: number) => number,
  sy: (y: number) => number,
): ElementShape[] {
  return L.ES.map(([eid, s1, s2]: ElementSpan) => {
    const sd1 = L.S[s1].sd,
      sd2 = L.S[s2].sd;
    const R1 = Math.abs(L.S[s1].R),
      R2 = Math.abs(L.S[s2].R);
    /* Conic-aware max height: surface slope → ∞ at h = |R|/√(1+K) when K > 0 */
    const K1 = L.asphByIdx[s1]?.K || 0;
    const K2 = L.asphByIdx[s2]?.K || 0;
    const hMax1 = K1 > 0 && R1 < 1e10 ? (R1 / Math.sqrt(1 + K1)) * 0.98 : Infinity;
    const hMax2 = K2 > 0 && R2 < 1e10 ? (R2 / Math.sqrt(1 + K2)) * 0.98 : Infinity;
    /* Slope-aware rendering trim: binary-search for the height where the
     * actual aspherical slope reaches maxRimTan.  For spherical surfaces
     * this gives the same result as R × maxRimSin; for aspherics (especially
     * near-paraboloids, K ≈ −1) the slope grows more slowly, allowing the
     * element outline to extend higher and match the physical lens shape.
     * Each surface is trimmed to its own SD — deep meniscus elements with
     * different front/rear SDs get trapezoidal outlines matching the barrel. */
    let trim1 = Math.min(sd1, slopeTrimHeight(s1, sd1, L.maxRimTan, L), hMax1);
    let trim2 = Math.min(sd2, slopeTrimHeight(s2, sd2, L.maxRimTan, L), hMax2);
    /* Trim front surface if it curves backward into preceding air gap.
     * Mirror of the TRIM2 logic: the preceding element's rear surface
     * may curve backward (negative sag) widening the effective clearance,
     * or forward (positive sag) narrowing it. */
    if (s1 > 0 && L.gapSagFrac > 0 && renderSag(trim1, s1, L) < 0) {
      const prevES = L.ES.findLast(([, , ps2]: ElementSpan) => ps2 < s1 && L.S[ps2].nd === 1.0);
      const gapBefore = prevES ? zPos[s1] - zPos[prevES[2]] : L.S[s1 - 1].d;
      let effectiveGap = gapBefore;
      if (prevES) {
        const ps2 = prevES[2],
          ps1 = prevES[1];
        const prevSD = Math.min(L.S[ps1].sd, L.S[ps2].sd);
        /* Negative renderSag on rear surface = curves backward = widens gap */
        effectiveGap -= renderSag(Math.min(trim1, prevSD), ps2, L);
      }
      effectiveGap = Math.max(effectiveGap, 0);
      if (Math.abs(renderSag(trim1, s1, L)) > effectiveGap * L.gapSagFrac)
        trim1 = gapTrimHeight(s1, trim1, effectiveGap * L.gapSagFrac, L);
    }
    /* Trim rear surface if it actually overlaps with the following element.
     * A rear surface with positive sag curves forward into the gap, but the
     * next element's front surface may also curve forward (positive sag),
     * widening the effective clearance; or backward (negative sag), narrowing
     * it.  Account for both to avoid false trims on fast lenses. */
    if (L.S[s2].nd === 1.0 && L.gapSagFrac > 0 && renderSag(trim2, s2, L) > 0) {
      const nextES = L.ES.find(([, ns1]: ElementSpan) => ns1 > s2);
      const gapAfter = nextES ? zPos[nextES[1]] - zPos[s2] : L.S[s2].d;
      let effectiveGap = gapAfter;
      if (nextES) {
        const ns1 = nextES[1],
          ns2 = ns1 + 1;
        const nextSD = Math.min(L.S[ns1].sd, ns2 < L.N ? L.S[ns2].sd : Infinity);
        effectiveGap += renderSag(Math.min(trim2, nextSD), ns1, L);
      }
      effectiveGap = Math.max(effectiveGap, 0);
      if (renderSag(trim2, s2, L) > effectiveGap * L.gapSagFrac)
        trim2 = gapTrimHeight(s2, trim2, effectiveGap * L.gapSagFrac, L);
    }
    const z1 = zPos[s1],
      z2 = zPos[s2],
      NN = SVG_PATH_SUBDIVISIONS;
    /* Element outline path — each surface rendered to its own SD.
     * Front sweeps from −sd1 to +sd1, rear from +sd2 to −sd2.
     * SVG path commands create straight connecting edges at top/bottom
     * where the SDs differ (trapezoidal barrel cut). */
    let d = "";
    for (let i = 0; i <= NN; i++) {
      const y = -sd1 + (2 * sd1 * i) / NN;
      d += `${i ? "L" : "M"}${sx(z1 + renderSag(Math.min(Math.abs(y), trim1), s1, L))},${sy(y)} `;
    }
    for (let i = NN; i >= 0; i--) {
      const y = -sd2 + (2 * sd2 * i) / NN;
      d += `L${sx(z2 + renderSag(Math.min(Math.abs(y), trim2), s2, L))},${sy(y)} `;
    }
    /* Aspheric surface overlay paths + diamond half-fill paths */
    const asphPaths: AsphPathData[] = [];
    const midX = sx((z1 + z2) / 2);
    if (L.asphByIdx[s1]) {
      let p = "";
      for (let i = 0; i <= NN; i++) {
        const y = -sd1 + (2 * sd1 * i) / NN;
        p += `${i ? "L" : "M"}${sx(z1 + renderSag(Math.min(Math.abs(y), trim1), s1, L))},${sy(y)} `;
      }
      /* Half-path: front surface top-to-bottom, then straight line back at midpoint */
      const hp = p + `L${midX},${sy(sd1)} L${midX},${sy(-sd1)} Z`;
      asphPaths.push({
        surfIdx: s1,
        pathD: p,
        halfPathD: hp,
        labelX: sx(z1 + renderSag(Math.min(sd1, trim1), s1, L)),
        labelY: sy(-sd1) - 4,
      });
    }
    if (L.asphByIdx[s2]) {
      let p = "";
      for (let i = 0; i <= NN; i++) {
        const y = -sd2 + (2 * sd2 * i) / NN;
        p += `${i ? "L" : "M"}${sx(z2 + renderSag(Math.min(Math.abs(y), trim2), s2, L))},${sy(y)} `;
      }
      /* Half-path: straight line at midpoint top-to-bottom, then rear surface bottom-to-top */
      let hp = `M${midX},${sy(-sd2)} L${midX},${sy(sd2)} `;
      for (let i = NN; i >= 0; i--) {
        const y = -sd2 + (2 * sd2 * i) / NN;
        hp += `L${sx(z2 + renderSag(Math.min(Math.abs(y), trim2), s2, L))},${sy(y)} `;
      }
      hp += "Z";
      asphPaths.push({
        surfIdx: s2,
        pathD: p,
        halfPathD: hp,
        labelX: sx(z2 + renderSag(Math.min(sd2, trim2), s2, L)),
        labelY: sy(-sd2) - 4,
      });
    }
    return { eid, d: d + "Z", z1, z2, asphPaths };
  });
}
