import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — PANASONIC LEICA DG SUMMILUX 25mm f/1.4 ASPH.          ║
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
  schema: 2,
  key: "panasonic-leica-dg-25f14",
  maker: "Panasonic",
  name: "PANASONIC LEICA DG SUMMILUX 25mm f/1.4 ASPH.",
  subtitle: "JP 2013-3324 A EXAMPLE 2 — SIGMA / UEMURA",

  catalog: {
    lensMounts: ["micro-four-thirds"],
    imageFormat: "four-thirds",
    specs: ["9 ELEMENTS / 7 GROUPS", "f ≈ 25.0 mm", "F/1.44", "2ω ≈ 48.6°", "3 ASPHERICAL SURFACES (2 ELEMENTS)"],
    elementCount: 9,
    groupCount: 7,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 25, design: 25.0 },
    fNumber: { marketing: 1.4, design: 1.44 },
  },

  source: {
    patentNumber: "JP 2013-003324 A",
    patentYear: 2013,
    authors: ["Yutaka Kamimura"],
    assignees: ["Sigma Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 2.0006,
      vd: 25.46,
      focalLengthMm: 29.8,
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
      focalLengthMm: -16.3,
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
      focalLengthMm: -11.1,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Dense flint in L3+L4 doublet — provides chromatic correction at Gauss core entrance",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 14.5,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Lanthanum crown in L3+L4 doublet — achromatizing partner to L3",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 109.1,
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
      focalLengthMm: -60.3,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Dense flint in L6+L7 doublet — mirrors L3 pairing for quasi-symmetric coma correction",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 19.5,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Lanthanum crown in L6+L7 doublet — primary convergence, rear half of Gauss core",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.73077,
      vd: 40.5,
      focalLengthMm: -40.3,
      glass: "M-LAF81 (Hoya, 731405)",
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
      focalLengthMm: 26.3,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Fixed rear group (G3) — dual-asph biconvex for field flattening and exit telecentricity on MFT sensor",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 21.177, d: 5.484, sd: 16.0, medium: 1 },
    { label: "2", R: 63.532, d: 2.26, sd: 14.0 },
    { label: "3", R: 58.354, d: 0.85, sd: 9.5, medium: 2 },
    { label: "4", R: 10.98, d: 8.267, sd: 8.5 },
    { label: "5", R: -15.293, d: 0.85, sd: 8.5, medium: 3 },
    { label: "6", R: 24.969, d: 5.702, sd: 8.5, medium: 4 },
    { label: "7", R: -23.599, d: 0.15, sd: 10.5 },
    { label: "8", R: -54.332, d: 1.852, sd: 10.5, medium: 5 },
    { label: "9", R: -35.3, d: 0.15, sd: 10.8 },
    { label: "10", R: 37.631, d: 0.85, sd: 10.8, medium: 6 },
    { label: "11", R: 21.434, d: 5.165, sd: 10.5, medium: 7 },
    { label: "12", R: -76.669, d: 1.018, sd: 9.8 },
    { label: "STO", R: "flat" },
    {
      label: "14A",
      R: 178.946,
      d: 1.0,
      sd: 8.5,
      medium: 8,
      asphere: { K: 0, A4: -1.4596e-5, A6: -4.8875e-8, A8: 1.6079e-9, A10: -1.3165e-11, A12: 3.9375e-14 },
    },
    { label: "15", R: 25.25, sd: 8.5 },
    {
      label: "16A",
      R: 75.959,
      d: 4.222,
      sd: 11.5,
      medium: 9,
      asphere: { K: 0, A4: 2.3571e-6, A6: 4.1884e-7, A8: -8.8466e-9, A10: 8.624e-11, A12: -2.8802e-13 },
    },
    {
      label: "17A",
      R: -27.095,
      d: 21.1597,
      sd: 11.5,
      asphere: { K: 0, A4: 1.3251e-5, A6: 2.7617e-7, A8: -5.5022e-9, A10: 5.2887e-11, A12: -1.6396e-13 },
    },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.3,
    description: "Inner focus — single negative meniscus L8 (G2) moves toward image. G1, stop, G3, and BFD fixed.",
  },

  /* (moved from var) ── Variable air spacings (inner focus) ──
   *  G2 (L8) moves toward image on close focus.
   *  d_STO increases, d15 decreases; Bf constant.
   *  Patent tabulates infinity and 1:40 (d0 ≈ 998 mm).
   *  Close-focus values below computed for production MFD = 0.30 m
   *  via paraxial conjugate solve.
   */
  gaps: { STO: { label: "D(STO)", values: [[2.8, 7.8536]] }, "15": { label: "BF(L8)", values: [[10.219, 5.1654]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.44, fStops: [1.4, 1.8, 2, 2.5, 2.8, 3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16] },

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

  /* ── Layout tuning ── */
  layout: { scFill: 0.55, yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
