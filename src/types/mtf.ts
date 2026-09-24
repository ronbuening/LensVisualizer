/** Explicit inputs and serializable outputs for simulated, image-space lens MTF. */
import type { FiniteConjugate } from "./optics.js";
export type MtfMethod = "geometric" | "diffraction";
export type MtfSpectrum = "reference" | "cdf";
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
  | "diffraction-domain";

export interface MtfOptions {
  method: MtfMethod;
  spectrum: MtfSpectrum;
  pupilSemiDiameterMm: number;
  stopSemiDiameterMm: number;
  movementActive?: boolean;
  fieldFractions?: readonly number[];
  frequenciesPerMm?: readonly number[];
  /** Largest pupil grid side; refinement starts at 16 (32 for diffraction) and never exceeds 256. */
  maxGridSize?: MtfGridCap;
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
  /** Incident intensity weights; transmitted throughput is applied separately before normalizing the OTF. */
  spectralLines: MtfSpectralLine[];
  conjugate?: FiniteConjugate;
  limitations: string[];
}

export interface MtfFieldResult {
  fieldFraction: number;
  imageHeightMm: number | null;
  sagittal: number[];
  tangential: number[];
  status: "converged" | "unconverged" | "unavailable";
  reason: MtfUnavailableReason | null;
  message: string;
  /** Qualifications that keep a result usable, e.g. edge rays the tracer could not resolve. */
  notes: string[];
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
}
