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
 * Owns only: hover state and the structural layout that
 * wires sub-components.
 */

import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import useLensComputation from "../hooks/useLensComputation.js";
import useViewBoxZoom from "../hooks/useViewBoxZoom.js";
import useRayTracing from "../hooks/useRayTracing.js";
import useDispatchAdapters from "../hooks/useDispatchAdapters.js";
import useOverlayState from "../hooks/useOverlayState.js";
import useHeaderHeight from "../hooks/useHeaderHeight.js";
import useFlashOverlay from "../hooks/useFlashOverlay.js";
import useSideLayoutDetection from "../hooks/useSideLayoutDetection.js";
import DiagramHeader from "../controls/DiagramHeader.js";
import PanelErrorBoundary from "../errors/PanelErrorBoundary.js";
import { useLensCtx, useLensDispatch, usePanelCtx } from "../../utils/state/LensContext.js";
import useMediaQuery from "../../utils/useMediaQuery.js";
import { resolveDarkPreference } from "../../utils/theme/themePreferences.js";
import { SET_SELECTED_ELEMENT } from "../../utils/state/lensReducer.js";
import { ENABLE_CARDINAL_ELEMENTS } from "../../utils/featureFlags.js";
import AnalysisDrawerContent from "./lensDiagram/AnalysisDrawerContent.js";
import BokehPreviewOverlay from "../display/overlays/BokehPreviewOverlay.js";
import LensGroupMovementOverlay from "../display/overlays/LensGroupMovementOverlay.js";
import LensDiagramErrorState from "./lensDiagram/LensDiagramErrorState.js";
import LensDiagramLoadedState from "./lensDiagram/LensDiagramLoadedState.js";
import type { RuntimeLens } from "../../types/optics.js";
import { isHeavyLensForRayWork } from "../../optics/raySampling.js";
import { normalizePanelId, selectedElementKeyForPanel } from "../../types/state.js";

interface LensDiagramPanelProps {
  lensKey: string;
  runtimeLens?: RuntimeLens;
  focusT?: number;
  zoomT?: number;
  aberrationT?: number;
  stopdownT?: number;
  shiftMm?: number;
  tiltDeg?: number;
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
  runtimeLens,
  focusT: focusTProp,
  zoomT: zoomTProp,
  aberrationT: aberrationTProp,
  stopdownT: stopdownTProp,
  shiftMm: shiftMmProp,
  tiltDeg: tiltDegProp,
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
  const dispatch = useLensDispatch();
  const { rays: raysState, display, sliders } = state;
  const panels = usePanelCtx();
  const {
    showOnAxis,
    showOffAxis,
    rayDensity,
    showChromatic,
    chromR,
    chromG,
    chromB,
    chromV,
    rayTracksF,
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
  } = raysState;
  const systemDark = useMediaQuery("(prefers-color-scheme: dark)");
  const dark = resolveDarkPreference(display.dark, systemDark);
  const {
    focusExpanded,
    apertureExpanded,
    legendExpanded,
    headerInfoExpanded,
    abbeShowGlassType,
    glassMapOpen,
    lcaOverlayOpen,
    petzvalOverlayOpen,
    showEffectiveAperture,
    aberrationsExpanded,
    analysisDrawerOpen,
    analysisDrawerTab,
    zoomPanActive,
    bokehPreviewOpen,
    groupMovementOpen,
    groupMovementMode,
  } = panels;

  /* Per-instance sliders: use props if provided (comparison mode), else context */
  const focusT = focusTProp ?? sliders.focusT;
  const zoomT = zoomTProp ?? sliders.zoomT;
  const aberrationT = aberrationTProp ?? sliders.aberrationT ?? 0;
  const stopdownT = stopdownTProp ?? sliders.stopdownT;
  const shiftMm = shiftMmProp ?? sliders.shiftMm;
  const tiltDeg = tiltDegProp ?? sliders.tiltDeg;

