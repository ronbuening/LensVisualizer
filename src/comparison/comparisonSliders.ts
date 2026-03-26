/**
 * comparisonSliders.ts — Pure-function math for shared comparison-mode sliders.
 *
 * Maps a single shared slider position to per-lens focusT / stopdownT values,
 * handling asymmetric lens capabilities (different close-focus distances,
 * different maximum apertures) with clamping past common points.
 */

import type { RuntimeLens } from "../types/optics.js";
import { FOCUS_INFINITY_THRESHOLD } from "../optics/optics.js";

export interface FocusPairResult {
  focusA: number;
  focusB: number;
  commonPoint: number;
  minCloseFocus: number;
  maxCloseFocus: number;
}

export interface AperturePairResult {
  stopdownA: number;
  stopdownB: number;
  commonPoint: number;
  widerFOPEN: number;
  narrowerFOPEN: number;
  sharedMaxFstop: number;
}

export interface ZoomPairResult {
  zoomA: number;
  zoomB: number;
  showZoom: boolean;
  sharedFL?: number;
  minFL?: number;
  maxFL?: number;
  commonPointLow?: number;
  commonPointHigh?: number;
}

/**
 * Compute per-lens focusT values from a shared slider position.
 *
 * sharedT: 0 = infinity, 1 = closest-focusing lens's min distance
 * The "common point" is where the less-capable lens hits its close-focus limit.
 */
export function computeFocusPair(sharedT: number, LA: RuntimeLens, LB: RuntimeLens): FocusPairResult {
  const closA: number = LA.closeFocusM;
  const closB: number = LB.closeFocusM;
  const minClose: number = Math.min(closA, closB);
  const maxClose: number = Math.max(closA, closB);

  /* Common point: where the lens with larger closeFocusM (less capable) hits t=1 */
  const commonPoint: number = minClose / maxClose;

  /* Per-lens focusT: physical dist = minClose / sharedT, so t_X = X.close * sharedT / minClose */
  const focusA: number = Math.min((sharedT * closA) / minClose, 1.0);
  const focusB: number = Math.min((sharedT * closB) / minClose, 1.0);

  return { focusA, focusB, commonPoint, minCloseFocus: minClose, maxCloseFocus: maxClose };
}

/**
 * Compute per-lens stopdownT values from a shared slider position.
 *
 * sharedT: 0 = fastest lens wide open, 1 = max stopped down
 * The "common point" is where the slower lens reaches its wide-open aperture.
 */
export function computeAperturePair(sharedT: number, LA: RuntimeLens, LB: RuntimeLens): AperturePairResult {
  const widerFOPEN: number = Math.min(LA.FOPEN, LB.FOPEN);
  const narrowerFOPEN: number = Math.max(LA.FOPEN, LB.FOPEN);
  const sharedMaxFstop: number = Math.max(LA.maxFstop, LB.maxFstop);

  /* Shared f-number at this slider position (logarithmic interpolation) */
  const fShared: number = widerFOPEN * Math.pow(sharedMaxFstop / widerFOPEN, sharedT);

  /* Per-lens stopdownT: solve fShared = L.FOPEN * (L.maxFstop / L.FOPEN)^t for t */
  const stopdownA: number = fToStopdownT(fShared, LA.FOPEN, LA.maxFstop);
  const stopdownB: number = fToStopdownT(fShared, LB.FOPEN, LB.maxFstop);

  /* Common point: where the slower lens just reaches its wide-open aperture (stopdownT = 0) */
  const commonPoint: number =
    Math.abs(widerFOPEN - narrowerFOPEN) < 0.01
      ? 0
      : Math.log(narrowerFOPEN / widerFOPEN) / Math.log(sharedMaxFstop / widerFOPEN);

  return { stopdownA, stopdownB, commonPoint, widerFOPEN, narrowerFOPEN, sharedMaxFstop };
}

/**
 * Convert an f-number to a per-lens stopdownT value, clamped to [0, 1].
 */
function fToStopdownT(fNumber: number, FOPEN: number, maxFstop: number): number {
  if (fNumber <= FOPEN) return 0;
  if (fNumber >= maxFstop) return 1;
  return Math.log(fNumber / FOPEN) / Math.log(maxFstop / FOPEN);
}

/**
 * Format the shared focus distance from shared slider position.
 * Uses the closest-focusing lens's closeFocusM as the reference.
 */
