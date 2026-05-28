/**
 * Prepared-state cache container — WeakMap-backed storage for compiled optical states.
 *
 * Keeps per-runtime-lens state memoization explicit and local to callers instead of hiding mutable
 * optical state in module globals.
 */

import type { PreparedOpticalState } from "../types.js";

/**
 * Minimal cache contract for prepared optical states.
 *
 * Keys must include every state-dependent optical input that can affect results.
 * The default implementation is a simple Map, but callers can own cache lifetime.
 */
export interface PreparedStateCache {
  get(cacheKey: string): PreparedOpticalState | undefined;
  set(cacheKey: string, state: PreparedOpticalState): void;
  clear(): void;
}

/**
 * Create an isolated prepared-state cache.
 *
 * @returns cache object for memoizing PreparedOpticalState instances by key
 */
export function createPreparedStateCache(): PreparedStateCache {
  const cache = new Map<string, PreparedOpticalState>();
  return {
    get: (cacheKey) => cache.get(cacheKey),
    set: (cacheKey, state) => {
      cache.set(cacheKey, state);
    },
    clear: () => {
      cache.clear();
    },
  };
}
