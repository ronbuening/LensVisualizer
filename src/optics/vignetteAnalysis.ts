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

import { traceRay, solveChiefRayLaunchHeight, computeAnalysisFieldGeometryAtState } from "./optics.js";
import { projectionLaunchSlopeForField } from "./projection.js";
import type { FieldGeometryState } from "./optics.js";
import { isHeavyLensForRayWork } from "./raySampling.js";
import type { RayTraceOptions } from "./rayTrace.js";
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

/**
 * Number of rays per field sample for the dense pupil sweep.
 *
 * Issue #299 preferred starting point: 128, raised to 192 for better
 * resolution of sharp clipping transitions on extreme wide-angle meniscus
 * elements.  This is ~16× denser than the display ray fan.
 *
 * Heavy lenses (fisheyes, ≥32 surfaces, ≥50 mm SD, ≥40° half-field) halve this
 * to keep settled-compute time tolerable; the curve smoothness loss is minor
 * because clipping transitions on those lenses are dominated by element
 * geometry that the lower sampling still resolves.
 */
const N_PUPIL_FULL = 192;
const N_PUPIL_HEAVY = 96;

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
  fieldGeometry?: FieldGeometryState,
  aberrationT = 0,
  options?: RayTraceOptions,
): VignettingSample[] {
  if (currentEPSD <= 0 || L.N < 1) return [];

  /* Pre-compute field geometry for the solved chief ray — accounts for
   * pupil aberration (EP position shifts with field angle) which the old
   * paraxial (B/yRatio) launch ignored.  Critical for retrofocus designs. */
  const geom = fieldGeometry ?? computeAnalysisFieldGeometryAtState(focusT, zoomT, L, aberrationT, options);
  const halfFieldDeg = geom.halfFieldDeg;
  if (halfFieldDeg <= 0 || !isFinite(halfFieldDeg)) return [];

  /* Adaptive field sampling: ~3° spacing, min 7 samples.  Ultra-wide lenses
   * (>50° half-field) get denser sampling to capture rapid vignetting onset
   * near the field edge. */
  const fieldSamples = Math.max(Math.ceil(halfFieldDeg / 3) + 1, 7);
  const nPupil = isHeavyLensForRayWork(L) ? N_PUPIL_HEAVY : N_PUPIL_FULL;

  /* ── Raw geometric transmission per field sample ── */
  const rawGT: number[] = [];

  for (let i = 0; i < fieldSamples; i++) {
    const fieldAngleDeg = (i / (fieldSamples - 1)) * halfFieldDeg;
    const launch = projectionLaunchSlopeForField(L, fieldAngleDeg);
    if (launch.status === "out-of-domain") {
      rawGT.push(0);
      continue;
    }
    const uField = launch.uField;

    /* Solved chief-ray launch: iteratively corrects for pupil aberration.
     * Falls back to paraxial for small angles (<1°) automatically. */
    const yChief = solveChiefRayLaunchHeight(fieldAngleDeg, focusT, zoomT, L, geom, aberrationT, options);

    /* Dense meridional pupil sweep: nPupil evenly-spaced fractions in [−1, +1] */
    let surviving = 0;
    for (let j = 0; j < nPupil; j++) {
      const pupilFrac = -1 + (2 * j) / (nPupil - 1);
      const y0 = yChief + pupilFrac * currentEPSD;
      const trace = traceRay(y0, uField, zPos, focusT, zoomT, currentPhysStopSD, true, L, aberrationT, options);
      if (!trace.clipped) surviving++;
    }

    rawGT.push(surviving / nPupil);
  }

  /* ── Normalise to on-axis = 1.0 ── */
  const gtAxis = rawGT[0];
  if (gtAxis === 0) return [];

  const samples: VignettingSample[] = [];
  for (let i = 0; i < fieldSamples; i++) {
    const fieldAngleDeg = (i / (fieldSamples - 1)) * halfFieldDeg;
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
