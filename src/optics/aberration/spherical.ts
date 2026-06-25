/**
 * Spherical aberration analysis — axial real-ray focus shift and blur-character calculations.
 *
 * Samples pupil zones against the current image plane to describe longitudinal error, RMS blur, and edge/center bias.
 */

import { computeAnalysisFieldGeometryAtState2 as computeAnalysisFieldGeometryAtState } from "../field/fieldGeometry.js";
import { thick } from "../layout.js";
import { sampleCircularPupil, skewImagePlaneIntercept } from "../rayTrace.js";
import type { RuntimeLens } from "../../types/optics.js";
import type {
  BokehPoint,
  SAProfilePoint,
  SphericalAberrationBlurCharacterResult,
  SphericalAberrationBlurCharacterSample,
  SphericalAberrationResult,
} from "./types.js";
import { BOKEH_CIRCULAR_PUPIL_RING_SAMPLES } from "./types.js";
import type { AnalysisSamplingOptions } from "../analysis/analysisQuality.js";
import { buildBokehRadialProfile, classifyBokehBrightnessCharacter } from "./bokeh.js";
import { computeStateAwareOffAxisFieldGeometry, traceOffAxisBundleFromSamples, type OffAxisBundle } from "./offAxis.js";
import { NEAR_AXIS_REAL_FRAC } from "./types.js";
import {
  MARGINAL_FRACS,
  PROFILE_FRACS,
  bestFocusPlane,
  computeRealRayHit,
  computeSymmetricRealSample,
  peakAtPlane,
  rmsAtPlane,
  transverseCoordinateAtPlane,
} from "./shared.js";

const SA_BLUR_CHARACTER_MIN_VALID_SAMPLES = 5;
const SA_BLUR_CHARACTER_MIN_LONGITUDINAL_MM = 5e-4;
const SA_BLUR_CHARACTER_DEFOCUS_SCALE = 0.5;

/**
 * Compute on-axis longitudinal and transverse spherical aberration.
 *
 * Uses symmetric real-ray pairs at near-axis and marginal pupil fractions. The
 * headline longitudinal SA is marginal intercept minus near-axis intercept; the
 * blur metrics are measured at the current and least-squares best-focus planes.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param aberrationT - normalized aberration spacing slider
 * @returns spherical-aberration metrics, or null when rays clip/degenerate
 */
export function computeSphericalAberration(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  aberrationT = 0,
): SphericalAberrationResult | null {
  if (currentEPSD <= 0 || L.N < 1) return null;

  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = L.isFoldedOptics ? L.imagePlane.z : lastSurfZ + thick(L.N - 1, focusT, zoomT, L, aberrationT);
  if (!isFinite(imagePlaneZ)) return null;

  const nearAxisSample = computeSymmetricRealSample(
    L,
    zPos,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    lastSurfZ,
    imagePlaneZ,
    NEAR_AXIS_REAL_FRAC,
    aberrationT,
  );
  if (nearAxisSample === null) return null;

  let marginalSample = null;
  for (const fraction of MARGINAL_FRACS) {
    marginalSample = computeSymmetricRealSample(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      lastSurfZ,
      imagePlaneZ,
      fraction,
      aberrationT,
    );
    if (marginalSample !== null) break;
  }
  if (marginalSample === null) return null;

  const hits = PROFILE_FRACS.flatMap((fraction) => {
    const plusHit = computeRealRayHit(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      lastSurfZ,
      imagePlaneZ,
      fraction,
      aberrationT,
    );
    const minusHit = computeRealRayHit(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      lastSurfZ,
      imagePlaneZ,
      -fraction,
      aberrationT,
    );
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
  };
}

/**
 * Build the transverse spherical-aberration profile curve.
 *
 * Points are evaluated at the real-ray best-focus plane and expressed relative
 * to the near-axis ray height at that same plane.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param aberrationT - normalized aberration spacing slider
 * @returns sampled pupil fraction versus transverse SA in mm
 */
export function computeSAProfile(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  aberrationT = 0,
): SAProfilePoint[] {
  if (currentEPSD <= 0 || L.N < 1) return [];

  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = L.isFoldedOptics ? L.imagePlane.z : lastSurfZ + thick(L.N - 1, focusT, zoomT, L, aberrationT);
  if (!isFinite(imagePlaneZ)) return [];

  const hits = PROFILE_FRACS.flatMap((fraction) => {
    const plusHit = computeRealRayHit(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      lastSurfZ,
      imagePlaneZ,
      fraction,
      aberrationT,
    );
    const minusHit = computeRealRayHit(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      lastSurfZ,
      imagePlaneZ,
      -fraction,
      aberrationT,
    );
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
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param currentEPSD - entrance-pupil semi-diameter in mm
 * @param currentPhysStopSD - physical stop semi-diameter in mm
 * @param baseResult - optional matching spherical-aberration result
 * @param aberrationT - normalized aberration spacing slider
 * @returns front/rear blur character, or null when the SA signal is too small
 */
export function computeSphericalAberrationBlurCharacter(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  baseResult: Pick<SphericalAberrationResult, "bestFocusZ" | "longitudinalSaMm"> | null = null,
  aberrationT = 0,
  sampling: AnalysisSamplingOptions = {},
): SphericalAberrationBlurCharacterResult | null {
  if (currentEPSD <= 0 || L.N < 1) return null;

  const resolvedBase =
    baseResult ?? computeSphericalAberration(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD, aberrationT);
  if (resolvedBase === null) return null;

  const defocusOffsetMm = Math.abs(resolvedBase.longitudinalSaMm) * SA_BLUR_CHARACTER_DEFOCUS_SCALE;
  if (!isFinite(defocusOffsetMm) || defocusOffsetMm < SA_BLUR_CHARACTER_MIN_LONGITUDINAL_MM) return null;

  const geometryState = computeAnalysisFieldGeometryAtState(focusT, zoomT, L, aberrationT);
  const geometry = computeStateAwareOffAxisFieldGeometry(L, zPos, focusT, zoomT, 0, geometryState, aberrationT);
  if (geometry === null) return null;

  const bundle = traceOffAxisBundleFromSamples(
    sampleCircularPupil(sampling.sphericalBlurRingSamples ?? BOKEH_CIRCULAR_PUPIL_RING_SAMPLES),
    geometry,
    L,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
    undefined,
    aberrationT,
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
