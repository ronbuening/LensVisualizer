import type { ChromaticChannel, RayTraceResult, RuntimeLens } from "../../types/optics.js";
import { directionFromMeridionalSlope, directionFromSkewSlope } from "../math/vector.js";
import { normalizeRuntimeLens } from "../prescription/normalizeLensData.js";
import { prepareState } from "../state/prepareState.js";
import type { CompiledStateSurface, PreparedOpticalState, Ray3, Vec3 } from "../types.js";
import { shouldUseGeneralizedTrace, traceGeneralized } from "./generalizedTrace.js";
import {
  engineTraceToLegacyRayResult,
  engineTraceToLegacySkewResult,
  vectorLeadPoint,
  type LegacySkewRayTraceResult,
} from "./legacyRayResult.js";
import { traceSequential } from "./sequentialTrace.js";
import type { EngineTraceResult, TraceOptions } from "./types.js";

export interface VectorRayTraceInput2 {
  origin: Vec3;
  direction: Vec3;
  launchBoundT?: number;
}

const ENGINE_LENS_BY_RUNTIME = new WeakMap<RuntimeLens, ReturnType<typeof normalizeRuntimeLens>>();

export function traceEngineRay2(
  state: PreparedOpticalState,
  input: Ray3,
  options: TraceOptions = {},
): EngineTraceResult {
  if (shouldUseGeneralizedTrace(state, options.stopAt)) return traceGeneralized(state, input, options);
  return traceSequential(state, input, options);
}

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
): LegacySkewRayTraceResult {
  return traceSkewRayExactCore2(x0, y0, ux0, uy0, focusT, zoomT, stopSD, ghost, L, undefined, aberrationT);
}

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
): LegacySkewRayTraceResult {
  return traceSkewRayExactCore2(x0, y0, ux0, uy0, focusT, zoomT, stopSD, ghost, L, channel, aberrationT);
}

export function traceRayVector2(
  input: VectorRayTraceInput2,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
): RayTraceResult {
  return traceRayVectorExactCore2(input, zPos, stopSD, ghost, L, undefined);
}

export function traceRayVectorChromatic2(
  input: VectorRayTraceInput2,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel,
): RayTraceResult {
  return traceRayVectorExactCore2(input, zPos, stopSD, ghost, L, channel);
}

export function traceSkewRayVector2(
  input: VectorRayTraceInput2,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
): LegacySkewRayTraceResult {
  return traceSkewRayVectorExactCore2(input, zPos, stopSD, ghost, L, undefined);
}

export function traceSkewRayVectorChromatic2(
  input: VectorRayTraceInput2,
  zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel,
): LegacySkewRayTraceResult {
  return traceSkewRayVectorExactCore2(input, zPos, stopSD, ghost, L, channel);
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
  const state = stateWithLegacyZ(stateForLegacyLens(L, focusT, zoomT, aberrationT), zPos);
  const direction = directionFromMeridionalSlope(u0) ?? ([0, 0, 1] as Vec3);
  const rayLead = L.rayLead ?? 0;
  const origin: Vec3 = [0, y0 - u0 * rayLead, (zPos[0] ?? state.z[0] ?? 0) - rayLead];
  const result = traceEngineRay2(state, { origin, direction }, traceOptions(stopSD, ghost, channel, state));
  return engineTraceToLegacyRayResult(result, [origin[2], origin[1]], ghost);
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
): LegacySkewRayTraceResult {
  const state = stateForLegacyLens(L, focusT, zoomT, aberrationT);
  const direction = directionFromSkewSlope(ux0, uy0) ?? ([0, 0, 1] as Vec3);
  const lead = L.rayLead ?? 0;
  const origin: Vec3 = [x0 - ux0 * lead, y0 - uy0 * lead, (state.z[0] ?? 0) - lead];
  const result = traceEngineRay2(state, { origin, direction }, traceOptions(stopSD, ghost, channel, state));
  return engineTraceToLegacySkewResult(result);
}

function traceRayVectorExactCore2(
  input: VectorRayTraceInput2,
  _zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel | undefined,
): RayTraceResult {
  const state = stateWithLegacyZ(stateForLegacyLens(L, 0, 0, 0), _zPos);
  const result = traceEngineRay2(
    state,
    { origin: input.origin, direction: input.direction },
    { ...traceOptions(stopSD, ghost, channel, state), launchBoundT: input.launchBoundT },
  );
  return engineTraceToLegacyRayResult(result, vectorLeadPoint(input, result, L.rayLead ?? 0), ghost);
}

function traceSkewRayVectorExactCore2(
  input: VectorRayTraceInput2,
  _zPos: number[],
  stopSD: number | undefined,
  ghost: boolean,
  L: RuntimeLens,
  channel: ChromaticChannel | undefined,
): LegacySkewRayTraceResult {
  const state = stateWithLegacyZ(stateForLegacyLens(L, 0, 0, 0), _zPos);
  const result = traceEngineRay2(
    state,
    { origin: input.origin, direction: input.direction },
    { ...traceOptions(stopSD, ghost, channel, state), launchBoundT: input.launchBoundT },
  );
  return engineTraceToLegacySkewResult(result);
}

function traceOptions(
  stopSD: number | undefined,
  ghost: boolean,
  channel: ChromaticChannel | undefined,
  state: PreparedOpticalState,
): TraceOptions {
  return {
    checkSemiDiameter: true,
    stopSemiDiameter: stopSD,
    ghost,
    stopOnClip: true,
    indexAtSurface: channel ? (i, nd) => state.lens.dispersion[i]?.indexAt(channel) ?? nd : undefined,
  };
}

function stateForLegacyLens(L: RuntimeLens, focusT: number, zoomT: number, aberrationT: number): PreparedOpticalState {
  let engineLens = ENGINE_LENS_BY_RUNTIME.get(L);
  if (!engineLens) {
    engineLens = normalizeRuntimeLens(L);
    ENGINE_LENS_BY_RUNTIME.set(L, engineLens);
  }
  return prepareState(engineLens, focusT, zoomT, aberrationT);
}

function stateWithLegacyZ(state: PreparedOpticalState, zPos: readonly number[]): PreparedOpticalState {
  if (zPos.length === 0 || zPos.every((z, index) => z === state.z[index])) return state;
  const surfaces = state.surfaces.map((surface, index) => {
    const z = zPos[index] ?? surface.z;
    const d = index < state.surfaces.length - 1 && zPos[index + 1] !== undefined ? zPos[index + 1] - z : surface.d;
    return Object.freeze({ ...surface, z, d }) as CompiledStateSurface;
  });
  return Object.freeze({
    ...state,
    surfaces: Object.freeze(surfaces),
    z: Object.freeze([...zPos]),
    imgZ: state.lens.flags.isFoldedOptics ? state.imgZ : state.imgZ,
  });
}
