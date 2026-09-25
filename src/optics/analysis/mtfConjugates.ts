/** Source-defined finite conjugates. Distance labels alone do not certify focus configurations. */
import { resolveLensSourceState, sourceFiniteConjugate } from "../sourceStates.js";
import type { FiniteConjugate } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";
export { sourceObjectPoint as mtfFiniteObjectPoint } from "../field/sourceLaunch.js";

export function mtfFiniteConjugate(state: PreparedOpticalState): FiniteConjugate | undefined {
  return sourceFiniteConjugate(resolveLensSourceState(state.lens.source, state.focusT, state.zoomT, state.aberrationT));
}
