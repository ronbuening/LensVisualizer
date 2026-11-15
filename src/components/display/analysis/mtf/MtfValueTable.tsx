/** Numeric sagittal/tangential MTF per field at the displayed frequencies. */
import type { MtfSweepSample, MtfResult } from "../../../../types/mtf.js";
import type { Theme } from "../../../../types/theme.js";
import type { MtfChartFrequency, MtfPixelPitch } from "../../../../utils/state/mtfPreferences.js";
import {
  MTF_DIFFRACTION_LIMIT_LABEL,
  MTF_NYQUIST_NOTE,
  mtfNyquistLabel,
  mtfLimitValue,
  mtfValueVisible,
  mtfFieldStatusLabel,
  mtfSweepPointStatus,
  mtfSweepField,
  mtfSweepLabel,
  mtfSweepFieldLabel,
  mtfStableThroughLabel,
} from "./mtfPresentation.js";
import { textRun } from "../../../../utils/text.js";

interface MtfValueTableProps {
  result: MtfResult;
  sweepSamples?: readonly MtfSweepSample[];
  sweepFields?: readonly number[];
  sweepCaption?: string;
  frequencies: readonly MtfChartFrequency[];
  t: Theme;
  diagnostic?: boolean;
  comparison?: MtfResult | null;
  comparisonLabel?: string;
  mainLabel?: string;
  diffractionLimit?: boolean;
  pixelPitchUm?: MtfPixelPitch | null;
  advanced?: boolean;
}

interface SweepValueTableProps {
  samples: readonly MtfSweepSample[];
  fields: readonly number[];
  frequencies: readonly MtfChartFrequency[];
  t: Theme;
  diagnostic: boolean;
  diffractionLimit: boolean;
  caption?: string;
}

const STATUS_TEXT = { converged: "", unconverged: "unconverged", unavailable: "—", pending: "…" } as const;

