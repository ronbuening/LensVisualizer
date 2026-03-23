/**
 * useLensComputation — Custom hook consolidating all memoized optical
 * calculations: lens building, layout, coordinate transforms, element
 * shapes, and aperture metrics.
 *
 * Extracted from LensDiagramPanel to isolate the computation pipeline
 * from rendering concerns.
 */

import { useMemo } from "react";
import { LENS_CATALOG } from "../utils/lensCatalog.js";
import buildLens from "../optics/buildLens.js";
import { thick, doLayout, epAtZoom } from "../optics/optics.js";
import { createCoordinateTransforms, computeElementShapes } from "../optics/diagramGeometry.js";

/**
 * @param {Object}  params
 * @param {string}  params.lensKey    — catalog key identifying the lens
 * @param {number}  params.focusT     — focus position [0 = ∞, 1 = closest]
 * @param {number}  params.zoomT      — zoom position [0..1]
 * @param {number}  params.stopdownT  — aperture stopdown [0 = wide, 1 = max]
 * @param {number|null} params.scaleRatio — normalized comparison scale factor
 * @param {string}  params.panelId    — unique ID for SVG filter namespacing
 */
export default function useLensComputation({ lensKey, focusT, zoomT, stopdownT, scaleRatio, panelId }) {
  /* ── Build lens from catalog ── */
  const buildResult = useMemo(() => {
    try {
      return { L: buildLens(LENS_CATALOG[lensKey]) };
    } catch (e) {
      return { error: e };
    }
  }, [lensKey]);

  const L = buildResult.L;
  const buildError = buildResult.error;

  /* ── Layout ──
   * Compute surface z-positions with a fixed reference: infinity focus at the
   * wide-end zoom position (focusT=0, zoomT=0). The difference `dz` shifts
   * the current layout so the image plane stays at a fixed SVG position
   * regardless of focus or zoom changes. */
  const ref = useMemo(() => (L ? doLayout(0, 0, L) : null), [L]);
  const IMG_MM = ref ? ref.imgZ : 0;
  const cur = useMemo(() => (L ? doLayout(focusT, zoomT, L) : null), [focusT, zoomT, L]);
  const dz = ref && cur ? IMG_MM - cur.imgZ : 0;
  const zPos = useMemo(() => (cur ? cur.z.map((v) => v + dz) : []), [cur, dz]);

  /* ── Coordinate transforms (optical mm → SVG pixels) ── */
  const { sx, sy, clampedRayEnd, CX, IX, effectiveSC } = useMemo(
    () =>
      L
        ? createCoordinateTransforms({
            svgW: L.svgW,
            svgH: L.svgH,
            SC: L.SC,
            YSC: L.YSC,
            lensShiftFrac: L.lensShiftFrac,
            imgMM: IMG_MM,
            scaleRatio,
          })
        : {
            sx: () => 0,
            sy: () => 0,
            clampedRayEnd: () => [0, 0],
            CX: 0,
            IX: 0,
            effectiveSC: 1,
          },
    [L, IMG_MM, scaleRatio],
  );

  /* ── Element shapes ── */
  const shapes = useMemo(() => {
    if (!L) return [];
    try {
      return computeElementShapes(L, zPos, sx, sy);
    } catch (e) {
      console.error(`[useLensComputation] Element shape computation failed for "${lensKey}":`, e);
      return [];
    }
  }, [L, zPos, sx, sy, lensKey]);

  /* ── Aperture ──
   * Compute the current f-number and physical stop/entrance-pupil diameters
   * from the stopdown slider position. Uses a logarithmic mapping so
   * equal slider increments produce equal f-stop steps. */
  const stopZ = L ? zPos[L.stopIdx] : 0;
  const fNumber = L ? L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT) : 1;
  const currentPhysStopSD = L ? (L.stopPhysSD * L.FOPEN) / fNumber : 0;
  /* Use zoom-aware EP for correct ray heights across the zoom range */
  const baseEPSD = L ? epAtZoom(zoomT, L) : 0;
  const currentEPSD = L ? (baseEPSD * L.FOPEN) / fNumber : 0;

  /* ── Variable gap readouts ── */
  const varReadouts = L
    ? L.varLabels.map(([idx, label]) => {
        const val = thick(idx, focusT, zoomT, L).toFixed(2);
        return { label, val };
      })
    : [];

  const filterId = `gl-${panelId}`;

  return {
    L,
    buildError,
    IMG_MM,
    zPos,
    sx,
    sy,
    clampedRayEnd,
    CX,
    IX,
    effectiveSC,
    shapes,
    stopZ,
    fNumber,
    currentPhysStopSD,
    baseEPSD,
    currentEPSD,
    varReadouts,
    filterId,
  };
}
