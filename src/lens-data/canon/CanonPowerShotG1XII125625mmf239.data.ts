import type { LensDataInput } from "../../types/optics.js";

/**
 * Canon PowerShot G1 X Mark II 12.5-62.5mm f/2.0-3.9.
 *
 * Data source: US 2015/0219882 A1, Numerical Example 2 (Canon / Shuichi Mogi).
 * Six zoom-group positive-lead compact zoom, + - + + - +, with a two-element
 * negative inner-focus group B5. Patent table: f = 12.84 / 22.90 / 60.72 mm,
 * Fno = 2.06 / 3.50 / 4.02, image height = 9.17 / 10.46 / 11.25 mm.
 *
 * Production reference: Canon PowerShot G1 X Mark II, marketed focal length
 * 12.5-62.5 mm, f/2.0-3.9, 14 elements / 11 groups, one double-sided UA
 * aspherical element plus two other double-sided aspherical elements.
 *
 * Implementation notes:
 * - Patent surface 10 is an optically inert R = infinity, air-to-air reference
 *   plane with d = -0.10 mm. It is omitted here and folded into the preceding
 *   B2-B3 air spacing so every renderer-facing thickness is non-negative.
 * - Patent surfaces 29-30 are the sensor/filter optical block. Per project
 *   convention this cover glass is excluded and its optical path is folded into
 *   the final surface 28 back-focus as an air-equivalent distance.
 * - Patent surface 20 and surface 21 share R = 42.072 with d20 = 0.00. This is
 *   modeled as a zero-air-gap contact pair, not as a cemented interface.
 * - The patent does not publish close-focus spacings. B5 close-focus travel is
 *   a paraxially fitted visualization against Canon's published 0.05 m wide and
 *   0.40 m tele closest-focus distances, with an interpolated 0.20 m mid state.
 * - Clear semi-diameters are estimated from multi-state marginal/chief ray
 *   envelopes, then constrained to satisfy sd/|R| < 0.90, element SD ratio <= 1.25,
 *   signed cross-gap sag intrusion <= 90% of the gap, and positive edge thickness.
 */

