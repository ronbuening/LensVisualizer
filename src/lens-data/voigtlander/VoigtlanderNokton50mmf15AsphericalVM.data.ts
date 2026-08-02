import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — VOIGTLÄNDER NOKTON VINTAGE LINE 50mm f/1.5 ASPHERICAL II VM   ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 2022-012964 A, Example 2 (Cosina Co., Ltd.).               ║
 * ║ Production correlation: 8 elements / 7 groups, a final double-aspherical   ║
 * ║ negative meniscus, 49.60 mm design EFL, F/1.43 design aperture, 46.58°     ║
 * ║ full field, and the published F14 whole-lens focusing state.               ║
 * ║ Focus status: PUBLISHED. The source keeps ZD9 and ZD12 fixed and changes    ║
 * ║ only ZD16 from 25.00 mm at infinity to 29.12 mm at the 630 mm              ║
 * ║ object-to-first-surface state. This is unit focus, not a reconstruction.    ║
 * ║ The source folds sensor/filter plates into the published air-equivalent     ║
 * ║ rear spacing; no synthetic cover-glass or filter elements are included.     ║
 * ║ No uniform scaling is applied.                                              ║
 * ║                                                                              ║
 * ║ Semi-diameters are inferred because the patent does not publish them.       ║
 * ║ The physical stop radius is solved from the patent EFL/FNO and front-group  ║
 * ║ pupil matrix. Element apertures use traced marginal/chief-ray envelopes,    ║
 * ║ the official Cosina section's relative diameter progression, and local      ║
 * ║ edge-thickness, actual-rim-slope, shared-gap, off-axis, and render-trim     ║
 * ║ checks. They are modeling values, not manufacturer dimensions.              ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "voigtlander-nokton-50f15-aspherical-ii-vm",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER NOKTON Vintage Line 50mm f/1.5 Aspherical II VM",
  subtitle: "JP 2022-012964 A — Example 2 — production correlation",
  specs: [
    "8 ELEMENTS / 7 GROUPS",
    "EFL 49.598 mm MODEL / 49.60 mm PATENT",
    "50 mm / f/1.5 MARKETED",
    "F/1.43 / 2ω = 46.58° PATENT",
    "46.3° MARKETED AOV",
    "2 ASPHERICAL SURFACES",
    "PUBLISHED UNIT FOCUS",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 49.6,
  apertureMarketing: 1.5,
  apertureDesign: 1.43,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2022-012964 A",
  patentAuthors: ["Yasuyuki Sugano"],
  patentAssignees: ["Cosina Co., Ltd."],
  patentYear: 2022,
  elementCount: 8,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 101.27,
      glass: "883408 — dense lanthanum glass class (vendor unresolved)",
      apd: false,
      role: "Front positive collector; the first of three separated positive menisci ahead of the stop.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 169.97,
      glass: "729547 — lanthanum crown class (vendor unresolved)",
      apd: false,
      role: "Weak positive meniscus that distributes front-group power while retaining the compact curved shell.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.84202,
      vd: 43.34,
      fl: 54.59,
      glass: "Unmatched (nd=1.84202, vd=43.34; code 842433)",
      apd: false,
      role: "Strongest positive element in the front group; works with the following negative meniscus.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -27.29,
      glass: "847238 — N-SF57/S-TIH53 class (vendor unresolved)",
      apd: false,
      role: "High-index flint negative meniscus immediately before the aperture stop.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.60286,
      vd: 37.37,
      fl: -24.55,
      glass: "Unmatched (nd=1.60286, vd=37.37; code 603374; near F5 class)",
      apd: false,
      role: "Front member of cemented doublet Ja; begins the rear partially symmetric section.",
      cemented: "Ja",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 34.47,
      glass: "883408 — dense lanthanum glass class (vendor unresolved)",
      apd: false,
      role: "Positive member of cemented doublet Ja; its cemented interface is surface 11.",
      cemented: "Ja",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.79316,
      vd: 47.24,
      fl: 26.3,
      glass: "Unmatched (nd=1.79316, vd=47.24; near 788474/475 lanthanum-flint class)",
      apd: false,
      role: "Strong separated rear positive element ahead of the final negative meniscus.",
    },
    {
      id: 8,
      name: "LE",
      label: "Element 8",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.69453,
      vd: 30.66,
      fl: -127.32,
      glass: "L-TIM28P (OHARA)",
      apd: false,
      nC: 1.68796,
      nF: 1.71061,
      ng: 1.72419,
      role: "Weak negative final meniscus with aspherical front and rear surfaces.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 38.335, d: 4.04, nd: 1.883, elemId: 1, sd: 20.5 },
    { label: "2", R: 63.787, d: 0.15, nd: 1, elemId: 0, sd: 19.5 },
    { label: "3", R: 29.222, d: 3.48, nd: 1.72916, elemId: 2, sd: 18.9 },
    { label: "4", R: 36.32, d: 0.15, nd: 1, elemId: 0, sd: 18 },
    { label: "5", R: 21.467, d: 5.18, nd: 1.84202, elemId: 3, sd: 17.1 },
    { label: "6", R: 35.839, d: 0.54, nd: 1, elemId: 0, sd: 16.3 },
    { label: "7", R: 41.906, d: 1.7, nd: 1.84666, elemId: 4, sd: 14.5 },
    { label: "8", R: 14.616, d: 6.6, nd: 1, elemId: 0, sd: 12.7 },
    { label: "STO", R: 1e15, d: 5.3, nd: 1, elemId: 0, sd: 10.76247 },
    { label: "10", R: -25.853, d: 1.5, nd: 1.60286, elemId: 5, sd: 12.7 },
    { label: "11", R: 35.373, d: 4.05, nd: 1.883, elemId: 6, sd: 13.1 },
    { label: "12", R: -206.591, d: 0.15, nd: 1, elemId: 0, sd: 13.2 },
    { label: "13", R: 33.192, d: 5.02, nd: 1.79316, elemId: 7, sd: 13.2 },
    { label: "14", R: -52.402, d: 0.15, nd: 1, elemId: 0, sd: 13.2 },
    { label: "15A", R: 346, d: 2, nd: 1.69453, elemId: 8, sd: 13.5 },
    { label: "16A", R: 70.263, d: 25, nd: 1, elemId: 0, sd: 13.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "15A": {
      K: 0,
      A4: 7.2539e-5,
      A6: -2.5678e-7,
      A8: -2.8512e-11,
      A10: 7.3475e-13,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: 1.0007e-4,
      A6: -2.0572e-7,
      A8: -1.5793e-10,
      A10: 1.0603e-12,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Published unit-focus spacing ── */
  var: {
    "16A": [25, 29.12],
  },
  varLabels: [["16A", "BF"]],

  /* ── Group annotations ── */
  groups: [
    { text: "FRONT 101", fromSurface: "1", toSurface: "8" },
    { text: "102A", fromSurface: "10", toSurface: "12" },
    { text: "102B", fromSurface: "13", toSurface: "16A" },
    { text: "REAR 102", fromSurface: "10", toSurface: "16A" },
  ],
  doublets: [{ text: "Ja", fromSurface: "10", toSurface: "12" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.7,
  focusDescription:
    "Published F10/F14 unit focus: internal gaps ZD9=5.30 mm and ZD12=0.15 mm remain fixed; " +
    "air-equivalent rear spacing ZD16 changes from 25.00 to 29.12 mm. The close source row uses " +
    "630 mm from object to the first optical surface, equivalent to about 0.699 m object-to-image distance.",

  /* ── Aperture configuration ── */
  nominalFno: 1.43,
  fstopSeries: [1.43, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
