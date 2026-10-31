import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * CANON RF 35mm f/1.4 L VCM — US20240302626A1, Numerical Example 2.
 * Fresh original shape/glass review: 2026-10-30; see the dated audit sidecar.
 * Production identity is a qualified correlation, not a source identification.
 *
 * Table 3 (PDF p16) and Table 4 (pp 16–17) preserve all powered R/d, fourteen
 * nd/vd pairs and three aspheres. Table 4's higher-precision aspheric radii
 * and explicit A14 terms take precedence over rounded radii/equation shorthand.
 * Source flare planes 10/19 (paragraph 0081) are restored as air apertures:
 * S9 d=0 then 10F d=3.8; S18 d=.2 then 19F d=.558. Their source clear radii
 * are 17.4655/12.775. Powered vertices and primary STO/iris are unchanged.
 *
 * Table 3 Phi/2 supplies clear caps except retained S26=16.85 versus printed
 *17.0725: the literal cap exceeds the existing .90 cross-gap sag guard despite
 * positive physical air. A rear outer-shoulder trial also fails that guard;
 * neither R/d nor policy is tuned. Figure 4 supports resolved outer shoulders
 * on 2A (clear 16.7705/outer 19.195) and 16 (clear 11.829/outer 12.607). No bonded
 * interface land, resin layer or inferred concave cut is authored.
 *
 * Source paragraph 0078 defines d 587.6 nm, F 486.1 nm and C 656.3 nm. Only nd/vd
 * are numerical source data: all 42 catalog-derived C/F/g overrides and 14
 * derived dPgF annotations were removed. Fourteen unchanged compatible curves
 * are qualified spectral proxies, not historical supplier/melt/chemistry proof.
 * L8/L10 APD remains inferred; paragraph 0065 concerns a different Example 1 medium.
 *
 * Paragraph 0079 defines infinity paraxial quantities. Literal data give
 * EFL 33.942091880 vs 34.0, BFL 15.360904237 vs 15.444 and track 103.102 vs 103.101.
 * Source Phi(STO)=27.298 also differs from the primary iris inferred from F1.46.
 * These unresolved source/model discrepancies are not fitted away. Source Y20.03
 * and half-angle 30.5 are distinct from the generic full-frame21.65 mm corner .
 * No numerical close-focus travel is published; all focus probes are identical
 * infinity geometries. Production0.28m is metadata, not a reconstructed state.
 * 2026-10-31 scoped reference-label correction: retain explicit d; source citation
 * belongs here rather than in the uncertainty-only indexReferenceNote field.
 * US20240302626A1 ¶0078 PDF p15 defines nd/vd at d 587.6 nm with F 486.1/C 656.3 nm; Table 3/4 pp 16–17 supplies nd/vd only, not numerical C/F/g or partial ratios.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "canon-rf-35mm-f14-l-vcm",
  maker: "Canon",
  name: "CANON RF 35mm f/1.4 L VCM",
  subtitle: "US 2024/0302626 A1 — Numerical Example 2 production correlation",

  catalog: {
    lensMounts: ["canon-rf"],
    imageFormat: "135-full-frame",
    specs: [
      "14 ELEMENTS / 11 GROUPS",
      "35 mm f/1.4 (marketing)",
      "f = 34.0 mm, F/1.46 (patent)",
      "2ω = 61.0° (patent)",
      "3 ASPHERICAL SURFACES / 2 ASPHERICAL ELEMENTS",
    ],
    elementCount: 14,
    groupCount: 11,
    focalLengthMm: { marketing: 35, design: 34 },
    fNumber: { marketing: 1.4, design: 1.46 },
  },

  source: {
    patentNumber: "US 2024/0302626 A1",
    example: { label: "Numerical Example 2", id: "2" },
    patentYear: 2024,
    authors: ["Takashi Ode", "Takahiro Hatada"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Example 2 Tables 3/4 PDF pp 16–17, with the more precise aspheric radii, trace to EFL 33.942091880/BFL 15.360904237/optical track 103.102 mm versus printed 34.0/15.444/103.101. Paragraph 0079 defines infinity paraxial quantities; no unique source-supported correction or source camera plate is established. Preserve literal R/d/nd/aspheres.",
      },
      {
        status: "unresolved",
        note: "Table 3 source 15/SP effective diameter27.298 mm implies radius 13.649, whereas the canonical prime rule inferred from printed F1.46 and literal prescription uses 13.324144541. Treating the printed diameter as the iris gives about F1.42525. The physical meaning of this discrepancy is unresolved; retain the primary f-number-derived iris and source stop position.",
      },
    ],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.583,
      indexReference: "d",
      vd: 59.38,
      focalLengthMm: -60.726202,
      glass: "S-BAL42 (OHARA) coordinate proxy; patent vendor unresolved",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.516,
      indexReference: "d",
      vd: 64.14,
      focalLengthMm: -45.725707,
      glass: "S-BSL7 (OHARA) coordinate proxy; patent vendor unresolved",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.764,
      indexReference: "d",
      vd: 48.49,
      focalLengthMm: 26.222833,
      glass: "S-LAH96 (OHARA) coordinate proxy; patent vendor unresolved",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.855,
      indexReference: "d",
      vd: 24.8,
      focalLengthMm: -61.675756,
      glass: "S-NBH56 (OHARA) coordinate proxy; patent vendor unresolved",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 2.001,
      indexReference: "d",
      vd: 25.46,
      focalLengthMm: 72.73077,
      glass: "TAFD40 (HOYA) coordinate proxy; patent vendor unresolved",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.595,
      indexReference: "d",
      vd: 67.74,
      focalLengthMm: 85.074102,
      glass: "S-FPM2 (OHARA) coordinate proxy; patent vendor unresolved",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.77,
      indexReference: "d",
      vd: 29.74,
      focalLengthMm: -108.650028,
      glass: "NBFD29 (HOYA) coordinate proxy; patent vendor unresolved",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.497,
      indexReference: "d",
      vd: 81.54,
      focalLengthMm: 154.170372,
      glass: "S-FPL51 (OHARA) coordinate proxy; patent vendor unresolved",
      apd: "inferred",
      apdNote:
        "Product-correlated UD position; source Example 2 publishes only nd/vd, no numerical partial dispersion. The anomalous-dispersion statement¶0065 belongs to Example 1 with a different material; selected medium/supplier unidentified.",
      role: "First product-correlated UD element in the moving B4 unit.",
      cemented: "C2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.77,
      indexReference: "d",
      vd: 29.74,
      focalLengthMm: -26.841416,
      glass: "NBFD29 (HOYA) coordinate proxy; patent vendor unresolved",
      cemented: "C2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.497,
      indexReference: "d",
      vd: 81.54,
      focalLengthMm: 43.211274,
      glass: "S-FPL51 (OHARA) coordinate proxy; patent vendor unresolved",
      apd: "inferred",
      apdNote:
        "Product-correlated UD position; source Example 2 publishes only nd/vd, no numerical partial dispersion. The anomalous-dispersion statement¶0065 belongs to Example 1 with a different material; selected medium/supplier unidentified.",
      role: "Second product-correlated UD element in the moving B4 unit.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.804,
      indexReference: "d",
      vd: 46.53,
      focalLengthMm: 43.854817,
      glass: "S-LAH65VS (OHARA) coordinate proxy; patent vendor unresolved",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 2.001,
      indexReference: "d",
      vd: 29.13,
      focalLengthMm: 32.796527,
      glass: "TAFD55 (HOYA) coordinate proxy; patent vendor unresolved",
      cemented: "C3",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.77,
      indexReference: "d",
      vd: 29.74,
      focalLengthMm: -27.98411,
      glass: "NBFD29 (HOYA) coordinate proxy; patent vendor unresolved",
      cemented: "C3",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.613,
      indexReference: "d",
      vd: 44.27,
      focalLengthMm: -201.545627,
      glass: "S-NBM51 (OHARA) coordinate proxy; patent vendor unresolved",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 360.451, d: 1.9, sd: 19.195, medium: 1 },
    {
      label: "2A",
      R: 32.17448,
      d: 11.511,
      sd: 16.7705,
      rimExtensionSd: 19.195,
      asphere: {
        K: 0,
        A4: 1.697231e-6,
        A6: -9.598092e-9,
        A8: 1.251928e-10,
        A10: -6.39375e-13,
        A12: 1.679648e-15,
        A14: -1.671035e-18,
      },
    },
    { label: "3", R: -30.402, d: 1.05, sd: 16.326, medium: 2 },
    { label: "4", R: 106.61, d: 0.5, sd: 16.8515 },
    { label: "5", R: 75.064, d: 11.371, sd: 17.077, medium: 3 },
    { label: "6", R: -25.535, d: 1.4, sd: 17.0985, medium: 4 },
    { label: "7", R: -50.76, d: 0.2, sd: 17.346 },
    { label: "8", R: 146.103, d: 3.873, sd: 17.603, medium: 5 },
    { label: "9", R: -143.19, d: 0, sd: 17.6025 },
    { label: "10F", R: "flat", d: 3.8, sd: 17.4655 },
    { label: "11", R: 34.518, d: 4.646, sd: 16.457, medium: 6 },
    { label: "12", R: 103.07, d: 1.5, sd: 15.9865 },
    { label: "13", R: 51.466, d: 1.5, sd: 15.1095, medium: 7 },
    { label: "14", R: 31.46, d: 6.316, sd: 14.239 },
    // US 2024/0302626 A1, Numerical Example 2 Table 3, SP surface 15: printed effective
    // diameter 27.298 mm at the stop.
    { label: "STO", R: "flat", d: 11.81 },
    { label: "16", R: -26.046, d: 2.759, sd: 11.829, rimExtensionSd: 12.607, medium: 8 },
    { label: "17", R: -20.122, d: 1.1, sd: 11.902, medium: 9 },
    { label: "18", R: -779.954, d: 0.2, sd: 12.607 },
    { label: "19F", R: "flat", d: 0.558, sd: 12.775 },
    { label: "20", R: 59.443, d: 9.185, sd: 15.418, medium: 10 },
    { label: "21", R: -31.899, d: 2.186, sd: 16.3975 },
    {
      label: "22A",
      R: 89.50277,
      d: 7.114,
      sd: 18.5895,
      medium: 11,
      asphere: { K: 0, A4: -4.587706e-6, A6: 1.115432e-9, A8: -8.943226e-12, A10: -4.870968e-15, A12: 0, A14: 0 },
    },
    {
      label: "23A",
      R: -56.11754,
      d: 1.5,
      sd: 18.9725,
      asphere: { K: 0, A4: 3.931361e-6, A6: 1.682398e-9, A8: -8.682252e-12, A10: 5.83728e-15, A12: 0, A14: 0 },
    },
    { label: "24", R: 69.336, d: 7.684, sd: 19.087, medium: 12 },
    { label: "25", R: -58.895, d: 1.1, sd: 18.831, medium: 13 },
    { label: "26", R: 34.256, d: 6.839, sd: 16.85 },
    { label: "27", R: -83.829, d: 1.5, sd: 17.1115, medium: 14 },
    { label: "28", R: -262.53, d: 15.444, sd: 17.45 },
  ],

  /* (moved from var) Infinity-only prescription: no numerical close-focus state is published . */
  focus: {
    closeFocusM: 0.28,
    description:
      "Patent Example 2 publishes only the infinity prescription. " +
      "B2 and B4 move independently toward the object during close focusing; " +
      "no numerical close-focus gaps are published, so no internal focus reconstruction is authored. " +
      "The 0.28 m close-focus value is Canon production metadata.",
  },

  aperture: { nominalFNumber: 1.46, fStops: [1.46, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 11 },

  groups: [
    { text: "B1", fromSurface: "1", toSurface: "9" },
    { text: "B2 (OBJECTWARD FOCUS)", fromSurface: "11", toSurface: "12" },
    { text: "B3", fromSurface: "13", toSurface: "14" },
    { text: "B4 (OBJECTWARD FOCUS)", fromSurface: "16", toSurface: "23A" },
    { text: "B5", fromSurface: "24", toSurface: "28" },
  ],
  doublets: [
    { text: "C1", fromSurface: "5", toSurface: "7" },
    { text: "C2", fromSurface: "16", toSurface: "18" },
    { text: "C3", fromSurface: "24", toSurface: "26" },
  ],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