export function formatSharedFocusDist(sharedT: number, minCloseFocusM: number): string {
  if (sharedT < FOCUS_INFINITY_THRESHOLD) return "\u221e";
  const d: number = minCloseFocusM / sharedT;
  if (d >= 100) return `${Math.round(d)} m`;
  if (d >= 10) return `${d.toFixed(1)} m`;
  if (d >= 1) return `${d.toFixed(2)} m`;
  return `${(d * 100).toFixed(0)} cm`;
}

/**
 * Compute the shared f-number from a shared stopdownT.
 */
export function sharedFNumber(sharedT: number, widerFOPEN: number, sharedMaxFstop: number): number {
  return widerFOPEN * Math.pow(sharedMaxFstop / widerFOPEN, sharedT);
}

/**
 * Apply snap-to-common-point behavior.
 * If the raw value is within snapRange of the common point, snap to it.
 */
export function snapToCommon(rawT: number, commonPoint: number, snapRange: number = 0.008): number {
  if (commonPoint <= 0 || commonPoint >= 1) return rawT;
  return Math.abs(rawT - commonPoint) < snapRange ? commonPoint : rawT;
}

/**
 * Compute per-lens zoomT values from a shared slider position.
 *
 * For single-zoom + prime: passes sharedZoomT directly to the zoom lens.
 * For dual-zoom: maps the shared slider to a focal length in the union
 * range (logarithmic interpolation for perceptual uniformity), then converts
 * to per-lens zoomT via inverse EFL lookup.  Lenses outside their range
 * are clamped at 0 or 1.
 */
export function computeZoomPair(sharedZoomT: number, LA: RuntimeLens, LB: RuntimeLens): ZoomPairResult {
  const aIsZoom: boolean = !!LA.isZoom;
  const bIsZoom: boolean = !!LB.isZoom;
  if (!aIsZoom && !bIsZoom) return { zoomA: 0, zoomB: 0, showZoom: false };
  if (aIsZoom && !bIsZoom) return { zoomA: sharedZoomT, zoomB: 0, showZoom: true };
  if (!aIsZoom && bIsZoom) return { zoomA: 0, zoomB: sharedZoomT, showZoom: true };

  /* Both are zoom lenses — map by focal length in the union range */
  const aEFLs: number[] = LA.zoomEFLs!,
    bEFLs: number[] = LB.zoomEFLs!;
  const minFL: number = Math.min(aEFLs[0], bEFLs[0]);
  const maxFL: number = Math.max(aEFLs[aEFLs.length - 1], bEFLs[bEFLs.length - 1]);

  /* Logarithmic interpolation: perceptually uniform across the zoom range */
  const sharedFL: number = minFL * Math.pow(maxFL / minFL, sharedZoomT);

  const zoomA: number = _eflToZoomT(sharedFL, aEFLs);
  const zoomB: number = _eflToZoomT(sharedFL, bEFLs);

  /* Common points: where each lens reaches its range boundary */
  const logRange: number = Math.log(maxFL / minFL);
  const commonPointLow: number = Math.max(
    aEFLs[0] > minFL ? Math.log(aEFLs[0] / minFL) / logRange : 0,
    bEFLs[0] > minFL ? Math.log(bEFLs[0] / minFL) / logRange : 0,
  );
  const commonPointHigh: number = Math.min(
    aEFLs[aEFLs.length - 1] < maxFL ? Math.log(aEFLs[aEFLs.length - 1] / minFL) / logRange : 1,
    bEFLs[bEFLs.length - 1] < maxFL ? Math.log(bEFLs[bEFLs.length - 1] / minFL) / logRange : 1,
  );

  return { zoomA, zoomB, showZoom: true, sharedFL, minFL, maxFL, commonPointLow, commonPointHigh };
}

/**
 * Convert a focal length to zoomT [0,1] via the lens's pre-computed zoomEFLs.
 * Uses piecewise-linear inverse interpolation.  Clamps to [0, 1] outside range.
 */
function _eflToZoomT(fl: number, efls: number[]): number {
  if (fl <= efls[0]) return 0;
  if (fl >= efls[efls.length - 1]) return 1;
  for (let i: number = 0; i < efls.length - 1; i++) {
    if (fl >= efls[i] && fl <= efls[i + 1]) {
      const frac: number = (fl - efls[i]) / (efls[i + 1] - efls[i]);
      return (i + frac) / (efls.length - 1);
    }
  }
  return 1;
}
