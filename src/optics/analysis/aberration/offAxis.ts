/**
 * Off-axis aberration tracing — shared chief-ray-relative bundle construction and focus metrics.
 *
 * Supplies tangential, sagittal, circular, and state-aware field geometry helpers used by coma, bokeh,
 * field-curvature, distortion, and vignetting analysis.
 */

import type { PreparedGeometry } from "../../types.js";

import { runtimeView } from "../../prescription/runtimeView.js";
import type { AnalysisRequest } from "../request.js";

import type { RuntimeSkewRayTraceResult as SkewRayTraceResult } from "../../trace/runtimeRayResult.js";
import { sampleCircularPupil, sampleOrthogonalPupilFan } from "../sampling.js";
import type { CircularPupilSample, OrthogonalPupilSample } from "../sampling.js";
import { skewImagePlaneIntercept } from "../../trace/rayAdapters.js";
import type { SkewImagePlaneIntercept } from "../../trace/rayAdapters.js";
import { bAtZoom, halfFieldAtZoom, tracingHalfFieldAtZoom, yRatioAtZoom } from "../../state/stationTables.js";
import { thick } from "../../state/layout.js";
import {
  computeFieldGeometryAtState,
  solveChiefRayForRuntimeLens as solveChiefRay,
} from "../../state/fieldAdapters.js";
import { offsetVectorFieldRay } from "../../field/launch.js";
import type { FieldGeometryState, VectorFieldRayLaunch } from "../../field/launch.js";
import { prepareRayTrace } from "../../trace/rayAdapters.js";
import type { PreparedRayTrace } from "../../trace/rayAdapters.js";
import { isFisheyeProjection, projectionLaunchSlopeForField } from "../../field/projection.js";
import type { ChromaticChannel } from "../../../types/optics.js";
import { bestRelativeFocusPlane } from "./shared.js";
import type { TransverseFocusHit } from "./shared.js";

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
 * @param state - prepared geometry
 * @param fieldFraction - fraction of half field in `[0, 1]`
 * @returns scalar off-axis launch geometry, or null outside the numeric domain
 */
