/** Viewer composition that turns a cylindrical image surface to a frame direction before `buildLens()`. */
import type { ImageSurfaceSection } from "../../types/optics.js";
import type { CanonicalLens } from "./canonical.js";
import { canonicalInput } from "./canonicalInput.js";
import { associateCanonical } from "./identity.js";

/**
 * View a cylindrical image surface along a frame direction: its long edge, short edge or corner.
 *
 * The lens is rotationally symmetric, so turning the frame and its cylinder until that direction lies in the drawn
 * meridian puts it where every 1-D field analysis samples. Any other lens, or the long edge (the authored view), is
 * returned as it is. Like a converter attachment, this is composed before `buildLens()`, which stays unaware of it.
 *
 * @param lens - canonical lens, possibly composed with a converter
 * @param section - frame direction to view
 * @returns the lens itself, or an independent canonical copy viewing the section
 */
export function withImageSurfaceSection(lens: CanonicalLens, section: ImageSurfaceSection): CanonicalLens {
  if (section === "long" || !lens.imageSurface?.cylindrical) return lens;
  const turned = structuredClone(canonicalInput(lens));
  turned.prescription.imageSurface = { ...turned.prescription.imageSurface!, section };
  associateCanonical(turned.prescription, turned);
  return turned.prescription;
}
