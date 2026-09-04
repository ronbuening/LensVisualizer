import type { PerspectiveFocusAnalysis, PerspectiveFocusFieldSample } from "../../../../optics/perspective/index.js";
import type { Theme } from "../../../../types/theme.js";
import { AnalysisMetricRow } from "../analysisUi.js";
import {
  formatSignedMm,
  formatTransmission,
  formatUnsignedUm,
  perspectiveFieldLabel,
  PerspectiveSection,
  PerspectiveUnavailable,
} from "./perspectiveAnalysisUi.js";

interface PerspectiveBokehAnalysisProps {
  result: PerspectiveFocusAnalysis;
  t: Theme;
}

/** Signed top-to-bottom fixed-sensor blur and bokeh footprint grid. */
export default function PerspectiveBokehAnalysis({ result, t }: PerspectiveBokehAnalysisProps) {
  const halfRange = sharedFootprintHalfRange(result.samples);
  const center = result.samples.find((sample) => Math.abs(sample.requestedSensorUv.v) <= 1e-9) ?? null;

  return (
    <PerspectiveSection
      first
      title="Fixed-Sensor Bokeh & Blur Footprints"
      copy={
        <>
          Each tile traces the same physical pupil into the stationary sensor at a signed format position. Crosshairs
          mark the requested sensor point; the cloud, blur radius, transmission, and sensor-normal best focus all use
          the current tilt/shift pose. Top and bottom are kept separate because movement breaks centered symmetry.
        </>
      }
      t={t}
    >
      <div
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(132px, 1fr))", gap: 8 }}
        aria-label="Movement-aware bokeh footprints from sensor top through center to bottom"
      >
        {result.samples.map((sample) => (
          <BokehTile
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
          value={`${result.usableSampleCount}/${result.samples.length}`}
          note="signed sensor positions"
          t={t}
        />
        <AnalysisMetricRow
          label="Center blur RMS"
          value={formatUnsignedUm(center?.sensorBlur?.rmsRadiusMm)}
          note="at fixed sensor"
          t={t}
        />
        <AnalysisMetricRow
          label="Center best focus"
          value={formatSignedMm(center?.bestFocus?.normalOffsetMm)}
          note="sensor-normal offset"
          t={t}
        />
      </div>
      <span style={{ color: t.muted, fontSize: 8.5 }}>
        Shared footprint half-range: ±{(halfRange * 1000).toFixed(1)} um. Brightness includes traced bulk transmission;
        the mechanical pass fraction is reported separately.
      </span>
    </PerspectiveSection>
  );
}

function BokehTile({ sample, halfRange, t }: { sample: PerspectiveFocusFieldSample; halfRange: number; t: Theme }) {
  const maxWeight = Math.max(0, ...sample.bokeh.points.map((point) => point.weight));
  const scale = 45 / halfRange;
  return (
    <div
      data-perspective-bokeh-v={sample.requestedSensorUv.v}
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
        viewBox="0 0 120 120"
        width="100%"
        style={{ display: "block", aspectRatio: "1" }}
        role="img"
        aria-label={`${perspectiveFieldLabel(sample.requestedSensorUv)} fixed-sensor bokeh footprint`}
      >
        <rect x={8} y={8} width={104} height={104} rx={4} fill="#090909" stroke={t.panelBorder} />
        <line x1={60} y1={14} x2={60} y2={106} stroke={t.axis} strokeWidth={0.7} strokeDasharray="3,3" />
        <line x1={14} y1={60} x2={106} y2={60} stroke={t.axis} strokeWidth={0.7} strokeDasharray="3,3" />
        {sample.bokeh.usable ? (
          sample.bokeh.points.map((point) => (
            <circle
              key={point.index}
              cx={60 + point.sagittalOffset * scale}
              cy={60 - point.tangentialOffset * scale}
              r={1.15}
              fill="#fff"
              opacity={maxWeight > 0 ? 0.18 + 0.72 * (point.weight / maxWeight) : 0.18}
            />
          ))
        ) : (
          <text x={60} y={63} textAnchor="middle" fill={t.muted} fontSize={8} fontFamily="inherit">
            Unavailable
          </text>
        )}
        {sample.bokeh.centroidSagittalMm !== null && sample.bokeh.centroidTangentialMm !== null ? (
          <circle
            cx={60 + sample.bokeh.centroidSagittalMm * scale}
            cy={60 - sample.bokeh.centroidTangentialMm * scale}
            r={2.4}
            fill="none"
            stroke={t.pupilEntrance}
            strokeWidth={1}
          />
        ) : null}
      </svg>
      {sample.bokeh.usable ? (
        <div style={{ color: t.muted, fontSize: 8, lineHeight: 1.45, fontVariantNumeric: "tabular-nums" }}>
          <div>Blur RMS {formatUnsignedUm(sample.sensorBlur?.rmsRadiusMm)}</div>
          <div>Best focus {formatSignedMm(sample.bestFocus?.normalOffsetMm)}</div>
          <div>
            Mechanical {formatTransmission(sample.bokeh.mechanicalTransmission)} · {sample.bokeh.brightnessCharacter}
          </div>
        </div>
      ) : (
        <PerspectiveUnavailable status={sample.status} t={t} />
      )}
    </div>
  );
}

function sharedFootprintHalfRange(samples: readonly PerspectiveFocusFieldSample[]): number {
  return Math.max(
    1e-4,
    ...samples.flatMap((sample) =>
      sample.bokeh.points.flatMap((point) => [Math.abs(point.sagittalOffset), Math.abs(point.tangentialOffset)]),
    ),
  );
}
