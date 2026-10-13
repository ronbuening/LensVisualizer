/**
 * Comparison layout — renders two LensDiagramPanel instances side-by-side
 * (desktop) or stacked (mobile) with a divider between them.
 */

import { useState, type ComponentProps } from "react";
import useMediaQuery from "../utils/useMediaQuery.js";
import LensDiagramPanel from "../components/layout/LensDiagramPanel.js";
import type { Theme } from "../types/theme.js";
import type { FocusPairResult, AperturePairResult, ZoomPairResult, MovementPairResult } from "./comparisonSliders.js";
import type { ComparisonLensesOk } from "./useComparisonMode.js";
import { lensSystemKey } from "../utils/catalog/teleconverterCatalog.js";

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
}

/** Keyed by lens-plus-converter system so only the replaced pane loses its local disclosure choice. */
function ComparisonPane({
  defaultExpanded,
  ...props
}: ComponentProps<typeof LensDiagramPanel> & { defaultExpanded: boolean }) {
  const [expanded, setExpanded] = useState<boolean | null>(null);
  return (
    <LensDiagramPanel
      {...props}
      comparisonDetails={
        props.fillAvailableHeight ? { expanded: expanded ?? defaultExpanded, onChange: setExpanded } : undefined
      }
    />
  );
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
}: ComparisonLayoutProps) {
  const shortViewport = useMediaQuery("(max-height: 800px)", { ssrDefault: false, clientOnly: true });
  const maxSvgHeight = isWide ? "none" : "42vh";
  const minHeaderHeight = isWide && maxHeaderHeight > 0 ? maxHeaderHeight : undefined;
  /* Each pane's converter is read from the lens it was built into, so pane identity follows the built system. */
  const teleconverterKeyA = comparisonLenses?.LA.data.attachedTeleconverter?.key ?? null;
  const teleconverterKeyB = comparisonLenses?.LB.data.attachedTeleconverter?.key ?? null;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: isWide ? "row" : "column",
        flex: isWide ? "1 1 0px" : undefined,
        minWidth: 0,
      }}
    >
      <div
        style={{
          flex: isWide ? "0 0 50%" : "none",
          boxSizing: "border-box",
          borderRight: isWide ? `1px solid ${t.panelDivider}` : "none",
          borderBottom: !isWide ? `1px solid ${t.panelDivider}` : "none",
          minWidth: 0,
          display: isWide ? "flex" : undefined,
          flexDirection: "column",
        }}
      >
        <ComparisonPane
          key={lensSystemKey(lensKeyA, teleconverterKeyA)}
          defaultExpanded={!shortViewport}
          minDiagramHeight={isWide ? 280 : undefined}
          lensKey={lensKeyA}
          teleconverterKey={teleconverterKeyA}
          runtimeLens={comparisonLenses?.LA}
          focusT={focusPair.focusA}
          zoomT={zoomPair.zoomA}
          stopdownT={aperturePair.stopdownA}
          shiftMm={movementPair?.shiftA ?? 0}
          tiltDeg={movementPair?.tiltA ?? 0}
          scaleRatio={scaleRatios?.a ?? null}
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
      <div
        style={{
          flex: isWide ? "0 0 50%" : "none",
          boxSizing: "border-box",
          minWidth: 0,
          display: isWide ? "flex" : undefined,
          flexDirection: "column",
        }}
      >
        <ComparisonPane
          key={lensSystemKey(lensKeyB, teleconverterKeyB)}
          defaultExpanded={!shortViewport}
          minDiagramHeight={isWide ? 280 : undefined}
          lensKey={lensKeyB}
          teleconverterKey={teleconverterKeyB}
          runtimeLens={comparisonLenses?.LB}
          focusT={focusPair.focusB}
          zoomT={zoomPair.zoomB}
          stopdownT={aperturePair.stopdownB}
          shiftMm={movementPair?.shiftB ?? 0}
          tiltDeg={movementPair?.tiltB ?? 0}
          scaleRatio={scaleRatios?.b ?? null}
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
    </div>
  );
}
