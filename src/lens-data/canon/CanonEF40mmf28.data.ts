import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON EF 40mm f/2.8 STM                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 8,970,966 B2, Numerical Example 2 (Canon/Maetaki)║
 * ║  Modified double-Gauss / plasmat-variant, approximately symmetric ║
 * ║  about the aperture stop.                                          ║
 * ║  6 elements / 4 groups, 1 aspherical surface (GMo).               ║
 * ║  Focus: unit focus (patent model); BFD changes as the only        ║
 * ║         variable gap.  Production lens uses rear/inner focus       ║
 * ║         with STM motor — not modeled here.                         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent-listed "effective ray diameter" values halved.  No       ║
 * ║    additional estimation required.                                 ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-40-f28-stm",
  maker: "Canon",
  name: "CANON EF 40mm f/2.8 STM",
  subtitle: "US 8,970,966 B2 Example 2 — Canon / Maetaki",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 39.0 mm", "F/2.8", "2ω ≈ 58.0°", "1 ASPHERICAL SURFACE (GMo)"],
    elementCount: 6,
    groupCount: 4,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 40, design: 39.0 },
    fNumber: { marketing: 2.8 },
  },

  source: {
    patentNumber: "US 8,970,966 B2",
    patentYear: 2015,
    authors: ["Satoshi Maetaki"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: 32.9,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Front positive collector; high nd establishes Δn = 0.303 with L12 for Petzval correction.",
      cemented: "Lp1",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.53172,
      vd: 48.8,
      focalLengthMm: -21.7,
      glass: "S-TIL6 (OHARA)",
      apd: false,
      role: "Negative Petzval corrector; low nd creates index difference for flat field. Cemented with L11 to form Lp1 (f = −76.5 mm).",
      cemented: "Lp1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 44.3,
      glass: "S-LAL14 (OHARA)",
      apd: false,
      role: "Positive meniscus bridging front doublet and stop; contributes positive power to make L1a net positive.",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.1,
      focalLengthMm: -15.3,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      role: "Dense flint for chromatic correction; Abbe spread with L22 (νd 42.7 vs 30.1) provides longitudinal CA and spherochromatism control.",
      cemented: "Lp2",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: 19.3,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Strongest individual positive power in rear unit; same glass as L11 for manufacturing economy.",
      cemented: "Lp2",
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: 41.2,
      glass: "S-BAL42 (OHARA)",
      apd: false,
      role: "Final field-flattening meniscus with glass-mold aspherical front surface for higher-order aberration correction.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    /* ── Front unit L1a: cemented doublet Lp1 (L11 + L12) ── */
    { label: "1", R: 38.185, d: 3.07, sd: 9.32, medium: 1 },
    { label: "2", R: -93.918, d: 1.2, sd: 8.7, medium: 2 },
    { label: "3", R: 13.191, d: 2.2, sd: 6.81 },

    /* ── Front unit L1a: positive meniscus L13 ── */
    { label: "4", R: 15.211, d: 2.01, sd: 6.67, medium: 3 },
    { label: "5", R: 28.38, d: 2.33, sd: 6.51 },

    /* ── Aperture stop ── */
    // US 8,970,966 B2, Numerical Example 2 surface table, surface 6 (diaphragm): effective ray diameter 12.84 mm.
    { label: "STO", R: "flat", d: 5.12 },

    /* ── Rear unit L1b: cemented doublet Lp2 (L21 + L22) ── */
    { label: "7", R: -11.637, d: 1.0, sd: 6.235, medium: 4 },
    { label: "8", R: 132.356, d: 3.35, sd: 6.89, medium: 5 },
    { label: "9", R: -18.087, d: 0.15, sd: 7.22 },

    /* ── Rear unit L1b: positive meniscus L23 (asph front) ── */
    {
      label: "10A",
      R: -39.511,
      d: 3.08,
      sd: 7.585,
      medium: 6,
      asphere: { K: 0, A4: -3.4255e-5, A6: 4.6012e-8, A8: -2.0635e-9, A10: 1.3485e-11, A12: 0 },
    },
    { label: "11", R: -15.371, sd: 8.25 },
  ],

  /* ── Focus configuration ── */
  focus: { closeFocusM: 0.3, description: "Unit focus (patent model). Production lens uses STM rear/inner focus." },

  /* (moved from var) ── Variable air spacings (unit focus) ──
   *  Patent describes unit focus; only BFD changes.
   *  Close-focus BFD computed from paraxial model at MFD = 0.30 m
   *  (m = 0.184, consistent with Canon's published 0.18×).
   */
  gaps: { "11": { label: "BF", values: [[39.0, 46.17]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L1a (+)", fromSurface: "1", toSurface: "5" },
    { text: "L1b (+)", fromSurface: "7", toSurface: "11" },
  ],
  doublets: [
    { text: "Lp1", fromSurface: "1", toSurface: "3" },
    { text: "Lp2", fromSurface: "7", toSurface: "9" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.55, yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
