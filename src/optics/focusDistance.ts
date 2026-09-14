/** Focus-distance endpoints follow the same normalized station coordinates as zoom gaps. */
import type { RuntimeLens } from "../types/optics.js";

export function closeFocusAtZoom(zoomT: number, L: RuntimeLens): number {
  const values = L.zoomCloseFocusM;
  if (!L.isZoom || !values || values.length < 2) return L.closeFocusM;
  const position = Math.max(0, Math.min(1, Number.isFinite(zoomT) ? zoomT : 0)) * (values.length - 1);
  const index = Math.min(Math.floor(position), values.length - 2);
  return values[index] + (values[index + 1] - values[index]) * (position - index);
}
