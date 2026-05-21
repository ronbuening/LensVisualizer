/**
 * Distortion analysis — pure function for computing a distortion curve
 * across the current image height for the active lens state.
 *
 * Samples fixed image heights from center to the current field edge,
 * solves the object-space field angle that lands at each height, and
 * compares the traced image height to the current projection ideal.
 *
 * No React dependencies — fully testable in isolation. Memoize from
 * current state in a hook rather than embedding in a component.
 */

import {
  chiefRayImageHeight,
  chiefRayImageHeightAccurate,
  computeAnalysisFieldGeometryAtState,
  computeBoundingSphereVectorFieldLaunch,
  computeFieldGeometryAtState,
  skewImagePlaneIntercept,
  solveChiefRay,
  solveFieldAngleForImageHeightAccurate,
  thick,
  traceSkewRay,
  traceSkewRayVector,
} from "./optics.js";
import {
  distortionProjectionReferenceForLens,
  isFisheyeProjection,
  projectionFieldAngleForImageHeight,
  projectionFieldSlopesForImagePoint,
  projectionImageHeightForAngle,
  projectionLaunchSlopeForField,
  projectionLaunchVectorForFieldAngles,
  type ProjectionReference,
  type ProjectionReferenceKind,
} from "./projection.js";
import type { FieldGeometryState, SkewRayTraceResult } from "./optics.js";
import { isHeavyLensForRayWork } from "./raySampling.js";
import type { RayTraceOptions } from "./rayTrace.js";
import type { RuntimeLens } from "../types/optics.js";

/** A single sample point on the distortion curve. */
export interface DistortionSample {
  /** Object-space field angle in degrees (0 = on-axis). */
  fieldAngleDeg: number;
  /** Normalized image height from center to current edge (0..1). */
  normalizedImageHeight: number;
  /** Current image height on the sensor/image plane (mm, signed). */
  imageHeight: number;
  /** Distortion/residual as a percentage: 100 × (real − ideal) / ideal. */
  distortionPercent: number;
  /** Traced chief-ray image height (mm, signed). */
  realHeight: number;
  /** Ideal projection image height (mm, signed). */
  idealHeight: number;
  /** Ideal-reference object angle for this image height at current scale. */
  idealFieldAngleDeg: number;
  /** Projection model used as the ideal reference. */
  referenceKind?: ProjectionReferenceKind;
  /** Human-readable ideal-reference label. */
  referenceLabel?: string;
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
  referenceKind: ProjectionReferenceKind;
  referenceLabel: string;
}

/** Number of evenly-spaced field samples (including center and edge). */
const SAMPLE_COUNT = 21;
const DISTORTION_GRID_LINE_COORDINATES = [-1, -0.5, 0, 0.5, 1] as const;
const DISTORTION_GRID_SEGMENT_COUNT = 17;

interface DistortionReference {
  geometry: ReturnType<typeof computeFieldGeometryAtState>;
  projectionReference: ProjectionReference;
  edgeImageHeight: number;
  idealFieldRadius: number;
  zPos: number[];
  lastSurfZ: number;
  imagePlaneZ: number;
}

