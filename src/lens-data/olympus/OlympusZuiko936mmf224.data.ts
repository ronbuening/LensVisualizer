import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — OLYMPUS ZUIKO 9-36mm f/2-2.4                         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2003/0072086 A1, Example 1.                       ║
 * ║  Olympus Optical four-group positive-negative-positive-positive     ║
 * ║  fast zoom for a fixed-lens digital camera with a beam splitter.    ║
 * ║  Powered prescription: 14 elements / 11 groups, two aspheres.       ║
 * ║  Focus: patent states G4 focusing; close-focus spacings are not     ║
 * ║  tabulated, so this file models infinity-focus zoom positions only. ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: d5, d12, d13/STO, d19, d26.                   ║
 * ║  G1 and the stop are fixed; G2 moves imageward, G3 and G4 move      ║
 * ║  objectward during wide-to-tele zooming.                           ║
 * ║                                                                    ║
 * ║  NOTE ON FLAT REAR OPTICS:                                         ║
 * ║    The patent rear train after L14 is d26 air, a 24.0 mm prism,    ║
 * ║    1.0 mm air, a 1.57 mm filter plate, 1.0 mm air, a 0.8 mm sensor ║
 * ║    cover, then L = 1.290 mm to the image plane. The 24.0 mm prism  ║
 * ║    stays in `surfaces` as a rendered glass block. The filter plate ║
 * ║    (nd 1.54771, νd 62.84) and sensor cover (nd 1.52300, νd 55.00)  ║
 * ║    are modeled in `rearPlates` (traced, not drawn) with the        ║
 * ║    printed 1.000 mm and 1.290 mm air after them. Surface 28        ║
 * ║    stores 0.9951 mm (printed d28 = 1.000) so the previous image    ║
 * ║    plane, which re-closes paraxial focus with the rounded patent   ║
 * ║    table, is kept unchanged.                                       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish clear semi-diameters. SDs below were ║
 * ║    inferred from paraxial marginal/chief-ray envelopes, the 62 mm   ║
 * ║    production filter thread, and renderer constraints: edge         ║
 * ║    thickness >= approximately 0.3 mm, sd/|R| < 0.90 for spherical   ║
 * ║    surfaces, and cross-gap sag intrusion <= 90% of each air gap.    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "olympus-zuiko-9-36-f2-2p4",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO 9-36mm f/2-2.4 (Olympus E-10 / E-20)",
  subtitle: "US 2003/0072086 A1 Example 1 — Olympus Optical / Uzawa & Suzuki",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "2-3-inch-type",
    specs: [
      "14 powered elements / 11 powered groups",
      "f = 9.200-35.500 mm patent design",
      "F/2.007-2.328 patent design",
      "2ω = 68.0°-18.8°",
      "2 aspherical surfaces",
      "24 mm beam-splitting prism modeled",
    ],
    elementCount: 14,
    groupCount: 11,
    focalLengthMm: { marketing: [9, 36], design: [9.1998, 35.4995] },
    fNumber: { marketing: 2.0, design: 2.007 },
  },

  source: {
    patentNumber: "US 2003/0072086 A1",
    patentYear: 2003,
    authors: ["Tsutomu Uzawa", "Masahiro Suzuki"],
    assignees: ["Olympus Optical Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -129.1,
      glass: "S-TIH53 (OHARA)",
      role: "Dense-flint negative front element of the G1 achromat.",
      cemented: "D1",
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.33,
      focalLengthMm: 95.8,
      glass: "S-PHM52 (OHARA)",
      role: "Positive crown partner in the front achromat.",
      cemented: "D1",
      nC: 1.61504,
      nF: 1.62479,
      ng: 1.6301,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 85.5,
      glass: "S-LAH66 (OHARA)",
      role: "Principal positive power carrier of G1.",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -20.8,
      glass: "S-LAH66 (OHARA)",
      role: "Strong first negative element of the variator group.",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -101.9,
      glass: "S-TIH53 (OHARA)",
      apd: "patent",
      apdNote: "θgF ≈ 0.62; this is the G2 negative lens used for condition (8).",
      role: "Weak high-dispersion negative lens used for g-line lateral-color control.",
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.23,
      focalLengthMm: -27.4,
      glass: "S-FSL5 (OHARA)",
      role: "Low-dispersion negative member of the near-afocal G2 cemented doublet.",
      cemented: "D2",
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.42,
      focalLengthMm: 26.9,
      glass: "S-TIH6 (OHARA)",
      role: "Dense-flint positive partner that nearly cancels L6 power while correcting color.",
      cemented: "D2",
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 25.3,
      glass: "S-TIH53 (OHARA)",
      apd: "patent",
      apdNote: "θgF ≈ 0.62; this first G3 positive lens is used for condition (9).",
      role: "Strong positive relay element immediately behind the fixed stop.",
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive (front asphere)",
      nd: 1.6935,
      vd: 53.22,
      focalLengthMm: 27.1,
      glass: "S-LAL13 (OHARA) / J-LAK13 equivalent",
      role: "Aspherical positive relay element in G3.",
      nC: 1.68955,
      nF: 1.70258,
      ng: 1.70972,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.42,
      focalLengthMm: -16.6,
      glass: "S-TIH6 (OHARA)",
      role: "Strong negative lens at the image-side end of G3.",
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.42,
      focalLengthMm: -17.8,
      glass: "S-TIH6 (OHARA)",
      role: "Negative front element of G4; key condition (1)-(4) lens.",
      cemented: "D3",
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.33,
      focalLengthMm: 35.6,
      glass: "S-PHM52 (OHARA)",
      role: "Positive crown partner cemented to L11.",
      cemented: "D3",
      nC: 1.61504,
      nF: 1.62479,
      ng: 1.6301,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.33,
      focalLengthMm: 31.0,
      glass: "S-PHM52 (OHARA)",
      role: "Main positive power carrier in the rear group.",
      nC: 1.61504,
      nF: 1.62479,
      ng: 1.6301,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive (rear asphere)",
      nd: 1.6935,
      vd: 53.22,
      focalLengthMm: 49.7,
      glass: "S-LAL13 (OHARA) / J-LAK13 equivalent",
      role: "Final aspherical field-correction element before the path splitter.",
      nC: 1.68955,
      nF: 1.70258,
      ng: 1.70972,
    },
    {
      id: 15,
      name: "P1",
      label: "24 mm path-splitter prism",
      type: "Plane-Parallel Prism",
      nd: 1.51633,
      vd: 64.14,
      focalLengthMm: 0,
      glass: "Path-splitter prism glass (516/641, patent-listed)",
      role: "Flat beam-splitting prism included in the patent rear optical path; not counted in the 14 powered elements.",
    },
  ],

  surfaces: [
    { label: "1", R: 84.3229, d: 2.5, sd: 29, medium: 1 },
    { label: "2", R: 46.9479, d: 7.2222, sd: 27, medium: 2 },
    { label: "3", R: 213.1431, d: 0.15, sd: 27 },
    { label: "4", R: 43.5892, d: 5.7376, sd: 24.8, medium: 3 },
    { label: "5", R: 120.8546, sd: 24.8 },
    { label: "6", R: 65.425, d: 1.8, sd: 11.3, medium: 4 },
    { label: "7", R: 12.7426, d: 7.2504, sd: 11.3 },
    { label: "8", R: 518.2953, d: 1.5, sd: 10.2, medium: 5 },
    { label: "9", R: 73.8369, d: 2.2847, sd: 10.2 },
    { label: "10", R: -50.7599, d: 1.4, sd: 10.2, medium: 6 },
    { label: "11", R: 18.2832, d: 4.0189, sd: 10.5, medium: 7 },
    { label: "12", R: 106.5482, sd: 10.8 },
    { label: "STO", R: "flat" },
    { label: "14", R: 34.7436, d: 2.9677, sd: 9.4, medium: 8 },
    { label: "15", R: -53.559, d: 0.1, sd: 9.4 },
    {
      label: "16A",
      R: 30.9459,
      d: 3.0469,
      sd: 9.4,
      medium: 9,
      asphere: { K: 0, A4: -8.0364e-6, A6: 8.1241e-8, A8: -1.9286e-9, A10: 1.7517e-11 },
    },
    { label: "17", R: -46.126, d: 0.218, sd: 9.1 },
    { label: "18", R: -38.1348, d: 1, sd: 9.1, medium: 10 },
    { label: "19", R: 20.7424, sd: 9.1 },
    { label: "20", R: -13.5, d: 1.294, sd: 10.2, medium: 11 },
    { label: "21", R: -246.7759, d: 3.8309, sd: 10.2, medium: 12 },
    { label: "22", R: -20.3394, d: 0.1303, sd: 11.6 },
    { label: "23", R: 61.8595, d: 4.9657, sd: 12.4, medium: 13 },
    { label: "24", R: -26.9518, d: 0.6609, sd: 12.4 },
    { label: "25", R: 248.9494, d: 2.7894, sd: 12.4, medium: 14 },
    {
      label: "26A",
      R: -39.8402,
      sd: 12.4,
      asphere: { K: 0, A4: 1.4849e-5, A6: 1.6305e-8, A8: -8.0908e-11, A10: 1.6693e-13 },
    },
    { label: "27", R: "flat", d: 24, sd: 13, medium: 15 },
    // Prism rear face: gap to the filter plate (printed d28 = 1.000; 0.9951 keeps the re-closed image plane)
    { label: "28", R: "flat", d: 0.9951, sd: 13 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 9.2, nominalFNumber: 2.0, label: "9.2 mm" },
      { focalLengthMm: 18.2, nominalFNumber: 2.18, label: "18.2 mm" },
      { focalLengthMm: 35.5, nominalFNumber: 2.4, label: "35.5 mm" },
    ],
    step: 0.001,
  },

  focus: {
    closeFocusM: 0.2,
    description:
      "Rear-group focusing by G4 is specified in the patent, but numerical close-focus spacings are not published; zoom positions are modeled at infinity focus.",
  },

  gaps: {
    "5": {
      label: "D5 G1-G2",
      values: [
        [1, 1],
        [15.911, 15.911],
        [27.466, 27.466],
      ],
    },
    "12": {
      label: "D12 G2-Stop",
      values: [
        [31.555, 31.555],
        [16.623, 16.623],
        [5.088, 5.088],
      ],
    },
    STO: {
      label: "D13 Stop-G3",
      values: [
        [9.475, 9.475],
        [4.871, 4.871],
        [1.5, 1.5],
      ],
    },
    "19": {
      label: "D19 G3-G4",
      values: [
        [6.748, 6.748],
        [8.658, 8.658],
        [9.436, 9.436],
      ],
    },
    "26A": {
      label: "D26 G4-Prism",
      values: [
        [1.7, 1.7],
        [4.403, 4.403],
        [6.997, 6.997],
      ],
    },
  },

  aperture: { fStops: [2, 2.4, 2.8, 4, 5.6, 8, 11, 16], maxFNumber: 16 },

  /* ── Filter plate and sensor cover (patent surfaces 29–32): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 1.57,
      nd: 1.54771,
      vd: 62.84,
      gapAfterMm: 1.0,
      source: "US 2003/0072086 A1, Example 1 surfaces 29–30 (d29 filter plate, d30 air)",
    },
    {
      thicknessMm: 0.8,
      nd: 1.523,
      vd: 55.0,
      gapAfterMm: 1.29,
      source: "US 2003/0072086 A1, Example 1 surfaces 31–32 (d31 sensor cover, L = 1.290 to image)",
    },
  ],

  groups: [
    { text: "G1 +", fromSurface: "1", toSurface: "5" },
    { text: "G2 -", fromSurface: "6", toSurface: "12" },
    { text: "STOP", fromSurface: "STO", toSurface: "STO" },
    { text: "G3 +", fromSurface: "14", toSurface: "19" },
    { text: "G4 +", fromSurface: "20", toSurface: "26A" },
    { text: "PRISM", fromSurface: "27", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
  ],

  layout: { scFill: 0.68, yScFill: 0.82 },
} satisfies LensDataV2Input;

export default LENS_DATA;
