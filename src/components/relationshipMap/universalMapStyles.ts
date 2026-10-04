import type { CSSProperties } from "react";
import type { Theme } from "../../types/theme.js";

export function mapButton(theme: Theme, active = false): CSSProperties {
  return {
    minHeight: 44,
    padding: "8px 12px",
    border: `1px solid ${active ? theme.sliderAccent : theme.panelBorder}`,
    borderRadius: 6,
    background: active ? theme.toggleActiveBg : theme.panelBg,
    color: theme.title,
    font: "inherit",
    fontSize: "0.75rem",
    cursor: "pointer",
  };
}

export const mapRow: CSSProperties = { display: "flex", flexWrap: "wrap", alignItems: "center", gap: 8 };
