/**
 * Comparison layout — renders two LensDiagramPanel instances side-by-side
 * (desktop) or stacked (mobile) with a divider between them.
 */

import LensDiagramPanel from "../components/layout/LensDiagramPanel.js";
import type { Theme } from "../types/theme.js";
import type { FocusPairResult, AperturePairResult, ZoomPairResult } from "./comparisonSliders.js";

interface ComparisonLayoutProps {
  theme: Theme;
  isWide: boolean;
  lensKeyA: string;
  lensKeyB: string;
  focusPair: FocusPairResult;
  aperturePair: AperturePairResult;
  zoomPair: ZoomPairResult;
  scaleRatios: { a: number; b: number } | null;
  maxHeaderHeight: number;
  onHeaderHeight: (panelId: string, height: number) => void;
  flashPanel: string | null;
}

export default function ComparisonLayout({
  theme: t,
  isWide,
  lensKeyA,
  lensKeyB,
  focusPair,
  aperturePair,
  zoomPair,
  scaleRatios,
  maxHeaderHeight,
  onHeaderHeight,
  flashPanel,
}: ComparisonLayoutProps) {
  const maxSvgHeight = isWide ? "calc(100vh - 260px)" : "42vh";
  const minHeaderHeight = isWide && maxHeaderHeight > 0 ? maxHeaderHeight : undefined;

  return (
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
          focusT={focusPair.focusA}
          zoomT={zoomPair.zoomA}
          stopdownT={aperturePair.stopdownA}
          scaleRatio={scaleRatios?.a ?? null}
          panelId="a"
          compact={true}
          showControls={true}
          showSliders={false}
          maxSvgHeight={maxSvgHeight}
          onHeaderHeight={onHeaderHeight}
          minHeaderHeight={minHeaderHeight}
          flashOverlay={flashPanel === "a"}
        />
      </div>
      <div style={{ flex: isWide ? "0 0 50%" : "none", minWidth: 0, overflow: "hidden" }}>
        <LensDiagramPanel
          lensKey={lensKeyB}
          focusT={focusPair.focusB}
          zoomT={zoomPair.zoomB}
          stopdownT={aperturePair.stopdownB}
          scaleRatio={scaleRatios?.b ?? null}
          panelId="b"
          compact={true}
          showControls={true}
          showSliders={false}
          maxSvgHeight={maxSvgHeight}
          onHeaderHeight={onHeaderHeight}
          minHeaderHeight={minHeaderHeight}
          flashOverlay={flashPanel === "b"}
        />
      </div>
    </div>
  );
}
