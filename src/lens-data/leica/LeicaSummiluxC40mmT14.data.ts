import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — LEICA SUMMILUX-C 40mm T1.4                                 ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 8,508,864 B2, Example 2 (Iain A. Neil;                 ║
 * ║ ACM Projektentwicklung GmbH). Research target: Leica/Leitz             ║
 * ║ SUMMILUX-C 40 mm T1.4; the patent/example attribution is a             ║
 * ║ high-confidence research correlation, not manufacturer confirmation.    ║
 * ║                                                                          ║
 * ║ Active model: 15 lens elements / 11 air-spaced groups, organized into   ║
 * ║ patent macro-groups G1 and G2; two aspherical surfaces (source S6/S25). ║
 * ║ The source Table 3 front plane-parallel S-BSL7 optical filter L1        ║
 * ║ (S1-S2) is excluded under the current data rules. No uniform scale is   ║
 * ║ applied. Finite-conjugate audit replay preserves the omitted plate by    ║
 * ║ using the source-side air-equivalent distance 3/1.51633 + 2 =           ║
 * ║ 3.978461152915 mm before source S3.                                     ║
 * ║                                                                          ║
 * ║ Focus status: PUBLISHED. G1 is fixed. G2, including STO and source       ║
 * ║ L12-L16, translates 3.125 mm (F1→F2) and 6.190 mm (F1→F3) toward       ║
 * ║ object space. Source S19/S29 spacings are preserved at all three states. ║
 * ║ closeFocusM = 0.39925 m is the patent/model object-to-image distance;    ║
 * ║ the current marketed close-focus specification is 0.45 m and is kept    ║
 * ║ separate.                                                                ║
 * ║                                                                          ║
 * ║ Stop: source S20 is the sole STO. Table 3's 19.98 mm value is a source   ║
 * ║ clear-aperture half-diameter, not a published iris radius. The authored  ║
 * ║ STO radius 18.485036341667 mm is calibrated from the F1 paraxial        ║
 * ║ entrance-pupil magnification to the patent's approximate f/1.4 target.  ║
 * ║ Therefore f/1.4 agreement is calibration evidence, not independent       ║
 * ║ evidence for the physical production diaphragm diameter.                 ║
 * ║                                                                          ║
 * ║ Semi-diameters: source Table 3 clear-aperture half-diameters are         ║
 * ║ retained on all active optical surfaces except STO. Because the          ║
 * ║ published S9-S10 shared band uses 95.814% and S22-S23 uses 94.180% of   ║
 * ║ their vertex air gaps while remaining physically clear, gapSagFrac is    ║
 * ║ set to 0.96 rather than shrinking source-published apertures.             ║
 * ║                                                                          ║
 * ║ Glass: OHARA catalog identities follow the patent's supplier statement.  ║
 * ║ Source-name corrections are S-TIH6 for printed STIH16/code 805254 and   ║
 * ║ S-FPL51 for printed SFP151/code 497816; raw strings remain in evidence. ║
 * ║ Runtime Sellmeier curves and dPgF are catalog-derived, not patent melt ║
 * ║ measurements. Mount/image-format metadata are intentionally unset        ║
 * ║ because the current canonical taxonomy has no PL or Super-35 ids.        ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "leica-summilux-c-40mm-t14",
  maker: "Leica",
  name: "LEICA SUMMILUX-C 40mm T1.4",
  subtitle: "US 8,508,864 B2 — Example 2; research correlation to the SUMMILUX-C 40 mm T1.4",
  specs: [
    "15 ELEMENTS / 11 AIR-SPACED GROUPS",
    "2 PATENT MACRO-GROUPS (G1 + G2)",
    "f = 39.026 mm (MODELED)",
    "f/1.4 MODELED; T1.4 MARKETED",
    "2 ASPHERICAL SURFACES",
  ],

  focalLengthMarketing: 40,
  focalLengthDesign: 39.026254849041,
  apertureDesign: 1.4,
  patentNumber: "US 8,508,864 B2",
  patentAuthors: ["Iain A. Neil"],
  patentAssignees: ["ACM Projektentwicklung GmbH"],
  patentYear: 2013,
  elementCount: 15,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L2",
      diagramLabel: "L2",
      label: "Source L2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      fl: 89.933,
      glass: "S-FPL51 (OHARA)",
      dPgF: 0.0290431522756182,
    },
    {
      id: 2,
      name: "L3",
      diagramLabel: "L3",
      label: "Source L3",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.48749,
      vd: 70.23,
      indexReference: "d",
      fl: -54.588,
      glass: "S-FSL5 (OHARA)",
      dPgF: 0.00241702179282366,
    },
    {
      id: 3,
      name: "L4",
      diagramLabel: "L4",
      label: "Source L4",
      type: "Biconcave Negative",
      nd: 1.43875,
      vd: 94.93,
      indexReference: "d",
      fl: -40.527,
      glass: "S-FPL53 (OHARA)",
      dPgF: 0.046750070125211,
      cemented: "D1",
    },
    {
      id: 4,
      name: "L5",
      diagramLabel: "L5",
      label: "Source L5",
      type: "Positive Meniscus",
      nd: 1.8044,
      vd: 39.59,
      indexReference: "d",
      fl: 52.488,
      glass: "S-LAH63 (OHARA)",
      dPgF: -0.00457798330304937,
      cemented: "D1",
    },
    {
      id: 5,
      name: "L6",
      diagramLabel: "L6",
      label: "Source L6",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 34.97,
      indexReference: "d",
      fl: -24.394,
      glass: "S-LAM66 (OHARA)",
      dPgF: 0.00131989696443835,
      cemented: "D2",
    },
    {
      id: 6,
      name: "L7",
      diagramLabel: "L7",
      label: "Source L7",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      fl: 50.383,
      glass: "S-FPL51 (OHARA)",
      dPgF: 0.0290431522756182,
      cemented: "D2",
    },
    {
      id: 7,
      name: "L8",
      diagramLabel: "L8",
      label: "Source L8",
      type: "Biconvex Positive",
      nd: 1.762,
      vd: 40.1,
      indexReference: "d",
      fl: 74.506,
      glass: "S-LAM55 (OHARA)",
      dPgF: -0.000271746638576431,
    },
    {
      id: 8,
      name: "L9",
      diagramLabel: "L9",
      label: "Source L9",
      type: "Biconvex Positive",
      nd: 1.801,
      vd: 34.97,
      indexReference: "d",
      fl: 63.890,
      glass: "S-LAM66 (OHARA)",
      dPgF: 0.00131989696443835,
    },
    {
      id: 9,
      name: "L10",
      diagramLabel: "L10",
      label: "Source L10",
      type: "Biconcave Negative",
      nd: 1.7495,
      vd: 35.33,
      indexReference: "d",
      fl: -33.877,
      glass: "S-NBH51 (OHARA)",
      dPgF: -0.00250354385122864,
      cemented: "D3",
    },
    {
      id: 10,
      name: "L11",
      diagramLabel: "L11",
      label: "Source L11",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 94.93,
      indexReference: "d",
      fl: 51.120,
      glass: "S-FPL53 (OHARA)",
      dPgF: 0.046750070125211,
      cemented: "D3",
    },
    {
      id: 11,
      name: "L12",
      diagramLabel: "L12",
      label: "Source L12",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 94.93,
      indexReference: "d",
      fl: 261.966,
      glass: "S-FPL53 (OHARA)",
      dPgF: 0.046750070125211,
    },
    {
      id: 12,
      name: "L13",
      diagramLabel: "L13",
      label: "Source L13",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 94.93,
      indexReference: "d",
      fl: 85.516,
      glass: "S-FPL53 (OHARA)",
      dPgF: 0.046750070125211,
      cemented: "D4",
    },
    {
      id: 13,
      name: "L14",
      diagramLabel: "L14",
      label: "Source L14",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.80518,
      vd: 25.42,
      indexReference: "d",
      fl: -34.678,
      glass: "S-TIH6 (OHARA)",
      dPgF: 0.0162135849613554,
      cemented: "D4",
    },
    {
      id: 14,
      name: "L15",
      diagramLabel: "L15",
      label: "Source L15",
      type: "Biconvex Positive",
      nd: 1.80809,
      vd: 22.76,
      indexReference: "d",
      fl: 54.868,
      glass: "S-NPH1 (OHARA)",
      dPgF: 0.0260635319967741,
    },
    {
      id: 15,
      name: "L16",
      diagramLabel: "L16",
      label: "Source L16",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      fl: 96.527,
      glass: "S-FPL51 (OHARA)",
      dPgF: 0.0290431522756182,
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "3", R: 45.13, d: 9.323, nd: 1.497, elemId: 1, sd: 24.26 },
    { label: "4", R: -4334.716, d: 0.1, nd: 1, elemId: 0, sd: 23.28 },
    { label: "5", R: 87.202, d: 2.792, nd: 1.48749, elemId: 2, sd: 21.12 },
    { label: "6A", R: 20.175, d: 11.027, nd: 1, elemId: 0, sd: 16.42 },
    { label: "7", R: -61.449, d: 1.8, nd: 1.43875, elemId: 3, sd: 16.09 },
    { label: "8", R: 25.245, d: 14.145, nd: 1.8044, elemId: 4, sd: 15.58 },
    { label: "9", R: 47.103, d: 7.958, nd: 1, elemId: 0, sd: 13.67 },
    { label: "10", R: -19.395, d: 1.8, nd: 1.801, elemId: 5, sd: 13.64 },
    { label: "11", R: -2732.494, d: 10.933, nd: 1.497, elemId: 6, sd: 17.4 },
    { label: "12", R: -24.846, d: 0.1, nd: 1, elemId: 0, sd: 18.89 },
    { label: "13", R: 103.628, d: 7.549, nd: 1.762, elemId: 7, sd: 24.31 },
    { label: "14", R: -121.611, d: 0.1, nd: 1, elemId: 0, sd: 24.57 },
    { label: "15", R: 54.374, d: 8.744, nd: 1.801, elemId: 8, sd: 25.11 },
    { label: "16", R: -807.872, d: 8.62, nd: 1, elemId: 0, sd: 24.69 },
    { label: "17", R: -119.748, d: 1.987, nd: 1.7495, elemId: 9, sd: 21.93 },
    { label: "18", R: 32.452, d: 12.62, nd: 1.43875, elemId: 10, sd: 20.54 },
    { label: "19", R: -64.007, d: 6.99, nd: 1, elemId: 0, sd: 20.59 },
    // Calibrated physical stop radius; source clear-aperture radius is 19.98 mm.
    { label: "STO", R: 1e15, d: 0.9, nd: 1, elemId: 0, sd: 18.485036341667 },
    { label: "21", R: 52.938, d: 3.794, nd: 1.43875, elemId: 11, sd: 19.56 },
    { label: "22", R: 95.994, d: 4.461, nd: 1, elemId: 0, sd: 19.2 },
    { label: "23", R: -81.846, d: 8.191, nd: 1.43875, elemId: 12, sd: 19.15 },
    { label: "24", R: -26.5117, d: 3.578, nd: 1.80518, elemId: 13, sd: 19.05 },
    { label: "25A", R: -556.349, d: 0.099, nd: 1, elemId: 0, sd: 21.07 },
    { label: "26", R: 156.116, d: 7.902, nd: 1.80809, elemId: 14, sd: 21.58 },
    { label: "27", R: -60.525, d: 0.1, nd: 1, elemId: 0, sd: 21.93 },
    { label: "28", R: -214.156, d: 7.837, nd: 1.497, elemId: 15, sd: 21.82 },
    { label: "29", R: -39.67, d: 44.8, nd: 1, elemId: 0, sd: 21.85 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "6A": {
      K: -0.5829,
      A4: 8.137e-6,
      A6: -1.474e-8,
      A8: 2.636e-10,
      A10: -1.479e-12,
      A12: 4.687e-15,
      A14: -6.151e-18,
    },
    "25A": {
      K: 0,
      A4: 4.348e-6,
      A6: 4.069e-10,
      A8: -1.918e-12,
      A10: 1.164e-15,
      A12: -1.345e-18,
      A14: 1.221e-21,
    },
  },

  /* ── Published focus states ── */
  focusPositions: [0, 0.601960045231813, 1],
  var: {
    "19": [6.99, 3.865, 0.8],
    "29": [44.8, 47.925, 50.99],
  },
  varLabels: [
    ["19", "D19"],
    ["29", "BF"],
  ],

  groups: [
    { text: "G1", fromSurface: "3", toSurface: "19" },
    { text: "G2", fromSurface: "STO", toSurface: "29" },
  ],

  doublets: [
    { text: "D1 (L4+L5)", fromSurface: "7", toSurface: "9" },
    { text: "D2 (L6+L7)", fromSurface: "10", toSurface: "12" },
    { text: "D3 (L10+L11)", fromSurface: "17", toSurface: "19" },
    { text: "D4 (L13+L14)", fromSurface: "23", toSurface: "25A" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.39925,
  focusDescription:
    "PUBLISHED three-state internal focus: fixed G1; G2 (STO plus source L12-L16) translates 6.190 mm toward object space from F1 to F3. The patent/model close object-to-image distance is 0.39925 m; the marketed 0.45 m close-focus specification is not substituted.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Geometry / layout ── */
  gapSagFrac: 0.96,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
