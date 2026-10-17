import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — VILTROX AF 33mm f/1.4 E                                      ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: CN 211826699 U, Example 1 (深圳市雷影光电科技有限公司).       ║
 * ║ Production correlation: Viltrox AF 33mm F1.4 APS-C Sony E.                ║
 * ║ 10 elements / 9 air-separated groups; all ten patent lenses are spherical. ║
 * ║ Focus status: PUBLISHED. G3/L31 alone moves toward the image side.          ║
 * ║                                                                            ║
 * ║ SOURCE CORRECTION — APERTURE STOP:                                         ║
 * ║ Patent Table 1 literally prints “STP” on source row 11, which is the        ║
 * ║ curved L21→L22 cemented interface (R = +36.83 mm, n = 1.85→1.73).          ║
 * ║ The physical stop is source row 9, the plane air surface between G1 and G2, ║
 * ║ consistent with the claims/prose, Fig. 1, and condition (3). This file      ║
 * ║ therefore labels source row 9 as the sole STO and retains row 11 as “11”.   ║
 * ║                                                                            ║
 * ║ REAR FILTER: GL is traced in rearPlates: 17.01 mm before, 2.00 mm      ║
 * ║ at nd=1.52/vd=64.2, and 1.00 mm after. Physical image gap=20.01 mm.    ║
 * ║                                                                            ║
 * ║ FOCUS STATES:                                                               ║
 * ║ Infinity: D1 = 1.00 mm, D2 = 6.24 mm.                                      ║
 * ║ 0.4 m:    D1 = 4.94 mm, D2 = 2.29 mm.                                      ║
 * ║ The published D1+D2 sum differs by 0.01 mm between endpoints; the raw       ║
 * ║ published values are preserved rather than mechanism-normalized.            ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS / APERTURE:                                                  ║
 * ║ The patent publishes no clear semi-diameters or stop diameter. The stop     ║
 * ║ radius is derived from the design f-number. The original calibration        ║
 * ║ gave exactly f/1.4 wide open with rounded indices. Element SDs are          ║
 * ║ inferred from exact spherical ray envelopes at the patent 22.8° half-field, ║
 * ║ the default 0.6-field ray fan, Fig. 1 proportions, and geometry limits.     ║
 * ║ They are modeling values, not patent measurements.                          ║
 * ║                                                                            ║
 * ║ GLASS / SPECTRAL DATA:                                                      ║
 * ║ The patent gives only two-decimal Nd/Vd and no vendor glass names. Generic  ║
 * ║ six-digit classes are used only where catalog residuals are defensible;     ║
 * ║ otherwise the glass is explicitly Unmatched. The patent does not publish    ║
 * ║ nC, nF, ng, or dPgF, so those fields are intentionally not invented.        ║
 * ║                                                                            ║
 * ║ No scaling is applied: s = 1.0. asph = {}.                                 ║
 * ║ Product metadata source:                                                    ║
 * ║ https://viltrox.com/products/viltrox-33mm-f1-4-e-mount-autofocus-prime-lens ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 *
 * MTF audit: all Example 1 source rows match; GL is restored via
 * rearPlates at its physical gaps. EFL 33.754006 differs from printed
 * 33.21 mm; physical BFL 20.375898 differs from image distance 20.01.
 * The +0.365898 mm source contradiction remains. Tier A source search
 * is exhausted: no theta-gF, delta-PgF or line indices for L14; see audit.
 */

/* SD review: CN211826699U, PDF p. 16, Fig. 1, 600 dpi, 2026-09-10 UTC.
 * S8/S10: 11.7/12.3 -> 11.3/11.3 mm; remove hidden stop-gap trims. STO unchanged.
 * Catalog names denote compatible spectral proxies; patent nd/vd and supplier uncertainty are retained.
 */
