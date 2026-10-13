/** Shared mapping from the aperture slider to the lens's attainable marked f-number. */
import { fopenAtZoom2 } from "./compat.js";
import type { RuntimeLens } from "../types/optics.js";

/**
 * Keep the requested f-number fixed across zoom, limited by the current wide-open aperture.
 *
 * @param stopdownT - normalized aperture slider, 0=wide open and 1=maximum f-number
 * @param zoomT - normalized zoom slider, 0=wide and 1=tele
 * @param L - runtime lens object
 * @returns attainable marked f-number, before any close-focus correction
 */
export function fNumberAtStopdown(stopdownT: number, zoomT: number, L: RuntimeLens): number {
  const requested = L.FOPEN * Math.pow(L.maxFstop / L.FOPEN, stopdownT);
  return Math.max(requested, fopenAtZoom2(zoomT, L));
}
