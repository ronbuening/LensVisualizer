/**
 * LensDiagramPanel — Composition layer for the lens diagram.
 *
 * Orchestrates sub-components and custom hooks:
 *   useLensComputation  → lens building, layout, transforms, shapes, aperture
 *   useRayTracing       → on-axis, off-axis, chromatic ray fans
 *   useDispatchAdapters → context dispatch callback wiring
 *   useOverlayState     → Abbe/LCA/Petzval overlay open/close state
 *   useHeaderHeight     → header ResizeObserver + height reporting
 *   useFlashOverlay     → flash animation state machine
 *   useSideLayoutDetection → overflow-based side layout switching
 *   DiagramHeader       → title, specs, theme/ray toggle controls
 *   DiagramSVG          → full SVG rendering of the optical system
 *   DiagramControlPanel → sliders, inspector, legend
 *   PanelErrorBoundary  → panel-level error boundary
 *
 * Owns only: hover/selection state and the structural layout that
 * wires sub-components.
 */

import { useState, useEffect, useRef } from "react";
import useLensComputation from "../hooks/useLensComputation.js";
import useRayTracing from "../hooks/useRayTracing.js";
import useDispatchAdapters from "../hooks/useDispatchAdapters.js";
import useOverlayState from "../hooks/useOverlayState.js";
import useHeaderHeight from "../hooks/useHeaderHeight.js";
import useFlashOverlay from "../hooks/useFlashOverlay.js";
import useSideLayoutDetection from "../hooks/useSideLayoutDetection.js";
import DiagramSVG from "../diagram/DiagramSVG.js";
import DiagramHeader from "../controls/DiagramHeader.js";
import DiagramControlPanel from "./DiagramControlPanel.js";
import PanelErrorBoundary from "../errors/PanelErrorBoundary.js";
import OverlayModal from "./OverlayModal.js";
import PanelOverlay from "./PanelOverlay.js";
import AnalysisDrawer from "./AnalysisDrawer.js";
import type { AnalysisTab } from "./AnalysisDrawer.js";
import AberrationsPanel from "../display/AberrationsPanel.js";
import DistortionTab from "../display/DistortionTab.js";
import VignettingTab from "../display/VignettingTab.js";
import AbbeDiagram from "../display/AbbeDiagram.js";
import LCAOverlayContent from "../diagram/LCAOverlayContent.js";
import PetzvalOverlayContent from "../diagram/PetzvalOverlayContent.js";
import { ErrorDisplay } from "../errors/ErrorBoundary.js";
import { useLensCtx } from "../../utils/LensContext.js";
import useMediaQuery from "../../utils/useMediaQuery.js";

const ANALYSIS_TABS: AnalysisTab[] = [
  { id: "aberrations", label: "ABERRATIONS" },
  { id: "distortion", label: "DISTORTION" },
  { id: "vignetting", label: "VIGNETTING" },
];

interface LensDiagramPanelProps {
  lensKey: string;
  focusT?: number;
  zoomT?: number;
  stopdownT?: number;
  scaleRatio: number | null;
  panelId: string;
  compact: boolean;
  showControls?: boolean;
  showSliders?: boolean;
  maxSvgHeight?: string;
  minHeaderHeight?: number;
  onHeaderHeight?: (panelId: string, height: number) => void;
  flashOverlay?: boolean;
  sideLayoutEnabled?: boolean;
}

