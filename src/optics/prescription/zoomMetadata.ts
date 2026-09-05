/** Authored wide-open aperture metadata without layout or first-order dependencies. */
import type { RuntimeLens } from "../../types/optics.js";
import { interpolateUniformSchedule } from "../math/uniformInterpolation.js";
export function fopenAtZoom(zoomT: number, L: RuntimeLens): number {
  if (!L.isZoom || !L.zoomFOPENs) return L.FOPEN;
  return interpolateUniformSchedule(L.zoomFOPENs, zoomT);
}
