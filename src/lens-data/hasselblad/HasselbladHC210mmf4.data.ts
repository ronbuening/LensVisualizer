import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — HASSELBLAD HC 4/210                          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 6,445,511 B1 Example 3 (Fuji Photo Optical).     ║
 * ║  Three-group inner-focus telephoto-style prime for 645 format.     ║
 * ║  10 elements / 6 groups, all spherical.                            ║
 * ║  Focus: inner focus — G2 (cemented doublet) translates axially.    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent normalized to f = 1.0. All R, d, and sd values scaled   ║
 * ║    ×210.07 to match the production 210 mm focal length.            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Not patent-listed. Estimated from combined marginal + chief     ║
 * ║    ray trace (ω = 9.5°) with ~8% mechanical clearance.            ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "hasselblad-hc-210-f4",
  maker: "Hasselblad",
  name: "HASSELBLAD HC 4/210",
  subtitle: "US 6,445,511 B1 EXAMPLE 3 — FUJI PHOTO OPTICAL / KITAHARA",
  specs: ["10 ELEMENTS / 6 GROUPS", "f ≈ 210.0 mm", "F/4.0", "2ω ≈ 19.0°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 210,
  focalLengthDesign: 210.0,
  apertureMarketing: 4,
  lensMounts: ["hasselblad-h"],
  imageFormat: "645",
  patentYear: 2002,
  elementCount: 10,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 155.9,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Front collector — low-dispersion fluor-silicate crown; asymmetric biconvex bending minimizes marginal-ray spherical aberration.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 96.0,
      glass: "S-FPL51 (OHARA) / FCD1 (HOYA)",
      apd: "inferred",
      apdNote: "ED fluorophosphate crown, νd = 81.6; primary chromatic corrector for the front group.",
      role: "ED crown of the G1 achromatic doublet — provides dominant positive convergence with low chromatic introduction.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.65412,
      vd: 39.7,
      fl: -134.4,
      glass: "S-NBH5 (OHARA)",
      apd: false,
      role: "Niobium borate flint partner to L2 — Δνd = 41.9 provides strong achromatic correction at the front group.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.7,
      fl: -191.6,
      glass: "E-FL5 (HOYA)",
      apd: false,
      role: "Concave rear surface corrects SA from L1–L2; bends marginal ray steeply into G2 for short focus travel.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      fl: 131.0,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Titanium dense flint positive element of the inner-focus cemented doublet G2.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.816,
      vd: 46.6,
      fl: -58.2,
      glass: "S-LAH59 (OHARA)",
      apd: false,
      role: "Lanthanum dense flint diverger of G2 — cemented construction suppresses chromatic focus shift during travel.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      fl: -55.7,
      glass: "SF1 (Schott)",
      apd: false,
      role: "Symmetric biconcave (|R_front| = |R_rear|) — minimizes coma near stop; negative Petzval contribution.",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.6,
      fl: 67.3,
      glass: "S-LAH65 (OHARA)",
      apd: false,
      role: "Lanthanum dense flint biconvex — positive Petzval partner to L7, post-stop field corrector.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: -139.4,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Titanium dense flint meniscus, concave to image — shares glass with L5, reducing bill of materials.",
      cemented: "D4",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.74,
      vd: 28.3,
      fl: 67.1,
      glass: "S-TIH3 (OHARA)",
      apd: false,
      role: "Rear relay biconvex — delivers final convergence; two-flint pair with L9 is near-achromatically neutral.",
      cemented: "D4",
    },
  ],

  /* ── Surface prescription ──
   *  Patent: US 6,445,511 B1, Table 3 (Embodiment 3), scaled ×210.07.
   *  All surfaces spherical. Stop at surface #11 (patent surface #11).
   */
  surfaces: [
    { label: "1", R: 79.49, d: 10.95, nd: 1.48749, elemId: 1, sd: 30.5 }, // L1 front
    { label: "2", R: -1663.69, d: 0.46, nd: 1.0, elemId: 0, sd: 28.5 }, // L1 rear → air
    { label: "3", R: 50.08, d: 13.24, nd: 1.497, elemId: 2, sd: 29.5 }, // L2 front
    { label: "4", R: -923.57, d: 3.19, nd: 1.65412, elemId: 3, sd: 24.5 }, // L2→L3 junction
    { label: "5", R: 97.33, d: 0.2, nd: 1.0, elemId: 0, sd: 24.5 }, // L3 rear → air
    { label: "6", R: 41.53, d: 7.3, nd: 1.58144, elemId: 4, sd: 24.5 }, // L4 front
    { label: "7", R: 28.3, d: 10.95, nd: 1.0, elemId: 0, sd: 21.0 }, // L4 rear → air (D7, variable)
    { label: "8", R: 268.43, d: 4.98, nd: 1.80518, elemId: 5, sd: 18.0 }, // L5 front
    { label: "9", R: -172.24, d: 2.99, nd: 1.816, elemId: 6, sd: 18.5 }, // L5→L6 junction
    { label: "10", R: 66.13, d: 22.89, nd: 1.0, elemId: 0, sd: 18.0 }, // L6 rear → air (D10, variable)
    { label: "STO", R: 1e15, d: 12.78, nd: 1.0, elemId: 0, sd: 13.3 }, // Aperture stop
    { label: "12", R: -81.07, d: 5.8, nd: 1.71736, elemId: 7, sd: 14.5 }, // L7 front
    { label: "13", R: 81.07, d: 7.28, nd: 1.804, elemId: 8, sd: 16.0 }, // L7→L8 junction
    { label: "14", R: -156.48, d: 6.2, nd: 1.0, elemId: 0, sd: 16.0 }, // L8 rear → air
    { label: "15", R: 190.11, d: 5.93, nd: 1.80518, elemId: 9, sd: 15.5 }, // L9 front
    { label: "16", R: 69.6, d: 9.95, nd: 1.74, elemId: 10, sd: 15.5 }, // L9→L10 junction
    { label: "17", R: -162.64, d: 96.51, nd: 1.0, elemId: 0, sd: 14.8 }, // L10 rear → air (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (focus mechanism) ──
   *  Inner focus: G2 (L5+L6) translates axially.
   *  D7 = G1–G2 gap (increases toward close focus).
   *  D10 = G2–G3 gap (decreases toward close focus).
   *  Gap-sum conservation: D7 + D10 = 33.84 mm at all focus positions.
   *  Patent close-focus distance: 8.5 normalized = 1.79 m ≈ 1.8 m (production MFD).
   */
  var: {
    "7": [10.95, 24.53],
    "10": [22.89, 9.3],
  },

  varLabels: [
    ["7", "D7"],
    ["10", "D10"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "7" },
    { text: "G2 (−)", fromSurface: "8", toSurface: "10" },
    { text: "G3 (+)", fromSurface: "STO", toSurface: "17" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "12", toSurface: "14" },
    { text: "D4", fromSurface: "15", toSurface: "17" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.8,
  focusDescription: "Inner focus — cemented doublet G2 (L5+L6) translates axially; 13.6 mm travel, infinity to 1.8 m.",

  /* ── Aperture configuration ── */
  nominalFno: 4.0,
  fstopSeries: [4, 4.5, 5.6, 6.3, 8, 11, 16, 22, 32, 45],

  /* ── Layout tuning ── */
  scFill: 0.52,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
