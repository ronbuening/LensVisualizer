/**
 * DistortionChart — Reusable SVG line chart plotting distortion %
 * versus normalized image height. Shows a zero reference line, sample dots,
 * barrel/pincushion labels, and axis annotations.
 */

import type { Theme } from "../../types/theme.js";
import type { DistortionSample } from "../../optics/distortionAnalysis.js";
import { SvgChartFrame } from "./charts/SvgChartFrame.js";
import {
  createPlotArea,
  formatSignedCompactTick,
  imageHeightPercentTicks,
  linearScale,
  niceTicks,
  svgPath,
  symmetricDomain,
} from "./charts/chartMath.js";
import { AnalysisEmptyState } from "./analysisUi.js";

interface DistortionChartProps {
  samples: DistortionSample[];
  t: Theme;
  width?: number;
  height?: number;
}

export default function DistortionChart({ samples, t, width = 320, height = 220 }: DistortionChartProps) {
  if (samples.length < 2) {
    return <AnalysisEmptyState t={t}>Not enough data to plot distortion curve.</AnalysisEmptyState>;
  }

  const area = createPlotArea(width, height);
  const { margin, plotW, plotH } = area;

  /* ── Axis ranges ── */
  const distortions = samples.map((s) => s.distortionPercent);
  const minD = Math.min(0, ...distortions);
  const maxD = Math.max(0, ...distortions);
  const dRange = Math.max(Math.abs(minD), Math.abs(maxD), 0.5);
  /* Symmetric y-axis around zero for visual clarity */
  const [yMin, yMax] = symmetricDomain(dRange, 1.2, 0.5);

  /* ── Scale helpers ── */
  const xScale = linearScale(0, 1, margin.left, margin.left + plotW);
  const yScale = linearScale(yMin, yMax, margin.top + plotH, margin.top);

  /* ── Curve path ── */
  const pathD = svgPath(
    samples,
    (s) => xScale(s.normalizedImageHeight),
    (s) => yScale(s.distortionPercent),
  );

  /* ── Edge distortion annotation ── */
  const edgeSample = samples[samples.length - 1];
  const edgeLabel = `${edgeSample.distortionPercent >= 0 ? "+" : ""}${edgeSample.distortionPercent.toFixed(2)}%`;

  /* ── Barrel / pincushion direction ── */
  const dominantDirection =
    edgeSample.distortionPercent > 0.01 ? "barrel" : edgeSample.distortionPercent < -0.01 ? "pincushion" : "";

  /* ── Y-axis tick values ── */
  const yTicks = niceTicks(yMin, yMax, 6);

  /* ── X-axis tick values ── */
  const xTicks = imageHeightPercentTicks();

  return (
    <SvgChartFrame
      area={area}
      t={t}
      xTicks={xTicks}
      yTicks={yTicks}
      xScale={(tick) => xScale(tick / 100)}
      yScale={yScale}
      xTickLabel={(tick) => `${tick.toFixed(0)}%`}
      yTickLabel={formatSignedCompactTick}
      xLabel="Image height (% of edge)"
      yLabel="Distortion (%)"
      referenceLines={[{ value: 0, label: "No distortion", opacity: 0.6 }]}
    >
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

      {/* ── Barrel / pincushion label ── */}
      {dominantDirection && (
        <text
          x={margin.left + plotW - 4}
          y={margin.top + 12}
          textAnchor="end"
          fill={t.muted}
          fontSize={8}
          fontFamily="inherit"
          opacity={0.7}
        >
          {dominantDirection}
        </text>
      )}
    </SvgChartFrame>
  );
}
