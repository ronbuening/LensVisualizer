import { useEffect } from "react";
import type { ComponentProps, ReactNode } from "react";
import DiagramSVG from "../../diagram/DiagramSVG.js";
import LCAOverlayContent from "../../diagram/LCAOverlayContent.js";
import PetzvalOverlayContent from "../../diagram/PetzvalOverlayContent.js";
import AnalysisDrawer from "../AnalysisDrawer.js";
import PanelOverlay from "../PanelOverlay.js";
import { ANALYSIS_TABS } from "./analysisTabs.js";

interface DiagramViewportProps extends Omit<
  ComponentProps<typeof DiagramSVG>,
  "onLcaInsetClick" | "onPetzvalBadgeClick"
> {
  showLcaOverlay: boolean;
  showPetzvalOverlay: boolean;
  onCloseLcaOverlay: () => void;
  onClosePetzvalOverlay: () => void;
  onOpenLcaOverlay: () => void;
  onOpenPetzvalOverlay: () => void;
  analysisDrawerOpen: boolean;
  onAnalysisDrawerToggle: (open: boolean) => void;
  analysisDrawerTab: string;
  onAnalysisTabChange: (tab: string) => void;
  isWide: boolean;
  analysisContent: ReactNode;
  /** Whether zoom/pan mode is active */
  zoomPanActive: boolean;
  /** Toggle zoom/pan mode on/off */
  onZoomPanToggle: (active: boolean) => void;
  /** Current zoom level (1 = default) */
  zoomLevel: number;
  /** Reset zoom to default */
  onZoomReset: () => void;
  /** Zoom in one step (keyboard +) */
  onZoomIn: () => void;
  /** Zoom out one step (keyboard -) */
  onZoomOut: () => void;
  /** Pan by delta in SVG units (keyboard arrows) */
  onPanBy: (dx: number, dy: number) => void;
}

