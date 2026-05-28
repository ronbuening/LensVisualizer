/**
 * Off-axis aberration tracing — shared chief-ray-relative bundle construction and focus metrics.
 *
 * Supplies tangential, sagittal, circular, and state-aware field geometry helpers used by coma, bokeh,
 * field-curvature, distortion, and vignetting analysis.
 */

import {
  bAtZoom,
  computeFieldGeometryAtState,
  halfFieldAtZoom,
  offsetVectorFieldRay,
  sampleCircularPupil,
  sampleOrthogonalPupilFan,
  skewImagePlaneIntercept,
  solveChiefRay,
  thick,
  traceChiefRelativeSkewRay,
  traceChiefRelativeSkewRayChromatic,
  traceSkewRayVector,
  traceSkewRayVectorChromatic,
  tracingHalfFieldAtZoom,
  yRatioAtZoom,
  type CircularPupilSample,
  type FieldGeometryState,
  type OrthogonalPupilSample,
  type SkewImagePlaneIntercept,
  type SkewRayTraceResult,
  type VectorFieldRayLaunch,
} from "../optics.js";
import { isFisheyeProjection, projectionLaunchSlopeForField } from "../projection.js";
import type { ChromaticChannel, RuntimeLens } from "../../types/optics.js";
import { bestRelativeFocusPlane, type TransverseFocusHit } from "./shared.js";

/** Orientation of an orthogonal off-axis pupil fan. */
export type OffAxisFanOrientation = "tangential" | "sagittal";
/** Image-coordinate direction whose best focus is being evaluated. */
export type OffAxisDirection = "tangential" | "sagittal";

type SkewBundleSourceSample = OrthogonalPupilSample | CircularPupilSample;

/** Scalar off-axis field geometry using object-plane slope launch. */
export interface OffAxisFieldGeometry {
  fieldFraction: number;
  fieldAngleDeg: number;
  uField: number;
  yChief: number;
  lastSurfZ: number;
  imagePlaneZ: number;
}

/** Vector off-axis field geometry for fisheye/past-cap bounding-sphere launches. */
export interface OffAxisVectorFieldGeometry {
  kind: "vector";
  fieldFraction: number;
  fieldAngleDeg: number;
  vectorLaunch: VectorFieldRayLaunch;
  zPos: number[];
  lastSurfZ: number;
  imagePlaneZ: number;
}

/** Off-axis geometry that may be scalar or vector depending on projection domain. */
export type ProjectionAwareOffAxisFieldGeometry = OffAxisFieldGeometry | OffAxisVectorFieldGeometry;

/** Traced chief-ray sample and its image-plane intercept. */
export interface OffAxisChiefRaySample {
  trace: SkewRayTraceResult;
  imagePoint: SkewImagePlaneIntercept;
}

/** One traced pupil sample relative to an off-axis chief ray. */
export interface OffAxisTracedSample {
  index: number;
  sourceSampleIndex: number;
  xFraction: number;
  yFraction: number;
  pupilFraction: number | null;
  radiusFraction: number | null;
  azimuthRad: number | null;
  weight: number | null;
  launchX: number;
  launchY: number;
  trace: SkewRayTraceResult;
  imagePoint: SkewImagePlaneIntercept;
}

/** Complete off-axis bundle with chief ray and surviving pupil samples. */
export interface OffAxisBundle {
  geometry: ProjectionAwareOffAxisFieldGeometry;
  chiefRay: OffAxisChiefRaySample;
  sampleCount: number;
  validSampleCount: number;
  clippedSampleCount: number;
  samples: OffAxisTracedSample[];
}

function mapTracedSample(
  sample: SkewBundleSourceSample,
  entrancePupilSemiDiameter: number,
  yChief: number,
  trace: SkewRayTraceResult,
  imagePoint: SkewImagePlaneIntercept,
  launchX = sample.xFraction * entrancePupilSemiDiameter,
  launchY = yChief + sample.yFraction * entrancePupilSemiDiameter,
): OffAxisTracedSample {
  return {
    index: sample.index,
    sourceSampleIndex: sample.index,
    xFraction: sample.xFraction,
    yFraction: sample.yFraction,
    pupilFraction: "pupilFraction" in sample ? sample.pupilFraction : null,
    radiusFraction: "radiusFraction" in sample ? sample.radiusFraction : null,
    azimuthRad: "azimuthRad" in sample ? sample.azimuthRad : null,
    weight: "weight" in sample ? sample.weight : null,
    launchX,
    launchY,
    trace,
    imagePoint,
  };
}

