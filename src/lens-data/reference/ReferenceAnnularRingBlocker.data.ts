import type { LensDataInput } from "../../types/optics.js";

/**
 * Hidden regression fixture for annular blocking geometry where the center
 * passes through the hole but a surrounding ring is stopped.
 */

const LENS_DATA = {
  key: "reference-annular-ring-blocker",
  maker: "Reference",
  visible: false,
  name: "REFERENCE Annular Ring Blocker",
  subtitle: "Hidden annular blocker fixture",
  specs: ["ANNULAR BLOCKER", "CENTER PASSES", "RING CLIPS"],

  focalLengthMarketing: 100,
  focalLengthDesign: 100,
  apertureMarketing: 4,
  apertureDesign: 4,
  patentYear: 2026,
  elementCount: 1,
  groupCount: 1,
  nominalFno: 4,
  closeFocusM: 10,
  yScFill: 0.5,
  scFill: 0.62,
  rayLeadFrac: 0.2,
  maxFstop: 16,
  fstopSeries: [4, 5.6, 8, 11, 16],
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 8,
    maxTraceFieldDeg: 4,
  },
  opticalPath: {
    mode: "auto",
    imagePlane: { z: 120, label: "IMG" },
    maxInteractions: 5,
  },

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
      fromSurface: "RING",
      toSurface: "RINGB",
      role: "Blocks a ring zone while leaving the central opening and outside clear aperture inactive.",
    },
  ],

  surfaces: [
    { label: "STO", R: 1e15, d: 25, nd: 1.0, elemId: 0, sd: 30 },
    { label: "RING", R: 1e15, d: 0.5, nd: 1.0, elemId: 1, sd: 14, innerSd: 6, interaction: { type: "block" } },
    { label: "RINGB", R: 1e15, d: 94.5, nd: 1.0, elemId: 1, sd: 14, innerSd: 6 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [{ text: "Mask", fromSurface: "RING", toSurface: "RINGB" }],
  doublets: [],
} satisfies LensDataInput;

export default LENS_DATA;
