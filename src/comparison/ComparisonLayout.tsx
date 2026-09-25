/**
 * Comparison layout — renders two LensDiagramPanel instances side-by-side
 * (desktop) or stacked (mobile) with a divider between them.
 */

import ComparisonPaneControls from "./ComparisonPaneControls.js";
import type { LensSourceState } from "../types/optics.js";
import type { PaneCoordinates } from "./comparisonTypes.js";
import LensDiagramPanel from "../components/layout/LensDiagramPanel.js";
import type { Theme } from "../types/theme.js";
import type { FocusPairResult, AperturePairResult, ZoomPairResult, MovementPairResult } from "./comparisonSliders.js";
import type { ComparisonLensesOk } from "./useComparisonMode.js";

interface ComparisonLayoutProps {
  theme: Theme;
  isWide: boolean;
  lensKeyA: string;
  lensKeyB: string;
  focusPair: FocusPairResult;
  aperturePair: AperturePairResult;
  zoomPair: ZoomPairResult;
  movementPair?: MovementPairResult | null;
  comparisonLenses?: ComparisonLensesOk;
  scaleRatios: { a: number; b: number } | null;
  maxHeaderHeight: number;
  onHeaderHeight: (panelId: string, height: number) => void;
  flashPanel: string | null;
  independent?: boolean;
  onSelectSourceState?: (pane: "a" | "b", lensKey: string, sourceState: LensSourceState) => void;
  onPaneCoordinates?: (pane: "a" | "b", lensKey: string, coordinates: PaneCoordinates) => void;
}

export default function ComparisonLayout({
  theme: t,
  isWide,
  lensKeyA,
  lensKeyB,
  focusPair,
  aperturePair,
  zoomPair,
  movementPair = null,
  comparisonLenses,
  scaleRatios,
  maxHeaderHeight,
  onHeaderHeight,
  flashPanel,
  independent = false,
  onSelectSourceState,
  onPaneCoordinates,
}: ComparisonLayoutProps) {
  const maxSvgHeight = isWide ? "calc(100vh - 260px)" : "42vh";
  const minHeaderHeight = isWide && maxHeaderHeight > 0 ? maxHeaderHeight : undefined;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isWide ? "row" : "column",
        height: isWide ? "100%" : undefined,
        minHeight: isWide ? 0 : undefined,
        overflow: isWide ? "hidden" : undefined,
      }}
    >
      <div
        style={{
          flex: isWide ? "0 0 50%" : "none",
          display: "flex",
          flexDirection: "column",
          borderRight: isWide ? `1px solid ${t.panelDivider}` : "none",
          borderBottom: !isWide ? `1px solid ${t.panelDivider}` : "none",
          minWidth: 0,
          minHeight: isWide ? 0 : undefined,
          overflow: "hidden",
        }}
      >
        <div style={{ flex: "1 1 auto", minHeight: 0 }}>
          <LensDiagramPanel
            lensKey={lensKeyA}
            runtimeLens={comparisonLenses?.LA}
            focusT={focusPair.focusA}
            zoomT={zoomPair.zoomA}
            aberrationT={0}
            stopdownT={aperturePair.stopdownA}
            shiftMm={movementPair?.shiftA ?? 0}
            tiltDeg={movementPair?.tiltA ?? 0}
            scaleRatio={scaleRatios?.a ?? null}
            onSelectSourceState={
              onSelectSourceState ? (key, source) => onSelectSourceState("a", key, source) : undefined
            }
            panelId="a"
            compact={true}
            showControls={true}
            showSliders={false}
            maxSvgHeight={maxSvgHeight}
            onHeaderHeight={onHeaderHeight}
            minHeaderHeight={minHeaderHeight}
            flashOverlay={flashPanel === "a"}
            fillAvailableHeight={isWide}
            sharedAnalysisControls={isWide}
          />
        </div>
        {independent && comparisonLenses && onPaneCoordinates ? (
          <ComparisonPaneControls
            L={comparisonLenses.LA}
            t={t}
            pane="a"
            coordinates={{ focusT: focusPair.focusA, zoomT: zoomPair.zoomA }}
            onChange={(coordinates) => onPaneCoordinates("a", lensKeyA, coordinates)}
          />
        ) : null}
      </div>
      <div
        style={{
          flex: isWide ? "0 0 50%" : "none",
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
          minHeight: isWide ? 0 : undefined,
          overflow: "hidden",
        }}
      >
        <div style={{ flex: "1 1 auto", minHeight: 0 }}>
          <LensDiagramPanel
            lensKey={lensKeyB}
            runtimeLens={comparisonLenses?.LB}
            focusT={focusPair.focusB}
            zoomT={zoomPair.zoomB}
            aberrationT={0}
            stopdownT={aperturePair.stopdownB}
            shiftMm={movementPair?.shiftB ?? 0}
            tiltDeg={movementPair?.tiltB ?? 0}
            scaleRatio={scaleRatios?.b ?? null}
            onSelectSourceState={
              onSelectSourceState ? (key, source) => onSelectSourceState("b", key, source) : undefined
            }
            panelId="b"
            compact={true}
            showControls={true}
            showSliders={false}
            maxSvgHeight={maxSvgHeight}
            onHeaderHeight={onHeaderHeight}
            minHeaderHeight={minHeaderHeight}
            flashOverlay={flashPanel === "b"}
            fillAvailableHeight={isWide}
            sharedAnalysisControls={isWide}
          />
        </div>
        {independent && comparisonLenses && onPaneCoordinates ? (
          <ComparisonPaneControls
            L={comparisonLenses.LB}
            t={t}
            pane="b"
            coordinates={{ focusT: focusPair.focusB, zoomT: zoomPair.zoomB }}
            onChange={(coordinates) => onPaneCoordinates("b", lensKeyB, coordinates)}
          />
        ) : null}
      </div>
    </div>
  );
}
