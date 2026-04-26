/**
 * Centralizes all URL synchronization for LensViewer:
 *
 * 1. Immediate URL update on lens-identity change (legacy ?a=/?b=/?lens= surface).
 * 2. Single 100 ms-debounced URL writer for all v1 view state — sliders,
 *    selected element(s), glass map, bokeh, analysis drawer, tab.
 * 3. One-time zoom initialization from the URL after the lens(es) build.
 * 4. `popstate` hydration: parses the search string and dispatches
 *    APPLY_URL_VIEW_STATE so back/forward navigation restores view state.
 */

import { useEffect, useRef, useMemo, useCallback, type Dispatch } from "react";
import { lensViewQueryToUrlState, parseLensViewQuery } from "./lensViewUrlState.js";
import { APPLY_URL_VIEW_STATE } from "./lensReducer.js";
import {
  buildLegacyLensIdentityUrl,
  buildLegacyLensViewUrl,
  buildRouteLensViewUrl,
  zoomActionFromFocalLength,
  type ComparisonLensesParam,
} from "./lensViewUrlSync.js";
import type { LensState, LensAction } from "../types/state.js";

const URL_UPDATE_DEBOUNCE_MS = 100;

interface UseURLSyncResult {
  updateURLWithSliders: () => void;
}

export default function useURLSync(
  state: LensState,
  dispatch: Dispatch<LensAction>,
  comparisonLenses: ComparisonLensesParam,
  isLensPage?: boolean,
  isComparePage?: boolean,
): UseURLSyncResult {
  const { lens, panels } = state;
  const { comparing, lensKeyA, lensKeyB } = lens;

  /* ── Refs ── */
  const urlUpdateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const urlZoomInitialized = useRef<boolean>(false);
  const stateRef = useRef(state);

  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  /* ── Parse zoom from URL once ── */
  const urlZoom = useMemo((): number | null => {
    if (typeof window === "undefined") return null;
    return parseLensViewQuery(window.location.search).zoom ?? null;
  }, []);

  /* ── 1. Debounced URL writer covering all v1 view state ──
   * Single source of writes. Reads fresh state via stateRef so the
   * callback identity stays stable across slider/panel changes. */
  const updateURLWithSliders = useCallback((): void => {
    if (urlUpdateTimer.current != null) clearTimeout(urlUpdateTimer.current);
    urlUpdateTimer.current = setTimeout(() => {
      const fresh = stateRef.current;
      if ((isLensPage && !fresh.lens.comparing) || isComparePage) {
        const url = buildRouteLensViewUrl(
          fresh,
          comparisonLenses,
          window.location.pathname,
          window.location.search,
          isComparePage,
        );
        if (url !== window.location.pathname + window.location.search) history.replaceState(null, "", url);
      } else {
        const url = buildLegacyLensViewUrl(fresh, comparisonLenses, window.location.search);
        const current = window.location.search;
        if (url !== current) {
          history.replaceState(null, "", url || window.location.pathname);
        }
      }
    }, URL_UPDATE_DEBOUNCE_MS);
  }, [comparisonLenses, isLensPage, isComparePage]);

  /* ── 2. popstate hydration ── */
  const applyUrlViewState = useCallback(
    (search: string): void => {
      const parsed = parseLensViewQuery(search);
      dispatch({ type: APPLY_URL_VIEW_STATE, state: lensViewQueryToUrlState(parsed, true) });
      const zoomAction = zoomActionFromFocalLength(parsed.zoom ?? null, stateRef.current, comparisonLenses);
      if (zoomAction) dispatch(zoomAction);
    },
    [comparisonLenses, dispatch],
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onPopState = () => applyUrlViewState(window.location.search);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [applyUrlViewState]);

  /* ── 3. Immediate URL update on lens-identity change (legacy surface) ── */
  useEffect(() => {
    // On lens pages in single-lens mode, navigation is handled by LensViewer via React Router
    if (isLensPage && !comparing) return;
    // On compare pages, navigation is handled by LensViewer via React Router
    if (isComparePage) return;
    const url = buildLegacyLensIdentityUrl(stateRef.current);
    const current = window.location.search;
    if (url !== current) {
      history.replaceState(null, "", url || window.location.pathname);
    }
  }, [comparing, lensKeyA, lensKeyB, isLensPage, isComparePage]);

  /* ── 4. View-state URL update — schedules through the same debounced writer ── */
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isLensPage && !isComparePage) return;
    updateURLWithSliders();
  }, [
    comparing,
    panels.selectedElementId,
    panels.selectedElementIdA,
    panels.selectedElementIdB,
    panels.glassMapOpen,
    panels.bokehPreviewOpen,
    panels.analysisDrawerOpen,
    panels.analysisDrawerTab,
    isLensPage,
    isComparePage,
    updateURLWithSliders,
  ]);

  /* ── 5. One-time zoom initialization from URL ──
   * Runs once the lens (or zoom-aware lens in comparison) has loaded;
   * `zoomActionFromFocalLength` returns null until a zoom-convertible
   * lens is available, which acts as the readiness gate. */
  useEffect(() => {
    if (urlZoomInitialized.current || urlZoom == null) return;
    const action = zoomActionFromFocalLength(urlZoom, stateRef.current, comparisonLenses);
    if (!action) return;
    dispatch(action);
    urlZoomInitialized.current = true;
  }, [urlZoom, comparing, lensKeyA, comparisonLenses, dispatch]);

  return { updateURLWithSliders };
}
