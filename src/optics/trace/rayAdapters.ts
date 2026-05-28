/**
 * Trace ray adapters — public v2 meridional, skew, vector, and chromatic trace wrappers.
 *
 * Converts RuntimeLens/state inputs to engine trace calls and returns legacy-compatible ray result shapes for callers.
 */

import type { ChromaticChannel, RayTraceResult, RuntimeLens } from "../../types/optics.js";
import { directionFromMeridionalSlope, directionFromSkewSlope } from "../math/vector.js";
import { normalizeRuntimeLens } from "../prescription/normalizeLensData.js";
import { prepareState } from "../state/prepareState.js";
import type { CompiledStateSurface, PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import { shouldUseGeneralizedTrace, traceGeneralized } from "./generalizedTrace.js";
import {
  engineTraceToRuntimeRayResult,
  engineTraceToRuntimeSkewResult,
  vectorLeadPoint,
  type RuntimeSkewRayTraceResult,
} from "./runtimeRayResult.js";
import { traceSequential } from "./sequentialTrace.js";
import type { EngineTraceResult, TraceOptions } from "./types.js";

/** Vector ray input for RuntimeLens adapters, with optional finite launch search bound. */
export interface VectorRayTraceInput2 {
  origin: Vec3;
  direction: Vec3;
  launchBoundT?: number;
}

const ENGINE_LENS_BY_RUNTIME = new WeakMap<RuntimeLens, ReturnType<typeof normalizeRuntimeLens>>();
interface PreparedStateCache {
  byKey: Map<string, PreparedOpticalState>;
  lastFocusT?: number;
  lastZoomT?: number;
  lastAberrationT?: number;
  lastState?: PreparedOpticalState;
}

interface TraceOptionsCache {
  byKey: Map<string, TraceOptions>;
  lastStopSD?: number;
  lastGhost?: boolean;
  lastChannel?: ChromaticChannel;
  lastDirectionNormalized?: boolean;
  lastOptions?: TraceOptions;
}

const DIRECTION_CACHE_LIMIT = 4096;
const PREPARED_STATE_BY_RUNTIME = new WeakMap<RuntimeLens, PreparedStateCache>();
const RUNTIME_Z_STATE_BY_BASE = new WeakMap<PreparedOpticalState, WeakMap<readonly number[], PreparedOpticalState>>();
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
export function traceEngineRay2(
  state: PreparedOpticalState,
  input: Ray3,
  options: TraceOptions = {},
): EngineTraceResult {
  if (shouldUseGeneralizedTrace(state, options.stopAt)) return traceGeneralized(state, input, options);
  return traceSequential(state, input, options);
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
export function traceRay2(
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
  return traceRayExactCore2(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, undefined, aberrationT);
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
export function traceRayChromatic2(
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
  return traceRayExactCore2(y0, u0, zPos, focusT, zoomT, stopSD, ghost, L, channel, aberrationT);
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
export function traceSkewRay2(
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
  return traceSkewRayExactCore2(x0, y0, ux0, uy0, focusT, zoomT, stopSD, ghost, L, undefined, aberrationT);
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
export function traceSkewRayChromatic2(
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
  return traceSkewRayExactCore2(x0, y0, ux0, uy0, focusT, zoomT, stopSD, ghost, L, channel, aberrationT);
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
export function traceRayVector2(
  input: VectorRayTraceInput2,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  focusT = 0,
  zoomT = 0,
  aberrationT = 0,
): RayTraceResult {
  return traceRayVectorExactCore2(input, zPos, stopSD, ghost, L, undefined, focusT, zoomT, aberrationT);
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
export function traceRayVectorChromatic2(
  input: VectorRayTraceInput2,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel,
  focusT = 0,
  zoomT = 0,
  aberrationT = 0,
): RayTraceResult {
  return traceRayVectorExactCore2(input, zPos, stopSD, ghost, L, channel, focusT, zoomT, aberrationT);
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
export function traceSkewRayVector2(
  input: VectorRayTraceInput2,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  focusT = 0,
  zoomT = 0,
  aberrationT = 0,
): RuntimeSkewRayTraceResult {
  return traceSkewRayVectorExactCore2(input, zPos, stopSD, ghost, L, undefined, focusT, zoomT, aberrationT);
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
export function traceSkewRayVectorChromatic2(
  input: VectorRayTraceInput2,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel,
  focusT = 0,
  zoomT = 0,
  aberrationT = 0,
): RuntimeSkewRayTraceResult {
  return traceSkewRayVectorExactCore2(input, zPos, stopSD, ghost, L, channel, focusT, zoomT, aberrationT);
}

function traceRayExactCore2(
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
  const state = stateWithRuntimeZ(stateForRuntimeLens(L, focusT, zoomT, aberrationT), zPos);
  const direction = meridionalDirectionForSlope(u0);
  const rayLead = L.rayLead ?? 0;
  const origin: Vec3 = [0, y0 - u0 * rayLead, (zPos[0] ?? state.z[0] ?? 0) - rayLead];
  const result = traceEngineRay2(state, { origin, direction }, traceOptions(stopSD, ghost, channel, state, true));
  return engineTraceToRuntimeRayResult(result, [origin[2], origin[1]], ghost);
}

function traceSkewRayExactCore2(
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
  const result = traceEngineRay2(state, { origin, direction }, traceOptions(stopSD, ghost, channel, state, true));
  return engineTraceToRuntimeSkewResult(result);
}

function traceRayVectorExactCore2(
  input: VectorRayTraceInput2,
  _zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel | undefined,
  focusT: number,
  zoomT: number,
  aberrationT: number,
): RayTraceResult {
  const state = stateWithRuntimeZ(stateForRuntimeLens(L, focusT, zoomT, aberrationT), _zPos);
  const options = traceOptions(stopSD, ghost, channel, state, false);
  const result = traceEngineRay2(
    state,
    { origin: input.origin, direction: input.direction },
    input.launchBoundT === undefined ? options : { ...options, launchBoundT: input.launchBoundT },
  );
  return engineTraceToRuntimeRayResult(result, vectorLeadPoint(input, result, L.rayLead ?? 0), ghost);
}

function traceSkewRayVectorExactCore2(
  input: VectorRayTraceInput2,
  _zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel | undefined,
  focusT: number,
  zoomT: number,
  aberrationT: number,
): RuntimeSkewRayTraceResult {
  const state = stateWithRuntimeZ(stateForRuntimeLens(L, focusT, zoomT, aberrationT), _zPos);
  const options = traceOptions(stopSD, ghost, channel, state, false);
  const result = traceEngineRay2(
    state,
    { origin: input.origin, direction: input.direction },
    input.launchBoundT === undefined ? options : { ...options, launchBoundT: input.launchBoundT },
  );
  return engineTraceToRuntimeSkewResult(result);
}

function traceOptions(
  stopSD: number | undefined,
  ghost: boolean,
  channel: ChromaticChannel | undefined,
  state: PreparedOpticalState,
  directionNormalized: boolean,
): TraceOptions {
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
    optionsCache.lastDirectionNormalized === directionNormalized
  ) {
    return optionsCache.lastOptions;
  }

  const key = `${stopSD ?? ""}|${ghost ? 1 : 0}|${channel ?? ""}|${directionNormalized ? 1 : 0}`;
  const cached = optionsCache.byKey.get(key);
  if (cached) {
    optionsCache.lastStopSD = stopSD;
    optionsCache.lastGhost = ghost;
    optionsCache.lastChannel = channel;
    optionsCache.lastDirectionNormalized = directionNormalized;
    optionsCache.lastOptions = cached;
    return cached;
  }

  const options: TraceOptions = {
    checkSemiDiameter: true,
    stopSemiDiameter: stopSD,
    ghost,
    stopOnClip: true,
    directionNormalized,
    indexAtSurface: channel ? (i, nd) => state.lens.dispersion[i]?.indexAt(channel) ?? nd : undefined,
  };
  optionsCache.byKey.set(key, options);
  optionsCache.lastStopSD = stopSD;
  optionsCache.lastGhost = ghost;
  optionsCache.lastChannel = channel;
  optionsCache.lastDirectionNormalized = directionNormalized;
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
  let engineLens = ENGINE_LENS_BY_RUNTIME.get(L);
  if (!engineLens) {
    engineLens = normalizeRuntimeLens(L);
    ENGINE_LENS_BY_RUNTIME.set(L, engineLens);
  }
  let stateCache = PREPARED_STATE_BY_RUNTIME.get(L);
  if (!stateCache) {
    stateCache = { byKey: new Map() };
    PREPARED_STATE_BY_RUNTIME.set(L, stateCache);
  }
  if (
    stateCache.lastState &&
    Object.is(stateCache.lastFocusT, focusT) &&
    Object.is(stateCache.lastZoomT, zoomT) &&
    Object.is(stateCache.lastAberrationT, aberrationT)
  ) {
    return stateCache.lastState;
  }

  const key = `${focusT}|${zoomT}|${aberrationT}`;
  const cached = stateCache.byKey.get(key);
  if (cached) {
    stateCache.lastFocusT = focusT;
    stateCache.lastZoomT = zoomT;
    stateCache.lastAberrationT = aberrationT;
    stateCache.lastState = cached;
    return cached;
  }

  const state = prepareState(engineLens, focusT, zoomT, aberrationT);
  stateCache.byKey.set(key, state);
  stateCache.lastFocusT = focusT;
  stateCache.lastZoomT = zoomT;
  stateCache.lastAberrationT = aberrationT;
  stateCache.lastState = state;
  return state;
}

function stateWithRuntimeZ(state: PreparedOpticalState, zPos: readonly number[]): PreparedOpticalState {
  let byZ = RUNTIME_Z_STATE_BY_BASE.get(state);
  if (!byZ) {
    byZ = new WeakMap();
    RUNTIME_Z_STATE_BY_BASE.set(state, byZ);
  }
  const cached = byZ.get(zPos);
  if (cached) return cached;
  if (zPos.length === 0 || zPos.every((z, index) => z === state.z[index])) {
    byZ.set(zPos, state);
    return state;
  }

  const surfaces = state.surfaces.map((surface, index) => {
    const z = zPos[index] ?? surface.z;
    const d = index < state.surfaces.length - 1 && zPos[index + 1] !== undefined ? zPos[index + 1] - z : surface.d;
    return Object.freeze({ ...surface, z, d }) as CompiledStateSurface;
  });
  const shiftedState = Object.freeze({
    ...state,
    surfaces: Object.freeze(surfaces),
    z: Object.freeze([...zPos]),
    imgZ: state.lens.flags.isFoldedOptics ? state.imgZ : state.imgZ,
  });
  byZ.set(zPos, shiftedState);
  return shiftedState;
}
