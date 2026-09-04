import type {
  PerspectiveChromaticAnalysis,
  PerspectiveChromaticFieldSample,
  PerspectiveChromaticRayFanSample,
} from "../../../../optics/perspective/index.js";
import type { ChromaticChannel } from "../../../../types/optics.js";
import type { Theme } from "../../../../types/theme.js";
import { channelColor } from "./PerspectiveChromaticCurves.js";
import { perspectiveFieldLabel, perspectiveStatusLabel } from "./perspectiveAnalysisUi.js";

interface PerspectiveChromaticRayFansProps {
  result: PerspectiveChromaticAnalysis;
  t: Theme;
}

/** Ordered fixed-sensor meridional fans for every retained chromatic field. */
export default function PerspectiveChromaticRayFans({ result, t }: PerspectiveChromaticRayFansProps) {
  const halfRange = Math.max(
    1e-4,
    ...result.samples.flatMap((field) =>
      field.channels.flatMap((channel) =>
        channel.rayFan.samples.flatMap((sample) =>
          sample.tangentialOffsetMm === null ? [] : [Math.abs(sample.tangentialOffsetMm)],
        ),
      ),
    ),
  );

  return (
    <div
      style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(176px, 1fr))", gap: 8 }}
      aria-label="Movement-aware chromatic ray fans from sensor top through center to bottom"
    >
      {result.samples.map((field) => (
        <ChromaticFanTile
          key={`${field.requestedSensorUv.u}:${field.requestedSensorUv.v}`}
          field={field}
          channels={result.channels}
          halfRange={halfRange}
          t={t}
        />
      ))}
    </div>
  );
}

function ChromaticFanTile({
  field,
  channels,
  halfRange,
  t,
}: {
  field: PerspectiveChromaticFieldSample;
  channels: readonly ChromaticChannel[];
  halfRange: number;
  t: Theme;
}) {
  const xScale = (fraction: number) => 28 + ((fraction + 1) / 2) * 154;
  const yScale = (value: number) => 59 - (value / halfRange) * 43;
  return (
    <div
      data-perspective-chromatic-fan-v={field.requestedSensorUv.v}
      data-perspective-status={field.status}
      style={{
        minWidth: 0,
        padding: 7,
        border: `1px solid ${t.panelDivider}`,
        borderRadius: 5,
        background: t.panelBg,
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 6, alignItems: "baseline" }}>
        <span style={{ color: t.label, fontSize: 9.5 }}>{perspectiveFieldLabel(field.requestedSensorUv)}</span>
        <span style={{ color: t.muted, fontSize: 8 }}>
          {field.fieldAngleDeg === null ? "--" : `${field.fieldAngleDeg.toFixed(1)}°`}
        </span>
      </div>
      <svg
        viewBox="0 0 210 112"
        width="100%"
        style={{ display: "block" }}
        role="img"
        aria-label={`${perspectiveFieldLabel(field.requestedSensorUv)} fixed-sensor chromatic ray fan`}
      >
        <rect x={22} y={10} width={166} height={88} rx={4} fill="none" stroke={t.panelBorder} />
        <line x1={28} y1={59} x2={182} y2={59} stroke={t.axis} strokeWidth={0.7} strokeDasharray="3,3" />
        <line x1={105} y1={15} x2={105} y2={93} stroke={t.axis} strokeWidth={0.7} strokeDasharray="3,3" />
        {channels.map((channel) => {
          const sample = field.channels.find((entry) => entry.channel === channel);
          return sample ? (
            <ChannelFan
              key={channel}
              channel={channel}
              samples={sample.rayFan.samples}
              xScale={xScale}
              yScale={yScale}
              t={t}
            />
          ) : null;
        })}
        <text x={28} y={106} fill={t.muted} fontSize={7} fontFamily="inherit">
          -1
        </text>
        <text x={105} y={106} textAnchor="middle" fill={t.muted} fontSize={7} fontFamily="inherit">
          pupil 0
        </text>
        <text x={182} y={106} textAnchor="end" fill={t.muted} fontSize={7} fontFamily="inherit">
          +1
        </text>
      </svg>
      <span style={{ color: t.muted, fontSize: 7.8, lineHeight: 1.35 }}>
        {field.channels
          .map(
            (sample) =>
              `${sample.channel} ${sample.rayFan.usableSampleCount}/${sample.rayFan.samples.length} ${perspectiveStatusLabel(sample.status)}`,
          )
          .join(" · ")}
      </span>
    </div>
  );
}

function ChannelFan({
  channel,
  samples,
  xScale,
  yScale,
  t,
}: {
  channel: ChromaticChannel;
  samples: readonly PerspectiveChromaticRayFanSample[];
  xScale: (value: number) => number;
  yScale: (value: number) => number;
  t: Theme;
}) {
  const color = channelColor(channel, t);
  const usable = samples.filter(
    (sample): sample is PerspectiveChromaticRayFanSample & { tangentialOffsetMm: number } =>
      sample.status === "usable" && sample.tangentialOffsetMm !== null,
  );
  const points = usable
    .map((sample) => `${xScale(sample.pupilFraction).toFixed(1)},${yScale(sample.tangentialOffsetMm).toFixed(1)}`)
    .join(" ");
  return (
    <g data-chromatic-channel={channel}>
      {points ? <polyline points={points} fill="none" stroke={color} strokeWidth={1.25} /> : null}
      {samples.map((sample) =>
        sample.status === "usable" && sample.tangentialOffsetMm !== null ? (
          <circle
            key={sample.sourceIndex}
            data-pupil-fraction={sample.pupilFraction}
            data-ray-status={sample.status}
            cx={xScale(sample.pupilFraction)}
            cy={yScale(sample.tangentialOffsetMm)}
            r={1.45}
            fill={color}
          />
        ) : (
          <g key={sample.sourceIndex} data-pupil-fraction={sample.pupilFraction} data-ray-status={sample.status}>
            <line
              x1={xScale(sample.pupilFraction) - 2}
              y1={89}
              x2={xScale(sample.pupilFraction) + 2}
              y2={93}
              stroke={color}
              strokeWidth={0.8}
            />
            <line
              x1={xScale(sample.pupilFraction) + 2}
              y1={89}
              x2={xScale(sample.pupilFraction) - 2}
              y2={93}
              stroke={color}
              strokeWidth={0.8}
            />
          </g>
        ),
      )}
    </g>
  );
}
