import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SIGMA 30mm f/2.8 (DP2 Merrill)              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2013-156459 A, Example 4 (Sigma / Kōno).         ║
 * ║  Telephoto-type imaging system for APS-C Foveon X3 sensor.         ║
 * ║  8 elements / 6 groups, 1 aspherical surface.                      ║
 * ║  Focus: front-group unit focus (G1 translates forward).            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. SDs estimated from         ║
 * ║    combined marginal + chief ray trace at f/2.86 with 60%          ║
 * ║    field fraction and ~5–10% mechanical clearance.                 ║
 * ║                                                                    ║
 * ║  COVER GLASS CONVENTION:                                           ║
 * ║    Patent filter F (surfaces 16–17, nd = 1.52301, d = 1.2 mm)     ║
 * ║    excluded. Air-equivalent path folded into BFD on surface 15:    ║
 * ║    BFD = 1.0 + 1.2/1.52301 + 4.93 ≈ 6.72 mm.                     ║
 * ║                                                                    ║
 * ║  CLOSE-FOCUS EXTRAPOLATION:                                        ║
 * ║    Patent publishes data at ∞ and 1000 mm only. Close-focus gap    ║
 * ║    at MFD = 0.28 m solved via paraxial finite-conjugate trace.     ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sigma-dp2m-30f28",
  maker: "Sigma",
  name: "SIGMA 30mm f/2.8 (DP2 Merrill)",
  subtitle: "JP 2013-156459 A Example 4 — Sigma / Kōno",
  specs: ["8 ELEMENTS / 6 GROUPS", "f ≈ 29.6 mm", "F/2.8", "2ω ≈ 52.1°", "1 ASPHERICAL SURFACE"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 30,
  focalLengthDesign: 29.6,
  apertureMarketing: 2.8,
  apertureDesign: 2.86,
  patentYear: 2013,
  elementCount: 8,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 15.9,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Front positive collector; high-index lanthanum glass minimises curvatures and Petzval contribution per unit power.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.17,
      fl: -23.3,
      glass: "S-TIM25 (OHARA)",
      apd: false,
      role: "Achromatising partner to L1; rear surface establishes concentric symmetry with the stop.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.05,
      fl: -11.0,
      glass: "S-TIM28 (OHARA)",
      apd: false,
      role: "Symmetric biconcave (R₅ = −R₆); dominant Petzval flattener within G1. Cemented to L4.",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 15.3,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Positive partner of the L3–L4 post-stop doublet; same glass as L1 for lateral-color symmetry.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.7725,
      vd: 49.47,
      fl: 19.8,
      glass: "S-LAL59 (OHARA, probable)",
      apd: false,
      role: "Final G1 positive element; rear aspherical surface corrects spherical aberration across the aperture.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.89,
      fl: -107.0,
      glass: "S-TIM2 (OHARA)",
      apd: false,
      role: "Weakly negative meniscus beginning the G2 diverging relay; gentle field-flattening contribution.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.53172,
      vd: 48.84,
      fl: -23.6,
      glass: "S-TIL6 (OHARA)",
      apd: false,
      role: "Strongest negative element in G2; low-index glass amplifies Petzval-flattening effect at the tight front radius.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.25,
      fl: 31.1,
      glass: "S-LAH79 (OHARA)",
      apd: false,
      role: "Final element; bends peripheral rays toward the axis for image-side quasi-telecentricity (Foveon sensor compatibility).",
    },
  ],

  /* ── Surface prescription ──
   *  Patent surfaces 1–15, with S4 → STO and S9 → 9A (aspherical).
   *  Filter F (patent S16–S17) excluded; air-equivalent BFD on S15.
   */
  surfaces: [
    /* ── G1A: L1 + L2 cemented doublet ── */
    { label: "1", R: 15.36, d: 3.5, nd: 1.883, elemId: 1, sd: 7.5 },
    { label: "2", R: -151.19, d: 0.9, nd: 1.6727, elemId: 2, sd: 6.2 },
    { label: "3", R: 17.5, d: 2.45, nd: 1.0, elemId: 0, sd: 5.8 },

    /* ── Aperture stop ── */
    { label: "STO", R: 1e15, d: 3.58, nd: 1.0, elemId: 0, sd: 4.13 },

    /* ── G1B: L3 + L4 cemented doublet + L5 singlet ── */
    { label: "5", R: -15.47, d: 0.8, nd: 1.69895, elemId: 3, sd: 5.3 },
    { label: "6", R: 15.47, d: 3.15, nd: 1.883, elemId: 4, sd: 5.5 },
    { label: "7", R: -94.35, d: 0.69, nd: 1.0, elemId: 0, sd: 6.2 },
    { label: "8", R: 34.82, d: 3.35, nd: 1.7725, elemId: 5, sd: 6.5 },
    { label: "9A", R: -26.18, d: 2.32, nd: 1.0, elemId: 0, sd: 6.8 },

    /* ── G2: L6, L7, L8 air-spaced ── */
    { label: "10", R: 150.15, d: 0.9, nd: 1.58144, elemId: 6, sd: 6.9 },
    { label: "11", R: 43.88, d: 5.46, nd: 1.0, elemId: 0, sd: 6.9 },
    { label: "12", R: -12.38, d: 0.9, nd: 1.53172, elemId: 7, sd: 7.3 },
    { label: "13", R: -1000.0, d: 0.15, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "14", R: 63.82, d: 4.55, nd: 1.91082, elemId: 8, sd: 7.6 },
    { label: "15", R: -49.1, d: 6.72, nd: 1.0, elemId: 0, sd: 8.3 },
  ],

  /* ── Aspherical coefficients ──
   *  Surface 9 (rear of L5). Conic constant K = 0 (spherical base).
   *  Patent convention: standard even-polynomial sag equation, ¶0046.
   *  Only A4 and A6 are non-zero; A8, A10 = 0.
   */
  asph: {
    "9A": {
      K: 0,
      A4: 5.9228e-5,
      A6: -9.4471e-9,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings ──
   *  Front-group unit focus: G1 (L1–L5 + STO) translates forward.
   *  Only d9 (L5 rear → L6 front) changes.
   *  Patent: d9 = 2.32 (∞), 2.88 (1000 mm).
   *  MFD = 0.28 m: d9 ≈ 4.65 (solved via paraxial finite-conjugate trace).
   */
  var: {
    "9A": [2.32, 4.65],
  },
  varLabels: [["9A", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "9A" },
    { text: "G2", fromSurface: "10", toSurface: "15" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "5", toSurface: "7" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.28,
  focusDescription: "Front-group unit focus: G1 (L1–L5 + aperture stop) translates forward along the optical axis.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  apertureBlades: 9,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
