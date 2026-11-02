/** Deterministic pupil and field patterns shared by optical analyses. */

/** Unlike the orthogonal fan, marginal fallbacks descend through positive candidates for focus searches. */
export const MARGINAL_PUPIL_FRACTIONS = [0.97, 0.95, 0.9, 0.85, 0.8] as const;
/** Representative preview fields omit the outer edge, unlike FULL_FIELD_FRACTIONS. */
export const PREVIEW_FIELD_FRACTIONS = [0, 0.25, 0.5, 0.75] as const;
/** Endpoint-inclusive quarter-field plan shared by field curvature and lateral color. */
export const FULL_FIELD_FRACTIONS = [0, 0.25, 0.5, 0.75, 1] as const;
/** Sparse signed chromatic fan; unlike the orthogonal fan, its outer samples stay inside the rim. */
export const CHROMATIC_PUPIL_FRACTIONS = [-0.9, -0.6, -0.3, 0, 0.3, 0.6, 0.9] as const;

/**
 * One endpoint-inclusive field fraction; callers retain their count and iteration policy.
 *
 * @param index - sample index in the caller's original order
 * @param sampleCount - unmodified denominator count
 * @returns normalized field fraction, without rounding or singleton repair
 */
export function uniformFieldFraction(index: number, sampleCount: number): number {
  return index / (sampleCount - 1);
}

/**
 * Endpoint-inclusive signed fractions, with the caller's count unchanged.
 *
 * @param count - array length and denominator count
 * @returns fractions in increasing order; a singleton retains its raw NaN
 */
export function evenlySpacedSigned(count: number): number[] {
  // Unlike uniformFieldFraction, multiply before dividing to preserve signed-fan rounding.
  return Array.from({ length: count }, (_, index) => -1 + (2 * index) / (count - 1));
}

/**
 * Map signed fractions onto the fixed sensor's vertical axis.
 *
 * @param count - unchanged signed-axis sample count
 * @returns ordered normalized sensor coordinates
 */
export function signedVerticalSensorUvs(count: number): { u: number; v: number }[] {
  return evenlySpacedSigned(count).map((v) => ({ u: 0, v }));
}

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

  // Unlike raw evenlySpacedSigned, pupil fans force odd counts and repair the singleton to the chief ray.
  const fractions = oddCount === 1 ? [0] : evenlySpacedSigned(oddCount);
  return fractions.map((pupilFraction, index) => {
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
  // Unlike createAreaWeightedCircularPupilPoints, populations set radii and the first singleton is central.
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

/**
 * Express the circular pupil pattern as weighted normalized u/v points.
 *
 * @param ringSamples - family-owned ring populations
 * @returns identical ordered pupil points for perspective bokeh and coma
 */
export function circularPupilPoints(ringSamples: readonly number[]): { u: number; v: number; weight: number }[] {
  return sampleCircularPupil(ringSamples).map((sample) => ({
    u: sample.xFraction,
    v: sample.yFraction,
    weight: sample.weight,
  }));
}
