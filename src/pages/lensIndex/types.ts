/**
 * Lens index types — shared catalog/filter/grouping shapes for the /lenses route.
 *
 * These types are scoped to the lens-index feature module so the page, filter
 * controller hook, and presentational sections can share a stable local
 * vocabulary without polluting the global type surface.
 */

import type { LensData } from "../../types/optics.js";
import type { ImageFormatId, ImageFormatMetadata, LensMountId, LensMountMetadata } from "../../utils/lensTaxonomy.js";

export type GroupMode = "maker" | "focal" | "year-asc" | "year-desc" | "mount" | "format";

export interface CatalogLensEntry {
  key: string;
  data: LensData;
  maker: {
    display: string;
    slug: string;
  };
  focalRange: [number, number] | null;
  aperture: number | null;
  patentYear: number | null;
  lensMounts: LensMountMetadata[];
  imageFormat: ImageFormatMetadata | null;
}

export interface MakerOption {
  display: string;
  slug: string;
  count: number;
}

export interface MountOption {
  id: LensMountId;
  label: string;
  count: number;
}

export interface ImageFormatOption {
  id: ImageFormatId;
  label: string;
  count: number;
}

export interface MakerGroup {
  display: string;
  slug: string;
  lenses: CatalogLensEntry[];
}

export interface MountGroup {
  id: LensMountId | "unknown";
  label: string;
  lenses: CatalogLensEntry[];
}

export interface ImageFormatGroup {
  id: ImageFormatId | "unknown";
  label: string;
  lenses: CatalogLensEntry[];
}

export interface YearGroup {
  decade: string;
  lenses: CatalogLensEntry[];
}

export interface FocalSubGroup {
  label: string;
  lenses: CatalogLensEntry[];
}

export interface PrimeZoomSection {
  label: string;
  subGroups: FocalSubGroup[];
}

export interface FilterBounds {
  focalMin: number;
  focalMax: number;
  apertureMin: number;
  apertureMax: number;
  patentYearMin: number;
  patentYearMax: number;
}

export interface CustomFilterState extends FilterBounds {
  makerSlugs: string[];
  lensMountIds: LensMountId[];
  imageFormatIds: ImageFormatId[];
}

export type NumericFilterField = keyof FilterBounds;
