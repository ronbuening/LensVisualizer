import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SIGMA 50mm F1.4 DG DN | Art                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2023-183894 A, Example 1 (Sigma / Y. Yamamoto).  ║
 * ║  Modified double-Gauss variant: positive front GF, positive rear   ║
 * ║  GR with single-element inner focus.                               ║
 * ║  14 elements / 11 groups, 3 aspherical lenses (5 surfaces).       ║
 * ║  Focus: single-element inner focus (GR1, L8 moves).               ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from combined marginal + chief ray trace at 60%       ║
 * ║    field with ~8% mechanical clearance. Cross-gap sag and sd/|R|   ║
 * ║    constraints applied. Front elements constrained by 72 mm        ║
 * ║    filter thread.                                                  ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    Patent documents infinity and 1.0 m only. Close-focus gaps      ║
 * ║    at MFD = 0.45 m (manufacturer spec) solved via paraxial         ║
 * ║    marginal-ray brentq on the patent prescription.                 ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sigma-50f14-dgdn-art",
  maker: "Sigma",
  name: "SIGMA 50mm F1.4 DG DN | Art",
  subtitle: "JP 2023-183894 A Example 1 — Sigma / Yamamoto",
  specs: [
    "14 ELEMENTS / 11 GROUPS",
    "f = 48.72 mm",
    "F/1.45",
    "2ω = 46.49°",
    "3 ASPHERICAL LENSES (5 SURFACES)",
    "1 SLD ELEMENT",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 48.72,
  apertureMarketing: 1.4,
  apertureDesign: 1.45,
  patentYear: 2023,
  elementCount: 14,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      fl: 73.5,
      glass: "S-NPH53 (OHARA)",
      apd: false,
      role: "Ultra-high-index front positive; reduces curvatures and downstream element diameters (GF11).",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.15,
      fl: -48.0,
      glass: "S-TIL25 (OHARA)",
      apd: false,
      role: "Low-index negative for distortion and Petzval correction (GF12).",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.46,
      fl: -41.5,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Dense flint; paired with L2 for distortion / Petzval balance (GF13). f_L23 = −19.52 mm.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.7645,
      vd: 49.1,
      fl: 45.6,
      glass: "Aspherical mold glass (764/491)",
      apd: false,
      role: "Primary spherical aberration corrector; hyperboloidal front surface (K = −2.02) (GF2).",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      fl: 43.1,
      glass: "K-VC89 (Sumita) / FCD515 class — SLD fluorophosphate crown",
      apd: "inferred",
      apdNote: "Highest νd in prescription; manufacturer designates this as the SLD element.",
      role: "SLD crown in axial-color-correcting cemented doublet with L6 (GF2). Doublet f = +151.5 mm.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.05,
      fl: -57.1,
      glass: "S-TIH11 (OHARA)",
      apd: false,
      role: "Short flint partner to L5 SLD crown; chromatic correction in GF2.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 60.7,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Lanthanum crown; final convergence in GF2 before aperture stop.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.59201,
      vd: 67.02,
      fl: -64.2,
      glass: "Aspherical mold glass (592/670, FCD505 class)",
      apd: false,
      role: "FOCUS ELEMENT (GR1). Single negative meniscus driven by HLA linear motor. Low-dispersion mold glass minimizes chromatic focus shift.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.32,
      fl: 25.2,
      glass: "Lanthanum crown (755/523)",
      apd: false,
      role: "Crown element of rear achromatic doublet (GR2F). Doublet f = +223.7 mm.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.85451,
      vd: 25.15,
      fl: -27.6,
      glass: "Dense flint (855/252)",
      apd: false,
      role: "Flint partner in rear achromatic doublet (GR2F).",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      fl: 34.5,
      glass: "TAFD65 (Hoya)",
      apd: false,
      role: "Ultra-high-index positive; strongest converging singlet in rear group. nd = 2.001 minimizes Petzval per unit power (GR2F).",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.94595,
      vd: 17.98,
      fl: 61.5,
      glass: "Ultra-dispersive flint (946/180)",
      apd: false,
      role: "Ultra-dispersive short flint (νd < 18); lateral chromatic correction at large chief ray heights (GR2R). Doublet f = −97.8 mm.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.62004,
      vd: 36.3,
      fl: -37.2,
      glass: "S-TIM22 (OHARA)",
      apd: false,
      role: "Medium flint; chromatic and Petzval partner to L12 in field-flattening doublet (GR2R).",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.68948,
      vd: 31.02,
      fl: -109.8,
      glass: "S-TIM28 (OHARA)",
      apd: false,
      role: "Final field-flattening element with aspherical rear surface; shapes residual field curvature and astigmatism across the image circle (GR2R).",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── GF1: Negative front subgroup (L1, L2, L3) ──
    { label: "1", R: 75.1052, d: 8.0761, nd: 1.92286, elemId: 1, sd: 29.0 },
    { label: "2", R: -663.2678, d: 3.2104, nd: 1.0, elemId: 0, sd: 26.5 },
    { label: "3", R: -221.0442, d: 1.3, nd: 1.51742, elemId: 2, sd: 21.5 },
    { label: "4", R: 28.0267, d: 12.2601, nd: 1.0, elemId: 0, sd: 18.3 },
    { label: "5", R: -43.0741, d: 1.2859, nd: 1.80518, elemId: 3, sd: 18.3 },
    { label: "6", R: 150.887, d: 1.0283, nd: 1.0, elemId: 0, sd: 19.5 },

    // ── GF2: Positive rear subgroup (L4 asph, L5+L6 cemented, L7) ──
    { label: "7A", R: 89.29, d: 7.4823, nd: 1.7645, elemId: 4, sd: 22.0 },
    { label: "8A", R: -55.1739, d: 0.5621, nd: 1.0, elemId: 0, sd: 22.5 },
    { label: "9", R: 76.095, d: 10.974, nd: 1.59282, elemId: 5, sd: 22.5 },
    { label: "10", R: -36.3741, d: 1.2, nd: 1.69895, elemId: 6, sd: 20.5 },
    { label: "11", R: -419.5413, d: 0.15, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "12", R: 249.5104, d: 5.3632, nd: 1.883, elemId: 7, sd: 20.5 },
    { label: "13", R: -67.6164, d: 2.3076, nd: 1.0, elemId: 0, sd: 19.5 },

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 3.55, nd: 1.0, elemId: 0, sd: 16.7 },

    // ── GR1: Focus element (L8, both surfaces aspherical) ──
    { label: "15A", R: 89.357, d: 1.8779, nd: 1.59201, elemId: 8, sd: 17.0 },
    { label: "16A", R: 26.4444, d: 16.8119, nd: 1.0, elemId: 0, sd: 17.0 },

    // ── GR2F: Positive relay (L9+L10 cemented, L11) ──
    { label: "17", R: 143.6922, d: 10.0848, nd: 1.755, elemId: 9, sd: 17.3 },
    { label: "18", R: -21.2474, d: 0.9, nd: 1.85451, elemId: 10, sd: 17.3 },
    { label: "19", R: -220.4492, d: 0.15, nd: 1.0, elemId: 0, sd: 17.3 },
    { label: "20", R: 78.1343, d: 5.6421, nd: 2.001, elemId: 11, sd: 19.2 },
    { label: "21", R: -59.5828, d: 0.15, nd: 1.0, elemId: 0, sd: 19.2 },

    // ── GR2R: Negative field flattener (L12+L13 cemented, L14 asph) ──
    { label: "22", R: 202.6288, d: 3.5861, nd: 1.94595, elemId: 12, sd: 17.0 },
    { label: "23", R: -80.8939, d: 1.0025, nd: 1.62004, elemId: 13, sd: 15.5 },
    { label: "24", R: 32.3684, d: 6.7925, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "25", R: -35.5202, d: 2.1, nd: 1.68948, elemId: 14, sd: 14.0 },
    { label: "26A", R: -68.5557, d: 19.3272, nd: 1.0, elemId: 0, sd: 14.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "7A": {
      K: -2.0205,
      A4: -2.8022e-6,
      A6: -1.9538e-9,
      A8: 3.3127e-11,
      A10: -2.6429e-13,
      A12: 1.2732e-15,
      A14: -3.5497e-18,
      A16: 5.3556e-21,
      A18: -3.3225e-24,
      A20: 0,
    },
    "8A": {
      K: 0.3182,
      A4: 1.1423e-6,
      A6: -1.6319e-9,
      A8: 1.2848e-11,
      A10: -8.069e-14,
      A12: 3.8126e-16,
      A14: -1.1181e-18,
      A16: 1.8667e-21,
      A18: -1.2695e-24,
      A20: 0,
    },
    "15A": {
      K: 0,
      A4: -3.00787e-5,
      A6: 1.93193e-7,
      A8: -1.11198e-9,
      A10: 4.90017e-12,
      A12: -1.69805e-14,
      A14: 4.46514e-17,
      A16: -7.37293e-20,
      A18: 5.31567e-23,
      A20: 0,
    },
    "16A": {
      K: 0,
      A4: -3.2846e-5,
      A6: 1.8693e-7,
      A8: -9.2909e-10,
      A10: 2.5316e-12,
      A12: -2.7979e-15,
      A14: 0,
    },
    "26A": {
      K: 0,
      A4: 1.0284e-5,
      A6: 6.2726e-9,
      A8: -7.0515e-11,
      A10: 1.8284e-12,
      A12: -1.6967e-14,
      A14: 7.8024e-17,
      A16: -1.7394e-19,
      A18: 1.4654e-22,
      A20: 0,
    },
  },

  /* ── Variable air spacings (inner focus) ──
   *  L8 (GR1) translates toward image during infinity → close focus.
   *  d14 (STO → L8) increases, d16 (L8 → L9) decreases. BF is fixed.
   *  Patent documents INF and 1.0 m; close-focus at MFD = 0.45 m
   *  solved by paraxial brentq on the patent prescription.
   *
   *  INF:    d14 = 3.5500,  d16 = 16.8119
   *  1.0 m:  d14 = 6.7551,  d16 = 13.6068  (patent)
   *  0.45 m: d14 = 12.3996, d16 =  7.9623  (computed)
   */
  var: {
    STO: [3.55, 12.3996],
    "16A": [16.8119, 7.9623],
  },
  varLabels: [
    ["STO", "D14"],
    ["16A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "GF (Front)", fromSurface: "1", toSurface: "13" },
    { text: "GR (Rear)", fromSurface: "15A", toSurface: "26A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3", fromSurface: "22", toSurface: "24" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.45,
  focusDescription:
    "Single-element inner focus. L8 (GR1) — negative meniscus with 2× aspherical surfaces — translates toward image. GF, stop, and GR2 fixed. HLA linear motor drive.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
