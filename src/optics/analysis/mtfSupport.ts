/** MTF capability checks are per optical state, not per-lens rollout flags. */
import type { MtfOptions, MtfSpectralLine, MtfSpectrum, MtfSupport, MtfUnavailableReason } from "../../types/mtf.js";
import { LINE_NM } from "../spectralLines.js";
import type { PreparedOpticalState } from "../types.js";
import { mtfFiniteConjugate, mtfFiniteObjectPoint } from "./mtfConjugates.js";
import {
  MTF_DEFAULT_GRID_CAP,
  MTF_ESTIMATED_DISPERSION_MAX_VD,
  MTF_FIELDS,
  MTF_FOCUS_MODES,
  MTF_FREQUENCIES,
  MTF_GRID_CAPS,
  MTF_MAX_FIELDS,
  MTF_MAX_FREQUENCIES,
  MTF_MAX_FREQUENCY_LPMM,
} from "./mtfConstants.js";

export { MTF_FIELDS, MTF_FREQUENCIES } from "./mtfConstants.js";

/** Equal-weight C/d/F estimate; the reference d line comes first and anchors lateral color. */
export const MTF_CDF_LINES: readonly MtfSpectralLine[] = Object.freeze([
  { wavelengthNm: LINE_NM.d, weight: 1 / 3 },
  { wavelengthNm: LINE_NM.C, weight: 1 / 3 },
  { wavelengthNm: LINE_NM.F, weight: 1 / 3 },
]);

/**
 * Five-line photopic estimate: CIE 1924 V(λ) on an equal-energy source across 470-650 nm.
 * The 555 nm peak comes first and anchors lateral color; every line sits inside the C-g range
 * that line-index glasses tabulate.
 */
export const MTF_PHOTOPIC_LINES: readonly MtfSpectralLine[] = Object.freeze([
  { wavelengthNm: 555, weight: 1 },
  { wavelengthNm: 470, weight: 0.091 },
  { wavelengthNm: 510, weight: 0.503 },
  { wavelengthNm: 610, weight: 0.503 },
  { wavelengthNm: 650, weight: 0.107 },
]);

/** Prescription focal length may differ from the marketed value by this share before results are qualified. */
const SCALE_NOTE_FRACTION = 0.1;

export const MTF_SPECTRUM_LABELS: Record<Exclude<MtfSpectrum, "reference">, string> = {
  cdf: "C/d/F",
  photopic: "Photopic",
};

/** Prescription and marketed focal lengths when they differ enough to qualify lp/mm values. */
export interface MtfScaleDifference {
  designMm: number;
  marketingMm: number;
  /** |design / marketing − 1|. */
  fraction: number;
}

/**
 * Compare the prescription's focal length with the marketed one.
 *
 * @param source - lens data carrying `focalLengthDesign` and `focalLengthMarketing`
 * @returns the two lengths and their relative difference, or null when either is missing
 */
export function mtfPrescriptionScale(source: {
  focalLengthDesign?: number | readonly number[];
  focalLengthMarketing?: number | readonly number[];
}): MtfScaleDifference | null {
  const first = (value: number | readonly number[] | undefined) => (Array.isArray(value) ? value[0] : value);
  const designMm = first(source.focalLengthDesign) as number | undefined;
  const marketingMm = first(source.focalLengthMarketing) as number | undefined;
  if (!designMm || !marketingMm) return null;
  return { designMm, marketingMm, fraction: Math.abs(designMm / marketingMm - 1) };
}

/**
 * Whether a scale difference is large enough to qualify reported lp/mm.
 *
 * @param scale - result of `mtfPrescriptionScale`
 * @returns true above the 10 % note threshold
 */
export function mtfScaleNeedsNote(scale: MtfScaleDifference | null): scale is MtfScaleDifference {
  return scale !== null && scale.fraction > SCALE_NOTE_FRACTION;
}

/** Spectrum actually used for a request, and a note when it differs from the preferred one or estimates dispersion. */
export interface MtfSpectrumChoice {
  spectrum: MtfSpectrum;
  note: string | null;
}

/** Whether the glasses can support C/d/F or photopic sampling, and how many use estimated dispersion. */
export interface MtfSpectralData {
  /** Why a spectrum cannot be sampled, completing "…because …", or null when it can. */
  blocker: string | null;
  /** Glasses whose C/F/g indices are estimated from nd and vd. */
  estimatedGlasses: number;
  /** Ids of the elements those glasses belong to, in surface order. */
  estimatedElementIds: number[];
}

/**
 * Classify the glasses for spectral MTF. Catalog Sellmeier and d-referenced line indices are physical data;
 * d-referenced nd/vd-only glasses use the Abbe tier's normal-line estimate (`abbeLineIndices`), which keeps the
 * F−C span exact. Glasses with no Abbe number, native e-line glasses without catalog data, and nd/vd-only glasses
 * above `MTF_ESTIMATED_DISPERSION_MAX_VD` without an authored dPgF block spectral sampling. The same test gates
 * C/d/F and photopic sampling.
 *
 * @param state - prepared optical state
 * @returns the first blocker, and the number of estimated glasses
 */
