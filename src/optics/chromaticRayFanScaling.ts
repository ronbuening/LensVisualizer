/**
 * chromaticRayFanScaling — Fixed-reference scaling for chromatic bar visualisations.
 *
 * Provides a consistent magnification so that lenses with larger chromatic
 * aberration display wider bars and well-corrected lenses display narrower
 * bars.  The LoCA scale is anchored to REFERENCE_LOCA_MM: a lens whose maximum
 * channel offset equals that value will fill ~70 % of the available width.
 *
 * Extracted as a pure function so the same logic can drive both the small
 * LoCA inset widget and the detailed chromatic overlay.
 */
import type { ChromaticChannel } from "../types/optics.js";

/** Typical moderate LoCA in mm — sets the "full width" reference point. */
export const REFERENCE_LOCA_MM = 0.15;

/** Typical moderate off-axis fan image-height spread in mm. */
export const REFERENCE_FAN_IMAGE_HEIGHT_SPREAD_MM = 0.01;

/** Pixel offsets and applied magnification for one chromatic bar visualization. */
export interface ChromaticBarResult {
  /** Pixel offset from centre for each active channel. */
  barOffsets: Partial<Record<ChromaticChannel, number>>;
  /** Effective magnification applied (for the readout label). */
  mag: number;
  /** True when bars were proportionally compressed to fit the view. */
  clamped: boolean;
}

/**
 * Compute pixel offsets for each wavelength bar relative to a reference channel,
 * using a fixed reference scale.
 *
 * @param values            Per-channel axial intercepts or image heights (mm).
 * @param referenceValue    Reference-channel value, usually G/d-line.
 * @param viewWidthPx       Total pixel width available for bars.
 * @param effectiveSC       Horizontal scale factor (px / mm).
 * @param referenceOffsetMm Offset that fills about 70 % of the half-width.
 * @returns per-channel pixel offsets, magnification, and clamp flag
 */
export function computeChromaticBarOffsets(
  values: Partial<Record<ChromaticChannel, number>>,
  referenceValue: number,
  viewWidthPx: number,
  effectiveSC: number,
  referenceOffsetMm: number,
): ChromaticBarResult {
  const halfWidth = viewWidthPx / 2;

  // Fixed magnification: referenceOffsetMm of offset fills 70 % of the half-width.
  const baseMag = (halfWidth * 0.7) / (referenceOffsetMm * effectiveSC);

  const barOffsets: Partial<Record<ChromaticChannel, number>> = {};
  let maxAbsPx = 0;

  for (const ch of ["R", "G", "B", "V"] as ChromaticChannel[]) {
    if (values[ch] === undefined) continue;
    const px = (values[ch] - referenceValue) * baseMag * effectiveSC;
    barOffsets[ch] = px;
    maxAbsPx = Math.max(maxAbsPx, Math.abs(px));
  }

  let clamped = false;
  let mag = baseMag;

  if (maxAbsPx > halfWidth && maxAbsPx > 0) {
    /* Preserve chromatic ordering while compressing the widest bar to the viewport. */
    const scale = halfWidth / maxAbsPx;
    for (const ch of Object.keys(barOffsets) as ChromaticChannel[]) {
      barOffsets[ch] = barOffsets[ch]! * scale;
    }
    mag = baseMag * scale;
    clamped = true;
  }

  return { barOffsets, mag, clamped };
}

export function computeLocaBarOffsets(
  axialIntercepts: Partial<Record<ChromaticChannel, number>>,
  referenceIntercept: number,
  viewWidthPx: number,
  effectiveSC: number,
): ChromaticBarResult {
  return computeChromaticBarOffsets(axialIntercepts, referenceIntercept, viewWidthPx, effectiveSC, REFERENCE_LOCA_MM);
}
