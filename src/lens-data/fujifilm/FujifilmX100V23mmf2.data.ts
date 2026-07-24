import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — FUJIFILM FUJINON 23mm f/2 (X100V / X100VI)           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2020/0333569 A1 Example 1 (FUJIFILM / Kondo).    ║
 * ║  Three-group telephoto-type: G1(+) — Stop — G2(+) — G3(−).       ║
 * ║  8 elements / 6 groups, 4 aspherical surfaces (on 2 elements).    ║
 * ║  Focus: G1+G2 integral unit focus; G3 fixed to image plane.       ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERICAL COEFFICIENTS:                                  ║
 * ║    Exact Example 1 Table 3 odd/even A3–A20 coefficients are       ║
 * ║    stored directly. Patent KA = 1 converts to standard K = 0.     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Estimated from ray height and Fig. 1 ║
 * ║    proportions, then capped at steep molded-asphere rims and thin ║
 * ║    air gaps. Rear elements (L32, L33) are limited by the 0.100 mm ║
 * ║    air gap.                                                       ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    Patent does not publish close-focus spacings for Example 1.    ║
 * ║    Variable gap estimated via paraxial refocus to MFD = 0.10 m.   ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "fujifilm-x100v-23f2",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON 23mm f/2 (Fujifilm X100V)",
  subtitle: "US 2020/0333569 A1 Example 1 — FUJIFILM / Kondo",
  specs: ["8 ELEMENTS / 6 GROUPS", "f ≈ 23.7 mm", "F/2.06", "2ω ≈ 62.0°", "4 ASPHERICAL SURFACES (2 ELEMENTS)"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 23,
  focalLengthDesign: 23.689,
  apertureMarketing: 2.0,
  apertureDesign: 2.06,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "aps-c",
  patentNumber: "US 2020/0333569 A1",
  patentAuthors: ["Masato Kondo"],
  patentAssignees: ["Fujifilm Corporation"],
  patentYear: 2020,
  elementCount: 8,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.51,
      fl: -29.3,
      glass: "S-TIH1 (OHARA)",
      apd: false,
      role: "Front negative element of G1 cemented doublet; high-dispersion flint for axial chromatic correction",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 39.22,
      fl: 17.0,
      glass: "Unmatched (lanthanum-dense flint, near S-LAH79 (OHARA) nd match, Δνd ≈ 1.5)",
      apd: false,
      role: "Positive power carrier in G1 doublet; high-index glass enables strong junction curvature",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L21",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.05,
      fl: -12.1,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      role: "Negative component of G2 cemented doublet; concave entrance suppresses off-axis aberrations",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L22",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.61,
      fl: 15.1,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Positive component of G2 doublet; lower-dispersion partner for chromatic correction",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L23",
      label: "Element 5",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.8078,
      vd: 40.86,
      fl: 21.8,
      glass: "Unmatched (near TAFD33 (HOYA), Δnd = 0.0017; possibly precision-molded proprietary)",
      apd: false,
      role: "Primary converging element in G2; near-symmetric biconvex controls spherical aberration; aspherical surfaces on both faces",
    },
    {
      id: 6,
      name: "L31",
      label: "Element 6",
      type: "Weak Neg. Meniscus (2× Asph)",
      nd: 1.51633,
      vd: 64.06,
      fl: -328.6,
      glass: "S-BSL7 (OHARA)",
      apd: false,
      role: "First element of fixed G3; weak negative power with aspherical surfaces correcting astigmatism and field curvature",
    },
    {
      id: 7,
      name: "L32",
      label: "Element 7",
      type: "Plano-Concave Negative",
      nd: 1.69895,
      vd: 30.05,
      fl: -21.7,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      role: "Strongest negative element; primary Petzval-sum corrector and field flattener in G3",
    },
    {
      id: 8,
      name: "L33",
      label: "Element 8",
      type: "Plano-Convex Positive",
      nd: 1.883,
      vd: 39.22,
      fl: 93.4,
      glass: "Unmatched (same as L12; lanthanum-dense flint, near S-LAH79 (OHARA) nd match, Δνd ≈ 1.5)",
      apd: false,
      role: "Last element before image; corrects distortion and reduces chief-ray incidence angle on sensor",
    },
  ],

  /* ── Surface prescription ──
   *  Cover glass (PP) excluded; air-equivalent BFD folded into last surface d.
   *  BFD (air equiv.) = 3.504 + 1.300/1.51680 + 0.500 = 4.861 mm.
   */
  surfaces: [
    // ── G1: cemented doublet L11+L12 ──
    { label: "1", R: 30.98019, d: 0.59, nd: 1.71736, elemId: 1, sd: 7.2 }, // L11 front
    { label: "2", R: 12.429, d: 2.67, nd: 1.883, elemId: 2, sd: 6.9 }, // L11→L12 cemented junction
    { label: "3", R: 64.17602, d: 1.57, nd: 1.0, elemId: 0, sd: 6.7 }, // L12 rear → air

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 5.88, nd: 1.0, elemId: 0, sd: 5.2 },

    // ── G2: cemented doublet L21+L22, then singlet L23 ──
    { label: "4", R: -10.58606, d: 0.61, nd: 1.69895, elemId: 3, sd: 6.8 }, // L21 front
    { label: "5", R: 42.295, d: 4.35, nd: 1.7725, elemId: 4, sd: 7.3 }, // L21→L22 cemented junction
    { label: "6", R: -15.33039, d: 0.2, nd: 1.0, elemId: 0, sd: 7.4 }, // L22 rear → air
    { label: "7A", R: 34.72225, d: 5.0, nd: 1.8078, elemId: 5, sd: 6.3 }, // L23 front (asph)
    { label: "8A", R: -33.47682, d: 1.1, nd: 1.0, elemId: 0, sd: 6.2 }, // L23 rear (asph) → air [variable gap]

    // ── G3: three singlets L31, L32, L33 (fixed during focus) ──
    { label: "9A", R: 666.57127, d: 2.84, nd: 1.51633, elemId: 6, sd: 7.6 }, // L31 front (asph)
    { label: "10A", R: 135.03773, d: 5.86, nd: 1.0, elemId: 0, sd: 7.6 }, // L31 rear (asph) → air
    { label: "11", R: -15.17144, d: 0.74, nd: 1.69895, elemId: 7, sd: 6.0 }, // L32 front
    { label: "12", R: 1e15, d: 0.1, nd: 1.0, elemId: 0, sd: 4.0 }, // L32 rear → air
    { label: "13", R: 82.50113, d: 1.98, nd: 1.883, elemId: 8, sd: 4.0 }, // L33 front
    { label: "14", R: 1e15, d: 4.861, nd: 1.0, elemId: 0, sd: 6.0 }, // L33 rear → image (BFD, air equiv.)
  ],

  /* ── Exact Example 1, Table 3 aspherical coefficients ── */
  asph: {
    "7A": {
      K: 0,
      A3: -1.5217964e-4,
      A4: 2.4706739e-4,
      A5: -1.9986864e-4,
      A6: 1.0534079e-4,
      A7: -3.4430391e-5,
      A8: 6.9668708e-6,
      A9: -8.2587997e-7,
      A10: 4.6910827e-8,
      A11: -5.798158e-10,
      A12: 2.2371123e-10,
      A13: -6.8464232e-11,
      A14: 7.0551541e-12,
      A15: -3.2955028e-13,
      A16: 6.0646736e-15,
      A17: -3.1163867e-18,
      A18: -7.1851751e-19,
      A19: 1.1695193e-20,
      A20: 1.864465e-21,
    },
    "8A": {
      K: 0,
      A3: 4.6707088e-4,
      A4: -1.0166693e-4,
      A5: 3.6407193e-5,
      A6: -1.3756074e-5,
      A7: 5.1076177e-6,
      A8: -1.2536522e-6,
      A9: 1.9023164e-7,
      A10: -1.558771e-8,
      A11: 2.8140078e-10,
      A12: 3.263645e-11,
      A13: 5.0343516e-12,
      A14: -1.2681241e-12,
      A15: 8.7906193e-14,
      A16: -2.0482602e-15,
      A17: -4.9884016e-19,
      A18: 5.273262e-19,
      A19: -1.8316881e-19,
      A20: 8.413898e-21,
    },
    "9A": {
      K: 0,
      A3: 6.9988571e-4,
      A4: -7.8490068e-5,
      A5: -2.3476671e-5,
      A6: 1.7123418e-5,
      A7: -4.1267936e-6,
      A8: 5.0213388e-7,
      A9: -1.9486235e-9,
      A10: -8.2542881e-9,
      A11: 1.015163e-9,
      A12: -3.1786078e-11,
      A13: -2.6828331e-12,
      A14: 1.9590923e-13,
      A15: 6.6935119e-15,
      A16: -8.573523e-16,
      A17: -4.4918245e-18,
      A18: 1.6151998e-18,
      A19: 8.0183252e-20,
      A20: -8.8086271e-21,
    },
    "10A": {
      K: 0,
      A3: -2.3771611e-4,
      A4: 1.7211189e-4,
      A5: -4.3702546e-6,
      A6: -1.5476285e-5,
      A7: 5.28845e-6,
      A8: -6.7258964e-7,
      A9: 1.391751e-9,
      A10: 1.0109269e-8,
      A11: -1.2035642e-9,
      A12: 5.9393956e-11,
      A13: -3.9309708e-12,
      A14: 6.5830604e-13,
      A15: -5.2709876e-14,
      A16: 1.1668344e-15,
      A17: 2.1822742e-17,
      A18: 3.534685e-19,
      A19: 3.5695647e-19,
      A20: -3.5705496e-20,
    },
  },

  /* ── Variable air spacings ──
   *  G1+G2 move integrally; G3 fixed to image plane.
   *  Single variable gap between L23 rear (8A) and L31 front (9A).
   *  Close-focus d estimated via paraxial refocus (MFD = 0.10 m).
   */
  var: {
    "8A": [1.1, 7.98],
  },

  varLabels: [["8A", "D(G2–G3)"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (+)", fromSurface: "4", toSurface: "8A" },
    { text: "G3 (−)", fromSurface: "9A", toSurface: "14" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.1,
  focusDescription: "G1+G2 integral unit focus; G3 fixed relative to image plane.",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
