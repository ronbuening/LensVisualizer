/** Explicit inputs and serializable outputs for simulated, image-space lens MTF. */
export type MtfMethod = "geometric" | "diffraction";
export type MtfSpectrum = "reference" | "cdf";
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
  /** Largest pupil grid side; refinement starts at 16 and never exceeds 256. */
  maxGridSize?: 32 | 64 | 128 | 256;
}

export interface MtfSupport {
  available: boolean;
  reason: MtfUnavailableReason | null;
  message: string;
  referenceWavelengthNm: number;
  /** Mixed-reference models require physical d-line dispersion lookups. */
  useResolvedReference: boolean;
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
  gridSize: number;
  validRays: number;
  blockedRays: number;
  failedRays: number;
  maxDelta: number | null;
}

export interface MtfResult {
  method: MtfMethod;
  spectrum: MtfSpectrum;
  support: MtfSupport;
  frequenciesPerMm: number[];
  fields: MtfFieldResult[];
}
