import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON EF 135mm f/2 L USM                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2018-049102 A, Numerical Example 1               ║
 * ║  (Canon Inc. / Tomohiko Ishibashi).                               ║
 * ║  10 elements / 8 air-spaced groups, all spherical.                ║
 * ║  Focus status: PUBLISHED. Negative G2 (L6+L7, surfaces 12-14)     ║
 * ║  translates 15.53 mm imageward from infinity to 0.900 m; G1 and   ║
 * ║  G3 remain fixed.                                                  ║
 * ║                                                                    ║
 * ║  PRODUCTION CORRELATION:                                           ║
 * ║  Example 1 is a later apodized Canon embodiment strongly           ║
 * ║  correlated with the EF135mm f/2L USM base formula. It is not      ║
 * ║  asserted to be the original 1996 production patent, and the       ║
 * ║  patent's two apodization films are not asserted as retail-lens    ║
 * ║  features.                                                          ║
 * ║                                                                    ║
 * ║  SCALE: s = 1.000000. No dimensional scaling was applied.          ║
 * ║                                                                    ║
 * ║  SEMI-DIAMETERS: one half of the patent's published effective      ║
 * ║  diameters. Intentional full-field pupil clipping is retained.     ║
 * ║                                                                    ║
 * ║  APODIZATION: the first film is on L4 object surface 7 and the     ║
 * ║  second film is on L9 image surface 17. LensVisualizer has no      ║
 * ║  authored radial-transmission function for these films, so no      ║
 * ║  synthetic refractive/cement layer is added.                       ║
 * ║                                                                    ║
 * ║  GLASS: the patent publishes nd and νd only. Vendor identities,    ║
 * ║  nC, nF, ng, and dPgF are not established. Supplier-neutral six-    ║
 * ║  digit classes therefore select only coordinate-compatible catalog  ║
 * ║  coefficient proxies; patent coordinates remain authoritative.      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-ef-135-f2l-usm",
  maker: "Canon",
  name: "CANON EF 135mm f/2 L USM",
  subtitle: "JP 2018-049102 A Example 1 — later apodized Canon embodiment correlated to EF 135mm f/2L USM",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "10 ELEMENTS / 8 GROUPS",
      "135 mm f/2 (marketing)",
      "f = 133.495 mm / F2.0598 (design)",
      "2ω ≈ 18.42°",
      "PUBLISHED REAR/INTERNAL FOCUS",
    ],
    elementCount: 10,
    groupCount: 8,
    acceptsTeleconverters: true, // Canon lists Extender EF1.4x / EF2x compatibility
    focalLengthMm: { marketing: 135, design: 133.495358106 },
    fNumber: { marketing: 2, design: 2.059788166 },
  },

  source: {
    patentNumber: "JP 2018-049102 A",
    patentYear: 2018,
    authors: ["Tomohiko Ishibashi"],
    assignees: ["Canon Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 160.740749,
      glass: "487702 class (catalog-equivalent coefficient proxy; production supplier unspecified)",
      role: "Front positive collector in fixed G1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 130.141309,
      glass: "497815 UD-class coordinate (catalog-equivalent coefficient proxy; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "UD classification inferred from Canon's two-UD production specification and the patent coordinate; " +
        "the patent publishes no partial-dispersion data.",
      role: "High-Abbe positive element in fixed G1; one of the two patent-coordinate elements consistent with the product's UD count.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: -97.181472,
      glass: "834372 class (catalog-equivalent coefficient proxy; production supplier unspecified)",
      role: "Negative correction element in fixed G1.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 110.583328,
      glass: "497815 UD-class coordinate (catalog-equivalent coefficient proxy; production supplier unspecified)",
      apd: "inferred",
      apdNote:
        "UD classification inferred from Canon's two-UD production specification and the patent coordinate; " +
        "the patent publishes no partial-dispersion data.",
      role: "High-Abbe positive element in fixed G1; patent surface 7 carries the first radial-transmission film.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.71736,
      vd: 29.5,
      focalLengthMm: -273.913242,
      glass: "717295 class (catalog-equivalent coefficient proxy; production supplier unspecified)",
      role: "Weak negative element immediately before the aperture stop in fixed G1.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: 67.48193,
      glass: "847239 class (catalog-equivalent coefficient proxy; production supplier unspecified)",
      role: "Positive component of the moving negative focus doublet G2.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.71999,
      vd: 50.2,
      focalLengthMm: -32.91595,
      glass: "720502 class (catalog-equivalent coefficient proxy; production supplier unspecified)",
      role: "Negative component of the moving focus doublet; the cemented L6+L7 component has net negative power.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.74077,
      vd: 27.8,
      focalLengthMm: -35.53514,
      glass: "741278 class (catalog-equivalent coefficient proxy; production supplier unspecified)",
      role: "Negative member of the fixed rear cemented pair in G3.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 43.342889,
      glass: "773496 class (catalog-equivalent coefficient proxy; production supplier unspecified)",
      role: "Positive member of the fixed rear cemented pair; patent surface 17 carries the second radial-transmission film.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.2,
      focalLengthMm: 83.436538,
      glass: "834372 class (catalog-equivalent coefficient proxy; production supplier unspecified)",
      role: "Final positive element in fixed G3.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspheres ── */
  surfaces: [
    { label: "1", R: 106.149, d: 9.0, sd: 33.795, medium: 1 },
    { label: "2", R: -290.997, d: 0.5, sd: 33.46 },
    { label: "3", R: 51.244, d: 9.5, sd: 29.665, medium: 2 },
    { label: "4", R: 231.499, d: 3.0, sd: 28.985 },
    { label: "5", R: -630.036, d: 3.5, sd: 28.72, medium: 3 },
    { label: "6", R: 93.25, d: 2.5, sd: 26.87 },
    { label: "7", R: 60.005, d: 8.0, sd: 26.105, medium: 4 },
    { label: "8", R: -624.746, d: 0.5, sd: 25.7 },
    { label: "9", R: 29.265, d: 3.2, sd: 21.16, medium: 5 },
    { label: "10", R: 24.308, d: 12.5, sd: 18.98 },
    // JP 2018-049102 A, Example 1 surface table, stop row: printed effective diameter 35.51 mm at the stop.
    { label: "STO", R: "flat" },
    { label: "12", R: -2278.322, d: 4.5, sd: 16.95, medium: 6 },
    { label: "13", R: -55.787, d: 2.0, sd: 16.575, medium: 7 },
    { label: "14", R: 41.821, sd: 14.935 },
    { label: "15", R: -30.566, d: 2.5, sd: 12.97, medium: 8 },
    { label: "16", R: 196.247, d: 8.5, sd: 14.46, medium: 9 },
    { label: "17", R: -39.608, d: 0.5, sd: 16.11 },
    { label: "18", R: 106.631, d: 6.0, sd: 17.745, medium: 10 },
    { label: "19", R: -195.173, d: 54.12, sd: 18.035 },
  ],

  /* ── Optical / UI parameters ── */
  focus: {
    closeFocusM: 0.9,
    description:
      "PUBLISHED rear/internal focus: negative G2 (L6+L7, surfaces 12-14) translates 15.53 mm imageward from infinity to 0.900 m; G1 and G3 remain fixed.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Published focus spacings ── */
  gaps: { STO: { label: "D11", values: [[2.28, 17.81]] }, "14": { label: "D14", values: [[22.52, 6.99]] } },

  aperture: { nominalFNumber: 2.059788166, fStops: [2.06, 2.8, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  /* ── Diagram annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "STO" },
    { text: "G2 (−) FOCUS", fromSurface: "12", toSurface: "14" },
    { text: "G3 (+)", fromSurface: "15", toSurface: "19" },
  ],
  doublets: [
    { text: "D1", fromSurface: "12", toSurface: "14" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
  ],

  layout: { yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
