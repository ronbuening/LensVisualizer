/**
 * PositionModeToggle — switches single-lens zoom and focus between continuous sliders and patent positions.
 *
 * Drawn in the breadcrumb bar beside the other page-level switches. It only reports the choice; the caller
 * dispatches it.
 *
 *   wide    → SLIDERS | PATENT POSITIONS, one segment per mode
 *   compact → a single PATENT on/off button, like the HC button next to it: two segments would squeeze the
 *             breadcrumb trail on a phone down to its first link
 */
import { toggleBtn, toggleGroup } from "../../utils/style/styles.js";
import type { Theme } from "../../types/theme.js";

interface PositionModeToggleProps {
  t: Theme;
  /** True when zoom and focus step through source-published stations. */
  patentPositions: boolean;
  onChange: (patentPositions: boolean) => void;
  /** Single on/off button for narrow layouts. */
  compact?: boolean;
  width?: number | string;
}

const GROUP_LABEL = "Zoom and focus positions";
const PATENT_TITLE = "Step through the zoom and focus positions the patent tabulates";

export default function PositionModeToggle({
  t,
  patentPositions,
  onChange,
  compact = false,
  width,
}: PositionModeToggleProps) {
  const groupStyle = toggleGroup(t, width == null ? undefined : { width });

  if (compact) {
    return (
      <div role="group" aria-label={GROUP_LABEL} style={groupStyle}>
        <button
          type="button"
          title={PATENT_TITLE}
          aria-pressed={patentPositions}
          onClick={() => onChange(!patentPositions)}
          style={toggleBtn(t, patentPositions, { hasRightBorder: false, gap: 4 })}
        >
          PATENT
        </button>
      </div>
    );
  }

  const modes = [
    { value: false, label: "SLIDERS", title: "Continuous zoom and focus sliders" },
    { value: true, label: "PATENT POSITIONS", title: PATENT_TITLE },
  ];
  return (
    <div role="group" aria-label={GROUP_LABEL} style={groupStyle}>
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
