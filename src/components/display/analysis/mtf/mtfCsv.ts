/** Plain-text export of the MTF value table. */
import type { MtfResult } from "../../../../types/mtf.js";

/**
 * CSV of sagittal and tangential MTF per field at the displayed frequencies.
 *
 * Unavailable and pending fields keep their row with empty values, so the height axis stays complete.
 *
 * @param result - computed MTF
 * @param frequencies - frequencies to export, in lp/mm
 * @returns CSV text with a header row
 */
export function mtfCsv(result: MtfResult, frequencies: readonly number[]): string {
  const columns = frequencies.filter((f) => result.frequenciesPerMm.includes(f));
  const header = [
    "Image height (mm)",
    "Field (%)",
    ...columns.flatMap((f) => [`${f} lp/mm sagittal`, `${f} lp/mm tangential`]),
    "Status",
  ];
  const rows = result.fields.map((field) => {
    const height = field.imageHeightMm ?? field.targetImageHeightMm;
    const shown = field.status === "converged" || field.status === "unconverged";
    const values = columns.flatMap((f) => {
      const j = result.frequenciesPerMm.indexOf(f);
      return shown ? [field.sagittal[j].toFixed(4), field.tangential[j].toFixed(4)] : ["", ""];
    });
    return [
      height !== null ? height.toFixed(3) : "",
      (field.fieldFraction * 100).toFixed(0),
      ...values,
      field.reason ?? field.status,
    ];
  });
  return [header, ...rows].map((row) => row.join(",")).join("\n");
}
