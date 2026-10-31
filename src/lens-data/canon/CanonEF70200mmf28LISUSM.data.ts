import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP2002162564A, Numerical Example 1: 21 elements / 19 groups, all spherical.
 * Exact original inspection: 2026-10-30; native source images are 200 dpi.
 * Correlated with EF70-200mm f/2.8L IS USM; production 23/18 is a different count.
 * All source R/d, stop station and three published zoom states are preserved.
 * Source R23/R24=0.000 are plane-format notation, supported by the primary
 * stop designation and flat section end; the auxiliary family PDF is unavailable.
 * D41 is an inferred Gaussian infinity image plane, not a published spacing.
 * Internal focus and decentered IS are not reconstructed. Focus endpoints match.
 * The patent names no spectral line for its 21 bare N/ν pairs. 21 of 21 printed pairs
 * match catalog d-line coordinates and none match the e-line, so the table is read as
 * d-line. 21 media use catalog curves as spectral proxies; supplier, melt and
 * chemistry stay unspecified.
 * Clear SDs are constrained modeling apertures, not printed source dimensions.
 * Existing gapSagFrac=0.95 remains unchanged. Equal-height negative-group trial
 * overlaps the literal D12 air gap; no inferred cuts or interface lands are added.
 * Interpolated zoom intervals are illustrative: aperture/plane drift is documented.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-70-200f28l-is-usm",
  maker: "Canon",
  name: "CANON EF 70-200mm f/2.8 L IS USM",
  subtitle: "JP2002162564A Example 1 — correlated patent embodiment; not the exact 23/18 production formula",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "PATENT EXAMPLE: 21 ELEMENTS / 19 GROUPS",
      "DESIGN 72.50-194.99 mm",
      "DESIGN f/2.9",
      "ALL-SPHERICAL",
      "TRANSVERSE IS UNIT g5B",
    ],
    elementCount: 21,
    groupCount: 19,
    acceptsTeleconverters: true, // Canon lists Extender EF1.4x / EF2x compatibility
    focalLengthMm: { marketing: [70, 200], design: [72.5, 194.99] },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: {
    patentNumber: "JP 2002-162564 A",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 2002,
    authors: ["Akira Harada"],
    assignees: ["Canon Inc."],
  },

  /* ── Glass elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35.3,
      focalLengthMm: -259.449509,
      glass:
        "S-LAM7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Front g1 element.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 209.461479,
      glass:
        "S-FPL51 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Low-dispersion positive element in g1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 248.009918,
      glass:
        "S-FPL51 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Low-dispersion positive element in g1.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -477.613368,
      glass:
        "S-TIH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Front element of the positive g2 focusing unit.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 103.24364,
      glass:
        "S-FSL5 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive rear element of the g2 focusing unit.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 40.9,
      focalLengthMm: -46.218167,
      glass:
        "S-LAH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Front negative element of g3.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: -54.469889,
      glass:
        "S-FSL5 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Front member of the cemented pair in g3.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 49.849048,
      glass:
        "S-TIH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Rear member of the cemented pair in g3.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.71299,
      vd: 53.9,
      focalLengthMm: -77.636128,
      glass:
        "S-LAL8 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Rear negative element of g3.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 59.854283,
      glass:
        "S-FPL51 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Front positive element of g4.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.6668,
      vd: 33,
      focalLengthMm: -83.070355,
      glass:
        "S-TIM39 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative element in g4.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Plano-Convex Positive",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 163.189474,
      glass:
        "S-TIH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive rear element of g4 adjacent to the stop gap.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 110.545545,
      glass:
        "S-LAH66 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Front positive element of g5A.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -61.276523,
      glass:
        "S-TIH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative middle element of g5A.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.6,
      focalLengthMm: 35.252129,
      glass:
        "S-BSM14 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Strong positive rear element of g5A.",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 74.94317,
      glass:
        "S-TIH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Front member of the negative transverse IS unit g5B.",
      cemented: "D2",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: -32.53195,
      glass:
        "L-LAL13 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Rear member of the cemented pair in g5B.",
      cemented: "D2",
    },
    {
      id: 18,
      name: "L18",
      label: "Element 18",
      type: "Biconcave Negative",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: -64.496385,
      glass:
        "L-LAL13 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Rear negative element of g5B, the transverse IS unit.",
    },
    {
      id: 19,
      name: "L19",
      label: "Element 19",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 38.11849,
      glass:
        "S-FPL51 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Front positive element of g5C.",
    },
    {
      id: 20,
      name: "L20",
      label: "Element 20",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -48.717804,
      glass:
        "S-LAH60 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Negative middle element of g5C.",
    },
    {
      id: 21,
      name: "L21",
      label: "Element 21",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: 86.33175,
      glass:
        "S-LAH60 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Positive rear element of g5C.",
    },
  ],

  // Optical rims checked against native 200 dpi source figures on 2026-10-30; see the audit.
  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 419.962, d: 2.8, sd: 34, medium: 1 },
    { label: "2", R: 132.534, d: 0.23, sd: 34 },
    { label: "3", R: 138.957, d: 7.52, sd: 34.0, medium: 2 },
    { label: "4", R: -407.574, d: 0.1, sd: 34.5 },
    { label: "5", R: 90.528, d: 6.64, sd: 34, medium: 3 },
    { label: "6", R: 332.596, sd: 34 },
    { label: "7", R: 47.719, d: 2.5, sd: 26, medium: 4 },
    { label: "8", R: 41.657, d: 1.82, sd: 25.2 },
    { label: "9", R: 49.949, d: 8.77, sd: 25.2, medium: 5 },
    { label: "10", R: 6214.652, sd: 25.0 },
    { label: "11", R: 1840.842, d: 1.4, sd: 18.0, medium: 6 },
    { label: "12", R: 36.505, d: 5.55, sd: 16.02 },
    { label: "13", R: -86.16, d: 1.4, sd: 16.02, medium: 7 },
    { label: "14", R: 38.587, d: 5.08, sd: 17.0, medium: 8 },
    { label: "15", R: 422.938, d: 2.47, sd: 16.38 },
    { label: "16", R: -67.77, d: 1.4, sd: 16.38, medium: 9 },
    { label: "17", R: 304.729, sd: 17.2 },
    { label: "18", R: 218.633, d: 7.01, sd: 18.5, medium: 10 },
    { label: "19", R: -34.066, d: 1.1, sd: 18.5 },
    { label: "20", R: -32.873, d: 1.45, sd: 18.0, medium: 11 },
    { label: "21", R: -82.289, d: 0.15, sd: 18.0 },
    { label: "22", R: 138.166, d: 3.0, sd: 18.5, medium: 12 },
    { label: "23", R: "flat", sd: 18.5 },
    { label: "STO", R: "flat", d: 0.25 },
    { label: "25", R: 53.68, d: 5.0, sd: 18.5, medium: 13 },
    { label: "26", R: 138.666, d: 7.32, sd: 18.2 },
    { label: "27", R: 44.371, d: 3.0, sd: 16.5, medium: 14 },
    { label: "28", R: 23.175, d: 0.15, sd: 15.7 },
    { label: "29", R: 23.436, d: 7.0, sd: 15.7, medium: 15 },
    { label: "30", R: -203.339, sd: 15.3 },
    { label: "31", R: 269.475, d: 3.5, sd: 14.0, medium: 16 },
    { label: "32", R: -82.499, d: 1.35, sd: 13.0, medium: 17 },
    { label: "33", R: 31.261, d: 3.9, sd: 12.15 },
    { label: "34", R: -66.833, d: 1.35, sd: 12.15, medium: 18 },
    { label: "35", R: 136.353, sd: 13.0 },
    { label: "36", R: 113.45, d: 8.89, sd: 15.0, medium: 19 },
    { label: "37", R: -22.151, d: 0.5, sd: 15.0 },
    { label: "38", R: -22.027, d: 1.8, sd: 15.0, medium: 20 },
    { label: "39", R: -49.895, d: 4.22, sd: 15.5 },
    { label: "40", R: 117.787, d: 4.0, sd: 19.5, medium: 21 },
    { label: "41", R: -182.364, sd: 19.5 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 72.5, label: "Wide" },
      { focalLengthMm: 99.5 },
      { focalLengthMm: 194.99, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
  },

  focus: {
    closeFocusM: 1.4,
    description:
      "Patent g2 is the axial focusing unit, but Example 1 has no published close-focus spacing table. This data model therefore keeps all internal focus endpoints identical; 1.4 m is Canon production metadata only.",
  },

  /* (moved from var) ── Published infinity-focus zoom movement; no internal focus reconstruction ── */
  gaps: {
    "6": {
      label: "D6",
      values: [
        [7.03, 7.03],
        [13.28, 13.28],
        [34.81, 34.81],
      ],
    },
    "10": {
      label: "D10",
      values: [
        [1.8, 1.8],
        [9.85, 9.85],
        [17.55, 17.55],
      ],
    },
    "17": {
      label: "D17",
      values: [
        [33.14, 33.14],
        [25.43, 25.43],
        [0.7, 0.7],
      ],
    },
    "23": {
      label: "D23",
      values: [
        [12.09, 12.09],
        [5.5, 5.5],
        [1.0, 1.0],
      ],
    },
    "30": {
      label: "D30",
      values: [
        [2.99, 2.99],
        [2.99, 2.99],
        [2.99, 2.99],
      ],
    },
    "35": {
      label: "D35",
      values: [
        [4.79, 4.79],
        [4.79, 4.79],
        [4.79, 4.79],
      ],
    },
    "41": {
      label: "BF",
      values: [
        [60.519267212042344, 60.519267212042344],
        [60.52319632595183, 60.52319632595183],
        [60.53237325536181, 60.53237325536181],
      ],
    },
  },

  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  groups: [
    { text: "g1 +", fromSurface: "1", toSurface: "6" },
    { text: "g2 FOCUS +", fromSurface: "7", toSurface: "10" },
    { text: "g3 -", fromSurface: "11", toSurface: "17" },
    { text: "g4 +", fromSurface: "18", toSurface: "23" },
    { text: "g5A +", fromSurface: "25", toSurface: "30" },
    { text: "g5B IS -", fromSurface: "31", toSurface: "35" },
    { text: "g5C +", fromSurface: "36", toSurface: "41" },
  ],
  doublets: [
    { text: "D1", fromSurface: "13", toSurface: "15" },
    { text: "D2", fromSurface: "31", toSurface: "33" },
  ],

  layout: { yScFill: 0.42 },

  checks: { gapSagFrac: 0.95 },
} satisfies LensDataV2Input;

export default LENS_DATA;
