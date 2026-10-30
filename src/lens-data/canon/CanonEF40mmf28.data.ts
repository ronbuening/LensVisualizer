import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — CANON EF 40mm f/2.8 STM
 * Source: US 8,970,966 B2, Numerical Example 2, PDF page 13 / columns 13-14;
 * Figure 2A and infinity aberrations Figure 2B, PDF page 3 / sheet 2.
 * Production correlation is inferred, not a product name assigned by the patent.
 * Six elements / four groups, one source aspheric surface, no source resin/filter/rear plate.
 *
 * CLEAR APERTURES: retain every printed effective-ray diameter / 2. Native Figure 2A
 * resolves air-facing shoulders at S3 and S7. rimExtensionSd 8.70 and 6.89 mm use
 * conservative bonded-cap anchors; they do not change the clear caps or make an opaque
 * cemented-interface land. Full undimensioned square blanks are not reconstructed.
 * Native original is 2560 x 3300 one-bit / 300 ppi; active-track scale ~16.63 px/mm.
 * Practical height reading uncertainty is +/-0.8 mm, separately from schematic scale.
 *
 * SOURCE R/d, conic/asphere coefficients, stop station and all focus/aperture controls
 * are preserved. Source A12/F is explicitly zero. No cut or guard relaxation is used.
 *
 * FOCUS: the patent states whole-system focusing (PDF page 9 / column 5), but publishes
 * only infinity spacings. BF 39.00 -> 46.17 mm is the existing approximate unit-focus
 * reconstruction using the correlated product's 0.30 m endpoint, not a source table.
 * Linear intermediate extension is not focus preserving at every displayed distance;
 * near-focus wide-open iris-rim rays are vignetted at retained source caps.
 *
 * GLASS: six numeric pairs retain the explicit source d-line reference (PDF page 12,
 * column 12). Six OHARA curves are qualified spectral proxies, not proof of Canon's
 * historical supplier, melt, chemistry, molding or production identity. No individual
 * C/F/g, partial-dispersion or APD values are published. Existing apd:false means no
 * source APD designation; it does not establish a normal production melt. Preserve
 * the separate L12 relabel review's actual 2026-05-20 date.
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
    specs: [
      "6 ELEMENTS / 4 GROUPS",
      "f ≈ 39.0 mm",
      "F/2.8",
      "2ω ≈ 58.0°",
      "1 ASPHERICAL SURFACE (GMo PRODUCTION CORRELATION)",
    ],
    elementCount: 6,
    groupCount: 4,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 40, design: 39.0 },
    fNumber: { marketing: 2.8 },
  },

  source: {
    patentNumber: "US 8,970,966 B2",
    example: { label: "Numerical Example 2", id: "2" },
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
      glass: "S-LAH55V (OHARA; qualified spectral proxy, historical identity unresolved)",
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
      glass: "S-TIL6 (OHARA; qualified spectral proxy, historical identity unresolved)",
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
      glass: "S-LAL14 (OHARA; qualified spectral proxy, historical identity unresolved)",
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
      glass: "S-TIM35 (OHARA; qualified spectral proxy, historical identity unresolved)",
      apd: false,
      role: "Source index/Abbe contrast for chromatic correction; Abbe spread with L22 (νd 42.7 vs 30.1) provides longitudinal CA and spherochromatism control.",
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
      glass: "S-LAH55V (OHARA; qualified spectral proxy, historical identity unresolved)",
      apd: false,
      role: "Strongest individual positive power in the rear unit; repeats L11 numeric index/Abbe coordinates without establishing identical historical material or manufacturing purpose.",
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
      glass: "S-BAL42 (OHARA; qualified spectral proxy, historical identity unresolved)",
      apd: false,
      role: "Final positive meniscus with the source aspheric front surface for higher-order correction. A production GMo association does not identify the patent medium or its manufacturing process.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    /* ── Front unit L1a: cemented doublet Lp1 (L11 + L12) ── */
    { label: "1", R: 38.185, d: 3.07, sd: 9.32, medium: 1 },
    { label: "2", R: -93.918, d: 1.2, sd: 8.7, medium: 2 },
    { label: "3", R: 13.191, d: 2.2, sd: 6.81, rimExtensionSd: 8.7 },

    /* ── Front unit L1a: positive meniscus L13 ── */
    { label: "4", R: 15.211, d: 2.01, sd: 6.67, medium: 3 },
    { label: "5", R: 28.38, d: 2.33, sd: 6.51 },

    /* ── Aperture stop ── */
    // US 8,970,966 B2, Numerical Example 2 surface table, surface 6 (diaphragm): effective ray diameter 12.84 mm.
    { label: "STO", R: "flat", d: 5.12 },

    /* ── Rear unit L1b: cemented doublet Lp2 (L21 + L22) ── */
    { label: "7", R: -11.637, d: 1.0, sd: 6.235, rimExtensionSd: 6.89, medium: 4 },
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
  focus: {
    closeFocusM: 0.3,
    description:
      "CONSTRAINED_RECONSTRUCTION: source whole-system focus mechanism, but no finite-focus spacing table. The existing 0.30 m endpoint and intermediate BF interpolation are approximate product-correlated unit-focus states; production internal motion is not established by this source.",
  },

  /* (moved from var) ── Variable air spacings (unit focus) ──
   *  Patent describes whole-system focus; only BFD changes in this reconstruction.
   *  Close-focus BFD is an existing rounded approximation at MFD = 0.30 m
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
