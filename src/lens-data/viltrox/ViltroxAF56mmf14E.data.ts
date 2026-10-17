import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — VILTROX AF 56mm f/1.4 E
 * ║  Data source: CN 211955965 U, Example 1 (刘瑞军; 陈宝锋).                ║
 * ║  Production correlation: Viltrox AF 56mm F1.4 E, Sony E, APS-C.           ║
 * ║  10 elements / 9 physical groups; all spherical.                          ║
 * ║  Focus status: PUBLISHED. L31/G3 moves 4.01 mm imageward.                 ║
 * ║                                                                            ║
 * ║  SOURCE CORRECTIONS / MODELING:                                            ║
 * ║  - Patent row 9 is the physical aperture-stop plane shown in Fig. 1 and   ║
 * ║    is modeled as the one and only STO. The following powered row printed  ║
 * ║    "STP" (R=+34.11) is retained as surface 11, the L21→L22 cemented       ║
 * ║    interface, with downstream L22 elemId/index.                            ║
 * ║  - GL filter surfaces 21–22 are traced via rearPlates at source gaps.   ║
 * ║  - Patent indices are retained exactly as printed (two decimals). Their   ║
 * ║    rounded precision yields EFL 56.234583 mm from the active arrays versus ║
 * ║    the patent's 55.90 mm; no radius, thickness, or index is silently fixed.║
 * ║  - The patent states Fno 1.4 but does not publish the stop diameter. The   ║
 * ║    stop radius is derived from the design f-number. The modeled            ║
 * ║    nominalFno=1.412094945 comes from the f/1.4 calibration of the          ║
 * ║    higher-precision coordinate proxy used only as a source-rounding check  ║
 * ║    in Stage 1, evaluated with the retained rounded patent indices.         ║
 * ║  - Semi-diameters are inferred from exact spherical ray envelopes at both ║
 * ║    published focus states, including full on-axis pupil rays, 0.6-field    ║
 * ║    off-axis bundles, and full-field chief rays, then checked for element   ║
 * ║    edge thickness, actual rim slope, cross-gap intrusion, and containment.║
 * ║    The S2-S3 0.97 mm gap is source-geometry-limited; gapSagFrac=0.995      ║
 * ║    preserves the full on-axis clear bundle without allowing contact.       ║
 * ║  - No nC/nF/ng/dPgF values are authored because the selected patent does   ║
 * ║    not publish them and the vendor melt identities are not established.    ║
 * ║                                                                            ║
 * ║  No scaling, aspheres, zoom, folded path, dummy surfaces, or internal      ║
 * ║  focus reconstruction is used.                                             ║
 *
 * MTF audit: Example 1 R/d/nd/vd all match. GL is now traced at its
 * physical gaps in rearPlates. Physical BFL 17.180324 mm differs from
 * source image distance 16.67 mm; +0.510324 mm offset is unchanged.
 * Coarse source indices are a plausible cause, not proven glass identity.
 * Keep the source values; no supported single misprint resolves the mismatch.
 */

// Manufacturer identity/specification sources:
// https://viltrox.com/products/viltrox-autofocus-56mm-f1-4-e-mount-prime-lens
// https://viltrox.com/pages/af56-1-4e

/* SD review: CN211955965U, PDF p. 16, Fig. 1, 600 dpi, 2026-09-10 UTC.
 * Optical-rim proportions reviewed; existing geometry-limited inferred SDs retained.
 * Catalog names denote compatible spectral proxies; patent nd/vd and supplier uncertainty are retained.
 */
