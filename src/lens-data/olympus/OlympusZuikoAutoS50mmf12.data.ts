import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — OLYMPUS ZUIKO AUTO-S 50mm f/1.2             ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,099,843 Example 6 (Olympus / Toshihiro Imai).  ║
 * ║  Modified Gauss (double-Gauss) with long back focal length.       ║
 * ║  7 elements / 6 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focus (entire lens translates).                       ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f=100; all R, d, sd values scaled ×0.500             ║
 * ║    to f≈50 mm production.                                         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    Estimated from combined marginal + chief ray trace              ║
 * ║    (offAxisFieldFrac = 0.60) with 8% clearance.                   ║
 * ║    Front group capped by 49 mm filter thread constraint            ║
 * ║    (max SD ≈ 21 mm).  r6 (R = 17.15 mm) limited by slope         ║
 * ║    check at sd/|R| = 0.90.                                        ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:          ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "olympus-zuiko-auto-s-50f12",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO AUTO-S 50mm f/1.2",
  subtitle: "US 4,099,843 EXAMPLE 6 — OLYMPUS / IMAI",
  specs: ["7 ELEMENTS / 6 GROUPS", "f ≈ 50.0 mm", "F/1.2", "2ω ≈ 46°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 50,
  apertureMarketing: 1.2,
  patentYear: 1978,
  elementCount: 7,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.82,
      fl: 61.9,
      glass: "S-LAH55 (OHARA) / TAFD5 (HOYA)",
      apd: false,
      role: "Primary collecting element; high-index LaH minimises surface angles at f/1.2",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.19,
      fl: 85.3,
      glass: "S-LAH65 (OHARA) / TAFD25 (HOYA)",
      apd: false,
      role: "Secondary positive power; forms negative air lens with L3 for Petzval correction",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.46,
      fl: -32.9,
      glass: "S-TIF8 (OHARA) / TIF6 (HOYA)",
      apd: false,
      role: "Spherical aberration correction; L2+L3 combined f₂₃ = −66.6 for Petzval control",
    },
    {
      id: 4,
      name: "L4a",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: -28.7,
      glass: "S-TIH53 (OHARA) / E-TIH53 (HOYA)",
      apd: false,
      role: "Dense flint half of cemented doublet; chromatic correction via Δν = 31.4 at cement",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L4b",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.33,
      fl: 59.3,
      glass: "E-CF6 (HOYA)",
      apd: false,
      role: "Crown half of doublet; net doublet f₄₅ = −72.0 for Petzval correction",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 55.0,
      glass: "S-LAH66 (OHARA) / TAF1 (HOYA)",
      apd: false,
      role: "Strong rear positive power; symmetric counterpart to L2 across stop",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.79952,
      vd: 42.24,
      fl: 78.1,
      glass: "S-LAH52 (OHARA) / TAFD30 (HOYA)",
      apd: false,
      role: "Final convergence to image; best-form orientation minimises coma",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 41.086, d: 5.11, nd: 1.83481, elemId: 1, sd: 21.0 },
    { label: "2", R: 189.501, d: 0.095, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "3", R: 27.442, d: 5.39, nd: 1.834, elemId: 2, sd: 20.0 },
    { label: "4", R: 40.705, d: 1.44, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "5", R: 63.16, d: 1.645, nd: 1.72825, elemId: 3, sd: 16.3 },
    { label: "6", R: 17.152, d: 8.5, nd: 1.0, elemId: 0, sd: 15.4 },
    // STO position estimated from patent Fig. 1 (approximately centered in d₆ gap)
    { label: "STO", R: 1e15, d: 8.475, nd: 1.0, elemId: 0, sd: 14.3 },
    { label: "7", R: -16.41, d: 1.555, nd: 1.84666, elemId: 4, sd: 13.5 },
    { label: "8", R: -52.885, d: 5.745, nd: 1.6779, elemId: 5, sd: 14.5 },
    { label: "9", R: -23.831, d: 0.095, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "10", R: -81.709, d: 5.475, nd: 1.7725, elemId: 6, sd: 16.0 },
    { label: "11", R: -28.759, d: 0.095, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "12", R: 87.025, d: 2.91, nd: 1.79952, elemId: 7, sd: 17.0 },
    { label: "13", R: -217.749, d: 37.31, nd: 1.0, elemId: 0, sd: 16.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ── */
  var: {
    "13": [37.31, 43.56],
  },

  varLabels: [["13", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "6" },
    { text: "REAR", fromSurface: "7", toSurface: "13" },
  ],

  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.45,
  focusDescription: "Unit focus — entire optical assembly translates forward.",

  /* ── Aperture configuration ── */
  nominalFno: 1.2,
  fstopSeries: [1.2, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
