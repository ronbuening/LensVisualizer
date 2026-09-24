/**
 * Axial best-focus search for MTF.
 *
 * Source prescriptions can keep a paraxial or rounded image distance that sits well off the
 * design's best focus (e.g. older patents). Re-projecting the already-traced axial bundle onto
 * shifted planes needs no retrace, so the offset is cheap to report as a diagnostic and to apply
 * as an optional single refocus for all fields, like a camera focused at the image centre.
 */
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

const GOLDEN = (Math.sqrt(5) - 1) / 2;
/** Coarse samples across the search range; aberrated beams can have several focus peaks. */
const SCAN_SAMPLES = 41;
const REFINE_ITERATIONS = 32;

/**
 * Maximise the mean axial MTF over the scored frequencies by moving one image plane.
 *
 * @param bundles - traced axial bundles (reference wavelength first)
 * @param imagePlaneZ - authored axial image-plane position in mm
 * @param frequencies - scored frequencies in lp/mm (DC is ignored)
 * @returns best plane shift and the scores that justify it, or null when nothing can be scored
 */
export function findAxialBestFocus(
  bundles: readonly MtfFocusBundle[],
  imagePlaneZ: number,
  frequencies: readonly number[],
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
  const range = searchRange(bundles[0].bundle, imagePlaneZ);
  const designScore = score(0);
  // Scan the whole range first: spherical aberration can split the score into separate peaks.
  const step = (2 * range) / (SCAN_SAMPLES - 1);
  let best = { shift: 0, value: designScore };
  for (let i = 0; i < SCAN_SAMPLES; i++) {
    const shift = -range + i * step;
    const value = score(shift);
    if (value > best.value) best = { shift, value };
  }
  // Golden-section refinement inside the best sample's neighbourhood.
  let lo = best.shift - step;
  let hi = best.shift + step;
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
 * Search ±(largest axial crossing offset + margin): best focus of an aberrated beam lies between
 * its marginal and paraxial crossings, so the rays themselves bound the useful range.
 */
function searchRange(bundle: MtfBundle, imagePlaneZ: number): number {
  let extent = 0.05;
  for (const ray of bundle.rays) {
    const { terminalPoint: p, terminalDirection: d } = ray.trace;
    const radius = Math.hypot(p[0], p[1]);
    if (radius < 1e-9) continue;
    // Axial rays are meridional: the path to the axis crossing is radius over the inward speed.
    const inward = -(p[0] * d[0] + p[1] * d[1]) / radius;
    if (!(inward > 1e-9)) continue;
    const crossing = p[2] + (radius / inward) * d[2];
    if (Number.isFinite(crossing)) extent = Math.max(extent, Math.abs(crossing - imagePlaneZ));
  }
  return Math.min(extent * 1.25, 10);
}
