/**
 * LensDiagramLoadedState — rendered content for a successfully built lens panel.
 *
 * LensDiagramPanel owns the state and hook wiring; this component owns the JSX
 * composition for the viewport, control panel, and Abbe overlay once the lens
 * data is ready.
 */

import type { ReactNode } from "react";
import OverlayModal from "../OverlayModal.js";
import DiagramControlPanel from "../DiagramControlPanel.js";
import DiagramViewport from "./DiagramViewport.js";
import AbbeDiagram from "../../display/AbbeDiagram.js";
import type { RuntimeLens, ChromaticSpread, ElementData, ElementShape } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";
import type { RaySegment } from "../../hooks/useOnAxisRays.js";
import type { ChromaticRaySegment } from "../../hooks/useChromaticRays.js";

interface VarReadout {
  label: string;
  val: string;
}

interface LensDiagramLoadedStateProps {
  panelContainerRef: React.RefObject<HTMLDivElement | null>;
  L: RuntimeLens;
  theme: Theme;
  dark: boolean;
  isWide: boolean;
  compact: boolean;
  showControls: boolean;
  showSliders: boolean;
  headerHeight: number;
  maxSvgHeight: string;
  useSideLayout: boolean;
  zoomPanActive: boolean;
  focusT: number;
  zoomT: number;
  stopdownT: number;
  sx: (z: number) => number;
  sy: (y: number) => number;
  CX: number;
  IX: number;
  effectiveSC: number;
  zPos: number[];
  IMG_MM: number;
  shapes: ElementShape[];
  filterId: string;
  stopZ: number;
  currentFOPEN: number;
  fNumber: number;
  currentPhysStopSD: number;
  baseEPSD: number;
  varReadouts: VarReadout[];
  dynamicEFL: number;
  effectiveFNum: number;
  info: ElementData | null;
  act: number | null;
  sel: number | null;
  showOnAxis: boolean;
  showOffAxis: string;
  showChromatic: boolean;
  showPupils: boolean;
  chromR: boolean;
  chromG: boolean;
  chromB: boolean;
  rayTracksF: boolean;
  chromSpread: ChromaticSpread | null;
  rays: RaySegment[];
  offAxisRays: RaySegment[];
  chromaticRays: ChromaticRaySegment[];
  flashVisible: boolean;
  flashKey: number;
  flashFading: boolean;
  onHover: (eid: number | null) => void;
  onSelect: (eid: number | null) => void;
  analysisDrawerOpen: boolean;
  analysisDrawerTab: string;
  bokehPreviewOpen: boolean;
  focusExpanded: boolean;
  apertureExpanded: boolean;
  legendExpanded: boolean;
  showEffectiveAperture: boolean;
  abbeShowGlassType: boolean;
  overlays: {
    showLcaOverlay: boolean;
    showPetzvalOverlay: boolean;
    showAbbeDiagram: boolean;
    closeLcaOverlay: () => void;
    closePetzvalOverlay: () => void;
    openLcaOverlay: () => void;
    openPetzvalOverlay: () => void;
    openAbbeDiagram: () => void;
    closeAbbeDiagram: () => void;
  };
  adapters: {
    onAnalysisDrawerToggle: (open: boolean) => void;
    onAnalysisTabChange: (tab: string) => void;
    onBokehPreviewToggle: (open: boolean) => void;
    onAberrationsExpandedChange: (expanded: boolean) => void;
    onEffectiveApertureChange: (expanded: boolean) => void;
    onZoomChange: (value: number) => void;
    onFocusChange: (value: number) => void;
    onStopdownChange: (value: number) => void;
    onFocusExpandedChange: (expanded: boolean) => void;
    onApertureExpandedChange: (expanded: boolean) => void;
    onLegendExpandedChange: (expanded: boolean) => void;
    onSliderPointerUp: () => void;
    onAbbeShowGlassTypeChange: (value: boolean) => void;
  };
  zoomHook: {
    state: { zoom: number };
    viewBox: string;
    isPanning: boolean;
    reset: () => void;
    zoomIn: () => void;
    zoomOut: () => void;
    panBy: (dx: number, dy: number) => void;
    handleWheel: (e: React.WheelEvent<SVGSVGElement>) => void;
    handlePointerDown: (e: React.PointerEvent<SVGSVGElement>) => void;
    handlePointerMove: (e: React.PointerEvent<SVGSVGElement>) => void;
    handlePointerUp: (e: React.PointerEvent<SVGSVGElement>) => void;
    handleTouchStart: (e: React.TouchEvent<SVGSVGElement>) => void;
    handleTouchMove: (e: React.TouchEvent<SVGSVGElement>) => void;
    handleTouchEnd: (e: React.TouchEvent<SVGSVGElement>) => void;
  };
  onZoomPanToggle: (active: boolean) => void;
  analysisContent: ReactNode;
  bokehPreviewContent: ReactNode;
  header: ReactNode;
}

