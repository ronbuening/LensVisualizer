import type { LensDataInput } from "../../types/optics.js";

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
 * ║ FILTER OMISSION / REAR-PLANE NORMALIZATION:                                ║
 * ║ The patent GL plate after L42 is excluded under the current data spec.      ║
 * ║ Its 2.00 mm, n=1.52 plate plus 1.00 mm rear air are folded into the final   ║
 * ║ air spacing: 17.01 + 2.00/1.52 + 1.00 = 19.32578947368421 mm.              ║
 * ║                                                                            ║
 * ║ FOCUS STATES:                                                               ║
 * ║ Infinity: D1 = 1.00 mm, D2 = 6.24 mm.                                      ║
 * ║ 0.4 m:    D1 = 4.94 mm, D2 = 2.29 mm.                                      ║
 * ║ The published D1+D2 sum differs by 0.01 mm between endpoints; the raw       ║
 * ║ published values are preserved rather than mechanism-normalized.            ║
 * ║                                                                            ║
 * ║ SEMI-DIAMETERS / APERTURE:                                                  ║
 * ║ The patent publishes no clear semi-diameters or stop diameter. STO sd is    ║
 * ║ calibrated to the rounded-index prescription so the modeled wide-open       ║
 * ║ f-number is exactly 1.4 (STO sd = 10.551693783709986 mm). Element SDs are   ║
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
 */

/* SD review: CN211826699U, PDF p. 16, Fig. 1, 600 dpi, 2026-09-10 UTC.
 * S8/S10: 11.7/12.3 -> 11.3/11.3 mm; remove hidden stop-gap trims. STO unchanged.
 * Catalog names denote compatible spectral proxies; patent nd/vd and supplier uncertainty are retained.
 */
