/** One bounded prepared-state cache shared by runtime adapters and analysis. */
import type { RuntimeLens } from "../../types/optics.js";
import type { PreparedOpticalState } from "../types.js";
import { normalizeRuntimeLens } from "../prescription/normalizeLensData.js";
import { createPreparedStateCache, type PreparedStateCache } from "./cache.js";
import { prepareState } from "./prepareState.js";
interface RuntimeStateCache {
  cache: PreparedStateCache;
  last?: { focusT: number; zoomT: number; aberrationT: number; state: PreparedOpticalState };
}
const caches = new WeakMap<RuntimeLens, RuntimeStateCache>();

/** RuntimeLens is immutable; replaced prescriptions must use a new object identity. */
export function prepareRuntimeState(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  aberrationT = 0,
): PreparedOpticalState {
  let entry = caches.get(L);
  if (!entry) {
    entry = { cache: createPreparedStateCache(96) };
    caches.set(L, entry);
  }
  const last = entry.last;
  if (
    last &&
    Object.is(last.focusT, focusT) &&
    Object.is(last.zoomT, zoomT) &&
    Object.is(last.aberrationT, aberrationT)
  )
    return last.state;
  const state = prepareState(normalizeRuntimeLens(L), focusT, zoomT, aberrationT, { cache: entry.cache });
  entry.last = { focusT, zoomT, aberrationT, state };
  return state;
}
