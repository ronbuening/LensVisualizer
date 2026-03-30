/**
 * Distortion analysis — pure function for computing a distortion curve
 * across the current image height for the active lens state.
 *
 * Samples fixed image heights from center to the current field edge,
 * solves the object-space field angle that lands at each height, and
 * compares the traced image height to the current rectilinear ideal.
 *
 * No React dependencies — fully testable in isolation. Memoize from
 * current state in a hook rather than embedding in a component.
 */

import { chiefRayImageHeight, computeFieldGeometryAtState, solveFieldAngleForImageHeight } from "./optics.js";
import type { RuntimeLens } from "../types/optics.js";

/** A single sample point on the distortion curve. */
export interface DistortionSample {
  /** Object-space field angle in degrees (0 = on-axis). */
  fieldAngleDeg: number;
  /** Normalized image height from center to current edge (0..1). */
  normalizedImageHeight: number;
  /** Current image height on the sensor/image plane (mm, signed). */
  imageHeight: number;
  /** Distortion as a percentage: 100 × (real − ideal) / ideal. */
  distortionPercent: number;
  /** Traced chief-ray image height (mm, signed). */
  realHeight: number;
  /** Ideal rectilinear image height: EFL × tan(θ) (mm, signed). */
  idealHeight: number;
  /** Ideal rectilinear object angle for this image height at current scale. */
  idealFieldAngleDeg: number;
}

/** Number of evenly-spaced field samples (including center and edge). */
const SAMPLE_COUNT = 11;

/**
 * Compute a distortion curve for the current lens state.
 *
 * Samples the image plane from center to the current traced field edge at
 * SAMPLE_COUNT evenly-spaced image heights. At each height, solves the
 * object-space field angle that reaches that point, then compares the
 * actual image height to an ideal rectilinear mapping derived from the
 * current near-axis scale.
 *
 * @param L               — runtime lens object
 * @param zPos            — surface z-positions for current focus/zoom
 * @param focusT          — focus slider [0..1]
 * @param zoomT           — zoom slider [0..1]
 * @param dynamicEFL      — retained for compatibility with existing callers
 * @param currentPhysStopSD — retained for compatibility with existing callers
 * @returns                  array of DistortionSample, or empty if tracing fails
 */
export function computeDistortionCurve(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  _dynamicEFL: number,
  _currentPhysStopSD: number,
): DistortionSample[] {
  if (L.N < 1) return [];

  const geometry = computeFieldGeometryAtState(focusT, zoomT, L);
  if (geometry.halfFieldDeg <= 0 || !isFinite(geometry.halfFieldDeg)) return [];

  const edgeImageHeight = chiefRayImageHeight(geometry.halfFieldDeg, zPos, focusT, zoomT, L, geometry);
  if (!isFinite(edgeImageHeight) || Math.abs(edgeImageHeight) < 1e-9) return [];

  const scaleProbeAngleDeg = Math.min(Math.max(geometry.halfFieldDeg * 0.02, 0.05), 0.25);
  const probeImageHeight = chiefRayImageHeight(scaleProbeAngleDeg, zPos, focusT, zoomT, L, geometry);
  const probeTan = Math.tan((scaleProbeAngleDeg * Math.PI) / 180);
  if (!isFinite(probeImageHeight) || Math.abs(probeTan) < 1e-12) return [];

  const rectilinearScale = -probeImageHeight / probeTan;
  if (!isFinite(rectilinearScale) || Math.abs(rectilinearScale) < 1e-9) return [];

  const samples: DistortionSample[] = [];
  const edgeAbsHeight = Math.abs(edgeImageHeight);

  for (let i = 0; i < SAMPLE_COUNT; i++) {
    const normalizedImageHeight = i / (SAMPLE_COUNT - 1);
    if (i === 0) {
      samples.push({
        fieldAngleDeg: 0,
        normalizedImageHeight: 0,
        imageHeight: 0,
        distortionPercent: 0,
        realHeight: 0,
        idealHeight: 0,
        idealFieldAngleDeg: 0,
      });
      continue;
    }

    const realHeight = -edgeAbsHeight * normalizedImageHeight;
    const fieldAngleDeg = solveFieldAngleForImageHeight(realHeight, zPos, focusT, zoomT, L, geometry);
    if (fieldAngleDeg == null || !isFinite(fieldAngleDeg)) continue;

    const thetaRad = (fieldAngleDeg * Math.PI) / 180;
    const idealHeight = -(rectilinearScale * Math.tan(thetaRad));
    if (!isFinite(idealHeight) || idealHeight === 0) continue;

    const distortionPercent = (100 * (realHeight - idealHeight)) / idealHeight;
    const idealFieldAngleDeg = (Math.atan(Math.abs(realHeight) / rectilinearScale) * 180) / Math.PI;

    samples.push({
      fieldAngleDeg,
      normalizedImageHeight,
      imageHeight: realHeight,
      distortionPercent: isFinite(distortionPercent) ? distortionPercent : 0,
      realHeight,
      idealHeight,
      idealFieldAngleDeg,
    });
  }

  return samples;
}

/** A 2D point in normalized image-plane coordinates (-1..+1). */
export interface DistortionGridPoint {
  x: number;
  y: number;
}

