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
