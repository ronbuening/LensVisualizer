/**
 * Generic view toggle bar — a centered row of toggle buttons inside a
 * header strip. Used for both mobile (DIAGRAM/ANALYSIS) and desktop
 * (DIAGRAM/BOTH/ANALYSIS) view switching.
 */

import type { Theme } from "../../types/theme.js";
import { headerStrip, toggleGroup, toggleBtn } from "../../utils/styles.js";

interface ViewToggleBarProps {
  theme: Theme;
  options: ReadonlyArray<{ label: string; val: string }>;
  activeValue: string;
  onChange: (val: string) => void;
  width?: number;
}

export default function ViewToggleBar({ theme: t, options, activeValue, onChange, width }: ViewToggleBarProps) {
  const groupWidth = width ?? options.length * 110;

  return (
    <div
      style={{
        ...headerStrip(t, { padding: "8px 24px" }),
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={toggleGroup(t, { width: groupWidth })}>
        {options.map(({ label, val }, i) => (
          <button
            key={val}
            onClick={() => onChange(val)}
            style={toggleBtn(t, activeValue === val, {
              hasRightBorder: i < options.length - 1,
              padding: "5px 0",
            })}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
