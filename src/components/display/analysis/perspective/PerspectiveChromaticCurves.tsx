import type {
  PerspectiveChromaticAnalysis,
  PerspectiveChromaticChannelSample,
  PerspectiveChromaticFieldSample,
} from "../../../../optics/perspective/index.js";
import type { ChromaticChannel } from "../../../../types/optics.js";
import type { Theme } from "../../../../types/theme.js";
import { formatSignedUm } from "./perspectiveAnalysisUi.js";

interface PerspectiveChromaticCurvesProps {
  result: PerspectiveChromaticAnalysis;
  t: Theme;
}

const WIDTH = 360;
const CHART_HEIGHT = 144;
const MARGIN = { top: 18, right: 18, bottom: 34, left: 58 };
const PLOT_WIDTH = WIDTH - MARGIN.left - MARGIN.right;
const PLOT_HEIGHT = CHART_HEIGHT - MARGIN.top - MARGIN.bottom;

/** Fixed-sensor chromatic focus and transverse-color curves on one signed field axis. */
export default function PerspectiveChromaticCurves({ result, t }: PerspectiveChromaticCurvesProps) {
  return (
    <div style={{ display: "grid", gap: 8 }}>
      <ChromaticCurve
        result={result}
        metric="focus"
        title={`Focus relative to ${result.referenceChannel} (um)`}
        t={t}
      />
      <ChromaticCurve
        result={result}
        metric="transverse-v"
        title={`Sensor-v transverse color from ${result.referenceChannel} (um)`}
        t={t}
      />
    </div>
  );
}

function ChromaticCurve({
  result,
  metric,
  title,
  t,
}: {
  result: PerspectiveChromaticAnalysis;
  metric: "focus" | "transverse-v";
  title: string;
  t: Theme;
}) {
  const values = result.samples.flatMap((field) =>
    field.channels.flatMap((channel) => {
      const value = metricValue(channel, metric);
      return value === null ? [] : [value];
    }),
  );
  const halfRange = Math.max(1e-4, ...values.map(Math.abs));
  const xScale = (v: number) => MARGIN.left + ((v + 1) / 2) * PLOT_WIDTH;
  const yScale = (value: number) => MARGIN.top + PLOT_HEIGHT / 2 - (value / halfRange) * (PLOT_HEIGHT / 2);

  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${CHART_HEIGHT}`}
      width="100%"
      style={{ maxWidth: WIDTH, display: "block" }}
      role="img"
      aria-label={`${title} from sensor top through center to bottom`}
    >
      <text x={MARGIN.left} y={10} fill={t.label} fontSize={8.5} fontFamily="inherit">
        {title}
      </text>
      {[-halfRange, 0, halfRange].map((tick) => (
        <g key={tick}>
          <line
            x1={MARGIN.left}
            y1={yScale(tick)}
            x2={MARGIN.left + PLOT_WIDTH}
            y2={yScale(tick)}
            stroke={tick === 0 ? t.axis : t.panelBorder}
            strokeWidth={tick === 0 ? 1 : 0.5}
            strokeDasharray={tick === 0 ? "4,3" : undefined}
          />
          <text
            x={MARGIN.left - 6}
            y={yScale(tick)}
            textAnchor="end"
            dominantBaseline="central"
            fill={t.muted}
            fontSize={7.5}
            fontFamily="inherit"
          >
            {formatSignedUm(tick, 0).replace(" um", "")}
          </text>
        </g>
      ))}
      {[-1, -0.5, 0, 0.5, 1].map((tick) => (
        <g key={tick}>
          <line
            x1={xScale(tick)}
            y1={MARGIN.top}
            x2={xScale(tick)}
            y2={MARGIN.top + PLOT_HEIGHT}
            stroke={t.panelBorder}
            strokeWidth={0.5}
            opacity={0.4}
          />
          <text
            x={xScale(tick)}
            y={MARGIN.top + PLOT_HEIGHT + 13}
            textAnchor="middle"
            fill={t.muted}
            fontSize={7.5}
            fontFamily="inherit"
          >
            {tick === 0 ? "C" : tick < 0 ? `T${Math.abs(tick) * 100}` : `B${tick * 100}`}
          </text>
        </g>
      ))}
      {result.channels.map((channel) => {
        const paths = channelCurveSegments(result.samples, channel, metric, xScale, yScale);
        const color = channelColor(channel, t);
        return (
          <g key={channel} data-chromatic-channel={channel}>
            {paths.map((path, index) => (
              <path key={index} d={path} fill="none" stroke={color} strokeWidth={1.4} />
            ))}
            {result.samples.map((field) => {
              const sample = field.channels.find((entry) => entry.channel === channel);
              const value = sample ? metricValue(sample, metric) : null;
              return value === null ? null : (
                <circle
                  key={`${field.requestedSensorUv.u}:${field.requestedSensorUv.v}`}
                  cx={xScale(field.requestedSensorUv.v)}
                  cy={yScale(value)}
                  r={1.9}
                  fill={color}
                />
              );
            })}
          </g>
        );
      })}
      <text
        x={MARGIN.left + PLOT_WIDTH / 2}
        y={CHART_HEIGHT - 4}
        textAnchor="middle"
        fill={t.muted}
        fontSize={8}
        fontFamily="inherit"
      >
        Fixed sensor position · T top / C center / B bottom
      </text>
      {result.channels.map((channel, index) => (
        <g key={`legend-${channel}`}>
          <circle cx={WIDTH - 18 - index * 25} cy={10} r={2.3} fill={channelColor(channel, t)} />
          <text x={WIDTH - 13 - index * 25} y={12} fill={t.muted} fontSize={7.5} fontFamily="inherit">
            {channel}
          </text>
        </g>
      ))}
    </svg>
  );
}

function channelCurveSegments(
  fields: readonly PerspectiveChromaticFieldSample[],
  channel: ChromaticChannel,
  metric: "focus" | "transverse-v",
  xScale: (value: number) => number,
  yScale: (value: number) => number,
): string[] {
  const segments: string[] = [];
  let points: string[] = [];
  const flush = () => {
    if (points.length > 0) segments.push(points.join(" "));
    points = [];
  };
  for (const field of fields) {
    const sample = field.channels.find((entry) => entry.channel === channel);
    const value = sample ? metricValue(sample, metric) : null;
    if (value === null) {
      flush();
      continue;
    }
    points.push(
      `${points.length === 0 ? "M" : "L"}${xScale(field.requestedSensorUv.v).toFixed(1)},${yScale(value).toFixed(1)}`,
    );
  }
  flush();
  return segments;
}

function metricValue(sample: PerspectiveChromaticChannelSample, metric: "focus" | "transverse-v"): number | null {
  return metric === "focus" ? sample.focusRelativeToReferenceMm : (sample.transverseToReference?.vMm ?? null);
}

export function channelColor(channel: ChromaticChannel, t: Theme): string {
  switch (channel) {
    case "R":
      return t.rayChromR;
    case "G":
      return t.rayChromG;
    case "B":
      return t.rayChromB;
    case "V":
      return t.rayChromV;
  }
}