export default function LensDiagramLoadedState({
  panelContainerRef,
  L,
  theme: t,
  dark,
  isWide,
  compact,
  showControls,
  showSliders,
  maxSvgHeight,
  useSideLayout,
  headerHeight,
  zoomPanActive,
  focusT,
  zoomT,
  stopdownT,
  sx,
  sy,
  CX,
  IX,
  effectiveSC,
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
  dynamicEFL,
  effectiveFNum,
  info,
  act,
  sel,
  showOnAxis,
  showOffAxis,
  showChromatic,
  showPupils,
  chromR,
  chromG,
  chromB,
  rayTracksF,
  chromSpread,
  rays,
  offAxisRays,
  chromaticRays,
  flashVisible,
  flashKey,
  flashFading,
  onHover,
  onSelect,
  analysisDrawerOpen,
  analysisDrawerTab,
  bokehPreviewOpen,
  focusExpanded,
  apertureExpanded,
  legendExpanded,
  showEffectiveAperture,
  abbeShowGlassType,
  overlays,
  adapters,
  zoomHook,
  onZoomPanToggle,
  analysisContent,
  bokehPreviewContent,
  header,
}: LensDiagramLoadedStateProps) {
  return (
    <>
      <div ref={panelContainerRef} style={{ position: "relative" }}>
        {header}
        <div style={useSideLayout ? { display: "flex", minHeight: 0 } : undefined}>
          <DiagramViewport
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
            chromSpread={chromSpread ?? null}
            showOnAxis={showOnAxis}
            showOffAxis={showOffAxis}
            showChromatic={showChromatic}
            showPupils={showPupils}
            act={act}
            onHover={onHover}
            onSelect={onSelect}
            sel={sel}
            maxSvgHeight={maxSvgHeight}
            useSideLayout={useSideLayout}
            headerHeight={headerHeight}
            compact={compact}
            flashVisible={flashVisible}
            flashKey={flashKey}
            flashFading={flashFading}
            showLcaOverlay={overlays.showLcaOverlay}
            showPetzvalOverlay={overlays.showPetzvalOverlay}
            onCloseLcaOverlay={overlays.closeLcaOverlay}
            onClosePetzvalOverlay={overlays.closePetzvalOverlay}
            onOpenLcaOverlay={overlays.openLcaOverlay}
            onOpenPetzvalOverlay={overlays.openPetzvalOverlay}
            analysisDrawerOpen={analysisDrawerOpen}
            onAnalysisDrawerToggle={adapters.onAnalysisDrawerToggle}
            analysisDrawerTab={analysisDrawerTab}
            onAnalysisTabChange={adapters.onAnalysisTabChange}
            isWide={isWide}
            zoomPanActive={zoomPanActive}
            onZoomPanToggle={onZoomPanToggle}
            zoomLevel={zoomHook.state.zoom}
            onZoomReset={zoomHook.reset}
            onZoomIn={zoomHook.zoomIn}
            onZoomOut={zoomHook.zoomOut}
            onPanBy={zoomHook.panBy}
            viewBoxOverride={zoomPanActive ? zoomHook.viewBox : undefined}
            isPanning={zoomHook.isPanning}
            onSvgWheel={zoomHook.handleWheel}
            onSvgPointerDown={zoomHook.handlePointerDown}
            onSvgPointerMove={zoomHook.handlePointerMove}
            onSvgPointerUp={zoomHook.handlePointerUp}
            onSvgTouchStart={zoomHook.handleTouchStart}
            onSvgTouchMove={zoomHook.handleTouchMove}
            onSvgTouchEnd={zoomHook.handleTouchEnd}
            showBokehPreview={bokehPreviewOpen}
            onBokehPreviewToggle={adapters.onBokehPreviewToggle}
            bokehPreviewContent={bokehPreviewContent}
            analysisContent={analysisContent}
          />

          {showControls && !zoomPanActive && (
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
              info={info}
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
      </div>

      {overlays.showAbbeDiagram && (
        <OverlayModal onClose={overlays.closeAbbeDiagram} theme={t} maxWidth={580}>
          <AbbeDiagram
            L={L}
            t={t}
            showGlassType={abbeShowGlassType}
            onToggleGlassType={() => adapters.onAbbeShowGlassTypeChange(!abbeShowGlassType)}
          />
        </OverlayModal>
      )}
    </>
  );
}
