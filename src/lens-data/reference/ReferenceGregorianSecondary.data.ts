import type { LensDataInput } from "../../types/optics.js";

/**
 * Hidden regression fixture for a Gregorian-style secondary path. The concave
 * secondary sits beyond the primary focus on the object side, exercising a
 * different secondary curvature/sign convention than the Cassegrain fixtures.
 *
 * Closed-form first order: the primary (R = -100, f1 = 50) focuses at z = 50.
 * The secondary (R = +80, f2 = 40) at z = -10 is s = 60 beyond that focus, so it
 * re-images at s' = 1 / (1/40 - 1/60) = 120, i.e. z = 110, behind the primary
 * hole. Secondary magnification s'/s = 2 gives EFL = f1 * 2 = 100.
 */

const LENS_DATA = {
  key: "reference-gregorian-secondary",
  maker: "Reference",
  visible: false,
  name: "REFERENCE Gregorian Secondary",
  subtitle: "Hidden alternate-secondary folded fixture",
  specs: ["GREGORIAN-STYLE", "CONCAVE SECONDARY", "ANNULAR PRIMARY", "BACK FOCUS"],

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
    surfaceOrder: ["M1", "SEC"],
    imagePlane: { z: 110, label: "IMG" },
    maxInteractions: 10,
  },

  elements: [
    {
      id: 1,
      name: "M1",
      label: "Annular primary mirror",
      type: "Annular Concave First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      fl: 50,
      glass: "Aluminized annular front surface",
      apd: false,
      fromSurface: "M1",
      toSurface: "M1B",
      role: "Primary mirror whose returning beam crosses the front focus before reaching the Gregorian secondary.",
    },
    {
      id: 2,
      name: "M2",
      label: "Gregorian secondary",
      type: "Concave First-Surface Mirror",
      nd: 1.0,
      vd: 0,
      glass: "Aluminized front surface",
      apd: false,
      fromSurface: "SEC",
      toSurface: "SECB",
      role: "Concave secondary beyond the primary focus, returning the beam through the primary hole.",
    },
  ],

  surfaces: [
    { label: "STO", R: 1e15, d: 100, nd: 1.0, elemId: 0, sd: 30 },
    {
      label: "M1",
      R: -100,
      d: 2,
      nd: 1.0,
      elemId: 1,
      sd: 30,
      innerSd: 9,
      interaction: { type: "reflect", incidentSide: "front", inactiveSide: "block", mirrorKind: "first-surface" },
    },
    { label: "M1B", R: 1e15, d: -112, nd: 1.0, elemId: 1, sd: 30, innerSd: 9 },
    {
      label: "SEC",
      R: 80,
      d: 2,
      nd: 1.0,
      elemId: 2,
      sd: 16,
      interaction: { type: "reflect", incidentSide: "rear", inactiveSide: "block", mirrorKind: "first-surface" },
    },
    { label: "SECB", R: 1e15, d: 118, nd: 1.0, elemId: 2, sd: 16 },
  ],

  asph: {},
  var: {},
  varLabels: [],
  groups: [
    { text: "M1", fromSurface: "M1", toSurface: "M1B" },
    { text: "M2", fromSurface: "SEC", toSurface: "SECB" },
  ],
  doublets: [],
} satisfies LensDataInput;

export default LENS_DATA;
