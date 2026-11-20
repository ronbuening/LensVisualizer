/** Lens-local finite state normalization at the state lifecycle boundary. */
import type { LensAction, LensState } from "../../types/state.js";
import type { FiniteFocusSource } from "../../optics/optics.js";
import { normalizeFiniteFocus } from "../../optics/optics.js";
const RESET_FOCUS_ACTIONS = new Set(["SET_LENS_A", "SET_LENS_B", "SET_OPTICAL_CONFIGURATION", "RESET_SLIDERS"]);
export function finiteFocusState(
  next: LensState,
  action: LensAction | null,
  source?: FiniteFocusSource,
  initialFocus?: number,
): LensState {
  if (!source?.focus?.finiteOnly) return next;
  const proposed =
    action === null
      ? initialFocus
      : RESET_FOCUS_ACTIONS.has(action.type)
        ? undefined
        : action.type === "APPLY_URL_VIEW_STATE"
          ? action.state.focus
          : next.lens.comparing
            ? next.sharedSliders.sharedFocusT
            : next.sliders.focusT;
  const focusT = normalizeFiniteFocus(source, proposed);
  return next.lens.comparing
    ? { ...next, sharedSliders: { ...next.sharedSliders, sharedFocusT: focusT } }
    : { ...next, sliders: { ...next.sliders, focusT, stopdownT: 0, zoomT: 0, aberrationT: 0 } };
}
