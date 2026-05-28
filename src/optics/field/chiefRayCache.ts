/**
 * Chief-ray cache and diagnostics — memoizes solved field launches per RuntimeLens state.
 *
 * Stores both solve results and status counters so expensive field/chief-ray consumers share work
 * and audit scripts can inspect fallback behavior.
 */

import type { RuntimeLens } from "../../types/optics.js";
import { launchSurfaceForFieldDeg2 } from "./projection.js";
import type { ChiefRaySolveResult2 } from "./chiefRay.js";

/** Status categories emitted by chief-ray solving. */
export type ChiefRayStatus2 = ChiefRaySolveResult2["status"];

/** Per-lens chief-ray status counters used by diagnostics and audit scripts. */
export type ChiefRayDiagnostics2 = Record<ChiefRayStatus2, number>;

const CACHE: WeakMap<RuntimeLens, Map<string, ChiefRaySolveResult2>> = new WeakMap();
const DIAGNOSTICS = new Map<string, ChiefRayDiagnostics2>();

/**
 * Build the memoization key for a chief-ray solve.
 *
 * The launch surface is part of the key because fisheye/vector and scalar
 * object-plane solves can differ even when the signed field angle is the same.
 *
 * @param L - runtime lens object
 * @param focusT - normalized focus slider
 * @param zoomT - normalized zoom slider
 * @param aberrationT - normalized aberration spacing slider
 * @param fieldAngleDeg - signed field angle in degrees
 * @returns chief-ray cache key
 */
export function chiefRayCacheKey2(
  L: RuntimeLens,
  focusT: number,
  zoomT: number,
  aberrationT: number,
  fieldAngleDeg: number,
): string {
  const launchSurface = launchSurfaceForFieldDeg2(fieldAngleDeg, L.projection);
  return `${focusT}|${zoomT}|${aberrationT}|${fieldAngleDeg}|${launchSurface}`;
}

/**
 * Look up a cached chief-ray solve for a RuntimeLens.
 *
 * @param L - runtime lens object used as WeakMap key
 * @param key - cache key from `chiefRayCacheKey2`
 * @returns cached solve result, if present
 */
export function getCachedChiefRaySolve2(L: RuntimeLens, key: string): ChiefRaySolveResult2 | undefined {
  return CACHE.get(L)?.get(key);
}

/**
 * Store a chief-ray solve for a RuntimeLens.
 *
 * @param L - runtime lens object used as WeakMap key
 * @param key - cache key from `chiefRayCacheKey2`
 * @param value - solved chief-ray result
 */
export function setCachedChiefRaySolve2(L: RuntimeLens, key: string, value: ChiefRaySolveResult2): void {
  let perLensCache = CACHE.get(L);
  if (!perLensCache) {
    perLensCache = new Map();
    CACHE.set(L, perLensCache);
  }
  perLensCache.set(key, value);
}

/**
 * Increment a per-lens chief-ray status diagnostic counter.
 *
 * @param lensKey - stable lens catalog key
 * @param status - solve status to count
 */
export function recordChiefRayStatus2(lensKey: string, status: ChiefRayStatus2): void {
  const counts =
    DIAGNOSTICS.get(lensKey) ??
    ({
      converged: 0,
      "paraxial-fallback": 0,
      "bracket-failed": 0,
      "out-of-domain": 0,
    } satisfies ChiefRayDiagnostics2);
  counts[status] += 1;
  DIAGNOSTICS.set(lensKey, counts);
}

/**
 * Return a defensive snapshot of chief-ray diagnostic counters.
 *
 * @returns map of lens key to status-count record
 */
export function getChiefRayDiagnostics2(): Map<string, ChiefRayDiagnostics2> {
  return new Map(Array.from(DIAGNOSTICS.entries()).map(([key, value]) => [key, { ...value }]));
}

/**
 * Clear all chief-ray diagnostic counters.
 *
 * Used by focused audit/tests so previous runs do not affect status totals.
 */
export function resetChiefRayDiagnostics2(): void {
  DIAGNOSTICS.clear();
}
