import type { LensDataInput } from "../../types/optics.js";

/**
 * LENS DATA — TAMRON SP 24-70mm f/2.8 Di VC USD (A007)
 *
 * Patent source: US 8,810,918 B2, Example 4 (Dayong Li / Tamron Co., Ltd.).
 * Production correlation to Model A007 is strong but inferential; the patent does not
 * identify the production model by name. The 17-element/12-group count and the A007
 * construction diagram's two XR, one hybrid-aspherical, three LD, and three glass-molded
 * aspherical positions align with the Example 4 prescription.
 *
 * Prescription: native patent scale, s = 1. Design control points are
 * 24.7 / 42.5 / 67.799 mm at F/2.9; marketing metadata remains 24-70mm f/2.8.
 *
 * Physical count: 17 elements / 12 air-separated groups. The elements array has 18
 * optical-media entries because the 0.3000 mm n=1.51460 bonded aspheric layer at S6-S7
 * is represented separately from its n=1.83400 substrate; together they are one physical
 * hybrid-aspherical element (H1).
 *
 * Zoom-only infinity-state gaps: D(5), D(13), D(19), D(22), D(31). With the image plane
 * fixed, LG2 reverses absolute axial direction between the intermediate and tele states.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. Example 4 publishes infinity-focus zoom
 * states only. The manufacturer's 0.38 m MFD is retained as catalog metadata without
 * inventing internal close-focus spacings.
 *
 * Asphere convention: the patent epsilon converts to the standard conic constant as
 * K = epsilon - 1. Published A2 terms are zero; A4-A10 are retained. A12/A14 are zero
 * schema fields because Example 4 publishes no coefficients at those orders.
 *
 * Semi-diameters and the stop clear-aperture envelope are modeled values, not patent
 * dimensions. They are constrained by ray containment, Figure 22, the A007 construction
 * diagram/mechanical envelope, edge thickness, actual rim slope, and cross-gap clearance.
 *
 * Glass names are catalog-derived HOYA coordinate matches where the prescription and the
 * A007 specialty-element map support a coherent assignment. The patent itself publishes
 * only nd/vd and does not name a supplier. The hybrid layer remains explicitly Unmatched;
 * nC, nF, ng, and dPgF are not authored because Example 4 does not publish them.
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "tamron-sp-a007-24-70mm-f28-vc",
  maker: "Tamron",
  name: "TAMRON SP 24-70mm f/2.8 Di VC USD",
  subtitle: "US 8,810,918 B2 Example 4 — A007 correlation (inferred)",
  specs: [
    "17 physical elements / 12 groups (18 modeled media)",
    "24.7-67.799 mm design / 24-70 mm marketed",
    "F/2.9 design / f/2.8 marketed",
    "85.0°-34.23° patent full field",
    "6 aspherical surfaces",
  ],

  focalLengthMarketing: [24, 70],
  focalLengthDesign: [24.7, 67.799],
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["canon-ef", "nikon-f", "sony-a"],
  imageFormat: "135-full-frame",
  patentNumber: "US 8,810,918 B2",
  patentAuthors: ["Dayong Li"],
  patentAssignees: ["Tamron Co., Ltd."],
  patentYear: 2014,
  elementCount: 17,
  groupCount: 12,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.88,
      fl: -180.132659,
      glass: "E-FDS1 (Hoya)",
      role: "LG1 front member",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      fl: 156.518391,
      glass: "TAF3 (Hoya)",
      role: "LG1 rear member of the front cemented pair",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.8042,
      vd: 46.5,
      fl: 126.457521,
      glass: "TAF3 (Hoya)",
      role: "LG1 rear singlet",
    },
    {
      id: 4,
      name: "L4r",
      label: "Element 4 bonded aspheric layer",
      diagramLabel: "4r",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.5146,
      vd: 49.96,
      fl: -310.09218,
      glass: "Unmatched (hybrid-asphere resin layer; nd=1.51460, vd=49.96)",
      role: "Modeled thin bonded layer on physical Element 4",
      cemented: "H1",
    },
    {
      id: 5,
      name: "L4g",
      label: "Element 4 substrate",
      diagramLabel: "4",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.34,
      fl: -24.970695,
      glass: "NBFD10 (Hoya)",
      role: "LG2 substrate bonded to the Element 4 aspheric layer",
      cemented: "H1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      diagramLabel: "5",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.94,
      fl: -19.381343,
      glass: "LAC8 (Hoya)",
      role: "LG2 negative member",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      diagramLabel: "6",
      type: "Biconvex Positive",
      nd: 1.90366,
      vd: 31.31,
      fl: 18.849438,
      glass: "TAFD25 (Hoya)",
      role: "LG2 positive partner in cemented pair D2",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      diagramLabel: "7",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.61,
      fl: -88.300519,
      glass: "FCD1 (Hoya)",
      role: "LG2 rear negative member",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      diagramLabel: "8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.61881,
      vd: 63.85,
      fl: 48.662997,
      glass: "M-PCD4 (Hoya)",
      role: "G31 front aspherical member",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      diagramLabel: "9",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 39.379537,
      glass: "FCD1 (Hoya)",
      role: "G31 positive member",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      diagramLabel: "10",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.31,
      fl: -76.092947,
      glass: "TAFD25 (Hoya)",
      role: "G31 negative partner in cemented pair D3",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L11",
      label: "Element 11",
      diagramLabel: "11",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.6935,
      vd: 53.2,
      fl: -29.637983,
      glass: "M-LAC130 (Hoya)",
      role: "G32 front negative member; laterally shifted for VC",
      cemented: "D4",
    },
    {
      id: 13,
      name: "L12",
      label: "Element 12",
      diagramLabel: "12",
      type: "Positive Meniscus",
      nd: 1.7552,
      vd: 27.53,
      fl: 71.062593,
      glass: "E-FD4 (Hoya)",
      role: "G32 rear positive partner; laterally shifted with G32 for VC",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L13",
      label: "Element 13",
      diagramLabel: "13",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 36.076164,
      glass: "FCD1 (Hoya)",
      role: "LG4 front positive member",
    },
    {
      id: 15,
      name: "L14",
      label: "Element 14",
      diagramLabel: "14",
      type: "Biconcave Negative",
      nd: 1.90366,
      vd: 31.31,
      fl: -39.314878,
      glass: "TAFD25 (Hoya)",
      role: "LG4 negative member",
      cemented: "D5",
    },
    {
      id: 16,
      name: "L15",
      label: "Element 15",
      diagramLabel: "15",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.94,
      fl: 39.257029,
      glass: "LAC8 (Hoya)",
      role: "LG4 positive partner in cemented pair D5",
      cemented: "D5",
    },
    {
      id: 17,
      name: "L16",
      label: "Element 16",
      diagramLabel: "16",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.8208,
      vd: 42.71,
      fl: -87.866726,
      glass: "M-TAFD51 (Hoya)",
      role: "LG4 rear aspherical negative member",
    },
    {
      id: 18,
      name: "L17",
      label: "Element 17",
      diagramLabel: "17",
      type: "Positive Meniscus",
      nd: 1.7433,
      vd: 49.22,
      fl: 190.950299,
      glass: "NBF1 (Hoya)",
      role: "LG4 final positive member",
    },
  ],

  /* ── Surface prescription; base d values are the wide/infinity state ── */
  surfaces: [
    { label: "1", R: 935.8082, d: 1.5, nd: 1.92286, elemId: 1, sd: 41.0 },
    { label: "2", R: 141.0527, d: 6.1958, nd: 1.8042, elemId: 2, sd: 38.0 },
    { label: "3", R: -1146.6586, d: 0.2, nd: 1.0, elemId: 0, sd: 37.5 },
    { label: "4", R: 59.8022, d: 6.4783, nd: 1.8042, elemId: 3, sd: 33.0 },
    { label: "5", R: 138.1563, d: 3.2354, nd: 1.0, elemId: 0, sd: 31.0 },
    { label: "6A", R: 314.9264, d: 0.3, nd: 1.5146, elemId: 4, sd: 18.5 },
    { label: "7", R: 105.8749, d: 1.2, nd: 1.834, elemId: 5, sd: 18.0 },
    { label: "8", R: 17.3128, d: 8.687, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "9", R: -34.9525, d: 1.0, nd: 1.713, elemId: 6, sd: 12.4 },
    { label: "10", R: 23.127, d: 6.65, nd: 1.90366, elemId: 7, sd: 13.5 },
    { label: "11", R: -55.8238, d: 4.2654, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "12", R: -21.9452, d: 0.8, nd: 1.497, elemId: 8, sd: 13.5 },
    { label: "13", R: -44.4267, d: 17.0881, nd: 1.0, elemId: 0, sd: 13.0 },
    { label: "STO", R: 1e15, d: 1.0, nd: 1.0, elemId: 0, sd: 12.3 },
    { label: "15A", R: 45.6293, d: 6.75, nd: 1.61881, elemId: 9, sd: 13.0 },
    { label: "16A", R: -83.5479, d: 0.15, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "17", R: 95.4151, d: 7.5, nd: 1.497, elemId: 10, sd: 14.5 },
    { label: "18", R: -23.9796, d: 0.8, nd: 1.90366, elemId: 11, sd: 14.5 },
    { label: "19", R: -37.403, d: 2.0, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "20A", R: -47.534, d: 1.3, nd: 1.6935, elemId: 12, sd: 15.0 },
    { label: "21", R: 36.6179, d: 3.0, nd: 1.7552, elemId: 13, sd: 15.5 },
    { label: "22", R: 111.2047, d: 8.1524, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "23", R: 25.844, d: 8.0, nd: 1.497, elemId: 14, sd: 15.5 },
    { label: "24", R: -52.5335, d: 0.2, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "25", R: -103.1176, d: 2.0, nd: 1.90366, elemId: 15, sd: 15.5 },
    { label: "26", R: 54.7004, d: 6.0104, nd: 1.713, elemId: 16, sd: 15.5 },
    { label: "27", R: -54.7004, d: 0.2, nd: 1.0, elemId: 0, sd: 15.5 },
    { label: "28A", R: -84.7582, d: 1.5, nd: 1.8208, elemId: 17, sd: 15.0 },
    { label: "29A", R: 487.5778, d: 2.4845, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "30", R: -102.2081, d: 2.3423, nd: 1.7433, elemId: 18, sd: 13.8 },
    { label: "31", R: -60.0, d: 40.3258, nd: 1.0, elemId: 0, sd: 14.0 },
  ],

  /* ── Aspherical coefficients; K = epsilon_patent - 1 ── */
  asph: {
    "6A": {
      K: 0.0,
      A4: 1.43821e-5,
      A6: -2.52546e-8,
      A8: 7.46124e-11,
      A10: -1.61976e-13,
      A12: 0,
      A14: 0,
    },
    "15A": {
      K: -0.9117,
      A4: 1.63947e-6,
      A6: 2.74286e-8,
      A8: -1.09388e-10,
      A10: 6.10564e-13,
      A12: 0,
      A14: 0,
    },
    "16A": {
      K: 0.0,
      A4: 5.27374e-6,
      A6: 4.71512e-9,
      A8: 1.56698e-10,
      A10: -8.27035e-13,
      A12: 0,
      A14: 0,
    },
    "20A": {
      K: 0.0,
      A4: 4.43544e-6,
      A6: -5.49207e-10,
      A8: 1.55881e-11,
      A10: -1.14261e-13,
      A12: 0,
      A14: 0,
    },
    "28A": {
      K: 0.0,
      A4: 5.26332e-6,
      A6: -5.66812e-9,
      A8: -6.55846e-12,
      A10: -1.35552e-13,
      A12: 0,
      A14: 0,
    },
    "29A": {
      K: 0.0,
      A4: 2.25411e-5,
      A6: 1.29573e-8,
      A8: 3.31551e-11,
      A10: -6.66568e-14,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Published infinity-focus zoom spacings; no close-focus reconstruction ── */
  var: {
    "5": [
      [3.2354, 3.2354],
      [18.899, 18.899],
      [34.5562, 34.5562],
    ],
    "13": [
      [17.0881, 17.0881],
      [6.6767, 6.6767],
      [1.0, 1.0],
    ],
    "19": [
      [2.0, 2.0],
      [1.65, 1.65],
      [1.3596, 1.3596],
    ],
    "22": [
      [8.1524, 8.1524],
      [3.0901, 3.0901],
      [1.2, 1.2],
    ],
    "31": [
      [40.3258, 40.3258],
      [53.2243, 53.2243],
      [63.2093, 63.2093],
    ],
  },
  varLabels: [
    ["5", "D(5)"],
    ["13", "D(13)"],
    ["19", "D(19)"],
    ["22", "D(22)"],
    ["31", "D(31) / BF"],
  ],

  zoomPositions: [24.7, 42.5, 67.799],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "LG1", fromSurface: "1", toSurface: "5" },
    { text: "LG2", fromSurface: "6A", toSurface: "13" },
    { text: "LG3", fromSurface: "15A", toSurface: "22" },
    { text: "LG4", fromSurface: "23", toSurface: "31" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "H1", fromSurface: "6A", toSurface: "8" },
    { text: "D2", fromSurface: "9", toSurface: "11" },
    { text: "D3", fromSurface: "17", toSurface: "19" },
    { text: "D4", fromSurface: "20A", toSurface: "22" },
    { text: "D5", fromSurface: "25", toSurface: "27" },
  ],

  closeFocusM: 0.38,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: Example 4 publishes infinity-focus zoom states only. " +
    "The 0.38 m manufacturer MFD is retained as metadata; no axial close-focus movement is modeled.",

  nominalFno: 2.9,
  fstopSeries: [2.9, 4, 5.6, 8, 11, 16, 22],
  apertureBlades: 9,
  maxFstop: 22,

  yScFill: 0.52,
} satisfies LensDataInput;

export default LENS_DATA;
