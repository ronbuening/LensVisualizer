/**
 * Centralizes all URL synchronization for LensViewer:
 *
 * 1. Immediate URL update on lens selection change
 * 2. Debounced URL update on slider pointer-up
 * 3. One-time zoom initialization from URL after lens builds
 */

import { useEffect, useRef, useMemo, useCallback, type Dispatch } from "react";
import { buildComparisonURL, focalLengthToZoomT, zoomTToFocalLength } from "./parseComparisonParams.js";
import { buildLensViewQueryFromState, lensViewQueryToUrlState, parseLensViewQuery } from "./lensViewUrlState.js";
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

function getStateZoom(state: LensState, comparisonLenses: ComparisonLensesParam): number | null {
  const { lens, sliders, sharedSliders } = state;
  const { comparing, lensKeyA } = lens;
  const { zoomT } = sliders;
  const { sharedZoomT } = sharedSliders;
  const zoomLens = comparing ? getComparisonZoomLens(comparisonLenses) : getCatalogZoomLens(lensKeyA);
  if (!zoomLens) return parseLensViewQuery(window.location.search).zoom ?? null;
  const currentZoomT = comparing ? sharedZoomT : zoomT;
  return currentZoomT > 0 ? zoomTToFocalLength(currentZoomT, zoomLens) : null;
}

function buildViewSearch(state: LensState, comparisonLenses: ComparisonLensesParam, isComparePage?: boolean): string {
  const params = buildLensViewQueryFromState(state, getStateZoom(state, comparisonLenses));
  if (isComparePage && !state.lens.comparing) {
    params.delete("a_el");
    params.delete("b_el");
  }
  const search = params.toString();
  return search ? `?${search}` : "";
}

function buildRouteUrl(state: LensState, comparisonLenses: ComparisonLensesParam, isComparePage?: boolean): string {
  const search = buildViewSearch(state, comparisonLenses, isComparePage);
  return `${window.location.pathname}${search}`;
}

function buildLegacyUrl(state: LensState, comparisonLenses: ComparisonLensesParam): string {
  const baseUrl = buildComparisonURL(state.lens.comparing, state.lens.lensKeyA, state.lens.lensKeyB);
  const suffix = buildViewSearch(state, comparisonLenses).slice(1);
  return suffix ? `${baseUrl}${baseUrl ? "&" : "?"}${suffix}` : baseUrl;
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
      if ((isLensPage && !comparing) || isComparePage) {
        // On lens/compare pages, only encode query params — the pathname already has the lens key(s)
        const url = buildRouteUrl(stateRef.current, comparisonLenses, isComparePage);
        if (url !== window.location.pathname + window.location.search) history.replaceState(null, "", url);
      } else {
        const url = buildLegacyUrl(stateRef.current, comparisonLenses);
        const current = window.location.search;
        if (url !== current) {
          history.replaceState(null, "", url || window.location.pathname);
        }
      }
    }, 300);
  }, [comparing, comparisonLenses, isLensPage, isComparePage]);

  return { updateURLWithSliders };
}
