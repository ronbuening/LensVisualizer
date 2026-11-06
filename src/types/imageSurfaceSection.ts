import type { ImageSurfaceSection } from "./optics.js";

/** Frame directions a cylindrical image surface can be viewed along, in chip order. */
export const IMAGE_SURFACE_SECTIONS: readonly ImageSurfaceSection[] = ["long", "short", "corner"];

export function isImageSurfaceSection(value: unknown): value is ImageSurfaceSection {
  return typeof value === "string" && (IMAGE_SURFACE_SECTIONS as readonly string[]).includes(value);
}
