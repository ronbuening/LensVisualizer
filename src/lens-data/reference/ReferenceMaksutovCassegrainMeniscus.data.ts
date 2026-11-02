import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Hidden regression fixture for folded systems with a refractive meniscus
 * ahead of a Cassegrain-style primary/secondary mirror pair.
 */

const LENS_DATA = {
  schema: 2,
  key: "reference-maksutov-cassegrain-meniscus",
  maker: "Reference",
  name: "REFERENCE Maksutov Cassegrain Meniscus",
  subtitle: "Hidden folded-path meniscus fixture",
  visible: false,

  catalog: {
    specs: ["MENISCUS CORRECTOR", "CASSEGRAIN-STYLE", "ANNULAR PRIMARY", "BACK FOCUS"],
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: { marketing: 100, design: 100 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: { patentYear: 2026 },

  elements: [
    {
      id: 1,
      name: "MEN",
      label: "Weak meniscus corrector",
      type: "Meniscus Corrector",
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7 reference crown",
      apd: false,
      role: "Weak refractive corrector placed ahead of the folded mirror train.",
      span: ["MEN1", "MEN2"],
    },
    {
      id: 2,
      name: "M2",
      label: "Central secondary mirror",
      type: "Flat First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      glass: "Aluminized front surface",
      apd: false,
      role: "Central secondary that blocks the incoming core and reflects the returning primary beam.",
      span: ["SEC", "SECB"],
    },
    {
      id: 3,
      name: "M1",
      label: "Annular primary mirror",
      type: "Annular Concave First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      focalLengthMm: 100,
      glass: "Aluminized annular front surface",
      apd: false,
      role: "Spherical primary mirror with a central hole for the back-focus beam.",
      span: ["M1", "M1B"],
    },
  ],

  surfaces: [
    { label: "STO", R: "flat", d: 10, sd: 30 },
    { label: "MEN1", R: 300, d: 4, sd: 30, medium: 1 },
    { label: "MEN2", R: -300, d: 21, sd: 30 },
    {
      label: "SEC",
      R: "flat",
      d: 0.5,
      sd: 7,
      medium: 2,
      interaction: { type: "reflect", incidentSide: "rear", inactiveSide: "block", mirrorKind: "first-surface" },
    },
    { label: "SECB", R: "flat", d: 64.5, sd: 7, medium: 2 },
    {
      label: "M1",
      R: -200,
      d: 2,
      sd: 30,
      innerSd: 8.1,
      medium: 3,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "first-surface" },
    },
    { label: "M1B", R: "flat", d: 0, sd: 30, innerSd: 8.1, medium: 3 },
  ],

  focus: { closeFocusM: 10 },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16], maxFNumber: 16 },

  projection: { kind: "rectilinear", fullFieldDeg: 8, maxTraceFieldDeg: 4 },

  opticalPath: {
    surfaceOrder: ["MEN1", "MEN2", "M1", "SEC"],
    imagePlane: { z: 135, label: "IMG" },
    maxInteractions: 12,
  },

  groups: [
    { text: "Corrector", fromSurface: "MEN1", toSurface: "MEN2" },
    { text: "M2", fromSurface: "SEC", toSurface: "SECB" },
    { text: "M1", fromSurface: "M1", toSurface: "M1B" },
  ],
  doublets: [],

  layout: { scFill: 0.62, yScFill: 0.5 },

  rays: { rayLeadFrac: 0.25 },
} satisfies LensDataV2Input;

export default LENS_DATA;
