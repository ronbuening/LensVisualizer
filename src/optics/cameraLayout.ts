/**
 * Camera-frame layout helpers shared by lens rendering and movement analysis.
 *
 * Runtime layouts start their first surface at z=0. This adapter translates a current layout so
 * the canonical reference-state image plane remains fixed in camera coordinates.
 */

import type { LayoutResult } from "../types/optics.js";

/** A state-specific layout translated into the fixed camera/image-plane frame. */
export interface CameraAnchoredLayout extends LayoutResult {
  /** Translation applied to each current surface vertex, in mm. */
  axialShiftMm: number;
}

/**
 * Translate a current optical layout into the camera frame defined by a reference layout.
 *
 * The returned image-plane coordinate is always `reference.imgZ`; surface spacings remain those of
 * `current`. Neither input is mutated.
 */
export function anchorLayoutToCamera(reference: LayoutResult, current: LayoutResult): CameraAnchoredLayout {
  const axialShiftMm = reference.imgZ - current.imgZ;
  return {
    z: current.z.map((z) => z + axialShiftMm),
    th: current.th,
    imgZ: reference.imgZ,
    axialShiftMm,
  };
}
