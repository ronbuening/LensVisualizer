import type { LensMountId } from "../utils/catalog/lensTaxonomy.js";
import { SITE_URL } from "../utils/catalog/lensMetadata.js";
import type { MountSvgView } from "./types.js";

export function mountSvgPublicPath(mountId: LensMountId, view: MountSvgView): string {
  return `/diagrams/mounts/${mountId}/${view}.svg`;
}

export function mountSvgPublicUrl(mountId: LensMountId, view: MountSvgView): string {
  return `${SITE_URL}${mountSvgPublicPath(mountId, view)}`;
}
