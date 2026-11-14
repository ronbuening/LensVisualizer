/** Contextual view/all-sample downloads reuse the chart's numerical disclosure policy. */
import type { MtfApertureSample, MtfFieldResult, MtfResult } from "../../../../types/mtf.js";
import type { MtfChartView, MtfFrequencyField } from "../../../../utils/state/mtfPreferences.js";
import { mtfCsv } from "./mtfCsv.js";
import { mtfAperturePointStatus, mtfLimitValue, mtfValueVisible, resolveMtfFrequencyField } from "./mtfPresentation.js";
import { mtfContextBlock, type MtfExportContext } from "./mtfExportContext.js";

interface MtfCsvExportOptions {
  result: MtfResult;
  context: MtfExportContext;
  view: MtfChartView;
  frequencies: readonly number[];
  frequencyField?: MtfFrequencyField;
  diagnostic?: boolean;
  comparison?: MtfResult | null;
  comparisonFNumber?: number;
  diffractionLimit?: boolean;
  apertureSamples?: readonly MtfApertureSample[];
  apertureFields?: readonly number[];
}

function textCell(value: string): string {
  // CSV quoting does not stop spreadsheets evaluating text as a formula.
  const text = /^\s*[=+@\t\r-]/.test(value) ? `'${value}` : value;
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function notes(field: MtfFieldResult | undefined): string {
  return field ? [...field.notes, field.message].filter(Boolean).join("; ") : "";
}

function shownFields(result: MtfResult, choice: MtfFrequencyField): MtfFieldResult[] {
  if (typeof choice === "number") return result.fields.filter((f) => f.fieldFraction === choice);
  const available = result.fields
    .filter((f) => f.status === "converged" || f.status === "unconverged")
    .sort((a, b) => a.fieldFraction - b.fieldFraction);
  const edge = available.at(-1);
  return available.filter(
    (f) => f.fieldFraction === 0 || Math.abs(f.fieldFraction - 0.5) < 1e-9 || (f === edge && f.fieldFraction > 0.5),
  );
}

/**
 * Download the displayed image-height table or the frequency curves' samples.
 * @param options - current chart choices and caption
 * @returns context comments followed by a quoted CSV table with field notes
 */
export function mtfViewCsv(options: MtfCsvExportOptions): string {
  const { result, context, frequencies, diagnostic = false, comparison = null, diffractionLimit = false } = options;
  if (options.view === "aperture")
    return `${mtfContextBlock({ ...context, export_scope: "this view" })}\n${mtfApertureCsv(options)}`;
  if (options.view === "frequency") return sampledCsv(options, false);
  const table = mtfCsv(result, frequencies, diagnostic, comparison, diffractionLimit, options.comparisonFNumber).split(
    "\n",
  );
  const header = table[0].split(",");
  const statusColumns = header.flatMap((name, i) => (name.toLowerCase().endsWith("status") ? [i] : []));
  // The clipboard table contains only formatted numbers and fixed status/value/plane labels.
  const textColumns = header.flatMap((name, i) => (/(?:status|values|image plane)$/i.test(name) ? [i] : []));
  const rows = table.map((row, i) => {
    const field = result.fields[i - 1];
    const other = comparison?.fields.find((f) => f.fieldFraction === field?.fieldFraction);
    const cells = row.split(",");
    if (i && diagnostic)
      statusColumns.forEach((index) => {
        if (cells[index]) cells[index] += "; diagnostic estimates included";
      });
    const safeCells = cells.map((value, index) => (!i || textColumns.includes(index) ? textCell(value) : value));
    return `${safeCells.join(",")},${textCell(i ? notes(field) : "Notes")}${comparison ? `,${textCell(i ? notes(other) : `f/${options.comparisonFNumber ?? 8} notes`)}` : ""}`;
  });
  return `${mtfContextBlock({ ...context, export_scope: "this view" })}\n${rows.join("\n")}`;
}

/**
 * Download every computed frequency at every sampled field, independent of chart selection.
 * @param options - current disclosure/overlay choices and caption
 * @returns context comments followed by one row per field and frequency
 */
export function mtfAllSamplesCsv(options: MtfCsvExportOptions): string {
  if (options.view === "aperture")
    return `${mtfContextBlock({ ...options.context, export_scope: "all sampled values" })}\n${mtfApertureCsv(options, true)}`;
  return sampledCsv(options, true);
}

/**
 * Emit the aperture clipboard table, one row per aperture, field and frequency, with applied planes.
 * @param options - sweep samples, selected fields/frequencies and disclosure choices
 * @param all - include every computed frequency at the sweep's sampled fields
 * @returns uncaptioned CSV; pending and undisclosed points have empty numerical cells
 */
export function mtfApertureCsv(
  options: Pick<
    MtfCsvExportOptions,
    "apertureSamples" | "apertureFields" | "frequencies" | "diagnostic" | "diffractionLimit"
  >,
  all = false,
): string {
  const { apertureSamples = [], apertureFields = [], diagnostic = false, diffractionLimit = false } = options;
  const frequencies = all
    ? [...new Set(apertureSamples.flatMap(({ result }) => result?.frequenciesPerMm ?? []))].sort((a, b) => a - b)
    : options.frequencies;
  const header = [
    "f-number",
    "Field (%)",
    "Frequency (lp/mm)",
    "Image height (mm)",
    "Sagittal",
    "Tangential",
    "Status",
    "Stable through (lp/mm)",
    "Image plane",
    "Shift from authored plane (mm)",
    "Notes",
    ...(diffractionLimit ? ["Diffraction limit sagittal", "Diffraction limit tangential"] : []),
  ];
  const rows = apertureSamples.flatMap((sample) =>
    apertureFields.flatMap((fraction) =>
      frequencies.map((frequency) => {
        const { result } = sample;
        const field = result?.fields.find((f) => f.fieldFraction === fraction);
        const index = result?.frequenciesPerMm.indexOf(frequency) ?? -1;
        const visible = field && index >= 0 && mtfValueVisible(field, frequency, diagnostic);
        return [
          sample.fNumber,
          fraction * 100,
          frequency,
          field?.imageHeightMm ?? field?.targetImageHeightMm ?? "",
          visible ? field.sagittal[index]?.toFixed(4) : "",
          visible ? field.tangential[index]?.toFixed(4) : "",
          textCell(
            `${mtfAperturePointStatus(sample, fraction, frequency)}${diagnostic ? "; diagnostic estimates included" : ""}`,
          ),
          field?.convergedThroughLpMm ?? "",
          result?.focus?.mode ?? "",
          result?.focus?.appliedShiftMm ?? "",
          textCell(notes(field) || result?.support.message || ""),
          ...(diffractionLimit
            ? (["sagittal", "tangential"] as const).map((axis) =>
                result?.method === "diffraction" && field && index >= 0
                  ? (mtfLimitValue(field, axis, index, frequency, diagnostic)?.toFixed(4) ?? "")
                  : "",
              )
            : []),
        ];
      }),
    ),
  );
  return [header.map(textCell), ...rows].map((row) => row.join(",")).join("\n");
}

function sampledCsv(options: MtfCsvExportOptions, all: boolean): string {
  const { result, comparison, diagnostic = false, diffractionLimit = false } = options;
  const selected = resolveMtfFrequencyField(result, options.frequencyField ?? "overview");
  const main = all ? result.fields : shownFields(result, selected);
  const compared = comparison ? (all ? comparison.fields : shownFields(comparison, selected)) : [];
  const fractions = [...new Set([...main, ...compared].map((f) => f.fieldFraction))].sort((a, b) => a - b);
  const frequencies = [...new Set([...result.frequenciesPerMm, ...(comparison?.frequenciesPerMm ?? [])])].sort(
    (a, b) => a - b,
  );
  const sources = [
    { result, fields: main, prefix: "" },
    ...(comparison ? [{ result: comparison, fields: compared, prefix: `f/${options.comparisonFNumber ?? 8} ` }] : []),
  ];
  const limits = diffractionLimit ? sources.filter((s) => s.result.method === "diffraction") : [];
  const header = [
    "Field (%)",
    "Frequency (lp/mm)",
    ...sources.flatMap(({ prefix }) => [
      `${prefix}Image height (mm)`,
      `${prefix}Sagittal`,
      `${prefix}Tangential`,
      `${prefix}Status`,
      `${prefix}Stable through (lp/mm)`,
      `${prefix}Notes`,
    ]),
    ...limits.flatMap(({ prefix }) => [`${prefix}Diffraction limit sagittal`, `${prefix}Diffraction limit tangential`]),
  ];
  const rows = fractions.flatMap((fraction) =>
    frequencies.map((frequency) => [
      fraction * 100,
      frequency,
      ...sources.flatMap(({ result: source, fields }) => {
        const field = fields.find((f) => f.fieldFraction === fraction);
        const index = source.frequenciesPerMm.indexOf(frequency);
        const visible = field && index >= 0 && mtfValueVisible(field, frequency, diagnostic);
        return [
          field?.imageHeightMm ?? field?.targetImageHeightMm,
          visible ? field.sagittal[index]?.toFixed(4) : "",
          visible ? field.tangential[index]?.toFixed(4) : "",
          textCell(
            field ? `${field.reason ?? field.status}${diagnostic ? "; diagnostic estimates included" : ""}` : "",
          ),
          field?.convergedThroughLpMm,
          textCell(notes(field)),
        ];
      }),
      ...limits.flatMap(({ result: source, fields }) => {
        const field = fields.find((f) => f.fieldFraction === fraction);
        const index = source.frequenciesPerMm.indexOf(frequency);
        return (["sagittal", "tangential"] as const).map((axis) =>
          field && index >= 0 ? mtfLimitValue(field, axis, index, frequency, diagnostic)?.toFixed(4) : "",
        );
      }),
    ]),
  );
  return `${mtfContextBlock({ ...options.context, export_scope: all ? "all sampled values" : "this view" })}\n${[header.map(textCell), ...rows].map((row) => row.join(",")).join("\n")}`;
}
