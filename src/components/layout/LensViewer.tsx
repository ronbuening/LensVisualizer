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
 * ║    • SingleLensContent — desktop/mobile single-lens layout        ║
 * ║    • AboutFooter — mobile-only page-bottom about buttons          ║
 * ║    • OverlayModal — about site/author/optics primer modals        ║
 * ║  Diagram rendering lives in LensDiagramPanel.                     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

import { useMemo, useCallback, useEffect, useRef } from "react";
import { useNavigate } from "react-router";

import T from "../../utils/themes.js";
import { LENS_CATALOG, CATALOG_KEYS, mdForKey } from "../../utils/lensCatalog.js";
import SharedSlidersBar from "./SharedSlidersBar.js";
import usePreferences from "../../utils/usePreferences.js";
import useURLSync from "../../utils/useURLSync.js";
import { LensStateContext, LensDispatchContext } from "../../utils/LensContext.js";
import useStickySliders from "../../utils/useStickySliders.js";
import { ErrorDisplay } from "../errors/ErrorBoundary.js";
import OverlayModal from "./OverlayModal.js";
import ControlsBar from "./ControlsBar.js";
import TopBar from "./TopBar.js";
import BreadcrumbBar from "./BreadcrumbBar.js";
import ViewToggleBar from "./ViewToggleBar.js";
import ComparisonLayout from "./ComparisonLayout.js";
import SingleLensContent from "./SingleLensContent.js";
import DescriptionPanel from "./DescriptionPanel.js";
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
  ENTER_COMPARE,
  EXIT_COMPARE,
} from "../../utils/lensReducer.js";
import useComparisonMode, { isComparisonOk } from "../hooks/useComparisonMode.js";
import useOverlays from "../hooks/useOverlays.js";

/* =====================================================================
 * §2  COMPONENT — State, effects, and orchestration logic
 * =====================================================================
 *
 *  Diagram rendering delegated to LensDiagramPanel.  This component
 *  handles orchestration, comparison mode, shared controls, and chrome.
 * ------------------------------------------------------------------- */

interface LensVisualizationProps {
  initialLensKey?: string;
  initialLensKeyB?: string;
}

