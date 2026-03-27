/**
 * Distortion analysis — pure function for computing a distortion curve
 * across the field for the current lens state.
 *
 * Traces chief rays at sampled field angles, compares real image height
 * to the rectilinear ideal (EFL × tan θ), and returns distortion %.
 *
 * No React dependencies — fully testable in isolation. Memoize from
 * current state in a hook rather than embedding in a component.
 */

import { traceRay, halfFieldAtZoom, bAtZoom, yRatioAtZoom } from "./optics.js";
import type { RuntimeLens } from "../types/optics.js";

/** A single sample point on the distortion curve. */
export interface DistortionSample {
  /** Field angle in degrees (0 = on-axis). */
  fieldAngleDeg: number;
  /** Distortion as a percentage: 100 × (real − ideal) / ideal. */
  distortionPercent: number;
  /** Traced chief-ray image height (mm, signed). */
  realHeight: number;
  /** Ideal rectilinear image height: EFL × tan(θ) (mm, signed). */
  idealHeight: number;
}

/** Number of evenly-spaced field samples (including center and edge). */
const SAMPLE_COUNT = 11;

/**
 * Compute a distortion curve for the current lens state.
 *
 * Samples the field from center (0°) to the current half-field edge at
 * SAMPLE_COUNT evenly-spaced angles. At each angle a chief ray is traced
 * through the system and the real image height is compared against the
 * ideal rectilinear projection.
 *
 * The chief-ray launch convention matches the off-axis display rays:
 *   uField = −tan(θ)
 *   yChief = −(B / yRatio) × uField
 *
 * @param L               — runtime lens object
 * @param zPos            — surface z-positions for current focus/zoom
 * @param focusT          — focus slider [0..1]
 * @param zoomT           — zoom slider [0..1]
 * @param dynamicEFL      — effective focal length for current focus/zoom (mm)
 * @param currentPhysStopSD — current physical stop semi-diameter (mm)
 * @returns                  array of DistortionSample, or empty if tracing fails
 */
export function computeDistortionCurve(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  dynamicEFL: number,
  _currentPhysStopSD: number,
): DistortionSample[] {
  if (L.N < 1 || dynamicEFL === 0) return [];

  const halfFieldDeg = halfFieldAtZoom(zoomT, L);
  if (halfFieldDeg <= 0 || !isFinite(halfFieldDeg)) return [];

  const lastSurfZ = zPos[L.N - 1];
  const bVal = bAtZoom(zoomT, L);
  const yRatio = yRatioAtZoom(zoomT, L);
  if (yRatio === 0) return [];

  const samples: DistortionSample[] = [];

  for (let i = 0; i < SAMPLE_COUNT; i++) {
    const fieldAngleDeg = (i / (SAMPLE_COUNT - 1)) * halfFieldDeg;

    /* Center sample: distortion is 0 by definition */
    if (i === 0) {
      samples.push({ fieldAngleDeg: 0, distortionPercent: 0, realHeight: 0, idealHeight: 0 });
      continue;
    }

    const thetaRad = (fieldAngleDeg * Math.PI) / 180;
    const uField = -Math.tan(thetaRad);
    const yChief = -(bVal / yRatio) * uField;

    /* Trace chief ray (no stop clipping — chief ray passes through stop center) */
    const trace = traceRay(yChief, uField, zPos, focusT, zoomT, undefined, true, L);

    /* Project to the image plane at the last surface z-position.
     * Using the last surface rather than a separate image plane keeps
     * this consistent with the existing off-axis ray convention. */
    const realHeight = trace.y + trace.u * (zPos[zPos.length - 1] - lastSurfZ);

    /* Ideal rectilinear height: negative because the image is inverted */
    const idealHeight = -(dynamicEFL * Math.tan(thetaRad));

    if (!isFinite(realHeight) || !isFinite(idealHeight) || idealHeight === 0) continue;

    const distortionPercent = (100 * (realHeight - idealHeight)) / idealHeight;

    samples.push({
      fieldAngleDeg,
      distortionPercent: isFinite(distortionPercent) ? distortionPercent : 0,
      realHeight,
      idealHeight,
    });
  }

  return samples;
}
