/**
 * Aberration analysis — pure functions for computing monochromatic aberration
 * metrics from the current lens state.
 *
 * All functions accept the runtime lens object L and current slider-derived
 * parameters as explicit arguments. No React dependencies — fully testable
 * in isolation.
 *
 * These computations are slider-state-dependent and must NOT be placed in
 * buildLens(). They should be memoized from current state in a React hook.
 */

import { bAtZoom, halfFieldAtZoom, traceParaxialRay, traceRay, yRatioAtZoom } from "./optics.js";
import type { RuntimeLens } from "../types/optics.js";

/** One sample point on the longitudinal SA profile curve. */
export interface SAProfilePoint {
  /** Normalised pupil zone fraction (0 = paraxial axis, 1 = full entrance-pupil edge). */
  fraction: number;
  /** SA at this zone in mm (real axial intercept − paraxial intercept). */
  saMm: number;
}

/** Result of a spherical aberration computation. */
export interface SphericalAberrationResult {
  /** Longitudinal SA in mm (real marginal intercept − paraxial intercept). */
  saMm: number;
  /** Longitudinal SA in µm (saMm × 1000). */
  saUm: number;
  /** Axial intercept of the real marginal ray (mm, absolute z). */
  realIntercept: number;
  /** Axial intercept of the paraxial reference ray (mm, absolute z). */
  paraxialIntercept: number;
}

/** One dense pupil sample for the meridional coma view. */
export interface MeridionalComaSample {
  /** Sample index in the dense pupil sweep. */
  index: number;
  /** Normalized pupil fraction in [-1, +1]. */
  pupilFraction: number;
  /** Launch height at the first surface / entrance pupil plane convention (mm). */
  launchHeight: number;
  /** Image-plane intercept height (mm). Null when clipped/invalid. */
  imageHeight: number | null;
  /** Whether the ray clipped at any aperture. */
  clipped: boolean;
}

/** Dense meridional coma analysis result for the current lens state. */
export interface MeridionalComaResult {
  /** Off-axis field angle used for the sweep (deg). */
  fieldAngleDeg: number;
  /** Total dense pupil samples attempted. */
  sampleCount: number;
  /** Number of valid image-plane intercept samples. */
  validSampleCount: number;
  /** Number of clipped/invalid samples. */
  clippedSampleCount: number;
  /** Image-plane intercept of the chief ray (mm). */
  centerIntercept: number;
  /** Lowest valid image-plane intercept (mm). */
  minIntercept: number;
  /** Highest valid image-plane intercept (mm). */
  maxIntercept: number;
  /** Meridional coma span (mm): upper outer valid intercept − lower outer valid intercept. */
  spanMm: number;
  /** Meridional coma span converted to µm. */
  spanUm: number;
  /** Outermost valid lower intercept used for span (negative/low pupil side). */
  lowerIntercept: number;
  /** Outermost valid upper intercept used for span (positive/high pupil side). */
  upperIntercept: number;
  /** Dense pupil samples, including clipped samples for visualization. */
  samples: MeridionalComaSample[];
}

/**
 * Candidate fractions of the entrance pupil for the marginal ray sample,
 * tried in descending order.  The first unclipped pair wins.
 *
 * 0.95 is ideal (closest to the true marginal) but some fast lenses clip
 * there due to non-linear pupil mapping (spherical aberration of the pupil
 * itself).  The fallbacks ensure we always get a usable measurement while
 * staying well outside the paraxial zone.
 */
const MARGINAL_FRACS = [0.95, 0.9, 0.85, 0.8] as const;

/**
/** Reference ray height in mm for the true paraxial baseline trace. */
const PARAXIAL_REFERENCE_HEIGHT_MM = 1;

/** Legacy near-axis real-ray fraction retained for regression tests/documentation. */
export const LEGACY_NEAR_AXIS_REAL_FRAC = 0.001;

/** Minimum |u| (exit slope) to consider a ray's axial intercept valid. */
const MIN_SLOPE = 1e-12;

/**
 * Compute the axial intercept of a ray from its exit state.
 *
 * The intercept is the z-position where the ray crosses the optical axis:
 *   z_intercept = lastSurfZ - y / u
 *
 * Returns null if the slope is too small (ray nearly parallel to axis).
 */
function axialIntercept(y: number, u: number, lastSurfZ: number): number | null {
  if (Math.abs(u) < MIN_SLOPE) return null;
  return lastSurfZ - y / u;
}

function computeParaxialReferenceIntercept(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  lastSurfZ: number,
): number | null {
  const paraxial = traceParaxialRay(PARAXIAL_REFERENCE_HEIGHT_MM, 0, focusT, zoomT, L);
  return axialIntercept(paraxial.y, paraxial.u, lastSurfZ);
}

