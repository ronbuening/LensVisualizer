/**
 * Spherical aberration analysis — axial real-ray focus shift and blur-character calculations.
 *
 * Samples pupil zones against the current image plane to describe longitudinal error, RMS blur, and edge/center bias.
 */

import { computeAnalysisFieldGeometryAtState } from "../../state/fieldAdapters.js";
import { thick } from "../../state/layout.js";
import { sampleCircularPupil } from "../sampling.js";
import { skewImagePlaneIntercept } from "../../trace/rayAdapters.js";
import { runtimeView } from "../../prescription/runtimeView.js";
import type { AnalysisRequest } from "../request.js";
import type {
  BokehPoint,
  SAProfilePoint,
  SphericalAberrationBlurCharacterResult,
  SphericalAberrationBlurCharacterSample,
  SphericalAberrationResult,
} from "./types.js";
import { BOKEH_CIRCULAR_PUPIL_RING_SAMPLES } from "./types.js";
import { buildBokehRadialProfile, classifyBokehBrightnessCharacter } from "./radialProfile.js";
import { computeOffAxisFieldGeometryScalar, traceOffAxisBundleFromSamples } from "./offAxis.js";
import type { OffAxisBundle } from "./offAxis.js";
import { NEAR_AXIS_REAL_FRAC } from "./types.js";
import {
  MARGINAL_FRACS,
  PROFILE_FRACS,
  bestFocusPlane,
  computeRealRayHit,
  computeSymmetricRealSample,
  peakAtPlane,
  prepareAxialZoneLaunch,
  symmetricZoneFractions,
  rmsAtPlane,
  transverseCoordinateAtPlane,
} from "./shared.js";

const SA_BLUR_CHARACTER_MIN_VALID_SAMPLES = 5;
const SA_BLUR_CHARACTER_MIN_LONGITUDINAL_MM = 5e-4;
const SA_BLUR_CHARACTER_DEFOCUS_SCALE = 0.5;

/** Every zone the SA section traces, as ± pairs: near-axis, marginal candidates and the profile. */
const SA_ZONE_FRACTIONS = [
  ...new Set(symmetricZoneFractions([NEAR_AXIS_REAL_FRAC, ...MARGINAL_FRACS, ...PROFILE_FRACS])),
];

/**
 * Compute on-axis longitudinal and transverse spherical aberration.
 *
 * Uses symmetric real-ray pairs aimed at near-axis and marginal fractions of the stop radius. The
 * headline longitudinal SA is marginal intercept minus near-axis intercept; the
 * blur metrics are measured at the current and least-squares best-focus planes.
 *
 * @param request - current geometry, controls and aperture
 * @returns spherical-aberration metrics, or null when rays clip/degenerate
 */
export function computeSphericalAberration(request: AnalysisRequest): SphericalAberrationResult | null {
  const { preparedGeometry: state } = request;
  const { focusT, zoomT, aberrationT } = state;
  const L = runtimeView(state.lens);
  const zPos = state.z as number[];
  const { entrancePupilSemiDiameterMm: currentEPSD } = request.aperture;
  if (currentEPSD <= 0 || L.N < 1) return null;

  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = L.isFoldedOptics ? L.imagePlane.z : lastSurfZ + thick(L.N - 1, focusT, zoomT, L, aberrationT);
  if (!isFinite(imagePlaneZ)) return null;

  const zones = prepareAxialZoneLaunch(request, SA_ZONE_FRACTIONS);
  if (zones === null) return null;
  const nearAxisSample = computeSymmetricRealSample(request, lastSurfZ, imagePlaneZ, NEAR_AXIS_REAL_FRAC, zones);
  if (nearAxisSample === null) return null;

  // The stop no longer clips an aimed zone: a later candidate stands in only when another aperture vignettes this one.
  let marginalSample = null;
  for (const fraction of MARGINAL_FRACS) {
    if (zones.unaimed(fraction)) break;
    marginalSample = computeSymmetricRealSample(request, lastSurfZ, imagePlaneZ, fraction, zones);
    if (marginalSample !== null) break;
  }
  if (marginalSample === null) return null;

  const hits = PROFILE_FRACS.flatMap((fraction) => {
    const plusHit = computeRealRayHit(request, lastSurfZ, imagePlaneZ, fraction, zones);
    const minusHit = computeRealRayHit(request, lastSurfZ, imagePlaneZ, -fraction, zones);
    if (plusHit === null || minusHit === null) return [];
    return [plusHit, minusHit];
  });

  if (hits.length < 4) return null;

  const currentPlaneRmsMm = rmsAtPlane(hits, lastSurfZ, imagePlaneZ);
  const currentPlanePeakMm = peakAtPlane(hits, lastSurfZ, imagePlaneZ);
  const bestFocusZ = bestFocusPlane(hits, lastSurfZ);
  const bestFocusRmsMm = rmsAtPlane(hits, lastSurfZ, bestFocusZ);
  const bestFocusPeakMm = peakAtPlane(hits, lastSurfZ, bestFocusZ);
  const longitudinalSaMm = marginalSample.intercept - nearAxisSample.intercept;

  return {
    nearAxisFraction: NEAR_AXIS_REAL_FRAC,
    marginalFraction: marginalSample.fraction,
    longitudinalSaMm,
    longitudinalSaUm: longitudinalSaMm * 1000,
    currentPlaneRmsMm,
    currentPlaneRmsUm: currentPlaneRmsMm * 1000,
    currentPlanePeakMm,
    currentPlanePeakUm: currentPlanePeakMm * 1000,
    bestFocusRmsMm,
    bestFocusRmsUm: bestFocusRmsMm * 1000,
    bestFocusPeakMm,
    bestFocusPeakUm: bestFocusPeakMm * 1000,
    nearAxisRealIntercept: nearAxisSample.intercept,
    marginalRealIntercept: marginalSample.intercept,
    nearAxisImageHeight: nearAxisSample.imageHeight,
    imagePlaneZ,
    bestFocusZ,
    bestFocusShiftMm: bestFocusZ - imagePlaneZ,
    validSampleCount: hits.length,
    unaimedZoneCount: PROFILE_FRACS.filter((fraction) => zones.unaimed(fraction)).length,
  };
}

