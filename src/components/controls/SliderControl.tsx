/**
 * SliderControl — Reusable slider with label, value display, range input,
 * endpoint labels, and optional collapsible description section.
 */
import type { ReactNode } from "react";
import { SLIDER_LABEL, SLIDER_VALUE_BASE, sliderInput } from "../../utils/styles.js";
import CollapseButton from "./CollapseButton.js";
import type { Theme } from "../../types/theme.js";

interface SliderControlProps {
  t: Theme;
  compact: boolean;
  useSideLayout: boolean;
  label: string;
  labelMinWidth: number;
  displayValue: string;
  displayValueStyle?: React.CSSProperties;
  value: number;
  step: number;
  onChange?: (value: number) => void;
  onPointerUp?: () => void;
  minLabel: string;
  maxLabel: string;
  /** Flex basis for horizontal (non-side) layout */
  flexBasis?: string;
  /** Whether to show the collapsible toggle */
  collapsible?: boolean;
  expanded?: boolean;
  onExpandedChange?: (value: boolean) => void;
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
  value,
  step,
  onChange,
  onPointerUp,
  minLabel,
  maxLabel,
  flexBasis = "200px",
  collapsible,
  expanded,
  onExpandedChange,
  children,
}: SliderControlProps) {
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
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <span style={{ ...SLIDER_LABEL, color: t.label, minWidth: labelMinWidth }}>{label}</span>
        <span style={{ ...SLIDER_VALUE_BASE, color: t.focusDist, ...displayValueStyle }}>{displayValue}</span>
        {collapsible && (
          <CollapseButton
            expanded={!!expanded}
            onToggle={() => onExpandedChange?.(!expanded)}
            theme={t}
            style={{ marginLeft: "auto" }}
          />
        )}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <span style={{ fontSize: 9, color: t.focusEndpoint }}>{minLabel}</span>
        <input
          type="range"
          min="0"
          max="1"
          step={step}
          value={value}
          onChange={(e) => onChange?.(parseFloat(e.target.value))}
          onPointerUp={onPointerUp}
          style={sliderInput(t)}
        />
        <span style={{ fontSize: 9, color: t.focusEndpoint }}>{maxLabel}</span>
      </div>
      {children}
    </div>
  );
}
