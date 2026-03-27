/**
 * useLensComputation — Custom hook consolidating all memoized optical
 * calculations: lens building, layout, coordinate transforms, element
 * shapes, and aperture metrics.
 *
 * Extracted from LensDiagramPanel to isolate the computation pipeline
 * from rendering concerns.
 */

import { useMemo } from "react";
import { LENS_CATALOG } from "../../utils/lensCatalog.js";
import buildLens from "../../optics/buildLens.js";
import { thick, doLayout, entrancePupilAtState, fopenAtZoom, eflAtFocus, effectiveFNumber } from "../../optics/optics.js";
import { createCoordinateTransforms, computeElementShapes } from "../../optics/diagramGeometry.js";
import type { RuntimeLens, ElementShape, CoordinateTransforms } from "../../types/optics.js";

interface UseLensComputationParams {
  lensKey: string;
  focusT: number;
  zoomT: number;
  stopdownT: number;
  scaleRatio: number | null;
  panelId: string;
}

interface VarReadout {
  label: string;
  val: string;
}

interface UseLensComputationResult {
  L: RuntimeLens | undefined;
  buildError: unknown;
  IMG_MM: number;
  zPos: number[];
  sx: (z: number) => number;
  sy: (y: number) => number;
  clampedRayEnd: (lastZ: number, lastY: number, u: number, targetZ: number) => [number, number];
  CX: number;
  IX: number;
  effectiveSC: number;
  shapes: ElementShape[];
  stopZ: number;
  currentFOPEN: number;
  fNumber: number;
  currentPhysStopSD: number;
  baseEPSD: number;
  currentEPSD: number;
  varReadouts: VarReadout[];
  dynamicEFL: number;
  effectiveFNum: number;
  filterId: string;
}

export default function useLensComputation({
  lensKey,
  focusT,
  zoomT,
  stopdownT,
  scaleRatio,
  panelId,
}: UseLensComputationParams): UseLensComputationResult {
  /* ── Build lens from catalog ── */
  const buildResult = useMemo((): { L: RuntimeLens; error?: undefined } | { L?: undefined; error: unknown } => {
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
    (): CoordinateTransforms =>
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
            sx: (_z: number) => 0,
            sy: (_y: number) => 0,
            clampedRayEnd: (_lastZ: number, _lastY: number, _u: number, _targetZ: number): [number, number] => [0, 0],
            yViewMax: 0,
            CX: 0,
            IX: 0,
            effectiveSC: 1,
          },
    [L, IMG_MM, scaleRatio],
  );

  /* ── Element shapes ── */
  const shapes = useMemo((): ElementShape[] => {
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
  /* Zoom-aware wide-open f-number (varies for variable-aperture zooms) */
  const currentFOPEN = L ? fopenAtZoom(zoomT, L) : 1;
  /* Base formula uses L.FOPEN (widest across zoom range) so that a set
   * f-number stays constant when zooming.  Clamp to currentFOPEN — the
   * lens can't open wider than the zoom position allows. */
  const rawFNumber = L ? L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT) : 1;
  const fNumber = Math.max(rawFNumber, currentFOPEN);
  const currentPhysStopSD = L ? (L.stopPhysSD * L.FOPEN) / fNumber : 0;
  /* Use the current focus/zoom front-group magnification for pupil-dependent analyses. */
  const baseEPSD = L ? entrancePupilAtState(L.stopPhysSD, focusT, zoomT, L).epSD : 0;
  const currentEPSD = L ? (baseEPSD * L.FOPEN) / fNumber : 0;

  /* ── Variable gap readouts ── */
  const varReadouts: VarReadout[] = L
    ? L.varLabels.map(([idx, label]) => {
        const val = thick(idx, focusT, zoomT, L).toFixed(2);
        return { label, val };
      })
    : [];

  /* ── Dynamic EFL (changes with focus for internal-focusing lenses) ── */
  const dynamicEFL = useMemo(() => (L ? eflAtFocus(focusT, zoomT, L) : 0), [L, focusT, zoomT]);

  /* ── Effective f-number (bellows factor correction at close focus) ── */
  const effectiveFNum = useMemo(
    () => (L ? effectiveFNumber(fNumber, focusT, zoomT, L) : fNumber),
    [L, fNumber, focusT, zoomT],
  );

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
    currentFOPEN,
    fNumber,
    currentPhysStopSD,
    baseEPSD,
    currentEPSD,
    varReadouts,
    dynamicEFL,
    effectiveFNum,
    filterId,
  };
}
