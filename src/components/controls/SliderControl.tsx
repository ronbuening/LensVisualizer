/**
 * SliderControl — Reusable slider with label, value display, range input,
 * endpoint labels, and optional collapsible description section.
 *
 * `track` swaps the range input and its endpoint labels for another control (the station buttons of
 * patent-positions mode) while the label, readout, action slot, and collapsible section stay in place.
 */
import type { ReactNode } from "react";
import { SLIDER_LABEL, SLIDER_VALUE_BASE, sliderInput } from "../../utils/style/styles.js";
import CollapseButton from "./CollapseButton.js";
import type { Theme } from "../../types/theme.js";

interface SliderControlProps {
  t: Theme;
  compact: boolean;
  useSideLayout: boolean;
  label: string;
  /** Label column width that lines the readouts up; a row too wide for its panel takes it back before wrapping the note. */
  labelMinWidth: number;
  displayValue: string;
  displayValueStyle?: React.CSSProperties;
  /** Secondary reading shown small beside the value, e.g. a marketed figure. */
  displayNote?: string;
  value: number;
  step: number;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
  onPointerDown?: () => void;
  onPointerUp?: () => void;
  minLabel: string;
  centerLabel?: string;
  maxLabel: string;
  disabled?: boolean;
  disabledReason?: string;
  /** Flex basis for horizontal (non-side) layout */
  flexBasis?: string;
  /** Whether to show the collapsible toggle */
  collapsible?: boolean;
  expanded?: boolean;
  onExpandedChange?: (value: boolean) => void;
  action?: ReactNode;
  /** Replaces the range input and endpoint labels; `value`, `step`, and the endpoint labels are then unused. */
  track?: ReactNode;
  /** Content shown when expanded (or always if not collapsible) */
  children?: ReactNode;
}

export default function SliderControl({
  t,
  compact,
  useSideLayout,
  label,
  labelMinWidth,
  displayValue,
  displayValueStyle,
  displayNote,
  value,
  step,
  min = 0,
  max = 1,
  onChange,
  onPointerDown,
  onPointerUp,
  minLabel,
  centerLabel,
  maxLabel,
  disabled = false,
  disabledReason,
  flexBasis = "200px",
  collapsible,
  expanded,
  onExpandedChange,
  action,
  track,
  children,
}: SliderControlProps) {
  const sliderRowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    opacity: disabled ? 0.42 : 1,
    filter: disabled ? "grayscale(1)" : undefined,
    transition: "opacity 0.2s, filter 0.2s",
  };
  const sliderStyle: React.CSSProperties = {
    ...sliderInput(t),
    cursor: disabled ? "not-allowed" : "pointer",
    accentColor: disabled ? t.focusEndpoint : t.sliderAccent,
  };
  const rangeInput = (
    <input
      aria-label={label}
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      disabled={disabled}
      onPointerDown={disabled ? undefined : onPointerDown}
      onChange={(e) => {
        if (!disabled) onChange?.(parseFloat(e.target.value));
      }}
      onPointerUp={disabled ? undefined : onPointerUp}
      style={centerLabel ? { ...sliderStyle, width: "100%" } : sliderStyle}
    />
  );

  return (
    <div
      style={
        useSideLayout
          ? { padding: compact ? "10px 14px" : "14px 22px", borderBottom: `1px solid ${t.panelDivider}` }
          : {
              flex: `1 1 ${flexBasis}`,
              padding: compact ? "10px 14px" : "14px 22px",
              borderRight: `1px solid ${t.panelDivider}`,
            }
      }
    >
      {/* The buttons never shrink. The label grows from its text up to `labelMinWidth`, the padding that aligns the
          readouts, so a row that is too wide takes that padding back first and only then wraps the note; neither
          pushes a button past the panel edge. */}
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <span
          style={{
            ...SLIDER_LABEL,
            color: t.label,
            flex: "1 0 auto",
            minWidth: "max-content",
            maxWidth: labelMinWidth,
            whiteSpace: "nowrap",
          }}
        >
          {label}
        </span>
        <span style={{ ...SLIDER_VALUE_BASE, color: t.focusDist, ...displayValueStyle }}>{displayValue}</span>
        {displayNote && <span style={{ fontSize: 9.5, lineHeight: 1, color: t.desc }}>{displayNote}</span>}
        {action && (
          <span style={{ marginLeft: "auto", display: "flex", alignItems: "center", flexShrink: 0 }}>{action}</span>
        )}
        {collapsible && (
          <CollapseButton
            expanded={!!expanded}
            onToggle={() => onExpandedChange?.(!expanded)}
            theme={t}
            style={{ marginLeft: action ? 0 : "auto", flexShrink: 0 }}
          />
        )}
      </div>
      <div style={sliderRowStyle} title={disabled ? disabledReason : undefined}>
        {track ? (
          <div style={{ flex: 1, minWidth: 0 }}>{track}</div>
        ) : (
          <>
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>{minLabel}</span>
            {centerLabel ? (
              <div style={{ flex: 1, minWidth: 0 }}>
                {rangeInput}
                <div style={{ marginTop: 5, textAlign: "center", fontSize: 9, color: t.focusEndpoint }}>
                  {centerLabel}
                </div>
              </div>
            ) : (
              rangeInput
            )}
            <span style={{ fontSize: 9, color: t.focusEndpoint }}>{maxLabel}</span>
          </>
        )}
      </div>
      {children}
    </div>
  );
}
