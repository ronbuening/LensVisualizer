/**
 * Data gaps that qualify an MTF chart.
 *
 * `assessMtfSupport` says whether MTF can run and lists the model's general assumptions. This module answers a
 * narrower question for the chart on screen: what is this lens, or lens plus converter, missing that the most
 * accurate model would need? Every gap is tied to the display it changes, so a single-wavelength chart the reader
 * asked for carries no dispersion gap, and an inconsistent image plane is no gap at best axial focus. Gaps hold the
 * chart behind a warning (`blocking`); authored source errata are notes that leave it readable.
 */
import type { MtfDataLimitation, MtfResult, MtfSpectrum } from "../../types/mtf.js";
import type { PreparedOpticalState } from "../types.js";
import { assessMtfSpectralData, MTF_SPECTRUM_LABELS, mtfPrescriptionScale, mtfScaleNeedsNote } from "./mtfSupport.js";

export interface MtfDataLimitationInput {
  /** Spectrum the reader asked for. */
  preferredSpectrum: MtfSpectrum;
  /** Spectrum actually charted; the reference line when the glass data cannot support the preferred one. */
  spectrum: MtfSpectrum;
  /** Reference wavelength of the chart, in nm. */
  referenceWavelengthNm: number;
  /** Charted result; the image-plane and field gaps are known only once one exists. */
  result: MtfResult | null;
}

/** Element names listed before the rest are counted. */
const MAX_LISTED_ELEMENTS = 6;

function listNames(names: readonly string[]): string {
  const shown = names.slice(0, MAX_LISTED_ELEMENTS).join(", ");
  return names.length > MAX_LISTED_ELEMENTS ? `${shown} and ${names.length - MAX_LISTED_ELEMENTS} more` : shown;
}

/** Millimetres with enough decimals to tell two heights `gapMm` apart. */
function formatHeights(gapMm: number): (heightMm: number) => string {
  const digits = gapMm >= 0.1 ? 1 : gapMm >= 0.01 ? 2 : 3;
  return (heightMm) => heightMm.toFixed(digits);
}

/**
 * List the data gaps that qualify the MTF chart for one lens state and one set of display options.
 *
 * @param state - prepared optical state of the lens, or of the lens with a converter attached
 * @param input - spectrum requested and charted, and the result on screen
 * @returns gaps in reading order; empty when the data supports the display in full
 */
