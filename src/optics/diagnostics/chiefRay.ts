/** Chief-ray diagnostics — bounded status snapshots keyed by compiled prescription identity. */

import type { CompiledLens, PreparedGeometry } from "../types.js";
import type { ChiefRaySolveResult } from "../field/chiefRaySolve.js";

/** Status categories emitted by chief-ray solving. */
export type ChiefRayStatus = ChiefRaySolveResult["status"];
/** Status counters for one compiled prescription. */
export type ChiefRayDiagnostics = Record<ChiefRayStatus, number>;

// Audits can enumerate a catalog-sized snapshot without retaining every compiled revision forever.
const DIAGNOSTIC_LENS_LIMIT = 2048;
const DIAGNOSTICS = new Map<CompiledLens, ChiefRayDiagnostics>();

/**
 * Count an uncached solve and report unexpected failures in development.
 * @param state - prepared geometry whose compiled owner receives the count
 * @param fieldAngleDeg - signed field angle in degrees
 * @param status - solver outcome
 */
export function reportChiefRayFallback(state: PreparedGeometry, fieldAngleDeg: number, status: ChiefRayStatus): void {
  const lens = state.lens;
  const counts = DIAGNOSTICS.get(lens) ?? {
    converged: 0,
    "paraxial-fallback": 0,
    "bracket-failed": 0,
    "out-of-domain": 0,
  };
  counts[status] += 1;
  DIAGNOSTICS.delete(lens);
  DIAGNOSTICS.set(lens, counts);
  if (DIAGNOSTICS.size > DIAGNOSTIC_LENS_LIMIT) DIAGNOSTICS.delete(DIAGNOSTICS.keys().next().value!);
  if (status === "converged" || status === "paraxial-fallback") return;
  if (typeof import.meta === "undefined") return;
  const env = (import.meta as { env?: { DEV?: boolean } }).env;
  if (!env?.DEV) return;
  console.warn(
    `[chiefRaySolver2] ${status} key=${lens.key} field=${fieldAngleDeg.toFixed(3)} focus=${state.focusT.toFixed(4)} zoom=${state.zoomT.toFixed(4)}`,
  );
}

/**
 * Return defensive copies of the retained counters, without merging equal catalog keys.
 * @returns status counts keyed by compiled identity
 */
export function getChiefRayDiagnostics(): Map<CompiledLens, ChiefRayDiagnostics> {
  return new Map(Array.from(DIAGNOSTICS, ([lens, counts]) => [lens, { ...counts }]));
}

/** Clear diagnostic counters; memoized solves remain available. */
export function resetChiefRayDiagnostics(): void {
  DIAGNOSTICS.clear();
}
