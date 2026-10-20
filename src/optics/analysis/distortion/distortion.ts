/**
 * Distortion analysis — pure function for computing a distortion curve
 * across the current image height for the active lens state.
 *
 * Samples fixed image heights from center to the current field edge,
 * solves the object-space field angle that lands at each height, and
 * compares the traced image height to the current projection ideal. At finite
 * rectilinear focus the ideal is the paraxial image of the chief ray's object
 * point, not the infinity-conjugate F-tan(theta) of its object-space angle.
 *
 * No React dependencies — fully testable in isolation. Memoize from
 * current state in a hook rather than embedding in a component.
 */

import { evenlySpacedSigned, uniformFieldFraction } from "../sampling.js";

import { prepareRayTrace } from "../../trace/rayAdapters.js";
import type { PreparedRayTrace } from "../../trace/rayAdapters.js";
import {
  chiefRayImageHeightForRuntimeLens as chiefRayImageHeight,
  chiefRayImageHeightAccurateForRuntimeLens as chiefRayImageHeightAccurate,
  computeAnalysisFieldGeometryAtState,
  computeBoundingSphereVectorFieldLaunchForRuntimeLens as computeBoundingSphereVectorFieldLaunch,
  computeFieldGeometryAtState,
  paraxialObjectVergenceForRuntimeLens as paraxialObjectVergence,
  solveChiefRayForRuntimeLens as solveChiefRay,
  invertChiefRayImageHeights,
} from "../../state/fieldAdapters.js";
import type { ImageHeightInversionResult } from "../../field/imageHeight.js";
import {
  distortionProjectionReferenceForLens,
  isFisheyeProjection,
  projectionFieldAngleForImageHeight,
  projectionFieldSlopesForImagePoint,
  projectionImageHeightForAngle,
  projectionLaunchSlopeForField,
  projectionLaunchVectorForFieldAngles,
} from "../../field/projection.js";
import type { ProjectionReference, ProjectionReferenceKind } from "../../field/projection.js";
import type { RuntimeSkewRayTraceResult as SkewRayTraceResult } from "../../trace/runtimeRayResult.js";
import { skewImagePlaneIntercept } from "../../trace/rayAdapters.js";
import { prepareState } from "../../state/preparedGeometry.js";
import { runtimeView } from "../../prescription/runtimeView.js";
import type { AnalysisRequest } from "../request.js";
import { isHeavyLensForRayWork } from "../../trace/raySampling.js";
import { resolveImageFormatMetadata } from "../../../utils/catalog/lensTaxonomy.js";
import type { RuntimeLens } from "../../../types/optics.js";

/** A single sample point on the distortion curve. */
export interface DistortionSample {
  /** Object-space field angle in degrees (0 = on-axis). */
  fieldAngleDeg: number;
  /** Normalized height to the historical edge (0..1). */
  normalizedImageHeight: number;
  /** Current image height on the sensor/image plane (mm, signed). */
  imageHeight: number;
  /** Distortion/residual as a percentage: 100 × (real − ideal) / ideal. */
  distortionPercent: number;
  /** Traced chief-ray image height (mm, signed). */
  realHeight: number;
  /** Ideal projection image height (mm, signed); the paraxial object-point image at finite rectilinear focus. */
  idealHeight: number;
  /** Ideal-reference object angle for this image height at current scale. */
  idealFieldAngleDeg: number;
  /** Projection model used as the ideal reference. */
  referenceKind?: ProjectionReferenceKind;
  /** Human-readable ideal-reference label. */
  referenceLabel?: string;
}

