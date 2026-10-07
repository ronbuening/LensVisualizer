import type { LensDataInput } from "../../types/optics.js";

/**
 *
 *   LENS DATA — KONICA VARIFOCAL HEXANON AR 35-100mm f/2.8
 *
 *   Data source: US 3,584,935, Example 1 (Tadashi Kojima /
 *   Konishiroku Photo Industry Co., Ltd.).
 *   15 elements / 10 air-separated groups, all spherical.
 *   Four components: C1 positive, C2 negative, C3 positive, C4 relay.
 *   Zoom: C2 translates imageward while C3 compensates nonlinearly;
 *   C1, C4, the stop, and the paraxial infinity image plane are fixed.
 *
 *   Zoom variable gaps: source d5, d12, and d17. The published stop is
 *   3.694 mm in front of r18, so d17 is represented as a variable
 *   r17→STO gap plus a fixed 3.694 mm STO→r18 gap.
 *   Focus status: NO_INTERNAL_RECONSTRUCTION. The patent supplies only
 *   infinity zoom states; closeFocusM records the 1972 Konica catalog
 *   10.5 in product MFD and does not imply reconstructed focus motion.
 *
 *   NOTE ON IMAGE PLANE: the patent prints no post-r25 spacing. The
 *   fixed d after surface 25 is the mean computed infinity BFL
 *   (48.482816 mm); source rounding leaves ±0.00064 mm paraxial focus
 *   residual across the three published zoom stations.
 *   NOTE ON STOP SIZE: physical iris diameter is not published. STO.sd
 *   = 10.463093 mm is calibrated from the published f/2.8 and produces
 *   a fixed physical stop across all three published stations.
 *   NOTE ON SEMI-DIAMETERS: the patent publishes none. Surface sd
 *   values are modeled from exact meridional spherical-ray envelopes,
 *   then reduced where needed to satisfy positive edge thickness,
 *   spherical rim-slope, and 90% cross-gap intrusion limits.
 *   Fig. 1 supports nearly common rims for surfaces 6–8; the rear
 *   radius is raised to 23.5 mm while the 24.3 mm front rims retain
 *   wide-field clearance within spherical-slope and neighboring-gap limits.
 *   Surfaces 9/10 use 17.2 mm to improve the source 31-degree half-field
 *   clearance; larger rims approach the source d8 gap intrusion limit.
 *   Glass labels use six-digit nd/νd coordinate classes because the
 *   patent does not identify historical melt suppliers.
 *
 */

