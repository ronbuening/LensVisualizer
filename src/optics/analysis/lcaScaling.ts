/**
 * LCA scaling analysis adapter — v2-compatible exports for fixed-reference chromatic bar offsets.
 *
 * Delegates to the public lcaScaling helper so analysis callers share the same display scale.
 */

import type { ChromaticChannel } from "../../types/optics.js";

export const REFERENCE_LCA_MM_2 = 0.15;

export interface LcaBarResult2 {
  barOffsets: Partial<Record<ChromaticChannel, number>>;
  mag: number;
  clamped: boolean;
}

export function computeLcaBarOffsets2(
  intercepts: Partial<Record<ChromaticChannel, number>>,
  referenceIntercept: number,
  viewWidthPx: number,
  effectiveSC: number,
): LcaBarResult2 {
  const halfWidth = viewWidthPx / 2;
  const baseMag = (halfWidth * 0.7) / (REFERENCE_LCA_MM_2 * effectiveSC);
  const barOffsets: Partial<Record<ChromaticChannel, number>> = {};
  let maxAbsPx = 0;

  for (const ch of ["R", "G", "B", "V"] as ChromaticChannel[]) {
    if (intercepts[ch] === undefined) continue;
    const px = (intercepts[ch] - referenceIntercept) * baseMag * effectiveSC;
    barOffsets[ch] = px;
    maxAbsPx = Math.max(maxAbsPx, Math.abs(px));
  }

  let clamped = false;
  let mag = baseMag;
  if (maxAbsPx > halfWidth && maxAbsPx > 0) {
    const scale = halfWidth / maxAbsPx;
    for (const ch of Object.keys(barOffsets) as ChromaticChannel[]) {
      barOffsets[ch] = barOffsets[ch]! * scale;
    }
    mag = baseMag * scale;
    clamped = true;
  }

  return { barOffsets, mag, clamped };
}
