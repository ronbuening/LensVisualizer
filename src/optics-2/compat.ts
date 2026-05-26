import buildLens from "../optics/buildLens.js";
import type { LensData, RuntimeLens } from "../types/optics.js";
import type { EngineLens, PreparedOpticalState } from "./types.js";
import { normalizeRuntimeLens, withLensDefaults } from "./prescription/normalizeLensData.js";
import { prepareState } from "./state/prepareState.js";

const ENGINE_LENS_BY_RUNTIME = new WeakMap<RuntimeLens, EngineLens>();

export function buildLens2(data: LensData): RuntimeLens {
  const runtime = buildLens(withLensDefaults(data));
  ENGINE_LENS_BY_RUNTIME.set(runtime, normalizeRuntimeLens(runtime));
  return runtime;
}

export function engineLensFromRuntime(L: RuntimeLens): EngineLens {
  const cached = ENGINE_LENS_BY_RUNTIME.get(L);
  if (cached) return cached;
  const engineLens = normalizeRuntimeLens(L);
  ENGINE_LENS_BY_RUNTIME.set(L, engineLens);
  return engineLens;
}

export function prepareLegacyState(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  aberrationT = 0,
): PreparedOpticalState {
  return prepareState(engineLensFromRuntime(L), focusT, zoomT, aberrationT);
}
