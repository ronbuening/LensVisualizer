/**
 * Prescription consistency diagnostics for source-certified finite conjugates.
 *
 * Paraxial conjugacy supplies the verdict; the existing MTF axial search supplies an
 * independent real-ray diagnostic. Neither changes the prescription or an MTF result.
 */

import type { FiniteConjugate } from "../../../types/optics.js";
import type { MtfOptions, MtfSupport } from "../../../types/mtf.js";
import type { PreparedGeometry } from "../../types.js";
import type { AnalysisRequest } from "../request.js";
import { FLAT_R_THRESHOLD } from "../../geometry/surfaceProfile.js";
import { traceParaxialSurfaces } from "../../math/paraxial.js";
import { parseSourceMagnification } from "../../prescription/sourceMagnification.js";
import { traceWorkingFNumber } from "../summary/fNumbers.js";
import { mtfFiniteConjugate, mtfFiniteObjectPoint } from "./mtfConjugates.js";
import { MTF_FOCUS_FREQUENCIES, MTF_FOCUS_GRID } from "./mtfConstants.js";
import { findAxialBestFocus, mtfNearestImagePlaneZ } from "./mtfFocus.js";
import { assessMtfSupport, resolveMtfOptions } from "./mtfSupport.js";
import { mtfAimSpectrum, mtfIndexResolver, prepareMtfFieldLaunch, traceMtfStopBundle } from "./mtfTracing.js";

/**
 * A 25-depth envelope accommodates the main source-rounded residual range without
 * absorbing the catalog's separated outliers. The paraxial working aperture keeps
 * the conjugacy verdict independent of real marginal-ray aberrations and clips.
 */
export const MTF_FINITE_CONJUGATE_DEPTHS = 25;

/** All axial coordinates and offsets are in mm, positive toward image space. */
export interface MtfConjugateCheck {
  distanceReference: FiniteConjugate["distanceReference"];
  objectZMm: number;
  /** Axis crossing of the final-medium ray; inside a trailing plate it is that ray's back-extrapolation. */
  paraxialImageZMm: number | null;
  paraxialOffsetMm: number | null;
  /** Infinite and virtual images have no finite real-image diagnostics, but retain defocus. */
  paraxialImageUnavailableReason: string | null;
  /** Signed transverse magnification at the paraxial conjugate plane. */
  paraxialMagnification: number | null;
  /** Small-angle 1 / (2 n′ |u′|), with the axial ray scaled to the physical stop rim. */
  paraxialWorkingFNumber: number | null;
  /** 1 / (2 n′ |u_a|), for the exit-pupil rim cone converging on the authored plane. */
  authoredPlaneWorkingFNumber: number | null;
  /** Real stop-rim ray's 1 / (2 n′ sin θ′); diagnostic only, null when it clips or fails. */
  realRayWorkingFNumber: number | null;
  realRayUnavailableReason: string | null;
  /** One authored-plane paraxial diffraction depth of focus, 2 λ n′ N_a². */
  diffractionDepthMm: number | null;
  /** Signed authored-plane defocus wavefront error in quarter waves. */
  offsetDepths: number | null;
  limitMm: number | null;
  /** Unavailable diagnostics cannot certify consistency. */
  unavailableReason: string | null;
}

/** Half the 0.01 mm to which a solved object distance is written. */
const SOLVED_DISTANCE_ROUNDING_MM = 0.005;

/**
 * A declared distance that is not the solved one to its rounding still matches within a twentieth of a quarter
 * wave, so a later index refinement does not unsettle a long object distance.
 */
const SOLVED_DISTANCE_DEPTHS = 0.05;

/** A final slope below 10⁻¹²/mm for a unit-height parallel ray is an afocal system: no distance sets a magnification. */
const AFOCAL_SLOPE_PER_MM = 1e-12;

