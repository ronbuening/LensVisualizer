/**
 * Prepared-state cache container — WeakMap-backed storage for compiled optical states.
 *
 * Keeps per-runtime-lens state memoization explicit and local to callers instead of hiding mutable
 * optical state in module globals.
 */

import type { PreparedOpticalState } from "../types.js";

export interface PreparedStateCache {
  get(cacheKey: string): PreparedOpticalState | undefined;
  set(cacheKey: string, state: PreparedOpticalState): void;
  clear(): void;
}

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
