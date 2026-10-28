/**
 * VignettingChart — Reusable SVG line chart plotting the unvignetted share of the stop's rays and relative
 * illumination versus field angle.  Shows two curves, a unity reference line, axis annotations, and a legend. A
 * field without a figure breaks its curve.
 */

import type { Theme } from "../../../types/theme.js";
import type { VignettingSample } from "../../../optics/analysis.js";
import { ChartLegend, SvgChartFrame } from "./charts/SvgChartFrame.js";
import {
  angleTicks,
  createPlotArea,
  formatUnitIntervalTick,
  gapPath,
  linearScale,
  niceTicks,
} from "./charts/chartMath.js";
import type { ChartPoint } from "./charts/chartMath.js";
import { AnalysisEmptyState } from "./analysisUi.js";

interface VignettingChartProps {
  samples: VignettingSample[];
  t: Theme;
  width?: number;
  height?: number;
}

export default function VignettingChart({ samples, t, width = 320, height = 220 }: VignettingChartProps) {
  if (samples.length < 2) {
    return <AnalysisEmptyState t={t}>Not enough data to plot vignetting curve.</AnalysisEmptyState>;
  }

  const area = createPlotArea(width, height);
  const { margin, plotW, plotH } = area;

  /* ── Axis ranges ── */
  const maxAngle = samples[samples.length - 1].fieldAngleDeg;
  /* Y-axis: 0 to slightly above max value (always ≥ 1.0) */
  const allValues = samples.flatMap((s) => [s.unvignettedFraction, s.relativeIllumination]);
  const yMax = Math.max(1.0, ...allValues.filter((v): v is number => v !== null)) * 1.05;
  const yMin = 0;

  /* ── Scale helpers ── */
  const xScale = linearScale(0, maxAngle, margin.left, margin.left + plotW);
  const yScale = linearScale(yMin, yMax, margin.top + plotH, margin.top);

  /* ── Curve paths: a field without a figure breaks its curve ── */
  const pointsOf = (value: (s: VignettingSample) => number | null): ChartPoint[] =>
    samples.map((s) => {
      const v = value(s);
      return v === null ? null : { x: s.fieldAngleDeg, y: v };
    });
  const vignettingPoints = pointsOf((s) => s.unvignettedFraction);
  const illuminationPoints = pointsOf((s) => s.relativeIllumination);
  const gtPath = gapPath(vignettingPoints, xScale, yScale);
  const riPath = gapPath(illuminationPoints, xScale, yScale);
  const drawn = (points: ChartPoint[]) => points.filter((p): p is { x: number; y: number } => !!p);

  /* ── Axis tick values ── */
  const yTicks = niceTicks(yMin, yMax, 5, [0.1, 0.2, 0.25, 0.5, 1]);
  const xTicks = angleTicks(maxAngle);

  /* ── Legend layout ── */
  const legendX = margin.left + plotW - 4;
  const legendY = margin.top + 8;

  return (
    <SvgChartFrame
      area={area}
      t={t}
      xTicks={xTicks}
      yTicks={yTicks}
      xScale={xScale}
      yScale={yScale}
      xTickLabel={(tick) => `${tick.toFixed(0)}°`}
      yTickLabel={formatUnitIntervalTick}
      xLabel="Field angle (°)"
      yLabel="Illumination"
      referenceLines={[{ value: 1, opacity: 0.5 }]}
    >
      {/* ── Unvignetted share curve (solid) ── */}
      <path d={gtPath} fill="none" stroke={t.chartSeries[0]} strokeWidth={1.5} strokeLinejoin="round" />

      {/* ── Relative illumination curve (dashed) ── */}
      <path
        d={riPath}
        fill="none"
        stroke={t.chartSeries[1]}
        strokeWidth={1.5}
        strokeLinejoin="round"
        strokeDasharray="4,3"
      />

      {/* ── Sample dots — unvignetted ── */}
      {drawn(vignettingPoints).map((p, i) => (
        <circle key={`gt-${i}`} cx={xScale(p.x)} cy={yScale(p.y)} r={2} fill={t.chartSeries[0]} opacity={0.8} />
      ))}

      {/* ── Sample dots — RI ── */}
      {drawn(illuminationPoints).map((p, i) => (
        <circle key={`ri-${i}`} cx={xScale(p.x)} cy={yScale(p.y)} r={2} fill={t.chartSeries[1]} opacity={0.8} />
      ))}

      {/* ── Legend ── */}
      <ChartLegend
        x={legendX}
        y={legendY}
        t={t}
        items={[
          { label: "Unvignetted", color: t.chartSeries[0] },
          { label: "Relative", color: t.chartSeries[1], dasharray: "4,3" },
        ]}
      />
    </SvgChartFrame>
  );
}
