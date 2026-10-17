import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — OLYMPUS ZUIKO AUTO-T 85mm f/2                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,063,802 Embodiment 1 (Imai & Ikeda / Olympus). ║
 * ║  Compact telephoto, 5 elements / 4 groups, all spherical.         ║
 * ║  Focus: floating rear group (cemented doublet moves                ║
 * ║         differentially via internal cam during helicoid focus).    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent at f=100; all R, d, sd values scaled ×0.8503 to          ║
 * ║    f≈85 mm production (Olympus OM mount).                          ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    SDs estimated from marginal ray trace at f/2 with 8–10%         ║
 * ║    mechanical clearance, constrained by 49 mm filter thread        ║
 * ║    (front SD ≤ 23 mm clear aperture).                              ║
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
  key: "olympus-zuiko-85mm-f2",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO AUTO-T 85mm f/2",
  subtitle: "US 4,063,802 EMBODIMENT 1 — OLYMPUS / IMAI & IKEDA",

  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    specs: ["5 ELEMENTS / 4 GROUPS", "f ≈ 85.0 mm", "F/2", "2ω ≈ 29°", "ALL SPHERICAL"],
    elementCount: 5,
    groupCount: 4,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 85, design: 85.0 },
    fNumber: { marketing: 2, design: 2.04 },
  },

  source: {
    patentNumber: "US 4,063,802",
    patentYear: 1977,
    authors: ["Toshihiro Imai", "Yoshitsugi Ikeda"],
    assignees: ["Olympus Optical Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.25,
      focalLengthMm: 82.3,
      glass: "J-LAK10 (Hikari, 720503)",
      apd: false,
      role: "Front positive meniscus; high-index (n>1.68 per condition 9) converging element that shares power with L2 while minimizing Petzval contribution",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.623,
      vd: 58.14,
      focalLengthMm: 73.3,
      glass: "BACD15 (HOYA, 623581)",
      apd: false,
      role: "Strongest positive element; with L1 forms the converging front group (f₁₂ ≈ 38.5 mm) that drives the telephoto compression",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7847,
      vd: 25.71,
      focalLengthMm: -27.5,
      glass: "HOYA FD110 (exact match, SF family, 785/257)",
      apd: false,
      role: "Strongly diverging telephoto spacer; its high-dispersion flint (ν<28) partially compensates front-group chromatic aberration. The near-equal |r₆/r₈|≈1 creates approximate coma symmetry about the stop",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.7,
      vd: 48.08,
      focalLengthMm: 23.6,
      glass: "J-LAF01 (Hikari, 700481)",
      apd: false,
      role: "Positive element of rear achromatic doublet; high index (n₄/n₅>1.05 per condition 10) enables achromatization with modest Abbe-number spread",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.583,
      vd: 59.36,
      focalLengthMm: -36.1,
      glass: "OHARA S-BAL42 (near-exact, BaK family, 583/594)",
      apd: false,
      role: "Chromatic corrector in rear doublet; low-dispersion crown balances axial and lateral color from L4",
      cemented: "D1",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients (all-spherical design) ── */
  surfaces: [
    // ── Component 1: L1 positive meniscus ──
    { label: "1", R: 50.606, d: 6.241, sd: 23.0, medium: 1 },
    { label: "2", R: 329.267, d: 0.153, sd: 21.8 },
    // ── Component 2: L2 positive meniscus ──
    { label: "3", R: 26.804, d: 10.425, sd: 21.7, medium: 2 },
    { label: "4", R: 55.228, d: 3.486, sd: 16.7 },
    // ── Component 3: L3 negative meniscus ──
    { label: "5", R: 123.958, d: 1.403, sd: 14.9, medium: 3 },
    { label: "6", R: 18.26, d: 6.803, sd: 14.3 },
    // ── Aperture stop (inferred from Fig. 1, ~40% into d₆ gap from L3) ──
    { label: "STO", R: "flat" },
    // ── Component 4: L4+L5 cemented doublet (floating rear group) ──
    { label: "7", R: 148.172, d: 7.602, sd: 12.9, medium: 4 },
    { label: "8", R: -18.217, d: 0.901, sd: 12.6, medium: 5 }, // L4/L5 junction
    { label: "9", R: -139.345, sd: 12.4 }, // BFD
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.85,
    description:
      "Floating rear group: entire lens extends via helicoid (unit focus) while the cemented doublet (L4+L5) moves at a slightly different rate via an internal cam, changing d₆ to correct astigmatism and coma at close distances.",
  },

  /* (moved from var) ── Variable air spacings (floating rear group focus) ──
   *  Two variable gaps during focusing:
   *    STO: stop-to-L4 gap increases as rear doublet floats back
   *    9:   BFD increases as the lens extends forward
   *  The gap from L3 rear (surface 6) to the stop remains constant —
   *  both move with the front group during helicoid focus.
   *
   *  Close-focus values computed for 0.85 m MFD (from film plane) using
   *  a floating ratio estimated from Embodiment 4 at 1/20× magnification
   *  (Δd₆ = 0.63 mm at f=100 → floating ratio ≈ 12.6%).
   */
  gaps: { STO: { label: "D₆b", values: [[10.246, 11.789]] }, "9": { label: "BF", values: [[44.011, 54.708]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.0, fStops: [2, 2.5, 2.8, 3.5, 4, 5.6, 8, 11, 16] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "6" },
    { text: "REAR", fromSurface: "7", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
