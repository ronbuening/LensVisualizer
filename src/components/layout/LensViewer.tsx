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
 * ║    • ComparisonContent — comparison-mode panels and sliders       ║
 * ║    • SingleLensContent — desktop/mobile single-lens layout        ║
 * ║    • AboutFooter — mobile-only page-bottom about buttons          ║
 * ║    • OverlayModal — about site/author/optics primer modals        ║
 * ║  Diagram rendering lives in LensDiagramPanel.                     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

import { useMemo, useCallback } from "react";
import { useNavigate } from "react-router";

import { LENS_CATALOG, CATALOG_KEYS, mdForKey } from "../../utils/lensCatalog.js";
import usePreferences from "../../utils/usePreferences.js";
import useURLSync from "../../utils/useURLSync.js";
import { LensStateContext, LensDispatchContext, PanelStateContext } from "../../utils/LensContext.js";
import { resolveDarkPreference, resolveTheme } from "../../utils/themePreferences.js";
import _ABOUT_ME_MD from "../../content/AboutMe.md?raw";
import _ABOUT_SITE_MD from "../../content/AboutSite.md?raw";
import _OPTICS_PRIMER_SIMPLE_MD from "../../content/OpticsPrimerSimple.md?raw";
import _OPTICS_PRIMER_INTERMEDIATE_MD from "../../content/OpticsPrimerIntermediate.md?raw";
import _ABERRATIONS_PRIMER_SIMPLE_MD from "../../content/AberrationsPrimerSimple.md?raw";
import _ABERRATIONS_PRIMER_INTERMEDIATE_MD from "../../content/AberrationsPrimerIntermediate.md?raw";
import { stripFrontmatter } from "../../utils/homepageContent.js";
import useLensState from "../../utils/useLensState.js";
import useMediaQuery from "../../utils/useMediaQuery.js";
import { SET_LENS_A, SET_LENS_B, SWAP_LENSES, SET_MOBILE_VIEW, SET_DESKTOP_VIEW } from "../../utils/lensReducer.js";
import useComparisonOrchestration from "../../comparison/useComparisonOrchestration.js";
import useOverlays from "../hooks/useOverlays.js";
import ViewerChrome from "./lensViewer/ViewerChrome.js";
import ViewerContent from "./lensViewer/ViewerContent.js";
import ViewerOverlays from "./lensViewer/ViewerOverlays.js";

