import type { LensDataInput } from "../../types/optics.js";

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
  key: "olympus-zuiko-135-f35",
  maker: "Olympus",
  name: "OLYMPUS E.ZUIKO AUTO-T 135mm f/3.5",
  subtitle: "US 3,838,911 EXAMPLE 1 — OLYMPUS / IKEDA",
  specs: ["5 ELEMENTS / 4 GROUPS", "f ≈ 135.0 mm", "F/3.5", "2ω ≈ 18°", "ALL-SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 135,
  focalLengthDesign: 135.03,
  apertureMarketing: 3.5,
  lensMounts: ["olympus-om"],
  imageFormat: "135-full-frame",
  patentNumber: "US 3,838,911",
  patentAuthors: ["Y Ikeda"],
  patentAssignees: ["Olympus Optical Co Ltd"],
  patentYear: 1974,
  elementCount: 5,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.2,
      fl: 112.3,
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
      fl: 80.6,
      glass: "487698 — FK/FSL low-dispersion crown class (patent nd=1.48749, νd=69.8; no exact modern coefficient-backed match)",
      apd: false,
      cemented: "D1",
      role: "Crown member of the cemented achromat; supplies positive power with low dispersion",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.76182,
      vd: 26.5,
      fl: -132.7,
      glass: "SF14 / N-SF14 (Schott) / S-TIH14 (OHARA) class (762265)",
      apd: false,
      cemented: "D1",
      role: "Dense-flint achromatizing partner in the cemented doublet; controls axial color and zonal SA",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.66998,
      vd: 39.3,
      fl: -46.4,
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
      fl: 120.1,
      glass: "N-SF6 / SF6 (Schott) / S-TIH6 (OHARA) class (805254)",
      apd: false,
      role: "Rear positive meniscus corrector; moderates field curvature, astigmatism, and distortion",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 61.151, d: 5.94, nd: 1.62041, elemId: 1, sd: 21.0 },
    { label: "2", R: 479.863, d: 5.981, nd: 1.0, elemId: 0, sd: 20.5 },
    { label: "3", R: 39.289, d: 7.007, nd: 1.48749, elemId: 2, sd: 19.0 },
    { label: "4", R: 1e15, d: 2.39, nd: 1.76182, elemId: 3, sd: 17.0 },
    { label: "5", R: 101.102, d: 10.064, nd: 1.0, elemId: 0, sd: 16.5 },
    { label: "STO", R: 1e15, d: 10.064, nd: 1.0, elemId: 0, sd: 12.4 }, // stop position inferred from Fig. 1 at ~50 % of d5 gap
    { label: "6", R: 106.998, d: 2.417, nd: 1.66998, elemId: 4, sd: 11.5 },
    { label: "7", R: 23.855, d: 19.845, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "8", R: 45.827, d: 3.402, nd: 1.80518, elemId: 5, sd: 12.5 },
    { label: "9", R: 84.232, d: 50.5, nd: 1.0, elemId: 0, sd: 12.0 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ── */
  var: {
    "9": [50.5, 65.67],
  },

  varLabels: [["9", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "9" },
  ],

  doublets: [{ text: "D1", fromSurface: "3", toSurface: "5" }],

  /* ── Focus configuration ── */
  closeFocusM: 1.5,
  focusDescription: "Unit focus — entire five-element optical block translates via straight helicoid.",

  /* ── Aperture configuration ── */
  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
