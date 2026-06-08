import type { LongitudinalChromaticFocusResult } from "../../../optics/compat.js";
import type { Theme } from "../../../types/theme.js";
import { AnalysisEmptyState } from "./analysisUi.js";
import { SvgChartFrame } from "./charts/SvgChartFrame.js";
import {
  createPlotArea,
  formatSignedCompactTick,
  linearScale,
  niceTicks,
  symmetricDomain,
} from "./charts/chartMath.js";
import { chromaticChannelColor, chromaticChannelLegendLabel } from "./chromaticChartUtils.js";

interface LongitudinalChromaticFocusChartProps {
  result: LongitudinalChromaticFocusResult | null;
  t: Theme;
  width?: number;
  height?: number;
}

export default function LongitudinalChromaticFocusChart({
  result,
  t,
  width = 320,
  height = 220,
}: LongitudinalChromaticFocusChartProps) {
  const samples = result?.samples.filter((sample) => sample.usable && sample.relativeFocusShiftMm !== null) ?? [];

  if (!result || samples.length < 2) {
    return <AnalysisEmptyState t={t}>Not enough chromatic focus data to plot axial color/LoCA.</AnalysisEmptyState>;
  }

  const area = createPlotArea(width, height, { top: 24, right: 20, bottom: 44, left: 54 });
  const { margin, plotW, plotH } = area;
  const shiftsUm = samples.map((sample) => (sample.relativeFocusShiftMm ?? 0) * 1000);
  const maxAbsShiftUm = Math.max(1, ...shiftsUm.map((shift) => Math.abs(shift)));
  const [yMin, yMax] = symmetricDomain(maxAbsShiftUm, 1.2, maxAbsShiftUm < 5 ? 1 : 5);
  const xScale = linearScale(0, samples.length - 1, margin.left, margin.left + plotW);
  const yScale = linearScale(yMin, yMax, margin.top + plotH, margin.top);
  const yTicks = niceTicks(yMin, yMax, 5);
  const pathD = samples
    .map((sample, index) => {
      const command = index === 0 ? "M" : "L";
      return `${command}${xScale(index).toFixed(1)},${yScale((sample.relativeFocusShiftMm ?? 0) * 1000).toFixed(1)}`;
    })
    .join(" ");
  const referenceLabel = chromaticChannelLegendLabel(result.referenceChannel);

  return (
    <SvgChartFrame
      area={area}
      t={t}
      xTicks={samples.map((_sample, index) => index)}
      yTicks={yTicks}
      xScale={xScale}
      yScale={yScale}
      xTickLabel={(index) => samples[index]?.channel ?? ""}
      yTickLabel={formatSignedCompactTick}
      xLabel="Spectral channel"
      yLabel={`Focus from ${referenceLabel} (um)`}
      referenceLines={[{ value: 0, label: referenceLabel, opacity: 0.6 }]}
    >
      <path d={pathD} fill="none" stroke={t.sliderAccent} strokeWidth={1.4} strokeLinejoin="round" />

      {samples.map((sample, index) => {
        const shiftUm = (sample.relativeFocusShiftMm ?? 0) * 1000;
        return (
          <g key={sample.channel}>
            <circle
              cx={xScale(index)}
              cy={yScale(shiftUm)}
              r={3}
              fill={chromaticChannelColor(t, sample.channel)}
              stroke={t.panelBg}
              strokeWidth={0.75}
            />
            <text
              x={xScale(index)}
              y={yScale(shiftUm) + (shiftUm >= 0 ? -9 : 13)}
              textAnchor="middle"
              fill={t.value}
              fontSize={8}
              fontWeight={600}
              fontFamily="inherit"
            >
              {chromaticChannelLegendLabel(sample.channel)}
            </text>
          </g>
        );
      })}
    </SvgChartFrame>
  );
}
