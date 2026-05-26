/**
 * Chief-ray cache and diagnostics — memoizes solved field launches per RuntimeLens state.
 *
 * Stores both solve results and status counters so expensive field/chief-ray consumers share work
 * and audit scripts can inspect fallback behavior.
 */

import type { RuntimeLens } from "../../types/optics.js";
import { launchSurfaceForFieldDeg2 } from "./projection.js";
import type { ChiefRaySolveResult2 } from "./chiefRay.js";

export type ChiefRayStatus2 = ChiefRaySolveResult2["status"];

export type ChiefRayDiagnostics2 = Record<ChiefRayStatus2, number>;

const CACHE: WeakMap<RuntimeLens, Map<string, ChiefRaySolveResult2>> = new WeakMap();
const DIAGNOSTICS = new Map<string, ChiefRayDiagnostics2>();

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

export function getCachedChiefRaySolve2(L: RuntimeLens, key: string): ChiefRaySolveResult2 | undefined {
  return CACHE.get(L)?.get(key);
}

export function setCachedChiefRaySolve2(L: RuntimeLens, key: string, value: ChiefRaySolveResult2): void {
  let perLensCache = CACHE.get(L);
  if (!perLensCache) {
    perLensCache = new Map();
    CACHE.set(L, perLensCache);
  }
  perLensCache.set(key, value);
}

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

export function getChiefRayDiagnostics2(): Map<string, ChiefRayDiagnostics2> {
  return new Map(Array.from(DIAGNOSTICS.entries()).map(([key, value]) => [key, { ...value }]));
}

export function resetChiefRayDiagnostics2(): void {
  DIAGNOSTICS.clear();
}