/**
 * Type guard for projection-aware vector off-axis geometry.
 *
 * @param geometry - scalar or vector off-axis geometry
 * @returns true when the geometry uses a bounding-sphere vector launch
 */
export function isOffAxisVectorFieldGeometry(
  geometry: ProjectionAwareOffAxisFieldGeometry,
): geometry is OffAxisVectorFieldGeometry {
  return "kind" in geometry && geometry.kind === "vector";
}

/**
 * Compute first-order off-axis field geometry from cached RuntimeLens zoom values.
 *
 * This compatibility helper ignores focus-dependent pupil aberration. New analysis
 * paths should prefer the state-aware/projection-aware helpers below.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @param zoomT - normalized zoom slider
 * @param fieldFraction - fraction of half field in `[0, 1]`
 * @returns scalar off-axis launch geometry, or null outside the numeric domain
 */
export function computeParaxialOffAxisFieldGeometry(
  L: RuntimeLens,
  zPos: number[],
  zoomT: number,
  fieldFraction: number,
): OffAxisFieldGeometry | null {
  if (L.N < 1) return null;
  if (!isFinite(fieldFraction) || fieldFraction < 0 || fieldFraction > 1) return null;

  const halfFieldDeg = halfFieldAtZoom(zoomT, L);
  if (!isFinite(halfFieldDeg) || halfFieldDeg < 0) return null;

  const yRatio = yRatioAtZoom(zoomT, L);
  if (!isFinite(yRatio) || Math.abs(yRatio) < 1e-12) return null;

  const fieldAngleDeg = halfFieldDeg * fieldFraction;
  if (!isFinite(fieldAngleDeg) || fieldAngleDeg < 0) return null;

  const launch = projectionLaunchSlopeForField(L, fieldAngleDeg);
  if (launch.status === "out-of-domain") return null;
  const uField = launch.uField;
  const yChief = -(bAtZoom(zoomT, L) / yRatio) * uField;
  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = lastSurfZ + (L.S[L.N - 1]?.d ?? 0);
  if (!isFinite(uField) || !isFinite(yChief) || !isFinite(imagePlaneZ)) return null;

  return {
    fieldFraction,
    fieldAngleDeg,
    uField,
    yChief,
    lastSurfZ,
    imagePlaneZ,
  };
}

/** Backward-compatible alias for the paraxial off-axis geometry helper. */
export const computeOffAxisFieldGeometry = computeParaxialOffAxisFieldGeometry;

/**
 * Compute current-state scalar off-axis field geometry.
 *
 * Uses solved chief-ray launch height so pupil aberration, focus, zoom, and
 * aberration-control spacing match the visible off-axis ray convention.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param fieldFraction - fraction of half field in `[0, 1]`
 * @param stateGeometry - optional precomputed field-geometry state
 * @param aberrationT - normalized aberration spacing slider
 * @returns scalar off-axis launch geometry, or null outside the numeric domain
 */
export function computeStateAwareOffAxisFieldGeometry(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  fieldFraction: number,
  stateGeometry?: FieldGeometryState,
  aberrationT = 0,
): OffAxisFieldGeometry | null {
  if (L.N < 1) return null;
  if (!isFinite(fieldFraction) || fieldFraction < 0 || fieldFraction > 1) return null;

  const geometry = stateGeometry ?? computeFieldGeometryAtState(focusT, zoomT, L, aberrationT);
  if (!isFinite(geometry.halfFieldDeg) || geometry.halfFieldDeg < 0) return null;

  const fieldAngleDeg = geometry.halfFieldDeg * fieldFraction;
  if (!isFinite(fieldAngleDeg) || fieldAngleDeg < 0) return null;

  const launch = projectionLaunchSlopeForField(L, fieldAngleDeg);
  if (launch.status === "out-of-domain") return null;
  const uField = launch.uField;
  const yChief = solveChiefRay(fieldAngleDeg, focusT, zoomT, L, geometry, aberrationT).yLaunch;
  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = lastSurfZ + thick(L.N - 1, focusT, zoomT, L, aberrationT);
  if (!isFinite(uField) || !isFinite(yChief) || !isFinite(imagePlaneZ)) return null;

  return {
    fieldFraction,
    fieldAngleDeg,
    uField,
    yChief,
    lastSurfZ,
    imagePlaneZ,
  };
}

