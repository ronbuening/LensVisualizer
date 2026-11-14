/**
 * Prescription consistency diagnostics for source-certified finite conjugates.
 *
 * Paraxial conjugacy supplies the verdict; the existing MTF axial search supplies an
 * independent real-ray diagnostic. Neither changes the prescription or an MTF result.
 */

import type { FiniteConjugate } from "../../../types/optics.js";
import type { MtfOptions, MtfSupport } from "../../../types/mtf.js";
import type { AnalysisRequest } from "../request.js";
import { traceParaxialSurfaces } from "../../math/paraxial.js";
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
  paraxialImageZMm: number | null;
  paraxialOffsetMm: number | null;
  /** Signed transverse magnification at the paraxial conjugate plane. */
  paraxialMagnification: number | null;
  /** Small-angle 1 / (2 n′ |u′|), with the axial ray scaled to the physical stop rim. */
  paraxialWorkingFNumber: number | null;
  /** Real stop-rim ray's 1 / (2 n′ sin θ′); diagnostic only, null when it clips or fails. */
  realRayWorkingFNumber: number | null;
  realRayUnavailableReason: string | null;
  /** One paraxial diffraction depth of focus, 2 λ N_paraxial². */
  diffractionDepthMm: number | null;
  offsetDepths: number | null;
  limitMm: number | null;
  /** Unavailable diagnostics cannot certify consistency. */
  unavailableReason: string | null;
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
  const support = { ...assessMtfSupport(request, settings), conjugate };
  const declared = checkReference(request, options, support, conjugate);
  const otherConjugate: FiniteConjugate = {
    ...conjugate,
    distanceReference: conjugate.distanceReference === "first-surface" ? "image-plane" : "first-surface",
  };
  const otherReference = checkReference(request, options, support, otherConjugate);
  const withinLimit = (check: MtfConjugateCheck) =>
    check.unavailableReason === null &&
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
  if (axialPathAvailable(support)) {
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
  return {
    ...declared,
    imagePlaneZMm: state.imgZ,
    referenceWavelengthNm: support.referenceWavelengthNm,
    thresholdDepths: MTF_FINITE_CONJUGATE_DEPTHS,
    realRayBestFocusOffsetMm,
    otherReference,
    referenceDiscriminated,
    verdict: withinLimit(declared)
      ? referenceDiscriminated
        ? "consistent"
        : "ambiguous-reference"
      : declaredMismatch && withinLimit(otherReference)
        ? "other-reference"
        : "inconsistent",
  };
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
    paraxialMagnification: null,
    paraxialWorkingFNumber: null,
    realRayWorkingFNumber: null,
    realRayUnavailableReason: null,
    diffractionDepthMm: null,
    offsetDepths: null,
    limitMm: null,
    unavailableReason: null,
  };
  // An invalid declared object may still be valid under the alternate reference.
  if (!axialPathAvailable(support) && support.reason !== "finite-conjugate-unavailable")
    return { ...check, unavailableReason: support.message };
  const object = mtfFiniteObjectPoint(state, conjugate, 0);
  if (!object) return { ...check, unavailableReason: "Object is not in front of the first surface." };
  const indexAtSurface = mtfIndexResolver(state, support, support.referenceWavelengthNm);
  const surfaces = indexAtSurface
    ? state.surfaces.map((surface, i) => ({ ...surface, nd: indexAtSurface(i, surface.nd) }))
    : state.surfaces;
  const distance = first.z - object[2];
  // Conjugate equation: a unit-height axial ray starts with u = 1/object distance.
  const axial = traceParaxialSurfaces(surfaces, 1, 1 / distance, {
    skipLastTransfer: true,
    recordHeights: true,
  });
  const gap = -axial.y / axial.u;
  const imageZ = surfaces.at(-1)!.z + gap;
  if (!Number.isFinite(imageZ)) return { ...check, unavailableReason: "No finite paraxial image." };
  check.paraxialImageZMm = imageZ;
  check.paraxialOffsetMm = imageZ - state.imgZ;
  // A parallel basis ray's image height is A + t C, the transverse magnification at conjugacy.
  const parallel = traceParaxialSurfaces(surfaces, 1, 0, { skipLastTransfer: true });
  check.paraxialMagnification = parallel.y + gap * parallel.u;
  // Linearity scales the unit-height ray to the stop rim without testing clear apertures.
  // Paraxial NA is n′ |u′|; using sin(arctan u′) would add a nonparaxial correction.
  const stopHeight = axial.heights![state.lens.stop.surfaceIndex];
  const paraxialN = Math.abs(stopHeight / (2 * axial.n * axial.u * options.stopSemiDiameterMm));
  if (!(paraxialN > 0) || !Number.isFinite(paraxialN))
    return { ...check, unavailableReason: "No finite paraxial working f-number." };
  check.paraxialWorkingFNumber = paraxialN;
  check.diffractionDepthMm = 2 * support.referenceWavelengthNm * 1e-6 * paraxialN ** 2;
  check.offsetDepths = check.paraxialOffsetMm / check.diffractionDepthMm;
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

function axialPathAvailable(support: MtfSupport): boolean {
  // Axial conjugacy needs no off-axis projection mapping, even on a fisheye.
  return (
    support.available ||
    (support.reason === "unsupported-path" &&
      support.pathReasons?.length === 1 &&
      support.pathReasons[0] === "fisheye-projection")
  );
}