export function computeOffAxisFieldGeometryParaxial(
  state: PreparedGeometry,
  fieldFraction: number,
): OffAxisFieldGeometry | null {
  const L = runtimeView(state.lens);
  const zPos = state.z as number[];
  const zoomT = state.zoomT;

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

/**
 * Compute current-state scalar off-axis field geometry.
 *
 * Uses solved chief-ray launch height so pupil aberration, focus, zoom, and
 * aberration-control spacing match the visible off-axis ray convention.
 *
 * @param state - prepared geometry
 * @param fieldFraction - fraction of half field in `[0, 1]`
 * @param stateGeometry - optional precomputed field-geometry state
 * @returns scalar off-axis launch geometry, or null outside the numeric domain
 */
export function computeOffAxisFieldGeometryScalar(
  state: PreparedGeometry,
  fieldFraction: number,
  stateGeometry?: FieldGeometryState,
): OffAxisFieldGeometry | null {
  const L = runtimeView(state.lens);
  const zPos = state.z as number[];
  const focusT = state.focusT;
  const zoomT = state.zoomT;
  const aberrationT = state.aberrationT;

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

function shouldUseVectorOffAxisGeometry(state: PreparedGeometry, fieldAngleDeg: number): boolean {
  const L = runtimeView(state.lens);
  const zoomT = state.zoomT;

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
 * @param state - prepared geometry
 * @param fieldFraction - fraction of half field in `[0, 1]`
 * @param stateGeometry - optional precomputed field-geometry state
 * @returns projection-aware off-axis launch geometry, or null when unsupported
 */
export function computeOffAxisFieldGeometry(
  state: PreparedGeometry,
  fieldFraction: number,
  stateGeometry?: FieldGeometryState,
): ProjectionAwareOffAxisFieldGeometry | null {
  const L = runtimeView(state.lens);
  const zPos = state.z as number[];
  const focusT = state.focusT;
  const zoomT = state.zoomT;
  const aberrationT = state.aberrationT;

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
    (launch.status === "out-of-domain" || shouldUseVectorOffAxisGeometry(state, fieldAngleDeg))
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

function prepareOffAxisTrace(
  request: AnalysisRequest,
  geometry: ProjectionAwareOffAxisFieldGeometry,
  channel: ChromaticChannel | undefined,
): PreparedRayTrace {
  const L = runtimeView(request.preparedGeometry.lens);
  const focusT = request.preparedGeometry.focusT;
  const zoomT = request.preparedGeometry.zoomT;
  const stopSD = request.aperture.stopSemiDiameterMm;
  const aberrationT = request.preparedGeometry.aberrationT;

  const vector = isOffAxisVectorFieldGeometry(geometry) ? geometry : undefined;
  return prepareRayTrace(L, {
    focusT,
    zoomT,
    stopSD,
    channel,
    aberrationT,
    ghost: true,
    zPos: vector?.zPos,
    launchBoundT: vector?.vectorLaunch.launchBoundT,
  });
}

/**
 * Trace the chief ray for a scalar or vector off-axis geometry.
 *
 * @param geometry - off-axis field geometry
 * @param state - prepared geometry
 * @param channel - optional chromatic channel
 * @returns traced chief ray and image point, or null when clipped
 */
export function traceOffAxisChiefRay(
  request: AnalysisRequest,
  geometry: ProjectionAwareOffAxisFieldGeometry,
  channel?: ChromaticChannel,
  prepared?: PreparedRayTrace,
): OffAxisChiefRaySample | null {
  const entrancePupilSemiDiameter = request.aperture.entrancePupilSemiDiameterMm;

  const adapter = prepared ?? prepareOffAxisTrace(request, geometry, channel);
  if (isOffAxisVectorFieldGeometry(geometry)) {
    const trace = adapter.skewVector(geometry.vectorLaunch);
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

  const trace = adapter.skew(
    0 * entrancePupilSemiDiameter,
    geometry.yChief + 0 * entrancePupilSemiDiameter,
    0,
    geometry.uField,
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
 * @param state - prepared geometry
 * @param channel - optional chromatic channel
 * @returns chief ray plus surviving traced samples, or null when chief ray fails
 */
export function traceOffAxisBundleFromSamples(
  request: AnalysisRequest,
  samples: readonly SkewBundleSourceSample[],
  geometry: ProjectionAwareOffAxisFieldGeometry,
  channel?: ChromaticChannel,
): OffAxisBundle | null {
  const L = runtimeView(request.preparedGeometry.lens);
  const entrancePupilSemiDiameter = request.aperture.entrancePupilSemiDiameterMm;

  if (entrancePupilSemiDiameter <= 0 || L.N < 1) return null;

  const adapter = prepareOffAxisTrace(request, geometry, channel);
  const chiefRay = traceOffAxisChiefRay(request, geometry, channel, adapter);
  if (chiefRay === null) return null;

  const tracedSamples = samples.flatMap((sample) => {
    if (isOffAxisVectorFieldGeometry(geometry)) {
      const vectorRay = offsetVectorFieldRay(
        geometry.vectorLaunch,
        sample.xFraction * entrancePupilSemiDiameter,
        sample.yFraction * entrancePupilSemiDiameter,
      );
      const trace = adapter.skewVector(vectorRay);
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

    const trace = adapter.skew(
      sample.xFraction * entrancePupilSemiDiameter,
      geometry.yChief + sample.yFraction * entrancePupilSemiDiameter,
      0,
      geometry.uField,
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
 * @param state - prepared geometry
 * @param channel - optional chromatic channel
 * @returns traced off-axis bundle, or null when chief ray fails
 */
export function traceOrthogonalOffAxisBundle(
  request: AnalysisRequest,
  orientation: OffAxisFanOrientation,
  sampleCount: number,
  geometry: ProjectionAwareOffAxisFieldGeometry,
  channel?: ChromaticChannel,
): OffAxisBundle | null {
  return traceOffAxisBundleFromSamples(request, sampleOrthogonalPupilFan(sampleCount, orientation), geometry, channel);
}

/**
 * Trace a circular off-axis pupil bundle.
 *
 * @param ringSamples - number of samples per circular-pupil ring
 * @param geometry - scalar or vector off-axis field geometry
 * @param state - prepared geometry
 * @param channel - optional chromatic channel
 * @returns traced off-axis bundle, or null when chief ray fails
 */
export function traceCircularOffAxisBundle(
  request: AnalysisRequest,
  ringSamples: readonly number[],
  geometry: ProjectionAwareOffAxisFieldGeometry,
  channel?: ChromaticChannel,
): OffAxisBundle | null {
  return traceOffAxisBundleFromSamples(request, sampleCircularPupil(ringSamples), geometry, channel);
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
