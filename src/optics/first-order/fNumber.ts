/** Runtime compatibility wrapper for the current paraxial image-side working f-number. */
import type { RuntimeLens } from "../../types/optics.js";
import { normalizeRuntimeLens } from "../prescription/normalizeLensData.js";
import { prepareState } from "../state/prepareState.js";
import { apertureMetricsForState, resolveApertureStop } from "./aperture.js";

/** Return the paraxial working f-number, or NaN when this path has no supported image-side cone. */
export function effectiveFNumber2(
  nominalFNumber: number,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
): number {
  const state = prepareState(normalizeRuntimeLens(L), focusT, zoomT, aberrationT);
  const aperture = resolveApertureStop(L, zoomT, nominalFNumber);
  return apertureMetricsForState(state, aperture.stopSemiDiameterMm).workingFNumber ?? NaN;
}
