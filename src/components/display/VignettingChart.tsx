/**
 * VignettingChart — Reusable SVG line chart plotting geometric transmission
 * and relative illumination versus field angle.  Shows two curves, a unity
 * reference line, axis annotations, and a legend.
 */

import type { Theme } from "../../types/theme.js";
import type { VignettingSample } from "../../optics/vignetteAnalysis.js";
import { ChartLegend, SvgChartFrame } from "./charts/SvgChartFrame.js";
import {
  angleTicks,
  createPlotArea,
  formatUnitIntervalTick,
  linearScale,
  niceTicks,
  svgPath,
} from "./charts/chartMath.js";
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
  const allValues = samples.flatMap((s) => [s.geometricTransmission, s.relativeIllumination]);
  const yMax = Math.max(1.0, ...allValues) * 1.05;
  const yMin = 0;

  /* ── Scale helpers ── */
  const xScale = linearScale(0, maxAngle, margin.left, margin.left + plotW);
  const yScale = linearScale(yMin, yMax, margin.top + plotH, margin.top);

  /* ── Curve paths ── */
  const gtPath = svgPath(
    samples,
    (s) => xScale(s.fieldAngleDeg),
    (s) => yScale(s.geometricTransmission),
  );
  const riPath = svgPath(
    samples,
    (s) => xScale(s.fieldAngleDeg),
    (s) => yScale(s.relativeIllumination),
  );

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

      {/* ── Legend ── */}
      <ChartLegend
        x={legendX}
        y={legendY}
        t={t}
        items={[
          { label: "Geometric", color: t.sliderAccent },
          { label: "Relative (cos⁴)", color: t.rayOffWarm, dasharray: "4,3" },
        ]}
      />
    </SvgChartFrame>
  );
}
