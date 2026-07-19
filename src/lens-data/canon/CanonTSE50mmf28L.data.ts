import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — CANON TS-E 50mm f/2.8L MACRO                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 10,571,651 B2, Numerical Data 1 (Hideki Sakai,    ║
 * ║  Canon Kabushiki Kaisha).                                          ║
 * ║                                                                    ║
 * ║  12 elements / 9 groups, all-spherical. Negative-positive-positive ║
 * ║  retrofocus tilt-shift macro design with three lens units.         ║
 * ║                                                                    ║
 * ║  Focus: all units move objectward from infinity to β = -0.5; L1    ║
 * ║  and L3 move together while L2 moves objectward by a smaller       ║
 * ║  amount. This is represented by variable d6, d10, and BF.          ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  The patent's "Effective diameter" entries are full clear          ║
 * ║  diameters. They are divided by two for surface `sd` values. The   ║
 * ║  stop row's effective-diameter value is not the physical aperture  ║
 * ║  diameter; the STO semi-diameter was solved from the patent        ║
 * ║  F-number 2.88 and the computed front-group pupil magnification.   ║
 * ║                                                                    ║
 * ║  NOTE ON FIELD COVERAGE:                                           ║
 * ║  The patent image height is 33.63 mm (67.26 mm image circle), so   ║
 * ║  projection metadata declares the full patent field rather than    ║
 * ║  limiting tracing to the 36 x 24 mm centered full-frame diagonal.  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-tse-50f28l-macro",
  maker: "Canon",
  name: "CANON TS-E 50mm f/2.8L MACRO",
  subtitle: "US 10,571,651 B2 Numerical Data 1 — Canon / Hideki Sakai",
  specs: [
    "12 elements / 9 groups",
    "f = 51.40 mm design",
    "F/2.88 design; marketed f/2.8",
    "2ω = 66.4° patent field",
    "67.3 mm image circle",
    "0.5× close focus",
    "±12 mm shift / ±8.5° tilt",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 51.397,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "US 10,571,651 B2",
  patentAuthors: ["Hideki Sakai"],
  patentAssignees: ["Canon Inc"],
  patentYear: 2020,
  elementCount: 12,
  groupCount: 9,

  perspectiveControl: {
    shiftRangeMm: [-12, 12],
    tiltRangeDeg: [-8.5, 8.5],
    shiftStepMm: 0.1,
    tiltStepDeg: 0.1,
  },

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 66.4,
    maxTraceFieldDeg: 33.2,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.3,
      fl: -81.9,
      glass: "S-FTM16 (OHARA)",
      role: "Front diverging meniscus of the retrofocus first unit.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.3,
      fl: -58.6,
      glass: "S-FTM16 (OHARA)",
      role: "Second negative element of the first unit; distributes front negative power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.7495,
      vd: 35.3,
      fl: 48.5,
      glass: "S-LAM7 (OHARA)",
      role: "Strong positive element completing the weak negative first unit.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.65412,
      vd: 39.7,
      fl: -76.0,
      glass: "S-NBH5 (OHARA)",
      role: "Negative part of the floating second unit.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.85478,
      vd: 24.8,
      fl: 62.8,
      glass: "S-NBH56 (OHARA)",
      role: "High-index positive meniscus completing the weak positive floating second unit.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 39.5,
      glass: "S-FPL51 (OHARA)",
      cemented: "D1",
      role: "Positive ED crown component of the first L3a cemented doublet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.8,
      vd: 29.8,
      fl: -102.3,
      glass: "S-NBH55 (OHARA)",
      cemented: "D1",
      role: "Dense flint partner cemented to L6 for primary color correction.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      fl: 33.5,
      glass: "S-PHM52 (OHARA)",
      cemented: "D2",
      role: "Symmetric crown element in the weak negative L3a field-correcting doublet.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.65412,
      vd: 39.7,
      fl: -26.3,
      glass: "S-NBH5 (OHARA)",
      cemented: "D2",
      role: "Flint component giving the second L3a doublet weak net negative power.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.95375,
      vd: 32.3,
      fl: -17.9,
      glass: "S-LAH98 (OHARA)",
      cemented: "D3",
      role: "Very high-index negative component immediately behind the stop.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 36.8,
      glass: "S-FPL51 (OHARA)",
      cemented: "D3",
      role: "Second ED crown element; positive partner in the rear cemented doublet.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 29.1,
      fl: 47.9,
      glass: "S-LAH99 (OHARA)",
      role: "Final high-index positive meniscus controlling rear convergence and field behavior.",
    },
  ],

  surfaces: [
    { label: "1", R: 53.017, d: 2.6, nd: 1.5927, elemId: 1, sd: 24.8 },
    { label: "2", R: 24.876, d: 13.45, nd: 1.0, elemId: 0, sd: 20.45 },
    { label: "3", R: -140.44, d: 2.2, nd: 1.5927, elemId: 2, sd: 20.1 },
    { label: "4", R: 46.402, d: 5.97, nd: 1.0, elemId: 0, sd: 19.3 },
    { label: "5", R: 49.736, d: 9.35, nd: 1.7495, elemId: 3, sd: 19.8 },
    { label: "6", R: -124.558, d: 1.01, nd: 1.0, elemId: 0, sd: 19.9 },
    { label: "7", R: 71.41, d: 2.0, nd: 1.65412, elemId: 4, sd: 19.4 },
    { label: "8", R: 28.981, d: 6.9, nd: 1.0, elemId: 0, sd: 16.15 },
    { label: "9", R: 33.591, d: 5.0, nd: 1.85478, elemId: 5, sd: 16.0 },
    { label: "10", R: 83.69, d: 7.61, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "11", R: 79.836, d: 8.4, nd: 1.497, elemId: 6, sd: 14.15 },
    { label: "12", R: -25.138, d: 1.9, nd: 1.8, elemId: 7, sd: 13.9 },
    { label: "13", R: -37.507, d: 0.2, nd: 1.0, elemId: 0, sd: 14.05 },
    { label: "14", R: 40.0, d: 7.2, nd: 1.618, elemId: 8, sd: 12.75 },
    { label: "15", R: -40.0, d: 1.3, nd: 1.65412, elemId: 9, sd: 11.75 },
    { label: "16", R: 30.497, d: 4.44, nd: 1.0, elemId: 0, sd: 10.4 },
    { label: "STO", R: 1e15, d: 6.53, nd: 1.0, elemId: 0, sd: 9.724 },
    { label: "18", R: -19.525, d: 1.2, nd: 1.95375, elemId: 10, sd: 8.8 },
    { label: "19", R: 139.306, d: 5.5, nd: 1.497, elemId: 11, sd: 9.3 },
    { label: "20", R: -20.756, d: 0.4, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "21", R: -477.536, d: 4.3, nd: 2.001, elemId: 12, sd: 12.75 },
    { label: "22", R: -43.8, d: 55.96, nd: 1.0, elemId: 0, sd: 13.55 },
  ],

  asph: {},

  var: {
    "6": [1.01, 6.84],
    "10": [7.61, 1.78],
    "22": [55.96, 81.07],
  },
  varLabels: [
    ["6", "D6"],
    ["10", "D10"],
    ["22", "BF"],
  ],

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "6" },
    { text: "L2", fromSurface: "7", toSurface: "10" },
    { text: "L3a", fromSurface: "11", toSurface: "16" },
    { text: "L3b", fromSurface: "18", toSurface: "22" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
  ],

  apertureBlades: 9,
  closeFocusM: 0.273,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  scFill: 0.64,
  yScFill: 0.58,
} satisfies LensDataInput;

export default LENS_DATA;