const LENS_DATA = {
  /* ── Identity ── */
  key: "viltrox-af-33mm-f14-e",
  maker: "Viltrox",
  name: "VILTROX AF 33mm f/1.4 E",
  subtitle: "CN 211826699 U Example 1 — correlated to Viltrox AF 33mm F1.4 E",
  specs: [
    "10 ELEMENTS / 9 GROUPS",
    "PATENT f = 33.21 mm",
    "MODEL EFL ≈ 33.754 mm",
    "F/1.4",
    "2ω = 45.6°",
    "INTERNAL FOCUS",
  ],

  focalLengthMarketing: 33,
  focalLengthDesign: 33.7540057914589,
  apertureMarketing: 1.4,
  apertureDesign: 1.4,
  lensMounts: ["sony-fe"],
  imageFormat: "aps-c",
  patentNumber: "CN 211826699 U",
  patentAuthors: ["Liu Ruijun", "Chen Baofeng"],
  patentAssignees: ["Shenzhen Leiying Photoelectric Technology Co., Ltd."],
  patentYear: 2020,
  elementCount: 10,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      diagramLabel: "L11",
      label: "Element L11",
      type: "Negative Meniscus",
      nd: 1.71,
      vd: 29.51,
      fl: -42.25162721182303,
      glass: "Unmatched (717295-class dense flint; nd=1.71, νd=29.51)",
    },
    {
      id: 2,
      name: "L12",
      diagramLabel: "L12",
      label: "Element L12",
      type: "Biconvex Positive",
      nd: 1.73,
      vd: 54.67,
      fl: 34.30927279370203,
      glass: "729547 — high-index crown class (vendor unproven)",
    },
    {
      id: 3,
      name: "L13",
      diagramLabel: "L13",
      label: "Element L13",
      type: "Positive Meniscus",
      nd: 1.81,
      vd: 33.29,
      fl: 64.88876875665379,
      glass: "Unmatched (806333-class high-index flint; nd=1.81, νd=33.29)",
    },
    {
      id: 4,
      name: "L14",
      diagramLabel: "L14",
      label: "Element L14",
      type: "Negative Meniscus",
      nd: 1.51,
      vd: 81.59,
      fl: -63.30969273960629,
      glass: "Unmatched (low-dispersion crown; nd=1.51, νd=81.59)",
    },
    {
      id: 5,
      name: "L21",
      diagramLabel: "L21",
      label: "Element L21",
      type: "Biconcave Negative",
      nd: 1.85,
      vd: 23.79,
      fl: -12.693330925761579,
      glass: "Unmatched (847238-class dense flint; nd=1.85, νd=23.79)",
      cemented: "L21+L22",
    },
    {
      id: 6,
      name: "L22",
      diagramLabel: "L22",
      label: "Element L22",
      type: "Biconvex Positive",
      nd: 1.73,
      vd: 54.67,
      fl: 18.583098002691944,
      glass: "729547 — high-index crown class (vendor unproven)",
      cemented: "L21+L22",
    },
    {
      id: 7,
      name: "L23",
      diagramLabel: "L23",
      label: "Element L23",
      type: "Biconvex Positive",
      nd: 1.92,
      vd: 20.88,
      fl: 35.160605724879154,
      glass: "923209 — high-index flint class (vendor unproven)",
    },
    {
      id: 8,
      name: "L31",
      diagramLabel: "L31",
      label: "Element L31",
      type: "Negative Meniscus",
      nd: 1.57,
      vd: 42.81,
      fl: -49.428658007595054,
      glass: "567428 — optical-glass class (vendor unproven)",
    },
    {
      id: 9,
      name: "L41",
      diagramLabel: "L41",
      label: "Element L41",
      type: "Biconvex Positive",
      nd: 1.74,
      vd: 52.67,
      fl: 21.82812368358466,
      glass: "741527 — high-index crown class (vendor unproven)",
    },
    {
      id: 10,
      name: "L42",
      diagramLabel: "L42",
      label: "Element L42",
      type: "Negative Meniscus",
      nd: 1.85,
      vd: 23.79,
      fl: -36.22475650741593,
      glass: "Unmatched (847238-class dense flint; nd=1.85, νd=23.79)",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 224.24, d: 1.0, nd: 1.71, elemId: 1, sd: 16.2 },
    { label: "2", R: 26.41, d: 10.94, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "3", R: 36.12, d: 6.57, nd: 1.73, elemId: 2, sd: 17.1 },
    { label: "4", R: -75.42, d: 0.1, nd: 1.0, elemId: 0, sd: 17.1 },
    { label: "5", R: 21.48, d: 3.72, nd: 1.81, elemId: 3, sd: 15.4 },
    { label: "6", R: 33.51, d: 1.89, nd: 1.0, elemId: 0, sd: 15.2 },
    { label: "7", R: 23.1, d: 1.3, nd: 1.51, elemId: 4, sd: 13.4 },
    { label: "8", R: 13.21, d: 7.46, nd: 1.0, elemId: 0, sd: 11.3 },
    { label: "STO", R: 1e15, d: 5.3, nd: 1.0, elemId: 0, sd: 10.551693783709986 },
    { label: "10", R: -15.45, d: 1.0, nd: 1.85, elemId: 5, sd: 11.3 },
    { label: "11", R: 36.83, d: 6.73, nd: 1.73, elemId: 6, sd: 12.3 },
    { label: "12", R: -19.82, d: 0.1, nd: 1.0, elemId: 0, sd: 12.45 },
    { label: "13", R: 68.28, d: 3.59, nd: 1.92, elemId: 7, sd: 12.8 },
    { label: "14", R: -59.92, d: 1.0, nd: 1.0, elemId: 0, sd: 12.7 },
    { label: "15", R: 88.17, d: 0.7, nd: 1.57, elemId: 8, sd: 12.0 },
    { label: "16", R: 21.29, d: 6.24, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "17", R: 36.49, d: 7.23, nd: 1.74, elemId: 9, sd: 12.4 },
    { label: "18", R: -26.54, d: 0.1, nd: 1.0, elemId: 0, sd: 12.3 },
    { label: "19", R: -27.77, d: 1.0, nd: 1.85, elemId: 10, sd: 12.2 },
    { label: "20", R: -287.72, d: 19.32578947368421, nd: 1.0, elemId: 0, sd: 12.0 },
  ],

  asph: {},

  /* ── Published internal-focus spacings ── */
  var: {
    "14": [1.0, 4.94],
    "16": [6.24, 2.29],
  },
  varLabels: [
    ["14", "D1"],
    ["16", "D2"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "8" },
    { text: "G2", fromSurface: "10", toSurface: "14" },
    { text: "G3", fromSurface: "15", toSurface: "16" },
    { text: "G4", fromSurface: "17", toSurface: "20" },
  ],
  doublets: [{ text: "L21+L22", fromSurface: "10", toSurface: "12" }],

  closeFocusM: 0.4,
  focusDescription:
    "PUBLISHED — single-element internal focus: negative G3/L31 moves 3.94 mm toward the image side from infinity " +
    "to the published 0.4 m state (D1 1.00→4.94 mm; D2 6.24→2.29 mm). The source's 0.01 mm D1+D2 rounding " +
    "difference is retained.",

  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 9,

  yScFill: 0.34,
} satisfies LensDataInput;

export default LENS_DATA;
