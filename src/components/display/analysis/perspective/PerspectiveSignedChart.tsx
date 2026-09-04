import type { Theme } from "../../../../types/theme.js";

export interface PerspectiveSignedChartPoint {
  v: number;
  value: number | null;
  status: string;
}

export interface PerspectiveSignedChartSeries {
  label: string;
  color: string;
  points: readonly PerspectiveSignedChartPoint[];
  dashed?: boolean;
}

interface PerspectiveSignedChartProps {
  title: string;
  valueLabel: string;
  series: readonly PerspectiveSignedChartSeries[];
  t: Theme;
}

const WIDTH = 320;
const HEIGHT = 190;
const LEFT = 48;
const RIGHT = 12;
const TOP = 18;
const BOTTOM = 34;

/** Shared signed top-to-bottom chart for all fixed-sensor perspective analyses. */
export default function PerspectiveSignedChart({ title, valueLabel, series, t }: PerspectiveSignedChartProps) {
  const finiteValues = series.flatMap((entry) =>
    entry.points.flatMap((point) => (point.value !== null && Number.isFinite(point.value) ? [point.value] : [])),
  );
  const absoluteExtent = Math.max(1e-9, ...finiteValues.map(Math.abs));
  const allZero = finiteValues.length === 0 || finiteValues.every((value) => Math.abs(value) <= 1e-12);
  const yMin = allZero ? -1 : finiteValues.every((value) => value >= 0) ? 0 : -absoluteExtent;
  const yMax = allZero ? 1 : finiteValues.every((value) => value <= 0) ? 0 : absoluteExtent;
  const plotWidth = WIDTH - LEFT - RIGHT;
  const plotHeight = HEIGHT - TOP - BOTTOM;
  const xForV = (v: number) => LEFT + ((Math.max(-1, Math.min(1, v)) + 1) / 2) * plotWidth;
  const yForValue = (value: number) => TOP + ((yMax - value) / Math.max(1e-12, yMax - yMin)) * plotHeight;
  const unavailableCount = series.reduce(
    (count, entry) => count + entry.points.filter((point) => point.value === null || point.status !== "usable").length,
    0,
  );

  return (
    <div style={{ display: "grid", gap: 5 }}>
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        role="img"
        aria-label={`${title}, signed fixed-sensor field from top through center to bottom`}
        style={{ width: "100%", maxWidth: WIDTH, height: "auto", display: "block" }}
      >
        <title>{title}</title>
        <desc>
          The horizontal axis runs from the top of the fixed sensor through its center to the bottom. Crosses retain
          unavailable requested samples.
        </desc>
        {[-1, 0, 1].map((v) => (
          <line
            key={`vertical-${v}`}
            x1={xForV(v)}
            x2={xForV(v)}
            y1={TOP}
            y2={TOP + plotHeight}
            stroke={t.panelDivider}
            strokeWidth={0.8}
          />
        ))}
        <line x1={LEFT} x2={LEFT + plotWidth} y1={yForValue(0)} y2={yForValue(0)} stroke={t.axis} strokeWidth={1} />
        {series.map((entry) => {
          const usableSegments = contiguousUsableSegments(entry.points);
          return (
            <g key={entry.label}>
              {usableSegments.map((segment, index) => (
                <polyline
                  key={index}
                  fill="none"
                  stroke={entry.color}
                  strokeWidth={1.8}
                  strokeDasharray={entry.dashed ? "5 3" : undefined}
                  points={segment.map((point) => `${xForV(point.v)},${yForValue(point.value)}`).join(" ")}
                />
              ))}
              {entry.points.map((point, index) => {
                const x = xForV(point.v);
                if (point.status === "usable" && point.value !== null && Number.isFinite(point.value)) {
                  return <circle key={index} cx={x} cy={yForValue(point.value)} r={2.3} fill={entry.color} />;
                }
                const y = TOP + plotHeight - 3;
                return (
                  <g key={index} aria-label={`${entry.label}: ${point.status}`}>
                    <line x1={x - 3} x2={x + 3} y1={y - 3} y2={y + 3} stroke={entry.color} strokeWidth={1.2} />
                    <line x1={x - 3} x2={x + 3} y1={y + 3} y2={y - 3} stroke={entry.color} strokeWidth={1.2} />
                  </g>
                );
              })}
            </g>
          );
        })}
        <text x={LEFT} y={HEIGHT - 12} fill={t.muted} fontSize={9} textAnchor="start">
          TOP -100%
        </text>
        <text x={LEFT + plotWidth / 2} y={HEIGHT - 12} fill={t.muted} fontSize={9} textAnchor="middle">
          CENTER 0%
        </text>
        <text x={LEFT + plotWidth} y={HEIGHT - 12} fill={t.muted} fontSize={9} textAnchor="end">
          BOTTOM +100%
        </text>
        <text
          x={12}
          y={TOP + plotHeight / 2}
          fill={t.muted}
          fontSize={9}
          textAnchor="middle"
          transform={`rotate(-90 12 ${TOP + plotHeight / 2})`}
        >
          {valueLabel}
        </text>
      </svg>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 10, color: t.muted, fontSize: 8.5 }}>
        {series.map((entry) => (
          <span key={entry.label} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            <span
              aria-hidden="true"
              style={{ width: 13, borderTop: `2px ${entry.dashed ? "dashed" : "solid"} ${entry.color}` }}
            />
            {entry.label}
          </span>
        ))}
        {unavailableCount > 0 ? <span>{unavailableCount} unavailable sample(s) retained as crosses</span> : null}
      </div>
    </div>
  );
}

function contiguousUsableSegments(
  points: readonly PerspectiveSignedChartPoint[],
): Array<Array<PerspectiveSignedChartPoint & { value: number }>> {
  const segments: Array<Array<PerspectiveSignedChartPoint & { value: number }>> = [];
  let current: Array<PerspectiveSignedChartPoint & { value: number }> = [];
  for (const point of points) {
    if (point.status === "usable" && point.value !== null && Number.isFinite(point.value)) {
      current.push(point as PerspectiveSignedChartPoint & { value: number });
      continue;
    }
    if (current.length > 0) segments.push(current);
    current = [];
  }
  if (current.length > 0) segments.push(current);
  return segments;
}
