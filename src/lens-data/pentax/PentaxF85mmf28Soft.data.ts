import type { LensDataInput } from "../../types/optics.js";

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
  key: "pentax-f-85-f28-soft",
  maker: "Pentax",
  name: "PENTAX F 85mm f/2.8 Soft",
  subtitle: "US 5,267,086 Example 1 — Asahi Kogaku Kogyo / Hirano",
  specs: ["5 ELEMENTS / 4 GROUPS", "f ≈ 85.0 mm", "F/2.8", "2ω ≈ 28.4°", "ALL SPHERICAL"],

  focalLengthMarketing: 85,
  focalLengthDesign: 85.0,
  apertureMarketing: 2.8,
  lensMounts: ["pentax-k"],
  imageFormat: "135-full-frame",
  patentYear: 1993,
  elementCount: 5,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.65844,
      vd: 50.9,
      fl: 49.2,
      glass: "BACD14 (HOYA)",
      apd: false,
      cemented: "D1",
      role: "Primary SA generator; strongly curved front surface (r₁/f = 0.36) produces the deliberate spherical aberration that creates the soft focus effect.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.78472,
      vd: 25.7,
      fl: -82.6,
      glass: "FD110 (HOYA)",
      apd: false,
      cemented: "D1",
      role: "Dense flint achromatizer cemented to L1; corrects chromatic aberration without reducing SA. Abbe difference ν₁−ν₂ = 25.2.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.5,
      fl: -56.0,
      glass: "FD60 (HOYA)",
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
      fl: 43.6,
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
      fl: -258.7,
      glass: "BSC7 (HOYA)",
      apd: false,
      role: "Fixed rear group; weak negative field flattener extending BFD for K-mount mirror clearance. Low-dispersion glass minimizes chromatic tracking error during focusing.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent at f = 100 mm; all R, d, sd scaled ×0.85 for f ≈ 85 mm production.
   *  Aperture stop inferred from Fig. 1 cross-section: mid-gap between L3 rear and L4 front.
   *  STO splits patent d₅ = 4.32 mm (3.672 mm scaled) into two equal halves.
   */
  surfaces: [
    // ── Group 1: Cemented doublet L1+L2 ──
    { label: "1", R: 30.286, d: 9.851, nd: 1.65844, elemId: 1, sd: 22.5 }, // L1 front
    { label: "2", R: 399.825, d: 3.995, nd: 1.78472, elemId: 2, sd: 18.7 }, // L1→L2 junction
    { label: "3", R: 55.531, d: 12.232, nd: 1.0, elemId: 0, sd: 17.2 }, // L2 rear → air

    // ── Group 2: L3 ──
    { label: "4", R: 358.843, d: 2.108, nd: 1.72825, elemId: 3, sd: 12.1 }, // L3 front
    { label: "5", R: 36.524, d: 1.836, nd: 1.0, elemId: 0, sd: 11.6 }, // L3 rear → air (first half of d₅)

    // ── Aperture stop ──
    // STO position inferred from Fig. 1 iris placement; d₅ split 50/50.
    { label: "STO", R: 1e15, d: 1.836, nd: 1.0, elemId: 0, sd: 10.4 },

    // ── Group 3: L4 ──
    { label: "6", R: 54.276, d: 5.44, nd: 1.8044, elemId: 4, sd: 11.7 }, // L4 front
    { label: "7", R: -94.959, d: 3.502, nd: 1.0, elemId: 0, sd: 12.0 }, // L4 rear → air (variable: focus)

    // ── Group 4: L5 (fixed rear group) ──
    { label: "8", R: 999.562, d: 2.499, nd: 1.51633, elemId: 5, sd: 11.9 }, // L5 front
    { label: "9", R: 117.728, d: 49.98, nd: 1.0, elemId: 0, sd: 11.9 }, // L5 rear → BFD (49.98 mm)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (focus) ──
   *  Front-group focus: L1–L4 translate forward as a rigid unit; L5 fixed.
   *  Only the gap between L4 rear (surface "7") and L5 front changes.
   *  Patent d₇ = 4.12 mm at ∞, 27.82 mm at M = −0.337 (×0.85 scale applied).
   *  Close-focus value computed for production MFD = 0.50 m via paraxial conjugate.
   */
  var: {
    "7": [3.502, 18.815],
  },
  varLabels: [["7", "D7"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (FOCUS)", fromSurface: "1", toSurface: "7" },
    { text: "REAR (FIXED)", fromSurface: "8", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.5,
  focusDescription:
    "Front-group unit focus: L1–L4 translate forward as a rigid unit, L5 remains fixed relative to the film plane. AF via Pentax K-mount in-body motor.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  apertureBlades: 9,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.4,
  maxFstop: 32,
} satisfies LensDataInput;

export default LENS_DATA;
