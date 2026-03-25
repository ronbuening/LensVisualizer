/**
 * Centralizes all URL synchronization for LensViewer:
 *
 * 1. Immediate URL update on lens selection change
 * 2. Debounced URL update on slider pointer-up
 * 3. One-time zoom initialization from URL after lens builds
 */

import { useEffect, useRef, useMemo, useCallback, type Dispatch } from "react";
import { buildComparisonURL, focalLengthToZoomT, zoomTToFocalLength } from "./parseComparisonParams.js";
import buildLens from "../optics/buildLens.js";
import { LENS_CATALOG } from "./lensCatalog.js";
import { SET_ZOOM_T, SET_SHARED_ZOOM_T } from "./lensReducer.js";
import type { LensState, LensAction } from "../types/state.js";
import type { RuntimeLens } from "../types/optics.js";

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

export default function useURLSync(
  state: LensState,
  dispatch: Dispatch<LensAction>,
  comparisonLenses: ComparisonLensesParam,
  isLensPage?: boolean,
): UseURLSyncResult {
  const { lens, sliders, sharedSliders } = state;
  const { comparing, lensKeyA, lensKeyB } = lens;
  const { focusT, zoomT, stopdownT } = sliders;
  const { sharedFocusT, sharedStopdownT, sharedZoomT } = sharedSliders;

  /* ── Refs ── */
  const urlUpdateTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const urlZoomInitialized = useRef<boolean>(false);

  /* ── Parse zoom from URL once ── */
  const urlZoom = useMemo((): number | null => {
    if (typeof window === "undefined") return null;
    const zoom = parseFloat(new URLSearchParams(window.location.search).get("zoom")!);
    return isFinite(zoom) && zoom > 0 ? zoom : null;
  }, []);

  /* ── 1. Immediate URL update on lens selection change ── */
  useEffect(() => {
    // On lens pages in single-lens mode, navigation is handled by LensViewer via React Router
    if (isLensPage && !comparing) return;
    const url = buildComparisonURL(comparing, lensKeyA, lensKeyB);
    const current = window.location.search;
    if (url !== current) {
      history.replaceState(null, "", url || window.location.pathname);
    }
  }, [comparing, lensKeyA, lensKeyB, isLensPage]);

  /* ── 3a. Zoom init — comparison mode ── */
  useEffect(() => {
    if (urlZoomInitialized.current || urlZoom == null) return;
    if (comparing && comparisonLenses && !comparisonLenses.error) {
      const { LA, LB } = comparisonLenses as ComparisonLenses;
      const zoomLens = LA.isZoom ? LA : LB.isZoom ? LB : null;
      if (zoomLens) {
        dispatch({ type: SET_SHARED_ZOOM_T, value: focalLengthToZoomT(urlZoom, zoomLens) });
      }
      urlZoomInitialized.current = true;
    }
  }, [comparisonLenses, comparing, urlZoom, dispatch]);

  /* ── 3b. Zoom init — single-lens mode ── */
  const singleLensForZoomInit = useMemo((): RuntimeLens | null => {
    if (comparing || urlZoomInitialized.current || urlZoom == null) return null;
    try {
      return buildLens(LENS_CATALOG[lensKeyA]);
    } catch {
      return null;
    }
  }, [lensKeyA, comparing, urlZoom]);

  useEffect(() => {
    if (urlZoomInitialized.current || urlZoom == null || !singleLensForZoomInit) return;
    if (singleLensForZoomInit.isZoom) {
      dispatch({ type: SET_ZOOM_T, value: focalLengthToZoomT(urlZoom, singleLensForZoomInit) });
    }
    urlZoomInitialized.current = true;
  }, [singleLensForZoomInit, urlZoom, dispatch]);

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
        if (comparisonLenses && !comparisonLenses.error) {
          const { LA, LB } = comparisonLenses as ComparisonLenses;
          const zoomLens = LA.isZoom ? LA : LB.isZoom ? LB : null;
          if (zoomLens && sharedZoomT > 0) {
            sliderState.zoom = zoomTToFocalLength(sharedZoomT, zoomLens);
          }
        }
      } else {
        if (focusT > 0) sliderState.focus = focusT;
        if (stopdownT > 0) sliderState.aperture = stopdownT;
        try {
          const L = buildLens(LENS_CATALOG[lensKeyA]);
          if (L.isZoom && zoomT > 0) {
            sliderState.zoom = zoomTToFocalLength(zoomT, L);
          }
        } catch {
          /* ignore */
        }
      }
      if (isLensPage && !comparing) {
        // On lens pages, only encode slider params — the pathname already has the lens key
        const params = new URLSearchParams();
        if (sliderState.zoom != null && sliderState.zoom > 0) params.set("zoom", String(sliderState.zoom));
        if (sliderState.focus != null && sliderState.focus > 0) params.set("focus", sliderState.focus.toFixed(3));
        if (sliderState.aperture != null && sliderState.aperture > 0)
          params.set("aperture", sliderState.aperture.toFixed(3));
        const search = params.toString() ? `?${params.toString()}` : "";
        if (search !== window.location.search) {
          history.replaceState(null, "", window.location.pathname + search);
        }
      } else {
        const url = buildComparisonURL(comparing, lensKeyA, lensKeyB, sliderState);
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
  ]);

  return { updateURLWithSliders };
}
