/**
 * Pure-function utilities for diagram geometry, extracted from LensDiagramPanel.
 * No React dependencies — these are testable coordinate-transform and
 * element-shape computations used by the SVG rendering layer.
 */

import { renderSag, slopeTrimHeight, SVG_PATH_SUBDIVISIONS } from "./optics.js";
import type {
  RuntimeLens,
  CoordinateTransforms,
  ElementShape,
  AsphPathData,
  ElementSpan,
  SurfaceRenderDiagnostics,
  ElementRenderDiagnostics,
  ElementRenderTrimCause,
} from "../types/optics.js";

const MAX_VISIBLE_GAP_INTRUSION_FRAC = 1.0;

export type DiagramPointTransform = (z: number, y: number) => [number, number];

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
 * The diagnostic helper owns all render semi-diameter decisions so tests can
 * catch hidden trims before they turn into geometry artifacts. */

function surfaceDiagnostics(
  L: RuntimeLens,
  surfaceIndex: number,
  declaredSD: number,
  renderSD: number,
  trimCause: ElementRenderTrimCause,
): SurfaceRenderDiagnostics {
  return {
    surfaceIndex,
    surfaceLabel: L.S[surfaceIndex].label,
    declaredSD,
    renderSD,
    trimAmount: Math.max(0, declaredSD - renderSD),
    trimCause,
  };
}

function applyTrim(
  currentSD: number,
  currentCause: ElementRenderTrimCause,
  candidateSD: number,
  candidateCause: ElementRenderTrimCause,
): [number, ElementRenderTrimCause] {
  return candidateSD < currentSD ? [candidateSD, candidateCause] : [currentSD, currentCause];
}

function initialRenderSD(L: RuntimeLens, surfaceIndex: number, declaredSD: number): [number, ElementRenderTrimCause] {
  let renderSD = declaredSD;
  let trimCause: ElementRenderTrimCause = "none";
  const absR = Math.abs(L.S[surfaceIndex].R);
  const K = L.asphByIdx[surfaceIndex]?.K || 0;
  const hMax = K > 0 && absR < 1e10 ? (absR / Math.sqrt(1 + K)) * 0.98 : Infinity;

  [renderSD, trimCause] = applyTrim(renderSD, trimCause, hMax, "conic-limit");
  [renderSD, trimCause] = applyTrim(
    renderSD,
    trimCause,
    slopeTrimHeight(surfaceIndex, declaredSD, L.maxRimTan, L),
    "slope",
  );

  return [renderSD, trimCause];
}

function boundaryIntrusion(
  rearSurfaceIndex: number,
  frontSurfaceIndex: number,
  height: number,
  L: RuntimeLens,
): number {
  return renderSag(height, rearSurfaceIndex, L) - renderSag(height, frontSurfaceIndex, L);
}

function boundaryTrimHeight(
  rearSurfaceIndex: number,
  frontSurfaceIndex: number,
  sd: number,
  maxIntrusion: number,
  L: RuntimeLens,
): number {
  if (boundaryIntrusion(rearSurfaceIndex, frontSurfaceIndex, sd, L) <= maxIntrusion) return sd;
  let lo = 0,
    hi = sd;
  for (let i = 0; i < 30; i++) {
    const mid = (lo + hi) / 2;
    if (boundaryIntrusion(rearSurfaceIndex, frontSurfaceIndex, mid, L) > maxIntrusion) hi = mid;
    else lo = mid;
  }
  return (lo + hi) / 2;
}

/**
 * Report the effective rendered semi-diameter for every element surface.
 *
 * Any non-zero trim means the renderer would draw a different clear aperture
 * than the lens data declares. Tests use this to flag geometry that should be
 * fixed in the lens file instead of silently hidden during rendering.
 */