function computeDistortionReference(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  fieldGeometry?: FieldGeometryState,
  aberrationT = 0,
  options?: RayTraceOptions,
): DistortionReference | null {
  if (L.N < 1) return null;

  const geometry = fieldGeometry ?? computeAnalysisFieldGeometryAtState(focusT, zoomT, L, aberrationT, options);
  if (geometry.halfFieldDeg <= 0 || !isFinite(geometry.halfFieldDeg)) return null;

  const halfFieldRad = (geometry.halfFieldDeg * Math.PI) / 180;
  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = lastSurfZ + thick(L.N - 1, focusT, zoomT, L, aberrationT);
  if (!isFinite(imagePlaneZ)) return null;

  /* Fisheye projections don't need the rectilinear scale-probe path — the
   * declared focal length sets the projection reference directly. They also
   * commonly have a half-field past MAX_FIELD_LAUNCH_DEG where the traced
   * `chiefRayImageHeightAccurate` would return NaN, so we use the analytic
   * ideal edge instead. Per-sample distortion residuals still come from the
   * traced bisection in `computeDistortionCurve`; `chiefRayImageHeightAccurate`
   * uses vector chief-ray launches when the scalar slope domain is exceeded. */
  if (isFisheyeProjection(L.projection)) {
    const projectionReference = distortionProjectionReferenceForLens(L, 0, zoomT);
    const idealFieldRadius = Math.abs(projectionImageHeightForAngle(projectionReference, halfFieldRad));
    if (!isFinite(idealFieldRadius) || idealFieldRadius <= 0) return null;
    return {
      geometry,
      projectionReference,
      edgeImageHeight: -idealFieldRadius,
      idealFieldRadius,
      zPos,
      lastSurfZ,
      imagePlaneZ,
    };
  }

  /* Rectilinear path: trace the edge chief ray and calibrate the rectilinear
   * scale from a near-axis probe (where paraxial EP is exact). */
  const edgeImageHeight = chiefRayImageHeightAccurate(
    geometry.halfFieldDeg,
    zPos,
    focusT,
    zoomT,
    L,
    geometry,
    aberrationT,
    options,
  );
  if (!isFinite(edgeImageHeight) || Math.abs(edgeImageHeight) < 1e-9) return null;

  const scaleProbeAngleDeg = Math.min(Math.max(geometry.halfFieldDeg * 0.01, 0.02), 0.5);
  const probeImageHeight = chiefRayImageHeight(
    scaleProbeAngleDeg,
    zPos,
    focusT,
    zoomT,
    L,
    geometry,
    aberrationT,
    options,
  );
  const probeLaunch = projectionLaunchSlopeForField(L, scaleProbeAngleDeg);
  if (probeLaunch.status === "out-of-domain") return null;
  const probeTan = -probeLaunch.uField;
  if (!isFinite(probeImageHeight) || Math.abs(probeTan) < 1e-12) return null;

  const rectilinearScale = -probeImageHeight / probeTan;
  if (!isFinite(rectilinearScale) || Math.abs(rectilinearScale) < 1e-9) return null;

  const projectionReference = distortionProjectionReferenceForLens(L, rectilinearScale, zoomT);
  const idealFieldRadius = Math.abs(projectionImageHeightForAngle(projectionReference, halfFieldRad));
  if (!isFinite(idealFieldRadius) || idealFieldRadius <= 0) return null;

  return {
    geometry,
    projectionReference,
    edgeImageHeight,
    idealFieldRadius,
    zPos,
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
 * actual image height to an ideal projection mapping. Rectilinear lenses use
 * the current near-axis F-tan(theta) scale; fisheyes use their declared
 * projection model.
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
  fieldGeometry?: FieldGeometryState,
  aberrationT = 0,
  options?: RayTraceOptions,
): DistortionSample[] {
  const reference = computeDistortionReference(L, zPos, focusT, zoomT, fieldGeometry, aberrationT, options);
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
        referenceKind: reference.projectionReference.kind,
        referenceLabel: reference.projectionReference.label,
      });
      continue;
    }

    const realHeight = -edgeAbsHeight * normalizedImageHeight;
    const fieldAngleDeg = solveFieldAngleForImageHeightAccurate(
      realHeight,
      zPos,
      focusT,
      zoomT,
      L,
      reference.geometry,
      aberrationT,
      options,
    );
    if (fieldAngleDeg == null || !isFinite(fieldAngleDeg)) continue;

    const thetaRad = (fieldAngleDeg * Math.PI) / 180;
    const idealHeight = -projectionImageHeightForAngle(reference.projectionReference, thetaRad);
    if (!isFinite(idealHeight) || idealHeight === 0) continue;

    const distortionPercent = (100 * (realHeight - idealHeight)) / idealHeight;
    const idealFieldAngleDeg =
      (projectionFieldAngleForImageHeight(reference.projectionReference, realHeight) * 180) / Math.PI;

    samples.push({
      fieldAngleDeg,
      normalizedImageHeight,
      imageHeight: realHeight,
      distortionPercent: isFinite(distortionPercent) ? distortionPercent : 0,
      realHeight,
      idealHeight,
      idealFieldAngleDeg,
      referenceKind: reference.projectionReference.kind,
      referenceLabel: reference.projectionReference.label,
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

const PUPIL_CORRECTION_SAMPLE_COUNT_FULL = 17;
const PUPIL_CORRECTION_SAMPLE_COUNT_HEAVY = 9;

function buildPupilCorrectionTable(
  reference: DistortionReference,
  focusT: number,
  zoomT: number,
  L: RuntimeLens,
  aberrationT = 0,
  options?: RayTraceOptions,
): PupilCorrectionEntry[] {
  const table: PupilCorrectionEntry[] = [];
  const sampleCount = isHeavyLensForRayWork(L)
    ? PUPIL_CORRECTION_SAMPLE_COUNT_HEAVY
    : PUPIL_CORRECTION_SAMPLE_COUNT_FULL;
  for (let i = 0; i < sampleCount; i++) {
    const angleDeg = (i / (sampleCount - 1)) * reference.geometry.halfFieldDeg;
    const launch = projectionLaunchSlopeForField(L, angleDeg);
    if (launch.status === "out-of-domain") {
      table.push({ angleDeg, ratio: 1 });
      continue;
    }
    const paraxialYChief = -reference.geometry.epRatio * launch.uField;
    const solvedYChief = solveChiefRay(angleDeg, focusT, zoomT, L, reference.geometry, aberrationT, options).yLaunch;
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

type DistortionGridLaunch =
  | {
      kind: "slope";
      fieldSlopeX: number;
      fieldSlopeY: number;
      equivalentAngleDeg: number;
      idealX: number;
      idealY: number;
    }
  | {
      kind: "vector";
      fieldAngleXDeg: number;
      fieldAngleYDeg: number;
      equivalentAngleDeg: number;
      idealX: number;
      idealY: number;
    };

function resolveDistortionGridLaunch(
  xNormalized: number,
  yNormalized: number,
  reference: DistortionReference,
): DistortionGridLaunch | null {
  if (reference.projectionReference.kind !== "rectilinear") {
    const fieldAngleXDeg = xNormalized * reference.geometry.halfFieldDeg;
    const fieldAngleYDeg = yNormalized * reference.geometry.halfFieldDeg;
    const launch = projectionLaunchVectorForFieldAngles(reference.projectionReference, fieldAngleXDeg, fieldAngleYDeg);
    if (launch.status === "out-of-domain") {
      return {
        kind: "vector",
        fieldAngleXDeg,
        fieldAngleYDeg,
        equivalentAngleDeg: launch.totalFieldDeg,
        idealX: launch.idealImageX,
        idealY: launch.idealImageY,
      };
    }
    return {
      kind: "slope",
      fieldSlopeX: launch.fieldSlopeX,
      fieldSlopeY: launch.fieldSlopeY,
      equivalentAngleDeg: launch.totalFieldDeg,
      idealX: launch.idealImageX,
      idealY: launch.idealImageY,
    };
  }

  const idealX = xNormalized * reference.idealFieldRadius;
  const idealY = yNormalized * reference.idealFieldRadius;
  const fieldSlopes = projectionFieldSlopesForImagePoint(reference.projectionReference, idealX, idealY);
  if (fieldSlopes === null) return null;
  return {
    kind: "slope",
    fieldSlopeX: fieldSlopes.fieldSlopeX,
    fieldSlopeY: fieldSlopes.fieldSlopeY,
    equivalentAngleDeg: fieldSlopes.equivalentAngleDeg,
    idealX,
    idealY,
  };
}

type DistortionGridLaunchVector = Extract<DistortionGridLaunch, { kind: "vector" }>;
type DistortionGridLaunchSlope = Extract<DistortionGridLaunch, { kind: "slope" }>;

function traceDistortionGridPointVector(
  launch: DistortionGridLaunchVector,
  reference: DistortionReference,
  currentPhysStopSD: number,
  L: RuntimeLens,
  aberrationT: number,
  options?: RayTraceOptions,
): SkewRayTraceResult | null {
  const vectorLaunch = computeBoundingSphereVectorFieldLaunch(
    L,
    reference.geometry,
    launch.fieldAngleXDeg,
    launch.fieldAngleYDeg,
    aberrationT,
  );
  if (vectorLaunch === null) return null;
  return traceSkewRayVector(vectorLaunch, reference.zPos, currentPhysStopSD, true, L, options);
}

// The slope launch starts from the paraxial EP; pupil aberration is applied
// post-hoc by scaling `epRatio` with the interpolated correction at the
// equivalent field angle. The vector branch doesn't need this — the
// bounding-sphere chief-ray bisection lands on the real stop center directly.
function traceDistortionGridPointSlope(
  launch: DistortionGridLaunchSlope,
  reference: DistortionReference,
  focusT: number,
  zoomT: number,
  currentPhysStopSD: number,
  L: RuntimeLens,
  pupilCorrection: PupilCorrectionEntry[],
  aberrationT: number,
  options?: RayTraceOptions,
): SkewRayTraceResult {
  const correction = interpolatePupilCorrection(pupilCorrection, launch.equivalentAngleDeg);
  const correctedEpRatio = reference.geometry.epRatio * correction;
  const chiefLaunchX = -correctedEpRatio * launch.fieldSlopeX;
  const chiefLaunchY = -correctedEpRatio * launch.fieldSlopeY;
  return traceSkewRay(
    chiefLaunchX,
    chiefLaunchY,
    launch.fieldSlopeX,
    launch.fieldSlopeY,
    focusT,
    zoomT,
    currentPhysStopSD,
    true,
    L,
    aberrationT,
    options,
  );
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
  aberrationT = 0,
  options?: RayTraceOptions,
): DistortionGridPoint {
  const radiusNormalized = Math.hypot(xNormalized, yNormalized);
  const insideImageCircle = radiusNormalized <= 1 + 1e-9;

  const fallbackIdealX = xNormalized * reference.idealFieldRadius;
  const fallbackIdealY = yNormalized * reference.idealFieldRadius;

  if (!insideImageCircle) {
    return {
      idealX: fallbackIdealX,
      idealY: fallbackIdealY,
      tracedX: null,
      tracedY: null,
      radiusNormalized,
      insideImageCircle: false,
      usable: false,
    };
  }

  const launch = resolveDistortionGridLaunch(xNormalized, yNormalized, reference);
  if (launch === null) {
    return {
      idealX: fallbackIdealX,
      idealY: fallbackIdealY,
      tracedX: null,
      tracedY: null,
      radiusNormalized,
      insideImageCircle: true,
      usable: false,
    };
  }
  const { idealX, idealY } = launch;

  const trace =
    launch.kind === "vector"
      ? traceDistortionGridPointVector(launch, reference, currentPhysStopSD, L, aberrationT, options)
      : traceDistortionGridPointSlope(
          launch,
          reference,
          focusT,
          zoomT,
          currentPhysStopSD,
          L,
          pupilCorrection,
          aberrationT,
          options,
        );

  if (trace === null) {
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
  fieldGeometry?: FieldGeometryState,
  aberrationT = 0,
  options?: RayTraceOptions,
): DistortionFieldGridResult {
  const reference = computeDistortionReference(L, zPos, focusT, zoomT, fieldGeometry, aberrationT, options);
  if (reference === null) {
    return {
      lines: [],
      idealFieldRadius: 0,
      referenceKind: "rectilinear",
      referenceLabel: "Rectilinear distortion",
    };
  }

  const axisSamples = Array.from(
    { length: DISTORTION_GRID_SEGMENT_COUNT },
    (_, index) => -1 + (2 * index) / (DISTORTION_GRID_SEGMENT_COUNT - 1),
  );

  const pupilCorrection = buildPupilCorrectionTable(reference, focusT, zoomT, L, aberrationT, options);

  return {
    idealFieldRadius: reference.idealFieldRadius,
    referenceKind: reference.projectionReference.kind,
    referenceLabel: reference.projectionReference.label,
    lines: DISTORTION_GRID_LINE_COORDINATES.flatMap((coordinate) => {
      const vertical: DistortionGridLine = {
        orientation: "vertical",
        idealCoordinate: coordinate,
        points: axisSamples.map((y) =>
          traceDistortionGridPoint(
            coordinate,
            y,
            reference,
            focusT,
            zoomT,
            currentPhysStopSD,
            L,
            pupilCorrection,
            aberrationT,
            options,
          ),
        ),
      };
      const horizontal: DistortionGridLine = {
        orientation: "horizontal",
        idealCoordinate: coordinate,
        points: axisSamples.map((x) =>
          traceDistortionGridPoint(
            x,
            coordinate,
            reference,
            focusT,
            zoomT,
            currentPhysStopSD,
            L,
            pupilCorrection,
            aberrationT,
            options,
          ),
        ),
      };
      return [vertical, horizontal];
    }),
  };
}