export default function LensVisualization({ initialLensKey, initialLensKeyB }: LensVisualizationProps) {
  const navigate = useNavigate();
  const isComparePage = !!initialLensKey && !!initialLensKeyB;
  const isLensPage = !!initialLensKey && !initialLensKeyB;
  const [state, dispatch, isWide] = useLensState(CATALOG_KEYS, initialLensKey, initialLensKeyB);

  /* ── Destructure state slices for convenient access ── */
  const { lens, display, rays, sharedSliders, overlays } = state;
  const { lensKeyA, lensKeyB, comparing, scaleMode } = lens;
  const { dark, highContrast, mobileView, desktopView } = display;
  const { showOnAxis, showOffAxis, rayTracksF, showChromatic, chromR, chromG, chromB, showPupils } = rays;
  const { sharedFocusT, sharedStopdownT, sharedZoomT } = sharedSliders;
  const { showAbout, showAboutSite, showOpticsPrimer } = overlays;

  /* ── Comparison mode: lens building, slider pairs, scale ratios, header alignment ── */
  const { comparisonLenses, scaleRatios, focusPair, aperturePair, zoomPair, handleHeaderHeight, maxHeaderHeight } =
    useComparisonMode({ comparing, lensKeyA, lensKeyB, scaleMode, sharedFocusT, sharedStopdownT, sharedZoomT });

  /* ── Overlay management: primer level, escape key, open/close callbacks ── */
  const {
    primerLevel,
    togglePrimerLevel,
    openAboutSite,
    openAboutAuthor,
    openOpticsPrimer,
    closeAboutSite,
    closeAboutAuthor,
    closeOpticsPrimer,
  } = useOverlays({ showAbout, showAboutSite, showOpticsPrimer, dispatch });

  /* ── Persist preferences to localStorage ── */
  usePreferences(state);

  /* ── URL synchronization (lens selection, slider deep links, zoom init) ── */
  const { updateURLWithSliders } = useURLSync(
    state,
    dispatch,
    comparisonLenses as Parameters<typeof useURLSync>[2],
    isLensPage,
    isComparePage,
  );

  /* ── Sticky slider state machine ── */
  const justEnteredCompare = useRef(false);
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
      /* Navigate to the comparison route — pick lensKeyB from the reducer
       * (which auto-selects a different lens if A===B). We read it from
       * the state that will be produced, but since the reducer runs sync
       * we use the current values + the same auto-select logic. */
      const autoB =
        lensKeyA === lensKeyB && CATALOG_KEYS.length > 1
          ? CATALOG_KEYS[(CATALOG_KEYS.indexOf(lensKeyA) + 1) % CATALOG_KEYS.length]
          : lensKeyB;
      void navigate(`/compare/${lensKeyA}/${autoB}`, { replace: false });
    } else {
      dispatch({
        type: EXIT_COMPARE,
        focusA: focusPair?.focusA,
        stopdownA: aperturePair?.stopdownA,
      });
      void navigate(`/lens/${lensKeyA}`, { replace: false });
    }
  }, [comparing, lensKeyA, lensKeyB, focusPair, aperturePair, dispatch, resetSticky, navigate]);

  const markdown = useMemo(() => mdForKey(lensKeyA), [lensKeyA]);

  const desktopViewOptions = useMemo(() => {
    return [
      { label: "DIAGRAM", val: "diagram" },
      { label: "BOTH", val: "both" },
      { label: "ANALYSIS", val: "analysis" },
    ];
  }, []);
  const defaultDesktopView = "both";
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
      if (isComparePage) {
        void navigate(`/compare/${key}/${lensKeyB}`, { replace: true });
      } else if (isLensPage && !state.lens.comparing) {
        void navigate(`/lens/${key}`, { replace: true });
      }
    },
    [dispatch, isLensPage, isComparePage, lensKeyB, state.lens.comparing, navigate],
  );

  const switchLensB = useCallback(
    (key: string) => {
      dispatch({ type: SET_LENS_B, key });
      if (isComparePage) {
        void navigate(`/compare/${lensKeyA}/${key}`, { replace: true });
      }
    },
    [dispatch, isComparePage, lensKeyA, navigate],
  );

  const swapLenses = useCallback(() => {
    dispatch({ type: SWAP_LENSES });
    if (isComparePage) {
      void navigate(`/compare/${lensKeyB}/${lensKeyA}`, { replace: true });
    }
  }, [dispatch, isComparePage, lensKeyA, lensKeyB, navigate]);

  /* ── Context value (replaces sharedProps prop drilling) ── */
  const ctxValue = useMemo(
    () => ({ state, theme: t, isWide, updateURLWithSliders }),
    [state, t, isWide, updateURLWithSliders],
  );

  /* =====================================================================
   * §3  RENDER HELPERS — pre-built JSX fragments
   * ===================================================================== */

  const showCompareBtn = true;

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
    scaleMode,
    dispatch,
  } as const;

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
          {/* ── Breadcrumb navigation ── */}
          <BreadcrumbBar theme={t} isWide={isWide} lensKey={lensKeyA} />

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
            onOpenAboutSite={openAboutSite}
            onOpenAboutAuthor={openAboutAuthor}
            onOpenOpticsPrimer={openOpticsPrimer}
            catalogKeys={CATALOG_KEYS}
            catalogNames={catalogNames}
          />

          {/* ── Shared controls bar (comparison mode only) ── */}
          {comparing && <ControlsBar {...controlsBarProps} compact={false} showScaleMode={true} />}

          {/* ── Mobile view toggle (narrow screens, single-lens only) ── */}
          {!isWide && !comparing && (
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
          {!isWide && !comparing && mobileView === "diagram" && (
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
          ) : (
            <SingleLensContent
              theme={t}
              isWide={isWide}
              effectiveDesktopView={effectiveDesktopView}
              showDesktopToggle={showDesktopToggle}
              mobileView={mobileView}
              lensKeyA={lensKeyA}
              markdown={markdown}
            />
          )}

          {/* ── About buttons footer (mobile only) ── */}
          <AboutFooter
            theme={t}
            isWide={isWide}
            onOpenOpticsPrimer={openOpticsPrimer}
            onOpenAboutSite={openAboutSite}
            onOpenAboutAuthor={openAboutAuthor}
          />

          {/* ── About Site overlay ── */}
          {showAboutSite && (
            <OverlayModal onClose={closeAboutSite} theme={t}>
              <DescriptionPanel markdown={ABOUT_SITE_MD} theme={t} />
            </OverlayModal>
          )}

          {/* ── About Me overlay ── */}
          {showAbout && (
            <OverlayModal onClose={closeAboutAuthor} theme={t}>
              <DescriptionPanel markdown={ABOUT_ME_MD} theme={t} />
            </OverlayModal>
          )}

          {/* ── Optics Primer overlay ── */}
          {showOpticsPrimer && (
            <OverlayModal onClose={closeOpticsPrimer} theme={t} maxWidth={isWide ? 640 : 480}>
              <DescriptionPanel
                markdown={primerLevel === "simple" ? OPTICS_PRIMER_SIMPLE_MD : OPTICS_PRIMER_INTERMEDIATE_MD}
                theme={t}
              />
              <div style={{ padding: "0 24px 20px", textAlign: "center" }}>
                <button
                  onClick={togglePrimerLevel}
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
