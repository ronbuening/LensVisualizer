import type { RuntimeLens } from "../../types/optics.js";
import type { SAProfilePoint, SphericalAberrationResult } from "./types.js";
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
