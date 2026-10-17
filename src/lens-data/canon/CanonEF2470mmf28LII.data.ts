import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — Canon EF 24-70mm f/2.8L II USM                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 8,736,971 B2, Numerical Example 3 (Canon/Hatada). ║
 * ║  Four-unit positive-negative-positive-positive standard zoom.       ║
 * ║  18 elements / 13 air-spaced groups, 4 aspherical surfaces.         ║
 * ║  Focus: second lens unit moves as an inner-focus variator.          ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D5, D15, D24, BFD/D33.                         ║
 * ║  Focus variable gaps: D5 and D15 only. Close-focus values are       ║
 * ║  paraxially inferred from Canon's 0.38 m MFD by moving Unit 2 as    ║
 * ║  specified in the patent. D24 and D33 are zoom-only in this model.  ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING: none. Patent focal range is 24.70-67.88 mm and    ║
 * ║  is preserved directly rather than scaled to the marketed 24-70 mm. ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS: the patent does not publish clear          ║
 * ║  apertures. SDs below are conservative renderer estimates derived   ║
 * ║  from marginal/chief-ray envelopes, the 82 mm filter limit, edge     ║
 * ║  thickness, element SD-ratio, and cross-gap sag constraints.         ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes only the optical prescription:       ║
 * ║    ✓ Glass elements and refracting surfaces                         ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                     ║
 * ║    ✗ No sensor cover glass, filters, diaphragm blades, or mechanics ║
 * ╚══════════════════════════════════════════════════════════════════════╝
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
      "1 Super UD + 2 UD-class ED elements",
      "Inner focus: second lens unit",
    ],
    elementCount: 18,
    groupCount: 13,
    focalLengthMm: { marketing: [24, 70], design: [24.7, 67.88] },
    fNumber: { marketing: 2.8, design: 2.91 },
  },

  source: {
    patentNumber: "US 8,736,971 B2",
    patentYear: 2014,
    authors: ["Takahiro Hatada"],
    assignees: ["Canon Inc."],
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
      glass: "S-TIH53 (OHARA; dense flint)",
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
      glass: "S-LAH66 (OHARA; high-index lanthanum flint, code 773/496)",
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
      glass: "S-LAH66 (OHARA; high-index lanthanum flint, code 773/496)",
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
      glass: "S-LAH58 (OHARA; equivalent to HOYA TAFD30, dense lanthanum flint)",
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
      glass: "S-FPM2 (OHARA; fluorophosphate crown / HOYA FCD515 class)",
      apd: "patent",
      apdNote: "Patent Conditional Expression (3): θgF deviation = +0.014 for the negative component.",
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
      glass: "S-LAH58 (OHARA; equivalent to HOYA TAFD30, dense lanthanum flint)",
      apd: "patent",
      apdNote: "Patent Conditional Expression (4): θgF deviation = -0.009 for the positive component.",
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
      glass: "S-FTM16 (OHARA; titanium flint, code 593353)",
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
      glass: "S-LAL18 (OHARA; lanthanum crown)",
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
      glass: "S-TIH53 (OHARA; dense flint)",
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
      glass: "S-LAH58 (OHARA; dense lanthanum flint)",
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
      glass: "S-FPL51 (OHARA; UD-class ED fluorophosphate)",
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
      glass: "S-BAL42 (OHARA; barium crown)",
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
      glass: "N-KZFS8 (Schott; S-NBH8-equivalent KZFS-family glass, code 720347)",
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
      glass: "S-FPL53 (OHARA; Super UD-class ED fluorophosphate)",
      role: "Super-UD positive element in Unit 4; major low-dispersion relay and lateral color correction component.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 58.1,
      glass: "S-FPL51 (OHARA; UD-class ED fluorophosphate)",
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
      glass: "M-TAFD305-class moldable glass (HOYA; patent 850/402, catalog family 851/401)",
      role: "Doubly aspherical negative relay corrector; probably a moldable high-index lanthanum-flint class glass rather than polished S-glass.",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -63.3,
      glass: "S-LAH60 (OHARA; dense lanthanum flint)",
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
      glass: "S-BSL7 (OHARA; N-BK7 equivalent borosilicate crown)",
      role: "Final positive crown member of the rear doublet; completes rear chromatic correction and final field flattening.",
      cemented: "D5",
    },
  ],

  surfaces: [
    { label: "1", R: 203.844, d: 2.1, sd: 41.0, medium: 1 },
    { label: "2", R: 72.022, d: 7.41, sd: 34.2, medium: 2 },
    { label: "3", R: 330.893, d: 0.15, sd: 34.0 },
    { label: "4", R: 56.152, d: 6.73, sd: 31.3, medium: 3 },
    { label: "5", R: 146.214, sd: 31.0 },

    {
      label: "6A",
      R: 108.833,
      d: 1.6,
      sd: 14.5,
      medium: 4,
      asphere: { K: 0, A4: 7.24687e-6, A6: -9.33789e-9, A8: 2.38226e-11, A10: -5.23831e-14, A12: 8.03521e-17 },
    },
    { label: "7", R: 16.535, d: 7.96, sd: 12.2 },
    { label: "8", R: -46.335, d: 1.15, sd: 12.2, medium: 5 },
    { label: "9", R: 21.502, d: 4.18, sd: 13.4, medium: 6 },
    { label: "10", R: 66.987, d: 1.43, sd: 13.4 },
    { label: "11", R: 126.217, d: 3.1, sd: 13.2, medium: 7 },
    { label: "12", R: -49.936, d: 1.62, sd: 10.8 },
    { label: "13", R: -23.459, d: 1.15, sd: 10.8, medium: 8 },
    { label: "14", R: 432.841, d: 2.76, sd: 13.5, medium: 9 },
    { label: "15", R: -57.478, sd: 14.5 },

    { label: "16", R: "flat", d: 1.9, sd: 13.0 },
    { label: "STO", R: "flat", d: 0.0 },
    { label: "18", R: 27.563, d: 1.45, sd: 13.1, medium: 10 },
    { label: "19", R: 21.272, d: 11.03, sd: 16.3, medium: 11 },
    { label: "20", R: -66.483, d: 0.2, sd: 16.3 },
    { label: "21", R: 43.019, d: 2.7, sd: 15.8, medium: 12 },
    {
      label: "22A",
      R: 63.198,
      d: 4.67,
      sd: 14.1,
      asphere: { K: 0, A4: 5.45182e-6, A6: 4.70739e-9, A8: 2.0643e-13, A10: 7.1617e-14, A12: -2.30646e-17 },
    },
    { label: "23", R: -45.003, d: 1.4, sd: 14.1, medium: 13 },
    { label: "24", R: -151.84, sd: 16.8 },

    { label: "25", R: 31.049, d: 6.94, sd: 17.7, medium: 14 },
    { label: "26", R: -216.866, d: 0.2, sd: 17.7 },
    { label: "27", R: 47.221, d: 5.86, sd: 17.0, medium: 15 },
    { label: "28", R: -71.326, d: 1.9, sd: 17.0 },
    {
      label: "29A",
      R: -208.068,
      d: 2.13,
      sd: 17.5,
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
    { label: "32", R: 57.864, d: 5.29, sd: 16.5, medium: 18 },
    { label: "33", R: -61.669, sd: 16.5 },
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
