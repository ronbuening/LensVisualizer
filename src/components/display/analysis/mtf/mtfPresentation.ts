/** Shared chart/table/export policy: numerical estimates require an explicit diagnostic view. */
import type { MtfFrequencyField, MtfPixelPitch } from "../../../../utils/state/mtfPreferences.js";
import type { MtfApertureSample, MtfFieldResult, MtfResult } from "../../../../types/mtf.js";

/**
 * Name the numerical status without implying physical accuracy.
 * @param field - sampled field, including its unavailable reason
 * @returns status label shared by detailed field readouts
 */
export function mtfFieldStatusLabel(field: MtfFieldResult): string {
  return field.reason === "outside-modeled-field" ? "outside model" : field.status;
}

/**
 * Label the frequency band whose sampled grid changes meet the convergence tolerance.
 * @param field - sampled field with its reported stable band
 * @returns frequency in lp/mm, or an explicit absent-band label
 */
export function mtfStableThroughLabel(field: MtfFieldResult): string {
  return field.convergedThroughLpMm === null ? "Not established" : `${field.convergedThroughLpMm} lp/mm`;
}

/** A field's status alone does not establish stability beyond its tested frequency band. */
export function mtfValueVisible(field: MtfFieldResult, frequency: number, diagnostic = false): boolean {
  if (field.status !== "converged" && field.status !== "unconverged") return false;
  if (diagnostic) return true;
  return field.status === "converged" && field.convergedThroughLpMm !== null && frequency <= field.convergedThroughLpMm;
}

export const MTF_DIFFRACTION_LIMIT_LABEL = "Diffraction limit of the same traced pupil (no aberration)";
export const MTF_NYQUIST_NOTE = "Sampling limit of a pixel grid, not a prediction of camera or sensor MTF.";

/**
 * Read a reference value only where its aberrated curve is disclosed.
 * @param field - field carrying the traced-pupil reference
 * @param axis - sagittal or tangential response
 * @param index - frequency index in the result
 * @param frequency - spatial frequency in lp/mm
 * @param diagnostic - include explicitly disclosed numerical estimates
 * @returns reference MTF, or null where withheld or absent
 */
export function mtfLimitValue(
  field: MtfFieldResult,
  axis: "sagittal" | "tangential",
  index: number,
  frequency: number,
  diagnostic = false,
): number | null {
  return mtfValueVisible(field, frequency, diagnostic) ? (field.diffractionLimit?.[axis][index] ?? null) : null;
}

/**
 * Resolve a stored field against the current result without changing the reader's saved choice.
 * @param result - current computed fields, if available
 * @param choice - stored fraction of reference height or overview
 * @returns matching fraction, or overview when absent
 */
export function resolveMtfFrequencyField(result: MtfResult | null, choice: MtfFrequencyField): MtfFrequencyField {
  return typeof choice === "number" && result?.fields.some((field) => field.fieldFraction === choice)
    ? choice
    : "overview";
}

/**
 * Match the frequency view's overview at the charted aperture, keeping its fields fixed during a sweep.
 * @param result - charted result used to identify the outermost available field
 * @param choice - selected reference-height fraction or overview
 * @returns selected fractions in increasing order
 */
export function mtfSweepFields(result: MtfResult | null, choice: MtfFrequencyField): number[] {
  const selected = resolveMtfFrequencyField(result, choice);
  if (typeof selected === "number") return [selected];
  const available = (result?.fields ?? [])
    .filter((f) => f.status === "converged" || f.status === "unconverged")
    .sort((a, b) => a.fieldFraction - b.fieldFraction);
  const edge = available.at(-1);
  return [0, 0.5, ...(edge && edge.fieldFraction > 0.5 ? [edge.fieldFraction] : [])];
}

/**
 * Count numerical points (one S/T pair), including frequencies outside a field's stable band.
 * @param sample - computed or reserved aperture
 * @param fraction - fixed reference-height field
 * @param frequency - charted spatial frequency in lp/mm
 * @returns numerical availability, independent of diagnostic disclosure
 */
export function mtfAperturePointStatus(sample: MtfApertureSample, fraction: number, frequency: number) {
  if (!sample.result) return "pending";
  const field = sample.result.fields.find((f) => f.fieldFraction === fraction);
  if (!field) return sample.result.support.available ? "pending" : "unavailable";
  if (field.status === "converged" && !mtfValueVisible(field, frequency)) return "unconverged";
  return field.status;
}

/**
 * Label the pixel-grid Nyquist frequency (one cycle per two pixel pitches).
 * @param pitch - pixel pitch in µm
 * @returns sampling reference label in lp/mm
 */
export function mtfNyquistLabel(pitch: MtfPixelPitch): string {
  const frequency = 500 / pitch;
  return `Nyquist, ${pitch} µm pixels: ${Number.isInteger(frequency) ? frequency : frequency.toFixed(1)} lp/mm`;
}
