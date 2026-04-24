import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Leica Summicron-M 50mm f/2 (Version IV/V)            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,123,144 Example 9 (Mandler / Ernst Leitz).     ║
 * ║  Four-component six-element Gauss objective, all spherical.        ║
 * ║  6 elements / 4 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focusing (entire optical cell translates).            ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 100; all R, d, sd values scaled ×0.50 to         ║
 * ║    f ≈ 50.0 mm production. BFD at close focus computed via        ║
 * ║    thick-lens conjugate equations (paraxial).                      ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    Patent does not list semi-diameters. SDs estimated from        ║
 * ║    combined marginal + chief ray trace at f/2 and ±22.5°          ║
 * ║    half-field with ~8–10% mechanical clearance. Front elements    ║
 * ║    constrained by E39 filter thread (max clear aperture ~18 mm). ║
 * ║    Cemented surfaces matched within each doublet.                 ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "leica-summicron-m-50f2-v5",
  maker: "Leica",
  name: "LEICA SUMMICRON-M 50mm f/2",
  subtitle: "US 4,123,144 EXAMPLE 9 — MANDLER / ERNST LEITZ CANADA",
  specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 50.0 mm", "F/2.0", "2ω ≈ 45°", "ALL SPHERICAL"],

  focalLengthMarketing: 50,
  focalLengthDesign: 50.0,
  apertureMarketing: 2,
  apertureDesign: 2.0,
  patentYear: 1978,
  elementCount: 6,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.79227,
      vd: 47.15,
      fl: 56.7,
      glass: "Lanthanum crown (proprietary Leitz melt; nearest: Schott TaF4 / LaFN21)",
      apd: false,
      role: "Front collector. High-index meniscus concave toward diaphragm; |r₁| = |r₁₁| symmetry pair.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.67133,
      vd: 41.64,
      fl: 30.0,
      glass: "Barium flint / dense barium crown (proprietary; nearest: Schott BaSF6)",
      apd: false,
      role: "Positive element of front cemented doublet. Flat rear is cemented bond surface.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.7343,
      vd: 28.19,
      fl: -17.5,
      glass: "Dense flint (proprietary; nearest: Schott SF3 / SF10)",
      apd: false,
      role: "Negative flint of front doublet. High dispersion for chromatic correction. Concave surface faces diaphragm.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Concave Negative",
      nd: 1.63003,
      vd: 35.45,
      fl: -22.0,
      glass: "Light/medium flint (proprietary; nearest: Schott F2)",
      apd: false,
      role: "Negative element of rear doublet. Concave surface faces diaphragm; inner concave air lens with L3.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Convex Positive",
      nd: 1.72055,
      vd: 47.69,
      fl: 27.9,
      glass: "Lanthanum crown (proprietary; nearest: Schott LaF10). Same glass as L6.",
      apd: false,
      role: "Positive element of rear cemented doublet. Flat front is cemented bond surface. |r₉| = |r₃| symmetry pair.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Plano-Convex Positive",
      nd: 1.72055,
      vd: 47.69,
      fl: 41.6,
      glass: "Lanthanum crown (same glass as L5)",
      apd: false,
      role: "Rear collector. Flat surface faces object (FIG. 2 configuration); |r₁₁| = |r₁| symmetry pair.",
    },
  ],

  /* ── Surface prescription ──
   *  Scaled from patent f = 100 by ×0.50.
   *  All surfaces spherical or flat.
   *
   *  The 0.19 mm air gap between S2 and S3 (L1 rear to L2 front) is
   *  physically tight but the gap widens at the rim: S3's stronger
   *  curvature (R = 20.15) curves away from the gap faster than S2's
   *  weak curvature (R = 83.655) intrudes into it.
   */
  surfaces: [
    { label: "1", R: 29.97, d: 4.785, nd: 1.79227, elemId: 1, sd: 15.0 },
    { label: "2", R: 83.655, d: 0.19, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "3", R: 20.15, d: 7.175, nd: 1.67133, elemId: 2, sd: 13.0 },
    { label: "4", R: 1e15, d: 1.435, nd: 1.7343, elemId: 3, sd: 12.5 },
    { label: "5", R: 12.835, d: 5.405, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "STO", R: 1e15, d: 6.695, nd: 1.0, elemId: 0, sd: 7.8 },
    { label: "7", R: -13.845, d: 0.955, nd: 1.63003, elemId: 4, sd: 8.5 },
    { label: "8", R: 1e15, d: 3.825, nd: 1.72055, elemId: 5, sd: 9.0 },
    { label: "9", R: -20.15, d: 0.19, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "10", R: 1e15, d: 4.305, nd: 1.72055, elemId: 6, sd: 10.5 },
    { label: "11", R: -29.97, d: 29.457, nd: 1.0, elemId: 0, sd: 12.0 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ──
   *  Only BFD changes; entire lens translates as a rigid unit.
   *  Close focus BFD computed via thick-lens conjugate at MFD = 0.7 m.
   */
  var: {
    "11": [29.457, 33.306],
  },
  varLabels: [["11", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "5" },
    { text: "III", fromSurface: "7", toSurface: "9" },
    { text: "IV", fromSurface: "10", toSurface: "11" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "7", toSurface: "9" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.7,
  focusDescription: "Unit focusing — entire optical cell translates forward.",

  /* ── Aperture configuration ── */
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 8,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
