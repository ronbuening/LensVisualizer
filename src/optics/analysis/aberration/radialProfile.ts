/** Shared pure radial-density reductions for spherical, bokeh and perspective analysis. */

import {
  BOKEH_RADIAL_PROFILE_BIN_COUNT,
  type BokehPoint,
  type BokehRadialProfile,
  type BokehRadialProfileBin,
  type BokehBrightnessCharacter,
} from "./types.js";

const BOKEH_BRIGHTNESS_RATIO_THRESHOLD = 1.15;

export function emptyRadialProfile(): BokehRadialProfile {
  return {
    bins: [],
    centerDensity: 0,
    rimDensity: 0,
  };
}

/**
 * Build an annular radial density profile for a bokeh point cloud.
 *
 * Densities are normalized to the densest annulus so center/rim comparison is
 * independent of absolute transmission. Offsets are measured relative to the
 * supplied footprint centroid.
 *
 * @param points - bokeh points with sagittal/tangential offsets in mm
 * @param centroidSagittal - sagittal centroid in mm
 * @param centroidTangential - tangential centroid in mm
 * @param binCount - number of radial bins
 * @returns normalized radial profile with center/rim density summaries
 */
export function buildBokehRadialProfile(
  points: readonly BokehPoint[],
  centroidSagittal: number,
  centroidTangential: number,
  binCount = BOKEH_RADIAL_PROFILE_BIN_COUNT,
): BokehRadialProfile {
  if (points.length === 0 || binCount < 1) return emptyRadialProfile();

  const clampedBinCount = Math.max(1, Math.round(binCount));
  const radii = points.map((point) => {
    const dx = point.sagittalOffset - centroidSagittal;
    const dy = point.tangentialOffset - centroidTangential;
    return Math.sqrt(dx * dx + dy * dy);
  });
  const maxRadius = Math.max(...radii);
  if (maxRadius <= 1e-12) {
    const bins: BokehRadialProfileBin[] = Array.from({ length: clampedBinCount }, (_, index) => ({
      innerRadiusFraction: index / clampedBinCount,
      outerRadiusFraction: (index + 1) / clampedBinCount,
      radiusFraction: (index + 0.5) / clampedBinCount,
      density: index === 0 ? 1 : 0,
      energyFraction: index === 0 ? 1 : 0,
    }));
    return {
      bins,
      centerDensity: 1,
      rimDensity: 0,
    };
  }

  const annularEnergy = new Float64Array(clampedBinCount);
  let totalWeight = 0;

  for (let index = 0; index < points.length; index++) {
    const normalizedRadius = Math.min(radii[index] / maxRadius, 0.999999);
    const binIndex = Math.min(clampedBinCount - 1, Math.floor(normalizedRadius * clampedBinCount));
    annularEnergy[binIndex] += points[index].weight;
    totalWeight += points[index].weight;
  }

  let maxDensity = 0;
  const rawDensities = new Float64Array(clampedBinCount);
  for (let index = 0; index < clampedBinCount; index++) {
    const innerRadiusFraction = index / clampedBinCount;
    const outerRadiusFraction = (index + 1) / clampedBinCount;
    const annulusArea =
      Math.PI * (outerRadiusFraction * outerRadiusFraction - innerRadiusFraction * innerRadiusFraction);
    const density = annulusArea > 1e-12 ? annularEnergy[index] / annulusArea : 0;
    rawDensities[index] = density;
    if (density > maxDensity) maxDensity = density;
  }

  if (maxDensity <= 1e-12 || totalWeight <= 1e-12) return emptyRadialProfile();

  const bins: BokehRadialProfileBin[] = Array.from({ length: clampedBinCount }, (_, index) => ({
    innerRadiusFraction: index / clampedBinCount,
    outerRadiusFraction: (index + 1) / clampedBinCount,
    radiusFraction: (index + 0.5) / clampedBinCount,
    density: rawDensities[index] / maxDensity,
    energyFraction: annularEnergy[index] / totalWeight,
  }));

  const centerBinCount = Math.max(1, Math.round(clampedBinCount * 0.25));
  const rimStart = Math.max(0, clampedBinCount - centerBinCount);
  const centerDensity = bins.slice(0, centerBinCount).reduce((sum, bin) => sum + bin.density, 0) / centerBinCount;
  const rimDensity =
    bins.slice(rimStart).reduce((sum, bin) => sum + bin.density, 0) / Math.max(1, clampedBinCount - rimStart);

  return {
    bins,
    centerDensity,
    rimDensity,
  };
}

/**
 * Classify bokeh brightness from the center-to-rim radial density ratio.
 *
 * @param radialProfile - normalized annular density profile
 * @returns brightness class and numeric center/rim density ratio
 */
export function classifyBokehBrightnessCharacter(radialProfile: BokehRadialProfile): {
  brightnessCharacter: BokehBrightnessCharacter;
  centerToRimRatio: number;
} {
  const rimDensity = radialProfile.rimDensity;
  const centerDensity = radialProfile.centerDensity;
  const centerToRimRatio = rimDensity > 1e-9 ? centerDensity / rimDensity : centerDensity > 1e-9 ? 999 : 1;

  if (centerToRimRatio > BOKEH_BRIGHTNESS_RATIO_THRESHOLD) {
    return {
      brightnessCharacter: "center-bright",
      centerToRimRatio,
    };
  }
  if (centerToRimRatio < 1 / BOKEH_BRIGHTNESS_RATIO_THRESHOLD) {
    return {
      brightnessCharacter: "edge-bright",
      centerToRimRatio,
    };
  }
  return {
    brightnessCharacter: "neutral",
    centerToRimRatio,
  };
}
