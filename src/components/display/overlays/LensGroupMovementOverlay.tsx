import { useMemo } from "react";
import {
  computeGroupMovementProfile,
  firstAvailableGroupMovementMode,
  isGroupMovementModeAvailable,
  type GroupMovementPoint,
  type GroupMovementProfile,
} from "../../../optics/groupMovement.js";
import { GROUP_MOVEMENT_MODES, type GroupMovementMode } from "../../../types/groupMovement.js";
import type { RuntimeLens } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";
import { SvgChartFrame } from "../analysis/charts/SvgChartFrame.js";
import { createPlotArea, formatMmTick, linearScale, niceTicks, svgPath } from "../analysis/charts/chartMath.js";
import { AnalysisEmptyState, AnalysisMetricRow } from "../analysis/analysisUi.js";

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

function positionTicksForProfile(profile: GroupMovementProfile): number[] {
  const [min, max] = profile.positionDomain;
  return [...new Set([...niceTicks(min, max, 6, [1, 2, 5, 10, 20, 25, 50, 100]), 0])].sort((a, b) => a - b);
}

function groupPath(points: readonly GroupMovementPoint[], rowY: number, xScale: (value: number) => number): string {
  return svgPath(
    points,
    (point) => xScale(point.positionMm),
    () => rowY,
  );
}

function seriesPositionRange(series: GroupMovementProfile["series"][number]): [number, number] {
  const positions = [
    ...series.samples.map((point) => point.positionMm),
    ...(series.secondarySamples ?? []).map((point) => point.positionMm),
    series.currentPoint.positionMm,
  ];
  return [Math.min(...positions), Math.max(...positions)];
}

function LensGroupMovementChart({ profile, t }: { profile: GroupMovementProfile; t: Theme }) {
  const width = 680;
  const height = Math.max(250, profile.series.length * 34 + 76);
  const area = createPlotArea(width, height, { top: 28, right: 18, bottom: 38, left: 72 });
  const { margin, plotW, plotH } = area;
  const plotTop = margin.top;
  const plotBottom = margin.top + plotH;
  const xScale = linearScale(profile.positionDomain[0], profile.positionDomain[1], margin.left, margin.left + plotW);
  const yScale = linearScale(0, Math.max(profile.series.length - 1, 1), margin.top + 18, margin.top + plotH - 18);
  const xTicks = positionTicksForProfile(profile);
  const yTicks = profile.series.map((_, index) => index);
  const colors = movementColors(t);
  const focusPlaneX = xScale(0);

  return (
    <SvgChartFrame
      area={area}
      t={t}
      xTicks={xTicks}
      yTicks={yTicks}
      xScale={xScale}
      yScale={yScale}
      xTickLabel={formatMmTick}
      yTickLabel={(value) => profile.series[value]?.group.label ?? ""}
      xLabel="Position from focus plane (mm)"
      yLabel="Group"
    >
      <line
        x1={focusPlaneX}
        y1={plotTop}
        x2={focusPlaneX}
        y2={plotBottom}
        stroke={t.sliderAccent}
        strokeWidth={1.1}
        strokeDasharray="4,3"
        opacity={0.85}
        data-testid="group-motion-focus-plane"
      />
      <text
        x={focusPlaneX - 5}
        y={plotTop - 8}
        textAnchor="end"
        fill={t.muted}
        fontSize={7.5}
        fontFamily="inherit"
        letterSpacing="0.06em"
      >
        FOCUS PLANE
      </text>
      {profile.series.map((series, index) => {
        const color = colors[index % colors.length];
        const rowY = yScale(index);
        const primaryY = series.secondarySamples ? rowY - 4 : rowY;
        const secondaryY = rowY + 4;
        const primaryPath = groupPath(series.samples, primaryY, xScale);
        const secondaryPath = series.secondarySamples ? groupPath(series.secondarySamples, secondaryY, xScale) : null;
        const [rangeMin, rangeMax] = seriesPositionRange(series);
        const rangeX = xScale(rangeMin);
        const rangeWidth = Math.max(1, xScale(rangeMax) - rangeX);
        const startPoint = series.samples[0];
        const endPoint = series.samples[series.samples.length - 1];
        return (
          <g key={series.group.id} data-testid={`group-motion-row-${index + 1}`}>
            {series.secondarySamples ? (
              <rect x={rangeX} y={rowY - 9} width={rangeWidth} height={18} rx={3} fill={color} opacity={0.08} />
            ) : null}
            <path d={primaryPath} fill="none" stroke={color} strokeWidth={2} strokeLinecap="round" />
            {secondaryPath ? (
              <path
                d={secondaryPath}
                fill="none"
                stroke={color}
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeDasharray="4,3"
                opacity={0.85}
              />
            ) : null}
            {startPoint ? (
              <circle
                cx={xScale(startPoint.positionMm)}
                cy={primaryY}
                r={3}
                fill={t.panelBg}
                stroke={color}
                strokeWidth={1.2}
              />
            ) : null}
            {endPoint ? (
              <circle cx={xScale(endPoint.positionMm)} cy={primaryY} r={2.6} fill={color} opacity={0.7} />
            ) : null}
            <circle
              cx={xScale(series.currentPoint.positionMm)}
              cy={rowY}
              r={3.7}
              fill={color}
              stroke={t.value}
              strokeWidth={0.9}
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
            Group-center positions relative to the fixed focus plane; 0 is the image side on the right.
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
                <span>Open circle = start</span>
                <span>Filled dot = end</span>
                <span>Outlined dot = current slider state</span>
                {profile.mode === "combined" ? <span>Dashed line = close focus across zoom</span> : null}
              </div>
              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", fontSize: 9.5 }}>
                <AnalysisMetricRow label="Max travel" value={`${profile.maxAbsShiftMm.toFixed(2)} mm`} t={t} />
                <AnalysisMetricRow label="Current" value={MODE_LABELS[activeMode]} t={t} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
