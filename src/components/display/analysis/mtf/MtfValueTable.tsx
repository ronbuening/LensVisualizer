/** Numeric sagittal/tangential MTF per field at the displayed frequencies. */
import type { MtfResult } from "../../../../types/mtf.js";
import type { Theme } from "../../../../types/theme.js";
import type { MtfChartFrequency, MtfPixelPitch } from "../../../../utils/state/mtfPreferences.js";
import {
  MTF_DIFFRACTION_LIMIT_LABEL,
  MTF_NYQUIST_NOTE,
  mtfNyquistLabel,
  mtfLimitValue,
  mtfValueVisible,
} from "./mtfPresentation.js";
import { textRun } from "../../../../utils/text.js";

interface MtfValueTableProps {
  result: MtfResult;
  frequencies: readonly MtfChartFrequency[];
  t: Theme;
  diagnostic?: boolean;
  comparison?: MtfResult | null;
  comparisonLabel?: string;
  mainLabel?: string;
  diffractionLimit?: boolean;
  pixelPitchUm?: MtfPixelPitch | null;
}

const STATUS_TEXT = { converged: "", unconverged: "unconverged", unavailable: "—", pending: "…" } as const;

export default function MtfValueTable({
  result,
  frequencies,
  t,
  diagnostic = false,
  comparison = null,
  comparisonLabel = "f/8",
  mainLabel = "Main aperture",
  diffractionLimit = false,
  pixelPitchUm = null,
}: MtfValueTableProps) {
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
                    {field.reason === "outside-modeled-field" ? "outside model" : STATUS_TEXT[field.status]}
                  </td>
                </tr>
              );
            }),
          )}
        </tbody>
      </table>
    </div>
  );
}