/** Result of computing a 2D distorted grid for visualization. */
export interface DistortionGridResult {
  /** Horizontal lines: each is an array of distorted {x, y} points. */
  horizontalLines: DistortionGridPoint[][];
  /** Vertical lines: each is an array of distorted {x, y} points. */
  verticalLines: DistortionGridPoint[][];
  /** Maximum absolute distortion at edge (%). */
  maxDistortionPercent: number;
  /** Grid line count per axis (including edges). */
  gridSize: number;
}

/** Number of interpolation sub-points along each grid line for smooth curves. */
const GRID_LINE_SUBDIVISIONS = 31;

/** Half-width of the inscribed square (corners touch the image circle at r=1). */
const INSCRIBED_HALF = 1 / Math.sqrt(2);

/** An ideal-height-indexed distortion lookup entry. */
interface IdealDistortionEntry {
  normalizedIdealHeight: number;
  distortionPercent: number;
}

/**
 * Build a lookup table indexed by normalized IDEAL image height from the
 * distortion curve (which is indexed by real/distorted height). This
 * corrects the reference frame so grid points — which are ideal
 * coordinates — look up distortion at the right key.
 */
function buildIdealLookup(samples: DistortionSample[]): IdealDistortionEntry[] {
  if (samples.length < 2) return [];

  const edgeIdeal = Math.abs(samples[samples.length - 1].idealHeight);
  if (edgeIdeal < 1e-12) {
    return samples.map((s) => ({
      normalizedIdealHeight: s.normalizedImageHeight,
      distortionPercent: s.distortionPercent,
    }));
  }

  return samples.map((s) => ({
    normalizedIdealHeight: Math.abs(s.idealHeight) / edgeIdeal,
    distortionPercent: s.distortionPercent,
  }));
}

/**
 * Interpolate distortion percentage at a given normalized IDEAL radius.
 * Uses the ideal-indexed lookup table for correct reference frame.
 */
function interpolateIdealDistortion(normalizedRadius: number, lookup: IdealDistortionEntry[]): number {
  if (lookup.length < 2 || normalizedRadius <= 0) return 0;
  if (normalizedRadius >= 1) return lookup[lookup.length - 1].distortionPercent;

  for (let i = 1; i < lookup.length; i++) {
    if (lookup[i].normalizedIdealHeight >= normalizedRadius) {
      const prev = lookup[i - 1];
      const curr = lookup[i];
      const range = curr.normalizedIdealHeight - prev.normalizedIdealHeight;
      if (range < 1e-12) return curr.distortionPercent;
      const t = (normalizedRadius - prev.normalizedIdealHeight) / range;
      return prev.distortionPercent + t * (curr.distortionPercent - prev.distortionPercent);
    }
  }

  return lookup[lookup.length - 1].distortionPercent;
}

/**
 * Apply radial distortion to a 2D normalized ideal point.
 *
 * Given an ideal point (x, y) in inscribed-grid coordinates, compute the
 * distorted position using the ideal-indexed distortion lookup.
 */
function distortPoint(x: number, y: number, lookup: IdealDistortionEntry[]): DistortionGridPoint {
  const r = Math.sqrt(x * x + y * y);
  if (r < 1e-12) return { x: 0, y: 0 };

  const distortionPct = interpolateIdealDistortion(r, lookup);
  const scale = 1 + distortionPct / 100;
  return { x: x * scale, y: y * scale };
}

/**
 * Compute a 2D distorted grid for the standard TV-distortion overlay.
 *
 * The grid is inscribed within the image circle (corners touch r=1) per
 * industry convention. Uses an ideal-height-indexed lookup table so that
 * the distortion percentage is applied in the correct reference frame.
 *
 * @param samples   — distortion curve from computeDistortionCurve()
 * @param gridSize  — number of lines per axis (default 11 for a 10×10 grid)
 */
export function computeDistortionGrid(samples: DistortionSample[], gridSize = 11): DistortionGridResult | null {
  if (samples.length < 2) return null;

  const lookup = buildIdealLookup(samples);
  if (lookup.length < 2) return null;

  const maxDistortionPercent = Math.max(...samples.map((s) => Math.abs(s.distortionPercent)));
  const horizontalLines: DistortionGridPoint[][] = [];
  const verticalLines: DistortionGridPoint[][] = [];

  for (let i = 0; i < gridSize; i++) {
    const linePos = -INSCRIBED_HALF + (2 * INSCRIBED_HALF * i) / (gridSize - 1);

    const hLine: DistortionGridPoint[] = [];
    const vLine: DistortionGridPoint[] = [];

    for (let j = 0; j < GRID_LINE_SUBDIVISIONS; j++) {
      const t = -INSCRIBED_HALF + (2 * INSCRIBED_HALF * j) / (GRID_LINE_SUBDIVISIONS - 1);
      hLine.push(distortPoint(t, linePos, lookup));
      vLine.push(distortPoint(linePos, t, lookup));
    }

    horizontalLines.push(hLine);
    verticalLines.push(vLine);
  }

  return { horizontalLines, verticalLines, maxDistortionPercent, gridSize };
}
