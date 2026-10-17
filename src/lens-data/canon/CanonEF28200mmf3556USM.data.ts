import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON EF 28-200mm f/3.5-5.6 USM                                               ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2001-350095 A, Numerical Example 1 (Canon Inc.; Makoto Mitsusaka).          ║
 * ║  Production correlation: Canon EF28-200mm f/3.5-5.6 USM, marketed September 2000.            ║
 * ║  Native patent scale; no dimensional or asphere scaling applied.                             ║
 * ║                                                                                              ║
 * ║  Patent architecture: five moving zoom groups, positive-negative-positive-negative-positive. ║
 * ║  Product count: 16 glass substrates / 12 air-separated groups. The elements array also       ║
 * ║  models the 0.05 mm bonded replica/aspheric layer after source surface 6 as a separate       ║
 * ║  hybrid component, giving 17 modeled material entries.                                       ║
 * ║                                                                                              ║
 * ║  Zoom variable gaps: D5, D15, D21, D24, and the solved S30-to-image spacing.                 ║
 * ║  G5 moves integrally with G3: D21 + D24 = 9.960 mm at every published station.               ║
 * ║  No reversing group is present across the three published stations.                          ║
 * ║                                                                                              ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION. The patent publishes infinity states only.        ║
 * ║  Close focus moves G2 alone toward the object, conserves D5 + D15 at each zoom station,      ║
 * ║  keeps the image plane fixed, and solves the paraxial imaging condition for a 0.45 m         ║
 * ║  object-to-image distance.                                                                   ║
 * ║                                                                                              ║
 * ║  Source corrections: absent minus signs were restored at R12, R18, R23, and R26. The         ║
 * ║  printed negative signs at R20, R28, and R29 were retained. This sign treatment reproduces   ║
 * ║  the patent focal lengths and all five published group-power ratios.                         ║
 * ║                                                                                              ║
 * ║  Semi-diameters are inferred because Example 1 publishes none. They were sized from all      ║
 * ║  infinity and reconstructed-close marginal/chief-ray states, the 135-format image height,    ║
 * ║  the patent optical sections, and Canon's 72 mm filter envelope. The configured 0.60-field,  ║
 * ║  0.75-pupil off-axis fan is contained in every published and reconstructed state.            ║
 * ║                                                                                              ║
 * ║  Exclusions: no sensor cover glass, filter, inactive dummy plane, flare cutter, or           ║
 * ║  mechanical component is included.                                                           ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════╝
 *
 * Product source: https://global.canon/en/c-museum/product/ef361.html
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-28-200mm-f35-56-usm",
  maker: "Canon",
  name: "CANON EF 28-200mm f/3.5-5.6 USM",
  subtitle: "JP 2001-350095 A, Numerical Example 1 — constrained G2 close-focus reconstruction",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "16 GLASS SUBSTRATES / 12 GROUPS",
      "DESIGN 28.92-193.14 mm",
      "MODELED f/3.63-5.88",
      "2 ASPHERICAL SURFACES",
      "G2 INNER FOCUS",
    ],
    elementCount: 16,
    groupCount: 12,
    focalLengthMm: { marketing: [28, 200], design: [28.896161, 192.911008] },
    fNumber: { marketing: 3.5, design: 3.63 },
  },

  source: {
    patentNumber: "JP 2001-350095 A",
    patentYear: 2001,
    authors: ["Makoto Mitsusaka"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -146.891018,
      glass: "S-TIH53WN (OHARA)",
      cemented: "C1",
      dPgF: 0.0179,
      nC: 1.836527,
      nF: 1.872007,
      ng: 1.894034,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.622992,
      vd: 58.2,
      focalLengthMm: 99.820738,
      glass: "S-BSM15 (OHARA)",
      cemented: "C1",
      dPgF: -0.0016,
      nC: 1.619739,
      nF: 1.63045,
      ng: 1.636296,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.622992,
      vd: 58.2,
      focalLengthMm: 123.299441,
      glass: "S-BSM15 (OHARA)",
      dPgF: -0.0016,
      nC: 1.619739,
      nF: 1.63045,
      ng: 1.636296,
    },
    {
      id: 4,
      name: "L4r",
      label: "Hybrid replica layer",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.51421,
      vd: 51.4,
      focalLengthMm: -847.565314,
      glass: "Unmatched (thin replica/aspheric layer; nd=1.514210, vd=51.4)",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4 substrate",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -22.775172,
      glass: "S-LAH60 (OHARA)",
      cemented: "H1",
      dPgF: -0.0037,
      nC: 1.827376,
      nF: 1.849819,
      ng: 1.862781,
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.834807,
      vd: 42.7,
      focalLengthMm: -26.393152,
      glass: "S-LAH55V (OHARA)",
      dPgF: -0.0075,
      nC: 1.828981,
      nF: 1.84852,
      ng: 1.859556,
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 19.601756,
      glass: "S-TIH53WN (OHARA)",
      dPgF: 0.0179,
      nC: 1.836527,
      nF: 1.872007,
      ng: 1.894034,
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -21.342363,
      glass: "S-LAH65V (OHARA)",
      cemented: "C2",
      dPgF: -0.0088,
      nC: 1.798817,
      nF: 1.816076,
      ng: 1.825694,
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 71.91798,
      glass: "S-TIH53WN (OHARA)",
      cemented: "C2",
      dPgF: 0.0179,
      nC: 1.836527,
      nF: 1.872007,
      ng: 1.894034,
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.518229,
      vd: 58.9,
      focalLengthMm: 30.181663,
      glass: "S-NSL3 (OHARA)",
      dPgF: -0.0005,
      nC: 1.515556,
      nF: 1.524354,
      ng: 1.529155,
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.517417,
      vd: 52.4,
      focalLengthMm: 24.801607,
      glass: "S-NSL36 (OHARA)",
      cemented: "C3",
      dPgF: -0.0002,
      nC: 1.514444,
      nF: 1.524313,
      ng: 1.529804,
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -28.742226,
      glass: "S-TIH53WN (OHARA)",
      cemented: "C3",
      dPgF: 0.0179,
      nC: 1.836527,
      nF: 1.872007,
      ng: 1.894034,
    },
    {
      id: 13,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.72825,
      vd: 28.5,
      focalLengthMm: 35.971241,
      glass: "S-TIH10 (OHARA)",
      cemented: "C4",
      dPgF: 0.0123,
      nC: 1.720865,
      nF: 1.746453,
      ng: 1.762002,
    },
    {
      id: 14,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.882997,
      vd: 40.8,
      focalLengthMm: -19.819009,
      glass: "S-LAH58 (OHARA)",
      cemented: "C4",
      dPgF: -0.0088,
      nC: 1.87656,
      nF: 1.898221,
      ng: 1.910497,
    },
    {
      id: 15,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.583126,
      vd: 59.4,
      focalLengthMm: 28.643528,
      glass: "S-BAL42 (OHARA)",
      dPgF: -0.002,
      nC: 1.580139,
      nF: 1.58996,
      ng: 1.595297,
    },
    {
      id: 16,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.518229,
      vd: 58.9,
      focalLengthMm: 100.846418,
      glass: "S-NSL3 (OHARA)",
      dPgF: -0.0005,
      nC: 1.515556,
      nF: 1.524354,
      ng: 1.529155,
    },
    {
      id: 17,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.806098,
      vd: 40.9,
      focalLengthMm: -30.242699,
      glass: "S-LAH53 (OHARA)",
      dPgF: -0.0052,
      nC: 1.800248,
      nF: 1.819945,
      ng: 1.831174,
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 101.683, d: 1.5, sd: 31.5, medium: 1 },
    { label: "2", R: 55.565, d: 8.32, sd: 30.8, medium: 2 },
    { label: "3", R: 491.783, d: 0.15, sd: 30.4 },
    { label: "4", R: 54.265, d: 6.12, sd: 29.6, medium: 3 },
    { label: "5", R: 176.85, sd: 27.8 },
    {
      label: "6A",
      R: 64.293,
      d: 0.05,
      sd: 11.3,
      medium: 4,
      asphere: { K: 0, A4: 4.38644e-6, A6: 2.81127e-8, A8: -2.86365e-10, A10: 1.27865e-12, A12: 0 },
    },
    { label: "7", R: 56.013, d: 1.15, sd: 11.3, medium: 5 },
    { label: "8", R: 14.052, d: 5.43, sd: 10.7 },
    { label: "9", R: -54.275, d: 1.0, sd: 9.7, medium: 6 },
    { label: "10", R: 37.401, d: 0.12, sd: 9.8 },
    { label: "11", R: 25.079, d: 3.85, sd: 9.8, medium: 7 },
    { label: "12", R: -45.611, d: 1.06, sd: 9.6 },
    { label: "13", R: -21.102, d: 0.9, sd: 8.2, medium: 8 },
    { label: "14", R: 93.584, d: 1.79, sd: 9.2, medium: 9 },
    { label: "15", R: -172.765, sd: 9.2 },
    { label: "STO", R: "flat", d: 0.71 },
    { label: "17", R: 31.704, d: 4.36, sd: 9.1, medium: 10 },
    { label: "18", R: -29.422, d: 0.15, sd: 9.9 },
    { label: "19", R: 33.868, d: 4.93, sd: 9.9, medium: 11 },
    { label: "20", R: -19.636, d: 0.9, sd: 9.8, medium: 12 },
    { label: "21", R: -103.829, sd: 9.8 },
    { label: "22", R: -36.508, d: 2.59, sd: 9.9, medium: 13 },
    { label: "23", R: -15.708, d: 0.9, sd: 10.2, medium: 14 },
    { label: "24", R: -157.51, sd: 10.3 },
    { label: "25", R: 76.073, d: 6.02, sd: 12.6, medium: 15 },
    {
      label: "26A",
      R: -20.778,
      d: 4.7,
      sd: 13.2,
      asphere: { K: 0, A4: 1.07579e-5, A6: 1.68849e-8, A8: 7.49501e-12, A10: -1.82624e-13, A12: 0 },
    },
    { label: "27", R: 666.832, d: 2.23, sd: 12.3, medium: 16 },
    { label: "28", R: -56.641, d: 2.3, sd: 12.0 },
    { label: "29", R: -18.982, d: 1.2, sd: 10.0, medium: 17 },
    { label: "30", R: -88.169, sd: 11.3 },
  ],

  zoom: {
    /* (moved from nominalFno) ── Aperture configuration ── */
    stations: [
      { focalLengthMm: 28.92, nominalFNumber: 3.63, label: "Wide" },
      { focalLengthMm: 80.0, nominalFNumber: 5.06 },
      { focalLengthMm: 193.14, nominalFNumber: 5.88, label: "Tele" },
    ],
    step: 0.004,
  },

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.45,
    description:
      "CONSTRAINED_RECONSTRUCTION: G2 moves alone toward the object; D5 + D15 is conserved at each zoom station; close states are code-solved for a fixed image plane and a 0.45 m object-to-image distance. The patent publishes infinity states only.",
  },

  /* (moved from var) ── Variable air spacings ── */
  gaps: {
    "5": {
      label: "D5",
      values: [
        [2.34, 1.124285],
        [28.59, 25.528897],
        [47.13, 38.814304],
      ],
    },
    "15": {
      label: "D15",
      values: [
        [18.54, 19.755715],
        [9.12, 12.181103],
        [1.75, 10.065696],
      ],
    },
    "21": {
      label: "D21",
      values: [
        [1.62, 1.62],
        [7.04, 7.04],
        [9.36, 9.36],
      ],
    },
    "24": {
      label: "D24",
      values: [
        [8.34, 8.34],
        [2.92, 2.92],
        [0.6, 0.6],
      ],
    },
    "30": {
      label: "BF",
      values: [
        [38.245833, 38.245833],
        [52.547644, 52.547644],
        [60.202808, 60.202808],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22, 32, 36], maxFNumber: 36, blades: 6 },

  /* ── Group and cemented-assembly annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (-) / FOCUS", fromSurface: "6A", toSurface: "15" },
    { text: "G3 (+)", fromSurface: "17", toSurface: "21" },
    { text: "G4 (-)", fromSurface: "22", toSurface: "24" },
    { text: "G5 (+)", fromSurface: "25", toSurface: "30" },
  ],
  doublets: [
    { text: "C1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "6A", toSurface: "8" },
    { text: "C2", fromSurface: "13", toSurface: "15" },
    { text: "C3", fromSurface: "19", toSurface: "21" },
    { text: "C4", fromSurface: "22", toSurface: "24" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.54, yScFill: 0.56 },
} satisfies LensDataV2Input;

export default LENS_DATA;
