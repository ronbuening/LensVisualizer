/** Plain-text export of the MTF value table. */
import { mtfValueVisible } from "./mtfPresentation.js";
import type { MtfResult } from "../../../../types/mtf.js";

/**
 * CSV of sagittal and tangential MTF per field at the displayed frequencies.
 *
 * Unavailable and pending fields keep their row with empty values, so the height axis stays complete.
 *
 * @param result - computed MTF
 * @param frequencies - frequencies to export, in lp/mm
 * @param diagnostic - include explicitly disclosed numerical estimates
 * @param comparison - optional f/8 overlay; appended columns match fields by fraction
 * @returns CSV text with a header row
 */
export function mtfCsv(
  result: MtfResult,
  frequencies: readonly number[],
  diagnostic = false,
  comparison: MtfResult | null = null,
): string {
  const columns = frequencies.filter((f) => result.frequenciesPerMm.includes(f));
  const header = [
    "Image height (mm)",
    "Field (%)",
    ...columns.flatMap((f) => [`${f} lp/mm sagittal`, `${f} lp/mm tangential`]),
    "Status",
    "Values",
    "Stable through (lp/mm)",
    ...(comparison
      ? [
          "f/8 image height (mm)",
          ...columns.flatMap((f) => [`f/8 ${f} lp/mm sagittal`, `f/8 ${f} lp/mm tangential`]),
          "f/8 status",
          "f/8 values",
          "f/8 stable through (lp/mm)",
          "f/8 image plane",
          "f/8 shift from authored plane (mm)",
        ]
      : []),
  ];
  const rows = result.fields.map((field) => {
    const height = field.imageHeightMm ?? field.targetImageHeightMm;
    const values = columns.flatMap((f) => {
      const j = result.frequenciesPerMm.indexOf(f);
      return mtfValueVisible(field, f, diagnostic)
        ? [field.sagittal[j].toFixed(4), field.tangential[j].toFixed(4)]
        : ["", ""];
    });
    const compared = comparison?.fields.find((other) => other.fieldFraction === field.fieldFraction);
    const comparisonHeight = compared?.imageHeightMm ?? compared?.targetImageHeightMm;
    const appended = comparison
      ? [
          comparisonHeight?.toFixed(3) ?? "",
          ...columns.flatMap((f) => {
            const j = comparison.frequenciesPerMm.indexOf(f);
            return compared && j >= 0 && mtfValueVisible(compared, f, diagnostic)
              ? [compared.sagittal[j].toFixed(4), compared.tangential[j].toFixed(4)]
              : ["", ""];
          }),
          compared?.reason ?? compared?.status ?? "",
          diagnostic ? "diagnostic estimates included" : "converged band only",
          compared?.convergedThroughLpMm ?? "",
          comparison.focus?.mode ?? "",
          comparison.focus?.appliedShiftMm ?? "",
        ]
      : [];
    return [
      height !== null ? height.toFixed(3) : "",
      (field.fieldFraction * 100).toFixed(0),
      ...values,
      field.reason ?? field.status,
      diagnostic ? "diagnostic estimates included" : "converged band only",
      field.convergedThroughLpMm ?? "",
      ...appended,
    ];
  });
  return [header, ...rows].map((row) => row.join(",")).join("\n");
}