/** Independently validated historical edge samples and corner inversion status. */
export interface DistortionCurveResult {
  samples: DistortionSample[];
  corner: ImageHeightInversionResult;
  cornerImageHeight: number;
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

function clampedSampleCount(value: number | undefined, fallback: number, minimum: number): number {
  if (value === undefined) return fallback;
  return Math.max(minimum, Math.round(value));
}

interface DistortionReference {
  geometry: ReturnType<typeof computeFieldGeometryAtState>;
  projectionReference: ProjectionReference;
  edgeImageHeight: number;
  idealFieldRadius: number;
  /** Reciprocal first-vertex distance of the paraxial object plane (1/mm); 0 at infinity and for fisheyes. */
  objectVergence: number;
  zPos: number[];
  lastSurfZ: number;
  imagePlaneZ: number;
}

function computeDistortionReference(request: AnalysisRequest, allowFailedEdge = false): DistortionReference | null {
  const { preparedGeometry: state } = request;
  const { focusT, zoomT, aberrationT } = state;
  const L = runtimeView(state.lens);
  const zPos = state.z as number[];
  const fieldGeometry = request.fieldGeometry ?? undefined;
  if (L.N < 1) return null;

  const geometry = fieldGeometry ?? computeAnalysisFieldGeometryAtState(focusT, zoomT, L, aberrationT);
  if (geometry.halfFieldDeg <= 0 || !isFinite(geometry.halfFieldDeg)) return null;

  const halfFieldRad = (geometry.halfFieldDeg * Math.PI) / 180;
  const lastSurfZ = zPos[L.N - 1];
  // Retain the control-derived rear gap even when the request overrides drawing vertices.
  const imagePlaneZ = lastSurfZ + (prepareState(state.lens, focusT, zoomT, aberrationT).surfaces[L.N - 1]?.d ?? 0);
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
      objectVergence: 0,
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
  );
  if (!allowFailedEdge && (!isFinite(edgeImageHeight) || Math.abs(edgeImageHeight) < 1e-9)) return null;

  const scaleProbeAngleDeg = Math.min(Math.max(geometry.halfFieldDeg * 0.01, 0.02), 0.5);
  const probeImageHeight = chiefRayImageHeight(scaleProbeAngleDeg, zPos, focusT, zoomT, L, geometry, aberrationT);
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
    objectVergence: paraxialObjectVergence(focusT, zoomT, L, aberrationT),
    zPos,
    lastSurfZ,
    imagePlaneZ,
  };
}

/**
 * Tangent of the paraxial field angle of a chief ray's object point.
 *
 * The point lies where the chief ray (height `yLaunch` at the first vertex, slope `uField`) crosses the paraxial object
 * plane at 1/`objectVergence` in front of the vertex. Its tangent is that height over the plane's distance from the
 * paraxial entrance pupil, so the rectilinear scale times this tangent is the point's paraxial image height. Pupil
 * aberration moves the real chief ray off the paraxial pupil centre, which is why this differs from tan(theta) at
 * finite focus; at infinity (vergence 0) the two agree.
 */
function paraxialObjectTangent(reference: DistortionReference, yLaunch: number, uField: number): number {
  const vergence = reference.objectVergence;
  return (yLaunch * vergence - uField) / (1 + reference.geometry.epRatio * vergence);
}

/**
 * Compute a distortion curve for the current lens state.
 *
 * Samples the image plane from center to the current traced field edge at
 * SAMPLE_COUNT evenly-spaced image heights. At each height, solves the
 * object-space field angle that reaches that point, then compares the
 * actual image height to an ideal projection mapping. Rectilinear lenses use
 * the current near-axis F-tan(theta) scale, applied at finite focus to the
 * paraxial field angle of the chief ray's object point (the paraxial image of
 * that point); fisheyes use their declared projection model at the
 * object-space field angle.
 *
 * @param request - prepared geometry, current field and curve sampling controls
 * @returns valid historical edge samples and independent corner status
 */