/** A solved object distance compared with the magnification its source prints. Magnifications are magnitudes. */
export interface MtfConjugateMagnification {
  /** `sourceMagnification` as authored. */
  printed: string;
  value: number;
  /** Half a unit of the last printed decimal; 0 for a ratio or whole number. */
  halfUnit: number;
  /** Paraxial magnification with the object at the declared distance; null without a finite real image. */
  atDeclaredDistance: number | null;
  /** The declared distance's magnification rounds to the print, within the distance's own rounding. */
  withinPrint: boolean;
  /** First-surface distance that focuses the state on the authored image plane; null when that object is not real. */
  inFocusObjectDistanceMm: number | null;
  /** Magnification of that in-focus conjugate; null with it. */
  inFocusMagnification: number | null;
  /**
   * The distance to declare: the in-focus one when its magnification rounds to the print, otherwise the
   * distance at the nearest magnification that does. Null when no real object satisfies the rule.
   */
  solvedObjectDistanceMm: number | null;
  /** Signed quarter waves of defocus with the object at the solved distance. */
  solvedOffsetDepths: number | null;
  /** The declared distance is the solved one to its 0.01 mm rounding, or within 0.05 quarter waves of it. */
  matchesSolve: boolean;
}

export interface MtfConjugateConsistency extends MtfConjugateCheck {
  imagePlaneZMm: number;
  referenceWavelengthNm: number;
  thresholdDepths: number;
  /** Existing reference-line axial MTF search, bounded to ±10 mm; diagnostic only. */
  realRayBestFocusOffsetMm: number | null;
  otherReference: MtfConjugateCheck;
  /** The alternate object is impossible, outside the limit, or has a tenfold residual above one depth. */
  referenceDiscriminated: boolean;
  /**
   * Present when the conjugate carries `sourceMagnification`, whose distance is solved, not printed. Null on a
   * teleconverter-composed lens, which keeps the bare host's print.
   */
  magnification: MtfConjugateMagnification | null;
  /**
   * A solved distance is consistent when it is within the limit, is the distance the solve gives and has a
   * magnification that rounds to the print; its reference is first-surface by construction, so it is never
   * ambiguous or other-reference.
   */
  verdict: "consistent" | "inconsistent" | "other-reference" | "ambiguous-reference";
}

/**
 * Compare a certified object's paraxial image with the authored image vertex.
 *
 * Use the open physical aperture for catalog audits so stopping down cannot hide an error.
 * The alternate distance reference is diagnostic only and never substitutes a source point.
 *
 * @param request - prepared authored state and physical aperture used for the working f-number
 * @returns diagnostics, or null when this exact state declares no finite conjugate
 */
export function assessMtfConjugateConsistency(request: AnalysisRequest): MtfConjugateConsistency | null {
  const state = request.preparedGeometry;
  const conjugate = mtfFiniteConjugate(state);
  if (!conjugate) return null;
  const settings = { method: "geometric", spectrum: "reference", focus: "design" } as const;
  const options = resolveMtfOptions(request, settings);
  const support = { ...assessMtfSupport(request, settings, { axialConjugateAudit: true }), conjugate };
  const declared = checkReference(request, options, support, conjugate);
  const otherConjugate: FiniteConjugate = {
    ...conjugate,
    distanceReference: conjugate.distanceReference === "first-surface" ? "image-plane" : "first-surface",
  };
  const otherReference = checkReference(request, options, support, otherConjugate);
  const withinLimit = (check: MtfConjugateCheck) =>
    check.unavailableReason === null &&
    check.paraxialImageUnavailableReason === null &&
    check.offsetDepths !== null &&
    Math.abs(check.offsetDepths) <= MTF_FINITE_CONJUGATE_DEPTHS;
  const declaredMismatch =
    (declared.offsetDepths !== null && Math.abs(declared.offsetDepths) > MTF_FINITE_CONJUGATE_DEPTHS) ||
    mtfFiniteObjectPoint(state, conjugate, 0) === null;
  // An alternate object at or behind the first surface is impossible, so the declared reference stands.
  const referenceDiscriminated =
    mtfFiniteObjectPoint(state, otherConjugate, 0) === null ||
    (otherReference.offsetDepths !== null &&
      (Math.abs(otherReference.offsetDepths) > MTF_FINITE_CONJUGATE_DEPTHS ||
        (declared.offsetDepths !== null &&
          Math.abs(otherReference.offsetDepths) >= 10 * Math.abs(declared.offsetDepths) &&
          Math.abs(otherReference.offsetDepths) > 1)));

  let realRayBestFocusOffsetMm: number | null = null;
  if (support.available) {
    const launch = prepareMtfFieldLaunch(state, options, support, 0);
    const bundle = launch?.aim
      ? traceMtfStopBundle(state, options, support, launch, MTF_FOCUS_GRID, support.spectralLines[0])
      : null;
    if (bundle) {
      const bundles = [{ bundle, weight: 1 }];
      realRayBestFocusOffsetMm =
        findAxialBestFocus(bundles, state.imgZ, MTF_FOCUS_FREQUENCIES, mtfNearestImagePlaneZ(state, bundles))
          ?.shiftMm ?? null;
    }
  }
  const magnification = checkMagnification(state, support, conjugate, declared, (objectDistanceMm) =>
    checkReference(request, options, support, { ...conjugate, objectDistanceMm }),
  );
  return {
    ...declared,
    imagePlaneZMm: state.imgZ,
    referenceWavelengthNm: support.referenceWavelengthNm,
    thresholdDepths: MTF_FINITE_CONJUGATE_DEPTHS,
    realRayBestFocusOffsetMm,
    otherReference,
    referenceDiscriminated,
    magnification,
    verdict: magnification
      ? withinLimit(declared) && magnification.withinPrint && magnification.matchesSolve
        ? "consistent"
        : "inconsistent"
      : withinLimit(declared)
        ? referenceDiscriminated
          ? "consistent"
          : "ambiguous-reference"
        : declaredMismatch && withinLimit(otherReference)
          ? "other-reference"
          : "inconsistent",
  };
}

