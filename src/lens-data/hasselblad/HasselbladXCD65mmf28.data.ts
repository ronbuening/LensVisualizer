import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — HASSELBLAD XCD 2,8/65                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2020/0319427 A1, Example 1 (Nittoh / Yazaki).    ║
 * ║  Positive–positive–positive three-group design, all spherical.     ║
 * ║  10 elements / 6 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: G1 + Stop + G2 move as unit; G3 fixed.                    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Non-stop SDs taken directly from patent effective-diameter      ║
 * ║    column (Di/2). Patent lists effective diameters for all         ║
 * ║    surfaces; the stop radius is derived from the design f-number.  ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent Fig. 2 surfaces 18–20 list two cemented COVER plates     ║
 * ║    (0.80 mm nd 1.53741 νd 61.81; 1.00 mm nd 1.52312 νd 54.36).     ║
 * ║    S20 has no distance, so the image plane sits on the rear face   ║
 * ║    (gap after 0). Modeled in `rearPlates` (traced, not drawn);     ║
 * ║    S17 keeps the patent's 20.73 mm gap to the cover glass.         ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: mechanical parts (cover glass: `rearPlates`)  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 *
 * MTF source audit: US20200319427A1 Fig. 2–3 values match at infinity.
 * The printed cover stack ends at S20 (image plane in Fig. 1); paraxial
 * focus falls 0.232471 mm beyond it. EFL 65.015872 agrees with 65.02,
 * but the air-equivalent rear path 21.906903 does not equal BFL 22.139374.
 * Retain the source rearPlates and physical image plane; no focus tuning.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "hasselblad-xcd-65-f28",
  maker: "Hasselblad",
  name: "HASSELBLAD XCD 65mm f/2.8",
  subtitle: "US 2020/0319427 A1 Example 1 — Nittoh / Yazaki",

  catalog: {
    lensMounts: ["hasselblad-xcd"],
    imageFormat: "44x33",
    specs: ["10 ELEMENTS / 6 GROUPS", "f ≈ 65.0 mm", "F/2.8", "2ω ≈ 46°", "ALL SPHERICAL"],
    elementCount: 10,
    groupCount: 6,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 65, design: 65.02 },
    fNumber: { marketing: 2.8 },
  },

  source: {
    patentNumber: "US 2020/0319427 A1",
    patentYear: 2020,
    authors: ["Takuya Yazaki"],
    assignees: ["Nittoh Inc."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6398,
      vd: 34.47,
      focalLengthMm: -135.1,
      glass: "S-TIM27 (OHARA)",
      apd: false,
      role: "Negative component of B11; chromatic partner to L12 at cemented surface S2",
      cemented: "B11",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.74,
      focalLengthMm: 45.3,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Primary positive power in G1; high-index lanthanum crown, symmetry partner to L31",
      cemented: "B11",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.13,
      focalLengthMm: 48.9,
      glass: "S-BAL35 (OHARA)",
      apd: false,
      role: "Positive element in B12; low-dispersion barium crown for chromatic balance",
      cemented: "B12",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.03,
      focalLengthMm: -29.6,
      glass: "S-TIM5 (OHARA)",
      apd: false,
      role: "Negative element in B12; strongly curved rear surface S6 collimates beam toward stop",
      cemented: "B12",
    },
    {
      id: 5,
      name: "L21",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.59551,
      vd: 39.24,
      focalLengthMm: -51.9,
      glass: "S-TIM8 (OHARA)",
      apd: false,
      role: "Negative element in B21; mirrors B12 across stop for symmetry",
      cemented: "B21",
    },
    {
      id: 6,
      name: "L22",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 109.8,
      glass: "S-FPL51 (OHARA)",
      apd: "patent",
      apdNote: "ED fluorophosphate; anomalous low dispersion marked with * in patent",
      role: "ED element in B21; primary secondary-spectrum corrector in the highest-power group",
      cemented: "B21",
    },
    {
      id: 7,
      name: "L23",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.53775,
      vd: 74.7,
      focalLengthMm: 50.2,
      glass: "S-FPM3 (OHARA)",
      apd: "patent",
      apdNote: "Fluorophosphate with anomalous partial dispersion; marked * in patent",
      role: "Strongest positive element behind stop; bulk of G2 converging power",
    },
    {
      id: 8,
      name: "L31",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.8919,
      vd: 37.13,
      focalLengthMm: 36.5,
      glass: "S-LAH92 (OHARA)",
      apd: false,
      role: "Highest-index element; positive power in B31, symmetry partner to L12 in B11",
      cemented: "B31",
    },
    {
      id: 9,
      name: "L32",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.13,
      focalLengthMm: -70.8,
      glass: "S-TIM35 (OHARA)",
      apd: false,
      role: "Highest-dispersion element; chromatic partner to L31 at cemented surface S14",
      cemented: "B31",
    },
    {
      id: 10,
      name: "L33",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.24,
      focalLengthMm: -75.5,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Trailing negative element; widens image cone for 44×33 coverage, quasi-telephoto rear",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // ── G1: front group (positive), 4 elements in 2 cemented doublets ──
    // B11: L11 (neg) + L12 (pos) — positive meniscus cemented doublet, convex to object
    { label: "1", R: 38.557, d: 1.7, sd: 16.1, medium: 1 },
    { label: "2", R: 26.205, d: 5.2, sd: 14.9, medium: 2 }, // L11→L12 cement
    { label: "3", R: 77.6, d: 1.28, sd: 14.0 },

    // B12: L13 (pos) + L14 (neg) — negative meniscus cemented doublet, convex to object
    { label: "4", R: 23.972, d: 6.3, sd: 11.65, medium: 3 },
    { label: "5", R: 129.0, d: 1.3, sd: 9.85, medium: 4 }, // L13→L14 cement
    { label: "6", R: 15.62, d: 8.75, sd: 8.35 },

    // ── Aperture stop ──
    // US 2020/0319427 A1 Fig. 2 prescription table, Example 1, row [7] (STOP) prints effective diameter Di = 15.1 mm.
    // Radius derived from the design f-number.
    { label: "STO", R: "flat", d: 8.45 },

    // ── G2: middle group (positive), 1 cemented doublet + 1 singleton ──
    // B21: L21 (neg) + L22 (pos, ED) — negative meniscus cemented doublet, concave to object
    { label: "8", R: -17.672, d: 1.4, sd: 9.1, medium: 5 },
    { label: "9", R: -42.478, d: 3.3, sd: 10.75, medium: 6 }, // L21→L22 cement
    { label: "10", R: -24.498, d: 0.2, sd: 11.85 },

    // L23: biconvex positive singleton (anomalous dispersion glass)
    { label: "11", R: 271.932, d: 6.8, sd: 14.6, medium: 7 },
    { label: "12", R: -29.703, sd: 15.45 }, // variable gap → G3

    // ── G3: rear group (weakly positive, fixed), 1 cemented doublet + 1 singleton ──
    // B31: L31 (pos) + L32 (neg) — positive meniscus cemented doublet, concave to object
    { label: "13", R: -579.519, d: 12.37, sd: 18.75, medium: 8 },
    { label: "14", R: -31.09, d: 4.6, sd: 19.55, medium: 9 }, // L31→L32 cement
    { label: "15", R: -88.755, d: 4.35, sd: 20.0 },

    // L33: negative meniscus singleton, concave to object
    { label: "16", R: -35.501, d: 2.2, sd: 20.0, medium: 10 },
    { label: "17", R: -1023.357, d: 20.73, sd: 21.8 }, // patent gap to the cover glass
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.5,
    /* ── Variable air spacings (focus) ──
     *  Single variable gap: G1+Stop+G2 move as unit toward object; G3 fixed.
     *  Patent Fig. 3: d12 = 1.00 (infinity) → 14.46 (400 mm from S1, ≈ 0.50 m MFD from image plane).
     */
    keyframes: [0, 0.1758096778953822, 1],
    description:
      "Front-group focus: G1, stop, and G2 move as a unit toward the object while G3 remains fixed. The patent's infinity, 2400 mm, and 400 mm object-distance states are represented exactly.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: { "12": { label: "BF", values: [[1.0, 3.02, 14.46]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.8, fStops: [2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 8, 11, 16, 22, 32] },

  /* ── Cover glass (patent Fig. 2 surfaces 18–20, cemented pair): traced, not drawn ── */
  rearPlates: [
    {
      label: "COVER",
      thicknessMm: 0.8,
      nd: 1.53741,
      vd: 61.81,
      gapAfterMm: 0,
      source: "US 2020/0319427 A1, Example 1 Fig. 2 surfaces 18–19",
    },
    {
      label: "COVER",
      thicknessMm: 1.0,
      nd: 1.52312,
      vd: 54.36,
      gapAfterMm: 0,
      source: "US 2020/0319427 A1, Example 1 Fig. 2 surfaces 19–20 (S20 = image plane, no distance printed)",
    },
  ],

  /* ── Group annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "8", toSurface: "12" },
    { text: "G3", fromSurface: "13", toSurface: "17" },
  ],
  doublets: [
    { text: "B11", fromSurface: "1", toSurface: "3" },
    { text: "B12", fromSurface: "4", toSurface: "6" },
    { text: "B21", fromSurface: "8", toSurface: "10" },
    { text: "B31", fromSurface: "13", toSurface: "15" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
