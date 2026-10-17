import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Hasselblad HC 4.5/300                        ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2006/0209426 A1 Example 1 (Fujinon / Suzuki).    ║
 * ║  Three-group telephoto prime, all-spherical.                       ║
 * ║  9 elements / 7 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: inner focus — Group 20 (cemented doublet) translates       ║
 * ║         rearward; D8 increases, D11 decreases.                     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Derived from combined marginal + chief ray trace (f/4.66,       ║
 * ║    ω = 6.7°) with vignetting model for front group (35–100%       ║
 * ║    chief ray, ramping toward stop) to fit 95 mm filter barrel.     ║
 * ║    Post-stop: full paraxial chief ray. 8% mechanical clearance.    ║
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
  key: "hasselblad-hc-300-f4p5",
  maker: "Hasselblad",
  name: "HASSELBLAD HC 300mm f/4.5",
  subtitle: "US 2006/0209426 A1 Example 1 — Fujinon / Suzuki",

  catalog: {
    lensMounts: ["hasselblad-h"],
    imageFormat: "645",
    specs: ["9 ELEMENTS / 7 GROUPS", "f ≈ 292.0 mm", "F/4.66", "2ω ≈ 13.4°", "ALL SPHERICAL"],
    elementCount: 9,
    groupCount: 7,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 300, design: 291.96 },
    fNumber: { marketing: 4.5, design: 4.66 },
  },

  source: {
    patentNumber: "US 2006/0209426 A1",
    patentYear: 2006,
    authors: ["Takashi Suzuki"],
    assignees: ["Fujinon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "G11",
      label: "Element 1",
      type: "Pos. Meniscus",
      nd: 1.70154,
      vd: 41.1,
      focalLengthMm: 206.5,
      glass: "S-BAH27 (OHARA)",
      apd: false,
      role: "Front collector; deliberate moderate-dispersion choice per Condition (1)",
    },
    {
      id: 2,
      name: "G12",
      label: "Element 2",
      type: "Neg. Meniscus",
      nd: 1.8061,
      vd: 33.3,
      focalLengthMm: -100.0,
      glass: "NBFD15 (HOYA, 806333 code)",
      apd: false,
      role: "Primary negative power; flint partner for achromatizing pair",
    },
    {
      id: 3,
      name: "G13",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.43875,
      vd: 95.0,
      focalLengthMm: 108.4,
      glass: "S-FPL53 (OHARA)",
      apd: "patent",
      apdNote: "ΔPg,F ≈ +0.046 (OHARA NSL 7/PBM 2 ref); sole ED element; secondary-spectrum corrector",
      role: "ED achromatizer — corrects primary and secondary chromatic aberration",
      dPgF: 0.0459,
    },
    {
      id: 4,
      name: "G14",
      label: "Element 4",
      type: "Pos. Meniscus",
      nd: 1.62041,
      vd: 60.4,
      focalLengthMm: 189.6,
      glass: "S-BSM16 (OHARA)",
      apd: false,
      role: "Rear positive of front group; beam diameter control before focusing group",
    },
    {
      id: 5,
      name: "G21",
      label: "Element 5",
      type: "Biconvex Positive (weak)",
      nd: 1.80518,
      vd: 25.5,
      focalLengthMm: 330.0,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Focus-group front; high-dispersion flint for internal achromatism",
      cemented: "D1",
    },
    {
      id: 6,
      name: "G22",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.8,
      focalLengthMm: -82.0,
      glass: "S-LAM2 (OHARA)",
      apd: "inferred",
      apdNote: "ΔPg,F ≈ −0.004 (mild negative); complements S-FPL53 secondary-spectrum correction",
      role: "Focus-group rear; dominant negative power of Group 20",
      cemented: "D1",
      dPgF: -0.004,
    },
    {
      id: 7,
      name: "G31",
      label: "Element 7",
      type: "Neg. Meniscus",
      nd: 1.7432,
      vd: 49.3,
      focalLengthMm: -134.8,
      glass: "S-LAM60 (OHARA)",
      apd: false,
      role: "Post-stop field corrector; coma and lateral color control",
    },
    {
      id: 8,
      name: "G32",
      label: "Element 8",
      type: "Neg. Meniscus",
      nd: 1.80518,
      vd: 25.5,
      focalLengthMm: -123.0,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Rear corrector front; chromatic dispersion partner",
      cemented: "D2",
    },
    {
      id: 9,
      name: "G33",
      label: "Element 9",
      type: "Pos. Meniscus",
      nd: 1.8061,
      vd: 33.3,
      focalLengthMm: 197.0,
      glass: "NBFD15 (HOYA, 806333 code)",
      apd: false,
      role: "Rear corrector rear; near-zero Δn cemented interface acts as pure dispersive boundary",
      cemented: "D2",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 76.668, d: 8.94, sd: 43.0, medium: 1 }, // G11 front
    { label: "2", R: 154.99, d: 13.27, sd: 42.0 }, // G11 rear → air
    { label: "3", R: 127.54, d: 2.9, sd: 38.0, medium: 2 }, // G12 front
    { label: "4", R: 48.901, d: 0.48, sd: 36.0 }, // G12 rear → air
    { label: "5", R: 48.803, d: 16.36, sd: 36.0, medium: 3 }, // G13 front
    { label: "6", R: -1650.8, d: 0.25, sd: 35.0 }, // G13 rear → air
    { label: "7", R: 81.457, d: 30.0, sd: 34.0, medium: 4 }, // G14 front
    { label: "8", R: 227.58, sd: 28.0 }, // G14 rear → air (var)
    { label: "9", R: 1463.5, d: 4.2, sd: 25.0, medium: 5 }, // G21 front
    { label: "10", R: -88.987, d: 2.8, sd: 24.5, medium: 6 }, // G21→G22 junction
    { label: "11", R: 69.551, sd: 24.0 }, // G22 rear → air (var)
    { label: "STO", R: "flat", d: 37.08 }, // Aperture stop
    { label: "13", R: 147.6, d: 3.0, sd: 18.0, medium: 7 }, // G31 front
    { label: "14", R: 59.167, d: 16.37, sd: 18.5 }, // G31 rear → air
    { label: "15", R: 73.26, d: 2.1, sd: 23.0, medium: 8 }, // G32 front
    { label: "16", R: 42.11, d: 8.54, sd: 23.0, medium: 9 }, // G32→G33 junction
    { label: "17", R: 205.07, d: 70.18, sd: 23.5 }, // G33 rear → BFD
  ],

  /* ── Focus configuration ── */
  focus: { closeFocusM: 2.44, description: "Inner focus — Group 20 (G21+G22 cemented doublet) translates rearward." },

  /* (moved from var) ── Variable air spacings (inner focus) ──
   *  Group 20 translates rearward for close focus.
   *  D8 + D11 = 38.42 mm (conserved).
   *  Focus travel: 6.78 mm for MFD = 2.44 m (8 ft).
   */
  gaps: { "8": { label: "D8", values: [[5.55, 12.33]] }, "11": { label: "D11", values: [[32.87, 26.09]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4.66, fStops: [4.66, 5.6, 6.3, 8, 11, 16, 22, 32, 45] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "GROUP 10", fromSurface: "1", toSurface: "8" },
    { text: "GROUP 20", fromSurface: "9", toSurface: "11" },
    { text: "GROUP 30", fromSurface: "STO", toSurface: "17" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.22 },
} satisfies LensDataV2Input;

export default LENS_DATA;
