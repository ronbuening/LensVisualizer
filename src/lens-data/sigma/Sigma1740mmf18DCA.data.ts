import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — Sigma 17-40mm F1.8 DC | Art                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: CN 121454749 A, Numerical Example 1 (Sigma /        ║
 * ║  Shioda Ryo). Negative-lead constant-length APS-C zoom.            ║
 * ║  17 elements / 11 air-separated groups, six aspherical surfaces    ║
 * ║  on four molded elements.                                          ║
 * ║                                                                    ║
 * ║  Zoom: internal zoom, constant front-vertex-to-image track         ║
 * ║  of 133.60 mm at the three patent zoom states.                     ║
 * ║                                                                    ║
 * ║  Focus: the patent states that G6 moves toward the image side       ║
 * ║  during close focusing, but publishes infinity-focus zoom data      ║
 * ║  only. Close-focus spacing values are therefore held equal to       ║
 * ║  the infinity spacings in this renderer file.                      ║
 * ║                                                                    ║
 * ║  Semi-diameters: inferred from paraxial marginal/chief-ray          ║
 * ║  envelopes, then constrained by edge thickness, surface slope,      ║
 * ║  element front/rear SD ratio, and cross-gap sag intrusion.          ║
 * ║  The patent does not publish clear-aperture semi-diameters.         ║
 * ║                                                                    ║
 * ║  Aperture note: the patent tabulates Fno = 1.86 at all zoom         ║
 * ║  positions. The stop radius is derived from the design f-number at  ║
 * ║  each zoom station; nominalFno carries the patent's 1.86            ║
 * ║  (radii 9.28 / 10.11 / 11.20 mm). apertureMarketing is F1.8.        ║
 * ║                                                                    ║
 * ║  Partial dispersion: the patent lists θgF per glass. `dPgF` is       ║
 * ║  θgF minus the engine's normal line (0.6438 − 0.001682·νd), not      ║
 * ║  the patent's dPgF = θgF − (0.648285 − 0.00180123·νd), which the     ║
 * ║  analysis quotes as ΔPgF for conditions (8) and (9).                 ║
 * ║                                                                    ║
 * ║  Sensor cover glass, filters, mounts, and barrel mechanics are      ║
 * ║  intentionally excluded.                                           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "sigma-17-40mm-f18-dc-art",
  maker: "Sigma",
  name: "SIGMA 17-40mm f/1.8 DC | Art",
  subtitle: "CN 121454749 A Example 1 — Sigma / Shioda Ryo",

  catalog: {
    lensMounts: ["l-mount", "canon-rf", "fujifilm-x", "sony-fe"],
    imageFormat: "aps-c",
    specs: [
      "17 elements / 11 groups",
      "4 SLD / 4 aspherical elements",
      "f = 17.55–38.70 mm design",
      "F1.86 design / F1.8 marketed",
      "APS-C image height 14.20 mm",
      "Internal zoom, G6 internal focus",
    ],
    elementCount: 17,
    groupCount: 11,
    focalLengthMm: { marketing: [17, 40], design: [17.5503, 38.701] },
    fNumber: { marketing: 1.8, design: 1.86 },
  },

  source: {
    patentNumber: "CN 121454749 A",
    patentYear: 2026,
    authors: ["Ryo Shioda"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.59271,
      vd: 66.97,
      focalLengthMm: -53.05,
      glass: "MP-PCD51-70 (Hoya precision-mold preform; PCD51 class)",
      role: "Front molded aspherical negative meniscus; wide-end distortion and field-curvature control.",
      dPgF: 0.005544,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.55352,
      vd: 71.72,
      focalLengthMm: -193.43,
      glass: "MP-FCD500-20 (Hoya precision-mold ED preform)",
      role: "Low-dispersion double-aspherical front-group meniscus.",
      dPgF: 0.016633,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.44,
      focalLengthMm: -50.62,
      glass: "FC5 (Hoya)",
      role: "Low-dispersion negative member of the G1 cemented doublet.",
      cemented: "D1",
      dPgF: 0.005280,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.85033,
      vd: 42.7,
      focalLengthMm: 51.28,
      glass: "TAFD34 (Hoya)",
      role: "High-index positive partner closing the fixed negative front group.",
      cemented: "D1",
      dPgF: -0.007379,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.55032,
      vd: 75.5,
      focalLengthMm: 47.11,
      glass: "FCD705 (Hoya)",
      role: "SLD positive element of G2; anomalous partial dispersion for secondary-spectrum control.",
      cemented: "D2",
      dPgF: 0.023291,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.77047,
      vd: 29.74,
      focalLengthMm: -109.5,
      glass: "NBFD29 (Hoya)",
      role: "Dense flint partner in the first positive variator.",
      cemented: "D2",
      dPgF: 0.001323,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.75211,
      vd: 25.05,
      focalLengthMm: -122.43,
      glass: "FF8 (Hoya)",
      role: "High-dispersion negative member of the second positive variator.",
      cemented: "D3",
      dPgF: 0.017534,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.32,
      focalLengthMm: 46.53,
      glass: "TAC6L (Hoya)",
      role: "High-index positive member of G3 with near-index-matched cement interface.",
      cemented: "D3",
      dPgF: -0.008498,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.7859,
      vd: 43.94,
      focalLengthMm: -24.33,
      glass: "NBFD11 (Hoya)",
      role: "Strong negative element immediately behind the stop.",
      cemented: "D4",
      dPgF: -0.008693,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.98612,
      vd: 16.48,
      focalLengthMm: 61.71,
      glass: "FDS16-W (Hoya)",
      role: "Very-high-index, high-dispersion positive partner in G4.",
      cemented: "D4",
      dPgF: 0.049519,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.73037,
      vd: 32.23,
      focalLengthMm: -34.22,
      glass: "NBFD32 (Hoya)",
      role: "Negative flint opening the strong positive master group G5.",
      cemented: "D5",
      dPgF: 0.000311,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 29.09,
      glass: "FCD505/FCD515 family (Hoya, 593/686 anomalous ED)",
      role: "SLD positive partner in the G5 front doublet.",
      cemented: "D5",
      dPgF: 0.015619,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: 35.08,
      glass: "FCD505/FCD515 family (Hoya, 593/686 anomalous ED)",
      role: "Air-spaced SLD positive element in G5.",
      dPgF: 0.015619,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.59271,
      vd: 66.97,
      focalLengthMm: 70.91,
      glass: "MP-PCD51-70 (Hoya precision-mold preform; PCD51 class)",
      role: "Double-aspherical positive meniscus closing G5.",
      dPgF: 0.005544,
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.7433,
      vd: 49.22,
      focalLengthMm: -39.78,
      glass: "NBF1 (Hoya)",
      role: "Single-element G6 internal focusing group.",
      dPgF: -0.011512,
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.8061,
      vd: 40.73,
      focalLengthMm: 43.37,
      glass: "MP-NBFD130 (Hoya precision-mold preform)",
      role: "Molded aspherical positive front member of the nearly afocal rear corrector.",
      cemented: "D6",
      dPgF: -0.005892,
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 1.85451,
      vd: 25.15,
      focalLengthMm: -46.96,
      glass: "NBFD25 (Hoya)",
      role: "Rear dense flint member of G7.",
      cemented: "D6",
      dPgF: 0.008802,
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 250,
      d: 2.0027,
      sd: 20.2,
      medium: 1,
      asphere: { K: 0, A4: 8.81137e-6, A6: -9.35247e-9, A8: 3.562e-12, A10: 9.76737e-15, A12: -1.41083e-17, A14: 6.2892e-21 },
    },
    { label: "2", R: 27.8483, d: 5.9106, sd: 16.2 },
    {
      label: "3A",
      R: 75.5339,
      d: 1.7,
      sd: 16.1,
      medium: 2,
      asphere: { K: 0, A4: -2.07372e-6, A6: 7.46142e-9, A8: -1.62322e-11, A10: 9.72804e-15, A12: 0, A14: 0 },
    },
    {
      label: "4A",
      R: 43.9336,
      d: 8.9578,
      sd: 16.3,
      asphere: { K: 0, A4: 6.10616e-6, A6: 6.61601e-9, A8: -4.17607e-11, A10: 5.07229e-14, A12: 0, A14: 0 },
    },
    { label: "5", R: -42.5013, d: 1.2, sd: 17.0, medium: 3 },
    { label: "6", R: 59.3792, d: 4.8124, sd: 17.2, medium: 4 },
    { label: "7", R: -158.0782, sd: 17.0 },
    { label: "8", R: 73.9893, d: 7.8404, sd: 18.5, medium: 5 },
    { label: "9", R: -38.4074, d: 0.9, sd: 18.3, medium: 6 },
    { label: "10", R: -71.2235, sd: 18.3 },
    { label: "11", R: 69.5442, d: 0.9, sd: 18.6, medium: 7 },
    { label: "12", R: 39.4005, d: 6.0497, sd: 18.4, medium: 8 },
    { label: "13", R: -303.0102, sd: 18.2 },
    { label: "STO", R: "flat", d: 3.4674 },
    { label: "15", R: -31.4322, d: 0.95, sd: 13.4, medium: 9 },
    { label: "16", R: 49.4614, d: 2.2536, sd: 13.5, medium: 10 },
    { label: "17", R: 258.2249, sd: 13.7 },
    { label: "18", R: -410.5686, d: 0.9, sd: 13.9, medium: 11 },
    { label: "19", R: 26.6348, d: 6.488, sd: 13.8, medium: 12 },
    { label: "20", R: -44.48, d: 0.15, sd: 13.6 },
    { label: "21", R: 31.284, d: 5.5107, sd: 13.8, medium: 13 },
    { label: "22", R: -57.9617, d: 0.25, sd: 13.7 },
    {
      label: "23A",
      R: 35.7978,
      d: 2.7669,
      sd: 13.7,
      medium: 14,
      asphere: { K: 0, A4: -8.60792e-6, A6: 1.99952e-9, A8: -4.94951e-11, A10: -7.59311e-14, A12: 5.27607e-16, A14: 0 },
    },
    {
      label: "24A",
      R: 234.5415,
      sd: 13.4,
      asphere: { K: 0, A4: 3.85958e-6, A6: 1.95216e-8, A8: -7.83598e-11, A10: 1.91464e-13, A12: 0, A14: 0 },
    },
    { label: "25", R: 46.4631, d: 0.9, sd: 13.3, medium: 15 },
    { label: "26", R: 17.92, sd: 13.2 },
    {
      label: "27A",
      R: 60.49,
      d: 3.8719,
      sd: 12.8,
      medium: 16,
      asphere: { K: 0, A4: 1.05308e-6, A6: 5.18117e-8, A8: -4.36191e-10, A10: 2.64638e-12, A12: -5.67644e-15, A14: 0 },
    },
    { label: "28", R: -80.4564, d: 0.9, sd: 12.6, medium: 17 },
    { label: "29", R: 80.4564, sd: 12.5 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 17.5503, label: "17.6 mm" },
      { focalLengthMm: 26.0649, label: "26.1 mm" },
      { focalLengthMm: 38.701, label: "38.7 mm" },
    ],
    step: 0.002,
  },

  focus: {
    closeFocusM: 0.28,
    description:
      "Internal focusing by G6 (L15). The patent publishes only infinity-focus zoom spacings; close-focus gaps are not reconstructed here.",
  },

  gaps: {
    "7": {
      label: "D12 / d7",
      values: [
        [24.2001, 24.2001],
        [10.3101, 10.3101],
        [1.3704, 1.3704],
      ],
    },
    "10": {
      label: "D23 / d10",
      values: [
        [1.0967, 1.0967],
        [4.7167, 4.7167],
        [1.0966, 1.0966],
      ],
    },
    "13": {
      label: "D34 / d13",
      values: [
        [1.76, 1.76],
        [13.895, 13.895],
        [29.4811, 29.4811],
      ],
    },
    "17": {
      label: "d17",
      values: [
        [11.0343, 11.0343],
        [7.0293, 7.0293],
        [1.6434, 1.6434],
      ],
    },
    "24A": {
      label: "d24",
      values: [
        [3.5756, 3.5756],
        [2.6096, 2.6096],
        [1.6, 1.6],
      ],
    },
    "26": {
      label: "d26",
      values: [
        [6.5786, 6.5786],
        [7.5446, 7.5446],
        [8.5541, 8.5541],
      ],
    },
    "29": {
      label: "BF",
      values: [
        [16.6727, 16.6727],
        [18.8127, 18.8127],
        [21.1723, 21.1723],
      ],
    },
  },

  aperture: {
    nominalFNumber: 1.86,
    fStops: [1.86, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
    blades: 11,
    bladeRoundedness: 1,
  },

  groups: [
    { text: "G1 (-)", fromSurface: "1A", toSurface: "7" },
    { text: "G2 (+)", fromSurface: "8", toSurface: "10" },
    { text: "G3 (+)", fromSurface: "11", toSurface: "13" },
    { text: "G4 (-)", fromSurface: "15", toSurface: "17" },
    { text: "G5 (+)", fromSurface: "18", toSurface: "24A" },
    { text: "G6 (-) IF", fromSurface: "25", toSurface: "26" },
    { text: "G7 (+)", fromSurface: "27A", toSurface: "29" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "11", toSurface: "13" },
    { text: "D4", fromSurface: "15", toSurface: "17" },
    { text: "D5", fromSurface: "18", toSurface: "20" },
    { text: "D6", fromSurface: "27A", toSurface: "29" },
  ],

  layout: { scFill: 0.72, yScFill: 0.78, maxAspectRatio: 1.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
