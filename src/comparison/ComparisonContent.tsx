/**
 * ComparisonContent — Renders the full comparison-mode content area.
 *
 * Includes error display, ComparisonLayout (side-by-side panels),
 * SharedAnalysisDock (desktop analysis/zoom launcher for both panes),
 * and SharedSlidersBar (unified slider controls).
 */

import type { ComparisonFocusZoomState } from "./comparisonTypes.js";
import type { Dispatch } from "react";
import ComparisonLayout from "./ComparisonLayout.js";
import SharedSlidersBar from "./SharedSlidersBar.js";
import SharedAnalysisDock from "./SharedAnalysisDock.js";
import { isComparisonOk, type ComparisonLensesResult } from "./useComparisonMode.js";
import {
  RELINK_COMPARISON,
  SELECT_PANE_SOURCE_STATE,
  SET_COMPARISON_FOCUS_ZOOM,
  SET_PANE_COORDINATES,
  SET_SHARED_ZOOM_T,
} from "./comparisonReducer.js";
import { SET_GROUP_MOVEMENT } from "../utils/state/lensReducer.js";
import { ErrorDisplay } from "../components/errors/ErrorBoundary.js";
import { linkedCoordinatesForA } from "./comparisonSliders.js";
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
  focusZoom?: ComparisonFocusZoomState;
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
  showEffectiveFocalLength: boolean;
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
  focusZoom = { mode: "linked" },
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
  showEffectiveFocalLength,
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
    <div
      style={
        isWide
          ? { height: "100%", minHeight: 0, display: "flex", flexDirection: "column", overflow: "hidden" }
          : undefined
      }
    >
      {focusPair && zoomPair ? (
        <div style={{ padding: "8px 14px", color: t.desc, fontSize: 12 }}>
          <label>
            Focus &amp; zoom{" "}
            <select
              aria-label="Comparison focus and zoom"
              value={focusZoom.mode}
              style={{
                color: t.value,
                background: t.panelBg,
                border: `1px solid ${t.panelDivider}`,
                padding: 5,
                borderRadius: 4,
              }}
              onChange={(event) => {
                const positions = {
                  a: { focusT: focusPair.focusA, zoomT: zoomPair.zoomA },
                  b: { focusT: focusPair.focusB, zoomT: zoomPair.zoomB },
                };
                if (event.target.value === "independent") {
                  dispatch({ type: SET_COMPARISON_FOCUS_ZOOM, focusZoom: { mode: "independent", ...positions } });
                } else if (isComparisonOk(comparisonLenses)) {
                  dispatch({
                    type: RELINK_COMPARISON,
                    ...linkedCoordinatesForA(positions, comparisonLenses.LA, comparisonLenses.LB),
                  });
                }
              }}
            >
              <option value="linked">Linked</option>
              <option value="independent">Independent</option>
            </select>
          </label>
          <span style={{ marginLeft: 8 }}>
            {focusZoom.mode === "independent"
              ? "Relinking follows A and can move B off its source state. A prime A preserves B’s zoom."
              : "Selecting a lens state makes focus and zoom independent."}{" "}
            Aperture stays shared.
          </span>
        </div>
      ) : null}
      {comparisonLenses?.error ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 32,
            ...(isWide ? { flex: "1 1 auto", minHeight: 0, overflowY: "auto" } : {}),
          }}
        >
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
          <div style={isWide ? { flex: "1 1 auto", minHeight: 0, overflow: "hidden" } : undefined}>
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
              independent={focusZoom.mode === "independent"}
              onPaneCoordinates={(pane, lensKey, coordinates) =>
                dispatch({ type: SET_PANE_COORDINATES, pane, lensKey, coordinates })
              }
              onSelectSourceState={(pane, lensKey, sourceState) =>
                dispatch({
                  type: SELECT_PANE_SOURCE_STATE,
                  pane,
                  lensKey,
                  sourceState,
                  positions: {
                    a: { focusT: focusPair.focusA, zoomT: zoomPair.zoomA },
                    b: { focusT: focusPair.focusB, zoomT: zoomPair.zoomB },
                  },
                })
              }
            />
          </div>
        )
      )}
      {isWide && isComparisonOk(comparisonLenses) && focusPair && aperturePair && zoomPair ? (
        <SharedAnalysisDock theme={t} />
      ) : null}
      {isComparisonOk(comparisonLenses) && focusPair && aperturePair && (
        <div style={isWide ? { flex: "0 0 auto", maxHeight: "34%", overflowY: "auto" } : undefined}>
          <SharedSlidersBar
            independentFocusZoom={focusZoom.mode === "independent"}
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
            showEffectiveFocalLength={showEffectiveFocalLength}
            onToggleEffectiveFocalLength={() =>
              dispatch({
                type: "SET_PANEL_EXPANDED",
                panel: "showEffectiveFocalLength",
                expanded: !showEffectiveFocalLength,
              })
            }
            showEffectiveAperture={showEffectiveAperture}
            onToggleEffectiveAperture={() =>
              dispatch({ type: "SET_PANEL_EXPANDED", panel: "showEffectiveAperture", expanded: !showEffectiveAperture })
            }
            onOpenGroupMovement={(mode) => dispatch({ type: SET_GROUP_MOVEMENT, open: true, mode })}
            theme={t}
            isWide={isWide}
          />
        </div>
      )}
    </div>
  );
}
