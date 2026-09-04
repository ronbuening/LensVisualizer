/**
 * Exact tracing through a rigidly shifted/tilted lens in a fixed camera frame.
 */

import type { ChromaticChannel, TiltPivot } from "../../types/optics.js";
import { CHANNEL_WAVELENGTH_NM_2, channelIndexResolverForState2 } from "../chromatic/indexResolver.js";
import type { LensMovementState } from "../lensMovement.js";
import { formatCacheNumber } from "../math/numerics.js";
import { intersectRayPlane, type RayPlaneIntersection } from "../math/plane.js";
import { directionFromMeridionalSlope, directionFromSkewSlope, dot, subtract } from "../math/vector.js";
import type { Plane3, PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import { bulkTransmissionForTrace } from "../trace/bulkAbsorption.js";
import { shouldUseGeneralizedTrace } from "../trace/generalizedTrace.js";
import { stateWithRuntimeZ, traceEngineRay2 } from "../trace/rayAdapters.js";
import type { EngineTraceResult, TraceHit, TraceOptions } from "../trace/types.js";
import { directionSlopes } from "../trace/utils.js";
import { createPerspectivePose, type PerspectivePose } from "./pose.js";
import { createSensorBasis, type SensorBasis } from "./sensorBasis.js";

/** Inputs required to bind tracing to one camera/lens movement state. */
export interface CreatePerspectiveTraceContextParams {
  /** Intrinsic current-control state; the factory never mutates it. */
  preparedState: PreparedOpticalState;
  /** Optional camera-anchored surface vertices from the shared layout adapter. */
  cameraZPos?: readonly number[];
  /** Fixed sensor plane; defaults to the camera-anchored state's image plane. */
  sensorPlane?: Plane3;
  /** Clamped physical movement applied to the complete lens stack. */
  movement: LensMovementState;
  /** Camera-fixed tilt reference; required by the pose for non-zero tilt. */
  tiltPivot?: TiltPivot | null;
}

/** Engine trace controls plus wavelength and fixed-sensor projection selection. */
export interface PerspectiveTraceOptions extends TraceOptions {
  channel?: ChromaticChannel;
  /** Defaults to true for full traces and is always false for `stopAt` partial traces. */
  projectToSensor?: boolean;
}

/** One exact trace represented in both intrinsic-lens and fixed-camera frames. */
export interface PerspectiveTraceResult {
  localTrace: EngineTraceResult;
  cameraTrace: EngineTraceResult;
  /** Engine report point on the intrinsic return-vertex plane. */
  localReturnPoint: Vec3;
  /** The same report point after applying the physical lens pose. */
  cameraReturnPoint: Vec3;
  /** Forward intersection of the exiting camera-space ray with the fixed sensor. */
  sensorIntersection: RayPlaneIntersection | null;
  reachedSensor: boolean;
  /** Beer-Lambert bulk-material intensity transmission accumulated along physical hits. */
  transmission: number;
}

/** Trace adapter bound to one prepared layout, fixed sensor, and lens pose. */
export interface PerspectiveTraceContext {
  /** Camera-anchored but otherwise intrinsic/unmoved prepared state. */
  readonly state: PreparedOpticalState;
  readonly sensorPlane: Plane3;
  readonly sensorBasis: SensorBasis;
  readonly pose: PerspectivePose;
  /** Geometry-complete identity for controls, anchored layout, fixed sensor, pivot, and movement. */
  readonly cacheKey: string;
  traceRay(input: Ray3, options?: PerspectiveTraceOptions): PerspectiveTraceResult;
  traceMeridional(y0: number, u0: number, options?: PerspectiveTraceOptions): PerspectiveTraceResult;
  traceSkew(
    x0: number,
    y0: number,
    ux0: number,
    uy0: number,
    options?: PerspectiveTraceOptions,
  ): PerspectiveTraceResult;
}

/** Error raised when the generalized exact path cannot yet model a fixed external sensor. */
export class PerspectiveTraceUnsupportedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "PerspectiveTraceUnsupportedError";
  }
}

/**
 * Bind exact engine tracing to a camera-anchored layout and physical lens pose.
 */
