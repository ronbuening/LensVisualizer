/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           INTERACTIVE LENS CROSS-SECTION VISUALIZATION             ║
 * ║                      — Orchestration Layer —                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Diagram rendering lives in LensDiagramPanel.  This file handles   ║
 * ║  top bar, comparison mode, shared controls, view toggles, overlays,║
 * ║  and localStorage persistence.                                     ║
 * ║                                                                    ║
 * ║  Features:                                                         ║
 * ║    • Side-by-side lens comparison (desktop) / stacked (mobile)     ║
 * ║    • Independent + normalized scale modes                          ║
 * ║    • URL deep links (?a=&b= for comparison, ?lens= for single)    ║
 * ║    • Shared controls bar in comparison mode                        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

import { useState, useMemo, useCallback, useEffect, useRef } from "react";

import T from "../utils/themes.js";
import buildLens from "../optics/buildLens.js";
import { LENS_CATALOG, CATALOG_KEYS, mdForKey } from "../utils/lensCatalog.js";
import LensDiagramPanel from "./LensDiagramPanel.jsx";
import DescriptionPanel from "./DescriptionPanel.jsx";
import SharedSlidersBar from "./SharedSlidersBar.jsx";
import { PREFS_KEY } from "../utils/preferences.js";
import { buildComparisonURL, focalLengthToZoomT, zoomTToFocalLength } from "../utils/parseComparisonParams.js";
import {
  ENABLE_COLOR_TRACING,
  ENABLE_ANALYSIS_VIEW,
  ENABLE_DESKTOP_VIEW_TOGGLE,
  ENABLE_DIAGRAM_ONLY,
  ENABLE_ANALYSIS_ONLY,
  ENABLE_COMPARISON,
  ENABLE_COMPARISON_MOBILE,
  ENABLE_SLIDER_STICKY,
  ENABLE_SLIDER_STICKY_FLASH,
  ENABLE_DYNAMIC_DIAGRAM_HEIGHT,
  ENABLE_EDGE_PROJECTION,
  ENABLE_SIDE_PANEL_LAYOUT,
  ENABLE_MOBILE_CONTROLS_STRIP,
} from "../utils/featureFlags.js";
import { computeFocusPair, computeAperturePair, computeZoomPair, snapToCommon } from "../utils/comparisonSliders.js";
import { ErrorDisplay } from "./ErrorBoundary.jsx";
import ABOUT_ME_MD from "../content/AboutMe.md?raw";
import ABOUT_SITE_MD from "../content/AboutSite.md?raw";
import useLensState from "../utils/useLensState.js";
import {
  SET_LENS_A,
  SET_LENS_B,
  SET_SCALE_MODE,
  SET_DARK,
  SET_HIGH_CONTRAST,
  SET_MOBILE_VIEW,
  SET_DESKTOP_VIEW,
  SET_RAY_TOGGLE,
  SET_FOCUS_T,
  SET_ZOOM_T,
  SET_STOPDOWN_T,
  SET_SHARED_FOCUS_T,
  SET_SHARED_STOPDOWN_T,
  SET_SHARED_ZOOM_T,
  SET_PANEL_EXPANDED,
  SET_OVERLAY,
  CLOSE_ALL_OVERLAYS,
  ENTER_COMPARE,
  EXIT_COMPARE,
} from "../utils/lensReducer.js";

/* =====================================================================
 * §1  HOISTED STYLES — static style objects extracted from render
 * ===================================================================== */
const TOGGLE_GROUP_BASE = {
  display: "flex",
  gap: 0,
  borderRadius: 5,
  overflow: "hidden",
};

const OVERLAY_BACKDROP = {
  position: "fixed",
  inset: 0,
  zIndex: 9999,
  background: "rgba(0,0,0,0.5)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.2s",
};

const OVERLAY_MODAL_BASE = {
  borderRadius: 10,
  maxWidth: 480,
  width: "90%",
  maxHeight: "70vh",
  overflowY: "auto",
  position: "relative",
  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
};

const CLOSE_BTN_BASE = {
  position: "sticky",
  top: 0,
  float: "right",
  margin: "10px 10px 0 0",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: 18,
  fontFamily: "inherit",
  lineHeight: 1,
  padding: "2px 6px",
  borderRadius: 4,
  zIndex: 1,
};

/* =====================================================================
 * §2  COMPONENT — State, effects, and orchestration logic
 * =====================================================================
 *
 *  Diagram rendering delegated to LensDiagramPanel.  This component
 *  handles orchestration, comparison mode, shared controls, and chrome.
 * ------------------------------------------------------------------- */

