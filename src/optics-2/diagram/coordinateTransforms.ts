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
}

export function createCoordinateTransforms2({
  svgW,
  svgH,
  SC,
  YSC,
  lensShiftFrac,
  imgMM,
  scaleRatio,
  zExtent,
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
  const effectiveSC = Math.min(rawSC, leftLimit, rightLimit);
  const scaleFactor = rawSC > 0 ? effectiveSC / rawSC : 1;
  const effectiveYSC = rawYSC * scaleFactor;
  const CY = svgH / 2;
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
