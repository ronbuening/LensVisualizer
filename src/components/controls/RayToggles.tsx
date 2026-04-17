/**
 * RayToggles — On-axis, off-axis, and pupil overlay toggle buttons.
 *
 * Handles the off-axis cycling logic (off → trueAngle → edge → off)
 * with feature flag awareness for edge projection mode.
 */
import type { ReactNode } from "react";
import { ENABLE_EDGE_PROJECTION } from "../../utils/featureFlags.js";
import { toggleGroup, toggleBtn } from "../../utils/styles.js";
import type { Theme } from "../../types/theme.js";

interface RayTogglesProps {
  t: Theme;
  showOnAxis: boolean;
  onShowOnAxisChange?: (value: boolean) => void;
  showOffAxis: string;
  onShowOffAxisChange?: (value: string) => void;
  showPupils: boolean;
  onShowPupilsChange?: (value: boolean) => void;
}

export default function RayToggles({
  t,
  showOnAxis,
  onShowOnAxisChange,
  showOffAxis,
  onShowOffAxisChange,
  showPupils,
  onShowPupilsChange,
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

  type ButtonDef = {
    label: string;
    active: boolean;
    onClick: () => void;
    icon: (active: boolean) => ReactNode;
  };

  const buttons: ButtonDef[] = [
    {
      label: "ON-AXIS",
      active: showOnAxis,
      onClick: () => onShowOnAxisChange?.(!showOnAxis),
      icon: (active: boolean) => (
        <svg width="14" height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
          <line x1="0" y1="4" x2="14" y2="4" stroke={active ? t.rayWarm : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
          <line x1="0" y1="7" x2="14" y2="7" stroke={active ? t.rayCool : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
        </svg>
      ),
    },
    {
      label: offAxisLabel,
      active: offAxisActive,
      onClick: offAxisCycle,
      icon: (active: boolean) => (
        <svg width="14" height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
          <line
            x1="0"
            y1="4"
            x2="14"
            y2="4"
            stroke={active ? t.rayOffWarm : "rgba(128,128,128,0.3)"}
            strokeWidth="1.5"
          />
          <line
            x1="0"
            y1="7"
            x2="14"
            y2="7"
            stroke={active ? t.rayOffCool : "rgba(128,128,128,0.3)"}
            strokeWidth="1.5"
          />
        </svg>
      ),
    },
  ];

  buttons.push({
    label: "PUPILS",
    active: showPupils,
    onClick: () => onShowPupilsChange?.(!showPupils),
    icon: (active: boolean) => (
      <svg width="14" height="10" viewBox="0 0 14 10" style={{ flexShrink: 0 }}>
        <line
          x1="7"
          y1="0"
          x2="7"
          y2="10"
          stroke={active ? t.stopLabel : "rgba(128,128,128,0.3)"}
          strokeWidth="1.2"
          strokeDasharray="2,1.5"
        />
        <line x1="4" y1="0" x2="10" y2="0" stroke={active ? t.stopLabel : "rgba(128,128,128,0.3)"} strokeWidth="1.2" />
        <line
          x1="4"
          y1="10"
          x2="10"
          y2="10"
          stroke={active ? t.stopLabel : "rgba(128,128,128,0.3)"}
          strokeWidth="1.2"
        />
      </svg>
    ),
  });

  return (
    <div style={toggleGroup(t, { width: "100%" })}>
      {buttons.map(({ label, active, onClick, icon }, idx) => (
        <button key={idx} onClick={onClick} style={toggleBtn(t, active, { hasRightBorder: idx < buttons.length - 1 })}>
          {icon(active)}
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
