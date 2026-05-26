import type { ChiefRaySolveResult } from "./fieldGeometryLegacy.js";

export type ChiefRayStatus = ChiefRaySolveResult["status"];

export type ChiefRayStatusCounts = Record<ChiefRayStatus, number>;

const counts: Map<string, ChiefRayStatusCounts> = new Map();

function emptyCounts(): ChiefRayStatusCounts {
  return { converged: 0, "paraxial-fallback": 0, "bracket-failed": 0, "out-of-domain": 0 };
}

export function recordChiefRayStatus(lensKey: string, status: ChiefRayStatus): void {
  let entry = counts.get(lensKey);
  if (!entry) {
    entry = emptyCounts();
    counts.set(lensKey, entry);
  }
  entry[status] += 1;
}

export function getChiefRayDiagnostics(): Map<string, ChiefRayStatusCounts> {
  const snapshot = new Map<string, ChiefRayStatusCounts>();
  for (const [key, value] of counts.entries()) {
    snapshot.set(key, { ...value });
  }
  return snapshot;
}

export function resetChiefRayDiagnostics(): void {
  counts.clear();
}
