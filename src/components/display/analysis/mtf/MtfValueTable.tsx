/** Numeric sagittal/tangential MTF per field at the displayed frequencies. */
import type { MtfResult } from "../../../../types/mtf.js";
import type { Theme } from "../../../../types/theme.js";
import type { MtfChartFrequency } from "../../../../utils/state/mtfPreferences.js";

interface MtfValueTableProps {
  result: MtfResult;
  frequencies: readonly MtfChartFrequency[];
  t: Theme;
}

const STATUS_TEXT = { converged: "", unconverged: "unconverged", unavailable: "—", pending: "…" } as const;

export default function MtfValueTable({ result, frequencies, t }: MtfValueTableProps) {
  const columns = frequencies.filter((f) => result.frequenciesPerMm.includes(f));
  const cell = { padding: "2px 6px", textAlign: "right" as const, fontVariantNumeric: "tabular-nums" as const };
  return (
    <div style={{ overflowX: "auto", marginTop: 6 }}>
      <table style={{ borderCollapse: "collapse", color: t.value, fontSize: 10.5 }}>
        <caption style={{ textAlign: "left", color: t.muted, paddingBottom: 4 }}>
          MTF by image height, sagittal / tangential
        </caption>
        <thead style={{ color: t.muted }}>
          <tr>
            <th style={cell} scope="col">
              Height (mm)
            </th>
            {columns.map((f) => (
              <th key={f} style={cell} scope="col">
                {f} lp/mm
              </th>
            ))}
            <th style={cell} scope="col">
              Rays
            </th>
            <th style={{ ...cell, textAlign: "left" }} scope="col">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {result.fields.map((field) => {
            const height = field.imageHeightMm ?? field.targetImageHeightMm;
            const shown = field.status === "converged" || field.status === "unconverged";
            return (
              <tr key={field.fieldFraction} style={{ borderTop: `1px solid ${t.panelBorder}` }}>
                <th style={cell} scope="row">
                  {height !== null ? height.toFixed(2) : "—"}
                </th>
                {columns.map((f) => {
                  const j = result.frequenciesPerMm.indexOf(f);
                  return (
                    <td key={f} style={cell}>
                      {shown ? `${field.sagittal[j].toFixed(3)} / ${field.tangential[j].toFixed(3)}` : "—"}
                    </td>
                  );
                })}
                <td style={cell}>{shown ? field.validRays : ""}</td>
                <td style={{ ...cell, textAlign: "left", color: t.muted }}>
                  {field.reason === "outside-modeled-field" ? "outside model" : STATUS_TEXT[field.status]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
