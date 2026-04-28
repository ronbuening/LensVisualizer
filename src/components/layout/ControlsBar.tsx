/**
 * Unified controls bar — theme toggles, ray toggles, ray mode, chromatic
 * channel controls, and (optionally) scale mode. Used in comparison mode
 * (full labels) and as the mobile controls strip (compact labels).
 *
 * Props control presentation differences; logic is identical in both modes.
 */

import { ENABLE_EDGE_PROJECTION } from "../../utils/featureFlags.js";
import { SET_RAY_TOGGLE, SET_SCALE_MODE } from "../../utils/lensReducer.js";
import { toggleGroup, toggleBtn, chromChannelBtn, headerStrip } from "../../utils/styles.js";
import type { Theme } from "../../types/theme.js";
import type { BooleanRayField, LensAction, OffAxisMode, RayDensity } from "../../types/state.js";
import type { Dispatch } from "react";

interface ControlsBarProps {
  theme: Theme;
  compact: boolean;
  showScaleMode: boolean;
  showOnAxis: boolean;
  showOffAxis: OffAxisMode;
  rayDensity: RayDensity;
  rayTracksF: boolean;
  showChromatic: boolean;
  chromR: boolean;
  chromG: boolean;
  chromB: boolean;
  showPupils: boolean;
  scaleMode: "independent" | "normalized";
  dispatch: Dispatch<LensAction>;
}

