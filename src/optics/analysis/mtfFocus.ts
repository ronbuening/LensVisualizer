/**
 * Axial best-focus search for MTF.
 *
 * Source prescriptions can keep a paraxial or rounded image distance that sits well off the
 * design's best focus (e.g. older patents). Re-projecting the already-traced axial bundle onto
 * shifted planes needs no retrace, so the offset is cheap to report as a diagnostic and to apply
 * as an optional single refocus for all fields, like a camera focused at the image center.
 */
import type { MtfSupport } from "../../types/mtf.js";
import { computeCardinalElements2 } from "../first-order/cardinals.js";
import { fopenAtZoom } from "../layout.js";
import { LINE_NM } from "../spectralLines.js";
import type { PreparedOpticalState } from "../types.js";
import { MTF_IMAGE_PLANE_DEPTHS } from "./mtfConstants.js";
import { combineOtfs, geometricOtf, otfMagnitude, type MtfSpot } from "./mtfMath.js";
import type { MtfBundle } from "./mtfTracing.js";

/** One wavelength's traced axial bundle and its incident weight. */
export interface MtfFocusBundle {
  bundle: MtfBundle;
  weight: number;
}

export interface MtfBestFocus {
  /** Plane shift from the authored image plane, in mm (negative toward the lens). */
  shiftMm: number;
  /** Mean axial MTF over the scored frequencies at the authored plane and at best focus. */
  designScore: number;
  bestScore: number;
}

/** Where the authored image plane sits relative to the prescription's own paraxial focus. */
export interface MtfImagePlaneOffset {
  /** Paraxial focus minus the authored image plane, in mm (positive away from the lens). */
  offsetMm: number;
  /** `MTF_IMAGE_PLANE_DEPTHS` diffraction depths of focus at the lens's open f-number, in mm. */
  limitMm: number;
  inconsistent: boolean;
}

/**
 * Check the authored image plane against the prescription's paraxial focus at infinity.
 *
 * Sources sometimes print a back focus their own prescription does not reproduce; keeping the
 * published value then places the image plane well off focus. The limit depends only on the
 * lens and state, so every aperture and spectrum of one lens agrees on the verdict.
 *
 * @param state - prepared optical state
 * @param support - support record; finite conjugates are not checked
 * @returns offset and verdict, or null when there is no infinity focus to compare
 */
export function mtfImagePlaneOffset(state: PreparedOpticalState, support: MtfSupport): MtfImagePlaneOffset | null {
  if (support.conjugate) return null;
  const rearFocalZ = computeCardinalElements2(state)?.points.rearFocal.z;
  const fNumber = fopenAtZoom(state.zoomT, state.lens.runtime);
  if (rearFocalZ === undefined || !Number.isFinite(rearFocalZ) || !(fNumber > 0)) return null;
  const offsetMm = rearFocalZ - state.imgZ;
  const limitMm = MTF_IMAGE_PLANE_DEPTHS * 2 * LINE_NM.d * 1e-6 * fNumber ** 2;
  return { offsetMm, limitMm, inconsistent: Math.abs(offsetMm) > limitMm };
}

const GOLDEN = (Math.sqrt(5) - 1) / 2;
/** Coarse samples across the search range; aberrated beams can have several focus peaks. */
const SCAN_SAMPLES = 41;
const REFINE_ITERATIONS = 32;
/** Share of transmitted flux ignored at each end of the axial-crossing distribution. */
const CROSSING_TRIM = 0.02;
/** Smallest margin beyond the crossings, and the farthest plane searched on either side, in mm. */
const MIN_SEARCH_MARGIN_MM = 0.05;
const MAX_SEARCH_SHIFT_MM = 10;
/** Heights sampled across the last surface's clear aperture to find its rearmost point. */
const REACH_SAMPLES = 32;

/**
 * Axial position of the rearmost point of the last surface inside its clear aperture.
 *
 * A ray cannot land on a plane it has already passed, so no image plane may sit in front of this
 * position: some prescriptions leave only hundredths of a millimetre between the last surface and
 * the image.
 *
 * @param state - prepared optical state
 * @returns nearest usable image-plane position in mm, never behind the authored plane
 */
export function mtfNearestImagePlaneZ(state: PreparedOpticalState): number {
  const last = state.surfaces.at(-1);
  if (!last) return -Infinity;
  let sag = 0;
  for (let i = 1; i <= REACH_SAMPLES; i++) {
    const value = last.profile.sag((last.sd * i) / REACH_SAMPLES);
    if (Number.isFinite(value)) sag = Math.max(sag, value);
  }
  return Math.min(last.z + sag, state.imgZ);
}

/**
 * Maximise the mean axial MTF over the scored frequencies by moving one image plane.
 *
 * @param bundles - traced axial bundles (reference wavelength first)
 * @param imagePlaneZ - authored axial image-plane position in mm
 * @param frequencies - scored frequencies in lp/mm (DC is ignored)
 * @param nearestPlaneZ - nearest plane the rays can land on (see `mtfNearestImagePlaneZ`)
 * @returns best plane shift and the scores that justify it, or null when nothing can be scored
 */
