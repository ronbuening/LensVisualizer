import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * DE 636,166 C, Hans Deser's sole numerical example for Voigtländer & Sohn AG.
 * The patent gives f = 100 mm, f/2.8, and sodium-D indices with Abbe numbers.
 * Radii, thicknesses and air spaces follow the printed table. The iris position
 * is inferred at the midpoint of the 9 mm rear air space, split 4.5/4.5 mm;
 * its radius is derived from f/2.8. Clear semi-diameters are inferred from the
 * f/2.8 axial beam; they lie within 1.5 % of the rims on the to-scale drawing
 * sheet (18.55, 15.47 and 15.38 mm), and each group is square-cut as drawn.
 * The image plane is calculated from the paraxial infinity back focus.
 * The 5° half-field is a model choice; the patent states no field angle.
 */
const LENS_DATA = {
  schema: 2,
  visible: true,
  key: "voigtlander-100mm-f28-de636166",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER 100mm f/2.8 (DE 636,166 Design)",
  subtitle: "DE 636,166 C, sole example — Voigtländer / Deser",
  source: {
    patentNumber: "DE 636,166 C",
    patentYear: 1936,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Hans Deser"],
    assignees: ["Voigtländer & Sohn AG"],
    sdSource: "heuristic",
  },
  catalog: {
    elementCount: 5,
    groupCount: 3,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2.8,
    },
    specs: ["5 ELEMENTS / 3 GROUPS", "DESIGN f = 100 mm", "DESIGN F/2.8", "ALL SPHERICAL"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.65772,
      vd: 51.2,
      indexReference: "D",
      focalLengthMm: 44.66,
      glass: "Unmatched (nD 1.65772 / ν 51.2)",
      role: "Positive front element of the front cemented doublet",
      cemented: "C1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Concave Negative",
      nd: 1.58131,
      vd: 40.8,
      indexReference: "D",
      focalLengthMm: -146.22,
      glass: "LF5 (Schott)",
      role: "Negative rear element of the front cemented doublet",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.58131,
      vd: 40.8,
      indexReference: "D",
      focalLengthMm: -36.63,
      glass: "LF5 (Schott)",
      role: "Central negative singlet between the two positive doublets",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.65772,
      vd: 51.2,
      indexReference: "D",
      focalLengthMm: 27.65,
      glass: "Unmatched (nD 1.65772 / ν 51.2)",
      role: "Positive front element of the rear cemented doublet",
      cemented: "C2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.60704,
      vd: 40.2,
      indexReference: "D",
      focalLengthMm: -54.17,
      glass: "BASF3 (Sumita)",
      role: "Negative rear element of the rear cemented doublet",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 43,
      d: 9,
      sd: 18.5,
      medium: 1,
    },
    {
      label: "2",
      R: -85,
      d: 3,
      sd: 18.5,
      medium: 2,
    },
    {
      label: "3",
      R: "flat",
      d: 7,
      sd: 18.5,
    },
    {
      label: "4",
      R: -58,
      d: 4,
      sd: 15.25,
      medium: 3,
    },
    {
      label: "5",
      R: 34.5,
      d: 4.5,
      sd: 15.25,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.5,
    },
    {
      label: "6",
      R: 130,
      d: 10,
      sd: 15.25,
      medium: 4,
    },
    {
      label: "7",
      R: -20.5,
      d: 3,
      sd: 15.25,
      medium: 5,
    },
    {
      label: "8",
      R: -57.45,
      d: 78.9915,
      sd: 15.25,
    },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus spacing or movement.",
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16],
  },
  projection: {
    kind: "rectilinear",
    maxTraceFieldDeg: 5,
  },
  groups: [
    {
      text: "Front doublet",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "Central singlet",
      fromSurface: "4",
      toSurface: "5",
    },
    {
      text: "Rear doublet",
      fromSurface: "6",
      toSurface: "8",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "C2",
      fromSurface: "6",
      toSurface: "8",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
