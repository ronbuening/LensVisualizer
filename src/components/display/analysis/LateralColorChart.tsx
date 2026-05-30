import type { LateralColorCurveResult } from "../../../optics/compat.js";
import type { ChromaticChannel } from "../../../types/optics.js";
import type { Theme } from "../../../types/theme.js";
import { AnalysisEmptyState } from "./analysisUi.js";
import { SvgChartFrame, ChartLegend } from "./charts/SvgChartFrame.js";
import {
  createPlotArea,
  fieldFractionTicks,
  formatFieldFractionTick,
  formatSignedCompactTick,
  linearScale,
  niceTicks,
  svgPath,
  symmetricDomain,
} from "./charts/chartMath.js";
import { chromaticChannelColor, chromaticChannelLegendLabel } from "./chromaticChartUtils.js";

interface LateralColorChartProps {
  result: LateralColorCurveResult | null;
  t: Theme;
  width?: number;
  height?: number;
}

interface ChannelPoint {
  fieldFraction: number;
  shiftUm: number;
}

export default function LateralColorChart({ result, t, width = 320, height = 230 }: LateralColorChartProps) {
  if (!result || result.fields.length < 2) {
    return <AnalysisEmptyState t={t}>Not enough field data to plot lateral color.</AnalysisEmptyState>;
  }

  const channelPoints = new Map<ChromaticChannel, ChannelPoint[]>();
  for (const channel of result.channels) {
    channelPoints.set(channel, []);
  }
  for (const field of result.fields) {
    if (!field.usable) continue;
    for (const sample of field.samples) {
      if (!sample.usable || sample.relativeHeightMm === null) continue;
      channelPoints.get(sample.channel)?.push({
        fieldFraction: field.fieldFraction,
        shiftUm: sample.relativeHeightMm * 1000,
      });
    }
  }

  const plottedChannels = result.channels.filter((channel) => (channelPoints.get(channel)?.length ?? 0) >= 2);
  if (plottedChannels.length < 2) {
    return (
      <AnalysisEmptyState t={t}>Not enough usable chromatic chief-ray data to plot lateral color.</AnalysisEmptyState>
    );
  }

  const allShiftUm = plottedChannels.flatMap((channel) => channelPoints.get(channel)!.map((point) => point.shiftUm));
  const maxAbsShiftUm = Math.max(1, ...allShiftUm.map((shift) => Math.abs(shift)));
  const [yMin, yMax] = symmetricDomain(maxAbsShiftUm, 1.2, maxAbsShiftUm < 5 ? 1 : 5);
  const area = createPlotArea(width, height, { top: 24, right: 22, bottom: 40, left: 54 });
  const { margin, plotW, plotH } = area;
  const xScale = linearScale(0, 1, margin.left, margin.left + plotW);
  const yScale = linearScale(yMin, yMax, margin.top + plotH, margin.top);
  const yTicks = niceTicks(yMin, yMax, 5);
  const referenceLabel = chromaticChannelLegendLabel(result.referenceChannel);

  return (
    <SvgChartFrame
      area={area}
      t={t}
      xTicks={fieldFractionTicks()}
      yTicks={yTicks}
      xScale={xScale}
      yScale={yScale}
      xTickLabel={formatFieldFractionTick}
      yTickLabel={formatSignedCompactTick}
      xLabel="Field position"
      yLabel={`Height from ${referenceLabel} (um)`}
      referenceLines={[{ value: 0, label: referenceLabel, opacity: 0.6 }]}
    >
      {plottedChannels.map((channel) => {
        const points = channelPoints.get(channel)!;
        const pathD = svgPath(
          points,
          (point) => xScale(point.fieldFraction),
          (point) => yScale(point.shiftUm),
        );
        const color = chromaticChannelColor(t, channel);
        return (
          <g key={channel}>
            <path d={pathD} fill="none" stroke={color} strokeWidth={1.7} strokeLinejoin="round" />
            {points.map((point) => (
              <circle
                key={`${channel}-${point.fieldFraction}`}
                cx={xScale(point.fieldFraction)}
                cy={yScale(point.shiftUm)}
                r={2.4}
                fill={color}
                stroke={t.panelBg}
                strokeWidth={0.6}
              />
            ))}
          </g>
        );
      })}

      <ChartLegend
        x={margin.left + plotW - 4}
        y={margin.top + 8}
        t={t}
        items={plottedChannels.map((channel) => ({
          label: chromaticChannelLegendLabel(channel),
          color: chromaticChannelColor(t, channel),
        }))}
      />
    </SvgChartFrame>
  );
}
