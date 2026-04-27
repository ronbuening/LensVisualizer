import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — OLYMPUS ZUIKO AUTO-MACRO 90mm f/2            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,792,219 Embodiment 3 (Mihara / Olympus).       ║
 * ║  Modified Gauss subsystem (Groups I+II) + floating rear group      ║
 * ║  (Group III). Differential-speed focus with single variable gap.   ║
 * ║  9 elements / 9 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: whole-lens advance with Group III at 63% of subsystem     ║
 * ║         speed; single variable gap d₁₃ between L6 and L7.         ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent at f=100; all R, d, sd values scaled ×0.9 to f≈90 mm    ║
 * ║    production focal length.                                        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from marginal + chief ray trace at f/2.0 with         ║
 * ║    ~8% mechanical clearance, constrained by 55 mm filter thread    ║
 * ║    and cross-gap sag intrusion limits.                             ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "olympus-zuiko-auto-macro-90f2",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO AUTO-MACRO 90mm f/2",
  subtitle: "US 4,792,219 EMBODIMENT 3 — OLYMPUS / MIHARA",
  specs: ["9 ELEMENTS / 9 GROUPS", "f ≈ 90.0 mm", "F/2.0", "2ω ≈ 27°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 90,
  // focalLengthDesign omitted — computed EFL ≈ 89.98, essentially identical to marketing
  apertureMarketing: 2,
  apertureDesign: 2.06,
  patentYear: 1988,
  elementCount: 9,
  groupCount: 9,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.52,
      fl: 80.2,
      glass: "TAC4 (HOYA)",
      apd: false,
      role: "Front positive — initial convergence, low spherical aberration contribution",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.84,
      fl: 104.7,
      glass: "TACL1 (HOYA)",
      apd: false,
      role: "Thick meniscus — g-line spherical aberration control via ray height differential",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.74,
      vd: 28.29,
      fl: -40.4,
      glass: "FD4 (HOYA)",
      apd: false,
      role: "Dense flint — primary chromatic correction for Group I, coma/spherical balance",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.56732,
      vd: 42.83,
      fl: -73.3,
      glass: "BACL1 (HOYA)",
      apd: false,
      role: "Post-stop negative — strong concave front for spherical/coma correction",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.744,
      vd: 44.73,
      fl: 168.4,
      glass: "LAF7 (HOYA)",
      apd: false,
      role: "Lanthanum flint meniscus — Petzval sum contribution, moderate positive power",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.66,
      fl: 64.5,
      glass: "TAFL3 (HOYA)",
      apd: false,
      role: "Highest-index crown — principal imaging power of Group II, Petzval/spherical control",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.51742,
      vd: 52.41,
      fl: -88.4,
      glass: "CFKL2 (HOYA)",
      apd: false,
      role: "Low-index negative — Petzval field flattening via index differential with L9",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30.12,
      fl: -287.1,
      glass: "FD5 (HOYA)",
      apd: false,
      role: "Dense flint — chromatic correction within Group III",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.6516,
      vd: 58.52,
      fl: 62.1,
      glass: "BSC7 (HOYA)",
      apd: false,
      role: "Rear positive — strongest element in Group III, off-axis aberration leverage",
    },
  ],

  /* ── Surface prescription ──
   *  Patent f=100 values scaled ×0.9 to production f≈90 mm.
   *  d₆ corrected from OCR "1.8882" to 11.8882 (confirmed by cross-embodiment
   *  comparison and production barrel length match: 71.7 mm computed vs 71 mm spec).
   *  Stop position from patent: r₇ = ∞, between Groups I and II.
   */
  surfaces: [
    { label: "1", R: 52.9054, d: 7.0196, nd: 1.6968, elemId: 1, sd: 24.5 }, // L1 front
    { label: "2", R: 937.7599, d: 0.105, nd: 1.0, elemId: 0, sd: 23.0 }, // L1 rear → air
    { label: "3", R: 38.4558, d: 12.6093, nd: 1.713, elemId: 2, sd: 23.0 }, // L2 front
    { label: "4", R: 68.5212, d: 1.0899, nd: 1.0, elemId: 0, sd: 16.5 }, // L2 rear → air
    { label: "5", R: 140.9332, d: 3.4398, nd: 1.74, elemId: 3, sd: 15.5 }, // L3 front
    { label: "6", R: 24.4227, d: 10.6994, nd: 1.0, elemId: 0, sd: 15.0 }, // L3 rear → air
    { label: "STO", R: 1e15, d: 4.2998, nd: 1.0, elemId: 0, sd: 13.0 }, // aperture stop
    { label: "7", R: -38.1969, d: 1.9099, nd: 1.56732, elemId: 4, sd: 13.0 }, // L4 front
    { label: "8", R: -479.3534, d: 1.8199, nd: 1.0, elemId: 0, sd: 13.0 }, // L4 rear → air
    { label: "9", R: -101.1484, d: 4.4997, nd: 1.744, elemId: 5, sd: 13.5 }, // L5 front
    { label: "10", R: -57.0228, d: 0.15, nd: 1.0, elemId: 0, sd: 13.5 }, // L5 rear → air
    { label: "11", R: 77.0067, d: 4.3498, nd: 1.7725, elemId: 6, sd: 13.5 }, // L6 front
    { label: "12", R: -137.7023, d: 0.7999, nd: 1.0, elemId: 0, sd: 13.0 }, // L6 rear → air (VAR gap d₁₃)
    { label: "13", R: -978.3947, d: 1.8999, nd: 1.51742, elemId: 7, sd: 13.0 }, // L7 front
    { label: "14", R: 48.0003, d: 3.2899, nd: 1.0, elemId: 0, sd: 12.5 }, // L7 rear → air
    { label: "15", R: 94.8587, d: 2.9998, nd: 1.69895, elemId: 8, sd: 12.5 }, // L8 front
    { label: "16", R: 63.5725, d: 3.0199, nd: 1.0, elemId: 0, sd: 12.0 }, // L8 rear → air
    { label: "17", R: 63.4745, d: 7.6496, nd: 1.6516, elemId: 9, sd: 12.0 }, // L9 front
    { label: "18", R: -106.2051, d: 39.8578, nd: 1.0, elemId: 0, sd: 10.5 }, // L9 rear → image (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings ──
   *  Single variable gap: d₁₃ (surface "12", L6 rear → L7 front).
   *  Patent provides three focus positions at f=100 scale:
   *    ∞  → d₁₃ = 0.8888 mm
   *    1/10× → d₁₃ = 5.283 mm
   *    1/2× → d₁₃ = 20.277 mm
   *  Scaled ×0.9 for production.
   *  Focus type: unit focus + floating element (whole lens advances,
   *  Group III at 63% of subsystem speed → single variable gap).
   */
  var: {
    "12": [0.7999, 18.2493],
  },

  varLabels: [["12", "D₁₃"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "GROUP I", fromSurface: "1", toSurface: "6" },
    { text: "GROUP II", fromSurface: "7", toSurface: "12" },
    { text: "GROUP III", fromSurface: "13", toSurface: "18" },
  ],

  doublets: [],

  /* ── Focus configuration ── */
  closeFocusM: 0.4,
  focusDescription:
    "Differential-speed whole-lens advance. Groups I+II advance as a unit; Group III advances at 63% of subsystem speed. Single variable gap d₁₃ expands from 0.80 mm (∞) to 18.25 mm (1/2×). Helicoid travel ≈ 47 mm.",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.55,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
