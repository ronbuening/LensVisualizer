/**
 * CollapseButton — reusable LESS/MORE toggle pill used by DiagramHeader,
 * SliderControl, and DiagramLegend.
 */

import type { CSSProperties } from "react";
import type { Theme } from "../../types/theme.js";
import { collapseBtn } from "../../utils/styles.js";

interface CollapseButtonProps {
  expanded: boolean;
  onToggle: () => void;
  theme: Theme;
  /** Static label shown regardless of state (e.g. "LEGEND"). Omit for LESS/MORE. */
  label?: string;
  style?: CSSProperties;
}

export default function CollapseButton({ expanded, onToggle, theme: t, label, style }: CollapseButtonProps) {
  return (
    <button onClick={onToggle} style={{ ...collapseBtn(t), ...style }}>
      <span>{label ?? (expanded ? "LESS" : "MORE")}</span>
      <span style={{ fontSize: 11, lineHeight: 1 }}>{expanded ? "\u25B4" : "\u25BE"}</span>
    </button>
  );
}
