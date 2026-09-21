import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — LEICA SUMMILUX-SL 50mm f/1.4 ASPH. I                          ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: EP 3 136 147 A1, Example 1 (Konica Minolta, Inc.).              ║
 * ║  Correlation: strong inference for the original 2016/2017 Leica lens;     ║
 * ║  no manufacturer source explicitly identifies this patent/example.        ║
 * ║  11 elements / 9 glass groups; 3 positive-power functional groups.        ║
 * ║  Focus status: PUBLISHED. Gr2 alone moves objectward. POS1/POS2/POS3      ║
 * ║  are preserved at focusT 0/0.6/1; interpolation between them is modeling. ║
 * ║                                                                            ║
 * ║  MODEL TRANSFORMATIONS                                                     ║
 * ║  - No uniform scale is applied. Patent design and marketing values remain ║
 * ║    separate.                                                               ║
 * ║  - Sensor-cover/filter plate PT (source surfaces 22–23) is omitted.       ║
 * ║    Source S21-to-image path 21.790 mm air + 1.410 mm / 1.51680 glass +   ║
 * ║    0.800 mm air becomes 23.5195886076 mm air-equivalent spacing.          ║
 * ║  - STO physical semi-diameter is not published. The 15.4255966010 mm     ║
 * ║    value is calibrated to the source POS1 modeled Fno = 1.440 using the  ║
 * ║    computed entrance-pupil magnification; it is not an independent source ║
 * ║    measurement.                                                            ║
 * ║  - Surface semi-diameters are MODELED, not patent-listed. They were sized ║
 * ║    from exact meridional/Snell axial marginal rays with clearance, then   ║
 * ║    checked against edge thickness, actual rim slope, conic domain,        ║
 * ║    shared-gap intrusion, and representative off-axis bundles.             ║
 * ║  - The rounded patent prescription retains a 0.075–0.085 mm paraxial     ║
 * ║    image-plane residual. No radius or spacing is altered to suppress it.  ║
 * ║  - Glass labels are coordinate classes. Supplier/melt identity and        ║
 * ║    element-specific line-index/APD data are not established by the patent.║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

