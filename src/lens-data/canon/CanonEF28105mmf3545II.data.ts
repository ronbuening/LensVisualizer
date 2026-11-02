import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF 28-105mm f/3.5-4.5 II USM — JP 2002-365547 A, Numerical Example 1.
 * Five-group positive-negative-positive-negative-positive zoom; 15 elements / 12 groups, all spherical.
 * Source R/d and zoom/focus trajectories are retained. BF and the L2-only 0.5 m focus gaps remain independent
 * first-order reconstructions, not published close-focus spacings or a production cam.
 *
 * The original explicitly defines ni/νi with respect to the d-line (¶0058, PDF p. 7). Every source pair is retained;
 * compatible catalog curves are qualified spectral proxies, not supplier, melt or historical chemistry evidence.
 * No per-lens C/F/g index or partial-dispersion override is supplied by the source or authored here.
 *
 * No clear diameters are printed. Inferred caps follow native Fig. 1(A/B/C), PDF p. 12, at about 3.3 px/mm and
 * practical ±0.8 mm height uncertainty. Surface 7 has a resolved rear shoulder to 13.4 mm beyond its retained
 * 9.4 mm optical cap. The following source-figure-sized 9.8 mm L2b caps also respect the existing shoulder gap
 * guard. S11 and S27 retain smaller caps because uniform figure-blank trials violate their original gap guards.
 * No opaque interface land, unsupported resin wing or inferred cut is added.
 *
 * Source-target correction, separate from shape: the former live 3.5/4.0/4.5 aperture targets were retail markings.
 * Original Fig. 2/3/4 (PDF pp. 13–14) explicitly prints 3.63/4.08/4.67, now used by the unchanged derived-iris rule.
 * No physical iris-diameter schedule is inferred. Marketing f/3.5–4.5 remains separate catalog metadata.
 *
 * Production correlation remains qualified: the II lens predates this filing and the patent does not name it.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-28-105mm-f35-45-ii-usm",
  maker: "Canon",
  name: "CANON EF 28-105mm f/3.5-4.5 II USM",
  subtitle: "JP 2002-365547 A — Numerical Example 1 (correlated patent prescription)",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "15 ELEMENTS / 12 GROUPS",
      "PATENT f = 28.90-101.37 mm / MODELED EFL 28.903-101.333 mm",
      "PATENT f/3.63-4.67",
      "ALL-SPHERICAL",
      "INNER FOCUS",
    ],
    elementCount: 15,
    groupCount: 12,
    focalLengthMm: { marketing: [28, 105], design: [28.9, 101.37] },
    fNumber: { marketing: 3.5, design: 3.63 },
  },

  source: {
    patentNumber: "JP 2002-365547 A",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 2002,
    authors: ["Makoto Mitsusaka"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -125.335825,
      glass: "S-TIH53 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "High-index flint member of the weakly positive front cemented pair.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.622992,
      vd: 58.2,
      focalLengthMm: 93.684162,
      glass: "S-BSM15 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Positive crown partner in the front achromat.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L1c",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.712995,
      vd: 53.9,
      focalLengthMm: 92.660685,
      glass: "S-LAL8 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Air-spaced positive meniscus that supplies most of Group 1's useful positive power.",
    },
    {
      id: 4,
      name: "L2a",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -19.861731,
      glass: "S-LAH60V (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Strong front negative member of the variator/focus group.",
    },
    {
      id: 5,
      name: "L2b",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -25.703743,
      glass: "S-LAH65V (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Moderate-dispersion negative element in the variator group; historical chemistry unspecified.",
    },
    {
      id: 6,
      name: "L2c",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 18.943621,
      glass: "PBH53 / PBH53W (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Strong internal positive element that moderates Group 2's net negative power.",
    },
    {
      id: 7,
      name: "L2d",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.772499,
      vd: 49.6,
      focalLengthMm: -35.706268,
      glass: "S-LAH66 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Higher-Abbe rear negative element constrained explicitly by patent conditions (8)-(10).",
    },
    {
      id: 8,
      name: "L3a",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -35.217623,
      glass: "PBH53 / PBH53W (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Negative member of the principal Group 3 cemented achromat.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L3b",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.622992,
      vd: 58.2,
      focalLengthMm: 18.338521,
      glass: "S-BSM15 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Strong positive crown member of the Group 3 cemented achromat.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L3c",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.603112,
      vd: 60.6,
      focalLengthMm: 46.852369,
      glass: "S-BSM14 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Air-spaced positive singlet completing the main positive relay group.",
    },
    {
      id: 11,
      name: "L4a",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.698947,
      vd: 30.1,
      focalLengthMm: 23.772583,
      glass: "S-TIM35 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "High-dispersion positive member of the net-negative Group 4 cemented pair.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L4b",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.712995,
      vd: 53.9,
      focalLengthMm: -15.223364,
      glass: "S-LAL8 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Lower-dispersion negative member of Group 4.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L5a",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 35.708067,
      glass: "S-FSL5 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Low-dispersion rear-group positive element with a weak object-side surface.",
    },
    {
      id: 14,
      name: "L5b",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.1,
      focalLengthMm: 61.644959,
      glass: "S-BAL35 (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Moderate positive crown constrained by patent conditions (14)-(16).",
    },
    {
      id: 15,
      name: "L5c",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -33.697556,
      glass: "PBH53 / PBH53W (qualified spectral proxy; historical supplier and melt unspecified)",
      role: "Image-convex negative meniscus completing the net-positive rear relay.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 92.12, d: 1.5, sd: 25.0, medium: 1 },
    { label: "2", R: 48.944, d: 6.14, sd: 25.0, medium: 2 },
    { label: "3", R: 288.63, d: 0.12, sd: 25.0 },
    { label: "4", R: 45.314, d: 5.05, sd: 22.5, medium: 3 },
    { label: "5", R: 137.567, sd: 22.5 },
    { label: "6", R: 62.216, d: 1.2, sd: 13.4, medium: 4 },
    { label: "7", R: 12.967, d: 5.23, sd: 9.4, rimExtensionSd: 13.4 },
    { label: "8", R: -73.291, d: 1.05, sd: 9.8, medium: 5 },
    { label: "9", R: 28.965, d: 0.1, sd: 9.8 },
    { label: "10", R: 21.363, d: 5.16, sd: 10.5, medium: 6 },
    { label: "11", R: -57.228, d: 0.63, sd: 7.8 },
    { label: "12", R: -28.337, d: 1.0, sd: 9.0, medium: 7 },
    { label: "13", R: 1052.655, sd: 9.0 },
    { label: "STO", R: "flat", d: 0.07 },
    { label: "15", R: 25.369, d: 0.9, sd: 8.8, medium: 8 },
    { label: "16", R: 13.484, d: 5.35, sd: 8.8, medium: 9 },
    { label: "17", R: -63.416, d: 0.12, sd: 9.6 },
    { label: "18", R: 35.055, d: 2.66, sd: 9.5, medium: 10 },
    { label: "19", R: -141.558, sd: 9.5 },
    { label: "20", R: -40.005, d: 3.63, sd: 9.2, medium: 11 },
    { label: "21", R: -12.178, d: 1.55, sd: 9.4, medium: 12 },
    { label: "22", R: 105.139, sd: 9.5 },
    { label: "23", R: 780.731, d: 4.99, sd: 11.2, medium: 13 },
    { label: "24", R: -17.767, d: 0.12, sd: 11.2 },
    { label: "25", R: 58.656, d: 2.83, sd: 11.5, medium: 14 },
    { label: "26", R: -93.652, d: 3.06, sd: 11.5 },
    { label: "27", R: -17.953, d: 1.4, sd: 10.4, medium: 15 },
    { label: "28", R: -50.156, sd: 11.5 },
  ],

  zoom: {
    /* (moved from zoomPositions) ── Zoom and focus ── */
    stations: [
      { focalLengthMm: 28.9, nominalFNumber: 3.63, label: "Wide" },
      { focalLengthMm: 50.0, nominalFNumber: 4.08 },
      { focalLengthMm: 101.37, nominalFNumber: 4.67, label: "Tele" },
    ],
    step: 0.004,
  },

  /* ── Product and display controls ── */
  focus: {
    closeFocusM: 0.5,
    description:
      "Inner focus. The patent recommends moving negative Group 2; close-focus D5/D13 values are a paraxial L2-only model solved at the official 0.50 m MFD, not a published production cam law.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [1.95, 0.749849791],
        [13.77, 11.807430419],
        [28.64, 24.129250072],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [14.66, 15.860150209],
        [8.32, 10.282569581],
        [1.96, 6.470749928],
      ],
    },
    "19": {
      label: "D19",
      values: [
        [1.71, 1.71],
        [4.65, 4.65],
        [7.6, 7.6],
      ],
    },
    "22": {
      label: "D22",
      values: [
        [7.34, 7.34],
        [4.4, 4.4],
        [1.45, 1.45],
      ],
    },
    "28": {
      label: "BF",
      values: [
        [38.889555575, 38.889555575],
        [45.425398029, 45.425398029],
        [51.691520748, 51.691520748],
      ],
    },
  },

  aperture: { fStops: [3.63, 4.08, 4.67, 5.6, 8, 11, 16, 22, 27], maxFNumber: 27, blades: 7 },

  /* ── Diagram annotations ── */
  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "L2 (-) / FOCUS", fromSurface: "6", toSurface: "13" },
    { text: "L3 (+)", fromSurface: "STO", toSurface: "19" },
    { text: "L4 (-)", fromSurface: "20", toSurface: "22" },
    { text: "L5 (+)", fromSurface: "23", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
  ],

  layout: { scFill: 0.63, yScFill: 0.68 },
} satisfies LensDataV2Input;

export default LENS_DATA;
