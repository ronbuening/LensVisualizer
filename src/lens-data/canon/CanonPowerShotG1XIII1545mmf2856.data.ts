import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  CANON POWERSHOT G1 X MARK III 15-45mm f/2.8-5.6                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2018-106021 A, Numerical Example 1 (Canon).       ║
 * ║  Compact negative-lead APS-C fixed-camera zoom.                    ║
 * ║  9 physical optical elements / 8 air-separated element groups.      ║
 * ║  4 zoom groups; 7 aspherical surfaces on 4 elements.                ║
 * ║  Focus: negative inner focus element Fa moves imageward to close.   ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: d6, d7/STO, d13, d17, and folded BFD d19.      ║
 * ║  The patent publishes infinity-focus zoom spacings only; close      ║
 * ║  focus spacings are therefore intentionally duplicated from the      ║
 * ║  infinity values.                                                   ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                               ║
 * ║    Patent surfaces 20 and 21 are the sensor faceplate/cover glass,  ║
 * ║    not lens elements. They are excluded from the surfaces array.     ║
 * ║    Their optical path is folded into surface 19A BFD as:            ║
 * ║      d19 + 1.33 / 1.51633 + 0.50 mm.                                ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    The patent does not publish clear semi-diameters. Values below   ║
 * ║    are estimated from combined marginal/chief-ray clearance, then    ║
 * ║    constrained by edge thickness, sd/|R|, and cross-gap sag checks. ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-powershot-g1x-iii-15-45-f28-56",
  maker: "Canon",
  name: "CANON ZOOM LENS 15-45mm f/2.8-5.6 (PowerShot G1 X Mark III)",
  subtitle: "JP 2018-106021 A Example 1 — Canon / Ito Daisuke",
  specs: [
    "9 elements / 8 groups",
    "15-45mm f/2.8-5.6",
    "Patent f = 15.45-43.70mm",
    "2.83× zoom",
    "7 aspherical surfaces",
  ],

  focalLengthMarketing: [15, 45],
  focalLengthDesign: [15.45, 43.7],
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "aps-c",
  patentNumber: "JP 2018-106021 A",
  patentAuthors: ["Daisuke Ito"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2018,
  elementCount: 9,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "N1",
      label: "N1 front negative",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.3,
      fl: -20.8,
      glass: "S-LAH98 (OHARA)",
      role: "High-index front negative element in the negative lead group.",
    },
    {
      id: 2,
      name: "N2",
      label: "N2 aspherical negative",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58254,
      vd: 59.4,
      fl: -95.0,
      glass: "583594 barium-crown class (S-BAL42 / M-BACD12 class; not exact)",
      role: "Smaller-diameter molded aspherical corrector in L1.",
    },
    {
      id: 3,
      name: "N3",
      label: "N3 positive corrector",
      type: "Positive Meniscus",
      nd: 1.95906,
      vd: 17.5,
      fl: 43.9,
      glass: "S-NPH3 (OHARA)",
      role: "High-dispersion positive element completing the negative-negative-positive L1 group.",
    },
    {
      id: 4,
      name: "P1",
      label: "P1 main positive asphere",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      fl: 18.6,
      glass: "MC-LAC130 / M-LAC130 class (HOYA)",
      role: "Main post-stop positive element; primary spherical and coma correction.",
    },
    {
      id: 5,
      name: "P2",
      label: "P2 cemented positive",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.1,
      fl: 8.3,
      glass: "S-LAH99 (OHARA)",
      role: "Ultra-high-index positive member of the L2 cemented doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "P3",
      label: "P3 cemented negative",
      type: "Biconcave Negative",
      nd: 1.85478,
      vd: 24.8,
      fl: -6.1,
      glass: "S-NBH56 (OHARA)",
      role: "Negative high-index flint member of the L2 cemented doublet.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L3p",
      label: "L3 positive asphere",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.76802,
      vd: 49.2,
      fl: 31.1,
      glass: "M-TAF101 (HOYA)",
      role: "Positive element of weak L3 group; rear asphere trims residual field errors.",
    },
    {
      id: 8,
      name: "Fa",
      label: "Fa negative focus lens",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      fl: -44.7,
      glass: "NBFD15 (HOYA)",
      role: "Negative inner-focus element; moves imageward for close focus.",
    },
    {
      id: 9,
      name: "GRP",
      label: "GRP resin rear meniscus",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.5316,
      vd: 55.8,
      fl: 50.3,
      glass: "Optical resin / polymer (patent GRP)",
      role: "Positive rear resin meniscus for telecentricity, reduced rear weight, and ghost suppression.",
    },
  ],

  surfaces: [
    { label: "1", R: 72.385, d: 0.85, nd: 1.95375, elemId: 1, sd: 13.0 },
    { label: "2", R: 15.467, d: 4.37, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "3A", R: 69.59, d: 1.4, nd: 1.58254, elemId: 2, sd: 10.5 },
    { label: "4A", R: 30.598, d: 0.15, nd: 1.0, elemId: 0, sd: 11.6 },
    { label: "5", R: 22.015, d: 2.13, nd: 1.95906, elemId: 3, sd: 11.8 },
    { label: "6", R: 43.965, d: 20.75, nd: 1.0, elemId: 0, sd: 11.8 },

    { label: "STO", R: 1e15, d: 1.87, nd: 1.0, elemId: 0, sd: 5.4 },

    { label: "8A", R: 13.218, d: 2.67, nd: 1.6935, elemId: 4, sd: 6.7 },
    { label: "9A", R: -451.693, d: 0.85, nd: 1.0, elemId: 0, sd: 6.7 },
    { label: "10", R: 19.036, d: 2.88, nd: 2.001, elemId: 5, sd: 6.25 },
    { label: "11", R: -13.619, d: 0.6, nd: 1.85478, elemId: 6, sd: 6.25 },
    { label: "12", R: 8.657, d: 2.0, nd: 1.0, elemId: 0, sd: 6.25 },

    { label: "13", R: 1e15, d: 5.35, nd: 1.0, elemId: 0, sd: 5.25 },

    { label: "14", R: 432.415, d: 2.05, nd: 1.76802, elemId: 7, sd: 8.95 },
    { label: "15A", R: -25.201, d: 2.65, nd: 1.0, elemId: 0, sd: 8.95 },
    { label: "16", R: -24.719, d: 0.7, nd: 1.8061, elemId: 8, sd: 9.6 },
    { label: "17", R: -79.764, d: 5.42, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "18A", R: -71.0, d: 3.6, nd: 1.5316, elemId: 9, sd: 14.2 },
    { label: "19A", R: -19.774, d: 9.307118, nd: 1.0, elemId: 0, sd: 14.2 },
  ],

  asph: {
    "3A": {
      K: 0,
      A4: -2.29993e-5,
      A6: -2.10057e-7,
      A8: 1.0597e-9,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "4A": {
      K: 0,
      A4: -3.26997e-5,
      A6: -2.89658e-7,
      A8: 1.75014e-9,
      A10: -2.31976e-12,
      A12: 0,
      A14: 0,
    },
    "8A": {
      K: 0,
      A4: -6.50277e-5,
      A6: -5.56369e-7,
      A8: -4.17807e-9,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "9A": {
      K: 0,
      A4: 2.15406e-5,
      A6: -2.86214e-7,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: 2.53751e-6,
      A6: -4.54443e-8,
      A8: -1.37807e-10,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "18A": {
      K: 0,
      A4: -2.39006e-5,
      A6: 1.71586e-8,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "19A": {
      K: 0,
      A4: 3.74727e-5,
      A6: -1.29539e-7,
      A8: 3.60781e-10,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "6": [
      [20.75, 20.75],
      [7.77, 7.77],
      [2.12, 2.12],
    ],
    STO: [
      [1.87, 1.87],
      [1.94, 1.94],
      [0.1, 0.1],
    ],
    "13": [
      [5.35, 5.35],
      [6.98, 6.98],
      [10.31, 10.31],
    ],
    "17": [
      [5.42, 5.42],
      [15.57, 15.57],
      [31.32, 31.32],
    ],
    "19A": [
      [9.307118, 9.307118],
      [7.767118, 7.767118],
      [4.707118, 4.707118],
    ],
  },

  varLabels: [
    ["6", "L1 → SP1"],
    ["STO", "SP1 → L2"],
    ["13", "SP2 → L3"],
    ["17", "L3 → L4"],
    ["19A", "folded BFD"],
  ],

  zoomPositions: [15.45, 26.05, 43.7],
  zoomStep: 0.004,
  zoomLabels: ["15mm", "45mm"],

  groups: [
    { text: "L1 / LN", fromSurface: "1", toSurface: "6" },
    { text: "L2 / LP", fromSurface: "8A", toSurface: "12" },
    { text: "L3", fromSurface: "14", toSurface: "17" },
    { text: "L4 / LRP", fromSurface: "18A", toSurface: "19A" },
  ],

  doublets: [{ text: "D1", fromSurface: "10", toSurface: "12" }],

  closeFocusM: 0.1,
  focusDescription:
    "Patent-described inner focus by negative Fa moving imageward; close-focus spacings are not published, so the data file preserves the infinity-focus zoom states.",

  nominalFno: [2.8, 4, 5.6],
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],
  maxFstop: 16,

  scFill: 0.56,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
