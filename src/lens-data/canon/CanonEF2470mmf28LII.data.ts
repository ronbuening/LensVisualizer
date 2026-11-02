import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF 24-70mm f/2.8 L II USM — US 8,736,971 B2, Numerical Example 3 (Takahiro Hatada).
 * Four-unit positive-negative-positive-positive zoom; 18 elements / 13 groups, four aspherical surfaces.
 * Numerical Example 3 pairs with Fig. 5 (PDF p. 8, sheet 7), not Fig. 3. The original table and aspheres are
 * PDF pp. 19–20 (printed cols. 12–13). All source R/d, aspheres, stop and focus/zoom controls are preserved.
 * Finite focus remains a paraxial reconstruction of Unit 2 motion toward the object for the maker's 0.38 m target.
 *
 * No effective diameters are printed. Inferred clear caps now follow native Fig. 5 at about 9 px/mm with practical
 * ±0.5 mm height uncertainty. Surface 7 retains its 12.2 mm optical cap and gains the resolved rear shoulder to
 * 16.8 mm. Larger uniform blank trials at 22A/23 and 30A/31 violate existing cross-gap guards; those optical caps
 * remain constrained. No opaque bonded land, resin wing or inferred cut is invented to complete the drawing.
 *
 * Source wavelength/dispersion definitions are PDF pp. 16–18. All 18 literal d-line index/Abbe pairs are retained;
 * compatible catalog curves remain qualified spectral proxies, not historical glass, supplier, melt or forming-
 * process identifications. L16's M-TAFD305 curve is approximate (catalog nd offset about +0.00129), with material
 * identity unresolved. Table 1 explicitly publishes L5/L6 partial-dispersion deviations +0.014/−0.009 against
 * 0.6438−0.001682νd; those genuine values and source APD tags are retained. No individual nC/nF/ng is published.
 * The source's Table 1(1)=6.49 differs from its printed unit-focal-length ratio ≈6.46; the cause remains unresolved.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-24-70-f28l-ii",
  maker: "Canon",
  name: "CANON EF 24-70mm f/2.8 L II USM",
  subtitle: "US 8,736,971 B2 Numerical Example 3 — Canon / Hatada",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "18 elements / 13 groups",
      "24-70 mm f/2.8 marketed; 24.70-67.88 mm F/2.91 patent design",
      "3 aspherical elements / 4 aspherical surfaces",
      "1 Super UD + 2 UD production correlation",
      "Inner focus: second lens unit",
    ],
    elementCount: 18,
    groupCount: 13,
    focalLengthMm: { marketing: [24, 70], design: [24.7, 67.88] },
    fNumber: { marketing: 2.8, design: 2.91 },
  },

  source: {
    patentNumber: "US 8,736,971 B2",
    example: { label: "Numerical Example 3", id: "3" },
    patentYear: 2014,
    authors: ["Takahiro Hatada"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Numerical Example 3 Table 1(1), PDF p. 20, gives |f1/f2|=6.49, while its printed unit focal lengths 105.87 and −16.39 mm give about 6.46. The literal prescription gives the same latter ratio; source R/d and controls are retained without assuming a rounding or transcription cause.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -132.5,
      glass: "S-TIH53 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Front high-index, high-dispersion negative member of the weak positive front cemented group.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 117.7,
      glass: "S-LAH66 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Positive partner of the front cemented doublet; balances the L1 dense flint while keeping curvature moderate.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 114.3,
      glass: "S-LAH66 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Dominant positive element of Unit 1, setting the front collector power in the retrofocus-biased wide end.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -22.3,
      glass: "S-LAH58 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "First variator element and large front asphere of Unit 2; controls spherical aberration and coma from the strong negative unit.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.59522,
      vd: 67.7,
      focalLengthMm: -24.5,
      glass: "S-FPM2 (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: "patent",
      apdNote: "Patent Table 1, Example 3, condition (3): source ΔPgF=+0.014 relative to 0.6438−0.001682νd for the negative component.",
      role: "Negative low-dispersion member of the Unit 2 cemented doublet; selected for anomalous partial dispersion.",
      cemented: "D2",
      dPgF: 0.014,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 34.4,
      glass: "S-LAH58 (qualified spectral proxy; historical supplier and melt unspecified)",
      apd: "patent",
      apdNote: "Patent Table 1, Example 3, condition (4): source ΔPgF=−0.009 relative to 0.6438−0.001682νd for the positive component.",
      role: "High-index positive member of the Unit 2 cemented doublet; the large index step supplies the patent's spherical-aberration correction mechanism.",
      cemented: "D2",
      dPgF: -0.009,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.3,
      focalLengthMm: 60.8,
      glass: "S-FTM16 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Positive lp component immediately behind the Unit 2 cemented doublet; moderates Petzval curvature of the negative variator.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: -30.5,
      glass: "S-LAL18 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Negative member of the rear Unit 2 cemented doublet; contributes controlled negative power and field correction.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 60.1,
      glass: "S-TIH53 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Dense-flint positive member of the rear Unit 2 doublet; achromatizes L8 and closes the focus/variator group.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -118.3,
      glass: "S-LAH58 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Weak negative front member of the stop-adjacent imaging doublet.",
      cemented: "D4",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 33.8,
      glass: "S-FPL51 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Strong low-dispersion positive element in Unit 3; primary axial chromatic correction near the aperture stop.",
      cemented: "D4",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: 220.2,
      glass: "S-BAL42 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Weak aspherical corrector behind the stop-side doublet; mainly a residual spherical/coma/astigmatism correction plate.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.72047,
      vd: 34.7,
      focalLengthMm: -89.3,
      glass: "N-KZFS8 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Unit 3 negative field-correction element; helps balance Petzval curvature and lateral color.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 94.9,
      focalLengthMm: 62.4,
      glass: "S-FPL53 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Very-low-dispersion positive element in Unit 4; Super UD placement is a production correlation.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 58.1,
      glass: "S-FPL51 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Second UD-class positive relay element in Unit 4.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.85006,
      vd: 40.2,
      focalLengthMm: -71.5,
      glass: "M-TAFD305 (HOYA spectral proxy; historical material, supplier and forming process unresolved)",
      role: "Doubly aspherical negative relay corrector; historical material identity and forming process remain unspecified.",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -63.3,
      glass: "S-LAH60 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Negative member of the rear cemented field/chromatic correction group.",
      cemented: "D5",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: 58.7,
      glass: "S-BSL7 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Final positive crown member of the rear doublet; completes rear chromatic correction and final field flattening.",
      cemented: "D5",
    },
  ],

  surfaces: [
    { label: "1", R: 203.844, d: 2.1, sd: 34.2, medium: 1 },
    { label: "2", R: 72.022, d: 7.41, sd: 34.2, medium: 2 },
    { label: "3", R: 330.893, d: 0.15, sd: 34.0 },
    { label: "4", R: 56.152, d: 6.73, sd: 29.5, medium: 3 },
    { label: "5", R: 146.214, sd: 29.5 },

    {
      label: "6A",
      R: 108.833,
      d: 1.6,
      sd: 16.8,
      medium: 4,
      asphere: { K: 0, A4: 7.24687e-6, A6: -9.33789e-9, A8: 2.38226e-11, A10: -5.23831e-14, A12: 8.03521e-17 },
    },
    { label: "7", R: 16.535, d: 7.96, sd: 12.2, rimExtensionSd: 16.8 },
    { label: "8", R: -46.335, d: 1.15, sd: 12.0, medium: 5 },
    { label: "9", R: 21.502, d: 4.18, sd: 12.0, medium: 6 },
    { label: "10", R: 66.987, d: 1.43, sd: 12.0 },
    { label: "11", R: 126.217, d: 3.1, sd: 10.8, medium: 7 },
    { label: "12", R: -49.936, d: 1.62, sd: 10.8 },
    { label: "13", R: -23.459, d: 1.15, sd: 12.5, medium: 8 },
    { label: "14", R: 432.841, d: 2.76, sd: 12.5, medium: 9 },
    { label: "15", R: -57.478, sd: 12.5 },

    { label: "16", R: "flat", d: 1.9, sd: 13.0 },
    { label: "STO", R: "flat", d: 0.0 },
    { label: "18", R: 27.563, d: 1.45, sd: 15.0, medium: 10 },
    { label: "19", R: 21.272, d: 11.03, sd: 15.0, medium: 11 },
    { label: "20", R: -66.483, d: 0.2, sd: 15.0 },
    { label: "21", R: 43.019, d: 2.7, sd: 15.0, medium: 12 },
    {
      label: "22A",
      R: 63.198,
      d: 4.67,
      sd: 14.1,
      asphere: { K: 0, A4: 5.45182e-6, A6: 4.70739e-9, A8: 2.0643e-13, A10: 7.1617e-14, A12: -2.30646e-17 },
    },
    { label: "23", R: -45.003, d: 1.4, sd: 14.1, medium: 13 },
    { label: "24", R: -151.84, sd: 15.0 },

    { label: "25", R: 31.049, d: 6.94, sd: 15.5, medium: 14 },
    { label: "26", R: -216.866, d: 0.2, sd: 15.5 },
    { label: "27", R: 47.221, d: 5.86, sd: 15.5, medium: 15 },
    { label: "28", R: -71.326, d: 1.9, sd: 15.5 },
    {
      label: "29A",
      R: -208.068,
      d: 2.13,
      sd: 14.8,
      medium: 16,
      asphere: { K: 0, A4: 2.73159e-5, A6: -1.56554e-7, A8: 4.00484e-10, A10: -7.50876e-13, A12: 7.0143e-16 },
    },
    {
      label: "30A",
      R: 86.193,
      d: 2.76,
      sd: 14.2,
      asphere: { K: 0, A4: 4.4299e-5, A6: -1.3391e-7, A8: 3.22402e-10, A10: -4.4014e-13, A12: 2.46872e-16 },
    },
    { label: "31", R: -613.677, d: 1.4, sd: 14.2, medium: 17 },
    { label: "32", R: 57.864, d: 5.29, sd: 15.0, medium: 18 },
    { label: "33", R: -61.669, sd: 15.0 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 24.7, label: "Wide" },
      { focalLengthMm: 34.93 },
      { focalLengthMm: 67.88, label: "Tele" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.38,
    description:
      "Inner focusing by moving the complete second lens unit. Close-focus spacings are paraxially inferred from Canon's 0.38 m MFD; the patent itself publishes infinity-focus zoom spacings only.",
  },

  gaps: {
    "5": {
      label: "D5 / L1-L2",
      values: [
        [2.75, 0.7968165728],
        [11.72, 9.3205153023],
        [30.3, 26.2925159702],
      ],
    },
    "15": {
      label: "D15 / L2-L3",
      values: [
        [13.76, 15.7131834272],
        [7.73, 10.1294846977],
        [0.23, 4.2374840298],
      ],
    },
    "24": {
      label: "D24 / L3-L4",
      values: [
        [8.79, 8.79],
        [4.8, 4.8],
        [0.74, 0.74],
      ],
    },
    "33": {
      label: "BFD",
      values: [
        [38.08, 38.08],
        [46.62, 46.62],
        [63.32, 63.32],
      ],
    },
  },

  aperture: {
    nominalFNumber: 2.91,
    fStops: [2.91, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 9,
    bladeRoundedness: 1,
  },

  groups: [
    { text: "L1 +", fromSurface: "1", toSurface: "5" },
    { text: "L2 - / IF", fromSurface: "6A", toSurface: "15" },
    { text: "L3 + / STO", fromSurface: "16", toSurface: "24" },
    { text: "L4 +", fromSurface: "25", toSurface: "33" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
    { text: "D4", fromSurface: "18", toSurface: "20" },
    { text: "D5", fromSurface: "31", toSurface: "33" },
  ],

  layout: { scFill: 0.68, yScFill: 0.82 },
} satisfies LensDataV2Input;

export default LENS_DATA;
