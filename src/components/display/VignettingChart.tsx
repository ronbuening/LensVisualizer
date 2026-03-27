/**
 * VignettingChart — Reusable SVG line chart plotting geometric transmission
 * and relative illumination versus field angle.  Shows two curves, a unity
 * reference line, axis annotations, and a legend.
 */

import type { Theme } from "../../types/theme.js";
import type { VignettingSample } from "../../optics/vignetteAnalysis.js";

interface VignettingChartProps {
  samples: VignettingSample[];
  t: Theme;
  width?: number;
  height?: number;
}

/* Chart layout constants */
const MARGIN = { top: 24, right: 20, bottom: 36, left: 48 };

export default function VignettingChart({ samples, t, width = 320, height = 220 }: VignettingChartProps) {
  if (samples.length < 2) {
    return (
      <div style={{ color: t.muted, fontSize: 10, padding: 12, transition: "color 0.3s" }}>
        Not enough data to plot vignetting curve.
      </div>
    );
  }

  const plotW = width - MARGIN.left - MARGIN.right;
  const plotH = height - MARGIN.top - MARGIN.bottom;

  /* ── Axis ranges ── */
  const maxAngle = samples[samples.length - 1].fieldAngleDeg;
  /* Y-axis: 0 to slightly above max value (always ≥ 1.0) */
  const allValues = samples.flatMap((s) => [s.geometricTransmission, s.relativeIllumination]);
  const yMax = Math.max(1.0, ...allValues) * 1.05;
  const yMin = 0;

  /* ── Scale helpers ── */
  const xScale = (angle: number) => MARGIN.left + (angle / maxAngle) * plotW;
  const yScale = (v: number) => MARGIN.top + ((yMax - v) / (yMax - yMin)) * plotH;

  /* ── Curve paths ── */
  const gtPath = samples
    .map(
      (s, i) =>
        `${i === 0 ? "M" : "L"}${xScale(s.fieldAngleDeg).toFixed(1)},${yScale(s.geometricTransmission).toFixed(1)}`,
    )
    .join(" ");

  const riPath = samples
    .map(
      (s, i) =>
        `${i === 0 ? "M" : "L"}${xScale(s.fieldAngleDeg).toFixed(1)},${yScale(s.relativeIllumination).toFixed(1)}`,
    )
    .join(" ");

  /* ── Axis tick values ── */
  const yTicks = generateYTicks(yMin, yMax);
  const xTicks = generateAngleTicks(maxAngle);

  /* ── Legend layout ── */
  const legendX = MARGIN.left + plotW - 4;
  const legendY = MARGIN.top + 8;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width, display: "block" }}>
      {/* ── Plot background ── */}
      <rect x={MARGIN.left} y={MARGIN.top} width={plotW} height={plotH} fill="none" />

      {/* ── Unity reference line (y = 1.0) ── */}
      <line
        x1={MARGIN.left}
        y1={yScale(1.0)}
        x2={MARGIN.left + plotW}
        y2={yScale(1.0)}
        stroke={t.muted}
        strokeWidth={1}
        strokeDasharray="4,3"
        opacity={0.5}
      />

      {/* ── Y-axis grid + labels ── */}
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
            {formatYTick(tick)}
          </text>
        </g>
      ))}

      {/* ── X-axis ticks + labels ── */}
      {xTicks.map((tick) => (
        <g key={`x-${tick}`}>
          <line
            x1={xScale(tick)}
            y1={MARGIN.top + plotH}
            x2={xScale(tick)}
            y2={MARGIN.top + plotH + 4}
            stroke={t.muted}
            strokeWidth={0.5}
          />
          <text
            x={xScale(tick)}
            y={MARGIN.top + plotH + 14}
            textAnchor="middle"
            fill={t.muted}
            fontSize={8}
            fontFamily="inherit"
          >
            {tick.toFixed(0)}°
          </text>
        </g>
      ))}

      {/* ── Axes ── */}
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

      {/* ── Geometric transmission curve (solid) ── */}
      <path d={gtPath} fill="none" stroke={t.sliderAccent} strokeWidth={1.5} strokeLinejoin="round" />

      {/* ── Relative illumination curve (dashed) ── */}
      <path
        d={riPath}
        fill="none"
        stroke={t.rayOffWarm}
        strokeWidth={1.5}
        strokeLinejoin="round"
        strokeDasharray="4,3"
      />

      {/* ── Sample dots — GT ── */}
      {samples.map((s, i) => (
        <circle
          key={`gt-${i}`}
          cx={xScale(s.fieldAngleDeg)}
          cy={yScale(s.geometricTransmission)}
          r={2}
          fill={t.sliderAccent}
          opacity={0.8}
        />
      ))}

      {/* ── Sample dots — RI ── */}
      {samples.map((s, i) => (
        <circle
          key={`ri-${i}`}
          cx={xScale(s.fieldAngleDeg)}
          cy={yScale(s.relativeIllumination)}
          r={2}
          fill={t.rayOffWarm}
          opacity={0.8}
        />
      ))}

      {/* ── Axis labels ── */}
      <text
        x={MARGIN.left + plotW / 2}
        y={height - 4}
        textAnchor="middle"
        fill={t.muted}
        fontSize={8.5}
        fontFamily="inherit"
        letterSpacing="0.05em"
      >
        Field angle (°)
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
        Illumination
      </text>

      {/* ── Legend ── */}
      <g>
        {/* GT swatch */}
        <line
          x1={legendX - 80}
          y1={legendY + 4}
          x2={legendX - 68}
          y2={legendY + 4}
          stroke={t.sliderAccent}
          strokeWidth={1.5}
        />
        <text
          x={legendX - 65}
          y={legendY + 4}
          dominantBaseline="central"
          fill={t.muted}
          fontSize={7.5}
          fontFamily="inherit"
        >
          Geometric
        </text>
        {/* RI swatch */}
        <line
          x1={legendX - 80}
          y1={legendY + 14}
          x2={legendX - 68}
          y2={legendY + 14}
          stroke={t.rayOffWarm}
          strokeWidth={1.5}
          strokeDasharray="4,3"
        />
        <text
          x={legendX - 65}
          y={legendY + 14}
          dominantBaseline="central"
          fill={t.muted}
          fontSize={7.5}
          fontFamily="inherit"
        >
          Relative (cos⁴)
        </text>
      </g>
    </svg>
  );
}

