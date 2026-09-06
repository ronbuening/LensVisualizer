import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — CANON EF-M 15-45mm f/3.5-6.3 IS STM                                                 ║
 * ╠══════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2016-118658 A, Numerical Example 8 (Canon Inc.; Taku Inoue).                     ║
 * ║  Production correlation: Canon EF-M 15-45mm f/3.5-6.3 IS STM.                                    ║
 * ║  Manufacturer source: https://global.canon/en/c-museum/product/ef453.html                              ║
 * ║  Patent model: 10 elements / 9 air-separated groups, five functional zoom groups (- + - - +).     ║
 * ║  Six aspherical surfaces on three double-sided aspherical elements.                                ║
 * ║                                                                                                    ║
 * ║  Scale factor: 1.0. Patent geometry is retained without optical scaling.                            ║
 * ║  Marketing values remain separate from design values: 15-45mm f/3.5-6.3 marketed;                 ║
 * ║  15.45 / 30.00 / 44.45 mm and f/3.58 / 4.96 / 6.44 in Numerical Example 8.                       ║
 * ║                                                                                                    ║
 * ║  Zoom variable gaps: s6 and s18 are zoom-only. s14 and s16 are zoom + focus.                      ║
 * ║  L1 reverses between the wide/mid/tele samples. L5 is fixed.                                       ║
 * ║                                                                                                    ║
 * ║  Focus status: CONSTRAINED_RECONSTRUCTION. The patent publishes L3-only imageward focus motion     ║
 * ║  but no finite-focus spacing table. Close-focus s14/s16 pairs are code-solved at each zoom         ║
 * ║  station to a 0.25 m object-to-image-plane calibration while conserving s14+s16 = 7.72 mm.         ║
 * ║  These close-focus rows are modeling values, not patent-published values.                           ║
 * ║                                                                                                    ║
 * ║  Stop: patent s12 effective diameter 9.40 mm is not the physical wide-open iris diameter.          ║
 * ║  STO.sd below is the wide-end physical stop semi-diameter solved from the patent f/3.58 model;     ║
 * ║  nominalFno supplies the zoom-dependent wide-open aperture states.                                  ║
 * ║                                                                                                    ║
 * ║  Source s21 is a fixed-diameter flare-cut stop (FS), not an active refractive surface. It is        ║
 * ║  omitted from the ordinary sequential model. The source s20->FS 0.20 mm plus FS->image 10.60 mm   ║
 * ║  is preserved as the 10.80 mm air-equivalent rear spacing on surface 20.                            ║
 * ║                                                                                                    ║
 * ║  Semi-diameters are half of the patent-published effective diameters, except STO.sd as noted.      ║
 * ║  The patent asphere equation has a printed missing H^2 numerator; the intended standard sag form   ║
 * ║  is used here. K is the standard conic constant. The general equation also includes A2*H^2, but    ║
 * ║  Example 8 publishes no A2 values, so A2 = 0 and is omitted by the schema. A12 is modeled as 0     ║
 * ║  on s13/s14 where omitted; A14 = 0 is schema padding on all aspheres.                              ║
 * ║                                                                                                    ║
 * ║  Glass strings are vendor-neutral coordinate classes unless explicitly Unmatched. The patent       ║
 * ║  does not publish nC, nF, ng, or dPgF, and vendor identity is unresolved, so those optional         ║
 * ║  spectral fields are not invented from candidate catalogs.                                         ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-ef-m-15-45mm-f35-63-is-stm",
  maker: "Canon",
  name: "CANON EF-M 15-45mm f/3.5-6.3 IS STM",
  subtitle: "JP 2016-118658 A Numerical Example 8 — strong production correlation",
  specs: [
    "10 ELEMENTS / 9 GROUPS",
    "MARKETED 15-45mm f/3.5-6.3",
    "PATENT 15.45-44.45mm f/3.58-6.44",
    "3 ASPHERICAL ELEMENTS / 6 ASPHERICAL SURFACES",
    "0.25 m MFD / 0.25× AT 45mm",
    "OPTICAL IS / LEAD-SCREW STM / RETRACTING BARREL",
  ],

  focalLengthMarketing: [15, 45],
  focalLengthDesign: [15.45, 44.45],
  // Scalar aperture metadata records the wide-end maximum; the full design curve is in nominalFno.
  apertureMarketing: 3.5,
  apertureDesign: 3.58,
  lensMounts: ["canon-ef-m"],
  imageFormat: "aps-c",
  patentNumber: "JP 2016-118658 A",
  patentAuthors: ["Taku Inoue"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2016,
  elementCount: 10,
  groupCount: 9,

  elements: [
    {
      id: 1,
      name: "E1",
      diagramLabel: "L1-1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      fl: -21.71,
      glass: "804466 — high-index lanthanum glass class (vendor unresolved)",
      apd: false,
      role: "Front negative-lead element in L1.",
    },
    {
      id: 2,
      name: "E2",
      diagramLabel: "L1-2",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.52996,
      vd: 55.8,
      fl: -142.86,
      glass: "Unmatched (nd=1.52996, nu_d=55.8; no exact defensible public-catalog identity found)",
      apd: false,
      role: "Double-sided aspherical negative element in L1.",
    },
    {
      id: 3,
      name: "E3",
      diagramLabel: "L1-3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 18.9,
      fl: 80.71,
      glass: "923189 — very-high-index flint class (vendor unresolved)",
      apd: false,
      role: "Positive rear element completing the negative-power L1 group.",
    },
    {
      id: 4,
      name: "E4",
      diagramLabel: "L2a",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 75.37,
      glass: "487702 — low-dispersion crown class (vendor unresolved)",
      apd: false,
      role: "Positive L2a image-stabilization element; moves transversely for IS.",
    },
    {
      id: 5,
      name: "E5",
      diagramLabel: "L2b-1",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.2,
      fl: 16.59,
      glass: "S-LAL13 (coordinate-compatible spectral proxy; production supplier unspecified)",
      apd: false,
      role: "Positive component of the cemented L2b doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "E6",
      diagramLabel: "L2b-2",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      fl: -35.06,
      glass: "847239 — dense flint class (vendor unresolved)",
      apd: false,
      role: "Negative component of the cemented L2b doublet.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "E7",
      diagramLabel: "L2b-3",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: 37.96,
      glass: "583594 — crown class (vendor unresolved)",
      apd: false,
      role: "Double-sided aspherical positive element completing L2b.",
    },
    {
      id: 8,
      name: "E8",
      diagramLabel: "L3",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      fl: -25.69,
      glass: "904313 — high-index lanthanum flint class (vendor unresolved)",
      apd: false,
      role: "Single-element L3 focus group; translates imageward from infinity toward near focus.",
    },
    {
      id: 9,
      name: "E9",
      diagramLabel: "L4",
      label: "Element 9",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.52996,
      vd: 55.8,
      fl: -93.7,
      glass: "Unmatched (nd=1.52996, nu_d=55.8; no exact defensible public-catalog identity found)",
      apd: false,
      role: "Double-sided aspherical negative L4 element.",
    },
    {
      id: 10,
      name: "E10",
      diagramLabel: "L5",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.61405,
      vd: 55,
      fl: 61.12,
      glass: "614550 — crown class (historical OHARA S-BSM9 coordinate match; vendor unresolved)",
      apd: false,
      role: "Fixed positive rear field-lens group L5.",
    },
  ],

  surfaces: [
    { label: "1", R: 44.569, d: 1.5, nd: 1.804, elemId: 1, sd: 13.75 },
    { label: "2", R: 12.353, d: 7.28, nd: 1, elemId: 0, sd: 10.53 },
    { label: "3A", R: 153.534, d: 2, nd: 1.52996, elemId: 2, sd: 10.445 },
    { label: "4A", R: 50.477, d: 0.2, nd: 1, elemId: 0, sd: 10.45 },
    { label: "5", R: 38.046, d: 1.92, nd: 1.92286, elemId: 3, sd: 10.25 },
    { label: "6", R: 75.889, d: 24.49, nd: 1, elemId: 0, sd: 10.01 },
    { label: "7", R: 421.12, d: 1.48, nd: 1.48749, elemId: 4, sd: 5.155 },
    { label: "8", R: -40.209, d: 1, nd: 1, elemId: 0, sd: 5.25 },
    { label: "9", R: 12.112, d: 3.25, nd: 1.6935, elemId: 5, sd: 5.425 },
    { label: "10", R: -204.584, d: 0.93, nd: 1.84666, elemId: 6, sd: 5.12 },
    { label: "11", R: 34.799, d: 1.85, nd: 1, elemId: 0, sd: 4.925 },
    {
      label: "STO",
      R: 1e15,
      d: 1.75,
      nd: 1,
      elemId: 0,
      sd: 4.22226216126658,
    },
    { label: "13A", R: 106.057, d: 1.67, nd: 1.58313, elemId: 7, sd: 4.44 },
    { label: "14A", R: -27.812, d: 1.5, nd: 1, elemId: 0, sd: 4.335 },
    { label: "15", R: 49.041, d: 0.7, nd: 1.90366, elemId: 8, sd: 3.55 },
    { label: "16", R: 15.648, d: 6.22, nd: 1, elemId: 0, sd: 3.625 },
    { label: "17A", R: -16.765, d: 1.3, nd: 1.52996, elemId: 9, sd: 5.515 },
    { label: "18A", R: -25.988, d: 4.05, nd: 1, elemId: 0, sd: 6.21 },
    { label: "19", R: -77.439, d: 3.99, nd: 1.61405, elemId: 10, sd: 12.33 },
    { label: "20", R: -25.775, d: 10.8, nd: 1, elemId: 0, sd: 12.75 },
  ],

  asph: {
    "3A": {
      K: 0,
      A4: -5.68175e-5,
      A6: 5.45347e-7,
      A8: -6.57928e-9,
      A10: 5.78459e-11,
      A12: -2.54252e-13,
      A14: 0,
    },
    "4A": {
      K: 0,
      A4: -8.63252e-5,
      A6: 4.5944e-7,
      A8: -6.0124e-9,
      A10: 4.24996e-11,
      A12: -2.01423e-13,
      A14: 0,
    },
    "13A": {
      K: 0,
      A4: -2.34601e-4,
      A6: -4.86415e-6,
      A8: 4.0678e-7,
      A10: -8.54092e-9,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: -1.06387e-4,
      A6: -3.29772e-6,
      A8: 4.04274e-7,
      A10: -9.45901e-9,
      A12: 0,
      A14: 0,
    },
    "17A": {
      K: 0,
      A4: -2.3414e-4,
      A6: 1.26198e-5,
      A8: -9.96591e-7,
      A10: 3.44462e-8,
      A12: -4.36551e-10,
      A14: 0,
    },
    "18A": {
      K: 0,
      A4: -9.1218e-5,
      A6: 7.47765e-6,
      A8: -4.31892e-7,
      A10: 1.19972e-8,
      A12: -1.18378e-10,
      A14: 0,
    },
  },

  var: {
    "6": [
      [24.49, 24.49],
      [7.1, 7.1],
      [1.66, 1.66],
    ],
    "14A": [
      [1.5, 1.99030171479589],
      [2.65, 3.76751567996746],
      [3.04, 4.69386206026641],
    ],
    "16": [
      [6.22, 5.72969828520411],
      [5.07, 3.95248432003254],
      [4.68, 3.02613793973359],
    ],
    "18A": [
      [4.05, 4.05],
      [16.16, 16.16],
      [29.05, 29.05],
    ],
  },

  varLabels: [
    ["6", "D6 (ZOOM)"],
    ["14A", "D14 (ZOOM + FOCUS)"],
    ["16", "D16 (ZOOM + FOCUS)"],
    ["18A", "D18 (ZOOM)"],
  ],

  zoomPositions: [15.45, 30, 44.45],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "6" },
    { text: "L2a / IS", fromSurface: "7", toSurface: "8" },
    { text: "L2b", fromSurface: "9", toSurface: "14A" },
    { text: "L3 / FOCUS", fromSurface: "15", toSurface: "16" },
    { text: "L4", fromSurface: "17A", toSurface: "18A" },
    { text: "L5", fromSurface: "19", toSurface: "20" },
  ],

  doublets: [{ text: "D1", fromSurface: "9", toSurface: "11" }],

  closeFocusM: 0.25,
  focusDescription:
    "CONSTRAINED_RECONSTRUCTION: L3 alone translates imageward for near focus. The patent publishes no finite-focus " +
    "spacing table. Close s14/s16 rows are code-solved at each zoom station to Canon's 0.25 m MFD while " +
    "s14+s16 = 7.72 mm. The tele close state gives paraxial |m|≈0.253, consistent with Canon's rounded 0.25× claim.",

  nominalFno: [3.58, 4.96, 6.44],
  fstopSeries: [3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22, 32, 40],
  apertureBlades: 7,
  maxFstop: 40,

  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
