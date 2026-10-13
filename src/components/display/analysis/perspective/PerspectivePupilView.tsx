import type { PerspectivePupilAnalysis } from "../../../../optics/perspective/index.js";
import type { Theme } from "../../../../types/theme.js";
import { AnalysisMetricRow } from "../analysisUi.js";
import PerspectiveSignedChart from "./PerspectiveSignedChart.js";

interface PerspectivePupilViewProps {
  analysis: PerspectivePupilAnalysis;
  t: Theme;
}

/** Lens-local intrinsic pupils and their field-dependent camera-frame appearance. */
export default function PerspectivePupilView({ analysis, t }: PerspectivePupilViewProps) {
  const { entrance, exit } = analysis.intrinsic;
  const usableCount = analysis.samples.filter(
    (sample) => sample.status === "usable" && (sample.entrance !== null || sample.exit !== null),
  ).length;
  return (
    <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "grid", gap: 4 }}>
        <span style={{ fontSize: 10.5, color: t.muted }}>Perspective pupil analysis — lens and camera frames</span>
        <span style={{ fontSize: 9, color: t.muted, lineHeight: 1.45 }}>
          Intrinsic entrance and exit pupils remain properties of the lens-local prescription. The signed curves show
          how their apparent centers move in the fixed camera frame after the stop and glass are posed.
        </span>
      </div>
      <div style={{ display: "grid", gap: 5 }}>
        <span style={{ color: t.desc, fontSize: 10, fontWeight: 650 }}>Intrinsic / lens-local pupils</span>
        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <AnalysisMetricRow label="EP radius" value={formatMm(entrance.semiDiameterMm)} t={t} />
          <AnalysisMetricRow label="EP Z from stop" value={formatSignedMm(entrance.zRelativeToStopMm)} t={t} />
          <AnalysisMetricRow label="XP radius" value={exit.telecentric ? "∞" : formatMm(exit.semiDiameterMm)} t={t} />
          <AnalysisMetricRow
            label="XP Z from rear vertex"
            value={exit.telecentric ? "∞ (telecentric)" : formatSignedMm(exit.zRelativeToLastSurfaceMm)}
            t={t}
          />
        </div>
      </div>
      <PerspectiveSignedChart
        title="Apparent pupil displacement in the fixed camera frame"
        valueLabel="Vertical displacement (mm)"
        t={t}
        series={[
          {
            label: "Apparent EP from posed intrinsic EP",
            color: t.pupilEntrance,
            points: analysis.samples.map((sample) => ({
              v: sample.requestedSensorUv.v,
              value: sample.entrance?.displacementFromPosedIntrinsic?.vMm ?? null,
              status: sample.status,
            })),
          },
          {
            label: "Apparent XP from posed intrinsic XP",
            color: t.pupilExit,
            points: analysis.samples.map((sample) => ({
              v: sample.requestedSensorUv.v,
              value: sample.exit?.displacementFromPosedIntrinsic?.vMm ?? null,
              status: sample.status,
            })),
          },
        ]}
      />
      <AnalysisMetricRow
        label="Coverage"
        value={`${usableCount}/${analysis.samples.length}`}
        note="signed sensor samples with an apparent pupil"
        t={t}
      />
      <div style={{ display: "grid", gap: 3, color: t.muted, fontSize: 8.5 }} aria-label="Pupil sample status">
        {analysis.samples.map((sample) => (
          <div key={`${sample.requestedSensorUv.u}:${sample.requestedSensorUv.v}`}>
            {signedFieldLabel(sample.requestedSensorUv.v)}: {sample.status}; EP{" "}
            {formatSignedMm(sample.entrance?.displacementFromPosedIntrinsic?.vMm)}; XP{" "}
            {formatSignedMm(sample.exit?.displacementFromPosedIntrinsic?.vMm)}
          </div>
        ))}
      </div>
    </div>
  );
}

function formatMm(value: number | null | undefined): string {
  return value === null || value === undefined || !Number.isFinite(value)
    ? "unavailable"
    : `${Math.abs(value).toFixed(3)} mm`;
}

function formatSignedMm(value: number | null | undefined): string {
  return value === null || value === undefined || !Number.isFinite(value)
    ? "unavailable"
    : `${value >= 0 ? "+" : ""}${value.toFixed(3)} mm`;
}

function signedFieldLabel(v: number): string {
  if (Math.abs(v) <= 1e-9) return "center";
  return `${v < 0 ? "top" : "bottom"} ${Math.abs(v * 100).toFixed(0)}%`;
}
