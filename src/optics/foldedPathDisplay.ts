/**
 * Folded-path display labels — derives human-readable hit order summaries for mirror systems.
 *
 * Bridges generalized trace diagnostics to UI copy without changing the physical trace model.
 */

import type { RuntimeLens } from "../types/optics.js";
import { traceRay } from "./optics.js";
import { obstructionAwareRayFractionsForDensity } from "./raySampling.js";

interface FoldedHitOrderParams {
  L: RuntimeLens | undefined;
  zPos: number[];
  focusT: number;
  zoomT: number;
  aberrationT: number;
  currentPhysStopSD: number;
  currentEPSD: number;
}

function uniqueHeightsByMagnitude(heights: number[]): number[] {
  const seen = new Set<string>();
  return heights
    .filter((height) => Number.isFinite(height))
    .sort((a, b) => Math.abs(b) - Math.abs(a))
    .filter((height) => {
      const key = height.toFixed(6);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

export function foldedHitOrderLabelsForDisplay({
  L,
  zPos,
  focusT,
  zoomT,
  aberrationT,
  currentPhysStopSD,
  currentEPSD,
}: FoldedHitOrderParams): string[] {
  if (!L?.isFoldedOptics) return [];
  if (L.opticalPath.surfaceLabels && L.opticalPath.surfaceLabels.length > 0) {
    return L.opticalPath.surfaceLabels;
  }

  const rayHeights = uniqueHeightsByMagnitude([
    ...obstructionAwareRayFractionsForDensity(L, L.rayFractions, "normal", currentEPSD).map(
      (fraction) => fraction * currentEPSD,
    ),
    currentEPSD * 0.5,
    -currentEPSD * 0.5,
    0,
  ]);

  let fallbackLabels: string[] = [];
  for (const height of rayHeights) {
    try {
      const trace = traceRay(height, 0, zPos, focusT, zoomT, currentPhysStopSD, true, L, aberrationT);
      const labels = trace.diagnostics?.hitSurfaceLabels ?? [];
      if (labels.length > 0 && fallbackLabels.length === 0) fallbackLabels = labels;
      if (!trace.clipped && trace.reachedImagePlane && labels.length > 0) return labels;
    } catch {
      continue;
    }
  }
  return fallbackLabels;
}
