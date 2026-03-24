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
import LensDiagramPanel from "./LensDiagramPanel.js";
import DescriptionPanel from "./DescriptionPanel.js";
import SharedSlidersBar from "./SharedSlidersBar.js";
import usePreferences from "../utils/usePreferences.js";
import useURLSync from "../utils/useURLSync.js";
import { LensStateContext, LensDispatchContext } from "../utils/LensContext.js";
import {
  ENABLE_ANALYSIS_VIEW,
  ENABLE_DESKTOP_VIEW_TOGGLE,
  ENABLE_DIAGRAM_ONLY,
  ENABLE_ANALYSIS_ONLY,
  ENABLE_COMPARISON,
  ENABLE_COMPARISON_MOBILE,
  ENABLE_DYNAMIC_DIAGRAM_HEIGHT,
  ENABLE_SIDE_PANEL_LAYOUT,
  ENABLE_MOBILE_CONTROLS_STRIP,
} from "../utils/featureFlags.js";
import { computeFocusPair, computeAperturePair, computeZoomPair } from "../utils/comparisonSliders.js";
import useStickySliders from "../utils/useStickySliders.js";
import { ErrorDisplay } from "./ErrorBoundary.js";
import OverlayModal from "./OverlayModal.js";
import ControlsBar from "./ControlsBar.js";
import ABOUT_ME_MD from "../content/AboutMe.md?raw";
import ABOUT_SITE_MD from "../content/AboutSite.md?raw";
import useLensState from "../utils/useLensState.js";
import {
  SET_LENS_A,
  SET_LENS_B,
  SET_MOBILE_VIEW,
  SET_DESKTOP_VIEW,
  SET_SHARED_STOPDOWN_T,
  SET_SHARED_ZOOM_T,
  SET_OVERLAY,
  CLOSE_ALL_OVERLAYS,
  ENTER_COMPARE,
  EXIT_COMPARE,
} from "../utils/lensReducer.js";
import { toggleGroup, toggleBtn, selector, headerStrip, topBarBtn } from "../utils/styles.js";
import type { RuntimeLens } from "../types/optics.js";

interface ComparisonLensesOk {
  LA: RuntimeLens;
  LB: RuntimeLens;
  error?: undefined;
  failedKeys?: undefined;
}
interface ComparisonLensesErr {
  error: unknown;
  failedKeys: string;
  LA?: undefined;
  LB?: undefined;
}
type ComparisonLensesResult = ComparisonLensesOk | ComparisonLensesErr | null;

