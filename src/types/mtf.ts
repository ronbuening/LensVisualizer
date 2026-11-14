/** Explicit inputs and serializable outputs for simulated, image-space lens MTF. */
import type { FiniteConjugate } from "./optics.js";

/** One aperture or zoom station in a UI sweep; null reserves a pending point. */
export interface MtfSweepSample {
  fNumber: number;
  focalLengthMm?: number;
  zoomT?: number;
  edgeOverview?: boolean;
  limitations?: readonly string[];
  result: MtfResult | null;
}

/** Aperture-only callers share the sweep sample contract. */
export type MtfApertureSample = MtfSweepSample;

/**
 * `geometric` sums ray landings; `diffraction` shears the traced pupil against itself and weights each overlap by the
 * rays' landing errors, which adds the diffraction of the actual aperture.
 */
export type MtfMethod = "geometric" | "diffraction";
export type MtfSpectrum = "reference" | "cdf" | "photopic" | "single";
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
  | "aim-failed"
  | "trace-failed"
  | "empty-pupil"
  | "vignetted"
  | "outside-modeled-field";

/** Shared spectral interval covered by every supported glass tier (g through C), in nm. */
export const MTF_MIN_WAVELENGTH_NM = 435.8;
export const MTF_MAX_WAVELENGTH_NM = 656.3;

/** A single-line request must carry its physical wavelength through storage and worker transport. */
type MtfSpectrumOptions =
  | { spectrum: "single"; wavelengthNm: number }
  | { spectrum: Exclude<MtfSpectrum, "single">; wavelengthNm?: number };

/** Missing prerequisites within the unsupported-path refusal. */
export type MtfUnsupportedPathReason =
  | "fisheye-projection"
  | "folded-path"
  | "annular-aperture"
  | "diffractive-surface"
  | "blocking-surface"
  | "tilted-image-plane"
  | "non-forward-image-plane";

/** Method-specific settings; physical aperture comes from AnalysisRequest. */
export type MtfRequestOptions = Omit<
  MtfOptions,
  "pupilSemiDiameterMm" | "stopSemiDiameterMm" | "spectrum" | "wavelengthNm"
> &
  MtfSpectrumOptions;

/** Resolved inputs used by the MTF kernels and the serializable worker protocol. */
export type MtfOptions = MtfCommonOptions & MtfSpectrumOptions;

interface MtfCommonOptions {
  method: MtfMethod;
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
  /** Explicit shift from the authored plane, in mm; overrides focus selection but keeps its diagnostic. */
  heldFocusShiftMm?: number;
}

/** One sampled wavelength and its incident (pre-throughput) intensity weight. */
export interface MtfSpectralLine {
  wavelengthNm: number;
  weight: number;
}

export interface MtfSupport {
  available: boolean;
  reason: MtfUnavailableReason | null;
  /** All applicable unsupported-path prerequisites in stable display order; absent for other results. */
  pathReasons?: readonly MtfUnsupportedPathReason[];
  message: string;
  referenceWavelengthNm: number;
  /**
   * Trace with anchored per-wavelength indices instead of the authored reference indices:
   * true for spectral runs and for mixed d/e references that need physical conversion.
   */
  useResolvedReference: boolean;
  /** Actual wavelengths used, reference line first; incident weights precede throughput normalization. */
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
  mode: Exclude<MtfFocusMode, "auto"> | "held";
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
 * The clear aperture that vignettes the chart's axial marginal ray. The same trace supplies the working f-number;
 * the chart header names a clip beside the marked f-number.
 */
export interface MtfAxialVignetting {
  /** Label of the surface that stops the marginal ray. */
  surfaceLabel: string;
  /** True when the ray is stopped before it reaches the stop. */
  beforeStop: boolean;
}

/** What a lens's data lacks for the chart on screen; see `assessMtfDataLimitations`. */
export type MtfDataLimitationKind =
  | "reference-only"
  | "estimated-dispersion"
  | "image-plane"
  | "short-field"
  | "scale"
  | "incomplete-prescription"
  | "estimated-apertures"
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
  /** Qualifications that keep a result usable, e.g. pupil samples that could not be aimed or traced. */
  notes: string[];
  /**
   * Where the pupil is sampled: `stop`, positions evenly spaced on the real aperture stop (OpticStudio with ray aiming,
   * CODE V); `launch-plane`, equal cells on the launch plane, kept for a field launched from the bounding sphere.
   */
  pupilSampling: "stop" | "launch-plane";
  /** Cells across the stop's diameter (across the beam's larger dimension on the launch plane). */
  gridSize: number;
  validRays: number;
  blockedRays: number;
  /** Aimed samples whose full trace failed or never reached the image plane. */
  failedRays: number;
  /** Stop samples no ray could be aimed at. */
  unaimedRays: number;
  /** Unaimed or failed samples beside the transmitted beam (the row or column neighbour of a transmitted cell). */
  unresolvedInBeamRays: number;
  /**
   * Share of the beam's flux carried by the unaimed and failed samples beside it, which the field is judged by; the
   * normalized geometric OTF error is at most twice this. The diffraction estimate does not account for this flux
   * and has no established error bound for its omission. Samples that touch no transmitted cell are counted but
   * not in it.
   */
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
  /** Physical object used by the chart; null for an unsupported request. Distances use the authored station's reference. */
  conjugate:
    | { kind: "infinity" }
    | { kind: "finite"; objectDistanceMm: number; distanceReference: FiniteConjugate["distanceReference"] }
    | null;
  /** 1 / (2 n′ sin θ′) of the real axial stop-rim ray at the first spectral line; null when it cannot pass or trace. */
  workingFNumber: number | null;
  /** Signed on-axis chief image height / small object height on the applied image plane; null at infinity or on failure. */
  magnification: number | null;
  /** Where the axial marginal ray is vignetted; null when it is not, or when the request is unsupported. */
  axialVignetting: MtfAxialVignetting | null;
}
