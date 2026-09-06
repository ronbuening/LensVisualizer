import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON EF 35mm f/2 IS USM                                   ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 2015/0205081 A1, Example 1 / First Numerical Embodiment.     ║
 * ║  Production correlation: Canon EF 35mm f/2 IS USM (10 elements / 8      ║
 * ║  groups, one glass-molded aspherical element, image stabilization).      ║
 * ║  Scale: s = 1.000000; patent dimensions and asphere coefficients are     ║
 * ║  unscaled.                                                               ║
 * ║                                                                            ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION. The patent publishes L1       ║
 * ║  (S1-S4) fixed and L2 (S5-S19, including the stop) translating, but no   ║
 * ║  finite-focus spacing table. The close state is code-solved at Canon's   ║
 * ║  rounded 0.24 m MFD with the image plane fixed: L2 moves 8.223332 mm     ║
 * ║  objectward, d4 = 1.686667993 mm, BF = 46.523332007 mm, and              ║
 * ║  d4 + BF remains 48.21 mm. The solved |m| = 0.240099647, consistent      ║
 * ║  with Canon's rounded 0.24x specification.                               ║
 * ║                                                                            ║
 * ║  Semi-diameters are not published. They are modeling inferences derived  ║
 * ║  from the f/2.05 stop/pupil solution, exact meridional ray envelopes at  ║
 * ║  infinity and close focus, the published 21.64 mm image height, and Fig. ║
 * ║  1 optical rims (600-dpi review). Larger central/cemented rims retain    ║
 * ║  ray clearance; these source-unpublished apertures remain inferences.   ║
 * ║                                                                            ║
 * ║  Glass labels are conservative six-digit/code-family identifiers. The    ║
 * ║  patent gives nd/vd only and does not identify vendors; no nC/nF/ng or   ║
 * ║  dPgF values are authored because no vendor melt is proven.               ║
 * ║                                                                            ║
 * ║  No cover glass, filter, inactive dummy plane, flare cutter, folded path, ║
 * ║  or mechanical component is included.                                    ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-ef-35mm-f2-is-usm",
  maker: "Canon",
  name: "CANON EF 35mm f/2 IS USM",
  subtitle: "US 2015/0205081 A1 — Example 1; constrained close-focus reconstruction",
  specs: [
    "10 ELEMENTS / 8 GROUPS",
    "35mm f/2 (production)",
    "f = 34.49 mm / F2.05 (Example 1)",
    "2ω = 64.2°",
    "1 ASPHERICAL SURFACE",
    "IMAGE STABILIZATION",
  ],

  focalLengthMarketing: 35,
  focalLengthDesign: 34.5015,
  apertureMarketing: 2,
  apertureDesign: 2.05,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2015/0205081 A1",
  patentAuthors: ["Akira Mizuma"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2015,
  elementCount: 10,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: -113.401636,
      glass: "487702 (vendor unresolved)",
      role: "Front negative meniscus in fixed group L1.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 102.722803,
      glass: "773496 (vendor unresolved)",
      role: "Positive member completing fixed group L1.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.8,
      fl: -34.187654,
      glass: "581407-class (vendor unresolved)",
      role: "Front negative member of translating focus group L2.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 28.090931,
      glass: "883408 (vendor unresolved)",
      role: "Strong positive lens ahead of the negative cemented Lc pair.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 35.348452,
      glass: "883408 (vendor unresolved)",
      cemented: "Lc",
      role: "Positive front member of the patent's negative cemented lens Lc.",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.61293,
      vd: 37,
      fl: -25.127604,
      glass: "613370 (vendor unresolved)",
      cemented: "Lc",
      role: "Negative rear member of Lc; the cemented pair has net negative power.",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7 / Gis",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      fl: 64.771182,
      glass: "697555 (vendor unresolved)",
      role: "Positive image-stabilizing singlet Gis immediately behind the stop.",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.738,
      vd: 32.3,
      fl: -24.324857,
      glass: "738323 (vendor unresolved)",
      cemented: "J2",
      role: "Negative front member of the rear cemented pair.",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.59522,
      vd: 67.7,
      fl: 36.470531,
      glass: "595677 (vendor unresolved)",
      cemented: "J2",
      role: "Positive rear member of the rear cemented pair.",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: 52.756446,
      glass: "583594-class (vendor unresolved)",
      role: "Final positive lens; S18A is the sole aspherical surface.",
    },
  ],

  surfaces: [
    { label: "1", R: 107.841, d: 2, nd: 1.48749, elemId: 1, sd: 25.2 },
    { label: "2", R: 36.325, d: 3.37, nd: 1, elemId: 0, sd: 25.2 },
    { label: "3", R: 60.9, d: 4.53, nd: 1.7725, elemId: 2, sd: 21 },
    { label: "4", R: 253.393, d: 9.91, nd: 1, elemId: 0, sd: 21 },
    { label: "5", R: 478.362, d: 1.5, nd: 1.58144, elemId: 3, sd: 15.2 },
    { label: "6", R: 19.063, d: 9.05, nd: 1, elemId: 0, sd: 12.6 },
    { label: "7", R: 32.422, d: 4.55, nd: 1.883, elemId: 4, sd: 14.1 },
    { label: "8", R: -98.623, d: 3.98, nd: 1, elemId: 0, sd: 14.1 },
    { label: "9", R: -54.46, d: 3.64, nd: 1.883, elemId: 5, sd: 13 },
    { label: "10", R: -20.463, d: 1, nd: 1.61293, elemId: 6, sd: 13 },
    { label: "11", R: 63.422, d: 3.24, nd: 1, elemId: 0, sd: 11.2 },
    { label: "STO", R: 1e15, d: 2.68, nd: 1, elemId: 0, sd: 9.767426625218043 },
    { label: "13", R: 69.18, d: 2.29, nd: 1.6968, elemId: 7, sd: 10.5 },
    { label: "14", R: -128.073, d: 5.46, nd: 1, elemId: 0, sd: 10.5 },
    { label: "15", R: -15.746, d: 0.95, nd: 1.738, elemId: 8, sd: 10.5 },
    { label: "16", R: -131.434, d: 4.37, nd: 1.59522, elemId: 9, sd: 12.2 },
    { label: "17", R: -18.862, d: 0.2, nd: 1, elemId: 0, sd: 12.4 },
    { label: "18A", R: -91.82, d: 3.48, nd: 1.58313, elemId: 10, sd: 11.9 },
    { label: "19", R: -23.365, d: 38.3, nd: 1, elemId: 0, sd: 11.9 },
  ],

  asph: {
    "18A": {
      K: 0,
      A4: -1.49529e-5,
      A6: 4.91763e-9,
      A8: -4.11063e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "4": [9.91, 1.6866679934934066],
    "19": [38.3, 46.52333200650659],
  },
  varLabels: [
    ["4", "D4"],
    ["19", "BF"],
  ],

  groups: [
    { text: "L1 (FIXED)", fromSurface: "1", toSurface: "4" },
    { text: "L2 (FOCUS)", fromSurface: "5", toSurface: "19" },
  ],
  doublets: [
    { text: "Lc", fromSurface: "9", toSurface: "11" },
    { text: "Gis", fromSurface: "13", toSurface: "14" },
  ],

  closeFocusM: 0.24,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: L1 (S1-S4) is fixed; L2 (S5-S19, including STO) translates 8.223332 mm objectward at 0.24 m. D4 contracts from 9.91 to 1.686668 mm while BF expands from 38.30 to 46.523332 mm, preserving D4 + BF = 48.21 mm. The state is solved from Canon's rounded 0.24 m MFD and cross-checks at |m| = 0.24010.",

  nominalFno: 2.05,
  fstopSeries: [2.05, 2.8, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 8,
  maxFstop: 22,

  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
