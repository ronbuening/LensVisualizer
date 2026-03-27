/**
 * FocusBreathingTab — Analysis drawer tab content for focus breathing.
 *
 * Shows how effective focal length changes across the focus range at the
 * current zoom position, with the current focus point highlighted.
 */

import { useMemo } from "react";
import { eflAtFocus, eflAtZoom, formatDist } from "../../optics/optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import type { Theme } from "../../types/theme.js";

interface FocusBreathingTabProps {
  L: RuntimeLens;
  t: Theme;
  focusT: number;
  zoomT: number;
  dynamicEFL: number;
}

interface BreathingSample {
  focusT: number;
  efl: number;
  breathingPercent: number;
  distanceLabel: string;
}

const SAMPLE_COUNT = 21;
const MARGIN = { top: 24, right: 20, bottom: 42, left: 48 };

function buildBreathingSamples(L: RuntimeLens, zoomT: number, currentFocusT: number): BreathingSample[] {
  const infinityEFL = L.isZoom ? eflAtZoom(zoomT, L) : L.EFL;
  const points = new Set<number>([0, 1, currentFocusT]);
  for (let i = 0; i < SAMPLE_COUNT; i++) points.add(i / (SAMPLE_COUNT - 1));

  return [...points]
    .sort((a, b) => a - b)
    .map((focusT) => {
      const efl = eflAtFocus(focusT, zoomT, L);
      const breathingPercent = Math.abs(infinityEFL) > 1e-9 ? (100 * (efl - infinityEFL)) / infinityEFL : 0;
      return {
        focusT,
        efl,
        breathingPercent,
        distanceLabel: formatDist(focusT, L),
      };
    });
}

function FocusBreathingChart({
  samples,
  currentFocusT,
  t,
  width = 320,
  height = 220,
}: {
  samples: BreathingSample[];
  currentFocusT: number;
  t: Theme;
  width?: number;
  height?: number;
}) {
  const plotW = width - MARGIN.left - MARGIN.right;
  const plotH = height - MARGIN.top - MARGIN.bottom;
  const breathingValues = samples.map((s) => s.breathingPercent);
  const minB = Math.min(0, ...breathingValues);
  const maxB = Math.max(0, ...breathingValues);
  const bRange = Math.max(Math.abs(minB), Math.abs(maxB), 0.5);
  const yMin = -bRange * 1.2;
  const yMax = bRange * 1.2;

  const xScale = (focusT: number) => MARGIN.left + focusT * plotW;
  const yScale = (value: number) => MARGIN.top + ((yMax - value) / (yMax - yMin)) * plotH;

  const pathD = samples
    .map((s, i) => `${i === 0 ? "M" : "L"}${xScale(s.focusT).toFixed(1)},${yScale(s.breathingPercent).toFixed(1)}`)
    .join(" ");

  const currentSample =
    samples.find((s) => Math.abs(s.focusT - currentFocusT) < 1e-9) ??
    samples.reduce((best, sample) =>
      Math.abs(sample.focusT - currentFocusT) < Math.abs(best.focusT - currentFocusT) ? sample : best,
    );

  const yTicks = generateTicks(yMin, yMax);
  const xTicks = [
    { focusT: 0, label: "∞" },
    { focusT: 0.5, label: "mid" },
    { focusT: 1, label: samples[samples.length - 1].distanceLabel },
  ];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width, display: "block" }}>
      <rect x={MARGIN.left} y={MARGIN.top} width={plotW} height={plotH} fill="none" />

      <line
        x1={MARGIN.left}
        y1={yScale(0)}
        x2={MARGIN.left + plotW}
        y2={yScale(0)}
        stroke={t.muted}
        strokeWidth={1}
        strokeDasharray="4,3"
        opacity={0.6}
      />

      {yTicks.map((tick) => (
        <g key={`y-${tick}`}>
          <line
            x1={MARGIN.left}
            y1={yScale(tick)}
            x2={MARGIN.left + plotW}
            y2={yScale(tick)}
            stroke={t.panelBorder}
            strokeWidth={0.5}
            opacity={0.4}
          />
          <text
            x={MARGIN.left - 6}
            y={yScale(tick)}
            textAnchor="end"
            dominantBaseline="central"
            fill={t.muted}
            fontSize={8}
            fontFamily="inherit"
          >
            {tick === 0 ? "0" : `${tick > 0 ? "+" : ""}${formatTick(tick)}%`}
          </text>
        </g>
      ))}

      {xTicks.map((tick) => (
        <g key={`x-${tick.label}`}>
          <line
            x1={xScale(tick.focusT)}
            y1={MARGIN.top + plotH}
            x2={xScale(tick.focusT)}
            y2={MARGIN.top + plotH + 4}
            stroke={t.muted}
            strokeWidth={0.5}
          />
          <text
            x={xScale(tick.focusT)}
            y={MARGIN.top + plotH + 14}
            textAnchor="middle"
            fill={t.muted}
            fontSize={8}
            fontFamily="inherit"
          >
            {tick.label}
          </text>
        </g>
      ))}

      <line
        x1={MARGIN.left}
        y1={MARGIN.top}
        x2={MARGIN.left}
        y2={MARGIN.top + plotH}
        stroke={t.panelBorder}
        strokeWidth={1}
      />
      <line
        x1={MARGIN.left}
        y1={MARGIN.top + plotH}
        x2={MARGIN.left + plotW}
        y2={MARGIN.top + plotH}
        stroke={t.panelBorder}
        strokeWidth={1}
      />

      <path d={pathD} fill="none" stroke={t.sliderAccent} strokeWidth={1.5} strokeLinejoin="round" />

      {samples.map((s, i) => (
        <circle
          key={i}
          cx={xScale(s.focusT)}
          cy={yScale(s.breathingPercent)}
          r={2.2}
          fill={t.sliderAccent}
          opacity={0.75}
        />
      ))}

      <line
        x1={xScale(currentSample.focusT)}
        y1={MARGIN.top}
        x2={xScale(currentSample.focusT)}
        y2={MARGIN.top + plotH}
        stroke={t.value}
        strokeWidth={0.9}
        strokeDasharray="3,3"
        opacity={0.8}
      />
      <circle cx={xScale(currentSample.focusT)} cy={yScale(currentSample.breathingPercent)} r={3.6} fill={t.value} />

      <text
        x={xScale(currentSample.focusT)}
        y={yScale(currentSample.breathingPercent) + (currentSample.breathingPercent >= 0 ? -10 : 14)}
        textAnchor="middle"
        fill={t.value}
        fontSize={9}
        fontWeight={600}
        fontFamily="inherit"
      >
        {currentSample.breathingPercent >= 0 ? "+" : ""}
        {currentSample.breathingPercent.toFixed(1)}%
      </text>

      <text
        x={MARGIN.left + plotW / 2}
        y={height - 4}
        textAnchor="middle"
        fill={t.muted}
        fontSize={8.5}
        fontFamily="inherit"
        letterSpacing="0.05em"
      >
        Focus position
      </text>
      <text
        x={10}
        y={MARGIN.top + plotH / 2}
        textAnchor="middle"
        fill={t.muted}
        fontSize={8.5}
        fontFamily="inherit"
        letterSpacing="0.05em"
        transform={`rotate(-90, 10, ${MARGIN.top + plotH / 2})`}
      >
        EFL change (%)
      </text>
    </svg>
  );
}

