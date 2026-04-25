import type { ReactNode } from "react";
import type { Theme } from "../../../types/theme.js";
import type { PlotArea } from "./chartMath.js";

interface ChartReferenceLine {
  value: number;
  label?: string;
  stroke?: string;
  strokeDasharray?: string;
  opacity?: number;
  labelDy?: number;
}

interface SvgChartFrameProps {
  area: PlotArea;
  t: Theme;
  xTicks: readonly number[];
  yTicks: readonly number[];
  xScale: (value: number) => number;
  yScale: (value: number) => number;
  xTickLabel: (value: number) => string;
  yTickLabel: (value: number) => string;
  xLabel: string;
  yLabel: string;
  referenceLines?: readonly ChartReferenceLine[];
  children: ReactNode;
}

export function SvgChartFrame({
  area,
  t,
  xTicks,
  yTicks,
  xScale,
  yScale,
  xTickLabel,
  yTickLabel,
  xLabel,
  yLabel,
  referenceLines = [],
  children,
}: SvgChartFrameProps) {
  const { width, height, margin, plotW, plotH } = area;
  const plotLeft = margin.left;
  const plotRight = margin.left + plotW;
  const plotTop = margin.top;
  const plotBottom = margin.top + plotH;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" style={{ maxWidth: width, display: "block" }}>
      <rect x={plotLeft} y={plotTop} width={plotW} height={plotH} fill="none" />

      {referenceLines.map((line) => {
        const y = yScale(line.value);
        return (
          <g key={`ref-${line.value}-${line.label ?? ""}`}>
            <line
              x1={plotLeft}
              y1={y}
              x2={plotRight}
              y2={y}
              stroke={line.stroke ?? t.muted}
              strokeWidth={1}
              strokeDasharray={line.strokeDasharray ?? "4,3"}
              opacity={line.opacity ?? 0.55}
            />
            {line.label ? (
              <text
                x={plotRight - 4}
                y={y + (line.labelDy ?? -5)}
                textAnchor="end"
                fill={t.muted}
                fontSize={8}
                fontFamily="inherit"
              >
                {line.label}
              </text>
            ) : null}
          </g>
        );
      })}

      {yTicks.map((tick) => (
        <g key={`y-${tick}`}>
          <line
            x1={plotLeft}
            y1={yScale(tick)}
            x2={plotRight}
            y2={yScale(tick)}
            stroke={t.panelBorder}
            strokeWidth={0.5}
            opacity={0.4}
          />
          <text
            x={plotLeft - 6}
            y={yScale(tick)}
            textAnchor="end"
            dominantBaseline="central"
            fill={t.muted}
            fontSize={8}
            fontFamily="inherit"
          >
            {yTickLabel(tick)}
          </text>
        </g>
      ))}

      {xTicks.map((tick) => (
        <g key={`x-${tick}`}>
          <line
            x1={xScale(tick)}
            y1={plotBottom}
            x2={xScale(tick)}
            y2={plotBottom + 4}
            stroke={t.muted}
            strokeWidth={0.5}
          />
          <text
            x={xScale(tick)}
            y={plotBottom + 14}
            textAnchor="middle"
            fill={t.muted}
            fontSize={8}
            fontFamily="inherit"
          >
            {xTickLabel(tick)}
          </text>
        </g>
      ))}

      <line x1={plotLeft} y1={plotTop} x2={plotLeft} y2={plotBottom} stroke={t.panelBorder} strokeWidth={1} />
      <line x1={plotLeft} y1={plotBottom} x2={plotRight} y2={plotBottom} stroke={t.panelBorder} strokeWidth={1} />

      {children}

      <text
        x={plotLeft + plotW / 2}
        y={height - 4}
        textAnchor="middle"
        fill={t.muted}
        fontSize={8.5}
        fontFamily="inherit"
        letterSpacing="0.05em"
      >
        {xLabel}
      </text>
      <text
        x={10}
        y={plotTop + plotH / 2}
        textAnchor="middle"
        fill={t.muted}
        fontSize={8.5}
        fontFamily="inherit"
        letterSpacing="0.05em"
        transform={`rotate(-90, 10, ${plotTop + plotH / 2})`}
      >
        {yLabel}
      </text>
    </svg>
  );
}

interface ChartLegendItem {
  label: string;
  color: string;
  dasharray?: string;
}

interface ChartLegendProps {
  x: number;
  y: number;
  t: Theme;
  items: readonly ChartLegendItem[];
}

export function ChartLegend({ x, y, t, items }: ChartLegendProps) {
  return (
    <g>
      {items.map((item, index) => {
        const rowY = y + 4 + index * 10;
        return (
          <g key={item.label}>
            <line
              x1={x - 80}
              y1={rowY}
              x2={x - 68}
              y2={rowY}
              stroke={item.color}
              strokeWidth={1.5}
              strokeDasharray={item.dasharray}
            />
            <text x={x - 65} y={rowY} dominantBaseline="central" fill={t.muted} fontSize={7.5} fontFamily="inherit">
              {item.label}
            </text>
          </g>
        );
      })}
    </g>
  );
}
