/**
 * MTFChart — three-channel diffraction-limited MTF curves.
 *
 * Renders R/G/B Airy curves vs spatial frequency in cycles/mm. For
 * catadioptric lenses with a central obstruction the curves include the
 * annular-pupil suppression at mid frequencies — this is what gives a
 * mirror telephoto its characteristic MTF rolloff signature.
 */

import type { Theme } from "../../../types/theme.js";
import type { MTFCurve, MTFCurveSet } from "../../../optics/mtfAnalysis.js";
import { ChartLegend, SvgChartFrame } from "./charts/SvgChartFrame.js";
import { createPlotArea, formatUnitIntervalTick, linearScale, niceTicks, svgPath } from "./charts/chartMath.js";
import { AnalysisEmptyState } from "./analysisUi.js";

interface MTFChartProps {
  data: MTFCurveSet;
  t: Theme;
  width?: number;
  height?: number;
}

function curveColor(t: Theme, channel: MTFCurve["channel"]): string {
  if (channel === "red") return t.rayChromR;
  if (channel === "blue") return t.rayChromB;
  return t.rayChromG;
}

export default function MTFChart({ data, t, width = 320, height = 220 }: MTFChartProps) {
  if (data.curves.length === 0 || data.maxCyclesPerMm <= 0) {
    return <AnalysisEmptyState t={t}>Not enough data to plot MTF.</AnalysisEmptyState>;
  }

  const area = createPlotArea(width, height);
  const { margin, plotW, plotH } = area;

  const xScale = linearScale(0, data.maxCyclesPerMm, margin.left, margin.left + plotW);
  const yScale = linearScale(0, 1, margin.top + plotH, margin.top);

  const yTicks = niceTicks(0, 1, 5, [0.1, 0.2, 0.25, 0.5, 1]);
  const xTicks = niceTicks(0, data.maxCyclesPerMm, 5, [50, 100, 200, 500, 1000]);

  /* Order back-to-front: blue under green under red so the eye sees the red
   * curve foremost (matches the visual hierarchy of the chromatic ray fan). */
  const orderedCurves = [...data.curves].sort((a, b) => a.wavelengthMm - b.wavelengthMm);

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
      xTickLabel={(tick) => `${tick.toFixed(0)}`}
      yTickLabel={formatUnitIntervalTick}
      xLabel="Spatial frequency (cycles/mm)"
      yLabel="MTF"
      referenceLines={[{ value: 0.5, opacity: 0.4 }]}
    >
      {orderedCurves.map((curve) => {
        const color = curveColor(t, curve.channel);
        const path = svgPath(
          curve.samples,
          (s) => xScale(s[0]),
          (s) => yScale(s[1]),
        );
        return (
          <path
            key={curve.channel}
            d={path}
            fill="none"
            stroke={color}
            strokeWidth={1.5}
            strokeLinejoin="round"
            opacity={0.9}
          />
        );
      })}

      <ChartLegend
        x={legendX}
        y={legendY}
        t={t}
        items={orderedCurves.map((curve) => ({
          label: `${curve.channel.charAt(0).toUpperCase()}${curve.channel.slice(1)} ${(curve.wavelengthMm * 1e6).toFixed(0)}nm`,
          color: curveColor(t, curve.channel),
        }))}
      />
    </SvgChartFrame>
  );
}
