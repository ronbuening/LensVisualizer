/**
 * Centralizes all URL synchronization for LensViewer:
 *
 * 1. Immediate URL update on lens selection change
 * 2. Debounced URL update on slider pointer-up
 * 3. One-time zoom initialization from URL after lens builds
 */

import { useEffect, useRef, useMemo, useCallback, type Dispatch } from "react";
import { lensViewQueryToUrlState, parseLensViewQuery } from "./lensViewUrlState.js";
import { APPLY_URL_VIEW_STATE } from "./lensReducer.js";
import {
  buildLegacyLensIdentityUrl,
  buildLegacyLensViewUrl,
  buildRouteLensViewUrl,
  getCatalogZoomLens,
  getComparisonZoomLens,
  zoomActionFromFocalLength,
  zoomActionFromUrl,
  type ComparisonLensesParam,
} from "./lensViewUrlSync.js";
import type { LensState, LensAction } from "../types/state.js";

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
  const { lens } = state;
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

  const applyUrlViewState = useCallback(
    (search: string): void => {
      const parsed = parseLensViewQuery(search);
      dispatch({ type: APPLY_URL_VIEW_STATE, state: lensViewQueryToUrlState(parsed, true) });
      const zoomAction = zoomActionFromUrl(search, stateRef.current, comparisonLenses);
      if (zoomAction) dispatch(zoomAction);
    },
    [comparisonLenses, dispatch],
  );

  /* ── 1. Immediate URL update on lens selection change ── */
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

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onPopState = () => applyUrlViewState(window.location.search);
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, [applyUrlViewState]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isLensPage && !isComparePage) return;
    const url = buildRouteLensViewUrl(
      stateRef.current,
      comparisonLenses,
      window.location.pathname,
      window.location.search,
      isComparePage,
    );
    if (url !== window.location.pathname + window.location.search) {
      history.replaceState(null, "", url);
    }
  }, [
    comparing,
    state.panels.selectedElementId,
    state.panels.selectedElementIdA,
    state.panels.selectedElementIdB,
    state.panels.glassMapOpen,
    state.panels.bokehPreviewOpen,
    state.panels.analysisDrawerOpen,
    state.panels.analysisDrawerTab,
    comparisonLenses,
    isLensPage,
    isComparePage,
  ]);

  /* ── 3a. Zoom init — comparison mode ── */
  useEffect(() => {
    if (urlZoomInitialized.current || urlZoom == null) return;
    if (!comparing) return;
    if (!getComparisonZoomLens(comparisonLenses)) return;
    const zoomAction = zoomActionFromFocalLength(urlZoom, stateRef.current, comparisonLenses);
    if (zoomAction) dispatch(zoomAction);
    urlZoomInitialized.current = true;
  }, [comparisonLenses, comparing, urlZoom, dispatch]);

  /* ── 3b. Zoom init — single-lens mode ── */
  useEffect(() => {
    if (urlZoomInitialized.current || urlZoom == null || comparing) return;
    if (!getCatalogZoomLens(lensKeyA)) return;
    const zoomAction = zoomActionFromFocalLength(urlZoom, stateRef.current, comparisonLenses);
    if (zoomAction) dispatch(zoomAction);
    urlZoomInitialized.current = true;
  }, [lensKeyA, comparing, urlZoom, dispatch, comparisonLenses]);

  /* ── 2. Debounced slider URL update ──
   * Uses a ref-based approach: the callback reads current values from
   * its closure, and is recreated when deps change. The 300ms debounce
   * timer prevents excessive history.replaceState calls. */
  const updateURLWithSliders = useCallback((): void => {
    if (urlUpdateTimer.current != null) clearTimeout(urlUpdateTimer.current);
    urlUpdateTimer.current = setTimeout(() => {
      if ((isLensPage && !comparing) || isComparePage) {
        // On lens/compare pages, only encode query params — the pathname already has the lens key(s)
        const url = buildRouteLensViewUrl(
          stateRef.current,
          comparisonLenses,
          window.location.pathname,
          window.location.search,
          isComparePage,
        );
        if (url !== window.location.pathname + window.location.search) history.replaceState(null, "", url);
      } else {
        const url = buildLegacyLensViewUrl(stateRef.current, comparisonLenses, window.location.search);
        const current = window.location.search;
        if (url !== current) {
          history.replaceState(null, "", url || window.location.pathname);
        }
      }
    }, 300);
  }, [comparing, comparisonLenses, isLensPage, isComparePage]);

  return { updateURLWithSliders };
}
