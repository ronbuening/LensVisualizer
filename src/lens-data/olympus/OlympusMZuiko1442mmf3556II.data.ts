import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║   LENS DATA — Olympus M.Zuiko Digital 14-42mm f/3.5-5.6 II R       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 8,994,842 B2, Common Example A / Example 1.       ║
 * ║  Four-unit negative-positive-negative-positive Micro Four Thirds    ║
 * ║  standard zoom; patent design EFL 14.268-41.185 mm.                ║
 * ║  8 elements / 7 groups; 6 aspherical surfaces on 3 elements.       ║
 * ║  Focus modeled from Example 1 second shooting mode: G1 moves        ║
 * ║  object-ward and G3 moves image-ward from infinity to close focus. ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D6, D12, D14, BF.                             ║
 * ║  Focus variable gaps: D6, D12, D14.                                ║
 * ║  Cover glass surfaces 17-18 are excluded; their air-equivalent      ║
 * ║  optical path is folded into the BF values on surface 16.           ║
 * ║                                                                    ║
 * ║  Semi-diameters are paraxial estimates from marginal + chief rays   ║
 * ║  with mechanical trimming where required by conic and cross-gap     ║
 * ║  constraints. Surface 3A is constrained by K = 55.206 and the       ║
 * ║  narrow L1-L2 air gap; the value is intentionally below the full    ║
 * ║  paraxial field envelope.                                          ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "olympus-mzuiko-14-42-3556-ii",
  maker: "Olympus",
  name: "Olympus M.Zuiko Digital 14-42mm f/3.5-5.6 II R",
  subtitle: "US 8,994,842 B2 — Common Example A / Example 1",
  specs: [
    "8 elements / 7 groups",
    "14-42mm f/3.5-5.6",
    "Patent EFL 14.27-41.18mm",
    "6 aspherical surfaces",
    "Micro Four Thirds",
  ],

  focalLengthMarketing: [14, 42],
  focalLengthDesign: [14.268, 41.185],
  lensMounts: ["micro-four-thirds"],
  imageFormat: "four-thirds",
  patentYear: 2015,
  elementCount: 8,
  groupCount: 7,
  apertureBlades: 7,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.788,
      vd: 47.37,
      fl: -19.35,
      glass: "S-LAH64 (OHARA)",
      nC: 1.783,
      nF: 1.79963,
      ng: 1.80888,
      role: "Front negative meniscus of G1; high-index lanthanum dense flint controlling front-group power and off-axis ray height.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.52542,
      vd: 55.78,
      fl: -48.92,
      glass: "Unmatched (moldable crown, 525/558 class)",
      role: "Molded aspheric negative meniscus for wide-end distortion, astigmatism, and field shaping.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: 42.61,
      glass: "S-TIH53 (OHARA)",
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
      role: "High-dispersion positive meniscus in G1; balances lateral color from the two negative front elements.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58209,
      vd: 59.46,
      fl: 18.12,
      glass: "M-BACD12 / L-BAL42 class (moldable crown, near match)",
      role: "Principal positive molded asphere in G2; controls spherical aberration and coma close to the stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.801,
      vd: 34.97,
      fl: -11.36,
      glass: "S-LAM66 (OHARA)",
      nC: 1.79427,
      nF: 1.81718,
      ng: 1.83061,
      role: "Negative flint member of the weakly negative cemented color-correcting doublet in G2.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.23,
      fl: 13.35,
      glass: "S-FSL5 (OHARA)",
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
      apd: "inferred",
      apdNote: "θg,F = 0.5300; ΔPg,F ≈ +0.0044 from OHARA catalog data.",
      dPgF: 0.0044,
      role: "Low-dispersion crown member of the G2 cemented doublet; paired with L5 for axial color control.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.53071,
      vd: 55.69,
      fl: -53.28,
      glass: "Unmatched (moldable crown, 531/557 class)",
      role: "Single-element negative focusing group G3; molded aspheres stabilize aberrations during focus travel.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.42,
      fl: 93.08,
      glass: "S-TIH6 (OHARA)",
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
      role: "Fixed rear positive meniscus; sets exit-pupil behavior and helps flatten the image side of the relay.",
    },
  ],

  surfaces: [
    { label: "1", R: 68.66, d: 1.8, nd: 1.788, elemId: 1, sd: 13.0 },
    { label: "2", R: 12.332, d: 4.02, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "3A", R: 80.0, d: 2.01, nd: 1.52542, elemId: 2, sd: 9.5 },
    { label: "4A", R: 19.284, d: 2.79, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "5", R: 21.15, d: 2.88, nd: 1.84666, elemId: 3, sd: 10.8 },
    { label: "6", R: 47.921, d: 27.79, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "STO", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 6.0 },
    { label: "8A", R: 14.567, d: 3.04, nd: 1.58209, elemId: 4, sd: 6.7 },
    { label: "9A", R: -35.255, d: 4.34, nd: 1.0, elemId: 0, sd: 6.8 },
    { label: "10", R: -98.206, d: 1.78, nd: 1.801, elemId: 5, sd: 6.55 },
    { label: "11", R: 10.111, d: 4.23, nd: 1.48749, elemId: 6, sd: 6.55 },
    { label: "12", R: -15.756, d: 1.95, nd: 1.0, elemId: 0, sd: 6.55 },
    { label: "13A", R: 104.244, d: 1.78, nd: 1.53071, elemId: 7, sd: 7.4 },
    { label: "14A", R: 22.112, d: 8.59, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "15", R: -46.801, d: 1.76, nd: 1.80518, elemId: 8, sd: 11.3 },
    { label: "16", R: -29.294, d: 17.15, nd: 1.0, elemId: 0, sd: 11.5 },
  ],

  asph: {
    "3A": {
      K: 55.206,
      A4: 3.61587e-5,
      A6: -4.90569e-7,
      A8: 5.56253e-9,
      A10: -2.97659e-11,
      A12: 0,
      A14: 0,
    },
    "4A": {
      K: -0.639,
      A4: 2.53915e-5,
      A6: -3.8722e-7,
      A8: 2.80346e-9,
      A10: -1.81533e-11,
      A12: 0,
      A14: 0,
    },
    "8A": {
      K: 0,
      A4: -2.82063e-5,
      A6: -2.06359e-7,
      A8: 7.86736e-9,
      A10: -1.77341e-10,
      A12: 0,
      A14: 0,
    },
    "9A": {
      K: 0,
      A4: 4.86449e-5,
      A6: -2.4322e-7,
      A8: 7.79158e-9,
      A10: -1.74694e-10,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: 10.752,
      A4: -4.8953e-5,
      A6: 1.95403e-6,
      A8: -3.3907e-8,
      A10: 5.00099e-10,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 3.686,
      A4: -7.81833e-5,
      A6: 1.74053e-6,
      A8: -3.92602e-8,
      A10: 5.00369e-10,
      A12: 0,
      A14: 0,
    },
  },

  zoomPositions: [14.268, 24.904, 41.185],
  zoomStep: 0.004,
  zoomLabels: ["14mm", "42mm"],

  var: {
    "6": [
      [27.79, 28.54],
      [11.65, 12.41],
      [3.2, 4.06],
    ],
    "12": [
      [1.95, 2.77],
      [6.02, 8.08],
      [10.88, 15.37],
    ],
    "14A": [
      [8.59, 7.77],
      [15.21, 13.15],
      [25.96, 21.47],
    ],
    "16": [
      [17.15, 17.15],
      [17.13, 17.13],
      [17.06, 17.06],
    ],
  },

  varLabels: [
    ["6", "D6 / G1"],
    ["12", "D12 / G3 front"],
    ["14A", "D14 / G3 rear"],
    ["16", "BF"],
  ],

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (+)", fromSurface: "8A", toSurface: "12" },
    { text: "G3 (-)", fromSurface: "13A", toSurface: "14A" },
    { text: "G4 (+)", fromSurface: "15", toSurface: "16" },
  ],

  doublets: [{ text: "D1", fromSurface: "10", toSurface: "12" }],

  closeFocusM: 0.25,
  focusDescription:
    "Patent Example 1 second shooting mode: front group G1 shifts object-ward and the single-element G3 focus unit shifts image-ward; G4 remains fixed.",

  nominalFno: [3.5, 4.5, 5.6],
  maxFstop: 22,
  fstopSeries: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22],

  scFill: 0.53,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
