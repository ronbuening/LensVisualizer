import type { LensDataInput } from "../../types/optics.js";

/**
 * Schneider-Kreuznach Cinegon 6.5 mm f/1.9 — DE 927 540, Example 1.
 *
 * Source prescription: f = 1 normalized patent example, uniformly scaled by 6.5 mm.
 * The rounded table computes EFL = 6.497604437 mm; the source image plane remains
 * 8.5345 mm behind surface 14 rather than being silently refocused to the Gaussian BFD.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes one fixed design state.
 * No focus var is authored. closeFocusM uses a schema-required static-model sentinel and
 * is not a production minimum-focus-distance claim.
 *
 * STO is not published. It is modeled at the midpoint of source gap a5, the widest rear
 * air space and the mechanically plausible gap immediately before the final positive lens.
 * Its semi-diameter is calibrated from the parsed paraxial entrance pupil to reproduce
 * the published f/1.9 target; this is not independent evidence of the physical diaphragm.
 *
 * No source semi-diameters are published. SDs are modeled from exact meridional full-field
 * (±25°) wide-open ray envelopes with clearance, then geometry-constrained for edge
 * thickness, actual spherical rim slope, and shared-band cross-gap clearance.
 *
 * Glass labels are coordinate classes only. The patent does not identify supplier/melt
 * and publishes no line indices or partial-dispersion data.
 */
const LENS_DATA = {
  key: "schneider-cinegon-65f19",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH CINEGON 6.5mm f/1.9",
  subtitle: "DE 927 540 Example 1 — strong research correlation; not manufacturer-confirmed",
  specs: ["8 ELEMENTS / 6 GROUPS", "ALL-SPHERICAL", "50° FULL FIELD", "f/1.9"],

  focalLengthMarketing: 6.5,
  focalLengthDesign: 6.49760443712227,
  apertureMarketing: 1.9,
  apertureDesign: 1.9,
  patentNumber: "DE 927 540",
  patentAuthors: ["Wolfram W. Albrecht"],
  patentAssignees: ["Jos. Schneider & Co., Optische Werke"],
  patentYear: 1955,
  elementCount: 8,
  groupCount: 6,

  projection: {
    kind: "rectilinear",
    fullFieldDeg: 50,
    maxTraceFieldDeg: 25,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6727,
      vd: 32.2,
      indexReference: "d",
      fl: 35.994503281436636,
      glass: "673322 flint class (supplier unresolved)",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.5101,
      vd: 63.4,
      indexReference: "d",
      fl: -15.367234866734293,
      glass: "510634 crown class (supplier unresolved)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.2,
      indexReference: "d",
      fl: -60.405215983250116,
      glass: "673322 flint class (supplier unresolved)",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.5101,
      vd: 63.4,
      indexReference: "d",
      fl: 30.293562542339696,
      glass: "510634 crown class (supplier unresolved)",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6204,
      vd: 60.3,
      indexReference: "d",
      fl: 13.928291240195238,
      glass: "620603 crown class (supplier unresolved)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.6204,
      vd: 60.3,
      indexReference: "d",
      fl: 29.612474239193332,
      glass: "620603 crown class (supplier unresolved)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.699,
      vd: 30.1,
      indexReference: "d",
      fl: -5.299172206184146,
      glass: "699301 dense-flint class (supplier unresolved)",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.6385,
      vd: 55.5,
      indexReference: "d",
      fl: 7.46125268813929,
      glass: "639555 crown class (supplier unresolved)",
    },
  ],

  surfaces: [
    { label: "1", R: 86.58, d: 6.0125, nd: 1.6727, elemId: 1, sd: 12.3 },
    { label: "2", R: -32.6755, d: 1.183, nd: 1.5101, elemId: 2, sd: 11.12 },
    { label: "3", R: 10.439, d: 25.22, nd: 1, elemId: 0, sd: 8.25 },
    { label: "4", R: -53.027, d: 1.183, nd: 1.6727, elemId: 3, sd: 5.4 },
    { label: "5", R: 175.435, d: 2.3855, nd: 1.5101, elemId: 4, sd: 5.34 },
    { label: "6", R: -16.8675, d: 0.9555, nd: 1, elemId: 0, sd: 5.28 },
    { label: "7", R: 9.139, d: 1.43, nd: 1.6204, elemId: 5, sd: 4.6 },
    { label: "8", R: -149.11, d: 0.026, nd: 1, elemId: 0, sd: 4.45 },
    { label: "9", R: 5.46, d: 1.4105, nd: 1.6204, elemId: 6, sd: 3.62 },
    { label: "10", R: 7.0005, d: 0.962, nd: 1, elemId: 0, sd: 3.01 },
    { label: "11", R: -18.2, d: 0.403, nd: 1.699, elemId: 7, sd: 2.8 },
    { label: "12", R: 4.693, d: 0.9685, nd: 1, elemId: 0, sd: 2.45 },
    { label: "STO", R: 1e15, d: 0.9685, nd: 1, elemId: 0, sd: 2.2602314531525636 },
    { label: "13", R: 13.065, d: 1.5275, nd: 1.6385, elemId: 8, sd: 3.04 },
    { label: "14", R: -7.1565, d: 8.5345, nd: 1, elemId: 0, sd: 3.14 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4", toSurface: "6" },
    { text: "G3", fromSurface: "7", toSurface: "8" },
    { text: "G4", fromSurface: "9", toSurface: "10" },
    { text: "G5", fromSurface: "11", toSurface: "12" },
    { text: "G6", fromSurface: "13", toSurface: "14" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6" },
  ],

  closeFocusM: 1000000000000000,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — static published design state only; production barrel focus is not modeled and the schema-required closeFocusM value is an infinity sentinel, not a product MFD.",

  nominalFno: 1.9,
  fstopSeries: [1.9, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.4,
} satisfies LensDataInput;

export default LENS_DATA;
