import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Olympus G.Zuiko Auto-S 50mm f/1.4           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,094,588 Example 1 (Nakagawa / Olympus, 1978).  ║
 * ║  Modified Double Gauss — 7 elements / 6 groups, all spherical.    ║
 * ║  Focus: unit focus (entire optical assembly translates).           ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 1.0; all R, d, and sd values scaled ×50 to       ║
 * ║    match 50 mm production focal length. Design EFL ≈ 50.0 mm.    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    Estimated via combined marginal + chief ray trace at f/1.4     ║
 * ║    and 23° half-field (offAxisFieldFrac = 0.60), with ~8%         ║
 * ║    mechanical clearance. Front group capped by 49 mm filter       ║
 * ║    thread (max SD ≈ 23 mm) and validated against edge thickness   ║
 * ║    ≥ 0.7 mm and cross-gap sag overlap constraints.                ║
 * ║    Surfaces 12-13 (L7) were raised to pass the traced chief ray   ║
 * ║    to the full-frame corner (23.8°, just past the patent's        ║
 * ║    ω = 23°); L7's edge thins to 0.20 mm there, below the 0.7 mm   ║
 * ║    target (2026-09-24 field-coverage audit).                      ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                           ║
 * ║    STO position inferred from Fig. 1 — approximately 25% of the  ║
 * ║    d₆ air gap from r₆, splitting the gap into 4.20 + 12.59 mm.  ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:          ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap (BFD)                   ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "olympus-zuiko-auto-s-50f14",
  maker: "Olympus",
  name: "OLYMPUS G.ZUIKO AUTO-S 50mm f/1.4",
  subtitle: "US 4,094,588 EXAMPLE 1 — NAKAGAWA / OLYMPUS",

  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 6 GROUPS", "f ≈ 50.0 mm", "F/1.4", "2ω ≈ 46°", "ALL SPHERICAL"],
    elementCount: 7,
    groupCount: 6,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 50 },
    fNumber: { marketing: 1.4 },
  },

  source: {
    patentNumber: "US 4,094,588",
    patentYear: 1978,
    authors: ["Jihei Nakagawa"],
    assignees: ["Olympus Optical Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6204,
      vd: 60.3,
      focalLengthMm: 61.6,
      glass: "SK16-type (Schott SK16 / HOYA BACD5 — exact)",
      apd: false,
      role: "Front positive meniscus; primary light-gathering element with low-dispersion crown glass. Meniscus shape distributes refraction to reduce spherical aberration.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 50.8,
      focalLengthMm: 76.3,
      glass: "694508 - LaK-type A (S-LAL58 code match; patent nd=1.69350, vd=50.8)",
      apd: false,
      role: "Second positive meniscus; shares front-group positive power with L1. Steeper curvatures and higher nd balance higher-order spherical aberration.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.5814,
      vd: 40.8,
      focalLengthMm: -32.4,
      glass: "PBL25 (OHARA, 581408)",
      apd: false,
      role: "Critical negative meniscus of the front group. Steep concave rear surface (r₆) dominates the Petzval sum and coma balance. Patent condition (1) constrains r₆ relative to r₇.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      focalLengthMm: -19.4,
      glass: "SF4 (Schott SF4 / OHARA S-TIH4 — exact)",
      apd: false,
      role: "Thin dense-flint negative element of the cemented doublet. Highest dispersion in the system (νd = 27.5), providing chromatic correction in the rear group. Front surface r₇ pairs with r₆ across the stop.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.3,
      focalLengthMm: 35.8,
      glass: "LAC13 (HOYA, 694533)",
      apd: false,
      role: "Positive crown element of the cemented doublet. Nearly flat junction (R₈ = +792 mm) means chromatic correction relies on the Δν = 25.8 glass-dispersion difference rather than junction curvature.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 40.9,
      focalLengthMm: 48.6,
      glass: "LaSF3 (Schott LaSF3 / HOYA NBFD3 — exact)",
      apd: false,
      role: "Highest-nd element (1.8061). Meniscus concave-to-object; high refractive index keeps curvatures moderate despite strong positive power, and contributes favorably to the Petzval sum. Rear surface r₁₁ constrained by patent condition (3).",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 50.8,
      focalLengthMm: 74.9,
      glass: "694508 - LaK-type A (same glass as L2; S-LAL58 code match)",
      apd: false,
      role: "Weak positive field-flattening element at the rear. Gentle curvatures minimize own aberration contributions while trimming distortion and lateral color.",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 30.735, d: 5.79, sd: 18.5, medium: 1 },
    { label: "2", R: 145.26, d: 0.095, sd: 18.5 },
    { label: "3", R: 23.69, d: 3.885, sd: 16.5, medium: 2 },
    { label: "4", R: 40.01, d: 2.34, sd: 15.0 },
    { label: "5", R: 53.085, d: 1.015, sd: 13.0, medium: 3 },
    { label: "6", R: 13.82, d: 4.196, sd: 12.4 }, // sd/|R| = 0.897 (slope limit)
    { label: "STO", R: "flat", d: 12.589 }, // STO position inferred from Fig. 1
    { label: "7", R: -14.92, d: 0.965, sd: 11.5, medium: 4 },
    { label: "8", R: 792.345, d: 5.8, sd: 13.0, medium: 5 },
    { label: "9", R: -25.565, d: 0.095, sd: 13.0 },
    { label: "10", R: -53.085, d: 4.45, sd: 14.0, medium: 6 },
    { label: "11", R: -23.38, d: 0.115, sd: 14.0 },
    { label: "12", R: 93.92, d: 2.85, sd: 16.5, medium: 7 },
    { label: "13", R: -114.865, sd: 16.5 },
  ],

  /* ── Focus configuration ── */
  focus: { closeFocusM: 0.45, description: "Unit focus — entire optical assembly translates forward as a rigid unit." },

  /* (moved from var) ── Variable air spacings (unit focus — BFD changes) ── */
  gaps: { "13": { label: "BF", values: [[37.16, 44.12]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.4, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "6" },
    { text: "REAR", fromSurface: "7", toSurface: "13" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
