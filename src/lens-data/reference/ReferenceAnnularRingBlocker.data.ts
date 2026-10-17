import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Hidden regression fixture for annular blocking geometry where the center
 * passes through the hole but a surrounding ring is stopped.
 */

const LENS_DATA = {
  schema: 2,
  key: "reference-annular-ring-blocker",
  maker: "Reference",
  name: "REFERENCE Annular Ring Blocker",
  subtitle: "Hidden annular blocker fixture",
  visible: false,

  catalog: {
    specs: ["ANNULAR BLOCKER", "CENTER PASSES", "RING CLIPS"],
    elementCount: 1,
    groupCount: 1,
    focalLengthMm: { marketing: 100, design: 100 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: { patentYear: 2026 },

  elements: [
    {
      id: 1,
      name: "MASK",
      label: "Annular blocker",
      type: "Annular Blocker",
      nd: 1.0,
      vd: 0,
      glass: "Opaque mask",
      apd: false,
      role: "Blocks a ring zone while leaving the central opening and outside clear aperture inactive.",
      span: ["RING", "RINGB"],
    },
  ],

  surfaces: [
    { label: "STO", R: "flat", d: 25, sd: 30 },
    { label: "RING", R: "flat", d: 0.5, sd: 14, innerSd: 6, medium: 1, interaction: { type: "block" } },
    { label: "RINGB", R: "flat", d: 94.5, sd: 14, innerSd: 6, medium: 1 },
  ],

  focus: { closeFocusM: 10 },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16], maxFNumber: 16 },

  projection: { kind: "rectilinear", fullFieldDeg: 8, maxTraceFieldDeg: 4 },

  opticalPath: { mode: "auto", imagePlane: { z: 120, label: "IMG" }, maxInteractions: 5 },

  groups: [{ text: "Mask", fromSurface: "RING", toSurface: "RINGB" }],
  doublets: [],

  layout: { scFill: 0.62, yScFill: 0.5 },

  rays: { rayLeadFrac: 0.2 },
} satisfies LensDataV2Input;

export default LENS_DATA;