export default function LensVisualization() {
  const [state, dispatch, isWide] = useLensState(CATALOG_KEYS);

  /* ── Destructure state slices for convenient access ── */
  const { lens, display, rays, sliders, sharedSliders, panels, overlays } = state;
  const { lensKeyA, lensKeyB, comparing, scaleMode } = lens;
  const { dark, highContrast, mobileView, desktopView } = display;
  const { showOnAxis, showOffAxis, rayTracksF, showChromatic, chromR, chromG, chromB } = rays;
  const { focusT, zoomT, stopdownT } = sliders;
  const { sharedFocusT, sharedStopdownT, sharedZoomT } = sharedSliders;
  const { focusExpanded, apertureExpanded, headerControlsExpanded, legendExpanded, headerInfoExpanded } = panels;
  const { showAbout, showAboutSite } = overlays;

  /* ── Comparison mode header height alignment ── */
  const [headerHeights, setHeaderHeights] = useState({ a: 0, b: 0 });
  const justEnteredCompare = useRef(false);

  /* ── Sticky slider state (slider pauses at common-point demarcation lines) ──
   * State machine for each shared slider (focus and aperture):
   *
   *   Normal → slider moves freely, prevT tracks position
   *   Stuck  → slider crossed or reached the common point (CP);
   *            all movement is rejected and value is held at CP.
   *            A brief flash highlights which panel hit its limit.
   *   Released → on next pointerDown, stuck is cleared and slider
   *             continues moving freely from wherever the user drags.
   *
   * This gives haptic-like feedback: the slider "catches" at the point
   * where one lens reaches its limit, then releases on the next drag. */
  const focusStuck = useRef(false);
  const apertureStuck = useRef(false);
  const prevFocusT = useRef(0);
  const prevStopdownT = useRef(0);
  const [flashPanel, setFlashPanel] = useState(null); // 'a' | 'b' | null

  /* ── Persist preferences ── */
  useEffect(() => {
    try {
      localStorage.setItem(
        PREFS_KEY,
        JSON.stringify({
          v: 2,
          dark,
          highContrast,
          lensKeyA,
          lensKeyB,
          comparing,
          scaleMode,
          showOnAxis,
          showOffAxis,
          rayTracksF,
          showChromatic,
          chromR,
          chromG,
          chromB,
          desktopView,
          focusExpanded,
          apertureExpanded,
          headerControlsExpanded,
          legendExpanded,
          headerInfoExpanded,
        }),
      );
    } catch {
      /* private browsing or quota — ignore */
    }
  }, [
    dark,
    highContrast,
    lensKeyA,
    lensKeyB,
    comparing,
    scaleMode,
    showOnAxis,
    showOffAxis,
    rayTracksF,
    showChromatic,
    chromR,
    chromG,
    chromB,
    desktopView,
    focusExpanded,
    apertureExpanded,
    headerControlsExpanded,
    legendExpanded,
    headerInfoExpanded,
  ]);

  /* ── URL update refs ── */
  const urlUpdateTimer = useRef(null);
  const urlZoomInitialized = useRef(false);

  /* ── URL state for zoom initialization (parsed once) ── */
  const urlState = useMemo(() => {
    if (typeof window === "undefined") return {};
    const params = new URLSearchParams(window.location.search);
    const zoom = parseFloat(params.get("zoom"));
    return { zoom: isFinite(zoom) && zoom > 0 ? zoom : null };
  }, []);

  /* ── Update URL immediately on lens selection change ── */
  useEffect(() => {
    const url = buildComparisonURL(comparing, lensKeyA, lensKeyB);
    const current = window.location.search;
    if (url !== current) {
      history.replaceState(null, "", url || window.location.pathname);
    }
  }, [comparing, lensKeyA, lensKeyB]);

  /* ── Escape key closes overlays ── */
  useEffect(() => {
    if (!showAbout && !showAboutSite) return;
    const handleKey = (e) => {
      if (e.key === "Escape") dispatch({ type: CLOSE_ALL_OVERLAYS });
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showAbout, showAboutSite, dispatch]);

  const markdown = useMemo(() => mdForKey(lensKeyA), [lensKeyA]);

  const desktopViewOptions = useMemo(() => {
    if (!ENABLE_DESKTOP_VIEW_TOGGLE) return [];
    const opts = [];
    if (ENABLE_DIAGRAM_ONLY) opts.push({ label: "DIAGRAM", val: "diagram" });
    if (ENABLE_ANALYSIS_VIEW) opts.push({ label: "BOTH", val: "both" });
    if (ENABLE_ANALYSIS_VIEW && ENABLE_ANALYSIS_ONLY) opts.push({ label: "ANALYSIS", val: "analysis" });
    return opts;
  }, []);
  const defaultDesktopView = ENABLE_ANALYSIS_VIEW ? "both" : "diagram";
  const effectiveDesktopView = desktopViewOptions.some((o) => o.val === desktopView) ? desktopView : defaultDesktopView;
  const showDesktopToggle = isWide && !comparing && desktopViewOptions.length > 1;

  /* Theme selection: 2×2 matrix of dark/light × normal/high-contrast */
  const t = T[dark ? (highContrast ? "darkHC" : "dark") : highContrast ? "lightHC" : "light"];

  /* ── Lens switching (single-lens mode resets sliders, comparison mode does not) ── */
  const switchLensA = useCallback(
    (key) => {
      dispatch({ type: SET_LENS_A, key });
    },
    [dispatch],
  );

  const switchLensB = useCallback(
    (key) => {
      dispatch({ type: SET_LENS_B, key });
    },
    [dispatch],
  );

  /* ── Build both lenses for comparison computations ──
   * Built eagerly when comparison mode is active so we can compute
   * shared slider mappings (focus/aperture/zoom pairs). Both lenses
   * are also needed for normalized scale ratios. */
  const comparisonLenses = useMemo(() => {
    if (!comparing) return null;
    try {
      return { LA: buildLens(LENS_CATALOG[lensKeyA]), LB: buildLens(LENS_CATALOG[lensKeyB]) };
    } catch (e) {
      return { error: e, failedKeys: `${lensKeyA} vs ${lensKeyB}` };
    }
  }, [comparing, lensKeyA, lensKeyB]);

  /* ── Initialize zoomT from URL after lens builds ──
   * URL stores zoom as focal length (mm), but the slider needs zoomT [0..1].
   * Conversion requires a built lens object (for zoomPositions), so this
   * must be deferred until after buildLens succeeds. Uses a ref to ensure
   * one-time initialization — prevents re-triggering on subsequent renders. */
  useEffect(() => {
    if (urlZoomInitialized.current || urlState.zoom == null) return;
    if (comparing && comparisonLenses && !comparisonLenses.error) {
      const { LA, LB } = comparisonLenses;
      const zoomLens = LA.isZoom ? LA : LB.isZoom ? LB : null;
      if (zoomLens) {
        dispatch({ type: SET_SHARED_ZOOM_T, value: focalLengthToZoomT(urlState.zoom, zoomLens) });
      }
      urlZoomInitialized.current = true;
    }
  }, [comparisonLenses, comparing, urlState.zoom, dispatch]);

  /* ── Build a single-lens L for zoom URL initialization ── */
  const singleLensForZoomInit = useMemo(() => {
    if (comparing || urlZoomInitialized.current || urlState.zoom == null) return null;
    try {
      return buildLens(LENS_CATALOG[lensKeyA]);
    } catch {
      return null;
    }
  }, [lensKeyA, comparing, urlState.zoom]);

  useEffect(() => {
    if (urlZoomInitialized.current || urlState.zoom == null || !singleLensForZoomInit) return;
    if (singleLensForZoomInit.isZoom) {
      dispatch({ type: SET_ZOOM_T, value: focalLengthToZoomT(urlState.zoom, singleLensForZoomInit) });
    }
    urlZoomInitialized.current = true;
  }, [singleLensForZoomInit, urlState.zoom, dispatch]);

  /* ── Update URL (sliders on pointer-up with 300ms debounce) ──
   * Updates the browser URL with slider state for deep-linking. Debounced
   * to avoid excessive history.replaceState calls during rapid slider moves.
   * Zoom is stored as focal length (mm) rather than raw zoomT for readability. */
  const updateURLWithSliders = useCallback(() => {
    clearTimeout(urlUpdateTimer.current);
    urlUpdateTimer.current = setTimeout(() => {
      const sliderState = {};
      if (comparing) {
        if (sharedFocusT > 0) sliderState.focus = sharedFocusT;
        if (sharedStopdownT > 0) sliderState.aperture = sharedStopdownT;
        if (comparisonLenses && !comparisonLenses.error) {
          const { LA, LB } = comparisonLenses;
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
      const url = buildComparisonURL(comparing, lensKeyA, lensKeyB, sliderState);
      const current = window.location.search;
      if (url !== current) {
        history.replaceState(null, "", url || window.location.pathname);
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
  ]);

  /* ── Normalized scale computation ──
   * In normalized mode, both panels use the same mm-per-pixel ratio so lens
   * sizes are visually comparable. Each panel's SC is scaled down to match
   * whichever lens has the smaller (more zoomed-out) SC value. */
  const scaleRatios = useMemo(() => {
    if (!comparisonLenses || comparisonLenses.error || scaleMode !== "normalized") return null;
    const { LA, LB } = comparisonLenses;
    const minSC = Math.min(LA.SC, LB.SC);
    return { a: minSC / LA.SC, b: minSC / LB.SC };
  }, [comparisonLenses, scaleMode]);

  /* ── Per-lens focus/aperture from shared sliders ── */
  const focusPair = useMemo(() => {
    if (!comparisonLenses || comparisonLenses.error) return null;
    return computeFocusPair(sharedFocusT, comparisonLenses.LA, comparisonLenses.LB);
  }, [sharedFocusT, comparisonLenses]);

  const aperturePair = useMemo(() => {
    if (!comparisonLenses || comparisonLenses.error) return null;
    return computeAperturePair(sharedStopdownT, comparisonLenses.LA, comparisonLenses.LB);
  }, [sharedStopdownT, comparisonLenses]);

  const zoomPair = useMemo(() => {
    if (!comparisonLenses || comparisonLenses.error) return null;
    return computeZoomPair(sharedZoomT, comparisonLenses.LA, comparisonLenses.LB);
  }, [sharedZoomT, comparisonLenses]);

  /* ── Set default aperture to slowest lens wide-open when entering comparison ── */
  useEffect(() => {
    if (!justEnteredCompare.current || !comparisonLenses || comparisonLenses.error) return;
    justEnteredCompare.current = false;
    const { LA, LB } = comparisonLenses;
    const widerFOPEN = Math.min(LA.FOPEN, LB.FOPEN);
    const narrowerFOPEN = Math.max(LA.FOPEN, LB.FOPEN);
    const sharedMaxFstop = Math.max(LA.maxFstop, LB.maxFstop);
    const cp =
      Math.abs(widerFOPEN - narrowerFOPEN) < 0.01
        ? 0
        : Math.log(narrowerFOPEN / widerFOPEN) / Math.log(sharedMaxFstop / widerFOPEN);
    prevStopdownT.current = cp;
    dispatch({ type: SET_SHARED_STOPDOWN_T, value: cp });
  }, [comparisonLenses, dispatch]);

  /* ── Enter/exit comparison mode ── */
  const toggleCompare = useCallback(() => {
    if (!comparing) {
      dispatch({ type: ENTER_COMPARE, catalogKeys: CATALOG_KEYS });
      prevFocusT.current = 0;
      prevStopdownT.current = 0;
      justEnteredCompare.current = true;
      focusStuck.current = false;
      apertureStuck.current = false;
    } else {
      dispatch({
        type: EXIT_COMPARE,
        focusA: focusPair?.focusA,
        stopdownA: aperturePair?.stopdownA,
      });
    }
  }, [comparing, focusPair, aperturePair, dispatch]);

  /* ── Sticky slider handlers ── */
  const triggerFlash = useCallback((panel) => {
    if (!ENABLE_SLIDER_STICKY_FLASH) return;
    setFlashPanel(panel);
    setTimeout(() => setFlashPanel(null), 400);
  }, []);

  const handleSharedFocusChange = useCallback(
    (rawT) => {
      const cp = focusPair?.commonPoint;
      const stickyActive = ENABLE_SLIDER_STICKY && cp > 0.01 && cp < 0.99;

      /* While stuck, reject all movement — hold at cp until pointerDown clears it */
      if (stickyActive && focusStuck.current) {
        dispatch({ type: SET_SHARED_FOCUS_T, value: cp });
        return;
      }

      if (stickyActive) {
        const prev = prevFocusT.current;
        /* Crossing or reaching the common point from either side */
        if ((prev < cp && rawT >= cp) || (prev > cp && rawT <= cp)) {
          dispatch({ type: SET_SHARED_FOCUS_T, value: cp });
          prevFocusT.current = cp;
          focusStuck.current = true;
          /* The lens with longer MFD (less capable) is the one that stops */
          const { LA, LB } = comparisonLenses;
          triggerFlash(LA.closeFocusM > LB.closeFocusM ? "a" : "b");
          return;
        }
      }
      const v = snapToCommon(rawT, cp);
      prevFocusT.current = v;
      dispatch({ type: SET_SHARED_FOCUS_T, value: v });
    },
    [focusPair, comparisonLenses, triggerFlash, dispatch],
  );

  const handleSharedStopdownChange = useCallback(
    (rawT) => {
      const cp = aperturePair?.commonPoint;
      const stickyActive = ENABLE_SLIDER_STICKY && cp > 0.01 && cp < 0.99;

      if (stickyActive && apertureStuck.current) {
        dispatch({ type: SET_SHARED_STOPDOWN_T, value: cp });
        return;
      }

      if (stickyActive) {
        const prev = prevStopdownT.current;
        if ((prev < cp && rawT >= cp) || (prev > cp && rawT <= cp)) {
          dispatch({ type: SET_SHARED_STOPDOWN_T, value: cp });
          prevStopdownT.current = cp;
          apertureStuck.current = true;
          const { LA, LB } = comparisonLenses;
          triggerFlash(LA.FOPEN > LB.FOPEN ? "a" : "b");
          return;
        }
      }
      const v = snapToCommon(rawT, cp);
      prevStopdownT.current = v;
      dispatch({ type: SET_SHARED_STOPDOWN_T, value: v });
    },
    [aperturePair, comparisonLenses, triggerFlash, dispatch],
  );

  const handleFocusPointerDown = useCallback(() => {
    focusStuck.current = false;
  }, []);

  const handleAperturePointerDown = useCallback(() => {
    apertureStuck.current = false;
  }, []);

  /* ── Header height alignment callback ── */
  const handleHeaderHeight = useCallback((panelId, height) => {
    setHeaderHeights((prev) => (prev[panelId] === height ? prev : { ...prev, [panelId]: height }));
  }, []);
  const maxHeaderHeight = Math.max(headerHeights.a, headerHeights.b);

  /* ── Shared panel props ── */
  const sharedProps = {
    focusT,
    zoomT,
    stopdownT,
    showOnAxis,
    showOffAxis,
    showChromatic,
    chromR,
    chromG,
    chromB,
    rayTracksF,
    theme: t,
    dark,
    highContrast,
    onFocusChange: (v) => dispatch({ type: SET_FOCUS_T, value: v }),
    onZoomChange: (v) => dispatch({ type: SET_ZOOM_T, value: v }),
    onStopdownChange: (v) => dispatch({ type: SET_STOPDOWN_T, value: v }),
    onSliderPointerUp: updateURLWithSliders,
    onShowOnAxisChange: (v) => dispatch({ type: SET_RAY_TOGGLE, field: "showOnAxis", value: v }),
    onShowOffAxisChange: (v) => dispatch({ type: SET_RAY_TOGGLE, field: "showOffAxis", value: v }),
    onRayTracksFChange: (v) => dispatch({ type: SET_RAY_TOGGLE, field: "rayTracksF", value: v }),
    onShowChromaticChange: (v) => dispatch({ type: SET_RAY_TOGGLE, field: "showChromatic", value: v }),
    onChromRChange: (v) => dispatch({ type: SET_RAY_TOGGLE, field: "chromR", value: v }),
    onChromGChange: (v) => dispatch({ type: SET_RAY_TOGGLE, field: "chromG", value: v }),
    onChromBChange: (v) => dispatch({ type: SET_RAY_TOGGLE, field: "chromB", value: v }),
    onDarkChange: (v) => dispatch({ type: SET_DARK, dark: v }),
    onHighContrastChange: (v) => dispatch({ type: SET_HIGH_CONTRAST, highContrast: v }),
    isWide,
    focusExpanded,
    onFocusExpandedChange: (v) => dispatch({ type: SET_PANEL_EXPANDED, panel: "focusExpanded", expanded: v }),
    apertureExpanded,
    onApertureExpandedChange: (v) => dispatch({ type: SET_PANEL_EXPANDED, panel: "apertureExpanded", expanded: v }),
    headerControlsExpanded,
    onHeaderControlsExpandedChange: (v) =>
      dispatch({ type: SET_PANEL_EXPANDED, panel: "headerControlsExpanded", expanded: v }),
    legendExpanded,
    onLegendExpandedChange: (v) => dispatch({ type: SET_PANEL_EXPANDED, panel: "legendExpanded", expanded: v }),
    headerInfoExpanded,
    onHeaderInfoExpandedChange: (v) => dispatch({ type: SET_PANEL_EXPANDED, panel: "headerInfoExpanded", expanded: v }),
  };

  /* =====================================================================
   * §3  RENDER HELPERS — style factories and pre-built JSX fragments
   * ===================================================================== */

  /* ── Selector style helper ── */
  const selectorStyle = (wide) => ({
    backgroundColor: t.selectorBg,
    border: `1.5px solid ${t.sliderAccent}40`,
    borderRadius: 6,
    padding: wide ? "7px 32px 7px 12px" : "7px 28px 7px 8px",
    cursor: "pointer",
    fontSize: wide ? 13 : 12,
    color: t.selectorText,
    fontFamily: "inherit",
    letterSpacing: "0.06em",
    appearance: "none",
    outline: "none",
    boxShadow: `0 0 6px ${t.sliderAccent}18`,
    backgroundImage: `url("data:image/svg+xml,${encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='12' height='7'><path d='M0 0l6 7 6-7z' fill='${t.selectorText}'/></svg>`)}")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 10px center",
    transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
  });

  /* ── Toggle button style helper ── */
  const toggleBtnStyle = (active, hasRightBorder = true) => ({
    flex: 1,
    background: active ? t.toggleActiveBg : t.toggleBg,
    border: "none",
    borderRight: hasRightBorder ? `1px solid ${t.toggleBorder}` : "none",
    padding: "5px 8px",
    cursor: "pointer",
    fontSize: 9,
    color: active ? t.toggleActiveText : t.toggleInactiveText,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    transition: "all 0.25s",
    whiteSpace: "nowrap",
    fontFamily: "inherit",
    letterSpacing: "0.08em",
    minHeight: 28,
  });

  const showCompareBtn = ENABLE_COMPARISON && (isWide || ENABLE_COMPARISON_MOBILE);

  /* ── Description content (only in single-lens mode) ── */
  const descriptionContent = (
    <div style={{ background: t.descBg, overflowY: "auto", transition: "background 0.3s" }}>
      <DescriptionPanel markdown={markdown} theme={t} />
    </div>
  );

  /* ── Shared controls bar (comparison mode) ── */
  const sharedControlsBar = comparing ? (
    <div
      style={{
        padding: "8px 16px",
        borderBottom: `1px solid ${t.headerBorder}`,
        backgroundColor: t.headerBgColor,
        backgroundImage: t.headerBgImage,
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        alignItems: "center",
        justifyContent: "center",
        transition: "background-color 0.3s,border-color 0.3s",
      }}
    >
      {/* Theme controls */}
      <div
        style={{
          ...TOGGLE_GROUP_BASE,
          border: `1px solid ${t.toggleBorder}`,
          width: 120,
          transition: "border-color 0.3s",
        }}
      >
        <button
          onClick={() => dispatch({ type: SET_HIGH_CONTRAST, highContrast: !highContrast })}
          style={toggleBtnStyle(highContrast, true)}
        >
          <span style={{ fontSize: 12, lineHeight: 1, fontWeight: 700 }}>◐</span>
          <span>HC</span>
        </button>
        <button onClick={() => dispatch({ type: SET_DARK, dark: !dark })} style={toggleBtnStyle(false, false)}>
          <span style={{ fontSize: 14, lineHeight: 1 }}>{t.toggleIcon}</span>
          <span>{dark ? "Light" : "Dark"}</span>
        </button>
      </div>

      {/* Ray toggles */}
      <div
        style={{
          ...TOGGLE_GROUP_BASE,
          border: `1px solid ${t.toggleBorder}`,
          width: 180,
          transition: "border-color 0.3s",
        }}
      >
        {(() => {
          const offAxisActive = showOffAxis !== "off";
          const offAxisCycle = ENABLE_EDGE_PROJECTION
            ? () =>
                dispatch({
                  type: SET_RAY_TOGGLE,
                  field: "showOffAxis",
                  value: showOffAxis === "off" ? "trueAngle" : showOffAxis === "trueAngle" ? "edge" : "off",
                })
            : () =>
                dispatch({ type: SET_RAY_TOGGLE, field: "showOffAxis", value: offAxisActive ? "off" : "trueAngle" });
          const offAxisLabel = ENABLE_EDGE_PROJECTION
            ? showOffAxis === "edge"
              ? "EDGE PROJ"
              : showOffAxis === "trueAngle"
                ? "TRUE \u2220"
                : "OFF-AXIS"
            : "OFF-AXIS";
          return [
            {
              label: "ON-AXIS",
              active: showOnAxis,
              onClick: () => dispatch({ type: SET_RAY_TOGGLE, field: "showOnAxis", value: !showOnAxis }),
              dotA: t.rayWarm,
              dotB: t.rayCool,
            },
            {
              label: offAxisLabel,
              active: offAxisActive,
              onClick: offAxisCycle,
              dotA: t.rayOffWarm,
              dotB: t.rayOffCool,
            },
          ].map(({ label, active, onClick, dotA, dotB }, idx) => (
            <button key={idx} onClick={onClick} style={toggleBtnStyle(active, idx === 0)}>
              <svg width="14" height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
                <line x1="0" y1="4" x2="14" y2="4" stroke={active ? dotA : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
                <line x1="0" y1="7" x2="14" y2="7" stroke={active ? dotB : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
              </svg>
              <span>{label}</span>
            </button>
          ));
        })()}
      </div>

      {/* Ray mode */}
      <div
        style={{
          ...TOGGLE_GROUP_BASE,
          border: `1px solid ${t.toggleBorder}`,
          width: 180,
          transition: "border-color 0.3s",
        }}
      >
        {[
          { label: "FROM \u221e", val: false, icon: "\u2225" },
          { label: "TRACKS FOCUS", val: true, icon: "\u27e9" },
        ].map(({ label, val, icon }) => (
          <button
            key={label}
            onClick={() => dispatch({ type: SET_RAY_TOGGLE, field: "rayTracksF", value: val })}
            style={toggleBtnStyle(rayTracksF === val, !val)}
          >
            <span style={{ fontSize: 11, fontWeight: 700, lineHeight: 1, opacity: rayTracksF === val ? 1 : 0.4 }}>
              {icon}
            </span>
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Chromatic */}
      {ENABLE_COLOR_TRACING && (
        <div
          style={{
            ...TOGGLE_GROUP_BASE,
            border: `1px solid ${t.toggleBorder}`,
            width: showChromatic ? 220 : 90,
            transition: "border-color 0.3s, width 0.3s",
          }}
        >
          <button
            onClick={() => dispatch({ type: SET_RAY_TOGGLE, field: "showChromatic", value: !showChromatic })}
            style={toggleBtnStyle(showChromatic, showChromatic)}
          >
            <svg width="14" height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
              <line
                x1="0"
                y1="1"
                x2="14"
                y2="1"
                stroke={showChromatic ? t.rayChromR : "rgba(128,128,128,0.3)"}
                strokeWidth="1.5"
              />
              <line
                x1="0"
                y1="4"
                x2="14"
                y2="4"
                stroke={showChromatic ? t.rayChromG : "rgba(128,128,128,0.3)"}
                strokeWidth="1.5"
              />
              <line
                x1="0"
                y1="7"
                x2="14"
                y2="7"
                stroke={showChromatic ? t.rayChromB : "rgba(128,128,128,0.3)"}
                strokeWidth="1.5"
              />
            </svg>
            <span>COLOR</span>
          </button>
          {showChromatic &&
            [
              { ch: "R", active: chromR, field: "chromR", color: t.rayChromR },
              { ch: "G", active: chromG, field: "chromG", color: t.rayChromG },
              { ch: "B", active: chromB, field: "chromB", color: t.rayChromB },
            ].map(({ ch, active, field, color }, idx) => (
              <button
                key={ch}
                onClick={() => dispatch({ type: SET_RAY_TOGGLE, field, value: !active })}
                style={{
                  flex: 0.6,
                  background: active ? t.toggleActiveBg : t.toggleBg,
                  border: "none",
                  borderRight: idx < 2 ? `1px solid ${t.toggleBorder}` : "none",
                  padding: "5px 6px",
                  cursor: "pointer",
                  fontSize: 9,
                  color: active ? t.toggleActiveText : t.toggleInactiveText,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 28,
                  gap: 3,
                  transition: "all 0.25s",
                  fontFamily: "inherit",
                  letterSpacing: "0.08em",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: active ? color : "rgba(128,128,128,0.3)",
                    display: "inline-block",
                  }}
                />
                <span>{ch}</span>
              </button>
            ))}
        </div>
      )}

      {/* Scale mode toggle */}
      <div
        style={{
          ...TOGGLE_GROUP_BASE,
          border: `1px solid ${t.toggleBorder}`,
          width: 190,
          transition: "border-color 0.3s",
        }}
      >
        {[
          { label: "INDEPENDENT", val: "independent" },
          { label: "NORMALIZED", val: "normalized" },
        ].map(({ label, val }, idx) => (
          <button
            key={val}
            onClick={() => dispatch({ type: SET_SCALE_MODE, scaleMode: val })}
            style={toggleBtnStyle(scaleMode === val, idx === 0)}
          >
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  ) : null;

  /* ── Comparison error display ── */
  const comparisonError = comparisonLenses?.error ? (
    <div style={{ display: "flex", justifyContent: "center", padding: 32 }}>
      <ErrorDisplay
        error={comparisonLenses.error}
        context={{ component: "Comparison Mode", lensKey: comparisonLenses.failedKeys }}
        title="Failed to build lens for comparison"
      />
    </div>
  ) : null;

  /* ── Comparison content ──
   * Desktop: side-by-side (50/50 flex row) with a vertical divider.
   * Mobile: stacked (column) with a horizontal divider.
   * Each panel gets its own per-lens focus/zoom/aperture from the shared
   * slider pair computations, and an optional scaleRatio for normalized mode. */
  const comparisonContent = comparing ? (
    comparisonLenses?.error ? (
      comparisonError
    ) : (
      <div style={{ display: "flex", flexDirection: isWide ? "row" : "column" }}>
        <div
          style={{
            flex: isWide ? "0 0 50%" : "none",
            borderRight: isWide ? `1px solid ${t.panelDivider}` : "none",
            borderBottom: !isWide ? `1px solid ${t.panelDivider}` : "none",
            minWidth: 0,
            overflow: "hidden",
          }}
        >
          <LensDiagramPanel
            lensKey={lensKeyA}
            {...sharedProps}
            focusT={focusPair?.focusA ?? 0}
            zoomT={zoomPair?.zoomA ?? 0}
            stopdownT={aperturePair?.stopdownA ?? 0}
            scaleRatio={scaleRatios?.a ?? null}
            panelId="a"
            compact={true}
            showControls={true}
            showSliders={false}
            maxSvgHeight={isWide ? (ENABLE_DYNAMIC_DIAGRAM_HEIGHT ? "calc(100vh - 260px)" : "54vh") : "42vh"}
            onHeaderHeight={handleHeaderHeight}
            minHeaderHeight={isWide && maxHeaderHeight > 0 ? maxHeaderHeight : undefined}
            flashOverlay={flashPanel === "a"}
          />
        </div>
        <div style={{ flex: isWide ? "0 0 50%" : "none", minWidth: 0, overflow: "hidden" }}>
          <LensDiagramPanel
            lensKey={lensKeyB}
            {...sharedProps}
            focusT={focusPair?.focusB ?? 0}
            zoomT={zoomPair?.zoomB ?? 0}
            stopdownT={aperturePair?.stopdownB ?? 0}
            scaleRatio={scaleRatios?.b ?? null}
            panelId="b"
            compact={true}
            showControls={true}
            showSliders={false}
            maxSvgHeight={isWide ? (ENABLE_DYNAMIC_DIAGRAM_HEIGHT ? "calc(100vh - 260px)" : "54vh") : "42vh"}
            onHeaderHeight={handleHeaderHeight}
            minHeaderHeight={isWide && maxHeaderHeight > 0 ? maxHeaderHeight : undefined}
            flashOverlay={flashPanel === "b"}
          />
        </div>
      </div>
    )
  ) : null;

  /* ── Mobile controls strip (always-visible toggles on narrow screens) ── */
  const mobileControlsStrip =
    ENABLE_MOBILE_CONTROLS_STRIP && !isWide && !comparing && mobileView === "diagram" ? (
      <div
        style={{
          padding: "6px 12px",
          borderBottom: `1px solid ${t.headerBorder}`,
          backgroundColor: t.headerBgColor,
          backgroundImage: t.headerBgImage,
          display: "flex",
          flexWrap: "wrap",
          gap: 6,
          alignItems: "center",
          justifyContent: "center",
          transition: "background-color 0.3s,border-color 0.3s",
        }}
      >
        {/* Theme controls */}
        <div style={{ ...TOGGLE_GROUP_BASE, border: `1px solid ${t.toggleBorder}`, transition: "border-color 0.3s" }}>
          <button
            onClick={() => dispatch({ type: SET_HIGH_CONTRAST, highContrast: !highContrast })}
            style={toggleBtnStyle(highContrast, true)}
          >
            <span style={{ fontSize: 12, lineHeight: 1, fontWeight: 700 }}>◐</span>
            <span>HC</span>
          </button>
          <button onClick={() => dispatch({ type: SET_DARK, dark: !dark })} style={toggleBtnStyle(false, false)}>
            <span style={{ fontSize: 14, lineHeight: 1 }}>{t.toggleIcon}</span>
            <span>{dark ? "Light" : "Dark"}</span>
          </button>
        </div>

        {/* Ray toggles */}
        <div style={{ ...TOGGLE_GROUP_BASE, border: `1px solid ${t.toggleBorder}`, transition: "border-color 0.3s" }}>
          {(() => {
            const offAxisActive = showOffAxis !== "off";
            const offAxisCycle = ENABLE_EDGE_PROJECTION
              ? () =>
                  dispatch({
                    type: SET_RAY_TOGGLE,
                    field: "showOffAxis",
                    value: showOffAxis === "off" ? "trueAngle" : showOffAxis === "trueAngle" ? "edge" : "off",
                  })
              : () =>
                  dispatch({
                    type: SET_RAY_TOGGLE,
                    field: "showOffAxis",
                    value: offAxisActive ? "off" : "trueAngle",
                  });
            const offAxisLabel = ENABLE_EDGE_PROJECTION
              ? showOffAxis === "edge"
                ? "EDGE"
                : showOffAxis === "trueAngle"
                  ? "TRUE\u2220"
                  : "OFF"
              : "OFF";
            return [
              {
                label: "ON",
                active: showOnAxis,
                onClick: () => dispatch({ type: SET_RAY_TOGGLE, field: "showOnAxis", value: !showOnAxis }),
                dotA: t.rayWarm,
                dotB: t.rayCool,
              },
              {
                label: offAxisLabel,
                active: offAxisActive,
                onClick: offAxisCycle,
                dotA: t.rayOffWarm,
                dotB: t.rayOffCool,
              },
            ].map(({ label, active, onClick, dotA, dotB }, idx) => (
              <button key={idx} onClick={onClick} style={toggleBtnStyle(active, idx === 0)}>
                <svg width="12" height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
                  <line
                    x1="0"
                    y1="4"
                    x2="14"
                    y2="4"
                    stroke={active ? dotA : "rgba(128,128,128,0.3)"}
                    strokeWidth="1.5"
                  />
                  <line
                    x1="0"
                    y1="7"
                    x2="14"
                    y2="7"
                    stroke={active ? dotB : "rgba(128,128,128,0.3)"}
                    strokeWidth="1.5"
                  />
                </svg>
                <span>{label}</span>
              </button>
            ));
          })()}
        </div>

        {/* Ray mode */}
        <div style={{ ...TOGGLE_GROUP_BASE, border: `1px solid ${t.toggleBorder}`, transition: "border-color 0.3s" }}>
          {[
            { label: "\u221e", val: false },
            { label: "\u27e9 F", val: true },
          ].map(({ label, val }, idx) => (
            <button
              key={label}
              onClick={() => dispatch({ type: SET_RAY_TOGGLE, field: "rayTracksF", value: val })}
              style={toggleBtnStyle(rayTracksF === val, idx === 0)}
            >
              <span>{label}</span>
            </button>
          ))}
        </div>

        {/* Chromatic */}
        {ENABLE_COLOR_TRACING && (
          <div style={{ ...TOGGLE_GROUP_BASE, border: `1px solid ${t.toggleBorder}`, transition: "border-color 0.3s" }}>
            <button
              onClick={() => dispatch({ type: SET_RAY_TOGGLE, field: "showChromatic", value: !showChromatic })}
              style={toggleBtnStyle(showChromatic, showChromatic)}
            >
              <svg width="12" height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
                <line
                  x1="0"
                  y1="1"
                  x2="14"
                  y2="1"
                  stroke={showChromatic ? t.rayChromR : "rgba(128,128,128,0.3)"}
                  strokeWidth="1.5"
                />
                <line
                  x1="0"
                  y1="4"
                  x2="14"
                  y2="4"
                  stroke={showChromatic ? t.rayChromG : "rgba(128,128,128,0.3)"}
                  strokeWidth="1.5"
                />
                <line
                  x1="0"
                  y1="7"
                  x2="14"
                  y2="7"
                  stroke={showChromatic ? t.rayChromB : "rgba(128,128,128,0.3)"}
                  strokeWidth="1.5"
                />
              </svg>
              <span>COLOR</span>
            </button>
            {showChromatic &&
              [
                { ch: "R", active: chromR, field: "chromR", color: t.rayChromR },
                { ch: "G", active: chromG, field: "chromG", color: t.rayChromG },
                { ch: "B", active: chromB, field: "chromB", color: t.rayChromB },
              ].map(({ ch, active, field, color }, idx) => (
                <button
                  key={ch}
                  onClick={() => dispatch({ type: SET_RAY_TOGGLE, field, value: !active })}
                  style={{
                    flex: 0.6,
                    background: active ? t.toggleActiveBg : t.toggleBg,
                    border: "none",
                    borderRight: idx < 2 ? `1px solid ${t.toggleBorder}` : "none",
                    padding: "5px 6px",
                    cursor: "pointer",
                    fontSize: 9,
                    color: active ? t.toggleActiveText : t.toggleInactiveText,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: 28,
                    gap: 3,
                    transition: "all 0.25s",
                    fontFamily: "inherit",
                    letterSpacing: "0.08em",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      background: active ? color : "rgba(128,128,128,0.3)",
                      display: "inline-block",
                    }}
                  />
                  <span>{ch}</span>
                </button>
              ))}
          </div>
        )}
      </div>
    ) : null;

  /* ── Single-lens diagram content ── */
  const singleDiagramContent = !comparing ? (
    <LensDiagramPanel
      lensKey={lensKeyA}
      {...sharedProps}
      scaleRatio={null}
      panelId="main"
      compact={false}
      showControls={true}
      sideLayoutEnabled={ENABLE_SIDE_PANEL_LAYOUT && isWide && effectiveDesktopView === "diagram"}
    />
  ) : null;

  /* =====================================================================
   * §4  JSX — Top bar, comparison chrome, diagram panels, overlays
   * ===================================================================== */
  return (
    <div
      style={{
        background: t.bg,
        color: t.body,
        fontFamily: "'JetBrains Mono','SF Mono','Fira Code',monospace",
        minHeight: "100vh",
        transition: "background 0.3s,color 0.3s",
      }}
    >
      {/* ── Top bar: lens selector(s) + compare button ── */}
      <div
        style={{
          padding: isWide ? "12px 24px" : "10px 12px",
          borderBottom: `1px solid ${t.headerBorder}`,
          backgroundColor: t.headerBgColor,
          backgroundImage: t.headerBgImage,
          display: "flex",
          alignItems: "center",
          gap: isWide ? 12 : 8,
          flexWrap: "wrap",
          transition: "background-color 0.3s,border-color 0.3s",
        }}
      >
        <span
          style={{ fontSize: 9, letterSpacing: "0.12em", color: t.muted, fontFamily: "inherit", whiteSpace: "nowrap" }}
        >
          {comparing ? "LENS A" : "LENS"}
        </span>
        <select
          value={lensKeyA}
          onChange={(e) => switchLensA(e.target.value)}
          style={{ ...selectorStyle(isWide), flex: isWide ? "0 1 280px" : "1 1 0%", minWidth: 0 }}
        >
          {CATALOG_KEYS.map((k) => (
            <option key={k} value={k} style={{ background: t.bg, color: t.body }}>
              {LENS_CATALOG[k].name}
            </option>
          ))}
        </select>

        {comparing && (
          <>
            <span
              style={{
                fontSize: 9,
                letterSpacing: "0.12em",
                color: t.muted,
                fontFamily: "inherit",
                whiteSpace: "nowrap",
              }}
            >
              LENS B
            </span>
            <select
              value={lensKeyB}
              onChange={(e) => switchLensB(e.target.value)}
              style={{ ...selectorStyle(isWide), flex: isWide ? "0 1 280px" : "1 1 0%", minWidth: 0 }}
            >
              {CATALOG_KEYS.map((k) => (
                <option key={k} value={k} style={{ background: t.bg, color: t.body }}>
                  {LENS_CATALOG[k].name}
                </option>
              ))}
            </select>
          </>
        )}

        {showCompareBtn && (
          <button
            onClick={toggleCompare}
            style={{
              backgroundColor: comparing ? t.toggleActiveBg : t.selectorBg,
              border: `1.5px solid ${comparing ? t.sliderAccent : `${t.sliderAccent}40`}`,
              borderRadius: 6,
              padding: isWide ? "5px 14px" : "5px 10px",
              cursor: "pointer",
              fontSize: 10,
              color: comparing ? t.toggleActiveText : t.selectorText,
              fontFamily: "inherit",
              letterSpacing: "0.08em",
              outline: "none",
              flexShrink: 0,
              boxShadow: `0 0 6px ${t.sliderAccent}18`,
              transition: "all 0.3s",
            }}
          >
            {comparing ? "EXIT COMPARE" : "COMPARE"}
          </button>
        )}

        {isWide && <div style={{ flex: 1 }} />}
        {isWide && (
          <span
            style={{
              fontSize: 9,
              letterSpacing: "0.12em",
              color: t.muted,
              fontFamily: "inherit",
              whiteSpace: "nowrap",
            }}
          >
            ABOUT
          </span>
        )}
        <button
          onClick={() => dispatch({ type: SET_OVERLAY, overlay: "showAboutSite", visible: true })}
          style={{
            backgroundColor: t.selectorBg,
            border: `1.5px solid ${t.sliderAccent}40`,
            borderRadius: 6,
            padding: isWide ? "5px 14px" : "5px 10px",
            cursor: "pointer",
            fontSize: 11,
            color: t.selectorText,
            fontFamily: "inherit",
            letterSpacing: "0.06em",
            outline: "none",
            flexShrink: 0,
            boxShadow: `0 0 6px ${t.sliderAccent}18`,
            transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
          }}
        >
          Site
        </button>
        <button
          onClick={() => dispatch({ type: SET_OVERLAY, overlay: "showAbout", visible: true })}
          style={{
            backgroundColor: t.selectorBg,
            border: `1.5px solid ${t.sliderAccent}40`,
            borderRadius: 6,
            padding: isWide ? "5px 14px" : "5px 10px",
            cursor: "pointer",
            fontSize: 11,
            color: t.selectorText,
            fontFamily: "inherit",
            letterSpacing: "0.06em",
            outline: "none",
            flexShrink: 0,
            boxShadow: `0 0 6px ${t.sliderAccent}18`,
            transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
          }}
        >
          Author
        </button>
      </div>

      {/* ── Shared controls bar (comparison mode only) ── */}
      {sharedControlsBar}

      {/* ── Mobile view toggle (narrow screens, single-lens only) ── */}
      {ENABLE_ANALYSIS_VIEW && !isWide && !comparing && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "8px 24px",
            borderBottom: `1px solid ${t.headerBorder}`,
            backgroundColor: t.headerBgColor,
            backgroundImage: t.headerBgImage,
            transition: "background-color 0.3s,border-color 0.3s",
          }}
        >
          <div style={{ ...TOGGLE_GROUP_BASE, border: `1px solid ${t.toggleBorder}`, width: 220 }}>
            {[
              { label: "DIAGRAM", val: "diagram" },
              { label: "ANALYSIS", val: "description" },
            ].map(({ label, val }) => (
              <button
                key={val}
                onClick={() => dispatch({ type: SET_MOBILE_VIEW, mobileView: val })}
                style={{
                  flex: 1,
                  background: mobileView === val ? t.toggleActiveBg : t.toggleBg,
                  border: "none",
                  borderRight: val === "diagram" ? `1px solid ${t.toggleBorder}` : "none",
                  padding: "5px 0",
                  cursor: "pointer",
                  fontSize: 9,
                  color: mobileView === val ? t.toggleActiveText : t.toggleInactiveText,
                  fontFamily: "inherit",
                  letterSpacing: "0.08em",
                  transition: "all 0.25s",
                  minHeight: 28,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Desktop view toggle (wide screens, single-lens only) ── */}
      {showDesktopToggle && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "8px 24px",
            borderBottom: `1px solid ${t.headerBorder}`,
            backgroundColor: t.headerBgColor,
            backgroundImage: t.headerBgImage,
            transition: "background-color 0.3s,border-color 0.3s",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 0,
              borderRadius: 5,
              overflow: "hidden",
              border: `1px solid ${t.toggleBorder}`,
              width: desktopViewOptions.length * 110,
            }}
          >
            {desktopViewOptions.map(({ label, val }, i) => (
              <button
                key={val}
                onClick={() => dispatch({ type: SET_DESKTOP_VIEW, desktopView: val })}
                style={{
                  flex: 1,
                  background: effectiveDesktopView === val ? t.toggleActiveBg : t.toggleBg,
                  border: "none",
                  borderRight: i < desktopViewOptions.length - 1 ? `1px solid ${t.toggleBorder}` : "none",
                  padding: "5px 0",
                  cursor: "pointer",
                  fontSize: 9,
                  color: effectiveDesktopView === val ? t.toggleActiveText : t.toggleInactiveText,
                  fontFamily: "inherit",
                  letterSpacing: "0.08em",
                  transition: "all 0.25s",
                  minHeight: 28,
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Mobile controls strip (narrow screens, single-lens diagram view) ── */}
      {mobileControlsStrip}

      {/* ── Main content area ── */}
      {comparing ? (
        <>
          {comparisonContent}
          {comparisonLenses && !comparisonLenses.error && focusPair && aperturePair && (
            <SharedSlidersBar
              LA={comparisonLenses.LA}
              LB={comparisonLenses.LB}
              sharedFocusT={sharedFocusT}
              sharedStopdownT={sharedStopdownT}
              sharedZoomT={sharedZoomT}
              onSharedFocusChange={handleSharedFocusChange}
              onSharedStopdownChange={handleSharedStopdownChange}
              onSharedZoomChange={(v) => dispatch({ type: SET_SHARED_ZOOM_T, value: v })}
              onFocusPointerDown={handleFocusPointerDown}
              onAperturePointerDown={handleAperturePointerDown}
              focusPair={focusPair}
              aperturePair={aperturePair}
              zoomPair={zoomPair}
              onSliderPointerUp={updateURLWithSliders}
              theme={t}
              isWide={isWide}
            />
          )}
        </>
      ) : isWide ? (
        effectiveDesktopView === "diagram" ? (
          <div style={{ minHeight: `calc(100vh - ${showDesktopToggle ? 82 : 45}px)` }}>{singleDiagramContent}</div>
        ) : effectiveDesktopView === "analysis" ? (
          <div style={{ overflowY: "auto", maxHeight: `calc(100vh - ${showDesktopToggle ? 82 : 45}px)` }}>
            {descriptionContent}
          </div>
        ) : (
          /* Both — side-by-side */
          <div style={{ display: "flex", minHeight: `calc(100vh - ${showDesktopToggle ? 82 : 45}px)` }}>
            <div style={{ flex: "0 0 65%", minWidth: 0, overflow: "hidden" }}>{singleDiagramContent}</div>
            <div
              style={{
                flex: "0 0 35%",
                borderLeft: `1px solid ${t.descBorder}`,
                overflowY: "auto",
                maxHeight: `calc(100vh - ${showDesktopToggle ? 82 : 45}px)`,
              }}
            >
              {descriptionContent}
            </div>
          </div>
        )
      ) : /* Mobile: toggle between views */
      !ENABLE_ANALYSIS_VIEW || mobileView === "diagram" ? (
        singleDiagramContent
      ) : (
        descriptionContent
      )}

      {/* ── About Site overlay ── */}
      {showAboutSite && (
        <div
          onClick={() => dispatch({ type: SET_OVERLAY, overlay: "showAboutSite", visible: false })}
          style={OVERLAY_BACKDROP}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ ...OVERLAY_MODAL_BASE, background: t.descBg, border: `1px solid ${t.descBorder}` }}
          >
            <button
              onClick={() => dispatch({ type: SET_OVERLAY, overlay: "showAboutSite", visible: false })}
              style={{ ...CLOSE_BTN_BASE, color: t.muted }}
            >
              ×
            </button>
            <DescriptionPanel markdown={ABOUT_SITE_MD} theme={t} />
          </div>
        </div>
      )}

      {/* ── About Me overlay ── */}
      {showAbout && (
        <div
          onClick={() => dispatch({ type: SET_OVERLAY, overlay: "showAbout", visible: false })}
          style={OVERLAY_BACKDROP}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ ...OVERLAY_MODAL_BASE, background: t.descBg, border: `1px solid ${t.descBorder}` }}
          >
            <button
              onClick={() => dispatch({ type: SET_OVERLAY, overlay: "showAbout", visible: false })}
              style={{ ...CLOSE_BTN_BASE, color: t.muted }}
            >
              ×
            </button>
            <DescriptionPanel markdown={ABOUT_ME_MD} theme={t} />
          </div>
        </div>
      )}
    </div>
  );
}
