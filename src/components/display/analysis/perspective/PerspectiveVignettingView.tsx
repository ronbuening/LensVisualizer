import type { PerspectiveVignettingAnalysis } from "../../../../optics/perspective/index.js";
import type { Theme } from "../../../../types/theme.js";
import { AnalysisMetricRow } from "../analysisUi.js";
import PerspectiveSignedChart from "./PerspectiveSignedChart.js";

interface PerspectiveVignettingViewProps {
  analysis: PerspectiveVignettingAnalysis;
  t: Theme;
}

/** Absolute and zero-pose-referenced illumination across the fixed sensor. */
export default function PerspectiveVignettingView({ analysis, t }: PerspectiveVignettingViewProps) {
  const top = analysis.samples[0];
  const center = analysis.samples.find((sample) => Math.abs(sample.requestedSensorUv.v) <= 1e-9);
  const bottom = analysis.samples[analysis.samples.length - 1];
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "grid", gap: 4 }}>
        <span style={{ fontSize: 10.5, color: t.muted }}>Perspective vignetting — absolute fixed-sensor flux</span>
        <span style={{ fontSize: 9, color: t.muted, lineHeight: 1.45 }}>
          Mechanical survival, authored absorption, and exit-pupil-to-sensor geometry are reported independently.
          Relative illumination uses the matched zero-movement sensor center; the active center is not normalized to
          one.
        </span>
      </div>
      <PerspectiveSignedChart
        title="Perspective vignetting and relative illumination"
        valueLabel="Transmission / reference (%)"
        t={t}
        series={[
          {
            label: "Absolute geometric transmission",
            color: t.rayCool,
            points: analysis.samples.map((sample) => ({
              v: sample.requestedSensorUv.v,
              value: percent(sample.throughput?.absoluteGeometricTransmission),
              status: sample.status,
            })),
          },
          {
            label: "Absolute transmitted flux",
            color: t.rayWarm,
            points: analysis.samples.map((sample) => ({
              v: sample.requestedSensorUv.v,
              value: percent(sample.throughput?.absoluteTransmittedFlux),
              status: sample.status,
            })),
          },
          {
            label: "Relative illumination vs zero center",
            color: t.pupilExit,
            dashed: true,
            points: analysis.samples.map((sample) => ({
              v: sample.requestedSensorUv.v,
              value: percent(sample.transmittedGeometricFactorNormalizedToZeroCenter),
              status: sample.status,
            })),
          },
          {
            label: "Active / zero at same point",
            color: t.pupilEntrance,
            dashed: true,
            points: analysis.samples.map((sample) => ({
              v: sample.requestedSensorUv.v,
              value: percent(sample.activeToZeroRatio?.transmittedGeometricFactor),
              status: sample.status,
            })),
          },
        ]}
      />
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <AnalysisMetricRow
          label="Top RI"
          value={formatPercent(top?.transmittedGeometricFactorNormalizedToZeroCenter)}
          t={t}
        />
        <AnalysisMetricRow
          label="Center RI"
          value={formatPercent(center?.transmittedGeometricFactorNormalizedToZeroCenter)}
          note="not renormalized"
          t={t}
        />
        <AnalysisMetricRow
          label="Bottom RI"
          value={formatPercent(bottom?.transmittedGeometricFactorNormalizedToZeroCenter)}
          t={t}
        />
        <AnalysisMetricRow
          label="Zero center flux"
          value={formatPercent(analysis.zeroMovementCenterReference.throughput?.absoluteTransmittedFlux)}
          t={t}
        />
      </div>
      <SampleStatusList analysis={analysis} t={t} />
    </div>
  );
}

function SampleStatusList({ analysis, t }: PerspectiveVignettingViewProps) {
  return (
    <div style={{ display: "grid", gap: 3, color: t.muted, fontSize: 8.5 }} aria-label="Vignetting sample status">
      {analysis.samples.map((sample) => (
        <div key={`${sample.requestedSensorUv.u}:${sample.requestedSensorUv.v}`}>
          {signedFieldLabel(sample.requestedSensorUv.v)}: {sample.status}
          {sample.throughput
            ? `; geometric ${formatPercent(sample.throughput.absoluteGeometricTransmission)}, flux ${formatPercent(sample.throughput.absoluteTransmittedFlux)}`
            : ""}
        </div>
      ))}
    </div>
  );
}

function percent(value: number | null | undefined): number | null {
  return value === null || value === undefined || !Number.isFinite(value) ? null : 100 * value;
}

function formatPercent(value: number | null | undefined): string {
  const scaled = percent(value);
  return scaled === null ? "unavailable" : `${scaled.toFixed(1)}%`;
}

function signedFieldLabel(v: number): string {
  if (Math.abs(v) <= 1e-9) return "center";
  return `${v < 0 ? "top" : "bottom"} ${Math.abs(v * 100).toFixed(0)}%`;
}