export default function ControlsBar({
  theme: t,
  compact,
  showScaleMode,
  showOnAxis,
  showOffAxis,
  rayDensity,
  rayTracksF,
  showChromatic,
  chromR,
  chromG,
  chromB,
  showPupils,
  scaleMode,
  dispatch,
}: ControlsBarProps) {
  const padding = compact ? "6px 12px" : "8px 16px";
  const gap = compact ? 6 : 8;
  const svgW = compact ? 12 : 14;
  const rayToggleWidth = compact ? undefined : 228;
  const rayToggleButtonStyle = (active: boolean, hasRightBorder: boolean) =>
    toggleBtn(t, active, compact ? { hasRightBorder } : { hasRightBorder, padding: "5px 6px", gap: 4 });

  /* ── Off-axis cycling logic ── */
  const offAxisActive = showOffAxis !== "off";
  const offAxisCycle = ENABLE_EDGE_PROJECTION
    ? () => {
        const next: OffAxisMode = showOffAxis === "off" ? "trueAngle" : showOffAxis === "trueAngle" ? "edge" : "off";
        dispatch({ type: SET_RAY_TOGGLE, field: "showOffAxis", value: next });
      }
    : () => dispatch({ type: SET_RAY_TOGGLE, field: "showOffAxis", value: offAxisActive ? "off" : "trueAngle" });

  const offAxisLabel = compact
    ? ENABLE_EDGE_PROJECTION
      ? showOffAxis === "edge"
        ? "EDGE"
        : showOffAxis === "trueAngle"
          ? "TRUE\u2220"
          : "OFF"
      : "OFF"
    : ENABLE_EDGE_PROJECTION
      ? showOffAxis === "edge"
        ? "EDGE PROJ"
        : showOffAxis === "trueAngle"
          ? "TRUE \u2220"
          : "OFF-AXIS"
      : "OFF-AXIS";

  /* ── Ray toggle descriptors ── */
  const rayToggles = [
    {
      label: compact ? "ON" : "ON-AXIS",
      active: showOnAxis,
      onClick: () => dispatch({ type: SET_RAY_TOGGLE, field: "showOnAxis", value: !showOnAxis }),
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

  rayToggles.push({
    label: "PUPILS",
    active: showPupils,
    onClick: () => dispatch({ type: SET_RAY_TOGGLE, field: "showPupils", value: !showPupils }),
    dotA: t.pupilEntrance,
    dotB: t.pupilExit,
  });

  /* ── Ray mode descriptors ── */
  const rayModes = compact
    ? [
        { label: "\u221e", val: false },
        { label: "\u27e9 F", val: true },
      ]
    : [
        { label: "FROM \u221e", val: false, icon: "\u2225" },
        { label: "TRACKS FOCUS", val: true, icon: "\u27e9" },
      ];

  const rayDensities: ReadonlyArray<{ label: string; val: RayDensity }> = compact
    ? [
        { label: "NORM", val: "normal" },
        { label: "DENSE", val: "dense" },
        { label: "DIAG", val: "diagnostic" },
      ]
    : [
        { label: "NORMAL", val: "normal" },
        { label: "DENSE", val: "dense" },
        { label: "DIAGNOSTIC", val: "diagnostic" },
      ];

  /* ── Chromatic channel descriptors ── */
  const chromChannels: ReadonlyArray<{ ch: string; active: boolean; field: BooleanRayField; color: string }> = [
    { ch: "R", active: chromR, field: "chromR", color: t.rayChromR },
    { ch: "G", active: chromG, field: "chromG", color: t.rayChromG },
    { ch: "B", active: chromB, field: "chromB", color: t.rayChromB },
  ];

  return (
    <div
      style={{
        ...headerStrip(t, { padding }),
        display: "flex",
        flexWrap: "wrap",
        gap,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Ray toggles */}
      <div style={toggleGroup(t, rayToggleWidth == null ? undefined : { width: rayToggleWidth })}>
        {rayToggles.map(({ label, active, onClick, dotA, dotB }, idx) => (
          <button key={idx} onClick={onClick} style={rayToggleButtonStyle(active, idx < rayToggles.length - 1)}>
            <svg width={svgW} height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
              <line x1="0" y1="4" x2="14" y2="4" stroke={active ? dotA : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
              <line x1="0" y1="7" x2="14" y2="7" stroke={active ? dotB : "rgba(128,128,128,0.3)"} strokeWidth="1.5" />
            </svg>
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Ray mode */}
      <div style={toggleGroup(t, compact ? undefined : { width: 180 })}>
        {rayModes.map(({ label, val, icon }: { label: string; val: boolean; icon?: string }) => (
          <button
            key={label}
            onClick={() => dispatch({ type: SET_RAY_TOGGLE, field: "rayTracksF", value: val })}
            style={toggleBtn(t, rayTracksF === val, { hasRightBorder: !val })}
          >
            {icon && (
              <span style={{ fontSize: 11, fontWeight: 700, lineHeight: 1, opacity: rayTracksF === val ? 1 : 0.4 }}>
                {icon}
              </span>
            )}
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Ray density */}
      <div style={toggleGroup(t, compact ? undefined : { width: 228 })}>
        {rayDensities.map(({ label, val }, idx) => (
          <button
            key={val}
            onClick={() => dispatch({ type: SET_RAY_TOGGLE, field: "rayDensity", value: val })}
            style={toggleBtn(t, rayDensity === val, { hasRightBorder: idx < rayDensities.length - 1 })}
          >
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Chromatic */}
      <div
        style={
          compact
            ? toggleGroup(t)
            : {
                ...toggleGroup(t, { width: showChromatic ? 220 : 90 }),
                transition: "border-color 0.3s, width 0.3s",
              }
        }
      >
        <button
          onClick={() => dispatch({ type: SET_RAY_TOGGLE, field: "showChromatic", value: !showChromatic })}
          style={toggleBtn(t, showChromatic, { hasRightBorder: showChromatic })}
        >
          <svg width={svgW} height="8" viewBox="0 0 14 8" style={{ flexShrink: 0 }}>
            <line
              x1="0"
              y1="1"
              x2="14"
              y2="1"
              stroke={showChromatic ? t.rayChromR : "rgba(128,128,128,0.3)"}
              strokeWidth="1.5"
            />
            <line
              x1="0"
              y1="4"
              x2="14"
              y2="4"
              stroke={showChromatic ? t.rayChromG : "rgba(128,128,128,0.3)"}
              strokeWidth="1.5"
            />
            <line
              x1="0"
              y1="7"
              x2="14"
              y2="7"
              stroke={showChromatic ? t.rayChromB : "rgba(128,128,128,0.3)"}
              strokeWidth="1.5"
            />
          </svg>
          <span>COLOR</span>
        </button>
        {showChromatic &&
          chromChannels.map(({ ch, active, field, color }, idx) => (
            <button
              key={ch}
              onClick={() => dispatch({ type: SET_RAY_TOGGLE, field, value: !active })}
              style={chromChannelBtn(t, active, idx < 2)}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: active ? color : "rgba(128,128,128,0.3)",
                  display: "inline-block",
                }}
              />
              <span>{ch}</span>
            </button>
          ))}
      </div>

      {/* Scale mode toggle */}
      {showScaleMode && (
        <div style={toggleGroup(t, { width: 190 })}>
          {(
            [
              { label: "INDEPENDENT", val: "independent" as const },
              { label: "NORMALIZED", val: "normalized" as const },
            ] as const
          ).map(({ label, val }, idx) => (
            <button
              key={val}
              onClick={() => dispatch({ type: SET_SCALE_MODE, scaleMode: val })}
              style={toggleBtn(t, scaleMode === val, { hasRightBorder: idx === 0 })}
            >
              <span>{label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
