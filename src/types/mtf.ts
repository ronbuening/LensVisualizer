/** Explicit inputs and serializable outputs for simulated, image-space lens MTF. */
import type { FiniteConjugate } from "./optics.js";
/**
 * `geometric` sums ray landings; `diffraction` shears the traced pupil against itself and weights each overlap by the
 * rays' landing errors, which adds the diffraction of the actual aperture.
 */
export type MtfMethod = "geometric" | "diffraction";
export type MtfSpectrum = "reference" | "cdf" | "photopic";
/**
 * `auto` keeps the authored image plane unless it is inconsistent with the prescription's own paraxial focus, then
 * uses best axial focus; `design` and `best-axial` always apply their plane.
 */
export type MtfFocusMode = "auto" | "design" | "best-axial";
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
  | "outside-modeled-field";

export interface MtfOptions {
  method: MtfMethod;
  spectrum: MtfSpectrum;
  pupilSemiDiameterMm: number;
  stopSemiDiameterMm: number;
  movementActive?: boolean;
  /** Fractions of the reference image height (`MtfFieldGeometry.referenceHeightMm`), 0 to 1. */
  fieldFractions?: readonly number[];
  frequenciesPerMm?: readonly number[];
  /** Largest pupil grid side; refinement starts at 16 and never exceeds 256. */
  maxGridSize?: MtfGridCap;
  /** Image plane for every field. Required: the engine has no default, so scripts and the tab cannot disagree. */
  focus: MtfFocusMode;
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
  /** Height of the 100 % field in mm: the declared format-corner radius, else the modeled edge. */
  referenceHeightMm: number;
  /**
   * Largest charted height, capped at the reference: where the chief ray passes every authored clear aperture,
   * extended toward a declared format corner for as long as any of the beam still reaches the image.
   */
  modeledEdgeHeightMm: number;
  /** Chief-ray field angle at the modeled edge, in degrees; its chief reaches `modeledEdgeHeightMm`. */
  modeledEdgeAngleDeg: number;
  /** Largest height whose chief ray itself passes every clear aperture, capped at the reference; never past the edge. */
  chiefEdgeHeightMm: number;
  /** Chief-ray field angle at `chiefEdgeHeightMm`, in degrees. */
  chiefEdgeAngleDeg: number;
  basis: "format-corner" | "modeled-edge";
}

/** Image plane used for the result, with the axial best-focus diagnostic. */
export interface MtfFocus {
  requestedMode: MtfFocusMode;
  /** Plane actually applied to every field. */
  mode: Exclude<MtfFocusMode, "auto">;
  /** Plane shift from the authored image plane applied to every field, in mm (positive away from the lens). */
  appliedShiftMm: number;
  /** Axial best-focus shift from the authored plane; null when the axial bundle could not be scored. */
  bestAxialShiftMm: number | null;
  /** Mean axial geometric MTF over the focus-scoring frequencies at the authored plane and at best focus. */
  designScore: number | null;
  bestScore: number | null;
  /** Prescription paraxial focus minus the authored image plane, in mm; null for finite conjugates. */
  imagePlaneOffsetMm: number | null;
  /** True when that offset exceeds `MTF_IMAGE_PLANE_DEPTHS` depths of focus. */
  imagePlaneInconsistent: boolean;
}

/**
 * Aperture the axial beam actually traces at, as opposed to the f-number on the label. Authored clear apertures can
 * limit the axial beam before the iris does, and a stopped-down iris is scaled from the wide-open one.
 */
export interface MtfAperture {
  /**
   * F-number of the transmitted axial beam: its rim height times the near-axis slope n′ sin U′ per launch height.
   * At infinity this is f / (2 × pupil radius); at a finite conjugate it is the paraxial working f-number.
   */
  tracedFNumber: number;
  /** Label of the surface that stops the next ray outward; null when that surface is the iris. */
  limitingSurfaceLabel: string | null;
}

/** What a lens's data lacks for the chart on screen; see `assessMtfDataLimitations`. */
export type MtfDataLimitationKind =
  | "reference-only"
  | "estimated-dispersion"
  | "image-plane"
  | "short-field"
  | "scale"
  | "source-erratum"
  | "source-inconsistent";

/** One data gap or note, worded for the reader of the chart it qualifies. */
export interface MtfDataLimitation {
  kind: MtfDataLimitationKind;
  text: string;
  /** True when the chart stays behind the warning until the reader dismisses it; false for a note beside it. */
  blocking: boolean;
}

export type MtfFieldStatus = "converged" | "unconverged" | "unavailable" | "pending";

export interface MtfFieldResult {
  fieldFraction: number;
  /** Requested radial image height in mm; null when no field axis could be established. */
  targetImageHeightMm: number | null;
  /** Chief-ray field angle that reaches the target, in degrees. */
  fieldAngleDeg: number | null;
  /** Radial chief-ray landing height on the analyzed image plane, in mm. */
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
  /**
   * Response the same traced pupil would give with no aberration, per frequency and weighted across the spectrum
   * like the curves; null for geometric MTF, which has no diffraction limit.
   */
  diffractionLimit: { sagittal: number[]; tangential: number[] } | null;
}

export interface MtfResult {
  method: MtfMethod;
  spectrum: MtfSpectrum;
  support: MtfSupport;
  frequenciesPerMm: number[];
  fields: MtfFieldResult[];
  geometry: MtfFieldGeometry | null;
  focus: MtfFocus | null;
  /** Traced axial aperture; null when the request is unsupported or no axial rim ray can be found. */
  aperture: MtfAperture | null;
}
