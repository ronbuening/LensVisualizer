/** Explicit inputs and serializable outputs for simulated, image-space lens MTF. */
import type { FiniteConjugate } from "./optics.js";
/**
 * `geometric` sums ray landings; `geometric-dl` multiplies each wavelength's geometric OTF by the
 * diffraction limit of the traced exit pupil; `diffraction` is the strict scalar pupil autocorrelation.
 */
export type MtfMethod = "geometric" | "geometric-dl" | "diffraction";
export type MtfSpectrum = "reference" | "cdf" | "photopic";
/** `design` keeps the authored image plane; `best-axial` moves it to the axial best focus for every field. */
export type MtfFocusMode = "design" | "best-axial";
/** Largest pupil grid side a request may refine to; refinement always starts coarser. */
export type MtfGridCap = 32 | 64 | 128 | 256;
export type MtfUnavailableReason =
  | "unsupported-path"
  | "active-movement"
  | "finite-conjugate-unavailable"
  | "invalid-input"
  | "unverified-scale"
  | "mixed-reference"
  | "spectral-data-unavailable"
  | "method-unavailable"
  | "chief-ray-failed"
  | "trace-failed"
  | "empty-pupil"
  | "vignetted"
  | "outside-modeled-field"
  | "diffraction-domain";

export interface MtfOptions {
  method: MtfMethod;
  spectrum: MtfSpectrum;
  pupilSemiDiameterMm: number;
  stopSemiDiameterMm: number;
  movementActive?: boolean;
  /** Fractions of the reference image height (`MtfFieldGeometry.referenceHeightMm`), 0 to 1. */
  fieldFractions?: readonly number[];
  frequenciesPerMm?: readonly number[];
  /** Largest pupil grid side; refinement starts at 16 (32 for diffraction) and never exceeds 256. */
  maxGridSize?: MtfGridCap;
  /** Image plane for every field; defaults to the authored design plane. */
  focus?: MtfFocusMode;
}

/** One sampled wavelength and its incident (pre-throughput) intensity weight. */
export interface MtfSpectralLine {
  wavelengthNm: number;
  weight: number;
}

export interface MtfSupport {
  available: boolean;
  reason: MtfUnavailableReason | null;
  message: string;
  referenceWavelengthNm: number;
  /**
   * Trace with anchored per-wavelength indices instead of the authored reference indices:
   * true for spectral runs and for mixed d/e references that need physical conversion.
   */
  useResolvedReference: boolean;
  /** Incident intensity weights, reference line first; throughput is applied before normalizing the OTF. */
  spectralLines: MtfSpectralLine[];
  conjugate?: FiniteConjugate;
  limitations: string[];
}

/** Image-height axis shared by every field of one result. */
export interface MtfFieldGeometry {
  /** Height of the 100 % field in mm: the declared format-corner radius, else the modelled edge. */
  referenceHeightMm: number;
  /** Largest height whose chief ray passes every authored clear aperture, capped at the reference. */
  modeledEdgeHeightMm: number;
  /** Chief-ray field angle at the modelled edge, in degrees. */
  modeledEdgeAngleDeg: number;
  basis: "format-corner" | "modeled-edge";
}

/** Image plane used for the result, with the axial best-focus diagnostic. */
export interface MtfFocus {
  mode: MtfFocusMode;
  /** Plane shift from the authored image plane applied to every field, in mm (positive away from the lens). */
  appliedShiftMm: number;
  /** Axial best-focus shift from the authored plane; null when the axial bundle could not be scored. */
  bestAxialShiftMm: number | null;
  /** Mean axial geometric MTF over the focus-scoring frequencies at the authored plane and at best focus. */
  designScore: number | null;
  bestScore: number | null;
}

export type MtfFieldStatus = "converged" | "unconverged" | "unavailable" | "pending";

export interface MtfFieldResult {
  fieldFraction: number;
  /** Requested radial image height in mm; null when no field axis could be established. */
  targetImageHeightMm: number | null;
  /** Chief-ray field angle that reaches the target, in degrees. */
  fieldAngleDeg: number | null;
  /** Radial chief-ray landing height on the analysed image plane, in mm. */
  imageHeightMm: number | null;
  sagittal: number[];
  tangential: number[];
  status: MtfFieldStatus;
  reason: MtfUnavailableReason | null;
  message: string;
  /** Qualifications that keep a result usable, e.g. edge rays the tracer could not resolve. */
  notes: string[];
  /** Launch cells across the transmitted beam's larger dimension. */
  gridSize: number;
  validRays: number;
  blockedRays: number;
  failedRays: number;
  /** Share of launch flux carried by unresolved rays; the geometric OTF error is at most twice this. */
  unknownFluxFraction: number;
  /** Largest change between the last two grids at or below the convergence band. */
  maxDelta: number | null;
  /** Highest reported frequency through which every change stays within tolerance. */
  convergedThroughLpMm: number | null;
}

export interface MtfResult {
  method: MtfMethod;
  spectrum: MtfSpectrum;
  support: MtfSupport;
  frequenciesPerMm: number[];
  fields: MtfFieldResult[];
  geometry: MtfFieldGeometry | null;
  focus: MtfFocus | null;
}