export function assessMtfSpectralData(state: PreparedOpticalState): MtfSpectralData {
  const { lens } = state;
  const estimated = new Set<number>();
  const blocked = (blocker: string): MtfSpectralData => ({ blocker, estimatedGlasses: 0, estimatedElementIds: [] });
  for (const [i, dispersion] of lens.dispersion.entries()) {
    if (dispersion.quality === "air" || dispersion.quality === "sellmeier") continue;
    const surface = state.surfaces[i];
    const element = lens.source.elements.find((e) => e.id === surface.elemId);
    if (dispersion.quality === "constant") return blocked("a glass has no Abbe number");
    if (element?.indexReference === "e") return blocked("an e-line glass has no catalog dispersion data");
    if (dispersion.quality !== "abbe") continue;
    const vd = element?.vd ?? lens.runtime.vdByIdx[i] ?? 0;
    if (vd > MTF_ESTIMATED_DISPERSION_MAX_VD && element?.dPgF === undefined)
      return blocked(`a low-dispersion glass (νd ${vd.toFixed(1)}) has no partial-dispersion data`);
    estimated.add(surface.elemId ?? -1 - i);
  }
  return {
    blocker: null,
    estimatedGlasses: estimated.size,
    estimatedElementIds: [...estimated].filter((id) => id >= 0),
  };
}

/**
 * Resolve a preferred spectrum against the lens's glass data, falling back to the reference line.
 *
 * @param state - prepared optical state
 * @param preferred - requested spectrum
 * @returns spectrum to request, with a user-facing note when it differs or estimates dispersion
 */
export function resolveMtfSpectrum(state: PreparedOpticalState, preferred: MtfSpectrum): MtfSpectrumChoice {
  if (preferred === "reference") return { spectrum: preferred, note: null };
  const { blocker, estimatedGlasses } = assessMtfSpectralData(state);
  if (!blocker)
    return {
      spectrum: preferred,
      note:
        estimatedGlasses > 0
          ? `Dispersion of ${estimatedGlasses === 1 ? "one glass" : `${estimatedGlasses} glasses`} is estimated from nd and νd.`
          : null,
    };
  return {
    spectrum: "reference",
    note: `${MTF_SPECTRUM_LABELS[preferred]} MTF is unavailable because ${blocker}; showing the reference wavelength.`,
  };
}

