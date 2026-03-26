import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON NIKKOR Z 50mm f/1.2 S                          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2021/241230 A1, Example 1 (Nikon / HARADA H.).   ║
 * ║  Large-aperture standard prime for Z-mount mirrorless cameras.     ║
 * ║  17 elements / 15 groups, 3 aspherical surfaces, 2 cemented       ║
 * ║  doublets.                                                         ║
 * ║  Focus: Dual inner-focus (F1 + F2 groups), two stepping motors.   ║
 * ║                                                                    ║
 * ║  NOTE ON SURFACE 8 (COLLAPSED):                                    ║
 * ║    Patent surfaces 8 and 9 have d8 = −3.000 mm and d9 = +3.100   ║
 * ║    mm (dummy flat surface in air). These are collapsed to a       ║
 * ║    single air gap of d = 0.100 mm, preserving the net axial       ║
 * ║    separation from L14 rear to L15 front.                         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not listed in the patent. Estimated from paraxial marginal     ║
 * ║    ray trace (EP SD = 20.85 mm at f/1.23) with 10% mechanical    ║
 * ║    clearance on glass surfaces. Post-stop surfaces include an     ║
 * ║    off-axis chief ray contribution. STO SD = marginal ray height  ║
 * ║    at stop (19.7 mm). Filter plate SD set to image semi-diagonal  ║
 * ║    (21.6 mm).                                                     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
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
  patentYear: 2021,
  elementCount: 17,
  groupCount: 15,

  /* ── Elements ──
   *  17 optical elements + 1 filter plate, front to rear.
   *  Patent element labels: L11–L19 (front group A), L21–L22 (F1),
   *  L31–L32 (F2), L41–L44 (R group), FL (filter).
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
      glass: "S-BSM81 (OHARA)",
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
      glass: "E-FDS1-W (HIKARI)",
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
      glass: "S-TIL25 (OHARA)",
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
      glass: "FCD505 (HOYA) / J-PSKH1",
      apd: "inferred",
      apdNote: "Phosphate crown, νd=67.0 — anomalous partial dispersion inferred from glass family",
      role: "First of four consecutive ED-family elements in AR subgroup",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5 (L15)",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67.0,
      fl: 95.2,
      glass: "FCD505 (HOYA) / J-PSKH1",
      apd: "inferred",
      apdNote: "Phosphate crown, νd=67.0",
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
      glass: "FCD505 (HOYA) / J-PSKH1",
      apd: "inferred",
      apdNote: "Phosphate crown, νd=67.0",
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
      glass: "FCD505 (HOYA) / J-PSKH1",
      apd: "inferred",
      apdNote: "Phosphate crown, νd=67.0",
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
      glass: "FCD505 variant / S-FPM2",
      apd: "inferred",
      apdNote: "Phosphate crown, νd=67.9",
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
      glass: "S-NBH52V (OHARA)",
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
      glass: "S-NBH8 (OHARA)",
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
      glass: "FCD505 variant / S-FPM2",
      apd: "inferred",
      apdNote: "Phosphate crown, νd=67.9",
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
      glass: "FCD505 variant / J-PSKH1",
      apd: "inferred",
      apdNote: "Phosphate crown, νd=67.0",
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
      glass: "S-NBH56 (OHARA)",
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
      glass: "S-PHM52 (OHARA)",
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
      glass: "S-LAH79 (OHARA)",
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
      glass: "S-NBM52 (OHARA)",
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
      glass: "S-NSL3 (OHARA)",
      apd: false,
      role: "Final optical element — aspherical front (S32A) for field correction",
    },
    {
      id: 18,
      name: "FL",
      label: "Filter (FL)",
      type: "Plano-Plano (Filter)",
      nd: 1.5168,
      vd: 63.9,
      fl: 1e15,
      glass: "S-NSL36 (OHARA)",
      apd: false,
      role: "IR-cut / OLPF / sensor cover glass placeholder",
    },
  ],

  /* ── Surface prescription ──
   *  36 patent surfaces → 35 data file surfaces (patent surfaces 8+9 collapsed).
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
    { label: "1", R: 280.6827, d: 2.65, nd: 1.64, elemId: 1, sd: 22.9 }, // 1   L11 front
    { label: "2", R: 46.02198, d: 3.54, nd: 1.0, elemId: 0, sd: 22.8 }, // 2   L11 rear → air
    { label: "3", R: 50.87481, d: 4.19, nd: 1.94595, elemId: 2, sd: 23.8 }, // 3   L12 front
    { label: "4", R: 62.23366, d: 16.51, nd: 1.0, elemId: 0, sd: 23.4 }, // 4   L12 rear → air
    { label: "5", R: -43.98849, d: 3.2, nd: 1.55298, elemId: 3, sd: 26.4 }, // 5   L13 front
    { label: "6", R: -158.30791, d: 4.05, nd: 1.0, elemId: 0, sd: 27.4 }, // 6   L13 rear → air
    { label: "7", R: -82.01412, d: 6.7, nd: 1.59349, elemId: 4, sd: 29.1 }, // 7   L14 front
    { label: "8", R: -52.72274, d: 0.1, nd: 1.0, elemId: 0, sd: 31.7 }, // 8+9 L14 rear → air (collapsed: −3.000 + 3.100)
    { label: "9", R: 113.04472, d: 10.81, nd: 1.59349, elemId: 5, sd: 31.7 }, // 10  L15 front
    { label: "10", R: -113.04472, d: 0.2, nd: 1.0, elemId: 0, sd: 32.4 }, // 11  L15 rear → air
    { label: "11", R: 75.49059, d: 6.54, nd: 1.59349, elemId: 6, sd: 32.4 }, // 12  L16 front
    { label: "12", R: 275.33026, d: 0.2, nd: 1.0, elemId: 0, sd: 31.1 }, // 13  L16 rear → air
    { label: "13", R: 48.85546, d: 10.35, nd: 1.59349, elemId: 7, sd: 31.0 }, // 14  L17 front
    { label: "14", R: 571.46325, d: 0.68, nd: 1.0, elemId: 0, sd: 26.9 }, // 15  L17 rear → air
    { label: "15", R: 290.13527, d: 6.04, nd: 1.59319, elemId: 8, sd: 26.5 }, // 16  L18 front
    { label: "16", R: -109.11, d: 2.16, nd: 1.738, elemId: 9, sd: 24.0 }, // 17  L18→L19 cemented junction
    { label: "17", R: 40.04126, d: 7.79, nd: 1.0, elemId: 0, sd: 23.2 }, // 18  L19 rear → air
    { label: "STO", R: 1e15, d: 19.164, nd: 1.0, elemId: 0, sd: 19.7 }, // 19  Aperture stop (variable d)
    { label: "19", R: -37.07012, d: 1.7, nd: 1.72047, elemId: 10, sd: 17.8 }, // 20  L21 front
    { label: "20", R: -95.03209, d: 0.2, nd: 1.0, elemId: 0, sd: 18.0 }, // 21  L21 rear → air
    { label: "21", R: 58.85968, d: 6.2, nd: 1.59319, elemId: 11, sd: 18.0 }, // 22  L22 front
    { label: "22", R: 1e15, d: 2.0, nd: 1.0, elemId: 0, sd: 17.3 }, // 23  L22 rear (flat) → air (variable d)
    { label: "23", R: 391.6081, d: 6.46, nd: 1.59306, elemId: 12, sd: 17.0 }, // 24  L31 front
    { label: "24A", R: -165.0, d: 2.6, nd: 1.0, elemId: 0, sd: 16.2 }, // 25* L31 rear → air (ASPH)
    { label: "25A", R: 71.0, d: 4.0, nd: 1.7645, elemId: 13, sd: 16.3 }, // 26* L32 front (ASPH)
    { label: "26", R: -430.72555, d: 1.9, nd: 1.0, elemId: 0, sd: 16.1 }, // 27  L32 rear → air (variable d)
    { label: "27", R: 137.78125, d: 3.1, nd: 1.618, elemId: 14, sd: 16.1 }, // 28  L41 front
    { label: "28", R: 795.36428, d: 0.1, nd: 1.0, elemId: 0, sd: 15.7 }, // 29  L41 rear → air
    { label: "29", R: 87.92389, d: 5.7, nd: 1.90265, elemId: 15, sd: 16.1 }, // 30  L42 front
    { label: "30", R: -127.68, d: 1.8, nd: 1.61266, elemId: 16, sd: 14.8 }, // 31  L42→L43 cemented junction
    { label: "31", R: 40.89766, d: 7.76, nd: 1.0, elemId: 0, sd: 15.2 }, // 32  L43 rear → air
    { label: "32A", R: -64.58764, d: 1.8, nd: 1.5168, elemId: 17, sd: 12.7 }, // 33* L44 front (ASPH)
    { label: "33", R: 423.87378, d: 10.81, nd: 1.0, elemId: 0, sd: 13.5 }, // 34  L44 rear → air
    { label: "34", R: 1e15, d: 1.6, nd: 1.5168, elemId: 18, sd: 21.6 }, // 35  FL front (flat filter plate)
    { label: "35", R: 1e15, d: 0.702, nd: 1.0, elemId: 0, sd: 21.6 }, // 36  FL rear → image (BF, variable)
  ],

  /* ── Aspherical coefficients ──
   *  Patent uses sag equation with conic κ and even-order polynomial A4–A16.
   *  Data file spec supports A4–A14. Patent surface 25 (label "24A") also uses
   *  A16; surface 26 (label "25A") also uses A16. These are very small terms
   *  (< 1e-21) and are included as comments but truncated to A14 in the data.
   *  Surface 33 (label "32A") has A16 = 0.
   */
  asph: {
    "24A": {
      K: 1.52295e1,
      A4: -2.31391e-5,
      A6: 7.84797e-8,
      A8: -2.2244e-10,
      A10: 4.8526e-13,
      A12: -7.0843e-16,
      A14: 6.0146e-19,
      // A16: -2.27720e-22  (beyond spec range — negligible contribution)
    },
    "25A": {
      K: -1.159e-1,
      A4: -2.104e-5,
      A6: 5.52111e-8,
      A8: -1.4476e-10,
      A10: 2.0461e-13,
      A12: 1.6362e-16,
      A14: -1.0877e-18,
      // A16:  1.17040e-21  (beyond spec range — negligible contribution)
    },
    "32A": {
      K: 9.4794,
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
   *  are fixed. BF is essentially constant (Δ = 0.001 mm).
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
    35: [0.702, 0.701], // d36: BF (essentially constant)
  },

  varLabels: [
    ["STO", "d19"], // Stop → F1
    ["22", "d23"], // F1 → F2
    ["26", "d27"], // F2 → R
    ["35", "BF"], // Back focus
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
  closeFocusM: 0.45,
  focusDescription:
    "Dual inner focus (floating). F1 (L21–L22, weak negative) and F2 (L31–L32, strong positive with 2 aspheres) move toward object independently via two STM stepping motors. Front group A and rear group R are fixed. F1 leads F2 by ~1.6 mm differential travel.",

  /* ── Aperture configuration ── */
  nominalFno: 1.2,
  fstopSeries: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.58,
  yScFill: 0.52,
} satisfies LensDataInput;

export default LENS_DATA;
