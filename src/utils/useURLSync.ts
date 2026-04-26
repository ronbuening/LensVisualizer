/**
 * Centralizes all URL synchronization for LensViewer:
 *
 * 1. Immediate URL update on lens selection change
 * 2. Debounced URL update on slider pointer-up
 * 3. One-time zoom initialization from URL after lens builds
 */

import { useEffect, useRef, useMemo, useCallback, type Dispatch } from "react";
import { buildComparisonURL, focalLengthToZoomT, zoomTToFocalLength } from "./parseComparisonParams.js";
import { buildLensViewQuery, lensViewQueryToUrlState, parseLensViewQuery } from "./lensViewUrlState.js";
import { LENS_CATALOG } from "./lensCatalog.js";
import { APPLY_URL_VIEW_STATE, SET_ZOOM_T, SET_SHARED_ZOOM_T } from "./lensReducer.js";
import type { LensState, LensAction } from "../types/state.js";
import type { RuntimeLens } from "../types/optics.js";
import type { ZoomConvertibleLens } from "./zoomConversion.js";

interface ComparisonLenses {
  LA: RuntimeLens;
  LB: RuntimeLens;
  error?: undefined;
}

interface ComparisonError {
  error: unknown;
}

type ComparisonLensesParam = ComparisonLenses | ComparisonError | null;

interface UseURLSyncResult {
  updateURLWithSliders: () => void;
}

function getComparisonZoomLens(comparisonLenses: ComparisonLensesParam): ZoomConvertibleLens | null {
  if (!comparisonLenses || comparisonLenses.error) return null;
  const { LA, LB } = comparisonLenses as ComparisonLenses;
  return LA.isZoom ? LA : LB.isZoom ? LB : null;
}

function getCatalogZoomLens(lensKey: string): ZoomConvertibleLens | null {
  const lensData = LENS_CATALOG[lensKey];
  if (!lensData || !Array.isArray(lensData.zoomPositions) || lensData.zoomPositions.length < 2) return null;
  return {
    isZoom: true,
    zoomPositions: lensData.zoomPositions,
  };
}

function buildRouteSearch(state: LensState, comparisonLenses: ComparisonLensesParam, isComparePage?: boolean): string {
  const { lens, sliders, sharedSliders, panels } = state;
  const { comparing, lensKeyA } = lens;
  const { focusT, zoomT, stopdownT } = sliders;
  const { sharedFocusT, sharedStopdownT, sharedZoomT } = sharedSliders;
  const zoomLens = comparing ? getComparisonZoomLens(comparisonLenses) : getCatalogZoomLens(lensKeyA);
  const zoom =
    zoomLens && (comparing ? sharedZoomT : zoomT) > 0
      ? zoomTToFocalLength(comparing ? sharedZoomT : zoomT, zoomLens)
      : zoomLens
        ? null
        : parseLensViewQuery(window.location.search).zoom;
  const params = buildLensViewQuery({
    comparing,
    focus: comparing ? sharedFocusT : focusT,
    aperture: comparing ? sharedStopdownT : stopdownT,
    zoom,
    selectedElementId: panels.selectedElementId,
    selectedElementIdA: panels.selectedElementIdA,
    selectedElementIdB: panels.selectedElementIdB,
    glassMapOpen: panels.glassMapOpen,
    bokehPreviewOpen: panels.bokehPreviewOpen,
    analysisDrawerOpen: panels.analysisDrawerOpen,
    analysisDrawerTab: panels.analysisDrawerTab,
  });

  if (isComparePage && !comparing) {
    params.delete("a_el");
    params.delete("b_el");
  }
  const search = params.toString();
  return search ? `?${search}` : "";
}

function buildRouteUrl(state: LensState, comparisonLenses: ComparisonLensesParam, isComparePage?: boolean): string {
  const search = buildRouteSearch(state, comparisonLenses, isComparePage);
  return `${window.location.pathname}${search}`;
}

