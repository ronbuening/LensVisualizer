import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — smc PENTAX-F 85mm f/2.8 Soft                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,267,086 Example 1 (Asahi Kogaku Kogyo / Hirano).║
 * ║  Soft focus prime with deliberate residual spherical aberration.    ║
 * ║  5 elements / 4 groups, 0 aspherical surfaces.                     ║
 * ║  Focus: front-group unit focus (L1–L4 translate, L5 fixed).        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f=100; all R, d, sd values scaled ×0.85 to f≈85 mm   ║
 * ║    production focal length.                                        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from paraxial marginal ray (f/2.8) + chief ray (60%   ║
 * ║    field) with 8% mechanical clearance. Front element constrained  ║
 * ║    by 52 mm filter thread (inner ≈ 49 mm, max SD ≈ 24.5 mm).      ║
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
  key: "pentax-f-85-f28-soft",
  maker: "Pentax",
  name: "PENTAX F 85mm f/2.8 Soft",
  subtitle: "US 5,267,086 Example 1 — Asahi Kogaku Kogyo / Hirano",

  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "135-full-frame",
    specs: ["5 ELEMENTS / 4 GROUPS", "f ≈ 85.0 mm", "F/2.8", "2ω ≈ 28.4°", "ALL SPHERICAL"],
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: { marketing: 85, design: 85.0 },
    fNumber: { marketing: 2.8 },
  },

  source: {
    patentNumber: "US 5,267,086",
    patentYear: 1993,
    authors: ["Hiroyuki Hirano"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.65844,
      vd: 50.9,
      focalLengthMm: 49.2,
      glass: "N-SSK5 (Schott; exact 658509 coordinate match)",
      apd: false,
      role: "Primary SA generator; strongly curved front surface (r₁/f = 0.36) produces the deliberate spherical aberration that creates the soft focus effect.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.7,
      focalLengthMm: -82.6,
      glass: "FD110 (HOYA) / S-TIH11 equivalent (785257)",
      apd: false,
      role: "Dense flint achromatizer cemented to L1; corrects chromatic aberration without reducing SA. Abbe difference ν₁−ν₂ = 25.2.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.5,
      focalLengthMm: -56.0,
      glass: "S-TIH10 (OHARA; exact 728285 coordinate match)",
      apd: false,
      role: "Strongest negative element; field-flattening diverger providing Petzval correction and secondary chromatic compensation.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.8044,
      vd: 39.6,
      focalLengthMm: 43.6,
      glass: "S-LAH63 (OHARA)",
      apd: false,
      role: "Primary converging element; high-index lanthanum flint yields strong power from moderate curvatures, controlling higher-order aberrations.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: -258.7,
      glass: "S-BSL7 (OHARA) / BSC7 (HOYA) class",
      apd: false,
      role: "Fixed rear group; weak negative field flattener extending BFD for K-mount mirror clearance. Low-dispersion glass minimizes chromatic tracking error during focusing.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent at f = 100 mm; all R, d, sd scaled ×0.85 for f ≈ 85 mm production.
   *  Aperture stop inferred from Fig. 1 cross-section: mid-gap between L3 rear and L4 front.
   *  STO splits patent d₅ = 4.32 mm (3.672 mm scaled) into two equal halves.
   */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    // ── Group 1: Cemented doublet L1+L2 ──
    { label: "1", R: 30.286, d: 9.851, sd: 22.5, medium: 1 }, // L1 front
    { label: "2", R: 399.825, d: 3.995, sd: 18.7, medium: 2 }, // L1→L2 junction
    { label: "3", R: 55.531, d: 12.232, sd: 17.2 }, // L2 rear → air

    // ── Group 2: L3 ──
    { label: "4", R: 358.843, d: 2.108, sd: 12.1, medium: 3 }, // L3 front
    { label: "5", R: 36.524, d: 1.836, sd: 11.6 }, // L3 rear → air (first half of d₅)

    // ── Aperture stop ──
    // STO position inferred from Fig. 1 iris placement; d₅ split 50/50.
    { label: "STO", R: "flat", d: 1.836 },

    // ── Group 3: L4 ──
    { label: "6", R: 54.276, d: 5.44, sd: 11.7, medium: 4 }, // L4 front
    { label: "7", R: -94.959, sd: 12.0 }, // L4 rear → air (variable: focus)

    // ── Group 4: L5 (fixed rear group) ──
    { label: "8", R: 999.562, d: 2.499, sd: 11.9, medium: 5 }, // L5 front
    { label: "9", R: 117.728, d: 49.98, sd: 11.9 }, // L5 rear → BFD (49.98 mm)
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.5,
    description:
      "Front-group unit focus: L1–L4 translate forward as a rigid unit, L5 remains fixed relative to the film plane. AF via Pentax K-mount in-body motor.",
  },

  /* (moved from var) ── Variable air spacings (focus) ──
   *  Front-group focus: L1–L4 translate forward as a rigid unit; L5 fixed.
   *  Only the gap between L4 rear (surface "7") and L5 front changes.
   *  Patent d₇ = 4.12 mm at ∞, 27.82 mm at M = −0.337 (×0.85 scale applied).
   *  Close-focus value computed for production MFD = 0.50 m via paraxial conjugate.
   */
  gaps: { "7": { label: "D7", values: [[3.502, 18.815]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (FOCUS)", fromSurface: "1", toSurface: "7" },
    { text: "REAR (FIXED)", fromSurface: "8", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
