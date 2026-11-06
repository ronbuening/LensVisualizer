/** Reader-facing description of a curved image surface, shared by the legend, inspector and Summary tab. */
import type { ImageSurfaceShape } from "../../optics/types.js";

/**
 * Describe a curved image surface by its kind and vertex radius.
 *
 * @param shape - curved image surface
 * @returns e.g. "sphere R −69.3 mm" or "cylinder R −90 mm, curved in this section"
 */
export function describeImageSurface(shape: ImageSurfaceShape): string {
  const radius = `R ${shape.radius < 0 ? "−" : ""}${Math.abs(shape.radius).toFixed(1)} mm`;
  if (shape.kind === "cylindrical") {
    return `cylinder ${radius}, ${shape.cylinderAxis === "x" ? "curved" : "straight"} in this section`;
  }
  return `${shape.kind === "aspheric" ? "asphere" : "sphere"} ${radius}`;
}
