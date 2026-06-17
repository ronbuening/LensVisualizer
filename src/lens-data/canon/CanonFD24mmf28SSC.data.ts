import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Canon FD 24mm f/2.8 S.S.C.                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,748,021, Example 2 (Canon / Tajima-Momiyama).  ║
 * ║  Reverse-telephoto 24 mm wide-angle with front floating gap D4.    ║
 * ║  9 elements / 8 groups, all spherical.                            ║
 * ║  Focus: unit advance represented by BF variation plus D4 float.    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent Example 2 is normalized at f = 1. The rounded prescription║
 * ║    computes EFL = 0.99757691, so R and d values are scaled by       ║
 * ║    24 / 0.99757691 = 24.05829542 to place the data file at the     ║
 * ║    manufacturer's 24 mm nominal focal length.                       ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS DATA:                                               ║
 * ║    The patent tabulates D4 = 0.065 at infinity and D4 = 0.004 at   ║
 * ║    an object distance of 16.32 f from the image plane. Canon lists  ║
 * ║    0.3 m as the production closest-focusing distance. This file uses║
 * ║    the patent near D4 minimum and a paraxially solved BF value for  ║
 * ║    0.3 m, matching Canon's 0.114× published magnification closely.  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not tabulate clear apertures. SDs are inferred   ║
 * ║    from paraxial marginal and 0.6-field ray heights, then limited   ║
 * ║    by rim-slope, edge-thickness, front/rear element-ratio, and      ║
 * ║    cross-gap sag-clearance checks for LensVisualizer rendering.     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-fd-24mm-f28-ssc",
  maker: "Canon",
  name: "Canon FD 24mm f/2.8 S.S.C.",
  subtitle: "US 3,748,021 Example 2 — Canon Floating System retrofocus wide-angle",
  specs: [
    "24mm f/2.8",
    "9 elements / 8 groups",
    "84° diagonal field",
    "Floating front-group air space",
    "Canon FD mount",
  ],

  focalLengthMarketing: 24,
  focalLengthDesign: 24,
  apertureMarketing: 2.8,
  lensMounts: ["canon-fd"],
  imageFormat: "135-full-frame",
  patentYear: 1973,
  elementCount: 9,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.0,
      fl: -61.13,
      glass: "S-BAL35 (OHARA; SK5-class equivalent)",
      role: "Large front negative meniscus of the divergent retrofocus group.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.0,
      fl: 101.36,
      glass: "S-BAL35 (OHARA; SK5-class equivalent)",
      role: "Weak positive front-group element; its rear surface bounds the floating D4 air space.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.57957,
      vd: 53.7,
      fl: -20.94,
      glass: "N-BALF4 (SCHOTT; BaLF4-class equivalent)",
      role: "Strong front-group negative meniscus following the floating air space.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      fl: 46.09,
      glass: "S-TIH6 (OHARA; SF6-class equivalent)",
      role: "High-index positive member starting the rear convergent group.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.0,
      fl: 20.97,
      glass: "S-BAL35 (OHARA; SK5-class equivalent)",
      role: "Strong positive element immediately ahead of the aperture stop.",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      fl: -18.95,
      glass: "S-TIH6 (OHARA; SF6-class equivalent)",
      cemented: "D1",
      role: "First component of the cemented negative doublet behind the stop.",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.72342,
      vd: 37.9,
      fl: -151.16,
      glass: "S-BAH28 (OHARA; BaSF-class equivalent)",
      cemented: "D1",
      role: "Weak negative partner in the cemented doublet; shares the R12 interface with E6.",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      fl: 36.7,
      glass: "S-LAL8 (OHARA; LaK8-class equivalent)",
      role: "Rear high-index lanthanum-crown positive meniscus for Petzval and convergence control.",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      fl: 44.48,
      glass: "S-LAL8 (OHARA; LaK8-class equivalent)",
      role: "Terminal positive meniscus setting the final convergence and long back focus.",
    },
  ],

  surfaces: [
    { label: "1", R: 41.938421, d: 1.960751, nd: 1.58913, elemId: 1, sd: 15.8 },
    { label: "2", R: 19.039735, d: 7.426796, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "3", R: 431.24254, d: 5.98811, nd: 1.58913, elemId: 2, sd: 13.0 },
    { label: "4", R: -68.953481, d: 1.563789, nd: 1.0, elemId: 0, sd: 12.2 },
    { label: "5", R: 179.037023, d: 5.295231, nd: 1.57957, elemId: 3, sd: 10.7 },
    { label: "6", R: 11.244847, d: 4.467625, nd: 1.0, elemId: 0, sd: 9.3 },
    { label: "7", R: 44.291322, d: 2.747457, nd: 1.80518, elemId: 4, sd: 9.6 },
    { label: "8", R: -222.693206, d: 0.098639, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "9", R: 32.813109, d: 12.094105, nd: 1.58913, elemId: 5, sd: 9.7 },
    { label: "10", R: -17.107854, d: 1.471165, nd: 1.0, elemId: 0, sd: 8.2 },
    { label: "STO", R: 1e15, d: 1.471165, nd: 1.0, elemId: 0, sd: 6.22 },
    { label: "11", R: -21.115966, d: 2.355307, nd: 1.80518, elemId: 6, sd: 7.1 },
    { label: "12", R: 57.768779, d: 2.45154, nd: 1.72342, elemId: 7, sd: 7.35 },
    { label: "13", R: 37.126761, d: 1.176451, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "14", R: -96.870727, d: 2.550179, nd: 1.713, elemId: 8, sd: 8.7 },
    { label: "15", R: -20.827266, d: 0.146756, nd: 1.0, elemId: 0, sd: 9.4 },
    { label: "16", R: -101.995143, d: 2.648818, nd: 1.713, elemId: 9, sd: 9.4 },
    { label: "17", R: -24.455257, d: 35.799638, nd: 1.0, elemId: 0, sd: 10.0 },
  ],

  asph: {},
  var: {
    "4": [1.563789, 0.096233],
    "17": [35.799638, 38.520068],
  },
  varLabels: [
    ["4", "D4"],
    ["17", "BF"],
  ],
  groups: [
    { text: "Front divergent group", fromSurface: "1", toSurface: "6" },
    { text: "Rear convergent group", fromSurface: "7", toSurface: "17" },
  ],
  doublets: [{ text: "D1", fromSurface: "11", toSurface: "13" }],

  closeFocusM: 0.3,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 6,
  focusDescription:
    "Whole-lens focusing with Canon Floating System correction: D4 closes as the lens advances; BF is solved to Canon's 0.3 m MFD.",

  scFill: 0.58,
  yScFill: 0.56,
} satisfies LensDataInput;

export default LENS_DATA;
