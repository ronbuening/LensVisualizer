import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — OLYMPUS E.ZUIKO AUTO-T 135mm f/3.5                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,838,911 Example 1 (Olympus / Yoshitsugi Ikeda).║
 * ║  Compact all-spherical telephoto for the OM system.               ║
 * ║  5 elements / 4 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focus (entire optical block translates).             ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent normalized at f = 100; all R, d, sd values scaled ×1.35 ║
 * ║    to match the production f ≈ 135 mm focal length.               ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not publish semi-diameters. Estimated from marginal ║
 * ║    ray at f/3.5 + chief ray at 60 % of the 9° half-field, with   ║
 * ║    ~8 % mechanical clearance. Front group constrained by the      ║
 * ║    production 49 mm filter thread.                                ║
 * ║                                                                    ║
 * ║  NOTE ON n3 CORRECTION:                                            ║
 * ║    Patent body text prints n3 = 1.7682 (OCR artifact / typo);     ║
 * ║    the claims section and glass-code match (SF14 class, 762265)   ║
 * ║    confirm n3 = 1.76182. The corrected value gives EFL = 100.019  ║
 * ║    patent units, consistent with the stated f = 100.              ║
 * ║                                                                    ║
 * ║  STOP POSITION:                                                    ║
 * ║    Inferred from Fig. 1 at approximately 50 % of the d5 airspace ║
 * ║    between the cemented doublet rear surface and L4.              ║
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
  key: "olympus-zuiko-135-f35",
  maker: "Olympus",
  name: "OLYMPUS E.ZUIKO AUTO-T 135mm f/3.5",
  subtitle: "US 3,838,911 EXAMPLE 1 — OLYMPUS / IKEDA",

  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    specs: ["5 ELEMENTS / 4 GROUPS", "f ≈ 135.0 mm", "F/3.5", "2ω ≈ 18°", "ALL-SPHERICAL"],
    elementCount: 5,
    groupCount: 4,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 135, design: 135.03 },
    fNumber: { marketing: 3.5 },
  },

  source: {
    patentNumber: "US 3,838,911",
    patentYear: 1974,
    authors: ["Yoshitsugi Ikeda"],
    assignees: ["Olympus Optical Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.2,
      focalLengthMm: 112.3,
      glass: "N-SK16 (Schott) / S-BSM16 (OHARA) class (620602)",
      apd: false,
      role: "Front positive collector; initiates convergence with moderate curvature at a high-index crown",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.48749,
      vd: 69.8,
      focalLengthMm: 80.6,
      glass: "S-FSL5 (OHARA catalog equivalent; patent code 487698, supplier unspecified)",
      apd: false,
      role: "Crown member of the cemented achromat; supplies positive power with low dispersion",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.76182,
      vd: 26.5,
      focalLengthMm: -132.7,
      glass: "SF14 / N-SF14 (Schott) / S-TIH14 (OHARA) class (762265)",
      apd: false,
      role: "Dense-flint achromatizing partner in the cemented doublet; controls axial color and zonal SA",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.66998,
      vd: 39.3,
      focalLengthMm: -46.4,
      glass: "S-BAH32 (OHARA) exact match (670393)",
      apd: false,
      role: "Principal telephoto-shortening group; strong negative meniscus behind the stop, controls telephoto ratio",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 120.1,
      glass: "N-SF6 / SF6 (Schott) / S-TIH6 (OHARA) class (805254)",
      apd: false,
      role: "Rear positive meniscus corrector; moderates field curvature, astigmatism, and distortion",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 61.151, d: 5.94, sd: 21.0, medium: 1 },
    { label: "2", R: 479.863, d: 5.981, sd: 20.5 },
    { label: "3", R: 39.289, d: 7.007, sd: 19.0, medium: 2 },
    { label: "4", R: "flat", d: 2.39, sd: 17.0, medium: 3 },
    { label: "5", R: 101.102, d: 10.064, sd: 16.5 },
    { label: "STO", R: "flat", d: 10.064 }, // stop position inferred from Fig. 1 at ~50 % of d5 gap
    { label: "6", R: 106.998, d: 2.417, sd: 11.5, medium: 4 },
    { label: "7", R: 23.855, d: 19.845, sd: 11.0 },
    { label: "8", R: 45.827, d: 3.402, sd: 12.5, medium: 5 },
    { label: "9", R: 84.232, sd: 12.0 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.5,
    description: "Unit focus — entire five-element optical block translates via straight helicoid.",
  },

  /* (moved from var) ── Variable air spacings (unit focus) ── */
  gaps: { "9": { label: "BF", values: [[50.5, 65.67]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
