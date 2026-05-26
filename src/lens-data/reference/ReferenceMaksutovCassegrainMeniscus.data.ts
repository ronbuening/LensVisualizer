import type { LensDataInput } from "../../types/optics.js";

/**
 * Hidden regression fixture for folded systems with a refractive meniscus
 * ahead of a Cassegrain-style primary/secondary mirror pair.
 */

const LENS_DATA = {
  key: "reference-maksutov-cassegrain-meniscus",
  maker: "Reference",
  visible: false,
  name: "REFERENCE Maksutov Cassegrain Meniscus",
  subtitle: "Hidden folded-path meniscus fixture",
  specs: ["MENISCUS CORRECTOR", "CASSEGRAIN-STYLE", "ANNULAR PRIMARY", "BACK FOCUS"],

  focalLengthMarketing: 100,
  focalLengthDesign: 100,
  apertureMarketing: 4,
  apertureDesign: 4,
  patentYear: 2026,
  elementCount: 3,
  groupCount: 3,
  nominalFno: 4,
  closeFocusM: 10,
  yScFill: 0.5,
  scFill: 0.62,
  rayLeadFrac: 0.25,
  maxFstop: 16,
  fstopSeries: [4, 5.6, 8, 11, 16],
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 8,
    maxTraceFieldDeg: 4,
  },
  opticalPath: {
    surfaceOrder: ["MEN1", "MEN2", "M1", "SEC"],
    imagePlane: { z: 135, label: "IMG" },
    maxInteractions: 12,
  },

  elements: [
    {
      id: 1,
      name: "MEN",
      label: "Weak meniscus corrector",
      type: "Meniscus Corrector",
      nd: 1.5168,
      vd: 64.2,
      glass: "Reference crown",
      apd: false,
      fromSurface: "MEN1",
      toSurface: "MEN2",
      role: "Weak refractive corrector placed ahead of the folded mirror train.",
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
      fromSurface: "SEC",
      toSurface: "SECB",
      role: "Central secondary that blocks the incoming core and reflects the returning primary beam.",
    },
    {
      id: 3,
      name: "M1",
      label: "Annular primary mirror",
      type: "Annular Concave First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      fl: 100,
      glass: "Aluminized annular front surface",
      apd: false,
      fromSurface: "M1",
      toSurface: "M1B",
      role: "Spherical primary mirror with a central hole for the back-focus beam.",
    },
  ],

  surfaces: [
    { label: "STO", R: 1e15, d: 10, nd: 1.0, elemId: 0, sd: 30 },
    { label: "MEN1", R: 300, d: 4, nd: 1.5168, elemId: 1, sd: 30 },
    { label: "MEN2", R: -300, d: 21, nd: 1.0, elemId: 1, sd: 30 },
    {
      label: "SEC",
      R: 1e15,
      d: 0.5,
      nd: 1.0,
      elemId: 2,
      sd: 7,
      interaction: {
        type: "reflect",
        incidentSide: "rear",
        inactiveSide: "block",
        mirrorKind: "first-surface",
      },
    },
    { label: "SECB", R: 1e15, d: 64.5, nd: 1.0, elemId: 2, sd: 7 },
    {
      label: "M1",
      R: -200,
      d: 2,
      nd: 1.0,
      elemId: 3,
      sd: 30,
      innerSd: 7,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "first-surface" },
    },
    { label: "M1B", R: 1e15, d: 0, nd: 1.0, elemId: 3, sd: 30, innerSd: 7 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [
    { text: "Corrector", fromSurface: "MEN1", toSurface: "MEN2" },
    { text: "M2", fromSurface: "SEC", toSurface: "SECB" },
    { text: "M1", fromSurface: "M1", toSurface: "M1B" },
  ],
  doublets: [],
} satisfies LensDataInput;

export default LENS_DATA;
