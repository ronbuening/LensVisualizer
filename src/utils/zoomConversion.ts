/**
 * Zoom ↔ focal-length conversion utilities.
 *
 * Shared by both single-lens and comparison URL sync, as well as
 * comparison slider math.
 */

export interface ZoomConvertibleLens {
  isZoom: boolean;
  zoomPositions?: number[] | null;
}

/**
 * Convert a focal length in mm to normalized zoomT [0..1].
 *
 * Performs piecewise-linear inverse interpolation across the lens's
 * zoomPositions array.  Clamps to [0, 1] for out-of-range values.
 *
 * @param fl — focal length in mm
 * @param L  — runtime lens object (needs isZoom, zoomPositions)
 * @returns normalized zoom position [0..1]
 */
export function focalLengthToZoomT(fl: number, L: ZoomConvertibleLens): number {
  if (!L.isZoom) return 0;
  const zp = L.zoomPositions ?? [];
  if (zp.length < 2) return 0;
  if (fl <= zp[0]) return 0;
  if (fl >= zp[zp.length - 1]) return 1;
  for (let i: number = 0; i < zp.length - 1; i++) {
    if (fl >= zp[i] && fl <= zp[i + 1]) {
      return (i + (fl - zp[i]) / (zp[i + 1] - zp[i])) / (zp.length - 1);
    }
  }
  return 0;
}

/**
 * Convert normalized zoomT [0..1] to focal length in mm.
 *
 * @param zoomT — normalized zoom position [0..1]
 * @param L     — runtime lens object (needs isZoom, zoomPositions)
 * @returns focal length in mm, or null for prime lenses
 */
export function zoomTToFocalLength(zoomT: number, L: ZoomConvertibleLens): number | null {
  if (!L.isZoom) return null;
  const zp = L.zoomPositions ?? [];
  if (zp.length < 2) return null;
  const pos: number = zoomT * (zp.length - 1);
  const idx: number = Math.min(Math.floor(pos), zp.length - 2);
  const frac: number = pos - idx;
  return zp[idx] + (zp[idx + 1] - zp[idx]) * frac;
}
