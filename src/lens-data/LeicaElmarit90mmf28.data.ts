import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — LEICA ELMARIT 90mm f/2.8                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,995,980 sole example (Zimmermann & Knetsch,     ║
 * ║  Ernst Leitz G.m.b.H.). Modified Cooke Triplet with cemented       ║
 * ║  middle and rear doublets.                                          ║
 * ║  5 elements / 3 groups, 0 aspherical surfaces.                     ║
 * ║  Focus: unit focusing (entire lens translates).                     ║
 * ║                                                                     ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent prescription at f = 100 mm normalisation; all R, d, and  ║
 * ║    sd values scaled ×0.9 to f ≈ 90 mm production focal length.     ║
 * ║    Claim table r₁ = +44.05 adopted (example table gives +44.65;    ║
 * ║    claim value yields EFL = 100.12 mm vs 101.88 mm for example).   ║
 * ║                                                                     ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. Estimated from combined    ║
 * ║    marginal + chief ray trace at f/2.8 full aperture with ~8%      ║
 * ║    mechanical clearance, constrained by E39 filter thread at       ║
 * ║    the front. Stop position inferred from Fig. 1 (centered in      ║
 * ║    air gap a₂ between Groups II and III).                           ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "leica-elmarit-90f28",
  maker: "Leica",
  name: "LEICA ELMARIT 90mm f/2.8",
  subtitle: "US 2,995,980 — ZIMMERMANN & KNETSCH / ERNST LEITZ",
  specs: ["5 ELEMENTS / 3 GROUPS", "f ≈ 90.1 mm", "F/2.8", "2ω ≈ 27.0°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 90,
  focalLengthDesign: 90.1,
  apertureMarketing: 2.8,
  patentYear: 1961,
  elementCount: 5,
  groupCount: 3,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.691,
      vd: 54.8,
      fl: 49.7,
      glass: "LaK9 (SCHOTT)",
      apd: false,
      role: "Front positive collector; strongly convex front, nearly flat rear. LaK crown enables strong power at moderate curvature.",
    },
    {
      id: 2,
      name: "L21",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7552,
      vd: 27.5,
      fl: 63.3,
      glass: "SF4 (SCHOTT)",
      apd: false,
      role: "Positive element of middle negative doublet; reversed-dispersion element (high dispersion in positive role) for sphero-chromatic correction.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L22",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6398,
      vd: 34.6,
      fl: -20.9,
      glass: "1640/346 (F-family flint)",
      apd: false,
      role: "Negative element of middle doublet; dominant negative power (strongest element). Lower dispersion than L2 per patent's reversed-doublet strategy.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L31",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.62588,
      vd: 35.6,
      fl: -41.0,
      glass: "BaSF1 (SCHOTT)",
      apd: false,
      role: "Negative element of rear doublet; nearly flat front, provides chromatic compensation against L5.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L32",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.9,
      fl: 23.5,
      glass: "LaF2 (SCHOTT)",
      apd: false,
      role: "Main positive image-former; thickest element, strongest positive power. LaF glass enables high power with moderate dispersion.",
      cemented: "D2",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 39.645, d: 6.03, nd: 1.691, elemId: 1, sd: 17.0 },
    { label: "2", R: -241.146, d: 6.3, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "3", R: -44.136, d: 4.86, nd: 1.7552, elemId: 2, sd: 14.0 },
    { label: "4", R: -24.039, d: 2.7, nd: 1.6398, elemId: 3, sd: 13.8 },
    { label: "5", R: 31.383, d: 2.16, nd: 1.0, elemId: 0, sd: 13.5 },
    // STO position inferred from Fig. 1 — iris centered in air gap a₂ (4.32 mm total)
    { label: "STO", R: 1e15, d: 2.16, nd: 1.0, elemId: 0, sd: 12.7 },
    { label: "6", R: -1194.003, d: 2.7, nd: 1.62588, elemId: 4, sd: 13.5 },
    { label: "7", R: 26.244, d: 8.343, nd: 1.744, elemId: 5, sd: 14.0 },
    { label: "8", R: -44.937, d: 74.33, nd: 1.0, elemId: 0, sd: 14.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ── */
  var: {
    "8": [74.33, 83.25],
  },
  varLabels: [["8", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (I)", fromSurface: "1", toSurface: "2" },
    { text: "G2 (II)", fromSurface: "3", toSurface: "5" },
    { text: "G3 (III)", fromSurface: "6", toSurface: "8" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.0,
  focusDescription:
    "Unit focusing — entire optical assembly translates forward via helicoid. Detachable head for Visoflex use.",

  /* ── Aperture configuration ── */
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.45,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
