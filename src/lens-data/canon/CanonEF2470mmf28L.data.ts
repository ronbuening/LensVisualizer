import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — Canon EF 24-70mm f/2.8L USM                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2014-41222 A, Numerical Example 1 (Canon).        ║
 * ║  Representative 24.90-68.14mm f/2.92 full-frame standard zoom.     ║
 * ║  16 elements / 13 air-spaced groups; 6 zoom-moving optical groups. ║
 * ║  Two glass aspherical surfaces: 1A and 31A.                        ║
 * ║  One ED fluorophosphate element plus two patent-defined            ║
 * ║  high-index anomalous-dispersion short-flint elements.             ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D6, D13, D20(STO), D25, D29.                  ║
 * ║  Focus: patent states the negative fifth group moves imageward.    ║
 * ║  Because the patent publishes only infinity-focus zoom spacings,   ║
 * ║  close-focus D25/D29 values are paraxially solved to the official  ║
 * ║  0.38 m manufacturer MFD while conserving D25 + D29 at each zoom.  ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING: none. The prescription is stored in patent mm.   ║
 * ║  The design endpoints are 24.90 / 35.13 / 68.14 mm, not a uniform  ║
 * ║  scaling of the marketed 24-70mm range.                            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS: patent omits clear apertures. Values were ║
 * ║  estimated from paraxial marginal/chief ray envelopes, then reduced║
 * ║  where required by signed cross-gap sag clearance, edge thickness, ║
 * ║  and element front/rear semi-diameter ratio checks. The front group║
 * ║  remains bounded by the production lens's 77 mm filter class.      ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces from front element to image plane ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                   ║
 * ║    ✗ Sensor cover glass, filters, barrel mechanics, and mount     ║
 * ║      hardware are not included.                                    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-24-70mm-f28l-usm",
  maker: "Canon",
  name: "CANON EF 24-70mm f/2.8 L USM",
  subtitle: "JP 2014-41222 A — Numerical Example 1",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "16 elements / 13 groups",
      "24.90-68.14 mm patent design",
      "f/2.8 nominal; F2.92 design",
      "2 aspherical surfaces",
      "1 ED + 2 anomalous-dispersion glass elements",
    ],
    elementCount: 16,
    groupCount: 13,
    focalLengthMm: { marketing: [24, 70], design: [24.9, 68.14] },
    fNumber: { marketing: 2.8, design: 2.92 },
  },

  source: { patentNumber: "JP 2014-041222 A", patentYear: 2014, authors: ["Hiroshi Endo"], assignees: ["Canon Inc."] },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Front negative meniscus",
      type: "Neg. Meniscus (front asph)",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -59.9,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Object-side aspherical negative meniscus of the retrofocus front group.",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
    },
    {
      id: 2,
      name: "L12",
      label: "Front biconcave negative",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -57.5,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Principal diverging singlet of the first zoom group.",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
    },
    {
      id: 3,
      name: "L13",
      label: "Front anomalous positive",
      type: "Positive Meniscus",
      nd: 1.84265,
      vd: 25.9,
      focalLengthMm: 115.4,
      glass: "Unmatched (patent-defined high-index anomalous short flint)",
      apd: "patent",
      apdNote: "theta_gF = 0.60572; dPgF ≈ +0.00548 from patent line indices.",
      role: "Weak positive chromatic-correction element in the negative first group.",
      dPgF: 0.00548,
      nC: 1.83328,
      nF: 1.86582,
      ng: 1.88553,
    },
    {
      id: 4,
      name: "L21",
      label: "Variator doublet flint",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -67.0,
      glass: "S-TIH6 (OHARA) / SF6 class",
      apd: false,
      role: "Negative dense-flint component of the front cemented doublet in the positive variator.",
      cemented: "D1",
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
    },
    {
      id: 5,
      name: "L22",
      label: "Variator doublet lanthanum",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 48.2,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Positive high-index component cemented to L21 for chromatic balancing of the variator.",
      cemented: "D1",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
    },
    {
      id: 6,
      name: "L23",
      label: "Variator biconvex positive",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: 100.3,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "High-index positive singlet within the second zoom group.",
      nC: 1.82898,
      nF: 1.84852,
      ng: 1.85955,
    },
    {
      id: 7,
      name: "L24",
      label: "Variator positive meniscus",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 65.7,
      glass: "S-LAL14 (OHARA) / N-LAK14 class",
      apd: false,
      role: "Rear positive singlet completing the positive second zoom group.",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
    },
    {
      id: 8,
      name: "L31",
      label: "Stop-group negative singlet",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: -36.8,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "Leading negative singlet of the stop group.",
      nC: 1.87656,
      nF: 1.89822,
      ng: 1.9105,
    },
    {
      id: 9,
      name: "L32",
      label: "Stop-group doublet crown",
      type: "Biconcave Negative",
      nd: 1.72,
      vd: 50.2,
      focalLengthMm: -36.4,
      glass: "S-LAL10 (OHARA)",
      apd: false,
      role: "Negative lanthanum component of the stop-group cemented doublet.",
      cemented: "D2",
      nC: 1.71567,
      nF: 1.73,
      ng: 1.73792,
    },
    {
      id: 10,
      name: "L33",
      label: "Stop-group doublet flint",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 33.1,
      glass: "S-TIH6 (OHARA) / SF6 class",
      apd: false,
      role: "Dense-flint positive partner in the stop-group cemented doublet.",
      cemented: "D2",
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
    },
    {
      id: 11,
      name: "L41",
      label: "Rear anomalous negative",
      type: "Negative Meniscus",
      nd: 1.84265,
      vd: 25.9,
      focalLengthMm: -39.4,
      glass: "Unmatched (patent-defined high-index anomalous short flint)",
      apd: "patent",
      apdNote: "theta_gF = 0.60572; dPgF ≈ +0.00548 from patent line indices.",
      role: "Negative anomalous-dispersion component at the front of the positive rear group.",
      cemented: "D3",
      dPgF: 0.00548,
      nC: 1.83328,
      nF: 1.86582,
      ng: 1.88553,
    },
    {
      id: 12,
      name: "L42",
      label: "Rear ED positive",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 35.9,
      glass: "S-FPL51 (OHARA) / FCD1 class",
      apd: "patent",
      apdNote: "theta_gF = 0.53859; dPgF ≈ +0.03187 from patent line indices.",
      role: "Fluorophosphate ED crown paired with L41 for secondary-spectrum correction.",
      cemented: "D3",
      dPgF: 0.03187,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 13,
      name: "L43",
      label: "Rear biconvex positive",
      type: "Biconvex Positive",
      nd: 1.52542,
      vd: 64.5,
      focalLengthMm: 44.6,
      glass: "Unmatched (light crown, patent indices)",
      apd: false,
      role: "Main positive-power singlet of the fourth zoom group.",
      nC: 1.52291,
      nF: 1.53105,
      ng: 1.53541,
    },
    {
      id: 14,
      name: "L51",
      label: "Focus-group positive",
      type: "Plano-Convex Positive",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 56.6,
      glass: "S-TIH53 (OHARA) / SF57 class",
      apd: false,
      role: "Positive dense-flint member of the internally moving focus group.",
      nC: 1.83649,
      nF: 1.87209,
      ng: 1.89413,
    },
    {
      id: 15,
      name: "L52",
      label: "Focus-group negative",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -21.2,
      glass: "S-LAH60 (OHARA)",
      apd: false,
      role: "Strong negative member that makes the fifth zoom group net negative.",
      nC: 1.82738,
      nF: 1.84982,
      ng: 1.86278,
    },
    {
      id: 16,
      name: "L6",
      label: "Fixed rear field lens",
      type: "Biconvex Positive (rear asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: 64.2,
      glass: "S-BAL42 (OHARA) / D-ZK2 class",
      apd: false,
      role: "Fixed rear positive field element with an aspherical image-side face.",
      nC: 1.58013,
      nF: 1.58995,
      ng: 1.59528,
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 132.285,
      d: 2.4,
      sd: 30.0,
      medium: 1,
      asphere: { K: 0, A4: 1.19505e-6, A6: 4.93803e-10, A8: -1.21623e-12, A10: 1.13356e-15, A12: -3.85068e-19 },
    },
    { label: "2", R: 34.01, d: 12.02, sd: 27.0 },
    { label: "3", R: -164.261, d: 2.3, sd: 23.0, medium: 2 },
    { label: "4", R: 61.319, d: 0.17, sd: 22.5 },
    { label: "5", R: 60.454, d: 4.97, sd: 22.5, medium: 3 },
    { label: "6", R: 153.708, sd: 22.0 },
    { label: "7", R: 2038.158, d: 1.8, sd: 20.5, medium: 4 },
    { label: "8", R: 52.562, d: 6.31, sd: 20.1, medium: 5 },
    { label: "9", R: -120.819, d: 0.15, sd: 20.1 },
    { label: "10", R: 94.247, d: 3.75, sd: 20.8, medium: 6 },
    { label: "11", R: -735.401, d: 0.15, sd: 20.8 },
    { label: "12", R: 44.815, d: 5.26, sd: 20.0, medium: 7 },
    { label: "13", R: 2017.457, sd: 19.8 },
    { label: "SSP", R: "flat", d: 2.2, sd: 12.4 },
    { label: "15", R: -118.448, d: 1.25, sd: 12.0, medium: 8 },
    { label: "16", R: 44.969, d: 2.45, sd: 11.8 },
    { label: "17", R: -123.35, d: 1.35, sd: 11.8, medium: 9 },
    { label: "18", R: 33.452, d: 4.84, sd: 12.2, medium: 10 },
    { label: "19", R: -122.441, d: 0.7, sd: 12.0 },
    { label: "STO", R: "flat" },
    { label: "21", R: 100.783, d: 1.3, sd: 13.8, medium: 11 },
    { label: "22", R: 24.825, d: 6.7, sd: 13.8, medium: 12 },
    { label: "23", R: -57.671, d: 0.1, sd: 13.6 },
    { label: "24", R: 30.541, d: 5.21, sd: 14.0, medium: 13 },
    { label: "25", R: -95.184, sd: 14.0 },
    { label: "26", R: 3554.746, d: 2.9, sd: 14.0, medium: 14 },
    { label: "27", R: -48.578, d: 0.11, sd: 14.0 },
    { label: "28", R: -54.737, d: 1.99, sd: 14.0, medium: 15 },
    { label: "29", R: 26.616, sd: 14.0 },
    { label: "30", R: 51.549, d: 7.6, sd: 15.0, medium: 16 },
    {
      label: "31A",
      R: -129.121,
      d: 38.47,
      sd: 15.2,
      asphere: { K: 0, A4: 2.65122e-7, A6: -9.50226e-9, A8: 6.16123e-11, A10: -1.95942e-13, A12: 2.35213e-16 },
    },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 24.9, label: "Wide" },
      { focalLengthMm: 35.13 },
      { focalLengthMm: 68.14, label: "Tele" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.38,
    description:
      "Internal focus by imageward translation of the fifth group; close-focus spacings are paraxially solved because JP 2014-41222 A publishes infinity-focus spacings only.",
  },

  gaps: {
    "6": {
      label: "D6",
      values: [
        [55.36, 55.36],
        [31.61, 31.61],
        [3.78, 3.78],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [2.9, 2.9],
        [6.51, 6.51],
        [20.41, 20.41],
      ],
    },
    STO: {
      label: "D20",
      values: [
        [19.24, 19.24],
        [15.64, 15.64],
        [1.73, 1.73],
      ],
    },
    "25": {
      label: "D25 / focus +",
      values: [
        [1.19, 2.3838035791],
        [3.58, 5.6647305554],
        [10.91, 18.3469018668],
      ],
    },
    "29": {
      label: "D29 / focus −",
      values: [
        [3.99, 2.7961964209],
        [9.73, 7.6452694446],
        [13.28, 5.8430981332],
      ],
    },
  },

  aperture: { nominalFNumber: 2.92, fStops: [2.92, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 8 },

  groups: [
    { text: "G1 −", fromSurface: "1A", toSurface: "6" },
    { text: "G2 +", fromSurface: "7", toSurface: "13" },
    { text: "G3 − / STO", fromSurface: "SSP", toSurface: "STO" },
    { text: "G4 +", fromSurface: "21", toSurface: "25" },
    { text: "G5 − / focus", fromSurface: "26", toSurface: "29" },
    { text: "G6 + fixed", fromSurface: "30", toSurface: "31A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "17", toSurface: "19" },
    { text: "D3", fromSurface: "21", toSurface: "23" },
  ],

  layout: { scFill: 0.7, yScFill: 0.65 },

  rays: { offAxisFieldFrac: 0.45 },
} satisfies LensDataV2Input;

export default LENS_DATA;
