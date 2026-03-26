/**
 * ComparisonContent — Renders the full comparison-mode content area.
 *
 * Includes error display, ComparisonLayout (side-by-side panels),
 * and SharedSlidersBar (unified slider controls).
 */

import { useMemo, type Dispatch } from "react";
import ComparisonLayout from "./ComparisonLayout.js";
import SharedSlidersBar from "./SharedSlidersBar.js";
import { isComparisonOk, type ComparisonLensesResult } from "./useComparisonMode.js";
import { SET_SHARED_ZOOM_T } from "./comparisonReducer.js";
import { ErrorDisplay } from "../components/errors/ErrorBoundary.js";
import { eflAtFocus, effectiveFNumber } from "../optics/optics.js";
import { sharedFNumber } from "./comparisonSliders.js";
import type { FocusPairResult, AperturePairResult, ZoomPairResult } from "./comparisonSliders.js";
import type { Theme } from "../types/theme.js";
import type { LensAction } from "../types/state.js";

interface ComparisonContentProps {
  theme: Theme;
  isWide: boolean;
  lensKeyA: string;
  lensKeyB: string;
  comparisonLenses: ComparisonLensesResult;
  focusPair: FocusPairResult | null;
  aperturePair: AperturePairResult | null;
  zoomPair: ZoomPairResult | null;
  scaleRatios: { a: number; b: number } | null;
  maxHeaderHeight: number;
  onHeaderHeight: (panelId: string, height: number) => void;
  flashPanel: string | null;
  sharedFocusT: number;
  sharedStopdownT: number;
  sharedZoomT: number;
  onSharedFocusChange: (value: number) => void;
  onSharedStopdownChange: (value: number) => void;
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
  scaleRatios,
  maxHeaderHeight,
  onHeaderHeight,
  flashPanel,
  sharedFocusT,
  sharedStopdownT,
  sharedZoomT,
  onSharedFocusChange,
  onSharedStopdownChange,
  onFocusPointerDown,
  onAperturePointerDown,
  onSliderPointerUp,
  dispatch,
  showEffectiveAperture,
}: ComparisonContentProps) {
  /* ── Dynamic EFL and effective aperture for both lenses ── */
  const ok = isComparisonOk(comparisonLenses);
  const LA = ok ? comparisonLenses.LA : null;
  const LB = ok ? comparisonLenses.LB : null;
  const focusA = focusPair?.focusA ?? 0;
  const focusB = focusPair?.focusB ?? 0;
  const zoomA = zoomPair?.zoomA ?? 0;
  const zoomB = zoomPair?.zoomB ?? 0;

  const dynamicEflA = useMemo(() => (LA ? eflAtFocus(focusA, zoomA, LA) : 0), [LA, focusA, zoomA]);
  const dynamicEflB = useMemo(() => (LB ? eflAtFocus(focusB, zoomB, LB) : 0), [LB, focusB, zoomB]);

  const fNumShared = aperturePair
    ? sharedFNumber(sharedStopdownT, aperturePair.widerFOPEN, aperturePair.sharedMaxFstop)
    : 1;
  /* Per-lens nominal f-numbers at their individual stopdownT positions */
  const fNumA = LA ? LA.FOPEN * Math.pow(LA.maxFstop / LA.FOPEN, aperturePair?.stopdownA ?? 0) : fNumShared;
  const fNumB = LB ? LB.FOPEN * Math.pow(LB.maxFstop / LB.FOPEN, aperturePair?.stopdownB ?? 0) : fNumShared;

  const effectiveFNumA = useMemo(
    () => (LA ? effectiveFNumber(fNumA, focusA, zoomA, LA) : fNumA),
    [LA, fNumA, focusA, zoomA],
  );
  const effectiveFNumB = useMemo(
    () => (LB ? effectiveFNumber(fNumB, focusB, zoomB, LB) : fNumB),
    [LB, fNumB, focusB, zoomB],
  );

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
          onSharedFocusChange={onSharedFocusChange}
          onSharedStopdownChange={onSharedStopdownChange}
          onSharedZoomChange={(v) => dispatch({ type: SET_SHARED_ZOOM_T, value: v })}
          onFocusPointerDown={onFocusPointerDown}
          onAperturePointerDown={onAperturePointerDown}
          focusPair={focusPair}
          aperturePair={aperturePair}
          zoomPair={zoomPair}
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
