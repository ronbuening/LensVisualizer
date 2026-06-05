/**
 * Lens-rear mirror transform — the single source of truth for the stored-angle frame.
 *
 * Every angle in a mount spec is stored in the camera-front world frame (0° at top dead center,
 * clockwise positive). The camera-front and lens-rear views are opposite viewpoints along the
 * optical axis and are therefore horizontal mirror images: 12 and 6 o'clock are fixed, 3 and 9
 * o'clock swap. The renderer applies this transform when drawing the lens-rear view ONLY, and never
 * writes a mirrored angle back into the data (package Section 4.1).
 *
 * The default is the vertical-axis reflection θ → (360 − θ), which corresponds to rotating the lens
 * left-to-right to view its rear. Per the package's validation gate, this transform is checked
 * against a mount whose index-mark clock position is independently documented (Nikon F) before it is
 * relied upon for published figures.
 */

/**
 * Mirror an angle from the camera-front frame into the lens-rear frame.
 *
 * @param thetaDeg — angle in degrees, camera-front world frame
 * @returns mirrored angle in [0, 360)
 */
export function mirrorAngleDeg(thetaDeg: number): number {
  return (((360 - thetaDeg) % 360) + 360) % 360;
}

/** Normalize any angle into [0, 360). */
export function normalizeAngleDeg(thetaDeg: number): number {
  return ((thetaDeg % 360) + 360) % 360;
}
