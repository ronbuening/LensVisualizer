/** Shared equal-area quadrature for circular optical pupils. */

export interface CircularPupilPoint {
  u: number;
  v: number;
  weight: number;
}

/**
 * Build a deterministic equal-area midpoint quadrature over the unit disk.
 *
 * Equal increments of r² represent equal annular area. Alternating each
 * ring's azimuthal phase avoids lining up every radial stratum.
 *
 * @param radialStrata - number of equal-area radial annuli
 * @param azimuthalSamples - samples around every annulus
 * @returns normalized pupil coordinates whose weights sum to one
 */
export function createAreaWeightedCircularPupilPoints(radialStrata = 5, azimuthalSamples = 12): CircularPupilPoint[] {
  const rings = positiveSampleCount(radialStrata, "radialStrata");
  const azimuths = positiveSampleCount(azimuthalSamples, "azimuthalSamples");
  const weight = 1 / (rings * azimuths);
  const points: CircularPupilPoint[] = [];
  for (let ring = 0; ring < rings; ring++) {
    const radius = Math.sqrt((ring + 0.5) / rings);
    const phase = (ring % 2) * (Math.PI / azimuths);
    for (let azimuth = 0; azimuth < azimuths; azimuth++) {
      const angle = phase + (2 * Math.PI * azimuth) / azimuths;
      points.push({ u: radius * Math.cos(angle), v: radius * Math.sin(angle), weight });
    }
  }
  return points;
}

function positiveSampleCount(value: number, label: string): number {
  if (!Number.isFinite(value) || value <= 0) throw new RangeError(`${label} must be finite and greater than zero`);
  return Math.max(1, Math.round(value));
}
