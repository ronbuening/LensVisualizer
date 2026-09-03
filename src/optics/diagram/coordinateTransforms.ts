/**
 * Diagram coordinate transforms — maps optical millimetres into SVG viewport coordinates.
 *
 * Defines the shared z/y to x/y conversion used by element outlines, traces, stops, and overlays.
 */

import type { CoordinateTransforms } from "../../types/optics.js";

interface CoordTransformParams {
  svgW: number;
  svgH: number;
  SC: number;
  YSC: number;
  lensShiftFrac: number;
  imgMM: number;
  scaleRatio: number | null;
  zExtent?: { min: number; max: number } | null;
  yExtent?: { min: number; max: number } | null;
}

/**
 * Create optical-space to SVG-space coordinate transforms for a diagram viewport.
 *
 * Optical coordinates are millimeters with z increasing toward the image plane and
 * y positive downward in the rendered SVG convention. The returned scale may be
 * reduced from `SC` so the requested z extent stays inside horizontal margins.
 *
 * @param params - viewport dimensions, optical scale, image-plane span, and optional z extent
 * @returns SVG transform callbacks plus effective scale and viewport anchors
 */
export function createCoordinateTransforms2({
  svgW,
  svgH,
  SC,
  YSC,
  lensShiftFrac,
  imgMM,
  scaleRatio,
  zExtent,
  yExtent,
}: CoordTransformParams): CoordinateTransforms {
  const rawSC = scaleRatio != null ? SC * scaleRatio : SC;
  const rawYSC = scaleRatio != null ? YSC * scaleRatio : YSC;
  const MID = imgMM / 2;
  const CX = svgW / 2 + svgW * lensShiftFrac;
  const horizontalMargin = 38;
  const zMin = zExtent && isFinite(zExtent.min) ? zExtent.min : 0;
  const zMax = zExtent && isFinite(zExtent.max) ? zExtent.max : imgMM;
  const leftLimit =
    zMin < MID && CX > horizontalMargin ? (CX - horizontalMargin) / Math.max(MID - zMin, 1e-9) : Infinity;
  const rightLimit =
    zMax > MID && svgW - horizontalMargin > CX ? (svgW - horizontalMargin - CX) / Math.max(zMax - MID, 1e-9) : Infinity;
  const verticalMargin = 20;
  const CY = svgH / 2;
  const yMin = yExtent && isFinite(yExtent.min) ? yExtent.min : 0;
  const yMax = yExtent && isFinite(yExtent.max) ? yExtent.max : 0;
  const topScaleFactor = yMin < 0 && rawYSC > 0 ? (CY - verticalMargin) / Math.max(-yMin * rawYSC, 1e-9) : Infinity;
  const bottomScaleFactor =
    yMax > 0 && rawYSC > 0 ? (svgH - verticalMargin - CY) / Math.max(yMax * rawYSC, 1e-9) : Infinity;
  const verticalScaleFactor = Math.min(1, topScaleFactor, bottomScaleFactor);
  const effectiveSC = Math.min(rawSC, leftLimit, rightLimit, rawSC * verticalScaleFactor);
  const scaleFactor = rawSC > 0 ? effectiveSC / rawSC : 1;
  const effectiveYSC = rawYSC * scaleFactor;
  const IX = CX + MID * effectiveSC;

  const sx = (z: number): number => IX - (imgMM - z) * effectiveSC;
  const sy = (y: number): number => CY + y * effectiveYSC;
  const yViewMax = (svgH / 2 - 10) / effectiveYSC;

  const clampedRayEnd = (lastZ: number, lastY: number, u: number, targetZ: number): [number, number] => {
    const yImg = lastY + (targetZ - lastZ) * u;
    const yClamped = Math.max(-yViewMax, Math.min(yViewMax, yImg));
    if (yClamped !== yImg && Math.abs(u) > 1e-9) {
      const zEdge = lastZ + (yClamped - lastY) / u;
      return [sx(zEdge), sy(yClamped)];
    }
    return [sx(targetZ), sy(yImg)];
  };

  return { sx, sy, clampedRayEnd, yViewMax, CX, IX, effectiveSC };
}
