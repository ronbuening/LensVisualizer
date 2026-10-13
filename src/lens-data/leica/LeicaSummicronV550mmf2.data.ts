import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Leica Summicron-M 50mm f/2 (Version IV/V)            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,123,144 (Mandler, Edwards, Wagner; assignee    ║
 * ║  printed as Ernst Leitz Wetzlar GmbH), Example 9, FIG. 2 form     ║
 * ║  (planar r10). Four-component six-element Gauss objective, all    ║
 * ║  spherical. 6 elements / 4 groups, 0 aspherical surfaces.         ║
 * ║  Focus: unit focusing (entire optical cell translates).            ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent normalized to f = 100 (s' = 58.88, 1:2, ±22.5°). All    ║
 * ║    R and d scaled by s = 0.50 to the 50 mm production focal       ║
 * ║    length: modeled EFL 50.015 mm, BFD 29.457 mm (patent 29.44).   ║
 * ║    No aspheres. Close-focus BF is a paraxial thick-lens solve for  ║
 * ║    a 700 mm object-to-image distance (derived, not published).    ║
 * ║                                                                    ║
 * ║  NOTE ON GLASS:                                                    ║
 * ║    The patent table is headed n_e,i / ν_e,i — the stored nd/vd    ║
 * ║    slots hold NATIVE e-line values (indexReference: "e"). At      ║
 * ║    C′/e/F′ all five pairs match standard catalog glasses          ║
 * ║    (SF10 exactly; LaFN21, BaSF6, F1 and LaF3 classes). The        ║
 * ║    patent names no supplier, so labels are coordinate proxies.    ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    No clear apertures are published. Front group (S1–S5) and STO  ║
 * ║    are ray-based estimates (f/2 marginal + full-field chief with   ║
 * ║    clearance; STO = f/2 iris radius 7.8 mm). Rear group (S7–S11)  ║
 * ║    was raised in the 2026-09-21 audit toward the FIG. 2 rims,     ║
 * ║    which draw the rear doublet equal to the front doublet and L6  ║
 * ║    equal to L1 (≈11.3 / 13.1 mm at 27.3 px/mm); S9 is capped at   ║
 * ║    10.5 mm by L5's 0.87 mm edge thickness. FIG. 2 is the generic  ║
 * ║    schematic shared by all nine examples, so these are guided     ║
 * ║    estimates, not measurements of Example 9.                      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "leica-summicron-m-50f2-v5",
  maker: "Leica",
  name: "LEICA SUMMICRON-M 50mm f/2",
  subtitle: "US 4,123,144 EXAMPLE 9 (FIG. 2 FORM) — ERNST LEITZ / MANDLER, EDWARDS, WAGNER",
  specs: ["6 ELEMENTS / 4 GROUPS", "f = 50.0 mm", "F/2.0", "2ω = 45°", "ALL SPHERICAL"],

  focalLengthMarketing: 50,
  focalLengthDesign: 50.0,
  apertureMarketing: 2,
  apertureDesign: 2.0,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,123,144",
  patentAuthors: ["Walter Mandler", "Garry Edwards", "Erich Wagner"],
  patentAssignees: ["Ernst Leitz GmbH"],
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
      indexReference: "e",
      fl: 56.7,
      glass: "N-LAF21 (Schott; LaFN21-class lanthanum flint, e-line coordinate proxy ne 1.79195 / νe 47.25; supplier unconfirmed)",
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
      indexReference: "e",
      fl: 30.0,
      glass: "J-BASF6 (Hikari; BaSF6-class barium flint, exact e-line coordinates ne 1.67133 / νe 41.60; supplier unconfirmed)",
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
      indexReference: "e",
      fl: -17.5,
      glass: "SF10 (Schott; exact e-line coordinates ne 1.73430 / νe 28.19; supplier unconfirmed)",
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
      indexReference: "e",
      fl: -22.0,
      glass: "E-F1 (Hoya; F1-class flint, exact e-line coordinates ne 1.63003 / νe 35.48; supplier unconfirmed)",
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
      indexReference: "e",
      fl: 27.9,
      glass: "LAF3 (Hoya; LaF3-class lanthanum flint, exact e-line coordinates ne 1.72056 / νe 47.73; supplier unconfirmed). Same glass as L6.",
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
      indexReference: "e",
      fl: 41.6,
      glass: "LAF3 (Hoya; LaF3-class lanthanum flint, exact e-line coordinates ne 1.72056 / νe 47.73; supplier unconfirmed). Same glass as L5.",
      apd: false,
      role: "Rear collector. Flat surface faces object (FIG. 2 configuration); |r₁₁| = |r₁| symmetry pair.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent Example 9 (f = 100): r = 59.94, 167.31, 40.30, ∞, 25.67, (diaphragm), −27.69, ∞, −40.30, ∞, −59.94;
   *  a = 9.57, 0.38, 14.35, 2.87, 10.81, 13.39, 1.91, 7.65, 0.38, 8.61; s' = 58.88. Scaled by s = 0.50.
   *  The diaphragm is a tabulated surface (No. 6) with a5 = 10.81 before and a6 = 13.39 after it.
   *  All surfaces spherical or flat. Index values are e-line (see header).
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
    { label: "7", R: -13.845, d: 0.955, nd: 1.63003, elemId: 4, sd: 10.0 },
    { label: "8", R: 1e15, d: 3.825, nd: 1.72055, elemId: 5, sd: 10.5 },
    { label: "9", R: -20.15, d: 0.19, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "10", R: 1e15, d: 4.305, nd: 1.72055, elemId: 6, sd: 12.5 },
    { label: "11", R: -29.97, d: 29.457, nd: 1.0, elemId: 0, sd: 12.5 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ──
   *  Only BFD changes; entire lens translates as a rigid unit. The patent
   *  publishes the infinity state only. Close-focus BF is a paraxial
   *  thick-lens solve (derived) for the production 0.7 m MFD taken as the
   *  object-to-image distance: extension 4.131 mm, m = −0.0826 (1:12.1).
   */
  var: {
    "11": [29.457, 33.588],
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
  focusDescription:
    "Unit focusing — entire optical cell translates forward. Patent publishes infinity only; the 0.7 m state is a paraxial thick-lens extension (calculated).",

  /* ── Aperture configuration ── */
  nominalFno: 2,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16],
  apertureBlades: 8,

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.35,
} satisfies LensDataInput;

export default LENS_DATA;
