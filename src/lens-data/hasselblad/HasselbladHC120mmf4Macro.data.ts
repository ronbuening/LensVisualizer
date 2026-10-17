import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — HASSELBLAD HC MACRO 4/120                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2004-302170 A, Example 4 (Table 4).              ║
 * ║  Applicant: Fuji Photo Optical Co., Ltd.                          ║
 * ║  Inventor: Kazunori Ohno (大野 和則).                               ║
 * ║  Front-focus macro lens, positive front group + negative rear.     ║
 * ║  9 elements / 9 groups, all spherical.                            ║
 * ║  Focus: front-group unit extension (L1–L6), rear group fixed.     ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent normalised to f = 100 mm. All R, d, sd values scaled    ║
 * ║    ×1.187 to production f ≈ 118.7 mm (marketed as 120 mm).       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    Estimated from combined marginal + chief ray traces (60%       ║
 * ║    off-axis field, 8% mechanical clearance), then constrained     ║
 * ║    for edge thickness ≥ 0.3 mm and cross-gap sag ≤ 90%.          ║
 * ║    Patent does not publish semi-diameters.                        ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "hasselblad-hc-macro-4-120",
  maker: "Hasselblad",
  name: "HASSELBLAD HC MACRO 120mm f/4",
  subtitle: "JP 2004-302170 A EXAMPLE 4 — FUJI PHOTO OPTICAL / OHNO",

  catalog: {
    lensMounts: ["hasselblad-h"],
    imageFormat: "645",
    specs: ["9 ELEMENTS / 9 GROUPS", "f ≈ 118.7 mm", "F/4.0", "2ω ≈ 32.8°", "ALL SPHERICAL"],
    elementCount: 9,
    groupCount: 9,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 120, design: 118.7 },
    fNumber: { marketing: 4, design: 4.1 },
  },

  source: {
    patentNumber: "JP 2004-302170 A",
    patentYear: 2004,
    authors: ["Kazunori Ohno"],
    assignees: ["Fuji Photo Optical Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Equi-Biconvex Positive",
      nd: 1.76182,
      vd: 26.5,
      focalLengthMm: 106.2,
      glass: "S-TIH14 (OHARA catalog equivalent; production supplier unspecified)",
      apd: false,
      role: "Front collector; high-index dense flint keeps curvatures gentle at largest beam diameter.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.72342,
      vd: 38.0,
      focalLengthMm: -33.7,
      glass: "S-BAH28 (OHARA)",
      apd: false,
      role: "Strongest negative element; controls SA, chromatic balance, and quasi-symmetric off-axis correction.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Equi-Biconvex Positive",
      nd: 1.6968,
      vd: 55.6,
      focalLengthMm: 39.6,
      glass: "LAC14 (HOYA)",
      apd: false,
      role: "Strongest positive element in G1; lanthanum crown minimises chromatic load before the stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.2,
      focalLengthMm: -39.6,
      glass: "E-FD5 (HOYA)",
      apd: false,
      role: "Near-stop negative; critical for SA control in the second front group (condition 3).",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus, Convex to Image",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 68.5,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "High-index positive meniscus; coma correction through meniscus geometry.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 99.5,
      glass: "FC5 (HOYA)",
      apd: false,
      role: "FK5-class chromatic corrector; primarily controls lateral colour at the end of GII.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Equi-Biconvex Positive",
      nd: 1.80518,
      vd: 25.5,
      focalLengthMm: 111.7,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Opens rear group with positive power; compensates for off-axis aberration growth at close focus.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.8044,
      vd: 39.6,
      focalLengthMm: -46.4,
      glass: "S-LAH63 (OHARA coordinate match)",
      apd: false,
      role: "Rear-group negative; maintains field flatness from infinity to 1:1 (condition 4).",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus, Convex to Object",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 152.5,
      glass: "FC5 (HOYA)",
      apd: false,
      role: "FK5-class field flattener; corrects residual Petzval curvature and lateral colour.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // ── First Front Group G1 (L1–L3) ──
    { label: "1", R: 161.0391, d: 3.99849, sd: 22.7, medium: 1 },
    { label: "2", R: -161.0391, d: 1.58495, sd: 15.5 },
    { label: "3", R: -56.9265, d: 1.5994, sd: 15.5, medium: 2 },
    { label: "4", R: 43.1847, d: 5.59788, sd: 21.3 },
    { label: "5", R: 53.4738, d: 7.99697, sd: 19.5, medium: 3 },
    { label: "6", R: -53.4738, d: 22.99131, sd: 19.5 },

    // ── Aperture Stop ──
    { label: "STO", R: "flat", d: 4.39833 },

    // ── Second Front Group GII (L4–L6) ──
    { label: "8", R: -28.2454, d: 5.52791, sd: 14.3, medium: 4 },
    { label: "9", R: 527.8006, d: 0.99913, sd: 14.3 },
    { label: "10", R: -149.0677, d: 8.99661, sd: 14.3, medium: 5 },
    { label: "11", R: -40.0908, d: 0.29988, sd: 18.7 },
    { label: "12", R: 414.7633, d: 7.89702, sd: 18.7, medium: 6 },
    { label: "13", R: -54.5533, sd: 19.4 },

    // ── Rear Group G2 (L7–L9, fixed during focus) ──
    { label: "14", R: 178.7025, d: 4.99811, sd: 19.3, medium: 7 },
    { label: "15", R: -178.7025, d: 4.24839, sd: 18.9 },
    { label: "16", R: -161.5489, d: 2.99887, sd: 18.0, medium: 8 },
    { label: "17", R: 48.9845, d: 7.19727, sd: 17.8 },
    { label: "18", R: 54.3385, d: 7.1842, sd: 19.0, medium: 9 },
    { label: "19", R: 192.8971, d: 83.678, sd: 19.0 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.39,
    description: "Front-group unit focus (L1–L6 translate forward, rear group fixed). Infinity to 1:1.",
    // (moved from publishedStations) Patent read 2026-10-06: Close-focus D13 = 61.46812 is JP 2004-302170 A Table 4's printed 1:1 (等倍) value 51.78443
    // scaled x1.187; the patent tabulates only infinity and 1:1.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (focus) ──
   *  Front group (L1–L6, surfaces 1–13) translates forward as a unit.
   *  Rear group (L7–L9, surfaces 14–19) is fixed.
   *  Only D13 (gap between L6 and L7) changes.
   */
  gaps: { "13": { label: "D13", values: [[2.99887, 61.46812]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4.1, fStops: [4.1, 4.5, 5.6, 6.3, 8, 11, 16, 22, 32, 45] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (1ST FRONT)", fromSurface: "1", toSurface: "6" },
    { text: "GII (2ND FRONT)", fromSurface: "8", toSurface: "13" },
    { text: "G2 (REAR)", fromSurface: "14", toSurface: "19" },
  ],
  doublets: [],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
