import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  CANON POWERSHOT G1 X MARK III 15-45mm f/2.8-5.6                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2018-106021 A, Numerical Example 1 (Canon).       ║
 * ║  Compact negative-lead APS-C fixed-camera zoom.                    ║
 * ║  9 physical optical elements / 8 air-separated element groups.      ║
 * ║  4 zoom groups; 7 aspherical surfaces on 4 elements.                ║
 * ║  Focus: negative inner focus element Fa moves imageward to close.   ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: d6, d7/STO, d13, d17, and d19 to cover glass.  ║
 * ║  The patent publishes infinity-focus zoom spacings only; close      ║
 * ║  focus spacings are therefore intentionally duplicated from the      ║
 * ║  infinity values.                                                   ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                               ║
 * ║    Patent surfaces 20 and 21 are the sensor cover glass/filter      ║
 * ║    (1.33 mm, nd 1.51633, νd 64.1, S-BSL7 class) with 0.50 mm air to ║
 * ║    the image. They are modeled in `rearPlates` (traced, not drawn). ║
 * ║    Surface 19A stores the patent d19: 7.93 / 6.39 / 3.33 mm; the    ║
 * ║    equivalent BF d19 + 1.33/1.51633 + 0.50 = 9.307 / 7.767 / 4.707. ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    The patent does not publish clear semi-diameters. Values below   ║
 * ║    are estimated from combined marginal/chief-ray clearance, then    ║
 * ║    constrained by edge thickness, sd/|R|, and cross-gap sag checks. ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-powershot-g1x-iii-15-45-f28-56",
  maker: "Canon",
  name: "CANON 15-45mm f/2.8-5.6 (Canon PowerShot G1 X Mark III)",
  subtitle: "JP 2018-106021 A Example 1 — Canon / Ito Daisuke",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "aps-c",
    specs: [
      "9 elements / 8 groups",
      "15-45mm f/2.8-5.6",
      "Patent f = 15.45-43.70mm",
      "2.83× zoom",
      "7 aspherical surfaces",
    ],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: { marketing: [15, 45], design: [15.45, 43.7] },
  },

  source: { patentNumber: "JP 2018-106021 A", patentYear: 2018, authors: ["Daisuke Ito"], assignees: ["Canon Inc."] },

  elements: [
    {
      id: 1,
      name: "N1",
      label: "N1 front negative",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.3,
      focalLengthMm: -20.8,
      glass: "S-LAH98 (OHARA)",
      role: "High-index front negative element in the negative lead group.",
    },
    {
      id: 2,
      name: "N2",
      label: "N2 aspherical negative",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58254,
      vd: 59.4,
      focalLengthMm: -95.0,
      glass: "583594 barium-crown class (S-BAL42 / M-BACD12 class; not exact)",
      role: "Smaller-diameter molded aspherical corrector in L1.",
    },
    {
      id: 3,
      name: "N3",
      label: "N3 positive corrector",
      type: "Positive Meniscus",
      nd: 1.95906,
      vd: 17.5,
      focalLengthMm: 43.9,
      glass: "S-NPH3 (OHARA)",
      role: "High-dispersion positive element completing the negative-negative-positive L1 group.",
    },
    {
      id: 4,
      name: "P1",
      label: "P1 main positive asphere",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: 18.6,
      glass: "MC-LAC130 / M-LAC130 class (HOYA)",
      role: "Main post-stop positive element; primary spherical and coma correction.",
    },
    {
      id: 5,
      name: "P2",
      label: "P2 cemented positive",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.1,
      focalLengthMm: 8.3,
      glass: "S-LAH99 (OHARA)",
      role: "Ultra-high-index positive member of the L2 cemented doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "P3",
      label: "P3 cemented negative",
      type: "Biconcave Negative",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: -6.1,
      glass: "S-NBH56 (OHARA)",
      role: "Negative high-index flint member of the L2 cemented doublet.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L3p",
      label: "L3 positive asphere",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.76802,
      vd: 49.2,
      focalLengthMm: 31.1,
      glass: "M-TAF101 (HOYA)",
      role: "Positive element of weak L3 group; rear asphere trims residual field errors.",
    },
    {
      id: 8,
      name: "Fa",
      label: "Fa negative focus lens",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      focalLengthMm: -44.7,
      glass: "NBFD15 (HOYA)",
      role: "Negative inner-focus element; moves imageward for close focus.",
    },
    {
      id: 9,
      name: "GRP",
      label: "GRP resin rear meniscus",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.5316,
      vd: 55.8,
      focalLengthMm: 50.3,
      glass: "Optical resin / polymer (patent GRP)",
      role: "Positive rear resin meniscus for telecentricity, reduced rear weight, and ghost suppression.",
    },
  ],

  surfaces: [
    { label: "1", R: 72.385, d: 0.85, sd: 13.0, medium: 1 },
    { label: "2", R: 15.467, d: 4.37, sd: 10.5 },
    {
      label: "3A",
      R: 69.59,
      d: 1.4,
      sd: 10.5,
      medium: 2,
      asphere: { K: 0, A4: -2.29993e-5, A6: -2.10057e-7, A8: 1.0597e-9 },
    },
    {
      label: "4A",
      R: 30.598,
      d: 0.15,
      sd: 11.6,
      asphere: { K: 0, A4: -3.26997e-5, A6: -2.89658e-7, A8: 1.75014e-9, A10: -2.31976e-12 },
    },
    { label: "5", R: 22.015, d: 2.13, sd: 11.8, medium: 3 },
    { label: "6", R: 43.965, sd: 11.8 },

    { label: "STO", R: "flat" },

    {
      label: "8A",
      R: 13.218,
      d: 2.67,
      sd: 6.7,
      medium: 4,
      asphere: { K: 0, A4: -6.50277e-5, A6: -5.56369e-7, A8: -4.17807e-9 },
    },
    { label: "9A", R: -451.693, d: 0.85, sd: 6.7, asphere: { K: 0, A4: 2.15406e-5, A6: -2.86214e-7 } },
    { label: "10", R: 19.036, d: 2.88, sd: 6.25, medium: 5 },
    { label: "11", R: -13.619, d: 0.6, sd: 6.25, medium: 6 },
    { label: "12", R: 8.657, d: 2.0, sd: 6.25 },

    { label: "13", R: "flat", sd: 5.25 },

    { label: "14", R: 432.415, d: 2.05, sd: 8.95, medium: 7 },
    { label: "15A", R: -25.201, d: 2.65, sd: 8.95, asphere: { K: 0, A4: 2.53751e-6, A6: -4.54443e-8, A8: -1.37807e-10 } },
    { label: "16", R: -24.719, d: 0.7, sd: 9.6, medium: 8 },
    { label: "17", R: -79.764, sd: 9.6 },
    { label: "18A", R: -71.0, d: 3.6, sd: 14.2, medium: 9, asphere: { K: 0, A4: -2.39006e-5, A6: 1.71586e-8 } },
    { label: "19A", R: -19.774, sd: 14.2, asphere: { K: 0, A4: 3.74727e-5, A6: -1.29539e-7, A8: 3.60781e-10 } }, // d19 variable (zoom), gap to the cover glass
  ],

  zoom: {
    stations: [
      { focalLengthMm: 15.45, nominalFNumber: 2.8, label: "15mm" },
      { focalLengthMm: 26.05, nominalFNumber: 4 },
      { focalLengthMm: 43.7, nominalFNumber: 5.6, label: "45mm" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.1,
    description:
      "Patent-described inner focus by negative Fa moving imageward; close-focus spacings are not published, so the data file preserves the infinity-focus zoom states.",
  },

  gaps: {
    "6": {
      label: "L1 → SP1",
      values: [
        [20.75, 20.75],
        [7.77, 7.77],
        [2.12, 2.12],
      ],
    },
    STO: {
      label: "SP1 → L2",
      values: [
        [1.87, 1.87],
        [1.94, 1.94],
        [0.1, 0.1],
      ],
    },
    "13": {
      label: "SP2 → L3",
      values: [
        [5.35, 5.35],
        [6.98, 6.98],
        [10.31, 10.31],
      ],
    },
    "17": {
      label: "L3 → L4",
      values: [
        [5.42, 5.42],
        [15.57, 15.57],
        [31.32, 31.32],
      ],
    },
    "19A": {
      label: "GRP → cover glass",
      values: [
        [7.93, 7.93],
        [6.39, 6.39],
        [3.33, 3.33],
      ],
    },
  },

  aperture: { fStops: [2.8, 4, 5.6, 8, 11, 16], maxFNumber: 16 },

  /* ── Cover glass / filter (patent surfaces 20–21): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 1.33,
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7",
      gapAfterMm: 0.5,
      source: "JP 2018-106021 A, Numerical Data 1 surfaces 20–21",
    },
  ],

  groups: [
    { text: "L1 / LN", fromSurface: "1", toSurface: "6" },
    { text: "L2 / LP", fromSurface: "8A", toSurface: "12" },
    { text: "L3", fromSurface: "14", toSurface: "17" },
    { text: "L4 / LRP", fromSurface: "18A", toSurface: "19A" },
  ],
  doublets: [{ text: "D1", fromSurface: "10", toSurface: "12" }],

  layout: { scFill: 0.56, yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
