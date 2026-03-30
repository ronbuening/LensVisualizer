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

/** One point in the approximate 2D distortion field grid. */
export interface DistortionGridPoint {
  idealX: number;
  idealY: number;
  distortedX: number;
  distortedY: number;
  radiusNormalized: number;
}

/** One horizontal or vertical line in the approximate 2D distortion field grid. */
export interface DistortionGridLine {
  orientation: "vertical" | "horizontal";
  idealCoordinate: number;
  points: DistortionGridPoint[];
}

/** Number of evenly-spaced field samples (including center and edge). */
const SAMPLE_COUNT = 11;
const DISTORTION_GRID_LINE_COORDINATES = [-1, -0.5, 0, 0.5, 1] as const;
const DISTORTION_GRID_SEGMENT_COUNT = 17;

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

function interpolateDistortionPercent(samples: DistortionSample[], normalizedImageHeight: number): number {
  if (samples.length === 0) return 0;

  const clampedHeight = Math.max(0, Math.min(1, normalizedImageHeight));
  if (clampedHeight <= samples[0].normalizedImageHeight) return samples[0].distortionPercent;

  for (let i = 1; i < samples.length; i++) {
    const lower = samples[i - 1];
    const upper = samples[i];
    if (clampedHeight > upper.normalizedImageHeight) continue;

    const span = upper.normalizedImageHeight - lower.normalizedImageHeight;
    if (span <= 1e-9) return upper.distortionPercent;
    const t = (clampedHeight - lower.normalizedImageHeight) / span;
    return lower.distortionPercent + (upper.distortionPercent - lower.distortionPercent) * t;
  }

  return samples[samples.length - 1].distortionPercent;
}

function distortGridPoint(x: number, y: number, samples: DistortionSample[]): DistortionGridPoint {
  const radiusNormalized = Math.min(1, Math.hypot(x, y));
  const distortionPercent = radiusNormalized <= 1e-9 ? 0 : interpolateDistortionPercent(samples, radiusNormalized);
  const scale = Math.max(0, 1 + distortionPercent / 100);

  return {
    idealX: x,
    idealY: y,
    distortedX: x * scale,
    distortedY: y * scale,
    radiusNormalized,
  };
}

export function computeDistortionFieldGrid(samples: DistortionSample[]): DistortionGridLine[] {
  if (samples.length < 2) return [];

  const pointCount = DISTORTION_GRID_SEGMENT_COUNT;
  const axisSamples = Array.from({ length: pointCount }, (_, index) => -1 + (2 * index) / (pointCount - 1));

  return DISTORTION_GRID_LINE_COORDINATES.flatMap((coordinate) => {
    const vertical: DistortionGridLine = {
      orientation: "vertical",
      idealCoordinate: coordinate,
      points: axisSamples.map((y) => distortGridPoint(coordinate, y, samples)),
    };
    const horizontal: DistortionGridLine = {
      orientation: "horizontal",
      idealCoordinate: coordinate,
      points: axisSamples.map((x) => distortGridPoint(x, coordinate, samples)),
    };
    return [vertical, horizontal];
  });
}
