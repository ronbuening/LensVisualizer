import type { LensDataInput } from "../../types/optics.js";

/**
 * Hidden regression fixture for second-surface mirror tracing.
 *
 * A simple plano-concave Mangin-style mirror: rays enter a glass body through
 * the flat front surface, reflect from the silvered rear surface, and exit
 * through the same front surface from the rear side.
 */

const LENS_DATA = {
  key: "reference-mangin-second-surface-mirror",
  maker: "Reference",
  visible: true,
  name: "REFERENCE Mangin Second-Surface Mirror",
  subtitle: "Hidden repeated-surface regression fixture",
  specs: ["SECOND-SURFACE MIRROR", "REPEATED FRONT SURFACE", "n = 1.5"],

  focalLengthMarketing: 90,
  focalLengthDesign: 90,
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
    fullFieldDeg: 8,
    maxTraceFieldDeg: 4,
  },
  opticalPath: {
    surfaceOrder: ["STO", "MG1", "MG2", "MG1"],
    imagePlane: { z: 35, label: "IMG" },
    maxInteractions: 5,
  },

  elements: [
    {
      id: 1,
      name: "MG",
      label: "Mangin mirror",
      type: "Plano-Concave Second-Surface Mirror",
      nd: 1.5,
      vd: 60,
      fl: 90,
      glass: "Reference crown glass",
      apd: false,
      role: "Glass body whose rear surface reflects rays back through the entrance surface.",
    },
  ],

  surfaces: [
    { label: "STO", R: 1e15, d: 100, nd: 1.0, elemId: 0, sd: 25 },
    { label: "MG1", R: 1e15, d: 10, nd: 1.5, elemId: 1, sd: 25 },
    {
      label: "MG2",
      R: -220,
      d: 0,
      nd: 1.0,
      elemId: 0,
      sd: 25,
      interaction: { type: "reflect", incidentSide: "front", mirrorKind: "second-surface" },
    },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [{ text: "MG", fromSurface: "MG1", toSurface: "MG2" }],
  doublets: [],
} satisfies LensDataInput;

export default LENS_DATA;