export default function LensDiagramPanel({
  lensKey,
  focusT: focusTProp,
  zoomT: zoomTProp,
  stopdownT: stopdownTProp,
  scaleRatio,
  panelId,
  compact,
  showControls = true,
  showSliders = true,
  maxSvgHeight = "calc(100vh - 260px)",
  minHeaderHeight,
  onHeaderHeight,
  flashOverlay = false,
  sideLayoutEnabled = false,
}: LensDiagramPanelProps) {
  /* ── Read shared state from context ── */
  const { state, theme: t, isWide } = useLensCtx();
  const { rays: raysState, display, panels, sliders } = state;
  const { showOnAxis, showOffAxis, showChromatic, chromR, chromG, chromB, rayTracksF, showPupils } = raysState;
  const systemDark = useMediaQuery("(prefers-color-scheme: dark)");
  const dark = display.dark !== null ? display.dark : systemDark;
  const {
    focusExpanded,
    apertureExpanded,
    legendExpanded,
    headerInfoExpanded,
    abbeShowGlassType,
    showEffectiveAperture,
    aberrationsExpanded,
    analysisDrawerOpen,
    analysisDrawerTab,
  } = panels;

  /* Per-instance sliders: use props if provided (comparison mode), else context */
  const focusT = focusTProp ?? sliders.focusT;
  const zoomT = zoomTProp ?? sliders.zoomT;
  const stopdownT = stopdownTProp ?? sliders.stopdownT;

  /* ── Extracted hooks ── */
  const adapters = useDispatchAdapters();
  const overlays = useOverlayState(lensKey);
  const { headerRef, headerHeight } = useHeaderHeight({ panelId, lensKey, onHeaderHeight });
  const { flashKey, flashVisible, flashFading } = useFlashOverlay(flashOverlay);

  /* ── Hover/selection state ── */
  const [hov, setHov] = useState<number | null>(null);
  const [sel, setSel] = useState<number | null>(null);
  const panelContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setHov(null);
    setSel(null);
  }, [lensKey]);

  /* ── Side-panel overflow detection ── */
  const useSideLayout = useSideLayoutDetection({
    enabled: sideLayoutEnabled,
    containerRef: panelContainerRef,
    deps: [lensKey, showSliders, showControls, showChromatic],
  });

  /* ── Lens computation (build, layout, transforms, shapes, aperture) ── */
  const {
    L,
    buildError,
    IMG_MM,
    zPos,
    sx,
    sy,
    clampedRayEnd,
    CX,
    IX,
    effectiveSC,
    shapes,
    stopZ,
    currentFOPEN,
    fNumber,
    currentPhysStopSD,
    baseEPSD,
    currentEPSD,
    varReadouts,
    dynamicEFL,
    effectiveFNum,
    filterId,
  } = useLensComputation({ lensKey, focusT, zoomT, stopdownT, scaleRatio, panelId });

  const act = L ? sel || hov : null;
  const info = act && L ? L.elements.find((e) => e.id === act) : null;

  /* ── Ray tracing (on-axis, off-axis, chromatic) ── */
  const { rays, offAxisRays, chromaticRays, chromSpread } = useRayTracing({
    L,
    zPos,
    IMG_MM,
    focusT,
    zoomT,
    sx,
    sy,
    clampedRayEnd,
    currentPhysStopSD,
    currentEPSD,
    rayTracksF,
    showOffAxis,
    showChromatic,
    chromR,
    chromG,
    chromB,
    lensKey,
  });

  return (
    <PanelErrorBoundary lensKey={lensKey}>
      {buildError ? (
        <div style={{ display: "flex", justifyContent: "center", padding: 24 }}>
          <ErrorDisplay
            error={buildError instanceof Error ? buildError : new Error(String(buildError))}
            context={{ component: "LensDiagramPanel (buildLens)", lensKey }}
            title="Failed to build lens"
          />
        </div>
      ) : L ? (
        <div ref={panelContainerRef} style={{ position: "relative" }}>
          {/* ── Header ── */}
          <DiagramHeader
            ref={headerRef}
            L={L}
            t={t}
            compact={compact}
            isWide={isWide}
            focusT={focusT}
            zoomT={zoomT}
            fNumber={fNumber}
            showOnAxis={showOnAxis}
            onShowOnAxisChange={adapters.onShowOnAxisChange}
            showOffAxis={showOffAxis}
            onShowOffAxisChange={adapters.onShowOffAxisChange}
            rayTracksF={rayTracksF}
            onRayTracksFChange={adapters.onRayTracksFChange}
            showChromatic={showChromatic}
            onShowChromaticChange={adapters.onShowChromaticChange}
            chromR={chromR}
            chromG={chromG}
            chromB={chromB}
            onChromRChange={adapters.onChromRChange}
            onChromGChange={adapters.onChromGChange}
            onChromBChange={adapters.onChromBChange}
            showPupils={showPupils}
            onShowPupilsChange={adapters.onShowPupilsChange}
            headerInfoExpanded={headerInfoExpanded}
            onHeaderInfoExpandedChange={adapters.onHeaderInfoExpandedChange}
            minHeaderHeight={minHeaderHeight}
          />
          {/* ── SVG + controls body (side-by-side when overflowing) ── */}
          <div style={useSideLayout ? { display: "flex", minHeight: 0 } : undefined}>
            {/* ── SVG viewport ── */}
            <div style={useSideLayout ? { flex: 1, minWidth: 0, position: "relative" } : { position: "relative" }}>
              <DiagramSVG
                L={L}
                t={t}
                dark={dark}
                sx={sx}
                sy={sy}
                CX={CX}
                IX={IX}
                effectiveSC={effectiveSC}
                zPos={zPos}
                IMG_MM={IMG_MM}
                shapes={shapes}
                filterId={filterId}
                stopZ={stopZ}
                currentPhysStopSD={currentPhysStopSD}
                rays={rays}
                offAxisRays={offAxisRays}
                chromaticRays={chromaticRays}
                chromSpread={chromSpread}
                showOnAxis={showOnAxis}
                showOffAxis={showOffAxis}
                showChromatic={showChromatic}
                showPupils={showPupils}
                act={act}
                onHover={setHov}
                onSelect={(eid) => {
                  if (sel === eid) {
                    setSel(null);
                    setHov(null);
                  } else {
                    setSel(eid);
                  }
                }}
                sel={sel}
                maxSvgHeight={maxSvgHeight}
                useSideLayout={useSideLayout}
                headerHeight={headerHeight}
                compact={compact}
                flashVisible={flashVisible}
                flashKey={flashKey}
                flashFading={flashFading}
                onLcaInsetClick={overlays.openLcaOverlay}
                onPetzvalBadgeClick={overlays.openPetzvalOverlay}
              />
              {overlays.showLcaOverlay && showChromatic && chromSpread && (
                <PanelOverlay onClose={overlays.closeLcaOverlay} theme={t}>
                  <LCAOverlayContent chromSpread={chromSpread} effectiveSC={effectiveSC} IMG_MM={IMG_MM} t={t} />
                </PanelOverlay>
              )}
              {overlays.showPetzvalOverlay && L && (
                <PanelOverlay onClose={overlays.closePetzvalOverlay} theme={t}>
                  <PetzvalOverlayContent L={L} t={t} />
                </PanelOverlay>
              )}
              {/* ── Analysis drawer launch button (lower-left of SVG viewport) ── */}
              {!analysisDrawerOpen && (
                <button
                  onClick={() => adapters.onAnalysisDrawerToggle(true)}
                  style={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                    zIndex: 5,
                    borderRadius: 10,
                    cursor: "pointer",
                    padding: "4px 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    fontSize: 9,
                    fontFamily: "inherit",
                    letterSpacing: "0.08em",
                    transition: "all 0.25s",
                    background: t.toggleBg,
                    border: `1px solid ${t.toggleBorder}`,
                    color: t.muted,
                  }}
                >
                  <span>ABERRATIONS</span>
                  <span style={{ fontSize: 11, lineHeight: 1 }}>{"\u25B8"}</span>
                </button>
              )}
              {/* ── Analysis drawer ── */}
              <AnalysisDrawer
                open={analysisDrawerOpen}
                onClose={() => adapters.onAnalysisDrawerToggle(false)}
                activeTab={analysisDrawerTab}
                onTabChange={adapters.onAnalysisTabChange}
                tabs={ANALYSIS_TABS}
                t={t}
                isWide={isWide}
              >
                {analysisDrawerTab === "aberrations" && (
                  <AberrationsPanel
                    L={L}
                    t={t}
                    zPos={zPos}
                    focusT={focusT}
                    zoomT={zoomT}
                    currentEPSD={currentEPSD}
                    currentPhysStopSD={currentPhysStopSD}
                    expanded={aberrationsExpanded}
                    onExpandedChange={adapters.onAberrationsExpandedChange}
                  />
                )}
                {analysisDrawerTab === "distortion" && (
                  <DistortionTab
                    L={L}
                    t={t}
                    zPos={zPos}
                    focusT={focusT}
                    zoomT={zoomT}
                    dynamicEFL={dynamicEFL}
                    currentPhysStopSD={currentPhysStopSD}
                  />
                )}
                {analysisDrawerTab === "vignetting" && (
                  <VignettingTab
                    L={L}
                    t={t}
                    zPos={zPos}
                    focusT={focusT}
                    zoomT={zoomT}
                    currentEPSD={currentEPSD}
                    currentPhysStopSD={currentPhysStopSD}
                  />
                )}
              </AnalysisDrawer>
            </div>
            {/* end SVG wrapper */}

            {/* ── Control panel ── */}
            {showControls && (
              <DiagramControlPanel
                L={L}
                t={t}
                compact={compact}
                isWide={isWide}
                useSideLayout={useSideLayout}
                headerHeight={headerHeight}
                showSliders={showSliders}
                zoomT={zoomT}
                focusT={focusT}
                stopdownT={stopdownT}
                fNumber={fNumber}
                currentFOPEN={currentFOPEN}
                currentPhysStopSD={currentPhysStopSD}
                baseEPSD={baseEPSD}
                dynamicEFL={dynamicEFL}
                effectiveFNum={effectiveFNum}
                showEffectiveAperture={showEffectiveAperture}
                onToggleEffectiveAperture={() => adapters.onEffectiveApertureChange(!showEffectiveAperture)}
                varReadouts={varReadouts}
                focusExpanded={focusExpanded}
                apertureExpanded={apertureExpanded}
                legendExpanded={legendExpanded}
                onZoomChange={adapters.onZoomChange}
                onFocusChange={adapters.onFocusChange}
                onStopdownChange={adapters.onStopdownChange}
                onFocusExpandedChange={adapters.onFocusExpandedChange}
                onApertureExpandedChange={adapters.onApertureExpandedChange}
                onLegendExpandedChange={adapters.onLegendExpandedChange}
                onSliderPointerUp={adapters.onSliderPointerUp}
                info={info ?? null}
                showOnAxis={showOnAxis}
                showOffAxis={showOffAxis}
                showChromatic={showChromatic}
                chromR={chromR}
                chromG={chromG}
                chromB={chromB}
                chromSpread={chromSpread ?? null}
                rayTracksF={rayTracksF}
                onOpenAbbeDiagram={overlays.openAbbeDiagram}
              />
            )}
          </div>
          {/* end side-layout flex wrapper */}
        </div>
      ) : null}
      {overlays.showAbbeDiagram && L && (
        <OverlayModal onClose={overlays.closeAbbeDiagram} theme={t} maxWidth={580}>
          <AbbeDiagram
            L={L}
            t={t}
            showGlassType={abbeShowGlassType}
            onToggleGlassType={() => adapters.onAbbeShowGlassTypeChange(!abbeShowGlassType)}
          />
        </OverlayModal>
      )}
    </PanelErrorBoundary>
  );
}