// FIG. 1 optical-rim audit: S1 = 26.5 mm; S20A = 21.5 mm; S21A = 19.5 mm, capped below its slope reversal. Other SDs retain ray-envelope estimates.
const LENS_DATA = {
  key: "leica-summilux-sl-50mm-f14-asph-i",
  maker: "Leica",
  name: "LEICA SUMMILUX-SL 50mm f/1.4 ASPH. I",
  subtitle: "EP 3 136 147 A1 · Example 1 · original 2016/2017-generation correlation (strong inference)",
  specs: [
    "11 ELEMENTS / 9 GROUPS",
    "f ≈ 51.963 mm (DESIGN)",
    "F/1.440 (MODELED)",
    "2ω = 45.218° (POS1)",
    "4 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 50,
  focalLengthDesign: 51.9627332783,
  apertureMarketing: 1.4,
  apertureDesign: 1.44,
  lensMounts: ["l-mount"],
  imageFormat: "135-full-frame",
  patentNumber: "EP 3 136 147 A1",
  patentAuthors: ["Daisuke Tanahashi", "Yoshihito Souma"],
  patentAssignees: ["Konica Minolta, Inc."],
  patentYear: 2017,
  elementCount: 11,
  groupCount: 9,

  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element L11",
      type: "Negative Meniscus, convex to object",
      nd: 1.5168,
      vd: 64.17,
      indexReference: "d",
      fl: -125.0422970077,
      glass: "517642 class (supplier/melt unproven)",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element L12",
      type: "Biconcave Negative",
      nd: 1.74077,
      vd: 27.76,
      indexReference: "d",
      fl: -30.7134843848,
      glass: "741278 class (supplier/melt unproven)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "Element L13",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.46,
      indexReference: "d",
      fl: 41.3275746384,
      glass: "697555 class (supplier/melt unresolved)",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L14",
      diagramLabel: "L14",
      label: "Element L14",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      indexReference: "d",
      fl: 56.1530139809,
      glass: "923209 class (supplier/melt unproven)",
    },
    {
      id: 5,
      name: "L15",
      diagramLabel: "L15",
      label: "Element L15",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      indexReference: "d",
      fl: 43.503436883,
      glass: "593686 class (low-dispersion family; supplier/melt unresolved)",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L16",
      diagramLabel: "L16",
      label: "Element L16",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.32,
      indexReference: "d",
      fl: -25.4363415868,
      glass: "728283 class (supplier/melt unproven)",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L21",
      diagramLabel: "L21",
      label: "Element L21",
      type: "Positive Meniscus, convex to object",
      nd: 1.83481,
      vd: 42.72,
      indexReference: "d",
      fl: 84.6799354232,
      glass: "835427 class (supplier/melt unproven)",
    },
    {
      id: 8,
      name: "L22",
      diagramLabel: "L22",
      label: "Element L22",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.61,
      indexReference: "d",
      fl: -33.939174957,
      glass: "762266 class (supplier/melt unproven)",
    },
    {
      id: 9,
      name: "L23",
      diagramLabel: "L23",
      label: "Element L23",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.73077,
      vd: 40.51,
      indexReference: "d",
      fl: 34.498637809,
      glass: "731405 class (supplier/melt unresolved)",
    },
    {
      id: 10,
      name: "L31",
      diagramLabel: "L31",
      label: "Element L31",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.05,
      indexReference: "d",
      fl: -59.885368254,
      glass: "699301 class (supplier/melt unproven)",
    },
    {
      id: 11,
      name: "L32",
      diagramLabel: "L32",
      label: "Element L32",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.8086,
      vd: 40.42,
      indexReference: "d",
      fl: 48.6832461291,
      glass: "L-LAH84 class (coordinate-compatible spectral proxy; native d 1.8086/40.42; supplier/melt unproven)",
    },
  ],

  surfaces: [
    { label: "1", R: 130.905, d: 2.4, nd: 1.5168, elemId: 1, sd: 26.5 },
    { label: "2", R: 42.994, d: 17.142, nd: 1.0, elemId: 0, sd: 23.4 },
    { label: "3", R: -37.064, d: 2.277, nd: 1.74077, elemId: 2, sd: 23.0 },
    { label: "4", R: 60.459, d: 15.182, nd: 1.6968, elemId: 3, sd: 27.6 },
    { label: "5", R: -49.318, d: 0.3, nd: 1.0, elemId: 0, sd: 27.3 },
    { label: "6", R: 65.854, d: 9.237, nd: 1.92286, elemId: 4, sd: 29.5 },
    { label: "7", R: -226.822, d: 0.3, nd: 1.0, elemId: 0, sd: 29.5 },
    { label: "8", R: 33.813, d: 14.873, nd: 1.59282, elemId: 5, sd: 28.0 },
    { label: "9", R: -90.894, d: 3.936, nd: 1.72825, elemId: 6, sd: 24.8 },
    { label: "10", R: 23.69, d: 9.901, nd: 1.0, elemId: 0, sd: 20.8 },
    { label: "STO", R: 1e15, d: 10.989, nd: 1.0, elemId: 0, sd: 15.425596601 },
    { label: "12", R: 42.044, d: 2.622, nd: 1.83481, elemId: 7, sd: 17.5 },
    { label: "13", R: 100.805, d: 5.363, nd: 1.0, elemId: 0, sd: 16.4 },
    { label: "14", R: -38.554, d: 1.3, nd: 1.76182, elemId: 8, sd: 16.0 },
    { label: "15", R: 79.645, d: 1.849, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "16A", R: 100.609, d: 6.914, nd: 1.73077, elemId: 9, sd: 17.8 },
    { label: "17A", R: -32.664, d: 3.491, nd: 1.0, elemId: 0, sd: 18.2 },
    { label: "18", R: -73.645, d: 1.9, nd: 1.69895, elemId: 10, sd: 18.0 },
    { label: "19", R: 98.001, d: 1.5, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "20A", R: 69.849, d: 6.526, nd: 1.8086, elemId: 11, sd: 21.5 },
    { label: "21A", R: -86.432, d: 23.5195886076, nd: 1.0, elemId: 0, sd: 19.5 },
  ],

  asph: {
    "16A": {
      K: 0,
      A4: -1.3716e-6,
      A6: 6.8119e-9,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
      A16: 0,
    },
    "17A": {
      K: 0,
      A4: 2.6675e-6,
      A6: 5.9131e-9,
      A8: -8.3101e-12,
      A10: 1.7159e-14,
      A12: 0,
      A14: 0,
      A16: 0,
    },
    "20A": {
      K: 0,
      A4: 8.1707e-7,
      A6: 6.9086e-9,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
      A16: 0,
    },
    "21A": {
      K: 0,
      A4: 1.5593e-6,
      A6: 5.537e-9,
      A8: 1.095e-11,
      A10: -6.5642e-15,
      A12: 0,
      A14: 0,
      A16: 0,
    },
  },

  focusPositions: [0, 0.6, 1],
  var: {
    STO: [10.989, 6.424, 2.867],
    "17A": [3.491, 8.055, 11.613],
  },
  varLabels: [
    ["STO", "D11"],
    ["17A", "D17"],
  ],

  groups: [
    { text: "Gr1 (+)", fromSurface: "1", toSurface: "10" },
    { text: "Gr2 (+) FOCUS", fromSurface: "12", toSurface: "17A" },
    { text: "Gr3 (+)", fromSurface: "18", toSurface: "21A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  closeFocusM: 0.6,
  focusDescription:
    "PUBLISHED inner focus: Gr1 and Gr3 remain fixed while Gr2 moves objectward. POS1 = infinity, POS2 = 1.0 m at focusT = 0.6, POS3 = 0.6 m at focusT = 1. Piecewise interpolation between those source states is modeling.",

  nominalFno: 1.44,
  fstopSeries: [1.44, 2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
