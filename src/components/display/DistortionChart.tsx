/**
 * DistortionChart — Reusable SVG line chart plotting distortion %
 * versus normalized image height. Shows a zero reference line, sample dots,
 * barrel/pincushion labels, and axis annotations.
 */

import type { Theme } from "../../types/theme.js";
import type { DistortionSample } from "../../optics/distortionAnalysis.js";

interface DistortionChartProps {
  samples: DistortionSample[];
  t: Theme;
  width?: number;
  height?: number;
}

/* Chart layout constants */
const MARGIN = { top: 24, right: 20, bottom: 36, left: 48 };

export default function DistortionChart({ samples, t, width = 320, height = 220 }: DistortionChartProps) {
  if (samples.length < 2) {
    return (
      <div style={{ color: t.muted, fontSize: 10, padding: 12, transition: "color 0.3s" }}>
        Not enough data to plot distortion curve.
      </div>
    );
  }

  const plotW = width - MARGIN.left - MARGIN.right;
  const plotH = height - MARGIN.top - MARGIN.bottom;

  /* ── Axis ranges ── */
  const distortions = samples.map((s) => s.distortionPercent);
  const minD = Math.min(0, ...distortions);
  const maxD = Math.max(0, ...distortions);
  const dRange = Math.max(Math.abs(minD), Math.abs(maxD), 0.5);
  /* Symmetric y-axis around zero for visual clarity */
  const yMin = -dRange * 1.2;
  const yMax = dRange * 1.2;

  /* ── Scale helpers ── */
  const xScale = (normalizedImageHeight: number) => MARGIN.left + normalizedImageHeight * plotW;
  const yScale = (d: number) => MARGIN.top + ((yMax - d) / (yMax - yMin)) * plotH;

  /* ── Curve path ── */
  const pathD = samples
    .map(
      (s, i) =>
        `${i === 0 ? "M" : "L"}${xScale(s.normalizedImageHeight).toFixed(1)},${yScale(s.distortionPercent).toFixed(1)}`,
    )
    .join(" ");

  /* ── Edge distortion annotation ── */
  const edgeSample = samples[samples.length - 1];
  const edgeLabel = `${edgeSample.distortionPercent >= 0 ? "+" : ""}${edgeSample.distortionPercent.toFixed(2)}%`;

  /* ── Barrel / pincushion direction ── */
  const dominantDirection =
    edgeSample.distortionPercent > 0.01 ? "barrel" : edgeSample.distortionPercent < -0.01 ? "pincushion" : "";

  /* ── Y-axis tick values ── */
  const yTicks = generateTicks(yMin, yMax);

  /* ── X-axis tick values ── */
  const xTicks = generateImageHeightTicks();

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width, display: "block" }}>
      {/* ── Plot background ── */}
      <rect x={MARGIN.left} y={MARGIN.top} width={plotW} height={plotH} fill="none" />

      {/* ── Zero reference line ── */}
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
            {tick === 0 ? "0" : `${tick > 0 ? "+" : ""}${formatTick(tick)}`}
          </text>
        </g>
      ))}

      {/* ── X-axis ticks + labels ── */}
      {xTicks.map((tick) => (
        <g key={`x-${tick}`}>
          <line
            x1={xScale(tick / 100)}
            y1={MARGIN.top + plotH}
            x2={xScale(tick / 100)}
            y2={MARGIN.top + plotH + 4}
            stroke={t.muted}
            strokeWidth={0.5}
          />
          <text
            x={xScale(tick / 100)}
            y={MARGIN.top + plotH + 14}
            textAnchor="middle"
            fill={t.muted}
            fontSize={8}
            fontFamily="inherit"
          >
            {tick.toFixed(0)}%
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

      {/* ── Curve ── */}
      <path d={pathD} fill="none" stroke={t.sliderAccent} strokeWidth={1.5} strokeLinejoin="round" />

      {/* ── Sample dots ── */}
      {samples.map((s, i) => (
        <circle
          key={i}
          cx={xScale(s.normalizedImageHeight)}
          cy={yScale(s.distortionPercent)}
          r={2.5}
          fill={t.sliderAccent}
          opacity={0.8}
        />
      ))}

      {/* ── Edge value annotation ── */}
      <text
        x={xScale(edgeSample.normalizedImageHeight)}
        y={yScale(edgeSample.distortionPercent) + (edgeSample.distortionPercent >= 0 ? -10 : 14)}
        textAnchor="end"
        fill={t.value}
        fontSize={9}
        fontWeight={600}
        fontFamily="inherit"
      >
        {edgeLabel}
      </text>

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
        Image height (% of edge)
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
        Distortion (%)
      </text>

      {/* ── Barrel / pincushion label ── */}
      {dominantDirection && (
        <text
          x={MARGIN.left + plotW - 4}
          y={MARGIN.top + 12}
          textAnchor="end"
          fill={t.muted}
          fontSize={8}
          fontFamily="inherit"
          opacity={0.7}
        >
          {dominantDirection}
        </text>
      )}
    </svg>
  );
}

/** Generate y-axis tick values — symmetric around zero, nice intervals. */
function generateTicks(yMin: number, yMax: number): number[] {
  const range = yMax - yMin;
  const rawStep = range / 6;
  const mag = Math.pow(10, Math.floor(Math.log10(rawStep)));
  const niceSteps = [1, 2, 5, 10];
  const step = niceSteps.find((s) => s * mag >= rawStep)! * mag;

  const ticks: number[] = [];
  for (let v = Math.ceil(yMin / step) * step; v <= yMax; v += step) {
    ticks.push(Math.round(v * 1e6) / 1e6); // avoid floating-point noise
  }
  return ticks;
}

/** Generate x-axis tick values in percent of edge image height. */
function generateImageHeightTicks(): number[] {
  return [0, 20, 40, 60, 80, 100];
}

/** Format a tick value, avoiding unnecessary decimals. */
function formatTick(v: number): string {
  if (Number.isInteger(v)) return v.toString();
  if (Math.abs(v) >= 1) return v.toFixed(1);
  return v.toFixed(2);
}
