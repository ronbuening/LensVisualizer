import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — SONY PLANAR T* 50mm F1.4 ZA SSM (SAL50F14Z)         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2014/0071331 A1, Example 4 (Table 10–12).        ║
 * ║  Katou, Uehara, Otake — Sony Corporation.                         ║
 * ║  Modified double-Gauss (Planar) with rear focus.                  ║
 * ║  8 elements / 5 groups, 2 aspherical surfaces.                    ║
 * ║  Focus: rear-focus — G1 fixed, STO + G2 move as unit.            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from marginal ray at design Fno = 1.45 with chief    ║
 * ║    ray at 60% field, combined with 8% mechanical clearance.       ║
 * ║    Front elements (1–4) constrained by cross-gap sag intrusion    ║
 * ║    at the 0.370 mm L1–L2 air gap; SDs reduced accordingly.       ║
 * ║    Front element SD consistent with 72 mm filter thread.          ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "sony-planar-t-50f14-za",
  maker: "Sony",
  name: "SONY PLANAR T* 50mm f/1.4 ZA SSM",
  subtitle: "US 2014/0071331 A1 EXAMPLE 4 — SONY / KATOU",

  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "135-full-frame",
    specs: ["8 ELEMENTS / 5 GROUPS", "f = 51.5 mm", "F/1.45", "2ω ≈ 46.8°", "2 ASPHERICAL SURFACES"],
    elementCount: 8,
    groupCount: 5,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 50, design: 51.5 },
    fNumber: { marketing: 1.4, design: 1.45 },
  },

  source: {
    patentNumber: "US 2014/0071331 A1",
    patentYear: 2014,
    authors: ["Kouji Katou", "Yumiko Uehara", "Motoyuki Ohtake"],
    assignees: ["Sony Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.834805,
      vd: 42.7,
      focalLengthMm: 57.0,
      glass: "S-LAH55V (OHARA)",
      apd: false,
      role: "Front collector; high-index lanthanum glass reduces surface angles at f/1.4.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.592703,
      vd: 35.5,
      focalLengthMm: -48.1,
      glass: "S-FTM16 (OHARA)",
      apd: false,
      role: "G1F diverging partner; achromatizes with L1 and extends back focus.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.851348,
      vd: 40.1,
      focalLengthMm: 31.9,
      glass: "M-TAFD305 (HOYA catalog-equivalent; patent supplier unspecified)",
      apd: false,
      role: "Main positive element of G1R; aspherical front surface controls spherical aberration at f/1.4.",
      cemented: "G1R",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.61293,
      vd: 37.0,
      focalLengthMm: -38.8,
      glass: "613370 - E-F3/S-TIM3 moderate flint (code equivalent)",
      apd: false,
      role: "G1R corrector; cemented with L3, achromatizes via index step at nearly flat junction.",
      cemented: "G1R",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.64769,
      vd: 33.8,
      focalLengthMm: -19.3,
      glass: "S-TIM22 (OHARA catalog equivalent; production glass unspecified)",
      apd: false,
      role: "Strongest negative element; inner negative of G2, controls high-order spherical aberration.",
      cemented: "Da",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 22.2,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      role: "G2 powerhouse; highest nd in system, primary convergence in focus group.",
      cemented: "Da",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.1,
      focalLengthMm: -65.9,
      glass: "E-FD15 (HIKARI)",
      apd: false,
      role: "Field flattener; lowest νd in system, provides dispersion for chromatic correction at Db junction.",
      cemented: "Db",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.768015,
      vd: 49.2,
      focalLengthMm: 29.5,
      glass: "M-TAF101 (HOYA catalog-equivalent; patent supplier unspecified)",
      apd: false,
      role: "Final positive element; aspherical rear surface corrects field-dependent aberrations.",
      cemented: "Db",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    /* ── G1F: L1 (biconvex positive) ── */
    { label: "1", R: 60.388, d: 6.04, sd: 24.0, medium: 1 },
    { label: "2", R: -214.645, d: 0.37, sd: 18.5 },

    /* ── G1F: L2 (biconcave negative) ── */
    { label: "3", R: -156.603, d: 1.3, sd: 18.2, medium: 2 },
    { label: "4", R: 35.0, d: 3.0, sd: 18.0 },

    /* ── G1R: L3 + L4 cemented doublet ── */
    {
      label: "5A",
      R: 28.547,
      d: 7.17,
      sd: 18.0,
      medium: 3,
      asphere: { K: 0, A4: -1.05e-6, A6: -6.57e-10, A8: -1.73e-12, A10: 4.21e-15 },
    },
    { label: "6", R: -503.384, d: 1.2, sd: 16.1, medium: 4 },
    { label: "7", R: 25.007, sd: 15.8 },

    /* ── Aperture stop — moves with G2 ── */
    { label: "STO", R: "flat", d: 6.333 },

    /* ── G2: L5 + L6 cemented doublet (Da) ── */
    { label: "9", R: -21.841, d: 2.8, sd: 13.2, medium: 5 },
    { label: "10", R: 30.673, d: 7.94, sd: 13.6, medium: 6 },
    { label: "11", R: -47.908, d: 0.2, sd: 14.3 },

    /* ── G2: L7 + L8 cemented doublet (Db) ── */
    { label: "12", R: 247.339, d: 2.13, sd: 14.3, medium: 7 },
    { label: "13", R: 38.671, d: 7.0, sd: 14.1, medium: 8 },
    {
      label: "14A",
      R: -50.305,
      sd: 14.5,
      asphere: { K: -1.6554, A4: 5.1e-6, A6: -9.77e-10, A8: 2.06e-11, A10: -8.11e-15 },
    },
  ],

  /* ── Focus configuration ── */
  focus: { closeFocusM: 0.45, description: "Rear focus — G1 fixed, aperture stop + G2 move as a unit (SSM drive)." },

  /* (moved from var) ── Variable air spacings (rear focus) ──
   *  G1 fixed; STO + G2 move as a unit toward the object at close focus.
   *  d7 (G1R rear → STO) decreases; BF (L8 rear → image) increases.
   *  d_STO (STO → L5 front = 6.333 mm) is constant.
   */
  gaps: { "7": { label: "D7", values: [[14.509, 6.784]] }, "14A": { label: "BF", values: [[36.098, 43.823]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.45, fStops: [1.45, 2, 2.8, 4, 5.6, 8, 11, 16, 22], blades: 9 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (FIXED)", fromSurface: "1", toSurface: "7" },
    { text: "G2 (FOCUS)", fromSurface: "9", toSurface: "14A" },
  ],
  doublets: [
    { text: "G1R", fromSurface: "5A", toSurface: "7" },
    { text: "Da", fromSurface: "9", toSurface: "11" },
    { text: "Db", fromSurface: "12", toSurface: "14A" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.52, yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
