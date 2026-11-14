/** Result-derived status counts, value tables and field notes below the MTF actions. */
import type { MtfSweepSample, MtfResult } from "../../../../types/mtf.js";
import type { Theme } from "../../../../types/theme.js";
import type { MtfChartFrequency, MtfChartView, MtfPixelPitch } from "../../../../utils/state/mtfPreferences.js";
import { mtfSweepPointStatus } from "./mtfPresentation.js";
import MtfValueTable from "./MtfValueTable.js";

interface MtfFieldSummaryProps {
  result: MtfResult;
  sweepSamples?: readonly MtfSweepSample[];
  sweepFields?: readonly number[];
  sweepCaption?: string;
  frequencies: readonly MtfChartFrequency[];
  t: Theme;
  diagnostic?: boolean;
  comparison?: MtfResult | null;
  comparisonLabel?: string;
  comparisonFNumber?: number;
  mainLabel?: string;
  diffractionLimit?: boolean;
  pixelPitchUm?: MtfPixelPitch | null;
  advanced?: boolean;
  view?: MtfChartView;
}

export default function MtfFieldSummary({
  result,
  sweepSamples = [],
  sweepFields = [],
  sweepCaption,
  frequencies,
  t,
  diagnostic = false,
  comparison = null,
  comparisonFNumber = 8,
  comparisonLabel = `f/${comparisonFNumber}`,
  mainLabel = "Main aperture",
  diffractionLimit = false,
  pixelPitchUm = null,
  advanced = false,
  view = "field",
}: MtfFieldSummaryProps) {
  const isSweep = view === "aperture" || view === "zoom";
  const count = (test: (field: MtfResult["fields"][number]) => boolean) => result.fields.filter(test).length;
  const parts = [
    [count((f) => f.status === "converged"), "converged"],
    [count((f) => f.status === "unconverged"), "unconverged"],
    [count((f) => f.status === "unavailable" && f.reason !== "outside-modeled-field"), "unavailable"],
    [count((f) => f.reason === "outside-modeled-field"), "outside model"],
    [count((f) => f.status === "pending"), "pending"],
  ] as const;
  const sweepStatuses = sweepSamples.flatMap((sample) =>
    sweepFields.flatMap((fraction) => frequencies.map((frequency) => mtfSweepPointStatus(sample, fraction, frequency))),
  );
  const sweepParts = (["converged", "unconverged", "unavailable", "pending", "withheld", "error"] as const).map(
    (status) => [sweepStatuses.filter((value) => value === status).length, status] as const,
  );
  const noted = result.fields.filter((f) => f.notes.length || (f.status === "unavailable" && f.reason));
  return (
    <div style={{ color: t.muted, fontSize: 11, minWidth: 0 }}>
      <details open={advanced || undefined} style={{ color: t.muted, fontSize: 11 }}>
        <summary style={{ cursor: "pointer" }}>
          {(isSweep ? sweepParts : parts)
            .filter(([n], i) => n > 0 || i < 3)
            .map(([n, label]) => `${n} ${label}`)
            .join(" · ") + (isSweep ? " points (one sagittal/tangential pair each)" : "")}
        </summary>
        <MtfValueTable
          result={result}
          sweepSamples={isSweep ? sweepSamples : undefined}
          sweepFields={sweepFields}
          sweepCaption={sweepCaption}
          frequencies={frequencies}
          t={t}
          diagnostic={diagnostic}
          comparison={comparison}
          comparisonLabel={comparisonLabel}
          mainLabel={mainLabel}
          diffractionLimit={diffractionLimit}
          pixelPitchUm={pixelPitchUm}
          advanced={advanced}
        />
        {isSweep ? (
          <p>
            {`Copy CSV emits one row per ${view === "zoom" ? "station" : "aperture"}, field and selected frequency, with sagittal/tangential values, numerical status and applied image plane.`}
          </p>
        ) : null}
        {!advanced && noted.length ? (
          <ul style={{ margin: "6px 0 0", paddingLeft: 16 }}>
            {[...new Set(noted.flatMap((f) => (f.status === "unavailable" ? [f.message] : f.notes)))].map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        ) : null}
      </details>
    </div>
  );
}
