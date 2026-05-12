import { useMemo } from "react";
import {
  computeGroupMovementProfile,
  firstAvailableGroupMovementMode,
  isGroupMovementModeAvailable,
  type GroupMovementPoint,
  type GroupMovementProfile,
} from "../../optics/groupMovement.js";
import { GROUP_MOVEMENT_MODES, type GroupMovementMode } from "../../types/groupMovement.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";
import { SvgChartFrame } from "./charts/SvgChartFrame.js";
import {
  createPlotArea,
  formatShiftTick,
  linearScale,
  niceTicks,
  svgPath,
  symmetricDomain,
} from "./charts/chartMath.js";
import { AnalysisEmptyState, AnalysisMetricRow } from "./analysisUi.js";

interface LensGroupMovementOverlayProps {
  L: RuntimeLens;
  t: Theme;
  focusT: number;
  zoomT: number;
  aberrationT?: number;
  mode: GroupMovementMode;
  onModeChange: (mode: GroupMovementMode) => void;
}

const MODE_LABELS: Record<GroupMovementMode, string> = {
  focus: "Focus",
  zoom: "Zoom",
  combined: "Combined",
};

function movementColors(t: Theme): string[] {
  return [
    t.sliderAccent,
    t.rayOffWarm,
    t.rayCool,
    t.rayWarm,
    t.pupilExit,
    t.stopLabel,
    t.apdInferText,
    t.apdPatentText,
    t.chromDispLow,
    t.rayChromV,
  ];
}

function xTicksForProfile(profile: GroupMovementProfile): number[] {
  if (profile.mode === "focus") return [0, 0.25, 0.5, 0.75, 1];
  const [min, max] = profile.xDomain;
  return niceTicks(min, max, 5, [1, 2, 5, 10, 20, 25, 50, 100]);
}

function xTickLabel(profile: GroupMovementProfile, value: number): string {
  if (profile.mode === "focus") {
    if (Math.abs(value) < 1e-9) return "∞";
    if (Math.abs(value - 1) < 1e-9) return "Close";
    return `${Math.round(value * 100)}%`;
  }
  return `${Math.round(value)}`;
}

function xLabel(profile: GroupMovementProfile): string {
  return profile.mode === "focus" ? "Focus position" : "Focal length (mm)";
}

function bandPath(
  lower: readonly GroupMovementPoint[],
  upper: readonly GroupMovementPoint[],
  xScale: (value: number) => number,
  yScale: (value: number) => number,
): string {
  if (lower.length === 0 || lower.length !== upper.length) return "";
  const forward = lower
    .map(
      (point, index) => `${index === 0 ? "M" : "L"}${xScale(point.x).toFixed(1)},${yScale(point.shiftMm).toFixed(1)}`,
    )
    .join(" ");
  const backward = [...upper]
    .reverse()
    .map((point) => `L${xScale(point.x).toFixed(1)},${yScale(point.shiftMm).toFixed(1)}`)
    .join(" ");
  return `${forward} ${backward} Z`;
}

function LensGroupMovementChart({ profile, t }: { profile: GroupMovementProfile; t: Theme }) {
  const width = 680;
  const height = 320;
  const area = createPlotArea(width, height, { top: 24, right: 20, bottom: 38, left: 56 });
  const { margin, plotW, plotH } = area;
  const [yMin, yMax] = symmetricDomain(profile.maxAbsShiftMm, 1.15, 0.1);
  const xScale = linearScale(profile.xDomain[0], profile.xDomain[1], margin.left, margin.left + plotW);
  const yScale = linearScale(yMin, yMax, margin.top + plotH, margin.top);
  const xTicks = xTicksForProfile(profile);
  const yTicks = niceTicks(yMin, yMax, 6, [0.05, 0.1, 0.2, 0.25, 0.5, 1, 2, 5, 10, 20, 50]);
  const colors = movementColors(t);

  return (
    <SvgChartFrame
      area={area}
      t={t}
      xTicks={xTicks}
      yTicks={yTicks}
      xScale={xScale}
      yScale={yScale}
      xTickLabel={(value) => xTickLabel(profile, value)}
      yTickLabel={formatShiftTick}
      xLabel={xLabel(profile)}
      yLabel="Shift (mm)"
      referenceLines={[{ value: 0, opacity: 0.5 }]}
    >
      {profile.series.map((series, index) => {
        const color = colors[index % colors.length];
        const primaryPath = svgPath(
          series.samples,
          (point) => xScale(point.x),
          (point) => yScale(point.shiftMm),
        );
        const secondaryPath = series.secondarySamples
          ? svgPath(
              series.secondarySamples,
              (point) => xScale(point.x),
              (point) => yScale(point.shiftMm),
            )
          : null;
        return (
          <g key={series.group.id}>
            {series.secondarySamples ? (
              <path d={bandPath(series.samples, series.secondarySamples, xScale, yScale)} fill={color} opacity={0.08} />
            ) : null}
            <path d={primaryPath} fill="none" stroke={color} strokeWidth={1.4} strokeLinejoin="round" />
            {secondaryPath ? (
              <path
                d={secondaryPath}
                fill="none"
                stroke={color}
                strokeWidth={1.2}
                strokeLinejoin="round"
                strokeDasharray="4,3"
                opacity={0.85}
              />
            ) : null}
            <circle
              cx={xScale(series.currentPoint.x)}
              cy={yScale(series.currentPoint.shiftMm)}
              r={3}
              fill={color}
              stroke={t.value}
              strokeWidth={0.8}
            />
          </g>
        );
      })}
    </SvgChartFrame>
  );
}

