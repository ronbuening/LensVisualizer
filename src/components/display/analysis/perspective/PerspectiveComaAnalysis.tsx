import type {
  PerspectiveComaFieldSample,
  PerspectiveComaRaySample,
  PerspectiveFieldAberrationAnalysis,
} from "../../../../optics/perspective/index.js";
import type { Theme } from "../../../../types/theme.js";
import { AnalysisMetricRow } from "../analysisUi.js";
import {
  formatUnsignedUm,
  perspectiveFieldLabel,
  perspectiveStatusLabel,
  PerspectiveSection,
  PerspectiveUnavailable,
} from "./perspectiveAnalysisUi.js";

interface PerspectiveComaAnalysisProps {
  result: PerspectiveFieldAberrationAnalysis;
  t: Theme;
}

/** Fixed-sensor coma point clouds with their tangential/sagittal pupil fans. */
export default function PerspectiveComaAnalysis({ result, t }: PerspectiveComaAnalysisProps) {
  const analysis = result.coma;
  const halfRange = Math.max(
    0.001,
    analysis.sharedSpotHalfRangeMm,
    ...analysis.samples.flatMap((sample) =>
      sample.rays.flatMap((ray) =>
        ray.sagittalOffsetMm === null || ray.tangentialOffsetMm === null
          ? []
          : [Math.abs(ray.sagittalOffsetMm), Math.abs(ray.tangentialOffsetMm)],
      ),
    ),
  );
  const outer = [...analysis.samples]
    .filter((sample) => sample.usable)
    .sort((left, right) => Math.abs(right.requestedSensorUv.v) - Math.abs(left.requestedSensorUv.v))[0];

  return (
    <PerspectiveSection
      first
      title="Fixed-Sensor Coma Footprints & Ray Fans"
      copy={
        <>
          Circular-pupil points are measured relative to the physical chief hit on the stationary sensor. Each tile also
          extracts field-radial tangential and perpendicular sagittal fans from the same retained bundle. Signed top and
          bottom positions are shown independently; crosses and status text identify unavailable samples.
        </>
      }
      t={t}
    >
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 8 }}
        aria-label="Movement-aware coma samples from sensor top through center to bottom"
      >
        {analysis.samples.map((sample) => (
          <ComaTile
            key={`${sample.requestedSensorUv.u}:${sample.requestedSensorUv.v}`}
            sample={sample}
            halfRange={halfRange}
            t={t}
          />
        ))}
      </div>
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <AnalysisMetricRow
          label="Fields"
          value={`${analysis.usableSampleCount}/${analysis.samples.length}`}
          note="signed sensor positions"
          t={t}
        />
        <AnalysisMetricRow label="Shared range" value={`±${formatUnsignedUm(halfRange)}`} t={t} />
        <AnalysisMetricRow label="Outer RMS" value={formatUnsignedUm(outer?.rmsRadiusMm)} t={t} />
        <AnalysisMetricRow
          label="Outer tail"
          value={outer?.tailDirection ?? "n/a"}
          note={outer?.tailSkewRatio === null || outer === undefined ? undefined : `${outer.tailSkewRatio.toFixed(2)}x`}
          t={t}
        />
      </div>
    </PerspectiveSection>
  );
}

