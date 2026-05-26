import type { RuntimeLens } from "../../types/optics.js";
import { FOCUS_INFINITY_THRESHOLD } from "../layout.js";
import { normalizeRuntimeLens } from "../prescription/normalizeLensData.js";
import { prepareState } from "../state/prepareState.js";
import { traceParaxialSurfaces2 } from "../math/paraxial.js";

export function eflAtFocus2(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  if (focusT < FOCUS_INFINITY_THRESHOLD && aberrationT <= 0) {
    return L.isZoom && L.zoomEFLs ? interpolateZoomArray(zoomT, L.zoomEFLs) : L.EFL;
  }
  const state = prepareState(normalizeRuntimeLens(L), focusT, zoomT, aberrationT);
  const trace = traceParaxialSurfaces2(state.surfaces, 1, 0, { skipLastTransfer: true });
  if (Math.abs(trace.u) < 1e-15) return L.isZoom && L.zoomEFLs ? interpolateZoomArray(zoomT, L.zoomEFLs) : L.EFL;
  return -1 / trace.u;
}

function interpolateZoomArray(zoomT: number, values: readonly number[]): number {
  if (values.length === 1) return values[0];
  const t = Math.max(0, Math.min(1, Number.isFinite(zoomT) ? zoomT : 0));
  const pos = t * (values.length - 1);
  const idx = Math.min(Math.floor(pos), values.length - 2);
  const frac = pos - idx;
  return values[idx] + (values[idx + 1] - values[idx]) * frac;
}
