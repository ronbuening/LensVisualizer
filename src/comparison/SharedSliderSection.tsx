/**
 * SharedSliderSection — reusable comparison-slider section shell.
 *
 * The zoom, focus, and aperture rows share the same layout pattern: label,
 * current value, optional common-point markers, readouts, and optional footer.
 * Centralizing that structure keeps SharedSlidersBar focused on domain values.
 */

import { useRef, type CSSProperties, type ReactNode } from "react";
import { SLIDER_LABEL, SLIDER_VALUE_BASE, sliderInput } from "../utils/style/styles.js";
import type { Theme } from "../types/theme.js";

interface SharedSliderSectionProps {
  theme: Theme;
  label: string;
  valueLabel: string;
  minLabel: ReactNode;
  maxLabel: ReactNode;
  sliderValue: number;
  sliderMin?: number;
  sliderMax?: number;
  sliderStep?: number;
  disabled?: boolean;
  disabledReason?: string;
  onSliderChange: (value: number) => void;
  onDirectChange?: (value: number) => void;
  onPointerDown?: () => void;
  onPointerUp?: () => void;
  markerPositions?: number[];
  action?: ReactNode;
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
  sliderMin = 0,
  sliderMax = 1,
  sliderStep = 0.004,
  disabled = false,
  disabledReason,
  onSliderChange,
  onDirectChange,
  onPointerDown,
  onPointerUp,
  markerPositions = [],
  action,
  readouts,
  footer,
}: SharedSliderSectionProps) {
  const pointerActive = useRef(false);
  const endPointer = () => {
    pointerActive.current = false;
    onPointerUp?.();
  };
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
        {action && <span style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>{action}</span>}
      </div>
      <div
        style={{ ...SLIDER_ROW, opacity: disabled ? 0.42 : 1, filter: disabled ? "grayscale(1)" : undefined }}
        title={disabled ? disabledReason : undefined}
      >
        <span style={{ fontSize: 9, color: t.focusEndpoint }}>{minLabel}</span>
        <div style={SLIDER_WRAP}>
          {markerPositions.length > 0 && <CommonPointMarkers theme={t} positions={markerPositions} />}
          <input
            type="range"
            aria-label={label}
            disabled={disabled}
            min={sliderMin}
            max={sliderMax}
            step={sliderStep}
            value={sliderValue}
            onPointerDown={
              disabled
                ? undefined
                : () => {
                    pointerActive.current = true;
                    onPointerDown?.();
                  }
            }
            onKeyDown={() => {
              pointerActive.current = false;
            }}
            onBlur={endPointer}
            onPointerCancel={endPointer}
            onChange={(event) => {
              if (!disabled) {
                const change = pointerActive.current ? onSliderChange : (onDirectChange ?? onSliderChange);
                change(parseFloat(event.target.value));
              }
            }}
            onPointerUp={disabled ? undefined : endPointer}
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