/** Prepared surfaces with every index evaluated at the audit's reference line. */
function referenceLineSurfaces(state: PreparedGeometry, support: MtfSupport) {
  const indexAtSurface = mtfIndexResolver(state, support, support.referenceWavelengthNm);
  return indexAtSurface
    ? state.surfaces.map((surface, i) => ({ ...surface, nd: indexAtSurface(i, surface.nd) }))
    : state.surfaces;
}

/**
 * Solve the object distance a printed magnification stands for, and test the declared one against the print.
 *
 * The tabulated state is in focus on its image plane, so that conjugate is the estimate whenever its
 * magnification rounds to the printed value; a print the prescription misses is honoured at its nearest bound,
 * which leaves the miss visible as defocus.
 *
 * @param checkAt - the reference check with the object moved to a candidate first-surface distance
 */
function checkMagnification(
  state: PreparedGeometry,
  support: MtfSupport,
  conjugate: FiniteConjugate,
  declared: MtfConjugateCheck,
  checkAt: (objectDistanceMm: number) => MtfConjugateCheck,
): MtfConjugateMagnification | null {
  if (conjugate.sourceMagnification === undefined || state.lens.attachedTeleconverter) return null;
  const printed = parseSourceMagnification(conjugate.sourceMagnification);
  const check: MtfConjugateMagnification = {
    printed: conjugate.sourceMagnification,
    value: printed?.value ?? NaN,
    halfUnit: printed?.halfUnit ?? NaN,
    atDeclaredDistance: null,
    withinPrint: false,
    inFocusObjectDistanceMm: null,
    inFocusMagnification: null,
    solvedObjectDistanceMm: null,
    solvedOffsetDepths: null,
    matchesSolve: false,
  };
  if (!printed || !support.available) return check;
  const surfaces = referenceLineSurfaces(state, support);
  const authoredGap = state.imgZ - surfaces.at(-1)!.z;
  const parallel = traceParaxialSurfaces(surfaces, 1, 0, { skipLastTransfer: true });
  const angular = traceParaxialSurfaces(surfaces, 0, 1, { skipLastTransfer: true });
  // An axial object at distance s reaches the first vertex at height s per unit slope, so its ray lands on the
  // authored plane at s A + B: focus needs s = −B/A, and A is the magnification there.
  const a = parallel.y + authoredGap * parallel.u;
  const b = angular.y + authoredGap * angular.u;
  // At its own paraxial image an object at s has magnification D / (s u_p + u_a), D the two rays' invariant.
  const invariant = parallel.y * angular.u - parallel.u * angular.y;
  const real = (distance: number) => (distance > 0 && Number.isFinite(distance) ? distance : null);
  const low = printed.value - printed.halfUnit;
  const high = printed.value + printed.halfUnit;
  if (Number.isFinite(a) && Number.isFinite(b)) {
    const inFocus = a !== 0 ? real(-b / a) : null;
    check.inFocusObjectDistanceMm = inFocus;
    check.inFocusMagnification = inFocus === null ? null : Math.abs(a);
    const target = Math.min(high, Math.max(low, Math.abs(a)));
    const accept = (distance: number | null, imageMustBeReal: boolean) => {
      if (distance === null || check.solvedObjectDistanceMm !== null) return;
      const solved = checkAt(distance);
      // The object must stand in front of the first surface, and a bound's conjugate must be a finite real image.
      if (solved.unavailableReason !== null) return;
      if (imageMustBeReal && solved.paraxialImageUnavailableReason !== null) return;
      check.solvedObjectDistanceMm = distance;
      check.solvedOffsetDepths = solved.offsetDepths;
    };
    // The in-focus conjugate images on the authored plane by construction.
    if (inFocus !== null && target === Math.abs(a)) accept(inFocus, false);
    else if (Math.abs(parallel.u) > AFOCAL_SLOPE_PER_MM) {
      // Either image orientation may hold the real conjugate; the in-focus one's is tried first.
      const at = (magnification: number) => real((invariant / magnification - angular.u) / parallel.u);
      const preferred = a < 0 ? -target : target;
      accept(at(preferred), true);
      accept(at(-preferred), true);
    }
  }
  if (check.solvedObjectDistanceMm !== null)
    check.matchesSolve =
      Math.abs(conjugate.objectDistanceMm - check.solvedObjectDistanceMm) <= SOLVED_DISTANCE_ROUNDING_MM + 1e-9 ||
      (check.solvedOffsetDepths !== null &&
        declared.offsetDepths !== null &&
        Math.abs(declared.offsetDepths - check.solvedOffsetDepths) <= SOLVED_DISTANCE_DEPTHS);
  if (declared.paraxialMagnification !== null && invariant !== 0) {
    const magnitude = Math.abs(declared.paraxialMagnification);
    // dm/ds = −m² u_p / D converts the written distance's rounding into magnification; the margin covers the
    // derivative's own change across that rounding.
    const slack = Math.abs((magnitude ** 2 * parallel.u) / invariant) * SOLVED_DISTANCE_ROUNDING_MM * 1.001 + 1e-12;
    check.atDeclaredDistance = magnitude;
    check.withinPrint = magnitude >= low - slack && magnitude <= high + slack;
  }
  return check;
}

