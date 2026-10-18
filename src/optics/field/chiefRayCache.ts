/** Chief-ray memoization — bounded solves owned by immutable prepared geometry. */

import type { ChromaticChannel } from "../../types/optics.js";
import type { PreparedGeometry } from "../types.js";
import type { ChiefRaySolveResult2 } from "./chiefRaySolve.js";
import type { LaunchSurface2 } from "./projection.js";

const CHIEF_RAY_CACHE_LIMIT = 512;
const CACHE = new WeakMap<PreparedGeometry, Map<string, ChiefRaySolveResult2>>();

/**
 * Distinguish signed fields, launch domains and spectral requests within one geometry.
 * @param fieldAngleDeg - signed field angle in degrees
 * @param launchSurface - selected object-plane or bounding-sphere arm
 * @param channel - spectral channel, omitted for the prescription reference indices
 * @returns exact request key; no field quantization
 */
export function chiefRayCacheKey(
  fieldAngleDeg: number,
  launchSurface: LaunchSurface2,
  channel?: ChromaticChannel,
): string {
  return `${fieldAngleDeg}|${launchSurface}|${channel ?? "reference"}`;
}

/**
 * Look up and refresh a solve in the per-geometry LRU.
 * @param state - prepared geometry owning the solve
 * @param key - exact field, launch surface and channel key
 * @returns cached solve, if retained
 */
export function getCachedChiefRaySolve(state: PreparedGeometry, key: string): ChiefRaySolveResult2 | undefined {
  const cache = CACHE.get(state);
  const result = cache?.get(key);
  if (result) {
    cache!.delete(key);
    cache!.set(key, result);
  }
  return result;
}

/**
 * Retain a solve while bounding a live geometry's field history.
 * @param state - prepared geometry owning the solve
 * @param key - exact request key
 * @param value - solved chief-ray result
 */
export function setCachedChiefRaySolve(state: PreparedGeometry, key: string, value: ChiefRaySolveResult2): void {
  let cache = CACHE.get(state);
  if (!cache) {
    cache = new Map();
    CACHE.set(state, cache);
  }
  cache.delete(key);
  cache.set(key, value);
  if (cache.size > CHIEF_RAY_CACHE_LIMIT) cache.delete(cache.keys().next().value!);
}
