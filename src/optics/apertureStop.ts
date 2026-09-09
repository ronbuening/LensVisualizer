/** Physical wide-open iris for lenses with an explicit inferred zoom-aperture model. */
import type { RuntimeLens } from "../types/optics.js";

export function wideOpenStopAtZoom(zoomT: number, L: RuntimeLens): number {
  const values = L.zoomStopSDs;
  if (!L.isZoom || !values || values.length < 2) return L.stopPhysSD;
  const position = Math.max(0, Math.min(1, Number.isFinite(zoomT) ? zoomT : 0)) * (values.length - 1);
  const index = Math.min(Math.floor(position), values.length - 2);
  return values[index] + (values[index + 1] - values[index]) * (position - index);
}
