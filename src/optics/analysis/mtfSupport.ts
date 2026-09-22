/** MTF capability checks are per optical state, not per-lens rollout flags. */
import type { MtfOptions, MtfSupport, MtfUnavailableReason } from "../../types/mtf.js";
import { LINE_NM } from "../spectralLines.js";
import type { PreparedOpticalState } from "../types.js";

export const MTF_FREQUENCIES = Object.freeze(Array.from({ length: 51 }, (_, i) => i * 2));
export const MTF_FIELDS = Object.freeze([0, 0.25, 0.5, 0.75, 1]);
export const MTF_CONVERGENCE_TOLERANCE = 0.01;

export function assessMtfSupport(state: PreparedOpticalState, options: MtfOptions): MtfSupport {
  const { lens } = state;
  const media = lens.source.elements.filter((e) => state.surfaces.some((s) => s.nd !== 1 && s.elemId === e.id));
  const references = new Set(media.map((e) => e.indexReference ?? "d"));
  const mixed = references.size > 1;
  const support: MtfSupport = {
    available: true,
    reason: null,
    message: "Simulation of the authored prescription, not a measured production lens.",
    referenceWavelengthNm: references.size === 1 && references.has("e") ? LINE_NM.e : LINE_NM.d,
    useResolvedReference: mixed,
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
  if (state.focusT !== 0) return reject("finite-conjugate-unavailable", "MTF currently requires infinity focus.");
  const fields = options.fieldFractions ?? MTF_FIELDS;
  const frequencies = options.frequenciesPerMm ?? MTF_FREQUENCIES;
  if (
    !Number.isFinite(options.pupilSemiDiameterMm) ||
    options.pupilSemiDiameterMm <= 0 ||
    !Number.isFinite(options.stopSemiDiameterMm) ||
    options.stopSemiDiameterMm <= 0 ||
    !fields.length ||
    fields.length > 33 ||
    fields.some((f) => !Number.isFinite(f) || f < 0 || f > 1) ||
    !frequencies.length ||
    frequencies.length > 501 ||
    frequencies.some((f) => !Number.isFinite(f) || f < 0 || f > 1000) ||
    ![32, 64, 128, 256].includes(options.maxGridSize ?? 128)
  )
    return reject("invalid-input", "MTF requires finite physical apertures, fields and image-space frequencies.");
  const first = (value: number | readonly number[] | undefined) => (Array.isArray(value) ? value[0] : value);
  const design = first(lens.source.focalLengthDesign) as number | undefined;
  const marketing = first(lens.source.focalLengthMarketing) as number | undefined;
  if (design && marketing && (design / marketing < 0.5 || design / marketing > 2)) {
    return reject("unverified-scale", "Prescription scale needs verification before reporting lp/mm.");
  }
  if (mixed && lens.dispersion.some((s) => s.quality !== "air" && s.quality !== "sellmeier")) {
    return reject("mixed-reference", "Mixed d/e indices need physical wavelength data for every glass.");
  }
  if (mixed) support.limitations.push("Reference indices use compatible catalog dispersion at the d line.");
  if (options.spectrum !== "reference")
    return reject("spectral-data-unavailable", "Spectral MTF is not available yet.");
  if (options.method === "diffraction")
    support.limitations.push(
      "Scalar FFT: image-ray incidence ≤15°, direction-cosine pupil radius ≤0.25, blur ≤2% of reference radius; other states are unavailable.",
    );
  return support;
}
