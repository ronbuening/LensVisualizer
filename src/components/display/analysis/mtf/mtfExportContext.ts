/**
 * Reproducible metadata and readable captions for MTF downloads.
 * Each context CSV record is one field: decode optional CSV quoting, strip the
 * leading `# `, then split `key: value` at the first `: `. Embedded newlines stay
 * inside quoted fields. Keys use snake_case, dates are UTC, and measurements name
 * their units. Data starts at the first decoded non-comment record.
 */
import type { RuntimeLens } from "../../../../types/optics.js";
import type { MtfResult } from "../../../../types/mtf.js";
import type { MtfPreferences } from "../../../../utils/state/mtfPreferences.js";
import { SITE_NAME } from "../../../../utils/catalog/lensMetadata.js";
import { fopenAtZoomClamped, formatFNumber } from "../../../../optics/optics.js";

export const MTF_EXPORT_DISCLAIMER =
  "Prescription estimate, not manufacturer MTF. Modeled rear cover/filter plates are included; any omitted sensor optics can substantially change these curves.";

export type MtfExportContext = Readonly<Record<string, string>>;

interface MtfExportContextInput {
  lens: RuntimeLens;
  result: MtfResult;
  preferences: MtfPreferences;
  focalLengthMm: number;
  fNumber?: number;
  zoomT: number;
  focusT: number;
  spectrumNote?: string | null;
  link: string;
  date: Date;
  partial?: boolean;
  diagnostic?: boolean;
  comparison?: MtfResult | null;
  comparisonRequested?: boolean;
}

function marketedFNumberAtZoom(value: number | readonly number[] | undefined, zoomT: number): number | undefined {
  if (typeof value === "number" || value === undefined) return value;
  // Marketed values are discrete, with midpoint ties going wider as for focal lengths.
  const index = Math.max(0, Math.min(value.length - 1, Math.ceil(zoomT * (value.length - 1) - 0.5)));
  return value[index];
}

/**
 * Describe the result actually displayed, including an incomplete worker result.
 * @param input - optical station, displayed results, settings and explicit generation time
 * @returns ordered machine-readable keys shared by CSV and SVG descriptions
 */
export function buildMtfExportContext(input: MtfExportContextInput): MtfExportContext {
  const { lens, result, preferences, comparison } = input;
  const source = lens.source.source;
  const aperture = lens.source.catalog.fNumber;
  const designFNumber = lens.isZoom ? fopenAtZoomClamped(input.zoomT, lens) : (aperture?.design ?? lens.FOPEN);
  const marketedFNumber = marketedFNumberAtZoom(aperture?.marketing, input.zoomT);
  const marketedLabel =
    lens.isZoom && typeof aperture?.marketing === "number" ? "catalog marketed" : "marketed wide-open";
  const conjugate = result.support.conjugate;
  const focus = (value: MtfResult) =>
    value.focus
      ? `${value.focus.mode}; shift ${value.focus.appliedShiftMm} mm from authored plane (requested ${value.focus.requestedMode})`
      : `not yet available (requested ${preferences.focus})`;
  const partial = input.partial || [result, comparison].some((r) => r?.fields.some((f) => f.status === "pending"));
  return {
    site_name: SITE_NAME,
    lens_name: lens.source.name,
    lens_key: lens.source.key,
    source: [source.patentNumber, source.example?.label, source.issuer].filter(Boolean).join("; ") || "not recorded",
    station: `${input.focalLengthMm} mm; ${conjugate ? `${conjugate.objectDistanceMm} mm from ${conjugate.distanceReference}` : input.focusT === 0 ? "infinity" : "focus distance not established"}; zoom ${input.zoomT}; focus ${input.focusT}`,
    aperture: [
      input.fNumber ? `selected f/${input.fNumber}` : "selected f-number not recorded",
      `design wide-open f/${designFNumber}`,
      ...(marketedFNumber !== undefined && marketedFNumber !== designFNumber
        ? [`${marketedLabel} f/${marketedFNumber}`]
        : []),
    ].join("; "),
    method: result.method === "diffraction" ? "Diffraction-corrected" : "Geometric",
    spectrum: `${result.spectrum}; ${result.support.spectralLines.map((line) => `${line.wavelengthNm} nm (weight ${line.weight})`).join("; ")}`,
    ...(result.spectrum !== preferences.spectrum
      ? { preferred_spectrum: preferences.spectrum, spectrum_fallback_reason: input.spectrumNote ?? "not recorded" }
      : {}),
    focus: focus(result),
    grid_cap: `${preferences.maxGridSize} cells across pupil`,
    reference_image_height: result.geometry
      ? `${result.geometry.referenceHeightMm} mm; ${result.geometry.basis}`
      : "not yet available",
    view: preferences.view === "field" ? "image height" : "spatial frequency",
    values: input.diagnostic ? "diagnostic estimates included" : "converged band only",
    diffraction_limit: preferences.diffractionLimit && result.method === "diffraction" ? "shown" : "off",
    pixel_pitch:
      preferences.view === "frequency" && preferences.pixelPitchUm ? `${preferences.pixelPitchUm} µm` : "off",
    comparison: comparison ? `f/8; ${focus(comparison)}` : input.comparisonRequested ? "f/8 not available" : "off",
    shared_link: input.link,
    generation_date: input.date.toISOString().slice(0, 10),
    status: partial ? "partial" : "complete",
    disclaimer: MTF_EXPORT_DISCLAIMER,
  };
}

