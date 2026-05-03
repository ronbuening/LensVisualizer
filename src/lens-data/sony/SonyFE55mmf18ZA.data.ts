import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SONY SONNAR T* FE 55mm F1.8 ZA              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2015/0092100 A1, Example 1 (Tables 1–3;          ║
 * ║    Sony Corporation / Yonghua Chen, Naoki Miyagawa).               ║
 * ║  Three-group inner-focus design, positive–negative–positive.       ║
 * ║  7 elements / 5 groups, 5 aspherical surfaces on 3 elements.      ║
 * ║  Focus: inner focus — G2 (single element L21) translates along    ║
 * ║    the axis. G1, STO, and G3 are fixed.                           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not published in the patent. Estimated via combined marginal    ║
 * ║    + chief ray trace at the design f-number and 60% field          ║
 * ║    fraction, with ~10% mechanical clearance. Front elements        ║
 * ║    constrained by 49 mm filter thread diameter.                    ║
 * ║                                                                    ║
 * ║  NOTE ON CLOSE FOCUS:                                              ║
 * ║    Patent publishes variable gaps at infinity and β = −0.033       ║
 * ║    (~1.68 m). Close-focus gaps at MFD = 0.5 m are extrapolated    ║
 * ║    via paraxial inner-focus solve (D7 + D9 = 16.48 mm constant). ║
 * ║                                                                    ║
 * ║  COVER GLASS:                                                      ║
 * ║    Patent specifies SG: nd = 1.516798, d = 2.00 mm, followed by  ║
 * ║    1.00 mm air to image. Excluded from surfaces array; physical   ║
 * ║    path folded into air-equivalent BFD on surface 13.             ║
 * ║    BFD = 11.78 + 2.00/1.5168 + 1.00 ≈ 14.10 mm.                 ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-sonnar-fe-55f18-za",
  maker: "Sony",
  name: "SONY SONNAR T* FE 55mm F1.8 ZA",
  subtitle: "US 2015/0092100 A1 Example 1 — Sony / Chen, Miyagawa",
  specs: ["7 ELEMENTS / 5 GROUPS", "f ≈ 53.6 mm", "F/1.8", "2ω ≈ 43°", "5 ASPHERICAL SURFACES (3 ELEMENTS)"],

  focalLengthMarketing: 55,
  focalLengthDesign: 53.61,
  apertureMarketing: 1.8,
  apertureDesign: 1.86,
  patentYear: 2015,
  elementCount: 7,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.9,
      fl: -36.6,
      glass: "S-TIM2 (OHARA)",
      apd: false,
      role: "Front negative of G1 first doublet. Diverges incoming beam to reduce ray height on subsequent positive elements, moderating their spherical aberration contribution. Provides chromatic under-correction that L12 compensates.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      fl: 33.8,
      glass: "S-LAL18 (OHARA)",
      apd: false,
      role: "Front positive of G1 first doublet. Lanthanum crown provides strong convergence with controlled SA contribution. Cemented interface with L11 produces near-achromatic correction for the first doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.846663,
      vd: 23.8,
      fl: -119.9,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Rear negative of G1 second doublet. Dense flint with high dispersion provides chromatic correction, negative Petzval contribution for field flattening, and gentle curvatures from the high index.",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.768015,
      vd: 49.2,
      fl: 37.6,
      glass: "M-TAF101 (HOYA)",
      apd: false,
      role: "Rear positive of G1 second doublet. Aspherical rear surface (S6A) corrects residual spherical aberration from G1 before the aperture stop. Moldable lanthanum flint consistent with PGM aspherical fabrication.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.487489,
      vd: 70.4,
      fl: -49.3,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Focus group (G2). Double-sided aspherics control SA and coma variation during focus travel. Low-index fluorocrown minimizes weight for linear-motor AF and suppresses chromatic focus shift.",
    },
    {
      id: 6,
      name: "L31",
      label: "Element 6",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.592014,
      vd: 67.0,
      fl: 38.9,
      glass: "Fluorocrown / phosphate crown, PGM class (592/670, uncertain)",
      apd: false,
      role: "G3 front sub-group (GF). Primary positive relay element; nearly symmetric biconvex form with double-sided aspherics for higher-order SA, coma, and astigmatism correction. Thickest element in the system (12 mm).",
    },
    {
      id: 7,
      name: "L32",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.1,
      fl: -49.3,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      role: "G3 rear sub-group (GR). Negative field-flattener and distortion corrector. High dispersion relative to L31 provides chromatic correction across the G3 sub-system. Positioned far from stop for maximum off-axis leverage.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: First cemented doublet (L11 + L12) ──
    { label: "1", R: -46.604, d: 3.78, nd: 1.58144, elemId: 1, sd: 19.5 },
    { label: "2", R: 40.397, d: 7.54, nd: 1.72916, elemId: 2, sd: 19.5 },
    { label: "3", R: -58.437, d: 0.4, nd: 1.0, elemId: 0, sd: 18.4 },

    // ── G1: Second cemented doublet (L13 + L14) ──
    { label: "4", R: 32.361, d: 1.6, nd: 1.846663, elemId: 3, sd: 18.5 },
    { label: "5", R: 23.982, d: 5.44, nd: 1.768015, elemId: 4, sd: 18.0 },
    { label: "6A", R: 127.461, d: 2.78, nd: 1.0, elemId: 0, sd: 15.5 },

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 2.81, nd: 1.0, elemId: 0, sd: 13.2 },

    // ── G2: Focus group (L21) ──
    { label: "8A", R: 229.883, d: 1.0, nd: 1.487489, elemId: 5, sd: 13.5 },
    { label: "9A", R: 21.728, d: 13.67, nd: 1.0, elemId: 0, sd: 13.0 },

    // ── G3: Front sub-group GF (L31) ──
    { label: "10A", R: 43.205, d: 12.0, nd: 1.592014, elemId: 6, sd: 16.5 },
    { label: "11A", R: -44.134, d: 12.35, nd: 1.0, elemId: 0, sd: 16.5 },

    // ── G3: Rear sub-group GR (L32) ──
    { label: "12", R: -18.057, d: 1.2, nd: 1.69895, elemId: 7, sd: 13.5 },
    // BFD: 11.78 air + 2.00/1.5168 CG + 1.00 air ≈ 14.10 mm (air-equivalent to image)
    { label: "13", R: -39.016, d: 14.1, nd: 1.0, elemId: 0, sd: 13.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "6A": {
      K: 0,
      A4: 4.72026e-6,
      A6: -6.13511e-9,
      A8: 3.19538e-11,
      A10: -5.08717e-14,
      A12: 0,
      A14: 0,
    },
    "8A": {
      K: 0,
      A4: -1.53071e-5,
      A6: 5.95902e-8,
      A8: -1.03151e-10,
      A10: -1.18635e-13,
      A12: 0,
      A14: 0,
    },
    "9A": {
      K: 0,
      A4: -1.66843e-5,
      A6: 5.20407e-8,
      A8: 3.77076e-12,
      A10: -6.66338e-13,
      A12: 0,
      A14: 0,
    },
    "10A": {
      K: 0,
      A4: 4.5895e-6,
      A6: -1.29121e-8,
      A8: 7.03681e-11,
      A10: -6.07907e-13,
      A12: 0,
      A14: 0,
    },
    "11A": {
      K: 0,
      A4: -3.28037e-6,
      A6: -2.72677e-8,
      A8: 9.31069e-11,
      A10: -5.99753e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (inner focus) ──
   *  G2 (L21) translates along axis; D_STO and D_9A change.
   *  Infinity gaps from patent Table 2. Close-focus gaps at MFD = 0.5 m
   *  computed via paraxial inner-focus solve (gap sum = 16.48 mm conserved).
   */
  var: {
    STO: [2.81, 8.08],
    "9A": [13.67, 8.4],
  },
  varLabels: [
    ["STO", "D7"],
    ["9A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6A" },
    { text: "G2 (−)", fromSurface: "8A", toSurface: "9A" },
    { text: "G3 (+)", fromSurface: "10A", toSurface: "13" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6A" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.5,
  focusDescription: "Inner focus — G2 (single element L21) translates via linear motor. G1, STO, and G3 fixed.",

  /* ── Aperture configuration ── */
  nominalFno: 1.8,
  fstopSeries: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
