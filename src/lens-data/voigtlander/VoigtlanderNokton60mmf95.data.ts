import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — VOIGTLÄNDER NOKTON 60mm f/0.95                                ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 2021-076740 A, Example 2 (Cosina Co., Ltd.).                    ║
 * ║ Production correlation: Voigtländer NOKTON 60mm F0.95 for Micro Four      ║
 * ║ Thirds. The patent prescription is retained without uniform scaling.       ║
 * ║ 11 elements / 8 air-spaced groups / all-spherical.                         ║
 * ║                                                                            ║
 * ║ Focus status: PUBLISHED. G1+G2 move together; the stop and G3 move as a    ║
 * ║ second unit. The data endpoints are the patent's infinity and 0.20× states.║
 * ║ The published 0.10× state is independently verified in the audit but the   ║
 * ║ prime-lens schema has only endpoint pairs, so it is not a discrete control ║
 * ║ point. The production 0.25×/0.34 m endpoint is not reconstructed.          ║
 * ║                                                                            ║
 * ║ Source corrections carried forward:                                       ║
 * ║ - Table 2 ZD0 at 0.00× is modeled as Infinity, not the printed 0.10.       ║
 * ║ - The Jb pair is negative L10 followed by positive L9, per ¶0072, Fig. 5,  ║
 * ║   and the numerical prescription; ¶0073 reverses those labels.             ║
 * ║ - The repeated 586.56 nm d-line label is treated as a typo for the         ║
 * ║   standard 587.56 nm d line.                                               ║
 * ║                                                                            ║
 * ║ Sensor plate normalization: patent surfaces 21–22 are excluded. Their      ║
 * ║ 4.20 mm thickness at nd=1.51680 is folded into the rear air spacing as     ║
 * ║ 4.20/1.51680 = 2.768987341772 mm.                                          ║
 * ║                                                                            ║
 * ║ Semi-diameters: the patent publishes none. Values were derived from the    ║
 * ║ f/0.93 inferred physical stop (sd=14.0833547383 mm), exact spherical ray   ║
 * ║ envelopes at all three published focus states, the 11.15 mm image height,  ║
 * ║ the default 0.60 field bundle, and the official Cosina optical section.    ║
 * ║ They were then checked for edge thickness, actual rim slope, cross-gap     ║
 * ║ intrusion, off-axis containment, and render-trim precursors.               ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "voigtlander-nokton-60mm-f095-mft",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER NOKTON 60mm f/0.95",
  subtitle: "JP 2021-076740 A Example 2 — Cosina production correlation",
  specs: [
    "11 ELEMENTS / 8 GROUPS",
    "EFL 58.145 mm MODEL / 58.15 mm PATENT",
    "60 mm / f/0.95 MARKETED",
    "F/0.93 / 2ω = 21.58° PATENT",
    "21.5° MARKETED AOV",
    "2 APD ELEMENTS (MANUFACTURER-MARKED)",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 60,
  focalLengthDesign: 58.145372162408336,
  apertureMarketing: 0.95,
  apertureDesign: 0.93,
  lensMounts: ["micro-four-thirds"],
  imageFormat: "four-thirds",
  patentNumber: "JP 2021-076740 A",
  patentAuthors: ["Yasuyuki Sugano", "Hirokazu Shimada"],
  patentAssignees: ["Cosina Co., Ltd."],
  patentYear: 2021,
  elementCount: 11,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconcave Negative",
      nd: 1.65568,
      vd: 33.69,
      fl: -237.81447486844792,
      glass: "Unmatched (656337 medium-flint class)",
      apd: false,
      role: "Front negative field-expanding element in group 101.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.49873,
      vd: 81.17,
      fl: 159.9696526102727,
      glass: "FCD1 (HOYA optical equivalent; patent vendor unspecified)",
      apd: "inferred",
      apdNote: "Official Cosina production diagram marks this element as APD; line indices and dPgF are unpublished.",
      role: "Low-dispersion positive collector in group 101.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.85167,
      vd: 42.76,
      fl: 116.23647409032617,
      glass: "Unmatched (852428 high-index lanthanum-crown class)",
      apd: false,
      role: "High-index positive meniscus completing group 101.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.76994,
      vd: 49.7,
      fl: 192.71062345302175,
      glass: "MC-TAF101-100 (HOYA optical equivalent; patent vendor unspecified)",
      apd: false,
      role: "Front positive meniscus of group 102.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Near-Plano-Convex Positive",
      nd: 1.57774,
      vd: 67.11,
      fl: 59.268908647951875,
      glass: "Unmatched (578671 low-dispersion crown class)",
      apd: false,
      role: "Strong positive member of the cemented Jc pair.",
      cemented: "Jc",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.80639,
      vd: 33.35,
      fl: -24.405977026562446,
      glass: "NBFD15 (HOYA optical equivalent; patent vendor unspecified)",
      apd: false,
      role: "Strong negative stop-facing member of Jc; the Jc cemented net power is negative.",
      cemented: "Jc",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Near-Plano-Concave Negative",
      nd: 1.66172,
      vd: 33.13,
      fl: -37.142837939473296,
      glass: "Unmatched (662331 APD flint; maker-marked, line data unpublished)",
      apd: "inferred",
      apdNote: "Official Cosina production diagram marks this element as APD; line indices and dPgF are unpublished.",
      role: "Stop-facing negative member of the cemented Ja pair.",
      cemented: "Ja",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Near-Plano-Convex Positive",
      nd: 1.87648,
      vd: 36.27,
      fl: 37.57325360334434,
      glass: "Unmatched (876363 high-index lanthanum-flint class)",
      apd: false,
      role: "High-index positive member of Ja; the cemented pair has weak positive net power.",
      cemented: "Ja",
    },
    {
      id: 9,
      name: "L10",
      label: "Element 9 (patent L10)",
      type: "Biconcave Negative",
      nd: 1.75449,
      vd: 27.15,
      fl: -31.808362243941453,
      glass: "E-FD4 (HOYA optical equivalent; patent vendor unspecified)",
      apd: false,
      role: "Negative member of Jb; the patent prose at ¶0073 reverses the L9/L10 names.",
      cemented: "Jb",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 10 (patent L9)",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      fl: 24.860892694690783,
      glass: "S-LAH58 (OHARA optical equivalent; patent vendor unspecified)",
      apd: false,
      role: "Strong positive member of Jb; the cemented pair has positive net power.",
      cemented: "Jb",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 83.85475560619624,
      glass: "S-LAH58 (OHARA optical equivalent; patent vendor unspecified)",
      apd: false,
      role: "Rear positive meniscus and final powered element.",
    },
  ],

  surfaces: [
    { label: "1", R: -300, d: 2.3, nd: 1.65568, elemId: 1, sd: 33.5 },
    { label: "2", R: 325.683, d: 0.2, nd: 1, elemId: 0, sd: 33.5 },
    { label: "3", R: 102.782, d: 8.23, nd: 1.49873, elemId: 2, sd: 34 },
    { label: "4", R: -347.022, d: 0.2, nd: 1, elemId: 0, sd: 34 },
    { label: "5", R: 71.685, d: 6.64, nd: 1.85167, elemId: 3, sd: 33 },
    { label: "6", R: 248.777, d: 1.3, nd: 1, elemId: 0, sd: 33 },
    { label: "7", R: 54.42, d: 4.79, nd: 1.76994, elemId: 4, sd: 30 },
    { label: "8", R: 82.65, d: 0.2, nd: 1, elemId: 0, sd: 29.5 },
    { label: "9", R: 34.433, d: 15.23, nd: 1.57774, elemId: 5, sd: 25.5 },
    { label: "10", R: -5173.765, d: 3, nd: 1.80639, elemId: 6, sd: 25.5 },
    { label: "11", R: 19.761, d: 8.1, nd: 1, elemId: 0, sd: 16 },
    { label: "STO", R: 1e15, d: 6.37, nd: 1, elemId: 0, sd: 14.083354738297107 },
    { label: "13", R: -24.711, d: 2.5, nd: 1.66172, elemId: 7, sd: 15.5 },
    { label: "14", R: 4756.197, d: 6.7, nd: 1.87648, elemId: 8, sd: 17 },
    { label: "15", R: -33.14, d: 0.2, nd: 1, elemId: 0, sd: 17.4 },
    { label: "16", R: -143.488, d: 2, nd: 1.75449, elemId: 9, sd: 17.5 },
    { label: "17", R: 28.992, d: 7.68, nd: 1.883, elemId: 10, sd: 17.5 },
    { label: "18", R: -79.175, d: 0.2, nd: 1, elemId: 0, sd: 17 },
    { label: "19", R: 37.592, d: 3.52, nd: 1.883, elemId: 11, sd: 15.8 },
    { label: "20", R: 73.007, d: 18.20898734177215, nd: 1, elemId: 0, sd: 15.4 },
  ],

  asph: {},

  var: {
    "11": [8.1, 22.74],
    "20": [18.20898734177215, 28.208987341772154],
  },

  varLabels: [
    ["11", "ZD11"],
    ["20", "BF (cover normalized)"],
  ],

  groups: [
    { text: "G1 (101)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (102)", fromSurface: "7", toSurface: "11" },
    { text: "G3 (103)", fromSurface: "13", toSurface: "20" },
  ],

  doublets: [
    { text: "Jc", fromSurface: "9", toSurface: "11" },
    { text: "Ja", fromSurface: "13", toSurface: "15" },
    { text: "Jb", fromSurface: "16", toSurface: "18" },
  ],

  closeFocusM: 0.34,
  focusDescription:
    "PUBLISHED two-unit floating focus: G1+G2 move together while STO+G3 move independently. The data endpoints reproduce the patent infinity and 0.20× states; the published 0.10× state is audit-verified but not a discrete schema point. closeFocusM=0.34 m is the manufacturer product specification; no 0.25× internal state is reconstructed.",

  nominalFno: 0.93,
  fstopSeries: [0.95, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 10,

  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
