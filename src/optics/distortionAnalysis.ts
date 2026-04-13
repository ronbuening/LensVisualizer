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

import {
  chiefRayImageHeight,
  chiefRayImageHeightAccurate,
  computeFieldGeometryAtState,
  skewImagePlaneIntercept,
  solveChiefRayLaunchHeight,
  solveFieldAngleForImageHeightAccurate,
  traceSkewRay,
} from "./optics.js";
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

/** One point in the traced 2D distortion field grid. */
export interface DistortionGridPoint {
  idealX: number;
  idealY: number;
  tracedX: number | null;
  tracedY: number | null;
  radiusNormalized: number;
  insideImageCircle: boolean;
  usable: boolean;
}

/** One horizontal or vertical line in the traced 2D distortion field grid. */
export interface DistortionGridLine {
  orientation: "vertical" | "horizontal";
  idealCoordinate: number;
  points: DistortionGridPoint[];
}

/** Traced 2D field-grid result derived from chief rays across the current image circle. */
export interface DistortionFieldGridResult {
  lines: DistortionGridLine[];
  idealFieldRadius: number;
}

/** Number of evenly-spaced field samples (including center and edge). */
const SAMPLE_COUNT = 21;
const DISTORTION_GRID_LINE_COORDINATES = [-1, -0.5, 0, 0.5, 1] as const;
const DISTORTION_GRID_SEGMENT_COUNT = 17;

interface DistortionReference {
  geometry: ReturnType<typeof computeFieldGeometryAtState>;
  rectilinearScale: number;
  edgeImageHeight: number;
  idealFieldRadius: number;
  lastSurfZ: number;
  imagePlaneZ: number;
}

function computeDistortionReference(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
): DistortionReference | null {
  if (L.N < 1) return null;

  const geometry = computeFieldGeometryAtState(focusT, zoomT, L);
  if (geometry.halfFieldDeg <= 0 || !isFinite(geometry.halfFieldDeg)) return null;

  /* Use the iteratively corrected chief ray for the edge image height so
     pupil aberration at wide field angles is accounted for. */
  const edgeImageHeight = chiefRayImageHeightAccurate(geometry.halfFieldDeg, zPos, focusT, zoomT, L, geometry);
  if (!isFinite(edgeImageHeight) || Math.abs(edgeImageHeight) < 1e-9) return null;

  /* The near-axis scale probe uses the paraxial chief ray — the probe angle
     is always tiny (0.05–0.25 deg), where the paraxial EP is exact. */
  const scaleProbeAngleDeg = Math.min(Math.max(geometry.halfFieldDeg * 0.01, 0.02), 0.5);
  const probeImageHeight = chiefRayImageHeight(scaleProbeAngleDeg, zPos, focusT, zoomT, L, geometry);
  const probeTan = Math.tan((scaleProbeAngleDeg * Math.PI) / 180);
  if (!isFinite(probeImageHeight) || Math.abs(probeTan) < 1e-12) return null;

  const rectilinearScale = -probeImageHeight / probeTan;
  if (!isFinite(rectilinearScale) || Math.abs(rectilinearScale) < 1e-9) return null;

  const idealFieldRadius = Math.abs(rectilinearScale * Math.tan((geometry.halfFieldDeg * Math.PI) / 180));
  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = lastSurfZ + (L.S[L.N - 1]?.d ?? 0);
  if (!isFinite(idealFieldRadius) || idealFieldRadius <= 0 || !isFinite(imagePlaneZ)) return null;

  return {
    geometry,
    rectilinearScale,
    edgeImageHeight,
    idealFieldRadius,
    lastSurfZ,
    imagePlaneZ,
  };
}

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
  const reference = computeDistortionReference(L, zPos, focusT, zoomT);
  if (reference === null) return [];

  const samples: DistortionSample[] = [];
  const edgeAbsHeight = Math.abs(reference.edgeImageHeight);

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
    const fieldAngleDeg = solveFieldAngleForImageHeightAccurate(realHeight, zPos, focusT, zoomT, L, reference.geometry);
    if (fieldAngleDeg == null || !isFinite(fieldAngleDeg)) continue;

    const thetaRad = (fieldAngleDeg * Math.PI) / 180;
    const idealHeight = -(reference.rectilinearScale * Math.tan(thetaRad));
    if (!isFinite(idealHeight) || idealHeight === 0) continue;

    const distortionPercent = (100 * (realHeight - idealHeight)) / idealHeight;
    const idealFieldAngleDeg = (Math.atan(Math.abs(realHeight) / reference.rectilinearScale) * 180) / Math.PI;

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

/**
 * Pre-computed correction table mapping field angle to the ratio between
 * the iteratively solved chief-ray launch height and the paraxial estimate.
 * Used by the distortion grid to correct for pupil aberration without a
 * per-point iterative solve.
 */
interface PupilCorrectionEntry {
  angleDeg: number;
  ratio: number;
}

const PUPIL_CORRECTION_SAMPLE_COUNT = 17;

