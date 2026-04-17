/**
 * Pupil aberration analysis — entrance and exit pupil position variation across the field.
 *
 * In first-order (paraxial) optics the pupil positions are constant for all field angles.
 * Real lenses deviate: both the apparent entrance pupil (EP) and exit pupil (XP) shift as
 * a function of field angle.  These shifts — pupil aberrations — couple into distortion,
 * vignetting, and off-axis ray geometry.
 *
 * ── Entrance Pupil (EP) Aberration ──────────────────────────────────────────────────────
 *
 * The core quantity is the chief-ray correction ratio:
 *   r(θ) = solvedYChief(θ) / paraxialYChief(θ)
 * where solvedYChief is the iteratively bisected launch height that places the
 * chief ray at the stop center.  r = 1 everywhere means no EP aberration.
 *
 * From r the EP z-shift follows directly:
 *   Δz_EP(θ) = (r − 1) × epRatio   [mm, relative to paraxial EP position]
 *
 * ── Exit Pupil (XP) Aberration ─────────────────────────────────────────────────────────
 *
 * For each field angle, the same iteratively-solved chief ray is traced through the
 * full lens system.  The exit slope u' and height y' at the last surface give the
 * real XP z-position by back-projection:
 *   xpZ_real(θ) = −y'_last / u'_last   [mm, relative to last surface]
 *
 * The XP shift is the deviation from the on-axis paraxial value:
 *   Δz_XP(θ) = xpZ_real(θ) − xpZRelLastSurf_paraxial
 */

import {
  computeFieldGeometryAtState,
  solveChiefRayLaunchHeight,
  epZRelStopAtZoom,
  xpZRelLastSurfAtZoom,
  doLayout,
  traceRay,
} from "./optics.js";
import type { FieldGeometryState } from "./optics.js";
import type { RuntimeLens } from "../types/optics.js";

// ─── Types ───────────────────────────────────────────────────────────────────

/** One field-angle sample in an entrance-pupil aberration profile. */
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

/** Entrance-pupil aberration profile sampled across the full field. */
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

/** One field-angle sample in an exit-pupil aberration profile. */
export interface ExitPupilAberrationSample {
  /** Normalized field position: 0 = on-axis, 1 = vignetting-limited half-field. */
  fieldFrac: number;
  /** Field angle in degrees. */
  fieldDeg: number;
  /**
   * Real exit-pupil z-position relative to the last surface at this field angle (mm).
   *
   * Derived by tracing the iteratively solved chief ray through the full system,
   * then back-projecting: xpZRelLastSurf = −y'_last / u'_last.
   *
   * At θ = 0 the chief ray degenerates to the axis; this sample uses the on-axis
   * paraxial value so xpShiftMm = 0.
   */
  xpZRelLastSurf: number;
  /**
   * Change in exit-pupil z-position from the on-axis paraxial value (mm).
   *
   * Δz_XP = xpZRelLastSurf(θ) − xpZRelLastSurf_paraxial
   *
   * Positive → XP moved away from lens (toward image / sensor side).
   * Negative → XP moved into the lens.
   */
  xpShiftMm: number;
}

/** Exit-pupil aberration profile sampled across the full field. */
export interface ExitPupilAberrationProfile {
  /** One sample per field angle, from 0° to the vignetting-limited half-field. */
  samples: ExitPupilAberrationSample[];
  /**
   * On-axis paraxial exit-pupil z-position relative to the last surface (mm).
   * Zoom-interpolated for zoom lenses.
   */
  paraxialXpZRelLastSurf: number;
  /** Maximum |xpShiftMm| across all field samples (mm). */
  maxAbsShiftMm: number;
  /** Vignetting-limited half-field angle used for sampling (degrees). */
  halfFieldDeg: number;
}

// ─── Constants ───────────────────────────────────────────────────────────────

/** Default number of field samples (0° through halfField). */
export const PUPIL_ABERRATION_SAMPLE_COUNT = 17;

// ─── Entrance Pupil Aberration ────────────────────────────────────────────────

/**
 * Compute the entrance-pupil aberration profile across the field.
 *
 * Samples fieldAngle from 0 to halfField at evenly-spaced intervals.  For each
 * sample, calls solveChiefRayLaunchHeight to find the exact chief-ray launch
 * height, compares it to the paraxial prediction, and computes the resulting
 * EP z-shift in mm.
 *
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

// ─── Exit Pupil Aberration ────────────────────────────────────────────────────

/**
 * Compute the exit-pupil aberration profile across the field.
 *
 * For each field angle, traces the iteratively-solved chief ray through the full
 * lens system and back-projects its exit slope to find the real XP z-position.
 * The deviation from the on-axis paraxial XP is the XP aberration.
 *
 * The on-axis sample (θ = 0) always reports xpShiftMm = 0 because the chief ray
 * degenerates to the optical axis at that angle — the paraxial XP value is used
 * directly.
 *
 * All values are state-aware: focus and zoom shifts are accounted for.
 */
