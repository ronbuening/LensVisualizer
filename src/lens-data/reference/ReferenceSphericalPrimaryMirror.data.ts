import type { LensDataInput } from "../../types/optics.js";

/**
 * Hidden regression fixture for folded-optics tracing.
 *
 * A concave first-surface spherical primary mirror with R = -200 mm focuses
 * collimated on-axis rays at z = 0 mm after reflection from the vertex at
 * z = 100 mm. The fixture is intentionally simple and hidden from the public
 * catalog; it exists to verify mirror reflection and front-side image planes.
 */

const LENS_DATA = {
  key: "reference-spherical-primary-mirror",
  maker: "Reference",
  visible: true,
  name: "REFERENCE Spherical Primary Mirror",
  subtitle: "Hidden folded-optics regression fixture",
  specs: ["FIRST-SURFACE MIRROR", "f = 100 mm", "F/4", "FRONT IMAGE PLANE"],

  focalLengthMarketing: 100,
  focalLengthDesign: 100,
  apertureMarketing: 4,
  apertureDesign: 4,
  patentYear: 2026,
  elementCount: 1,
  groupCount: 1,
  nominalFno: 4,
  closeFocusM: 10,
  yScFill: 0.55,
  scFill: 0.62,
  rayLeadFrac: 0.3,
  maxFstop: 16,
  fstopSeries: [4, 5.6, 8, 11, 16],
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 10,
    maxTraceFieldDeg: 5,
  },
  opticalPath: {
    surfaceOrder: ["STO", "M1"],
    imagePlane: { z: 0, label: "IMG" },
    maxInteractions: 3,
  },

  elements: [
    {
      id: 1,
      name: "M1",
      label: "Primary mirror",
      type: "Concave First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      fl: 100,
      glass: "Aluminized front surface",
      apd: false,
      role: "Single spherical mirror focusing collimated rays back toward the front focal plane.",
    },
  ],

  surfaces: [
    { label: "STO", R: 1e15, d: 100, nd: 1.0, elemId: 0, sd: 30 },
    {
      label: "M1",
      R: -200,
      d: 2,
      nd: 1.0,
      elemId: 1,
      sd: 30,
      interaction: { type: "reflect", incidentSide: "front", mirrorKind: "first-surface" },
    },
    { label: "M1B", R: 1e15, d: 0, nd: 1.0, elemId: 0, sd: 30 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [{ text: "M1", fromSurface: "M1", toSurface: "M1B" }],
  doublets: [],
} satisfies LensDataInput;

export default LENS_DATA;