/**
 * Build the transverse spherical-aberration profile curve.
 *
 * Points are evaluated at the real-ray best-focus plane and expressed relative
 * to the near-axis ray height at that same plane.
 *
 * @param request - current geometry, controls and aperture
 * @returns sampled pupil fraction versus transverse SA in mm
 */
export function computeSAProfile(request: AnalysisRequest): SAProfilePoint[] {
  const { preparedGeometry: state } = request;
  const { focusT, zoomT, aberrationT } = state;
  const L = runtimeView(state.lens);
  const zPos = state.z as number[];
  const { entrancePupilSemiDiameterMm: currentEPSD } = request.aperture;
  if (currentEPSD <= 0 || L.N < 1) return [];

  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = L.isFoldedOptics ? L.imagePlane.z : lastSurfZ + thick(L.N - 1, focusT, zoomT, L, aberrationT);
  if (!isFinite(imagePlaneZ)) return [];

  const zones = prepareAxialZoneLaunch(request, symmetricZoneFractions(PROFILE_FRACS));
  if (zones === null) return [];
  const hits = PROFILE_FRACS.flatMap((fraction) => {
    const plusHit = computeRealRayHit(request, lastSurfZ, imagePlaneZ, fraction, zones);
    const minusHit = computeRealRayHit(request, lastSurfZ, imagePlaneZ, -fraction, zones);
    if (plusHit === null || minusHit === null) return [];
    return [plusHit, minusHit];
  });
  if (hits.length < 4) return [];

  const bestFocusZ = bestFocusPlane(hits, lastSurfZ);
  const nearAxisPlusHit = hits.find((hit) => hit.signedFraction === NEAR_AXIS_REAL_FRAC) ?? null;
  if (nearAxisPlusHit === null) return [];

  const nearAxisHeightAtBestFocus = transverseCoordinateAtPlane(nearAxisPlusHit, lastSurfZ, bestFocusZ);
  const points: SAProfilePoint[] = [];

  for (const fraction of PROFILE_FRACS) {
    const plusHit = hits.find((hit) => hit.signedFraction === fraction) ?? null;
    if (plusHit === null) continue;

    points.push({
      fraction,
      transverseSaMm: transverseCoordinateAtPlane(plusHit, lastSurfZ, bestFocusZ) - nearAxisHeightAtBestFocus,
    });
  }

  return points.length >= 2 ? points : [];
}

