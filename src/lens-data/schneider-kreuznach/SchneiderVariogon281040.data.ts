import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — SCHNEIDER-KREUZNACH VARIOGON 10-40mm f/2.8
 *
 * Source: US 3,057,257, selected job-card embodiment "Example 1". The patent's sole worked
 * numerical table is the f=100 intermediate zoom state. The complete prescription is uniformly
 * scaled by 0.2 to correlate the patent's 50-200 range with the production 10-40mm Variogon.
 *
 * 13 physical elements / 9 air-separated groups; all 22 refracting source surfaces are retained.
 * Zoom components II and III move; components I, IV, and V remain fixed. The published scaled
 * midpoint gaps are preserved at 24.85 / 6.82 / 12.94mm. Wide and tele gap triplets are constrained
 * reconstructions solved from target EFL, constant d5+d8+d11, and an afocal I-IV attachment.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. Schneider documents front-group focusing, and the
 * production focus scale reaches 1.0m, but no finite-focus internal spacing state is published.
 * The zoom var pairs therefore repeat the same spacing at infinity and close focus.
 *
 * STO: the patent omits the iris position and diameter. Schneider's historical Variogon section
 * places a reflex beamsplitter ahead of the iris; this model places STO near the rear of the scaled
 * d14 gap, 1.0mm ahead of L10. Its semi-diameter is calibrated to the published f/2.8 target using
 * the modeled paraxial entrance pupil. This is not an independent measurement of diaphragm size.
 *
 * Semi-diameters are modeled, not patent-published. They were derived from exact spherical
 * meridional tracing to the Normal-8 frame corner across wide/mid/tele and intermediate zoom states,
 * then limited by the current edge-thickness, rim-slope, and cross-gap geometry rules.
 *
 * The patent does not publish r22-to-film spacing. The final d uses the fixed paraxial rear focal
 * distance of the exact-afocal reconstructed endpoints/basic objective: 12.295743886292mm.
 *
 * Normal-8 (3.6 x 4.9mm) follows Schneider's historical Variogon publication.
 * No authoritative standardized mount for the exact production variant is established.
 */

