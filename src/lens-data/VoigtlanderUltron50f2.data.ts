import type { LensDataInput } from "../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — VOIGTLÄNDER ULTRON 50mm f/2                      ║
 * ╠══════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,627,204 Example II (A. W. Tronnier / Voigtländer). ║
 * ║  Modified double-Gauss with air-spaced front inner pair.               ║
 * ║  6 elements / 5 groups, 0 aspherical surfaces.                        ║
 * ║  Focus: unit focus (entire lens translates; BFD changes).             ║
 * ║                                                                        ║
 * ║  NOTE ON SCALING:                                                      ║
 * ║    Patent at f=1.0; all R, d, sd values scaled ×50 to f≈50 mm         ║
 * ║    production focal length.  Figures in the patent are drawn at        ║
 * ║    f=150 mm.                                                           ║
 * ║                                                                        ║
 * ║  NOTE ON SEMI-DIAMETERS:                                               ║
 * ║    Patent does not list SDs.  Estimated from paraxial marginal ray     ║
 * ║    heights at f/2.0 plus 10–12% mechanical clearance, with cross-     ║
 * ║    checks against edge thickness, sd/|R| ratio, and cross-gap         ║
 * ║    overlap constraints.  The Voigtländer Prominent lens mount and     ║
 * ║    40.5 mm filter thread constrain the maximum front element SD.      ║
 * ║                                                                        ║
 * ║  NOTE ON d₂ TYPO:                                                     ║
 * ║    The Claim 4 table gives d₂ = 0.08393; the Example II table gives   ║
 * ║    d₂ = 0.06395.  Paraxial ray trace confirms d₂ = 0.06395           ║
 * ║    reproduces the patent's stated EFL and BFD (errors < 0.02%),       ║
 * ║    while d₂ = 0.08393 yields a 7.5% BFD error.  The Claim 4 value    ║
 * ║    is a typographical error — likely a digit transposition.            ║
 * ╚══════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "ultron-50f2",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER ULTRON 50mm f/2",
  subtitle: "US 2,627,204 EXAMPLE II — VOIGTLÄNDER / A. W. TRONNIER",
  specs: ["6 ELEMENTS / 5 GROUPS", "f ≈ 50.0 mm", "F/2.0", "2ω ≈ 46.8° (35mm)", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 50,
  focalLengthDesign: 50.003,
  apertureMarketing: 2.0,
  patentYear: 1953,
  elementCount: 6,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62139,
      vd: 60.3,
      fl: 77.8,
      glass: "SK16 type (dense barium crown)",
      apd: false,
      role: "Front collective element — gathers light with modest positive power and minimal spherical aberration contribution.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.65953,
      vd: 57.0,
      fl: 53.6,
      glass: "High-index crown (SSK/LaK type — possibly La₂O₃ or ThO₂ formulation)",
      apd: false,
      role: "Strongest positive element in front half — carries the most effective converging curvature on the object side.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.64691,
      vd: 33.9,
      fl: -29.9,
      glass: "SF2 type (dense flint)",
      apd: false,
      role: "Strongest diverging element in front half — air-spaced from L2 (the Ultron's structural signature).",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.63652,
      vd: 35.5,
      fl: -15.3,
      glass: "F/BaF type (barium flint)",
      apd: false,
      cemented: "D1",
      role: "Post-diaphragm diverging flint — lowest index on image side, creating the 'index valley' central to Tronnier's coma correction.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.69347,
      vd: 53.5,
      fl: 18.7,
      glass: "LaK9 type (high-index crown — possibly La₂O₃ or ThO₂ formulation)",
      apd: false,
      cemented: "D1",
      role: "Thickest element — provides strong converging power and achromatism with L4 across the cemented junction.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.72381,
      vd: 38.0,
      fl: 45.6,
      glass: "LaF type (high-index lanthanum flint or thorium flint)",
      apd: false,
      role: "Rear collective element — highest index in the system, satisfying Tronnier's progressive-index condition.",
    },
  ],

  /* ── Surface prescription ──
   *  Patent at f=1.0; all values ×50 to production scale.
   *  Stop position: patent specifies b₁ = 0.09393, b₂ = 0.09493 (diaphragm between R6 and R7).
   */
  surfaces: [
    { label: "1", R: 31.607, d: 2.998, nd: 1.62139, elemId: 1, sd: 14.0 }, // L1 front
    { label: "2", R: 88.006, d: 0.2, nd: 1.0, elemId: 0, sd: 13.5 }, // L1 rear → air
    { label: "3", R: 21.914, d: 3.198, nd: 1.65953, elemId: 2, sd: 13.5 }, // L2 front
    { label: "4", R: 54.34, d: 3.598, nd: 1.0, elemId: 0, sd: 12.2 }, // L2 rear → air
    { label: "5", R: 48.515, d: 2.448, nd: 1.64691, elemId: 3, sd: 10.5 }, // L3 front
    { label: "6", R: 13.548, d: 4.697, nd: 1.0, elemId: 0, sd: 9.8 }, // L3 rear → air (b₁ to stop)
    { label: "STO", R: 1e15, d: 4.747, nd: 1.0, elemId: 0, sd: 12.5 }, // aperture stop (b₂ to L4)
    { label: "7", R: -13.222, d: 1.099, nd: 1.63652, elemId: 4, sd: 8.8 }, // L4 front
    { label: "8", R: 38.502, d: 4.847, nd: 1.69347, elemId: 5, sd: 9.0 }, // L4/L5 cemented junction
    { label: "9", R: -18.617, d: 0.15, nd: 1.0, elemId: 0, sd: 10.0 }, // L5 rear → air
    { label: "10", R: 188.312, d: 3.897, nd: 1.72381, elemId: 6, sd: 10.0 }, // L6 front
    { label: "11", R: -39.691, d: 34.86, nd: 1.0, elemId: 0, sd: 9.8 }, // L6 rear → air (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ──
   *  Unit focus: entire lens translates as a rigid body.
   *  Only the back focal distance (last surface to image) changes.
   */
  var: {
    "11": [34.86, 37.492],
  },

  varLabels: [["11", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "6" },
    { text: "III", fromSurface: "7", toSurface: "9" },
    { text: "IV", fromSurface: "10", toSurface: "11" },
  ],

  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  /* ── Focus configuration ── */
  closeFocusM: 1.0,
  focusDescription: "Unit focus — entire lens translates via body-mounted helicoid (Voigtländer Prominent).",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
