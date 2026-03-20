/**
 * comparisonSliders.js — Pure-function math for shared comparison-mode sliders.
 *
 * Maps a single shared slider position to per-lens focusT / stopdownT values,
 * handling asymmetric lens capabilities (different close-focus distances,
 * different maximum apertures) with clamping past common points.
 */

import { FOCUS_INFINITY_THRESHOLD } from './optics.js';

/**
 * Compute per-lens focusT values from a shared slider position.
 *
 * sharedT: 0 = infinity, 1 = closest-focusing lens's min distance
 * The "common point" is where the less-capable lens hits its close-focus limit.
 *
 * Returns { focusA, focusB, commonPoint, minCloseFocus, maxCloseFocus }
 */
export function computeFocusPair(sharedT, LA, LB) {
  const closA = LA.closeFocusM;
  const closB = LB.closeFocusM;
  const minClose = Math.min(closA, closB);
  const maxClose = Math.max(closA, closB);

  /* Common point: where the lens with larger closeFocusM (less capable) hits t=1 */
  const commonPoint = minClose / maxClose;

  /* Per-lens focusT: physical dist = minClose / sharedT, so t_X = X.close * sharedT / minClose */
  const focusA = Math.min(sharedT * closA / minClose, 1.0);
  const focusB = Math.min(sharedT * closB / minClose, 1.0);

  return { focusA, focusB, commonPoint, minCloseFocus: minClose, maxCloseFocus: maxClose };
}

/**
 * Compute per-lens stopdownT values from a shared slider position.
 *
 * sharedT: 0 = fastest lens wide open, 1 = max stopped down
 * The "common point" is where the slower lens reaches its wide-open aperture.
 *
 * Returns { stopdownA, stopdownB, commonPoint, widerFOPEN, narrowerFOPEN, sharedMaxFstop }
 */
export function computeAperturePair(sharedT, LA, LB) {
  const widerFOPEN = Math.min(LA.FOPEN, LB.FOPEN);
  const narrowerFOPEN = Math.max(LA.FOPEN, LB.FOPEN);
  const sharedMaxFstop = Math.max(LA.maxFstop, LB.maxFstop);

  /* Shared f-number at this slider position (logarithmic interpolation) */
  const fShared = widerFOPEN * Math.pow(sharedMaxFstop / widerFOPEN, sharedT);

  /* Per-lens stopdownT: solve fShared = L.FOPEN * (L.maxFstop / L.FOPEN)^t for t */
  const stopdownA = fToStopdownT(fShared, LA.FOPEN, LA.maxFstop);
  const stopdownB = fToStopdownT(fShared, LB.FOPEN, LB.maxFstop);

  /* Common point: where the slower lens just reaches its wide-open aperture (stopdownT = 0) */
  const commonPoint = Math.abs(widerFOPEN - narrowerFOPEN) < 0.01
    ? 0
    : Math.log(narrowerFOPEN / widerFOPEN) / Math.log(sharedMaxFstop / widerFOPEN);

  return { stopdownA, stopdownB, commonPoint, widerFOPEN, narrowerFOPEN, sharedMaxFstop };
}

/**
 * Convert an f-number to a per-lens stopdownT value, clamped to [0, 1].
 */
function fToStopdownT(fNumber, FOPEN, maxFstop) {
  if (fNumber <= FOPEN) return 0;
  if (fNumber >= maxFstop) return 1;
  return Math.log(fNumber / FOPEN) / Math.log(maxFstop / FOPEN);
}

/**
 * Format the shared focus distance from shared slider position.
 * Uses the closest-focusing lens's closeFocusM as the reference.
 */
export function formatSharedFocusDist(sharedT, minCloseFocusM) {
  if (sharedT < FOCUS_INFINITY_THRESHOLD) return "\u221e";
  const d = minCloseFocusM / sharedT;
  if (d >= 100) return `${Math.round(d)} m`;
  if (d >= 10) return `${d.toFixed(1)} m`;
  if (d >= 1) return `${d.toFixed(2)} m`;
  return `${(d * 100).toFixed(0)} cm`;
}

/**
 * Compute the shared f-number from a shared stopdownT.
 */
export function sharedFNumber(sharedT, widerFOPEN, sharedMaxFstop) {
  return widerFOPEN * Math.pow(sharedMaxFstop / widerFOPEN, sharedT);
}

/**
 * Apply snap-to-common-point behavior.
 * If the raw value is within snapRange of the common point, snap to it.
 */
export function snapToCommon(rawT, commonPoint, snapRange = 0.008) {
  if (commonPoint <= 0 || commonPoint >= 1) return rawT;
  return Math.abs(rawT - commonPoint) < snapRange ? commonPoint : rawT;
}
