/** Finite-only focus normalization at the state lifecycle boundary. */
import type { LensAction, LensState } from "../../types/state.js";
import type { FiniteFocusSource } from "../../optics/optics.js";
import { normalizeFiniteFocus } from "../../optics/optics.js";

/** Actions after which a finite-only lens shows its authored default state. */
const RESET_FOCUS_ACTIONS = new Set(["SET_LENS_A", "SET_OPTICAL_CONFIGURATION", "RESET_SLIDERS"]);

/**
 * Keep single-lens focus on an authored state of a finite-only lens. Hydration, lens selection and reset adopt the
 * authored default; every other action snaps to the nearest state. Comparison never holds a finite-only lens
 * (`COMPARISON_CATALOG_KEYS`), so shared sliders pass through.
 *
 * @param next - state after the reducer
 * @param action - the action just reduced; null for initial hydration
 * @param source - focus record of the catalog lens or Builder draft in view
 * @param initialFocus - focus hydrated from the URL, for initial hydration
 * @returns `next`, or a copy whose single-lens sliders sit on an authored state
 */
export function finiteFocusState(
  next: LensState,
  action: LensAction | null,
  source?: FiniteFocusSource,
  initialFocus?: number,
): LensState {
  if (!source?.focus.finiteOnly || next.lens.comparing) return next;
  const proposed =
    action === null
      ? initialFocus
      : RESET_FOCUS_ACTIONS.has(action.type)
        ? undefined
        : action.type === "APPLY_URL_VIEW_STATE"
          ? action.state.focus
          : next.sliders.focusT;
  const focusT = normalizeFiniteFocus(source, proposed);
  // A finite-only lens is a prime at a fixed iris: no zoom, aberration or stop-down position to carry or share.
  return { ...next, sliders: { ...next.sliders, focusT, stopdownT: 0, zoomT: 0, aberrationT: 0 } };
}
