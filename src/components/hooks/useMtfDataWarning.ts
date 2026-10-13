/** Whether the reader has dismissed a lens system's MTF data warning on this page. */
import { useCallback, useSyncExternalStore } from "react";
import type { MtfDataLimitation } from "../../types/mtf.js";
import {
  dismissMtfDataWarnings,
  getDismissedMtfDataWarnings,
  noMtfDataWarningsDismissed,
  subscribeMtfDataWarnings,
} from "../../utils/state/mtfDataWarnings.js";

/**
 * Track the dismissal of one lens system's data warning.
 *
 * @param systemKey - lens key, or the composed key of a lens with a converter
 * @param limitations - gaps and notes the warning currently lists
 * @returns whether every blocking kind has been dismissed, and a callback that dismisses them
 */
export function useMtfDataWarning(
  systemKey: string,
  limitations: readonly MtfDataLimitation[],
): [acknowledged: boolean, acknowledge: () => void] {
  const dismissed = useSyncExternalStore(
    subscribeMtfDataWarnings,
    () => getDismissedMtfDataWarnings(systemKey),
    noMtfDataWarningsDismissed,
  );
  const acknowledge = useCallback(
    () =>
      dismissMtfDataWarnings(
        systemKey,
        limitations.filter(({ blocking }) => blocking).map(({ kind }) => kind),
      ),
    [systemKey, limitations],
  );
  return [limitations.every(({ kind, blocking }) => !blocking || dismissed.has(kind)), acknowledge];
}
