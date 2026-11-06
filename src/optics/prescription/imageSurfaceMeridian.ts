/** Viewer composition that turns a cylindrical image surface a quarter turn before `buildLens()`. */
import type { CanonicalLens } from "./canonical.js";
import { canonicalInput } from "./canonicalInput.js";
import { associateCanonical } from "./identity.js";

/**
 * Show a cylindrical image surface along its straight direction.
 *
 * The lens is rotationally symmetric, so turning the cylinder a quarter turn about the axis puts its straight
 * direction in the drawn meridian, where every 1-D field analysis samples. Any other lens, or `"curved"`, is returned
 * as it is. Like a converter attachment, this is composed before `buildLens()`, which stays unaware of it.
 *
 * @param lens - canonical lens, possibly composed with a converter
 * @param meridian - section to show: the curved one (authored) or the straight one
 * @returns the lens itself, or an independent canonical copy with the turned surface
 */
export function withImageSurfaceMeridian(lens: CanonicalLens, meridian: "curved" | "flat"): CanonicalLens {
  if (meridian === "curved" || !lens.imageSurface?.cylindrical) return lens;
  const turned = structuredClone(canonicalInput(lens));
  turned.prescription.imageSurface = { ...turned.prescription.imageSurface!, meridian: "flat" };
  associateCanonical(turned.prescription, turned);
  return turned.prescription;
}