const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "viltrox-af-56mm-f14-e",
  maker: "Viltrox",
  name: "VILTROX AF 56mm f/1.4 E",
  subtitle: "CN 211955965 U Example 1 — published one-element internal-focus design",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "aps-c",
    specs: [
      "10 ELEMENTS / 9 GROUPS",
      "56 mm MARKETED / 55.90 mm PATENT",
      "f/1.4 MARKETED / F/1.412 MODEL",
      "2ω = 28.2°",
      "ALL-SPHERICAL",
      "1-ELEMENT INNER FOCUS",
    ],
    elementCount: 10,
    groupCount: 9,
    focalLengthMm: { marketing: 56, design: 55.9 },
    fNumber: { marketing: 1.4, design: 1.4 },
  },

  source: {
    patentNumber: "CN 211955965 U",
    patentYear: 2020,
    authors: ["Liu Ruijun", "Chen Baofeng"],
    assignees: ["Shenzhen Leiying Photoelectric Technology Co., Ltd."],
  },

  /* Patent supplies only rounded d-line nd/νd. Vendor melts and line-index data are not established. */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1 (L11)",
      type: "Negative Meniscus",
      nd: 1.65,
      vd: 33.84,
      indexReference: "d",
      focalLengthMm: -216.460874,
      glass: "648338 class (vendor unresolved)",
      apd: false,
      role: "Weak negative front meniscus in positive G1.",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2 (L12)",
      type: "Biconvex Positive",
      nd: 1.73,
      vd: 54.68,
      indexReference: "d",
      focalLengthMm: 50.079447,
      glass: "729547 class (vendor unresolved)",
      apd: false,
      role: "Strong positive element in G1.",
      diagramLabel: "L12",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3 (L13)",
      type: "Positive Meniscus",
      nd: 1.88,
      vd: 39.22,
      indexReference: "d",
      focalLengthMm: 51.238162,
      glass: "TAFD33 (catalog-equivalent spectral proxy; supplier unresolved)",
      apd: false,
      role: "Dense positive meniscus in G1.",
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4 (L14)",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 29.51,
      indexReference: "d",
      focalLengthMm: -27.662588,
      glass: "717295 class (vendor unresolved)",
      apd: false,
      role: "Negative rear element of G1 ahead of the aperture stop.",
      diagramLabel: "L14",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5 (L21)",
      type: "Biconcave Negative",
      nd: 1.7,
      vd: 30.05,
      indexReference: "d",
      focalLengthMm: -19.504376,
      glass: "699301 class (vendor unresolved)",
      apd: false,
      role: "Negative member of the cemented L21-L22 pair in positive G2.",
      diagramLabel: "L21",
      cemented: "J1",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6 (L22)",
      type: "Biconvex Positive",
      nd: 1.88,
      vd: 39.23,
      indexReference: "d",
      focalLengthMm: 20.383026,
      glass: "TAFD33 (catalog-equivalent spectral proxy; supplier unresolved)",
      apd: false,
      role: "Positive member of the cemented L21-L22 pair in G2.",
      diagramLabel: "L22",
      cemented: "J1",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 7 (L23)",
      type: "Biconvex Positive",
      nd: 1.91,
      vd: 35.26,
      indexReference: "d",
      focalLengthMm: 48.303589,
      glass: "911353 class (vendor unresolved)",
      apd: false,
      role: "High-index positive element completing G2.",
      diagramLabel: "L23",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8 (L31)",
      type: "Negative Meniscus",
      nd: 1.73,
      vd: 54.67,
      indexReference: "d",
      focalLengthMm: -35.130538,
      glass: "729547 class (vendor unresolved)",
      apd: false,
      role: "Single negative internal-focus element; the only moving focus group.",
      diagramLabel: "L31",
    },
    {
      id: 9,
      name: "L41",
      label: "Element 9 (L41)",
      type: "Biconvex Positive",
      nd: 1.5,
      vd: 81.59,
      indexReference: "d",
      focalLengthMm: 31.224145,
      glass: "J-FK01A (catalog-equivalent spectral proxy; supplier unresolved)",
      apd: false,
      role: "Positive high-Abbe element in G4; consistent with the production formula's single ED element.",
      diagramLabel: "L41",
    },
    {
      id: 10,
      name: "L42",
      label: "Element 10 (L42)",
      type: "Negative Meniscus",
      nd: 1.57,
      vd: 42.81,
      indexReference: "d",
      focalLengthMm: -81.001215,
      glass: "567428 class (vendor unresolved)",
      apd: false,
      role: "Weak negative rear meniscus completing positive G4.",
      diagramLabel: "L42",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 45.23, d: 1.5, sd: 21.0, medium: 1 },
    { label: "2", R: 33.78, d: 0.97, sd: 19.95 },
    { label: "3", R: 38.58, d: 6.5, sd: 19.95, medium: 2 },
    { label: "4", R: -647.94, d: 0.1, sd: 20.0 },
    { label: "5", R: 24.52, d: 5.72, sd: 18.0, medium: 3 },
    { label: "6", R: 47.88, d: 1.56, sd: 17.0 },
    { label: "7", R: 70.55, d: 1.0, sd: 16.7, medium: 4 },
    { label: "8", R: 15.44, d: 8.98, sd: 13.3 },
    { label: "STO", R: "flat", d: 6.38 },
    { label: "10", R: -23.04, d: 1.0, sd: 13.0, medium: 5 },
    { label: "11", R: 34.11, d: 7.61, sd: 14.6, medium: 6 },
    { label: "12", R: -33.88, d: 0.1, sd: 14.8 },
    { label: "13", R: 71.02, d: 3.63, sd: 14.3, medium: 7 },
    { label: "14", R: -112.54, sd: 14.1 },
    { label: "15", R: 159.39, d: 0.7, sd: 12.8, medium: 8 },
    { label: "16", R: 22.05, sd: 12.0 },
    { label: "17", R: 29.01, d: 10.0, sd: 13.4, medium: 9 },
    { label: "18", R: -29.92, d: 3.48, sd: 13.2 },
    { label: "19", R: -26.39, d: 1.23, sd: 11.8, medium: 10 },
    { label: "20", R: -62.64, d: 13.67, sd: 12.2 },
  ],

  focus: {
    closeFocusM: 0.63,
    description:
      "PUBLISHED inner focus: L31/G3 translates 4.01 mm imageward; D1 1.00→5.01 mm and D2 7.86→3.85 mm. " +
      "The modeled close endpoint is the patent's 0.63 m state; Viltrox markets the production lens at 0.6 m MFD.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) Published Example 1 focus gaps: D1 increases and D2 decreases by exactly 4.01 mm. */
  gaps: { "14": { label: "D1", values: [[1.0, 5.01]] }, "16": { label: "D2", values: [[7.86, 3.85]] } },

  aperture: { nominalFNumber: 1.4120949446201125, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 9 },

  rearPlates: [
    {
      label: "GL",
      thicknessMm: 2.0,
      nd: 1.52,
      vd: 64.2,
      gapAfterMm: 1.0,
      source: "CN 211955965 U, Example 1 Table 1, surfaces 21–22",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "8" },
    { text: "G2", fromSurface: "10", toSurface: "14" },
    { text: "G3 (FOCUS)", fromSurface: "15", toSurface: "16" },
    { text: "G4", fromSurface: "17", toSurface: "20" },
  ],
  doublets: [{ text: "J1", fromSurface: "10", toSurface: "12" }],

  layout: { yScFill: 0.42 },

  /* The source geometry leaves only ~0.008 mm radial shared-band clearance at S2-S3 for the selected SD. */
  checks: { gapSagFrac: 0.995 },
} satisfies LensDataV2Input;

export default LENS_DATA;
