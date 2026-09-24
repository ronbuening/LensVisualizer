import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — SONY FE 50mm f/1.4 GM                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: WO 2024/166548 A1, Example 1 (Sony Group /          ║
 * ║  Masakazu Yamagishi). The production correlation is strong but     ║
 * ║  not manufacturer-confirmed.                                       ║
 * ║  14 elements / 11 air-spaced groups; 4 aspherical surfaces on     ║
 * ║  two physical elements.                                            ║
 * ║  Focus status — PUBLISHED: G2 translates 9.84 mm imageward from   ║
 * ║  infinity to the patent's 450 mm state; no additional travel to   ║
 * ║  the production MFD is reconstructed.                              ║
 * ║                                                                    ║
 * ║  REAR PLATE: patent optical member GC (Table 1 surfaces 27–28,     ║
 * ║  2.50 mm, nd 1.51680, νd 64.2) and the 1.00 mm air gap to IMG are  ║
 * ║  modeled in `rearPlates` (traced, not drawn). Surface 26A keeps    ║
 * ║  the patent's physical 13.61 mm gap to GC.                         ║
 * ║                                                                    ║
 * ║  APERTURE: the patent publishes STO φ=37.00 mm. Current           ║
 * ║  LensVisualizer semantics derive the active physical stop from     ║
 * ║  nominalFno. The exact source ray gives modeled f/1.4563674539,    ║
 * ║  which re-derives the published 18.50 mm stop semi-diameter.       ║
 * ║  apertureDesign remains the patent's printed 1.46; marketed f/1.4  ║
 * ║  remains separate.                                                  ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: Table 1 φ values are published effective full    ║
 * ║  diameters. Every authored sd is φ/2; these are not separately     ║
 * ║  published mechanical clear-aperture dimensions.                   ║
 * ║                                                                    ║
 * ║  GLASS: the patent publishes nd/νd coordinates but no suppliers.  ║
 * ║  Glass strings therefore remain six-digit coordinate classes.      ║
 * ║  No catalog nC/nF/ng/dPgF values are imported by proximity.        ║
 * ║                                                                    ║
 * ║  SCALE: 1.0. Patent K maps directly to LensVisualizer K because    ║
 * ║  both equations use 1+K; all supported published nonzero A terms   ║
 * ║  are retained without scaling.                                     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-fe-50mm-f14-gm",
  maker: "Sony",
  name: "SONY FE 50mm f/1.4 GM",
  subtitle: "WO 2024/166548 A1 Example 1 — inferred production correlation",
  specs: [
    "14 ELEMENTS / 11 GROUPS",
    "DESIGN EFL 51.495 mm",
    "MODELED f/1.456",
    "2ω = 45.57°",
    "4 ASPHERICAL SURFACES / 2 ASPHERICAL ELEMENTS",
    "PUBLISHED 0.45 m FOCUS STATE",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 51.49526657497013,
  apertureMarketing: 1.4,
  apertureDesign: 1.46,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "WO 2024/166548 A1",
  patentAuthors: ["Masakazu Yamagishi"],
  patentAssignees: ["Sony Group Corporation"],
  patentYear: 2024,
  elementCount: 14,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element L11",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.2,
      indexReference: "d",
      fl: 69.43104078510764,
      glass: "911353 class (supplier unresolved)",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element L12",
      type: "Negative Meniscus",
      nd: 1.56732,
      vd: 42.8,
      indexReference: "d",
      fl: -60.6218847323291,
      glass: "567428 class (supplier unresolved)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "Element L13",
      type: "Positive Meniscus",
      nd: 2.00272,
      vd: 19.3,
      indexReference: "d",
      fl: 194.34921344137686,
      glass: "003193 class (supplier unresolved)",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L14",
      diagramLabel: "L14",
      label: "Element L14",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.76802,
      vd: 49.2,
      indexReference: "d",
      fl: -170.4637949012164,
      glass: "768492 class (supplier unresolved)",
    },
    {
      id: 5,
      name: "L15",
      diagramLabel: "L15",
      label: "Element L15",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      fl: -27.253614430423266,
      glass: "755275 class (supplier unresolved)",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L16",
      diagramLabel: "L16",
      label: "Element L16",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      indexReference: "d",
      fl: 34.427817295374524,
      glass: "804465 class (supplier unresolved)",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L17",
      diagramLabel: "L17",
      label: "Element L17",
      type: "Biconvex Positive",
      nd: 1.55032,
      vd: 75.5,
      indexReference: "d",
      fl: 82.02409530005993,
      glass: "550755 class (supplier unresolved)",
    },
    {
      id: 8,
      name: "L18",
      diagramLabel: "L18",
      label: "Element L18",
      type: "Biconvex Positive",
      nd: 1.59349,
      vd: 67,
      indexReference: "d",
      fl: 74.09195269491694,
      glass: "593670 class (supplier unresolved)",
    },
    {
      id: 9,
      name: "L21",
      diagramLabel: "L21",
      label: "Element L21",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.1,
      indexReference: "d",
      fl: -37.95212899724747,
      glass: "001291 class (supplier unresolved)",
    },
    {
      id: 10,
      name: "L22",
      diagramLabel: "L22",
      label: "Element L22",
      type: "Positive Meniscus",
      nd: 1.98613,
      vd: 16.5,
      indexReference: "d",
      fl: 74.98022624455143,
      glass: "986165 class (supplier unresolved)",
    },
    {
      id: 11,
      name: "L31",
      diagramLabel: "L31",
      label: "Element L31",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      indexReference: "d",
      fl: 49.87650131462015,
      glass: "804465 class (supplier unresolved)",
    },
    {
      id: 12,
      name: "L32",
      diagramLabel: "L32",
      label: "Element L32",
      type: "Biconvex Positive",
      nd: 1.76385,
      vd: 48.5,
      indexReference: "d",
      fl: 26.500087248227512,
      glass: "764485 class (supplier unresolved)",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L33",
      diagramLabel: "L33",
      label: "Element L33",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.1,
      indexReference: "d",
      fl: -21.55623938707004,
      glass: "699301 class (supplier unresolved)",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L34",
      diagramLabel: "L34",
      label: "Element L34",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.76802,
      vd: 49.2,
      indexReference: "d",
      fl: -79.32990865237691,
      glass: "768492 class (supplier unresolved)",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 68.423, d: 5.97, nd: 1.91082, elemId: 1, sd: 21.855 },
    { label: "2", R: -800, d: 0.79, nd: 1, elemId: 0, sd: 21.055 },
    { label: "3", R: 550, d: 1.08, nd: 1.56732, elemId: 2, sd: 19.645 },
    { label: "4", R: 32.345, d: 2.67, nd: 2.00272, elemId: 3, sd: 16.79 },
    { label: "5", R: 37.179, d: 3, nd: 1, elemId: 0, sd: 15.945 },
    { label: "6A", R: 199.743, d: 1.84, nd: 1.76802, elemId: 4, sd: 15.605 },
    { label: "7A", R: 78.768, d: 6.32, nd: 1, elemId: 0, sd: 15.13 },
    { label: "8", R: -39.362, d: 2.2, nd: 1.7552, elemId: 5, sd: 15.235 },
    { label: "9", R: 44.176, d: 7.86, nd: 1.8042, elemId: 6, sd: 17.425 },
    { label: "10", R: -68.293, d: 1, nd: 1, elemId: 0, sd: 17.855 },
    { label: "STO", R: 1e15, d: 1, nd: 1, elemId: 0, sd: 18.5 },
    { label: "12", R: 98.218, d: 5.56, nd: 1.55032, elemId: 7, sd: 19.12 },
    { label: "13", R: -81.849, d: 0.81, nd: 1, elemId: 0, sd: 19.21 },
    { label: "14", R: 78.07, d: 6.42, nd: 1.59349, elemId: 8, sd: 19.02 },
    { label: "15", R: -97.598, d: 2.81, nd: 1, elemId: 0, sd: 18.76 },
    { label: "16", R: 290.347, d: 1.2, nd: 2.001, elemId: 9, sd: 16.78 },
    { label: "17", R: 33.525, d: 4.67, nd: 1, elemId: 0, sd: 15.86 },
    { label: "18", R: 57.917, d: 3.23, nd: 1.98613, elemId: 10, sd: 16.29 },
    { label: "19", R: 259.861, d: 12.3, nd: 1, elemId: 0, sd: 16.185 },
    { label: "20", R: 126.843, d: 5.78, nd: 1.8042, elemId: 11, sd: 15.055 },
    { label: "21", R: -57.469, d: 0.15, nd: 1, elemId: 0, sd: 14.75 },
    { label: "22", R: 62.651, d: 11.16, nd: 1.76385, elemId: 12, sd: 14.85 },
    { label: "23", R: -27.597, d: 1.2, nd: 1.69895, elemId: 13, sd: 14.45 },
    { label: "24", R: 33.777, d: 6.45, nd: 1, elemId: 0, sd: 13.61 },
    { label: "25A", R: 129.637, d: 1.4, nd: 1.76802, elemId: 14, sd: 13.9 },
    { label: "26A", R: 41.253, d: 13.61, nd: 1, elemId: 0, sd: 14.645 }, // physical gap to GC
  ],

  /* ── Optical member GC (patent Table 1 surfaces 27–28): traced, not drawn ── */
  rearPlates: [
    {
      label: "GC",
      thicknessMm: 2.5,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 1.0,
      source: "WO 2024/166548 A1, Example 1 Table 1 surfaces 27–28",
    },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "6A": {
      K: 0,
      A4: 1.61704e-5,
      A6: -3.10095e-8,
      A8: 5.82477e-12,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "7A": {
      K: 0,
      A4: 2.31134e-5,
      A6: -2.26666e-8,
      A8: 4.38805e-12,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "25A": {
      K: 0,
      A4: -1.32583e-4,
      A6: 7.33584e-7,
      A8: -2.69572e-9,
      A10: 4.77756e-12,
      A12: 2.55188e-15,
      A14: -1.77301e-17,
    },
    "26A": {
      K: 0,
      A4: -1.30339e-4,
      A6: 8.23417e-7,
      A8: -3.54949e-9,
      A10: 1.02101e-11,
      A12: -1.60121e-14,
      A14: 9.24854e-18,
    },
  },

  /* ── Published focus spacings ── */
  var: {
    "15": [2.81, 12.65],
    "19": [12.3, 2.46],
  },
  varLabels: [
    ["15", "D15"],
    ["19", "D19"],
  ],

  /* ── Group and cemented-lens annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "15" },
    { text: "G2 (−)", fromSurface: "16", toSurface: "19" },
    { text: "G3 (+)", fromSurface: "20", toSurface: "26A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "22", toSurface: "24" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.45,
  focusDescription:
    "PUBLISHED inner focus: G2 (L21–L22) moves 9.84 mm imageward from infinity to the patent 0.45 m state; G1 and G3 remain fixed. No additional travel to the production 0.41 m AF / 0.38 m MF limits is reconstructed.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4563674539005629,
  fstopSeries: [1.4563674539005629, 2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 11,

  /* ── Layout ── */
  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
