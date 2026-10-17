import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║ clear-aperture half-diameter, not a published iris radius. The stop      ║
 * ║ radius is derived from the design f-number, the patent's approximate     ║
 * ║ f/1.4 target. Therefore f/1.4 agreement is calibration evidence, not     ║
 * ║ independent evidence for the physical production diaphragm diameter.     ║
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
 * ║ measurements. imageFormat is the canonical 35mm-cinema id (22 x 16 mm, ║
 * ║ 27.2 mm diagonal), covered by the patent's 28 mm image diagonal; the   ║
 * ║ taxonomy has no PL mount id, so lensMounts stays unset.                ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 *
 * MTF image-plane audit (2026-09-25): US8508864B2 Example 2, Table 3
 * (PDF p. 28), matches all radii, spacings, named glass codes and aspherics.
 * The published F1 rear distance is 44.800 mm; the implemented named-glass
 * prescription gives paraxial BFL 44.761613 mm (offset -0.038387 mm).
 * The front 3 mm filter has no infinity-focus power; no rear plate is listed.
 * The source evaluates polychromatic finite-aperture MTF, but does not define
 * the tabulated plane as paraxial or best focus. Keep its published distance.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "leica-summilux-c-40mm-t14",
  maker: "Leica",
  name: "LEICA SUMMILUX-C 40mm T1.4",
  subtitle: "US 8,508,864 B2 — Example 2; research correlation to the SUMMILUX-C 40 mm T1.4",

  catalog: {
    lensMounts: ["arri-pl"],
    imageFormat: "35mm-cinema",
    // Example 2 specifies a 28 mm design image diagonal (printed p. 16).
    imageCircleMm: 28,
    specs: [
      "15 ELEMENTS / 11 AIR-SPACED GROUPS",
      "2 PATENT MACRO-GROUPS (G1 + G2)",
      "f = 39.026 mm (MODELED)",
      "f/1.4 MODELED; T1.4 MARKETED",
      "2 ASPHERICAL SURFACES",
    ],
    elementCount: 15,
    groupCount: 11,
    focalLengthMm: { marketing: 40, design: 39.026254849041 },
    fNumber: { design: 1.4 },
  },

  source: {
    patentNumber: "US 8,508,864 B2",
    patentYear: 2013,
    authors: ["Iain A. Neil"],
    assignees: ["ACM Projektentwicklung GmbH"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L2",
      label: "Source L2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: 89.933,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote:
        "Example 2 explicitly identifies this glass as abnormal partial dispersion (US 8,508,864 B2, printed p. 17).",
      diagramLabel: "L2",
      dPgF: 0.0290431522756182,
    },
    {
      id: 2,
      name: "L3",
      label: "Source L3",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.48749,
      vd: 70.23,
      indexReference: "d",
      focalLengthMm: -54.588,
      glass: "S-FSL5 (OHARA)",
      diagramLabel: "L3",
      dPgF: 0.00241702179282366,
    },
    {
      id: 3,
      name: "L4",
      label: "Source L4",
      type: "Biconcave Negative",
      nd: 1.43875,
      vd: 94.93,
      indexReference: "d",
      focalLengthMm: -40.527,
      glass: "S-FPL53 (OHARA)",
      apd: "patent",
      apdNote:
        "Example 2 explicitly identifies this glass as abnormal partial dispersion (US 8,508,864 B2, printed p. 17).",
      diagramLabel: "L4",
      cemented: "D1",
      dPgF: 0.046750070125211,
    },
    {
      id: 4,
      name: "L5",
      label: "Source L5",
      type: "Positive Meniscus",
      nd: 1.8044,
      vd: 39.59,
      indexReference: "d",
      focalLengthMm: 52.488,
      glass: "S-LAH63 (OHARA)",
      diagramLabel: "L5",
      cemented: "D1",
      dPgF: -0.00457798330304937,
    },
    {
      id: 5,
      name: "L6",
      label: "Source L6",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 34.97,
      indexReference: "d",
      focalLengthMm: -24.394,
      glass: "S-LAM66 (OHARA)",
      diagramLabel: "L6",
      cemented: "D2",
      dPgF: 0.00131989696443835,
    },
    {
      id: 6,
      name: "L7",
      label: "Source L7",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: 50.383,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote:
        "Example 2 explicitly identifies this glass as abnormal partial dispersion (US 8,508,864 B2, printed p. 17).",
      diagramLabel: "L7",
      cemented: "D2",
      dPgF: 0.0290431522756182,
    },
    {
      id: 7,
      name: "L8",
      label: "Source L8",
      type: "Biconvex Positive",
      nd: 1.762,
      vd: 40.1,
      indexReference: "d",
      focalLengthMm: 74.506,
      glass: "S-LAM55 (OHARA)",
      diagramLabel: "L8",
      dPgF: -0.000271746638576431,
    },
    {
      id: 8,
      name: "L9",
      label: "Source L9",
      type: "Biconvex Positive",
      nd: 1.801,
      vd: 34.97,
      indexReference: "d",
      focalLengthMm: 63.890,
      glass: "S-LAM66 (OHARA)",
      diagramLabel: "L9",
      dPgF: 0.00131989696443835,
    },
    {
      id: 9,
      name: "L10",
      label: "Source L10",
      type: "Biconcave Negative",
      nd: 1.7495,
      vd: 35.33,
      indexReference: "d",
      focalLengthMm: -33.877,
      glass: "S-NBH51 (OHARA)",
      diagramLabel: "L10",
      cemented: "D3",
      dPgF: -0.00250354385122864,
    },
    {
      id: 10,
      name: "L11",
      label: "Source L11",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 94.93,
      indexReference: "d",
      focalLengthMm: 51.120,
      glass: "S-FPL53 (OHARA)",
      apd: "patent",
      apdNote:
        "Example 2 explicitly identifies this glass as abnormal partial dispersion (US 8,508,864 B2, printed p. 17).",
      diagramLabel: "L11",
      cemented: "D3",
      dPgF: 0.046750070125211,
    },
    {
      id: 11,
      name: "L12",
      label: "Source L12",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 94.93,
      indexReference: "d",
      focalLengthMm: 261.966,
      glass: "S-FPL53 (OHARA)",
      apd: "patent",
      apdNote:
        "Example 2 explicitly identifies this glass as abnormal partial dispersion (US 8,508,864 B2, printed p. 17).",
      diagramLabel: "L12",
      dPgF: 0.046750070125211,
    },
    {
      id: 12,
      name: "L13",
      label: "Source L13",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 94.93,
      indexReference: "d",
      focalLengthMm: 85.516,
      glass: "S-FPL53 (OHARA)",
      apd: "patent",
      apdNote:
        "Example 2 explicitly identifies this glass as abnormal partial dispersion (US 8,508,864 B2, printed p. 17).",
      diagramLabel: "L13",
      cemented: "D4",
      dPgF: 0.046750070125211,
    },
    {
      id: 13,
      name: "L14",
      label: "Source L14",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.80518,
      vd: 25.42,
      indexReference: "d",
      focalLengthMm: -34.678,
      glass: "S-TIH6 (OHARA)",
      diagramLabel: "L14",
      cemented: "D4",
      dPgF: 0.0162135849613554,
    },
    {
      id: 14,
      name: "L15",
      label: "Source L15",
      type: "Biconvex Positive",
      nd: 1.80809,
      vd: 22.76,
      indexReference: "d",
      focalLengthMm: 54.868,
      glass: "S-NPH1 (OHARA)",
      apd: "patent",
      apdNote:
        "Example 2 identifies SNPH1 at L15; claim 7 explicitly describes SNPH1-equivalent dense flint as abnormal partial dispersion.",
      diagramLabel: "L15",
      dPgF: 0.0260635319967741,
    },
    {
      id: 15,
      name: "L16",
      label: "Source L16",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      indexReference: "d",
      focalLengthMm: 96.527,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote:
        "Example 2 explicitly identifies this glass as abnormal partial dispersion (US 8,508,864 B2, printed p. 17).",
      diagramLabel: "L16",
      dPgF: 0.0290431522756182,
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "3", R: 45.13, d: 9.323, sd: 24.26, medium: 1 },
    { label: "4", R: -4334.716, d: 0.1, sd: 23.28 },
    { label: "5", R: 87.202, d: 2.792, sd: 21.12, medium: 2 },
    {
      label: "6A",
      R: 20.175,
      d: 11.027,
      sd: 16.42,
      asphere: {
        K: -0.5829,
        A4: 8.137e-6,
        A6: -1.474e-8,
        A8: 2.636e-10,
        A10: -1.479e-12,
        A12: 4.687e-15,
        A14: -6.151e-18,
      },
    },
    { label: "7", R: -61.449, d: 1.8, sd: 16.09, medium: 3 },
    { label: "8", R: 25.245, d: 14.145, sd: 15.58, medium: 4 },
    { label: "9", R: 47.103, d: 7.958, sd: 13.67 },
    { label: "10", R: -19.395, d: 1.8, sd: 13.64, medium: 5 },
    { label: "11", R: -2732.494, d: 10.933, sd: 17.4, medium: 6 },
    { label: "12", R: -24.846, d: 0.1, sd: 18.89 },
    { label: "13", R: 103.628, d: 7.549, sd: 24.31, medium: 7 },
    { label: "14", R: -121.611, d: 0.1, sd: 24.57 },
    { label: "15", R: 54.374, d: 8.744, sd: 25.11, medium: 8 },
    { label: "16", R: -807.872, d: 8.62, sd: 24.69 },
    { label: "17", R: -119.748, d: 1.987, sd: 21.93, medium: 9 },
    { label: "18", R: 32.452, d: 12.62, sd: 20.54, medium: 10 },
    { label: "19", R: -64.007, sd: 20.59 },
    // radius derived from the design f-number; US 8,508,864 B2 Table 3 prints a 19.98 mm clear-aperture half-diameter.
    { label: "STO", R: "flat", d: 0.9 },
    { label: "21", R: 52.938, d: 3.794, sd: 19.56, medium: 11 },
    { label: "22", R: 95.994, d: 4.461, sd: 19.2 },
    { label: "23", R: -81.846, d: 8.191, sd: 19.15, medium: 12 },
    { label: "24", R: -26.5117, d: 3.578, sd: 19.05, medium: 13 },
    {
      label: "25A",
      R: -556.349,
      d: 0.099,
      sd: 21.07,
      asphere: { K: 0, A4: 4.348e-6, A6: 4.069e-10, A8: -1.918e-12, A10: 1.164e-15, A12: -1.345e-18, A14: 1.221e-21 },
    },
    { label: "26", R: 156.116, d: 7.902, sd: 21.58, medium: 14 },
    { label: "27", R: -60.525, d: 0.1, sd: 21.93 },
    { label: "28", R: -214.156, d: 7.837, sd: 21.82, medium: 15 },
    { label: "29", R: -39.67, sd: 21.85 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.39925,
    /* ── Published focus states ── */
    keyframes: [0, 0.601960045231813, 1],
    description:
      "PUBLISHED three-state internal focus: fixed G1; G2 (STO plus source L12-L16) translates 6.190 mm toward object space from F1 to F3. The patent/model close object-to-image distance is 0.39925 m; the marketed 0.45 m close-focus specification is not substituted.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    "19": { label: "D19", values: [[6.99, 3.865, 0.8]] },
    "29": { label: "BF", values: [[44.8, 47.925, 50.99]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.4, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16] },

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

  layout: { yScFill: 0.42 },

  /* ── Geometry / layout ── */
  checks: { gapSagFrac: 0.96 },
} satisfies LensDataV2Input;

export default LENS_DATA;
