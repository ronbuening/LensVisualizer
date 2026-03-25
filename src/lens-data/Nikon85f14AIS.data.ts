import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON AI NIKKOR 85mm f/1.4S                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,396,256 Embodiment 1 (Daijiro Fujie / Nikon).  ║
 * ║  Modified Gauss-Sonnar hybrid; basic design Takashi Takiguchi.     ║
 * ║  7 elements / 5 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: CRC floating — L1–L4 unit + L5 differential (d10 varies). ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f=1.0; all R, d, sd values scaled ×85 to f≈85 mm     ║
 * ║    production focal length.                                        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list SDs. Estimated from paraxial marginal and  ║
 * ║    chief ray trace at f/1.4 (EP SD = 30.36 mm) with 60% off-axis  ║
 * ║    field fraction and ~8% mechanical clearance. Constrained by     ║
 * ║    edge thickness, cross-gap overlap, and sd/|R| < 0.90 limits.   ║
 * ║    72mm filter thread → front element SD ≈ 32 mm.                 ║
 * ║                                                                    ║
 * ║  NOTE ON VARIABLE GAPS:                                            ║
 * ║    Patent does not provide close-focus spacing values. The d10 and ║
 * ║    BFD close-focus values are estimates derived from the 0.85 m    ║
 * ║    minimum focus distance (m = −1/7.9) and assumed CRC split.     ║
 * ║    Extension ≈ 10.76 mm; estimated CRC differential ≈ 2.0 mm.    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-85f14-ais",
  maker: "Nikon",
  name: "NIKON AI NIKKOR 85mm f/1.4S",
  subtitle: "US 4,396,256 Embodiment 1 — Nippon Kogaku / Fujie",
  specs: ["7 ELEMENTS / 5 GROUPS", "f ≈ 85.0 mm", "F/1.4", "2ω ≈ 28.5°", "ALL SPHERICAL"],

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
      fl: 106.4,
      glass: "LaK–LaF border (HOYA TAF1 / Schott N-LAF34 class, 773-494)",
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
      fl: 86.6,
      glass: "Lanthanum crown (HOYA LAC14 / Schott N-LAK14 class, 697-556)",
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
      fl: 89.0,
      glass: "Dense flint (HOYA FD110 / Schott SF11 class, 785-261)",
      apd: false,
      cemented: "L3",
      role: "Front element of cemented negative doublet L3. Dense flint chosen for g-line spherical aberration control via patent conditions (4)–(6).",
    },
    {
      id: 4,
      name: "L3b",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      fl: -26.1,
      glass: "Dense flint (HOYA E-FD4 / Schott SF4 class, 755-275)",
      apd: false,
      cemented: "L3",
      role: "Rear element of L3 doublet. Nearly matched Abbe number to L3a (Δvd=1.4) creates wavelength-selective negative spherical aberration at the cemented surface, counteracting g-line over-correction. Rear surface r7 (+23.6 mm) is the steepest in the system — the Sonnar 'stopper surface'.",
    },
    {
      id: 5,
      name: "L4a",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.8,
      fl: -38.8,
      glass: "Light flint (HOYA E-FL5 / Schott LF5 class, 581-408)",
      apd: false,
      cemented: "L4",
      role: "Front (negative) element of rear doublet L4. Low-index light flint; the concave-concave shape provides the rear Gauss negative corrector function.",
    },
    {
      id: 6,
      name: "L4b",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.74443,
      vd: 49.4,
      fl: 35.7,
      glass: "Lanthanum flint (HOYA NBF1 / OHARA S-LAM60 class, 744-494)",
      apd: false,
      cemented: "L4",
      role: "Rear (positive) element of L4. Same glass as L5. Doublet net power is very weak positive (fl ≈ +448 mm); L4 functions primarily as an aberration corrector.",
    },
    {
      id: 7,
      name: "L5",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.74443,
      vd: 49.4,
      fl: 107.2,
      glass: "Lanthanum flint (HOYA NBF1 / OHARA S-LAM60 class, 744-494)",
      apd: false,
      role: "Rear positive singlet. Same glass as L4b (manufacturing logistics). Provides final convergence. Separated from L4 by the CRC variable gap d10, which enlarges at close focus for aberration correction.",
    },
  ],

  /* ── Surface prescription ──
   *  All values scaled ×85 from patent Embodiment 1 (f=1.0 normalized).
   *  Stop position inferred from patent FIG. 1 at ~65% through d7 air gap.
   */
  surfaces: [
    { label: "1", R: 66.436, d: 7.497, nd: 1.77279, elemId: 1, sd: 32.0 }, // L1 front
    { label: "2", R: 346.596, d: 1.496, nd: 1.0, elemId: 0, sd: 31.0 }, // L1 rear → air
    { label: "3", R: 37.128, d: 9.699, nd: 1.6968, elemId: 2, sd: 28.0 }, // L2 front
    { label: "4", R: 96.501, d: 1.496, nd: 1.0, elemId: 0, sd: 25.0 }, // L2 rear → air
    { label: "5", R: 167.28, d: 6.503, nd: 1.7847, elemId: 3, sd: 24.5 }, // L3a front
    { label: "6", R: -120.003, d: 2.797, nd: 1.7552, elemId: 4, sd: 23.0 }, // L3a→L3b junction
    { label: "7", R: 23.639, d: 12.674, nd: 1.0, elemId: 0, sd: 20.5 }, // L3b rear → air
    { label: "STO", R: 1e15, d: 6.825, nd: 1.0, elemId: 0, sd: 16.7 }, // Aperture stop — inferred from FIG. 1 at ~65% through d7
    { label: "8", R: -31.408, d: 1.496, nd: 1.58144, elemId: 5, sd: 19.0 }, // L4a front
    { label: "9", R: 79.807, d: 8.704, nd: 1.74443, elemId: 6, sd: 19.0 }, // L4a→L4b junction
    { label: "10", R: -39.806, d: 0.4, nd: 1.0, elemId: 0, sd: 20.0 }, // L4b rear → air (CRC gap)
    { label: "11", R: 106.004, d: 4.803, nd: 1.74443, elemId: 7, sd: 22.0 }, // L5 front
    { label: "12", R: -322.405, d: 42.628, nd: 1.0, elemId: 0, sd: 21.5 }, // L5 rear → image (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (CRC focus mechanism) ──
   *  The entire lens extends for close focus (unit focus component), while
   *  L1–L4 move by a slightly larger amount than L5, enlarging d10.
   *  This is Nikon's Close-Range Correction (CRC) system.
   *
   *  CAUTION: Close-focus values are ESTIMATES — the patent does not provide
   *  explicit close-focus spacing data. Values derived from the 0.85 m MFD
   *  (magnification −1/7.9, extension ≈ 10.76 mm) with an assumed CRC
   *  differential of ≈ 2.0 mm.
   */
  var: {
    10: [0.4, 2.4], // CRC gap: L4b rear → L5 front [d_infinity, d_close_est]
    12: [42.628, 51.388], // BFD: L5 rear → image [d_infinity, d_close_est]
  },

  varLabels: [
    ["10", "D10 (CRC)"],
    ["12", "BF"],
  ],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT (Sonnar hybrid)", fromSurface: "1", toSurface: "7" },
    { text: "REAR (Gauss)", fromSurface: "8", toSurface: "12" },
  ],

  doublets: [
    { text: "L3", fromSurface: "5", toSurface: "7" },
    { text: "L4", fromSurface: "8", toSurface: "10" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.85,
  focusDescription:
    "CRC (Close-Range Correction): entire lens extends for close focus; L1–L4 move as a unit by a slightly larger amount than L5, enlarging the d10 air gap. Compensates for field curvature, coma, and astigmatism shifts at close distances. Close-focus variable gap values are estimates.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
