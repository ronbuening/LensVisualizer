/**
 * DiagramControls — Zoom, focus, and aperture slider controls for the
 * lens diagram. Extracted from LensDiagramPanel for separation of concerns.
 */

import { useCallback, useEffect } from "react";
import { eflAtZoom, formatDist } from "../../optics/optics.js";
import SliderControl from "./SliderControl.js";
import useInteractionSignal from "../hooks/useInteractionSignal.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface VarReadout {
  label: string;
  val: string;
}

/** Format f-number for display: one decimal below f/10, rounded above. */
function fmtF(f: number): string {
  return f < 10 ? f.toFixed(1) : String(Math.round(f));
}

interface DiagramControlsProps {
  L: RuntimeLens;
  t: Theme;
  compact: boolean;
  useSideLayout: boolean;
  zoomT: number;
  onZoomChange?: (value: number) => void;
  focusT: number;
  onFocusChange?: (value: number) => void;
  focusExpanded: boolean;
  onFocusExpandedChange?: (value: boolean) => void;
  varReadouts: VarReadout[];
  stopdownT: number;
  onStopdownChange?: (value: number) => void;
  fNumber: number;
  currentFOPEN: number;
  currentPhysStopSD: number;
  baseEPSD: number;
  dynamicEFL: number;
  effectiveFNum: number;
  showEffectiveAperture: boolean;
  onToggleEffectiveAperture?: () => void;
  apertureExpanded: boolean;
  onApertureExpandedChange?: (value: boolean) => void;
  onSliderPointerUp?: () => void;
  onInteractionChange?: (interacting: boolean) => void;
  showSliders: boolean;
}

