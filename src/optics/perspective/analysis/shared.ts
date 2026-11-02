/**
 * Shared frame reductions and pupil quadrature for movement-aware optical analyses.
 *
 * These utilities keep displacement signs and zero-movement references
 * consistent across distortion, vignetting, and pupil calculations. The disk
 * quadrature lives here so request sampling never imports an analysis entry.
 */

import { dot, length, subtract } from "../../math/vector.js";
import type { Vec3 } from "../../types.js";
import type { PerspectivePupilPoint } from "../pupilBundle.js";
import type { PerspectiveTraceContext } from "../trace.js";

/** Displacement resolved in the fixed sensor's right/down/normal basis. */
export interface SensorFrameDisplacement {
  /** Positive toward the sensor's right edge. */
  uMm: number;
  /** Positive toward the sensor's down/meridional edge. */
  vMm: number;
  /** Positive along the canonical sensor normal. */
  normalMm: number;
  magnitudeMm: number;
}

/**
 * Resolve a point-to-point displacement in the context's fixed sensor basis.
 *
 * @param context - perspective trace context owning the fixed sensor basis
 * @param from - displacement origin in camera coordinates (mm)
 * @param to - displacement destination in camera coordinates (mm)
 * @returns signed sensor-basis components and Euclidean magnitude in mm
 */
export function sensorFrameDisplacement(
  context: Pick<PerspectiveTraceContext, "sensorBasis">,
  from: Vec3,
  to: Vec3,
): SensorFrameDisplacement {
  const delta = subtract(to, from);
  return {
    uMm: dot(delta, context.sensorBasis.u),
    vMm: dot(delta, context.sensorBasis.v),
    normalMm: dot(delta, context.sensorBasis.normal),
    magnitudeMm: length(delta),
  };
}

/**
 * Bind the same camera-anchored prepared state and fixed sensor to zero movement.
 *
 * @param context - active context whose intrinsic state and sensor stay fixed
 * @returns an identity-pose trace context for matched-reference calculations
 */
export function createZeroMovementPerspectiveContext(context: PerspectiveTraceContext): PerspectiveTraceContext {
  return context.zeroMovementContext();
}

/**
 * Compute a finite ratio without manufacturing values for a zero denominator.
 *
 * @param numerator - finite measured quantity
 * @param denominator - finite non-zero reference quantity
 * @returns numerator / denominator, or null when the ratio is undefined
 */
export function finiteRatio(numerator: number, denominator: number): number | null {
  if (!Number.isFinite(numerator) || !Number.isFinite(denominator) || Math.abs(denominator) <= 1e-15) return null;
  const ratio = numerator / denominator;
  return Number.isFinite(ratio) ? ratio : null;
}

const DEFAULT_RADIAL_STRATA = 5;
const DEFAULT_AZIMUTHAL_SAMPLES = 12;

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
// Unlike sampleCircularPupil, equal-population strata omit the center and compute radius directly as sqrt((ring + 0.5) / rings).
export function createAreaWeightedCircularPupilPoints(
  radialStrata = DEFAULT_RADIAL_STRATA,
  azimuthalSamples = DEFAULT_AZIMUTHAL_SAMPLES,
): PerspectivePupilPoint[] {
  const rings = positiveSampleCount(radialStrata, "radialStrata");
  const azimuths = positiveSampleCount(azimuthalSamples, "azimuthalSamples");
  const weight = 1 / (rings * azimuths);
  const points: PerspectivePupilPoint[] = [];
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
