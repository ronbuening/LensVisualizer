import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF 200mm f/2 L IS USM — JP 2008-145584 A, Numerical Example 1.
 * Source Table 1 is PDF page 9; Figure 1 and its aberration Figure 2 are PDF page 14.
 * Paragraph 0058 (PDF page 8) explicitly defines N/nu at the d-line, 587.6 nm.
 * The source publishes no per-medium C/F/g indices or partial dispersion. All 17 compatible catalog
 * curves are qualified spectral proxies; no historical supplier, melt or CaF2 chemistry is established.
 * Unsupported catalog-derived per-lens line-index overrides are removed; all source pairs are retained.
 *
 * All 17 source media are drawn: 16 powered elements and the 2.00 mm drop-in filter F (S29–30,
 * nd 1.51633 / vd 64.1), after the source 3.27 mm air gap and before the 60.36 mm image gap.
 * No source clear diameters are tabulated. Native Figure 1 is a 928x732 one-bit image at about 400 ppi,
 * with about 3.375 native px/mm and practical semi-height uncertainty around +/-0.6 mm.
 * Source-supported clear heights are refined on S1-5, S12-14, S16-19 and F. Resolved outer shoulders
 * at S6/7/8/20 use rimExtensionSd 44.1/41.8/41.8/18.8, preserving clear caps 39.9/39.9/39.9/17.3.
 * The first front doublet's schematic full blank remains constrained by its curved bonded interface;
 * no opaque bonded-interface land or unsupported square block is introduced.
 *
 * Source R/d, stop authority and focus controls are preserved. The current derived iris radius is
 * 19.920678 mm under the project's paraxial f/2.05 rule; an old 20.382 mm real-ray claim is not the
 * current runtime radius. The infinity working f-number from a real marginal ray is about 2.09523.
 * Finite focus is the existing product-MFD reconstruction, not a published prescription: L2 moves
 * +12.560417 mm at 1.9 m (D11: 14.87→27.430417; D14: 26.48→13.919583).
 * All 21 sampled focus geometries reach the full-frame corner, but the wide-open working marginal ray
 * is vignetted at 16/21 positions, starting at normalized focus 0.25; baseline and revised data agree.
 * Transverse IS amplitude is unpublished; centered geometry only is represented.
 *
 * Existing gapSagFrac 0.95 is retained for the two source near-contact air pairs; no tolerance is relaxed.
 * Full-curve trials at source outer heights fail these gaps. Curved caps stay 39.9/17.3 while separate
 * external shoulders represent the resolved outer strokes. All surfaces are spherical.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-200mm-f2l-is-usm",
  maker: "Canon",
  name: "CANON EF 200mm f/2 L IS USM",
  subtitle: "JP 2008-145584 A Example 1 — Canon / Yokoyama",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "17 elements / 12 groups incl. drop-in filter",
      "f = 194.991 mm design; 200 mm marketed",
      "F/2.05 design; f/2.0 marketed",
      "All-spherical; CaF2-compatible + 2 UD-class coordinates",
      "Inner focus + L32 optical image stabilization",
    ],
    elementCount: 17,
    groupCount: 12,
    acceptsTeleconverters: true, // Canon lists Extender EF1.4x II / EF2x II compatibility
    focalLengthMm: { marketing: 200, design: 194.991 },
    fNumber: { marketing: 2.0, design: 2.05 },
  },

  source: {
    patentNumber: "JP 2008-145584 A",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 2008,
    authors: ["Takayoshi Yokoyama"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 959.2,
      glass: "S-FSL5 (OHARA) (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Weak front collector element; gentle pre-convergence with low chromatic burden.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive (CaF2 proxy)",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 210.7,
      glass: "CaF2 spectral proxy (historical material and supplier unspecified)",
      apd: "inferred",
      apdNote:
        "Catalog-inferred APD of the compatible CaF2 proxy; the source publishes no per-medium partial dispersion or historical material identity.",
      role: "Primary positive low-dispersion element; compatible CaF2 proxy supplies an inferred anomalous-dispersion curve.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive (UD-class)",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 147.3,
      glass: "S-FPL51 (OHARA) (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: "inferred",
      apdNote: "Catalog-inferred APD of the compatible S-FPL51 proxy; no per-medium partial dispersion or line indices are published.",
      role: "First UD-class positive element in L1; works with fluorite to suppress axial color.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.65412,
      vd: 39.7,
      focalLengthMm: -188.1,
      glass: "S-NBH5 (OHARA) (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Negative high-index flint-like corrector after the three front positive elements.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: -93.1,
      glass: "S-LAL14 (OHARA) (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Front component of the L1 closing doublet; negative meniscus power at the cemented interface.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus (UD-class)",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 98.8,
      glass: "S-FPL51 (OHARA) (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: "inferred",
      apdNote: "Catalog-inferred APD of the compatible S-FPL51 proxy; no per-medium partial dispersion or line indices are published.",
      role: "Second UD-class element; rear half of the nearly afocal L1 chromatic-correction doublet.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 132.8,
      glass: "S-TIH53 (OHARA) (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "High-dispersion front component of the negative inner-focus doublet.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -50.3,
      glass: "S-LAH66 (OHARA) (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Dominant negative-power component of the L2 focus group.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.65412,
      vd: 39.7,
      focalLengthMm: -96.8,
      glass: "S-NBH5 (OHARA) (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Negative front component of L31, directly behind the stop.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 48.3,
      glass: "S-LAH66 (OHARA) (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Strong positive rear component of L31; reconverges the beam before the IS group.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: -78.8,
      glass: "S-LAL14 (OHARA) (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Negative singlet at the front of the L32 image-stabilizer group.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 73.4,
      glass: "S-TIH53 (OHARA) (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "High-dispersion positive component within the L32 IS cemented doublet.",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.54072,
      vd: 47.2,
      focalLengthMm: -50.2,
      glass: "S-TIL2 (OHARA) (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Negative rear component of the L32 IS doublet; completes the negative stabilizer group.",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: 41.5,
      glass: "S-LAL18 (OHARA) (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Strong positive front component of the L33 rear converging doublet.",
      cemented: "D5",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -58.1,
      glass: "S-TIH6 (OHARA) (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Dense flint rear component of the L33 cemented achromat.",
      cemented: "D5",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: 104.2,
      glass: "S-LAH65V (OHARA) (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Final high-index positive meniscus for rear-group convergence and field correction.",
    },
    {
      id: 17,
      name: "F",
      label: "Drop-in filter F",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Plane-parallel filter plate of the patent prescription (JP 2008-145584 A, Numerical Example 1 (Table 1) surfaces 29–30), in the rear filter holder. The design is computed with it in place, so it is drawn and traced as part of the working system. Semi-diameter 20.5 mm is supported by Figure 1 (about 20.1 mm within native stroke uncertainty) and sampled beam clearance; no numerical clear diameter is printed. Included in elementCount, which follows the maker's published count.",
    },
  ],

  surfaces: [
    { label: "1", R: 469.673, d: 6.23, sd: 54.2, medium: 1 },
    { label: "2", R: -105940, d: 0.52, sd: 54.2 },
    { label: "3", R: 91.926, d: 18.49, sd: 51.1, medium: 2 },
    { label: "4", R: -15019.281, d: 1.94, sd: 51.1 },
    { label: "5", R: 82.868, d: 17.12, sd: 44.1, medium: 3 },
    { label: "6", R: -583.653, d: 0.1, sd: 39.9, rimExtensionSd: 44.1 },
    { label: "7", R: -545.88, d: 4.4, sd: 39.9, rimExtensionSd: 41.8, medium: 4 },
    { label: "8", R: 159.373, d: 1.49, sd: 39.9, rimExtensionSd: 41.8 },
    { label: "9", R: 92.975, d: 5.0, sd: 34.8, medium: 5 },
    { label: "10", R: 37.36, d: 14.85, sd: 31, medium: 6 },
    { label: "11", R: 135.809, sd: 31 },
    { label: "12", R: -1035.916, d: 3.97, sd: 24.8, medium: 7 },
    { label: "13", R: -101.579, d: 3.0, sd: 24.8, medium: 8 },
    { label: "14", R: 63.713, sd: 24.8 },
    { label: "STO", R: "flat", d: 4.44 },
    { label: "16", R: 124.242, d: 2.1, sd: 20.7, medium: 9 },
    { label: "17", R: 41.666, d: 9.38, sd: 20.7, medium: 10 },
    { label: "18", R: -320.108, d: 2.75, sd: 20.7 },
    { label: "19", R: -392.917, d: 1.9, sd: 18.8, medium: 11 },
    { label: "20", R: 63.948, d: 3.93, sd: 17.3, rimExtensionSd: 18.8 },
    { label: "21", R: -114.597, d: 4.01, sd: 17.4, medium: 12 },
    { label: "22", R: -40.943, d: 1.9, sd: 17.4, medium: 13 },
    { label: "23", R: 81.99, d: 3.03, sd: 17.4 },
    { label: "24", R: 104.809, d: 8.01, sd: 20, medium: 14 },
    { label: "25", R: -41.124, d: 2.0, sd: 20, medium: 15 },
    { label: "26", R: -347.988, d: 0.2, sd: 20 },
    { label: "27", R: 72.365, d: 3.73, sd: 21, medium: 16 },
    { label: "28", R: 518.348, d: 3.27, sd: 21 }, // patent gap to drop-in filter F
    // Drop-in filter F (JP 2008-145584 A, Numerical Example 1 (Table 1) surfaces 29–30), drawn as a plane-parallel plate.
    // Figure 1 supports about 20.1 mm; adopted 20.5 mm includes native stroke uncertainty and sampled beam clearance.
    { label: "29", R: "flat", d: 2.0, sd: 20.5, medium: 17 },
    { label: "30", R: "flat", d: 60.36, sd: 20.5 }, // drop-in filter → image plane
  ],

  focus: {
    closeFocusM: 1.9,
    description:
      "Inner focus by imageward translation of the negative L2 cemented doublet; paraxial close-focus reconstruction gives +12.560 mm travel at 1.9 m MFD.",
  },

  gaps: {
    "11": { label: "D11 IF", values: [[14.87, 27.430417]] },
    "14": { label: "D14 IF", values: [[26.48, 13.919583]] },
  },

  aperture: { nominalFNumber: 2.05, fStops: [2.05, 2.8, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "11" },
    { text: "L2 IF", fromSurface: "12", toSurface: "14" },
    { text: "L31", fromSurface: "16", toSurface: "18" },
    { text: "L32 IS", fromSurface: "19", toSurface: "23" },
    { text: "L33", fromSurface: "24", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2 IF", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "16", toSurface: "18" },
    { text: "D4 IS", fromSurface: "21", toSurface: "23" },
    { text: "D5", fromSurface: "24", toSurface: "26" },
  ],

  layout: { scFill: 0.58, yScFill: 0.7 },

  // Two air-spaced pairs meet at the rim in FIG. 1: 0.005 mm of the 0.10 mm gap between surfaces 6 and 7 is left at
  // 39.9 mm, and 0.23 mm of the 3.93 mm gap between surfaces 20 and 21 at 17.3 mm.
  checks: { gapSagFrac: 0.95 },
} satisfies LensDataV2Input;

export default LENS_DATA;
