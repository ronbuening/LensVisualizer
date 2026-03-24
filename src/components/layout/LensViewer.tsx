/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           INTERACTIVE LENS CROSS-SECTION VISUALIZATION             ║
 * ║                      — Orchestration Layer —                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  State management, context provision, and layout composition.      ║
 * ║  All UI rendering is delegated to child components:                ║
 * ║    • TopBar — lens selectors, compare button, about buttons       ║
 * ║    • ControlsBar — theme/ray/chromatic/scale toggles              ║
 * ║    • ViewToggleBar — desktop/mobile view mode switching           ║
 * ║    • ComparisonLayout — side-by-side/stacked lens panels          ║
 * ║    • AboutFooter — mobile-only page-bottom about buttons          ║
 * ║    • OverlayModal — about site/author/optics primer modals        ║
 * ║  Diagram rendering lives in LensDiagramPanel.                     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

import { useState, useMemo, useCallback, useEffect, useRef } from "react";

import T from "../../utils/themes.js";
import buildLens from "../../optics/buildLens.js";
import { LENS_CATALOG, CATALOG_KEYS, mdForKey } from "../../utils/lensCatalog.js";
import LensDiagramPanel from "./LensDiagramPanel.js";
import DescriptionPanel from "./DescriptionPanel.js";
import SharedSlidersBar from "./SharedSlidersBar.js";
import usePreferences from "../../utils/usePreferences.js";
import useURLSync from "../../utils/useURLSync.js";
import { LensStateContext, LensDispatchContext } from "../../utils/LensContext.js";
import {
  ENABLE_ANALYSIS_VIEW,
  ENABLE_DESKTOP_VIEW_TOGGLE,
  ENABLE_DIAGRAM_ONLY,
  ENABLE_ANALYSIS_ONLY,
  ENABLE_COMPARISON,
  ENABLE_COMPARISON_MOBILE,
  ENABLE_SIDE_PANEL_LAYOUT,
  ENABLE_MOBILE_CONTROLS_STRIP,
} from "../../utils/featureFlags.js";
import { computeFocusPair, computeAperturePair, computeZoomPair } from "../../utils/comparisonSliders.js";
import useStickySliders from "../../utils/useStickySliders.js";
import { ErrorDisplay } from "../errors/ErrorBoundary.js";
import OverlayModal from "./OverlayModal.js";
import ControlsBar from "./ControlsBar.js";
import TopBar from "./TopBar.js";
import ViewToggleBar from "./ViewToggleBar.js";
import ComparisonLayout from "./ComparisonLayout.js";
import ABOUT_ME_MD from "../../content/AboutMe.md?raw";
import ABOUT_SITE_MD from "../../content/AboutSite.md?raw";
import OPTICS_PRIMER_SIMPLE_MD from "../../content/OpticsPrimerSimple.md?raw";
import OPTICS_PRIMER_INTERMEDIATE_MD from "../../content/OpticsPrimerIntermediate.md?raw";
import AboutFooter from "../display/AboutFooter.js";
import useLensState from "../../utils/useLensState.js";
import {
  SET_LENS_A,
  SET_LENS_B,
  SWAP_LENSES,
  SET_MOBILE_VIEW,
  SET_DESKTOP_VIEW,
  SET_SHARED_STOPDOWN_T,
  SET_SHARED_ZOOM_T,
  SET_OVERLAY,
  CLOSE_ALL_OVERLAYS,
  ENTER_COMPARE,
  EXIT_COMPARE,
} from "../../utils/lensReducer.js";
import type { RuntimeLens } from "../../types/optics.js";

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
  const { showOnAxis, showOffAxis, rayTracksF, showChromatic, chromR, chromG, chromB, showPupils } = rays;
  const { sharedFocusT, sharedStopdownT, sharedZoomT } = sharedSliders;
  const { showAbout, showAboutSite, showOpticsPrimer } = overlays;

  /* ── Local transient state for primer level (resets when overlay closes) ── */
  const [primerLevel, setPrimerLevel] = useState<"simple" | "intermediate">("simple");

  /* ── Comparison mode header height alignment ── */
  const [headerHeights, setHeaderHeights] = useState<Record<string, number>>({ a: 0, b: 0 });
  const justEnteredCompare = useRef(false);

  /* ── Sticky slider state machine (see useStickySliders for docs) ── */

  /* ── Persist preferences to localStorage ── */
  usePreferences(state);

  /* ── URL synchronization (lens selection, slider deep links, zoom init) ── */

  /* ── Escape key closes overlays ── */
  useEffect(() => {
    if (!showAbout && !showAboutSite && !showOpticsPrimer) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        dispatch({ type: CLOSE_ALL_OVERLAYS });
        setPrimerLevel("simple");
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showAbout, showAboutSite, showOpticsPrimer, dispatch]);

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

  /* ── Catalog names map for TopBar (avoids passing full LENS_CATALOG) ── */
  const catalogNames = useMemo(() => Object.fromEntries(CATALOG_KEYS.map((k) => [k, LENS_CATALOG[k].name])), []);

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

  const swapLenses = useCallback(() => {
    dispatch({ type: SWAP_LENSES });
  }, [dispatch]);

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
    showPupils,
    dark,
    highContrast,
    scaleMode,
    dispatch,
  } as const;

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
          <TopBar
            theme={t}
            isWide={isWide}
            lensKeyA={lensKeyA}
            lensKeyB={lensKeyB}
            comparing={comparing}
            showCompareBtn={showCompareBtn}
            onSwitchLensA={switchLensA}
            onSwitchLensB={switchLensB}
            onSwapLenses={swapLenses}
            onToggleCompare={toggleCompare}
            onOpenAboutSite={() => dispatch({ type: SET_OVERLAY, overlay: "showAboutSite", visible: true })}
            onOpenAboutAuthor={() => dispatch({ type: SET_OVERLAY, overlay: "showAbout", visible: true })}
            onOpenOpticsPrimer={() => dispatch({ type: SET_OVERLAY, overlay: "showOpticsPrimer", visible: true })}
            catalogKeys={CATALOG_KEYS}
            catalogNames={catalogNames}
          />

          {/* ── Shared controls bar (comparison mode only) ── */}
          {comparing && <ControlsBar {...controlsBarProps} compact={false} showScaleMode={true} />}

          {/* ── Mobile view toggle (narrow screens, single-lens only) ── */}
          {ENABLE_ANALYSIS_VIEW && !isWide && !comparing && (
            <ViewToggleBar
              theme={t}
              options={[
                { label: "DIAGRAM", val: "diagram" },
                { label: "ANALYSIS", val: "description" },
              ]}
              activeValue={mobileView}
              onChange={(val) => dispatch({ type: SET_MOBILE_VIEW, mobileView: val })}
              width={220}
            />
          )}

          {/* ── Desktop view toggle (wide screens, single-lens only) ── */}
          {showDesktopToggle && (
            <ViewToggleBar
              theme={t}
              options={desktopViewOptions}
              activeValue={effectiveDesktopView}
              onChange={(val) => dispatch({ type: SET_DESKTOP_VIEW, desktopView: val })}
            />
          )}

          {/* ── Mobile controls strip (narrow screens, single-lens diagram view) ── */}
          {ENABLE_MOBILE_CONTROLS_STRIP && !isWide && !comparing && mobileView === "diagram" && (
            <ControlsBar {...controlsBarProps} compact={true} showScaleMode={false} />
          )}

          {/* ── Main content area ── */}
          {comparing ? (
            <>
              {comparisonLenses?.error ? (
                <div style={{ display: "flex", justifyContent: "center", padding: 32 }}>
                  <ErrorDisplay
                    error={
                      comparisonLenses.error instanceof Error
                        ? comparisonLenses.error
                        : new Error(String(comparisonLenses.error))
                    }
                    context={{ component: "Comparison Mode", lensKey: comparisonLenses.failedKeys ?? "" }}
                    title="Failed to build lens for comparison"
                  />
                </div>
              ) : (
                isComparisonOk(comparisonLenses) &&
                focusPair &&
                aperturePair &&
                zoomPair && (
                  <ComparisonLayout
                    theme={t}
                    isWide={isWide}
                    lensKeyA={lensKeyA}
                    lensKeyB={lensKeyB}
                    focusPair={focusPair}
                    aperturePair={aperturePair}
                    zoomPair={zoomPair}
                    scaleRatios={scaleRatios}
                    maxHeaderHeight={maxHeaderHeight}
                    onHeaderHeight={handleHeaderHeight}
                    flashPanel={flashPanel}
                  />
                )
              )}
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

          {/* ── About buttons footer (mobile only) ── */}
          <AboutFooter
            theme={t}
            isWide={isWide}
            onOpenOpticsPrimer={() => dispatch({ type: SET_OVERLAY, overlay: "showOpticsPrimer", visible: true })}
            onOpenAboutSite={() => dispatch({ type: SET_OVERLAY, overlay: "showAboutSite", visible: true })}
            onOpenAboutAuthor={() => dispatch({ type: SET_OVERLAY, overlay: "showAbout", visible: true })}
          />

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

          {/* ── Optics Primer overlay ── */}
          {showOpticsPrimer && (
            <OverlayModal
              onClose={() => {
                dispatch({ type: SET_OVERLAY, overlay: "showOpticsPrimer", visible: false });
                setPrimerLevel("simple");
              }}
              theme={t}
              maxWidth={isWide ? 640 : 480}
            >
              <DescriptionPanel
                markdown={primerLevel === "simple" ? OPTICS_PRIMER_SIMPLE_MD : OPTICS_PRIMER_INTERMEDIATE_MD}
                theme={t}
              />
              <div style={{ padding: "0 24px 20px", textAlign: "center" }}>
                <button
                  onClick={() => setPrimerLevel(primerLevel === "simple" ? "intermediate" : "simple")}
                  style={{
                    background: "none",
                    border: "none",
                    color: t.descLinkColor,
                    cursor: "pointer",
                    fontSize: 12,
                    fontFamily: "inherit",
                    borderBottom: `1px solid ${t.descLinkColor}40`,
                    padding: "4px 0",
                  }}
                >
                  {primerLevel === "simple"
                    ? "Want more detail? Read the Intermediate Primer \u2192"
                    : "\u2190 Back to Simple Primer"}
                </button>
              </div>
            </OverlayModal>
          )}
        </div>
      </LensDispatchContext.Provider>
    </LensStateContext.Provider>
  );
}