function checkReference(
  request: AnalysisRequest,
  options: MtfOptions,
  support: MtfSupport,
  conjugate: FiniteConjugate,
): MtfConjugateCheck {
  const state = request.preparedGeometry;
  const first = state.surfaces[0];
  const check: MtfConjugateCheck = {
    distanceReference: conjugate.distanceReference,
    objectZMm: (conjugate.distanceReference === "image-plane" ? state.imgZ : first.z) - conjugate.objectDistanceMm,
    paraxialImageZMm: null,
    paraxialOffsetMm: null,
    paraxialImageUnavailableReason: null,
    paraxialMagnification: null,
    paraxialWorkingFNumber: null,
    authoredPlaneWorkingFNumber: null,
    realRayWorkingFNumber: null,
    realRayUnavailableReason: null,
    diffractionDepthMm: null,
    offsetDepths: null,
    limitMm: null,
    unavailableReason: null,
  };
  if (!support.available) return { ...check, unavailableReason: support.message };
  const object = mtfFiniteObjectPoint(state, conjugate, 0);
  if (!object) return { ...check, unavailableReason: "Object is not in front of the first surface." };
  const surfaces = referenceLineSurfaces(state, support);
  const distance = first.z - object[2];
  // Conjugate equation: a unit-height axial ray starts with u = 1/object distance.
  const axial = traceParaxialSurfaces(surfaces, 1, 1 / distance, {
    skipLastTransfer: true,
    recordHeights: true,
  });
  const authoredGap = state.imgZ - surfaces.at(-1)!.z;
  // A rear plate may end on the image plane itself, where the miss is the ray height on that face.
  if (!(authoredGap >= 0) || !Number.isFinite(authoredGap))
    return { ...check, unavailableReason: "Authored image plane is in front of the last surface." };
  const gap = -axial.y / axial.u;
  const imageZ = surfaces.at(-1)!.z + gap;
  // Linearity scales the unit-height ray to the stop rim without testing clear apertures.
  const stopHeight = axial.heights![state.lens.stop.surfaceIndex];
  const scale = options.stopSemiDiameterMm / stopHeight;
  const y = axial.y * scale;
  const u = axial.u * scale;
  const n = axial.n;
  const parallel = traceParaxialSurfaces(surfaces, 1, 0, {
    skipLastTransfer: true,
    recordHeights: true,
  });
  // This linear combination vanishes at the stop, so its axial crossing images the stop centre.
  const parallelStopHeight = parallel.heights![state.lens.stop.surfaceIndex];
  const yc = axial.y * parallelStopHeight - parallel.y * stopHeight;
  const uc = axial.u * parallelStopHeight - parallel.u * stopHeight;
  if (!Number.isFinite(yc) || !Number.isFinite(uc) || (yc === 0 && uc === 0))
    return { ...check, unavailableReason: "No paraxial exit pupil." };
  let authoredSlope: number;
  // A pupil vergence below 10⁻¹²/mm is the image-space telecentric limit.
  if (Math.abs(uc) <= 1e-12 * Math.abs(yc)) authoredSlope = u;
  else {
    const exitPupilGap = -yc / uc;
    const authoredRadius = authoredGap - exitPupilGap;
    if (Math.abs(authoredRadius) <= 1e-12 * Math.max(1, Math.abs(authoredGap), Math.abs(exitPupilGap)))
      return { ...check, unavailableReason: "Authored image plane coincides with the exit pupil." };
    const pupilRimHeight = y + u * exitPupilGap;
    authoredSlope = -pupilRimHeight / authoredRadius;
  }
  const authoredN = 1 / (2 * n * Math.abs(authoredSlope));
  if (!(authoredN > 0) || !Number.isFinite(authoredN) || !Number.isFinite(u) || !(n > 0))
    return { ...check, unavailableReason: "No finite authored-plane working f-number." };
  // A real image lies beyond the last surface, or on or inside the trailing flat plates, where the
  // converging ray has already crossed the axis: its height changes sign after the last powered surface.
  let lastPowered = surfaces.length - 1;
  while (lastPowered > 0 && Math.abs(surfaces[lastPowered].R) >= FLAT_R_THRESHOLD) lastPowered--;
  const crossedInPlates = axial.y === 0 || axial.heights![lastPowered] * axial.y < 0;
  if (Number.isFinite(imageZ) && (gap > 0 || crossedInPlates)) {
    check.paraxialImageZMm = imageZ;
    check.paraxialOffsetMm = imageZ - state.imgZ;
    // A parallel basis ray's image height is A + t C, the transverse magnification at conjugacy.
    check.paraxialMagnification = parallel.y + gap * parallel.u;
    // Paraxial NA is n′ |u′|; sin(arctan u′) would add a nonparaxial correction.
    check.paraxialWorkingFNumber = 1 / (2 * n * Math.abs(u));
  } else check.paraxialImageUnavailableReason = "No finite real paraxial image (infinite or virtual).";
  const lambdaMm = support.referenceWavelengthNm * 1e-6;
  // At the exit-pupil rim a, u_a = −a/R_a and h_a = a(1 − R_a/R_i), so
  // W = −n′ u_a h_a/2 = n′ a²/2 (1/R_a − 1/R_i) on the pupil sphere.
  // For small Δ = R_i − R_a, W/(λ/4) ≈ Δ/(2 λ n′ N²), N = 1/(2n′|u|).
  // The transverse miss keeps defocus large for infinite or virtual images.
  const authoredMiss = y + u * authoredGap;
  const wavefrontMm = (-n * authoredSlope * authoredMiss) / 2;
  check.authoredPlaneWorkingFNumber = authoredN;
  check.diffractionDepthMm = 2 * lambdaMm * n * authoredN ** 2;
  check.offsetDepths = wavefrontMm / (lambdaMm / 4);
  check.limitMm = MTF_FINITE_CONJUGATE_DEPTHS * check.diffractionDepthMm;
  const referencedSupport = { ...support, conjugate };
  const launch = prepareMtfFieldLaunch(state, options, referencedSupport, 0);
  const marginal = launch?.aim
    ? traceWorkingFNumber(request, launch.aim, mtfAimSpectrum(state, referencedSupport, support.spectralLines[0]))
    : null;
  if (marginal?.status !== "traced") {
    check.realRayUnavailableReason =
      marginal?.status === "vignetted"
        ? `Working f-number ray clipped at ${marginal.surfaceLabel}.`
        : `Working f-number ray ${marginal?.status ?? "unavailable"}.`;
    return check;
  }
  check.realRayWorkingFNumber = marginal.value;
  return check;
}
