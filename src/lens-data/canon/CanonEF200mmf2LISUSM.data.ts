import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ Canon EF 200mm f/2L IS USM                                         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP 2008-145584 A, Numerical Example 1 (Canon).        ║
 * ║ Large-aperture positive-negative-positive inner-focus telephoto-   ║
 * ║ type design with optical image stabilization by L32 decentering.   ║
 * ║                                                                    ║
 * ║ Patent/product count: 17 elements / 12 groups including the 2.00   ║
 * ║ mm drop-in filter plate F (surfaces 29–30, nd 1.51633, νd 64.1).   ║
 * ║ All 17 are drawn: the 16 powered elements, then F as a             ║
 * ║ plane-parallel plate element with the patent's 3.27 mm gap ahead   ║
 * ║ of it and 60.36 mm to the image. F's semi-diameter is a ray-trace  ║
 * ║ estimate; the patent lists none.                                   ║
 * ║                                                                    ║
 * ║ Focus: L2 cemented doublet moves imageward. Paraxial close-focus   ║
 * ║ reconstruction for the official 1.9 m MFD gives +12.5604 mm        ║
 * ║ L2 travel: D11 14.8700→27.4304, D14 26.4800→13.9196.              ║
 * ║                                                                    ║
 * ║ Semi-diameters: estimated from the F/2.05 entrance-pupil geometry, ║
 * ║ patent section drawing proportions, and renderer constraints.      ║
 * ║ Surfaces 6, 7, 9 and 20-23 are set to the height of the F/2.05     ║
 * ║ axial marginal ray at infinity focus, rounded up to 0.1 mm; FIG. 1 ║
 * ║ draws each of those elements taller. Element L4 and the L12+L13    ║
 * ║ doublet (D4) are drawn square-cut, so each carries one height:     ║
 * ║ 39.9 mm on surfaces 7 and 8, 17.4 mm on 21-23. Two air-spaced      ║
 * ║ pairs meet at the rim in FIG. 1, so gapSagFrac is 0.95: at 39.9    ║
 * ║ mm, 0.005 mm is left of the 0.10 mm gap between surfaces 6 and 7   ║
 * ║ (they touch at 40.99 mm); at 17.3 mm, 0.23 mm is left of the 3.93  ║
 * ║ mm gap between surfaces 20 and 21 (they touch at 17.83 mm).        ║
 * ║ Stop: the stop radius is derived from the design f-number (F/2.05, ║
 * ║ EP SD 47.56 mm). The exact F/2.05 marginal ray meets the stop at   ║
 * ║ 20.38 mm, which the build uses as the wide-open iris.              ║
 * ╚══════════════════════════════════════════════════════════════════════╝
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
      "All-spherical, fluorite + 2 UD-class elements",
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
      glass: "S-FSL5 (OHARA)",
      role: "Weak front collector element; gentle pre-convergence with low chromatic burden.",
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive (Fluorite)",
      nd: 1.43387,
      vd: 95.1,
      focalLengthMm: 210.7,
      glass: "CaF2 fluorite",
      apd: "inferred",
      apdNote:
        "Fluorite anomalous-dispersion element identified by the production special-glass count and nd/vd signature.",
      role: "Primary positive anomalous-dispersion element for secondary-spectrum control in the front group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive (UD-class)",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 147.3,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "Catalog UD fluorophosphate element; line-index fields provide the chromatic model.",
      role: "First UD-class positive element in L1; works with fluorite to suppress axial color.",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.65412,
      vd: 39.7,
      focalLengthMm: -188.1,
      glass: "S-NBH5 (OHARA)",
      role: "Negative high-index flint-like corrector after the three front positive elements.",
      nC: 1.64923,
      nF: 1.66571,
      ng: 1.67517,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: -93.1,
      glass: "S-LAL14 (OHARA)",
      role: "Front component of the L1 closing doublet; negative meniscus power at the cemented interface.",
      cemented: "D1",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus (UD-class)",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 98.8,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "Second catalog UD fluorophosphate element; line-index fields provide the chromatic model.",
      role: "Second UD-class element; rear half of the nearly afocal L1 chromatic-correction doublet.",
      cemented: "D1",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 132.8,
      glass: "S-TIH53 (OHARA)",
      role: "High-dispersion front component of the negative inner-focus doublet.",
      cemented: "D2",
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -50.3,
      glass: "S-LAH66 (OHARA)",
      role: "Dominant negative-power component of the L2 focus group.",
      cemented: "D2",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.65412,
      vd: 39.7,
      focalLengthMm: -96.8,
      glass: "S-NBH5 (OHARA)",
      role: "Negative front component of L31, directly behind the stop.",
      cemented: "D3",
      nC: 1.64923,
      nF: 1.66571,
      ng: 1.67517,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 48.3,
      glass: "S-LAH66 (OHARA)",
      role: "Strong positive rear component of L31; reconverges the beam before the IS group.",
      cemented: "D3",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: -78.8,
      glass: "S-LAL14 (OHARA)",
      role: "Negative singlet at the front of the L32 image-stabilizer group.",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 73.4,
      glass: "S-TIH53 (OHARA)",
      role: "High-dispersion positive component within the L32 IS cemented doublet.",
      cemented: "D4",
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.54072,
      vd: 47.2,
      focalLengthMm: -50.2,
      glass: "S-TIL2 (OHARA)",
      role: "Negative rear component of the L32 IS doublet; completes the negative stabilizer group.",
      cemented: "D4",
      nC: 1.5373,
      nF: 1.54875,
      ng: 1.55522,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: 41.5,
      glass: "S-LAL18 (OHARA)",
      role: "Strong positive front component of the L33 rear converging doublet.",
      cemented: "D5",
      nC: 1.7251,
      nF: 1.73844,
      ng: 1.7457,
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -58.1,
      glass: "S-TIH6 (OHARA)",
      role: "Dense flint rear component of the L33 cemented achromat.",
      cemented: "D5",
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Positive Meniscus",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: 104.2,
      glass: "S-LAH65V (OHARA)",
      role: "Final high-index positive meniscus for rear-group convergence and field correction.",
      nC: 1.79882,
      nF: 1.81608,
      ng: 1.82569,
    },
    {
      id: 17,
      name: "F",
      label: "Drop-in filter F",
      type: "Plane-Parallel Plate",
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7",
      role: "Plane-parallel filter plate of the patent prescription (JP 2008-145584 A, Numerical Example 1 (Table 1) surfaces 29–30), in the rear filter holder. The design is computed with it in place, so it is drawn and traced as part of the working system. Semi-diameter is a ray-trace estimate; the source lists none. Included in elementCount, which follows the maker's published count.",
    },
  ],

  surfaces: [
    { label: "1", R: 469.673, d: 6.23, sd: 56, medium: 1 },
    { label: "2", R: -105940, d: 0.52, sd: 55 },
    { label: "3", R: 91.926, d: 18.49, sd: 52, medium: 2 },
    { label: "4", R: -15019.281, d: 1.94, sd: 51 },
    { label: "5", R: 82.868, d: 17.12, sd: 45, medium: 3 },
    { label: "6", R: -583.653, d: 0.1, sd: 39.9 },
    { label: "7", R: -545.88, d: 4.4, sd: 39.9, medium: 4 },
    { label: "8", R: 159.373, d: 1.49, sd: 39.9 },
    { label: "9", R: 92.975, d: 5.0, sd: 34.8, medium: 5 },
    { label: "10", R: 37.36, d: 14.85, sd: 31, medium: 6 },
    { label: "11", R: 135.809, sd: 31 },
    { label: "12", R: -1035.916, d: 3.97, sd: 27, medium: 7 },
    { label: "13", R: -101.579, d: 3.0, sd: 27, medium: 8 },
    { label: "14", R: 63.713, sd: 27 },
    { label: "STO", R: "flat", d: 4.44 },
    { label: "16", R: 124.242, d: 2.1, sd: 22, medium: 9 },
    { label: "17", R: 41.666, d: 9.38, sd: 22, medium: 10 },
    { label: "18", R: -320.108, d: 2.75, sd: 22 },
    { label: "19", R: -392.917, d: 1.9, sd: 18, medium: 11 },
    { label: "20", R: 63.948, d: 3.93, sd: 17.3 },
    { label: "21", R: -114.597, d: 4.01, sd: 17.4, medium: 12 },
    { label: "22", R: -40.943, d: 1.9, sd: 17.4, medium: 13 },
    { label: "23", R: 81.99, d: 3.03, sd: 17.4 },
    { label: "24", R: 104.809, d: 8.01, sd: 20, medium: 14 },
    { label: "25", R: -41.124, d: 2.0, sd: 20, medium: 15 },
    { label: "26", R: -347.988, d: 0.2, sd: 20 },
    { label: "27", R: 72.365, d: 3.73, sd: 21, medium: 16 },
    { label: "28", R: 518.348, d: 3.27, sd: 21 }, // patent gap to drop-in filter F
    // Drop-in filter F (JP 2008-145584 A, Numerical Example 1 (Table 1) surfaces 29–30), drawn as a plane-parallel plate.
    // Its sd is a ray-trace estimate (the source lists none).
    { label: "29", R: "flat", d: 2.0, sd: 21.5, medium: 17 },
    { label: "30", R: "flat", d: 60.36, sd: 21.5 }, // drop-in filter → image plane
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
