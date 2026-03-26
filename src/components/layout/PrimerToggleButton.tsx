/**
 * PrimerToggleButton — link-styled button to switch between simple and
 * intermediate primer levels inside the optics/aberrations primer overlays.
 */

import type { Theme } from "../../types/theme.js";

interface PrimerToggleButtonProps {
  level: "simple" | "intermediate";
  onToggle: () => void;
  theme: Theme;
}

export default function PrimerToggleButton({ level, onToggle, theme: t }: PrimerToggleButtonProps) {
  return (
    <div style={{ padding: "0 24px 20px", textAlign: "center" }}>
      <button
        onClick={onToggle}
        style={{
          background: "none",
          border: "none",
          color: t.descLinkColor,
          cursor: "pointer",
          fontSize: 12,
          fontFamily: "inherit",
          borderBottom: `1px solid ${t.descLinkColor}40`,
          padding: "4px 0",
        }}
      >
        {level === "simple" ? "Want more detail? Read the Intermediate Primer \u2192" : "\u2190 Back to Simple Primer"}
      </button>
    </div>
  );
}
