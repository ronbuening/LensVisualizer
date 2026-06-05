/**
 * Renderer-agnostic SVG document model.
 *
 * `buildMountSvgDoc()` resolves a mount spec into this fully-computed, theme-neutral structure:
 * geometry is already in millimetre coordinates, coordinates are rounded, layers are ordered, the
 * viewBox is computed, and each element carries the feature `category` that drives its color plus the
 * value `status` that drives its stroke dash. Two thin serializers consume the SAME doc —
 * `mountSvgDocToString()` for committed static SVG, and the `MountDiagram` React component for live
 * pages — so both outputs derive from one computation and cannot diverge.
 */

import type { MountMetadataView, ValueStatus } from "../../types/mount.js";
import type { MountFeatureCategory } from "./category.js";
import type { MountLayerName } from "./layers.js";

export type MountElementKind = "path" | "circle" | "line" | "text";

/** One drawable primitive. Color comes from `category`; dash/weight come from `status`. */
export interface MountSvgElement {
  layer: MountLayerName;
  kind: MountElementKind;
  /** Geometry/role attributes only (d, cx, cy, r, x1…); never stroke/fill styling. */
  attrs: Record<string, string | number>;
  /** Feature category — drives the element color. */
  category: MountFeatureCategory;
  status: ValueStatus;
  /** True for area shapes that should receive a faint fill (rings, pads); false = stroke only. */
  fill: boolean;
  /** Even-odd fill for annulus paths with an inner cut-out. */
  fillEvenOdd?: boolean;
  /** Text content for `kind === "text"`. */
  text?: string;
  /** Within-layer ordering: ascending angle then featureId (package Section 9.1). */
  sortAngle: number;
  sortKey: string;
}

export interface MountSvgLayerGroup {
  name: MountLayerName;
  elements: MountSvgElement[];
}

export interface MountLegendEntry {
  category: MountFeatureCategory;
  label: string;
  color: string;
}

export interface MountSvgDoc {
  schemaVersion: string;
  mountId: string;
  profileId: string;
  view: MountMetadataView;
  /** "minX minY width height" in mm, or "unknown". */
  viewBox: string;
  title: string;
  desc: string;
  /** Stable element ids for aria-labelledby wiring. */
  titleId: string;
  descId: string;
  layers: MountSvgLayerGroup[];
  legend: MountLegendEntry[];
}
