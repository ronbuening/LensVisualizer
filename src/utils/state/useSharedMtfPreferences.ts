/** Visit-specific MTF settings follow an explicit share URL; ordinary visits keep the stored preference flow. */
import { useMemo, useSyncExternalStore } from "react";
import { useMtfPreferences } from "../../components/hooks/useMtfPreferences.js";
import type { MtfPreferences } from "./mtfPreferences.js";
import { encodeMtfSettings, MTF_URL_PARAM, parseSharedMtfSettings } from "./mtfUrlState.js";

const CHANGE_EVENT = "lensvis:mtf-link-settings";
const getSearch = () => (typeof window === "undefined" ? "" : window.location.search);
const getServerSearch = () => "";
const subscribe = (listener: () => void) => {
  window.addEventListener("popstate", listener);
  window.addEventListener(CHANGE_EVENT, listener);
  return () => {
    window.removeEventListener("popstate", listener);
    window.removeEventListener(CHANGE_EVENT, listener);
  };
};

function replaceSettings(settings: MtfPreferences | null): void {
  const url = new URL(window.location.href);
  if (settings) url.searchParams.set(MTF_URL_PARAM, encodeMtfSettings(settings));
  else url.searchParams.delete(MTF_URL_PARAM);
  window.history.replaceState(window.history.state, "", url.href);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

/**
 * Apply a shared override without saving any settings merely by opening it.
 * @returns current settings, a control updater, shared-link status and the stored-settings action
 */
export function useSharedMtfPreferences(): [
  MtfPreferences,
  (patch: Partial<MtfPreferences>) => void,
  boolean,
  () => void,
] {
  const [stored, updateStored] = useMtfPreferences();
  const search = useSyncExternalStore(subscribe, getSearch, getServerSearch);
  const shared = useMemo(() => parseSharedMtfSettings(search), [search]);
  const update = (patch: Partial<MtfPreferences>) => {
    if (shared) replaceSettings({ ...shared, ...patch });
    // Only the control the reader changes becomes a preference; other shared values
    // stay visit-only. "Use my settings" resumes their saved choices without saving the link.
    updateStored(patch);
  };
  return [shared ?? stored, update, shared !== null, () => replaceSettings(null)];
}