export function computeElementRenderDiagnostics(L: RuntimeLens, zPos: number[]): ElementRenderDiagnostics[] {
  return L.ES.map(([eid, s1, s2]: ElementSpan) => {
    const sd1 = L.S[s1].sd,
      sd2 = L.S[s2].sd;
    let [renderSD1, cause1] = initialRenderSD(L, s1, sd1);
    let [renderSD2, cause2] = initialRenderSD(L, s2, sd2);

    /* Trim front surface if it curves backward into preceding air gap.
     * Mirror of the rear-surface logic: the preceding element's rear surface
     * may widen or narrow the effective clearance. */
    if (s1 > 0 && L.gapSagFrac > 0 && renderSag(renderSD1, s1, L) < 0) {
      const prevES = L.ES.findLast(([, , ps2]: ElementSpan) => ps2 < s1 && L.S[ps2].nd === 1.0);
      const gapBefore = prevES ? zPos[s1] - zPos[prevES[2]] : L.S[s1 - 1].d;
      const maxIntrusion = Math.max(gapBefore, 0) * Math.min(L.gapSagFrac, MAX_VISIBLE_GAP_INTRUSION_FRAC);
      if (prevES) {
        const ps2 = prevES[2];
        const [prevSD] = initialRenderSD(L, ps2, L.S[ps2].sd);
        const sdCheck = Math.min(renderSD1, prevSD);
        if (boundaryIntrusion(ps2, s1, sdCheck, L) > maxIntrusion) {
          renderSD1 = boundaryTrimHeight(ps2, s1, renderSD1, maxIntrusion, L);
          cause1 = "gap";
        }
      }
    }

    /* Trim rear surface if it actually overlaps with the following element. */
    if (L.S[s2].nd === 1.0 && L.gapSagFrac > 0 && renderSag(renderSD2, s2, L) > 0) {
      const nextES = L.ES.find(([, ns1]: ElementSpan) => ns1 > s2);
      const gapAfter = nextES ? zPos[nextES[1]] - zPos[s2] : L.S[s2].d;
      const maxIntrusion = Math.max(gapAfter, 0) * Math.min(L.gapSagFrac, MAX_VISIBLE_GAP_INTRUSION_FRAC);
      if (nextES) {
        const ns1 = nextES[1];
        const [nextSD] = initialRenderSD(L, ns1, L.S[ns1].sd);
        const sdCheck = Math.min(renderSD2, nextSD);
        if (boundaryIntrusion(s2, ns1, sdCheck, L) > maxIntrusion) {
          renderSD2 = boundaryTrimHeight(s2, ns1, renderSD2, maxIntrusion, L);
          cause2 = "gap";
        }
      }
    }

    return {
      eid,
      front: surfaceDiagnostics(L, s1, sd1, renderSD1, cause1),
      rear: surfaceDiagnostics(L, s2, sd2, renderSD2, cause2),
    };
  });
}

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
  pointTransform?: DiagramPointTransform,
): ElementShape[] {
  const diagnostics = computeElementRenderDiagnostics(L, zPos);
  const screenPoint = (z: number, y: number): [number, number] => {
    const [zz, yy] = pointTransform ? pointTransform(z, y) : [z, y];
    return [sx(zz), sy(yy)];
  };
  const pathPoint = (z: number, y: number): string => {
    const [x, yy] = screenPoint(z, y);
    return `${x},${yy}`;
  };

  return L.ES.map(([eid, s1, s2]: ElementSpan, elementIndex: number) => {
    const trim1 = diagnostics[elementIndex].front.renderSD;
    const trim2 = diagnostics[elementIndex].rear.renderSD;
    const z1 = zPos[s1],
      z2 = zPos[s2],
      NN = SVG_PATH_SUBDIVISIONS;
    /* Element outline path — each surface rendered to its own SD.
     * Front sweeps from −trim1 to +trim1, rear from +trim2 to −trim2.
     * SVG path commands create straight connecting edges at top/bottom
     * where the SDs differ (trapezoidal barrel cut). */
    let d = "";
    for (let i = 0; i <= NN; i++) {
      const y = -trim1 + (2 * trim1 * i) / NN;
      d += `${i ? "L" : "M"}${pathPoint(z1 + renderSag(Math.abs(y), s1, L), y)} `;
    }
    for (let i = NN; i >= 0; i--) {
      const y = -trim2 + (2 * trim2 * i) / NN;
      d += `L${pathPoint(z2 + renderSag(Math.abs(y), s2, L), y)} `;
    }
    /* Aspheric surface overlay paths + diamond half-fill paths */
    const asphPaths: AsphPathData[] = [];
    const midZ = (z1 + z2) / 2;
    if (L.asphByIdx[s1]) {
      let p = "";
      for (let i = 0; i <= NN; i++) {
        const y = -trim1 + (2 * trim1 * i) / NN;
        p += `${i ? "L" : "M"}${pathPoint(z1 + renderSag(Math.abs(y), s1, L), y)} `;
      }
      /* Half-path: front surface top-to-bottom, then straight line back at midpoint */
      const hp = p + `L${pathPoint(midZ, trim1)} L${pathPoint(midZ, -trim1)} Z`;
      const [labelX, labelY] = screenPoint(z1 + renderSag(trim1, s1, L), -trim1);
      asphPaths.push({
        surfIdx: s1,
        pathD: p,
        halfPathD: hp,
        labelX,
        labelY: labelY - 4,
      });
    }
    if (L.asphByIdx[s2]) {
      let p = "";
      for (let i = 0; i <= NN; i++) {
        const y = -trim2 + (2 * trim2 * i) / NN;
        p += `${i ? "L" : "M"}${pathPoint(z2 + renderSag(Math.abs(y), s2, L), y)} `;
      }
      /* Half-path: straight line at midpoint top-to-bottom, then rear surface bottom-to-top */
      let hp = `M${pathPoint(midZ, -trim2)} L${pathPoint(midZ, trim2)} `;
      for (let i = NN; i >= 0; i--) {
        const y = -trim2 + (2 * trim2 * i) / NN;
        hp += `L${pathPoint(z2 + renderSag(Math.abs(y), s2, L), y)} `;
      }
      hp += "Z";
      const [labelX, labelY] = screenPoint(z2 + renderSag(trim2, s2, L), -trim2);
      asphPaths.push({
        surfIdx: s2,
        pathD: p,
        halfPathD: hp,
        labelX,
        labelY: labelY - 4,
      });
    }
    return { eid, d: d + "Z", z1, z2, asphPaths };
  });
}