export function computeExitPupilAberrationProfile(
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  sampleCount = PUPIL_ABERRATION_SAMPLE_COUNT,
  geometry?: FieldGeometryState,
): ExitPupilAberrationProfile {
  const geom = geometry ?? computeFieldGeometryAtState(focusT, zoomT, L);
  const { halfFieldDeg } = geom;
  const paraxialXpZRelLastSurf = xpZRelLastSurfAtZoom(zoomT, L);

  const n = Math.max(sampleCount, 2);

  // Guard: telecentric exit (XP at infinity) — shifts are undefined, return zero-shift profile.
  if (!isFinite(paraxialXpZRelLastSurf)) {
    const samples: ExitPupilAberrationSample[] = Array.from({ length: n }, (_, i) => ({
      fieldFrac: i / (n - 1),
      fieldDeg: (i / (n - 1)) * halfFieldDeg,
      xpZRelLastSurf: Infinity,
      xpShiftMm: 0,
    }));
    return { samples, paraxialXpZRelLastSurf: Infinity, maxAbsShiftMm: 0, halfFieldDeg };
  }

  // zPos is required by traceRay for building visualization paths; compute once.
  const { z: zPos } = doLayout(focusT, zoomT, L);

  const samples: ExitPupilAberrationSample[] = [];

  for (let i = 0; i < n; i++) {
    const fieldFrac = i / (n - 1);
    const fieldDeg = fieldFrac * halfFieldDeg;
    const uField = -Math.tan((fieldDeg * Math.PI) / 180);

    let xpZRelLastSurf = paraxialXpZRelLastSurf;
    let xpShiftMm = 0;

    // At θ = 0, uField = 0 and the chief ray is the optical axis — no useful
    // back-projection is possible.  Use the paraxial baseline directly.
    if (Math.abs(fieldDeg) > 1e-9) {
      const yChief = solveChiefRayLaunchHeight(fieldDeg, focusT, zoomT, L, geom);
      const result = traceRay(yChief, uField, zPos, focusT, zoomT, undefined, true, L);

      // Back-project: XP z = −y_last / u_last (relative to last surface).
      // Guard against near-zero exit slope (XP at infinity).
      if (isFinite(result.y) && isFinite(result.u) && Math.abs(result.u) > 1e-9) {
        xpZRelLastSurf = -result.y / result.u;
        xpShiftMm = xpZRelLastSurf - paraxialXpZRelLastSurf;
      }
    }

    samples.push({ fieldFrac, fieldDeg, xpZRelLastSurf, xpShiftMm });
  }

  const maxAbsShiftMm = Math.max(...samples.map((s) => Math.abs(s.xpShiftMm)));

  return { samples, paraxialXpZRelLastSurf, maxAbsShiftMm, halfFieldDeg };
}

// ─── Combined Profile ─────────────────────────────────────────────────────────

/** EP and XP aberration profiles computed together, sharing the per-angle chief-ray bisection. */
export interface BothPupilAberrationProfiles {
  ep: PupilAberrationProfile;
  xp: ExitPupilAberrationProfile;
  /** Vignetting-limited half-field angle (degrees). Mirrors ep.halfFieldDeg. */
  halfFieldDeg: number;
  /** Maximum |epShiftMm| across all field samples (mm). Mirrors ep.maxAbsShiftMm. */
  maxAbsEpShiftMm: number;
  /** Maximum |xpShiftMm| across all field samples (mm). Mirrors xp.maxAbsShiftMm. */
  maxAbsXpShiftMm: number;
}

/**
 * Compute both entrance- and exit-pupil aberration profiles in a single pass.
 *
 * Equivalent to calling computePupilAberrationProfile and computeExitPupilAberrationProfile
 * separately, but shares the per-angle solveChiefRayLaunchHeight bisection call and the
 * doLayout call, halving the bisection work when both profiles are needed.
 */
