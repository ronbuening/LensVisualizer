import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — VOIGTLÄNDER HELIAR (SYMMETRIC, 1902)         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US Patent 716,035 (C.A.H. Harting, single example). ║
 * ║  Symmetric five-element Cooke Triplet derivative with cemented     ║
 * ║  doublets replacing the outer positive singlets.                   ║
 * ║  5 elements / 3 groups, 0 aspherical surfaces.                    ║
 * ║  Focus: unit focus (entire lens moves, bellows extension).         ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                          ║
 * ║    Patent does not list SDs. Estimated from paraxial marginal +   ║
 * ║    chief ray trace at full field (2ω = 43.6°), constrained by    ║
 * ║    edge thickness feasibility (element b has 0.43 edge at SD 12.5 ║
 * ║    — the tightest constraint in the system). Stop SD of 10.2      ║
 * ║    yields entrance pupil SD ≈ 12.5 (f/4.0 at f = 100).          ║
 * ║                                                                    ║
 * ║  NOTE ON UNITS:                                                    ║
 * ║    All dimensions are in the patent's normalized system (f = 100). ║
 * ║    The patent does not specify a physical focal length — the       ║
 * ║    production Heliars ranged from 120 mm to 600 mm. To interpret  ║
 * ║    as millimeters, treat this as a 100 mm f/4.0 lens.            ║
 * ║                                                                    ║
 * ║  NOTE ON THICKNESS INTERPRETATION:                                 ║
 * ║    The patent lists d¹=1.6, d²=3.6, d³=8.1, d⁴=1.6.            ║
 * ║    d³=8.1 is the air gap (not element c thickness), verified by   ║
 * ║    paraxial ray trace: this is the only interpretation that        ║
 * ║    reproduces the patent's stated f = 100 (EFL = 100.12, 0.12%   ║
 * ║    error) without introducing free parameters.                    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "heliar-symmetric-1902",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER HELIAR (Symmetric) f/4",
  subtitle: "US 716,035 — Harting / Voigtländer & Sohn AG (1902)",
  visible: true,
  specs: ["5 ELEMENTS / 3 GROUPS", "f = 100 (normalized)", "F/4.0", "2ω ≈ 43.6°", "ALL SPHERICAL"],

  focalLengthMarketing: 100,
  focalLengthDesign: 100.0,
  apertureMarketing: 4.0,
  apertureDesign: 4.0,
  patentYear: 1902,
  elementCount: 5,
  groupCount: 3,

  /* ── Elements ──
   *  Five elements: front cemented doublet (a + b), central biconcave (c),
   *  rear cemented doublet (b′ + a′). Symmetric about the aperture stop.
   *  Only two glass types used: Glass I (LF, nD=1.5638) and Glass II (SK, nD=1.6080).
   */
  elements: [
    {
      id: 1,
      name: "La",
      label: "Element a (front)",
      type: "Negative Meniscus",
      nd: 1.5638,
      vd: 42.0,
      fl: -122.9,
      glass: "Light Flint (LF, probable discontinued Schott type)",
      apd: false,
      role: "Dispersive (flint) component of front achromatic doublet. Weak negative power; meniscus shape contributes to field flattening.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "Lb",
      label: "Element b (front)",
      type: "Biconvex Positive",
      nd: 1.608,
      vd: 57.0,
      fl: 40.6,
      glass: "Dense Crown (SK, high-confidence match: Schott N-SK2, Δnd = 0.0006)",
      apd: false,
      role: "Primary positive power-contributor. Dense barium crown provides maximum power per unit chromatic aberration. Nearly all power comes from the cemented interface.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "Lc",
      label: "Element c (central)",
      type: "Biconcave Negative",
      nd: 1.5638,
      vd: 42.0,
      fl: -39.7,
      glass: "Light Flint (LF, same glass as elements a/a′)",
      apd: false,
      role: "Central negative element (Cooke Triplet inheritance). Controls Petzval sum, spherical aberration balance, and power leverage. No chromatic correction role — all achromatism is at the doublet interfaces.",
    },
    {
      id: 4,
      name: "Lb'",
      label: "Element b′ (rear)",
      type: "Biconvex Positive",
      nd: 1.608,
      vd: 57.0,
      fl: 40.6,
      glass: "Dense Crown (SK, Schott N-SK2)",
      apd: false,
      role: "Mirror image of element b. Primary positive power in rear group.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "La'",
      label: "Element a′ (rear)",
      type: "Negative Meniscus",
      nd: 1.5638,
      vd: 42.0,
      fl: -122.9,
      glass: "Light Flint (LF, same glass as elements a/c)",
      apd: false,
      role: "Mirror image of element a. Dispersive component of rear achromatic doublet.",
      cemented: "D2",
    },
  ],

  /* ── Surface prescription ──
   *  Symmetric design: surfaces S1–S5 mirror S6–S8 about the stop.
   *  Patent sign convention matches the standard (R > 0 → CoC to the right).
   *
   *  Cemented doublet patterns:
   *    Front (D1): S1 = a front (elemId: 1), S2 = a|b junction (elemId: 2), S3 = b rear (elemId: 0)
   *    Rear (D2):  S6 = b′ front (elemId: 4), S7 = b′|a′ junction (elemId: 5), S8 = a′ rear (elemId: 0)
   */
  surfaces: [
    /* ── Front cemented doublet (D1: a + b) ── */
    { label: "1", R: 41.0, d: 1.6, nd: 1.5638, elemId: 1, sd: 13.5 }, // a front
    { label: "2", R: 25.76, d: 3.6, nd: 1.608, elemId: 2, sd: 12.5 }, // a|b cement junction
    { label: "3", R: -583.8, d: 8.1, nd: 1.0, elemId: 0, sd: 12.5 }, // b rear → air

    /* ── Central biconcave (c) ── */
    { label: "4", R: -44.76, d: 1.6, nd: 1.5638, elemId: 3, sd: 11.5 }, // c front
    { label: "5", R: 44.76, d: 0.0, nd: 1.0, elemId: 0, sd: 11.5 }, // c rear → air

    /* ── Aperture stop ── */
    { label: "STO", R: 1e15, d: 8.1, nd: 1.0, elemId: 0, sd: 10.2 }, // stop (directly behind c)

    /* ── Rear cemented doublet (D2: b′ + a′) ── */
    { label: "6", R: 583.8, d: 3.6, nd: 1.608, elemId: 4, sd: 12.5 }, // b′ front
    { label: "7", R: -25.76, d: 1.6, nd: 1.5638, elemId: 5, sd: 12.5 }, // b′|a′ cement junction
    { label: "8", R: -41.0, d: 85.52, nd: 1.0, elemId: 0, sd: 13.5 }, // a′ rear → air (BFD)
  ],

  /* ── Aspherical coefficients ──
   *  All-spherical design — no aspherical surfaces.
   */
  asph: {},

  /* ── Variable air spacings (focus mechanism) ──
   *  Unit focus: entire lens moves as a rigid body. Only the back focal
   *  distance (surface 8 → image plane) changes.
   *  Close focus at 1.0 m (treating normalized units as mm):
   *    Extension = f²/(d_obj − f) = 100.12²/(1000 − 100.12) = 11.14
   *    BFD_close = 85.52 + 11.14 = 96.66
   */
  var: {
    8: [85.52, 96.66],
  },

  varLabels: [["8", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (FRONT)", fromSurface: "1", toSurface: "3" },
    { text: "G2 (CENTER)", fromSurface: "4", toSurface: "5" },
    { text: "G3 (REAR)", fromSurface: "6", toSurface: "8" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.0,
  focusDescription:
    "Unit focus — entire lens moves via bellows extension or helicoid. Air gaps between groups remain constant. Patent does not specify close focus; 1.0 m assumed for a 100 mm focal length interpretation.",

  /* ── Aperture configuration ── */
  nominalFno: 4.0,
  fstopSeries: [4, 4.5, 5.6, 8, 11, 16, 22, 32],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
