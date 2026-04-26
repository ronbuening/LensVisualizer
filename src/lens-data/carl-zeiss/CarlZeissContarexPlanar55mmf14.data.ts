import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CARL ZEISS CONTAREX PLANAR 55mm f/1.4       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: DE 1,170,157 B, sole example (Carl Zeiss).          ║
 * ║  Modified asymmetric double-Gauss ("Planar").                     ║
 * ║  7 elements / 5 groups, 0 aspherical surfaces.                   ║
 * ║  Focus: Unit focus (entire optical assembly translates).          ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f = 1.00; all R, d, sd values scaled ×55             ║
 * ║    to 55 mm production focal length.                              ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from paraxial marginal + chief ray trace at f/1.4    ║
 * ║    and ±20° half-field, with 8–10% mechanical clearance.          ║
 * ║    Constrained by B56 filter thread (≈52 mm clear aperture).      ║
 * ║    Patent provides no explicit semi-diameter data.                ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Stop inferred from patent Fig. 1 — placed at 50% of the       ║
 * ║    15.80 mm air gap between L_III rear and L_IV front.            ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable focus gap                         ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts      ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "carl-zeiss-contarex-planar-55f14",
  maker: "Carl Zeiss",
  name: "CARL ZEISS CONTAREX PLANAR 55mm f/1.4",
  subtitle: "DE 1,170,157 B — CARL ZEISS / BERGER & LANGE",
  specs: ["7 ELEMENTS / 5 GROUPS", "f = 55.0 mm", "F/1.4", "2ω ≈ 42.9°", "ALL SPHERICAL"],

  /* ── Explicit metadata fields ── */
  focalLengthMarketing: 55,
  apertureMarketing: 1.4,
  patentYear: 1964,
  elementCount: 7,
  groupCount: 5,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.717,
      vd: 47.9,
      fl: 92.0,
      glass: "LaF3 (Schott 717479)",
      apd: false,
      role: "Front positive meniscus — gentle convergence at full aperture diameter",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex",
      nd: 1.62299,
      vd: 58.12,
      fl: 42.6,
      glass: "SK/SSK family (623581, discontinued?)",
      apd: false,
      role: "Strongest positive element — primary front-group convergence",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave",
      nd: 1.57501,
      vd: 41.31,
      fl: -28.7,
      glass: "LF7 (Schott 575413)",
      apd: false,
      role: "Negative flint — Petzval correction and front doublet achromatization",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.46,
      fl: -22.5,
      glass: "SF6 (Schott 805255)",
      apd: false,
      role: "Dense flint — strongest negative surface power; primary Petzval corrector",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.78443,
      vd: 43.77,
      fl: 37.4,
      glass: "LaF10 (Schott 784438)",
      apd: false,
      role: "Primary rear-group power carrier; cemented against L4 for chromatic correction",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.78443,
      vd: 43.77,
      fl: 100.3,
      glass: "LaF10 (Schott 784438)",
      apd: false,
      role: "Field corrector — manages off-axis ray bundle geometry",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.717,
      vd: 47.9,
      fl: 59.7,
      glass: "LaF3 (Schott 717479)",
      apd: false,
      role: "Final element — directs converging beam to image plane at correct BFD",
    },
  ],

  /* ── Surface prescription ──
   *  Patent DE 1,170,157 B at f = 1.00, scaled ×55 to production.
   *  Cemented doublets D1 (L_II+L_III) and D2 (L_IV+L_V) have merged junction surfaces.
   *  Junction at D1 is flat (R = ∞); junction at D2 is very weakly curved (R = +205.0 mm).
   */
  surfaces: [
    { label: "1", R: 46.563, d: 6.32, nd: 1.717, elemId: 1, sd: 22.0 }, // L1 front
    { label: "2", R: 149.38, d: 0.094, nd: 1.0, elemId: 0, sd: 20.5 }, // L1 rear → air
    { label: "3", R: 26.565, d: 9.757, nd: 1.62299, elemId: 2, sd: 19.5 }, // L2 front (D1)
    { label: "4", R: 1e15, d: 1.392, nd: 1.57501, elemId: 3, sd: 16.0 }, // D1 junction (flat) → L3
    { label: "5", R: 16.522, d: 7.898, nd: 1.0, elemId: 0, sd: 14.5 }, // L3 rear → air (to stop)
    { label: "STO", R: 1e15, d: 7.898, nd: 1.0, elemId: 0, sd: 12.8 }, // STO inferred from Fig. 1, 50% of d6 gap
    { label: "6", R: -19.921, d: 2.046, nd: 1.80518, elemId: 4, sd: 12.8 }, // L4 front (D2)
    { label: "7", R: 205.0, d: 8.173, nd: 1.78443, elemId: 5, sd: 12.8 }, // D2 junction → L5
    { label: "8", R: -33.688, d: 0.094, nd: 1.0, elemId: 0, sd: 14.0 }, // L5 rear → air
    { label: "9", R: -88.979, d: 4.648, nd: 1.78443, elemId: 6, sd: 14.0 }, // L6 front
    { label: "10", R: -42.713, d: 0.094, nd: 1.0, elemId: 0, sd: 14.5 }, // L6 rear → air
    { label: "11", R: 131.23, d: 4.648, nd: 1.717, elemId: 7, sd: 14.5 }, // L7 front
    { label: "12", R: -62.541, d: 36.47, nd: 1.0, elemId: 0, sd: 14.0 }, // L7 rear → image (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus) ──
   *  Unit focus — entire lens translates forward.
   *  Only the back focal distance changes.
   *  Close focus at 0.45 m: lens extension ≈ 8.7 mm (thick-lens computation).
   */
  var: {
    "12": [36.47, 45.17],
  },

  varLabels: [["12", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "5" },
    { text: "REAR", fromSurface: "6", toSurface: "12" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 0.45,
  focusDescription: "Unit focus — entire optical assembly translates forward for close focus.",

  /* ── Aperture configuration ── */
  nominalFno: 1.4,
  fstopSeries: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