export function computeBothPupilAberrationProfiles(
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  sampleCount = PUPIL_ABERRATION_SAMPLE_COUNT,
  geometry?: FieldGeometryState,
): BothPupilAberrationProfiles {
  const geom = geometry ?? computeFieldGeometryAtState(focusT, zoomT, L);
  const { halfFieldDeg, epRatio } = geom;
  const paraxialEpZRelStop = epZRelStopAtZoom(zoomT, L);
  const paraxialXpZRelLastSurf = xpZRelLastSurfAtZoom(zoomT, L);

  const n = Math.max(sampleCount, 2);

  // Telecentric exit (XP at infinity) — compute EP normally, return zero-shift XP profile.
  if (!isFinite(paraxialXpZRelLastSurf)) {
    const epOnlyLoop = (): PupilAberrationProfile => {
      const samples: PupilAberrationSample[] = [];
      for (let i = 0; i < n; i++) {
        const fieldFrac = i / (n - 1);
        const fieldDeg = fieldFrac * halfFieldDeg;
        const tanTheta = Math.tan((fieldDeg * Math.PI) / 180);
        const paraxialYChief = epRatio * tanTheta;
        let chiefRayCorrection = 1;
        let epShiftMm = 0;
        if (Math.abs(paraxialYChief) > 1e-12) {
          const solvedYChief = solveChiefRayLaunchHeight(fieldDeg, focusT, zoomT, L, geom);
          chiefRayCorrection = isFinite(solvedYChief) ? solvedYChief / paraxialYChief : 1;
          epShiftMm = (chiefRayCorrection - 1) * epRatio;
        }
        samples.push({ fieldFrac, fieldDeg, chiefRayCorrection, epShiftMm });
      }
      const maxAbsShiftMm = Math.max(...samples.map((s) => Math.abs(s.epShiftMm)));
      return { samples, paraxialEpZRelStop, maxAbsShiftMm, halfFieldDeg };
    };

    const ep = epOnlyLoop();
    const xpSamples: ExitPupilAberrationSample[] = Array.from({ length: n }, (_, i) => ({
      fieldFrac: i / (n - 1),
      fieldDeg: (i / (n - 1)) * halfFieldDeg,
      xpZRelLastSurf: Infinity,
      xpShiftMm: 0,
    }));
    const xp: ExitPupilAberrationProfile = {
      samples: xpSamples,
      paraxialXpZRelLastSurf: Infinity,
      maxAbsShiftMm: 0,
      halfFieldDeg,
    };
    return { ep, xp, halfFieldDeg, maxAbsEpShiftMm: ep.maxAbsShiftMm, maxAbsXpShiftMm: 0 };
  }

  const { z: zPos } = doLayout(focusT, zoomT, L);

  const epSamples: PupilAberrationSample[] = [];
  const xpSamples: ExitPupilAberrationSample[] = [];

  for (let i = 0; i < n; i++) {
    const fieldFrac = i / (n - 1);
    const fieldDeg = fieldFrac * halfFieldDeg;
    const tanTheta = Math.tan((fieldDeg * Math.PI) / 180);
    const uField = -tanTheta;

    let chiefRayCorrection = 1;
    let epShiftMm = 0;
    let xpZRelLastSurf = paraxialXpZRelLastSurf;
    let xpShiftMm = 0;

    const paraxialYChief = epRatio * tanTheta;

    if (Math.abs(fieldDeg) > 1e-9) {
      const yChief = solveChiefRayLaunchHeight(fieldDeg, focusT, zoomT, L, geom);

      // EP fields
      if (Math.abs(paraxialYChief) > 1e-12) {
        chiefRayCorrection = isFinite(yChief) ? yChief / paraxialYChief : 1;
        epShiftMm = (chiefRayCorrection - 1) * epRatio;
      }

      // XP fields — trace the same solved chief ray through the full system
      const result = traceRay(yChief, uField, zPos, focusT, zoomT, undefined, true, L);
      if (isFinite(result.y) && isFinite(result.u) && Math.abs(result.u) > 1e-9) {
        xpZRelLastSurf = -result.y / result.u;
        xpShiftMm = xpZRelLastSurf - paraxialXpZRelLastSurf;
      }
    }

    epSamples.push({ fieldFrac, fieldDeg, chiefRayCorrection, epShiftMm });
    xpSamples.push({ fieldFrac, fieldDeg, xpZRelLastSurf, xpShiftMm });
  }

  const maxAbsEpShiftMm = Math.max(...epSamples.map((s) => Math.abs(s.epShiftMm)));
  const maxAbsXpShiftMm = Math.max(...xpSamples.map((s) => Math.abs(s.xpShiftMm)));

  const ep: PupilAberrationProfile = {
    samples: epSamples,
    paraxialEpZRelStop,
    maxAbsShiftMm: maxAbsEpShiftMm,
    halfFieldDeg,
  };
  const xp: ExitPupilAberrationProfile = {
    samples: xpSamples,
    paraxialXpZRelLastSurf,
    maxAbsShiftMm: maxAbsXpShiftMm,
    halfFieldDeg,
  };

  return { ep, xp, halfFieldDeg, maxAbsEpShiftMm, maxAbsXpShiftMm };
}
