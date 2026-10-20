/**
 * Vignetting / relative illumination analysis — pure function for computing
 * illumination falloff across the field for the current lens state.
 *
 * Launches a dedicated dense meridional pupil sweep for each field angle,
 * counts the fraction of rays that survive aperture clipping (geometric
 * transmission), and applies authored bulk-material absorption plus cos⁴(θ)
 * to produce the photometric relative illumination metric.
 *
 * Assumptions / scope:
 *   - 1D meridional analysis only; no sagittal or full 2D pupil integration.
 *   - Chief-ray offset sets the pupil sweep center; pupil aberrations (shift
 *     of the entrance pupil with field angle) are not modeled.
 *   - cos⁴ factor is applied to the object-space field angle. Sensor
 *     obliquity, Fresnel reflection losses, and coating transmission are out
 *     of scope (see issue #299).
 *   - Result is normalized to on-axis = 1.0; any residual on-axis vignetting
 *     from the entrance pupil being slightly larger than the stop image is
 *     thus folded into the normalization.
 *
 * No React dependencies — fully testable in isolation.  Memoize from current
 * state in a React hook rather than embedding in a component.
 */

import { evenlySpacedSigned, uniformFieldFraction } from "../sampling.js";

import { prepareRayTrace } from "../../trace/rayAdapters.js";
import {
  computeAnalysisFieldGeometryAtState,
  solveChiefRayForRuntimeLens as solveChiefRay,
} from "../../state/fieldAdapters.js";
import { offsetVectorFieldRay } from "../../field/launch.js";
import { projectionLaunchSlopeForField } from "../../field/projection.js";
import { isHeavyLensForRayWork } from "../../trace/raySampling.js";
import { runtimeView } from "../../prescription/runtimeView.js";
import type { AnalysisRequest } from "../request.js";

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
   * Relative illumination from surviving-ray intensity × cos⁴(θ), normalized
   * so on-axis = 1.0. Includes authored bulk absorption as well as vignetting.
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
 * adaptively spaced angles.  At each angle N_PUPIL meridional rays
 * are traced across the entrance-pupil diameter and the surviving fraction is
 * recorded.
 *
 * @param request - prepared geometry, entrance-pupil/stop radii in mm, field and sampling
 * @returns array of VignettingSample, or empty if invalid
 */
export function computeVignettingCurve(request: AnalysisRequest): VignettingSample[] {
  const { preparedGeometry: state, sampling } = request;
  const { focusT, zoomT, aberrationT } = state;
  const L = runtimeView(state.lens);
  const zPos = state.z as number[];
  const { entrancePupilSemiDiameterMm: currentEPSD, stopSemiDiameterMm: currentPhysStopSD } = request.aperture;
  const fieldGeometry = request.fieldGeometry ?? undefined;
  if (currentEPSD <= 0 || L.N < 1) return [];

  /* Pre-compute field geometry for the solved chief ray — accounts for
   * pupil aberration (EP position shifts with field angle) which the old
   * paraxial (B/yRatio) launch ignored.  Critical for retrofocus designs. */
  const geom = fieldGeometry ?? computeAnalysisFieldGeometryAtState(focusT, zoomT, L, aberrationT);
  const halfFieldDeg = geom.halfFieldDeg;
  if (halfFieldDeg <= 0 || !isFinite(halfFieldDeg)) return [];

  /* Adaptive field sampling: ~3° spacing, min 7 samples.  Ultra-wide lenses
   * (>50° half-field) get denser sampling to capture rapid vignetting onset
   * near the field edge. */
  const fieldSamples =
    sampling.vignettingFieldSampleCount !== undefined
      ? Math.max(Math.round(sampling.vignettingFieldSampleCount), 3)
      : Math.max(Math.ceil(halfFieldDeg / 3) + 1, 7);
  const nPupil = Math.max(
    sampling.vignettingPupilSampleCount !== undefined
      ? Math.round(sampling.vignettingPupilSampleCount)
      : isHeavyLensForRayWork(L)
        ? N_PUPIL_HEAVY
        : N_PUPIL_FULL,
    3,
  );

  // Unlike sampleOrthogonalPupilFan, retain even counts and equal ray-count weights for transmission.
  const pupilFractions = evenlySpacedSigned(nPupil);
  const prepared = prepareRayTrace(L, { zPos, focusT, zoomT, stopSD: currentPhysStopSD, ghost: true, aberrationT });

  /* ── Raw geometric transmission per field sample ── */
  const rawGT: number[] = [];
  const rawIntensity: number[] = [];

  for (let i = 0; i < fieldSamples; i++) {
    const fieldAngleDeg = uniformFieldFraction(i, fieldSamples) * halfFieldDeg;
    const solve = solveChiefRay(fieldAngleDeg, focusT, zoomT, L, geom, aberrationT);
    const launch = projectionLaunchSlopeForField(L, fieldAngleDeg);
    if (launch.status === "out-of-domain" && !solve.vectorLaunch) {
      rawGT.push(0);
      rawIntensity.push(0);
      continue;
    }

    const uField = launch.uField;
    const yChief = solve.vectorLaunch ? NaN : solve.yLaunch;

    const vectorTrace = solve.vectorLaunch
      ? prepareRayTrace(L, {
          zPos,
          focusT,
          zoomT,
          stopSD: currentPhysStopSD,
          ghost: true,
          aberrationT,
          launchBoundT: solve.vectorLaunch.launchBoundT,
        })
      : undefined;

    /* Dense meridional pupil sweep: nPupil evenly-spaced fractions in [−1, +1] */
    let surviving = 0;
    let transmittedIntensity = 0;
    for (let j = 0; j < nPupil; j++) {
      const pupilFrac = pupilFractions[j];
      const pupilOffset = pupilFrac * currentEPSD;
      const trace = solve.vectorLaunch
        ? vectorTrace!.vector(offsetVectorFieldRay(solve.vectorLaunch, 0, pupilOffset))
        : prepared.ray(yChief + pupilOffset, uField);
      if (!trace.clipped) {
        surviving++;
        transmittedIntensity += trace.transmission ?? 1;
      }
    }

    rawGT.push(surviving / nPupil);
    rawIntensity.push(transmittedIntensity / nPupil);
  }

  /* ── Normalise to on-axis = 1.0 ── */
  const gtAxis = rawGT[0];
  const intensityAxis = rawIntensity[0];
  if (gtAxis === 0 || intensityAxis === 0) return [];

  const samples: VignettingSample[] = [];
  for (let i = 0; i < fieldSamples; i++) {
    const fieldAngleDeg = uniformFieldFraction(i, fieldSamples) * halfFieldDeg;
    const thetaRad = (fieldAngleDeg * Math.PI) / 180;
    const cos4 = Math.pow(Math.cos(thetaRad), 4);

    const gt = rawGT[i] / gtAxis;
    /* Intensity normalization keeps on-axis ri = cos⁴(0) = 1.0. */
    const ri = (rawIntensity[i] * cos4) / intensityAxis;

    samples.push({
      fieldAngleDeg,
      geometricTransmission: gt,
      relativeIllumination: ri,
    });
  }

  return samples;
}
