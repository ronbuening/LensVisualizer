/** Plain-text export of the MTF value table. */
import type { MtfResult } from "../../../../types/mtf.js";

/**
 * CSV of sagittal and tangential MTF per field at the displayed frequencies.
 *
 * Unavailable and pending fields keep their row with empty values, so the height axis stays complete.
 *
 * @param result - computed MTF
 * @param frequencies - frequencies to export, in lp/mm
 * @returns CSV data followed by attributed configuration and evaluation-plane metadata
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
  const { configuration, focus } = result;
  const source = configuration.sourceState;
  const conjugate = source?.conjugate;
  const metadata = [
    ["Metadata", "Value"],
    ["Lens", configuration.lensKey],
    ["Source state ID", source?.id ?? "unverified"],
    ["Source state label", source?.label ?? "Unverified geometry"],
    ["Focus coordinate", configuration.focusT],
    ["Zoom coordinate", configuration.zoomT],
    ["Aberration coordinate", configuration.aberrationT],
    ["Conjugate", conjugate?.kind ?? (result.support.conjugate ? "finite" : "unverified")],
    ["Object distance (mm)", conjugate?.kind === "finite" ? conjugate.objectDistanceMm : ""],
    ["Distance reference", conjugate?.kind === "finite" ? conjugate.distanceReference : ""],
    ["Distance provenance", conjugate?.kind === "finite" ? conjugate.distanceProvenance : ""],
    ["Sourced magnification", conjugate?.kind === "finite" ? (conjugate.magnification ?? "") : ""],
    ["Source citation", source?.source ?? ""],
    ["Distance derivation", conjugate?.kind === "finite" ? (conjugate.derivation ?? "") : ""],
    ["MTF method", result.method],
    ["Spectrum", result.spectrum],
    ["Wavelengths (nm)", result.support.spectralLines.map((line) => line.wavelengthNm).join("; ")],
    ["Requested MTF image plane", focus?.requestedMode ?? "unavailable"],
    ["Applied MTF image plane", focus?.mode ?? "unavailable"],
    ["Evaluation-plane shift from authored plane (mm)", focus?.appliedShiftMm ?? ""],
    ["Qualification", "Simulated prescription estimate; numerical convergence does not establish physical accuracy."],
  ];
  return [header, ...rows, [], ...metadata].map((row) => row.map(csvCell).join(",")).join("\n");
}

function csvCell(value: string | number): string {
  const text = String(value);
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}