function ComaTile({ sample, halfRange, t }: { sample: PerspectiveComaFieldSample; halfRange: number; t: Theme }) {
  const pointScale = 41 / halfRange;
  const tangentialFan = sample.rays.filter((ray) => Math.abs(ray.pupilUv.u) <= 1e-9);
  const sagittalFan = sample.rays.filter((ray) => Math.abs(ray.pupilUv.v) <= 1e-9);
  const unavailableStatuses = [
    ...new Set(sample.rays.filter((ray) => ray.status !== "usable").map((ray) => ray.status)),
  ];
  return (
    <div
      data-perspective-coma-v={sample.requestedSensorUv.v}
      data-perspective-status={sample.status}
      style={{
        minWidth: 0,
        padding: 7,
        border: `1px solid ${t.panelDivider}`,
        borderRadius: 5,
        background: t.panelBg,
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", gap: 6, alignItems: "baseline" }}>
        <span style={{ color: t.label, fontSize: 9.5 }}>{perspectiveFieldLabel(sample.requestedSensorUv)}</span>
        <span style={{ color: t.muted, fontSize: 8 }}>
          {sample.fieldAngleDeg === null ? "--" : `${sample.fieldAngleDeg.toFixed(1)}°`}
        </span>
      </div>
      <svg
        viewBox="0 0 140 198"
        width="100%"
        style={{ display: "block" }}
        role="img"
        aria-label={`${perspectiveFieldLabel(sample.requestedSensorUv)} fixed-sensor coma point cloud and ray fans`}
      >
        <rect x={12} y={8} width={116} height={96} rx={4} fill="none" stroke={t.panelBorder} />
        <line x1={70} y1={14} x2={70} y2={98} stroke={t.axis} strokeWidth={0.7} strokeDasharray="3,3" />
        <line x1={18} y1={56} x2={122} y2={56} stroke={t.axis} strokeWidth={0.7} strokeDasharray="3,3" />
        {sample.usable ? (
          sample.rays.map((ray) =>
            ray.status === "usable" && ray.sagittalOffsetMm !== null && ray.tangentialOffsetMm !== null ? (
              <circle
                key={ray.sourceIndex}
                data-ray-status={ray.status}
                cx={70 + ray.sagittalOffsetMm * pointScale}
                cy={56 - ray.tangentialOffsetMm * pointScale}
                r={1.4}
                fill={t.value}
                opacity={Math.max(0.22, Math.min(0.9, 0.2 + ray.weight))}
              />
            ) : null,
          )
        ) : (
          <text x={70} y={59} textAnchor="middle" fill={t.muted} fontSize={8} fontFamily="inherit">
            Unavailable
          </text>
        )}
        {sample.centroidSagittalMm !== null && sample.centroidTangentialMm !== null ? (
          <path
            d={`M ${70 + sample.centroidSagittalMm * pointScale} ${51 - sample.centroidTangentialMm * pointScale} l 4 5 -4 5 -4 -5 Z`}
            fill="none"
            stroke={t.pupilEntrance}
            strokeWidth={1}
          />
        ) : null}

        <rect x={12} y={118} width={116} height={58} rx={4} fill="none" stroke={t.panelBorder} />
        <line x1={18} y1={147} x2={122} y2={147} stroke={t.axis} strokeWidth={0.7} strokeDasharray="3,3" />
        <line x1={70} y1={123} x2={70} y2={171} stroke={t.axis} strokeWidth={0.7} strokeDasharray="3,3" />
        <Fan fan={tangentialFan} axis="tangential" halfRange={halfRange} color={t.value} dashed={false} />
        <Fan fan={sagittalFan} axis="sagittal" halfRange={halfRange} color={t.pupilEntrance} dashed />
        <text x={16} y={113} fill={t.value} fontSize={7.2} fontFamily="inherit">
          T solid
        </text>
        <text x={53} y={113} fill={t.pupilEntrance} fontSize={7.2} fontFamily="inherit">
          S dashed
        </text>
        <text x={70} y={190} textAnchor="middle" fill={t.muted} fontSize={7.2} fontFamily="inherit">
          normalized pupil -1 to +1
        </text>
      </svg>
      {sample.usable ? (
        <div style={{ color: t.muted, fontSize: 8, lineHeight: 1.45, fontVariantNumeric: "tabular-nums" }}>
          <div>
            RMS {formatUnsignedUm(sample.rmsRadiusMm)} · {sample.usableSampleCount}/{sample.sampleCount} rays
          </div>
          <div>
            T {formatUnsignedUm(sample.tangentialSpanMm)} · S {formatUnsignedUm(sample.sagittalSpanMm)}
          </div>
          <div>
            Tail {sample.tailDirection ?? "n/a"}
            {sample.tailSkewRatio === null ? "" : ` ${sample.tailSkewRatio.toFixed(2)}x`}
          </div>
          {unavailableStatuses.length > 0 ? (
            <div>Unavailable pupil positions: {unavailableStatuses.map(perspectiveStatusLabel).join(", ")}</div>
          ) : null}
        </div>
      ) : (
        <PerspectiveUnavailable status={sample.status} t={t} />
      )}
    </div>
  );
}

function Fan({
  fan,
  axis,
  halfRange,
  color,
  dashed,
}: {
  fan: readonly PerspectiveComaRaySample[];
  axis: "tangential" | "sagittal";
  halfRange: number;
  color: string;
  dashed: boolean;
}) {
  const value = (ray: PerspectiveComaRaySample) =>
    axis === "tangential" ? ray.tangentialOffsetMm : ray.sagittalOffsetMm;
  const fraction = (ray: PerspectiveComaRaySample) => (axis === "tangential" ? ray.pupilUv.v : ray.pupilUv.u);
  const usable = fan
    .filter((ray) => ray.status === "usable" && value(ray) !== null)
    .sort((left, right) => fraction(left) - fraction(right));
  const points = usable
    .map((ray) => `${(70 + fraction(ray) * 52).toFixed(1)},${(147 - (value(ray)! / halfRange) * 24).toFixed(1)}`)
    .join(" ");
  return (
    <g>
      {points ? (
        <polyline
          points={points}
          fill="none"
          stroke={color}
          strokeWidth={1.2}
          strokeDasharray={dashed ? "4,2" : undefined}
        />
      ) : null}
      {usable.map((ray) => (
        <circle
          key={ray.sourceIndex}
          cx={70 + fraction(ray) * 52}
          cy={147 - (value(ray)! / halfRange) * 24}
          r={1.4}
          fill={dashed ? "none" : color}
          stroke={color}
          strokeWidth={0.8}
        />
      ))}
      {fan.map((ray) =>
        ray.status === "usable" && value(ray) !== null ? null : (
          <g key={`missing-${ray.sourceIndex}`} data-pupil-fraction={fraction(ray)} data-ray-status={ray.status}>
            <line
              x1={70 + fraction(ray) * 52 - 2}
              y1={167}
              x2={70 + fraction(ray) * 52 + 2}
              y2={171}
              stroke={color}
              strokeWidth={0.8}
            />
            <line
              x1={70 + fraction(ray) * 52 + 2}
              y1={167}
              x2={70 + fraction(ray) * 52 - 2}
              y2={171}
              stroke={color}
              strokeWidth={0.8}
            />
          </g>
        ),
      )}
    </g>
  );
}