function computeSymmetricRealIntercept(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
  lastSurfZ: number,
  fraction: number,
): number | null {
  const h = fraction * currentEPSD;
  const plusY = traceRay(h, 0, zPos, focusT, zoomT, currentPhysStopSD, true, L);
  const minusY = traceRay(-h, 0, zPos, focusT, zoomT, currentPhysStopSD, true, L);

  if (plusY.clipped || minusY.clipped) return null;

  const interceptPlus = axialIntercept(plusY.y, plusY.u, lastSurfZ);
  const interceptMinus = axialIntercept(minusY.y, minusY.u, lastSurfZ);
  if (interceptPlus === null || interceptMinus === null) return null;

  return (interceptPlus + interceptMinus) / 2;
}

/**
 * Compute on-axis longitudinal spherical aberration for the current lens state.
 *
 * Traces a marginal ray near the entrance pupil edge (0.95× preferred, with
 * fallbacks to 0.90/0.85/0.80 if clipped) using exact Snell's law, and
 * compares its axial intercept against a true paraxial reference ray.
 *
 * Sign convention: negative SA means the real marginal intercept lies closer
 * to the lens than the paraxial intercept (undercorrected). Positive SA means
 * the marginal focus falls beyond the paraxial focus (overcorrected).
 *
 * The +Y and −Y marginal rays are averaged to enforce symmetry and cancel
 * any residual sign noise from asymmetric surface interactions.
 *
 * @param L                  — runtime lens object (frozen, from buildLens)
 * @param zPos               — surface z-positions for current focus/zoom state
 * @param focusT             — focus slider [0..1]
 * @param zoomT              — zoom slider [0..1]
 * @param currentEPSD        — current entrance pupil semi-diameter (mm)
 * @param currentPhysStopSD  — current physical stop semi-diameter (mm)
 * @returns                    SA result, or null if marginal ray is clipped/invalid
 */
export function computeSphericalAberration(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): SphericalAberrationResult | null {
  if (currentEPSD <= 0 || L.N < 1) return null;

  const lastSurfZ = zPos[L.N - 1];
  const paraxialIntercept = computeParaxialReferenceIntercept(L, focusT, zoomT, lastSurfZ);
  if (paraxialIntercept === null) return null;

  /* ── Real marginal rays (±Y, averaged for symmetry) ──
   * ghost=true so the trace runs through all surfaces and reliably reports
   * clipped=true when the ray exceeds any aperture.  With ghost=false the
   * trace breaks early without setting the clipped flag, making clip
   * detection unreliable.
   *
   * Try descending marginal fractions — fast lenses can clip at 0.95× EP
   * due to spherical aberration of the entrance pupil mapping itself. */
  let realIntercept: number | null = null;

  for (const frac of MARGINAL_FRACS) {
    realIntercept = computeSymmetricRealIntercept(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      lastSurfZ,
      frac,
    );
    if (realIntercept !== null) break;
  }

  if (realIntercept === null) return null;

  const saMm = realIntercept - paraxialIntercept;
  return {
    saMm,
    saUm: saMm * 1000,
    realIntercept,
    paraxialIntercept,
  };
}

/**
 * Pupil zone fractions sampled for the longitudinal SA profile curve.
 * Spans the aperture from near-paraxial to the marginal zone.
 */
const PROFILE_FRACS = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 0.95] as const;

/** Dense pupil sweep count for the meridional coma view. Must remain odd to include the chief ray sample. */
export const MERIDIONAL_COMA_SAMPLE_COUNT = 51;

/**
 * Compute the longitudinal SA profile across the pupil aperture.
 *
 * Traces ±Y rays at each PROFILE_FRACS fraction of the entrance pupil and
 * returns the focus shift relative to the true paraxial reference at each
 * zone. Points where the ray is clipped by the aperture stop are silently
 * omitted, so the returned array may be shorter than PROFILE_FRACS.
 *
 * Returns an empty array when the paraxial reference cannot be traced or
 * when fewer than two valid zone samples are available.
 *
 * @param L                  — runtime lens object (frozen, from buildLens)
 * @param zPos               — surface z-positions for current focus/zoom state
 * @param focusT             — focus slider [0..1]
 * @param zoomT              — zoom slider [0..1]
 * @param currentEPSD        — current entrance pupil semi-diameter (mm)
 * @param currentPhysStopSD  — current physical stop semi-diameter (mm)
 * @returns                    Array of {fraction, saMm} profile points, or [] on failure
 */