export function createPerspectiveTraceContext({
  preparedState,
  cameraZPos,
  sensorPlane: requestedSensorPlane,
  movement,
  tiltPivot,
}: CreatePerspectiveTraceContextParams): PerspectiveTraceContext {
  const state = cameraZPos ? stateWithRuntimeZ(preparedState, cameraZPos) : preparedState;
  const pose = createPerspectivePose({ movement, sensorPlane: requestedSensorPlane ?? state.imagePlane, tiltPivot });
  const sensorPlane = pose.sensorPlane;
  const sensorBasis = createSensorBasis(sensorPlane);
  const cacheKey = perspectiveTraceContextCacheKey(state, pose, sensorBasis);

  const context: PerspectiveTraceContext = Object.freeze({
    state,
    sensorPlane,
    sensorBasis,
    pose,
    cacheKey,
    traceRay(input: Ray3, options?: PerspectiveTraceOptions) {
      return tracePerspectiveRay(context, input, options);
    },
    traceMeridional(y0: number, u0: number, options?: PerspectiveTraceOptions) {
      return tracePerspectiveMeridional(context, y0, u0, options);
    },
    traceSkew(x0: number, y0: number, ux0: number, uy0: number, options?: PerspectiveTraceOptions) {
      return tracePerspectiveSkew(context, x0, y0, ux0, uy0, options);
    },
  });
  return context;
}

/**
 * Trace an arbitrary camera-space ray through the physically moved lens.
 */
export function tracePerspectiveRay(
  context: PerspectiveTraceContext,
  input: Ray3,
  options: PerspectiveTraceOptions = {},
): PerspectiveTraceResult {
  if (context.pose.active && options.stopAt === undefined && shouldUseGeneralizedTrace(context.state, undefined)) {
    throw new PerspectiveTraceUnsupportedError(
      "Full perspective-control tracing currently supports sequential optical paths only",
    );
  }

  const localInput = context.pose.cameraToLensRay(input);
  const localTrace = traceEngineRay2(context.state, localInput, engineTraceOptions(context.state, options));
  const localReturnPoint = traceReturnPoint(localTrace, context.state);
  const cameraReturnPoint = context.pose.lensToCameraPoint(localReturnPoint);
  const cameraTrace = cameraTraceResult(localTrace, context.state, context.pose, cameraReturnPoint);
  const sensorIntersection = projectTraceToSensor(context, cameraTrace, options);
  return {
    localTrace,
    cameraTrace,
    localReturnPoint,
    cameraReturnPoint,
    sensorIntersection,
    reachedSensor: sensorIntersection !== null,
    transmission: bulkTransmissionForTrace(
      context.state.lens.runtime,
      localTrace.hits,
      options.channel ? CHANNEL_WAVELENGTH_NM_2[options.channel] : undefined,
    ),
  };
}

/**
 * Trace a meridional camera-space ray specified at the first reference vertex plane.
 */
export function tracePerspectiveMeridional(
  context: PerspectiveTraceContext,
  y0: number,
  u0: number,
  options: PerspectiveTraceOptions = {},
): PerspectiveTraceResult {
  const lead = context.state.lens.runtime.rayLead ?? 0;
  const firstZ = context.state.z[0] ?? 0;
  const direction = directionFromMeridionalSlope(u0) ?? invalidDirection();
  return tracePerspectiveRay(
    context,
    {
      origin: [0, y0 - u0 * lead, firstZ - lead],
      direction,
    },
    { ...options, directionNormalized: options.directionNormalized ?? true },
  );
}

/**
 * Trace a skew camera-space ray specified at the first reference vertex plane.
 */
export function tracePerspectiveSkew(
  context: PerspectiveTraceContext,
  x0: number,
  y0: number,
  ux0: number,
  uy0: number,
  options: PerspectiveTraceOptions = {},
): PerspectiveTraceResult {
  const lead = context.state.lens.runtime.rayLead ?? 0;
  const firstZ = context.state.z[0] ?? 0;
  const direction = directionFromSkewSlope(ux0, uy0) ?? invalidDirection();
  return tracePerspectiveRay(
    context,
    {
      origin: [x0 - ux0 * lead, y0 - uy0 * lead, firstZ - lead],
      direction,
    },
    { ...options, directionNormalized: options.directionNormalized ?? true },
  );
}

