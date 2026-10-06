/**
 * PositionModeToggle — switches single-lens zoom and focus between continuous sliders and patent positions.
 *
 * One segmented group shared by the desktop header option column (DiagramHeader) and the mobile controls strip
 * (ControlsBar), so the two sites cannot drift. It only reports the choice; the caller dispatches it.
 */
import { toggleBtn, toggleGroup } from "../../utils/style/styles.js";
import type { Theme } from "../../types/theme.js";

interface PositionModeToggleProps {
  t: Theme;
  /** True when zoom and focus step through source-published stations. */
  patentPositions: boolean;
  onChange: (patentPositions: boolean) => void;
  /** Short labels for the mobile strip. */
  compact?: boolean;
  width?: number | string;
}

export default function PositionModeToggle({
  t,
  patentPositions,
  onChange,
  compact = false,
  width,
}: PositionModeToggleProps) {
  const modes = [
    { value: false, label: "SLIDERS", title: "Continuous zoom and focus sliders" },
    {
      value: true,
      label: compact ? "PATENT" : "PATENT POSITIONS",
      title: "Step through the zoom and focus positions the patent tabulates",
    },
  ];
  return (
    <div
      role="group"
      aria-label="Zoom and focus positions"
      style={toggleGroup(t, width == null ? undefined : { width })}
    >
      {modes.map(({ value, label, title }, index) => (
        <button
          key={label}
          type="button"
          title={title}
          aria-pressed={patentPositions === value}
          onClick={() => onChange(value)}
          style={toggleBtn(t, patentPositions === value, { hasRightBorder: index < modes.length - 1, gap: 4 })}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