const LENS_DATA = {
  key: "canon-powershot-g1-x-mark-ii-125-625-f20-39",
  maker: "Canon",
  name: "CANON 12.5-62.5mm f/2.0-3.9 (PowerShot G1 X Mark II)",
  subtitle: "US 2015/0219882 A1 Numerical Example 2 — Canon / Shuichi Mogi",
  specs: [
    "14 elements / 11 groups",
    "Patent table f = 12.84-60.72 mm",
    "Gaussian paraxial EFL = 12.57-62.20 mm",
    "f/2.0-3.9 marketed; patent Fno = 2.06-4.02",
    "6 aspherical surfaces on 3 double-sided aspherical elements",
    "1.5-inch-type fixed-lens camera format",
  ],
  focalLengthMarketing: [12.5, 62.5],
  focalLengthDesign: [12.84, 60.72],
  apertureMarketing: 2.0,
  apertureDesign: 2.06,
  lensMounts: ["fixed-lens-camera"],
  patentNumber: "US 2015/0219882 A1",
  patentAuthors: ["Shuichi Mogi"],
  patentAssignees: ["Canon Inc"],
  patentYear: 2015,
  elementCount: 14,
  groupCount: 11,

  zoomPositions: [12.84, 22.9, 60.72],
  zoomLabels: ["Wide", "Middle", "Tele"],
  zoomStep: 0.004,
  nominalFno: [2.0, 3.5, 3.9],
  closeFocusM: 0.05,
  focusDescription:
    "Inner focus by negative fifth zoom group B5. Patent supplies infinity zoom spacings only; close-focus spacings are paraxially fitted for visualization.",
  fstopSeries: [2, 2.2, 2.5, 2.8, 3.2, 3.5, 3.9, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11, 13, 14, 16],

  yScFill: 0.72,
  scFill: 0.62,
  maxFstop: 16,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 18.9,
      fl: -155.41,
      glass: "S-NPH2 (OHARA)",
      role: "Front negative element of the B1 cemented doublet; high-index, high-dispersion achromatizing partner.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 42.38,
      glass: "S-LAH66 (OHARA)",
      role: "Positive collector element of B1; forms the front positive zoom group with L1.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.3,
      fl: -13.86,
      glass: "TAFD35 / TAFD35L class (HOYA)",
      role: "Strongest negative element in variator group B2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.9,
      fl: -26.69,
      glass: "S-LAL8 (OHARA)",
      role: "Secondary negative element in B2; balances the strong diverging power of L3.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.95906,
      vd: 17.5,
      fl: 31.26,
      glass: "S-NPH3 (OHARA)",
      role: "Positive high-dispersion element completing the negative-negative-positive B2 variator triplet.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.76802,
      vd: 49.2,
      fl: 21.26,
      glass: "M-TAF101 (HOYA)",
      role: "Lead positive aspherical element of B3; primary spherical-aberration and coma correction near the stop.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 50.25,
      glass: "S-FSL5 (OHARA)",
      role: "Low-dispersion positive element in the B3 cemented doublet.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.5,
      fl: -22.43,
      glass: "TAFD40 (HOYA)",
      role: "Ultra-high-index negative chromatic partner to L7 in B3.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      fl: 29.75,
      glass: "M-LAC130 / MP-LAC130 (HOYA)",
      role: "Lead positive aspherical relay element of B4.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      fl: -36.27,
      glass: "S-TIH6 (OHARA)",
      role: "Negative high-dispersion element in the zero-air-gap B4 contact pair.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 29.51,
      glass: "S-FSL5 (OHARA)",
      role: "Low-dispersion positive element in the zero-air-gap B4 contact pair.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.2,
      fl: 147.8,
      glass: "S-LAH60V (OHARA)",
      role: "Weak positive front element of the negative B5 focus group.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.85135,
      vd: 40.1,
      fl: -20.77,
      glass: "M-TAFD305 (HOYA)",
      role: "Dominant negative aspherical element of B5; main moving focus element.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.91082,
      vd: 35.3,
      fl: 33.8,
      glass: "TAFD35 / TAFD35L class (HOYA)",
      role: "Single positive rear relay and field-flattener element of B6.",
    },
  ],

  surfaces: [
    { label: "1", R: 40.487, d: 1.1, nd: 1.92286, elemId: 1, sd: 20 },
    { label: "2", R: 31.162, d: 4.75, nd: 1.7725, elemId: 2, sd: 16.1 },
    { label: "3", R: 605.034, d: 0.97, nd: 1, elemId: 0, sd: 16.1 },
    { label: "4", R: -471.95, d: 0.75, nd: 1.91082, elemId: 3, sd: 9 },
    { label: "5", R: 12.977, d: 5.65, nd: 1, elemId: 0, sd: 9 },
    { label: "6", R: -29.035, d: 0.62, nd: 1.713, elemId: 4, sd: 9 },
    { label: "7", R: 55.687, d: 0.06, nd: 1, elemId: 0, sd: 10 },
    { label: "8", R: 32.928, d: 2.2, nd: 1.95906, elemId: 5, sd: 9.8 },
    { label: "9", R: -323.996, d: 22.01, nd: 1, elemId: 0, sd: 9.8 },
    { label: "11A", R: 17.819, d: 3.4, nd: 1.76802, elemId: 6, sd: 9.6 },
    { label: "12A", R: -179.132, d: 0.1, nd: 1, elemId: 0, sd: 9.6 },
    { label: "13", R: 12.449, d: 3.15, nd: 1.48749, elemId: 7, sd: 9.6 },
    { label: "14", R: 23.216, d: 0.55, nd: 2.00069, elemId: 8, sd: 9.6 },
    { label: "15", R: 11.276, d: 2.3, nd: 1, elemId: 0, sd: 8.2 },
    { label: "STO", R: 1e15, d: 3.27, nd: 1, elemId: 0, sd: 6.1 },
    { label: "17A", R: 16.452, d: 2.1, nd: 1.6935, elemId: 9, sd: 7.3 },
    { label: "18A", R: 76.944, d: 1.15, nd: 1, elemId: 0, sd: 7.3 },
    { label: "19", R: -96.18, d: 0.65, nd: 1.80518, elemId: 10, sd: 7.3 },
    { label: "20", R: 42.072, d: 0, nd: 1, elemId: 0, sd: 7.3 },
    { label: "21", R: 42.072, d: 3.05, nd: 1.48749, elemId: 11, sd: 8.2 },
    { label: "22", R: -21.34, d: 1.6, nd: 1, elemId: 0, sd: 8.2 },
    { label: "23", R: 29.406, d: 1.41, nd: 1.834, elemId: 12, sd: 7.8 },
    { label: "24", R: 37.777, d: 1.51, nd: 1, elemId: 0, sd: 7 },
    { label: "25A", R: -36.295, d: 0.7, nd: 1.85135, elemId: 13, sd: 7 },
    { label: "26A", R: 34.775, d: 4.49, nd: 1, elemId: 0, sd: 7.8 },
    { label: "27", R: 26.904, d: 3.5, nd: 1.91082, elemId: 14, sd: 13.2 },
    { label: "28", R: 200, d: 7.742205, nd: 1, elemId: 0, sd: 13.2 },
  ],

  asph: {
    "11A": { K: -1.39476e-3, A4: -1.91529e-5, A6: 3.48565e-9, A8: 0, A10: 0, A12: 0, A14: 0 },
    "12A": { K: 0, A4: 1.47762e-6, A6: 4.3006e-8, A8: 0, A10: 0, A12: 0, A14: 0 },
    "17A": { K: 0, A4: 1.01044e-5, A6: 5.60591e-7, A8: 8.60394e-9, A10: 0, A12: 0, A14: 0 },
    "18A": { K: 0, A4: 5.86535e-5, A6: 7.68295e-7, A8: 1.04881e-8, A10: 0, A12: 0, A14: 0 },
    "25A": { K: 0, A4: -1.08123e-4, A6: 3.83708e-6, A8: -3.59207e-8, A10: 0, A12: 0, A14: 0 },
    "26A": { K: 0, A4: -7.39157e-5, A6: 3.22046e-6, A8: -2.90647e-8, A10: 0, A12: 0, A14: 0 },
  },

  var: {
    "3": [
      [0.97, 0.97],
      [7.14, 7.14],
      [19.32, 19.32],
    ],
    "9": [
      [22.01, 22.01],
      [10.44, 10.44],
      [0.25, 0.25],
    ],
    STO: [
      [3.27, 3.27],
      [3.19, 3.19],
      [2.76, 2.76],
    ],
    "22": [
      [1.6, 4.531551],
      [3.74, 5.738717],
      [10.36, 16.1186],
    ],
    "26A": [
      [4.49, 1.558449],
      [4.8, 2.801283],
      [12.85, 7.0914],
    ],
    "28": [
      [7.742205, 7.742205],
      [12.572205, 12.572205],
      [13.852205, 13.852205],
    ],
  },
  varLabels: [
    ["3", "B1-B2"],
    ["9", "B2-B3"],
    ["STO", "STO-B4"],
    ["22", "B4-B5"],
    ["26A", "B5-B6"],
    ["28", "BF"],
  ],

  groups: [
    { text: "B1 +", fromSurface: "1", toSurface: "3" },
    { text: "B2 -", fromSurface: "4", toSurface: "9" },
    { text: "B3 +", fromSurface: "11A", toSurface: "15" },
    { text: "B4 +", fromSurface: "17A", toSurface: "22" },
    { text: "B5 - focus", fromSurface: "23", toSurface: "26A" },
    { text: "B6 +", fromSurface: "27", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
    { text: "CP", fromSurface: "19", toSurface: "22" },
  ],
} satisfies LensDataInput;

export default LENS_DATA;
