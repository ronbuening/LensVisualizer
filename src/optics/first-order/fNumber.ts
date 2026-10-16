/**
 * Effective f-number helper — current-state focal length divided by entrance-pupil diameter.
 *
 * Keeps f-number reporting consistent with focus breathing and zoom interpolation.
 */

import { closeFocusAtZoom } from "../focusDistance.js";
import { interpolateStationTable, clampStationControl } from "../state/stationTables.js";
import type { RuntimeLens } from "../../types/optics.js";
import { FOCUS_INFINITY_CUTOFF } from "../focusDistance.js";
import { eflAtFocus2 } from "./focusBreathing.js";

/**
 * Estimate effective f-number at the current focus and zoom state.
 *
 * Uses the close-focus magnification correction `N_eff = N * (1 + |m| / p)`,
 * where `p` is pupil magnification XP/EP. At infinity, or when the denominator
 * is degenerate, the authored nominal f-number is returned unchanged.
 *
 * @param nominalFNumber - marked f-number for the current aperture setting
 * @param focusT - normalized focus slider, 0=infinity and 1=close focus
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns effective f-number for exposure/blur summaries
 */
export function effectiveFNumber2(
  nominalFNumber: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
): number {
  if (focusT < FOCUS_INFINITY_CUTOFF) return nominalFNumber;
  const efl = eflAtFocus2(focusT, zoomT, L, aberrationT);
  const focusDistMm = (closeFocusAtZoom(zoomT, L) / focusT) * 1000;
  const m = focusMagnification(efl, focusDistMm);
  if (m === null) return nominalFNumber;
  const epSD = L.isZoom && L.zoomEPs ? interpolateStationTable(clampStationControl(zoomT), L.zoomEPs) : L.EP.epSD;
  const xpSD = L.isZoom && L.zoomXpSDs ? interpolateStationTable(clampStationControl(zoomT), L.zoomXpSDs) : L.xpSD;
  return correctedFNumber(nominalFNumber, m, epSD, xpSD);
}

function focusMagnification(efl: number, focusDistMm: number): number | null {
  const denom = focusDistMm - efl;
  // Thin-lens magnification with object distance measured from the focal reference.
  return Math.abs(denom) < 1e-10 ? null : -efl / denom;
}

function correctedFNumber(nominalFNumber: number, m: number, epSD: number, xpSD: number): number {
  const p = Math.abs(epSD) > 1e-10 ? Math.abs(xpSD) / Math.abs(epSD) : 1;
  // Effective exposure f-number: N_eff = N * (1 + |m| / pupil magnification).
  return nominalFNumber * (1 + Math.abs(m) / (p > 1e-10 ? p : 1));
}
