import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Carl Zeiss Planar T* 50mm f/1.4              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,874,771 Example 5 (Behrens & Glatzel / Zeiss). ║
 * ║  Extended double-Gauss, 7 elements / 6 groups, all spherical.     ║
 * ║  Focus: unit focusing (entire lens moves).                         ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent prescription normalized to F = 1.0000.                   ║
 * ║    All R, d, sd values scaled ×50 to f = 50 mm production.        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent does not list semi-diameters. SDs estimated from         ║
 * ║    paraxial marginal ray trace at f/1.4 with 8% mechanical        ║
 * ║    clearance. S6 (L3 rear) SD reduced to 13.5 mm to satisfy       ║
 * ║    sd/|R| < 0.90 constraint (R = +15.324 mm).                     ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Patent does not specify iris placement within the central       ║
 * ║    air space (CS = 14.273 mm). Stop placed at midpoint of CS,     ║
 * ║    inferred from Fig. 1 iris location.                             ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "zeiss-planar-t-50f14",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS PLANAR T* 50mm f/1.4",
  subtitle: "US 3,874,771 EXAMPLE 5 — CARL ZEISS / BEHRENS & GLATZEL",
  specs: ["7 ELEMENTS / 6 GROUPS", "f ≈ 50.0 mm", "F/1.4", "2ω ≈ 46.8°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 50,
  apertureMarketing: 1.4,
  patentYear: 1975,
  elementCount: 7,
  groupCount: 6,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.717,
      vd: 47.99,
      fl: 72.7,
      glass: "LaK 21 (SCHOTT)",
      apd: false,
      role: "Front positive collector; pre-converges marginal rays toward stop",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.78831,
      vd: 47.37,
      fl: 65.4,
      glass: "LaF 21 (SCHOTT)",
      apd: false,
      role: "Second collector; high-index LaF reduces surface curvature to control 5th-order SA",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.68893,
      vd: 31.17,
      fl: -33.5,
      glass: "SF 56 (SCHOTT)",
      apd: false,
      role: "Front diverging element; air lens β with L2 controls higher-order spherical aberration",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7283,
      vd: 28.68,
      fl: -22.7,
      glass: "SF 10 family (SCHOTT)",
      apd: false,
      role: "Rear diverging element of cemented doublet N2; primary negative Petzval contribution",
      cemented: "N2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.78831,
      vd: 47.37,
      fl: 35.8,
      glass: "LaF 21 (SCHOTT)",
      apd: false,
      role: "Strongest positive element in rear group; rear surface is primary converging surface of rear member",
      cemented: "N2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.78831,
      vd: 47.37,
      fl: 51.3,
      glass: "LaF 21 (SCHOTT)",
      apd: false,
      role: "First element of rear positive combination PH; concave-forward meniscus mirrors L2 about stop",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.77,
      fl: 98.4,
      glass: "LaF 2 (SCHOTT)",
      apd: false,
      role: "Final field-flattening corrector; weak positive biconvex with gentle curvatures",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    // ── Front member V (L1, L2, L3) ──
    { label: "1", R: 44.452, d: 5.091, nd: 1.717, elemId: 1, sd: 19.5 }, // L1 front
    { label: "2", R: 288.661, d: 0.059, nd: 1.0, elemId: 0, sd: 18.5 }, // L1 rear → air (α)
    { label: "3", R: 21.804, d: 4.856, nd: 1.78831, elemId: 2, sd: 18.5 }, // L2 front
    { label: "4", R: 34.062, d: 1.589, nd: 1.0, elemId: 0, sd: 16.0 }, // L2 rear → air (β)
    { label: "5", R: 47.086, d: 1.187, nd: 1.68893, elemId: 3, sd: 15.0 }, // L3 front
    { label: "6", R: 15.324, d: 7.136, nd: 1.0, elemId: 0, sd: 13.5 }, // L3 rear → air (CS, first half)

    // ── Aperture stop (inferred at midpoint of CS from Fig. 1) ──
    { label: "STO", R: 1e15, d: 7.136, nd: 1.0, elemId: 0, sd: 14.0 },

    // ── Rear member H (L4+L5 cemented, L6, L7) ──
    { label: "7", R: -17.319, d: 1.148, nd: 1.7283, elemId: 4, sd: 12.5 }, // L4 front
    { label: "8", R: 374.022, d: 5.15, nd: 1.78831, elemId: 5, sd: 12.5 }, // L4–L5 junction → L5 glass
    { label: "9", R: -30.357, d: 0.284, nd: 1.0, elemId: 0, sd: 14.0 }, // L5 rear → air (γ)
    { label: "10", R: -87.426, d: 4.385, nd: 1.78831, elemId: 6, sd: 14.0 }, // L6 front
    { label: "11", R: -28.25, d: 0.128, nd: 1.0, elemId: 0, sd: 14.0 }, // L6 rear → air (δ)
    { label: "12", R: 164.68, d: 2.835, nd: 1.744, elemId: 7, sd: 14.0 }, // L7 front
    { label: "13", R: -130.808, d: 35.497, nd: 1.0, elemId: 0, sd: 13.5 }, // L7 rear → BFD
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ── */
  var: {
    "13": [35.497, 42.6],
  },

  varLabels: [["13", "BF"]],

  /* ── Group annotations ── */
  groups: [
    { text: "FRONT (V)", fromSurface: "1", toSurface: "6" },
    { text: "REAR (H)", fromSurface: "7", toSurface: "13" },
  ],

  doublets: [{ text: "N₂", fromSurface: "7", toSurface: "9" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.45,
  focusDescription: "Unit focusing — entire optical assembly moves forward. C/Y mount MFD 0.45 m.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
