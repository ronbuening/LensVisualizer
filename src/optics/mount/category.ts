/**
 * Feature-category color coding.
 *
 * Each drawable element is tagged with the kind of mount feature it represents, and the category
 * drives its color so the parts of a mount (throat, ring, bayonet, lock, index, contacts, couplings,
 * screws, datum, register planes) are easy to tell apart. Colors are a fixed categorical palette
 * (not theme-derived) so the live React figure and the committed static SVG match exactly, and the
 * hues are mid-toned to read on both light and dark panel backgrounds. Provenance/uncertainty is a
 * separate axis: it is encoded by the stroke dash pattern (see style.ts), not by color.
 */

export type MountFeatureCategory =
  | "opening"
  | "ring"
  | "bayonet"
  | "lock"
  | "index"
  | "contact"
  | "coupling"
  | "screw"
  | "datum"
  | "axial";

export const CATEGORY_COLORS: Record<MountFeatureCategory, string> = {
  opening: "#2f80c4",
  ring: "#6b7a8f",
  bayonet: "#2a9d8f",
  lock: "#d1495b",
  index: "#e8853a",
  contact: "#8a5cd1",
  coupling: "#b5651d",
  screw: "#7f8c3a",
  datum: "#8a94a0",
  axial: "#2bb0c4",
};

export const CATEGORY_LABELS: Record<MountFeatureCategory, string> = {
  opening: "Throat / opening",
  ring: "Mount ring",
  bayonet: "Bayonet lug / slot",
  lock: "Lock pin / notch",
  index: "Index mark",
  contact: "Electrical contact",
  coupling: "Mechanical coupling",
  screw: "Screws / seals",
  datum: "Datum & axis",
  axial: "Register plane",
};

/** Stable legend order. */
export const CATEGORY_LEGEND_ORDER: readonly MountFeatureCategory[] = [
  "opening",
  "ring",
  "bayonet",
  "lock",
  "index",
  "contact",
  "coupling",
  "screw",
  "datum",
  "axial",
];

/** Resolve the color for a feature category. */
export function categoryColor(category: MountFeatureCategory): string {
  return CATEGORY_COLORS[category] ?? CATEGORY_COLORS.datum;
}
