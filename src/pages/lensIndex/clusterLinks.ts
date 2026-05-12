/**
 * Link helpers for catalog cluster navigation.
 */

import type { ImageFormatId, LensMountId } from "../../utils/lensTaxonomy.js";

export function lensLinkFromLibrary(lensKey: string, returnTo: string): string {
  const params = new URLSearchParams({ from: "lenses", returnTo });
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
