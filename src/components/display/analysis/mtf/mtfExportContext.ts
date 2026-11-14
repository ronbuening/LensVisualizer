/**
 * Reproducible captions for MTF downloads, separate from the legacy clipboard table.
 * Context CSV lines are `# key: value`, split at the first `: `; embedded newlines
 * become spaces. Keys use snake_case, dates are UTC, and measurements name their units.
 * Data starts at the first non-comment line and uses ordinary quoted CSV cells.
 */
import type { RuntimeLens } from "../../../../types/optics.js";
import type { MtfResult } from "../../../../types/mtf.js";
import type { MtfPreferences } from "../../../../utils/state/mtfPreferences.js";
import { SITE_NAME } from "../../../../utils/catalog/lensMetadata.js";

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

/**
 * Describe the result actually displayed, including an incomplete worker result.
 * @param input - optical station, displayed results, settings and explicit generation time
 * @returns ordered machine-readable keys shared by CSV and image captions
 */
export function buildMtfExportContext(input: MtfExportContextInput): MtfExportContext {
  const { lens, result, preferences, comparison } = input;
  const source = lens.source.source;
  const aperture = lens.source.catalog.fNumber;
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
      `design wide-open f/${aperture?.design ?? lens.FOPEN}`,
      ...(aperture?.marketing !== undefined && aperture.marketing !== (aperture.design ?? lens.FOPEN)
        ? [`marketed wide-open f/${aperture.marketing}`]
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

/**
 * Keep every context value on one comment line so scripts can find the CSV header.
 * @param context - ordered export metadata
 * @returns newline-separated comment block, without a trailing newline
 */
export function mtfContextBlock(context: MtfExportContext): string {
  return Object.entries(context)
    .map(([key, value]) => `# ${key}: ${value.replace(/[\r\n]+/g, " ")}`)
    .join("\n");
}
