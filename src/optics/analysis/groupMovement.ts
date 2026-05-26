/**
 * Group-movement analysis adapter — prepared-state wrappers for inferred focus/zoom group profiles.
 *
 * Reuses RuntimeLens group movement logic from the prepared state's lens reference to avoid duplicate movement rules.
 */

import {
  computeGroupMovementProfile,
  firstAvailableGroupMovementMode,
  getGroupMovementAvailability,
  inferLensMovementGroups,
  isGroupMovementModeAvailable,
} from "../groupMovement.js";
import type { GroupMovementMode } from "../../types/groupMovement.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";

export function computeGroupMovementProfileForState2(state: PreparedOpticalState, mode: GroupMovementMode) {
  return computeGroupMovementProfile(state.lens.runtime, mode, {
    focusT: state.focusT,
    zoomT: state.zoomT,
    aberrationT: state.aberrationT,
  });
}

export function computeGroupMovementProfile2(
  L: RuntimeLens,
  mode: GroupMovementMode,
  options: { focusT: number; zoomT: number; aberrationT?: number },
) {
  return computeGroupMovementProfile(L, mode, options);
}

export {
  firstAvailableGroupMovementMode as firstAvailableGroupMovementMode2,
  getGroupMovementAvailability as getGroupMovementAvailability2,
  inferLensMovementGroups as inferLensMovementGroups2,
  isGroupMovementModeAvailable as isGroupMovementModeAvailable2,
};
