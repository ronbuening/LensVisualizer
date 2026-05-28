/**
 * Effective f-number helper — current-state focal length divided by entrance-pupil diameter.
 *
 * Keeps f-number reporting consistent with focus breathing and zoom interpolation.
 */

import type { RuntimeLens } from "../../types/optics.js";
import { FOCUS_INFINITY_THRESHOLD } from "../layout.js";
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
  if (focusT < FOCUS_INFINITY_THRESHOLD) return nominalFNumber;
  const efl = eflAtFocus2(focusT, zoomT, L, aberrationT);
  const focusDistMm = (L.closeFocusM / focusT) * 1000;
  const denom = focusDistMm - efl;
  if (Math.abs(denom) < 1e-10) return nominalFNumber;
  /* Thin-lens magnification estimate using object distance measured from the image-side focal reference. */
  const m = -efl / denom;
  const epSD = L.isZoom && L.zoomEPs ? interpolateZoomArray(zoomT, L.zoomEPs) : L.EP.epSD;
  const xpSD = L.isZoom && L.zoomXpSDs ? interpolateZoomArray(zoomT, L.zoomXpSDs) : L.xpSD;
  const p = Math.abs(epSD) > 1e-10 ? Math.abs(xpSD) / Math.abs(epSD) : 1;
  return nominalFNumber * (1 + Math.abs(m) / (p > 1e-10 ? p : 1));
}

function interpolateZoomArray(zoomT: number, values: readonly number[]): number {
  if (values.length === 1) return values[0];
  const t = Math.max(0, Math.min(1, Number.isFinite(zoomT) ? zoomT : 0));
  const pos = t * (values.length - 1);
  const idx = Math.min(Math.floor(pos), values.length - 2);
  const frac = pos - idx;
  return values[idx] + (values[idx + 1] - values[idx]) * frac;
}
