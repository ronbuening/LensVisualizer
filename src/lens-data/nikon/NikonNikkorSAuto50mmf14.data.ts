import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON NIKKOR-S AUTO 50mm f/1.4               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,560,079 Example 1 (Nippon Kogaku K.K.).         ║
 * ║  Modified Gauss type for SLR with extended back focus (0.75f).     ║
 * ║  7 elements / 5 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focus (entire lens translates).                       ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent normalized to f = 1.0. All R, d, sd values scaled       ║
 * ║    ×49.99 to production f ≈ 50 mm.                                ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. Estimated from paraxial    ║
 * ║    marginal ray trace at f/1.4 with ~8–10% mechanical clearance,  ║
 * ║    constrained by 52 mm filter thread (front SD ≈ 23 mm),         ║
 * ║    slope limits, and cross-gap sag intrusion checks.              ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus/zoom gaps                   ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ║    ✗ DO NOT include: parent/donor designs (use final design only) ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "nikkor-s-auto-50mm-f14",
  maker: "Nikon",
  name: "NIKON NIKKOR-S AUTO 50mm f/1.4",
  subtitle: "US 3,560,079 EXAMPLE 1 — NIPPON KOGAKU / WAKIMOTO & SHIMIZU",
  specs: ["7 ELEMENTS / 5 GROUPS", "f ≈ 50.0 mm", "F/1.4", "2ω ≈ 46°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 50,
  apertureMarketing: 1.4,
  patentYear: 1971,
  elementCount: 7,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.66446,
      vd: 35.9,
      fl: 80.6,
      glass: "SF2 / NSL36 (dense flint)",
      apd: false,
      role: "Front positive meniscus. Collects incoming light and begins convergence; high-dispersion flint provides chromatic balance globally rather than locally.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 53.4,
      fl: 43.1,
      glass: "LaK9 / LAL7 (lanthanum crown)",
      apd: false,
      cemented: "D1",
      role: "Front doublet positive component. Thick lanthanum crown near-plano-convex that carries the primary chromatic correction load in the front group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.64831,
      vd: 33.8,
      fl: -25.7,
      glass: "SF4 / PBM5 (dense flint)",
      apd: false,
      cemented: "D1",
      role: "Front doublet negative component. Thin dense flint that provides diverging power for Petzval balance and achromatism against L2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.1,
      fl: -22.5,
      glass: "SF6 / PBM6 (dense flint)",
      apd: false,
      cemented: "D2",
      role: "Rear doublet negative component. Highest-dispersion glass in the system; its strongly curved front surface r₆ is the dominant source of both spherical aberration and its correction.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      fl: 35.3,
      glass: "LaK8 / LAL14 (lanthanum crown)",
      apd: false,
      cemented: "D2",
      role: "Rear doublet positive component. Thick lanthanum crown symmetric to L2 about the stop; provides achromatism against L4 and positive convergence for image formation.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.5,
      fl: 63.3,
      glass: "SK16 / BSL7 (barium crown)",
      apd: false,
      role: "First element of the split rear group. Positive meniscus concave toward object; works with L7 to correct coma introduced by the rear doublet — the key innovation over the predecessor 5.8cm f/1.4.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      fl: 99.7,
      glass: "LaK8 / LAL14 (lanthanum crown)",
      apd: false,
      role: "Final collecting element. Near-plano-convex biconvex with nearly flat rear surface to minimize last-surface aberration contribution. Same glass as L5, simplifying production.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent US 3,560,079 Example 1, normalized f = 1.0, scaled ×49.99 to 50 mm.
   *  All surfaces spherical. Stop inferred at center of d₅ gap from FIG. 1.
   */
  surfaces: [
    { label: "1", R: 38.2662, d: 6.2986, nd: 1.66446, elemId: 1, sd: 23.0 }, // L1 front
    { label: "2", R: 125.2362, d: 0.095, nd: 1.0, elemId: 0, sd: 21.0 }, // L1 rear → air
    { label: "3", R: 28.6734, d: 8.4281, nd: 1.6935, elemId: 2, sd: 19.5 }, // L2 front (D1)
    { label: "4", R: 620.0624, d: 1.6446, nd: 1.64831, elemId: 3, sd: 16.5 }, // L2→L3 junction (D1)
    { label: "5", R: 16.1963, d: 8.1381, nd: 1.0, elemId: 0, sd: 14.0 }, // L3 rear → air (to stop)
    { label: "STO", R: 1e15, d: 8.1381, nd: 1.0, elemId: 0, sd: 12.1 }, // Aperture stop — centered in d₅ (inferred from FIG. 1)
    { label: "6", R: -14.4567, d: 2.0345, nd: 1.69895, elemId: 4, sd: 12.5 }, // L4 front (D2)
    { label: "7", R: -193.7554, d: 8.2331, nd: 1.713, elemId: 5, sd: 13.0 }, // L4→L5 junction (D2)
    { label: "8", R: -22.6698, d: 0.195, nd: 1.0, elemId: 0, sd: 15.0 }, // L5 rear → air
    { label: "9", R: -116.2533, d: 4.164, nd: 1.6779, elemId: 6, sd: 15.0 }, // L6 front
    { label: "10", R: -31.7777, d: 0.095, nd: 1.0, elemId: 0, sd: 14.5 }, // L6 rear → air
    { label: "11", R: 77.5022, d: 3.0993, nd: 1.713, elemId: 7, sd: 14.5 }, // L7 front
    { label: "12", R: -843.6759, d: 37.4886, nd: 1.0, elemId: 0, sd: 14.0 }, // L7 rear → image (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates; only BFD changes.
   *  Close focus at 0.6 m: extension ≈ f²/(MFD − f) ≈ 4.55 mm.
   */
  var: {
    "12": [37.4886, 42.034],
  },

  varLabels: [["12", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "5" },
    { text: "III", fromSurface: "6", toSurface: "8" },
    { text: "IV", fromSurface: "9", toSurface: "10" },
    { text: "V", fromSurface: "11", toSurface: "12" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.6,
  focusDescription:
    "Unit focus — entire optical assembly translates along the optical axis. 7-blade aperture diaphragm.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
