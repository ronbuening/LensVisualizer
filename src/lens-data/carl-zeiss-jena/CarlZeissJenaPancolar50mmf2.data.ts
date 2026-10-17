import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
  schema: 2,
  key: "carl-zeiss-jena-pancolar-50f2",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA PANCOLAR 50mm f/2",
  subtitle: "GB 850,117 CLAIM 2 — VEB CARL ZEISS JENA / HUBERT & ZÖLLNER",

  // apertureDesign omitted — matches marketing
  catalog: {
    lensMounts: ["m42", "exakta"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 50.6 mm", "F/2.0", "2ω ≈ 46.3°", "ALL SPHERICAL"],
    elementCount: 6,
    groupCount: 4,
    /* ── Explicit metadata ── */
    focalLengthMm: { marketing: 50, design: 50.6 },
    fNumber: { marketing: 2.0 },
  },

  source: {
    patentNumber: "GB 850,117",
    patentYear: 1960,
    authors: ["Eduard Hubert", "Harry Zöllner"],
    assignees: ["VEB Carl Zeiss Jena"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.662,
      vd: 56.1,
      focalLengthMm: 63.4,
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
      focalLengthMm: 138.7,
      glass: "SSK / LaK (Jena in-house, 662/561)",
      apd: false,
      role: "Front doublet crown; provides chromatic correction with L3",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.67246,
      vd: 32.3,
      focalLengthMm: -45.3,
      glass: "Dense flint (672/323, Jena in-house; no exact public catalog match)",
      apd: false,
      role: "Front doublet flint; steep r₅ generates negative Petzval and spherical correction",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.60156,
      vd: 35.2,
      focalLengthMm: -20.3,
      glass: "Special light flint (Jena in-house, 602/352)",
      apd: false,
      role: "Rear doublet flint; strong negative spherical aberration corrects the diaphragm air gap",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.662,
      vd: 56.1,
      focalLengthMm: 25.4,
      glass: "SSK / LaK (Jena in-house, 662/561)",
      apd: false,
      role: "Rear doublet crown; thick biconvex (7.05 mm) manages marginal ray height through rear group",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.662,
      vd: 56.1,
      focalLengthMm: 51.6,
      glass: "SSK / LaK (Jena in-house, 662/561)",
      apd: false,
      role: "Rear positive power element; asymmetric biconvex converges rays to focus",
    },
  ],

  /* ── Surface prescription ──
   *  All values at production scale (patent f = 100 scaled ×0.5).
   *  Diaphragm position inferred from patent Fig. 1 (~65% through l₂ gap).
   */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 28.95, d: 4.6, sd: 18.0, medium: 1 },
    { label: "2", R: 87.45, d: 0.1, sd: 17.0 },
    { label: "3", R: 21.75, d: 3.35, sd: 17.0, medium: 2 },
    { label: "4", R: 26.75, d: 4.2, sd: 15.0, medium: 3 }, // L2→L3 cemented junction
    { label: "5", R: 13.35, d: 6.47, sd: 11.0 }, // L3 rear → air; d = distance to STO
    { label: "STO", R: "flat", d: 3.48 }, // STO position inferred from Fig. 1
    { label: "6", R: -15.05, d: 1.9, sd: 10.0, medium: 4 },
    { label: "7", R: 68.5, d: 7.05, sd: 11.0, medium: 5 }, // L4→L5 cemented junction
    { label: "8", R: -21.4, d: 0.3, sd: 13.5 },
    { label: "9", R: 113.65, d: 4.75, sd: 13.5, medium: 6 },
    { label: "10", R: -48.0, sd: 15.0 }, // BFD to image plane
  ],

  /* ── Focus configuration ── */
  focus: { closeFocusM: 0.5, description: "Unit focusing — entire lens translates forward via helicoid." },

  /* (moved from var) ── Variable air spacings (unit focus) ──
   *  Only the BFD changes during focus. Entire lens translates as a rigid unit.
   *  Close-focus BFD computed via Newton's equation at MFD = 0.5 m.
   */
  gaps: { "10": { label: "BF", values: [[36.86, 42.56]] } },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 2.0, fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22] },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "5" },
    { text: "REAR", fromSurface: "6", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.5, yScFill: 0.32 },
} satisfies LensDataV2Input;

export default LENS_DATA;