export default function FocusBreathingTab({ L, t, focusT, zoomT, dynamicEFL }: FocusBreathingTabProps) {
  const samples = useMemo(() => buildBreathingSamples(L, zoomT, focusT), [L, zoomT, focusT]);
  const infinityEFL = L.isZoom ? eflAtZoom(zoomT, L) : L.EFL;
  const currentBreathingPercent = Math.abs(infinityEFL) > 1e-9 ? (100 * (dynamicEFL - infinityEFL)) / infinityEFL : 0;
  const closeSample = samples[samples.length - 1];
  const breathingLabel =
    Math.abs(currentBreathingPercent) < 0.05
      ? "negligible"
      : currentBreathingPercent < 0
        ? "narrower FOV"
        : "wider FOV";

  return (
    <div>
      <div style={{ marginBottom: 8, display: "grid", gap: 4 }}>
        <span style={{ fontSize: 10.5, color: t.muted, transition: "color 0.3s" }}>Focus breathing</span>
        <span style={{ fontSize: 9, color: t.muted, lineHeight: 1.4, transition: "color 0.3s" }}>
          Effective focal length shift across the focus range at the current zoom position.
        </span>
      </div>
      <FocusBreathingChart samples={samples} currentFocusT={focusT} t={t} />
      <div
        style={{
          display: "flex",
          gap: 14,
          flexWrap: "wrap",
          fontSize: 9.5,
          marginTop: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>
            CURRENT
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: t.value,
              fontVariantNumeric: "tabular-nums",
              transition: "color 0.3s",
            }}
          >
            {currentBreathingPercent >= 0 ? "+" : ""}
            {currentBreathingPercent.toFixed(1)}%
          </span>
          <span style={{ fontSize: 9, color: t.muted, transition: "color 0.3s" }}>({breathingLabel})</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>EFL</span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: t.value,
              fontVariantNumeric: "tabular-nums",
              transition: "color 0.3s",
            }}
          >
            {dynamicEFL.toFixed(1)} mm
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>FOCUS</span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: t.value,
              fontVariantNumeric: "tabular-nums",
              transition: "color 0.3s",
            }}
          >
            {formatDist(focusT, L)}
          </span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: 10, color: t.label, letterSpacing: "0.1em", transition: "color 0.3s" }}>CLOSE</span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: t.value,
              fontVariantNumeric: "tabular-nums",
              transition: "color 0.3s",
            }}
          >
            {closeSample.breathingPercent >= 0 ? "+" : ""}
            {closeSample.breathingPercent.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}

function generateTicks(yMin: number, yMax: number): number[] {
  const range = yMax - yMin;
  const rawStep = range / 6;
  const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const niceSteps = [1, 2, 5, 10];
  const step = niceSteps.find((s) => s * mag >= rawStep)! * mag;

  const ticks: number[] = [];
  for (let v = Math.ceil(yMin / step) * step; v <= yMax; v += step) {
    ticks.push(Math.round(v * 1e6) / 1e6);
  }
  return ticks;
}

function formatTick(v: number): string {
  if (Number.isInteger(v)) return v.toString();
  if (Math.abs(v) >= 1) return v.toFixed(1);
  return v.toFixed(2);
}
