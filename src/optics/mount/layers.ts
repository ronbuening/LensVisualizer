/**
 * Fixed SVG layer order and feature→layer classification (package Section 9).
 *
 * The renderer emits layers in MOUNT_LAYER_ORDER (back to front); within a layer, features sort by
 * ascending centerAngle then featureId. Keeping the order in one frozen array is what makes
 * regeneration produce clean, byte-identical diffs. `format-frame` is included as an optional layer
 * (package Section 9 lists it `mvp-optional`); it is not part of the schema's `svgLayers` manifest
 * enums, which only enumerate the required/conditional/variant layers.
 *
 * Feature classification splits each side's features into the metal foundation, the core mount
 * interface, and (for body baffles/clear aperture) the clear-aperture layer, by inspecting the
 * snake_case `featureType`. Unrecognized types fall back to the core-interface layer so a new
 * feature is always drawn rather than silently dropped.
 */

export type MountLayerName =
  | "datum-axis"
  | "format-frame"
  | "clear-aperture"
  | "camera-side-metal"
  | "camera-side-core-interface"
  | "camera-side-variant-electrical"
  | "camera-side-variant-mechanical"
  | "lens-side-metal"
  | "lens-side-core-interface"
  | "lens-side-variant-electrical"
  | "lens-side-variant-mechanical"
  | "axial-section"
  | "uncertainty";

/** Back-to-front draw order. Identical input → identical layer sequence. */
export const MOUNT_LAYER_ORDER: readonly MountLayerName[] = [
  "datum-axis",
  "format-frame",
  "clear-aperture",
  "camera-side-metal",
  "camera-side-core-interface",
  "camera-side-variant-electrical",
  "camera-side-variant-mechanical",
  "lens-side-metal",
  "lens-side-core-interface",
  "lens-side-variant-electrical",
  "lens-side-variant-mechanical",
  "axial-section",
  "uncertainty",
];

const CAMERA_METAL_TYPES = new Set<string>(["body_throat", "mount_ring", "body_mount_ring", "body_metal"]);
const CAMERA_CLEAR_TYPES = new Set<string>(["clear_aperture", "effective_clear_aperture", "body_baffle"]);
const LENS_METAL_TYPES = new Set<string>([
  "lens_throat",
  "lens_mount_ring",
  "rear_opening",
  "rear_baffle",
  "lens_metal",
  "rear_element_envelope",
]);

/** Layer for a camera/body-side front-view feature. */
export function classifyCameraFeatureLayer(featureType: string): MountLayerName {
  if (CAMERA_METAL_TYPES.has(featureType)) return "camera-side-metal";
  if (CAMERA_CLEAR_TYPES.has(featureType)) return "clear-aperture";
  return "camera-side-core-interface";
}

/** Layer for a lens-side rear-view feature. */
export function classifyLensFeatureLayer(featureType: string): MountLayerName {
  if (LENS_METAL_TYPES.has(featureType)) return "lens-side-metal";
  return "lens-side-core-interface";
}
