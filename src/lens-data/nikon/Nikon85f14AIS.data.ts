import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 4,396,256 A, Embodiment 1, normalized f=1 scaled by85.
 * Seven elements, five air-separated components; all spherical.
 * Floating-focus direction is sourced; finite distances/travel are inferred.
 * Clear apertures and the stop's split of D7 are figure-based estimates.
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikkor-85f14-ais",
  maker: "Nikon",
  name: "NIKON AI NIKKOR 85mm f/1.4 S",
  subtitle: "US 4,396,256 A Embodiment 1 (85× scale) — Nippon Kogaku / Fujie",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 5 GROUPS", "f ≈ 85.0 mm", "F/1.4", "2ω ≈ 28.5°", "ALL SPHERICAL"],
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: { marketing: 85, design: 85.0 },
    fNumber: { marketing: 1.4, design: 1.4 },
  },

  source: {
    patentNumber: "US 4,396,256 A",
    patentYear: 1983,
    authors: ["Daijiro Fujie"],
    assignees: ["Nippon Kogaku K.K."],
  },

  /* ── Elements ──
   *  7 elements in 5 groups: L1, L2, L3(a+b cemented), L4(a+b cemented), L5
   */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.77279,
      vd: 49.4,
      focalLengthMm: 105.1,
      glass: "N-LAF34 (Schott, inferred coordinate counterpart)",
      apd: false,
      role: "Front positive meniscus, convex toward object. Provides initial convergence through the full f/1.4 beam. High-index lanthanum glass limits curvatures to control high-order aberrations.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.6,
      focalLengthMm: 81.2,
      glass: "N-LAK14 (Schott, inferred coordinate counterpart)",
      apd: false,
      role: "Second positive meniscus (φ₂ > φ₁). Higher power than L1, immediately preceded by a divergent air lens. Lower dispersion (vd=55.6) reduces chromatic contributions from this stronger element.",
    },
    {
      id: 3,
      name: "L3a",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.7847,
      vd: 26.1,
      focalLengthMm: 89.9,
      glass: "SF11 (Schott, inferred coordinate counterpart)",
      apd: false,
      role: "Front element of cemented negative doublet L3. Dense flint chosen for g-line spherical aberration control via patent conditions (4)–(6).",
      cemented: "L3",
    },
    {
      id: 4,
      name: "L3b",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      focalLengthMm: -25.9,
      glass: "E-FD4 (HOYA, inferred coordinate counterpart)",
      apd: false,
      role: "Rear element of L3 doublet. Nearly matched Abbe number to L3a (Δvd=1.4) creates wavelength-selective negative spherical aberration at the cemented surface, counteracting g-line over-correction. Rear surface r7 (+23.6 mm) is the steepest in the system.",
      cemented: "L3",
    },
    {
      id: 5,
      name: "L4a",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.8,
      focalLengthMm: -38.6,
      glass: "E-FL5 (HOYA, inferred coordinate counterpart)",
      apd: false,
      role: "Front (negative) element of rear doublet L4. Low-index light flint; the concave-concave shape provides the rear Gauss negative corrector function.",
      cemented: "L4",
    },
    {
      id: 6,
      name: "L4b",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.74443,
      vd: 49.4,
      focalLengthMm: 36.8,
      glass: "NBF1 (HOYA, inferred coordinate counterpart)",
      apd: false,
      role: "Rear (positive) element of L4. Same glass as L5. Doublet net power is very weak positive (fl ≈ +448 mm); L4 functions primarily as an aberration corrector.",
      cemented: "L4",
    },
    {
      id: 7,
      name: "L5",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.74443,
      vd: 49.4,
      focalLengthMm: 107.7,
      glass: "NBF1 (HOYA, inferred coordinate counterpart)",
      apd: false,
      role: "Rear positive singlet. Same source glass coordinates as L4b. Provides final convergence. Separated from L4 by the CRC variable gap d10, which enlarges at close focus for aberration correction.",
    },
  ],

  /* ── Surface prescription ──
   *  All values scaled ×85 from patent Embodiment 1 (f=1.0 normalized).
   *  Stop position inferred from patent FIG. 1 at ~65% through d7 air gap.
   */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 66.436, d: 7.497, sd: 33.5, medium: 1 }, // L1 front
    { label: "2", R: 346.596, d: 1.496, sd: 33.5 }, // L1 rear → air
    { label: "3", R: 37.128, d: 9.699, sd: 28.0, medium: 2 }, // L2 front
    { label: "4", R: 96.501, d: 1.496, sd: 25.0 }, // L2 rear → air
    { label: "5", R: 167.28, d: 6.503, sd: 24.3, medium: 3 }, // L3a front
    { label: "6", R: -120.003, d: 2.797, sd: 23.0, medium: 4 }, // L3a→L3b junction
    { label: "7", R: 23.639, d: 12.674, sd: 20.5 }, // L3b rear → air
    { label: "STO", R: "flat", d: 6.825 }, // Aperture stop — inferred from FIG. 1 at ~65% through d7
    { label: "8", R: -31.408, d: 1.496, sd: 19.0, medium: 5 }, // L4a front
    { label: "9", R: 79.807, d: 8.704, sd: 19.0, medium: 6 }, // L4a→L4b junction
    { label: "10", R: -39.806, sd: 20.0 }, // L4b rear → air (CRC gap)
    { label: "11", R: 106.004, d: 4.803, sd: 19.5, medium: 7 }, // L5 front
    { label: "12", R: -322.405, sd: 19.5 }, // L5 rear → image (BFD)
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.85,
    description:
      "Floating focus direction follows the patent: L1–L4 and the stop move farther objectward than L5, enlarging D10. The 2 mm differential and 0.85 m endpoint are assumed; rear extension is reconstructed to match that endpoint. No finite station is published.",
  },

  /* (moved from var) Floating direction is sourced (column6), but no finite gaps are given.
   * Retain the assumed2mm differential; solve rear extension for0.85m.
   * L1-L4/stop travel12.10765mm; L5 travels10.10765mm objectward.
   */
  gaps: {
    "10": { label: "D10 (CRC)", values: [[0.4, 2.4]] }, // CRC gap: L4b rear → L5 front [d_infinity, d_close_est]
    "12": { label: "BF", values: [[42.628, 52.73565361226402]] }, // BFD: L5 rear → image [d_infinity, d_close_est]
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.4, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L1–L4 + stop (floating)", fromSurface: "1", toSurface: "10" },
    { text: "L5 (focus)", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [
    { text: "L3", fromSurface: "5", toSurface: "7" },
    { text: "L4", fromSurface: "8", toSurface: "10" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