function shouldUseVectorOffAxisGeometry(L: RuntimeLens, zoomT: number, fieldAngleDeg: number): boolean {
  if (fieldAngleDeg <= 0) return false;
  if (isFisheyeProjection(L.projection)) {
    const tracingHalfFieldDeg = tracingHalfFieldAtZoom(zoomT, L);
    return !isFinite(tracingHalfFieldDeg) || fieldAngleDeg > tracingHalfFieldDeg;
  }
  return false;
}

/**
 * Compute scalar or vector off-axis field geometry for the current projection.
 *
 * Fisheye fields beyond the trace-safe scalar half field promote to vector
 * bounding-sphere launch using the chief-ray solver's vector result.
 *
 * @param L - runtime lens object
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param fieldFraction - fraction of half field in `[0, 1]`
 * @param stateGeometry - optional precomputed field-geometry state
 * @param aberrationT - normalized aberration spacing slider
 * @returns projection-aware off-axis launch geometry, or null when unsupported
 */
export function computeProjectionAwareOffAxisFieldGeometry(
  L: RuntimeLens,
  zPos: number[],
  focusT: number,
  zoomT: number,
  fieldFraction: number,
  stateGeometry?: FieldGeometryState,
  aberrationT = 0,
): ProjectionAwareOffAxisFieldGeometry | null {
  if (L.N < 1) return null;
  if (!isFinite(fieldFraction) || fieldFraction < 0 || fieldFraction > 1) return null;

  const geometry = stateGeometry ?? computeFieldGeometryAtState(focusT, zoomT, L, aberrationT);
  if (!isFinite(geometry.halfFieldDeg) || geometry.halfFieldDeg < 0) return null;

  const fieldAngleDeg = geometry.halfFieldDeg * fieldFraction;
  if (!isFinite(fieldAngleDeg) || fieldAngleDeg < 0) return null;

  const lastSurfZ = zPos[L.N - 1];
  const imagePlaneZ = lastSurfZ + thick(L.N - 1, focusT, zoomT, L, aberrationT);
  if (!isFinite(imagePlaneZ)) return null;

  const launch = projectionLaunchSlopeForField(L, fieldAngleDeg);
  const solve = solveChiefRay(fieldAngleDeg, focusT, zoomT, L, geometry, aberrationT);
  if (
    solve.vectorLaunch &&
    (launch.status === "out-of-domain" || shouldUseVectorOffAxisGeometry(L, zoomT, fieldAngleDeg))
  ) {
    return {
      kind: "vector",
      fieldFraction,
      fieldAngleDeg,
      vectorLaunch: solve.vectorLaunch,
      zPos,
      lastSurfZ,
      imagePlaneZ,
    };
  }

  if (launch.status === "out-of-domain") return null;
  const uField = launch.uField;
  const yChief = solve.yLaunch;
  if (!isFinite(uField) || !isFinite(yChief)) return null;

  return {
    fieldFraction,
    fieldAngleDeg,
    uField,
    yChief,
    lastSurfZ,
    imagePlaneZ,
  };
}

/**
 * Trace the chief ray for a scalar or vector off-axis geometry.
 *
 * @param geometry - off-axis field geometry
 * @param L - runtime lens object
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param entrancePupilSemiDiameter - entrance-pupil semi-diameter in mm
 * @param stopSemiDiameter - physical stop semi-diameter in mm
 * @param channel - optional chromatic channel
 * @param aberrationT - normalized aberration spacing slider
 * @returns traced chief ray and image point, or null when clipped
 */
