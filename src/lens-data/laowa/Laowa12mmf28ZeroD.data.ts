import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — LAOWA 12mm f/2.8 ZERO-D                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: CN205720849U / WO2017177665A1 Example 2.              ║
 * ║  Applicant: Anhui Changgeng Optical Technology Co., Ltd.            ║
 * ║  Inventor: Zhang Xiaohua.                                           ║
 * ║                                                                    ║
 * ║  Patent scale: f = 12.5 mm, Fno = 2.87, half-field = 60.1 deg.      ║
 * ║  Production metadata records the marketed 12 mm f/2.8 lens.         ║
 * ║                                                                    ║
 * ║  Optical form: fixed negative G1, moving negative G2, moving        ║
 * ║  positive G3. 16 elements / 10 air-spaced groups. Four aspherical   ║
 * ║  surfaces are carried by two physical glass elements, L2 and L16.   ║
 * ║                                                                    ║
 * ║  Focus: floating focus. The patent variable-gap table gives         ║
 * ║  infinity and a finite beta = 0.02x verification state. The         ║
 * ║  production lens reaches 0.2x at 0.18 m, but the patent does not    ║
 * ║  publish the full minimum-focus endpoint.                           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  The patent prescription does not publish clear-aperture or         ║
 * ║  semi-diameter values. The sd values below are renderer-safe        ║
 * ║  estimates constrained by the patent stop, paraxial ray heights,    ║
 * ║  edge thickness, element diameter ratio, conic limits, and          ║
 * ║  cross-gap sag intrusion. They are not patent-listed clear          ║
 * ║  apertures.                                                        ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ Glass elements and surfaces from front element to image plane  ║
 * ║    ✓ Aperture stop and patent-published variable focus gaps         ║
 * ║    ✗ No sensor cover glass, filters, or mechanical parts            ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "laowa-12mm-f28-zero-d",
  maker: "Laowa",
  name: "Laowa 12mm f/2.8 Zero-D",
  subtitle: "CN205720849U Example 2 — Anhui Changgeng Optical Technology / Zhang Xiaohua",
  specs: [
    "16 elements / 10 groups",
    "Design f = 12.4999 mm",
    "Design Fno = 2.87",
    "2ω = 120.2°",
    "4 aspherical surfaces / 2 aspherical elements",
    "3 ED-class elements",
  ],

  focalLengthMarketing: 12,
  focalLengthDesign: 12.49993,
  apertureMarketing: 2.8,
  apertureDesign: 2.87,
  imageFormat: "135-full-frame",
  patentYear: 2016,
  elementCount: 16,
  groupCount: 10,
  apertureBlades: 7,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.74916,
      vd: 54.67,
      fl: -77.64,
      glass: "749547 - high-index crown class (patent nd=1.74916, vd=54.67; unresolved)",
      apd: false,
      role: "First fixed front-group negative meniscus; starts the retrofocus field-angle conversion.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.46,
      fl: -43.85,
      glass: "BACD12 / S-BAL42 class (583/595)",
      apd: false,
      role: "Double-aspheric front-group element; principal front distortion and off-axis correction surface pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.61,
      fl: -29.13,
      glass: "FCD1 / H-FK61 / S-FPL51 class (497/816 ED)",
      apd: "inferred",
      apdNote: "ED-class assignment from nd=1.49700 and νd=81.61; patent does not name the melt.",
      role: "Low-dispersion negative element at the front of moving G2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 1.62588,
      vd: 35.74,
      fl: 22.07,
      glass: "E-F1 class (HOYA, 626/357)",
      apd: false,
      role: "Positive component of the first cemented correction doublet in moving G2.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 44.72,
      fl: -13.76,
      glass: "835447 - high-index lanthanum class (patent nd=1.83481, vd=44.72; unresolved)",
      apd: false,
      role: "High-index negative partner in the first G2 cemented doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.76182,
      vd: 26.61,
      fl: 13.56,
      glass: "FD140 class (HOYA, 762/266)",
      apd: false,
      role: "Strong positive dense-flint component in the second G2 cemented doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.88,
      fl: -26.22,
      glass: "N-SF66 (SCHOTT) / E-FDS1 class (923/209)",
      apd: false,
      role: "Very high-index dense-flint negative partner; strong chromatic leverage before the stop.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.61293,
      vd: 36.96,
      fl: 26.27,
      glass: "E-F3 class (HOYA, 613/370)",
      apd: false,
      role: "First positive component of the post-stop cemented triplet in G3.",
      cemented: "T1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.25,
      fl: -10.53,
      glass: "TAFD35L / TAFD35 class (HOYA, 911/353)",
      apd: false,
      role: "High-index negative core of the post-stop cemented triplet.",
      cemented: "T1",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.62004,
      vd: 36.3,
      fl: 15.22,
      glass: "E-F2 class (HOYA, 620/363)",
      apd: false,
      role: "Positive rear member of the post-stop triplet; helps re-converge the rear relay.",
      cemented: "T1",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.78472,
      vd: 25.72,
      fl: 15.97,
      glass: "FD110 class (HOYA, 785/257)",
      apd: false,
      role: "Positive dense-flint member of a weak negative correction doublet in G3.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 29.31,
      fl: -13.64,
      glass: "904293 - dense flint class (patent nd=1.90366, vd=29.31; unresolved)",
      apd: false,
      role: "Negative partner in the rear-group correction doublet; helps restrain Petzval and lateral color.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 26.37,
      glass: "FCD1 / H-FK61 / S-FPL51 class (497/816 ED)",
      apd: "inferred",
      apdNote: "ED-class assignment from nd=1.49700 and νd=81.61; patent does not name the melt.",
      role: "Thick low-dispersion positive lens in the rear group; distributes rear positive power.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.25,
      fl: -28.47,
      glass: "TAFD35L / TAFD35 class (HOYA, 911/353)",
      apd: false,
      role: "High-index negative member of the rear ED achromatizing doublet.",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 20.98,
      glass: "FCD1 / H-FK61 / S-FPL51 class (497/816 ED)",
      apd: "inferred",
      apdNote: "ED-class assignment from nd=1.49700 and νd=81.61; patent does not name the melt.",
      role: "Low-dispersion positive partner in the rear achromatizing doublet.",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.80781,
      vd: 40.97,
      fl: -63.3,
      glass: "D-ZLAF81-25 (CDGM)",
      apd: false,
      role: "Rear double-aspheric field corrector near the image plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 41.3919, d: 2.5, nd: 1.74916, elemId: 1, sd: 24.5 },
    { label: "2", R: 23.5576, d: 5.0658, nd: 1.0, elemId: 0, sd: 20.8 },
    { label: "3A", R: 51.6496, d: 2.5, nd: 1.58313, elemId: 2, sd: 18.0 },
    { label: "4A", R: 16.7988, d: 10.1074, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "5", R: 39.7839, d: 1.5, nd: 1.497, elemId: 3, sd: 10.5 },
    { label: "6", R: 10.4818, d: 5.1866, nd: 1.0, elemId: 0, sd: 8.7 },
    { label: "7", R: 1e15, d: 5.5315, nd: 1.62588, elemId: 4, sd: 10.0 },
    { label: "8", R: -13.8133, d: 1.0, nd: 1.83481, elemId: 5, sd: 9.4 },
    { label: "9", R: 70.345, d: 0.2, nd: 1.0, elemId: 0, sd: 9.4 },
    { label: "10", R: 32.3483, d: 4.8664, nd: 1.76182, elemId: 6, sd: 8.8 },
    { label: "11", R: -14.1918, d: 3.0, nd: 1.92286, elemId: 7, sd: 8.8 },
    { label: "12", R: -37.8109, d: 5.15, nd: 1.0, elemId: 0, sd: 8.8 },
    { label: "STO", R: 1e15, d: 2.6149, nd: 1.0, elemId: 0, sd: 6.588 },
    { label: "14", R: 24.8151, d: 3.3, nd: 1.61293, elemId: 8, sd: 8.0 },
    { label: "15", R: -43.5495, d: 1.2, nd: 1.91082, elemId: 9, sd: 8.8 },
    { label: "16", R: 12.4551, d: 4.5, nd: 1.62004, elemId: 10, sd: 8.2 },
    { label: "17", R: -33.5744, d: 0.15, nd: 1.0, elemId: 0, sd: 8.4 },
    { label: "18", R: -59.478, d: 4.2676, nd: 1.78472, elemId: 11, sd: 8.4 },
    { label: "19", R: -10.6778, d: 1.0, nd: 1.90366, elemId: 12, sd: 8.4 },
    { label: "20", R: -83.4618, d: 0.15, nd: 1.0, elemId: 0, sd: 9.2 },
    { label: "21", R: 34.0377, d: 6.6, nd: 1.497, elemId: 13, sd: 11.8 },
    { label: "22", R: -19.9445, d: 0.15, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "23", R: 77.2021, d: 1.0, nd: 1.91082, elemId: 14, sd: 12.0 },
    { label: "24", R: 19.2911, d: 8.7, nd: 1.497, elemId: 15, sd: 12.0 },
    { label: "25", R: -19.2911, d: 0.5, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "26A", R: -15.8048, d: 1.7, nd: 1.80781, elemId: 16, sd: 11.6 },
    { label: "27A", R: -23.9742, d: 38.8325, nd: 1.0, elemId: 0, sd: 11.8 },
  ],

  asph: {
    "3A": {
      K: 0.008,
      A4: 5.00208e-5,
      A6: -1.48696e-7,
      A8: 2.85395e-10,
      A10: -3.26206e-13,
      A12: 5.77197e-17,
      A14: 0,
    },
    "4A": {
      K: -0.5807,
      A4: 2.41854e-5,
      A6: 1.14397e-8,
      A8: -1.61462e-9,
      A10: 4.64271e-12,
      A12: -4.16529e-15,
      A14: 0,
    },
    "26A": {
      K: 0.4154,
      A4: 1.60608e-4,
      A6: -3.90127e-7,
      A8: 1.97932e-9,
      A10: -1.00952e-11,
      A12: 5.34069e-14,
      A14: 0,
    },
    "27A": {
      K: -11.4671,
      A4: 3.56937e-5,
      A6: 3.58224e-7,
      A8: -4.31857e-9,
      A10: 2.03624e-11,
      A12: -3.90187e-14,
      A14: 0,
    },
  },

  var: {
    "4A": [10.1074, 10.1118],
    "12": [5.15, 4.6207],
    "27A": [38.8325, 39.3529],
  },
  varLabels: [
    ["4A", "D4"],
    ["12", "D12"],
    ["27A", "LB"],
  ],

  groups: [
    { text: "G1 fixed", fromSurface: "1", toSurface: "4A" },
    { text: "G2 focus", fromSurface: "5", toSurface: "12" },
    { text: "G3 focus", fromSurface: "14", toSurface: "27A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "T1", fromSurface: "14", toSurface: "17" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
  ],

  closeFocusM: 0.18,
  focusDescription:
    "Floating focus: G1 fixed; G2 and G3 move. The patent variable-gaps encode infinity and a beta=0.02x finite-focus check, not the production 0.2x minimum-focus endpoint.",
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  scFill: 0.64,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
