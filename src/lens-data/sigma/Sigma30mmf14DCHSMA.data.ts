import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Sigma 30mm F1.4 DC HSM | Art (A013)                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2014-142520 A, Numerical Example 1 (Sigma).        ║
 * ║  APS-C DSLR large-aperture standard lens; 9 elements / 8 groups.    ║
 * ║  Focus: G1 fixed; G2 + stop translate objectward as a rigid group.  ║
 * ║                                                                      ║
 * ║  NOTE ON FOCUS SPACINGS:                                            ║
 * ║    The patent publishes infinity and 600 mm spacing values. The      ║
 * ║    close-focus state below is a paraxial extension of the same       ║
 * ║    rigid-G2 mechanism to Sigma's official 0.30 m MFD. This gives     ║
 * ║    |β| = 0.1468, matching Sigma's published 1:6.8 magnification.     ║
 * ║                                                                      ║
 * ║  Patent 600 mm check state: d6 = 3.5754, BF = 40.2725.              ║
 * ║  Production-MFD derived state: d6 = 0.9202559462, BF = 42.9277440538.║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    Patent semi-diameters are not published. SDs were inferred from   ║
 * ║    paraxial on-axis marginal rays plus full-field chief rays, then   ║
 * ║    checked for edge thickness, SD ratios, rim limits, and signed     ║
 * ║    cross-gap sag clearance.                                          ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sigma-30mm-f14-dc-hsm-a",
  maker: "Sigma",
  name: "SIGMA 30mm f/1.4 DC HSM | Art",
  subtitle: "JP2014142520A Example 1 — Sigma / Daiki Uehara",
  specs: [
    "9 elements / 8 groups",
    "f = 30.785 mm design",
    "F1.4 marketed / F1.46 design",
    "2ω = 50.64°",
    "2 aspherical surfaces",
  ],

  focalLengthMarketing: 30,
  focalLengthDesign: 30.7848614652,
  apertureMarketing: 1.4,
  apertureDesign: 1.46,
  lensMounts: ["sigma-sa", "canon-ef", "nikon-f", "pentax-k", "sony-a"],
  imageFormat: "aps-c",
  patentNumber: "JP 2014-142520 A",
  patentAuthors: ["Hiroki Uehara"],
  patentAssignees: ["Sigma Corporation"],
  patentYear: 2014,
  elementCount: 9,
  groupCount: 8,
  apertureBlades: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: -67.6,
      glass: "BSC7 (Hoya, 517/642; N-BK7 / S-BSL7 class)",
      role: "Front negative meniscus for long-back-focus front-group power distribution.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.44,
      fl: -74.2,
      glass: "FC5 (Hoya, 487/704; N-FK5 / S-FSL5 class)",
      role: "Low-dispersion front negative meniscus.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.34,
      fl: 39.8,
      glass: "BACD16 (Hoya, 620/603; N-SK16 / S-BSM16 class)",
      role: "Positive recovery element in G1; suppresses distortion from L1/L2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 1.7552,
      vd: 27.53,
      fl: 52.5,
      glass: "E-FD4L / Ref. E-FD4 (Hoya, 755/275; N-SF4 / S-TIH4 class)",
      role: "Positive lead element of the rear imaging group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.46,
      fl: -43.7,
      glass: "FD60 (Hoya, 805/255; N-SF6 / S-TIH6 class)",
      role: "Pre-stop negative element in G2.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.61,
      fl: -18.7,
      glass: "FD140 (Hoya, 762/266; S-TIH14 class)",
      cemented: "D1",
      role: "Negative half of the post-stop cemented doublet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      fl: 31.4,
      glass: "TAF3 (Hoya, 804/465; N-LASF44 / S-LAH65VS class)",
      cemented: "D1",
      role: "Dense lanthanum-flint positive half of the net-negative cemented doublet.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      fl: 74.5,
      glass: "TAC8 (Hoya, 729/547; S-LAL18 class)",
      role: "Rear positive meniscus for Petzval and oblique-bundle balance.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.7725,
      vd: 49.47,
      fl: 43.0,
      glass: "M-TAF1 (Hoya molded-glass reference, 773/495)",
      role: "Rearmost glass-molded double-aspherical positive element.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 79.7416, d: 1.0, nd: 1.5168, elemId: 1, sd: 15.0 },
    { label: "2", R: 24.1967, d: 5.8508, nd: 1.0, elemId: 0, sd: 14.8 },
    { label: "3", R: 821.6299, d: 1.0, nd: 1.48749, elemId: 2, sd: 14.5 },
    { label: "4", R: 34.6531, d: 6.9632, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "5", R: 34.8591, d: 7.6704, nd: 1.62041, elemId: 3, sd: 16.0 },
    { label: "6", R: -77.7385, d: 5.449, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "7", R: 40.6045, d: 6.2678, nd: 1.7552, elemId: 4, sd: 15.5 },
    { label: "8", R: -1548.9374, d: 3.0312, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "9", R: -169.5439, d: 1.0, nd: 1.80518, elemId: 5, sd: 14.5 },
    { label: "10", R: 44.513, d: 4.381, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "STO", R: 1e15, d: 7.1696, nd: 1.0, elemId: 0, sd: 11.4428784521 },
    { label: "12", R: -17.9099, d: 1.6071, nd: 1.76182, elemId: 6, sd: 13.8 },
    { label: "13", R: 71.7339, d: 6.1003, nd: 1.8042, elemId: 7, sd: 14.2 },
    { label: "14", R: -37.5094, d: 0.15, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "15", R: -200.1294, d: 3.7906, nd: 1.72916, elemId: 8, sd: 15.0 },
    { label: "16", R: -43.0881, d: 0.15, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "17A", R: 142.2414, d: 5.019, nd: 1.7725, elemId: 9, sd: 15.5 },
    { label: "18A", R: -42.648, d: 38.399, nd: 1.0, elemId: 0, sd: 15.5 },
  ],

  asph: {
    "17A": {
      K: 0,
      A4: -4.06947e-7,
      A6: 0,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "18A": {
      K: 0,
      A4: 5.73182e-6,
      A6: -1.99338e-9,
      A8: 5.80103e-12,
      A10: -3.50184e-15,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "6": [5.449, 0.9202559462],
    "18A": [38.399, 42.9277440538],
  },

  varLabels: [
    ["6", "G1-G2"],
    ["18A", "BF"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "7", toSurface: "18A" },
  ],

  doublets: [{ text: "D1", fromSurface: "12", toSurface: "14" }],

  closeFocusM: 0.3,
  focusDescription:
    "Rear-group focus: G1 fixed; G2 and the stop translate objectward as a rigid group. Close-focus spacing is paraxially extended to Sigma's 0.30 m MFD from the patent's 600 mm focus table.",

  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  scFill: 0.55,
  yScFill: 0.48,
} satisfies LensDataInput;

export default LENS_DATA;
