import type { LensDataInput } from "../../types/optics.js";

/**
 * Samyang AF 85mm f/1.4 FE
 *
 * Data source: WO 2021/085655 A1, Example 3, Tables 5-7.
 * 11 elements / 8 air-spaced groups, all spherical surfaces.
 * Focus: single negative meniscus focus group G320 moves image-ward by 5.053 mm.
 *
 * The patent includes a 2.5 mm, nd=1.5168 filter / cover-glass plate after surface 20.
 * Per project convention, that plate is excluded from the surfaces array and represented by
 * the patent's filterless "in Air" BFD values: 16.854 mm at infinity and 17.045 mm at 0.90 m.
 *
 * Semi-diameters are inferred from the f/1.47 paraxial marginal ray and chief-ray traces,
 * then constrained by edge thickness, sd/|R| < 0.90, cross-gap sag clearance, and the 77 mm
 * production filter-thread envelope. The final pass keeps the fixed front group broad while
 * narrowing the single moving focus lens and final meniscus to match the patent figure's
 * stepped telephoto silhouette. The stop semi-diameter is 15.7454 mm, computed from
 * EFL=83.996 mm and F/1.47; the patent's STOP row (16.097 mm) follows the inconsistent
 * prose value f=85.86 mm rather than the tabulated f=84 mm prescription.
 */

const LENS_DATA = {
  key: "samyang-af-85mm-f14-fe",
  maker: "Samyang",
  name: "SAMYANG AF 85mm f/1.4 FE",
  subtitle: "WO 2021/085655 A1 Example 3 - Samyang Optics / Kim Moon-Kyung",
  specs: [
    "11 elements / 8 groups",
    "f = 83.996 mm design / 85 mm marketed",
    "F/1.47 design / f/1.4 marketed",
    "2ω = 28.9°",
    "All-spherical, 4 HR + 1 ED",
  ],

  focalLengthMarketing: 85,
  focalLengthDesign: 83.996,
  apertureMarketing: 1.4,
  apertureDesign: 1.47,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentNumber: "WO 2021/085655 A1",
  patentAuthors: ["Moon-Kyung Kim"],
  patentAssignees: ["Samyang Optics Co Ltd"],
  patentYear: 2021,
  elementCount: 11,
  groupCount: 8,
  apertureBlades: 9,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 2.00069,
      vd: 25.46,
      fl: 76.92,
      glass: "TAFD40 (HOYA) / H-ZLaF90 class",
      apd: false,
      role: "High-index front positive meniscus for the large f/1.4 entrance cone.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.497,
      vd: 81.61,
      fl: 80.91,
      glass: "FCD1 (HOYA) / S-FPL51 class",
      apd: false,
      role: "ED crown component of the front achromatizing doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.84666,
      vd: 23.78,
      fl: -35.25,
      glass: "FDS90 (HOYA) / S-TIH53 class",
      apd: false,
      role: "Dense-flint partner to the ED element; primary axial-color correction.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.62,
      fl: 54.44,
      glass: "S-LAH66 (OHARA) / TAF1 (HOYA) class",
      apd: false,
      role: "Strong positive lanthanum-flint element closing the fixed front group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.94,
      fl: -47.1,
      glass: "LAC8 (HOYA) / S-LAL8 class",
      apd: false,
      role: "Single-element internal-focus group G320.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.53,
      fl: -26.43,
      glass: "E-FD4 (HOYA) / S-TIH4 class",
      apd: false,
      role: "Negative flint component of the first rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.94,
      fl: 23.31,
      glass: "LAC8 (HOYA) / S-LAL8 class",
      apd: false,
      role: "Positive lanthanum-crown component of the first rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.53,
      fl: -25.2,
      glass: "E-FD4 (HOYA) / S-TIH4 class",
      apd: false,
      role: "Negative dense-flint component of the second rear doublet.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      fl: 31.02,
      glass: "E-FDS1 (HOYA) / H-ZF62 class",
      apd: false,
      role: "High-index positive flint in the second rear cemented doublet.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      fl: 45.78,
      glass: "TAFD55 (HOYA) / S-LAH99 class",
      apd: false,
      role: "High-index positive rear relay element.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.94595,
      vd: 17.98,
      fl: -91.09,
      glass: "FDS18 (HOYA) / H-ZF88 class",
      apd: false,
      role: "Rear negative meniscus with convex image-side surface for ghost suppression.",
    },
  ],

  surfaces: [
    { label: "1", R: 58.93, d: 7.67, nd: 2.00069, elemId: 1, sd: 31.8 },
    { label: "2", R: 235.051, d: 1.232, nd: 1, elemId: 0, sd: 31.2 },
    { label: "3", R: 40.211, d: 10.395, nd: 1.497, elemId: 2, sd: 26.6 },
    { label: "4", R: 1e15, d: 1.9, nd: 1.84666, elemId: 3, sd: 26.5 },
    { label: "5", R: 29.846, d: 3.637, nd: 1, elemId: 0, sd: 25.7 },
    { label: "6", R: 35.905, d: 6.862, nd: 1.7725, elemId: 4, sd: 21.9 },
    { label: "7", R: 225.077, d: 1.94373, nd: 1, elemId: 0, sd: 21.0 },
    { label: "8", R: 656.333, d: 1, nd: 1.713, elemId: 5, sd: 19.2 },
    { label: "9", R: 31.93, d: 9.91877, nd: 1, elemId: 0, sd: 19.0 },
    { label: "STO", R: 1e15, d: 4.197, nd: 1, elemId: 0, sd: 15.7454 },
    { label: "11", R: 541.689, d: 1.9, nd: 1.7552, elemId: 6, sd: 16.5 },
    { label: "12", R: 19.223, d: 10.447, nd: 1.713, elemId: 7, sd: 15.8 },
    { label: "13", R: -94.886, d: 2.331, nd: 1, elemId: 0, sd: 15.7 },
    { label: "14", R: -44.171, d: 1.5, nd: 1.7552, elemId: 8, sd: 16.8 },
    { label: "15", R: 33.915, d: 6.366, nd: 1.92286, elemId: 9, sd: 17.0 },
    { label: "16", R: -167.037, d: 4.428, nd: 1, elemId: 0, sd: 17.2 },
    { label: "17", R: 145.893, d: 4.589, nd: 2.001, elemId: 10, sd: 18.4 },
    { label: "18", R: -65.755, d: 16.474, nd: 1, elemId: 0, sd: 18.3 },
    { label: "19", R: -36.344, d: 1.5, nd: 1.94595, elemId: 11, sd: 19.6 },
    { label: "20", R: -64.119, d: 16.854, nd: 1, elemId: 0, sd: 19.4 },
  ],

  asph: {},

  var: {
    "7": [1.94373, 6.99684],
    "9": [9.91877, 4.86565],
    "20": [16.854, 17.045],
  },
  varLabels: [
    ["7", "D1"],
    ["9", "D2"],
    ["20", "BF (in air)"],
  ],

  groups: [
    { text: "G310 (+)", fromSurface: "1", toSurface: "7" },
    { text: "G320 focus (-)", fromSurface: "8", toSurface: "9" },
    { text: "G330 (+)", fromSurface: "11", toSurface: "20" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "11", toSurface: "13" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
  ],

  closeFocusM: 0.9,
  focusDescription: "Single-element internal focus: negative meniscus G320 moves image-ward by 5.053 mm.",

  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  scFill: 0.58,
  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
