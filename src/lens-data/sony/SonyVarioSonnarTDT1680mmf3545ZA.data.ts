import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SONY VARIO-SONNAR T* DT 16-80mm f/3.5-4.5 ZA                         ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: US 2007/0229969 A1, Example 1 (Hiroyuki Matsumoto / Sony Corporation).    ║
 * ║  Production correlation: Sony SAL1680Z; 14 elements / 10 optical groups.           ║
 * ║  Patent moving groups: GR1(+), GR2(-), GR3(+), GR4(+); all move during zoom.        ║
 * ║  Zoom anchors: 16.4 / 35.8 / 78.0 mm; modeled FNo: 3.61 / 4.50 / 4.64.             ║
 * ║  Aspheres: source s7 and s25, stored as 7A and 25A; patent ε=1 -> standard K=0.    ║
 * ║                                                                                      ║
 * ║  FOCUS STATUS: CONSTRAINED_RECONSTRUCTION.                                          ║
 * ║  Patent ¶0350 specifies GR2-only focusing but publishes no finite-object spacings.  ║
 * ║  Close-focus values below are code-solved at the Sony 0.35 m MFD by translating    ║
 * ║  GR2 only and conserving d6+d16 at each zoom anchor.                                ║
 * ║                                                                                      ║
 * ║  CEMENT NORMALIZATION: the patent's four 0.010 mm n=1.51400 adhesive layers are    ║
 * ║  not authored as generic synthetic elements. Their duplicate same-radius planes    ║
 * ║  are removed and each 0.010 mm spacing is absorbed into the downstream modeled     ║
 * ║  element thickness (2->4, 10->12, 19->21, 27->29). Axial stations are preserved.   ║
 * ║  Load-bearing paraxial results and focus spacings were recomputed from this         ║
 * ║  normalized TypeScript prescription, not copied from the Stage-1 raw-cement model. ║
 * ║                                                                                      ║
 * ║  SEMI-DIAMETERS: patent Table 1 does not publish conventional clear apertures.      ║
 * ║  Values are modeling quantities derived from paraxial marginal/chief rays at all   ║
 * ║  W/M/T infinity and 0.35 m states, the patent Y'=14.2 mm field, the project's       ║
 * ║  default 0.60 off-axis trace fraction, Fig. 1 proportions, and geometry limits.    ║
 * ║  7A also encloses the 13.700760 mm effective height implied by patent Table 15.     ║
 * ║  25A encloses the 8.772220 mm effective height implied by patent Table 14.          ║
 * ║  STO.sd is the maximum inferred physical wide-open radius (tele anchor); per-zoom  ║
 * ║  modeled openings are governed by nominalFno.                                       ║
 * ║                                                                                      ║
 * ║  GLASS: the patent supplies only d-line nd/νd coordinates, not vendor names or      ║
 * ║  nC/nF/ng/dPgF. Neutral coordinate codes and qualified catalog-equivalent curves    ║
 * ║  are used without asserting production melts; source line fields remain omitted.    ║
 * ║                                                                                      ║
 * ║  No uniform scaling is applied. No cover glass, filter, dummy plane, or mechanical ║
 * ║  part is included. Condition E's source sign contradiction is documented in audit. ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-vario-sonnar-t-dt-16-80-f3-5-4-5-za",
  maker: "Sony",
  name: "SONY VARIO-SONNAR T* DT 16-80mm f/3.5-4.5 ZA",
  subtitle: "US 2007/0229969 A1 Example 1 — SAL1680Z production correlation",
  specs: [
    "14 ELEMENTS / 10 GROUPS",
    "MARKETED 16-80mm f/3.5-4.5",
    "PATENT 16.4-78.0mm f/3.61-4.64",
    "2 ASPHERICAL SURFACES",
    "0.35 m MFD",
  ],

  focalLengthMarketing: [16, 80],
  focalLengthDesign: [16.40164, 78.042607],
  lensMounts: ["sony-a"],
  imageFormat: "aps-c",
  patentNumber: "US 2007/0229969 A1",
  patentAuthors: ["Hiroyuki Matsumoto"],
  patentAssignees: ["Sony Corporation"],
  patentYear: 2007,
  elementCount: 14,
  groupCount: 10,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: -92.489988,
      glass: "847238 — dense flint coordinate class (vendor non-unique)",
      cemented: "D1",
      role: "Front negative meniscus of GR1; convex surface faces the object.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.835,
      vd: 42.98,
      fl: 80.579571,
      glass: "835430 — high-index lanthanum-flint coordinate class (exact current melt unresolved)",
      cemented: "D1",
      role: "Positive member cemented to L1; completes the weak positive front doublet.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.835,
      vd: 42.98,
      fl: 112.068482,
      glass: "835430 — high-index lanthanum-flint coordinate class (exact current melt unresolved)",
      role: "Rear positive meniscus of GR1; convex surface faces the object.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.76743,
      vd: 49.48,
      fl: -18.727365,
      glass: "M-TAF101 (HOYA catalog-equivalent coefficient proxy; production supplier unspecified)",
      role: "Strong negative front element of GR2; object-side surface 7A is aspherical.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.46,
      fl: 58.2181,
      glass: "805255 — dense flint coordinate class (vendor non-unique)",
      cemented: "D2",
      role: "Positive meniscus in GR2; concave surface faces the object.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.8,
      fl: -17.830349,
      glass: "883408 — lanthanum high-index coordinate class (vendor non-unique)",
      cemented: "D2",
      role: "Strong negative member cemented to L5 in GR2.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.76182,
      vd: 26.61,
      fl: 23.401994,
      glass: "762266 — dense flint coordinate class (vendor non-unique)",
      role: "Positive correction element inside the negative GR2 moving group.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: -44.918916,
      glass: "883408 — lanthanum high-index coordinate class (vendor non-unique)",
      role: "Rear negative meniscus of GR2; concave surface faces the object.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.835,
      vd: 42.98,
      fl: -49.750795,
      glass: "835430 — high-index lanthanum-flint coordinate class (exact current melt unresolved)",
      cemented: "D3",
      role: "Negative member of the compact positive GR3 cemented pair immediately behind the stop.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.56883,
      vd: 56.04,
      fl: 29.756179,
      glass: "569560 — barium crown coordinate class (vendor non-unique)",
      cemented: "D3",
      role: "Positive member cemented to L9; GR3 is net positive.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      fl: 25.108276,
      glass: "517642 — crown coordinate class (vendor non-unique)",
      role: "Front positive element of GR4.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.76743,
      vd: 49.48,
      fl: -55.061242,
      glass: "M-TAF101 (HOYA catalog-equivalent coefficient proxy; production supplier unspecified)",
      role: "Negative GR4 corrector; image-side surface 25A is aspherical.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.32,
      fl: -23.491242,
      glass: "904313 — high-index lanthanum coordinate class (vendor non-unique)",
      cemented: "D4",
      role: "Negative member of the rear GR4 cemented pair.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      fl: 22.31166,
      glass: "517642 — crown coordinate class (vendor non-unique)",
      cemented: "D4",
      role: "Final positive element; cemented to L13.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 800.109, d: 2, nd: 1.84666, elemId: 1, sd: 22.5 },
    { label: "2", R: 71.245, d: 6.758, nd: 1.835, elemId: 2, sd: 22 },
    { label: "4", R: -1157.957, d: 0.15, nd: 1, elemId: 0, sd: 21 },
    { label: "5", R: 54.727, d: 4.937, nd: 1.835, elemId: 3, sd: 19.5 },
    { label: "6", R: 126.408, d: 1.834, nd: 1, elemId: 0, sd: 19.5 },
    { label: "7A", R: 110.474, d: 1.25, nd: 1.76743, elemId: 4, sd: 13.8 },
    { label: "8", R: 12.655, d: 7.351, nd: 1, elemId: 0, sd: 11.3 },
    { label: "9", R: -28.246, d: 2.19, nd: 1.80518, elemId: 5, sd: 8.1 },
    { label: "10", R: -18.235, d: 1.01, nd: 1.883, elemId: 6, sd: 7.8 },
    { label: "12", R: 118.256, d: 0.915, nd: 1, elemId: 0, sd: 7.8 },
    { label: "13", R: 48.829, d: 3.562, nd: 1.76182, elemId: 7, sd: 7.9 },
    { label: "14", R: -27.195, d: 1.773, nd: 1, elemId: 0, sd: 8.1 },
    { label: "15", R: -18.148, d: 1.2, nd: 1.883, elemId: 8, sd: 9 },
    { label: "16", R: -34.493, d: 16.744, nd: 1, elemId: 0, sd: 9 },
    { label: "STO", R: 1e15, d: 0.852, nd: 1, elemId: 0, sd: 7.955325 },
    { label: "18", R: 29.796, d: 1, nd: 1.835, elemId: 9, sd: 9 },
    { label: "19", R: 17.086, d: 4.034, nd: 1.56883, elemId: 10, sd: 9 },
    { label: "21", R: -1654.917, d: 10.106, nd: 1, elemId: 0, sd: 9 },
    { label: "22", R: 16.419, d: 6.949, nd: 1.5168, elemId: 11, sd: 9 },
    { label: "23", R: -52.956, d: 0.98, nd: 1, elemId: 0, sd: 9 },
    { label: "24", R: -591.972, d: 1.685, nd: 1.76743, elemId: 12, sd: 9 },
    { label: "25A", R: 45.56, d: 2.536, nd: 1, elemId: 0, sd: 9 },
    { label: "26", R: -772.135, d: 1.4, nd: 1.90366, elemId: 13, sd: 9 },
    { label: "27", R: 21.847, d: 6.758, nd: 1.5168, elemId: 14, sd: 9 },
    { label: "29", R: -21.845, d: 37.255045, nd: 1, elemId: 0, sd: 10.6 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "7A": {
      K: 0,
      A4: 0.2383e-4,
      A6: -0.50335e-7,
      A8: 0.17795e-9,
      A10: -0.65132e-12,
      A12: 0.16069e-14,
      A14: 0,
    },
    "25A": {
      K: 0,
      A4: 0.54171e-4,
      A6: 0.13027e-6,
      A8: -0.14452e-9,
      A10: 0.69268e-11,
      A12: 0.2553e-13,
      A14: 0,
    },
  },

  /* ── Zoom and constrained-focus spacings ── */
  zoomPositions: [16.4, 35.8, 78],
  zoomLabels: ["Wide", "Tele"],
  var: {
    "6": [
      [1.834, 0.664708],
      [19.221, 17.366452],
      [37.207, 33.766439],
    ],
    "16": [
      [16.744, 17.913292],
      [6.805, 8.659548],
      [0.8, 4.240561],
    ],
    "21": [
      [10.106, 10.106],
      [2.973, 2.973],
      [0.6, 0.6],
    ],
    "29": [
      [37.255045, 37.255045],
      [53.423043, 53.423043],
      [72.831368, 72.831368],
    ],
  },
  varLabels: [
    ["6", "D6 / GR1-GR2"],
    ["16", "D16 / GR2-GR3"],
    ["21", "D21 / GR3-GR4"],
    ["29", "BF"],
  ],

  groups: [
    { text: "GR1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "GR2 (-)", fromSurface: "7A", toSurface: "16" },
    { text: "GR3 (+)", fromSurface: "STO", toSurface: "21" },
    { text: "GR4 (+)", fromSurface: "22", toSurface: "29" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "4" },
    { text: "D2", fromSurface: "9", toSurface: "12" },
    { text: "D3", fromSurface: "18", toSurface: "21" },
    { text: "D4", fromSurface: "26", toSurface: "29" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.35,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: patent ¶0350 specifies GR2-only focusing. Close-focus pairs are code-solved " +
    "at the Sony 0.35 m MFD with d6+d16 conserved at each zoom anchor; they are not " +
    "patent-published finite-object rows.",

  /* ── Aperture configuration ── */
  nominalFno: [3.61, 4.5, 4.64],
  fstopSeries: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22, 29],
  apertureBlades: 7,
  maxFstop: 29,

  /* ── Layout tuning ── */
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
