import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  NOTE ON PARTIAL DISPERSION:                                       ║
 * ║    The patent lists PgF per glass. `dPgF` is PgF minus the         ║
 * ║    engine's normal line (0.6438 − 0.001682·νd), not the patent's   ║
 * ║    ΔPgF = PgF − 0.64833 + 0.00180·νd, which the analysis quotes.   ║
 * ║    L8, L12 and L14 already sat within 0.0003 of the engine-line    ║
 * ║    value (the lines cross near νd 38.4) and keep four decimals.    ║
 * ║                                                                    ║
 * ║  LPF (patent surfaces 28–29: 1.45 mm, nd 1.52301, νd 58.59)       ║
 * ║  is modeled in `rearPlates` (traced, not drawn); 27A keeps the    ║
 * ║  patent d27 to the LPF: 37.0799 mm (inf) / 47.4637 mm (close).    ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: mechanical parts (LPF: `rearPlates`)         ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "sigma-85f14-art",
  maker: "Sigma",
  name: "SIGMA 85mm f/1.4 DG HSM | Art",
  subtitle: "JP2018-5099A Example 4 — Sigma / Ueda Yūki",

  catalog: {
    lensMounts: ["sigma-sa", "canon-ef", "nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["14 ELEMENTS / 12 GROUPS", "f ≈ 83.4 mm", "F/1.46", "2ω ≈ 29.1°", "2 ASPHERICAL SURFACES"],
    elementCount: 14,
    groupCount: 12,
    /* ── Metadata ── */
    focalLengthMm: { marketing: 85, design: 83.44 },
    fNumber: { marketing: 1.4, design: 1.46 },
  },

  source: {
    patentNumber: "JP 2018-005099 A",
    patentYear: 2018,
    authors: ["Yuki Ueda"],
    assignees: ["Sigma Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Pos. Meniscus",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: 364.5,
      glass: "TAC8 (HOYA)",
      apd: false,
      role: "Front collector — positive meniscus convex to object, minimizes SA at full aperture",
      dPgF: -0.006645,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Pos. Meniscus",
      nd: 1.55032,
      vd: 75.5,
      focalLengthMm: 180.9,
      glass: "FCD705 (HOYA)",
      apd: "patent",
      apdNote:
        "Patent PgF = 0.5399; ΔPgF = +0.0275 by the patent's line (PgF − 0.64833 + 0.00180·νd), runtime dPgF +0.02309 — SLD (Special Low Dispersion) glass, Lp1 in patent framework",
      role: "Primary SLD element — highest νd positive element in G1, governs condition (1)",
      dPgF: 0.023091,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Neg. Meniscus",
      nd: 1.6134,
      vd: 44.27,
      focalLengthMm: -164.3,
      glass: "S-NBM51 (OHARA; exact 613443 coordinate)",
      apd: false,
      role: "Secondary-spectrum corrector — strongest negative ΔPgF, paired with L2 for g-line correction",
      dPgF: -0.006038,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.26,
      focalLengthMm: -118.4,
      glass: "J-KZFH9 (Hikari)",
      apd: false,
      role: "Petzval-sum corrector — strongest negative element in G1, flattens field curvature",
      dPgF: 0.000261,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.26,
      focalLengthMm: -141.1,
      glass: "J-KZFH9 (Hikari)",
      apd: false,
      role: "Symmetric biconcave — zero coma/distortion for axial beam, clean Petzval correction",
      dPgF: 0.000261,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: 165.5,
      glass: "E-FDS1-W (HOYA)",
      apd: "patent",
      apdNote:
        "Patent PgF = 0.6388; ΔPgF = +0.0281 by the patent's line (PgF − 0.64833 + 0.00180·νd), runtime dPgF +0.03012 — ultra-high-index anomalous-dispersion element, Lp2 in patent framework",
      role: "High-index APD corrector — shares positive power while enabling secondary-spectrum correction",
      dPgF: 0.03012,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.55032,
      vd: 75.5,
      focalLengthMm: 114.2,
      glass: "FCD705 (HOYA)",
      apd: "patent",
      apdNote:
        "Patent PgF = 0.5399; ΔPgF = +0.0275 by the patent's line (PgF − 0.64833 + 0.00180·νd), runtime dPgF +0.02309 — second SLD element, same glass as L2",
      role: "Rear G1 convergence — strongest positive in G1, final convergence before G1-G2 gap",
      dPgF: 0.023091,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Pos. Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 150.2,
      glass: "TAFD30 (HOYA)",
      apd: false,
      role: "G2A lead element — high-index meniscus, moderate positive power at wide aperture",
      dPgF: -0.0095,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Pos. Meniscus",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: 83.8,
      glass: "TAF3D (HOYA catalog equivalent for patent coordinate; production supplier unspecified)",
      apd: false,
      role: "Cemented doublet front — strong positive meniscus, controls beam angles entering stop",
      cemented: "L9L10",
      dPgF: -0.008487,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Neg. Meniscus",
      nd: 1.69895,
      vd: 30.05,
      focalLengthMm: -60.3,
      glass: "E-FD15 (HOYA)",
      apd: false,
      role: "Cemented doublet rear — chromatic corrector for G2A, steep rear radius controls off-axis angles",
      cemented: "L9L10",
      dPgF: 0.009544,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.26,
      focalLengthMm: -26.8,
      glass: "J-KZFH9 (Hikari)",
      apd: false,
      role: "G2B doublet front (Sm1) — coma correction via concave-to-object surface, Petzval flattening",
      cemented: "L11L12",
      dPgF: 0.000261,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 31.5,
      glass: "TAFD30 (HOYA)",
      apd: false,
      role: "G2B doublet rear — strong positive, chromatic pairing with L11",
      cemented: "L11L12",
      dPgF: -0.0095,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.17,
      focalLengthMm: -66.7,
      glass: "S-TIM25 (OHARA)",
      apd: false,
      role: "Field flattener (Sm2) — distributes coma correction per condition (7), Petzval corrector",
      dPgF: 0.00651,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.85135,
      vd: 40.1,
      focalLengthMm: 38.4,
      glass: "M-TAFD305 (HOYA)",
      apd: false,
      role: "Rear aspherical corrector — strongest positive element, PGM, SA correction post-stop",
      dPgF: -0.0067,
    },
  ],

  /* ── Surface prescription ──
   *  Patent: JP2018-5099A Example 4, surfaces 1–27. The LPF (surfaces 28–29) is modeled in
   *  `rearPlates` (traced, not drawn); 27A keeps the patent's physical d27 to the LPF.
   */
  /* (moved from asph) ── Aspherical coefficients ──
   *  Standard even-order sag equation with K (conic) and A4–A12.
   *  K = 0 for both surfaces (spherical base); only A4 and A6 are nonzero.
   *  Surfaces 26 and 27 in patent numbering.
   */
  surfaces: [
    // ── G1: 7 elements, fixed during focus ──
    { label: "1", R: 104.0442, d: 4.4464, sd: 40.5, medium: 1 }, // L1 front
    { label: "2", R: 167.8974, d: 0.15, sd: 39.5 }, // L1 rear → air
    { label: "3", R: 61.9455, d: 9.6589, sd: 39.5, medium: 2 }, // L2 front
    { label: "4", R: 154.9253, d: 0.434, sd: 36.0 }, // L2 rear → air
    { label: "5", R: 122.6403, d: 2.8438, sd: 36.0, medium: 3 }, // L3 front
    { label: "6", R: 54.8348, d: 12.7043, sd: 29.5 }, // L3 rear → air
    { label: "7", R: -143.9032, d: 1.7088, sd: 29.0, medium: 4 }, // L4 front
    { label: "8", R: 223.697, d: 4.928, sd: 30.5 }, // L4 rear → air
    { label: "9", R: -208.5938, d: 1.7316, sd: 31.0, medium: 5 }, // L5 front
    { label: "10", R: 208.5938, d: 4.3329, sd: 32.5 }, // L5 rear → air
    { label: "11", R: 304.291, d: 4.7667, sd: 34.0, medium: 6 }, // L6 front
    { label: "12", R: -304.291, d: 1.0, sd: 34.5 }, // L6 rear → air
    { label: "13", R: 109.7199, d: 9.4961, sd: 33.0, medium: 7 }, // L7 front
    { label: "14", R: -142.6359, sd: 33.0 }, // L7 rear → air [VAR: G1–G2A gap]

    // ── G2A: L8 singlet + L9/L10 cemented doublet (focus group A) ──
    { label: "15", R: 55.3534, d: 4.4778, sd: 29.0, medium: 8 }, // L8 front
    { label: "16", R: 91.4164, d: 0.1508, sd: 27.5 }, // L8 rear → air
    { label: "17", R: 32.7021, d: 8.4339, sd: 27.5, medium: 9 }, // L9 front (cem. doublet)
    { label: "18", R: 56.2353, d: 1.6471, sd: 21.4, medium: 10 }, // L9/L10 junction → L10
    { label: "19", R: 23.792, sd: 21.4 }, // L10 rear → air [VAR: G2A–STO gap]

    // ── Aperture stop ──
    { label: "STO", R: "flat", d: 4.7467 }, // 9-blade diaphragm

    // ── G2B: L11/L12 cemented doublet + L13 singlet + L14 double-asph (focus group B) ──
    { label: "21", R: -57.4621, d: 1.3979, sd: 16.3, medium: 11 }, // L11 front (Sm1)
    { label: "22", R: 30.4304, d: 7.8411, sd: 16.2, medium: 12 }, // L11/L12 junction → L12
    { label: "23", R: -286.5983, d: 2.1988, sd: 16.2 }, // L12 rear → air
    { label: "24", R: -73.544, d: 1.4194, sd: 15.1, medium: 13 }, // L13 front (Sm2)
    { label: "25", R: 116.0752, d: 0.5209, sd: 15.0 }, // L13 rear → air
    { label: "26A", R: 74.3249, d: 8.0, sd: 15.0, medium: 14, asphere: { K: 0, A4: -2.314554e-6, A6: -6.999263e-10, A8: 0, A10: 0, A12: 0 } }, // L14 front (asph)
    { label: "27A", R: -55.4665, sd: 14.4, asphere: { K: 0, A4: 1.341936e-6, A6: -1.267249e-9, A8: 0, A10: 0, A12: 0 } }, // L14 rear (asph) → LPF [VAR: d27]
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.85,
    description: "Floating rear focus — G1 fixed, G2A and G2B move independently toward object at close focus.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (floating rear focus) ──
   *  Three variable gaps: G1→G2A, G2A→STO (differential G2A/G2B motion), d27 (L14 → LPF).
   *  Close focus at 848 mm (production MFD: 850 mm).
   *  27A is the patent's physical d27 to the LPF; BF = 1.0000 mm after the LPF is fixed
   *  (`rearPlates`). Paraxial air-equivalent BFD: 39.032 mm (infinity) / 49.416 mm (close).
   *  Gap conservation: d14 + d19 + d27_patent = 64.870 (INF) → 64.910 (close); Δ = 0.04 mm (patent rounding).
   */
  gaps: {
    "14": { label: "G1–G2A", values: [[16.6759, 6.0661]] },
    "19": { label: "G2A–STO", values: [[11.1146, 11.3807]] },
    "27A": { label: "BFD", values: [[37.0799, 47.4637]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.46, fStops: [1.46, 2, 2.8, 4, 5.6, 8, 11, 16] },

  /* ── Low-pass filter LPF (patent surfaces 28–29): traced, not drawn ── */
  rearPlates: [
    {
      label: "LPF",
      thicknessMm: 1.45,
      nd: 1.52301,
      vd: 58.59,
      glass: "C12 (HOYA)",
      dPgF: -0.00035,
      gapAfterMm: 1.0,
      source: "JP 2018-005099 A, Example 4 surfaces 28–29 (patent θgF 0.5449)",
    },
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

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.28 },
} satisfies LensDataV2Input;

export default LENS_DATA;
