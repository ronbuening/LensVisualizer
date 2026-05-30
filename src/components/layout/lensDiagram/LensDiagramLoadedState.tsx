/**
 * LensDiagramLoadedState — rendered content for a successfully built lens panel.
 *
 * LensDiagramPanel owns the state and hook wiring; this component owns the JSX
 * composition for the viewport, control panel, and Abbe overlay once the lens
 * data is ready.
 */

import OverlayModal from "../OverlayModal.js";
import DiagramControlPanel from "../DiagramControlPanel.js";
import DiagramViewport from "./DiagramViewport.js";
import AbbeDiagram from "../../display/AbbeDiagram.js";
import AsphericComparisonOverlay from "../../display/overlays/AsphericComparisonOverlay.js";
import type { LensDiagramLoadedStateProps } from "./panelModel.js";

export default function LensDiagramLoadedState({
  panelContainerRef,
  computed,
  rayData,
  displayFlags,
  overlays,
  adapters,
  interactions,
  analysisContent,
  groupMovementContent,
  header,
}: LensDiagramLoadedStateProps) {
  const {
    L,
    focusT,
    zoomT,
    aberrationT,
    stopdownT,
    shiftMm,
    tiltDeg,
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
    info,
    act,
    sel,
    cardinalElements,
    foldedHitOrderLabels,
  } = computed;
  const { chromSpread, chromaticSpreads, rays, offAxisRays, chromaticRays } = rayData;
  const {
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
    showOnAxis,
    showOffAxis,
    showChromatic,
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
    groupMovementOpen,
    focusExpanded,
    apertureExpanded,
    legendExpanded,
    showEffectiveAperture,
    abbeShowGlassType,
  } = displayFlags;
  const { onHover, onSelect, zoomHook, onZoomPanToggle, onSliderInteractionChange } = interactions;

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
            movementTransform={movementTransform}
            lensAxis={lensAxis}
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
            chromaticSpreads={chromaticSpreads}
            showOnAxis={showOnAxis}
            showOffAxis={showOffAxis}
            showChromatic={showChromatic}
            showPupils={showPupils}
            showCardinals={showCardinals}
            showCardinalFocal={showCardinalFocal}
            showCardinalPrincipal={showCardinalPrincipal}
            showCardinalNodal={showCardinalNodal}
            showCardinalDimensions={showCardinalDimensions}
            showCardinalEfl={showCardinalEfl}
            showCardinalBfd={showCardinalBfd}
            showCardinalFfd={showCardinalFfd}
            showCardinalHiatus={showCardinalHiatus}
            showCardinalTotalTrack={showCardinalTotalTrack}
            cardinalElements={cardinalElements}
            foldedHitOrderLabels={foldedHitOrderLabels}
            zoomT={zoomT}
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
            showGroupMovement={groupMovementOpen}
            onGroupMovementClose={adapters.onGroupMovementClose}
            groupMovementContent={groupMovementContent}
            analysisContent={analysisContent}
            onOpenAsphericCompare={overlays.openAsphCompare}
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
              aberrationT={aberrationT}
              focusT={focusT}
              shiftMm={shiftMm}
              tiltDeg={tiltDeg}
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
              aberrationReadouts={aberrationReadouts}
              focusExpanded={focusExpanded}
              apertureExpanded={apertureExpanded}
              legendExpanded={legendExpanded}
              onZoomChange={adapters.onZoomChange}
              onAberrationChange={adapters.onAberrationChange}
              onFocusChange={adapters.onFocusChange}
              onStopdownChange={adapters.onStopdownChange}
              onShiftChange={adapters.onShiftChange}
              onTiltChange={adapters.onTiltChange}
              onFocusExpandedChange={adapters.onFocusExpandedChange}
              onApertureExpandedChange={adapters.onApertureExpandedChange}
              onLegendExpandedChange={adapters.onLegendExpandedChange}
              onSliderPointerUp={adapters.onSliderPointerUp}
              onSliderInteractionChange={onSliderInteractionChange}
              onOpenGroupMovement={adapters.onGroupMovementOpen}
              info={info}
              showOnAxis={showOnAxis}
              showOffAxis={showOffAxis}
              showChromatic={showChromatic}
              chromR={chromR}
              chromG={chromG}
              chromB={chromB}
              chromV={chromV}
              chromSpread={chromSpread ?? null}
              chromaticSpreads={chromaticSpreads}
              rayTracksF={rayTracksF}
              onOpenAbbeDiagram={overlays.openAbbeDiagram}
              onOpenAsphericCompare={overlays.openAsphCompare}
            />
          )}
        </div>
      </div>

      {overlays.showAbbeDiagram && (
        <OverlayModal onClose={() => adapters.onGlassMapOpenChange(false)} theme={t} maxWidth={580}>
          <AbbeDiagram
            L={L}
            t={t}
            showGlassType={abbeShowGlassType}
            onToggleGlassType={() => adapters.onAbbeShowGlassTypeChange(!abbeShowGlassType)}
          />
        </OverlayModal>
      )}

      {overlays.asphCompareElementId !== null &&
        (() => {
          const targetInfo = L.elements.find((e) => e.id === overlays.asphCompareElementId);
          if (!targetInfo) return null;
          return (
            <OverlayModal onClose={overlays.closeAsphCompare} theme={t} maxWidth={760}>
              <AsphericComparisonOverlay key={targetInfo.id} L={L} info={targetInfo} theme={t} />
            </OverlayModal>
          );
        })()}
    </>
  );
}
