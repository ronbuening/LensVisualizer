import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF 35mm f/1.4 L USM — JP H11-211978 A, Numerical Example 1.
 * Original-PDF shape/glass review: 2026-10-30; no scaling.
 * Four inferred clear-cap fields follow native Figure 1, with two resolved air-facing shoulders.
 * Source R/d, source endpoint gaps, stops and asphere coefficients remain unchanged.
 *
 * Retained source correction: printed r11=+72.820 gives EFL 26.892639 mm and positive L2b
 * (+52.755075 mm); applied -72.820 gives 34.294832 mm and negative L2b (-277.776682 mm).
 * The source summary states f = 34.3 (PDF page 5), and Claim1 explicitly requires negative L2b (PDF page 2).
 * This formalizes the existing sign correction in source.errata; no new numerical R change.
 *
 * The patent names no spectral line. 11 of 11 printed pairs match catalog d-line coordinates and none match the
 * e-line, so the table is read as d-line. 11 media use catalog curves as spectral proxies; supplier, melt and
 * chemistry stay unspecified. No individual C/F/g or partial-dispersion overrides are authored.
 *
 * Source focus gaps: d6=5.20→0.43, d13=3.70→2.06 at infinity→300 mm. L1 is fixed,
 * L2 moves 4.77 mm objectward and L3 plus stop 6.41 mm. BF is fixed-image-plane bookkeeping.
 * Asphere 17A keeps source-table R = -65.3464, K = 2.39046 and B/C/D terms; unprinted E remains
 * A10=0 as an explicit modeling assumption. No coefficient is tuned to drawing or ray clearance.
 * See the audit for native scale, rejected S2 cap trial, glass reference evidence and runtime limits.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-35mm-f14l-usm",
  maker: "Canon",
  name: "CANON EF 35mm f/1.4 L USM",
  subtitle: "JP H11-211978 A Example 1 — corrected r11 sign; production correlation inferred",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "11 ELEMENTS / 9 GROUPS",
      "35 mm MARKETED / 34.3 mm PATENT / 34.2948 mm COMPUTED",
      "f/1.4 MARKETED / f/1.45 DESIGN",
      "2ω = 64°",
      "1 ASPHERICAL SURFACE",
      "0.30 m MFD",
    ],
    elementCount: 11,
    groupCount: 9,
    focalLengthMm: { marketing: 35, design: 34.3 },
    fNumber: { marketing: 1.4, design: 1.45 },
  },

  source: {
    patentNumber: "JP H11-211978 A",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 1999,
    authors: ["Yasunori Murata", "Makoto Misaka"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "corrected",
        surface: "11",
        field: "R",
        printed: 72.82,
        applied: -72.82,
        evidence: ["source-summary", "claims"],
        note: "Retained sign correction, formalized on 2026-10-30 with no numerical R change. Numerical Example 1, PDF page 5, prints r11=+72.820 and f=34.3 mm. Printed r11 gives EFL 26.892639 mm; applied -72.820 gives 34.294832 mm. Independently, Claim1 on PDF page 2 explicitly requires negative L2b: printed r11 gives subgroup EFL +52.755075 mm, whereas applied gives -277.776682 mm. Paragraph 0012 repeats that sign. Both original evidence kinds reject the printed sign and support the retained correction; no other R/d, glass pair or focus control is changed.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.58313,
      vd: 59.4,
      indexReference: "d",
      focalLengthMm: -77.59314088315068,
      glass:
        "J-SK12 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.58313,
      vd: 59.4,
      indexReference: "d",
      focalLengthMm: -94.17073259813091,
      glass:
        "J-SK12 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.8,
      indexReference: "d",
      focalLengthMm: 65.85967540206435,
      glass:
        "N-LAK8 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.8,
      indexReference: "d",
      focalLengthMm: 60.95488850902199,
      glass:
        "N-LAK8 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.2,
      indexReference: "d",
      focalLengthMm: -314.293452650426,
      glass:
        "S-BSL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      focalLengthMm: 50.16186656500432,
      glass:
        "J-LASF05 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      cemented: "L2b",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.6398,
      vd: 34.5,
      indexReference: "d",
      focalLengthMm: -43.50725067734946,
      glass:
        "S-TIM27 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      cemented: "L2b",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: -22.95419584350211,
      glass:
        "N-SF6 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      cemented: "L3a",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      focalLengthMm: 72.20755433769958,
      glass:
        "J-LASF05 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      cemented: "L3a",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: 46.7590649936805,
      glass:
        "J-LASF016 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: 51.38854165207472,
      glass:
        "J-LASF016 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
    },
  ],

  surfaces: [
    { label: "1", R: 400.0, d: 2.8, sd: 25.0, medium: 1 },
    { label: "2", R: 40.544, d: 6.91, sd: 22.0, rimExtensionSd: 25 },
    { label: "3", R: 606.181, d: 2.3, sd: 23, medium: 2 },
    { label: "4", R: 50.282, d: 10.31, sd: 23 },
    { label: "5", R: 61.687, d: 6.5, sd: 22.5, medium: 3 },
    { label: "6", R: -188.04, sd: 21.5 },
    { label: "7", R: 47.477, d: 5.06, sd: 19.8, medium: 4 },
    { label: "8", R: -490.98, d: 0.2, sd: 18.8 },
    { label: "9", R: 31.299, d: 3.0, sd: 17, medium: 5 },
    { label: "10", R: 25.382, d: 9.27, sd: 17.0 },
    // Retained r11 sign correction: original f34.3 summary and Claim1 negative L2b; see source.errata.
    { label: "11", R: -72.82, d: 3.77, sd: 15.0, medium: 6 },
    { label: "12", R: -27.213, d: 1.5, sd: 14.5, medium: 7 },
    { label: "13", R: -1242.161, sd: 14.0 },
    { label: "STO", R: "flat", d: 7.07 },
    {
      label: "15",
      R: -18.961,
      d: 1.6,
      sd: 13.5,
      medium: 8,
      rimExtensionSd: 14.2,
    },
    { label: "16", R: 759.56, d: 3.3, sd: 14.2, medium: 9 },
    {
      label: "17A",
      R: -65.3464,
      d: 0.2,
      sd: 15.2,
      asphere: {
        K: 2.39046,
        A4: 1.36838e-5,
        A6: 3.28097e-10,
        A8: -1.1445e-11,
        A10: 0,
        A12: 0,
        A14: 0,
      },
    },
    { label: "18", R: -172.7, d: 5.94, sd: 15.4, medium: 10 },
    { label: "19", R: -30.321, d: 0.2, sd: 17.5 },
    { label: "20", R: -160.598, d: 6.81, sd: 18.0, medium: 11 },
    { label: "21", R: -32.418, sd: 18.0 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "PUBLISHED floating focus: L1 remains fixed; d6 changes 5.20→0.43 mm and d13 changes 3.70→2.06 mm. " +
      "L2 moves 4.77 mm objectward and L3 plus the stop moves 6.41 mm objectward at the 300 mm state. " +
      "BF 38.6533555→45.0633555 mm is computed only to preserve the fixed image plane.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: {
    "6": { label: "d6", values: [[5.2, 0.43]] },
    "13": { label: "d13", values: [[3.7, 2.06]] },
    "21": { label: "BF", values: [[38.653355504539874, 45.06335550453987]] },
  },

  aperture: {
    nominalFNumber: 1.45,
    fStops: [1.45, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 8,
  },

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "6" },
    { text: "L2", fromSurface: "7", toSurface: "13" },
    { text: "L3", fromSurface: "15", toSurface: "21" },
  ],
  doublets: [
    { text: "L1a", fromSurface: "1", toSurface: "4" },
    { text: "L1b", fromSurface: "5", toSurface: "6" },
    { text: "L2a", fromSurface: "7", toSurface: "10" },
    { text: "L2b", fromSurface: "11", toSurface: "13" },
    { text: "L3a", fromSurface: "15", toSurface: "17A" },
    { text: "L3b", fromSurface: "18", toSurface: "21" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
