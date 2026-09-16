import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — LEICA SUMMILUX-M 35mm f/1.4
 * Data source: FR 1.233.449, Example 1 / Tableau 1 (fig. 1).
 * Corroborating family source: US 2,975,673, Table 1 / Fig. 1.
 * L7 retains FR νe = 47.69; US prints 47.59 (unresolved source discrepancy).
 * Strongly correlated to the 1961 Summilux-M 35 f/1.4 optical design, but
 * the patent-to-production attribution is not manufacturer-confirmed.
 * 7 elements / 5 air-separated groups, all spherical.
 * Native patent glass coordinates are ne / νe and are retained as such.
 *
 * SCALING: the normalized patent prescription (f = 1.0) is scaled uniformly
 * ×35.0 to the production nominal focal-length scale. All R, d, SD, and
 * image-plane distances are scaled by 35; refractive coordinates are not.
 * The resulting paraxial EFL is 35.14317683 mm; it is not forced to 35 mm.
 *
 * STOP MODEL: the patent fixes the diaphragm only within a2, between r5 and
 * r6. The modeled STO is placed 75% of the way from r5 toward r6:
 * r5→STO = 6.061125 mm and STO→r6 = 2.020375 mm, preserving a2 exactly.
 * STO SD = 7.827435982 mm is calibrated from the modeled paraxial entrance
 * pupil to the patent's published f/1.4 ratio. This is not an independently
 * published or measured physical diaphragm diameter.
 *
 * SEMI-DIAMETERS: inferred from Fig. 1, not published. Outer front/rear
 * rims are 13/10.4 mm. The front retains clearance for the modeled 12.5511 mm
 * entrance pupil. Inner rims remain geometry-constrained; gapSagFrac 0.985
 * retains positive 7–8 gap separation at the 7.56 mm shared rim.
 *
 * FOCUS: NO_INTERNAL_RECONSTRUCTION. FR Example 1 publishes one optical
 * state only. closeFocusM = 1.0 m is production metadata and does not drive
 * any authored internal var spacing.
 */

const LENS_DATA = {
  key: "leica-summilux-m-35f14",
  maker: "Leica",
  name: "LEICA SUMMILUX-M 35mm f/1.4",
  subtitle:
    "FR 1.233.449 / US 2,975,673 Example 1 — strong correlation to the 1961 Summilux-M 35 f/1.4; attribution not manufacturer-confirmed",
  specs: ["7 ELEMENTS / 5 GROUPS", "f = 35.143 mm MODELED", "f/1.4 CALIBRATED STOP", "2ω = 64° PATENT"],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.14317682867564,
  apertureMarketing: 1.4,
  apertureDesign: 1.4,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "FR 1.233.449",
  patentAuthors: ["Walter Mandler", "Erich Wagner"],
  patentAssignees: ["Ernst Leitz Canada Limited"],
  patentYear: 1960,
  elementCount: 7,
  groupCount: 5,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.72341,
      vd: 50.1,
      indexReference: "e",
      fl: 59.13229840179422,
      glass: "LAC10 coordinate-compatible catalog proxy (historical supplier unproven)",
      apd: false,
      role: "Front positive collector preceding the first negative cemented pair.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7899,
      vd: 48,
      indexReference: "e",
      fl: 27.39004492299925,
      glass: "Unmatched (native e-line ne=1.7899, νe=48.0; supplier unproven)",
      apd: false,
      cemented: "D1",
      role: "Positive member of the front cemented negative meniscus assembly.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.70444,
      vd: 29.84,
      indexReference: "e",
      fl: -18.464424831012636,
      glass: "SF15 coordinate-compatible catalog proxy (historical supplier unproven)",
      apd: false,
      cemented: "D1",
      role: "Negative member completing the front cemented assembly ahead of the diaphragm.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.7899,
      vd: 48,
      indexReference: "e",
      fl: 80.10556112896559,
      glass: "Unmatched (native e-line ne=1.7899, νe=48.0; supplier unproven)",
      apd: false,
      role: "Interposed positive meniscus immediately behind the modeled diaphragm plane.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.76167,
      vd: 27.34,
      indexReference: "e",
      fl: -21.504355264338525,
      glass: "SF4 coordinate-compatible catalog proxy (historical supplier unproven)",
      apd: false,
      cemented: "D2",
      role: "Negative member of the rear cemented meniscus assembly.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.7899,
      vd: 48,
      indexReference: "e",
      fl: 28.604536799873042,
      glass: "Unmatched (native e-line ne=1.7899, νe=48.0; supplier unproven)",
      apd: false,
      cemented: "D2",
      role: "Positive member cemented behind L5 in the rear assembly.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.72056,
      vd: 47.69,
      indexReference: "e",
      fl: 42.552847946602554,
      glass: "S-LAM3 coordinate-compatible catalog proxy (historical supplier unproven)",
      apd: false,
      role: "Final positive meniscus preceding the source image plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 29.45985, d: 3.5, nd: 1.72341, elemId: 1, sd: 13 },
    { label: "2", R: 89.9115, d: 0.021, nd: 1, elemId: 0, sd: 13 },
    { label: "3", R: 13.447, d: 4.5395, nd: 1.7899, elemId: 2, sd: 11.65 },
    { label: "4", R: 30.2365, d: 1.309, nd: 1.70444, elemId: 3, sd: 11.65 },
    { label: "5", R: 8.932, d: 6.061125, nd: 1, elemId: 0, sd: 8.02 },
    { label: "STO", R: 1e15, d: 2.020375, nd: 1, elemId: 0, sd: 7.827435981936604 },
    { label: "6", R: -56.2695, d: 1.939, nd: 1.7899, elemId: 4, sd: 8 },
    { label: "7", R: -30.2365, d: 1.729, nd: 1, elemId: 0, sd: 7.56 },
    { label: "8", R: -12.068, d: 1.309, nd: 1.76167, elemId: 5, sd: 9.4 },
    { label: "9", R: -47.999, d: 4.599, nd: 1.7899, elemId: 6, sd: 9.4 },
    { label: "10", R: -16.0125, d: 0.5985, nd: 1, elemId: 0, sd: 10.6 },
    { label: "11", R: -700, d: 4.7985, nd: 1.72056, elemId: 7, sd: 10.4 },
    { label: "12", R: -29.4595, d: 19.1415, nd: 1, elemId: 0, sd: 10.4 },
  ],

  asph: {},
  var: {},
  varLabels: [],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "10" },
    { text: "G5", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  closeFocusM: 1,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — FR Example 1 publishes one optical state only; 1.0 m is product MFD metadata and no internal focus var law is authored.",

  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  gapSagFrac: 0.985,
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
