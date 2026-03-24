/**
 * DiagramControls — Zoom, focus, and aperture slider controls for the
 * lens diagram. Extracted from LensDiagramPanel for separation of concerns.
 */

import { eflAtZoom, formatDist } from "../../optics/optics.js";
import { ENABLE_COLLAPSIBLE_FOCUS, ENABLE_COLLAPSIBLE_APERTURE } from "../../utils/featureFlags.js";
import SliderControl from "./SliderControl.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface VarReadout {
  label: string;
  val: string;
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
  currentPhysStopSD: number;
  baseEPSD: number;
  apertureExpanded: boolean;
  onApertureExpandedChange?: (value: boolean) => void;
  onSliderPointerUp?: () => void;
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
  currentPhysStopSD,
  baseEPSD,
  apertureExpanded,
  onApertureExpandedChange,
  onSliderPointerUp,
  showSliders,
}: DiagramControlsProps) {
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
          onChange={onZoomChange}
          onPointerUp={onSliderPointerUp}
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
          onChange={onFocusChange}
          onPointerUp={onSliderPointerUp}
          minLabel={"\u221e"}
          maxLabel={`${L.closeFocusM} m`}
          flexBasis="260px"
          collapsible={ENABLE_COLLAPSIBLE_FOCUS}
          expanded={focusExpanded}
          onExpandedChange={onFocusExpandedChange}
        >
          {(!ENABLE_COLLAPSIBLE_FOCUS || focusExpanded) && (
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
            </>
          )}
        </SliderControl>
      )}

      {showSliders && (
        <SliderControl
          t={t}
          compact={compact}
          useSideLayout={useSideLayout}
          label="APERTURE"
          labelMinWidth={85}
          displayValue={`f/${fNumber < 10 ? fNumber.toFixed(1) : Math.round(fNumber)}`}
          displayValueStyle={{ minWidth: "3.5em" }}
          value={stopdownT}
          step={L.apertureStep}
          onChange={onStopdownChange}
          onPointerUp={onSliderPointerUp}
          minLabel={`f/${L.FOPEN.toFixed(1)}`}
          maxLabel={`f/${L.maxFstop}`}
          flexBasis="220px"
          collapsible={ENABLE_COLLAPSIBLE_APERTURE}
          expanded={apertureExpanded}
          onExpandedChange={onApertureExpandedChange}
        >
          {(!ENABLE_COLLAPSIBLE_APERTURE || apertureExpanded) && (
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
                EFL {L.isZoom ? eflAtZoom(zoomT, L).toFixed(1) : L.EFL.toFixed(2)} mm · EP {"\u2300"}{" "}
                {(baseEPSD * 2).toFixed(2)} mm · Stop {"\u2300"} {(currentPhysStopSD * 2).toFixed(2)} mm
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
                {L.fstopSeries
                  .filter((n) => n >= L.FOPEN - 0.1 && n <= L.maxFstop)
                  .map((n) => (
                    <span
                      key={n}
                      onClick={() => {
                        onStopdownChange?.(Math.log(n / L.FOPEN) / Math.log(L.maxFstop / L.FOPEN));
                        onSliderPointerUp?.();
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
            </>
          )}
        </SliderControl>
      )}
    </>
  );
}
