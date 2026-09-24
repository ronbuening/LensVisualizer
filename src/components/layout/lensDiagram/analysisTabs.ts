import type { AnalysisTab } from "../AnalysisDrawer.js";

/* Array order is display order in the mobile tab strip and the desktop analysis dock.
   `description` is the dock button's hover/focus tooltip. */
export const ANALYSIS_TABS = [
  {
    id: "summary",
    label: "SUMMARY",
    description: "Key first-order numbers and headline aberrations at the current focus, zoom, and aperture.",
  },
  {
    id: "aberrations",
    label: "ABERRATIONS",
    description: "Spherical aberration, field curvature, and astigmatism.",
  },
  {
    id: "chromatic",
    label: "CHROMATIC",
    description: "Longitudinal (LoCA) and lateral (TCA) color error, with per-wavelength focus and ray fans.",
  },
  {
    id: "coma",
    label: "COMA",
    description: "Off-axis ray footprints and fans showing comatic flare across the field.",
  },
  {
    id: "bokeh",
    label: "BOKEH",
    description: "Shape and structure of out-of-focus point images across the field.",
  },
  {
    id: "distortion",
    label: "DISTORTION",
    description: "Barrel or pincushion distortion: how straight lines bend toward the frame edges.",
  },
  {
    id: "breathing",
    label: "BREATHING",
    description: "How field of view and focal length shift as focus moves from infinity to close range.",
  },
  {
    id: "vignetting",
    label: "VIGNETTING",
    description: "Relative illumination and light falloff from the frame center to the corners.",
  },
  {
    id: "pupils",
    label: "PUPILS",
    description: "Entrance and exit pupil position and shift across the field.",
  },
] as const satisfies readonly AnalysisTab[];