const LENS_DATA = {
  key: "konica-varifocal-hexanon-ar-35-100-f28",
  maker: "Konica",
  name: "KONICA VARIFOCAL HEXANON AR 35-100mm f/2.8",
  subtitle: "US 3,584,935, Example 1 — strong production correlation; attribution not manufacturer-confirmed",
  specs: ["15 ELEMENTS / 10 GROUPS", "35.992-100.000 mm DESIGN", "F/2.8", "62° MAX FIELD", "ALL-SPHERICAL"],

  focalLengthMarketing: [35, 100],
  focalLengthDesign: [35.991474, 99.999855],
  apertureMarketing: 2.8,
  lensMounts: ["konica-ar"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,584,935",
  patentAuthors: ["Tadashi Kojima"],
  patentAssignees: ["Konishiroku Photo Industry Co., Ltd."],
  patentYear: 1971,
  elementCount: 15,
  groupCount: 10,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.5,
      indexReference: "d",
      fl: -215.428894,
      glass: "805255 — dense flint class (supplier unproven)",
      cemented: "D1",
      role: "Front element of the C1 cemented pair.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.64,
      vd: 60.2,
      indexReference: "d",
      fl: 163.28125,
      glass: "640602 — crown class (supplier unproven)",
      cemented: "D1",
      role: "Rear element of the C1 cemented pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      fl: 152.942916,
      glass: "620603 — crown class (supplier unproven)",
      role: "Second positive group in fixed component C1.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.5,
      indexReference: "d",
      fl: 139.860017,
      glass: "805255 — dense flint class (supplier unproven)",
      cemented: "D2",
      role: "Front element of the first negative cemented group in moving component C2.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.67003,
      vd: 47.2,
      indexReference: "d",
      fl: -33.129242,
      glass: "670472 — barium-flint class (supplier unproven)",
      cemented: "D2",
      role: "Rear element of the first negative cemented group in C2.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      fl: -83.510264,
      glass: "620603 — crown class (supplier unproven)",
      role: "Second negative group in moving component C2.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.5,
      indexReference: "d",
      fl: 109.533117,
      glass: "805255 — dense flint class (supplier unproven)",
      role: "Rear positive group of the thick negative component C2.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      indexReference: "d",
      fl: 62.842532,
      glass: "620603 — crown class (supplier unproven)",
      role: "Front positive group in compensating component C3.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.64,
      vd: 60.2,
      indexReference: "d",
      fl: 37.485474,
      glass: "640602 — crown class (supplier unproven)",
      cemented: "D3",
      role: "Front element of the cemented group in compensating component C3.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.5,
      indexReference: "d",
      fl: -63.146383,
      glass: "805255 — dense flint class (supplier unproven)",
      cemented: "D3",
      role: "Rear element of the cemented group in C3.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.6,
      indexReference: "d",
      fl: -25.002359,
      glass: "697556 — lanthanum-crown class (supplier unproven)",
      cemented: "D4",
      role: "Front element of the first cemented group in fixed relay component C4.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 1.71736,
      vd: 29.5,
      indexReference: "d",
      fl: 76.513713,
      glass: "717295 — dense flint class (supplier unproven)",
      cemented: "D4",
      role: "Rear element of the first cemented group in relay component C4.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 41.0,
      indexReference: "d",
      fl: 67.213246,
      glass: "806410 — LASF-class high-index glass (supplier unproven)",
      role: "Middle positive group of fixed relay component C4.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Plano-Convex Positive",
      nd: 1.755,
      vd: 52.4,
      indexReference: "d",
      fl: 31.483444,
      glass: "755524 — lanthanum-crown class (supplier unproven)",
      cemented: "D5",
      role: "Front element of the rear cemented group in fixed relay component C4.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      fl: -44.568583,
      glass: "755275 — dense flint class (supplier unproven)",
      cemented: "D5",
      role: "Rear element of the rear cemented group in fixed relay component C4.",
    },
  ],

  surfaces: [
    { label: "1", R: 266.0, d: 2.8, nd: 1.80518, elemId: 1, sd: 37.8 },
    { label: "2", R: 104.5, d: 7.4, nd: 1.64, elemId: 2, sd: 37.8 },
    { label: "3", R: 1e15, d: 0.1, nd: 1.0, elemId: 0, sd: 37.8 },
    { label: "4", R: 64.25, d: 6.5, nd: 1.62041, elemId: 3, sd: 32.8 },
    { label: "5", R: 191.282, d: 2.246, nd: 1.0, elemId: 0, sd: 32.8 },
    { label: "6", R: 501.01, d: 3.7, nd: 1.80518, elemId: 4, sd: 24.3 },
    { label: "7", R: -144.785, d: 1.5, nd: 1.67003, elemId: 5, sd: 24.3 },
    { label: "8", R: 26.326, d: 6.8, nd: 1.0, elemId: 0, sd: 23.5 },
    { label: "9", R: 470.07, d: 1.5, nd: 1.62041, elemId: 6, sd: 17.2 },
    { label: "10", R: 46.61, d: 5.5, nd: 1.0, elemId: 0, sd: 17.2 },
    { label: "11", R: 39.703, d: 3.0, nd: 1.80518, elemId: 7, sd: 17.3 },
    { label: "12", R: 69.777, d: 45.122, nd: 1.0, elemId: 0, sd: 17.3 },
    { label: "13", R: 70.0, d: 3.0, nd: 1.62041, elemId: 8, sd: 14.6 },
    { label: "14", R: -86.56, d: 0.1, nd: 1.0, elemId: 0, sd: 14.6 },
    { label: "15", R: 41.61, d: 5.0, nd: 1.64, elemId: 9, sd: 14.3 },
    { label: "16", R: -54.0, d: 0.9, nd: 1.80518, elemId: 10, sd: 14.3 },
    { label: "17", R: 876.482, d: 0.5, nd: 1.0, elemId: 0, sd: 12.8 },
    { label: "STO", R: 1e15, d: 3.694, nd: 1.0, elemId: 0, sd: 10.463093 },
    { label: "18", R: -64.08, d: 1.0, nd: 1.6968, elemId: 11, sd: 11.8 },
    { label: "19", R: 24.08, d: 5.8, nd: 1.71736, elemId: 12, sd: 12.3 },
    { label: "20", R: 38.585, d: 5.0, nd: 1.0, elemId: 0, sd: 12.3 },
    { label: "21", R: -122.5, d: 5.0, nd: 1.8061, elemId: 13, sd: 14.3 },
    { label: "22", R: -38.25, d: 4.2, nd: 1.0, elemId: 0, sd: 14.3 },
    { label: "23", R: 1e15, d: 8.0, nd: 1.755, elemId: 14, sd: 16.8 },
    { label: "24", R: -23.77, d: 1.5, nd: 1.7552, elemId: 15, sd: 17.3 },
    { label: "25", R: -83.107, d: 48.482816, nd: 1.0, elemId: 0, sd: 17.8 },
  ],

  asph: {},

  var: {
    "5": [
      [2.246, 2.246],
      [16.246, 16.246],
      [42.246, 42.246],
    ],
    "12": [
      [45.122, 45.122],
      [28.854, 28.854],
      [0.903, 0.903],
    ],
    "17": [
      [0.5, 0.5],
      [2.768, 2.768],
      [4.719, 4.719],
    ],
  },

  varLabels: [
    ["5", "d5"],
    ["12", "d12"],
    ["17", "C3→STO"],
  ],

  zoomPositions: [35.992, 50.991, 100.0],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "C1", fromSurface: "1", toSurface: "5" },
    { text: "C2", fromSurface: "6", toSurface: "12" },
    { text: "C3", fromSurface: "13", toSurface: "17" },
    { text: "C4", fromSurface: "18", toSurface: "25" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "15", toSurface: "17" },
    { text: "D4", fromSurface: "18", toSurface: "20" },
    { text: "D5", fromSurface: "23", toSurface: "25" },
  ],

  closeFocusM: 0.2667,
  focusDescription: "The patent supplies infinity zoom states only. The product minimum focus is 0.2667 m; finite-focus motion is not modeled.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