export default function MtfValueTable({
  result,
  sweepSamples,
  sweepFields,
  sweepCaption,
  frequencies,
  t,
  diagnostic = false,
  comparison = null,
  comparisonLabel = "f/8",
  mainLabel = "Main aperture",
  diffractionLimit = false,
  pixelPitchUm = null,
  advanced = false,
}: MtfValueTableProps) {
  if (sweepSamples)
    return (
      <SweepValueTable
        samples={sweepSamples}
        fields={sweepFields ?? []}
        frequencies={frequencies}
        t={t}
        diagnostic={diagnostic}
        diffractionLimit={diffractionLimit}
        caption={sweepCaption}
      />
    );
  const showLimit = diffractionLimit && result.method === "diffraction";
  const columns = frequencies.filter((f) => result.frequenciesPerMm.includes(f));
  const sources = [
    { result, label: mainLabel },
    ...(comparison ? [{ result: comparison, label: comparisonLabel }] : []),
  ];
  const cell = { padding: "2px 6px", textAlign: "right" as const, fontVariantNumeric: "tabular-nums" as const };
  return (
    <div style={{ overflowX: "auto", marginTop: 6 }}>
      <table style={{ borderCollapse: "collapse", color: t.value, fontSize: 10.5 }}>
        <caption style={{ textAlign: "left", color: t.muted, paddingBottom: 4 }}>
          {textRun(
            "MTF by image height, sagittal / tangential",
            diagnostic ? " — diagnostic estimates included" : " — converged values only",
            showLimit ? `. ${MTF_DIFFRACTION_LIMIT_LABEL}` : "",
            pixelPitchUm !== null ? `. ${mtfNyquistLabel(pixelPitchUm)}. ${MTF_NYQUIST_NOTE}` : "",
          )}
        </caption>
        <thead style={{ color: t.muted }}>
          <tr>
            {comparison ? (
              <th style={{ ...cell, textAlign: "left" }} scope="col">
                Aperture / image plane
              </th>
            ) : null}
            <th style={cell} scope="col">
              Height (mm)
            </th>
            {columns.map((f) => (
              <th key={f} style={cell} scope="col">
                {textRun(f, " lp/mm")}
              </th>
            ))}
            {showLimit
              ? columns.map((f) => <th key={`limit-${f}`} style={cell} scope="col">{`${f} lp/mm limit S / T`}</th>)
              : null}
            <th style={cell} scope="col">
              Rays
            </th>
            <th style={{ ...cell, textAlign: "left" }} scope="col">
              Status
            </th>
            {advanced ? (
              <>
                <th style={cell} scope="col" title="Samples across the pupil diameter on the last usable grid">
                  Grid size
                </th>
                <th
                  style={cell}
                  scope="col"
                  title="Largest MTF change between the last two grids in the convergence band"
                >
                  Max ΔMTF
                </th>
                <th style={cell} scope="col">
                  Stable through
                </th>
                <th style={cell} scope="col">
                  Unresolved flux
                </th>
                <th style={cell} scope="col">
                  Unaimed samples
                </th>
                <th style={cell} scope="col">
                  Failed samples
                </th>
                <th style={{ ...cell, textAlign: "left" }} scope="col">
                  Pupil sampling
                </th>
                <th style={{ ...cell, textAlign: "left" }} scope="col">
                  Field notes
                </th>
                <th style={{ ...cell, textAlign: "left" }} scope="col">
                  Field message
                </th>
              </>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {sources.flatMap(({ result: source, label }) =>
            source.fields.map((field) => {
              const height = field.imageHeightMm ?? field.targetImageHeightMm;
              const shown = field.status === "converged" || field.status === "unconverged";
              return (
                <tr key={`${label}-${field.fieldFraction}`} style={{ borderTop: `1px solid ${t.panelBorder}` }}>
                  {comparison ? (
                    <th style={{ ...cell, textAlign: "left" }} scope="row">
                      {label}
                    </th>
                  ) : null}
                  <th style={cell} scope="row">
                    {height !== null ? height.toFixed(2) : "—"}
                  </th>
                  {columns.map((f) => {
                    const j = source.frequenciesPerMm.indexOf(f);
                    return (
                      <td key={f} style={cell}>
                        {j >= 0 && mtfValueVisible(field, f, diagnostic)
                          ? `${field.sagittal[j].toFixed(3)} / ${field.tangential[j].toFixed(3)}`
                          : "—"}
                      </td>
                    );
                  })}
                  {showLimit
                    ? columns.map((frequency) => {
                        const j = source.frequenciesPerMm.indexOf(frequency);
                        const sagittal =
                          source.method === "diffraction"
                            ? mtfLimitValue(field, "sagittal", j, frequency, diagnostic)
                            : null;
                        const tangential =
                          source.method === "diffraction"
                            ? mtfLimitValue(field, "tangential", j, frequency, diagnostic)
                            : null;
                        return (
                          <td key={`limit-${frequency}`} style={cell}>
                            {sagittal !== null && tangential !== null
                              ? `${sagittal.toFixed(3)} / ${tangential.toFixed(3)}`
                              : "—"}
                          </td>
                        );
                      })
                    : null}
                  <td style={cell}>{shown ? field.validRays : ""}</td>
                  <td style={{ ...cell, textAlign: "left", color: t.muted }}>
                    {advanced
                      ? mtfFieldStatusLabel(field)
                      : field.reason === "outside-modeled-field"
                        ? "outside model"
                        : STATUS_TEXT[field.status]}
                  </td>
                  {advanced ? (
                    <>
                      <td style={cell}>{field.gridSize || "—"}</td>
                      <td style={cell}>{field.maxDelta === null ? "—" : field.maxDelta.toFixed(4)}</td>
                      <td style={{ ...cell, whiteSpace: "nowrap" }}>{mtfStableThroughLabel(field)}</td>
                      <td style={cell}>
                        {field.unknownFluxFraction ? `${(field.unknownFluxFraction * 100).toFixed(2)} %` : ""}
                      </td>
                      <td style={cell}>{field.unaimedRays}</td>
                      <td style={cell}>{field.failedRays}</td>
                      <td style={{ ...cell, textAlign: "left" }}>
                        {field.pupilSampling === "stop" ? "" : "Launch plane"}
                      </td>
                      <td style={{ ...cell, textAlign: "left", minWidth: field.notes.length ? 200 : undefined }}>
                        {field.notes.length ? (
                          <ul style={{ margin: 0, paddingLeft: 14 }}>
                            {field.notes.map((note, i) => (
                              <li key={i}>{note}</li>
                            ))}
                          </ul>
                        ) : null}
                      </td>
                      <td style={{ ...cell, textAlign: "left", minWidth: field.message ? 160 : undefined }}>
                        {field.message}
                      </td>
                    </>
                  ) : null}
                </tr>
              );
            }),
          )}
        </tbody>
      </table>
    </div>
  );
}

/** Rows stay aligned with aperture ticks while every field/frequency obeys the chart's disclosure. */
function SweepValueTable({
  samples,
  fields,
  frequencies,
  t,
  diagnostic,
  diffractionLimit,
  caption,
}: SweepValueTableProps) {
  const cell = { padding: "2px 6px", textAlign: "right" as const };
  const zoom = samples.some((sample) => sample.focalLengthMm !== undefined);
  const columns = fields.flatMap((fraction) => frequencies.map((frequency) => ({ fraction, frequency })));
  return (
    <div style={{ overflowX: "auto", marginTop: 6 }}>
      <table style={{ borderCollapse: "collapse", color: t.value, fontSize: 10.5 }}>
        <caption style={{ textAlign: "left", color: t.muted, paddingBottom: 4 }}>
          {`MTF by ${zoom ? "focal length" : "aperture"}, sagittal / tangential — ${diagnostic ? "diagnostic estimates included" : "converged values only"}. ${caption ?? ""}${diffractionLimit ? ` ${MTF_DIFFRACTION_LIMIT_LABEL}.` : ""}`}
        </caption>
        <thead>
          <tr>
            <th scope="col" style={cell}>
              {zoom ? "Focal length / wide-open aperture" : "f-number"}
            </th>
            <th scope="col" style={cell}>
              Image plane / shift (mm)
            </th>
            {columns.map(({ fraction, frequency }) => (
              <th scope="col" style={cell} key={`${fraction}/${frequency}`}>
                {`${zoom && fraction === 1 && samples.some((s) => s.edgeOverview) ? "Edge (each station)" : `${(fraction * 100).toFixed(0)} %`} · ${frequency} lp/mm S / T; status; stable through${diffractionLimit ? "; limit S / T" : ""}`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {samples.map((sample) => (
            <tr key={sample.focalLengthMm ?? sample.fNumber}>
              <th
                scope="row"
                style={cell}
              >{`${zoom ? mtfSweepLabel(sample) : `f/${sample.fNumber}`}${zoom ? ` · f/${sample.fNumber}` : ""}`}</th>
              <td style={cell}>
                {sample.result?.focus
                  ? `${sample.result.focus.mode} / ${sample.result.focus.appliedShiftMm.toFixed(4)}`
                  : "—"}
              </td>
              {columns.map(({ fraction, frequency }) => {
                const field = mtfSweepField(sample, fraction);
                const index = sample.result?.frequenciesPerMm.indexOf(frequency) ?? -1;
                const visible = field && index >= 0 && mtfValueVisible(field, frequency, diagnostic);
                const status = sample.error
                  ? `error: ${sample.error}`
                  : mtfSweepPointStatus(sample, fraction, frequency);
                const limitS =
                  field && sample.result?.method === "diffraction" && index >= 0
                    ? mtfLimitValue(field, "sagittal", index, frequency, diagnostic)
                    : null;
                const limitT =
                  field && sample.result?.method === "diffraction" && index >= 0
                    ? mtfLimitValue(field, "tangential", index, frequency, diagnostic)
                    : null;
                return (
                  <td
                    key={`${fraction}/${frequency}`}
                    style={cell}
                    title={field ? [...field.notes, field.message].filter(Boolean).join("; ") : undefined}
                  >
                    {`${zoom && field ? `${mtfSweepFieldLabel(sample, fraction)}; ` : ""}${visible ? `${field.sagittal[index].toFixed(3)} / ${field.tangential[index].toFixed(3)}` : "—"}; ${status}; ${field ? mtfStableThroughLabel(field) : "Not established"}${diffractionLimit ? `; limit ${limitS != null && limitT != null ? `${limitS.toFixed(3)} / ${limitT.toFixed(3)}` : "—"}` : ""}`}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