const ABOUT_ME_MD = stripFrontmatter(_ABOUT_ME_MD);
const ABOUT_SITE_MD = stripFrontmatter(_ABOUT_SITE_MD);
const OPTICS_PRIMER_SIMPLE_MD = stripFrontmatter(_OPTICS_PRIMER_SIMPLE_MD);
const OPTICS_PRIMER_INTERMEDIATE_MD = stripFrontmatter(_OPTICS_PRIMER_INTERMEDIATE_MD);
const ABERRATIONS_PRIMER_SIMPLE_MD = stripFrontmatter(_ABERRATIONS_PRIMER_SIMPLE_MD);
const ABERRATIONS_PRIMER_INTERMEDIATE_MD = stripFrontmatter(_ABERRATIONS_PRIMER_INTERMEDIATE_MD);

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
  const { lens, display, rays, sharedSliders, panels, overlays } = state;
  const { lensKeyA, lensKeyB, comparing, scaleMode } = lens;
  const { dark, highContrast, mobileView, desktopView } = display;
  const {
    showOnAxis,
    showOffAxis,
    rayDensity,
    rayTracksF,
    showChromatic,
    chromR,
    chromG,
    chromB,
    chromV,
    showPupils,
    showCardinals,
    showCardinalFocal,
    showCardinalPrincipal,
    showCardinalNodal,
    showCardinalDimensions,
    showCardinalEfl,
    showCardinalBfd,
    showCardinalFfd,
    showCardinalHiatus,
    showCardinalTotalTrack,
  } = rays;
  const { sharedFocusT, sharedStopdownT, sharedZoomT, sharedShiftMm, sharedTiltDeg } = sharedSliders;
  const { showAbout, showAboutSite, showOpticsPrimer, showAberrationsPrimer } = overlays;

  /* ── Comparison mode orchestration ── */
  const {
    comparisonLenses,
    scaleRatios,
    focusPair,
    aperturePair,
    zoomPair,
    movementPair,
    handleHeaderHeight,
    maxHeaderHeight,
    flashPanel,
    handleSharedFocusChange,
    handleSharedStopdownChange,
    handleSharedShiftChange,
    handleSharedTiltChange,
    handleFocusPointerDown,
    handleAperturePointerDown,
    toggleCompare,
  } = useComparisonOrchestration({ state, dispatch, navigate, catalogKeys: CATALOG_KEYS });

  /* ── Overlay management: primer level, escape key, open/close callbacks ── */
  const {
    primerLevel,
    togglePrimerLevel,
    aberrationsLevel,
    toggleAberrationsLevel,
    openAboutSite,
    openAboutAuthor,
    openOpticsPrimer,
    openAberrationsPrimer,
    closeAboutSite,
    closeAboutAuthor,
    closeOpticsPrimer,
    closeAberrationsPrimer,
  } = useOverlays({ showAbout, showAboutSite, showOpticsPrimer, showAberrationsPrimer, dispatch });

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

  const markdown = useMemo(() => mdForKey(lensKeyA), [lensKeyA]);

  const desktopViewOptions = useMemo(() => {
    return [
      { label: "DIAGRAM", val: "diagram" },
      { label: "BOTH", val: "both" },
      { label: "ANALYSIS", val: "analysis" },
    ] as const;
  }, []);
  const defaultDesktopView = "both";
  const effectiveDesktopView = desktopViewOptions.some((o) => o.val === desktopView) ? desktopView : defaultDesktopView;
  const showDesktopToggle = isWide && !comparing && desktopViewOptions.length > 1;

  /* Theme selection: 2×2 matrix of dark/light × normal/high-contrast.
     dark===null means "auto" — resolved reactively via system media query. */
  const systemDark = useMediaQuery("(prefers-color-scheme: dark)");
  const resolvedDark = resolveDarkPreference(dark, systemDark);
  const t = resolveTheme(resolvedDark, highContrast);

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
    rayDensity,
    rayTracksF,
    showChromatic,
    chromR,
    chromG,
    chromB,
    chromV,
    showPupils,
    showCardinals,
    showCardinalFocal,
    showCardinalPrincipal,
    showCardinalNodal,
    showCardinalDimensions,
    showCardinalEfl,
    showCardinalBfd,
    showCardinalFfd,
    showCardinalHiatus,
    showCardinalTotalTrack,
    scaleMode,
    dispatch,
  } as const;

  /* =====================================================================
   * §4  JSX — Top bar, comparison chrome, diagram panels, overlays
   * ===================================================================== */
  return (
    <LensStateContext.Provider value={ctxValue}>
      <PanelStateContext.Provider value={state.panels}>
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
            <ViewerChrome
              theme={t}
              isWide={isWide}
              comparing={comparing}
              lensKeyA={lensKeyA}
              lensKeyB={lensKeyB}
              showCompareBtn={showCompareBtn}
              onSwitchLensA={switchLensA}
              onSwitchLensB={switchLensB}
              onSwapLenses={swapLenses}
              onToggleCompare={toggleCompare}
              onOpenAboutSite={openAboutSite}
              onOpenAboutAuthor={openAboutAuthor}
              onOpenOpticsPrimer={openOpticsPrimer}
              onOpenAberrationsPrimer={openAberrationsPrimer}
              catalogKeys={CATALOG_KEYS}
              catalogNames={catalogNames}
              controlsBarProps={controlsBarProps}
              mobileView={mobileView}
              onMobileViewChange={(val) => dispatch({ type: SET_MOBILE_VIEW, mobileView: val })}
              showDesktopToggle={showDesktopToggle}
              desktopViewOptions={desktopViewOptions}
              effectiveDesktopView={effectiveDesktopView}
              onDesktopViewChange={(val) => dispatch({ type: SET_DESKTOP_VIEW, desktopView: val })}
            />

            <ViewerContent
              theme={t}
              isWide={isWide}
              comparing={comparing}
              lensKeyA={lensKeyA}
              lensKeyB={lensKeyB}
              comparisonLenses={comparisonLenses}
              focusPair={focusPair}
              aperturePair={aperturePair}
              zoomPair={zoomPair}
              movementPair={movementPair}
              scaleRatios={scaleRatios}
              maxHeaderHeight={maxHeaderHeight}
              onHeaderHeight={handleHeaderHeight}
              flashPanel={flashPanel}
              sharedFocusT={sharedFocusT}
              sharedStopdownT={sharedStopdownT}
              sharedZoomT={sharedZoomT}
              sharedShiftMm={sharedShiftMm}
              sharedTiltDeg={sharedTiltDeg}
              onSharedFocusChange={handleSharedFocusChange}
              onSharedStopdownChange={handleSharedStopdownChange}
              onSharedShiftChange={handleSharedShiftChange}
              onSharedTiltChange={handleSharedTiltChange}
              onFocusPointerDown={handleFocusPointerDown}
              onAperturePointerDown={handleAperturePointerDown}
              onSliderPointerUp={updateURLWithSliders}
              dispatch={dispatch}
              showEffectiveAperture={panels.showEffectiveAperture}
              effectiveDesktopView={effectiveDesktopView}
              showDesktopToggle={showDesktopToggle}
              mobileView={mobileView}
              markdown={markdown}
            />

            <ViewerOverlays
              theme={t}
              isWide={isWide}
              showAbout={showAbout}
              showAboutSite={showAboutSite}
              showOpticsPrimer={showOpticsPrimer}
              showAberrationsPrimer={showAberrationsPrimer}
              primerLevel={primerLevel}
              aberrationsLevel={aberrationsLevel}
              onTogglePrimerLevel={togglePrimerLevel}
              onToggleAberrationsLevel={toggleAberrationsLevel}
              onOpenOpticsPrimer={openOpticsPrimer}
              onOpenAberrationsPrimer={openAberrationsPrimer}
              onOpenAboutSite={openAboutSite}
              onOpenAboutAuthor={openAboutAuthor}
              onCloseAboutSite={closeAboutSite}
              onCloseAboutAuthor={closeAboutAuthor}
              onCloseOpticsPrimer={closeOpticsPrimer}
              onCloseAberrationsPrimer={closeAberrationsPrimer}
              aboutSiteMarkdown={ABOUT_SITE_MD}
              aboutAuthorMarkdown={ABOUT_ME_MD}
              opticsPrimerSimpleMarkdown={OPTICS_PRIMER_SIMPLE_MD}
              opticsPrimerIntermediateMarkdown={OPTICS_PRIMER_INTERMEDIATE_MD}
              aberrationsPrimerSimpleMarkdown={ABERRATIONS_PRIMER_SIMPLE_MD}
              aberrationsPrimerIntermediateMarkdown={ABERRATIONS_PRIMER_INTERMEDIATE_MD}
            />
          </div>
        </LensDispatchContext.Provider>
      </PanelStateContext.Provider>
    </LensStateContext.Provider>
  );
}
