import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — LEICA SUMMILUX-M 35mm f/1.4
 * Source: US 2,975,673, Example 1 (Walter Mandler / Erich Wagner).
 * 7 elements / 5 groups, all spherical.
 *
 * SCALE: The patent is normalized to f=1.0. All dimensional
 * prescription values are scaled ×35.0 to millimeters. The
 * rounded source then computes to EFL 35.1431768287 mm; it is not
 * renormalized to force 35.000 mm. Native ne / νe coordinates are
 * preserved with indexReference: "e".
 *
 * STOP: Fig. 1 places D within source gap a2 but does not dimension
 * the split. The implemented STO is inferred at ≈57.1% of a2 from
 * r5: 4.6145 mm before STO + 3.4670 mm after STO = 8.0815 mm.
 * STO sd is a numerical calibration to the published f/1.4, not a
 * source-published physical diaphragm radius.
 *
 * SEMI-DIAMETERS: The patent publishes none. These are modeled
 * clear apertures derived from exact spherical e-line ray envelopes
 * plus Fig. 1 proportions, then checked for edge thickness, actual
 * rim slope, shared-band air-gap intrusion, and off-axis clipping.
 *
 * FOCUS: NO_INTERNAL_RECONSTRUCTION. The patent provides only the
 * fixed Example 1 prescription; current 1.0 m MFD is product
 * metadata and is not used to invent internal motion.
 */

const LENS_DATA = {
  key: "leica-summilux-m-35mm-f14",
  maker: "Leica",
  name: "LEICA SUMMILUX-M 35mm f/1.4 (US patent)",
  subtitle: "US 2,975,673 — Example 1; strong 1961 production correlation",
  specs: ["7 ELEMENTS / 5 GROUPS", "f = 35.143 mm (MODELED)", "f/1.4", "64° PATENT FULL IMAGE ANGLE"],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.14317682867564,
  apertureMarketing: 1.4,
  apertureDesign: 1.4,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "US 2,975,673",
  patentAuthors: ["Walter Mandler", "Erich Wagner"],
  patentAssignees: ["Ernst Leitz Canada Ltd., Optical Works"],
  patentYear: 1961,
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
      fl: 59.132298401794216,
      glass: "LAC10 coordinate-compatible catalog proxy (historical supplier unproven)",
      apd: false,
      role: "Front positive collector of the modified Gauss system.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7899,
      vd: 48.0,
      indexReference: "e",
      fl: 27.390044922999255,
      glass: "Unmatched (native e-line 1.7899 / 48.0; no exact current-catalog identity)",
      apd: false,
      role: "Positive member of the front cemented doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.70444,
      vd: 29.84,
      indexReference: "e",
      fl: -18.464424831012632,
      glass: "SF15 coordinate-compatible catalog proxy (historical supplier unproven)",
      apd: false,
      role: "Negative member of the front cemented doublet; the air-facing r5 is strongly concave.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus (concave to object)",
      nd: 1.7899,
      vd: 48.0,
      indexReference: "e",
      fl: 80.10556112896559,
      glass: "Unmatched (native e-line 1.7899 / 48.0; no exact current-catalog identity)",
      apd: false,
      role: "Patent-inserted positive meniscus immediately behind the diaphragm region.",
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
      glass: "SF4-class dense flint (755276 family; supplier unproven)",
      apd: false,
      role: "Negative member of the rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.7899,
      vd: 48.0,
      indexReference: "e",
      fl: 28.60453679987305,
      glass: "Unmatched (native e-line 1.7899 / 48.0; no exact current-catalog identity)",
      apd: false,
      role: "Positive member of the rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.72056,
      vd: 47.59,
      indexReference: "e",
      fl: 42.55284794660255,
      glass: "S-LAM3-class lanthanum flint (717479 family; supplier unproven)",
      apd: false,
      role: "Rear positive meniscus completing the image-side Gauss half.",
    },
  ],

  surfaces: [
    { label: "1", R: 29.45985, d: 3.5, nd: 1.72341, elemId: 1, sd: 13 },
    { label: "2", R: 89.9115, d: 0.021, nd: 1.0, elemId: 0, sd: 13 },
    { label: "3", R: 13.447, d: 4.5395, nd: 1.7899, elemId: 2, sd: 11.4 },
    { label: "4", R: 30.2365, d: 1.309, nd: 1.70444, elemId: 3, sd: 10.4 },
    { label: "5", R: 8.932, d: 4.6145, nd: 1.0, elemId: 0, sd: 7.35 },
    // STO position inferred from Fig. 1; its two adjacent d values preserve source a2 exactly.
    { label: "STO", R: 1e15, d: 3.467, nd: 1.0, elemId: 0, sd: 8.089765546211643 },
    { label: "6", R: -56.2695, d: 1.939, nd: 1.7899, elemId: 4, sd: 8.5 },
    { label: "7", R: -30.2365, d: 1.729, nd: 1.0, elemId: 0, sd: 7.1 },
    { label: "8", R: -12.068, d: 1.309, nd: 1.76167, elemId: 5, sd: 9.0 },
    { label: "9", R: -47.999, d: 4.599, nd: 1.7899, elemId: 6, sd: 9.5 },
    { label: "10", R: -16.0125, d: 0.5985, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "11", R: -700.0, d: 4.7985, nd: 1.72056, elemId: 7, sd: 10.4 },
    { label: "12", R: -29.4595, d: 19.1415, nd: 1.0, elemId: 0, sd: 10.4 },
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

  closeFocusM: 1.0,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION — fixed patent Example 1; 1.0 m MFD is product metadata only.",

  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