const LENS_DATA = {
  key: "schneider-variogon-10-40-f28",
  imageFormat: "normal-8",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH VARIOGON 10-40mm f/2.8",
  subtitle: "US 3,057,257 — Example 1; production-normalized x0.2 correlation",
  specs: ["13 ELEMENTS / 9 GROUPS", "10-40mm", "f/2.8", "NORMAL-8 CORRELATION", "ALL SPHERICAL"],

  focalLengthMarketing: [10, 40],
  focalLengthDesign: [10.000000000014, 40.000000000000],
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  patentNumber: "US 3,057,257",
  patentAuthors: ["Günter Klemt", "Karl Macher"],
  patentAssignees: ["Jos. Schneider & Co., Optische Werke"],
  patentYear: 1962,
  elementCount: 13,
  groupCount: 9,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.52542,
      vd: 64.55,
      indexReference: "d",
      fl: 113.496717797954,
      glass: "PC3 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Front positive singlet in fixed component I.",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      fl: 86.843130079224,
      glass: "S-BSM16 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Positive member of the cemented pair in fixed component I.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.52,
      indexReference: "d",
      fl: -111.156110348925,
      glass: "S-TIH14 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Negative member of the cemented pair in fixed component I.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.7552,
      vd: 27.53,
      indexReference: "d",
      fl: 83.864159993593,
      glass: "E-FD4 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Positive member of moving negative component II.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.50378,
      vd: 66.73,
      indexReference: "d",
      fl: -26.300511971456,
      glass: "PC1 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Negative member of moving negative component II.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.50378,
      vd: 66.73,
      indexReference: "d",
      fl: -25.444260214863,
      glass: "PC1 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Negative member of moving negative component III.",
      cemented: "D3",
    },
    {
      id: 7,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.7552,
      vd: 27.53,
      indexReference: "d",
      fl: 60.062403357856,
      glass: "E-FD4 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Positive member of moving negative component III.",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      fl: 25.243864539171,
      glass: "S-BSM16 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Positive member of fixed positive component IV.",
      cemented: "D4",
    },
    {
      id: 9,
      name: "L9",
      diagramLabel: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.34,
      indexReference: "d",
      fl: -52.692283725355,
      glass: "F2 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Negative member of fixed positive component IV.",
      cemented: "D4",
    },
    {
      id: 10,
      name: "L10",
      diagramLabel: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      fl: 19.787372412124,
      glass: "S-BSM16 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "First positive singlet of the fixed basic objective V.",
    },
    {
      id: 11,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.29,
      indexReference: "d",
      fl: 42.924033135554,
      glass: "S-BSM16 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Second positive singlet of the fixed basic objective V.",
    },
    {
      id: 12,
      name: "L12",
      diagramLabel: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.05,
      indexReference: "d",
      fl: -7.512184961216,
      glass: "E-FD15 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Negative singlet of the fixed basic objective V.",
    },
    {
      id: 13,
      name: "L13",
      diagramLabel: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.6583,
      vd: 57.29,
      indexReference: "d",
      fl: 10.602929051355,
      glass: "K-LaK11 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Final positive singlet of the fixed basic objective V.",
    },
  ],

  surfaces: [
    { label: "1", R: 68.51, d: 4.0, nd: 1.52542, elemId: 1, sd: 21.23 },
    { label: "2", R: -451.0, d: 0.08, nd: 1.0, elemId: 0, sd: 21.21 },
    { label: "3", R: 57.44, d: 3.87, nd: 1.62041, elemId: 2, sd: 20.05 },
    { label: "4", R: -846.5, d: 1.17, nd: 1.76182, elemId: 3, sd: 20.04 },
    { label: "5", R: 94.15, d: 2.610624722647, nd: 1.0, elemId: 0, sd: 19.09 },
    { label: "6", R: -170.1, d: 2.05, nd: 1.7552, elemId: 4, sd: 12.89 },
    { label: "7", R: -46.39, d: 0.62, nd: 1.50378, elemId: 5, sd: 12.7 },
    { label: "8", R: 18.63, d: 25.902033004659, nd: 1.0, elemId: 0, sd: 10.64 },
    { label: "9", R: -23.63, d: 0.59, nd: 1.50378, elemId: 6, sd: 5.98 },
    { label: "10", R: 28.25, d: 1.46, nd: 1.7552, elemId: 7, sd: 5.89 },
    { label: "11", R: 73.23, d: 16.097342272694, nd: 1.0, elemId: 0, sd: 5.81 },
    { label: "12", R: 61.53, d: 1.37, nd: 1.62041, elemId: 8, sd: 4.77 },
    { label: "13", R: -20.83, d: 0.68, nd: 1.62004, elemId: 9, sd: 4.72 },
    { label: "14", R: -58.19, d: 8.0, nd: 1.0, elemId: 0, sd: 4.65 },
    { label: "STO", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 3.26390153782 },
    { label: "15", R: 12.99, d: 2.04, nd: 1.62041, elemId: 10, sd: 3.54 },
    { label: "16", R: -210.0, d: 0.03, nd: 1.0, elemId: 0, sd: 3.53 },
    { label: "17", R: 7.786, d: 2.02, nd: 1.62041, elemId: 11, sd: 3.51 },
    { label: "18", R: 9.91, d: 1.36, nd: 1.0, elemId: 0, sd: 3.17 },
    { label: "19", R: -25.98, d: 0.57, nd: 1.69895, elemId: 12, sd: 3.09 },
    { label: "20", R: 6.64, d: 2.75, nd: 1.0, elemId: 0, sd: 3.06 },
    { label: "21", R: 18.68, d: 2.17, nd: 1.6583, elemId: 13, sd: 4.01 },
    { label: "22", R: -10.63, d: 12.295743886292, nd: 1.0, elemId: 0, sd: 4.12 },
  ],

  asph: {},

  var: {
    "5": [
      [2.610624722647, 2.610624722647],
      [24.85, 24.85],
      [39.893454742484, 39.893454742484],
    ],
    "8": [
      [25.902033004659, 25.902033004659],
      [6.82, 6.82],
      [3.511914551631, 3.511914551631],
    ],
    "11": [
      [16.097342272694, 16.097342272694],
      [12.94, 12.94],
      [1.204630705886, 1.204630705886],
    ],
  },
  varLabels: [
    ["5", "D5"],
    ["8", "D8"],
    ["11", "D11"],
  ],

  zoomPositions: [10, 20, 40],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "I (+)", fromSurface: "1", toSurface: "5" },
    { text: "II (-)", fromSurface: "6", toSurface: "8" },
    { text: "III (-)", fromSurface: "9", toSurface: "11" },
    { text: "IV (+)", fromSurface: "12", toSurface: "14" },
    { text: "V", fromSurface: "15", toSurface: "22" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "9", toSurface: "11" },
    { text: "D4", fromSurface: "12", toSurface: "14" },
  ],

  closeFocusM: 1.0,
  focusDescription:
    "Front-group focusing is source-documented; no finite-focus internal spacing is reconstructed.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.48,
} satisfies LensDataInput;

export default LENS_DATA;
