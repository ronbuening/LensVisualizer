import type { LensDataInput } from "../../types/optics.js";

/**
 * Hidden regression fixture for guarded folded-system analysis.
 *
 * This synthetic Cassegrain-style prescription uses an annular primary and a
 * centrally blocking secondary. Off-axis pupil samples pass around the
 * secondary, reflect from the primary, reflect from the secondary, then pass
 * through the primary hole to a back-focus image plane.
 */

const LENS_DATA = {
  key: "reference-cassegrain-back-focus",
  maker: "Reference",
  visible: false,
  name: "REFERENCE Cassegrain Back Focus",
  subtitle: "Hidden folded-analysis guard fixture",
  specs: ["CASSEGRAIN-STYLE", "CENTRAL SECONDARY", "ANNULAR PRIMARY", "BACK FOCUS"],

  focalLengthMarketing: 100,
  focalLengthDesign: 100,
  apertureMarketing: 4,
  apertureDesign: 4,
  patentYear: 2026,
  elementCount: 2,
  groupCount: 2,
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
    mode: "auto",
    imagePlane: { z: 135, label: "IMG" },
    maxInteractions: 10,
  },

  elements: [
    {
      id: 1,
      name: "M2",
      label: "Secondary mirror",
      type: "Flat First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      glass: "Aluminized front surface",
      apd: false,
      fromSurface: "SEC",
      toSurface: "SECB",
      role: "Central secondary that blocks incoming core rays and reflects the returning primary beam.",
    },
    {
      id: 2,
      name: "M1",
      label: "Annular primary mirror",
      type: "Annular Concave First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      fl: 100,
      glass: "Aluminized annular front surface",
      apd: false,
      role: "Spherical primary mirror with a central hole for the back-focus beam.",
    },
  ],

  surfaces: [
    { label: "STO", R: 1e15, d: 35, nd: 1.0, elemId: 0, sd: 30 },
    {
      label: "SEC",
      R: 1e15,
      d: 0.5,
      nd: 1.0,
      elemId: 1,
      sd: 8,
      interaction: {
        type: "reflect",
        incidentSide: "rear",
        inactiveSide: "block",
        mirrorKind: "first-surface",
      },
    },
    { label: "SECB", R: 1e15, d: 64.5, nd: 1.0, elemId: 0, sd: 8 },
    {
      label: "M1",
      R: -200,
      d: 2,
      nd: 1.0,
      elemId: 2,
      sd: 30,
      innerSd: 8,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "first-surface" },
    },
    { label: "M1B", R: 1e15, d: 0, nd: 1.0, elemId: 0, sd: 30, innerSd: 8 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [
    { text: "M2", fromSurface: "SEC", toSurface: "SECB" },
    { text: "M1", fromSurface: "M1", toSurface: "M1B" },
  ],
  doublets: [],
} satisfies LensDataInput;

export default LENS_DATA;