function ModeRail({
  activeMode,
  profile,
  t,
  onModeChange,
}: {
  activeMode: GroupMovementMode;
  profile: GroupMovementProfile;
  t: Theme;
  onModeChange: (mode: GroupMovementMode) => void;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="Group movement view"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 6,
        minWidth: 96,
        borderRight: `1px solid ${t.panelDivider}`,
        paddingRight: 12,
      }}
    >
      {GROUP_MOVEMENT_MODES.map((mode) => {
        const enabled = isGroupMovementModeAvailable(profile.availability, mode);
        const active = activeMode === mode;
        return (
          <label
            key={mode}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 7,
              cursor: enabled ? "pointer" : "not-allowed",
              opacity: enabled ? 1 : 0.42,
              color: active ? t.value : t.muted,
              fontSize: 9,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              userSelect: "none",
            }}
          >
            <input
              type="radio"
              name="group-movement-mode"
              checked={active}
              disabled={!enabled}
              onChange={() => enabled && onModeChange(mode)}
              style={{ accentColor: t.sliderAccent }}
            />
            {MODE_LABELS[mode]}
          </label>
        );
      })}
    </div>
  );
}

export default function LensGroupMovementOverlay({
  L,
  t,
  focusT,
  zoomT,
  aberrationT = 0,
  mode,
  onModeChange,
}: LensGroupMovementOverlayProps) {
  const initialProfile = useMemo(
    () => computeGroupMovementProfile(L, mode, { focusT, zoomT, aberrationT }),
    [L, mode, focusT, zoomT, aberrationT],
  );
  const activeMode = isGroupMovementModeAvailable(initialProfile.availability, mode)
    ? mode
    : firstAvailableGroupMovementMode(initialProfile.availability);
  const profile = useMemo(
    () => (activeMode ? computeGroupMovementProfile(L, activeMode, { focusT, zoomT, aberrationT }) : initialProfile),
    [L, activeMode, focusT, zoomT, aberrationT, initialProfile],
  );

  return (
    <div style={{ padding: "0 18px 18px", display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16 }}>
        <div style={{ display: "grid", gap: 3 }}>
          <span style={{ color: t.value, fontSize: 14, fontWeight: 700 }}>Lens Group Movement</span>
          <span style={{ color: t.muted, fontSize: 9.5 }}>
            Axial group-center shift in the diagram&apos;s fixed image-plane reference.
          </span>
        </div>
        <AnalysisMetricRow label="Groups" value={profile.groups.length} t={t} />
      </div>
      <div style={{ display: "flex", alignItems: "stretch", gap: 16, minHeight: 360 }}>
        <ModeRail activeMode={activeMode ?? mode} profile={profile} t={t} onModeChange={onModeChange} />
        <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 10 }}>
          {!activeMode ? (
            <AnalysisEmptyState t={t}>This lens has no modeled focus or zoom group movement.</AnalysisEmptyState>
          ) : (
            <>
              <LensGroupMovementChart profile={profile} t={t} />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "6px 12px",
                  color: t.muted,
                  fontSize: 9,
                  lineHeight: 1.4,
                }}
              >
                {profile.series.map((series, index) => {
                  const color = movementColors(t)[index % movementColors(t).length];
                  return (
                    <span key={series.group.id} style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
                      <span
                        style={{
                          width: 10,
                          height: 2,
                          background: color,
                          display: "inline-block",
                        }}
                      />
                      {series.group.label}
                    </span>
                  );
                })}
              </div>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 9.5 }}>
                <AnalysisMetricRow label="Max shift" value={`${profile.maxAbsShiftMm.toFixed(2)} mm`} t={t} />
                <AnalysisMetricRow label="Current" value={MODE_LABELS[activeMode]} t={t} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
