/** MTF capability checks are per optical state, not per-lens rollout flags. */
import type {
  MtfOptions,
  MtfRequestOptions,
  MtfSpectralLine,
  MtfSpectrum,
  MtfSupport,
  MtfUnavailableReason,
  MtfUnsupportedPathReason,
} from "../../../types/mtf.js";
import { MTF_MIN_WAVELENGTH_NM, MTF_MAX_WAVELENGTH_NM } from "../../../types/mtf.js";
import type { AnalysisRequest } from "../request.js";
import { measuredLineAbbe } from "../../chromatic/materialResolver.js";
import { LINE_NM } from "../../chromatic/spectralLines.js";
import type { PreparedGeometry } from "../../types.js";
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
 * Nine-point Gauss-Legendre quadrature of CIE 1924 V(λ) on an equal-energy source,
 * 470-650 nm: λ = 560 + 90x, weight = 90w V(λ), for abscissa x and weight w on [-1, 1].
 * V(λ) is linearly interpolated from the 5 nm table (DOI 10.25039/CIE.DS.dktna2s3).
 * Weights use unrounded nodes; wavelengths round to 0.01 nm and weights to five significant figures.
 * The centre comes first to anchor lateral color and field launch at 560 nm.
 */
export const MTF_PHOTOPIC_LINES: readonly MtfSpectralLine[] = Object.freeze([
  { wavelengthNm: 560, weight: 29.573 },
  { wavelengthNm: 530.82, weight: 24.475 },
  { wavelengthNm: 589.18, weight: 21.553 },
  { wavelengthNm: 504.8, weight: 9.4728 },
  { wavelengthNm: 615.2, weight: 10.291 },
  { wavelengthNm: 484.76, weight: 2.7286 },
  { wavelengthNm: 635.24, weight: 3.4949 },
  { wavelengthNm: 472.87, weight: 0.75613 },
  { wavelengthNm: 647.13, weight: 0.91347 },
]);

/** Prescription focal length may differ from the marketed value by this share before results are qualified. */
const SCALE_NOTE_FRACTION = 0.1;

const UNSUPPORTED_PATH_MESSAGES: Record<MtfUnsupportedPathReason, string> = {
  "fisheye-projection":
    "MTF is unavailable for fisheye projections; the field axis needs a projection mapping rather than image height along one meridian.",
  "folded-path":
    "MTF is unavailable for folded or mirror paths; diffraction needs optical-path lengths through the reflections.",
  "annular-aperture":
    "MTF is unavailable for annular apertures; diffraction needs optical-path differences across the central obstruction.",
  "diffractive-surface":
    "MTF is unavailable for diffractive surfaces; spectral results need a model of the wavelength-dependent diffraction order.",
  "blocking-surface": "MTF is unavailable for blocking surfaces; the pupil model assumes a sequential refractive path.",
  "tilted-image-plane":
    "MTF requires an image plane perpendicular to the optical axis; tilted-plane direction cosines are not modeled.",
  "non-forward-image-plane":
    "MTF requires a forward-facing image plane; the image-space direction-cosine model assumes a positive axial normal.",
};