export default function DiagramControls({
  L,
  t,
  compact,
  useSideLayout,
  zoomT,
  onZoomChange,
  focusT,
  onFocusChange,
  focusExpanded,
  onFocusExpandedChange,
  varReadouts,
  stopdownT,
  onStopdownChange,
  fNumber,
  currentFOPEN,
  currentPhysStopSD,
  baseEPSD,
  dynamicEFL,
  effectiveFNum,
  showEffectiveAperture,
  onToggleEffectiveAperture,
  apertureExpanded,
  onApertureExpandedChange,
  onSliderPointerUp,
  onInteractionChange,
  showSliders,
}: DiagramControlsProps) {
  const { interacting, beginInteraction, endInteraction, onChangeActivity } = useInteractionSignal();

  useEffect(() => {
    onInteractionChange?.(interacting);
  }, [interacting, onInteractionChange]);

  const handlePointerUp = useCallback(() => {
    endInteraction();
    onSliderPointerUp?.();
  }, [endInteraction, onSliderPointerUp]);

  const handleZoomChange = useCallback(
    (v: number) => {
      onChangeActivity();
      onZoomChange?.(v);
    },
    [onChangeActivity, onZoomChange],
  );

  const handleFocusChange = useCallback(
    (v: number) => {
      onChangeActivity();
      onFocusChange?.(v);
    },
    [onChangeActivity, onFocusChange],
  );

  const handleStopdownChange = useCallback(
    (v: number) => {
      onChangeActivity();
      onStopdownChange?.(v);
    },
    [onChangeActivity, onStopdownChange],
  );

  const infinityEFL = L.isZoom ? eflAtZoom(zoomT, L) : L.EFL;
  const eflChanged = Math.abs(dynamicEFL - infinityEFL) > 0.1;
  const effApertureDiffers = Math.abs(effectiveFNum - fNumber) > 0.05;
  const availableFStops = L.fstopSeries.filter((value) => value >= currentFOPEN - 0.1 && value <= L.maxFstop);
  const hasApertureRange = L.maxFstop > currentFOPEN + 0.15;
  const showApertureControl = showSliders && (hasApertureRange || availableFStops.length > 1);

  return (
    <>
      {showSliders && L.isZoom && (
        <SliderControl
          t={t}
          compact={compact}
          useSideLayout={useSideLayout}
          label="ZOOM"
          labelMinWidth={55}
          displayValue={`${eflAtZoom(zoomT, L).toFixed(0)} mm`}
          value={zoomT}
          step={L.zoomStep}
          onPointerDown={beginInteraction}
          onChange={handleZoomChange}
          onPointerUp={handlePointerUp}
          minLabel={`${L.zoomPositions![0]} mm`}
          maxLabel={`${L.zoomPositions![L.zoomPositions!.length - 1]} mm`}
          flexBasis="200px"
        />
      )}

      {showSliders && (
        <SliderControl
          t={t}
          compact={compact}
          useSideLayout={useSideLayout}
          label="FOCUS"
          labelMinWidth={85}
          displayValue={formatDist(focusT, L)}
          value={focusT}
          step={L.focusStep}
          onPointerDown={beginInteraction}
          onChange={handleFocusChange}
          onPointerUp={handlePointerUp}
          minLabel={"\u221e"}
          maxLabel={`${L.closeFocusM} m`}
          flexBasis="260px"
          collapsible={true}
          expanded={focusExpanded}
          onExpandedChange={onFocusExpandedChange}
        >
          {focusExpanded && (
            <>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 9.5,
                  color: t.desc,
                  lineHeight: 1.6,
                  transition: "color 0.3s",
                }}
              >
                {L.focusDescription}
              </div>
              <div
                style={{
                  marginTop: 6,
                  display: "flex",
                  gap: 14,
                  fontSize: 9,
                  color: t.spacingVal,
                  fontVariantNumeric: "tabular-nums",
                  transition: "color 0.3s",
                }}
              >
                {varReadouts.map(({ label, val }) => (
                  <span key={label}>
                    {label} {val}
                  </span>
                ))}
              </div>
              {eflChanged && (
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 9,
                    color: t.spacingVal,
                    fontVariantNumeric: "tabular-nums",
                    transition: "color 0.3s",
                  }}
                >
                  EFL {dynamicEFL.toFixed(2)} mm
                </div>
              )}
            </>
          )}
        </SliderControl>
      )}

      {showApertureControl && (
        <SliderControl
          t={t}
          compact={compact}
          useSideLayout={useSideLayout}
          label="APERTURE"
          labelMinWidth={85}
          displayValue={`f/${fmtF(fNumber)}${showEffectiveAperture && effApertureDiffers ? ` (eff. f/${fmtF(effectiveFNum)})` : ""}`}
          displayValueStyle={{ minWidth: "3.5em" }}
          value={stopdownT}
          step={L.apertureStep}
          onPointerDown={beginInteraction}
          onChange={handleStopdownChange}
          onPointerUp={handlePointerUp}
          minLabel={`f/${currentFOPEN.toFixed(1)}`}
          maxLabel={`f/${L.maxFstop}`}
          flexBasis="220px"
          collapsible={true}
          expanded={apertureExpanded}
          onExpandedChange={onApertureExpandedChange}
        >
          {apertureExpanded && (
            <>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 9.5,
                  color: t.desc,
                  lineHeight: 1.6,
                  transition: "color 0.3s",
                }}
              >
                EFL {dynamicEFL.toFixed(2)} mm · EP {"\u2300"} {(baseEPSD * 2).toFixed(2)} mm · Stop {"\u2300"}{" "}
                {(currentPhysStopSD * 2).toFixed(2)} mm
              </div>
              <div
                style={{
                  marginTop: 6,
                  display: "flex",
                  gap: 14,
                  flexWrap: "wrap",
                  fontSize: 9,
                  color: t.spacingVal,
                  fontVariantNumeric: "tabular-nums",
                  transition: "color 0.3s",
                }}
              >
                {availableFStops.map((n) => (
                  <span
                    key={n}
                    onClick={() => {
                      handleStopdownChange(Math.log(n / L.FOPEN) / Math.log(L.maxFstop / L.FOPEN));
                      handlePointerUp();
                    }}
                    style={{
                      cursor: "pointer",
                      opacity: Math.abs(fNumber - n) < 0.15 ? 1 : 0.55,
                      transition: "opacity 0.15s",
                    }}
                  >
                    f/{n}
                  </span>
                ))}
              </div>
              <div
                style={{
                  marginTop: 8,
                  fontSize: 9,
                  color: t.desc,
                  cursor: "pointer",
                  userSelect: "none",
                  transition: "color 0.3s",
                }}
                onClick={onToggleEffectiveAperture}
              >
                <span style={{ opacity: showEffectiveAperture ? 1 : 0.5 }}>
                  {showEffectiveAperture ? "\u2611" : "\u2610"} Show effective aperture
                </span>
              </div>
            </>
          )}
        </SliderControl>
      )}
    </>
  );
}
