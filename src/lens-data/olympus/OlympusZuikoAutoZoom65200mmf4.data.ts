import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║   LENS DATA — OLYMPUS OM-SYSTEM ZUIKO AUTO-ZOOM 65-200mm f/4              ║
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
  key: "olympus-zuiko-auto-zoom-65-200mm-f4",
  maker: "Olympus",
  name: "OLYMPUS OM-SYSTEM ZUIKO AUTO-ZOOM 65-200mm f/4",
  subtitle: "US 4,568,150 Embodiment 4 — Olympus Optical / Ikari & Fujii",
  specs: [
    "14 elements / 11 groups",
    "f = 66.923-194.149 mm design",
    "Computed F/4.24 design aperture; f/4 marketed",
    "35 mm full-frame format",
    "All-spherical",
  ],

  focalLengthMarketing: [65, 200],
  focalLengthDesign: [66.923, 194.149],
  apertureMarketing: 4,
  apertureDesign: 4.24,
  lensMounts: ["olympus-om"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,568,150",
  patentAuthors: ["Kazuo Ikari", "Toru Fujii"],
  patentAssignees: ["Olympus Optical Co., Ltd."],
  patentYear: 1986,
  elementCount: 14,
  groupCount: 11,
  apertureBlades: 8,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.68,
      fl: -142.2,
      glass: "S-TIH11 (OHARA; N-SF11 class)",
      cemented: "I",
      role: "Dense-flint front element of the focusing-group achromat.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.62299,
      vd: 58.14,
      fl: 93.8,
      glass: "S-BSM15 (OHARA)",
      cemented: "I",
      role: "Barium-crown positive element cemented to L1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Convex Positive",
      nd: 1.62299,
      vd: 58.14,
      fl: 141.3,
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
      fl: -29.0,
      glass: "S-LAM60 (OHARA; patent vd = 49.31)",
      cemented: "II",
      role: "Strong negative front element of the variator cemented doublet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.78472,
      vd: 25.68,
      fl: 83.9,
      glass: "S-TIH11 (OHARA; N-SF11 class)",
      cemented: "II",
      role: "Positive dense-flint partner in the Group II cemented doublet.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.66,
      fl: -44.0,
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
      fl: 67.7,
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
      fl: 48.3,
      glass: "511605 crown class (CDGM H-K6 / legacy OHARA NSL7)",
      cemented: "III",
      role: "Crown positive element of the compensator achromat.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.68,
      fl: -97.4,
      glass: "S-TIH11 (OHARA; N-SF11 class)",
      cemented: "III",
      role: "Dense-flint corrector cemented to L8.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Plano-Convex Positive",
      nd: 1.50048,
      vd: 65.99,
      fl: 52.9,
      glass: "500660 crown class (CDGM H-K2 / OHARA BSL4)",
      role: "Strong positive element at the front of relay component IVa.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 40.95,
      fl: -96.5,
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
      fl: 75.8,
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
      fl: -33.9,
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
      fl: 120.1,
      glass: "511605 crown class (CDGM H-K6 / legacy OHARA NSL7)",
      role: "Final positive relay component IVd.",
    },
  ],

  surfaces: [
    { label: "1", R: 125.0059, d: 2.6, nd: 1.78472, elemId: 1, sd: 26.4 },
    { label: "2", R: 58.416, d: 6.8, nd: 1.62299, elemId: 2, sd: 26.4 },
    { label: "3", R: 1e15, d: 0.15, nd: 1.0, elemId: 0, sd: 26.2 },
    { label: "4", R: 88.051, d: 4.6, nd: 1.62299, elemId: 3, sd: 26.2 },
    { label: "5", R: 1e15, d: 2.128, nd: 1.0, elemId: 0, sd: 25.8 },

    { label: "6", R: -212.454, d: 1.7, nd: 1.7432, elemId: 4, sd: 12.4 },
    { label: "7", R: 24.101, d: 3.4, nd: 1.78472, elemId: 5, sd: 12.4 },
    { label: "8", R: 35.649, d: 4.0, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "9", R: -53.172, d: 1.6, nd: 1.7725, elemId: 6, sd: 12.2 },
    { label: "10", R: 95.653, d: 0.64, nd: 1.0, elemId: 0, sd: 12.2 },
    { label: "11", R: 68.31, d: 3.2, nd: 1.78472, elemId: 7, sd: 16.4 },
    { label: "12", R: -233.9318, d: 36.355, nd: 1.0, elemId: 0, sd: 16.4 },

    { label: "13", R: 117.339, d: 5.8, nd: 1.51112, elemId: 8, sd: 15.5 },
    { label: "14", R: -30.722, d: 2.0, nd: 1.78472, elemId: 9, sd: 15.5 },
    { label: "15", R: -52.837, d: 10.982, nd: 1.0, elemId: 0, sd: 15.5 },

    { label: "STO", R: 1e15, d: 1.7, nd: 1.0, elemId: 0, sd: 13.724 },
    { label: "17", R: 26.4827, d: 5.6, nd: 1.50048, elemId: 10, sd: 15.2 },
    { label: "18", R: 1e15, d: 2.2, nd: 1.0, elemId: 0, sd: 15.2 },
    { label: "19", R: -128.0029, d: 2.0, nd: 1.8061, elemId: 11, sd: 14.8 },
    { label: "20", R: 199.5243, d: 19.9834, nd: 1.0, elemId: 0, sd: 14.8 },
    { label: "21", R: 100.7291, d: 3.6, nd: 1.51742, elemId: 12, sd: 15.4 },
    { label: "22", R: -63.4132, d: 10.9209, nd: 1.0, elemId: 0, sd: 15.4 },
    { label: "23", R: -19.6359, d: 1.8, nd: 1.7725, elemId: 13, sd: 14.5 },
    { label: "24", R: -81.8964, d: 8.5646, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "25", R: 113.1923, d: 4.0, nd: 1.51112, elemId: 14, sd: 16.8 },
    { label: "26", R: -132.6134, d: 43.657, nd: 1.0, elemId: 0, sd: 16.8 },
  ],

  asph: {},

  zoomPositions: [66.923, 113.941, 194.149],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],
  var: {
    "5": [
      [2.128, 2.128],
      [24.404, 24.404],
      [37.471, 37.471],
    ],
    "12": [
      [36.355, 36.355],
      [23.26, 23.26],
      [0.976, 0.976],
    ],
    "15": [
      [10.982, 10.982],
      [1.8, 1.8],
      [11.017, 11.017],
    ],
  },
  varLabels: [
    ["5", "D1"],
    ["12", "D2"],
    ["15", "D3"],
  ],

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

  closeFocusM: 0.85,
  focusDescription:
    "Front-group manual focus in production; patent US 4,568,150 publishes only infinity-focus zoom spacings, so close-focus travel is intentionally not modeled.",
  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  scFill: 0.72,
  yScFill: 0.62,
  rayLeadFrac: 0.2,
  offAxisFieldFrac: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
