import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — OLYMPUS G.ZUIKO AUTO-S 55mm f/1.2           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,743,387 (Jihei Nakagawa, Olympus Optical).     ║
 * ║  Modified Gauss (double Gauss) — large-aperture standard lens.    ║
 * ║  7 elements / 6 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focus (entire lens moves on straight helicoid).      ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 1 (normalized); all R, d, sd values scaled       ║
 * ║    ×55 to f ≈ 55 mm production focal length.                     ║
 * ║    Computed EFL = 55.002 mm, BFD = 37.95 mm (patent: 0.6899f).   ║
 * ║                                                                    ║
 * ║  NOTE ON d₁₂ DISCREPANCY:                                         ║
 * ║    Patent description states d₁₂ = 0.0623; patent claim states   ║
 * ║    d₁₂ = 0.0633.  The description value (0.0623) yields BFD/f =  ║
 * ║    0.68995, matching the patent's stated 0.6899; used here.       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from combined marginal + chief ray trace              ║
 * ║    (offAxisFieldFrac = 0.60), then constrained by:                ║
 * ║    • Filter thread: 55 mm → front SD capped at ~23 mm            ║
 * ║    • S6 sphere limit: |R₆| = 16.264 → sd ≤ 14.5 mm              ║
 * ║    • Edge thickness ≥ 0.5 mm (caps L1 at SD ≈ 23, L2 at ~19.5)  ║
 * ║    The full f/1.2 marginal beam (y ≈ 17.4 mm at S5, 16.5 at S6)  ║
 * ║    exceeds L3's sphere-limited clear aperture.  This produces     ║
 * ║    marginal vignetting at f/1.2 — a known characteristic of      ║
 * ║    this design, contributing to its soft wide-open rendering.     ║
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
  key: "olympus-zuiko-auto-s-55-f12",
  maker: "Olympus",
  name: "OLYMPUS G.ZUIKO AUTO-S 55mm f/1.2",
  subtitle: "US 3,743,387 — Jihei Nakagawa / Olympus Optical Co.",

  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 6 GROUPS", "f ≈ 55.0 mm", "F/1.2", "2ω = 43°", "ALL SPHERICAL"],
    elementCount: 7,
    groupCount: 6,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 55, design: 55.0 },
    fNumber: { marketing: 1.2 },
  },

  source: {
    patentNumber: "US 3,743,387",
    patentYear: 1973,
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
      nd: 1.803,
      vd: 46.6,
      focalLengthMm: 66.8,
      glass: "LaSF (S-LAH65 family, OHARA)",
      apd: false,
      role: "Front collector — strong positive power, begins converging the marginal bundle",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 40.8,
      focalLengthMm: 79.9,
      glass: "LaSF (S-LAH53 equivalent, OHARA)",
      apd: false,
      role: "Secondary convergence with mildly flint-like dispersion for chromatic balancing",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7618,
      vd: 27.1,
      focalLengthMm: -33.2,
      glass: "PBH25 (OHARA catalog-equivalent; patent supplier unspecified)",
      apd: false,
      role: "Pre-stop diverger — primary SA corrector, strongest negative element in front group",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7283,
      vd: 28.5,
      focalLengthMm: -30.5,
      glass: "SF (S-TIH10 equivalent, OHARA / SF10 SCHOTT)",
      apd: false,
      role: "Post-stop flint — most powerful individual element; cemented to L5",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.755,
      vd: 52.4,
      focalLengthMm: 51.0,
      glass: "K-LaSKn1 (SUMITA catalog equivalent for patent coordinate; production supplier unspecified)",
      apd: false,
      role: "Positive crown in cemented doublet — chromatic corrector with L4",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: 62.3,
      glass: "LaK (N-LAK8 family, SCHOTT / LAC8 HOYA)",
      apd: false,
      role: "Rear converging element — strong positive power, lanthanum crown for low chromatism",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: 104.1,
      glass: "LaK (N-LAK8 family, SCHOTT / LAC8 HOYA)",
      apd: false,
      role: "Final convergence — nearly plano-convex, field curvature correction; same glass as L6",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 39.4075, d: 6.0665, sd: 23.0, medium: 1 },
    { label: "2", R: 138.259, d: 0.1155, sd: 21.5 },
    { label: "3", R: 25.861, d: 4.895, sd: 19.5, medium: 2 },
    { label: "4", R: 39.567, d: 1.9085, sd: 19.0 },
    { label: "5", R: 47.6465, d: 1.76, sd: 14.5, medium: 3 },
    { label: "6", R: 16.2635, d: 10.3243, sd: 14.5 },
    // STO position estimated from Fig. 1 at ~55% of the d₆ air gap (18.77 mm).
    { label: "STO", R: "flat", d: 8.4472 },
    { label: "7", R: -17.9685, d: 1.76, sd: 14.5, medium: 4 },
    { label: "8", R: -97.7955, d: 7.634, sd: 15.0, medium: 5 },
    { label: "9", R: -28.5615, d: 0.099, sd: 17.0 },
    { label: "10", R: -101.167, d: 5.577, sd: 17.0, medium: 6 },
    { label: "11", R: -31.5755, d: 0.1155, sd: 17.5 },
    { label: "12", R: 80.6025, d: 3.4265, sd: 17.0, medium: 7 },
    { label: "13", R: -917.224, sd: 16.5 },
  ],

  /* ── Focus configuration ── */
  focus: { closeFocusM: 0.45, description: "Unit focus — entire optical assembly moves forward on straight helicoid." },

  /* (moved from var) ── Variable air spacings (unit focus — BFD changes) ── */
  gaps: { "13": { label: "BF", values: [[37.95, 46.59]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.2, fStops: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "6" },
    { text: "G4", fromSurface: "7", toSurface: "9" },
    { text: "G5", fromSurface: "10", toSurface: "11" },
    { text: "G6", fromSurface: "12", toSurface: "13" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Layout tuning ── */
  layout: { scFill: 0.52, yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
