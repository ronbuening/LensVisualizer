import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  Stop: the JP 2016-118658 A Numerical Example 8 surface table prints a 9.40 mm effective diameter  ║
 * ║  at s12; it is not the physical wide-open iris diameter. The stop radius is derived from the       ║
 * ║  design f-number (f/3.58 at the wide end) at each zoom station; nominalFno supplies the            ║
 * ║  zoom-dependent wide-open aperture states.                                                         ║
 * ║                                                                                                    ║
 * ║  Source s21 is a fixed-diameter flare-cut stop (FS), not an active refractive surface. It is        ║
 * ║  omitted from the ordinary sequential model. The source s20->FS 0.20 mm plus FS->image 10.60 mm   ║
 * ║  is preserved as the 10.80 mm air-equivalent rear spacing on surface 20.                            ║
 * ║                                                                                                    ║
 * ║  Refracting-surface semi-diameters are half of the patent-published effective diameters; the stop  ║
 * ║  radius is derived. The patent asphere equation has a printed missing H^2 numerator; the intended  ║
 * ║  standard sag form is used here. K is the standard conic constant. The general equation also       ║
 * ║  includes A2*H^2, but Example 8 publishes no A2 values, so A2 = 0 and is omitted by the schema.    ║
 * ║  A12 is modeled as 0 on s13/s14 where omitted; A14 = 0 is schema padding on all aspheres.          ║
 * ║                                                                                                    ║
 * ║  Glass strings are vendor-neutral coordinate classes unless explicitly Unmatched. The patent       ║
 * ║  does not publish nC, nF, ng, or dPgF, and vendor identity is unresolved, so those optional         ║
 * ║  spectral fields are not invented from candidate catalogs.                                         ║
 * ╚══════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-m-15-45mm-f35-63-is-stm",
  maker: "Canon",
  name: "CANON EF-M 15-45mm f/3.5-6.3 IS STM",
  subtitle: "JP 2016-118658 A Numerical Example 8 — strong production correlation",

  catalog: {
    lensMounts: ["canon-ef-m"],
    imageFormat: "aps-c",
    specs: [
      "10 ELEMENTS / 9 GROUPS",
      "MARKETED 15-45mm f/3.5-6.3",
      "PATENT 15.45-44.45mm f/3.58-6.44",
      "3 ASPHERICAL ELEMENTS / 6 ASPHERICAL SURFACES",
      "0.25 m MFD / 0.25× AT 45mm",
      "OPTICAL IS / LEAD-SCREW STM / RETRACTING BARREL",
    ],
    elementCount: 10,
    groupCount: 9,
    focalLengthMm: { marketing: [15, 45], design: [15.45, 44.45] },
    // Scalar aperture metadata records the wide-end maximum; the full design curve is in nominalFno.
    fNumber: { marketing: 3.5, design: 3.58 },
  },

  source: { patentNumber: "JP 2016-118658 A", patentYear: 2016, authors: ["Taku Inoue"], assignees: ["Canon Inc."] },

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.6,
      focalLengthMm: -21.71,
      glass: "804466 — high-index lanthanum glass class (vendor unresolved)",
      apd: false,
      role: "Front negative-lead element in L1.",
      diagramLabel: "L1-1",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.52996,
      vd: 55.8,
      focalLengthMm: -142.86,
      glass: "Unmatched (nd=1.52996, nu_d=55.8; no exact defensible public-catalog identity found)",
      apd: false,
      role: "Double-sided aspherical negative element in L1.",
      diagramLabel: "L1-2",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 18.9,
      focalLengthMm: 80.71,
      glass: "923189 — very-high-index flint class (vendor unresolved)",
      apd: false,
      role: "Positive rear element completing the negative-power L1 group.",
      diagramLabel: "L1-3",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 75.37,
      glass: "487702 — low-dispersion crown class (vendor unresolved)",
      apd: false,
      role: "Positive L2a image-stabilization element; moves transversely for IS.",
      diagramLabel: "L2a",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: 16.59,
      glass: "S-LAL13 (coordinate-compatible spectral proxy; production supplier unspecified)",
      apd: false,
      role: "Positive component of the cemented L2b doublet.",
      diagramLabel: "L2b-1",
      cemented: "D1",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -35.06,
      glass: "847239 — dense flint class (vendor unresolved)",
      apd: false,
      role: "Negative component of the cemented L2b doublet.",
      diagramLabel: "L2b-2",
      cemented: "D1",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: 37.96,
      glass: "583594 — crown class (vendor unresolved)",
      apd: false,
      role: "Double-sided aspherical positive element completing L2b.",
      diagramLabel: "L2b-3",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      focalLengthMm: -25.69,
      glass: "904313 — high-index lanthanum flint class (vendor unresolved)",
      apd: false,
      role: "Single-element L3 focus group; translates imageward from infinity toward near focus.",
      diagramLabel: "L3",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.52996,
      vd: 55.8,
      focalLengthMm: -93.7,
      glass: "Unmatched (nd=1.52996, nu_d=55.8; no exact defensible public-catalog identity found)",
      apd: false,
      role: "Double-sided aspherical negative L4 element.",
      diagramLabel: "L4",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.61405,
      vd: 55,
      focalLengthMm: 61.12,
      glass: "614550 — crown class (historical OHARA S-BSM9 coordinate match; vendor unresolved)",
      apd: false,
      role: "Fixed positive rear field-lens group L5.",
      diagramLabel: "L5",
    },
  ],

  surfaces: [
    { label: "1", R: 44.569, d: 1.5, sd: 13.75, medium: 1 },
    { label: "2", R: 12.353, d: 7.28, sd: 10.53 },
    {
      label: "3A",
      R: 153.534,
      d: 2,
      sd: 10.445,
      medium: 2,
      asphere: { K: 0, A4: -5.68175e-5, A6: 5.45347e-7, A8: -6.57928e-9, A10: 5.78459e-11, A12: -2.54252e-13, A14: 0 },
    },
    {
      label: "4A",
      R: 50.477,
      d: 0.2,
      sd: 10.45,
      asphere: { K: 0, A4: -8.63252e-5, A6: 4.5944e-7, A8: -6.0124e-9, A10: 4.24996e-11, A12: -2.01423e-13, A14: 0 },
    },
    { label: "5", R: 38.046, d: 1.92, sd: 10.25, medium: 3 },
    { label: "6", R: 75.889, sd: 10.01 },
    { label: "7", R: 421.12, d: 1.48, sd: 5.155, medium: 4 },
    { label: "8", R: -40.209, d: 1, sd: 5.25 },
    { label: "9", R: 12.112, d: 3.25, sd: 5.425, medium: 5 },
    { label: "10", R: -204.584, d: 0.93, sd: 5.12, medium: 6 },
    { label: "11", R: 34.799, d: 1.85, sd: 4.925 },
    // JP 2016-118658 A, Numerical Example 8 surface table, surface 12: printed
    // effective diameter 9.40 mm at the stop.
    { label: "STO", R: "flat", d: 1.75 },
    {
      label: "13A",
      R: 106.057,
      d: 1.67,
      sd: 4.44,
      medium: 7,
      asphere: { K: 0, A4: -2.34601e-4, A6: -4.86415e-6, A8: 4.0678e-7, A10: -8.54092e-9, A12: 0, A14: 0 },
    },
    {
      label: "14A",
      R: -27.812,
      sd: 4.335,
      asphere: { K: 0, A4: -1.06387e-4, A6: -3.29772e-6, A8: 4.04274e-7, A10: -9.45901e-9, A12: 0, A14: 0 },
    },
    { label: "15", R: 49.041, d: 0.7, sd: 3.55, medium: 8 },
    { label: "16", R: 15.648, sd: 3.625 },
    {
      label: "17A",
      R: -16.765,
      d: 1.3,
      sd: 5.515,
      medium: 9,
      asphere: { K: 0, A4: -2.3414e-4, A6: 1.26198e-5, A8: -9.96591e-7, A10: 3.44462e-8, A12: -4.36551e-10, A14: 0 },
    },
    {
      label: "18A",
      R: -25.988,
      sd: 6.21,
      asphere: { K: 0, A4: -9.1218e-5, A6: 7.47765e-6, A8: -4.31892e-7, A10: 1.19972e-8, A12: -1.18378e-10, A14: 0 },
    },
    { label: "19", R: -77.439, d: 3.99, sd: 12.33, medium: 10 },
    { label: "20", R: -25.775, d: 10.8, sd: 12.75 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 15.45, nominalFNumber: 3.58, label: "Wide" },
      { focalLengthMm: 30, nominalFNumber: 4.96 },
      { focalLengthMm: 44.45, nominalFNumber: 6.44, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 0.25,
    description:
      "CONSTRAINED_RECONSTRUCTION: L3 alone translates imageward for near focus. The patent publishes no finite-focus " +
      "spacing table. Close s14/s16 rows are code-solved at each zoom station to Canon's 0.25 m MFD while " +
      "s14+s16 = 7.72 mm. The tele close state gives paraxial |m|≈0.253, consistent with Canon's rounded 0.25× claim.",
  },

  gaps: {
    "6": {
      label: "D6 (ZOOM)",
      values: [
        [24.49, 24.49],
        [7.1, 7.1],
        [1.66, 1.66],
      ],
    },
    "14A": {
      label: "D14 (ZOOM + FOCUS)",
      values: [
        [1.5, 1.99030171479589],
        [2.65, 3.76751567996746],
        [3.04, 4.69386206026641],
      ],
    },
    "16": {
      label: "D16 (ZOOM + FOCUS)",
      values: [
        [6.22, 5.72969828520411],
        [5.07, 3.95248432003254],
        [4.68, 3.02613793973359],
      ],
    },
    "18A": {
      label: "D18 (ZOOM)",
      values: [
        [4.05, 4.05],
        [16.16, 16.16],
        [29.05, 29.05],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 4.5, 5.6, 6.3, 8, 11, 16, 22, 32, 40], maxFNumber: 40, blades: 7 },

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "6" },
    { text: "L2a / IS", fromSurface: "7", toSurface: "8" },
    { text: "L2b", fromSurface: "9", toSurface: "14A" },
    { text: "L3 / FOCUS", fromSurface: "15", toSurface: "16" },
    { text: "L4", fromSurface: "17A", toSurface: "18A" },
    { text: "L5", fromSurface: "19", toSurface: "20" },
  ],
  doublets: [],

  layout: { yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
