/**
 * Trace ray adapters — public v2 meridional, skew, vector, and chromatic trace wrappers.
 *
 * Converts RuntimeLens/state inputs to engine trace calls and returns legacy-compatible ray result shapes for callers.
 */

import type { ChromaticChannel, RayTraceResult, RuntimeLens } from "../../types/optics.js";
import { directionFromMeridionalSlope, directionFromSkewSlope } from "../math/vector.js";
import { compiledLensFromRuntime } from "../prescription/identity.js";
import { prepareState, stateWithZ } from "../state/preparedGeometry.js";
import type { PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import { transmissionTraceCapture } from "./bulkAbsorption.js";
import { engineTraceToRuntimeRayResult, engineTraceToRuntimeSkewResult, vectorLeadPoint } from "./runtimeRayResult.js";
import type { RuntimeSkewRayTraceResult } from "./runtimeRayResult.js";
import type { EngineTraceResult, TraceCapture, TraceOptions } from "./types.js";
import { CHROMATIC_CHANNEL_WAVELENGTH_NM } from "../chromatic/channels.js";

/** Vector ray input for RuntimeLens adapters, with optional finite launch search bound. */
export interface VectorRayTraceInput {
  origin: Vec3;
  direction: Vec3;
  launchBoundT?: number;
}

interface TraceOptionsCache {
  byKey: Map<string, TraceOptions<TraceCapture>>;
  lastStopSD?: number;
  lastGhost?: boolean;
  lastChannel?: ChromaticChannel;
  lastDirectionNormalized?: boolean;
  lastCapture?: TraceCapture;
  lastOptions?: TraceOptions<TraceCapture>;
}

const DIRECTION_CACHE_LIMIT = 4096;
// Bound aperture history while retaining the shared options used by per-call adapters and bound fans.
const TRACE_OPTIONS_CACHE_LIMIT = 256;
const TRACE_OPTIONS_BY_STATE = new WeakMap<PreparedOpticalState, TraceOptionsCache>();
const MERIDIONAL_DIRECTION_BY_SLOPE = new Map<number, Vec3>([[0, [0, 0, 1]]]);
const SKEW_DIRECTION_BY_UX = new Map<number, Map<number, Vec3>>();
let skewDirectionCacheSize = 0;

/**
 * Trace an engine-native ray through either sequential or generalized exact tracing.
 *
 * @param state - prepared optical state
 * @param input - ray origin and normalized direction in optical coordinates
 * @param options - trace termination, aperture, and chromatic controls
 * @returns engine trace result with hits and diagnostics
 */
export function traceEngineRay<C extends TraceCapture = "diagnostics">(
  state: PreparedOpticalState,
  input: Ray3,
  options: TraceOptions<C> = {},
): EngineTraceResult<C> {
  const geometry = state.traceGeometry;
  const traverse = options.stopAt === undefined ? geometry.traversal.full : geometry.traversal.partial;
  return traverse(geometry, input, options);
}

/** Select full/partial traversal once for an engine-native fan with shared options. */
export function prepareEngineTrace<C extends TraceCapture = "diagnostics">(
  state: PreparedOpticalState,
  options: TraceOptions<C> = {},
): (input: Ray3) => EngineTraceResult<C> {
  const geometry = state.traceGeometry;
  const traverse = options.stopAt === undefined ? geometry.traversal.full : geometry.traversal.partial;
  return (input) => traverse(geometry, input, options);
}

/**
 * Trace a meridional RuntimeLens ray using exact surface intersections.
 *
 * @param y0 - launch height in mm at the first surface plane
 * @param u0 - meridional slope dy/dz
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained as ghost points
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns public meridional ray trace result
 */
export function traceRay(
  y0: number,
  u0: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  aberrationT = 0,
): RayTraceResult {
  return traceRayExactCore(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, undefined, aberrationT);
}

/**
 * Trace a chromatic meridional RuntimeLens ray.
 *
 * @param y0 - launch height in mm at the first surface plane
 * @param u0 - meridional slope dy/dz
 * @param zPos - current surface vertex positions in mm
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained as ghost points
 * @param L - runtime lens object
 * @param channel - chromatic channel selecting per-surface refractive indices
 * @param aberrationT - normalized aberration spacing slider
 * @returns public meridional ray trace result for the selected wavelength
 */
export function traceRayChromatic(
  y0: number,
  u0: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel,
  aberrationT = 0,
): RayTraceResult {
  return traceRayExactCore(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, channel, aberrationT);
}

/**
 * Trace a skew RuntimeLens ray using exact surface intersections.
 *
 * @param x0 - sagittal launch coordinate in mm
 * @param y0 - meridional launch coordinate in mm
 * @param ux0 - sagittal slope dx/dz
 * @param uy0 - meridional slope dy/dz
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained
 * @param L - runtime lens object
 * @param aberrationT - normalized aberration spacing slider
 * @returns public skew ray trace result
 */
export function traceSkewRay(
  x0: number,
  y0: number,
  ux0: number,
  uy0: number,
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  aberrationT = 0,
): RuntimeSkewRayTraceResult {
  return traceSkewRayExactCore(x0, y0, ux0, uy0, focusT, zoomT, stopSD, ghost, L, undefined, aberrationT);
}

/**
 * Trace a chromatic skew RuntimeLens ray.
 *
 * @param x0 - sagittal launch coordinate in mm
 * @param y0 - meridional launch coordinate in mm
 * @param ux0 - sagittal slope dx/dz
 * @param uy0 - meridional slope dy/dz
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained
 * @param L - runtime lens object
 * @param channel - chromatic channel selecting per-surface refractive indices
 * @param aberrationT - normalized aberration spacing slider
 * @returns public skew ray trace result for the selected wavelength
 */
export function traceSkewRayChromatic(
  x0: number,
  y0: number,
  ux0: number,
  uy0: number,
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel,
  aberrationT = 0,
): RuntimeSkewRayTraceResult {
  return traceSkewRayExactCore(x0, y0, ux0, uy0, focusT, zoomT, stopSD, ghost, L, channel, aberrationT);
}

/**
 * Trace a vector-launched meridional RuntimeLens ray.
 *
 * Vector launch is used for fisheye and grazing fields where a scalar slope is
 * outside the safe tangent domain.
 *
 * @param input - vector origin/direction and optional launch bound
 * @param zPos - current surface vertex positions in mm
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained as ghost points
 * @param L - runtime lens object
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param aberrationT - normalized aberration spacing slider
 * @returns public meridional ray trace result
 */
export function traceRayVector(
  input: VectorRayTraceInput,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  focusT = 0,
  zoomT = 0,
  aberrationT = 0,
): RayTraceResult {
  return traceRayVectorExactCore(input, zPos, stopSD, ghost, L, undefined, focusT, zoomT, aberrationT);
}

/**
 * Trace a chromatic vector-launched meridional RuntimeLens ray.
 *
 * @param input - vector origin/direction and optional launch bound
 * @param zPos - current surface vertex positions in mm
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained as ghost points
 * @param L - runtime lens object
 * @param channel - chromatic channel selecting per-surface refractive indices
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param aberrationT - normalized aberration spacing slider
 * @returns public meridional ray trace result for the selected wavelength
 */
export function traceRayVectorChromatic(
  input: VectorRayTraceInput,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel,
  focusT = 0,
  zoomT = 0,
  aberrationT = 0,
): RayTraceResult {
  return traceRayVectorExactCore(input, zPos, stopSD, ghost, L, channel, focusT, zoomT, aberrationT);
}

/**
 * Trace a vector-launched skew RuntimeLens ray.
 *
 * @param input - vector origin/direction and optional launch bound
 * @param zPos - current surface vertex positions in mm
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained
 * @param L - runtime lens object
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param aberrationT - normalized aberration spacing slider
 * @returns public skew ray trace result
 */
export function traceSkewRayVector(
  input: VectorRayTraceInput,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  focusT = 0,
  zoomT = 0,
  aberrationT = 0,
): RuntimeSkewRayTraceResult {
  return traceSkewRayVectorExactCore(input, zPos, stopSD, ghost, L, undefined, focusT, zoomT, aberrationT);
}

/**
 * Trace a chromatic vector-launched skew RuntimeLens ray.
 *
 * @param input - vector origin/direction and optional launch bound
 * @param zPos - current surface vertex positions in mm
 * @param stopSD - current physical stop semi-diameter in mm
 * @param ghost - whether clipped hits should be retained
 * @param L - runtime lens object
 * @param channel - chromatic channel selecting per-surface refractive indices
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param aberrationT - normalized aberration spacing slider
 * @returns public skew ray trace result for the selected wavelength
 */
export function traceSkewRayVectorChromatic(
  input: VectorRayTraceInput,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel,
  focusT = 0,
  zoomT = 0,
  aberrationT = 0,
): RuntimeSkewRayTraceResult {
  return traceSkewRayVectorExactCore(input, zPos, stopSD, ghost, L, channel, focusT, zoomT, aberrationT);
}

/** Controls shared by a ray fan. Vector launch bounds belong to the request, not individual rays. */
export interface RayTraceRequest {
  focusT?: number;
  zoomT?: number;
  aberrationT?: number;
  zPos?: readonly number[];
  stopSD?: number;
  ghost: boolean;
  channel?: ChromaticChannel;
  launchBoundT?: number;
}

/** Request-bound adapters; these methods do no state or options cache lookup. */
export interface PreparedRayTrace {
  ray(y0: number, u0: number): RayTraceResult;
  skew(x0: number, y0: number, ux0: number, uy0: number): RuntimeSkewRayTraceResult;
  vector(input: Ray3): RayTraceResult;
  skewVector(input: Ray3): RuntimeSkewRayTraceResult;
}

/** Resolve runtime controls and supplied vertices once before tracing a fan. */
export function prepareRayTrace(L: RuntimeLens, request: RayTraceRequest): PreparedRayTrace {
  const base = stateForRuntimeLens(L, request.focusT ?? 0, request.zoomT ?? 0, request.aberrationT ?? 0);
  const state = request.zPos ? stateWithZ(base, request.zPos) : base;
  return bindRayTrace(state, base, request);
}

/** Bind an already prepared state without resolving runtime controls. */
export function prepareRayTraceForState(
  state: PreparedOpticalState,
  request: Omit<RayTraceRequest, "focusT" | "zoomT" | "aberrationT" | "zPos">,
): PreparedRayTrace {
  return bindRayTrace(state, state, request);
}

function bindRayTrace(
  state: PreparedOpticalState,
  scalarSkewState: PreparedOpticalState,
  request: RayTraceRequest,
): PreparedRayTrace {
  const { stopSD, ghost, channel, launchBoundT } = request;
  const lead = state.lens.constants.rayLead ?? 0;
  const firstZ = request.zPos?.[0] ?? state.z[0] ?? 0;
  const skewFirstZ = scalarSkewState.z[0] ?? 0;
  const geometry = state.traceGeometry;
  const skewGeometry = scalarSkewState.traceGeometry;
  // All adapter rays are full traces; the public engine facade still supports stopAt.
  const traverse = geometry.traversal.full;
  const skewTraverse = skewGeometry.traversal.full;
  const rayOptions = traceOptions(stopSD, ghost, channel, state, true);
  const skewOptions = traceOptions(
    stopSD,
    ghost,
    channel,
    scalarSkewState,
    true,
    transmissionTraceCapture(scalarSkewState.lens),
  );
  const vectorOptions = boundedVectorOptions(traceOptions(stopSD, ghost, channel, state, false), launchBoundT);
  const skewVectorOptions = boundedVectorOptions(
    traceOptions(stopSD, ghost, channel, state, false, transmissionTraceCapture(state.lens)),
    launchBoundT,
  );
  return {
    ray(y0, u0) {
      const direction = meridionalDirectionForSlope(u0);
      const origin: Vec3 = [0, y0 - u0 * lead, firstZ - lead];
      const result = traverse(geometry, { origin, direction }, rayOptions);
      return engineTraceToRuntimeRayResult(result, [origin[2], origin[1]], ghost, state.lens);
    },
    skew(x0, y0, ux0, uy0) {
      const direction = skewDirectionForSlopes(ux0, uy0);
      const origin: Vec3 = [x0 - ux0 * lead, y0 - uy0 * lead, skewFirstZ - lead];
      const result = skewTraverse(skewGeometry, { origin, direction }, skewOptions);
      return engineTraceToRuntimeSkewResult(result, scalarSkewState.lens);
    },
    vector(input) {
      const result = traverse(geometry, { origin: input.origin, direction: input.direction }, vectorOptions);
      return engineTraceToRuntimeRayResult(result, vectorLeadPoint(input, result, lead), ghost, state.lens);
    },
    skewVector(input) {
      const result = traverse(geometry, { origin: input.origin, direction: input.direction }, skewVectorOptions);
      return engineTraceToRuntimeSkewResult(result, state.lens);
    },
  };
}

function boundedVectorOptions<C extends TraceCapture>(
  options: TraceOptions<C>,
  launchBoundT: number | undefined,
): TraceOptions<C> {
  return launchBoundT === undefined ? options : { ...options, launchBoundT };
}

function traceRayExactCore(
  y0: number,
  u0: number,
  zPos: number[],
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel | undefined,
  aberrationT: number,
): RayTraceResult {
  const state = stateWithZ(stateForRuntimeLens(L, focusT, zoomT, aberrationT), zPos);
  const direction = meridionalDirectionForSlope(u0);
  const rayLead = L.rayLead ?? 0;
  const origin: Vec3 = [0, y0 - u0 * rayLead, (zPos[0] ?? state.z[0] ?? 0) - rayLead];
  const result = traceEngineRay(state, { origin, direction }, traceOptions(stopSD, ghost, channel, state, true));
  return engineTraceToRuntimeRayResult(result, [origin[2], origin[1]], ghost, state.lens);
}

function traceSkewRayExactCore(
  x0: number,
  y0: number,
  ux0: number,
  uy0: number,
  focusT: number,
  zoomT: number,
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel | undefined,
  aberrationT: number,
): RuntimeSkewRayTraceResult {
  const state = stateForRuntimeLens(L, focusT, zoomT, aberrationT);
  const direction = skewDirectionForSlopes(ux0, uy0);
  const lead = L.rayLead ?? 0;
  const origin: Vec3 = [x0 - ux0 * lead, y0 - uy0 * lead, (state.z[0] ?? 0) - lead];
  const result = traceEngineRay(
    state,
    { origin, direction },
    traceOptions(stopSD, ghost, channel, state, true, transmissionTraceCapture(state.lens)),
  );
  return engineTraceToRuntimeSkewResult(result, state.lens);
}

function traceRayVectorExactCore(
  input: VectorRayTraceInput,
  _zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel | undefined,
  focusT: number,
  zoomT: number,
  aberrationT: number,
): RayTraceResult {
  const state = stateWithZ(stateForRuntimeLens(L, focusT, zoomT, aberrationT), _zPos);
  const options = traceOptions(stopSD, ghost, channel, state, false);
  const result = traceEngineRay(
    state,
    { origin: input.origin, direction: input.direction },
    boundedVectorOptions(options, input.launchBoundT),
  );
  return engineTraceToRuntimeRayResult(result, vectorLeadPoint(input, result, L.rayLead ?? 0), ghost, state.lens);
}

function traceSkewRayVectorExactCore(
  input: VectorRayTraceInput,
  _zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel | undefined,
  focusT: number,
  zoomT: number,
  aberrationT: number,
): RuntimeSkewRayTraceResult {
  const state = stateWithZ(stateForRuntimeLens(L, focusT, zoomT, aberrationT), _zPos);
  const options = traceOptions(stopSD, ghost, channel, state, false, transmissionTraceCapture(state.lens));
  const result = traceEngineRay(
    state,
    { origin: input.origin, direction: input.direction },
    boundedVectorOptions(options, input.launchBoundT),
  );
  return engineTraceToRuntimeSkewResult(result, state.lens);
}

function traceOptions<C extends TraceCapture = "diagnostics">(
  stopSD: number | undefined,
  ghost: boolean,
  channel: ChromaticChannel | undefined,
  state: PreparedOpticalState,
  directionNormalized: boolean,
  capture: C = "diagnostics" as C,
): TraceOptions<C> {
  let optionsCache = TRACE_OPTIONS_BY_STATE.get(state);
  if (!optionsCache) {
    optionsCache = { byKey: new Map() };
    TRACE_OPTIONS_BY_STATE.set(state, optionsCache);
  }
  if (
    optionsCache.lastOptions &&
    Object.is(optionsCache.lastStopSD, stopSD) &&
    optionsCache.lastGhost === ghost &&
    optionsCache.lastChannel === channel &&
    optionsCache.lastDirectionNormalized === directionNormalized &&
    optionsCache.lastCapture === capture
  ) {
    return optionsCache.lastOptions as TraceOptions<C>;
  }

  const key = `${stopSD ?? ""}|${ghost ? 1 : 0}|${channel ?? ""}|${directionNormalized ? 1 : 0}|${capture}`;
  const cached = optionsCache.byKey.get(key);
  if (cached) {
    optionsCache.lastStopSD = stopSD;
    optionsCache.lastGhost = ghost;
    optionsCache.lastChannel = channel;
    optionsCache.lastDirectionNormalized = directionNormalized;
    optionsCache.lastOptions = cached;
    optionsCache.lastCapture = capture;
    return cached as TraceOptions<C>;
  }

  const options: TraceOptions<C> = {
    capture,
    checkSemiDiameter: true,
    stopSemiDiameter: stopSD,
    ghost,
    stopOnClip: true,
    directionNormalized,
    indexAtSurface: channel ? (i, nd) => state.lens.dispersion[i]?.indexAt(channel) ?? nd : undefined,
    wavelengthNm: channel ? CHROMATIC_CHANNEL_WAVELENGTH_NM[channel] : undefined,
  };
  if (optionsCache.byKey.size >= TRACE_OPTIONS_CACHE_LIMIT) {
    const oldest = optionsCache.byKey.keys().next().value;
    if (oldest !== undefined) optionsCache.byKey.delete(oldest);
  }
  optionsCache.byKey.set(key, options);
  optionsCache.lastStopSD = stopSD;
  optionsCache.lastGhost = ghost;
  optionsCache.lastChannel = channel;
  optionsCache.lastDirectionNormalized = directionNormalized;
  optionsCache.lastCapture = capture;
  optionsCache.lastOptions = options;
  return options;
}

function meridionalDirectionForSlope(u: number): Vec3 {
  const cached = MERIDIONAL_DIRECTION_BY_SLOPE.get(u);
  if (cached) return cached;
  const direction = directionFromMeridionalSlope(u) ?? ([0, 0, 1] as Vec3);
  if (MERIDIONAL_DIRECTION_BY_SLOPE.size >= DIRECTION_CACHE_LIMIT) {
    MERIDIONAL_DIRECTION_BY_SLOPE.clear();
    MERIDIONAL_DIRECTION_BY_SLOPE.set(0, [0, 0, 1]);
  }
  MERIDIONAL_DIRECTION_BY_SLOPE.set(u, direction);
  return direction;
}

function skewDirectionForSlopes(ux: number, uy: number): Vec3 {
  let byUy = SKEW_DIRECTION_BY_UX.get(ux);
  const cached = byUy?.get(uy);
  if (cached) return cached;

  if (!byUy) {
    byUy = new Map();
    SKEW_DIRECTION_BY_UX.set(ux, byUy);
  }
  const direction = directionFromSkewSlope(ux, uy) ?? ([0, 0, 1] as Vec3);
  if (skewDirectionCacheSize >= DIRECTION_CACHE_LIMIT) {
    SKEW_DIRECTION_BY_UX.clear();
    skewDirectionCacheSize = 0;
    byUy = new Map();
    SKEW_DIRECTION_BY_UX.set(ux, byUy);
  }
  byUy.set(uy, direction);
  skewDirectionCacheSize += 1;
  return direction;
}

function stateForRuntimeLens(L: RuntimeLens, focusT: number, zoomT: number, aberrationT: number): PreparedOpticalState {
  return prepareState(compiledLensFromRuntime(L), focusT, zoomT, aberrationT);
}

/** Image-plane intercept for a skew ray in sagittal/meridional millimeters. */
export interface SkewImagePlaneIntercept {
  x: number;
  y: number;
}

/**
 * Project a skew ray from the last surface to the image plane.
 *
 * @param x - sagittal coordinate at the last surface in mm
 * @param y - meridional coordinate at the last surface in mm
 * @param ux - sagittal slope dx/dz
 * @param uy - meridional slope dy/dz
 * @param lastSurfZ - last surface vertex z coordinate in mm
 * @param imagePlaneZ - image-plane z coordinate in mm
 * @returns image-plane intercept, or null for non-finite projection
 */
export function skewImagePlaneIntercept(
  x: number,
  y: number,
  ux: number,
  uy: number,
  lastSurfZ: number,
  imagePlaneZ: number,
): SkewImagePlaneIntercept | null {
  const dz = imagePlaneZ - lastSurfZ;
  const imagePoint = {
    x: x + ux * dz,
    y: y + uy * dz,
  };
  return isFinite(imagePoint.x) && isFinite(imagePoint.y) ? imagePoint : null;
}
