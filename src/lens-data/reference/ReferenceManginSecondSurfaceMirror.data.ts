import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Hidden regression fixture for second-surface mirror tracing.
 *
 * A simple plano-concave Mangin-style mirror: rays enter a glass body through
 * the flat front surface, reflect from the silvered rear surface, and exit
 * through the same front surface from the rear side.
 *
 * Folded systems take their reference focal length from `focalLengthDesign`
 * rather than a traced EFL, so it must match the optics: a flat-fronted Mangin
 * mirror has f = |R| / (2n) = 220 / 3 ≈ 73.33 mm, with paraxial focus at z ≈ 33.33.
 */

const LENS_DATA = {
  schema: 2,
  key: "reference-mangin-second-surface-mirror",
  maker: "Reference",
  name: "REFERENCE Mangin Second-Surface Mirror",
  subtitle: "Hidden repeated-surface regression fixture",
  visible: false,

  catalog: {
    specs: ["SECOND-SURFACE MIRROR", "REPEATED FRONT SURFACE", "n = 1.5", "f = 73.3 mm"],
    elementCount: 1,
    groupCount: 1,
    focalLengthMm: { marketing: 73, design: 73.33 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: { patentYear: 2026 },

  elements: [
    {
      id: 1,
      name: "MG",
      label: "Mangin mirror",
      type: "Plano-Concave Second-Surface Mirror",
      nd: 1.5,
      vd: 60,
      focalLengthMm: 73.33,
      glass: "Reference crown glass",
      apd: false,
      role: "Glass body whose rear surface reflects rays back through the entrance surface.",
    },
  ],

  surfaces: [
    { label: "STO", R: "flat", d: 100, sd: 25 },
    { label: "MG1", R: "flat", d: 10, sd: 25, medium: 1 },
    {
      label: "MG2",
      R: -220,
      d: 0,
      sd: 25,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "second-surface" },
    },
  ],

  focus: { closeFocusM: 10 },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16], maxFNumber: 16 },

  projection: { kind: "rectilinear", fullFieldDeg: 8, maxTraceFieldDeg: 4 },

  opticalPath: { surfaceOrder: ["STO", "MG1", "MG2", "MG1"], imagePlane: { z: 35, label: "IMG" }, maxInteractions: 5 },

  groups: [{ text: "MG", fromSurface: "MG1", toSurface: "MG2" }],
  doublets: [],

  layout: { scFill: 0.62, yScFill: 0.55 },

  rays: { rayLeadFrac: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