export const MTF_SPECTRUM_LABELS: Record<MtfSpectrum, string> = {
  reference: "Reference-wavelength",
  single: "Single-wavelength",
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
 * Compare the prescription's focal length with the marketed one at the charted zoom position.
 * Arrays list wide/tele endpoints or one value per evenly spaced authored station.
 * Between listed positions, use the nearer endpoint/station, with ties going wider:
 * no marketed focal length is authored between them, so it must not be interpolated.
 *
 * @param source - lens data carrying `focalLengthDesign` and `focalLengthMarketing`
 * @param zoomT - normalized zoom position, 0 = wide and 1 = tele; scalars are unchanged
 * @returns the two lengths and their relative difference, or null when either is missing
 */
export function mtfPrescriptionScale(
  source: {
    focalLengthDesign?: number | readonly number[];
    focalLengthMarketing?: number | readonly number[];
  },
  zoomT: number,
): MtfScaleDifference | null {
  const nearest = (value: number | readonly number[] | undefined): number | undefined => {
    if (typeof value === "number" || value === undefined) return value;
    const index = Math.max(0, Math.min(value.length - 1, Math.ceil(zoomT * (value.length - 1) - 0.5)));
    return value[index];
  };
  const designMm = nearest(source.focalLengthDesign);
  const marketingMm = nearest(source.focalLengthMarketing);
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
  /** Glasses using any normal-line estimate, including missing g in a measured table. */
  estimatedGlasses: number;
  /** Ids of the elements those glasses belong to, in surface order. */
  estimatedElementIds: number[];
  /** Elements with measured red/blue indices but an estimated g index. */
  partialLineElementIds: number[];
  partialLineGlasses: number;
}

/** One element that cannot supply spectral MTF indices, in first-surface order. */
export interface MtfSpectralBlocker {
  elementId: number;
  class: "high-vd-no-partial" | "e-line-no-catalog" | "no-abbe" | "unusable-measured-span";
  /** Completes "…because …" in the spectrum fallback message. */
  message: string;
  /** Indices of glass-bearing surfaces, including hidden rear plates and embedded stops. */
  surfaceIndices: number[];
}

/**
 * Collect every blocking element using the spectral gate's per-glass precedence.
 * Counts refer to surfaces whose following medium is glass, rather than both faces of each element.
 *
 * @param state - prepared optical state, including generated rear plates
 * @returns all blocking elements in surface order, each with its glass-bearing surface indices
 */
export function collectMtfSpectralBlockers(state: PreparedGeometry): MtfSpectralBlocker[] {
  const { lens } = state;
  const blockers = new Map<number, MtfSpectralBlocker>();
  for (const [i, dispersion] of lens.dispersion.entries()) {
    if (dispersion.quality === "air" || dispersion.quality === "sellmeier") continue;
    const surface = state.surfaces[i];
    const element = lens.elements.find((e) => e.id === surface.elemId)?.source;
    let blocker: Pick<MtfSpectralBlocker, "class" | "message">;
    if (dispersion.quality === "constant") blocker = { class: "no-abbe", message: "a glass has no Abbe number" };
    else if (element?.indexReference === "e")
      blocker = { class: "e-line-no-catalog", message: "an e-line glass has no catalog dispersion data" };
    else {
      const missingG = dispersion.quality === "lineIndices" && element?.ng === undefined;
      if (dispersion.quality !== "abbe" && !missingG) continue;
      const vd = missingG
        ? measuredLineAbbe(surface.nd, dispersion.indexAt("R"), dispersion.indexAt("B"))
        : (element?.vd ?? lens.indices.vdByIdx[i] ?? 0);
      if (!Number.isFinite(vd) || vd <= 0)
        blocker = { class: "unusable-measured-span", message: "a glass has no usable measured dispersion span" };
      else if (vd > MTF_ESTIMATED_DISPERSION_MAX_VD && element?.dPgF === undefined)
        blocker = {
          class: "high-vd-no-partial",
          message: `a low-dispersion glass (ν${element?.indexReference ?? "d"} ${vd.toFixed(1)}) has no partial-dispersion data`,
        };
      else continue;
    }
    const elementId = surface.elemId ?? -1 - i;
    const existing = blockers.get(elementId);
    if (existing) existing.surfaceIndices.push(i);
    else blockers.set(elementId, { elementId, ...blocker, surfaceIndices: [i] });
  }
  return [...blockers.values()];
}

/**
 * Classify the glasses for spectral MTF. Catalog Sellmeier and complete measured line indices supply spectral
 * data; native d/D Abbe-only glasses and missing-g line tables use normal-line estimates. The latter derive
 * their Abbe coordinate from the measured span, independently of a printed Abbe value. Native e-line glasses
 * without catalog data remain unsupported. Estimated glasses above `MTF_ESTIMATED_DISPERSION_MAX_VD` without
 * an authored dPgF block spectral sampling. The same test gates
 * C/d/F and photopic sampling.
 *
 * @param state - prepared optical state
 * @returns the first blocker, and the number of estimated glasses
 */
export function assessMtfSpectralData(state: PreparedGeometry): MtfSpectralData {
  const { lens } = state;
  const estimated = new Set<number>();
  const partial = new Set<number>();
  const firstBlocker = collectMtfSpectralBlockers(state)[0];
  if (firstBlocker)
    return {
      blocker: firstBlocker.message,
      estimatedGlasses: 0,
      estimatedElementIds: [],
      partialLineElementIds: [],
      partialLineGlasses: 0,
    };
  for (const [i, dispersion] of lens.dispersion.entries()) {
    if (dispersion.quality === "air" || dispersion.quality === "sellmeier") continue;
    const surface = state.surfaces[i];
    const element = lens.elements.find((e) => e.id === surface.elemId)?.source;
    const missingG = dispersion.quality === "lineIndices" && element?.ng === undefined;
    if (dispersion.quality !== "abbe" && !missingG) continue;
    if (missingG) partial.add(surface.elemId ?? -1 - i);
    estimated.add(surface.elemId ?? -1 - i);
  }
  return {
    blocker: null,
    estimatedGlasses: estimated.size,
    estimatedElementIds: [...estimated].filter((id) => id >= 0),
    partialLineElementIds: [...partial].filter((id) => id >= 0),
    partialLineGlasses: partial.size,
  };
}

/** Reference coordinates used by estimated glasses, preserving native reference letters. */
export function mtfReferenceCoordinates(state: PreparedGeometry): string {
  const references = [
    ...new Set(
      state.lens.elements
        .filter((e) => state.lens.dispersion.some((d, i) => d.quality === "abbe" && state.surfaces[i].elemId === e.id))
        .map((e) => e.source.indexReference ?? "d"),
    ),
  ];
  return (references.length ? references : ["d"]).map((r) => `n${r} and ν${r}`).join(" / ");
}

/** Native reference coordinate, including the d-line conversion used for mixed references. */
function nativeReference(state: PreparedGeometry): { referenceWavelengthNm: number; mixed: boolean } {
  const { lens } = state;
  const media = lens.elements
    .map((e) => e.source)
    .filter((e) => state.surfaces.some((s) => s.nd !== 1 && s.elemId === e.id));
  const references = new Set(media.map((e) => e.indexReference ?? "d"));
  const mixed = references.size > 1;
  const referenceWavelengthNm = references.size === 1 ? LINE_NM[media[0]?.indexReference ?? "d"] : LINE_NM.d;
  return { referenceWavelengthNm, mixed };
}

/**
 * Whether a selection is equivalent to a reference run, needing no additional spectral glass gate.
 * @param state - prepared optical state
 * @param spectrum - requested spectrum
 * @param wavelengthNm - required for a single-line selection, in nm
 * @returns true for the reference selection or its exact single-wavelength equivalent
 */
export function mtfUsesReferenceIndices(
  state: PreparedGeometry,
  spectrum: MtfSpectrum,
  wavelengthNm?: number,
): boolean {
  return (
    spectrum === "reference" || (spectrum === "single" && wavelengthNm === nativeReference(state).referenceWavelengthNm)
  );
}

/**
 * Resolve a preferred spectrum against the lens's glass data, falling back to the reference line.
 *
 * @param state - prepared optical state
 * @param preferred - requested spectrum
 * @param wavelengthNm - single-line wavelength in nm, when selected
 * @returns spectrum to request, with a user-facing note when it differs or estimates dispersion
 */
export function resolveMtfSpectrum(
  state: PreparedGeometry,
  preferred: MtfSpectrum,
  wavelengthNm?: number,
): MtfSpectrumChoice {
  // Invalid wavelengths reach request validation rather than being hidden by a glass fallback.
  if (
    preferred === "single" &&
    (typeof wavelengthNm !== "number" ||
      !Number.isFinite(wavelengthNm) ||
      wavelengthNm < MTF_MIN_WAVELENGTH_NM ||
      wavelengthNm > MTF_MAX_WAVELENGTH_NM)
  )
    return { spectrum: preferred, note: null };
  if (mtfUsesReferenceIndices(state, preferred, wavelengthNm)) return { spectrum: preferred, note: null };
  const { blocker, estimatedGlasses, partialLineGlasses } = assessMtfSpectralData(state);
  if (!blocker) {
    const glassCount = (n: number) => (n === 1 ? "one glass" : `${n} glasses`);
    const abbeGlasses = estimatedGlasses - partialLineGlasses;
    const partialSource = "measured red/blue indices with an estimated g index";
    const source =
      partialLineGlasses === 0
        ? mtfReferenceCoordinates(state)
        : abbeGlasses === 0
          ? partialSource
          : `${mtfReferenceCoordinates(state)} (${glassCount(abbeGlasses)}) and ${partialSource} (${glassCount(partialLineGlasses)})`;
    return {
      spectrum: preferred,
      note: estimatedGlasses > 0 ? `Dispersion of ${glassCount(estimatedGlasses)} is estimated from ${source}.` : null,
    };
  }
  return {
    spectrum: "reference",
    note: `${MTF_SPECTRUM_LABELS[preferred]} MTF is unavailable because ${blocker}; showing the reference wavelength.`,
  };
}

/** Snapshot request aperture without changing the kernel options or their validation. */
export function resolveMtfOptions(request: AnalysisRequest, options: MtfRequestOptions): MtfOptions {
  return {
    ...options,
    pupilSemiDiameterMm: request.aperture.entrancePupilSemiDiameterMm,
    stopSemiDiameterMm: request.aperture.stopSemiDiameterMm,
    movementActive: request.pose?.active ?? options.movementActive,
  };
}

/**
 * Whether the MTF's pupil launch and footprint model the state's light path: centred, sequential and refractive, with
 * no fisheye projection, diffractive or annular surface, or mirror.
 *
 * @param state - prepared optical state
 * @returns true when `prepareMtfFieldLaunch` and `findMtfFieldFootprint` apply
 */
export function mtfSequentialRefractivePath(state: PreparedGeometry): boolean {
  const { lens } = state;
  return !(
    lens.flags.isFoldedOptics ||
    lens.source.projection?.kind?.startsWith("fisheye") ||
    state.surfaces.some((s) => s.diffractive || (s.innerSd ?? 0) > 0 || s.interaction.type !== "refract")
  );
}

/**
 * Whether the image plane is perpendicular to the optical axis, as image-space direction cosines assume.
 *
 * @param state - prepared optical state
 * @returns true for an axial image plane
 */
export function mtfAxialImagePlane(state: PreparedGeometry): boolean {
  const [x, y, z] = state.imagePlane.normal;
  return !(Math.abs(x) > 1e-10 || Math.abs(y) > 1e-10 || z <= 0);
}

/**
 * Check the prepared state's path, physical request and spectral prerequisites.
 *
 * @param request - prepared optical state and physical apertures
 * @param settings - requested MTF calculation
 * @param checks - internal axial audit permits fisheyes and validates each object reference itself
 * @returns eligibility and the reference-line data needed by tracing
 */
export function assessMtfSupport(
  request: AnalysisRequest,
  settings: MtfRequestOptions,
  checks: { axialConjugateAudit?: boolean } = {},
): MtfSupport {
  const state = request.preparedGeometry;
  const options = resolveMtfOptions(request, settings);
  const { lens } = state;
  const { referenceWavelengthNm, mixed } = nativeReference(state);
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
          : [{ wavelengthNm: options.spectrum === "single" ? options.wavelengthNm : referenceWavelengthNm, weight: 1 }],
    limitations: [
      "Circular iris; authored clear apertures and glass values may be approximate.",
      "Excludes coatings, manufacturing errors, omitted sensor stacks, polarization and sensor processing.",
      "Numerical convergence does not establish the accuracy of the source prescription.",
    ],
  };
  const shape = lens.imageSurface;
  if (shape !== null) {
    support.limitations.push(
      shape.kind === "cylindrical"
        ? `Cylindrical image surface (R = ${shape.radius} mm): field heights and frequencies are measured on the unrolled film, along the viewed frame direction.`
        : `Curved image surface (R = ${shape.radius} mm): field heights are lateral heights and frequencies are measured in the image's x/y projection.`,
    );
  }
  const reject = (reason: MtfUnavailableReason, message: string): MtfSupport => ({
    ...support,
    available: false,
    reason,
    message,
  });
  if (
    options.spectrum === "single" &&
    (!Number.isFinite(options.wavelengthNm) ||
      options.wavelengthNm < MTF_MIN_WAVELENGTH_NM ||
      options.wavelengthNm > MTF_MAX_WAVELENGTH_NM)
  ) {
    // A rejected request uses no spectral lines; keep nonfinite inputs out of serialized results.
    support.spectralLines = [];
    return reject(
      "invalid-input",
      `Single-wavelength MTF requires a finite wavelength from ${MTF_MIN_WAVELENGTH_NM} to ${MTF_MAX_WAVELENGTH_NM} nm.`,
    );
  }
  const rejectPath = (): MtfSupport => {
    const pathReasons: MtfUnsupportedPathReason[] = [];
    if (lens.source.projection?.kind?.startsWith("fisheye")) pathReasons.push("fisheye-projection");
    if (lens.flags.isFoldedOptics || state.surfaces.some((s) => s.interaction.type === "reflect"))
      pathReasons.push("folded-path");
    if (state.surfaces.some((s) => (s.innerSd ?? 0) > 0)) pathReasons.push("annular-aperture");
    if (state.surfaces.some((s) => s.diffractive)) pathReasons.push("diffractive-surface");
    if (state.surfaces.some((s) => s.interaction.type !== "refract" && s.interaction.type !== "reflect"))
      pathReasons.push("blocking-surface");
    const [x, y, z] = state.imagePlane.normal;
    if (Math.abs(x) > 1e-10 || Math.abs(y) > 1e-10) pathReasons.push("tilted-image-plane");
    if (z <= 0) pathReasons.push("non-forward-image-plane");
    return {
      ...reject("unsupported-path", pathReasons.map((reason) => UNSUPPORTED_PATH_MESSAGES[reason]).join(" ")),
      pathReasons,
    };
  };
  if (!mtfSequentialRefractivePath(state)) {
    const path = rejectPath();
    // Axial conjugacy needs no field projection, but every other prerequisite still applies.
    if (!checks.axialConjugateAudit || path.pathReasons!.some((reason) => reason !== "fisheye-projection")) return path;
  }
  if (options.movementActive) return reject("active-movement", "MTF is unavailable while tilt or shift is active.");
  if (!mtfAxialImagePlane(state)) return rejectPath();
  if (state.focusT !== 0) {
    const conjugate = mtfFiniteConjugate(state);
    // The audit validates both distance conventions after these shared eligibility checks.
    if (!conjugate || (!checks.axialConjugateAudit && !mtfFiniteObjectPoint(state, conjugate, 0)))
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
  const scale = mtfPrescriptionScale(
    {
      focalLengthDesign: lens.source.catalog.focalLengthMm?.design,
      focalLengthMarketing: lens.source.catalog.focalLengthMm?.marketing,
    },
    state.zoomT,
  );
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
    return reject("mixed-reference", "Mixed d/D/e indices need physical wavelength data for every glass.");
  }
  if (mixed)
    support.limitations.push(
      "Mixed d/D/e references are converted to the d line with compatible catalog dispersion, anchored to each authored index.",
    );
  if (!mtfUsesReferenceIndices(state, options.spectrum, options.wavelengthNm)) {
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
        : options.spectrum === "single"
          ? `Single-wavelength estimate at ${options.wavelengthNm} nm; field launch and axial focus use this line alone.`
          : "Nine-point Gauss-Legendre photopic quadrature (470-650 nm, CIE 1924 V(λ) on an equal-energy source) with one image plane and preserved lateral color; not a specific camera's spectral response.",
    );
    if (lens.dispersion.some((s) => s.quality === "sellmeier"))
      support.limitations.push(
        "Compatible catalog glasses supply spectral proxies anchored to the authored indices, not proof of production glass identity or MTF accuracy.",
      );
    if (spectral.estimatedGlasses > 0) {
      const partial = spectral.partialLineGlasses;
      const abbe = spectral.estimatedGlasses - partial;
      const descriptions = [];
      if (abbe)
        descriptions.push(
          `${abbe === 1 ? "One glass has" : `${abbe} glasses have`} only ${mtfReferenceCoordinates(state)}; ${abbe === 1 ? "its" : "their"} dispersion is estimated from normal-line partial dispersions`,
        );
      if (partial)
        descriptions.push(
          `${partial === 1 ? "One glass has" : `${partial} glasses have`} measured red/blue indices with an estimated g index`,
        );
      support.limitations.push(
        `${descriptions.join(". ")}. Primary color stays exact but secondary spectrum is approximate.`,
      );
    }
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
