import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — PANASONIC LEICA DG SUMMILUX 25mm f/1.4 ASPH          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2013-3324 A Example 2 (Sigma / Uemura).          ║
 * ║  Modified double-Gauss with inner-focus negative G2.               ║
 * ║  9 elements / 7 groups, 3 aspherical surfaces on 2 elements.      ║
 * ║  Focus: inner focus — single negative meniscus L8 (G2) moves      ║
 * ║         toward image. G1 and G3 fixed.                             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    SDs estimated via combined marginal + chief ray trace at 60%    ║
 * ║    field with 8% mechanical clearance, then refined for edge       ║
 * ║    thickness (≥0.2 mm), sd/|R| < 0.90, and cross-gap sag          ║
 * ║    intrusion (< 90% of gap). Front SD capped at 16.0 mm for       ║
 * ║    46 mm filter thread. Patent does not list semi-diameters.       ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    Patent tabulates infinity and 1:40 (d0 ≈ 998 mm). Close-focus  ║
 * ║    gaps for production MFD 0.30 m derived by paraxial conjugate    ║
 * ║    solve (scipy brentq). Back focal distance is constant.          ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "panasonic-leica-dg-25f14",
  maker: "Panasonic",
  name: "PANASONIC LEICA DG SUMMILUX 25mm f/1.4 ASPH",
  subtitle: "JP 2013-3324 A EXAMPLE 2 — SIGMA / UEMURA",
  specs: ["9 ELEMENTS / 7 GROUPS", "f ≈ 25.0 mm", "F/1.44", "2ω ≈ 48.6°", "3 ASPHERICAL SURFACES (2 ELEMENTS)"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 25,
  focalLengthDesign: 25.0,
  apertureMarketing: 1.4,
  apertureDesign: 1.44,
  lensMounts: ["micro-four-thirds"],
  imageFormat: "four-thirds",
  patentYear: 2013,
  elementCount: 9,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 2.0006,
      vd: 25.46,
      fl: 29.8,
      glass: "TAFD40 (HOYA)",
      apd: false,
      role: "UHR front positive meniscus — high-index niobium phosphate flint reduces surface curvatures for SA control at f/1.4",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      fl: -16.3,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Negative meniscus completing G1A — pre-bends peripheral rays to reduce coma in G1B",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.78,
      fl: -11.1,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Dense flint in L3+L4 doublet — provides chromatic correction at Gauss core entrance",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 14.5,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Lanthanum crown in L3+L4 doublet — achromatizing partner to L3",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 109.1,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Weak positive meniscus, concave to object — high-order corrector plate within Gauss core",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -60.3,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Dense flint in L6+L7 doublet — mirrors L3 pairing for quasi-symmetric coma correction",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 19.5,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Lanthanum crown in L6+L7 doublet — primary convergence, rear half of Gauss core",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.73077,
      vd: 40.5,
      fl: -40.3,
      glass: "731405 - moldable flint (M-LAF81 code match; patent nd=1.73077, vd=40.50)",
      apd: false,
      role: "Single-element inner-focus group (G2) — lightweight negative meniscus with aspherical front for SA stability across focus range",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.7725,
      vd: 49.62,
      fl: 26.3,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Fixed rear group (G3) — dual-asph biconvex for field flattening and exit telecentricity on MFT sensor",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 21.177, d: 5.484, nd: 2.0006, elemId: 1, sd: 16.0 },
    { label: "2", R: 63.532, d: 2.26, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "3", R: 58.354, d: 0.85, nd: 1.83481, elemId: 2, sd: 9.5 },
    { label: "4", R: 10.98, d: 8.267, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "5", R: -15.293, d: 0.85, nd: 1.84666, elemId: 3, sd: 8.5 },
    { label: "6", R: 24.969, d: 5.702, nd: 1.883, elemId: 4, sd: 8.5 },
    { label: "7", R: -23.599, d: 0.15, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "8", R: -54.332, d: 1.852, nd: 1.883, elemId: 5, sd: 10.5 },
    { label: "9", R: -35.3, d: 0.15, nd: 1.0, elemId: 0, sd: 10.8 },
    { label: "10", R: 37.631, d: 0.85, nd: 1.84666, elemId: 6, sd: 10.8 },
    { label: "11", R: 21.434, d: 5.165, nd: 1.883, elemId: 7, sd: 10.5 },
    { label: "12", R: -76.669, d: 1.018, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "STO", R: 1e15, d: 2.8, nd: 1.0, elemId: 0, sd: 9.2 },
    { label: "14A", R: 178.946, d: 1.0, nd: 1.73077, elemId: 8, sd: 8.5 },
    { label: "15", R: 25.25, d: 10.219, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "16A", R: 75.959, d: 4.222, nd: 1.7725, elemId: 9, sd: 11.5 },
    { label: "17A", R: -27.095, d: 21.1597, nd: 1.0, elemId: 0, sd: 11.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "14A": {
      K: 0,
      A4: -1.4596e-5,
      A6: -4.8875e-8,
      A8: 1.6079e-9,
      A10: -1.3165e-11,
      A12: 3.9375e-14,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: 2.3571e-6,
      A6: 4.1884e-7,
      A8: -8.8466e-9,
      A10: 8.624e-11,
      A12: -2.8802e-13,
      A14: 0,
    },
    "17A": {
      K: 0,
      A4: 1.3251e-5,
      A6: 2.7617e-7,
      A8: -5.5022e-9,
      A10: 5.2887e-11,
      A12: -1.6396e-13,
      A14: 0,
    },
  },

  /* ── Variable air spacings (inner focus) ──
   *  G2 (L8) moves toward image on close focus.
   *  d_STO increases, d15 decreases; Bf constant.
   *  Patent tabulates infinity and 1:40 (d0 ≈ 998 mm).
   *  Close-focus values below computed for production MFD = 0.30 m
   *  via paraxial conjugate solve.
   */
  var: {
    STO: [2.8, 7.8536],
    "15": [10.219, 5.1654],
  },

  varLabels: [
    ["STO", "D(STO)"],
    ["15", "BF(L8)"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1A", fromSurface: "1", toSurface: "4" },
    { text: "G1B", fromSurface: "5", toSurface: "12" },
    { text: "G2 (FOCUS)", fromSurface: "14A", toSurface: "15" },
    { text: "G3", fromSurface: "16A", toSurface: "17A" },
  ],

  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription: "Inner focus — single negative meniscus L8 (G2) moves toward image. G1, stop, G3, and BFD fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 1.44,
  fstopSeries: [1.4, 1.8, 2, 2.5, 2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
