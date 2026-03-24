/**
 * RayToggles — On-axis and off-axis ray toggle buttons.
 *
 * Handles the off-axis cycling logic (off → trueAngle → edge → off)
 * with feature flag awareness for edge projection mode.
 */
import { ENABLE_EDGE_PROJECTION } from "../../utils/featureFlags.js";
import { toggleGroup, toggleBtn } from "../../utils/styles.js";
import type { Theme } from "../../types/theme.js";

interface RayTogglesProps {
  t: Theme;
  showOnAxis: boolean;
  onShowOnAxisChange?: (value: boolean) => void;
  showOffAxis: string;
  onShowOffAxisChange?: (value: string) => void;
}

export default function RayToggles({
  t,
  showOnAxis,
  onShowOnAxisChange,
  showOffAxis,
  onShowOffAxisChange,
}: RayTogglesProps) {
  const offAxisActive = showOffAxis !== "off";
  const offAxisCycle = ENABLE_EDGE_PROJECTION
    ? () => onShowOffAxisChange?.(showOffAxis === "off" ? "trueAngle" : showOffAxis === "trueAngle" ? "edge" : "off")
    : () => onShowOffAxisChange?.(offAxisActive ? "off" : "trueAngle");
  const offAxisLabel = ENABLE_EDGE_PROJECTION
    ? showOffAxis === "edge"
      ? "EDGE PROJ"
      : showOffAxis === "trueAngle"
        ? "TRUE \u2220"
        : "OFF-AXIS"
    : "OFF-AXIS";

  const buttons = [
    {
      label: "ON-AXIS",
      active: showOnAxis,
      onClick: () => onShowOnAxisChange?.(!showOnAxis),
      dotA: t.rayWarm,
      dotB: t.rayCool,
    },
    {
      label: offAxisLabel,
      active: offAxisActive,
      onClick: offAxisCycle,
      dotA: t.rayOffWarm,
      dotB: t.rayOffCool,
    },
  ];

  return (
    <div style={toggleGroup(t, { width: "100%" })}>
      {buttons.map(({ label, active, onClick, dotA, dotB }, idx) => (
        <button key={idx} onClick={onClick} style={toggleBtn(t, active, { hasRightBorder: idx === 0 })}>
          <svg width="14" height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
            <line x1="0" y1="4" x2="14" y2="4" stroke={active ? dotA : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
            <line x1="0" y1="7" x2="14" y2="7" stroke={active ? dotB : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
          </svg>
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
