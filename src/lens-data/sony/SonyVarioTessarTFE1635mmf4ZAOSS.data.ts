import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — SONY VARIO-TESSAR T* FE 16-35mm f/4 ZA OSS                                             ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 2015-166834 A, Numerical Example 1 (Sony Corporation; Masaharu Hosoi).                   ║
 * ║ Correlation: Sony SEL1635Z Vario-Tessar T* FE 16-35mm F4 ZA OSS.                                   ║
 * ║ Patent prescription retained at native scale: f = 16.48 / 24.07 / 33.95 mm; Fno = 4.07/4.08/4.09. ║
 * ║ Physical count: 12 lenses / 10 air-separated lens units; four moving zoom groups; 8 aspheres.      ║
 * ║ Modeling count: 13 element entries because the bonded L12 aspheric resin is optically distinct.    ║
 * ║                                                                                                      ║
 * ║ Zoom variables: D9, D15, D17, BF. D9 and BF are zoom-only. D15/D17 are zoom + focus.                ║
 * ║ Focus status: CONSTRAINED_RECONSTRUCTION. The patent states GR3 alone translates for focus but      ║
 * ║ publishes no close-focus row. Close states solve GR3 at Sony's 0.28 m MFD while conserving D15+D17.║
 * ║                                                                                                      ║
 * ║ Source correction: JP ¶0033 prints a dimensionally invalid y²c² asphere numerator. Computation and  ║
 * ║ this file use the standard c·y² numerator; K is otherwise retained without conversion.             ║
 * ║ Source contradiction: JP ¶0032 calls n the d-line index, but the mineral-glass n values behave      ║
 * ║ like catalog n_e while ν behaves like ν_d. Raw patent n/ν pairs are preserved for prescription      ║
 * ║ reproduction. No indexReference value can truthfully encode this mixed coordinate pair.             ║
 * ║ Glass labels are therefore Unmatched/class-level annotations, not vendor-melt identifications.       ║
 * ║ nC/nF/ng/dPgF are not authored because the source does not publish them and no exact catalog melt    ║
 * ║ is defensible. A14=0 is a schema-required modeling zero; the patent publishes coefficients through A12.║
 * ║                                                                                                      ║
 * ║ Semi-diameters are modeled, not patent-published. They were derived from real sequential ray bundles ║
 * ║ at all three zoom states and both focus endpoints, including on-axis marginal rays and full-field    ║
 * ║ chief/fan rays, then checked for edge thickness, actual aspheric rim slope, shared-gap intrusion,     ║
 * ║ and conic limits. STO.sd is the maximum modeled wide-open iris radius (tele); nominalFno controls     ║
 * ║ operational opening is ~6.535 / 7.603 / 8.959 mm at wide/mid/tele; STO.sd adds clearance.            ║
 * ║ No sensor cover glass, filters, inactive dummy planes, or mechanical parts are included.             ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-vario-tessar-t-fe-16-35-f4-za-oss-jp2015166834-ex1",
  maker: "Sony",
  name: "SONY VARIO-TESSAR T* FE 16-35mm f/4 ZA OSS",
  subtitle: "JP 2015-166834 A Example 1 — production correlation to SEL1635Z",
  specs: [
    "12 ELEMENTS / 10 GROUPS",
    "PATENT f = 16.48 / 24.07 / 33.95 mm",
    "DESIGN FNO = 4.07 / 4.08 / 4.09",
    "PATENT 2ω = 108.08° / 83.10° / 63.60°",
    "8 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: [16, 35],
  // Exact endpoint EFLs recomputed from the source-precision prescription; zoomPositions retain Table 2 labels.
  focalLengthDesign: [16.481322652906012, 33.95489547260946],
  apertureMarketing: 4,
  // Wide-position design value; the exact per-zoom design values are in nominalFno below.
  apertureDesign: 4.07,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2015-166834 A",
  patentAuthors: ["Masaharu Hosoi"],
  patentAssignees: ["Sony Corporation"],
  patentYear: 2015,
  elementCount: 12,
  groupCount: 10,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.77173,
      vd: 49.2,
      fl: -29.1827,
      glass: "Unmatched (mixed-coordinate patent row; 768492 class)",
      role: "Front negative meniscus of GR1.",
    },
    {
      id: 2,
      name: "L12g",
      label: "L12 glass substrate",
      type: "Negative Meniscus Substrate",
      nd: 1.83945,
      vd: 42.7,
      fl: -54.7245,
      glass: "Unmatched (mixed-coordinate patent row; 835427 class)",
      cemented: "H1",
      role: "Glass substrate of the L12 hybrid-composite negative lens.",
    },
    {
      id: 3,
      name: "L12r",
      label: "L12 bonded aspheric resin",
      type: "Bonded Aspheric Resin Layer",
      nd: 1.53699,
      vd: 41.7,
      fl: 443.5929,
      glass: "Unmatched (aspheric resin, patent-only optical constants)",
      cemented: "H1",
      role: "Thin bonded resin layer carrying the L12 rear asphere.",
    },
    {
      id: 4,
      name: "L13",
      label: "L13",
      type: "Negative Meniscus",
      nd: 1.80831,
      vd: 46.5,
      fl: -102.7999,
      glass: "Unmatched (mixed-coordinate patent row; 804466 class)",
      role: "Third negative component of GR1.",
    },
    {
      id: 5,
      name: "L14",
      label: "L14",
      type: "Biconvex Positive",
      nd: 2.00912,
      vd: 29.1,
      fl: 48.1494,
      glass: "Unmatched (mixed-coordinate patent row; 001291 dense-flint class)",
      role: "Positive rear component of GR1.",
    },
    {
      id: 6,
      name: "L21",
      label: "L21 (OSS)",
      type: "Positive Meniscus",
      nd: 1.57124,
      vd: 56,
      fl: 148.1107,
      glass: "Unmatched (mixed-coordinate patent row; 569560 crown class)",
      role: "Front component of GR2; patent-designated lateral image-stabilization lens.",
    },
    {
      id: 7,
      name: "L22",
      label: "L22",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.74688,
      vd: 49.3,
      fl: -52.5347,
      glass: "Unmatched (mixed-coordinate patent row; 74349x lanthanum class)",
      cemented: "D1",
      role: "Negative member of the GR2 cemented doublet.",
    },
    {
      id: 8,
      name: "L23",
      label: "L23",
      type: "Positive Meniscus",
      nd: 1.49845,
      vd: 81.5,
      fl: 30.827,
      glass: "Unmatched (mixed-coordinate patent row; 497815 ED-crown class)",
      cemented: "D1",
      role: "Very-low-dispersion positive member of the GR2 cemented doublet.",
    },
    {
      id: 9,
      name: "L31",
      label: "L31 focus lens",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.48914,
      vd: 70.3,
      fl: 50.5398,
      glass: "Unmatched (mixed-coordinate patent row; 487703 low-dispersion crown class)",
      role: "Single-element GR3 focusing group; translates axially for close focus.",
    },
    {
      id: 10,
      name: "L41",
      label: "L41",
      type: "Negative Meniscus",
      nd: 1.80831,
      vd: 46.5,
      fl: -21.0194,
      glass: "Unmatched (mixed-coordinate patent row; 804466 class)",
      cemented: "D2",
      role: "Negative front member of the GR4 cemented doublet.",
    },
    {
      id: 11,
      name: "L42",
      label: "L42",
      type: "Positive Meniscus",
      nd: 1.49845,
      vd: 81.6,
      fl: 52.6802,
      glass: "Unmatched (mixed-coordinate patent row; 497816 ED-crown class)",
      cemented: "D2",
      role: "Very-low-dispersion positive rear member of the GR4 cemented doublet.",
    },
    {
      id: 12,
      name: "L43",
      label: "L43",
      type: "Biconvex Positive",
      nd: 1.49845,
      vd: 81.6,
      fl: 22.9585,
      glass: "Unmatched (mixed-coordinate patent row; 497816 ED-crown class)",
      role: "Very-low-dispersion positive component in GR4.",
    },
    {
      id: 13,
      name: "L44",
      label: "L44",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.77767,
      vd: 47.1,
      fl: -32.1414,
      glass: "Unmatched (mixed-coordinate patent row; 774472 lanthanum-flint class)",
      role: "Rear negative element of GR4 with two aspherical surfaces.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1A", R: 1500, d: 2.8, nd: 1.77173, elemId: 1, sd: 26.5 },
    { label: "2A", R: 22.17, d: 7.193, nd: 1, elemId: 0, sd: 19 },
    { label: "3", R: 57.806, d: 1.8, nd: 1.83945, elemId: 2, sd: 18.5 },
    { label: "4", R: 25.233, d: 0.15, nd: 1.53699, elemId: 3, sd: 18 },
    { label: "5A", R: 28.164, d: 9.466, nd: 1, elemId: 0, sd: 16.58 },
    { label: "6", R: -63.675, d: 1.7, nd: 1.80831, elemId: 4, sd: 21.5 },
    { label: "7", R: -275.715, d: 0.5, nd: 1, elemId: 0, sd: 21.5 },
    { label: "8", R: 64.87, d: 4.067, nd: 2.00912, elemId: 5, sd: 19 },
    { label: "9", R: -187.494, d: 36.4, nd: 1, elemId: 0, sd: 19 },
    { label: "10", R: -119.397, d: 1.7, nd: 1.57124, elemId: 6, sd: 11 },
    { label: "11", R: -49.774, d: 0.9, nd: 1, elemId: 0, sd: 11 },
    { label: "STO", R: 1e15, d: 1.3, nd: 1, elemId: 0, sd: 8.97 },
    { label: "13A", R: 24.504, d: 2.8, nd: 1.74688, elemId: 7, sd: 11 },
    { label: "14", R: 14.347, d: 5.485, nd: 1.49845, elemId: 8, sd: 11 },
    { label: "15", R: 188.879, d: 5.491, nd: 1, elemId: 0, sd: 11 },
    { label: "16A", R: 46.745, d: 3.5, nd: 1.48914, elemId: 9, sd: 11.5 },
    { label: "17A", R: -51.179, d: 2.3, nd: 1, elemId: 0, sd: 11.5 },
    { label: "18", R: 91.996, d: 1.113, nd: 1.80831, elemId: 10, sd: 11 },
    { label: "19", R: 14.264, d: 3.433, nd: 1.49845, elemId: 11, sd: 11 },
    { label: "20", R: 28.727, d: 0.85, nd: 1, elemId: 0, sd: 11 },
    { label: "21", R: 20.48, d: 6.509, nd: 1.49845, elemId: 12, sd: 11.2 },
    { label: "22", R: -23.194, d: 3.411, nd: 1, elemId: 0, sd: 11.2 },
    { label: "23A", R: -46.43, d: 1.68, nd: 1.77767, elemId: 13, sd: 11.1 },
    { label: "24A", R: 55, d: 25.839, nd: 1, elemId: 0, sd: 11.1 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "1A": {
      K: -1,
      A4: 1.5215e-5,
      A6: -2.422e-8,
      A8: 2.8219e-11,
      A10: -1.956e-14,
      A12: 5.59e-18,
      A14: 0,
    },
    "2A": {
      K: -0.8006,
      A4: 5.8285e-6,
      A6: 2.3793e-8,
      A8: -4.9708e-11,
      A10: 1.1524e-13,
      A12: 0,
      A14: 0,
    },
    "5A": {
      K: -0.7179,
      A4: 2.1334e-5,
      A6: 1.2458e-8,
      A8: -1.68e-10,
      A10: 4.0809e-13,
      A12: -5.8401e-16,
      A14: 0,
    },
    "13A": {
      K: 0,
      A4: -8.6923e-6,
      A6: -2.5058e-8,
      A8: 1.166e-10,
      A10: -5.788e-13,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: 0,
      A4: 1.0633e-5,
      A6: -3.648e-8,
      A8: 8.8691e-10,
      A10: -1.1156e-11,
      A12: 0,
      A14: 0,
    },
    "17A": {
      K: 0,
      A4: -1.0859e-6,
      A6: -7.5619e-8,
      A8: 8.8706e-10,
      A10: -1.1124e-11,
      A12: 0,
      A14: 0,
    },
    "23A": {
      K: 0,
      A4: 2.1652e-5,
      A6: -5.8231e-7,
      A8: 2.9815e-9,
      A10: -1.2507e-11,
      A12: 0,
      A14: 0,
    },
    "24A": {
      K: 0,
      A4: 6.1977e-5,
      A6: -4.6543e-7,
      A8: 2.6378e-9,
      A10: -7.1537e-12,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings ── */
  var: {
    // GR1 → GR2: zoom only.
    "9": [
      [36.4, 36.4],
      [16.337, 16.337],
      [3.395, 3.395],
    ],
    // GR2 → GR3: zoom + mechanism-constrained focus reconstruction.
    "15": [
      [5.491, 4.4659873095],
      [5.3, 3.6327480407],
      [4.703, 2.0248233954],
    ],
    // GR3 → GR4: zoom + focus; D15 + D17 remains constant at each zoom state.
    "17A": [
      [2.3, 3.3250126905],
      [2.491, 4.1582519593],
      [3.087, 5.7651766046],
    ],
    // GR4 → image plane: zoom only; source d24/BFD retained.
    "24A": [
      [25.839, 25.839],
      [33.876, 33.876],
      [43.762, 43.762],
    ],
  },

  varLabels: [
    ["9", "D9"],
    ["15", "D15"],
    ["17A", "D17"],
    ["24A", "BF"],
  ],

  /* ── Zoom lens fields ── */
  zoomPositions: [16.48, 24.07, 33.95],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  /* ── Group and cemented-unit annotations ── */
  groups: [
    { text: "GR1 (−)", fromSurface: "1A", toSurface: "9" },
    { text: "GR2 (+)", fromSurface: "10", toSurface: "15" },
    { text: "GR3 (+, focus)", fromSurface: "16A", toSurface: "17A" },
    { text: "GR4 (−)", fromSurface: "18", toSurface: "24A" },
  ],

  doublets: [
    { text: "H1", fromSurface: "3", toSurface: "5A" },
    { text: "D1", fromSurface: "13A", toSurface: "15" },
    { text: "D2", fromSurface: "18", toSurface: "20" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.28,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: the patent moves GR3 alone for focus. Close-focus D15/D17 pairs were solved at " +
    "Sony's 0.28 m subject-to-image-plane MFD while conserving D15+D17; these close states are model-derived, not " +
    "patent-published.",

  /* ── Aperture configuration ── */
  nominalFno: [4.07, 4.08, 4.09],
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  apertureBlades: 7,
  maxFstop: 22,

  /* ── Layout tuning ── */
  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