export default function useURLSync(
  state: LensState,
  dispatch: Dispatch<LensAction>,
  comparisonLenses: ComparisonLensesParam,
  isLensPage?: boolean,
  isComparePage?: boolean,
): UseURLSyncResult {
  const { lens, sliders, sharedSliders } = state;
  const { comparing, lensKeyA, lensKeyB } = lens;
  const { focusT, zoomT, stopdownT } = sliders;
  const { sharedFocusT, sharedStopdownT, sharedZoomT } = sharedSliders;

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
      const zoom = parsed.zoom;
      if (zoom == null) {
        dispatch({ type: comparing ? SET_SHARED_ZOOM_T : SET_ZOOM_T, value: 0 });
        return;
      }
      if (comparing) {
        const zoomLens = getComparisonZoomLens(comparisonLenses);
        if (zoomLens) dispatch({ type: SET_SHARED_ZOOM_T, value: focalLengthToZoomT(zoom, zoomLens) });
      } else {
        const zoomLens = getCatalogZoomLens(lensKeyA);
        if (zoomLens) dispatch({ type: SET_ZOOM_T, value: focalLengthToZoomT(zoom, zoomLens) });
      }
    },
    [comparisonLenses, comparing, dispatch, lensKeyA],
  );

  /* ── 1. Immediate URL update on lens selection change ── */
  useEffect(() => {
    // On lens pages in single-lens mode, navigation is handled by LensViewer via React Router
    if (isLensPage && !comparing) return;
    // On compare pages, navigation is handled by LensViewer via React Router
    if (isComparePage) return;
    const url = buildComparisonURL(comparing, lensKeyA, lensKeyB);
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
    const url = buildRouteUrl(stateRef.current, comparisonLenses, isComparePage);
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
    const zoomLens = getComparisonZoomLens(comparisonLenses);
    if (zoomLens) {
      dispatch({ type: SET_SHARED_ZOOM_T, value: focalLengthToZoomT(urlZoom, zoomLens) });
    }
    urlZoomInitialized.current = true;
  }, [comparisonLenses, comparing, urlZoom, dispatch]);

  /* ── 3b. Zoom init — single-lens mode ── */
  useEffect(() => {
    if (urlZoomInitialized.current || urlZoom == null || comparing) return;
    const zoomLens = getCatalogZoomLens(lensKeyA);
    if (zoomLens) {
      dispatch({ type: SET_ZOOM_T, value: focalLengthToZoomT(urlZoom, zoomLens) });
    }
    urlZoomInitialized.current = true;
  }, [lensKeyA, comparing, urlZoom, dispatch]);

  /* ── 2. Debounced slider URL update ──
   * Uses a ref-based approach: the callback reads current values from
   * its closure, and is recreated when deps change. The 300ms debounce
   * timer prevents excessive history.replaceState calls. */
  const updateURLWithSliders = useCallback((): void => {
    if (urlUpdateTimer.current != null) clearTimeout(urlUpdateTimer.current);
    urlUpdateTimer.current = setTimeout(() => {
      const sliderState: { zoom?: number | null; focus?: number; aperture?: number } = {};
      if (comparing) {
        if (sharedFocusT > 0) sliderState.focus = sharedFocusT;
        if (sharedStopdownT > 0) sliderState.aperture = sharedStopdownT;
        const zoomLens = getComparisonZoomLens(comparisonLenses);
        if (zoomLens && sharedZoomT > 0) {
          sliderState.zoom = zoomTToFocalLength(sharedZoomT, zoomLens);
        }
      } else {
        if (focusT > 0) sliderState.focus = focusT;
        if (stopdownT > 0) sliderState.aperture = stopdownT;
        const zoomLens = getCatalogZoomLens(lensKeyA);
        if (zoomLens && zoomT > 0) {
          sliderState.zoom = zoomTToFocalLength(zoomT, zoomLens);
        }
      }
      if ((isLensPage && !comparing) || isComparePage) {
        // On lens/compare pages, only encode query params — the pathname already has the lens key(s)
        const url = buildRouteUrl(stateRef.current, comparisonLenses, isComparePage);
        if (url !== window.location.pathname + window.location.search) history.replaceState(null, "", url);
      } else {
        const currentState = stateRef.current;
        const viewParams = buildLensViewQuery({
          comparing,
          ...sliderState,
          selectedElementId: currentState.panels.selectedElementId,
          selectedElementIdA: currentState.panels.selectedElementIdA,
          selectedElementIdB: currentState.panels.selectedElementIdB,
          glassMapOpen: currentState.panels.glassMapOpen,
          bokehPreviewOpen: currentState.panels.bokehPreviewOpen,
          analysisDrawerOpen: currentState.panels.analysisDrawerOpen,
          analysisDrawerTab: currentState.panels.analysisDrawerTab,
        });
        const baseUrl = buildComparisonURL(comparing, lensKeyA, lensKeyB);
        const suffix = viewParams.toString();
        const url = suffix ? `${baseUrl}${baseUrl ? "&" : "?"}${suffix}` : baseUrl;
        const current = window.location.search;
        if (url !== current) {
          history.replaceState(null, "", url || window.location.pathname);
        }
      }
    }, 300);
  }, [
    comparing,
    lensKeyA,
    lensKeyB,
    focusT,
    stopdownT,
    zoomT,
    sharedFocusT,
    sharedStopdownT,
    sharedZoomT,
    comparisonLenses,
    isLensPage,
    isComparePage,
  ]);

  return { updateURLWithSliders };
}
