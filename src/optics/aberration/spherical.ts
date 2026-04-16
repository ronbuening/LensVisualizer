import { computeFieldGeometryAtState, sampleCircularPupil, skewImagePlaneIntercept } from "../optics.js";
import type { RuntimeLens } from "../../types/optics.js";
import type {
  BokehPoint,
  SAProfilePoint,
  SphericalAberrationBlurCharacterResult,
  SphericalAberrationBlurCharacterSample,
  SphericalAberrationResult,
} from "./types.js";
import { BOKEH_CIRCULAR_PUPIL_RING_SAMPLES } from "./types.js";
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
} from "./shared.js";

const SA_BLUR_CHARACTER_MIN_VALID_SAMPLES = 5;
const SA_BLUR_CHARACTER_MIN_LONGITUDINAL_MM = 5e-4;
const SA_BLUR_CHARACTER_DEFOCUS_SCALE = 0.5;

export function computeSphericalAberration(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): SphericalAberrationResult | null {
  if (currentEPSD <= 0 || L.N < 1) return null;

  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = lastSurfZ + (L.S[L.N - 1]?.d ?? 0);
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

export function computeSAProfile(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): SAProfilePoint[] {
  if (currentEPSD <= 0 || L.N < 1) return [];

  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = lastSurfZ + (L.S[L.N - 1]?.d ?? 0);
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
    );
    if (plusHit === null || minusHit === null) return [];
    return [plusHit, minusHit];
  });
  if (hits.length < 4) return [];

  const bestFocusZ = bestFocusPlane(hits, lastSurfZ);
  const nearAxisPlusHit = hits.find((hit) => hit.signedFraction === NEAR_AXIS_REAL_FRAC) ?? null;
  if (nearAxisPlusHit === null) return [];

  const nearAxisHeightAtBestFocus = nearAxisPlusHit.y + nearAxisPlusHit.u * (bestFocusZ - lastSurfZ);
  const points: SAProfilePoint[] = [];

  for (const fraction of PROFILE_FRACS) {
    const plusHit = hits.find((hit) => hit.signedFraction === fraction) ?? null;
    if (plusHit === null) continue;

    points.push({
      fraction,
      transverseSaMm: plusHit.y + plusHit.u * (bestFocusZ - lastSurfZ) - nearAxisHeightAtBestFocus,
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

export function computeSphericalAberrationBlurCharacter(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  baseResult: Pick<SphericalAberrationResult, "bestFocusZ" | "longitudinalSaMm"> | null = null,
): SphericalAberrationBlurCharacterResult | null {
  if (currentEPSD <= 0 || L.N < 1) return null;

  const resolvedBase = baseResult ?? computeSphericalAberration(L, zPos, focusT, zoomT, currentEPSD, currentPhysStopSD);
  if (resolvedBase === null) return null;

  const defocusOffsetMm = Math.abs(resolvedBase.longitudinalSaMm) * SA_BLUR_CHARACTER_DEFOCUS_SCALE;
  if (!isFinite(defocusOffsetMm) || defocusOffsetMm < SA_BLUR_CHARACTER_MIN_LONGITUDINAL_MM) return null;

  const geometryState = computeFieldGeometryAtState(focusT, zoomT, L);
  const geometry = computeStateAwareOffAxisFieldGeometry(L, zPos, focusT, zoomT, 0, geometryState);
  if (geometry === null) return null;

  const bundle = traceOffAxisBundleFromSamples(
    sampleCircularPupil(BOKEH_CIRCULAR_PUPIL_RING_SAMPLES),
    geometry,
    L,
    focusT,
    zoomT,
    currentEPSD,
    currentPhysStopSD,
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