export function traceOffAxisChiefRay(
  geometry: ProjectionAwareOffAxisFieldGeometry,
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  entrancePupilSemiDiameter: number,
  stopSemiDiameter: number,
  channel?: ChromaticChannel,
  aberrationT = 0,
): OffAxisChiefRaySample | null {
  if (isOffAxisVectorFieldGeometry(geometry)) {
    const trace = channel
      ? traceSkewRayVectorChromatic(
          geometry.vectorLaunch,
          geometry.zPos,
          stopSemiDiameter,
          true,
          L,
          channel,
          focusT,
          zoomT,
          aberrationT,
        )
      : traceSkewRayVector(geometry.vectorLaunch, geometry.zPos, stopSemiDiameter, true, L, focusT, zoomT, aberrationT);
    if (trace.clipped) return null;

    const imagePoint = skewImagePlaneIntercept(
      trace.x,
      trace.y,
      trace.ux,
      trace.uy,
      geometry.lastSurfZ,
      geometry.imagePlaneZ,
    );
    if (imagePoint === null) return null;

    return {
      trace,
      imagePoint,
    };
  }

  const trace = channel
    ? traceChiefRelativeSkewRayChromatic(
        0,
        0,
        geometry.yChief,
        geometry.uField,
        entrancePupilSemiDiameter,
        focusT,
        zoomT,
        stopSemiDiameter,
        true,
        L,
        channel,
        aberrationT,
      )
    : traceChiefRelativeSkewRay(
        0,
        0,
        geometry.yChief,
        geometry.uField,
        entrancePupilSemiDiameter,
        focusT,
        zoomT,
        stopSemiDiameter,
        true,
        L,
        aberrationT,
      );
  if (trace.clipped) return null;

  const imagePoint = skewImagePlaneIntercept(
    trace.x,
    trace.y,
    trace.ux,
    trace.uy,
    geometry.lastSurfZ,
    geometry.imagePlaneZ,
  );
  if (imagePoint === null) return null;

  return {
    trace,
    imagePoint,
  };
}

/**
 * Trace an arbitrary set of pupil samples around an off-axis chief ray.
 *
 * Scalar geometry launches chief-relative skew rays from the entrance pupil.
 * Vector geometry offsets the bounding-sphere launch using radial/sagittal pupil
 * axes so fisheye fields stay in a consistent 3D launch convention.
 *
 * @param samples - orthogonal or circular pupil samples
 * @param geometry - scalar or vector off-axis field geometry
 * @param L - runtime lens object
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param entrancePupilSemiDiameter - entrance-pupil semi-diameter in mm
 * @param stopSemiDiameter - physical stop semi-diameter in mm
 * @param channel - optional chromatic channel
 * @param aberrationT - normalized aberration spacing slider
 * @returns chief ray plus surviving traced samples, or null when chief ray fails
 */
export function traceOffAxisBundleFromSamples(
  samples: readonly SkewBundleSourceSample[],
  geometry: ProjectionAwareOffAxisFieldGeometry,
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  entrancePupilSemiDiameter: number,
  stopSemiDiameter: number,
  channel?: ChromaticChannel,
  aberrationT = 0,
): OffAxisBundle | null {
  if (entrancePupilSemiDiameter <= 0 || L.N < 1) return null;

  const chiefRay = traceOffAxisChiefRay(
    geometry,
    L,
    focusT,
    zoomT,
    entrancePupilSemiDiameter,
    stopSemiDiameter,
    channel,
    aberrationT,
  );
  if (chiefRay === null) return null;

  const tracedSamples = samples.flatMap((sample) => {
    if (isOffAxisVectorFieldGeometry(geometry)) {
      const vectorRay = offsetVectorFieldRay(
        geometry.vectorLaunch,
        sample.xFraction * entrancePupilSemiDiameter,
        sample.yFraction * entrancePupilSemiDiameter,
      );
      const trace = channel
        ? traceSkewRayVectorChromatic(
            vectorRay,
            geometry.zPos,
            stopSemiDiameter,
            true,
            L,
            channel,
            focusT,
            zoomT,
            aberrationT,
          )
        : traceSkewRayVector(vectorRay, geometry.zPos, stopSemiDiameter, true, L, focusT, zoomT, aberrationT);
      if (trace.clipped) return [];

      const imagePoint = skewImagePlaneIntercept(
        trace.x,
        trace.y,
        trace.ux,
        trace.uy,
        geometry.lastSurfZ,
        geometry.imagePlaneZ,
      );
      if (imagePoint === null) return [];

      return [
        mapTracedSample(
          sample,
          entrancePupilSemiDiameter,
          0,
          trace,
          imagePoint,
          vectorRay.origin[0],
          vectorRay.origin[1],
        ),
      ];
    }

    const trace = channel
      ? traceChiefRelativeSkewRayChromatic(
          sample.xFraction,
          sample.yFraction,
          geometry.yChief,
          geometry.uField,
          entrancePupilSemiDiameter,
          focusT,
          zoomT,
          stopSemiDiameter,
          true,
          L,
          channel,
          aberrationT,
        )
      : traceChiefRelativeSkewRay(
          sample.xFraction,
          sample.yFraction,
          geometry.yChief,
          geometry.uField,
          entrancePupilSemiDiameter,
          focusT,
          zoomT,
          stopSemiDiameter,
          true,
          L,
          aberrationT,
        );
    if (trace.clipped) return [];

    const imagePoint = skewImagePlaneIntercept(
      trace.x,
      trace.y,
      trace.ux,
      trace.uy,
      geometry.lastSurfZ,
      geometry.imagePlaneZ,
    );
    if (imagePoint === null) return [];

    return [mapTracedSample(sample, entrancePupilSemiDiameter, geometry.yChief, trace, imagePoint)];
  });

  return {
    geometry,
    chiefRay,
    sampleCount: samples.length,
    validSampleCount: tracedSamples.length,
    clippedSampleCount: samples.length - tracedSamples.length,
    samples: tracedSamples,
  };
}

