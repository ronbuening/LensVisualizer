/** Focus-distance endpoints follow the same normalized station coordinates as zoom gaps. */
import type { RuntimeLens } from "../types/optics.js";

/** Focus slider values below this threshold are treated as infinity. */
export const FOCUS_INFINITY_THRESHOLD = 0.003;

/** Slider-convention focus distance in metres; null at infinity or for an invalid distance. */
export function focusDistanceAt(focusT: number, L: RuntimeLens, zoomT = 0): number | null {
  if (focusT < FOCUS_INFINITY_THRESHOLD) return null;
  const distance = closeFocusAtZoom(zoomT, L) / focusT;
  return Number.isFinite(distance) && distance > 0 ? distance : null;
}

/** Preserve object distance when the modeled close-focus endpoint changes. */
export function remapFocusDistance(focusT: number, previousCloseM: number, nextCloseM: number): number {
  if (focusT < FOCUS_INFINITY_THRESHOLD || previousCloseM <= 0 || nextCloseM <= 0) return 0;
  return Math.min(1, (focusT * nextCloseM) / previousCloseM);
}

export function closeFocusAtZoom(zoomT: number, L: RuntimeLens): number {
  const values = L.zoomCloseFocusM;
  if (!L.isZoom || !values || values.length < 2) return L.closeFocusM;
  const position = Math.max(0, Math.min(1, Number.isFinite(zoomT) ? zoomT : 0)) * (values.length - 1);
  const index = Math.min(Math.floor(position), values.length - 2);
  return values[index] + (values[index + 1] - values[index]) * (position - index);
}