function captionPlane(focus: string): string {
  const [mode, shift] = focus.split("; shift ");
  if (mode === "design") return "design plane";
  if (!shift) return "image plane not yet available";
  const mm = Number.parseFloat(shift);
  return `${mode === "held" ? "held plane" : "best axial focus estimate"}, ${mm >= 0 ? "+" : "−"}${Math.abs(mm).toFixed(3)} mm`;
}

/**
 * Summarize the stable context fields without exposing metadata keys or spectral weights.
 * @param context - full CSV/SVG metadata from buildMtfExportContext
 * @param maxLineLength - character budget for the shared link and date
 * @returns short logical lines; the image renderer wraps them to its available width
 */
export function mtfCaptionLines(context: MtfExportContext, maxLineLength: number): string[] {
  const [focalLength, distance] = context.station.split("; ");
  const aperture =
    context.aperture
      .replaceAll(/f\/([\d.e+-]+)/g, (_, value: string) => `f/${formatFNumber(Number(value))}`)
      .replace("selected ", "")
      .replace("; design wide-open ", " (design ")
      .replace("; marketed wide-open ", ", marketed ")
      .replace("; catalog marketed ", ", catalog marketed ") + ")";
  const [spectrum, ...lines] = context.spectrum.split("; ");
  const wavelengths = lines.map(Number.parseFloat);
  const spectrumLabel =
    spectrum === "reference"
      ? `reference, ${wavelengths[0].toFixed(1)} nm`
      : `${spectrum === "cdf" ? "C/d/F" : spectrum}, ${lines.length} lines ${spectrum === "photopic" ? "470–650" : `${Math.min(...wavelengths).toFixed(0)}–${Math.max(...wavelengths).toFixed(0)}`} nm`;
  const options = [
    ...(context.comparison === "off"
      ? []
      : [
          context.comparison.startsWith("f/8; ")
            ? `f/8 comparison: ${captionPlane(context.comparison.slice(5))}`
            : context.comparison,
        ]),
    ...(context.diffraction_limit === "shown" ? ["diffraction-limit reference"] : []),
    ...(context.pixel_pitch === "off" ? [] : [`Nyquist marker, ${context.pixel_pitch} pixels`]),
    ...(context.values === "diagnostic estimates included" ? ["diagnostic estimates shown"] : []),
    ...(context.status === "partial" ? ["partial result"] : []),
  ];
  const linkLength = maxLineLength - context.generation_date.length - 3;
  const link =
    context.shared_link.length > linkLength ? `${context.shared_link.slice(0, linkLength - 1)}…` : context.shared_link;
  return [
    `${context.lens_name} — ${context.source.replaceAll("; ", ", ")}`,
    [
      aperture,
      `${Number.parseFloat(focalLength).toFixed(1)} mm`,
      distance
        .replace(/^[\d.e+-]+ mm/, (value) => `${Number.parseFloat(value).toFixed(1)} mm`)
        .replace("image-plane", "image plane")
        .replace("first-surface", "first surface"),
      ...(context.reference_image_height === "not yet available"
        ? []
        : [`reference height ${Number.parseFloat(context.reference_image_height).toFixed(2)} mm`]),
    ].join(" · "),
    `${context.method} · ${spectrumLabel} · ${captionPlane(context.focus)} · grid cap ${context.grid_cap.split(" ")[0]}`,
    ...(options.length ? [options.join(" · ")] : []),
    `${link} · ${context.generation_date}`,
    context.disclaimer,
  ];
}

/**
 * Keep each context record in one CSV cell so punctuation cannot create formula cells.
 * @param context - ordered export metadata
 * @returns newline-separated single-cell CSV records, without a trailing newline
 */
export function mtfContextBlock(context: MtfExportContext): string {
  return Object.entries(context)
    .map(([key, value]) => {
      // Round only measured context fields; names, links and spectral weights stay verbatim.
      const text = ["station", "spectrum", "focus", "reference_image_height", "comparison", "pixel_pitch"].includes(key)
        ? value.replace(
            /(-?\d+(?:\.\d+)?(?:e[+-]?\d+)?) (mm|nm|µm)/gi,
            (_, number: string, unit: string) => `${Number(Number(number).toFixed(6))} ${unit}`,
          )
        : value;
      const line = `# ${key}: ${text}`;
      return /[",\r\n]/.test(line) ? `"${line.replaceAll('"', '""')}"` : line;
    })
    .join("\n");
}
