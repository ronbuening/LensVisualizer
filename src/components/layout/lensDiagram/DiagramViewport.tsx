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
}: DiagramViewportProps) {
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
      />

      {showLcaOverlay && showChromatic && chromSpread ? (
        <PanelOverlay onClose={onCloseLcaOverlay} theme={t}>
          <LCAOverlayContent chromSpread={chromSpread} effectiveSC={effectiveSC} IMG_MM={IMG_MM} t={t} />
        </PanelOverlay>
      ) : null}

      {showPetzvalOverlay ? (
        <PanelOverlay onClose={onClosePetzvalOverlay} theme={t}>
          <PetzvalOverlayContent L={L} t={t} />
        </PanelOverlay>
      ) : null}

      {!analysisDrawerOpen ? (
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

      <AnalysisDrawer
        open={analysisDrawerOpen}
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
