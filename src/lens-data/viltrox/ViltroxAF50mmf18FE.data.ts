import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VILTROX AF 50mm f/1.8 FE                                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Source: CN 211955966 U, Example 1.                                      ║
 * ║  Fixed job-card correlation: Viltrox AF 50mm F1.8 FE.                    ║
 * ║  11 elements / 10 air-separated groups; 4 patent functional groups.      ║
 * ║  Four aspherical surfaces on L23 and L31.                                ║
 * ║  Focus status: PUBLISHED. G3/L31 alone moves imageward 5.75 mm.          ║
 * ║                                                                            ║
 * ║  SOURCE CORRECTION — ASPHERES:                                            ║
 * ║  Patent Table 3 prints coefficient rows 13–16, but Example 1 Table 1,    ║
 * ║  paragraph 0087, and Fig. 1 identify physical surfaces 15–18 as the      ║
 * ║  four aspheres. The data therefore maps raw rows 13→15A, 14→16A,         ║
 * ║  15→17A, and 16→18A. Raw row labels are not reused as physical       ║
 * ║  surface labels.                                                           ║
 * ║                                                                            ║
 * ║  REAR FILTER: Source GL is traced in rearPlates, hidden from drawing. ║
 * ║  S22 d=28.44 mm; GL t=2.00 mm, nd=1.52, vd=64.2; final air=1.00 mm. ║
 * ║  Source contradiction: physical BFL 32.428687 vs image distance 31.44 ║
 * ║  mm. Restoring GL leaves the +0.988687 mm paraxial offset unchanged.   ║
 * ║  The published rounded prescription is retained without focus tuning. ║
 * ║                                                                            ║
 * ║  SCALE: s=1. No uniform scaling is applied.                               ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS:                                                           ║
 * ║  The patent publishes no clear-aperture table. SDs are modeling      ║
 * ║  values derived from exact on-axis f/1.8 marginal rays, the default      ║
 * ║  0.60× half-field off-axis bundle, the patent optical section, and       ║
 * ║  current edge/slope/cross-gap constraints. The 8→9 air gap is physically ║
 * ║  very tight at the required axial marginal-ray height, so this lens uses ║
 * ║  gapSagFrac=0.97; the modeled surfaces remain non-intersecting.           ║
 * ║                                                                            ║
 * ║  GLASS ANNOTATION:                                                        ║
 * ║  L11, L14, and L41 remain explicitly Unmatched because the         ║
 * ║  nearest public catalog-family nd differs from the rounded patent value   ║
 * ║  by more than the project direct-resolution window (Δn > 0.003).          ║
 * ║                                                                            ║
 * ║  SPECTRAL LIMIT:                                                           ║
 * ║  The patent publishes nd/νd only. nC, nF, ng, and dPgF are not authored  ║
 * ║  because they are not recoverable from the source without inventing      ║
 * ║  partial-dispersion information.                                          ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

/* SD review: CN211955966U, PDF p. 18, Fig. 1, 600 dpi, 2026-09-10 UTC.
 * Optical-rim proportions reviewed; existing geometry-limited inferred SDs retained.
 * Catalog names denote compatible spectral proxies; patent nd/vd and supplier uncertainty are retained.
 */
