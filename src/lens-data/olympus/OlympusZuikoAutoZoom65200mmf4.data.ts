import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║   LENS DATA — OLYMPUS ZUIKO AUTO-ZOOM 65-200mm f/4              ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,568,150, Embodiment 4 / claim 7, Olympus Optical.       ║
 * ║  Four-group positive-negative-positive-positive telephoto zoom.             ║
 * ║  14 elements / 11 air-separated groups, all spherical.                     ║
 * ║  Focus: patent identifies Group I as the focusing group; the patent table   ║
 * ║  publishes only infinity-focus zoom spacings, so close-focus travel is not  ║
 * ║  modeled here.                                                             ║
 * ║                                                                            ║
 * ║  Zoom variable gaps: D1 at surface 5, D2 at surface 12, D3 at surface 15.   ║
 * ║  Reversing group: D3 decreases from wide to mid, then increases toward tele.║
 * ║  Variable-gap sum D1 + D2 + D3 = 49.465 mm, preserving constant track.      ║
 * ║                                                                            ║
 * ║  NOTE ON SCALING:                                                          ║
 * ║  No scale factor is applied. The prescription is transcribed at patent      ║
 * ║  scale: f = 66.923, 113.941, 194.149 mm.                                   ║
 * ║                                                                            ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                   ║
 * ║  The patent does not publish clear apertures. Semi-diameters are estimated  ║
 * ║  from paraxial marginal/chief-ray requirements, a 55 mm filter-thread       ║
 * ║  front-group constraint, and renderer safety checks: sd/|R| < 0.90, element ║
 * ║  SD ratio <= 1.25, positive edge thickness, and cross-gap sag intrusion     ║
 * ║  <= 90% of the relevant air gap at every zoom position. These SDs describe  ║
 * ║  a physically plausible rendered prescription, not a no-vignetting aperture ║
 * ║  audit of the production lens.                                              ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "olympus-zuiko-auto-zoom-65-200mm-f4",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO AUTO-ZOOM 65-200mm f/4",
  subtitle: "US 4,568,150 Embodiment 4 — Olympus Optical / Ikari & Fujii",

  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    specs: [
      "14 elements / 11 groups",
      "f = 66.923-194.149 mm design",
      "Computed F/4.24 design aperture; f/4 marketed",
      "35 mm full-frame format",
      "All-spherical",
    ],
    elementCount: 14,
    groupCount: 11,
    focalLengthMm: { marketing: [65, 200], design: [66.923, 194.149] },
    fNumber: { marketing: 4, design: 4.24 },
  },

  source: {
    patentNumber: "US 4,568,150",
    patentYear: 1986,
    authors: ["Kazuo Ikari", "Toru Fujii"],
    assignees: ["Olympus Optical Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.68,
      focalLengthMm: -142.2,
      glass: "S-TIH11 (OHARA; N-SF11 class)",
      role: "Dense-flint front element of the focusing-group achromat.",
      cemented: "I",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.62299,
      vd: 58.14,
      focalLengthMm: 93.8,
      glass: "S-BSM15 (OHARA)",
      role: "Barium-crown positive element cemented to L1.",
      cemented: "I",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Convex Positive",
      nd: 1.62299,
      vd: 58.14,
      focalLengthMm: 141.3,
      glass: "S-BSM15 (OHARA)",
      role: "Standalone positive element completing Group I.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7432,
      vd: 49.31,
      focalLengthMm: -29.0,
      glass: "S-LAM60 (OHARA; patent vd = 49.31)",
      role: "Strong negative front element of the variator cemented doublet.",
      cemented: "II",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.78472,
      vd: 25.68,
      focalLengthMm: 83.9,
      glass: "S-TIH11 (OHARA; N-SF11 class)",
      role: "Positive dense-flint partner in the Group II cemented doublet.",
      cemented: "II",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.66,
      focalLengthMm: -44.0,
      glass: "S-LAH66 (OHARA; patent vd = 49.66)",
      role: "Air-spaced negative variator singlet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.78472,
      vd: 25.68,
      focalLengthMm: 67.7,
      glass: "S-TIH11 (OHARA; N-SF11 class)",
      role: "Positive rear element of the variator group.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.51112,
      vd: 60.48,
      focalLengthMm: 48.3,
      glass: "511605 crown class (CDGM H-K6 / legacy OHARA NSL7)",
      role: "Crown positive element of the compensator achromat.",
      cemented: "III",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.68,
      focalLengthMm: -97.4,
      glass: "S-TIH11 (OHARA; N-SF11 class)",
      role: "Dense-flint corrector cemented to L8.",
      cemented: "III",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Plano-Convex Positive",
      nd: 1.50048,
      vd: 65.99,
      focalLengthMm: 52.9,
      glass: "BK4 (SUMITA catalog equivalent for patent coordinate; production supplier unspecified)",
      role: "Strong positive element at the front of relay component IVa.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 40.95,
      focalLengthMm: -96.5,
      glass: "S-LAH53 (OHARA; patent vd = 40.95)",
      role: "High-index negative element completing air-spaced relay component IVa.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.41,
      focalLengthMm: 75.8,
      glass: "S-NSL36 (OHARA; patent vd = 52.41)",
      role: "Positive relay component IVb, reducing ray height at IVc.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.66,
      focalLengthMm: -33.9,
      glass: "S-LAH66 (OHARA; patent vd = 49.66)",
      role: "Strong negative meniscus relay component IVc.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.51112,
      vd: 60.48,
      focalLengthMm: 120.1,
      glass: "511605 crown class (CDGM H-K6 / legacy OHARA NSL7)",
      role: "Final positive relay component IVd.",
    },
  ],

  surfaces: [
    { label: "1", R: 125.0059, d: 2.6, sd: 26.4, medium: 1 },
    { label: "2", R: 58.416, d: 6.8, sd: 26.4, medium: 2 },
    { label: "3", R: "flat", d: 0.15, sd: 26.2 },
    { label: "4", R: 88.051, d: 4.6, sd: 26.2, medium: 3 },
    { label: "5", R: "flat", sd: 25.8 },

    { label: "6", R: -212.454, d: 1.7, sd: 12.4, medium: 4 },
    { label: "7", R: 24.101, d: 3.4, sd: 12.4, medium: 5 },
    { label: "8", R: 35.649, d: 4.0, sd: 12.4 },
    { label: "9", R: -53.172, d: 1.6, sd: 12.2, medium: 6 },
    { label: "10", R: 95.653, d: 0.64, sd: 12.2 },
    { label: "11", R: 68.31, d: 3.2, sd: 16.4, medium: 7 },
    { label: "12", R: -233.9318, sd: 16.4 },

    { label: "13", R: 117.339, d: 5.8, sd: 15.5, medium: 8 },
    { label: "14", R: -30.722, d: 2.0, sd: 15.5, medium: 9 },
    { label: "15", R: -52.837, sd: 15.5 },

    { label: "STO", R: "flat", d: 1.7 },
    { label: "17", R: 26.4827, d: 5.6, sd: 15.2, medium: 10 },
    { label: "18", R: "flat", d: 2.2, sd: 15.2 },
    { label: "19", R: -128.0029, d: 2.0, sd: 14.8, medium: 11 },
    { label: "20", R: 199.5243, d: 19.9834, sd: 14.8 },
    { label: "21", R: 100.7291, d: 3.6, sd: 15.4, medium: 12 },
    { label: "22", R: -63.4132, d: 10.9209, sd: 15.4 },
    { label: "23", R: -19.6359, d: 1.8, sd: 14.5, medium: 13 },
    { label: "24", R: -81.8964, d: 8.5646, sd: 14.5 },
    { label: "25", R: 113.1923, d: 4.0, sd: 16.8, medium: 14 },
    { label: "26", R: -132.6134, d: 43.657, sd: 16.8 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 66.923, label: "Wide" },
      { focalLengthMm: 113.941 },
      { focalLengthMm: 194.149, label: "Tele" },
    ],
    apertureModel: "fixed-iris",
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.85,
    description:
      "Front-group manual focus in production; patent US 4,568,150 publishes only infinity-focus zoom spacings, so close-focus travel is intentionally not modeled.",
  },

  gaps: {
    "5": {
      label: "D1",
      values: [
        [2.128, 2.128],
        [24.404, 24.404],
        [37.471, 37.471],
      ],
    },
    "12": {
      label: "D2",
      values: [
        [36.355, 36.355],
        [23.26, 23.26],
        [0.976, 0.976],
      ],
    },
    "15": {
      label: "D3",
      values: [
        [10.982, 10.982],
        [1.8, 1.8],
        [11.017, 11.017],
      ],
    },
  },

  aperture: { nominalFNumber: 4.24, fStops: [4.24, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  groups: [
    { text: "I focus", fromSurface: "1", toSurface: "5" },
    { text: "II variator", fromSurface: "6", toSurface: "12" },
    { text: "III compensator", fromSurface: "13", toSurface: "15" },
    { text: "IV relay", fromSurface: "STO", toSurface: "26" },
  ],
  doublets: [
    { text: "I", fromSurface: "1", toSurface: "3" },
    { text: "II", fromSurface: "6", toSurface: "8" },
    { text: "III", fromSurface: "13", toSurface: "15" },
  ],

  layout: { scFill: 0.72, yScFill: 0.62 },

  rays: { rayLeadFrac: 0.2, offAxisFieldFrac: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
