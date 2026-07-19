import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Sigma 85mm F1.4 DG HSM | Art                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP2018-5099A Example 4 (Sigma Corporation).         ║
 * ║  Modified double-Gauss, floating rear focus.                      ║
 * ║  14 elements / 12 groups, 2 aspherical surfaces (on L14).         ║
 * ║  Focus: Floating rear — G2A and G2B move at different speeds.     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters.  Estimated via combined    ║
 * ║    marginal + chief ray trace (30% field G1, 20% G2A, marginal    ║
 * ║    only post-stop) with 8% mechanical clearance.  All validated   ║
 * ║    against edge-thickness, sd/|R|, and cross-gap sag constraints. ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ Cover glass / LPF excluded; BFD is air-equivalent           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sigma-85f14-art",
  maker: "Sigma",
  name: "SIGMA 85mm f/1.4 DG HSM | Art",
  subtitle: "JP2018-5099A Example 4 — Sigma / Ueda Yūki",
  specs: ["14 ELEMENTS / 12 GROUPS", "f ≈ 83.4 mm", "F/1.46", "2ω ≈ 29.1°", "2 ASPHERICAL SURFACES"],

  /* ── Metadata ── */
  focalLengthMarketing: 85,
  focalLengthDesign: 83.44,
  apertureMarketing: 1.4,
  apertureDesign: 1.46,
  lensMounts: ["sigma-sa", "canon-ef", "nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2018-005099 A",
  patentAuthors: ["Yuki Ueda"],
  patentAssignees: ["Sigma Corporation"],
  patentYear: 2018,
  elementCount: 14,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Pos. Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 364.5,
      glass: "TAC8 (HOYA)",
      apd: false,
      dPgF: -0.0047,
      role: "Front collector — positive meniscus convex to object, minimizes SA at full aperture",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Pos. Meniscus",
      nd: 1.55032,
      vd: 75.5,
      fl: 180.9,
      glass: "FCD705 (HOYA)",
      apd: "patent",
      apdNote: "ΔPgF = +0.0275 — SLD (Special Low Dispersion) glass, Lp1 in patent framework",
      dPgF: 0.0275,
      role: "Primary SLD element — highest νd positive element in G1, governs condition (1)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Neg. Meniscus",
      nd: 1.6134,
      vd: 44.27,
      fl: -164.3,
      glass: "E-ADF10 (HOYA)",
      apd: false,
      dPgF: -0.0053,
      role: "Secondary-spectrum corrector — strongest negative ΔPgF, paired with L2 for g-line correction",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.26,
      fl: -118.4,
      glass: "J-KZFH9 (Hikari)",
      apd: false,
      dPgF: -0.0005,
      role: "Petzval-sum corrector — strongest negative element in G1, flattens field curvature",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.26,
      fl: -141.1,
      glass: "J-KZFH9 (Hikari)",
      apd: false,
      dPgF: -0.0005,
      role: "Symmetric biconcave — zero coma/distortion for axial beam, clean Petzval correction",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      fl: 165.5,
      glass: "E-FDS1-W (HOYA)",
      apd: "patent",
      apdNote: "ΔPgF = +0.0281 — ultra-high-index anomalous-dispersion element, Lp2 in patent framework",
      dPgF: 0.0281,
      role: "High-index APD corrector — shares positive power while enabling secondary-spectrum correction",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.55032,
      vd: 75.5,
      fl: 114.2,
      glass: "FCD705 (HOYA)",
      apd: "patent",
      apdNote: "ΔPgF = +0.0275 — second SLD element, same glass as L2",
      dPgF: 0.0275,
      role: "Rear G1 convergence — strongest positive in G1, final convergence before G1-G2 gap",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Pos. Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 150.2,
      glass: "TAFD30 (HOYA)",
      apd: false,
      dPgF: -0.0095,
      role: "G2A lead element — high-index meniscus, moderate positive power at wide aperture",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Pos. Meniscus",
      nd: 1.8042,
      vd: 46.5,
      fl: 83.8,
      glass: "TAF105 (HOYA)",
      apd: false,
      dPgF: -0.0075,
      cemented: "L9L10",
      role: "Cemented doublet front — strong positive meniscus, controls beam angles entering stop",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Neg. Meniscus",
      nd: 1.69895,
      vd: 30.05,
      fl: -60.3,
      glass: "E-FD15 (HOYA)",
      apd: false,
      dPgF: 0.0086,
      cemented: "L9L10",
      role: "Cemented doublet rear — chromatic corrector for G2A, steep rear radius controls off-axis angles",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.26,
      fl: -26.8,
      glass: "J-KZFH9 (Hikari)",
      apd: false,
      dPgF: -0.0005,
      cemented: "L11L12",
      role: "G2B doublet front (Sm1) — coma correction via concave-to-object surface, Petzval flattening",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 31.5,
      glass: "TAFD30 (HOYA)",
      apd: false,
      dPgF: -0.0095,
      cemented: "L11L12",
      role: "G2B doublet rear — strong positive, chromatic pairing with L11",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.17,
      fl: -66.7,
      glass: "S-NBH52 (OHARA)",
      apd: false,
      dPgF: 0.0058,
      role: "Field flattener (Sm2) — distributes coma correction per condition (7), Petzval corrector",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.85135,
      vd: 40.1,
      fl: 38.4,
      glass: "M-TAFD305 (HOYA)",
      apd: false,
      dPgF: -0.0067,
      role: "Rear aspherical corrector — strongest positive element, PGM, SA correction post-stop",
    },
  ],

  /* ── Surface prescription ──
   *  Patent: JP2018-5099A Example 4, surfaces 1–27 (LPF surfaces 28–29 excluded).
   *  BFD is air-equivalent: d27_patent + LPF_air_equiv + BF = 37.0799 + 0.9524 + 1.0 = 39.032 mm.
   */
  surfaces: [
    // ── G1: 7 elements, fixed during focus ──
    { label: "1", R: 104.0442, d: 4.4464, nd: 1.72916, elemId: 1, sd: 40.5 }, // L1 front
    { label: "2", R: 167.8974, d: 0.15, nd: 1.0, elemId: 0, sd: 39.5 }, // L1 rear → air
    { label: "3", R: 61.9455, d: 9.6589, nd: 1.55032, elemId: 2, sd: 39.5 }, // L2 front
    { label: "4", R: 154.9253, d: 0.434, nd: 1.0, elemId: 0, sd: 36.0 }, // L2 rear → air
    { label: "5", R: 122.6403, d: 2.8438, nd: 1.6134, elemId: 3, sd: 36.0 }, // L3 front
    { label: "6", R: 54.8348, d: 12.7043, nd: 1.0, elemId: 0, sd: 29.5 }, // L3 rear → air
    { label: "7", R: -143.9032, d: 1.7088, nd: 1.738, elemId: 4, sd: 29.0 }, // L4 front
    { label: "8", R: 223.697, d: 4.928, nd: 1.0, elemId: 0, sd: 30.5 }, // L4 rear → air
    { label: "9", R: -208.5938, d: 1.7316, nd: 1.738, elemId: 5, sd: 31.0 }, // L5 front
    { label: "10", R: 208.5938, d: 4.3329, nd: 1.0, elemId: 0, sd: 32.5 }, // L5 rear → air
    { label: "11", R: 304.291, d: 4.7667, nd: 1.92286, elemId: 6, sd: 34.0 }, // L6 front
    { label: "12", R: -304.291, d: 1.0, nd: 1.0, elemId: 0, sd: 34.5 }, // L6 rear → air
    { label: "13", R: 109.7199, d: 9.4961, nd: 1.55032, elemId: 7, sd: 33.0 }, // L7 front
    { label: "14", R: -142.6359, d: 16.6759, nd: 1.0, elemId: 0, sd: 33.0 }, // L7 rear → air [VAR: G1–G2A gap]

    // ── G2A: L8 singlet + L9/L10 cemented doublet (focus group A) ──
    { label: "15", R: 55.3534, d: 4.4778, nd: 1.883, elemId: 8, sd: 29.0 }, // L8 front
    { label: "16", R: 91.4164, d: 0.1508, nd: 1.0, elemId: 0, sd: 27.5 }, // L8 rear → air
    { label: "17", R: 32.7021, d: 8.4339, nd: 1.8042, elemId: 9, sd: 27.5 }, // L9 front (cem. doublet)
    { label: "18", R: 56.2353, d: 1.6471, nd: 1.69895, elemId: 10, sd: 21.4 }, // L9/L10 junction → L10
    { label: "19", R: 23.792, d: 11.1146, nd: 1.0, elemId: 0, sd: 21.4 }, // L10 rear → air [VAR: G2A–STO gap]

    // ── Aperture stop ──
    { label: "STO", R: 1e15, d: 4.7467, nd: 1.0, elemId: 0, sd: 17.6 }, // 9-blade diaphragm

    // ── G2B: L11/L12 cemented doublet + L13 singlet + L14 double-asph (focus group B) ──
    { label: "21", R: -57.4621, d: 1.3979, nd: 1.738, elemId: 11, sd: 16.3 }, // L11 front (Sm1)
    { label: "22", R: 30.4304, d: 7.8411, nd: 1.883, elemId: 12, sd: 16.2 }, // L11/L12 junction → L12
    { label: "23", R: -286.5983, d: 2.1988, nd: 1.0, elemId: 0, sd: 16.2 }, // L12 rear → air
    { label: "24", R: -73.544, d: 1.4194, nd: 1.6727, elemId: 13, sd: 15.1 }, // L13 front (Sm2)
    { label: "25", R: 116.0752, d: 0.5209, nd: 1.0, elemId: 0, sd: 15.0 }, // L13 rear → air
    { label: "26A", R: 74.3249, d: 8.0, nd: 1.85135, elemId: 14, sd: 15.0 }, // L14 front (asph)
    { label: "27A", R: -55.4665, d: 39.032, nd: 1.0, elemId: 0, sd: 14.4 }, // L14 rear (asph) → image [VAR: air-equiv BFD]
  ],

  /* ── Aspherical coefficients ──
   *  Standard even-order sag equation with K (conic) and A4–A12.
   *  K = 0 for both surfaces (spherical base); only A4 and A6 are nonzero.
   *  Surfaces 26 and 27 in patent numbering.
   */
  asph: {
    "26A": {
      K: 0,
      A4: -2.314554e-6,
      A6: -6.999263e-10,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "27A": {
      K: 0,
      A4: 1.341936e-6,
      A6: -1.267249e-9,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings (floating rear focus) ──
   *  Three variable gaps: G1→G2A, G2A→STO (differential G2A/G2B motion), BFD.
   *  Close focus at 848 mm (production MFD: 850 mm).
   *  BFD is air-equivalent (patent d27 + LPF air-equiv + BF).
   *    Infinity: 37.0799 + 1.45/1.52301 + 1.0 = 39.032 mm
   *    Close:    47.4637 + 1.45/1.52301 + 1.0 = 49.416 mm
   *  Gap conservation: d14 + d19 + d27_patent = 64.870 (INF) → 64.910 (close); Δ = 0.04 mm (patent rounding).
   */
  var: {
    "14": [16.6759, 6.0661],
    "19": [11.1146, 11.3807],
    "27A": [39.032, 49.416],
  },

  varLabels: [
    ["14", "G1–G2A"],
    ["19", "G2A–STO"],
    ["27A", "BFD"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "14" },
    { text: "G2A", fromSurface: "15", toSurface: "19" },
    { text: "G2B", fromSurface: "21", toSurface: "27A" },
  ],

  doublets: [
    { text: "L9/L10", fromSurface: "17", toSurface: "19" },
    { text: "L11/L12", fromSurface: "21", toSurface: "23" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.85,
  focusDescription: "Floating rear focus — G1 fixed, G2A and G2B move independently toward object at close focus.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.28,
} satisfies LensDataInput;

export default LENS_DATA;
