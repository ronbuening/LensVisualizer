/** Deterministic pupil patterns shared by optical analyses. */

/** One sample in a tangential or sagittal orthogonal pupil fan. */
export interface OrthogonalPupilSample {
  index: number;
  pupilFraction: number;
  xFraction: number;
  yFraction: number;
}

/** One area-weighted sample in a circular pupil pattern. */
export interface CircularPupilSample {
  index: number;
  xFraction: number;
  yFraction: number;
  radiusFraction: number;
  azimuthRad: number;
  weight: number;
}

/** Default odd sample count for tangential/sagittal pupil fans. */
export const DEFAULT_ORTHOGONAL_PUPIL_FAN_SAMPLE_COUNT = 51;
/** Default circular point-cloud ring population from center to rim. */
export const DEFAULT_CIRCULAR_PUPIL_RING_SAMPLES = [1, 6, 12, 18, 24] as const;

/**
 * Build an odd tangential or sagittal pupil fan.
 *
 * @param sampleCount - requested number of pupil samples
 * @param orientation - fan direction across the pupil
 * @returns samples with normalized pupil fractions in `[-1, 1]`
 */
export function sampleOrthogonalPupilFan(
  sampleCount: number = DEFAULT_ORTHOGONAL_PUPIL_FAN_SAMPLE_COUNT,
  orientation: "tangential" | "sagittal",
): OrthogonalPupilSample[] {
  const roundedCount = Math.max(1, Math.round(sampleCount));
  const oddCount = roundedCount % 2 === 0 ? roundedCount + 1 : roundedCount;

  return Array.from({ length: oddCount }, (_, index) => {
    const pupilFraction = oddCount === 1 ? 0 : -1 + (2 * index) / (oddCount - 1);
    return {
      index,
      pupilFraction,
      xFraction: orientation === "sagittal" ? pupilFraction : 0,
      yFraction: orientation === "tangential" ? pupilFraction : 0,
    };
  });
}

/**
 * Build an area-weighted circular pupil sample pattern.
 *
 * Ring populations approximate equal-area annuli. Weights sum to one when all
 * samples survive clipping.
 *
 * @param ringSamples - number of angular samples per radial ring
 * @returns circular pupil samples with normalized x/y fractions and weights
 */
export function sampleCircularPupil(
  ringSamples: readonly number[] = DEFAULT_CIRCULAR_PUPIL_RING_SAMPLES,
): CircularPupilSample[] {
  const normalizedRingSamples = ringSamples
    .map((count) => Math.max(1, Math.round(count)))
    .filter((count) => Number.isFinite(count) && count > 0);
  if (normalizedRingSamples.length === 0) return [];

  const totalSamples = normalizedRingSamples.reduce((sum, count) => sum + count, 0);
  const weight = 1 / totalSamples;
  const samples: CircularPupilSample[] = [];
  let cumulative = 0;

  normalizedRingSamples.forEach((count, ringIndex) => {
    const innerRadiusSq = cumulative / totalSamples;
    const outerRadiusSq = (cumulative + count) / totalSamples;
    const radiusFraction = count === 1 && ringIndex === 0 ? 0 : Math.sqrt((innerRadiusSq + outerRadiusSq) / 2);
    const phaseOffset = count === 1 ? 0 : ((ringIndex % 2) * Math.PI) / count;

    for (let sampleIndex = 0; sampleIndex < count; sampleIndex++) {
      const azimuthRad = count === 1 ? 0 : phaseOffset + (2 * Math.PI * sampleIndex) / count;
      samples.push({
        index: samples.length,
        xFraction: radiusFraction * Math.cos(azimuthRad),
        yFraction: radiusFraction * Math.sin(azimuthRad),
        radiusFraction,
        azimuthRad,
        weight,
      });
    }

    cumulative += count;
  });

  return samples;
}
