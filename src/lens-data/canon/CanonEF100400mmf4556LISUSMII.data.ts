import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Canon EF 100-400mm f/4.5-5.6L IS II USM                           ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Optical source: US 2015/0146044 A1, Numerical Example 2 (Sugita / Canon).       ║
 * ║  Production correlation: strong, but the patent example remains an unscaled       ║
 * ║  design prescription rather than being forced to the marketed 100-400mm range.    ║
 * ║  21 elements / 16 air-separated groups; six functional zoom units (+/-/+/-/+/-); ║
 * ║  all refracting surfaces are spherical.                                           ║
 * ║                                                                                    ║
 * ║  FOCUS STATUS — NO_INTERNAL_RECONSTRUCTION:                                       ║
 * ║  Example 2 states that L6 moves imageward for main focus and L4 slightly           ║
 * ║  objectward for auxiliary floating correction, but it does not publish complete   ║
 * ║  finite-focus spacing rows or the L4 travel magnitude. Every close member of       ║
 * ║  `var` therefore repeats its infinity value. Canon's marketed 0.98 m MFD is         ║
 * ║  metadata only; no internal close-focus motion is invented.                        ║
 * ║                                                                                    ║
 * ║  ZOOM: source D6, D14, D19, D20, D23, D30, and BF/D38 are modeled at the          ║
 * ║  published 102.79 / 199.97 / 389.03 mm stations. The W/M/T rows show no           ║
 * ║  movement reversal. L2 is fixed; L5 is fixed within 0.01 mm source rounding.       ║
 * ║                                                                                    ║
 * ║  STOP / F-NUMBER: patent surface 20 is the aperture stop. Its 28.41 mm             ║
 * ║  "effective diameter" is retained as the stop clear-envelope diameter             ║
 * ║  (STO sd = 14.205 mm), not asserted to be the blade opening at every zoom state.   ║
 * ║  `nominalFno` uses the Example 2 design values 4.63 / 4.94 / 5.85 so the runtime  ║
 * ║  derives the state-specific wide-open aperture.                                    ║
 * ║                                                                                    ║
 * ║  SEMI-DIAMETERS: the patent publishes effective diameters for every surface;       ║
 * ║  each `sd` is exactly one-half of that source value. With those source apertures,  ║
 * ║  the 11->12 and 32->33 air gaps use 93.25% and 92.74% of their axial spacing      ║
 * ║  at the shared rim while retaining +0.280 mm and +0.296 mm physical clearance.    ║
 * ║  `gapSagFrac = 0.94` preserves those published apertures without hidden geometry.  ║
 * ║                                                                                    ║
 * ║  GLASS: Example 2 publishes d-line nd/vd only and does not name vendors. Glass     ║
 * ║  strings therefore remain vendor-neutral classes/codes or explicit Unmatched      ║
 * ║  annotations. nC, nF, ng, and dPgF are intentionally not authored because the     ║
 * ║  patent does not publish them and a vendor-neutral coordinate class does not       ║
 * ║  establish a unique spectral model.                                                ║
 * ║                                                                                    ║
 * ║  NO SCALING: all radii, thicknesses, spacings, and image-plane distances remain    ║
 * ║  in the patent's published millimetres.                                            ║
 * ║                                                                                    ║
 * ║  Exclusions: no sensor cover glass, filter, inactive dummy/flare-cutter plane,     ║
 * ║  or mechanical component is included.                                              ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-ef-100-400mm-f45-56l-is-ii-usm",
  maker: "Canon",
  name: "CANON EF 100-400mm f/4.5-5.6 L IS II USM",
  subtitle: "US 2015/0146044 A1 Numerical Example 2 — production-correlated unscaled patent design",
  specs: [
    "21 ELEMENTS / 16 GROUPS",
    "PATENT ZOOM POINTS 102.79-389.03 mm",
    "MODELED EFL 102.758-388.939 mm",
    "DESIGN f/4.63-5.85 / MARKETED f/4.5-5.6",
    "6-UNIT +/-/+/-/+/- ZOOM / NO INTERNAL FOCUS RECONSTRUCTION",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: [100, 400],
  focalLengthDesign: [102.75785763652577, 388.9390594335833],
  apertureMarketing: 4.5,
  apertureDesign: 4.63,
  lensMounts: ["canon-ef"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2015/0146044 A1",
  patentAuthors: ["Shigenobu Sugita"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2015,
  elementCount: 21,
  groupCount: 16,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "E01",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62299,
      vd: 58.2,
      fl: 224.57511,
      glass: "623582 crown class (vendor unresolved)",
      role: "Positive member of the first zoom unit L1.",
    },
    {
      id: 2,
      name: "E02",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.65412,
      vd: 39.7,
      fl: -178.541705,
      glass: "654397 KZFS/NBH-class flint (vendor unresolved)",
      role: "Negative member of the first zoom unit L1.",
    },
    {
      id: 3,
      name: "E03",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 94.9,
      fl: 157.805857,
      glass: "439950 ultra-low-dispersion crown; S-FPL53-class (vendor unresolved)",
      role: "Low-dispersion positive member completing the first zoom unit L1.",
    },
    {
      id: 4,
      name: "E04",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.59551,
      vd: 39.2,
      fl: 107.227216,
      glass: "596392 flint class (vendor unresolved)",
      cemented: "D1",
      role: "Positive front component of the first cemented pair in negative unit L2.",
    },
    {
      id: 5,
      name: "E05",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      fl: -90.137765,
      glass: "773496 lanthanum flint class (vendor unresolved)",
      cemented: "D1",
      role: "Negative rear component of the first cemented pair in L2.",
    },
    {
      id: 6,
      name: "E06",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -115.210567,
      glass: "773496 lanthanum flint class (vendor unresolved)",
      role: "Negative singlet in the second zoom unit L2.",
    },
    {
      id: 7,
      name: "E07",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.60311,
      vd: 60.6,
      fl: -58.610704,
      glass: "603607 crown class (vendor unresolved)",
      cemented: "D2",
      role: "Negative front component of the second cemented pair in L2.",
    },
    {
      id: 8,
      name: "E08",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: 108.022317,
      glass: "847238 dense-flint class (vendor unresolved)",
      cemented: "D2",
      role: "Positive rear component of the second cemented pair in L2.",
    },
    {
      id: 9,
      name: "E09",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      fl: 99.179306,
      glass: "Unmatched (CaF2/fluorite-like coordinates; production-correlation inference)",
      role: "Very-low-dispersion positive member of the third zoom unit L3.",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.51742,
      vd: 52.4,
      fl: 73.559486,
      glass: "517524 class; S-NSL36 is the closest public coordinate match",
      cemented: "D3",
      role: "Positive front component of the cemented pair in L3.",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      fl: -88.892217,
      glass: "904313 high-index lanthanum-flint class (vendor unresolved)",
      cemented: "D3",
      role: "Negative rear component of the cemented pair in L3.",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.3,
      fl: -40.972573,
      glass: "593353 flint class (vendor unresolved)",
      cemented: "D4",
      role: "Negative front component of the cemented fourth zoom unit L4.",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.78472,
      vd: 25.7,
      fl: 52.351749,
      glass: "785257 dense-flint class (vendor unresolved)",
      cemented: "D4",
      role: "Positive rear component of the cemented fourth zoom unit L4.",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.762,
      vd: 40.1,
      fl: 97.274259,
      glass: "762401 lanthanum-flint class (OHARA S-LAM55 / HIKARI J-LAF05 coordinate)",
      role: "Positive front singlet of the fifth zoom unit L5.",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 52.534222,
      glass: "487702 low-index crown; S-FSL5-class (vendor unresolved)",
      cemented: "D5",
      role: "Positive front component of the cemented pair in L5.",
    },
    {
      id: 16,
      name: "E16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -58.962792,
      glass: "847238 dense-flint class (vendor unresolved)",
      cemented: "D5",
      role: "Negative rear component of the cemented pair in L5.",
    },
    {
      id: 17,
      name: "E17",
      label: "Element 17",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.7,
      fl: 94.972406,
      glass: "729547 lanthanum-crown class (vendor unresolved)",
      role: "Positive rear singlet completing the fifth zoom unit L5.",
    },
    {
      id: 18,
      name: "E18",
      label: "Element 18",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: -46.266812,
      glass: "883408 high-index lanthanum-flint class (vendor unresolved)",
      role: "Negative front member of the sixth zoom/focus unit L6.",
    },
    {
      id: 19,
      name: "E19",
      label: "Element 19",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: 75.394271,
      glass: "805254/805255 dense-flint class (vendor unresolved)",
      role: "Positive second member of the sixth zoom/focus unit L6.",
    },
    {
      id: 20,
      name: "E20",
      label: "Element 20",
      type: "Biconcave Negative",
      nd: 1.72916,
      vd: 54.7,
      fl: -31.404691,
      glass: "729547 lanthanum-crown class (vendor unresolved)",
      role: "Negative third member of the sixth zoom/focus unit L6.",
    },
    {
      id: 21,
      name: "E21",
      label: "Element 21",
      type: "Biconvex Positive",
      nd: 1.65412,
      vd: 39.7,
      fl: 65.132917,
      glass: "654397 KZFS/NBH-class flint (vendor unresolved)",
      role: "Positive rear member completing the sixth zoom/focus unit L6.",
    },
  ],

  /* ── Surface prescription: US 2015/0146044 A1, Numerical Example 2 ── */
  surfaces: [
    { label: "1", R: 109.67, d: 6.94, nd: 1.62299, elemId: 1, sd: 34.72 },
    { label: "2", R: 495.105, d: 0.15, nd: 1.0, elemId: 0, sd: 34.37 },
    { label: "3", R: 147.45, d: 2.7, nd: 1.65412, elemId: 2, sd: 33.825 },
    { label: "4", R: 64.698, d: 0.11, nd: 1.0, elemId: 0, sd: 32.31 },
    { label: "5", R: 65.113, d: 10.78, nd: 1.43875, elemId: 3, sd: 32.31 },
    { label: "6", R: 1037.902, d: 1.5, nd: 1.0, elemId: 0, sd: 31.915 },
    { label: "7", R: 111.494, d: 4.03, nd: 1.59551, elemId: 4, sd: 16.92 },
    { label: "8", R: -147.429, d: 1.7, nd: 1.7725, elemId: 5, sd: 16.62 },
    { label: "9", R: 132.617, d: 2.22, nd: 1.0, elemId: 0, sd: 16.12 },
    { label: "10", R: 223.886, d: 1.55, nd: 1.7725, elemId: 6, sd: 15.86 },
    { label: "11", R: 63.492, d: 4.14, nd: 1.0, elemId: 0, sd: 15.525 },
    { label: "12", R: -63.227, d: 1.55, nd: 1.60311, elemId: 7, sd: 15.52 },
    { label: "13", R: 80.909, d: 3.0, nd: 1.84666, elemId: 8, sd: 15.97 },
    { label: "14", R: 689.532, d: 37.75, nd: 1.0, elemId: 0, sd: 16.05 },
    { label: "15", R: 132.772, d: 5.44, nd: 1.43387, elemId: 9, sd: 16.315 },
    { label: "16", R: -62.875, d: 0.18, nd: 1.0, elemId: 0, sd: 16.405 },
    { label: "17", R: 87.368, d: 5.37, nd: 1.51742, elemId: 10, sd: 16.17 },
    { label: "18", R: -66.028, d: 1.6, nd: 1.90366, elemId: 11, sd: 15.975 },
    { label: "19", R: -375.161, d: 1.61, nd: 1.0, elemId: 0, sd: 15.88 },
    { label: "STO", R: 1e15, d: 11.62, nd: 1.0, elemId: 0, sd: 14.205 },
    { label: "21", R: -48.828, d: 1.4, nd: 1.5927, elemId: 12, sd: 13.52 },
    { label: "22", R: 48.828, d: 3.87, nd: 1.78472, elemId: 13, sd: 13.85 },
    { label: "23", R: -249.921, d: 16.52, nd: 1.0, elemId: 0, sd: 13.89 },
    { label: "24", R: -192.509, d: 2.72, nd: 1.762, elemId: 14, sd: 13.87 },
    { label: "25", R: -53.844, d: 0.16, nd: 1.0, elemId: 0, sd: 13.91 },
    { label: "26", R: 57.166, d: 5.64, nd: 1.48749, elemId: 15, sd: 13.36 },
    { label: "27", R: -44.894, d: 1.4, nd: 1.84666, elemId: 16, sd: 12.97 },
    { label: "28", R: -452.162, d: 0.15, nd: 1.0, elemId: 0, sd: 12.705 },
    { label: "29", R: 52.725, d: 2.93, nd: 1.72916, elemId: 17, sd: 12.665 },
    { label: "30", R: 215.772, d: 9.98, nd: 1.0, elemId: 0, sd: 12.515 },
    { label: "31", R: 55.796, d: 1.2, nd: 1.883, elemId: 18, sd: 11.67 },
    { label: "32", R: 23.347, d: 4.08, nd: 1.0, elemId: 0, sd: 11.14 },
    { label: "33", R: -65.479, d: 2.53, nd: 1.80518, elemId: 19, sd: 11.17 },
    { label: "34", R: -32.044, d: 1.33, nd: 1.0, elemId: 0, sd: 11.37 },
    { label: "35", R: -29.925, d: 1.2, nd: 1.72916, elemId: 20, sd: 11.315 },
    { label: "36", R: 99.181, d: 4.3, nd: 1.0, elemId: 0, sd: 11.9 },
    { label: "37", R: 51.642, d: 4.11, nd: 1.65412, elemId: 21, sd: 13.87 },
    { label: "38", R: -235.796, d: 67.26, nd: 1.0, elemId: 0, sd: 14.025 },
  ],

  /* ── All-spherical design ── */
  asph: {},

  /* ── Published infinity-state zoom variables only; no finite-focus reconstruction ── */
  var: {
    "6": [
      [1.5, 1.5],
      [53.0, 53.0],
      [78.5, 78.5],
    ],
    "14": [
      [37.75, 37.75],
      [24.29, 24.29],
      [1.4, 1.4],
    ],
    "19": [
      [1.61, 1.61],
      [11.57, 11.57],
      [26.37, 26.37],
    ],
    STO: [
      [11.62, 11.62],
      [22.7, 22.7],
      [35.24, 35.24],
    ],
    "23": [
      [16.52, 16.52],
      [8.94, 8.94],
      [4.5, 4.5],
    ],
    "30": [
      [9.98, 9.98],
      [6.91, 6.91],
      [1.35, 1.35],
    ],
    "38": [
      [67.26, 67.26],
      [70.32, 70.32],
      [75.88, 75.88],
    ],
  },
  varLabels: [
    ["6", "D6 / L1-L2"],
    ["14", "D14 / L2-L3"],
    ["19", "D19 / L3-STO"],
    ["STO", "D20 / STO-L4"],
    ["23", "D23 / L4-L5"],
    ["30", "D30 / L5-L6"],
    ["38", "BF"],
  ],

  zoomPositions: [102.79, 199.97, 389.03],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "L1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "L2 (-)", fromSurface: "7", toSurface: "14" },
    { text: "L3 (+)", fromSurface: "15", toSurface: "19" },
    { text: "L4 (- / FLOATING)", fromSurface: "21", toSurface: "23" },
    { text: "L5 (+)", fromSurface: "24", toSurface: "30" },
    { text: "L6 (- / FOCUS)", fromSurface: "31", toSurface: "38" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "17", toSurface: "19" },
    { text: "D4", fromSurface: "21", toSurface: "23" },
    { text: "D5", fromSurface: "26", toSurface: "28" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.98,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: Example 2 states that L6 moves imageward for main focus and L4 slightly objectward " +
    "for auxiliary floating correction, but it does not publish complete finite-focus spacing rows or the L4 travel " +
    "magnitude. All authored focus pairs therefore remain at the published infinity values. Canon's marketed 0.98 m " +
    "MFD is metadata only; the patent's 1.0 m near-distance statement is measured from the image plane.",

  /* ── Aperture configuration ── */
  nominalFno: [4.63, 4.94, 5.85],
  fstopSeries: [4.5, 5.6, 8, 11, 16, 22, 32, 40],
  maxFstop: 40,
  apertureBlades: 9,
  apertureBladeRoundedness: 1,

  /* ── Geometry/layout ── */
  gapSagFrac: 0.94,
  yScFill: 0.38,
} satisfies LensDataInput;

export default LENS_DATA;
