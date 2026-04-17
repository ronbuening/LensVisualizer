/**
 * Pupil aberration analysis — entrance pupil position variation across the field.
 *
 * In first-order (paraxial) optics the entrance pupil position is constant for
 * all field angles.  Real lenses deviate: the apparent EP shifts as a function
 * of field angle because the chief ray through the stop does not satisfy the
 * paraxial launch-height prediction at large angles.  This shift — pupil
 * aberration — couples into distortion, vignetting, and off-axis ray geometry.
 *
 * The core quantity is the chief-ray correction ratio:
 *   r(θ) = solvedYChief(θ) / paraxialYChief(θ)
 * where solvedYChief is the iteratively bisected launch height that places the
 * chief ray at the stop center.  r = 1 everywhere means no pupil aberration.
 *
 * From r the EP z-shift follows directly (derivation in inline comments):
 *   Δz_EP(θ) = (r − 1) × epRatio   [mm, relative to paraxial EP position]
 *
 * Note: Exit-pupil positional variation across the field (XP aberration) requires
 * tracing the chief ray through the full system to extract the exit slope at the
 * last surface.  That analysis is left for a future module.
 */

import { computeFieldGeometryAtState, solveChiefRayLaunchHeight, epZRelStopAtZoom } from "./optics.js";
import type { FieldGeometryState } from "./optics.js";
import type { RuntimeLens } from "../types/optics.js";

// ─── Types ───────────────────────────────────────────────────────────────────

/** One field-angle sample in a pupil aberration profile. */
export interface PupilAberrationSample {
  /** Normalized field position: 0 = on-axis, 1 = vignetting-limited half-field. */
  fieldFrac: number;
  /** Field angle in degrees. */
  fieldDeg: number;
  /**
   * Ratio of iteratively solved chief-ray launch height to the paraxial prediction:
   *   chiefRayCorrection = solvedYChief / paraxialYChief
   *
   * 1.0 → no pupil aberration at this angle.
   * > 1  → apparent EP has shifted away from the object (toward the lens).
   * < 1  → apparent EP has shifted toward the object.
   *
   * Below 1° the solver returns the paraxial estimate, so samples in that range
   * always report 1.0.
   */
  chiefRayCorrection: number;
  /**
   * Change in entrance-pupil z-position from the on-axis paraxial value (mm).
   *
   * Derivation:
   *   paraxialYChief = epRatio × tan(θ)         [mm, launch height]
   *   EP z from 1st surface (paraxial) = epRatio [mm]
   *   EP z from 1st surface (real)    = solvedYChief / tan(θ)
   *                                    = chiefRayCorrection × epRatio
   *   Δz_EP = (chiefRayCorrection − 1) × epRatio
   *
   * Positive → EP moved away from object (toward lens / image side).
   */
  epShiftMm: number;
}

/** Pupil aberration profile sampled across the full field. */
export interface PupilAberrationProfile {
  /** One sample per field angle, from 0° to the vignetting-limited half-field. */
  samples: PupilAberrationSample[];
  /**
   * On-axis paraxial entrance-pupil z-position relative to the stop (mm).
   * Zoom-interpolated for zoom lenses.  Negative = EP is in front of the stop
   * (toward the object), which is the typical case for rear-stop designs.
   */
  paraxialEpZRelStop: number;
  /** Maximum |epShiftMm| across all field samples (mm). */
  maxAbsShiftMm: number;
  /** Vignetting-limited half-field angle used for sampling (degrees). */
  halfFieldDeg: number;
}

// ─── Constants ───────────────────────────────────────────────────────────────

/** Default number of field samples (0° through halfField). */
export const PUPIL_ABERRATION_SAMPLE_COUNT = 9;

// ─── Computation ─────────────────────────────────────────────────────────────

/**
 * Compute the entrance-pupil aberration profile across the field.
 *
 * Samples fieldAngle from 0 to halfField at evenly-spaced intervals.  For each
 * sample, calls solveChiefRayLaunchHeight to find the exact chief-ray launch
 * height, compares it to the paraxial prediction, and computes the resulting
 * EP z-shift in mm.
 *
 * The returned profile is the raw material for a future analysis-drawer tab.
 * All values are state-aware: focus and zoom shifts are accounted for.
 */
export function computePupilAberrationProfile(
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  sampleCount = PUPIL_ABERRATION_SAMPLE_COUNT,
  geometry?: FieldGeometryState,
): PupilAberrationProfile {
  const geom = geometry ?? computeFieldGeometryAtState(focusT, zoomT, L);
  const { halfFieldDeg, epRatio } = geom;
  const paraxialEpZRelStop = epZRelStopAtZoom(zoomT, L);

  const n = Math.max(sampleCount, 2);
  const samples: PupilAberrationSample[] = [];

  for (let i = 0; i < n; i++) {
    const fieldFrac = i / (n - 1);
    const fieldDeg = fieldFrac * halfFieldDeg;
    const tanTheta = Math.tan((fieldDeg * Math.PI) / 180);

    let chiefRayCorrection = 1;
    let epShiftMm = 0;

    // paraxialYChief = epRatio × tanTheta (mm).  Zero at fieldDeg = 0.
    const paraxialYChief = epRatio * tanTheta;
    if (Math.abs(paraxialYChief) > 1e-12) {
      const solvedYChief = solveChiefRayLaunchHeight(fieldDeg, focusT, zoomT, L, geom);
      chiefRayCorrection = isFinite(solvedYChief) ? solvedYChief / paraxialYChief : 1;
      epShiftMm = (chiefRayCorrection - 1) * epRatio;
    }

    samples.push({ fieldFrac, fieldDeg, chiefRayCorrection, epShiftMm });
  }

  const maxAbsShiftMm = Math.max(...samples.map((s) => Math.abs(s.epShiftMm)));

  return { samples, paraxialEpZRelStop, maxAbsShiftMm, halfFieldDeg };
}
