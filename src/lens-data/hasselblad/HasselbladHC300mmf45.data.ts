import type { LensDataInput } from "../../types/optics.js";

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
  key: "hasselblad-hc-300-f4p5",
  maker: "Hasselblad",
  name: "HASSELBLAD HC 300mm f/4.5",
  subtitle: "US 2006/0209426 A1 Example 1 — Fujinon / Suzuki",
  specs: ["9 ELEMENTS / 7 GROUPS", "f ≈ 292.0 mm", "F/4.66", "2ω ≈ 13.4°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 300,
  focalLengthDesign: 291.96,
  apertureMarketing: 4.5,
  apertureDesign: 4.66,
  lensMounts: ["hasselblad-h"],
  imageFormat: "645",
  patentYear: 2006,
  elementCount: 9,
  groupCount: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "G11",
      label: "Element 1",
      type: "Pos. Meniscus",
      nd: 1.70154,
      vd: 41.1,
      fl: 206.5,
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
      fl: -100.0,
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
      fl: 108.4,
      glass: "S-FPL53 (OHARA)",
      apd: "patent",
      apdNote: "ΔPg,F ≈ +0.046 (OHARA NSL 7/PBM 2 ref); sole ED element; secondary-spectrum corrector",
      dPgF: 0.0459,
      role: "ED achromatizer — corrects primary and secondary chromatic aberration",
    },
    {
      id: 4,
      name: "G14",
      label: "Element 4",
      type: "Pos. Meniscus",
      nd: 1.62041,
      vd: 60.4,
      fl: 189.6,
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
      fl: 330.0,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Focus-group front; high-dispersion flint for internal achromatism",
    },
    {
      id: 6,
      name: "G22",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.744,
      vd: 44.8,
      fl: -82.0,
      glass: "S-LAM2 (OHARA)",
      apd: "inferred",
      apdNote: "ΔPg,F ≈ −0.004 (mild negative); complements S-FPL53 secondary-spectrum correction",
      dPgF: -0.004,
      cemented: "D1",
      role: "Focus-group rear; dominant negative power of Group 20",
    },
    {
      id: 7,
      name: "G31",
      label: "Element 7",
      type: "Neg. Meniscus",
      nd: 1.7432,
      vd: 49.3,
      fl: -134.8,
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
      fl: -123.0,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      cemented: "D2",
      role: "Rear corrector front; chromatic dispersion partner",
    },
    {
      id: 9,
      name: "G33",
      label: "Element 9",
      type: "Pos. Meniscus",
      nd: 1.8061,
      vd: 33.3,
      fl: 197.0,
      glass: "NBFD15 (HOYA, 806333 code)",
      apd: false,
      cemented: "D2",
      role: "Rear corrector rear; near-zero Δn cemented interface acts as pure dispersive boundary",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 76.668, d: 8.94, nd: 1.70154, elemId: 1, sd: 43.0 }, // G11 front
    { label: "2", R: 154.99, d: 13.27, nd: 1.0, elemId: 0, sd: 42.0 }, // G11 rear → air
    { label: "3", R: 127.54, d: 2.9, nd: 1.8061, elemId: 2, sd: 38.0 }, // G12 front
    { label: "4", R: 48.901, d: 0.48, nd: 1.0, elemId: 0, sd: 36.0 }, // G12 rear → air
    { label: "5", R: 48.803, d: 16.36, nd: 1.43875, elemId: 3, sd: 36.0 }, // G13 front
    { label: "6", R: -1650.8, d: 0.25, nd: 1.0, elemId: 0, sd: 35.0 }, // G13 rear → air
    { label: "7", R: 81.457, d: 30.0, nd: 1.62041, elemId: 4, sd: 34.0 }, // G14 front
    { label: "8", R: 227.58, d: 5.55, nd: 1.0, elemId: 0, sd: 28.0 }, // G14 rear → air (var)
    { label: "9", R: 1463.5, d: 4.2, nd: 1.80518, elemId: 5, sd: 25.0 }, // G21 front
    { label: "10", R: -88.987, d: 2.8, nd: 1.744, elemId: 6, sd: 24.5 }, // G21→G22 junction
    { label: "11", R: 69.551, d: 32.87, nd: 1.0, elemId: 0, sd: 24.0 }, // G22 rear → air (var)
    { label: "STO", R: 1e15, d: 37.08, nd: 1.0, elemId: 0, sd: 13.5 }, // Aperture stop
    { label: "13", R: 147.6, d: 3.0, nd: 1.7432, elemId: 7, sd: 18.0 }, // G31 front
    { label: "14", R: 59.167, d: 16.37, nd: 1.0, elemId: 0, sd: 18.5 }, // G31 rear → air
    { label: "15", R: 73.26, d: 2.1, nd: 1.80518, elemId: 8, sd: 23.0 }, // G32 front
    { label: "16", R: 42.11, d: 8.54, nd: 1.8061, elemId: 9, sd: 23.0 }, // G32→G33 junction
    { label: "17", R: 205.07, d: 70.18, nd: 1.0, elemId: 0, sd: 23.5 }, // G33 rear → BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (inner focus) ──
   *  Group 20 translates rearward for close focus.
   *  D8 + D11 = 38.42 mm (conserved).
   *  Focus travel: 6.78 mm for MFD = 2.44 m (8 ft).
   */
  var: {
    "8": [5.55, 12.33],
    "11": [32.87, 26.09],
  },

  varLabels: [
    ["8", "D8"],
    ["11", "D11"],
  ],

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

  /* ── Focus configuration ── */
  closeFocusM: 2.44,
  focusDescription: "Inner focus — Group 20 (G21+G22 cemented doublet) translates rearward.",

  /* ── Aperture configuration ── */
  nominalFno: 4.5,
  fstopSeries: [4.5, 5.6, 6.3, 8, 11, 16, 22, 32, 45],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.22,
} satisfies LensDataInput;

export default LENS_DATA;