  /* ── Extracted hooks ── */
  const adapters = useDispatchAdapters();
  const overlays = useOverlayState(lensKey);
  const { headerRef, headerHeight } = useHeaderHeight({ panelId, lensKey, onHeaderHeight });
  const { flashKey, flashVisible, flashFading } = useFlashOverlay(flashOverlay);

  /* ── Hover/selection state ── */
  const [hov, setHov] = useState<number | null>(null);
  const [sliderInteracting, setSliderInteracting] = useState(false);
  const panelContainerRef = useRef<HTMLDivElement | null>(null);
  const selectedElementPanelId = normalizePanelId(panelId);
  const sel = panels[selectedElementKeyForPanel(selectedElementPanelId)];

  useEffect(() => {
    setHov(null);
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
    movement,
    movementTransform,
    lensAxis,
    shapes,
    shapeError,
    stopZ,
    currentFOPEN,
    fNumber,
    currentPhysStopSD,
    baseEPSD,
    currentEPSD,
    fieldGeometry,
    cardinalElements,
    varReadouts,
    aberrationReadouts,
    dynamicEFL,
    effectiveFNum,
    filterId,
  } = useLensComputation({
    lensKey,
    runtimeLens,
    focusT,
    zoomT,
    aberrationT,
    stopdownT,
    shiftMm,
    tiltDeg,
    scaleRatio,
    panelId,
    includeCardinalExtents: ENABLE_CARDINAL_ELEMENTS && (showCardinals || showCardinalDimensions),
  });
  const resolvedMovement = movement ?? { shiftMm: 0, tiltDeg: 0, active: false };

  useEffect(() => {
    if (!L || sel == null) return;
    if (!L.elements.some((element) => element.id === sel)) {
      dispatch({
        type: SET_SELECTED_ELEMENT,
        panelId: selectedElementPanelId,
        elementId: null,
      });
    }
  }, [L, dispatch, selectedElementPanelId, sel]);

  const { onGlassMapOpenChange, onLcaOverlayChange, onPetzvalOverlayChange } = adapters;
  const openAbbeDiagram = useCallback(() => onGlassMapOpenChange(true), [onGlassMapOpenChange]);
  const closeAbbeDiagram = useCallback(() => onGlassMapOpenChange(false), [onGlassMapOpenChange]);
  const openLcaOverlay = useCallback(() => onLcaOverlayChange(true), [onLcaOverlayChange]);
  const closeLcaOverlay = useCallback(() => onLcaOverlayChange(false), [onLcaOverlayChange]);
  const openPetzvalOverlay = useCallback(() => onPetzvalOverlayChange(true), [onPetzvalOverlayChange]);
  const closePetzvalOverlay = useCallback(() => onPetzvalOverlayChange(false), [onPetzvalOverlayChange]);
  const panelOverlays = useMemo(
    () => ({
      ...overlays,
      showAbbeDiagram: glassMapOpen,
      openAbbeDiagram,
      closeAbbeDiagram,
      showLcaOverlay: lcaOverlayOpen,
      openLcaOverlay,
      closeLcaOverlay,
      showPetzvalOverlay: petzvalOverlayOpen,
      openPetzvalOverlay,
      closePetzvalOverlay,
    }),
    [
      overlays,
      glassMapOpen,
      lcaOverlayOpen,
      petzvalOverlayOpen,
      openAbbeDiagram,
      closeAbbeDiagram,
      openLcaOverlay,
      closeLcaOverlay,
      openPetzvalOverlay,
      closePetzvalOverlay,
    ],
  );

  /* ── Zoom/pan viewBox management ── */
  const zoomHook = useViewBoxZoom(L?.svgW ?? 1200, L?.svgH ?? 600, zoomPanActive);

  const handleZoomPanToggle = useCallback(
    (active: boolean) => {
      if (!active) zoomHook.reset();
      adapters.onZoomPanToggle(active);
    },
    [zoomHook, adapters],
  );

  const handleSelect = useCallback(
    (eid: number | null) => {
      const nextElementId = sel === eid ? null : eid;
      dispatch({ type: SET_SELECTED_ELEMENT, panelId: selectedElementPanelId, elementId: nextElementId });
      if (sel === eid) {
        setHov(null);
      }
    },
    [dispatch, selectedElementPanelId, sel],
  );

  const act = L ? (zoomPanActive ? null : sel || hov) : null;
  const info = act && L ? L.elements.find((e) => e.id === act) : null;
  const heavyRayWork = Boolean(L && isHeavyLensForRayWork(L));
  const effectiveRayDensity = sliderInteracting && heavyRayWork ? "normal" : rayDensity;

  /* ── Ray tracing (on-axis, off-axis, chromatic) ── */
  const { rays, offAxisRays, chromaticRays, chromSpread, chromaticSpreads, rayError } = useRayTracing({
    L,
    zPos,
    IMG_MM,
    focusT,
    zoomT,
    aberrationT,
    sx,
    sy,
    clampedRayEnd,
    movementTransform,
    currentPhysStopSD,
    currentEPSD,
    rayDensity: effectiveRayDensity,
    rayTracksF,
    showOnAxis,
    showOffAxis,
    showChromatic,
    chromR,
    chromG,
    chromB,
    chromV,
    lensKey,
  });

  return (
    <PanelErrorBoundary lensKey={lensKey}>
      {buildError ? (
        <LensDiagramErrorState
          error={buildError}
          lensKey={lensKey}
          component="LensDiagramPanel (buildLens)"
          title="Failed to build lens"
        />
      ) : shapeError ? (
        <LensDiagramErrorState
          error={shapeError}
          lensKey={lensKey}
          component="LensDiagramPanel (element shapes)"
          title="Failed to compute lens element shapes"
        />
      ) : rayError ? (
        <LensDiagramErrorState
          error={rayError}
          lensKey={lensKey}
          component="LensDiagramPanel (ray tracing)"
          title="Ray tracing failed"
        />
      ) : L ? (
        <LensDiagramLoadedState
          panelContainerRef={panelContainerRef}
          computed={{
            L,
            focusT,
            zoomT,
            aberrationT,
            stopdownT,
            shiftMm: resolvedMovement.shiftMm,
            tiltDeg: resolvedMovement.tiltDeg,
            sx,
            sy,
            CX,
            IX,
            effectiveSC,
            movementTransform,
            lensAxis,
            zPos,
            IMG_MM,
            shapes,
            filterId,
            stopZ,
            currentFOPEN,
            fNumber,
            currentPhysStopSD,
            baseEPSD,
            varReadouts,
            aberrationReadouts,
            dynamicEFL,
            effectiveFNum,
            info: info ?? null,
            act,
            sel,
            cardinalElements,
          }}
          rayData={{
            chromSpread: chromSpread ?? null,
            chromaticSpreads,
            rays,
            offAxisRays,
            chromaticRays,
          }}
          displayFlags={{
            theme: t,
            dark,
            isWide,
            compact,
            showControls,
            showSliders,
            headerHeight,
            maxSvgHeight,
            useSideLayout,
            zoomPanActive,
            showOnAxis,
            showOffAxis,
            showChromatic,
            showPupils,
            showCardinals: ENABLE_CARDINAL_ELEMENTS && showCardinals,
            showCardinalFocal,
            showCardinalPrincipal,
            showCardinalNodal,
            showCardinalDimensions: ENABLE_CARDINAL_ELEMENTS && showCardinalDimensions,
            showCardinalEfl,
            showCardinalBfd,
            showCardinalFfd,
            showCardinalHiatus,
            showCardinalTotalTrack,
            chromR,
            chromG,
            chromB,
            chromV,
            rayTracksF,
            flashVisible,
            flashKey,
            flashFading,
            analysisDrawerOpen,
            analysisDrawerTab,
            bokehPreviewOpen,
            groupMovementOpen,
            groupMovementMode,
            focusExpanded,
            apertureExpanded,
            legendExpanded,
            showEffectiveAperture,
            abbeShowGlassType,
          }}
          overlays={panelOverlays}
          adapters={adapters}
          interactions={{
            onHover: setHov,
            onSelect: handleSelect,
            zoomHook,
            onZoomPanToggle: handleZoomPanToggle,
            onSliderInteractionChange: setSliderInteracting,
          }}
          bokehPreviewContent={
            bokehPreviewOpen ? (
              <BokehPreviewOverlay
                L={L}
                focusT={focusT}
                zoomT={zoomT}
                aberrationT={aberrationT}
                currentEPSD={currentEPSD}
                currentPhysStopSD={currentPhysStopSD}
                t={t}
              />
            ) : null
          }
          groupMovementContent={
            groupMovementOpen ? (
              <LensGroupMovementOverlay
                L={L}
                t={t}
                focusT={focusT}
                zoomT={zoomT}
                aberrationT={aberrationT}
                mode={groupMovementMode}
                onModeChange={adapters.onGroupMovementModeChange}
              />
            ) : null
          }
          analysisContent={
            analysisDrawerOpen ? (
              <AnalysisDrawerContent
                activeTab={analysisDrawerTab}
                L={L}
                t={t}
                zPos={zPos}
                focusT={focusT}
                zoomT={zoomT}
                aberrationT={aberrationT}
                dynamicEFL={dynamicEFL}
                currentEPSD={currentEPSD}
                currentPhysStopSD={currentPhysStopSD}
                fieldGeometry={fieldGeometry}
                movementActive={resolvedMovement.active}
                sliderInteracting={sliderInteracting}
                aberrationsExpanded={aberrationsExpanded}
                onAberrationsExpandedChange={adapters.onAberrationsExpandedChange}
              />
            ) : null
          }
          header={
            !zoomPanActive ? (
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
                rayDensity={rayDensity}
                onRayDensityChange={adapters.onRayDensityChange}
                rayTracksF={rayTracksF}
                onRayTracksFChange={adapters.onRayTracksFChange}
                showChromatic={showChromatic}
                onShowChromaticChange={adapters.onShowChromaticChange}
                chromR={chromR}
                chromG={chromG}
                chromB={chromB}
                chromV={chromV}
                onChromRChange={adapters.onChromRChange}
                onChromGChange={adapters.onChromGChange}
                onChromBChange={adapters.onChromBChange}
                onChromVChange={adapters.onChromVChange}
                showPupils={showPupils}
                onShowPupilsChange={adapters.onShowPupilsChange}
                showCardinals={showCardinals}
                onShowCardinalsChange={adapters.onShowCardinalsChange}
                showCardinalFocal={showCardinalFocal}
                onShowCardinalFocalChange={adapters.onShowCardinalFocalChange}
                showCardinalPrincipal={showCardinalPrincipal}
                onShowCardinalPrincipalChange={adapters.onShowCardinalPrincipalChange}
                showCardinalNodal={showCardinalNodal}
                onShowCardinalNodalChange={adapters.onShowCardinalNodalChange}
                showCardinalDimensions={showCardinalDimensions}
                onShowCardinalDimensionsChange={adapters.onShowCardinalDimensionsChange}
                showCardinalEfl={showCardinalEfl}
                onShowCardinalEflChange={adapters.onShowCardinalEflChange}
                showCardinalBfd={showCardinalBfd}
                onShowCardinalBfdChange={adapters.onShowCardinalBfdChange}
                showCardinalFfd={showCardinalFfd}
                onShowCardinalFfdChange={adapters.onShowCardinalFfdChange}
                showCardinalHiatus={showCardinalHiatus}
                onShowCardinalHiatusChange={adapters.onShowCardinalHiatusChange}
                showCardinalTotalTrack={showCardinalTotalTrack}
                onShowCardinalTotalTrackChange={adapters.onShowCardinalTotalTrackChange}
                headerInfoExpanded={headerInfoExpanded}
                onHeaderInfoExpandedChange={adapters.onHeaderInfoExpandedChange}
                minHeaderHeight={minHeaderHeight}
              />
            ) : null
          }
        />
      ) : null}
    </PanelErrorBoundary>
  );
}