function computeOnAxisBlurCharacterAtPlane(
  bundle: OffAxisBundle,
  planeZ: number,
): SphericalAberrationBlurCharacterSample | null {
  if (!isFinite(planeZ) || bundle.validSampleCount < SA_BLUR_CHARACTER_MIN_VALID_SAMPLES) return null;
  const { geometry } = bundle;

  const chiefPoint = skewImagePlaneIntercept(
    bundle.chiefRay.trace.x,
    bundle.chiefRay.trace.y,
    bundle.chiefRay.trace.ux,
    bundle.chiefRay.trace.uy,
    geometry.lastSurfZ,
    planeZ,
  );
  if (chiefPoint === null) return null;

  const points: BokehPoint[] = bundle.samples.flatMap((sample) => {
    const imagePoint = skewImagePlaneIntercept(
      sample.trace.x,
      sample.trace.y,
      sample.trace.ux,
      sample.trace.uy,
      geometry.lastSurfZ,
      planeZ,
    );
    if (imagePoint === null) return [];

    return [
      {
        index: sample.index,
        sagittalOffset: imagePoint.x - chiefPoint.x,
        tangentialOffset: imagePoint.y - chiefPoint.y,
        pupilRadius: sample.radiusFraction ?? 0,
        pupilAzimuth: sample.azimuthRad ?? 0,
        weight: sample.weight ?? 1 / Math.max(1, bundle.validSampleCount),
      },
    ];
  });
  if (points.length < SA_BLUR_CHARACTER_MIN_VALID_SAMPLES) return null;

  const totalWeight = points.reduce((sum, point) => sum + point.weight, 0);
  if (totalWeight <= 1e-12) return null;

  const centroidSagittal = points.reduce((sum, point) => sum + point.sagittalOffset * point.weight, 0) / totalWeight;
  const centroidTangential =
    points.reduce((sum, point) => sum + point.tangentialOffset * point.weight, 0) / totalWeight;
  const radialProfile = buildBokehRadialProfile(points, centroidSagittal, centroidTangential);
  const { brightnessCharacter, centerToRimRatio } = classifyBokehBrightnessCharacter(radialProfile);

  return {
    radialProfile,
    brightnessCharacter,
    centerToRimRatio,
  };
}

/**
 * Classify foreground/background blur character implied by spherical aberration.
 *
 * The defocus planes are placed symmetrically around best focus by half the
 * absolute longitudinal SA. On-axis circular pupil samples are traced as a bokeh
 * footprint and reduced to center/rim brightness character.
 *
 * @param request - current geometry, controls, aperture and sampling
 * @param baseResult - optional matching spherical-aberration result
 * @returns front/rear blur character, or null when the SA signal is too small
 */
export function computeSphericalAberrationBlurCharacter(
  request: AnalysisRequest,
  baseResult: Pick<SphericalAberrationResult, "bestFocusZ" | "longitudinalSaMm"> | null = null,
): SphericalAberrationBlurCharacterResult | null {
  const { preparedGeometry: state } = request;
  const { focusT, zoomT, aberrationT } = state;
  const L = runtimeView(state.lens);

  const { entrancePupilSemiDiameterMm: currentEPSD } = request.aperture;
  const sampling = request.sampling;
  if (currentEPSD <= 0 || L.N < 1) return null;

  const resolvedBase = baseResult ?? computeSphericalAberration(request);
  if (resolvedBase === null) return null;

  const defocusOffsetMm = Math.abs(resolvedBase.longitudinalSaMm) * SA_BLUR_CHARACTER_DEFOCUS_SCALE;
  if (!isFinite(defocusOffsetMm) || defocusOffsetMm < SA_BLUR_CHARACTER_MIN_LONGITUDINAL_MM) return null;

  const geometryState = computeAnalysisFieldGeometryAtState(focusT, zoomT, L, aberrationT);
  const geometry = computeOffAxisFieldGeometryScalar(request.preparedGeometry, 0, geometryState);
  if (geometry === null) return null;

  const bundle = traceOffAxisBundleFromSamples(
    request,
    sampleCircularPupil(sampling.sphericalBlurRingSamples ?? BOKEH_CIRCULAR_PUPIL_RING_SAMPLES),
    geometry,
    undefined,
  );
  if (bundle === null || bundle.validSampleCount < SA_BLUR_CHARACTER_MIN_VALID_SAMPLES) return null;

  const frontDefocus = computeOnAxisBlurCharacterAtPlane(bundle, resolvedBase.bestFocusZ - defocusOffsetMm);
  const rearDefocus = computeOnAxisBlurCharacterAtPlane(bundle, resolvedBase.bestFocusZ + defocusOffsetMm);
  if (frontDefocus === null || rearDefocus === null) return null;

  return {
    defocusOffsetMm,
    frontDefocus,
    rearDefocus,
  };
}
