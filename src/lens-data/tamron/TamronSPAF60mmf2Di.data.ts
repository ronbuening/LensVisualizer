import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║   LENS DATA — TAMRON SP AF 60mm f/2 Di II LD [IF] MACRO 1:1 (G005)     ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2011/0286116 A1, Embodiment 1 (Tamron).                ║
 * ║  Patent prescription: 14 elements / 10 groups, all spherical.           ║
 * ║  Focus: G1 and G4 fixed; G2 moves imageward; G3 moves objectward;        ║
 * ║         the stop remains fixed.                                          ║
 * ║                                                                            ║
 * ║  PRODUCTION-MATCH CAVEAT:                                                 ║
 * ║    The manufacturer specifications, format, architecture, focus motion,   ║
 * ║    and element/group count strongly associate this patent family with     ║
 * ║    Model G005. The official Tamron construction diagram, however, shades  ║
 * ║    the second and fourth elements as LD, whereas Embodiment 1 assigns     ║
 * ║    its two νd = 81.6 glasses to the third and fifth elements. This file   ║
 * ║    is therefore a patent-derived production proxy, not a claim that the   ║
 * ║    numerical prescription is the factory production master.              ║
 * ║                                                                            ║
 * ║  NOTE ON SCALING:                                                         ║
 * ║    None. The patent's f = 61.500 mm prescription is retained verbatim.    ║
 * ║                                                                            ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                  ║
 * ║    The patent does not publish clear semi-diameters. Values were inferred ║
 * ║    from paraxial marginal/chief-ray envelopes and the official Tamron     ║
 * ║    construction drawing, then constrained for renderer safety:           ║
 * ║    sd/|R| < 0.90, element edge thickness >= 0.50 mm, front/rear SD ratio  ║
 * ║    <= 1.25, and at least 10% residual rim clearance across air gaps.      ║
 * ║    The especially tight gap between surfaces 11 and 12 binds the G2 SD.   ║
 * ║    These SDs are visualization estimates, not patent-published apertures. ║
 * ║                                                                            ║
 * ║  IMPORTANT: This file describes only the optical design.                 ║
 * ║    Sensor cover glass, filters, and mechanical parts are excluded.        ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "tamron-sp-af-60mm-f2-di-ii-macro",
  maker: "Tamron",
  name: "TAMRON SP AF 60mm f/2 Di II LD [IF] MACRO 1:1 (G005)",
  subtitle: "US 2011/0286116 A1 EMBODIMENT 1 — PATENT PROXY",
  specs: [
    "14 ELEMENTS / 10 GROUPS",
    "60mm f/2 (MARKETED)",
    "f = 61.500mm, FNO. = 2.06 (PATENT)",
    "2ω = 26.6°",
    "1:1 INNER FOCUS",
    "ALL SPHERICAL",
  ],

  focalLengthMarketing: 60,
  focalLengthDesign: 61.4996,
  apertureMarketing: 2,
  apertureDesign: 2.06,
  lensMounts: ["canon-ef", "nikon-f", "sony-a"],
  imageFormat: "aps-c",
  patentYear: 2011,
  elementCount: 14,
  groupCount: 10,

  /* ── Elements ──
   * Focal lengths are standalone, in-air thick-element values. For cemented
   * assemblies, these values are not the same as each component's in-situ
   * contribution; the net assembly powers are documented in the analysis.
   * Spectral indices are catalog-derived, not published in the patent.
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 33.3,
      fl: 150.168,
      glass: "NBFD15 (HOYA)",
      nC: 1.79902,
      nF: 1.82324,
      ng: 1.8375,
      dPgF: 0.00093,
      role: "Weak front positive collector; high index limits curvature for its power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.9,
      fl: 103.947,
      glass: "S-LAH53 (OHARA)",
      nC: 1.80024,
      nF: 1.81996,
      ng: 1.83117,
      dPgF: -0.00651,
      role: "Second positive collector in the fixed first group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 58.696,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "Catalog-derived dPgF = +0.03194; patent lists only nd and νd.",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.03194,
      role: "Low-dispersion positive member of the first-group cemented doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      fl: -41.996,
      glass: "S-TIH4 (OHARA)",
      nC: 1.7473,
      nF: 1.77475,
      ng: 1.7915,
      dPgF: 0.01267,
      role: "High-dispersion negative partner in the first-group cemented doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 64.788,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "Catalog-derived dPgF = +0.03194; patent lists only nd and νd.",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      dPgF: 0.03194,
      role: "Second low-dispersion positive element in the fixed first group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.804,
      vd: 46.6,
      fl: -25.569,
      glass: "S-LAH65V (OHARA)",
      nC: 1.79882,
      nF: 1.81608,
      ng: 1.82569,
      dPgF: -0.00867,
      role: "Primary negative singlet of the imageward-moving second group.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.2,
      fl: -36.4,
      glass: "BSC7 (HOYA)",
      nC: 1.51432,
      nF: 1.52237,
      ng: 1.52667,
      dPgF: -0.00165,
      role: "Negative crown member of the second-group cemented pair.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus, convex to object",
      nd: 1.84666,
      vd: 23.8,
      fl: 38.733,
      glass: "S-TIH53 (OHARA)",
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
      dPgF: 0.01653,
      role: "Positive high-dispersion member that nearly neutralizes D2's net power.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      fl: 59.524,
      glass: "S-LAL14 (OHARA)",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
      dPgF: -0.00697,
      role: "Leading positive singlet of the objectward-moving third group.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 34.086,
      glass: "S-LAH66N (OHARA)",
      nC: 1.76779,
      nF: 1.78338,
      ng: 1.79199,
      dPgF: -0.00818,
      role: "Strong positive member of the third-group cemented doublet.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.72825,
      vd: 28.5,
      fl: -27.009,
      glass: "S-TIH10 (OHARA)",
      nC: 1.72086,
      nF: 1.74645,
      ng: 1.762,
      dPgF: 0.01173,
      role: "Negative high-dispersion partner in the third-group cemented doublet.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      fl: 43.597,
      glass: "S-LAL14 (OHARA)",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
      dPgF: -0.00697,
      role: "Trailing positive singlet of the third group.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.54072,
      vd: 47.2,
      fl: -46.016,
      glass: "S-TIL2 (OHARA)",
      nC: 1.5373,
      nF: 1.54875,
      ng: 1.55522,
      dPgF: 0.00071,
      role: "Negative member of the fixed trailing cemented group.",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus, convex to object",
      nd: 1.84666,
      vd: 23.8,
      fl: 99.465,
      glass: "S-TIH53 (OHARA)",
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
      dPgF: 0.01653,
      role: "Positive high-dispersion member of the fixed negative trailing group.",
      cemented: "D4",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 607.1412, d: 2.8588, nd: 1.8061, elemId: 1, sd: 22.5 },
    { label: "2", R: -150.8774, d: 0.2, nd: 1, elemId: 0, sd: 22.5 },
    { label: "3", R: 106.5613, d: 3.2664, nd: 1.8061, elemId: 2, sd: 20.8 },
    { label: "4", R: -386.7796, d: 0.2, nd: 1, elemId: 0, sd: 20.8 },
    { label: "5", R: 52.1704, d: 5.9043, nd: 1.497, elemId: 3, sd: 17.2 },
    { label: "6", R: -63.6877, d: 1.2, nd: 1.7552, elemId: 4, sd: 17.2 },
    { label: "7", R: 63.6877, d: 0.2, nd: 1, elemId: 0, sd: 17.2 },
    { label: "8", R: 33.344, d: 4.0301, nd: 1.497, elemId: 5, sd: 14.5 },
    { label: "9", R: -900.5149, d: 1.5848, nd: 1, elemId: 0, sd: 14.5 },
    { label: "10", R: -141.8233, d: 1.2, nd: 1.804, elemId: 6, sd: 12.0 },
    { label: "11", R: 24.1327, d: 3.7206, nd: 1, elemId: 0, sd: 10.3 },
    { label: "12", R: -53.8762, d: 1, nd: 1.5168, elemId: 7, sd: 10.3 },
    { label: "13", R: 29.0865, d: 3.3409, nd: 1.84666, elemId: 8, sd: 12.0 },
    { label: "14", R: 243.7428, d: 17.2873, nd: 1, elemId: 0, sd: 12.0 },
    { label: "STO", R: 1e15, d: 13.2179, nd: 1, elemId: 0, sd: 12.5408 },
    { label: "16", R: 229.923, d: 3.862, nd: 1.6968, elemId: 9, sd: 14.0 },
    { label: "17", R: -50.2559, d: 0.2, nd: 1, elemId: 0, sd: 14.0 },
    { label: "18", R: 62.0642, d: 5.3744, nd: 1.7725, elemId: 10, sd: 14.0 },
    { label: "19", R: -44.0094, d: 1.2, nd: 1.72825, elemId: 11, sd: 14.0 },
    { label: "20", R: 35.9734, d: 1.69, nd: 1, elemId: 0, sd: 14.0 },
    { label: "21", R: 45.2188, d: 4.7774, nd: 1.6968, elemId: 12, sd: 14.0 },
    { label: "22", R: -88.548, d: 1.8205, nd: 1, elemId: 0, sd: 14.0 },
    { label: "23", R: -58.5066, d: 1, nd: 1.54072, elemId: 13, sd: 12.5 },
    { label: "24", R: 43.5528, d: 2.321, nd: 1.84666, elemId: 14, sd: 12.5 },
    { label: "25", R: 88, d: 41.7724, nd: 1, elemId: 0, sd: 12.5 },
  ],

  asph: {},

  /* Patent table endpoints: infinity and 1:1. The published 5:1 state is
   * interpreted in the companion analysis but cannot be represented by the
   * two-endpoint prime-lens `var` structure without adding an unsupported
   * intermediate focus control point.
   */
  var: {
    "9": [1.5848, 17.4252],
    "14": [17.2873, 1.447],
    STO: [13.2179, 1.5],
    "22": [1.8205, 13.5384],
  },
  varLabels: [
    ["9", "D(9)"],
    ["14", "D(14)"],
    ["STO", "D(15)"],
    ["22", "D(22)"],
  ],

  groups: [
    { text: "G1 (+) FIXED", fromSurface: "1", toSurface: "9" },
    { text: "G2 (-) FOCUS", fromSurface: "10", toSurface: "14" },
    { text: "G3 (+) FOCUS", fromSurface: "16", toSurface: "22" },
    { text: "G4 (-) FIXED", fromSurface: "23", toSurface: "25" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "12", toSurface: "14" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
  ],

  closeFocusM: 0.23,
  focusDescription:
    "Inner focus: G1 and G4 remain fixed; G2 travels 15.8404 mm imageward and G3 travels 11.7179 mm objectward from infinity to 1:1; the stop remains fixed.",

  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  apertureBlades: 7,

  /* Tight patent clearances require a conservative representative off-axis fan. */
  offAxisFieldFrac: 0.35,
  offAxisFractions: [-0.65, -0.325, 0, 0.325, 0.65],
  scFill: 0.62,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
