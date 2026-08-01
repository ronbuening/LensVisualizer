/**
 * Link helpers for catalog cluster navigation.
 */

import type { ImageFormatId, LensMountId } from "../../utils/catalog/lensTaxonomy.js";
import { canonicalPagePath } from "../../utils/seo/siteUrls.js";

export type LensLibraryBreadcrumbContext = { type: "mount"; id: LensMountId } | { type: "format"; id: ImageFormatId };

export type LensBreadcrumbSource =
  | { type: "lenses"; returnTo: string; context?: LensLibraryBreadcrumbContext }
  | { type: "mount"; id: LensMountId }
  | { type: "format"; id: ImageFormatId };

export interface LensNavigationState {
  lensBreadcrumb: LensBreadcrumbSource;
}

export interface LensLinkTarget {
  to: string;
  state?: LensNavigationState;
}

export function lensLinkFromLibrary(
  lensKey: string,
  returnTo: string,
  context?: LensLibraryBreadcrumbContext,
): LensLinkTarget {
  return {
    to: canonicalPagePath(`/lens/${lensKey}`),
    state: {
      lensBreadcrumb: {
        type: "lenses",
        returnTo: canonicalPagePath(returnTo),
        ...(context ? { context } : {}),
      },
    },
  };
}

export function lensLinkFromMount(lensKey: string, mountId: LensMountId): LensLinkTarget {
  return {
    to: canonicalPagePath(`/lens/${lensKey}`),
    state: { lensBreadcrumb: { type: "mount", id: mountId } },
  };
}

export function lensLinkFromFormat(lensKey: string, formatId: ImageFormatId): LensLinkTarget {
  return {
    to: canonicalPagePath(`/lens/${lensKey}`),
    state: { lensBreadcrumb: { type: "format", id: formatId } },
  };
}