/** Generate y-axis tick values — nice intervals from 0 to yMax. */
function generateYTicks(yMin: number, yMax: number): number[] {
  const range = yMax - yMin;
  const rawStep = range / 5;
  const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const niceSteps = [0.1, 0.2, 0.25, 0.5, 1];
  const step = (niceSteps.find((s) => s * mag >= rawStep) ?? 1) * mag;

  const ticks: number[] = [];
  for (let v = Math.ceil(yMin / step) * step; v <= yMax + step * 0.01; v += step) {
    const rounded = Math.round(v * 1e6) / 1e6;
    if (rounded >= yMin - 1e-9 && rounded <= yMax + 1e-9) ticks.push(rounded);
  }
  return ticks;
}

/** Generate x-axis tick values for field angles. */
function generateAngleTicks(maxAngle: number): number[] {
  const rawStep = maxAngle / 5;
  const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const niceSteps = [1, 2, 5, 10];
  const step = (niceSteps.find((s) => s * mag >= rawStep) ?? 1) * mag;

  const ticks: number[] = [];
  for (let v = 0; v <= maxAngle; v += step) {
    ticks.push(v);
  }
  return ticks;
}

/** Format a y-axis tick value. */
function formatYTick(v: number): string {
  if (v === 0) return "0";
  if (Number.isInteger(v * 100)) return (v * 100).toFixed(0) === "100" ? "1.0" : v.toFixed(2);
  return v.toFixed(2);
}
