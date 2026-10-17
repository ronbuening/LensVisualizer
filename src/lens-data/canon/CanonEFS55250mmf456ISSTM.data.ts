import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF-S 55-250mm f/4-5.6 IS STM
 *
 * Data source: US 2014/0211029 A1, Numerical Embodiment 3 (Canon / Tetsuichirou Okumura).
 * Six-unit positive-negative-positive-positive-negative-positive telephoto zoom.
 * 15 elements / 12 air-spaced groups; all spherical surfaces.
 * Focus: rear inner focus by L5. Close-focus travel is not parameterized because the patent
 * table does not publish full close-focus spacing columns for the full-field zoom positions.
 *
 * Zoom variable gaps: d5, d10, d16/STO, d22, d26, d28/BF.
 * Reversing group behavior: d16/STO decreases from wide to mid and then increases toward telephoto.
 *
 * Note on semi-diameters: the patent table labels the clear-aperture column "effective diameter";
 * the `sd` values below are half of those patent-listed full diameters.
 *
 * Note on the patent table: Numerical Embodiment 3 lists six optical columns. The five columns with
 * image height 13.66 mm are used as zoom interpolation positions. The final f=57.92 mm / image-height
 * 0.00 mm column is a zero-field auxiliary prescription column; it is retained in verification but
 * is not used as a rendered zoom position. The patent's BF row for the 135.16 mm column reads
 * 57.35 mm, but the final variable gap d28 is 57.95 mm and paraxial back-focus verification gives
 * 57.90 mm; d28=57.95 mm is therefore used.
 *
 * This file describes only the optical prescription: glass elements, surfaces, aperture stop, and
 * variable zoom gaps. It does not include filters, sensor cover glass, barrel mechanics, or IS drive parts.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-s-55-250mm-f4-5-6-is-stm",
  maker: "Canon",
  name: "CANON EF-S 55-250mm f/4-5.6 IS STM",
  subtitle: "US 2014/0211029 A1 Numerical Embodiment 3 — Canon / Okumura",

  catalog: {
    lensMounts: ["canon-ef-s"],
    imageFormat: "aps-c",
    specs: [
      "15 elements / 12 groups",
      "55-250mm f/4-5.6 marketed; 56.80-241.32mm patent design",
      "APS-C / Canon EF-S",
      "All-spherical; L2 optical IS; L5 rear focus",
    ],
    elementCount: 15,
    groupCount: 12,
    focalLengthMm: { marketing: [55, 250], design: [56.8, 241.32] },
    fNumber: { marketing: 4, design: 4.16 },
  },

  source: {
    patentNumber: "US 2014/0211029 A1",
    patentYear: 2014,
    authors: ["Tetsuichiro Okumura"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 145.05,
      glass: "S-FSL5 (OHARA)",
      role: "Low-dispersion front positive element in L1.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.65412,
      vd: 39.7,
      focalLengthMm: -97.08,
      glass: "S-NBH5 (OHARA)",
      role: "Negative flint component of the L1 achromatizing doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 87.73,
      glass: "S-FSL5 (OHARA)",
      role: "Low-dispersion crown component of the L1 achromatizing doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: -24.39,
      glass: "S-LAL8 (OHARA)",
      role: "Front negative element of the image-stabilizing L2 group.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.80809,
      vd: 22.8,
      focalLengthMm: 40.93,
      glass: "S-NPH1 (OHARA)",
      apd: "patent",
      apdNote: "Patent conditional expression (5): θgF = 0.6307, ΔPgF = +0.025.",
      role: "High-dispersion positive element inside the negative IS unit.",
      cemented: "D2",
      dPgF: 0.025,
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Plano-Concave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -50.92,
      glass: "S-LAH65V (OHARA)",
      role: "Rear negative element completing the negative-positive-negative IS unit.",
    },
    {
      id: 7,
      name: "L31",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: 49.73,
      glass: "S-LAH65V (OHARA)",
      role: "Primary positive power element of L3.",
    },
    {
      id: 8,
      name: "L32",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 38.58,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "Catalog UD fluorophosphate element matching Canon's published one-UD production count.",
      role: "UD fluorophosphate positive element in the L3 chromatic-correction doublet.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L33",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.3,
      focalLengthMm: -38.55,
      glass: "S-LAH95 (OHARA)",
      role: "Dense lanthanum-flint partner for the UD element in L3.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L41",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.3,
      focalLengthMm: -33.53,
      glass: "NBFD15 (HOYA)",
      role: "Leading negative element of the positive L4 relay group.",
    },
    {
      id: 11,
      name: "L42",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: 33.37,
      glass: "S-LAL18 (OHARA)",
      role: "Primary positive power element in L4.",
    },
    {
      id: 12,
      name: "L43",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.65844,
      vd: 50.9,
      focalLengthMm: 48,
      glass: "S-BSM25 (OHARA)",
      role: "Secondary positive element in L4, flattening the relay output.",
    },
    {
      id: 13,
      name: "L51",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.76182,
      vd: 26.5,
      focalLengthMm: 77.49,
      glass: "S-TIH14 (OHARA)",
      role: "Positive high-dispersion element in the rear-focus L5 group.",
    },
    {
      id: 14,
      name: "L52",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: -23.74,
      glass: "S-LAL14 (OHARA)",
      role: "Primary negative power element of the compact L5 focus group.",
    },
    {
      id: 15,
      name: "L61",
      label: "Element 15",
      type: "Positive Meniscus",
      nd: 1.54072,
      vd: 47.2,
      focalLengthMm: 129.41,
      glass: "S-TIL2 (OHARA)",
      role: "Weak positive rear field-correction element in L6.",
    },
  ],

  surfaces: [
    { label: "1", R: 70.708, d: 4.54, sd: 20.52, medium: 1 },
    { label: "2", R: "flat", d: 0.15, sd: 20.375 },
    { label: "3", R: 96.801, d: 1.7, sd: 20.04, medium: 2 },
    { label: "4", R: 38.081, d: 6.35, sd: 19.215, medium: 3 },
    { label: "5", R: 328.523, sd: 18.995 },
    { label: "6", R: -184.566, d: 0.8, sd: 9.1, medium: 4 },
    { label: "7", R: 19.233, d: 2.61, sd: 8.86, medium: 5 },
    { label: "8", R: 43.17, d: 2.06, sd: 8.73 },
    { label: "9", R: -40.963, d: 0.8, sd: 8.73, medium: 6 },
    { label: "10", R: 66857.597, sd: 8.89 },
    { label: "11", R: 156.448, d: 2.88, sd: 10.365, medium: 7 },
    { label: "12", R: -53.274, d: 2.84, sd: 10.455 },
    { label: "13", R: 30.717, d: 5.21, sd: 10.19, medium: 8 },
    { label: "14", R: -48.144, d: 1.12, sd: 9.83, medium: 9 },
    { label: "15", R: 127.403, d: 2.65, sd: 9.66 },
    // US 2014/0211029 A1, Numerical Embodiment 3 surface table, surface 16: printed effective
    // diameter 19.04 mm at the stop.
    { label: "STO", R: "flat" },
    { label: "17", R: -85.617, d: 1.0, sd: 8.555, medium: 10 },
    { label: "18", R: 39.709, d: 0.36, sd: 8.61 },
    { label: "19", R: 57.007, d: 3.21, sd: 8.625, medium: 11 },
    { label: "20", R: -41.442, d: 0.1, sd: 8.73 },
    { label: "21", R: 28.396, d: 3.21, sd: 8.62, medium: 12 },
    { label: "22", R: 267.012, sd: 8.31 },
    { label: "23", R: -115.808, d: 1.56, sd: 7.61, medium: 13 },
    { label: "24", R: -39.33, d: 2.16, sd: 7.6 },
    { label: "25", R: -39.123, d: 0.7, sd: 7.21, medium: 14 },
    { label: "26", R: 28.866, sd: 7.16 },
    { label: "27", R: 46.017, d: 2.6, sd: 9.16, medium: 15 },
    { label: "28", R: 131.738, sd: 9.2 },
  ],

  zoom: {
    // (moved from publishedStations) Every authored zoom station is a source row.
    stations: [
      { focalLengthMm: 56.8, nominalFNumber: 4.16, label: "55mm", published: true },
      { focalLengthMm: 74.27, nominalFNumber: 4.44, published: true },
      { focalLengthMm: 135.16, nominalFNumber: 5.18, published: true },
      { focalLengthMm: 203.01, nominalFNumber: 5.58, published: true },
      { focalLengthMm: 241.32, nominalFNumber: 5.88, label: "250mm", published: true },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.85,
    description:
      "Rear inner focus by L5; close-focus travel omitted because only infinity zoom spacings are available for the full-field patent columns.",
  },

  gaps: {
    "5": {
      label: "d5: L1-L2",
      values: [
        [5.87, 5.87],
        [19.11, 19.11],
        [43.27, 43.27],
        [56.3, 56.3],
        [60.87, 60.87],
      ],
    },
    "10": {
      label: "d10: L2-L3",
      values: [
        [24.92, 24.92],
        [20.9, 20.9],
        [11.82, 11.82],
        [4.95, 4.95],
        [1.5, 1.5],
      ],
    },
    STO: {
      label: "d16: L3-L4",
      values: [
        [19.96, 19.96],
        [17.26, 17.26],
        [13.68, 13.68],
        [14.94, 14.94],
        [16.56, 16.56],
      ],
    },
    "22": {
      label: "d22: L4-L5",
      values: [
        [4.1, 4.1],
        [3.85, 3.85],
        [3.4, 3.4],
        [2.6, 2.6],
        [2.05, 2.05],
      ],
    },
    "26": {
      label: "d26: L5-L6",
      values: [
        [11.86, 11.86],
        [12.11, 12.11],
        [12.56, 12.56],
        [13.36, 13.36],
        [13.91, 13.91],
      ],
    },
    "28": {
      label: "BF",
      values: [
        [38.57, 38.57],
        [45.28, 45.28],
        [57.95, 57.95],
        [63.56, 63.56],
        [65.38, 65.38],
      ],
    },
  },

  aperture: { fStops: [4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

  groups: [
    { text: "L1 +", fromSurface: "1", toSurface: "5" },
    { text: "L2 - / IS", fromSurface: "6", toSurface: "10" },
    { text: "L3 +", fromSurface: "11", toSurface: "15" },
    { text: "L4 +", fromSurface: "17", toSurface: "22" },
    { text: "L5 - / Focus", fromSurface: "23", toSurface: "26" },
    { text: "L6 +", fromSurface: "27", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "13", toSurface: "15" },
  ],

  layout: { scFill: 0.5, yScFill: 0.45 },
} satisfies LensDataV2Input;

export default LENS_DATA;
