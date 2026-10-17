import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — Canon EF 11-24mm f/4L USM                            ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2015/0146085 A1, Numerical Example 1 (Canon/Hatada).  ║
 * ║  Three-powered-unit negative-positive-positive retrofocus zoom.         ║
 * ║  16 elements / 11 air-spaced groups, 4 aspherical surfaces.            ║
 * ║  Focus: complete second powered unit L2 (surfaces 15-20).               ║
 * ║                                                                          ║
 * ║  Zoom variable gaps: D12, D13, D14, D20, and BFD/D30.                  ║
 * ║  The patent publishes infinity-focus zoom spacings only. Close-focus    ║
 * ║  entries therefore repeat the infinity values; no focus travel is       ║
 * ║  invented. closeFocusM stores Canon's 0.28 m catalog minimum only.      ║
 * ║                                                                          ║
 * ║  NOTE ON SCALING: none. The patent's 11.33-23.28 mm prescription is     ║
 * ║  preserved directly rather than forced to the marketed 11-24 mm range. ║
 * ║                                                                          ║
 * ║  NOTE ON SEMI-DIAMETERS: SDs are one-half of the patent's listed        ║
 * ║  effective diameters. Surface 2 reaches a verified 71.27° spherical     ║
 * ║  rim slope, so maxRimAngleDeg is raised to 72°. The S8→S9 clear-edge   ║
 * ║  sag intrusion is 94.55% of the 7.54 mm axial gap; gapSagFrac = 0.96   ║
 * ║  preserves the patent aperture with 0.411 mm signed edge clearance.     ║
 * ║                                                                          ║
 * ║  IMPORTANT: This file describes only the optical prescription:          ║
 * ║    ✓ Glass elements, refracting surfaces, stops, and zoom air gaps      ║
 * ║    ✗ No sensor cover glass, filters, diaphragm mechanics, or barrel     ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-11-24-f4l-usm",
  maker: "Canon",
  name: "CANON EF 11-24mm f/4 L USM",
  subtitle: "US 2015/0146085 A1 Numerical Example 1 — Canon / Hatada",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "16 elements / 11 groups",
      "11-24 mm f/4 marketed; 11.33-23.28 mm F/4.12 patent design",
      "4 aspherical elements / 4 aspherical surfaces",
      "1 Super UD-class + 1 UD-class position (inferred from catalog coordinates)",
      "Rear focus: complete second powered unit",
    ],
    elementCount: 16,
    groupCount: 11,
    focalLengthMm: { marketing: [11, 24], design: [11.328513, 23.281475] },
    fNumber: { marketing: 4, design: 4.12 },
  },

  source: {
    patentNumber: "US 2015/0146085 A1",
    patentYear: 2015,
    authors: ["Takahiro Hatada"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -64.308486,
      glass: "S-LAH66 (OHARA special-order catalog; coordinate match, production melt not disclosed)",
      role: "Large front negative meniscus; establishes the negative lead and carries the polished front asphere.",
      dPgF: -0.0092,
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.58443,
      vd: 59.4,
      focalLengthMm: -69.589879,
      glass: "S-BAL42 (OHARA catalog equivalent for patent coordinate; production supplier unspecified)",
      role: "Second negative meniscus; its object-side surface and the rear surface of E1 form the patent's negative air lens.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.85,
      vd: 40.3,
      focalLengthMm: -110.004777,
      glass: "M-TAFD305 (HOYA catalog equivalent for patent coordinate; production supplier unspecified)",
      role: "Third consecutive negative meniscus; completes the patent's claimed front three-negative sequence.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.59522,
      vd: 67.7,
      focalLengthMm: -44.025018,
      glass: "S-FPM2 (OHARA; coordinate match, production melt not disclosed)",
      role: "Lower-dispersion negative member that extends the front unit without being one of Canon's two designated UD positions.",
      dPgF: 0.0123,
      nC: 1.59255,
      nF: 1.60134,
      ng: 1.60612,
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.43875,
      vd: 94.9,
      focalLengthMm: -79.442153,
      glass: "S-FPL53 (OHARA; Super UD-class position inferred from Canon's construction diagram)",
      apd: "inferred",
      apdNote: "OHARA coordinate match; dPgF = +0.0461. Canon does not disclose the production melt by element number.",
      role: "Extreme low-dispersion negative front-unit element; supplies strong secondary-spectrum leverage against E6.",
      dPgF: 0.0461,
      nC: 1.43733,
      nF: 1.44195,
      ng: 1.44442,
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.72047,
      vd: 34.7,
      focalLengthMm: 42.103264,
      glass: "S-NBH8 (OHARA; coordinate match, production melt not disclosed)",
      role: "Positive anomalous-flint member closing L1; partially offsets front-unit power and pairs dispersively with E5.",
      dPgF: -0.0019,
      nC: 1.71437,
      nF: 1.73512,
      ng: 1.74723,
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.1,
      focalLengthMm: -68.419663,
      glass: "S-LAH99 (OHARA; coordinate match, production melt not disclosed)",
      role: "Very-high-index negative front component of the positive L2 focusing doublet.",
      cemented: "D1",
      dPgF: 0.0054,
      nC: 1.99105,
      nF: 2.0254,
      ng: 2.046,
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.57501,
      vd: 41.5,
      focalLengthMm: 19.76264,
      glass: "S-TIL27 (OHARA; coordinate match, production melt not disclosed)",
      role: "Strong positive rear component; the E7-E8 cemented doublet has a verified +27.927 mm net focal length.",
      cemented: "D1",
      dPgF: 0.0024,
      nC: 1.5709,
      nF: 1.58476,
      ng: 1.59275,
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.3,
      focalLengthMm: -20.752689,
      glass: "TAFD35 (HOYA; exact coordinate match, production melt not disclosed)",
      role: "High-index negative front component of L2's second cemented doublet.",
      cemented: "D2",
      dPgF: -0.0027,
      nC: 1.90323,
      nF: 1.92907,
      ng: 1.94412,
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 48.009489,
      glass: "S-TIH6 (OHARA; coordinate match, production melt not disclosed)",
      role: "Positive dense-flint rear component; the E9-E10 cemented pair remains net negative at -37.795 mm.",
      cemented: "D2",
      dPgF: 0.0158,
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -31.542486,
      glass: "S-LAH58 (OHARA; coordinate match, production melt not disclosed)",
      role: "Negative front component of the L3 cemented triplet.",
      cemented: "T1",
      dPgF: -0.0088,
      nC: 1.87656,
      nF: 1.89822,
      ng: 1.9105,
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.4,
      focalLengthMm: 24.361899,
      glass: "S-NSL36 (OHARA; coordinate match, production melt not disclosed)",
      role: "Positive crown middle component of the L3 triplet.",
      cemented: "T1",
      dPgF: -0.0002,
      nC: 1.51444,
      nF: 1.52431,
      ng: 1.5298,
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -63.632634,
      glass: "S-LAH55V (OHARA; coordinate match, production melt not disclosed)",
      role: "Negative rear component; the complete E11-E13 triplet is weakly negative in isolation.",
      cemented: "T1",
      dPgF: -0.0075,
      nC: 1.82898,
      nF: 1.84852,
      ng: 1.85956,
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 26.015283,
      glass: "S-FPL51 (OHARA; UD-class position inferred from Canon's construction diagram)",
      apd: "inferred",
      apdNote: "OHARA coordinate match; dPgF = +0.0280. Canon does not disclose the production melt by element number.",
      role: "Strong positive low-dispersion singlet and the principal positive standalone power in L3.",
      dPgF: 0.028,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -17.296271,
      glass: "S-LAH58 (OHARA; coordinate match, production melt not disclosed)",
      role: "Strong negative front component of the final cemented doublet.",
      cemented: "D3",
      dPgF: -0.0088,
      nC: 1.87656,
      nF: 1.89822,
      ng: 1.9105,
    },
    {
      id: 16,
      name: "E16",
      label: "Element 16",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: 24.477842,
      glass: "S-BAL42 (OHARA; coordinate match, production melt not disclosed)",
      role: "Positive crown rear component carrying the final image-side asphere.",
      cemented: "D3",
      dPgF: -0.002,
      nC: 1.58014,
      nF: 1.58996,
      ng: 1.5953,
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 100.402,
      d: 3.1,
      sd: 41.995,
      medium: 1,
      asphere: {
        K: 0,
        A4: 5.07039e-6,
        A6: -3.66524e-9,
        A8: 2.14684e-12,
        A10: -1.59746e-16,
        A12: -3.49877e-19,
        A14: 1.41029e-22,
      },
    },
    { label: "2", R: 32.787, d: 10.7, sd: 31.05 },
    { label: "3", R: 42.207, d: 3.2, sd: 29.835, medium: 2 },
    {
      label: "4A",
      R: 20.133,
      d: 10.96,
      sd: 24.805,
      asphere: { K: -3.08703, A4: 3.79875e-5, A6: -6.27286e-8, A8: 1.2997e-11, A10: 1.49707e-14, A12: 0, A14: 0 },
    },
    { label: "5", R: 100.037, d: 2.6, sd: 23.045, medium: 3 },
    {
      label: "6A",
      R: 47.753,
      d: 5.77,
      sd: 18.19,
      asphere: { K: 0, A4: 1.15171e-5, A6: -2.29358e-9, A8: 2.08815e-10, A10: -7.57344e-13, A12: 1.20672e-15, A14: 0 },
    },
    { label: "7", R: 313.541, d: 1.3, sd: 17.92, medium: 4 },
    { label: "8", R: 24.146, d: 7.54, sd: 15.475 },
    { label: "9", R: -76.811, d: 1.15, sd: 15.42, medium: 5 },
    { label: "10", R: 64.103, d: 0.89, sd: 15.23 },
    { label: "11", R: 39.327, d: 6.4, sd: 15.335, medium: 6 },
    { label: "12", R: -123.615, sd: 14.985 },
    { label: "FP1", R: "flat", sd: 8.86 },
    // US 2015/0146085 A1, Numerical Example 1 surface table, stop row: printed effective
    // diameter 18.91 mm at the stop.
    { label: "STO", R: "flat" },
    { label: "15", R: 20.914, d: 1.1, sd: 10.055, medium: 7 },
    { label: "16", R: 15.6, d: 7.47, sd: 9.69, medium: 8 },
    { label: "17", R: -34.531, d: 2.04, sd: 9.565 },
    { label: "18", R: -26.292, d: 0.9, sd: 9.12, medium: 9 },
    { label: "19", R: 68.346, d: 2.28, sd: 9.285, medium: 10 },
    { label: "20", R: -87.663, sd: 9.36 },
    { label: "FP2", R: "flat", d: 0.0, sd: 9.49 },
    { label: "22", R: 29.727, d: 0.95, sd: 9.535, medium: 11 },
    { label: "23", R: 14.164, d: 6.33, sd: 9.15, medium: 12 },
    { label: "24", R: -97.092, d: 0.95, sd: 9.2, medium: 13 },
    { label: "25", R: 117.819, d: 0.15, sd: 9.26 },
    { label: "26", R: 22.677, d: 6.42, sd: 9.53, medium: 14 },
    { label: "27", R: -27.253, d: 0.2, sd: 9.82 },
    { label: "28", R: -210.616, d: 1.1, sd: 9.795, medium: 15 },
    { label: "29", R: 16.507, d: 7.0, sd: 9.86, medium: 16 },
    {
      label: "30A",
      R: -89.025,
      sd: 10.445,
      asphere: { K: 0, A4: 1.96961e-5, A6: 3.33943e-8, A8: 2.90343e-11, A10: -2.002e-13, A12: 7.23046e-15, A14: 0 },
    },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 11.33, label: "Wide" },
      { focalLengthMm: 17.32 },
      { focalLengthMm: 23.28, label: "Tele" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.28,
    description:
      "Rear focusing by moving the complete second powered unit L2 (surfaces 15-20). The patent publishes infinity-focus zoom spacings only; the data file does not synthesize finite-focus travel. Canon specifies 0.32 m MFD at 11 mm and 0.28 m at 24 mm.",
  },

  gaps: {
    "12": {
      label: "D12 / L1-FP1",
      values: [
        [26.47, 26.47],
        [7.95, 7.95],
        [0.51, 0.51],
      ],
    },
    FP1: {
      label: "D13 / FP1-STO",
      values: [
        [9.51, 9.51],
        [6.65, 6.65],
        [3.8, 3.8],
      ],
    },
    STO: {
      label: "D14 / STO-L2",
      values: [
        [1.74, 1.74],
        [1.51, 1.51],
        [1.29, 1.29],
      ],
    },
    "20": {
      label: "D20 / L2-L3",
      values: [
        [3.29, 3.29],
        [3.52, 3.52],
        [3.74, 3.74],
      ],
    },
    "30A": {
      label: "BFD",
      values: [
        [39.88, 39.88],
        [52.64, 52.64],
        [65.4, 65.4],
      ],
    },
  },

  aperture: {
    nominalFNumber: 4.12,
    fStops: [4.12, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 9,
    bladeRoundedness: 1,
  },

  groups: [
    { text: "L1 -", fromSurface: "1A", toSurface: "12" },
    { text: "L2 + / FOCUS", fromSurface: "15", toSurface: "20" },
    { text: "L3 + / STO TRACKING", fromSurface: "22", toSurface: "30A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "15", toSurface: "17" },
    { text: "D2", fromSurface: "18", toSurface: "20" },
    { text: "T1", fromSurface: "22", toSurface: "25" },
    { text: "D3", fromSurface: "28", toSurface: "30A" },
  ],

  layout: { scFill: 0.68, yScFill: 0.82 },

  checks: { gapSagFrac: 0.96, maxRimAngleDeg: 72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
