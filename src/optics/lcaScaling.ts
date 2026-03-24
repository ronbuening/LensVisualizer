/**
 * lcaScaling — Fixed-reference scaling for LCA bar visualisation.
 *
 * Provides a consistent magnification so that lenses with larger chromatic
 * aberration display wider bars and well-corrected lenses display narrower
 * bars.  The scale is anchored to REFERENCE_LCA_MM: a lens whose maximum
 * channel offset equals that value will fill ~70 % of the available width.
 *
 * Extracted as a pure function so the same logic can drive both the small
 * inset widget and a future full-size overlay.
 */
import type { ChromaticChannel } from "../types/optics.js";

/** Typical moderate LCA in mm — sets the "full width" reference point. */
export const REFERENCE_LCA_MM = 0.15;

export interface LcaBarResult {
  /** Pixel offset from centre for each active channel. */
  barOffsets: Partial<Record<ChromaticChannel, number>>;
  /** Effective magnification applied (for the readout label). */
  mag: number;
  /** True when bars were proportionally compressed to fit the view. */
  clamped: boolean;
}

/**
 * Compute pixel offsets for each wavelength bar relative to the G-line
 * reference, using a fixed reference scale.
 *
 * @param intercepts       Per-channel axial intercept positions (mm).
 * @param referenceIntercept  G-line intercept (or IMG_MM fallback).
 * @param viewWidthPx      Total pixel width available for bars.
 * @param effectiveSC      Horizontal scale factor (px / mm).
 */
export function computeLcaBarOffsets(
  intercepts: Partial<Record<ChromaticChannel, number>>,
  referenceIntercept: number,
  viewWidthPx: number,
  effectiveSC: number,
): LcaBarResult {
  const halfWidth = viewWidthPx / 2;

  // Fixed magnification: REFERENCE_LCA_MM of offset fills 70 % of the half-width.
  const baseMag = (halfWidth * 0.7) / (REFERENCE_LCA_MM * effectiveSC);

  const barOffsets: Partial<Record<ChromaticChannel, number>> = {};
  let maxAbsPx = 0;

  for (const ch of ["R", "G", "B"] as ChromaticChannel[]) {
    if (intercepts[ch] === undefined) continue;
    const px = (intercepts[ch] - referenceIntercept) * baseMag * effectiveSC;
    barOffsets[ch] = px;
    maxAbsPx = Math.max(maxAbsPx, Math.abs(px));
  }

  let clamped = false;
  let mag = baseMag;

  if (maxAbsPx > halfWidth && maxAbsPx > 0) {
    // Scale all bars proportionally so the widest just fits.
    const scale = halfWidth / maxAbsPx;
    for (const ch of Object.keys(barOffsets) as ChromaticChannel[]) {
      barOffsets[ch] = barOffsets[ch]! * scale;
    }
    mag = baseMag * scale;
    clamped = true;
  }

  return { barOffsets, mag, clamped };
}
