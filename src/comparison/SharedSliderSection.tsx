/**
 * SharedSliderSection — reusable comparison-slider section shell.
 *
 * The zoom, focus, and aperture rows share the same layout pattern: label,
 * current value, optional common-point markers, readouts, and optional footer.
 * Centralizing that structure keeps SharedSlidersBar focused on domain values.
 */

import type { CSSProperties, ReactNode } from "react";
import { SLIDER_LABEL, SLIDER_VALUE_BASE, sliderInput } from "../utils/styles.js";
import type { Theme } from "../types/theme.js";

interface SharedSliderSectionProps {
  theme: Theme;
  label: string;
  valueLabel: string;
  minLabel: ReactNode;
  maxLabel: ReactNode;
  sliderValue: number;
  onSliderChange: (value: number) => void;
  onPointerDown?: () => void;
  onPointerUp?: () => void;
  markerPositions?: number[];
  readouts?: ReactNode;
  footer?: ReactNode;
}

const SLIDER_ROW: CSSProperties = { display: "flex", alignItems: "center", gap: 8 };
const READOUT_ROW: CSSProperties = {
  marginTop: 6,
  display: "flex",
  gap: 16,
  fontSize: 9,
  fontVariantNumeric: "tabular-nums",
};
const LABEL_ROW: CSSProperties = { display: "flex", alignItems: "center", gap: 10, marginBottom: 8 };
const SLIDER_WRAP: CSSProperties = { position: "relative", flex: 1 };

function CommonPointMarkers({ theme: t, positions }: { theme: Theme; positions: number[] }) {
  const markerStyle = (position: number): CSSProperties => ({
    position: "absolute",
    left: `${position * 100}%`,
    top: -2,
    transform: "translateX(-50%)",
    width: 0,
    height: 0,
    borderLeft: "4px solid transparent",
    borderRight: "4px solid transparent",
    borderTop: `5px solid ${t.sliderAccent}`,
    opacity: 0.7,
    pointerEvents: "none",
  });

  const markerLineStyle = (position: number): CSSProperties => ({
    position: "absolute",
    left: `${position * 100}%`,
    top: 0,
    bottom: 0,
    transform: "translateX(-50%)",
    width: 1,
    background: `${t.sliderAccent}40`,
    pointerEvents: "none",
  });

  return (
    <>
      {positions.map((position) => (
        <div key={`marker-${position}`} style={markerStyle(position)} />
      ))}
      {positions.map((position) => (
        <div key={`marker-line-${position}`} style={markerLineStyle(position)} />
      ))}
    </>
  );
}

export default function SharedSliderSection({
  theme: t,
  label,
  valueLabel,
  minLabel,
  maxLabel,
  sliderValue,
  onSliderChange,
  onPointerDown,
  onPointerUp,
  markerPositions = [],
  readouts,
  footer,
}: SharedSliderSectionProps) {
  return (
    <div style={{ flex: 1 }}>
      <div style={LABEL_ROW}>
        <span style={{ ...SLIDER_LABEL, color: t.label, minWidth: label === "APERTURE" ? 75 : 55 }}>{label}</span>
        <span
          style={{
            ...SLIDER_VALUE_BASE,
            color: t.focusDist,
            ...(label === "APERTURE" ? { minWidth: "3.5em" } : {}),
          }}
        >
          {valueLabel}
        </span>
      </div>
      <div style={SLIDER_ROW}>
        <span style={{ fontSize: 9, color: t.focusEndpoint }}>{minLabel}</span>
        <div style={SLIDER_WRAP}>
          {markerPositions.length > 0 && <CommonPointMarkers theme={t} positions={markerPositions} />}
          <input
            type="range"
            min="0"
            max="1"
            step="0.004"
            value={sliderValue}
            onPointerDown={onPointerDown}
            onChange={(event) => onSliderChange(parseFloat(event.target.value))}
            onPointerUp={onPointerUp}
            style={sliderInput(t, { sizing: "full" })}
          />
        </div>
        <span style={{ fontSize: 9, color: t.focusEndpoint }}>{maxLabel}</span>
      </div>
      {readouts && <div style={{ ...READOUT_ROW, color: t.spacingVal }}>{readouts}</div>}
      {footer}
    </div>
  );
}
