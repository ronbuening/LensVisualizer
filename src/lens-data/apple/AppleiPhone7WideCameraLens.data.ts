import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — APPLE WIDE CAMERA LENS 4.10mm f/1.8 (iPhone 7 correlation)    ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: US 2016/0341934 A1, Example 11 / Example-H, Tables 11A–11B.        ║
 * ║ Six air-separated plastic elements; all 12 lens surfaces are aspherical.   ║
 * ║ No uniform scaling is applied. Table 11A radii are retained verbatim.      ║
 * ║                                                                              ║
 * ║ STOP NORMALIZATION: the source's +0.3553/−0.3553 stop/dummy bookkeeping    ║
 * ║ loop is replaced by one ordinary STO immediately objectward of L1. Its      ║
 * ║ semi-diameter (1.140094091403 mm) is calibrated from the computed d-line    ║
 * ║ EFL and the published f/1.8 entrance-pupil relation. It is inferred, not   ║
 * ║ a published physical diaphragm diameter.                                   ║
 * ║                                                                              ║
 * ║ SEMI-DIAMETERS: no clear apertures are published. The modeled SDs were      ║
 * ║ ray-sized and independently checked for edge thickness, actual aspheric     ║
 * ║ rim slope, conic domain, cross-gap intrusion, on-axis/default off-axis      ║
 * ║ containment, and the 37° chief ray. They are model apertures, not claims   ║
 * ║ about production barrel dimensions.                                        ║
 * ║                                                                              ║
 * ║ FOCUS: NO_INTERNAL_RECONSTRUCTION. Example 11 supplies only the infinity   ║
 * ║ prescription. No focus var is authored. closeFocusM is a non-operative     ║
 * ║ 0.10 m UI boundary proxy from the patent's generic <100 mm focus statement ║
 * ║ and is not asserted as the Example 11 or iPhone 7 production MFD.          ║
 * ║                                                                              ║
 * ║ The source IR filter is represented by rearPlates, with its physical        ║
 * ║ 0.4500 mm pre-filter gap, 0.1500 mm plate, and 0.0971 mm trailing gap.     ║
 * ║ Product attribution to the iPhone 7 wide camera is an evidence-based        ║
 * ║ correlation, not an Apple-confirmed prescription identification.            ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "apple-iphone-7-wide-camera-lens",
  maker: "Apple",
  name: "APPLE WIDE 4.10mm f/1.8 (Apple iPhone 7)",
  subtitle: "US 2016/0341934 A1 Example 11 — inferred iPhone 7 wide-camera correlation",
  specs: ["6 ELEMENTS / 6 GROUPS", "PATENT f = 4.10 mm", "f/1.8", "74° FULL FIELD", "12 ASPHERICAL SURFACES"],

  focalLengthDesign: 4.104338729052325,
  apertureMarketing: 1.8,
  apertureDesign: 1.8,
  lensMounts: ["fixed-lens-camera"],
  patentNumber: "US 2016/0341934 A1",
  patentAuthors: ["Romeo I. Mercado"],
  patentAssignees: ["Apple Inc."],
  patentYear: 2016,
  elementCount: 6,
  groupCount: 6,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.545,
      vd: 55.9,
      indexReference: "d",
      fl: 3.42,
      glass: "Unmatched (patent-specified plastic, nd=1.545, vd=55.9)",
    },
    {
      id: 2,
      name: "L2",
      diagramLabel: "L2",
      label: "Element 2",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.651,
      vd: 21.5,
      indexReference: "d",
      fl: -7.39,
      glass: "Unmatched (patent-specified plastic, nd=1.651, vd=21.5)",
    },
    {
      id: 3,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.651,
      vd: 21.5,
      indexReference: "d",
      fl: -21.98,
      glass: "Unmatched (patent-specified plastic, nd=1.651, vd=21.5)",
    },
    {
      id: 4,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.545,
      vd: 55.9,
      indexReference: "d",
      fl: 3.18,
      glass: "Unmatched (patent-specified plastic, nd=1.545, vd=55.9)",
    },
    {
      id: 5,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.545,
      vd: 55.9,
      indexReference: "d",
      fl: -7.94,
      glass: "Unmatched (patent-specified plastic, nd=1.545, vd=55.9)",
    },
    {
      id: 6,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.661,
      vd: 20.4,
      indexReference: "d",
      fl: -4.55,
      glass: "Unmatched (patent-specified plastic, nd=1.661, vd=20.4)",
    },
  ],

  surfaces: [
    { label: "STO", R: 1e15, d: 0.0, nd: 1.0, elemId: 0, sd: 1.1400940914034234 },
    { label: "4A", R: 1.942, d: 0.7603, nd: 1.545, elemId: 1, sd: 1.25 },
    { label: "5A", R: -43.409, d: 0.0555, nd: 1.0, elemId: 0, sd: 1.25 },
    { label: "6A", R: 7.984, d: 0.2494, nd: 1.651, elemId: 2, sd: 1.23 },
    { label: "7A", R: 2.979, d: 0.5868, nd: 1.0, elemId: 0, sd: 1.2 },
    { label: "8A", R: -9.473, d: 0.4081, nd: 1.651, elemId: 3, sd: 1.15 },
    { label: "9A", R: -28.062, d: 0.235, nd: 1.0, elemId: 0, sd: 1.31 },
    { label: "10A", R: -8.682, d: 0.9771, nd: 1.545, elemId: 4, sd: 1.57 },
    { label: "11A", R: -1.508, d: 0.1, nd: 1.0, elemId: 0, sd: 1.78 },
    { label: "12A", R: 1.681, d: 0.328, nd: 1.545, elemId: 5, sd: 2.16 },
    { label: "13A", R: 1.128, d: 0.7, nd: 1.0, elemId: 0, sd: 2.37 },
    { label: "14A", R: -22.861, d: 0.3, nd: 1.661, elemId: 6, sd: 2.46 },
    { label: "15A", R: 3.522, d: 0.45, nd: 1.0, elemId: 0, sd: 2.75 },
  ],

  rearPlates: [
    {
      label: "IR",
      thicknessMm: 0.15,
      nd: 1.516,
      vd: 64.1,
      glass: "516641/517642 BK7-family crown-glass class (supplier unresolved)",
      gapAfterMm: 0.0971,
      source: "US 2016/0341934 A1, Example 11, Table 11A, surfaces 16–17",
    },
  ],

  asph: {
    "4A": {
      K: -0.49853396,
      A4: 0.00282308,
      A6: 0.0206461,
      A8: -0.0325751,
      A10: 0.0256978,
      A12: -0.0094397,
      A14: 0.0,
    },
    "5A": {
      K: 0.0,
      A4: -0.0516994,
      A6: 0.121884,
      A8: -0.131873,
      A10: 0.0576987,
      A12: -0.0096745,
      A14: 0.0,
    },
    "6A": {
      K: 0.0,
      A4: -0.112242,
      A6: 0.188446,
      A8: -0.172552,
      A10: 0.0602977,
      A12: 0.00460642,
      A14: -0.00414886,
    },
    "7A": {
      K: -7.58419032,
      A4: -0.0626311,
      A6: 0.114977,
      A8: -0.143652,
      A10: 0.0814989,
      A12: -0.0232324,
      A14: -0.000908662,
    },
    "8A": {
      K: 0.0,
      A4: -0.15542,
      A6: 0.00564168,
      A8: -0.045701,
      A10: 0.0161679,
      A12: -0.0115846,
      A14: 0.00782347,
    },
    "9A": {
      K: 0.0,
      A4: -0.127643,
      A6: 0.0122788,
      A8: 0.0104252,
      A10: -0.00908795,
      A12: 0.00590465,
      A14: 0.000112693,
    },
    "10A": {
      K: 0.0,
      A4: -0.00974211,
      A6: -0.0357423,
      A8: 0.0550779,
      A10: -0.0262557,
      A12: 0.00542419,
      A14: -0.000353494,
      A16: -2.05792e-05,
    },
    "11A": {
      K: -0.96894194,
      A4: 0.0393878,
      A6: -0.0199585,
      A8: 0.0140677,
      A10: -0.00337607,
      A12: 0.00034783,
      A14: -2.92323e-05,
      A16: 1.64755e-06,
    },
    "12A": {
      K: -0.8307806,
      A4: -0.174274,
      A6: 0.0474876,
      A8: -0.00897572,
      A10: 0.000661592,
      A12: 2.91223e-05,
      A14: -4.36144e-06,
    },
    "13A": {
      K: -2.85391957,
      A4: -0.0835047,
      A6: 0.0227336,
      A8: -0.00497627,
      A10: 0.000507058,
      A12: -1.04243e-05,
      A14: -1.86859e-06,
    },
    "14A": {
      K: 0.0,
      A4: -0.0581719,
      A6: 0.0167041,
      A8: -0.00188551,
      A10: 6.12528e-05,
      A12: 0.0,
      A14: 0.0,
    },
    "15A": {
      K: 0.30802964,
      A4: -0.0977084,
      A6: 0.0215146,
      A8: -0.00229345,
      A10: 9.1816e-05,
      A12: -9.45631e-07,
      A14: 0.0,
    },
  },

  var: {},
  varLabels: [],
  groups: [],
  doublets: [],

  closeFocusM: 0.1,
  focusDescription:
    "Example 11 is modeled at infinity only. The patent does not establish focus travel or a minimum focus distance for this example.",

  nominalFno: 1.8,
  fstopSeries: [1.8],
  maxFstop: 1.8,

  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
