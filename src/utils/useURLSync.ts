/**
 * Centralizes all URL synchronization for LensViewer:
 *
 * 1. Immediate URL update on lens selection change
 * 2. Debounced URL update on slider pointer-up
 * 3. One-time zoom initialization from URL after lens builds
 */

import { useEffect, useRef, useMemo, useCallback, type Dispatch } from "react";
import {
  buildComparisonURL,
  encodeAnalysisViewParams,
  encodeSliderParams,
  focalLengthToZoomT,
  zoomTToFocalLength,
} from "./parseComparisonParams.js";
import { LENS_CATALOG } from "./lensCatalog.js";
import { SET_ZOOM_T, SET_SHARED_ZOOM_T } from "./lensReducer.js";
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

interface SliderURLState {
  zoom?: number | null;
  focus?: number;
  aperture?: number;
}

interface ShareURLState {
  analysisDrawerOpen: boolean;
  analysisDrawerTab: string;
  glassMapOpen: boolean;
  bokehPreviewOpen: boolean;
  selectedElementA: number | null;
  selectedElementB: number | null;
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

function mapSingleLensElementParam(params: URLSearchParams): void {
  const singleElement = params.get("ael");
  if (singleElement) {
    params.delete("ael");
    params.set("el", singleElement);
  }
  params.delete("bel");
}

export default function useURLSync(
  state: LensState,
  dispatch: Dispatch<LensAction>,
  comparisonLenses: ComparisonLensesParam,
  isLensPage?: boolean,
  isComparePage?: boolean,
): UseURLSyncResult {
  const { lens, sliders, sharedSliders, panels } = state;
  const { comparing, lensKeyA, lensKeyB } = lens;
  const { focusT, zoomT, stopdownT } = sliders;
  const { sharedFocusT, sharedStopdownT, sharedZoomT } = sharedSliders;
  const { analysisDrawerOpen, analysisDrawerTab, glassMapOpen, bokehPreviewOpen, selectedElementA, selectedElementB } =
    panels;

  const isPathBasedRoute = (isLensPage && !comparing) || isComparePage;

  const buildShareState = useCallback(
    (): ShareURLState => ({
      analysisDrawerOpen,
      analysisDrawerTab,
      glassMapOpen,
      bokehPreviewOpen,
      selectedElementA,
      selectedElementB: comparing ? selectedElementB : null,
    }),
    [
      analysisDrawerOpen,
      analysisDrawerTab,
      glassMapOpen,
      bokehPreviewOpen,
      selectedElementA,
      selectedElementB,
      comparing,
    ],
  );

  const buildSliderState = useCallback(
    (includeZoom: boolean): SliderURLState => {
      const next: SliderURLState = {};
      if (comparing) {
        if (sharedFocusT > 0) next.focus = sharedFocusT;
        if (sharedStopdownT > 0) next.aperture = sharedStopdownT;
        if (includeZoom && sharedZoomT > 0) {
          const zoomLens = getComparisonZoomLens(comparisonLenses);
          if (zoomLens) next.zoom = zoomTToFocalLength(sharedZoomT, zoomLens);
        }
      } else {
        if (focusT > 0) next.focus = focusT;
        if (stopdownT > 0) next.aperture = stopdownT;
        if (includeZoom && zoomT > 0) {
          const zoomLens = getCatalogZoomLens(lensKeyA);
          if (zoomLens) next.zoom = zoomTToFocalLength(zoomT, zoomLens);
        }
      }
      return next;
    },
    [comparing, sharedFocusT, sharedStopdownT, sharedZoomT, comparisonLenses, focusT, stopdownT, zoomT, lensKeyA],
  );

  const buildSearchForPathRoute = useCallback(
    (sliderState: SliderURLState, shareState: ShareURLState): string => {
      const params = encodeSliderParams(sliderState);
      const viewParams = encodeAnalysisViewParams(shareState);
      viewParams.forEach((value, key) => params.set(key, value));
      if (!comparing) mapSingleLensElementParam(params);
      return params.toString() ? `?${params.toString()}` : "";
    },
    [comparing],
  );

  const syncURL = useCallback(
    (sliderState: SliderURLState, shareState: ShareURLState): void => {
      if (isPathBasedRoute) {
        const search = buildSearchForPathRoute(sliderState, shareState);
        if (search !== window.location.search) {
          history.replaceState(null, "", window.location.pathname + search);
        }
        return;
      }
      const url = buildComparisonURL(comparing, lensKeyA, lensKeyB, { ...sliderState, ...shareState });
      if (url !== window.location.search) {
        history.replaceState(null, "", url || window.location.pathname);
      }
    },
    [isPathBasedRoute, buildSearchForPathRoute, comparing, lensKeyA, lensKeyB],
  );

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
    // On compare pages, navigation is handled by LensViewer via React Router
    if (isComparePage) return;
    const url = buildComparisonURL(comparing, lensKeyA, lensKeyB);
    const current = window.location.search;
    if (url !== current) {
      history.replaceState(null, "", url || window.location.pathname);
    }
  }, [comparing, lensKeyA, lensKeyB, isLensPage, isComparePage]);

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
      const sliderState = buildSliderState(true);
      const shareState = buildShareState();
      syncURL(sliderState, shareState);
    }, 300);
  }, [buildSliderState, buildShareState, syncURL]);

  useEffect(() => {
    const sliderState = buildSliderState(false);
    const shareState = buildShareState();
    syncURL(sliderState, shareState);
  }, [buildSliderState, buildShareState, syncURL]);

  return { updateURLWithSliders };
}
