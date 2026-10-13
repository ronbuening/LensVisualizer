import type { PerspectiveChromaticAnalysis as PerspectiveChromaticResult } from "../../../../optics/perspective/index.js";
import type { Theme } from "../../../../types/theme.js";
import { AnalysisMetricRow } from "../analysisUi.js";
import PerspectiveChromaticCurves from "./PerspectiveChromaticCurves.js";
import PerspectiveChromaticRayFans from "./PerspectiveChromaticRayFans.js";
import {
  formatSignedUm,
  formatUnsignedUm,
  perspectiveFieldLabel,
  perspectiveStatusLabel,
  PerspectiveSection,
} from "./perspectiveAnalysisUi.js";

interface PerspectiveChromaticAnalysisProps {
  result: PerspectiveChromaticResult;
  t: Theme;
}

/** Movement-aware chromatic focus, TCA, and fan presentation. */
export default function PerspectiveChromaticAnalysis({ result, t }: PerspectiveChromaticAnalysisProps) {
  const center = result.samples.find((sample) => Math.abs(sample.requestedSensorUv.v) <= 1e-9) ?? null;
  const maxFocusSpread = maxFinite(result.samples.map((sample) => sample.focusSpreadMm));
  const maxTransverse = maxFinite(result.samples.map((sample) => sample.maxTransverseSeparationMm));

  return (
    <PerspectiveSection
      title="Fixed-Sensor Chromatic Focus, TCA & Ray Fans"
      copy={
        <>
          The {result.referenceChannel} line first solves each requested stationary-sensor point. Every wavelength then
          reuses that camera-space scene direction, so wavelength-dependent best-focus and physical sensor-hit
          differences remain visible. This sensor-relative result is separate from the intrinsic lens-axis LoCA above.
        </>
      }
      t={t}
    >
      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
        <AnalysisMetricRow
          label="Fields"
          value={`${result.usableSampleCount}/${result.samples.length}`}
          note="2+ usable channels"
          t={t}
        />
        <AnalysisMetricRow label="Center focus span" value={formatUnsignedUm(center?.focusSpreadMm)} t={t} />
        <AnalysisMetricRow label="Max focus span" value={formatUnsignedUm(maxFocusSpread)} t={t} />
        <AnalysisMetricRow label="Max transverse color" value={formatUnsignedUm(maxTransverse)} t={t} />
      </div>

      <PerspectiveChromaticCurves result={result} t={t} />

      <div style={{ display: "grid", gap: 5 }} aria-label="Fixed-sensor chromatic field samples">
        {result.samples.map((field) => (
          <div
            key={`${field.requestedSensorUv.u}:${field.requestedSensorUv.v}`}
            data-perspective-chromatic-v={field.requestedSensorUv.v}
            data-perspective-status={field.status}
            style={{
              padding: "6px 7px",
              border: `1px solid ${t.panelDivider}`,
              borderRadius: 4,
              background: t.panelBg,
              display: "grid",
              gap: 4,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8, flexWrap: "wrap" }}>
              <span style={{ color: t.label, fontSize: 9.5 }}>{perspectiveFieldLabel(field.requestedSensorUv)}</span>
              <span style={{ color: t.muted, fontSize: 8.5 }}>{perspectiveStatusLabel(field.status)}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 12px" }}>
              {field.channels.map((sample) => (
                <span
                  key={sample.channel}
                  data-chromatic-channel={sample.channel}
                  data-perspective-status={sample.status}
                  style={{ color: sample.status === "usable" ? t.value : t.muted, fontSize: 8.3 }}
                >
                  {sample.channel}: focus {formatSignedUm(sample.focusRelativeToReferenceMm)}, TCA u/v{" "}
                  {formatSignedUm(sample.transverseToReference?.uMm)} /{" "}
                  {formatSignedUm(sample.transverseToReference?.vMm)} ({perspectiveStatusLabel(sample.status)})
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <span style={{ color: t.label, fontSize: 10, fontWeight: 700, letterSpacing: "0.08em" }}>
        Fixed-Sensor Chromatic Ray Fans
      </span>
      <span style={{ color: t.muted, fontSize: 8.5, lineHeight: 1.4 }}>
        Tangential sensor intercept versus ordered pupil fraction for each wavelength. Crosses mark clipped,
        missed-sensor, or otherwise unavailable rays at their requested pupil positions.
      </span>
      <PerspectiveChromaticRayFans result={result} t={t} />
    </PerspectiveSection>
  );
}

function maxFinite(values: readonly (number | null)[]): number | null {
  const finite = values.filter((value): value is number => value !== null && Number.isFinite(value));
  return finite.length > 0 ? Math.max(...finite) : null;
}
