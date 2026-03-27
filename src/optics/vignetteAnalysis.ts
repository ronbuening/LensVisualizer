/**
 * Vignetting / relative illumination analysis — pure function for computing
 * illumination falloff across the field for the current lens state.
 *
 * Launches a dedicated dense meridional pupil sweep for each field angle,
 * counts the fraction of rays that survive aperture clipping (geometric
 * transmission), and multiplies by cos⁴(θ) to produce the photometric
 * relative illumination metric.
 *
 * Assumptions / scope:
 *   - 1D meridional analysis only; no sagittal or full 2D pupil integration.
 *   - Chief-ray offset sets the pupil sweep center; pupil aberrations (shift
 *     of the entrance pupil with field angle) are not modeled.
 *   - cos⁴ factor is applied to the object-space field angle.  Sensor
 *     obliquity, Fresnel reflection losses, and coating transmission are out
 *     of scope (see issue #299).
 *   - Result is normalized to on-axis = 1.0; any residual on-axis vignetting
 *     from the entrance pupil being slightly larger than the stop image is
 *     thus folded into the normalization.
 *
 * No React dependencies — fully testable in isolation.  Memoize from current
 * state in a React hook rather than embedding in a component.
 */

import { traceRay, halfFieldAtZoom, bAtZoom, yRatioAtZoom } from "./optics.js";
import type { RuntimeLens } from "../types/optics.js";

/** A single sample on the vignetting / relative-illumination curve. */
export interface VignettingSample {
  /** Field angle in degrees (0 = on-axis). */
  fieldAngleDeg: number;
  /**
   * Geometric transmission: fraction of pupil rays that survive all apertures,
   * normalized so on-axis = 1.0.
   */
  geometricTransmission: number;
  /**
   * Relative illumination: geometricTransmission × cos⁴(θ), normalized so
   * on-axis = 1.0.  Combines vignetting with the cos⁴ illumination falloff law.
   */
  relativeIllumination: number;
}

/** Number of evenly-spaced field samples (including center and edge). */
const FIELD_SAMPLES = 11;

/**
 * Number of rays per field sample for the dense pupil sweep.
 *
 * Issue #299 preferred starting point: 128.  This is ~12× denser than the
 * display ray fan and produces a smooth illumination curve.  Reduce only if
 * performance is unacceptable on the target device.
 */
const N_PUPIL = 128;

/**
 * Compute the vignetting / relative illumination curve for the current lens state.
 *
 * Samples the field from center (0°) to the current half-field edge at
 * FIELD_SAMPLES evenly-spaced angles.  At each angle N_PUPIL meridional rays
 * are traced across the entrance-pupil diameter and the surviving fraction is
 * recorded.
 *
 * @param L                  — runtime lens object (frozen, from buildLens)
 * @param zPos               — surface z-positions for current focus/zoom state
 * @param focusT             — focus slider [0..1]
 * @param zoomT              — zoom slider [0..1]
 * @param currentEPSD        — current entrance-pupil semi-diameter (mm)
 * @param currentPhysStopSD  — current physical stop semi-diameter (mm)
 * @returns                    array of VignettingSample, or empty if invalid
 */
export function computeVignettingCurve(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): VignettingSample[] {
  if (currentEPSD <= 0 || L.N < 1) return [];

  const halfFieldDeg = halfFieldAtZoom(zoomT, L);
  if (halfFieldDeg <= 0 || !isFinite(halfFieldDeg)) return [];

  const bVal = bAtZoom(zoomT, L);
  const yRatio = yRatioAtZoom(zoomT, L);
  if (yRatio === 0) return [];

  /* ── Raw geometric transmission per field sample ── */
  const rawGT: number[] = [];

  for (let i = 0; i < FIELD_SAMPLES; i++) {
    const fieldAngleDeg = (i / (FIELD_SAMPLES - 1)) * halfFieldDeg;
    const thetaRad = (fieldAngleDeg * Math.PI) / 180;

    /* Chief-ray launch: same convention as distortionAnalysis.ts */
    const uField = -Math.tan(thetaRad);
    const yChief = -(bVal / yRatio) * uField;

    /* Dense meridional pupil sweep: N_PUPIL evenly-spaced fractions in [−1, +1] */
    let surviving = 0;
    for (let j = 0; j < N_PUPIL; j++) {
      /* Map j ∈ [0, N_PUPIL−1] → pupilFrac ∈ [−1, +1] */
      const pupilFrac = N_PUPIL === 1 ? 0 : -1 + (2 * j) / (N_PUPIL - 1);
      const y0 = yChief + pupilFrac * currentEPSD;
      const trace = traceRay(y0, uField, zPos, focusT, zoomT, currentPhysStopSD, true, L);
      if (!trace.clipped) surviving++;
    }

    rawGT.push(surviving / N_PUPIL);
  }

  /* ── Normalise to on-axis = 1.0 ── */
  const gtAxis = rawGT[0];
  if (gtAxis === 0) return [];

  const samples: VignettingSample[] = [];
  for (let i = 0; i < FIELD_SAMPLES; i++) {
    const fieldAngleDeg = (i / (FIELD_SAMPLES - 1)) * halfFieldDeg;
    const thetaRad = (fieldAngleDeg * Math.PI) / 180;
    const cos4 = Math.pow(Math.cos(thetaRad), 4);

    const gt = rawGT[i] / gtAxis;
    /* ri is normalised by the same on-axis GT, so on-axis ri = cos⁴(0) = 1.0 */
    const ri = (rawGT[i] * cos4) / gtAxis;

    samples.push({
      fieldAngleDeg,
      geometricTransmission: gt,
      relativeIllumination: ri,
    });
  }

  return samples;
}
