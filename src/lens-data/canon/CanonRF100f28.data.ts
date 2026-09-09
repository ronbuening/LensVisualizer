import type { LensDataInput } from "../../types/optics.js";

/**
 * JP2021-047297A Numerical Example 1: 17 elements, 13 components.
 * Source effective diameters are halved for optical semi-diameters.
 * L2 and L4 focus toward the image; this models the normal SA setting.
 * Paragraph 52 defines BF as air-equivalent. No cover glass or filters included.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf100f28-macro",
  maker: "Canon",
  name: "CANON RF 100mm f/2.8 L MACRO IS USM",
  subtitle: "JP2021-47297A EXAMPLE 1 — CANON / TAKI, MORI, NAKAHARA",
  specs: ["17 ELEMENTS / 13 GROUPS", "f ≈ 100.8 mm", "F/2.92", "2ω ≈ 24.2°", "ALL SPHERICAL", "NORMAL SA SETTING"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 100,
  focalLengthDesign: 100.81,
  apertureMarketing: 2.8,
  apertureDesign: 2.92,
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2021-047297 A",
  patentAuthors: ["Keiko Taki", "Takeo Mori", "Makoto Nakahara"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2021,
  elementCount: 17,
  groupCount: 13,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      fl: -33.78,
      glass: "S-LAH55V — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Front negative element of cemented doublet D1",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.76182,
      vd: 26.5,
      fl: 41.88,
      glass: "S-TIH14 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Rear positive element of cemented doublet D1",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      fl: 127.06,
      glass: "S-LAH55V — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Positive singlet in fixed front assembly L1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 72.24,
      glass: "S-FSL5 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Low-dispersion positive singlet in L1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.8,
      fl: -40.65,
      glass: "S-TIH53 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "High-dispersion negative singlet in L1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.1,
      fl: -87.23,
      glass: "S-LAH99 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Front negative element of cemented doublet D2",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 43.0,
      glass: "S-LAH66 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Rear positive element of D2; published component focal length +85.34 mm",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      fl: 68.41,
      glass: "S-LAL18 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Last positive singlet before the fixed stop",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.734,
      vd: 51.5,
      fl: -61.88,
      glass: "S-LAL59 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative singlet in moving focus group L2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      fl: -37.33,
      glass: "S-LAH66 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Front negative element of cemented doublet D3 in L2",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 18.0,
      fl: 61.7,
      glass: "FDS18 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Rear positive element of cemented doublet D3 in L2",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Plano-Convex Positive",
      nd: 1.76385,
      vd: 48.5,
      fl: 57.69,
      glass: "S-LAH96 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Plano-convex singlet in fixed group L3",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      fl: 37.59,
      glass: "S-LAL18 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Front positive element of cemented doublet D4",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 2.00069,
      vd: 25.5,
      fl: -58.94,
      glass: "TAFD40 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Rear negative element of cemented doublet D4",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15 (L41)",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.7,
      fl: -50.02,
      glass: "S-LAH55V — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative L41 in moving group L4; 19.35 mm air gap to L42",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16 (L42)",
      type: "Positive Meniscus",
      nd: 1.6727,
      vd: 32.1,
      fl: 106.82,
      glass: "S-TIM25 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Positive L42 in moving group L4; published group focal length −163.75 mm",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 1.58913,
      vd: 61.1,
      fl: -76.25,
      glass: "S-BAL35 — compatible catalog counterpart; patent identity unspecified",
      apd: false,
      role: "Negative singlet forming fixed rear group L5",
    },
  ],

  /* ── Surface prescription ──
   *  All surfaces are spherical (no asph markers in patent).
   *  Semi-diameters are half the published effective diameters, except S17/S18
   *  limited to 13.25 mm for the renderer cross-gap clearance margin
   *  (source 13.49/13.46 mm). No prescription radius or air gap is changed.
   *  Variable gaps: d_STO, d20, d25, d29 (floating focus, 4 variable gaps).
   */
  surfaces: [
    /* ──── Group L1: fixed front positive group (surfaces 1–14) ──── */

    // D1 cemented doublet (L1 + L2)
    { label: "1", R: -94.26, d: 1.74, nd: 1.83481, elemId: 1, sd: 18.295 },
    { label: "2", R: 40.575, d: 7.43, nd: 1.76182, elemId: 2, sd: 18.12 },
    { label: "3", R: -137.454, d: 0.2, nd: 1.0, elemId: 0, sd: 18.12 },

    // L3 singlet
    { label: "4", R: 124.812, d: 2.98, nd: 1.83481, elemId: 3, sd: 18.375 },
    { label: "5", R: -698.851, d: 0.2, nd: 1.0, elemId: 0, sd: 18.35 },

    // L4 singlet (low-dispersion positive)
    { label: "6", R: 57.156, d: 6.6, nd: 1.48749, elemId: 4, sd: 18.165 },
    { label: "7", R: -88.275, d: 0.69, nd: 1.0, elemId: 0, sd: 17.9 },

    // L5 singlet (dense flint negative)
    { label: "8", R: -105.533, d: 1.65, nd: 1.84666, elemId: 5, sd: 17.54 },
    { label: "9", R: 51.436, d: 2.28, nd: 1.0, elemId: 0, sd: 16.975 },

    // D2 cemented doublet (L6 + L7)
    { label: "10", R: 74.803, d: 1.62, nd: 2.001, elemId: 6, sd: 18 },
    { label: "11", R: 39.852, d: 6.53, nd: 1.7725, elemId: 7, sd: 18 },
    { label: "12", R: -185.173, d: 0.53, nd: 1.0, elemId: 0, sd: 18 },

    // L8 singlet (last element before stop)
    { label: "13", R: 56.56, d: 4.3, nd: 1.72916, elemId: 8, sd: 16.65 },
    { label: "14", R: -409.038, d: 2.55, nd: 1.0, elemId: 0, sd: 16.395 },

    /* ──── Aperture stop ──── */
    { label: "STO", R: 1e15, d: 3.1, nd: 1.0, elemId: 0, sd: 15.405 },

    /* ──── Group L2: 1st focus group / SA control, negative (surfaces 16–20) ──── */

    // L9 singlet (negative meniscus)
    { label: "16", R: 312.322, d: 1.37, nd: 1.734, elemId: 9, sd: 14.215 },
    { label: "17", R: 39.579, d: 3.71, nd: 1.0, elemId: 0, sd: 13.25 },

    // D3 cemented doublet (L10 + L11)
    { label: "18", R: -83.866, d: 1.23, nd: 1.7725, elemId: 10, sd: 13.25 },
    { label: "19", R: 44.224, d: 2.95, nd: 1.94595, elemId: 11, sd: 13.51 },
    { label: "20", R: 176.627, d: 27.41, nd: 1.0, elemId: 0, sd: 13.485 },

    /* ──── Group L3: fixed intermediate positive group (surfaces 21–25) ──── */

    // L12 singlet (plano-convex)
    { label: "21", R: 1e15, d: 4.0, nd: 1.76385, elemId: 12, sd: 15.55 },
    { label: "22", R: -44.068, d: 0.2, nd: 1.0, elemId: 0, sd: 15.55 },

    // D4 cemented doublet (L13 + L14)
    { label: "23", R: 96.46, d: 6.22, nd: 1.72916, elemId: 13, sd: 14.565 },
    { label: "24", R: -37.249, d: 1.37, nd: 2.00069, elemId: 14, sd: 14.46 },
    { label: "25", R: -102.953, d: 4.17, nd: 1.0, elemId: 0, sd: 14.52 },

    /* ──── Group L4: 2nd focus group / SA control, negative (surfaces 26–29) ──── */

    // L15 singlet (L41 in patent)
    { label: "26", R: -51.432, d: 1.21, nd: 1.83481, elemId: 15, sd: 14.17 },
    { label: "27", R: 224.397, d: 19.35, nd: 1.0, elemId: 0, sd: 14.43 },

    // L16 singlet (L42 in patent)
    { label: "28", R: -76.056, d: 3.76, nd: 1.6727, elemId: 16, sd: 17.605 },
    { label: "29", R: -37.684, d: 26.63, nd: 1.0, elemId: 0, sd: 17.88 },

    /* ──── Group L5: fixed rear field-flattening group (surfaces 30–31) ──── */

    // L17 singlet
    { label: "30", R: -53.234, d: 1.73, nd: 1.58913, elemId: 17, sd: 17.815 },
    { label: "31", R: 291.242, d: 14.66, nd: 1.0, elemId: 0, sd: 18.505 }, // BFD to image plane
  ],

  /* ── Aspherical coefficients ──
   *  Patent Example 1 is entirely spherical. No asph table provided.
   */
  asph: {},

  /* ── Variable air spacings (floating focus) ──
   *  4 variable gaps → floating focus.
   *  L2 (surfaces 16–20) and L4 (surfaces 26–29) translate independently
   *  toward image during infinity → 1.4× macro focusing.
   *  Patent positions: ∞, 0.5×, 1.4×. Closest station = 1.4× (calculated image-to-object distance 0.254658 m).
   *
   *  Focus envelope sums (middle station has 0.01 mm source rounding drift):
   *    d_STO + d20 = 3.10 + 27.41 = 30.51 mm
   *    d25  + d29 = 4.17 + 26.63 = 30.80 mm
   */
  focusPositions: [0, 0.6787635163962894, 1],
  var: {
    STO: [3.1, 11.72, 27.41],
    "20": [27.41, 18.8, 3.1],
    "25": [4.17, 11.48, 29.5],
    "29": [26.63, 19.32, 1.3],
  },

  varLabels: [
    ["STO", "D15"],
    ["20", "D20"],
    ["25", "D25"],
    ["29", "D29"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L1 (FIXED)", fromSurface: "1", toSurface: "14" },
    { text: "L2 (FOCUS 1)", fromSurface: "16", toSurface: "20" },
    { text: "L3 (FIXED)", fromSurface: "21", toSurface: "25" },
    { text: "L4 (FOCUS 2)", fromSurface: "26", toSurface: "29" },
    { text: "L5 (FIXED)", fromSurface: "30", toSurface: "31" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.25465765322580375, // Paraxial conjugate of published 1.4× station.
  focusDescription:
    "Patent normal SA setting: L2 and L4 move toward the image through the published infinity, 0.5× and 1.4× stations. Distances are calculated from the rounded prescription (0.37518 m and 0.25466 m). SA adjustment is not simulated.",

  /* ── Aperture configuration ── */
  nominalFno: 2.92,
  fstopSeries: [2.92, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
