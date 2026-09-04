/** Current-state focal length calculated from the prescription, independent of catalog labels. */
import type { RuntimeLens } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";
import { normalizeRuntimeLens } from "../prescription/normalizeLensData.js";
import { prepareState } from "../state/prepareState.js";
import { computeCardinalElements2 } from "./cardinals.js";

/** Calculated signed EFL in the engine axis convention; null means afocal or unsupported geometry. */
export function calculatedFocalLengthForState(state: PreparedOpticalState): number | null {
  const efl = computeCardinalElements2(state)?.distances.efl.valueMm;
  return efl !== undefined && Number.isFinite(efl) ? efl : null;
}

/**
 * Calculate EFL at every focus/zoom/aberration state with the same first-order model.
 * Authored focal lengths remain available through the catalog/zoom metadata accessors.
 * The numeric compatibility API uses NaN for unavailable power; reporting APIs use null.
 */
export function eflAtFocus2(focusT: number, zoomT: number, L: RuntimeLens, aberrationT = 0): number {
  const state = prepareState(normalizeRuntimeLens(L), focusT, zoomT, aberrationT);
  return calculatedFocalLengthForState(state) ?? NaN;
}
