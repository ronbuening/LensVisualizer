import type { LensDataInput } from "../../types/optics.js";

/**
 * Hidden regression fixture for annular pupils and central obstructions.
 *
 * This is the spherical-primary fixture with a 6 mm central baffle ahead of an
 * annular first-surface mirror. Visible ray sampling should skip the blocked
 * pupil core, while a deliberately central trace should clip on the baffle.
 */

const LENS_DATA = {
  key: "reference-annular-obscured-mirror",
  maker: "Reference",
  visible: false,
  name: "REFERENCE Annular Obscured Mirror",
  subtitle: "Hidden annular-pupil regression fixture",
  specs: ["ANNULAR FIRST-SURFACE MIRROR", "CENTRAL OBSTRUCTION", "f = 100 mm", "F/4"],

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
    surfaceOrder: ["STO", "OBS", "M1"],
    imagePlane: { z: 0, label: "IMG" },
    maxInteractions: 4,
  },

  elements: [
    {
      id: 1,
      name: "M1",
      label: "Annular primary mirror",
      type: "Annular Concave First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      fl: 100,
      glass: "Aluminized annular front surface",
      apd: false,
      role: "Spherical mirror with a central hole masked by an upstream obstruction.",
    },
  ],

  surfaces: [
    { label: "STO", R: 1e15, d: 20, nd: 1.0, elemId: 0, sd: 30 },
    { label: "OBS", R: 1e15, d: 80, nd: 1.0, elemId: 0, sd: 6, interaction: { type: "block" } },
    {
      label: "M1",
      R: -200,
      d: 2,
      nd: 1.0,
      elemId: 1,
      sd: 30,
      innerSd: 6,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "first-surface" },
    },
    { label: "M1B", R: 1e15, d: 0, nd: 1.0, elemId: 0, sd: 30, innerSd: 6 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [{ text: "M1", fromSurface: "M1", toSurface: "M1B" }],
  doublets: [],
} satisfies LensDataInput;

export default LENS_DATA;
