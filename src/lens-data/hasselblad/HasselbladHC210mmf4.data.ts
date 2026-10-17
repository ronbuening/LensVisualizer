import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║    Patent normalized to f = 1.0. Source R and d values scaled   ║
 * ║    ×210.07; retain scaled source precision, without 0.01 mm rounding.            ║
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
 *
 * MTF source audit: Table 3 dimensions were rounded prematurely to 0.01 mm
 * after scaling ×210.07 (D4 and D13 also rounded upward incorrectly).
 * Restore full scaled printed precision. Offset improves −0.204236 to
 * −0.082281 mm, below the 0.188020 mm census limit. Native source
 * EFL 0.999672803 and BFL 0.459008318 retain small differences from
 * f=1 and D17=0.45940; keep those published values, without focus tuning.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "hasselblad-hc-210-f4",
  maker: "Hasselblad",
  name: "HASSELBLAD HC 210mm f/4",
  subtitle: "US 6,445,511 B1 EXAMPLE 3 — FUJI PHOTO OPTICAL / KITAHARA",

  catalog: {
    lensMounts: ["hasselblad-h"],
    imageFormat: "645",
    specs: ["10 ELEMENTS / 6 GROUPS", "f ≈ 210.0 mm", "F/4.0", "2ω ≈ 19.0°", "ALL SPHERICAL"],
    elementCount: 10,
    groupCount: 6,
    /* ── Explicit metadata fields ── */
    focalLengthMm: { marketing: 210, design: 210.0 },
    fNumber: { marketing: 4 },
  },

  source: {
    patentNumber: "US 6,445,511 B1",
    patentYear: 2002,
    authors: ["You Kitahara"],
    assignees: ["Fuji Photo Optical Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 155.9,
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
      focalLengthMm: 96.0,
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
      focalLengthMm: -134.4,
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
      focalLengthMm: -191.6,
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
      focalLengthMm: 131.0,
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
      focalLengthMm: -58.2,
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
      focalLengthMm: -55.7,
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
      focalLengthMm: 67.3,
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
      focalLengthMm: -139.4,
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
      focalLengthMm: 67.1,
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
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 79.490488, d: 10.9467477, sd: 30.5, medium: 1 }, // L1 front
    { label: "2", R: -1663.691379, d: 0.4579526, sd: 28.5 }, // L1 rear → air
    { label: "3", R: 50.080688, d: 13.2365107, sd: 29.5, medium: 2 }, // L2 front
    { label: "4", R: -923.572755, d: 3.1846612, sd: 24.5, medium: 3 }, // L2→L3 junction
    { label: "5", R: 97.325431, d: 0.1995665, sd: 24.5 }, // L3 rear → air
    { label: "6", R: 41.530839, d: 7.3041339, sd: 24.5, medium: 4 }, // L4 front
    { label: "7", R: 28.296429, sd: 21.0 }, // L4 rear → air (D7, variable)
    { label: "8", R: 268.427446, d: 4.9765583, sd: 18.0, medium: 5 }, // L5 front
    { label: "9", R: -172.236393, d: 2.9850947, sd: 18.5, medium: 6 }, // L5→L6 junction
    { label: "10", R: 66.130036, sd: 18.0 }, // L6 rear → air (D10, variable)
    { label: "STO", R: "flat", d: 12.7785581 }, // Aperture stop
    { label: "12", R: -81.066013, d: 5.8021334, sd: 14.5, medium: 7 }, // L7 front
    { label: "13", R: 81.066013, d: 7.2747241, sd: 16.0, medium: 8 }, // L7→L8 junction
    { label: "14", R: -156.481143, d: 6.1991657, sd: 16.0 }, // L8 rear → air
    { label: "15", R: 190.11335, d: 5.9302761, sd: 15.5, medium: 9 }, // L9 front
    { label: "16", R: 69.596191, d: 9.9510159, sd: 15.5, medium: 10 }, // L9→L10 junction
    { label: "17", R: -162.636194, d: 96.506158, sd: 14.8 }, // L10 rear → air (BFD)
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 1.8,
    description:
      "Published inner focus — cemented doublet G2 (L5+L6) translates 13.584 mm. The patent labels its second station 8.5 m despite f=1 normalization; the marketed 1.8 m minimum is not a verified source conjugate.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings (focus mechanism) ──
   *  Inner focus: G2 (L5+L6) translates axially.
   *  D7 = G1–G2 gap (increases toward close focus).
   *  D10 = G2–G3 gap (decreases toward close focus).
   *  Gap-sum conservation: D7 + D10 = 33.8380756 mm at both focus positions.
   *  The source labels its second state “8.5 m” despite f=1 normalization;
   * production closeFocusM=1.8 is metadata, not a verified source conjugate.
   */
  gaps: {
    "7": { label: "D7", values: [[10.9488484, 24.5330753]] },
    "10": { label: "D10", values: [[22.8892272, 9.3050003]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4.0, fStops: [4, 4.5, 5.6, 6.3, 8, 11, 16, 22, 32, 45] },

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

  /* ── Layout tuning ── */
  layout: { scFill: 0.52, yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
