import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF-S NIKKOR 14-24mm f/2.8G ED                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 7,359,125 B2, Example 1 (Kimura & Sato / Nikon). ║
 * ║  Two-group negative-leading (retrofocus) zoom.                     ║
 * ║  15 elements / 11 groups, 3 aspherical surfaces, 2 ED elements.   ║
 * ║  Focus: internal focus via L1 (E7+E8 cemented doublet in G2).     ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D11, BF (zoom + focus for D11; zoom-only BF).║
 * ║  Focus variable gaps: D11, D14 (zoom + focus).                    ║
 * ║  No reversing groups.                                              ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Estimated via paraxial marginal +     ║
 * ║    chief ray trace at wide (2ω=114.7°) and tele (2ω=83.8°), then ║
 * ║    rebalanced against Nikon's published construction diagram to     ║
 * ║    keep the production-like silhouette while satisfying edge        ║
 * ║    thickness, sd/|R| < 0.90, element SD ratio ≤ 1.25, and          ║
 * ║    cross-gap sag-clearance constraints. Front group SDs remain      ║
 * ║    limited by inner-surface R constraints and may understate the    ║
 * ║    physical clear aperture of the deep meniscus front elements.     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-afs-14-24f28",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 14-24mm f/2.8G ED",
  subtitle: "US 7,359,125 B2 EXAMPLE 1 — KIMURA & SATO / NIKON",
  specs: [
    "15 ELEMENTS / 11 GROUPS",
    "f = 14.4–23.8 mm",
    "F/2.88",
    "2ω = 114.7°–83.8°",
    "3 ASPHERICAL SURFACES · 2 ED ELEMENTS",
  ],

  focalLengthMarketing: [14, 24],
  focalLengthDesign: [14.4, 23.8],
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  patentYear: 2008,
  elementCount: 15,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.804,
      vd: 46.58,
      fl: -91.3,
      glass: "S-LAH65 (OHARA)",
      apd: false,
      role: "Front field-flattening meniscus; high-index lanthanum crown reduces Petzval curvature",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.6779,
      vd: 55.34,
      fl: -71.1,
      glass: "S-BAH11 (OHARA)",
      apd: false,
      role: "Aspherical meniscus (PGM); primary corrector for field curvature and distortion across the ultra-wide field",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.741,
      vd: 52.67,
      fl: -51.9,
      glass: "S-LAH53 (OHARA)",
      apd: false,
      cemented: "J1",
      role: "Front element of cemented doublet; lanthanum crown provides chromatic correction within G1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.55389,
      vd: 38.09,
      fl: 357.6,
      glass: "S-TIM25 (OHARA)",
      apd: false,
      cemented: "J1",
      role: "Rear element of cemented doublet with strong aspherical exit surface (K = −7.38); controls sagittal coma flare",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.49782,
      vd: 82.52,
      fl: -56.1,
      glass: "ED glass (FPL family, OHARA)",
      apd: "inferred",
      apdNote: "S-FPL52 or equivalent; ΔPgF ≈ +0.038; ED element #1",
      role: "First ED element; provides negative power with minimal chromatic contribution due to very high Abbe number",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.8044,
      vd: 39.59,
      fl: 48.1,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Sole positive element in G1; forms an achromatic sub-unit with E5 (ED glass) to control lateral chromatic aberration",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.72,
      fl: -54.9,
      glass: "S-LAH55 (OHARA)",
      apd: false,
      cemented: "J2",
      role: "Front element of focusing doublet L1; negative meniscus convex to object",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.62374,
      vd: 47.04,
      fl: 32.1,
      glass: "S-BSM81 (OHARA)",
      apd: false,
      cemented: "J2",
      role: "Rear element of focusing doublet L1; positive meniscus with nearly flat rear (R = 611.6 mm)",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.1,
      fl: 110.8,
      glass: "S-BSL7 (OHARA)",
      apd: false,
      role: "L2 — gently positive meniscus convex to image; provides symmetric spherical aberration correction near the stop",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.72,
      fl: -27.7,
      glass: "S-LAH55 (OHARA)",
      apd: false,
      role: "L3 — strongest single element; biconcave for sagittal field and sagittal coma correction",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.57099,
      vd: 50.8,
      fl: 42.4,
      glass: "S-BAL42 (OHARA)",
      apd: false,
      role: "Moderately powered positive element; counterbalances E10's divergence in a triplet-like sub-unit",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.772789,
      vd: 49.45,
      fl: -56.9,
      glass: "S-LAH59 (OHARA)",
      apd: false,
      cemented: "J3",
      role: "Front element of achromatic corrector doublet; negative meniscus convex to object",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      fl: 26.3,
      glass: "ED glass (FPL family, OHARA)",
      apd: "inferred",
      apdNote: "S-FPL52 or equivalent; ΔPgF ≈ +0.038; ED element #2",
      cemented: "J3",
      role: "Second ED element; primary achromatic corrector in G2 paired with E12",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 40.94,
      fl: -25.7,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "J4",
      role: "Front element of near-afocal corrector doublet; negative meniscus (nearly plano front)",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58913,
      vd: 61.18,
      fl: 26.6,
      glass: "S-BAL35 (OHARA)",
      apd: false,
      cemented: "J4",
      role: "Rear element with aspherical exit surface; near-afocal doublet acts as field-flattening / coma corrector plate",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── G1: Negative front group (6 elements, 5 air-separated groups) ──
    { label: "1", R: 60.3937, d: 3.5, nd: 1.804, elemId: 1, sd: 35.5 },
    { label: "2", R: 32.2703, d: 7.0835, nd: 1.0, elemId: 0, sd: 28.5 },
    { label: "3", R: 35.5, d: 4.0, nd: 1.6779, elemId: 2, sd: 21.5 },
    { label: "4A", R: 19.5117, d: 12.8951, nd: 1.0, elemId: 0, sd: 17.3 },
    { label: "5", R: 87.0449, d: 2.5, nd: 1.741, elemId: 3, sd: 20.0 },
    { label: "6", R: 26.3306, d: 0.3, nd: 1.55389, elemId: 4, sd: 20.0 },
    { label: "7A", R: 30.2448, d: 12.6887, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "8", R: -67.993, d: 2.5896, nd: 1.49782, elemId: 5, sd: 20.0 },
    { label: "9", R: 48.0626, d: 2.0, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "10", R: 48.488, d: 5.9634, nd: 1.8044, elemId: 6, sd: 20.5 },
    { label: "11", R: -181.2948, d: 31.93, nd: 1.0, elemId: 0, sd: 20.5 }, // d = var (zoom gap)

    // ── G2: Positive rear group (9 elements, 6 air-separated groups) ──
    // L1 focusing doublet (E7 + E8)
    { label: "12", R: 34.6184, d: 1.0, nd: 1.83481, elemId: 7, sd: 15.0 },
    { label: "13", R: 19.4637, d: 5.2931, nd: 1.62374, elemId: 8, sd: 14.0 },
    { label: "14", R: 611.599, d: 5.86, nd: 1.0, elemId: 0, sd: 13.4 }, // d = var (focus gap)

    // Aperture stop
    { label: "STO", R: 1e15, d: 1.6689, nd: 1.0, elemId: 0, sd: 11.0 },

    // L2 — positive meniscus (E9)
    { label: "16", R: -265.5383, d: 2.6545, nd: 1.5168, elemId: 9, sd: 12.0 },
    { label: "17", R: -47.2569, d: 9.0744, nd: 1.0, elemId: 0, sd: 12.5 },

    // L3 — biconcave negative (E10)
    { label: "18", R: -27.9322, d: 1.6819, nd: 1.83481, elemId: 10, sd: 15.0 },
    { label: "19", R: 138.6775, d: 0.1, nd: 1.0, elemId: 0, sd: 15.5 },

    // E11 — biconvex positive
    { label: "20", R: 35.6745, d: 4.4701, nd: 1.57099, elemId: 11, sd: 14.2 },
    { label: "21", R: -71.8719, d: 0.1, nd: 1.0, elemId: 0, sd: 14.8 },

    // Cemented doublet E12 + E13 (achromatic corrector with ED glass)
    { label: "22", R: 27.2079, d: 1.3817, nd: 1.772789, elemId: 12, sd: 15.8 },
    { label: "23", R: 16.4317, d: 8.491, nd: 1.49782, elemId: 13, sd: 13.2 },
    { label: "24", R: -53.0, d: 1.721, nd: 1.0, elemId: 0, sd: 14.4 },

    // Cemented doublet E14 + E15 (near-afocal corrector with aspherical rear)
    { label: "25", R: 1336.7107, d: 1.0, nd: 1.8061, elemId: 14, sd: 16.0 },
    { label: "26", R: 20.3824, d: 6.3537, nd: 1.58913, elemId: 15, sd: 13.6 },
    { label: "27A", R: -60.1135, d: 38.7, nd: 1.0, elemId: 0, sd: 14.8 }, // d = Bf (zoom only)
  ],

  /* ── Aspherical coefficients ──
   *  Patent convention: κ in Z(y) = (y²/R) / [1 + √(1 − κ·y²/R²)] + Σ Cn·yⁿ
   *  Standard convention: K = κ − 1
   */
  asph: {
    "4A": {
      K: -0.9087, // κ = 0.0913
      A4: -5.1181e-7,
      A6: 7.1056e-10,
      A8: -1.9817e-11,
      A10: 1.9226e-14,
      A12: -6.0945e-18,
      A14: 0,
    },
    "7A": {
      K: -7.3795, // κ = −6.3795
      A4: 4.2239e-5,
      A6: -7.8972e-8,
      A8: 2.9788e-10,
      A10: -5.9331e-13,
      A12: 6.0285e-16,
      A14: -7.4037e-20,
    },
    "27A": {
      K: 5.0164, // κ = 6.0164
      A4: 1.9855e-5,
      A6: 6.9569e-9,
      A8: 1.5384e-10,
      A10: -5.8393e-13,
      A12: 0,
      A14: 0,
    },
  },

  /* ── Variable air spacings ──
   *  3 zoom positions: W (14.4mm), M (18.0mm), T (23.8mm)
   *  Variable gaps: D11 (zoom+focus), D14 (focus only), BF (zoom only)
   */
  zoomPositions: [14.4, 18.0, 23.8],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Tele"],

  var: {
    "11": [
      [31.93, 36.36],
      [16.37, 20.38],
      [1.2, 5.21],
    ],
    "14": [
      [5.86, 1.43],
      [5.86, 1.85],
      [5.86, 1.85],
    ],
    "27A": [
      [38.7, 38.7],
      [44.55, 44.55],
      [53.97, 53.97],
    ],
  },

  varLabels: [
    ["11", "D11"],
    ["14", "D14"],
    ["27A", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (−) Neg. Front", fromSurface: "1", toSurface: "11" },
    { text: "G2 (+) Pos. Rear", fromSurface: "12", toSurface: "27A" },
  ],

  doublets: [
    { text: "J1", fromSurface: "5", toSurface: "7A" },
    { text: "J2", fromSurface: "12", toSurface: "14" },
    { text: "J3", fromSurface: "22", toSurface: "24" },
    { text: "J4", fromSurface: "25", toSurface: "27A" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.3,
  focusDescription:
    "Internal focus via L1 (E7+E8 cemented doublet); translates rearward ~4.4 mm from infinity to 300 mm.",

  /* ── Aperture configuration ── */
  nominalFno: 2.88,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