export function computeDistortionCurve(request: AnalysisRequest): DistortionCurveResult {
  const { preparedGeometry: state, sampling } = request;
  const { focusT, zoomT, aberrationT } = state;
  const L = runtimeView(state.lens);
  const zPos = state.z as number[];
  const cornerImageHeight =
    (L.source?.catalog.imageCircleMm ?? resolveImageFormatMetadata(L.source?.catalog.imageFormat).diagonalMm) / 2;
  const reference = computeDistortionReference(request, !L.isFoldedOptics);
  if (reference === null)
    return {
      samples: [],
      corner: { status: "unreachable", reason: "field-limit" },
      cornerImageHeight,
    };

  const samples: DistortionSample[] = [];
  const sampleCount = clampedSampleCount(sampling.distortionCurveSampleCount, SAMPLE_COUNT, 3);
  const edgeAbsHeight = Number.isFinite(reference.edgeImageHeight)
    ? Math.abs(reference.edgeImageHeight)
    : cornerImageHeight;
  // Unlike the angular pupil-correction sweep, curve targets are uniform in image height and omit the axial inversion.
  const targetImageHeights = Array.from(
    { length: sampleCount - 1 },
    (_, index) => -edgeAbsHeight * uniformFieldFraction(index + 1, sampleCount),
  );
  const separateCorner = !isFisheyeProjection(L.projection) && Math.abs(edgeAbsHeight - cornerImageHeight) >= 1e-4;
  const inversions = invertChiefRayImageHeights(
    separateCorner ? [...targetImageHeights, -cornerImageHeight] : targetImageHeights,
    zPos,
    focusT,
    zoomT,
    L,
    reference.geometry,
    aberrationT,
  );

  // The historic Edge is the last target for which the old inversion returned an
  // angle, including an invalid ray now rejected. Unbracketed outer targets were
  // already omitted by the original curve and must not rename a valid Edge.
  const edge =
    inversions.slice(0, sampleCount - 1).findLast((result) => result.fieldAngleDeg !== undefined) ??
    inversions[sampleCount - 2];
  let formatCorner = separateCorner ? inversions.at(-1)! : edge;
  if (separateCorner && formatCorner.status === "unreachable" && formatCorner.reason === "field-limit") {
    const rawGeometry = computeFieldGeometryAtState(focusT, zoomT, L, aberrationT);
    if (rawGeometry.halfFieldDeg > reference.geometry.halfFieldDeg) {
      [formatCorner] = invertChiefRayImageHeights(
        [-cornerImageHeight],
        zPos,
        focusT,
        zoomT,
        L,
        rawGeometry,
        aberrationT,
      );
    }
  }
  // Preserve ordinary design/aperture-limited Edge reporting. A numerical failure
  // only suppresses the corner when the corner's own inversion has no valid ray.
  const corner = formatCorner.status === "unreachable" && formatCorner.reason === "field-limit" ? edge : formatCorner;
  for (let i = 0; i < sampleCount; i++) {
    const normalizedImageHeight = uniformFieldFraction(i, sampleCount);
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

    const targetIndex = i - 1;
    const realHeight = targetImageHeights[targetIndex];
    const inversion = inversions[targetIndex];
    if (inversion.status === "unreachable") continue;
    const fieldAngleDeg = inversion.fieldAngleDeg;

    let thetaRad = (fieldAngleDeg * Math.PI) / 180;
    if (reference.objectVergence !== 0) {
      const chief = solveChiefRay(fieldAngleDeg, focusT, zoomT, L, reference.geometry, aberrationT);
      thetaRad = Math.atan(paraxialObjectTangent(reference, chief.yLaunch, chief.uField));
    }
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

  return { samples, corner, cornerImageHeight };
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
  sampleCountOverride?: number,
): PupilCorrectionEntry[] {
  const table: PupilCorrectionEntry[] = [];
  const sampleCount = clampedSampleCount(
    sampleCountOverride,
    isHeavyLensForRayWork(L) ? PUPIL_CORRECTION_SAMPLE_COUNT_HEAVY : PUPIL_CORRECTION_SAMPLE_COUNT_FULL,
    2,
  );
  for (let i = 0; i < sampleCount; i++) {
    const angleDeg = uniformFieldFraction(i, sampleCount) * reference.geometry.halfFieldDeg;
    const launch = projectionLaunchSlopeForField(L, angleDeg);
    if (launch.status === "out-of-domain") {
      table.push({ angleDeg, ratio: 1 });
      continue;
    }
    const paraxialYChief = -reference.geometry.epRatio * launch.uField;
    const solvedYChief = solveChiefRay(angleDeg, focusT, zoomT, L, reference.geometry, aberrationT).yLaunch;
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
  L: RuntimeLens,
  aberrationT: number,
  vectorAdapter: (bound: number) => PreparedRayTrace,
): SkewRayTraceResult | null {
  const vectorLaunch = computeBoundingSphereVectorFieldLaunch(
    L,
    reference.geometry,
    launch.fieldAngleXDeg,
    launch.fieldAngleYDeg,
    aberrationT,
  );
  if (vectorLaunch === null) return null;
  return vectorAdapter(vectorLaunch.launchBoundT).skewVector(vectorLaunch);
}

// The slope launch starts from the paraxial EP; pupil aberration is applied
// post-hoc by scaling `epRatio` with the interpolated correction at the
// equivalent field angle. The vector branch doesn't need this — the
// bounding-sphere chief-ray bisection lands on the real stop center directly.
// At finite focus the ideal grid point is the paraxial image of an object
// point, so the slope is rescaled until the corrected chief ray starts from
// that point; three passes settle the slowly varying correction.
function traceDistortionGridPointSlope(
  launch: DistortionGridLaunchSlope,
  reference: DistortionReference,
  pupilCorrection: PupilCorrectionEntry[],
  adapter: PreparedRayTrace,
): SkewRayTraceResult {
  let correction = interpolatePupilCorrection(pupilCorrection, launch.equivalentAngleDeg);
  let slopeScale = 1;
  if (reference.objectVergence !== 0) {
    const pupilVergence = reference.geometry.epRatio * reference.objectVergence;
    const paraxialSlope = Math.hypot(launch.fieldSlopeX, launch.fieldSlopeY);
    for (let pass = 0; pass < 3; pass++) {
      slopeScale = (1 + pupilVergence) / (1 + pupilVergence * correction);
      correction = interpolatePupilCorrection(pupilCorrection, (Math.atan(slopeScale * paraxialSlope) * 180) / Math.PI);
    }
    slopeScale = (1 + pupilVergence) / (1 + pupilVergence * correction);
  }
  const fieldSlopeX = launch.fieldSlopeX * slopeScale;
  const fieldSlopeY = launch.fieldSlopeY * slopeScale;
  const correctedEpRatio = reference.geometry.epRatio * correction;
  return adapter.skew(-correctedEpRatio * fieldSlopeX, -correctedEpRatio * fieldSlopeY, fieldSlopeX, fieldSlopeY);
}

function traceDistortionGridPoint(
  xNormalized: number,
  yNormalized: number,
  reference: DistortionReference,
  L: RuntimeLens,
  pupilCorrection: PupilCorrectionEntry[],
  aberrationT: number,
  adapter: PreparedRayTrace,
  vectorAdapter: (bound: number) => PreparedRayTrace,
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
      ? traceDistortionGridPointVector(launch, reference, L, aberrationT, vectorAdapter)
      : traceDistortionGridPointSlope(launch, reference, pupilCorrection, adapter);

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

/**
 * Compute a traced 2D distortion grid over the ideal image circle.
 *
 * Grid coordinates are sampled in projection-reference image space, then inverted
 * to field launches. Rectilinear cells use scalar slopes; fisheye/out-of-domain
 * cells use vector launches when available so past-cap fields can still trace.
 *
 * @param request - prepared geometry, physical stop, field and grid sampling controls
 * @returns traced horizontal/vertical distortion grid lines
 */
export function computeDistortionFieldGrid(request: AnalysisRequest): DistortionFieldGridResult {
  const { preparedGeometry: state, sampling } = request;
  const { focusT, zoomT, aberrationT } = state;
  const L = runtimeView(state.lens);
  const zPos = state.z as number[];
  const currentPhysStopSD = request.aperture.stopSemiDiameterMm;
  const reference = computeDistortionReference(request);
  if (reference === null) {
    return {
      lines: [],
      idealFieldRadius: 0,
      referenceKind: "rectilinear",
      referenceLabel: "Rectilinear distortion",
    };
  }

  const segmentCount = clampedSampleCount(sampling.distortionGridSegmentCount, DISTORTION_GRID_SEGMENT_COUNT, 3);
  const axisSamples = evenlySpacedSigned(segmentCount);

  const pupilCorrection = buildPupilCorrectionTable(
    reference,
    focusT,
    zoomT,
    L,
    aberrationT,
    sampling.distortionPupilCorrectionSampleCount,
  );
  const traceOptions = { focusT, zoomT, stopSD: currentPhysStopSD, ghost: true, aberrationT };
  const adapter = prepareRayTrace(L, traceOptions);
  // Bounding-sphere launch bounds are constant across this field grid.
  let vectorTrace: PreparedRayTrace | undefined;
  const vectorAdapter = (launchBoundT: number): PreparedRayTrace =>
    (vectorTrace ??= prepareRayTrace(L, { ...traceOptions, zPos, launchBoundT }));
  const gridLineCoordinates = sampling.distortionGridLineCoordinates ?? DISTORTION_GRID_LINE_COORDINATES;

  return {
    idealFieldRadius: reference.idealFieldRadius,
    referenceKind: reference.projectionReference.kind,
    referenceLabel: reference.projectionReference.label,
    lines: gridLineCoordinates.flatMap((coordinate) => {
      const vertical: DistortionGridLine = {
        orientation: "vertical",
        idealCoordinate: coordinate,
        points: axisSamples.map((y) =>
          traceDistortionGridPoint(coordinate, y, reference, L, pupilCorrection, aberrationT, adapter, vectorAdapter),
        ),
      };
      const horizontal: DistortionGridLine = {
        orientation: "horizontal",
        idealCoordinate: coordinate,
        points: axisSamples.map((x) =>
          traceDistortionGridPoint(x, coordinate, reference, L, pupilCorrection, aberrationT, adapter, vectorAdapter),
        ),
      };
      return [vertical, horizontal];
    }),
  };
}