const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "viltrox-af-33mm-f14-e",
  maker: "Viltrox",
  name: "VILTROX AF 33mm f/1.4 E",
  subtitle: "CN 211826699 U Example 1 — correlated to Viltrox AF 33mm F1.4 E",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "aps-c",
    specs: [
      "10 ELEMENTS / 9 GROUPS",
      "PATENT f = 33.21 mm",
      "MODEL EFL ≈ 33.754 mm",
      "F/1.4",
      "2ω = 45.6°",
      "INTERNAL FOCUS",
    ],
    elementCount: 10,
    groupCount: 9,
    focalLengthMm: { marketing: 33, design: 33.7540057914589 },
    fNumber: { marketing: 1.4, design: 1.4 },
  },

  source: {
    patentNumber: "CN 211826699 U",
    patentYear: 2020,
    authors: ["Liu Ruijun", "Chen Baofeng"],
    assignees: ["Shenzhen Leiying Photoelectric Technology Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Negative Meniscus",
      nd: 1.71,
      vd: 29.51,
      focalLengthMm: -42.25162721182303,
      glass: "Unmatched (717295-class dense flint; nd=1.71, νd=29.51)",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Biconvex Positive",
      nd: 1.73,
      vd: 54.67,
      focalLengthMm: 34.30927279370203,
      glass: "729547 — high-index crown class (vendor unproven)",
      diagramLabel: "L12",
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Positive Meniscus",
      nd: 1.81,
      vd: 33.29,
      focalLengthMm: 64.88876875665379,
      glass: "Unmatched (806333-class high-index flint; nd=1.81, νd=33.29)",
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "L14",
      label: "Element L14",
      type: "Negative Meniscus",
      nd: 1.51,
      vd: 81.59,
      focalLengthMm: -63.30969273960629,
      glass: "Unmatched (low-dispersion crown; nd=1.51, νd=81.59)",
      diagramLabel: "L14",
    },
    {
      id: 5,
      name: "L21",
      label: "Element L21",
      type: "Biconcave Negative",
      nd: 1.85,
      vd: 23.79,
      focalLengthMm: -12.693330925761579,
      glass: "Unmatched (847238-class dense flint; nd=1.85, νd=23.79)",
      diagramLabel: "L21",
      cemented: "L21+L22",
    },
    {
      id: 6,
      name: "L22",
      label: "Element L22",
      type: "Biconvex Positive",
      nd: 1.73,
      vd: 54.67,
      focalLengthMm: 18.583098002691944,
      glass: "729547 — high-index crown class (vendor unproven)",
      diagramLabel: "L22",
      cemented: "L21+L22",
    },
    {
      id: 7,
      name: "L23",
      label: "Element L23",
      type: "Biconvex Positive",
      nd: 1.92,
      vd: 20.88,
      focalLengthMm: 35.160605724879154,
      glass: "923209 — high-index flint class (vendor unproven)",
      diagramLabel: "L23",
    },
    {
      id: 8,
      name: "L31",
      label: "Element L31",
      type: "Negative Meniscus",
      nd: 1.57,
      vd: 42.81,
      focalLengthMm: -49.428658007595054,
      glass: "567428 — optical-glass class (vendor unproven)",
      diagramLabel: "L31",
    },
    {
      id: 9,
      name: "L41",
      label: "Element L41",
      type: "Biconvex Positive",
      nd: 1.74,
      vd: 52.67,
      focalLengthMm: 21.82812368358466,
      glass: "741527 — high-index crown class (vendor unproven)",
      diagramLabel: "L41",
    },
    {
      id: 10,
      name: "L42",
      label: "Element L42",
      type: "Negative Meniscus",
      nd: 1.85,
      vd: 23.79,
      focalLengthMm: -36.22475650741593,
      glass: "Unmatched (847238-class dense flint; nd=1.85, νd=23.79)",
      diagramLabel: "L42",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 224.24, d: 1.0, sd: 16.2, medium: 1 },
    { label: "2", R: 26.41, d: 10.94, sd: 16.0 },
    { label: "3", R: 36.12, d: 6.57, sd: 17.1, medium: 2 },
    { label: "4", R: -75.42, d: 0.1, sd: 17.1 },
    { label: "5", R: 21.48, d: 3.72, sd: 15.4, medium: 3 },
    { label: "6", R: 33.51, d: 1.89, sd: 15.2 },
    { label: "7", R: 23.1, d: 1.3, sd: 13.4, medium: 4 },
    { label: "8", R: 13.21, d: 7.46, sd: 11.3 },
    { label: "STO", R: "flat", d: 5.3 },
    { label: "10", R: -15.45, d: 1.0, sd: 11.3, medium: 5 },
    { label: "11", R: 36.83, d: 6.73, sd: 12.3, medium: 6 },
    { label: "12", R: -19.82, d: 0.1, sd: 12.45 },
    { label: "13", R: 68.28, d: 3.59, sd: 12.8, medium: 7 },
    { label: "14", R: -59.92, sd: 12.7 },
    { label: "15", R: 88.17, d: 0.7, sd: 12.0, medium: 8 },
    { label: "16", R: 21.29, sd: 11.8 },
    { label: "17", R: 36.49, d: 7.23, sd: 12.4, medium: 9 },
    { label: "18", R: -26.54, d: 0.1, sd: 12.3 },
    { label: "19", R: -27.77, d: 1.0, sd: 12.2, medium: 10 },
    { label: "20", R: -287.72, d: 17.01, sd: 12.0 },
  ],

  focus: {
    closeFocusM: 0.4,
    description:
      "PUBLISHED — single-element internal focus: negative G3/L31 moves 3.94 mm toward the image side from infinity " +
      "to the published 0.4 m state (D1 1.00→4.94 mm; D2 6.24→2.29 mm). The source's 0.01 mm D1+D2 rounding " +
      "difference is retained.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Published internal-focus spacings ── */
  gaps: { "14": { label: "D1", values: [[1.0, 4.94]] }, "16": { label: "D2", values: [[6.24, 2.29]] } },

  aperture: { nominalFNumber: 1.4, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 9 },

  rearPlates: [
    {
      label: "GL",
      thicknessMm: 2.0,
      nd: 1.52,
      vd: 64.2,
      gapAfterMm: 1.0,
      source: "CN 211826699 U, Example 1 Table 1, surfaces 21–22",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "8" },
    { text: "G2", fromSurface: "10", toSurface: "14" },
    { text: "G3", fromSurface: "15", toSurface: "16" },
    { text: "G4", fromSurface: "17", toSurface: "20" },
  ],
  doublets: [{ text: "L21+L22", fromSurface: "10", toSurface: "12" }],

  layout: { yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
