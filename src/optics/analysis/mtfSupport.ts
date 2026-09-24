/** MTF capability checks are per optical state, not per-lens rollout flags. */
import type { MtfOptions, MtfSpectralLine, MtfSupport, MtfUnavailableReason } from "../../types/mtf.js";
import { LINE_NM } from "../spectralLines.js";
import type { PreparedOpticalState } from "../types.js";
import { mtfFiniteConjugate, mtfFiniteObjectPoint } from "./mtfConjugates.js";
import {
  MTF_DEFAULT_GRID_CAP,
  MTF_DIFFRACTION_LIMITS,
  MTF_FIELDS,
  MTF_FREQUENCIES,
  MTF_GRID_CAPS,
  MTF_MAX_FIELDS,
  MTF_MAX_FREQUENCIES,
  MTF_MAX_FREQUENCY_LPMM,
} from "./mtfConstants.js";

export { MTF_FIELDS, MTF_FREQUENCIES } from "./mtfConstants.js";

/** Equal-weight C/d/F estimate; the reference d line comes first and anchors lateral colour. */
export const MTF_CDF_LINES: readonly MtfSpectralLine[] = Object.freeze([
  { wavelengthNm: LINE_NM.d, weight: 1 / 3 },
  { wavelengthNm: LINE_NM.C, weight: 1 / 3 },
  { wavelengthNm: LINE_NM.F, weight: 1 / 3 },
]);

/** Prescription focal length may differ from the marketed value by this share before results are qualified. */
const SCALE_NOTE_FRACTION = 0.1;

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
      "Finite source is an isotropic point; field angles are measured from the first surface vertex. No refocus is applied.",
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
  const first = (value: number | readonly number[] | undefined) => (Array.isArray(value) ? value[0] : value);
  const design = first(lens.source.focalLengthDesign) as number | undefined;
  const marketing = first(lens.source.focalLengthMarketing) as number | undefined;
  if (design && marketing && (design / marketing < 0.5 || design / marketing > 2)) {
    return reject("unverified-scale", "Prescription scale needs verification before reporting lp/mm.");
  }
  if (design && marketing && Math.abs(design / marketing - 1) > SCALE_NOTE_FRACTION) {
    support.limitations.push(
      `The prescription focal length (${design.toFixed(1)} mm) differs from the marketed ${marketing} mm by ${Math.round(
        Math.abs(design / marketing - 1) * 100,
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
  if (options.spectrum === "cdf") {
    const unsupported = lens.dispersion.some((s, i) => {
      if (s.quality === "air" || s.quality === "sellmeier") return false;
      const element = media.find((e) => e.id === state.surfaces[i].elemId);
      return s.quality !== "lineIndices" || element?.indexReference === "e";
    });
    if (unsupported)
      return reject(
        "spectral-data-unavailable",
        "C/d/F requires physical C, d and F indices for every glass. Reference-wavelength MTF remains available.",
      );
    support.referenceWavelengthNm = LINE_NM.d;
    support.useResolvedReference = true;
    support.limitations.push(
      "Three-line C/d/F estimate with equal incident intensity weights, one image plane and preserved lateral color; not a broadband camera response.",
    );
    if (lens.dispersion.some((s) => s.quality === "sellmeier"))
      support.limitations.push(
        "Compatible catalog glasses supply spectral proxies anchored to the authored indices, not proof of production glass identity or MTF accuracy.",
      );
  }
  if (options.method === "diffraction") {
    const limits = MTF_DIFFRACTION_LIMITS;
    support.limitations.push(
      `Scalar FFT: image-ray incidence ≤${limits.maxChiefIncidenceDeg}°, direction-cosine pupil radius ≤${limits.maxConeDirectionCosine}, blur ≤${Math.round(
        limits.maxBlurToReferenceRadius * 100,
      )}% of reference radius; other states are unavailable.`,
    );
  }
  return support;
}
