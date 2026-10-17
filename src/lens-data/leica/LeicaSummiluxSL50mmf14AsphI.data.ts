import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  - Sensor-cover/filter plate PT (source surfaces 22–23: 1.410 mm,         ║
 * ║    nd 1.51680, νd 64.20) and its 0.800 mm air gap to the image are        ║
 * ║    modeled in `rearPlates` (traced, not drawn). S21A keeps the            ║
 * ║    patent's 21.790 mm physical gap to PT.                                 ║
 * ║  - STO physical semi-diameter is not published. The stop radius is        ║
 * ║    derived from the design f-number (the source POS1 modeled              ║
 * ║    Fno = 1.440); it is not an independent source measurement.             ║
 * ║  - Surface semi-diameters are MODELED, not patent-listed. They were sized ║
 * ║    from exact meridional/Snell axial marginal rays with clearance, then   ║
 * ║    checked against edge thickness, actual rim slope, conic domain,        ║
 * ║    shared-gap intrusion, and representative off-axis bundles.             ║
 * ║  - The rounded patent prescription retains a 0.075–0.085 mm paraxial     ║
 * ║    image-plane residual. No radius or spacing is altered to suppress it.  ║
 * ║  - Glass labels are coordinate classes. Supplier/melt identity and        ║
 * ║    element-specific line-index/APD data are not established by the patent.║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * MTF source audit: Example 1 pp. 10–11 values match, including all four
 * aspheres and PT (1.410 mm, nd=1.51680, νd=64.20, rear air 0.800 mm).
 * EFL 51.962733 vs 51.964; paraxial focus is 0.075274 mm behind the
 * published image plane. No source-supported correction or explicit designer
 * best-focus convention found. Retain the printed physical path.
 */

