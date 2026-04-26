import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Carl Zeiss Jena Pancolar 50mm f/2                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: GB 850,117 Claim 2 (Hubert & Zöllner, VEB CZJ).     ║
 * ║  Classic double-Gauss (modified Planar) for M42/Exakta SLR.        ║
 * ║  6 elements / 4 groups, 0 aspherical surfaces.                     ║
 * ║  Focus: unit focusing (entire lens translates).                    ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription at f = 100; all R, d, and sd values scaled  ║
 * ║    ×0.5 to match production focal length f ≈ 50 mm.               ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    SDs estimated from combined marginal + chief ray trace (0.7     ║
 * ║    field) with ~8–10% mechanical clearance, constrained by edge    ║
 * ║    thickness, sd/|R| ≤ 0.90, and cross-gap sag limits. The front  ║
 * ║    group SDs are constrained by L1's edge thickness (et ≈ 0.2 mm  ║
 * ║    at sd = 18.0) and r5's steep curvature (sd/|R| = 0.82).        ║
 * ║    Vignetting at 0.7+ field is expected for this f/2 design.      ║
 * ║                                                                    ║
 * ║  STOP POSITION:                                                    ║
 * ║    Patent does not specify exact diaphragm location within the     ║
 * ║    l₂ air gap. Estimated at ~65% through the gap from the patent  ║
 * ║    cross-section figure (close to the front face of element IV).   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "carl-zeiss-jena-pancolar-50f2",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA PANCOLAR 50mm f/2",
  subtitle: "GB 850,117 CLAIM 2 — VEB CARL ZEISS JENA / HUBERT & ZÖLLNER",
  specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 50.6 mm", "F/2.0", "2ω ≈ 46.3°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 50,
  focalLengthDesign: 50.6,
  apertureMarketing: 2.0,
  // apertureDesign omitted — matches marketing
  patentYear: 1960,
  elementCount: 6,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.662,
      vd: 56.1,
      fl: 63.4,
      glass: "SSK / LaK (Jena in-house, 662/561)",
      apd: false,
      role: "Front positive power element; meniscus form reduces off-axis aberrations",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.662,
      vd: 56.1,
      fl: 138.7,
      glass: "SSK / LaK (Jena in-house, 662/561)",
      apd: false,
      cemented: "D1",
      role: "Front doublet crown; provides chromatic correction with L3",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.67246,
      vd: 32.3,
      fl: -45.3,
      glass: "SF2 equivalent (Jena in-house, 672/323)",
      apd: false,
      cemented: "D1",
      role: "Front doublet flint; steep r₅ generates negative Petzval and spherical correction",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.60156,
      vd: 35.2,
      fl: -20.3,
      glass: "Special light flint (Jena in-house, 602/352)",
      apd: false,
      cemented: "D2",
      role: "Rear doublet flint; strong negative spherical aberration corrects the diaphragm air gap",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.662,
      vd: 56.1,
      fl: 25.4,
      glass: "SSK / LaK (Jena in-house, 662/561)",
      apd: false,
      cemented: "D2",
      role: "Rear doublet crown; thick biconvex (7.05 mm) manages marginal ray height through rear group",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.662,
      vd: 56.1,
      fl: 51.6,
      glass: "SSK / LaK (Jena in-house, 662/561)",
      apd: false,
      role: "Rear positive power element; asymmetric biconvex converges rays to focus",
    },
  ],

  /* ── Surface prescription ──
   *  All values at production scale (patent f = 100 scaled ×0.5).
   *  Diaphragm position inferred from patent Fig. 1 (~65% through l₂ gap).
   */
  surfaces: [
    { label: "1", R: 28.95, d: 4.6, nd: 1.662, elemId: 1, sd: 18.0 },
    { label: "2", R: 87.45, d: 0.1, nd: 1.0, elemId: 0, sd: 17.0 },
    { label: "3", R: 21.75, d: 3.35, nd: 1.662, elemId: 2, sd: 17.0 },
    { label: "4", R: 26.75, d: 4.2, nd: 1.67246, elemId: 3, sd: 15.0 }, // L2→L3 cemented junction
    { label: "5", R: 13.35, d: 6.47, nd: 1.0, elemId: 0, sd: 11.0 }, // L3 rear → air; d = distance to STO
    { label: "STO", R: 1e15, d: 3.48, nd: 1.0, elemId: 0, sd: 8.7 }, // STO position inferred from Fig. 1
    { label: "6", R: -15.05, d: 1.9, nd: 1.60156, elemId: 4, sd: 10.0 },
    { label: "7", R: 68.5, d: 7.05, nd: 1.662, elemId: 5, sd: 11.0 }, // L4→L5 cemented junction
    { label: "8", R: -21.4, d: 0.3, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "9", R: 113.65, d: 4.75, nd: 1.662, elemId: 6, sd: 13.5 },
    { label: "10", R: -48.0, d: 36.86, nd: 1.0, elemId: 0, sd: 15.0 }, // BFD to image plane
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ──
   *  Only the BFD changes during focus. Entire lens translates as a rigid unit.
   *  Close-focus BFD computed via Newton's equation at MFD = 0.5 m.
   */
  var: {
    "10": [36.86, 42.56],
  },

  varLabels: [["10", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "5" },
    { text: "REAR", fromSurface: "6", toSurface: "10" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.5,
  focusDescription: "Unit focusing — entire lens translates forward via helicoid.",

  /* ── Aperture configuration ── */
  nominalFno: 2.0,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.32,
} satisfies LensDataInput;

export default LENS_DATA;