function engineTraceOptions(state: PreparedOpticalState, options: PerspectiveTraceOptions): TraceOptions {
  const { channel, projectToSensor: _projectToSensor, ...engineOptions } = options;
  if (!channel) return engineOptions;
  return {
    ...engineOptions,
    indexAtSurface: engineOptions.indexAtSurface ?? channelIndexResolverForState2(state, channel),
    wavelengthNm: engineOptions.wavelengthNm ?? CHANNEL_WAVELENGTH_NM_2[channel],
  };
}

function traceReturnPoint(trace: EngineTraceResult, state: PreparedOpticalState): Vec3 {
  if (trace.reachedImagePlane) return trace.terminalPoint;
  const returnZ = state.z[trace.returnVertexIndex] ?? state.z[state.z.length - 1] ?? 0;
  return [trace.x, trace.y, returnZ];
}

function cameraTraceResult(
  trace: EngineTraceResult,
  state: PreparedOpticalState,
  pose: PerspectivePose,
  cameraReturnPoint: Vec3,
): EngineTraceResult {
  if (!pose.active) return trace;

  const terminalDirection = pose.lensToCameraDirection(trace.terminalDirection);
  const slopes = directionSlopes(terminalDirection);
  return {
    ...trace,
    input: pose.lensToCameraRay(trace.input),
    hits: trace.hits.map((hit) => cameraTraceHit(hit, pose)),
    terminalPoint: pose.lensToCameraPoint(trace.terminalPoint),
    terminalDirection,
    heights: cameraTraceHeights(trace, state, pose),
    x: cameraReturnPoint[0],
    y: cameraReturnPoint[1],
    ux: slopes.ux,
    uy: slopes.uy,
  };
}

function cameraTraceHit(hit: TraceHit, pose: PerspectivePose): TraceHit {
  return {
    ...hit,
    point: pose.lensToCameraPoint(hit.point),
    normal: pose.lensToCameraDirection(hit.normal),
    incidentDirection: hit.incidentDirection ? pose.lensToCameraDirection(hit.incidentDirection) : undefined,
    outgoingDirection: hit.outgoingDirection ? pose.lensToCameraDirection(hit.outgoingDirection) : undefined,
  };
}

function cameraTraceHeights(
  trace: EngineTraceResult,
  state: PreparedOpticalState,
  pose: PerspectivePose,
): readonly number[] | null {
  if (!trace.heights) return null;
  return trace.heights.map((height, index) => {
    const surfaceIndex = trace.hits[index]?.surfaceIndex ?? index;
    const z = state.z[surfaceIndex] ?? state.z[index] ?? 0;
    return pose.lensToCameraPoint([0, height, z])[1];
  });
}

function projectTraceToSensor(
  context: PerspectiveTraceContext,
  cameraTrace: EngineTraceResult,
  options: PerspectiveTraceOptions,
): RayPlaneIntersection | null {
  const shouldProject = options.stopAt === undefined && (options.projectToSensor ?? true);
  if (!shouldProject || cameraTrace.status !== "ok") return null;

  const signedDistance = dot(
    context.sensorPlane.normal,
    subtract(cameraTrace.terminalPoint, context.sensorPlane.point),
  );
  if (Math.abs(signedDistance) <= 1e-9) return { point: cameraTrace.terminalPoint, t: 0 };

  return intersectRayPlane(
    { origin: cameraTrace.terminalPoint, direction: cameraTrace.terminalDirection },
    context.sensorPlane,
  );
}

function invalidDirection(): Vec3 {
  return [Number.NaN, Number.NaN, Number.NaN];
}

function perspectiveTraceContextCacheKey(
  state: PreparedOpticalState,
  pose: PerspectivePose,
  sensorBasis: SensorBasis,
): string {
  const number = formatCacheNumber;
  return [
    "perspective-trace-context-v1",
    `lens=${state.lens.key}`,
    `focus=${number(state.focusT)}`,
    `zoom=${number(state.zoomT)}`,
    `aberration=${number(state.aberrationT)}`,
    `prepared=${state.cacheKey}`,
    `camera-z=${state.z.map(number).join(",")}`,
    `state-image-point=${state.imagePlane.point.map(number).join(",")}`,
    `state-image-normal=${state.imagePlane.normal.map(number).join(",")}`,
    `sensor-u=${sensorBasis.u.map(number).join(",")}`,
    `sensor-v=${sensorBasis.v.map(number).join(",")}`,
    `sensor-n=${sensorBasis.normal.map(number).join(",")}`,
    pose.cacheKey,
  ].join("|");
}
