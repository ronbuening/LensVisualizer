/**
 * Chromatic ray-fan scaling analysis adapter — v2-compatible exports for fixed-reference chromatic bar offsets.
 *
 * Keeps prepared-state analysis callers on the same display scale as RuntimeLens callers.
 */

import type { ChromaticChannel } from "../../types/optics.js";

/**
 * Fixed LoCA reference in mm for full-width bar scaling.
 */
export const REFERENCE_LOCA_MM_2 = 0.15;

/** Pixel offsets and applied magnification for one LoCA visualization. */
export interface ChromaticBarResult2 {
  barOffsets: Partial<Record<ChromaticChannel, number>>;
  mag: number;
  clamped: boolean;
}

/**
 * Convert chromatic intercept differences into display-space bar offsets.
 *
 * Intercepts are axial image-plane coordinates in mm. Offsets are returned in px
 * relative to the reference channel and clamped to half the available viewport width
 * so a very large LoCA estimate cannot push bars outside the diagram.
 *
 * @param axialIntercepts - per-channel axial intercept positions in mm
 * @param referenceIntercept - channel intercept used as the zero-offset baseline in mm
 * @param viewWidthPx - available view width in CSS pixels
 * @param effectiveSC - current optical-mm to pixel scale
 * @returns per-channel pixel offsets, magnification, and whether clamping was applied
 */
export function computeLocaBarOffsets2(
  axialIntercepts: Partial<Record<ChromaticChannel, number>>,
  referenceIntercept: number,
  viewWidthPx: number,
  effectiveSC: number,
): ChromaticBarResult2 {
  const halfWidth = viewWidthPx / 2;
  const baseMag = (halfWidth * 0.7) / (REFERENCE_LOCA_MM_2 * effectiveSC);
  const barOffsets: Partial<Record<ChromaticChannel, number>> = {};
  let maxAbsPx = 0;

  for (const ch of ["R", "G", "B", "V"] as ChromaticChannel[]) {
    if (axialIntercepts[ch] === undefined) continue;
    const px = (axialIntercepts[ch] - referenceIntercept) * baseMag * effectiveSC;
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