export function computeSAProfile(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): SAProfilePoint[] {
  if (currentEPSD <= 0 || L.N < 1) return [];

  const lastSurfZ = zPos[L.N - 1];

  /* ── Paraxial reference intercept (computed once) ── */
  const paraxialIntercept = computeParaxialReferenceIntercept(L, focusT, zoomT, lastSurfZ);
  if (paraxialIntercept === null) return [];

  /* ── Sample each zone fraction ── */
  const points: SAProfilePoint[] = [];

  for (const fraction of PROFILE_FRACS) {
    const realIntercept = computeSymmetricRealIntercept(
      L,
      zPos,
      focusT,
      zoomT,
      currentEPSD,
      currentPhysStopSD,
      lastSurfZ,
      fraction,
    );
    if (realIntercept === null) continue;

    points.push({ fraction, saMm: realIntercept - paraxialIntercept });
  }

  return points.length >= 2 ? points : [];
}

function imagePlaneIntercept(y: number, u: number, lastSurfZ: number, imagePlaneZ: number): number | null {
  const dz = imagePlaneZ - lastSurfZ;
  const imageHeight = y + u * dz;
  return isFinite(imageHeight) ? imageHeight : null;
}

/**
 * Compute dense meridional coma intercept samples for the current lens state.
 *
 * This is intentionally a 2D meridional analysis only. It reuses the current
 * off-axis chief-ray launch convention so the analysis matches the existing
 * interactive viewer's off-axis behavior.
 */
export function computeMeridionalComa(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentEPSD: number,
  currentPhysStopSD: number,
): MeridionalComaResult | null {
  if (currentEPSD <= 0 || L.N < 1) return null;

  const halfFieldDeg = halfFieldAtZoom(zoomT, L);
  if (!isFinite(halfFieldDeg) || halfFieldDeg <= 0) return null;

  const yRatio = yRatioAtZoom(zoomT, L);
  if (!isFinite(yRatio) || Math.abs(yRatio) < 1e-12) return null;

  const fieldAngleDeg = halfFieldDeg * L.offAxisFieldFrac;
  if (!isFinite(fieldAngleDeg) || fieldAngleDeg <= 0) return null;

  const uField = -Math.tan((fieldAngleDeg * Math.PI) / 180);
  const yChief = -(bAtZoom(zoomT, L) / yRatio) * uField;
  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = lastSurfZ + (L.S[L.N - 1]?.d ?? 0);
  if (!isFinite(imagePlaneZ)) return null;

  const samples: MeridionalComaSample[] = [];
  const validSamples: Array<MeridionalComaSample & { imageHeight: number }> = [];

  for (let i = 0; i < MERIDIONAL_COMA_SAMPLE_COUNT; i++) {
    const pupilFraction = -1 + (2 * i) / (MERIDIONAL_COMA_SAMPLE_COUNT - 1);
    const launchHeight = yChief + pupilFraction * currentEPSD;
    const trace = traceRay(launchHeight, uField, zPos, focusT, zoomT, currentPhysStopSD, true, L);
    const projectedHeight = trace.clipped ? null : imagePlaneIntercept(trace.y, trace.u, lastSurfZ, imagePlaneZ);
    const sample: MeridionalComaSample = {
      index: i,
      pupilFraction,
      launchHeight,
      imageHeight: projectedHeight,
      clipped: trace.clipped || projectedHeight === null,
    };
    samples.push(sample);
    if (sample.imageHeight !== null && !sample.clipped) {
      validSamples.push(sample as MeridionalComaSample & { imageHeight: number });
    }
  }

  if (validSamples.length < 3) return null;

  const lowerSample = validSamples.find((sample) => sample.pupilFraction < 0) ?? null;
  const upperSample = [...validSamples].reverse().find((sample) => sample.pupilFraction > 0) ?? null;
  const centerSample =
    validSamples.find((sample) => Math.abs(sample.pupilFraction) < 1e-9) ??
    validSamples.reduce((best, sample) =>
      Math.abs(sample.pupilFraction) < Math.abs(best.pupilFraction) ? sample : best,
    );

  if (!lowerSample || !upperSample || !centerSample) return null;

  const intercepts = validSamples.map((sample) => sample.imageHeight);
  const minIntercept = Math.min(...intercepts);
  const maxIntercept = Math.max(...intercepts);
  const spanMm = upperSample.imageHeight - lowerSample.imageHeight;

  return {
    fieldAngleDeg,
    sampleCount: MERIDIONAL_COMA_SAMPLE_COUNT,
    validSampleCount: validSamples.length,
    clippedSampleCount: MERIDIONAL_COMA_SAMPLE_COUNT - validSamples.length,
    centerIntercept: centerSample.imageHeight,
    minIntercept,
    maxIntercept,
    spanMm,
    spanUm: spanMm * 1000,
    lowerIntercept: lowerSample.imageHeight,
    upperIntercept: upperSample.imageHeight,
    samples,
  };
}
