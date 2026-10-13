/** MTF options shared by every mounted MTF tab and persisted in this browser. */
import { useSyncExternalStore } from "react";
import {
  DEFAULT_MTF_PREFERENCES,
  getMtfPreferences,
  subscribeMtfPreferences,
  updateMtfPreferences,
  type MtfPreferences,
} from "../../utils/state/mtfPreferences.js";

/**
 * Read and change the saved MTF options.
 *
 * @returns current options and a merge-update callback
 */
export function useMtfPreferences(): [MtfPreferences, (patch: Partial<MtfPreferences>) => void] {
  const preferences = useSyncExternalStore(subscribeMtfPreferences, getMtfPreferences, () => DEFAULT_MTF_PREFERENCES);
  return [preferences, updateMtfPreferences];
}