export default function DiagramViewport({
  L,
  t,
  dark,
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
  currentPhysStopSD,
  rays,
  offAxisRays,
  chromaticRays,
  chromSpread,
  showOnAxis,
  showOffAxis,
  showChromatic,
  showPupils,
  act,
  onHover,
  onSelect,
  sel,
  maxSvgHeight,
  useSideLayout,
  headerHeight,
  compact,
  flashVisible,
  flashKey,
  flashFading,
  showLcaOverlay,
  showPetzvalOverlay,
  onCloseLcaOverlay,
  onClosePetzvalOverlay,
  onOpenLcaOverlay,
  onOpenPetzvalOverlay,
  analysisDrawerOpen,
  onAnalysisDrawerToggle,
  analysisDrawerTab,
  onAnalysisTabChange,
  isWide,
  analysisContent,
  zoomPanActive,
  onZoomPanToggle,
  zoomLevel,
  onZoomReset,
  onZoomIn,
  onZoomOut,
  onPanBy,
  viewBoxOverride,
  isPanning,
  onSvgWheel,
  onSvgPointerDown,
  onSvgPointerMove,
  onSvgPointerUp,
  onSvgTouchStart,
  onSvgTouchMove,
  onSvgTouchEnd,
}: DiagramViewportProps) {
  /* Keyboard shortcuts when zoom mode is active */
  useEffect(() => {
    if (!zoomPanActive) return;

    const PAN_STEP = 30;
    const handler = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onZoomPanToggle(false);
          break;
        case "0":
          onZoomReset();
          break;
        case "+":
        case "=":
          onZoomIn();
          break;
        case "-":
          onZoomOut();
          break;
        case "ArrowLeft":
          e.preventDefault();
          onPanBy(-PAN_STEP, 0);
          break;
        case "ArrowRight":
          e.preventDefault();
          onPanBy(PAN_STEP, 0);
          break;
        case "ArrowUp":
          e.preventDefault();
          onPanBy(0, -PAN_STEP);
          break;
        case "ArrowDown":
          e.preventDefault();
          onPanBy(0, PAN_STEP);
          break;
        default:
          return;
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [zoomPanActive, onZoomPanToggle, onZoomReset, onZoomIn, onZoomOut, onPanBy]);

  return (
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
        onLcaInsetClick={onOpenLcaOverlay}
        onPetzvalBadgeClick={onOpenPetzvalOverlay}
        viewBoxOverride={viewBoxOverride}
        zoomPanActive={zoomPanActive}
        isPanning={isPanning}
        onSvgWheel={onSvgWheel}
        onSvgPointerDown={onSvgPointerDown}
        onSvgPointerMove={onSvgPointerMove}
        onSvgPointerUp={onSvgPointerUp}
        onSvgTouchStart={onSvgTouchStart}
        onSvgTouchMove={onSvgTouchMove}
        onSvgTouchEnd={onSvgTouchEnd}
      />

      {/* Overlays — hidden in zoom/pan mode */}
      {!zoomPanActive && showLcaOverlay && showChromatic && chromSpread ? (
        <PanelOverlay onClose={onCloseLcaOverlay} theme={t}>
          <LCAOverlayContent chromSpread={chromSpread} effectiveSC={effectiveSC} IMG_MM={IMG_MM} t={t} />
        </PanelOverlay>
      ) : null}

      {!zoomPanActive && showPetzvalOverlay ? (
        <PanelOverlay onClose={onClosePetzvalOverlay} theme={t}>
          <PetzvalOverlayContent L={L} t={t} />
        </PanelOverlay>
      ) : null}

      {/* Analysis drawer toggle — hidden in zoom/pan mode */}
      {!zoomPanActive && !analysisDrawerOpen ? (
        <button
          onClick={() => onAnalysisDrawerToggle(true)}
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
          <span>ABERRATIONS &amp; DISTORTIONS</span>
          <span style={{ fontSize: 11, lineHeight: 1 }}>{"\u25B8"}</span>
        </button>
      ) : null}

      {/* Bokeh preview button — top-right, hidden in zoom/pan mode */}
      {!zoomPanActive ? (
        <button
          onClick={() => {
            onAnalysisDrawerToggle(true);
            onAnalysisTabChange("bokeh");
          }}
          style={{
            position: "absolute",
            top: 10,
            right: 10,
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
          <span>BOKEH PREVIEW</span>
          <span style={{ fontSize: 8.5, opacity: 0.75 }}>BETA</span>
        </button>
      ) : null}

      {/* Zoom/pan toggle button — bottom-right, hidden when zoom mode active */}
      {!zoomPanActive ? (
        <button
          aria-label="Enter zoom and pan mode"
          onClick={() => onZoomPanToggle(true)}
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
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
          <span style={{ fontSize: 12, lineHeight: 1 }}>{"\uD83D\uDD0D"}</span>
          <span>ZOOM</span>
        </button>
      ) : null}

      {/* Zoom/pan toolbar — persistent Reset + Cancel when zoom mode active */}
      {zoomPanActive ? (
        <div
          role="toolbar"
          aria-label="Zoom and pan controls"
          style={{
            position: "absolute",
            bottom: 10,
            right: 10,
            zIndex: 10,
            display: "flex",
            alignItems: "center",
            gap: 6,
            fontSize: 9,
            fontFamily: "inherit",
            letterSpacing: "0.08em",
          }}
        >
          {zoomLevel > 1.01 ? (
            <span style={{ color: t.muted, fontSize: 10, marginRight: 2 }}>{zoomLevel.toFixed(1)}x</span>
          ) : null}
          <button
            aria-label="Reset zoom"
            onClick={onZoomReset}
            style={{
              borderRadius: 10,
              cursor: "pointer",
              padding: "4px 10px",
              background: t.toggleBg,
              border: `1px solid ${t.toggleBorder}`,
              color: t.muted,
              fontFamily: "inherit",
              fontSize: 9,
              letterSpacing: "0.08em",
            }}
          >
            RESET
          </button>
          <button
            aria-label="Exit zoom and pan mode"
            onClick={() => onZoomPanToggle(false)}
            style={{
              borderRadius: 10,
              cursor: "pointer",
              padding: "4px 10px",
              background: t.toggleBg,
              border: `1px solid ${t.toggleBorder}`,
              color: t.muted,
              fontFamily: "inherit",
              fontSize: 9,
              letterSpacing: "0.08em",
            }}
          >
            CANCEL
          </button>
        </div>
      ) : null}

      {/* Analysis drawer — hidden in zoom/pan mode */}
      <AnalysisDrawer
        open={!zoomPanActive && analysisDrawerOpen}
        onClose={() => onAnalysisDrawerToggle(false)}
        activeTab={analysisDrawerTab}
        onTabChange={onAnalysisTabChange}
        tabs={ANALYSIS_TABS}
        t={t}
        isWide={isWide}
      >
        {analysisContent}
      </AnalysisDrawer>
    </div>
  );
}
