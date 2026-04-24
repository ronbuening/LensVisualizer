import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Canon Serenar 35mm f/3.2                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2,645,975 Example 1 (Hiroshi Ito / Canon).       ║
 * ║  Modified double-Gauss wide-angle, 6 elements / 4 groups.         ║
 * ║  All-spherical, 0 aspherical surfaces.                            ║
 * ║  Focus: Unit focusing (entire lens translates).                   ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent at f=1.0 (computed EFL = 0.9825).                       ║
 * ║    All R, d, sd values scaled ×35.623 to f ≈ 35.0 mm production.  ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Estimated from paraxial marginal ray (f/3.0 design) and chief  ║
 * ║    ray (32° half-field, 60% field fraction for post-stop) with    ║
 * ║    ~10% mechanical clearance. Constrained by 34 mm filter thread. ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    Patent does not specify stop as a separate surface. Placed at  ║
 * ║    the midpoint of the central air gap d₅ between the two         ║
 * ║    cemented doublets, inferred from Fig. 1 iris placement.        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "canon-serenar-35f32",
  maker: "Canon",
  name: "CANON SERENAR 35mm f/3.2",
  subtitle: "US 2,645,975 EXAMPLE 1 — HIROSHI ITO / CANON",
  specs: ["6 ELEMENTS / 4 GROUPS", "f ≈ 35.0 mm", "F/3.2 (design F/3.0)", "2ω ≈ 64°", "ALL SPHERICAL"],

  /* ── Explicit metadata ── */
  focalLengthMarketing: 35,
  focalLengthDesign: 35.0,
  apertureMarketing: 3.2,
  apertureDesign: 3.0,
  patentYear: 1953,
  elementCount: 6,
  groupCount: 4,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.5891,
      vd: 61.2,
      fl: 52.9,
      glass: "SK5 (Schott)",
      apd: false as const,
      role: "Front collecting positive meniscus; distributes convergence to reduce higher-order SA.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6073,
      vd: 59.5,
      fl: 22.6,
      glass: "SK7 (Schott)",
      apd: false as const,
      cemented: "D1",
      role: "Front doublet crown — strongest element; primary convergence before stop.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.5785,
      vd: 41.7,
      fl: -16.2,
      glass: "LF5/LF7 (Schott)",
      apd: false as const,
      cemented: "D1",
      role: "Front doublet flint — chromatic correction and Petzval field flattening.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5785,
      vd: 41.7,
      fl: -13.5,
      glass: "LF5/LF7 (Schott)",
      apd: false as const,
      cemented: "D2",
      role: "Rear doublet flint — mirrors L3 for symmetry-based lateral aberration cancellation.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6031,
      vd: 60.7,
      fl: 16.7,
      glass: "SK14 (Schott)",
      apd: false as const,
      cemented: "D2",
      role: "Rear doublet crown — main convergent element in rear half.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6228,
      vd: 56.9,
      fl: 36.4,
      glass: "SK10 (Schott)",
      apd: false as const,
      role: "Rear collecting singlet; asymmetric bending controls distortion at wide field.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 22.257, d: 2.618, nd: 1.5891, elemId: 1, sd: 11.5 }, // L1 front
    { label: "2", R: 74.452, d: 0.702, nd: 1.0, elemId: 0, sd: 10.5 }, // L1 rear → air
    { label: "3", R: 16.034, d: 5.087, nd: 1.6073, elemId: 2, sd: 9.0 }, // L2 front (D1)
    { label: "4", R: -82.887, d: 0.762, nd: 1.5785, elemId: 3, sd: 8.0 }, // L2→L3 junction (D1)
    { label: "5", R: 10.598, d: 2.543, nd: 1.0, elemId: 0, sd: 7.0 }, // L3 rear → air
    { label: "STO", R: 1e15, d: 2.543, nd: 1.0, elemId: 0, sd: 4.2 }, // Aperture stop (inferred from Fig. 1)
    { label: "6", R: -10.356, d: 0.702, nd: 1.5785, elemId: 4, sd: 6.5 }, // L4 front (D2)
    { label: "7", R: 32.253, d: 3.651, nd: 1.6031, elemId: 5, sd: 7.0 }, // L4→L5 junction (D2)
    { label: "8", R: -14.078, d: 0.071, nd: 1.0, elemId: 0, sd: 8.0 }, // L5 rear → air
    { label: "9", R: 110.381, d: 2.287, nd: 1.6228, elemId: 6, sd: 8.5 }, // L6 front
    { label: "10", R: -28.31, d: 24.999, nd: 1.0, elemId: 0, sd: 9.5 }, // L6 rear → image (BFD)
  ],

  /* ── Aspherical coefficients ── */
  asph: {},

  /* ── Variable air spacings (unit focus — BFD only) ── */
  var: {
    "10": [24.999, 26.268],
  },
  varLabels: [["10", "BF"]],

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2 (D1)", fromSurface: "3", toSurface: "5" },
    { text: "G3 (D2)", fromSurface: "6", toSurface: "8" },
    { text: "G4", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  /* ── Focus configuration ── */
  closeFocusM: 1.0,
  focusDescription: "Unit focusing — entire optical assembly translates.",

  /* ── Aperture configuration ── */
  nominalFno: 3.2,
  fstopSeries: [3.2, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.5,
  yScFill: 0.45,
} satisfies LensDataInput;

export default LENS_DATA;