function buildPupilCorrectionTable(
  reference: DistortionReference,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
): PupilCorrectionEntry[] {
  const table: PupilCorrectionEntry[] = [];
  for (let i = 0; i < PUPIL_CORRECTION_SAMPLE_COUNT; i++) {
    const angleDeg = (i / (PUPIL_CORRECTION_SAMPLE_COUNT - 1)) * reference.geometry.halfFieldDeg;
    const thetaRad = (angleDeg * Math.PI) / 180;
    const tanTheta = Math.tan(thetaRad);
    const paraxialYChief = reference.geometry.epRatio * tanTheta;
    const solvedYChief = solveChiefRayLaunchHeight(angleDeg, focusT, zoomT, L, reference.geometry);
    const ratio = Math.abs(paraxialYChief) > 1e-12 ? solvedYChief / paraxialYChief : 1;
    table.push({ angleDeg, ratio: isFinite(ratio) ? ratio : 1 });
  }
  return table;
}

function interpolatePupilCorrection(table: PupilCorrectionEntry[], angleDeg: number): number {
  if (table.length === 0) return 1;
  if (angleDeg <= table[0].angleDeg) return table[0].ratio;
  if (angleDeg >= table[table.length - 1].angleDeg) return table[table.length - 1].ratio;
  for (let i = 0; i < table.length - 1; i++) {
    if (angleDeg <= table[i + 1].angleDeg) {
      const t = (angleDeg - table[i].angleDeg) / (table[i + 1].angleDeg - table[i].angleDeg);
      return table[i].ratio + t * (table[i + 1].ratio - table[i].ratio);
    }
  }
  return 1;
}

function traceDistortionGridPoint(
  xNormalized: number,
  yNormalized: number,
  reference: DistortionReference,
  focusT: number,
  zoomT: number,
  currentPhysStopSD: number,
  L: RuntimeLens,
  pupilCorrection: PupilCorrectionEntry[],
): DistortionGridPoint {
  const radiusNormalized = Math.hypot(xNormalized, yNormalized);
  const insideImageCircle = radiusNormalized <= 1 + 1e-9;
  const idealX = xNormalized * reference.idealFieldRadius;
  const idealY = yNormalized * reference.idealFieldRadius;

  if (!insideImageCircle) {
    return {
      idealX,
      idealY,
      tracedX: null,
      tracedY: null,
      radiusNormalized,
      insideImageCircle: false,
      usable: false,
    };
  }

  const fieldSlopeX = idealX / reference.rectilinearScale;
  const fieldSlopeY = -idealY / reference.rectilinearScale;

  /* Apply pupil-aberration correction based on the equivalent field angle */
  const equivalentAngleDeg = (Math.atan(Math.hypot(fieldSlopeX, fieldSlopeY)) * 180) / Math.PI;
  const correction = interpolatePupilCorrection(pupilCorrection, equivalentAngleDeg);
  const correctedEpRatio = reference.geometry.epRatio * correction;

  const chiefLaunchX = -correctedEpRatio * fieldSlopeX;
  const chiefLaunchY = -correctedEpRatio * fieldSlopeY;
  const trace = traceSkewRay(
    chiefLaunchX,
    chiefLaunchY,
    fieldSlopeX,
    fieldSlopeY,
    focusT,
    zoomT,
    currentPhysStopSD,
    true,
    L,
  );

  if (trace.clipped) {
    return {
      idealX,
      idealY,
      tracedX: null,
      tracedY: null,
      radiusNormalized,
      insideImageCircle: true,
      usable: false,
    };
  }

  const imagePoint = skewImagePlaneIntercept(
    trace.x,
    trace.y,
    trace.ux,
    trace.uy,
    reference.lastSurfZ,
    reference.imagePlaneZ,
  );

  return {
    idealX,
    idealY,
    tracedX: imagePoint?.x ?? null,
    tracedY: imagePoint ? -imagePoint.y : null,
    radiusNormalized,
    insideImageCircle: true,
    usable: imagePoint !== null,
  };
}

export function computeDistortionFieldGrid(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  currentPhysStopSD: number,
): DistortionFieldGridResult {
  const reference = computeDistortionReference(L, zPos, focusT, zoomT);
  if (reference === null) {
    return {
      lines: [],
      idealFieldRadius: 0,
    };
  }

  const axisSamples = Array.from(
    { length: DISTORTION_GRID_SEGMENT_COUNT },
    (_, index) => -1 + (2 * index) / (DISTORTION_GRID_SEGMENT_COUNT - 1),
  );

  const pupilCorrection = buildPupilCorrectionTable(reference, focusT, zoomT, L);

  return {
    idealFieldRadius: reference.idealFieldRadius,
    lines: DISTORTION_GRID_LINE_COORDINATES.flatMap((coordinate) => {
      const vertical: DistortionGridLine = {
        orientation: "vertical",
        idealCoordinate: coordinate,
        points: axisSamples.map((y) =>
          traceDistortionGridPoint(coordinate, y, reference, focusT, zoomT, currentPhysStopSD, L, pupilCorrection),
        ),
      };
      const horizontal: DistortionGridLine = {
        orientation: "horizontal",
        idealCoordinate: coordinate,
        points: axisSamples.map((x) =>
          traceDistortionGridPoint(x, coordinate, reference, focusT, zoomT, currentPhysStopSD, L, pupilCorrection),
        ),
      };
      return [vertical, horizontal];
    }),
  };
}