const LENS_DATA = {
  schema: 2,
  key: "viltrox-af-50mm-f18-fe",
  maker: "Viltrox",
  name: "VILTROX AF 50mm f/1.8 FE",
  subtitle: "CN 211955966 U Example 1 — published single-element inner-focus state pair",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "11 ELEMENTS / 10 GROUPS",
      "50 mm MARKETED / 49.0738 mm MODELED",
      "f/1.8",
      "4 ASPHERICAL SURFACES",
      "INNER FOCUS — L31",
    ],
    elementCount: 11,
    groupCount: 10,
    focalLengthMm: { marketing: 50, design: 49.073753 },
    fNumber: { marketing: 1.8, design: 1.8 },
  },

  source: {
    patentNumber: "CN 211955966 U",
    patentYear: 2020,
    authors: ["Liu Ruijun", "Chen Baofeng"],
    assignees: ["Shenzhen Leiying Photoelectric Technology Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1 (L11)",
      type: "Biconcave Negative",
      nd: 1.63,
      vd: 35.7,
      focalLengthMm: -34.651679,
      glass: "Unmatched (nearest 626357 flint family; patent nd≈1.63, νd≈35.7)",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2 (L12)",
      type: "Biconvex Positive",
      nd: 1.8,
      vd: 46.6,
      focalLengthMm: 30.977957,
      glass: "M-TAF31 (approximate spectral proxy; patent nd/νd retained; supplier unresolved)",
      diagramLabel: "L12",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3 (L13)",
      type: "Plano-Convex Positive",
      nd: 1.8,
      vd: 46.6,
      focalLengthMm: 121.875,
      glass: "M-TAF31 (approximate spectral proxy; patent nd/νd retained; supplier unresolved)",
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4 (L14)",
      type: "Positive Meniscus",
      nd: 1.85,
      vd: 23.8,
      focalLengthMm: 95.652109,
      glass: "Unmatched (nearest 847238 dense-flint family; patent nd≈1.85, νd≈23.8)",
      diagramLabel: "L14",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5 (L15)",
      type: "Negative Meniscus",
      nd: 1.62,
      vd: 36.3,
      focalLengthMm: -42.85141,
      glass: "620363 — flint class (vendor unresolved)",
      diagramLabel: "L15",
    },
    {
      id: 6,
      name: "L21",
      label: "Element 6 (L21)",
      type: "Biconcave Negative",
      nd: 1.65,
      vd: 33.8,
      focalLengthMm: -16.419089,
      glass: "648339 — dense-flint class (vendor unresolved)",
      diagramLabel: "L21",
      cemented: "J1",
    },
    {
      id: 7,
      name: "L22",
      label: "Element 7 (L22)",
      type: "Biconvex Positive",
      nd: 1.69,
      vd: 54.6,
      focalLengthMm: 27.151668,
      glass: "691548 — lanthanum-crown class (vendor unresolved)",
      diagramLabel: "L22",
      cemented: "J1",
    },
    {
      id: 8,
      name: "L23",
      label: "Element 8 (L23)",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.81,
      vd: 41,
      focalLengthMm: 26.01875,
      glass: "K-VC89 (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L23",
    },
    {
      id: 9,
      name: "L31",
      label: "Element 9 (L31)",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.5,
      vd: 81.6,
      focalLengthMm: -90.418144,
      glass: "J-FK01A (catalog-equivalent spectral proxy; supplier unresolved)",
      diagramLabel: "L31",
    },
    {
      id: 10,
      name: "L41",
      label: "Element 10 (L41)",
      type: "Biconvex Positive",
      nd: 1.51,
      vd: 81.4,
      focalLengthMm: 44.586215,
      glass: "Unmatched (nd≈1.51, νd≈81.4 low-dispersion crown)",
      diagramLabel: "L41",
    },
    {
      id: 11,
      name: "L42",
      label: "Element 11 (L42)",
      type: "Negative Meniscus",
      nd: 1.67,
      vd: 33.1,
      focalLengthMm: -65.410752,
      glass: "N-SF5 (approximate spectral proxy; patent nd/νd retained; supplier unresolved)",
      diagramLabel: "L42",
    },
  ],

  surfaces: [
    { label: "1", R: -72.62, d: 1, sd: 15.6, medium: 1 },
    { label: "2", R: 31.38, d: 1.74, sd: 15.6 },
    { label: "3", R: 34.26, d: 6.5, sd: 15.6, medium: 2 },
    { label: "4", R: -82.03, d: 0.1, sd: 15.6 },
    { label: "5", R: 97.5, d: 2.6, sd: 15.3, medium: 3 },
    { label: "6", R: "flat", d: 0.1, sd: 15.3 },
    { label: "7", R: 27.28, d: 2.9, sd: 14.2, medium: 4 },
    { label: "8", R: 39.05, d: 1.81, sd: 13.3 },
    { label: "9", R: 150.32, d: 1, sd: 13.3, medium: 5 },
    { label: "10", R: 22.52, d: 5.28, sd: 12.4 },
    { label: "STO", R: "flat", d: 5.22 },
    { label: "12", R: -21.54, d: 1, sd: 12.1, medium: 6 },
    { label: "13", R: 21.54, d: 6.7, sd: 14, medium: 7 },
    { label: "14", R: -125.58, d: 0.1, sd: 14.1 },
    {
      label: "15A",
      R: 52.65,
      d: 6,
      sd: 14.7,
      medium: 8,
      asphere: { K: 0, A4: -3.17e-6, A6: -1.74e-8, A8: 2.02e-10, A10: -8.9e-13, A12: 2.15e-15 },
    },
    {
      label: "16A",
      R: -33.35,
      sd: 14.7,
      asphere: { K: 0, A4: 9.97e-6, A6: -1.43e-8, A8: 1.8e-10, A10: -8.2e-13, A12: 2.2e-15 },
    },
    {
      label: "17A",
      R: 100,
      d: 1,
      sd: 14,
      medium: 9,
      asphere: { K: 0, A4: 5.09e-5, A6: -3.64e-7, A8: 1.29e-9, A10: -2.03e-12, A12: 0 },
    },
    { label: "18A", R: 31.03, sd: 13.6, asphere: { K: 0, A4: 5.94e-5, A6: -3.67e-7, A8: 1.28e-9, A10: -2.02e-12, A12: 0 } },
    { label: "19", R: 49.05, d: 7.3, sd: 14.6, medium: 10 },
    { label: "20", R: -40.26, d: 0.1, sd: 14.6 },
    { label: "21", R: 927.62, d: 1, sd: 13.9, medium: 11 },
    { label: "22", R: 41.83, d: 28.44, sd: 13.5 },
  ],

  focus: {
    closeFocusM: 0.5,
    description:
      "PUBLISHED: G3/L31 alone translates 5.75 mm imageward from infinity to the patent's 0.5 m object-distance state; the patent does not define that distance's reference plane, so this is not asserted as the production sensor-plane MFD.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { "16A": { label: "D1", values: [[1, 6.75]] }, "18A": { label: "D2", values: [[8.61, 2.86]] } },

  aperture: { nominalFNumber: 1.8, fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16] },

  rearPlates: [
    {
      label: "GL",
      thicknessMm: 2,
      nd: 1.52,
      vd: 64.2,
      gapAfterMm: 1,
      source: "CN 211955966 U, Example 1 Table 1 S23-S24",
    },
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "10" },
    { text: "G2 (+)", fromSurface: "12", toSurface: "16A" },
    { text: "G3 (−)", fromSurface: "17A", toSurface: "18A" },
    { text: "G4 (+)", fromSurface: "19", toSurface: "22" },
  ],
  doublets: [{ text: "J1", fromSurface: "12", toSurface: "14" }],

  layout: { yScFill: 0.36 },

  checks: { gapSagFrac: 0.97 },
} satisfies LensDataV2Input;

export default LENS_DATA;
