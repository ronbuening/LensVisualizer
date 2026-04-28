/**
 * ComparisonContent — Renders the full comparison-mode content area.
 *
 * Includes error display, ComparisonLayout (side-by-side panels),
 * and SharedSlidersBar (unified slider controls).
 */

import type { Dispatch } from "react";
import ComparisonLayout from "./ComparisonLayout.js";
import SharedSlidersBar from "./SharedSlidersBar.js";
import { isComparisonOk, type ComparisonLensesResult } from "./useComparisonMode.js";
import { SET_SHARED_ZOOM_T } from "./comparisonReducer.js";
import { ErrorDisplay } from "../components/errors/ErrorBoundary.js";
import type { FocusPairResult, AperturePairResult, ZoomPairResult, MovementPairResult } from "./comparisonSliders.js";
import type { Theme } from "../types/theme.js";
import type { LensAction } from "../types/state.js";
import useComparisonDisplayValues from "./useComparisonDisplayValues.js";

interface ComparisonContentProps {
  theme: Theme;
  isWide: boolean;
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
}

export default function ComparisonContent({
  theme: t,
  isWide,
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
}: ComparisonContentProps) {
  const { dynamicEflA, dynamicEflB, effectiveFNumA, effectiveFNumB } = useComparisonDisplayValues({
    comparisonLenses,
    focusPair,
    aperturePair,
    zoomPair,
    sharedStopdownT,
  });

  return (
    <>
      {comparisonLenses?.error ? (
        <div style={{ display: "flex", justifyContent: "center", padding: 32 }}>
          <ErrorDisplay
            error={
              comparisonLenses.error instanceof Error
                ? comparisonLenses.error
                : new Error(String(comparisonLenses.error))
            }
            context={{ component: "Comparison Mode", lensKey: comparisonLenses.failedKeys ?? "" }}
            title="Failed to build lens for comparison"
          />
        </div>
      ) : (
        isComparisonOk(comparisonLenses) &&
        focusPair &&
        aperturePair &&
        zoomPair && (
          <ComparisonLayout
            theme={t}
            isWide={isWide}
            lensKeyA={lensKeyA}
            lensKeyB={lensKeyB}
            focusPair={focusPair}
            aperturePair={aperturePair}
            zoomPair={zoomPair}
            movementPair={movementPair}
            comparisonLenses={comparisonLenses}
            scaleRatios={scaleRatios}
            maxHeaderHeight={maxHeaderHeight}
            onHeaderHeight={onHeaderHeight}
            flashPanel={flashPanel}
          />
        )
      )}
      {isComparisonOk(comparisonLenses) && focusPair && aperturePair && (
        <SharedSlidersBar
          LA={comparisonLenses.LA}
          LB={comparisonLenses.LB}
          sharedFocusT={sharedFocusT}
          sharedStopdownT={sharedStopdownT}
          sharedZoomT={sharedZoomT}
          sharedShiftMm={sharedShiftMm}
          sharedTiltDeg={sharedTiltDeg}
          onSharedFocusChange={onSharedFocusChange}
          onSharedStopdownChange={onSharedStopdownChange}
          onSharedZoomChange={(v) => dispatch({ type: SET_SHARED_ZOOM_T, value: v })}
          onSharedShiftChange={onSharedShiftChange}
          onSharedTiltChange={onSharedTiltChange}
          onFocusPointerDown={onFocusPointerDown}
          onAperturePointerDown={onAperturePointerDown}
          focusPair={focusPair}
          aperturePair={aperturePair}
          zoomPair={zoomPair}
          movementPair={movementPair}
          onSliderPointerUp={onSliderPointerUp}
          dynamicEflA={dynamicEflA}
          dynamicEflB={dynamicEflB}
          effectiveFNumA={effectiveFNumA}
          effectiveFNumB={effectiveFNumB}
          showEffectiveAperture={showEffectiveAperture}
          onToggleEffectiveAperture={() =>
            dispatch({ type: "SET_PANEL_EXPANDED", panel: "showEffectiveAperture", expanded: !showEffectiveAperture })
          }
          theme={t}
          isWide={isWide}
        />
      )}
    </>
  );
}