export function assessMtfDataLimitations(
  state: PreparedOpticalState,
  input: MtfDataLimitationInput,
): MtfDataLimitation[] {
  const { source } = state.lens;
  const limitations: MtfDataLimitation[] = [];

  if (input.preferredSpectrum !== "reference") {
    const label = MTF_SPECTRUM_LABELS[input.preferredSpectrum];
    const spectral = assessMtfSpectralData(state);
    if (input.spectrum === "reference" && spectral.blocker) {
      limitations.push({
        kind: "reference-only",
        blocking: true,
        text: `${label} MTF is not available for this prescription: ${spectral.blocker}. The chart shows the ${input.referenceWavelengthNm.toFixed(1)} nm reference wavelength alone, so chromatic aberration is left out.`,
      });
    } else if (input.spectrum !== "reference") {
      // Rear plates are left out: a flat plate only shifts focus with color, and the estimate keeps its F−C span exact.
      const glasses = source.elements.filter(
        (element) =>
          !element.synthetic && state.surfaces.some((surface) => surface.nd !== 1 && surface.elemId === element.id),
      );
      const estimatedIds = new Set(spectral.estimatedElementIds);
      const estimated = glasses.filter((element) => estimatedIds.has(element.id));
      // A mounted converter's elements follow the lens's; name the two parts separately.
      const converterFrom = source.attachedTeleconverter?.firstElementId ?? Infinity;
      const named = (converter: boolean) =>
        estimated.filter((element) => element.id >= converterFrom === converter).map((element) => element.name);
      const [inLens, inConverter] = [named(false), named(true)];
      const names =
        converterFrom === Infinity
          ? listNames(inLens)
          : [
              inLens.length ? `${listNames(inLens)} in the lens` : "",
              inConverter.length ? `${listNames(inConverter)} in the converter` : "",
            ]
              .filter(Boolean)
              .join("; ");
      const count = estimated.length;
      if (count > 0)
        limitations.push({
          kind: "estimated-dispersion",
          blocking: true,
          text:
            (count === glasses.length
              ? "Every glass is known only by nd and νd, so all dispersion is estimated."
              : `${count} of ${glasses.length} glasses (${names}) ${count === 1 ? "is" : "are"} known only by nd and νd, so ${count === 1 ? "its" : "their"} dispersion is estimated.`) +
            ` Primary color stays exact; secondary spectrum in these ${label === "Photopic" ? "photopic" : label} curves is approximate.`,
        });
    }
  }

  const focus = input.result?.focus;
  // At best axial focus by request, the chart never uses the authored plane.
  if (focus?.imagePlaneInconsistent && focus.imagePlaneOffsetMm !== null && focus.requestedMode !== "best-axial") {
    const offset = focus.imagePlaneOffsetMm;
    limitations.push({
      kind: "image-plane",
      blocking: true,
      text:
        `The authored image plane sits ${Math.abs(offset).toFixed(2)} mm ${offset > 0 ? "in front of" : "behind"} this prescription's paraxial focus, so the back focus in the lens data disagrees with its surfaces. ` +
        (focus.mode === "best-axial"
          ? "These curves are refocused to best axial focus instead of the design plane."
          : "These curves are taken at the authored plane and are out of focus."),
    });
  }

  const geometry = input.result?.geometry;
  const fields = input.result?.fields ?? [];
  const uncharted = fields.filter((field) => field.reason === "outside-modeled-field").length;
  if (geometry && uncharted > 0) {
    const mm = formatHeights(geometry.referenceHeightMm - geometry.modeledEdgeHeightMm);
    limitations.push({
      kind: "short-field",
      blocking: true,
      text: `The modeled clear apertures end the field at ${mm(geometry.modeledEdgeHeightMm)} mm, short of the ${mm(geometry.referenceHeightMm)} mm format corner. ${uncharted} of ${fields.length} field positions ${uncharted === 1 ? "lies beyond it and is" : "lie beyond it and are"} not charted.`,
    });
  }

  const scale = mtfPrescriptionScale(source);
  if (mtfScaleNeedsNote(scale)) {
    limitations.push({
      kind: "scale",
      blocking: true,
      text: `The prescription's focal length (${scale.designMm.toFixed(1)} mm) differs from the marketed ${scale.marketingMm} mm by ${Math.round(
        scale.fraction * 100,
      )}%, so frequencies in lp/mm are at the prescription's scale, not the production lens's.`,
    });
  }

  // Authored errata describe the prescription itself, so they qualify every chart of the lens without hiding it.
  const errata = source.sourceErrata ?? [];
  const corrected = errata.filter((erratum) => erratum.status === "corrected");
  if (corrected.length > 0) {
    const values = corrected.map((erratum) => `surface ${erratum.surface}, ${erratum.field}`).join("; ");
    limitations.push({
      kind: "source-erratum",
      blocking: false,
      text:
        corrected.length === 1
          ? `A printed value (${values}) contradicts the source's own data and is corrected here: the source prints ${corrected[0].printed}, this prescription uses ${corrected[0].applied}.`
          : `${corrected.length} printed values (${values}) contradict the source's own data and are corrected here.`,
    });
  }
  const unresolved = errata.filter((erratum) => erratum.status === "unresolved");
  if (unresolved.length > 0) {
    limitations.push({
      kind: "source-inconsistent",
      blocking: false,
      text: `The source prescription contradicts itself and the cause is not isolated, so these curves describe the printed table: ${unresolved.map((erratum) => erratum.note).join(" ")}`,
    });
  }

  return limitations;
}