export function assessMtfSupport(state: PreparedOpticalState, options: MtfOptions): MtfSupport {
  const { lens } = state;
  const media = lens.source.elements.filter((e) => state.surfaces.some((s) => s.nd !== 1 && s.elemId === e.id));
  const references = new Set(media.map((e) => e.indexReference ?? "d"));
  const mixed = references.size > 1;
  const referenceWavelengthNm = references.size === 1 && references.has("e") ? LINE_NM.e : LINE_NM.d;
  const support: MtfSupport = {
    available: true,
    reason: null,
    message: "Simulation of the authored prescription, not a measured production lens.",
    referenceWavelengthNm,
    useResolvedReference: mixed,
    spectralLines:
      options.spectrum === "cdf"
        ? MTF_CDF_LINES.map((line) => ({ ...line }))
        : options.spectrum === "photopic"
          ? MTF_PHOTOPIC_LINES.map((line) => ({ ...line }))
          : [{ wavelengthNm: referenceWavelengthNm, weight: 1 }],
    limitations: [
      "Circular iris; authored clear apertures and glass values may be approximate.",
      "Excludes coatings, manufacturing errors, omitted sensor stacks, polarization and sensor processing.",
      "Numerical convergence does not establish the accuracy of the source prescription.",
    ],
  };
  const reject = (reason: MtfUnavailableReason, message: string): MtfSupport => ({
    ...support,
    available: false,
    reason,
    message,
  });
  if (
    lens.flags.isFoldedOptics ||
    lens.source.projection?.kind?.startsWith("fisheye") ||
    state.surfaces.some((s) => s.diffractive || (s.innerSd ?? 0) > 0 || s.interaction.type !== "refract")
  )
    return reject("unsupported-path", "MTF currently supports centered, sequential refractive prescriptions.");
  if (options.movementActive) return reject("active-movement", "MTF is unavailable while tilt or shift is active.");
  if (
    Math.abs(state.imagePlane.normal[0]) > 1e-10 ||
    Math.abs(state.imagePlane.normal[1]) > 1e-10 ||
    state.imagePlane.normal[2] <= 0
  )
    return reject("unsupported-path", "MTF requires an image plane perpendicular to the optical axis.");
  if (state.focusT !== 0) {
    const conjugate = mtfFiniteConjugate(state);
    if (!conjugate || !mtfFiniteObjectPoint(state, conjugate, 0))
      return reject(
        "finite-conjugate-unavailable",
        "Finite MTF requires an explicitly documented focus/zoom station and object-distance convention. Use infinity or a documented station; interpolated focus states are unavailable.",
      );
    support.conjugate = conjugate;
    support.limitations.push(
      "Finite source is an isotropic point; field angles are measured from the first surface vertex.",
    );
  }
  const fields = options.fieldFractions ?? MTF_FIELDS;
  const frequencies = options.frequenciesPerMm ?? MTF_FREQUENCIES;
  if (
    !Number.isFinite(options.pupilSemiDiameterMm) ||
    options.pupilSemiDiameterMm <= 0 ||
    !Number.isFinite(options.stopSemiDiameterMm) ||
    options.stopSemiDiameterMm <= 0 ||
    !fields.length ||
    fields.length > MTF_MAX_FIELDS ||
    fields.some((f) => !Number.isFinite(f) || f < 0 || f > 1) ||
    !frequencies.length ||
    frequencies.length > MTF_MAX_FREQUENCIES ||
    frequencies.some((f) => !Number.isFinite(f) || f < 0 || f > MTF_MAX_FREQUENCY_LPMM) ||
    !MTF_GRID_CAPS.includes(options.maxGridSize ?? MTF_DEFAULT_GRID_CAP)
  )
    return reject("invalid-input", "MTF requires finite physical apertures, fields and image-space frequencies.");
  // Untyped callers (audit scripts) must name the plane too: no silent default exists.
  if (!MTF_FOCUS_MODES.includes(options.focus))
    return reject("invalid-input", "MTF requires an explicit image-plane focus mode.");
  // Untyped callers can still pass a retired method name, which would otherwise compute as geometric.
  if (options.method !== "geometric" && options.method !== "diffraction")
    return reject("invalid-input", "MTF method must be geometric or diffraction.");
  const scale = mtfPrescriptionScale(lens.source);
  if (scale && (scale.designMm / scale.marketingMm < 0.5 || scale.designMm / scale.marketingMm > 2)) {
    return reject("unverified-scale", "Prescription scale needs verification before reporting lp/mm.");
  }
  if (mtfScaleNeedsNote(scale)) {
    support.limitations.push(
      `The prescription focal length (${scale.designMm.toFixed(1)} mm) differs from the marketed ${scale.marketingMm} mm by ${Math.round(
        scale.fraction * 100,
      )} %; lp/mm are reported at the prescription's scale.`,
    );
  }
  if (mixed && lens.dispersion.some((s) => s.quality !== "air" && s.quality !== "sellmeier")) {
    return reject("mixed-reference", "Mixed d/e indices need physical wavelength data for every glass.");
  }
  if (mixed)
    support.limitations.push(
      "Mixed d/e references are converted to the d line with compatible catalog dispersion, anchored to each authored index.",
    );
  if (options.spectrum !== "reference") {
    const label = MTF_SPECTRUM_LABELS[options.spectrum];
    const spectral = assessMtfSpectralData(state);
    if (spectral.blocker)
      return reject(
        "spectral-data-unavailable",
        `${label} MTF is unavailable because ${spectral.blocker}. Reference-wavelength MTF remains available.`,
      );
    support.referenceWavelengthNm = support.spectralLines[0].wavelengthNm;
    support.useResolvedReference = true;
    support.limitations.push(
      options.spectrum === "cdf"
        ? "Three-line C/d/F estimate with equal incident intensity weights, one image plane and preserved lateral color; not a broadband camera response."
        : "Five-line photopic estimate (470-650 nm, CIE 1924 V(λ) weights on an equal-energy source) with one image plane and preserved lateral color; not a specific camera's spectral response.",
    );
    if (lens.dispersion.some((s) => s.quality === "sellmeier"))
      support.limitations.push(
        "Compatible catalog glasses supply spectral proxies anchored to the authored indices, not proof of production glass identity or MTF accuracy.",
      );
    if (spectral.estimatedGlasses > 0)
      support.limitations.push(
        `${spectral.estimatedGlasses === 1 ? "One glass has only nd and νd; its" : `${spectral.estimatedGlasses} glasses have only nd and νd; their`} dispersion is estimated from normal-line partial dispersions, which keeps primary color exact but approximates secondary spectrum.`,
      );
  }
  if (options.method === "geometric")
    support.limitations.push(
      "Geometric MTF excludes diffraction and can overstate contrast for well-corrected lenses near the diffraction limit.",
    );
  if (options.method === "diffraction")
    support.limitations.push(
      "Diffraction-corrected MTF is computed from the traced rays: the pupil is sheared against itself and each overlap takes its phase from where the rays land. It includes the diffraction of the lens's actual aperture; it is a scalar estimate, without polarization or coating effects.",
    );
  return support;
}
