/** Two-dimensional pupil survival, a labelled cos-fourth estimate, and
 * ideal sensor irradiance from reciprocal exact tracing. No React state.
 */

import {
  computeAnalysisFieldGeometryAtState,
  offsetVectorFieldRay,
  solveChiefRay,
  traceRay,
  traceRayVector,
  traceSkewRay,
} from "./optics.js";
import { createAreaWeightedCircularPupilPoints } from "./math/pupilSampling.js";
import { computeSensorIrradiance, type SensorIrradianceResult } from "./analysis/sensorIrradiance.js";
import { normalizeRuntimeLens } from "./prescription/normalizeLensData.js";
import { prepareState } from "./state/prepareState.js";
import { projectionLaunchSlopeForField } from "./projection.js";
import type { FieldGeometryState } from "./optics.js";
import { isHeavyLensForRayWork } from "./raySampling.js";
import type { AnalysisSamplingOptions } from "./analysis/analysisQuality.js";
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
   * Relative illumination from surviving-ray intensity × cos⁴(θ), normalized
   * so on-axis = 1.0. Includes authored bulk absorption as well as vignetting.
   */
  relativeIllumination: number;
  /** Physical sensor integral for uniform external radiance, without material/coating losses. */
  sensorIrradiance?: SensorIrradianceResult;
  sensorRelativeIllumination?: number | null;
}

const N_PUPIL_FULL = 192;
const N_PUPIL_HEAVY = 96;

/**
 * Compute the vignetting / relative illumination curve for the current lens state.
 *
 * Samples the field from center (0°) to the current half-field edge at
 * FIELD_SAMPLES evenly-spaced angles.  At each angle N_PUPIL area-weighted rays
 * are traced across the circular entrance pupil and the surviving fraction is
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
  sampling: AnalysisSamplingOptions = {},
): VignettingSample[] {
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

  /* ── Raw geometric transmission per field sample ── */
  const rawGT: number[] = [];
  const rawIntensity: number[] = [];
  const irradiance: SensorIrradianceResult[] = [];
  const state = prepareState(normalizeRuntimeLens(L), focusT, zoomT, aberrationT);
  const rings = Math.max(2, Math.round(nPupil / 16));
  const pupilPoints = createAreaWeightedCircularPupilPoints(rings, 16);

  for (let i = 0; i < fieldSamples; i++) {
    const fieldAngleDeg = (i / (fieldSamples - 1)) * halfFieldDeg;
    const solve = solveChiefRay(fieldAngleDeg, focusT, zoomT, L, geom, aberrationT);
    const launch = projectionLaunchSlopeForField(L, fieldAngleDeg);
    if (launch.status === "out-of-domain" && !solve.vectorLaunch) {
      rawGT.push(0);
      rawIntensity.push(0);
      irradiance.push({
        status: "unsupported",
        irradiancePerRadiance: null,
        estimatedRelativeError: null,
        sampleCount: 0,
      });
      continue;
    }

    const uField = launch.uField;
    const yChief = solve.vectorLaunch ? NaN : solve.yLaunch;

    let surviving = 0;
    let transmittedIntensity = 0;
    for (const pupil of pupilPoints) {
      const x = pupil.u * currentEPSD;
      const y = pupil.v * currentEPSD;
      const trace = solve.vectorLaunch
        ? traceRayVector(
            offsetVectorFieldRay(solve.vectorLaunch, x, y),
            zPos,
            currentPhysStopSD,
            true,
            L,
            focusT,
            zoomT,
            aberrationT,
          )
        : traceSkewRay(x, yChief + y, 0, uField, focusT, zoomT, currentPhysStopSD, true, L, aberrationT);
      if (!trace.clipped) {
        surviving += pupil.weight;
        transmittedIntensity += pupil.weight * (trace.transmission ?? 1);
      }
    }
    rawGT.push(surviving);
    rawIntensity.push(transmittedIntensity);
    const chief = solve.vectorLaunch
      ? traceRayVector(solve.vectorLaunch, zPos, currentPhysStopSD, true, L, focusT, zoomT, aberrationT)
      : traceRay(yChief, uField, zPos, focusT, zoomT, currentPhysStopSD, true, L, aberrationT);
    irradiance.push(
      chief.clipped
        ? { status: "failed", irradiancePerRadiance: null, estimatedRelativeError: null, sampleCount: 0 }
        : computeSensorIrradiance(state, chief.y, currentPhysStopSD, { radialStrata: rings, azimuthalSamples: 16 }),
    );
  }

  /* ── Normalise to on-axis = 1.0 ── */
  const gtAxis = rawGT[0];
  const intensityAxis = rawIntensity[0];
  if (gtAxis === 0 || intensityAxis === 0) return [];

  const samples: VignettingSample[] = [];
  for (let i = 0; i < fieldSamples; i++) {
    const fieldAngleDeg = (i / (fieldSamples - 1)) * halfFieldDeg;
    const thetaRad = (fieldAngleDeg * Math.PI) / 180;
    const cos4 = Math.pow(Math.cos(thetaRad), 4);

    const gt = rawGT[i] / gtAxis;
    /* Intensity normalization keeps on-axis ri = cos⁴(0) = 1.0. */
    const ri = (rawIntensity[i] * cos4) / intensityAxis;

    samples.push({
      fieldAngleDeg,
      geometricTransmission: gt,
      relativeIllumination: ri,
      sensorIrradiance: irradiance[i],
      sensorRelativeIllumination:
        (irradiance[0].irradiancePerRadiance ?? 0) > 0 && irradiance[i].irradiancePerRadiance !== null
          ? irradiance[i].irradiancePerRadiance! / irradiance[0].irradiancePerRadiance!
          : null,
    });
  }

  return samples;
}