export function findAxialBestFocus(
  bundles: readonly MtfFocusBundle[],
  imagePlaneZ: number,
  frequencies: readonly number[],
  nearestPlaneZ = -Infinity,
): MtfBestFocus | null {
  const scored = frequencies.filter((f) => f > 0);
  if (!scored.length || !bundles.length || bundles.some(({ bundle }) => bundle.rays.length < 4)) return null;
  const score = (shift: number) => {
    const reference = landingPoints(bundles[0].bundle, imagePlaneZ + shift);
    const center = centroid(reference);
    const otfs = bundles.map(({ bundle, weight }, i) => {
      const points = (i === 0 ? reference : landingPoints(bundle, imagePlaneZ + shift)).map((p) => ({
        x: p.x - center.x,
        y: p.y - center.y,
        weight: p.weight,
      }));
      const transmitted = points.reduce((sum, p) => sum + p.weight, 0);
      return { otf: geometricOtf(points, scored, "x"), weight: weight * transmitted };
    });
    const values = otfMagnitude(combineOtfs(otfs));
    return values.reduce((sum, v) => sum + v, 0) / values.length;
  };
  const range = searchRange(bundles, imagePlaneZ);
  // The authored plane is always a candidate, so the nearest plane never excludes a zero shift.
  const nearest = Math.max(range.nearest, Math.min(0, nearestPlaneZ - imagePlaneZ));
  const designScore = score(0);
  // Scan the whole range first: spherical aberration can split the score into separate peaks.
  const step = (range.farthest - nearest) / (SCAN_SAMPLES - 1);
  let best = { shift: 0, value: designScore };
  for (let i = 0; i < SCAN_SAMPLES; i++) {
    const shift = nearest + i * step;
    const value = score(shift);
    if (value > best.value) best = { shift, value };
  }
  // Golden-section refinement inside the best sample's neighborhood.
  let lo = Math.max(best.shift - step, nearest);
  let hi = Math.min(best.shift + step, range.farthest);
  let a = hi - GOLDEN * (hi - lo);
  let b = lo + GOLDEN * (hi - lo);
  let fa = score(a);
  let fb = score(b);
  for (let i = 0; i < REFINE_ITERATIONS && hi - lo > 1e-6; i++) {
    if (fa < fb) {
      lo = a;
      a = b;
      fa = fb;
      b = lo + GOLDEN * (hi - lo);
      fb = score(b);
    } else {
      hi = b;
      b = a;
      fb = fa;
      a = hi - GOLDEN * (hi - lo);
      fa = score(a);
    }
  }
  const refinedShift = (lo + hi) / 2;
  const refinedValue = score(refinedShift);
  if (refinedValue > best.value) best = { shift: refinedShift, value: refinedValue };
  // Never report a plane worse than the authored one.
  return best.value > designScore
    ? { shiftMm: best.shift, designScore, bestScore: best.value }
    : { shiftMm: 0, designScore, bestScore: designScore };
}

/** Landing points of a traced bundle on a shifted axial plane. */
export function landingPoints(bundle: MtfBundle, planeZ: number): MtfSpot[] {
  return bundle.rays.map((ray) => {
    const { terminalPoint: p, terminalDirection: d } = ray.trace;
    const transfer = (planeZ - p[2]) / d[2];
    return { x: p[0] + transfer * d[0], y: p[1] + transfer * d[1], weight: ray.weight };
  });
}

function centroid(points: readonly MtfSpot[]): { x: number; y: number } {
  const total = points.reduce((sum, p) => sum + p.weight, 0);
  return {
    x: points.reduce((sum, p) => sum + p.weight * p.x, 0) / total,
    y: points.reduce((sum, p) => sum + p.weight * p.y, 0) / total,
  };
}

/**
 * Plane shifts worth searching, from where the axial rays cross the axis: best focus of an
 * aberrated beam lies between its marginal and paraxial crossings, so the rays themselves bound
 * the useful range.
 *
 * The range spans the flux-weighted crossings of every wavelength with `CROSSING_TRIM` of the
 * flux ignored at each end, so a few stray rays cannot stretch the scan until its steps straddle
 * the focus. A ray already diverging from the axis counts with its virtual crossing in front of
 * the last surface: the search then reaches toward a focus the authored plane lies far behind.
 *
 * @param bundles - traced axial bundles with their incident weights
 * @param imagePlaneZ - authored axial image-plane position in mm
 * @returns nearest and farthest plane shift in mm; the range always contains zero
 */
function searchRange(bundles: readonly MtfFocusBundle[], imagePlaneZ: number): { nearest: number; farthest: number } {
  const crossings: { offset: number; weight: number }[] = [];
  for (const { bundle, weight } of bundles)
    for (const ray of bundle.rays) {
      const { terminalPoint: p, terminalDirection: d } = ray.trace;
      const radius = Math.hypot(p[0], p[1]);
      if (radius < 1e-9) continue;
      // Axial rays are meridional: the path to the axis crossing is radius over the inward speed.
      const inward = -(p[0] * d[0] + p[1] * d[1]) / radius;
      if (!(Math.abs(inward) > 1e-9)) continue;
      const offset = p[2] + (radius / inward) * d[2] - imagePlaneZ;
      if (Number.isFinite(offset)) crossings.push({ offset, weight: weight * ray.weight });
    }
  crossings.sort((a, b) => a.offset - b.offset);
  const total = crossings.reduce((sum, crossing) => sum + crossing.weight, 0);
  const quantile = (share: number) => {
    let cumulative = 0;
    for (const crossing of crossings) {
      cumulative += crossing.weight;
      if (cumulative >= share * total) return crossing.offset;
    }
    return 0;
  };
  const first = Math.min(0, total > 0 ? quantile(CROSSING_TRIM) : 0);
  const last = Math.max(0, total > 0 ? quantile(1 - CROSSING_TRIM) : 0);
  const margin = Math.max(MIN_SEARCH_MARGIN_MM, 0.25 * (last - first));
  return {
    nearest: Math.max(first - margin, -MAX_SEARCH_SHIFT_MM),
    farthest: Math.min(last + margin, MAX_SEARCH_SHIFT_MM),
  };
}
