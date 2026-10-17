import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON AI ZOOM-NIKKOR 35-105mm f/3.5-4.5 S     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 4,699,475, Seventh Embodiment / Table 7.               ║
 * ║  Source-supported match for the 35–105mm production zoom.          ║
 * ║  16 elements / 12 groups, all spherical surfaces.                  ║
 * ║  Stop: Table 7 “0.8 ahead of L9”; split from patent D14.   ║
 * ║  Zoom variable gaps: D6, D14-STO, D20, BF at infinity only.     ║
 * ║  Focus: production front-group focus; patent close-focus spacings   ║
 * ║  are not published, so close focus is metadata only in this file.   ║
 * ║  SDs: estimated from paraxial stop-edge rays and constrained by     ║
 * ║  edge thickness, element SD ratio <=1.25, and cross-gap clearance.  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * Source image-plane contradiction: Table 7 at wide infinity gives
 * EFL 37.391953 / BFL 53.302330 mm, not stated F 36.2 / Bf 52.36 mm.
 * Every R/d/nd/vd entry matches, including the 0.8 mm stop split.
 * No plates or aspheres are listed. Preserve the published Bf and
 * +0.942330 mm residual; do not tune the table to focus (see audit).
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-ai-zoom-nikkor-35-105mm-f3-5-4-5s",
  maker: "Nikon",
  name: "NIKON AI ZOOM-NIKKOR 35-105mm f/3.5-4.5 S",
  subtitle: "US 4,699,475 — Seventh Embodiment / Table 7",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["16 elements / 12 groups", "35–105 mm", "f/3.5–4.5", "52 mm filter", "all spherical"],
    elementCount: 16,
    groupCount: 12,
    focalLengthMm: { marketing: [35, 105], design: [37.39, 106.58] },
  },

  source: {
    patentNumber: "US 4,699,475",
    patentYear: 1987,
    authors: ["Tomowaki Takahashi", "Yasuhiro Aono"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.805,
      vd: 25.3,
      focalLengthMm: -118.3,
      glass: "S-TIH6 (OHARA; 805/254 dense flint)",
      role: "Front negative meniscus controlling entrance-pupil height and Petzval curvature.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.603,
      vd: 60.6,
      focalLengthMm: 73.3,
      glass: "S-BSM14 (OHARA; 603/607 barium crown)",
      role: "Main positive collector element in G1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.603,
      vd: 60.6,
      focalLengthMm: 103.5,
      glass: "S-BSM14 (OHARA; 603/607 barium crown)",
      role: "Weak positive meniscus completing the front focusing group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.796,
      vd: 45.5,
      focalLengthMm: -29.7,
      glass: "J-LASF017 class (795/454; patent rounded 796/455)",
      role: "Strong negative first element of the variator group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.805,
      vd: 25.3,
      focalLengthMm: 28.1,
      glass: "S-TIH6 (OHARA; 805/254 dense flint)",
      role: "Positive half of near-afocal G2 cemented chromatic corrector.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.796,
      vd: 45.5,
      focalLengthMm: -28.9,
      glass: "J-LASF017 class (795/454; patent rounded 796/455)",
      role: "Negative half of near-afocal G2 cemented chromatic corrector.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: -13.3,
      glass: "S-LAL8 (OHARA; 713/539 lanthanum crown)",
      role: "Dominant negative power carrier in the second G2 cemented doublet.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.796,
      vd: 40.9,
      focalLengthMm: 21.2,
      glass: "NBFD2 (HOYA catalog equivalent; production supplier unspecified; patent 796409)",
      role: "Positive achromatizing partner in the second G2 cemented doublet.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: 29.2,
      glass: "S-LAL8 (OHARA; 713/539 lanthanum crown)",
      role: "First positive relay element immediately behind the aperture stop.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.805,
      vd: 25.3,
      focalLengthMm: -61.5,
      glass: "S-TIH6 (OHARA; 805/254 dense flint)",
      role: "Dense-flint negative meniscus balancing L9 chromatically and in Petzval curvature.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.568,
      vd: 56.0,
      focalLengthMm: 117.9,
      glass: "N-BAK4 / S-BAL14 class (569/560 barium crown; patent rounded 568/560)",
      role: "Weak G31 positive corrector for astigmatism and coma balance.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.563,
      vd: 60.8,
      focalLengthMm: 95.9,
      glass: "BACD11 / N-SK11 / S-BAL41 class (564/608 barium crown)",
      role: "Positive half of the front G32 cemented meniscus pair.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.796,
      vd: 45.5,
      focalLengthMm: -66.4,
      glass: "J-LASF017 class (795/454; patent rounded 796/455)",
      role: "Negative half of the front G32 cemented meniscus pair.",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.518,
      vd: 60.3,
      focalLengthMm: 47.0,
      glass: "BALK3 (SUMITA catalog equivalent for patent coordinate; production supplier unspecified)",
      role: "Main positive singlet in the rear relay group.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Positive Meniscus",
      nd: 1.563,
      vd: 60.8,
      focalLengthMm: 34.2,
      glass: "BACD11 / N-SK11 / S-BAL41 class (564/608 barium crown)",
      role: "Positive half of the rear G32 cemented chromatic corrector.",
      cemented: "D4",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.796,
      vd: 40.9,
      focalLengthMm: -32.7,
      glass: "NBFD2 (HOYA catalog equivalent; production supplier unspecified; patent 796409)",
      role: "Negative half of the rear G32 cemented chromatic corrector.",
      cemented: "D4",
    },
  ],

  surfaces: [
    { label: "1", R: 150.69, d: 1.3, sd: 22.3, medium: 1 },
    { label: "2", R: 58.13, d: 0.4, sd: 17.85 },
    { label: "3", R: 66.23, d: 6.2, sd: 17.85, medium: 2 },
    { label: "4", R: -128.09, d: 0.1, sd: 17.85 },
    { label: "5", R: 33.14, d: 3.9, sd: 17.85, medium: 3 },
    { label: "6", R: 67.54, sd: 17.85 },
    { label: "7", R: 62.79, d: 1, sd: 13.0, medium: 4 },
    { label: "8", R: 17.07, d: 3, sd: 12.2 },
    { label: "9", R: -213.87, d: 1, sd: 7.1, medium: 5 },
    { label: "10", R: -20.49, d: 1, sd: 5.7, medium: 6 },
    { label: "11", R: -194.15, d: 2.7, sd: 6.9 },
    { label: "12", R: -21.48, d: 1, sd: 10.4, medium: 7 },
    { label: "13", R: 17.23, d: 3.5, sd: 9.4, medium: 8 },
    { label: "14", R: -696.58, sd: 9.4 },
    { label: "STO", R: "flat", d: 0.8 },
    { label: "15", R: 122.05, d: 4, sd: 9, medium: 9 },
    { label: "16", R: -24.8, d: 0.4, sd: 9.25 },
    { label: "17", R: -21.54, d: 1, sd: 9.25, medium: 10 },
    { label: "18", R: -38.91, d: 0.1, sd: 9.45 },
    { label: "19", R: 35.07, d: 2, sd: 9.55, medium: 11 },
    { label: "20", R: 72.08, sd: 9.55 },
    { label: "21", R: 21.96, d: 4, sd: 12.8, medium: 12 },
    { label: "22", R: 34.58, d: 1.5, sd: 10.3, medium: 13 },
    { label: "23", R: 20.5, d: 2, sd: 9 },
    { label: "24", R: 104.25, d: 4, sd: 9, medium: 14 },
    { label: "25", R: -31.38, d: 0.1, sd: 9 },
    { label: "26", R: -95.95, d: 5.5, sd: 12.3, medium: 15 },
    { label: "27", R: -16.37, d: 1.4, sd: 12.3, medium: 16 },
    { label: "28", R: -45.88, sd: 14.5 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 36.2, nominalFNumber: 3.5, label: "Wide" },
      { focalLengthMm: 60, nominalFNumber: 4.0, label: "Mid" },
      { focalLengthMm: 103, nominalFNumber: 4.5, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 1.4,
    description:
      "Production lens focuses by moving G1; US 4,699,475 Table 7 publishes infinity zoom spacings only, so close-focus optical spacing is not modeled.",
  },

  gaps: {
    "6": {
      label: "D6",
      values: [
        [0.98, 0.98],
        [10.62, 10.62],
        [19.77, 19.77],
      ],
    },
    "14": {
      label: "D14-STO",
      values: [
        [11.72, 11.72],
        [5.97, 5.97],
        [0.69, 0.69],
      ],
    },
    "20": {
      label: "D20",
      values: [
        [10.84, 10.84],
        [6.96, 6.96],
        [3.08, 3.08],
      ],
    },
    "28": {
      label: "BF",
      values: [
        [52.36, 52.36],
        [65.3, 65.3],
        [78.24, 78.24],
      ],
    },
  },

  aperture: { fStops: [3.5, 4.0, 4.5, 5.6, 8, 11, 16, 22] },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "7", toSurface: "14" },
    { text: "G31", fromSurface: "15", toSurface: "20" },
    { text: "G32", fromSurface: "21", toSurface: "28" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "21", toSurface: "23" },
    { text: "D4", fromSurface: "26", toSurface: "28" },
  ],

  layout: { scFill: 0.68, yScFill: 0.62 },
} satisfies LensDataV2Input;

export default LENS_DATA;