/**
 * Trace a tangential or sagittal off-axis pupil fan.
 *
 * @param orientation - tangential or sagittal fan direction
 * @param sampleCount - requested fan sample count
 * @param geometry - scalar or vector off-axis field geometry
 * @param L - runtime lens object
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param entrancePupilSemiDiameter - entrance-pupil semi-diameter in mm
 * @param stopSemiDiameter - physical stop semi-diameter in mm
 * @param channel - optional chromatic channel
 * @param aberrationT - normalized aberration spacing slider
 * @returns traced off-axis bundle, or null when chief ray fails
 */
export function traceOrthogonalOffAxisBundle(
  orientation: OffAxisFanOrientation,
  sampleCount: number,
  geometry: ProjectionAwareOffAxisFieldGeometry,
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  entrancePupilSemiDiameter: number,
  stopSemiDiameter: number,
  channel?: ChromaticChannel,
  aberrationT = 0,
): OffAxisBundle | null {
  return traceOffAxisBundleFromSamples(
    sampleOrthogonalPupilFan(sampleCount, orientation),
    geometry,
    L,
    focusT,
    zoomT,
    entrancePupilSemiDiameter,
    stopSemiDiameter,
    channel,
    aberrationT,
  );
}

/**
 * Trace a circular off-axis pupil bundle.
 *
 * @param ringSamples - number of samples per circular-pupil ring
 * @param geometry - scalar or vector off-axis field geometry
 * @param L - runtime lens object
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param entrancePupilSemiDiameter - entrance-pupil semi-diameter in mm
 * @param stopSemiDiameter - physical stop semi-diameter in mm
 * @param channel - optional chromatic channel
 * @param aberrationT - normalized aberration spacing slider
 * @returns traced off-axis bundle, or null when chief ray fails
 */
export function traceCircularOffAxisBundle(
  ringSamples: readonly number[],
  geometry: ProjectionAwareOffAxisFieldGeometry,
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  entrancePupilSemiDiameter: number,
  stopSemiDiameter: number,
  channel?: ChromaticChannel,
  aberrationT = 0,
): OffAxisBundle | null {
  return traceOffAxisBundleFromSamples(
    sampleCircularPupil(ringSamples),
    geometry,
    L,
    focusT,
    zoomT,
    entrancePupilSemiDiameter,
    stopSemiDiameter,
    channel,
    aberrationT,
  );
}

/**
 * Extract transverse focus hits in tangential or sagittal direction.
 *
 * @param bundle - traced off-axis bundle
 * @param direction - image coordinate to analyze
 * @returns sample hits and chief-ray reference hit
 */
export function transverseFocusHitsForDirection(
  bundle: OffAxisBundle,
  direction: OffAxisDirection,
): { hits: TransverseFocusHit[]; referenceHit: TransverseFocusHit } {
  const hits = bundle.samples.map((sample) => ({
    coordinate: direction === "tangential" ? sample.trace.y : sample.trace.x,
    slope: direction === "tangential" ? sample.trace.uy : sample.trace.ux,
  }));
  const referenceHit = {
    coordinate: direction === "tangential" ? bundle.chiefRay.trace.y : bundle.chiefRay.trace.x,
    slope: direction === "tangential" ? bundle.chiefRay.trace.uy : bundle.chiefRay.trace.ux,
  };

  return { hits, referenceHit };
}

/**
 * Compute best-focus plane for an off-axis bundle direction.
 *
 * @param bundle - traced off-axis bundle
 * @param direction - tangential or sagittal focus direction
 * @returns least-squares best-focus z coordinate in mm
 */
export function bestFocusPlaneForDirection(bundle: OffAxisBundle, direction: OffAxisDirection): number {
  const { hits, referenceHit } = transverseFocusHitsForDirection(bundle, direction);
  return bestRelativeFocusPlane(hits, referenceHit, bundle.geometry.lastSurfZ);
}
