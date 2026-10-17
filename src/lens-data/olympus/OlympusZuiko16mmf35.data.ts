import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — OLYMPUS OM Zuiko 16mm f/3.5 Fisheye                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,850,509 Example 1 (Olympus / Nakagawa).         ║
 * ║  180° diagonal fisheye for 35 mm SLR, all-spherical retrofocus.    ║
 * ║  11 elements / 8 groups (incl. built-in filter), 0 asph. surfaces. ║
 * ║  Focus: unit focus (whole-block helicoid, no floating elements).    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 1.0 (normalized); all R, d, sd values scaled      ║
 * ║    ×16.0 to f ≈ 16 mm production focal length.                     ║
 * ║                                                                    ║
 * ║  NOTE ON FILTER EXCLUSION:                                         ║
 * ║    The patent lists a plane-parallel filter (r10, r11) between L4  ║
 * ║    and L5, prints no index or Abbe number for it, and says it may  ║
 * ║    be placed at any other position. It is not modeled. Its optical ║
 * ║    path is kept as an air-equivalent reduced gap on surface "9",   ║
 * ║    with an assumed index of 1.51633:                               ║
 * ║      d_reduced = d9 + d10/n_filter + d11                           ║
 * ║                = 0.0792 + 0.0742/1.51633 + 0.0829                  ║
 * ║                = 0.211034 (norm.) → 3.377 mm.                      ║
 * ║    This preserves the correct EFL and BFD identically.             ║
 * ║                                                                    ║
 * ║  NOTE ON d2 ERRATUM:                                               ║
 * ║    Table 1 prints d2 = 0.457; the claims text (columns 5–6) gives  ║
 * ║    d2 = 0.4157. Only 0.4157 reproduces the patent's stated EFL.    ║
 * ║    d2 = 0.4157 is used here.                                       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Front group (L1–L4): estimated from patent Fig. 1 proportions   ║
 * ║    with physical constraints (edge thickness, sd/|R| < 0.9).       ║
 * ║    Stop: radius derived from the design f-number, F/3.5.           ║
 * ║    Rear group (L6–L7): combined marginal + chief ray trace at      ║
 * ║    60% field (54° half-field) with 8% mechanical clearance.        ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)    ║
 * ║    ✓ Aperture stop and variable focus gap                          ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "olympus-zuiko-16mmf35-fisheye",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO AUTO-FISHEYE 16mm f/3.5",
  subtitle: "US 3,850,509 Example 1 — Olympus / Nakagawa",

  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    specs: ["11 ELEMENTS / 8 GROUPS", "f ≈ 16.0 mm", "F/3.5", "2ω = 180°", "ALL SPHERICAL"],
    elementCount: 11, // 10 optical elements + 1 built-in filter plate (filter excluded from prescription)
    groupCount: 8, // 7 optical groups + 1 filter group (filter excluded from prescription)
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 16, design: 16.0 },
    fNumber: { marketing: 3.5 },
  },

  source: {
    patentNumber: "US 3,850,509",
    patentYear: 1974,
    authors: ["Jihei Nakagawa"],
    assignees: ["Olympus Optical Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.1,
      focalLengthMm: -23.32,
      glass: "S-BAL35 (OHARA)",
      role: "Front fisheye entrance element; strong negative meniscus for 180° field compression and long BFD.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7859,
      vd: 44.2,
      focalLengthMm: 59.1,
      glass: "S-LAH51 (OHARA)",
      role: "Weak positive meniscus; corrects intermediate-field coma and lateral color at high obliquity.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.1,
      focalLengthMm: -18.76,
      glass: "S-BAL35 (OHARA)",
      role: "Second negative element; assists L1 in splitting front converter power.",
    },
    {
      id: 4,
      name: "L4a",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.6,
      focalLengthMm: -25.02,
      glass: "S-LAL14 (OHARA)",
      role: "Crown side of L4 hyperchromatic doublet; nearly index-matched to L4b for chromatic correction.",
      cemented: "L4",
    },
    {
      id: 5,
      name: "L4b",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.69895,
      vd: 30.1,
      focalLengthMm: 15.71,
      glass: "S-TIM35 (OHARA)",
      role: "Flint side of L4 doublet; high-dispersion element for lateral color correction.",
      cemented: "L4",
    },
    {
      id: 6,
      name: "L5a",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.7,
      focalLengthMm: -19.26,
      glass: "S-TIH11 (OHARA)",
      role: "Dense flint in L5 doublet; spherical and chromatic correction before the stop.",
      cemented: "L5",
    },
    {
      id: 7,
      name: "L5b",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.60342,
      vd: 38.0,
      focalLengthMm: 15.91,
      glass: "S-TIM5 (OHARA)",
      role: "Moderate flint paired with L5a; cemented surface r13 is key aberration corrector.",
      cemented: "L5",
    },
    {
      id: 8,
      name: "L6",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.51728,
      vd: 69.6,
      focalLengthMm: 62.1,
      glass: "S-APL1 (OHARA; 517696)",
      role: "Post-stop positive meniscus; low-dispersion relay element reconditioning the bundle.",
    },
    {
      id: 9,
      name: "L7a",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -35.71,
      glass: "S-TIH6 (OHARA)",
      role: "Dense flint at front of rear cemented doublet; strong chromatic lever near image.",
      cemented: "L7",
    },
    {
      id: 10,
      name: "L7b",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.51728,
      vd: 69.6,
      focalLengthMm: 19.16,
      glass: "S-APL1 (OHARA; 517696)",
      role: "Crown in rear doublet; final achromatizing and image-forming element.",
      cemented: "L7",
    },
  ],

  /* ── Surface prescription ──
   *  Filter excluded; air-equivalent gap folded into surface "9".
   *  STO inserted at midpoint of original d14 air gap (between L5 and L6).
   *  Patent normalized to f = 1.0; all values ×16 to production scale.
   */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 88.294, d: 1.979, sd: 8.0, medium: 1 }, // L1 front
    { label: "2", R: 11.792, d: 6.651, sd: 7.0 }, // L1 rear → air
    { label: "3", R: 25.734, d: 2.97, sd: 6.5, medium: 2 }, // L2 front
    { label: "4", R: 54.774, d: 1.485, sd: 5.5 }, // L2 rear → air
    { label: "5", R: -1385.709, d: 1.187, sd: 5.0, medium: 3 }, // L3 front
    { label: "6", R: 11.144, d: 4.157, sd: 5.5 }, // L3 rear → air
    { label: "7", R: 29.69, d: 0.99, sd: 5.5, medium: 4 }, // L4a front
    { label: "8", R: 10.834, d: 2.454, sd: 5.5, medium: 5 }, // L4 cement (L4a→L4b)
    { label: "9", R: 747.482, d: 3.377, sd: 5.0 }, // L4b rear → air (filter folded)
    { label: "10", R: 35.336, d: 1.198, sd: 5.0, medium: 6 }, // L5a front
    { label: "11", R: 10.427, d: 3.227, sd: 5.0, medium: 7 }, // L5 cement (L5a→L5b)
    { label: "12", R: -106.726, d: 1.693, sd: 4.5 }, // L5b rear → air (pre-stop)
    { label: "STO", R: "flat", d: 1.693 }, // Aperture stop (midpoint of d14)
    { label: "13", R: -39.434, d: 1.979, sd: 6.0, medium: 8 }, // L6 front
    { label: "14", R: -18.005, d: 0.099, sd: 6.8 }, // L6 rear → air
    { label: "15", R: 78.68, d: 0.99, sd: 6.8, medium: 9 }, // L7a front
    { label: "16", R: 20.939, d: 2.97, sd: 7.0, medium: 10 }, // L7 cement (L7a→L7b)
    { label: "17", R: -17.904, sd: 7.7 }, // L7b rear → BFD
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.2,
    description:
      "Unit focus (whole-block helicoid). No floating elements identified in patent or production literature.",
  },

  /* (moved from var) ── Variable air spacings (unit focus) ──
   *  Whole-block helicoid; BFD changes with focus.
   *  Extension at MFD 0.2 m: f²/(MFD−f) = 256/184 ≈ 1.391 mm.
   */
  gaps: { "17": { label: "BF", values: [[36.666, 38.057]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "6" },
    { text: "REAR", fromSurface: "13", toSurface: "17" },
  ],
  doublets: [
    { text: "L4", fromSurface: "7", toSurface: "9" },
    { text: "L5", fromSurface: "10", toSurface: "12" },
    { text: "L7", fromSurface: "15", toSurface: "17" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.38 },
} satisfies LensDataV2Input;

export default LENS_DATA;
