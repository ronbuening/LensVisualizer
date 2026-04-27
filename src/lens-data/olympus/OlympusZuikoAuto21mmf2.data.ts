import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Olympus OM Zuiko Auto-W 21mm f/2                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,210,388 Example 1 (Olympus / Yoshitsugi Ikeda) ║
 * ║  Retrofocus wide-angle with patented flare stop.                   ║
 * ║  11 elements / 9 groups (L4 split into L4a + L4b),               ║
 * ║  0 aspherical surfaces.                                           ║
 * ║  Focus: unit focus (BFD changes).  Patent provides infinity only; ║
 * ║         production lens uses floating elements for close focus.    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent normalizes to f = 100 (stated).  All R, d, and sd       ║
 * ║    values scaled ×0.21 to f ≈ 21 mm production focal length.      ║
 * ║    Computed EFL at production scale ≈ 28.49 mm — a significant    ║
 * ║    discrepancy from the stated f = 100, likely due to one or      ║
 * ║    more typographical errors in the patent prescription.           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters.  Estimated from marginal  ║
 * ║    ray geometry at f/2, constrained by sd/|R| ≤ 0.88, edge       ║
 * ║    thickness ≥ 0.3 mm, and cross-gap sag intrusion ≤ 88%.        ║
 * ║    Front element constrained by 55 mm production filter thread.   ║
 * ║                                                                    ║
 * ║  NOTE ON FLARE STOP:                                               ║
 * ║    The patent's flare stop E (ring stop controlling off-axis      ║
 * ║    coma) is located in the d₈ air gap between L4a and L4b.       ║
 * ║    It is not the main aperture stop and is not modeled as a       ║
 * ║    separate surface — the gap is a normal air space.              ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gaps                        ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "olympus-zuiko-auto-w-21mm-f2",
  maker: "Olympus",
  name: "OLYMPUS OM ZUIKO AUTO-W 21mm f/2",
  subtitle: "US 4,210,388 EXAMPLE 1 — OLYMPUS / Y. IKEDA",
  specs: ["11 ELEMENTS / 9 GROUPS", "f ≈ 21 mm (marketed) / 28.5 mm (computed)", "F/2.0", "2ω = 92°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 21,
  focalLengthDesign: 28.49,
  apertureMarketing: 2.0,
  patentYear: 1980,
  elementCount: 11,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.639,
      vd: 44.9,
      fl: 108.1,
      glass: "LAC14 / BaLF5 (OHARA / Schott)",
      apd: false,
      role: "Weak positive collector in front diverging group; moderates total group divergence",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.734,
      vd: 51.5,
      fl: -33.5,
      glass: "LAC10 / LaK9 (OHARA / Schott)",
      apd: false,
      role: "Strong negative meniscus; primary diverging element for retrofocus BFD extension",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -23.6,
      glass: "LAC12 / LaK10 (OHARA / Schott)",
      apd: false,
      role: "Strongest negative element; with L2 provides dominant retrofocus divergence",
    },
    {
      id: 4,
      name: "L4a",
      label: "Element 4a",
      type: "Plano-Convex",
      nd: 1.61659,
      vd: 36.6,
      fl: 218.1,
      glass: "F2 / TIF1 (Schott / OHARA)",
      apd: false,
      role: "Front half of split component 4; flare stop E sits in the gap after this element",
    },
    {
      id: 5,
      name: "L4b",
      label: "Element 4b",
      type: "Plano-Convex",
      nd: 1.61659,
      vd: 36.6,
      fl: 686.4,
      glass: "F2 / TIF1 (Schott / OHARA)",
      apd: false,
      role: "Rear half of split component 4; weak positive, begins reconvergence after front group",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: -57.96,
      glass: "LAC7 / LaK8 (OHARA / Schott)",
      apd: false,
      role: "Crown negative in reversed achromat doublet (L5+L6); corrects retrofocus lateral color",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.5934,
      vd: 34.8,
      fl: 18.31,
      glass: "LF7 (Schott)",
      apd: false,
      role: "Flint positive in reversed achromat; provides convergence and chromatic balancing",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 43.7,
      fl: 27.93,
      glass: "LaF3 / LAF2 (Schott / HOYA)",
      apd: false,
      role: "Lanthanum-flint positive in rear achromatic doublet (L7+L8)",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      fl: -15.31,
      glass: "SF57 (Schott)",
      apd: false,
      role: "Dense flint; strongest chromatic corrector in the system (highest nd, lowest vd)",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.9,
      fl: 19.17,
      glass: "LaK21 / LAC11 (Schott / HOYA)",
      apd: false,
      role: "Strongest positive element in rear group; primary converging power toward image plane",
    },
    {
      id: 11,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 50.2,
      fl: -105.5,
      glass: "LaK14 / LAC9 (Schott / HOYA)",
      apd: false,
      role: "Weak negative field corrector; flattens Petzval surface across 92° field of view",
    },
  ],

  /* ── Surface prescription ──
   *  Patent scale f = 100 (stated), all values scaled ×0.21 to production.
   *  Computed EFL at production scale ≈ 28.49 mm (discrepancy from stated f = 100).
   *  Aperture stop S placed ~40% into d₁₃ gap (estimated from Fig. 7).
   *  Flare stop E gap (d₈) is a normal air space — not a separate stop surface.
   */
  surfaces: [
    { label: "1", R: 43.1907, d: 3.906, nd: 1.639, elemId: 1, sd: 19.0 }, // L1 front
    { label: "2", R: 111.153, d: 0.126, nd: 1.0, elemId: 0, sd: 19.0 }, // L1 rear → air
    { label: "3", R: 21.3213, d: 1.3188, nd: 1.734, elemId: 2, sd: 16.0 }, // L2 front
    { label: "4", R: 11.1252, d: 4.8846, nd: 1.0, elemId: 0, sd: 9.5 }, // L2 rear → air
    { label: "5", R: 47.8695, d: 1.1823, nd: 1.7725, elemId: 3, sd: 14.0 }, // L3 front
    { label: "6", R: 13.0689, d: 2.247, nd: 1.0, elemId: 0, sd: 7.2 }, // L3 rear → air
    { label: "7", R: 134.4987, d: 3.3306, nd: 1.61659, elemId: 4, sd: 13.0 }, // L4a front
    { label: "8", R: 1e15, d: 0.6846, nd: 1.0, elemId: 0, sd: 12.5 }, // L4a rear (flat) → air [flare stop E gap]
    { label: "9", R: 1e15, d: 4.8846, nd: 1.61659, elemId: 5, sd: 12.5 }, // L4b front (flat)
    { label: "10", R: -423.213, d: 0.0987, nd: 1.0, elemId: 0, sd: 12.0 }, // L4b rear → air
    { label: "11", R: 23.2365, d: 1.4658, nd: 1.6968, elemId: 6, sd: 12.0 }, // L5 front
    { label: "12", R: 14.368, d: 7.6188, nd: 1.5934, elemId: 7, sd: 11.0 }, // L5/L6 junction — elemId: 7 (L6)
    { label: "13", R: -35.7399, d: 1.5, nd: 1.0, elemId: 0, sd: 11.0 }, // L6 rear → air (before STO)
    { label: "STO", R: 1e15, d: 2.2107, nd: 1.0, elemId: 0, sd: 7.0 }, // Aperture stop S (position inferred from Fig. 7)
    { label: "14", R: -219.765, d: 3.6918, nd: 1.72, elemId: 8, sd: 11.0 }, // L7 front
    { label: "15", R: -18.5581, d: 1.4658, nd: 1.84666, elemId: 9, sd: 10.5 }, // L7/L8 junction — elemId: 9 (L8)
    { label: "16", R: 44.6187, d: 2.1, nd: 1.0, elemId: 0, sd: 10.0 }, // L8 rear → air
    { label: "17", R: 48.8187, d: 2.9295, nd: 1.713, elemId: 10, sd: 8.0 }, // L9 front
    { label: "18", R: -18.4995, d: 0.0987, nd: 1.0, elemId: 0, sd: 8.0 }, // L9 rear → air
    { label: "19", R: 96.5895, d: 2.9295, nd: 1.72, elemId: 11, sd: 10.0 }, // L10 front
    { label: "20", R: 41.9706, d: 45.7904, nd: 1.0, elemId: 0, sd: 10.0 }, // L10 rear → image (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (focus) ──
   *  Unit-focus approximation: only BFD changes.
   *  Production lens uses floating elements for close focus — data unavailable
   *  from this patent.  Close-focus BFD estimated via Gaussian conjugate shift
   *  at 0.20 m minimum focus distance.
   */
  var: {
    "20": [45.7904, 50.52],
  },

  varLabels: [["20", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "L₁ FRONT DIVERGING", fromSurface: "1", toSurface: "6" },
    { text: "L₂ FRONT CONVERGING", fromSurface: "7", toSurface: "13" },
    { text: "L₃ REAR CONVERGING", fromSurface: "14", toSurface: "20" },
  ],

  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.2,
  focusDescription: "Unit focus (BFD only). Production lens uses floating elements — not modeled here.",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
