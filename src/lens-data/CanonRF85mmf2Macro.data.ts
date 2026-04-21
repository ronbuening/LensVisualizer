import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Canon RF 85mm f/2 Macro IS STM              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2021/0072505 A1, First Numerical Example         ║
 * ║  (Kobayashi, Canon Kabushiki Kaisha).                             ║
 * ║  Positive-front / negative-rear telephoto-type architecture.      ║
 * ║  12 elements / 11 groups, 0 aspherical surfaces.                  ║
 * ║  Focus: unit focus — entire front group (6 elements) extends.     ║
 * ║  Single variable gap D12 between front and fixed rear groups.     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated via combined marginal + chief ray trace               ║
 * ║    (offAxisFieldFrac = 0.60, ~8% mechanical clearance).           ║
 * ║    Front group capped by edge thickness ≥ 0.5 mm.                ║
 * ║    Rear group constrained by cross-gap sag clearance at           ║
 * ║    thin air gaps (d14 = 0.49 mm between L7 and L8).              ║
 * ║    67 mm filter thread provides upper bound on front SDs.          ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-rf-85f2-macro",
  maker: "Canon",
  name: "CANON RF 85mm f/2 Macro IS STM",
  subtitle: "US 2021/0072505 A1 EXAMPLE 1 — CANON / KOBAYASHI",
  specs: ["12 ELEMENTS / 11 GROUPS", "f ≈ 82.4 mm", "F/2.06", "2ω ≈ 29.4°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 85,
  focalLengthDesign: 82.45,
  apertureMarketing: 2.0,
  apertureDesign: 2.06,
  patentYear: 2021,
  elementCount: 12,
  groupCount: 11,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.6,
      fl: 200.6,
      glass: "S-BSM14 (OHARA)",
      apd: false,
      role: "Front positive meniscus; gentle initial convergence of on-axis beam.",
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.60311,
      vd: 60.6,
      fl: 200.8,
      glass: "S-BSM14 (OHARA)",
      apd: false,
      role: "Second positive meniscus; continues convergence. Same glass as L1.",
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.5,
      fl: 101.5,
      glass: "S-FPL51 (OHARA) — UD",
      apd: "inferred",
      apdNote:
        "Fluorophosphate crown; strong positive APD (Pg,F above normal line). Canon designates as UD (Ultra-low Dispersion).",
      role: "Primary chromatic corrector; strongest positive power in pre-stop group. Paired with L4 for achromatization and secondary spectrum suppression.",
    },
    {
      id: 4,
      name: "L14",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.1,
      fl: -43.7,
      glass: "S-TIM28 (OHARA)",
      apd: false,
      role: "Sole negative element in pre-stop group. Chromatic counterpart to L3; strong negative Petzval and spherical aberration contributions.",
    },
    {
      id: 5,
      name: "L15",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -95.1,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Negative component of cemented doublet after stop. High-dispersion flint for chromatic correction of converging post-stop beam.",
    },
    {
      id: 6,
      name: "L16",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.90043,
      vd: 37.4,
      fl: 35.1,
      glass: "S-LAH58 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Positive component of cemented doublet. Second-highest nd in system (1.900); dominant converging power of front group.",
    },
    {
      id: 7,
      name: "L21",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.72047,
      vd: 34.7,
      fl: -45.6,
      glass: "S-TIH4 (OHARA)",
      apd: false,
      role: "First element of fixed rear group (patent element F). Nearly collimates converging beam from front group; suppresses off-axis aberration variation during focus excursion.",
    },
    {
      id: 8,
      name: "L22",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.5,
      fl: 85.4,
      glass: "TAFD30 (HOYA)",
      apd: false,
      role: "Positive power in rear group; maintains Petzval balance. No exact OHARA match — HOYA TAFD30 is closest (Δnd = 0).",
    },
    {
      id: 9,
      name: "L23",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 20.9,
      fl: 68.3,
      glass: "S-NPH2 (OHARA)",
      apd: "inferred",
      apdNote:
        "Niobium phosphate heavy flint; highest nd in system (1.923). Known positive APD (Pg,F deviates from normal line).",
      role: "Concave-toward-object positive meniscus. Extreme dispersion and APD complement S-FPL51 (L3) for system-wide apochromatic correction.",
    },
    {
      id: 10,
      name: "L24",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.2,
      fl: -34.6,
      glass: "S-LAH55 (OHARA)",
      apd: false,
      role: "Strongest negative element in system. Equal-and-opposite radii (R = ±57.965) eliminate shape-dependent coma; functions primarily as Petzval corrector.",
    },
    {
      id: 11,
      name: "L25",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      fl: 35.6,
      glass: "S-LAH65 (OHARA)",
      apd: false,
      role: "Patent element Gp (positive lens adjacent to Gn). Strongest positive singlet; corrects magnification chromatic aberration and distortion near image plane.",
    },
    {
      id: 12,
      name: "L26",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -63.3,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Patent element Gn (negative lens closest to image). Same glass as L5. Field curvature correction and exit-angle control for digital sensor telecentricity.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Front group L1 (positive, moves during focus) ──
    // L1a: pre-stop (L1–L4)
    { label: "1", R: 114.175, d: 3.19, nd: 1.60311, elemId: 1, sd: 25.0 }, // L1 front
    { label: "2", R: 2010.098, d: 0.5, nd: 1.0, elemId: 0, sd: 25.0 }, // L1 rear → air
    { label: "3", R: 61.533, d: 3.2, nd: 1.60311, elemId: 2, sd: 25.0 }, // L2 front
    { label: "4", R: 122.66, d: 6.6, nd: 1.0, elemId: 0, sd: 25.0 }, // L2 rear → air
    { label: "5", R: 42.821, d: 5.01, nd: 1.497, elemId: 3, sd: 21.0 }, // L3 front (UD)
    { label: "6", R: 272.642, d: 7.5, nd: 1.0, elemId: 0, sd: 21.0 }, // L3 rear → air
    { label: "7", R: -147.348, d: 1.3, nd: 1.68893, elemId: 4, sd: 16.0 }, // L4 front
    { label: "8", R: 37.962, d: 4.9, nd: 1.0, elemId: 0, sd: 15.5 }, // L4 rear → air
    // Aperture stop
    { label: "STO", R: 1e15, d: 2.86, nd: 1.0, elemId: 0, sd: 13.1 },
    // L1b: post-stop cemented doublet (L5+L6)
    { label: "10", R: 114.201, d: 1.3, nd: 1.84666, elemId: 5, sd: 14.0 }, // L5 front
    { label: "11", R: 46.967, d: 6.4, nd: 1.90043, elemId: 6, sd: 14.0 }, // L5→L6 junction
    { label: "12", R: -90.592, d: 2.52, nd: 1.0, elemId: 0, sd: 14.5 }, // L6 rear → air (variable)
    // ── Rear group L2 (negative, fixed during focus) ──
    { label: "13", R: -78.073, d: 1.15, nd: 1.72047, elemId: 7, sd: 13.5 }, // L7 front
    { label: "14", R: 57.128, d: 0.49, nd: 1.0, elemId: 0, sd: 12.0 }, // L7 rear → air
    { label: "15", R: 86.252, d: 2.39, nd: 1.804, elemId: 8, sd: 12.5 }, // L8 front
    { label: "16", R: -333.048, d: 2.22, nd: 1.0, elemId: 0, sd: 13.5 }, // L8 rear → air
    { label: "17", R: -284.806, d: 2.58, nd: 1.92286, elemId: 9, sd: 14.5 }, // L9 front
    { label: "18", R: -51.857, d: 0.85, nd: 1.0, elemId: 0, sd: 14.5 }, // L9 rear → air
    { label: "19", R: -57.965, d: 0.94, nd: 1.834, elemId: 10, sd: 14.5 }, // L10 front
    { label: "20", R: 57.965, d: 6.96, nd: 1.0, elemId: 0, sd: 14.5 }, // L10 rear → air
    { label: "21", R: 52.408, d: 9.02, nd: 1.83481, elemId: 11, sd: 16.5 }, // L11 front (Gp)
    { label: "22", R: -63.153, d: 13.69, nd: 1.0, elemId: 0, sd: 16.5 }, // L11 rear → air
    { label: "23", R: -34.104, d: 1.7, nd: 1.84666, elemId: 12, sd: 13.5 }, // L12 front (Gn)
    { label: "24", R: -95.879, d: 17.6, nd: 1.0, elemId: 0, sd: 13.5 }, // L12 rear → BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings ── */
  var: {
    "12": [2.52, 29.52], // [d_infinity, d_close (β = −0.5)]
  },
  varLabels: [["12", "D12"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (FRONT)", fromSurface: "1", toSurface: "12" },
    { text: "G2 (REAR)", fromSurface: "13", toSurface: "24" },
  ],
  doublets: [{ text: "D1", fromSurface: "10", toSurface: "12" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.35,
  focusDescription:
    "Unit focus — entire front group L1 (6 elements, 5 groups + aperture stop) translates forward. Rear group L2 (6 elements, 6 groups) fixed. 27.0 mm extension at 0.5× magnification.",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22, 29],
  apertureBlades: 9,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
