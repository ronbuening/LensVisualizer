/**
 * ViewerContent — main content switch for LensViewer.
 *
 * Routes between the comparison experience and the single-lens layout while
 * keeping LensViewer itself centered on orchestration rather than JSX branching.
 */

import ComparisonContent from "../../../comparison/ComparisonContent.js";
import SingleLensContent from "../SingleLensContent.js";
import type { ComparisonLensesResult } from "../../../comparison/useComparisonMode.js";
import type {
  AperturePairResult,
  FocusPairResult,
  MovementPairResult,
  ZoomPairResult,
} from "../../../comparison/comparisonSliders.js";
import type { Theme } from "../../../types/theme.js";
import type { DesktopView, LensAction, MobileView } from "../../../types/state.js";
import type { Dispatch } from "react";

interface ViewerContentProps {
  theme: Theme;
  isWide: boolean;
  comparing: boolean;
  lensKeyA: string;
  lensKeyB: string;
  comparisonLenses: ComparisonLensesResult;
  focusPair: FocusPairResult | null;
  aperturePair: AperturePairResult | null;
  zoomPair: ZoomPairResult | null;
  movementPair: MovementPairResult | null;
  scaleRatios: { a: number; b: number } | null;
  maxHeaderHeight: number;
  onHeaderHeight: (panelId: string, height: number) => void;
  flashPanel: string | null;
  sharedFocusT: number;
  sharedStopdownT: number;
  sharedZoomT: number;
  sharedShiftMm: number;
  sharedTiltDeg: number;
  onSharedFocusChange: (value: number) => void;
  onSharedStopdownChange: (value: number) => void;
  onSharedShiftChange: (value: number) => void;
  onSharedTiltChange: (value: number) => void;
  onFocusPointerDown: () => void;
  onAperturePointerDown: () => void;
  onSliderPointerUp: () => void;
  dispatch: Dispatch<LensAction>;
  showEffectiveAperture: boolean;
  effectiveDesktopView: DesktopView;
  showDesktopToggle: boolean;
  mobileView: MobileView;
  markdown: string | null | undefined;
}

export default function ViewerContent({
  theme: t,
  isWide,
  comparing,
  lensKeyA,
  lensKeyB,
  comparisonLenses,
  focusPair,
  aperturePair,
  zoomPair,
  movementPair,
  scaleRatios,
  maxHeaderHeight,
  onHeaderHeight,
  flashPanel,
  sharedFocusT,
  sharedStopdownT,
  sharedZoomT,
  sharedShiftMm,
  sharedTiltDeg,
  onSharedFocusChange,
  onSharedStopdownChange,
  onSharedShiftChange,
  onSharedTiltChange,
  onFocusPointerDown,
  onAperturePointerDown,
  onSliderPointerUp,
  dispatch,
  showEffectiveAperture,
  effectiveDesktopView,
  showDesktopToggle,
  mobileView,
  markdown,
}: ViewerContentProps) {
  if (comparing) {
    return (
      <ComparisonContent
        theme={t}
        isWide={isWide}
        lensKeyA={lensKeyA}
        lensKeyB={lensKeyB}
        comparisonLenses={comparisonLenses}
        focusPair={focusPair}
        aperturePair={aperturePair}
        zoomPair={zoomPair}
        movementPair={movementPair}
        scaleRatios={scaleRatios}
        maxHeaderHeight={maxHeaderHeight}
        onHeaderHeight={onHeaderHeight}
        flashPanel={flashPanel}
        sharedFocusT={sharedFocusT}
        sharedStopdownT={sharedStopdownT}
        sharedZoomT={sharedZoomT}
        sharedShiftMm={sharedShiftMm}
        sharedTiltDeg={sharedTiltDeg}
        onSharedFocusChange={onSharedFocusChange}
        onSharedStopdownChange={onSharedStopdownChange}
        onSharedShiftChange={onSharedShiftChange}
        onSharedTiltChange={onSharedTiltChange}
        onFocusPointerDown={onFocusPointerDown}
        onAperturePointerDown={onAperturePointerDown}
        onSliderPointerUp={onSliderPointerUp}
        dispatch={dispatch}
        showEffectiveAperture={showEffectiveAperture}
      />
    );
  }

  return (
    <SingleLensContent
      theme={t}
      isWide={isWide}
      effectiveDesktopView={effectiveDesktopView}
      showDesktopToggle={showDesktopToggle}
      mobileView={mobileView}
      lensKeyA={lensKeyA}
      markdown={markdown}
    />
  );
}