// FIG. 1 optical-rim audit: S1 = 26.5 mm; S20A = 21.5 mm; S21A = 19.5 mm, capped below its slope reversal. Other SDs retain ray-envelope estimates.
const LENS_DATA = {
  schema: 2,
  key: "leica-summilux-sl-50mm-f14-asph-i",
  maker: "Leica",
  name: "LEICA SUMMILUX-SL 50mm f/1.4 ASPH. I",
  subtitle: "EP 3 136 147 A1 · Example 1 · original 2016/2017-generation correlation (strong inference)",

  catalog: {
    lensMounts: ["l-mount"],
    imageFormat: "135-full-frame",
    specs: [
      "11 ELEMENTS / 9 GROUPS",
      "f ≈ 51.963 mm (DESIGN)",
      "F/1.440 (MODELED)",
      "2ω = 45.218° (POS1)",
      "4 ASPHERICAL SURFACES",
    ],
    elementCount: 11,
    groupCount: 9,
    focalLengthMm: { marketing: 50, design: 51.9627332783 },
    fNumber: { marketing: 1.4, design: 1.44 },
  },

  source: {
    patentNumber: "EP 3 136 147 A1",
    patentYear: 2017,
    authors: ["Daisuke Tanahashi", "Yoshihito Souma"],
    assignees: ["Konica Minolta, Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Negative Meniscus, convex to object",
      nd: 1.5168,
      vd: 64.17,
      indexReference: "d",
      focalLengthMm: -125.0422970077,
      glass: "H-K9L class (coordinate-compatible spectral proxy; coordinate code 517642; supplier/melt unproven)",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Biconcave Negative",
      nd: 1.74077,
      vd: 27.76,
      indexReference: "d",
      focalLengthMm: -30.7134843848,
      glass: "E-FD13 class (coordinate-compatible spectral proxy; coordinate code 741278; supplier/melt unproven)",
      diagramLabel: "L12",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.46,
      indexReference: "d",
      focalLengthMm: 41.3275746384,
      glass: "J-LAK14 class (coordinate-compatible spectral proxy; coordinate code 697555; supplier/melt unproven)",
      diagramLabel: "L13",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L14",
      label: "Element L14",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      indexReference: "d",
      focalLengthMm: 56.1530139809,
      glass: "N-SF66 class (coordinate-compatible spectral proxy; coordinate code 923209; supplier/melt unproven)",
      diagramLabel: "L14",
    },
    {
      id: 5,
      name: "L15",
      label: "Element L15",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.62,
      indexReference: "d",
      focalLengthMm: 43.503436883,
      glass: "FCD515 class (coordinate-compatible spectral proxy; coordinate code 593686; supplier/melt unproven)",
      diagramLabel: "L15",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L16",
      label: "Element L16",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.32,
      indexReference: "d",
      focalLengthMm: -25.4363415868,
      glass: "H-ZF4A class (coordinate-compatible spectral proxy; coordinate code 728283; supplier/melt unproven)",
      diagramLabel: "L16",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L21",
      label: "Element L21",
      type: "Positive Meniscus, convex to object",
      nd: 1.83481,
      vd: 42.72,
      indexReference: "d",
      focalLengthMm: 84.6799354232,
      glass: "S-LAH55 class (coordinate-compatible spectral proxy; coordinate code 835427; supplier/melt unproven)",
      diagramLabel: "L21",
    },
    {
      id: 8,
      name: "L22",
      label: "Element L22",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.61,
      indexReference: "d",
      focalLengthMm: -33.939174957,
      glass: "J-SF14 class (coordinate-compatible spectral proxy; coordinate code 762266; supplier/melt unproven)",
      diagramLabel: "L22",
    },
    {
      id: 9,
      name: "L23",
      label: "Element L23",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.73077,
      vd: 40.51,
      indexReference: "d",
      focalLengthMm: 34.498637809,
      glass: "L-LAM69 class (coordinate-compatible spectral proxy; coordinate code 731405; supplier/melt unproven)",
      diagramLabel: "L23",
    },
    {
      id: 10,
      name: "L31",
      label: "Element L31",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.05,
      indexReference: "d",
      focalLengthMm: -59.885368254,
      glass: "E-FD15 class (coordinate-compatible spectral proxy; coordinate code 699301; supplier/melt unproven)",
      diagramLabel: "L31",
    },
    {
      id: 11,
      name: "L32",
      label: "Element L32",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.8086,
      vd: 40.42,
      indexReference: "d",
      focalLengthMm: 48.6832461291,
      glass: "L-LAH84 class (coordinate-compatible spectral proxy; native d 1.8086/40.42; supplier/melt unproven)",
      diagramLabel: "L32",
    },
  ],

  surfaces: [
    { label: "1", R: 130.905, d: 2.4, sd: 26.5, medium: 1 },
    { label: "2", R: 42.994, d: 17.142, sd: 23.4 },
    { label: "3", R: -37.064, d: 2.277, sd: 23.0, medium: 2 },
    { label: "4", R: 60.459, d: 15.182, sd: 27.6, medium: 3 },
    { label: "5", R: -49.318, d: 0.3, sd: 27.3 },
    { label: "6", R: 65.854, d: 9.237, sd: 29.5, medium: 4 },
    { label: "7", R: -226.822, d: 0.3, sd: 29.5 },
    { label: "8", R: 33.813, d: 14.873, sd: 24.8, medium: 5 },
    { label: "9", R: -90.894, d: 3.936, sd: 24.8, medium: 6 },
    { label: "10", R: 23.69, d: 9.901, sd: 20.8 },
    { label: "STO", R: "flat" },
    { label: "12", R: 42.044, d: 2.622, sd: 17.5, medium: 7 },
    { label: "13", R: 100.805, d: 5.363, sd: 16.4 },
    { label: "14", R: -38.554, d: 1.3, sd: 16.0, medium: 8 },
    { label: "15", R: 79.645, d: 1.849, sd: 17.0 },
    {
      label: "16A",
      R: 100.609,
      d: 6.914,
      sd: 17.8,
      medium: 9,
      asphere: { K: 0, A4: -1.3716e-6, A6: 6.8119e-9, A8: 0, A10: 0, A12: 0, A14: 0, A16: 0 },
    },
    {
      label: "17A",
      R: -32.664,
      sd: 18.2,
      asphere: { K: 0, A4: 2.6675e-6, A6: 5.9131e-9, A8: -8.3101e-12, A10: 1.7159e-14, A12: 0, A14: 0, A16: 0 },
    },
    { label: "18", R: -73.645, d: 1.9, sd: 18.0, medium: 10 },
    { label: "19", R: 98.001, d: 1.5, sd: 18.0 },
    {
      label: "20A",
      R: 69.849,
      d: 6.526,
      sd: 21.5,
      medium: 11,
      asphere: { K: 0, A4: 8.1707e-7, A6: 6.9086e-9, A8: 0, A10: 0, A12: 0, A14: 0, A16: 0 },
    },
    // Last surface: patent gap to the plane-parallel plate PT
    {
      label: "21A",
      R: -86.432,
      d: 21.79,
      sd: 19.5,
      asphere: { K: 0, A4: 1.5593e-6, A6: 5.537e-9, A8: 1.095e-11, A10: -6.5642e-15, A12: 0, A14: 0, A16: 0 },
    },
  ],

  focus: {
    closeFocusM: 0.6,
    keyframes: [0, 0.6, 1],
    description:
      "PUBLISHED inner focus: Gr1 and Gr3 remain fixed while Gr2 moves objectward. POS1 = infinity, POS2 = 1.0 m at focusT = 0.6, POS3 = 0.6 m at focusT = 1. Piecewise interpolation between those source states is modeling.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    STO: { label: "D11", values: [[10.989, 6.424, 2.867]] },
    "17A": { label: "D17", values: [[3.491, 8.055, 11.613]] },
  },

  aperture: { nominalFNumber: 1.44, fStops: [1.44, 2, 2.8, 4, 5.6, 8, 11, 16] },

  /* ── Plane-parallel plate PT (patent surfaces 22–23): traced, not drawn ── */
  rearPlates: [
    {
      label: "PT",
      thicknessMm: 1.41,
      nd: 1.5168,
      vd: 64.2,
      glass: "H-K9L",
      gapAfterMm: 0.8,
      source: "EP 3 136 147 A1, Example 1 [0057] surfaces 22–23",
    },
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

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