function isComparisonOk(cl: ComparisonLensesResult): cl is ComparisonLensesOk {
  return cl !== null && !cl.error;
}

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
  const { lens, display, rays, sharedSliders, overlays } = state;
  const { lensKeyA, lensKeyB, comparing, scaleMode } = lens;
  const { dark, highContrast, mobileView, desktopView } = display;
  const { showOnAxis, showOffAxis, rayTracksF, showChromatic, chromR, chromG, chromB } = rays;
  const { sharedFocusT, sharedStopdownT, sharedZoomT } = sharedSliders;
  const { showAbout, showAboutSite } = overlays;

  /* ── Comparison mode header height alignment ── */
  const [headerHeights, setHeaderHeights] = useState<Record<string, number>>({ a: 0, b: 0 });
  const justEnteredCompare = useRef(false);

  /* ── Sticky slider state machine (see useStickySliders for docs) ── */

  /* ── Persist preferences to localStorage ── */
  usePreferences(state);

  /* ── URL synchronization (lens selection, slider deep links, zoom init) ── */

  /* ── Escape key closes overlays ── */
  useEffect(() => {
    if (!showAbout && !showAboutSite) return;
    const handleKey = (e: KeyboardEvent) => {
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
    (key: string) => {
      dispatch({ type: SET_LENS_A, key });
    },
    [dispatch],
  );

  const switchLensB = useCallback(
    (key: string) => {
      dispatch({ type: SET_LENS_B, key });
    },
    [dispatch],
  );

  /* ── Build both lenses for comparison computations ──
   * Built eagerly when comparison mode is active so we can compute
   * shared slider mappings (focus/aperture/zoom pairs). Both lenses
   * are also needed for normalized scale ratios. */
  const comparisonLenses: ComparisonLensesResult = useMemo(() => {
    if (!comparing) return null;
    try {
      return { LA: buildLens(LENS_CATALOG[lensKeyA]), LB: buildLens(LENS_CATALOG[lensKeyB]) } as ComparisonLensesOk;
    } catch (e) {
      return { error: e, failedKeys: `${lensKeyA} vs ${lensKeyB}` } as ComparisonLensesErr;
    }
  }, [comparing, lensKeyA, lensKeyB]);

  const { updateURLWithSliders } = useURLSync(state, dispatch, comparisonLenses as Parameters<typeof useURLSync>[2]);

  /* ── Normalized scale computation ──
   * In normalized mode, both panels use the same mm-per-pixel ratio so lens
   * sizes are visually comparable. Each panel's SC is scaled down to match
   * whichever lens has the smaller (more zoomed-out) SC value. */
  const scaleRatios = useMemo(() => {
    if (!isComparisonOk(comparisonLenses) || scaleMode !== "normalized") return null;
    const { LA, LB } = comparisonLenses;
    const minSC = Math.min(LA.SC, LB.SC);
    return { a: minSC / LA.SC, b: minSC / LB.SC };
  }, [comparisonLenses, scaleMode]);

  /* ── Per-lens focus/aperture from shared sliders ── */
  const focusPair = useMemo(() => {
    if (!isComparisonOk(comparisonLenses)) return null;
    return computeFocusPair(sharedFocusT, comparisonLenses.LA, comparisonLenses.LB);
  }, [sharedFocusT, comparisonLenses]);

  const aperturePair = useMemo(() => {
    if (!isComparisonOk(comparisonLenses)) return null;
    return computeAperturePair(sharedStopdownT, comparisonLenses.LA, comparisonLenses.LB);
  }, [sharedStopdownT, comparisonLenses]);

  const zoomPair = useMemo(() => {
    if (!isComparisonOk(comparisonLenses)) return null;
    return computeZoomPair(sharedZoomT, comparisonLenses.LA, comparisonLenses.LB);
  }, [sharedZoomT, comparisonLenses]);

  /* ── Sticky slider state machine ── */
  const {
    handleSharedFocusChange,
    handleSharedStopdownChange,
    handleFocusPointerDown,
    handleAperturePointerDown,
    flashPanel,
    resetSticky,
    prevStopdownT,
  } = useStickySliders(dispatch, focusPair, aperturePair, comparisonLenses as Parameters<typeof useStickySliders>[3]);

  /* ── Set default aperture to slowest lens wide-open when entering comparison ── */
  useEffect(() => {
    if (!justEnteredCompare.current || !isComparisonOk(comparisonLenses)) return;
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
  }, [comparisonLenses, dispatch, prevStopdownT]);

  /* ── Enter/exit comparison mode ── */
  const toggleCompare = useCallback(() => {
    if (!comparing) {
      dispatch({ type: ENTER_COMPARE, catalogKeys: CATALOG_KEYS });
      resetSticky();
      justEnteredCompare.current = true;
    } else {
      dispatch({
        type: EXIT_COMPARE,
        focusA: focusPair?.focusA,
        stopdownA: aperturePair?.stopdownA,
      });
    }
  }, [comparing, focusPair, aperturePair, dispatch, resetSticky]);

  /* ── Header height alignment callback ── */
  const handleHeaderHeight = useCallback((panelId: string, height: number) => {
    setHeaderHeights((prev) => (prev[panelId] === height ? prev : { ...prev, [panelId]: height }));
  }, []);
  const maxHeaderHeight = Math.max(headerHeights.a, headerHeights.b);

  /* ── Context value (replaces sharedProps prop drilling) ── */
  const ctxValue = useMemo(
    () => ({ state, theme: t, isWide, updateURLWithSliders }),
    [state, t, isWide, updateURLWithSliders],
  );

  /* =====================================================================
   * §3  RENDER HELPERS — pre-built JSX fragments
   * ===================================================================== */

  const showCompareBtn = ENABLE_COMPARISON && (isWide || ENABLE_COMPARISON_MOBILE);

  /* ── Description content (only in single-lens mode) ── */
  const descriptionContent = (
    <div style={{ background: t.descBg, overflowY: "auto", transition: "background 0.3s" }}>
      <DescriptionPanel markdown={markdown} theme={t} />
    </div>
  );

  /* ── Controls bar props (shared between comparison and mobile instances) ── */
  const controlsBarProps = {
    theme: t,
    showOnAxis,
    showOffAxis,
    rayTracksF,
    showChromatic,
    chromR,
    chromG,
    chromB,
    dark,
    highContrast,
    scaleMode,
    dispatch,
  } as const;

  /* ── Comparison error display ── */
  const comparisonError = comparisonLenses?.error ? (
    <div style={{ display: "flex", justifyContent: "center", padding: 32 }}>
      <ErrorDisplay
        error={
          comparisonLenses.error instanceof Error ? comparisonLenses.error : new Error(String(comparisonLenses.error))
        }
        context={{ component: "Comparison Mode", lensKey: comparisonLenses.failedKeys ?? "" }}
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


  /* ── Single-lens diagram content ── */
  const singleDiagramContent = !comparing ? (
    <LensDiagramPanel
      lensKey={lensKeyA}
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
    <LensStateContext.Provider value={ctxValue}>
      <LensDispatchContext.Provider value={dispatch}>
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
              ...headerStrip(t, { padding: isWide ? "12px 24px" : "10px 12px" }),
              display: "flex",
              alignItems: "center",
              gap: isWide ? 12 : 8,
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: 9,
                letterSpacing: "0.12em",
                color: t.muted,
                fontFamily: "inherit",
                whiteSpace: "nowrap",
              }}
            >
              {comparing ? "LENS A" : "LENS"}
            </span>
            <select
              value={lensKeyA}
              onChange={(e) => switchLensA(e.target.value)}
              style={{ ...selector(t, isWide), flex: isWide ? "0 1 280px" : "1 1 0%", minWidth: 0 }}
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
                  style={{ ...selector(t, isWide), flex: isWide ? "0 1 280px" : "1 1 0%", minWidth: 0 }}
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
              style={topBarBtn(t, isWide)}
            >
              Site
            </button>
            <button
              onClick={() => dispatch({ type: SET_OVERLAY, overlay: "showAbout", visible: true })}
              style={topBarBtn(t, isWide)}
            >
              Author
            </button>
          </div>

          {/* ── Shared controls bar (comparison mode only) ── */}
          {comparing && <ControlsBar {...controlsBarProps} compact={false} showScaleMode={true} />}

          {/* ── Mobile view toggle (narrow screens, single-lens only) ── */}
          {ENABLE_ANALYSIS_VIEW && !isWide && !comparing && (
            <div
              style={{
                ...headerStrip(t, { padding: "8px 24px" }),
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={toggleGroup(t, { width: 220 })}>
                {[
                  { label: "DIAGRAM", val: "diagram" },
                  { label: "ANALYSIS", val: "description" },
                ].map(({ label, val }) => (
                  <button
                    key={val}
                    onClick={() => dispatch({ type: SET_MOBILE_VIEW, mobileView: val })}
                    style={toggleBtn(t, mobileView === val, {
                      hasRightBorder: val === "diagram",
                      padding: "5px 0",
                    })}
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
                ...headerStrip(t, { padding: "8px 24px" }),
                display: "flex",
                justifyContent: "center",
              }}
            >
              <div style={toggleGroup(t, { width: desktopViewOptions.length * 110 })}>
                {desktopViewOptions.map(({ label, val }, i) => (
                  <button
                    key={val}
                    onClick={() => dispatch({ type: SET_DESKTOP_VIEW, desktopView: val })}
                    style={toggleBtn(t, effectiveDesktopView === val, {
                      hasRightBorder: i < desktopViewOptions.length - 1,
                      padding: "5px 0",
                    })}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Mobile controls strip (narrow screens, single-lens diagram view) ── */}
          {ENABLE_MOBILE_CONTROLS_STRIP && !isWide && !comparing && mobileView === "diagram" && (
            <ControlsBar {...controlsBarProps} compact={true} showScaleMode={false} />
          )}

          {/* ── Main content area ── */}
          {comparing ? (
            <>
              {comparisonContent}
              {isComparisonOk(comparisonLenses) && focusPair && aperturePair && (
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
            <OverlayModal
              onClose={() => dispatch({ type: SET_OVERLAY, overlay: "showAboutSite", visible: false })}
              theme={t}
            >
              <DescriptionPanel markdown={ABOUT_SITE_MD} theme={t} />
            </OverlayModal>
          )}

          {/* ── About Me overlay ── */}
          {showAbout && (
            <OverlayModal
              onClose={() => dispatch({ type: SET_OVERLAY, overlay: "showAbout", visible: false })}
              theme={t}
            >
              <DescriptionPanel markdown={ABOUT_ME_MD} theme={t} />
            </OverlayModal>
          )}
        </div>
      </LensDispatchContext.Provider>
    </LensStateContext.Provider>
  );
}
