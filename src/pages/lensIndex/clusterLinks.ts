/**
 * Link helpers for catalog cluster navigation.
 */

import type { ImageFormatId, LensMountId } from "../../utils/lensTaxonomy.js";

export type LensLibraryBreadcrumbContext = { type: "mount"; id: LensMountId } | { type: "format"; id: ImageFormatId };

export function lensLinkFromLibrary(lensKey: string, returnTo: string, context?: LensLibraryBreadcrumbContext): string {
  const params = new URLSearchParams({ from: "lenses", returnTo });
  if (context) {
    params.set("context", context.type);
    params.set("id", context.id);
  }
  return `/lens/${lensKey}?${params.toString()}`;
}

export function lensLinkFromMount(lensKey: string, mountId: LensMountId): string {
  const params = new URLSearchParams({ from: "mount", id: mountId });
  return `/lens/${lensKey}?${params.toString()}`;
}

export function lensLinkFromFormat(lensKey: string, formatId: ImageFormatId): string {
  const params = new URLSearchParams({ from: "format", id: formatId });
  return `/lens/${lensKey}?${params.toString()}`;
}
