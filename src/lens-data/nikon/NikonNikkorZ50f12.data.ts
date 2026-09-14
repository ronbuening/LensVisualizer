import type { LensDataInput } from "../../types/optics.js";

/**
 * WO 2021/241230 A1, Example 1, Table 1 (PDF pp28–31), Fig.1 (p63).
 * Surface labels omit the dummy plane after patent S8. Sensor-filter media
 * are replaced by an air-equivalent image gap. The patent's kappa multiplies
 * y^2/r^2 directly in equation (a), so stored standard K = kappa - 1.
 * Rims are inferred from the exact figure; no production glass vendor or
 * motor mechanism is established by the numerical prescription.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-z50f12",
  maker: "Nikon",
  name: "NIKON NIKKOR Z 50mm f/1.2 S",
  subtitle: "WO 2021/241230 A1 EXAMPLE 1 — NIKON / HARADA Hiroki",
  specs: ["17 ELEMENTS / 15 GROUPS", "f = 51.29 mm", "F/1.23", "2ω ≈ 45.6°", "3 ASPHERICAL SURFACES"],

  focalLengthMarketing: 50,
  focalLengthDesign: 51.29,
  apertureMarketing: 1.2,
  apertureDesign: 1.23,
  lensMounts: ["nikon-z"],
  imageFormat: "135-full-frame",
  patentNumber: "WO 2021/241230 A1",
  patentAuthors: ["Hiroki Harada"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2021,
  elementCount: 17,
  groupCount: 15,

  /* ── Elements ──
   *  17 optical elements, front to rear.
   *  Patent element labels: L11–L19 (front group A), L21–L22 (F1),
   *  L31–L32 (F2), L41–L44 (R group).
   *  (Filter plate modeled separately in camera body.)
   */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1 (L11)",
      type: "Negative Meniscus",
      nd: 1.64,
      vd: 60.1,
      fl: -86.0,
      glass: "S-BSM81 (catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Front divergent meniscus — raises marginal ray height for cond. (1)",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2 (L12)",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 18.0,
      fl: 294.7,
      glass: "FDS18 (catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Ultra-high-dispersion corrector — chromatic lever in AF subgroup",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3 (L13)",
      type: "Negative Meniscus",
      nd: 1.55298,
      vd: 55.1,
      fl: -110.2,
      glass: "J-KZFH4 (catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Paired with L11 for Petzval sum control (cond. 7: −r1/r2)",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4 (L14)",
      type: "Positive Meniscus",
      nd: 1.59349,
      vd: 67.0,
      fl: 248.7,
      glass: "J-PSKH4 (catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "First of four consecutive lower-dispersion positive elements in AR subgroup",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5 (L15)",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67.0,
      fl: 95.2,
      glass: "J-PSKH4 (catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Symmetric biconvex — primary positive power in front group",
    },
    {
      id: 6,
      name: "L16",
      label: "Element 6 (L16)",
      type: "Positive Meniscus",
      nd: 1.59349,
      vd: 67.0,
      fl: 175.2,
      glass: "J-PSKH4 (catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Convex-to-object meniscus, continuing AR convergence",
    },
    {
      id: 7,
      name: "L17",
      label: "Element 7 (L17)",
      type: "Positive Meniscus",
      nd: 1.59349,
      vd: 67.0,
      fl: 90.0,
      glass: "J-PSKH4 (catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Strongest positive element in front group (nearly plano-convex)",
    },
    {
      id: 8,
      name: "L18",
      label: "Element 8 (L18)",
      type: "Biconvex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 133.7,
      glass: "J-PSKH1 (catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote: "APD inferred from the compatible J-PSKH1 catalog curve; patent table does not name the production glass.",
      role: "Positive partner of cemented doublet D1",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L19",
      label: "Element 9 (L19)",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.3,
      fl: -39.7,
      glass: "S-NBH53V (catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Strongly negative flint — chromatic corrector in doublet D1",
      cemented: "D1",
    },
    {
      id: 10,
      name: "L21",
      label: "Element 10 (L21)",
      type: "Negative Meniscus",
      nd: 1.72047,
      vd: 34.7,
      fl: -84.4,
      glass: "S-NBH8 (catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Focus group F1 — negative meniscus, diverges post-stop cone",
    },
    {
      id: 11,
      name: "L22",
      label: "Element 11 (L22)",
      type: "Plano-Convex Positive",
      nd: 1.59319,
      vd: 67.9,
      fl: 99.2,
      glass: "J-PSKH1 (catalog equivalent; production supplier unspecified)",
      apd: "inferred",
      apdNote: "APD inferred from the compatible J-PSKH1 catalog curve; patent table does not name the production glass.",
      role: "Focus group F1 — positive power, flat rear for alignment",
    },
    {
      id: 12,
      name: "L31",
      label: "Element 12 (L31)",
      type: "Biconvex Pos. (1× Asph)",
      nd: 1.59306,
      vd: 67.0,
      fl: 195.7,
      glass: "J-PSKH4 (approximate catalog equivalent; patent nd=1.59306, vd=67.0; supplier unspecified)",
      apd: false,
      role: "Focus group F2 — aspherical rear surface (S24A)",
    },
    {
      id: 13,
      name: "L32",
      label: "Element 13 (L32)",
      type: "Biconvex Pos. (1× Asph)",
      nd: 1.7645,
      vd: 49.1,
      fl: 79.7,
      glass: "S-LAH96 (catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Focus group F2 — aspherical front surface (S25A), strong positive",
    },
    {
      id: 14,
      name: "L41",
      label: "Element 14 (L41)",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.3,
      fl: 269.7,
      glass: "S-PHM52 (catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Rear fixed group R — weak positive meniscus",
    },
    {
      id: 15,
      name: "L42",
      label: "Element 15 (L42)",
      type: "Biconvex Positive",
      nd: 1.90265,
      vd: 35.8,
      fl: 57.7,
      glass: "J-LASFH9 (catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Ultra-high-index positive — cemented doublet D2 crown",
      cemented: "D2",
    },
    {
      id: 16,
      name: "L43",
      label: "Element 16 (L43)",
      type: "Biconcave Negative",
      nd: 1.61266,
      vd: 44.5,
      fl: -50.6,
      glass: "N-KZFS4 (catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Chromatic corrector — cemented doublet D2 flint, cond. (6) satisfied",
      cemented: "D2",
    },
    {
      id: 17,
      name: "L44",
      label: "Element 17 (L44)",
      type: "Biconcave Neg. (1× Asph)",
      nd: 1.5168,
      vd: 64.0,
      fl: -108.5,
      glass: "J-BK7 (catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Final optical element — aspherical front (S32A) for field correction",
    },
  ],

  /* ── Surface prescription ──
   *  Dummy plane S9 and filter surfaces S35–S36 omitted; optical surfaces retain source correspondence.
   *  Patent surface numbering noted in comments for cross-reference.
   *
   *  elemId assignment:
   *    - Front (entry) surface of each element → elemId = element's id
   *    - Rear surface to air → elemId = 0
   *    - Cemented junction → elemId = second element's id
   *    - STO and all air interfaces → elemId = 0
   */
  surfaces: [
    //                                                                          Patent
    // label    R              d        nd         elemId  sd      // surf   Description
    { label: "1", R: 280.6827, d: 2.65, nd: 1.64, elemId: 1, sd: 31.5 }, // 1   L11 front
    { label: "2", R: 46.02198, d: 3.54, nd: 1.0, elemId: 0, sd: 28.5 }, // 2   L11 rear → air
    { label: "3", R: 50.87481, d: 4.19, nd: 1.94595, elemId: 2, sd: 28.5 }, // 3   L12 front
    { label: "4", R: 62.23366, d: 16.51, nd: 1.0, elemId: 0, sd: 26.5 }, // 4   L12 rear → air
    { label: "5", R: -43.98849, d: 3.2, nd: 1.55298, elemId: 3, sd: 29 }, // 5   L13 front
    { label: "6", R: -158.30791, d: 4.05, nd: 1.0, elemId: 0, sd: 29 }, // 6   L13 rear → air
    { label: "7", R: -82.01412, d: 6.7, nd: 1.59349, elemId: 4, sd: 30 }, // 7   L14 front
    { label: "8", R: -52.72274, d: 0.1, nd: 1.0, elemId: 0, sd: 30 }, // 8+9 L14 rear → air (collapsed: −3.000 + 3.100)
    { label: "9", R: 113.04472, d: 10.81, nd: 1.59349, elemId: 5, sd: 31.5 }, // 10  L15 front
    { label: "10", R: -113.04472, d: 0.2, nd: 1.0, elemId: 0, sd: 31.5 }, // 11  L15 rear → air
    { label: "11", R: 75.49059, d: 6.54, nd: 1.59349, elemId: 6, sd: 30.5 }, // 12  L16 front
    { label: "12", R: 275.33026, d: 0.2, nd: 1.0, elemId: 0, sd: 30.5 }, // 13  L16 rear → air
    { label: "13", R: 48.85546, d: 10.35, nd: 1.59349, elemId: 7, sd: 28.5 }, // 14  L17 front
    { label: "14", R: 571.46325, d: 0.68, nd: 1.0, elemId: 0, sd: 28.5 }, // 15  L17 rear → air
    { label: "15", R: 290.13527, d: 6.04, nd: 1.59319, elemId: 8, sd: 26.5 }, // 16  L18 front
    { label: "16", R: -109.11, d: 2.16, nd: 1.738, elemId: 9, sd: 26.5 }, // 17  L18→L19 cemented junction
    { label: "17", R: 40.04126, d: 7.79, nd: 1.0, elemId: 0, sd: 25.5 }, // 18  L19 rear → air
    { label: "STO", R: 1e15, d: 19.164, nd: 1.0, elemId: 0, sd: 19.7 }, // 19  Aperture stop (variable d)
    { label: "19", R: -37.07012, d: 1.7, nd: 1.72047, elemId: 10, sd: 19 }, // 20  L21 front
    { label: "20", R: -95.03209, d: 0.2, nd: 1.0, elemId: 0, sd: 19 }, // 21  L21 rear → air
    { label: "21", R: 58.85968, d: 6.2, nd: 1.59319, elemId: 11, sd: 19.5 }, // 22  L22 front
    { label: "22", R: 1e15, d: 2.0, nd: 1.0, elemId: 0, sd: 19.5 }, // 23  L22 rear (flat) → air (variable d)
    { label: "23", R: 391.6081, d: 6.46, nd: 1.59306, elemId: 12, sd: 19 }, // 24  L31 front
    { label: "24A", R: -165.0, d: 2.6, nd: 1.0, elemId: 0, sd: 19 }, // 25* L31 rear → air (ASPH)
    { label: "25A", R: 71.0, d: 4.0, nd: 1.7645, elemId: 13, sd: 19.5 }, // 26* L32 front (ASPH)
    { label: "26", R: -430.72555, d: 1.9, nd: 1.0, elemId: 0, sd: 19.5 }, // 27  L32 rear → air (variable d)
    { label: "27", R: 137.78125, d: 3.1, nd: 1.618, elemId: 14, sd: 20 }, // 28  L41 front
    { label: "28", R: 795.36428, d: 0.1, nd: 1.0, elemId: 0, sd: 20 }, // 29  L41 rear → air
    { label: "29", R: 87.92389, d: 5.7, nd: 1.90265, elemId: 15, sd: 20 }, // 30  L42 front
    { label: "30", R: -127.68, d: 1.8, nd: 1.61266, elemId: 16, sd: 20 }, // 31  L42→L43 cemented junction
    { label: "31", R: 40.89766, d: 7.76, nd: 1.0, elemId: 0, sd: 17.75 }, // 32  L43 rear → air
    { label: "32A", R: -64.58764, d: 1.8, nd: 1.5168, elemId: 17, sd: 18 }, // 33* L44 front (ASPH)
    { label: "33", R: 423.87378, d: 12.566852320675107, nd: 1.0, elemId: 0, sd: 19.5 }, // 34 L44 rear → air-equivalent image plane (10.810 + 1.600/1.51680 + d36)
  ],

  /* Patent equation (a), p26: K = kappa - 1; include every published term. */
  asph: {
    "24A": {
      K: 14.2295,
      A4: -2.31391e-5,
      A6: 7.84797e-8,
      A8: -2.2244e-10,
      A10: 4.8526e-13,
      A12: -7.0843e-16,
      A14: 6.0146e-19,
      A16: -2.2772e-22,
    },
    "25A": {
      K: -1.1159,
      A4: -2.104e-5,
      A6: 5.52111e-8,
      A8: -1.4476e-10,
      A10: 2.0461e-13,
      A12: 1.6362e-16,
      A14: -1.0877e-18,
      A16: 1.1704e-21,
    },
    "32A": {
      K: 8.4794,
      A4: 9.45827e-7,
      A6: 1.06743e-8,
      A8: -3.9491e-11,
      A10: 1.6784e-13,
      A12: -4.439e-16,
      A14: 6.5373e-19,
    },
  },

  /* ── Variable air spacings (focus mechanism) ──
   *  Floating inner focus: F1 and F2 groups move independently toward
   *  the object during close focusing. Front group A and rear group R
   *  are fixed relative to one another. The rounded BF differs by 0.001 mm.
   *
   *  Patent variable spacing data (Table 1):
   *    d19: 19.164 → 11.437   (stop → F1)
   *    d23:  2.000 →  3.584   (F1 → F2)
   *    d27:  1.900 →  8.043   (F2 → R)
   *    d36:  0.702 →  0.701   (BF)
   *
   *  Note: Patent labels refer to patent surface numbers. Data file
   *  labels refer to the collapsed numbering used in the surfaces array.
   */
  var: {
    STO: [19.164, 11.437], // d19: stop → F1 front
    22: [2.0, 3.584], // d23: F1 rear → F2 front
    26: [1.9, 8.043], // d27: F2 rear → R front
    33: [12.566852320675107, 12.565852320675107], // filter omitted; source d36 differs by 0.001 mm
  },

  varLabels: [
    ["STO", "STO–F1"], // Stop → F1
    ["22", "F1–F2"], // F1 → F2
    ["26", "F2–R"], // F2 → R
    ["33", "BF (air equiv.)"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "A (FRONT)", fromSurface: "1", toSurface: "17" },
    { text: "F1", fromSurface: "19", toSurface: "22" },
    { text: "F2", fromSurface: "23", toSurface: "26" },
    { text: "R (REAR)", fromSurface: "27", toSurface: "33" },
  ],

  doublets: [
    { text: "D1", fromSurface: "15", toSurface: "17" }, // L18 + L19
    { text: "D2", fromSurface: "29", toSurface: "31" }, // L42 + L43
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.6302598523206751,
  focusDescription:
    "Patent Example 1: F1 moves 7.727 mm and F2 6.143 mm objectward relative to the front/rear groups. Source close object distance is 467.50 mm from the first surface, about 0.630 m from the modeled image plane. The 0.001 mm image-gap change follows rounded source stations; intermediate motion is interpolated.",

  /* ── Aperture configuration ── */
  nominalFno: 1.23,
  fstopSeries: [1.23, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.58,
  yScFill: 0.52,
} satisfies LensDataInput;

export default LENS_DATA;
