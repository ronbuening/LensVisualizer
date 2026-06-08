import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — Leica Elmar-M / Tele-Elmar-M 135mm f/4           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: DE 1 183 707 B, single worked example, Ernst Leitz.  ║
 * ║  Five-element, three-group P-N-P telephoto prescription.           ║
 * ║  5 elements / 3 groups, all spherical.                             ║
 * ║  Focus: unit focus, modeled by back-focus extension.               ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    The patent table is normalized to f = 1.000 and f:4. R, d,      ║
 * ║    BFD, and inferred semi-diameters are scaled ×135. The rounded   ║
 * ║    patent table computes to EFL = 0.99624268 normalized, so this   ║
 * ║    production-scale transcription computes to EFL ≈ 134.493 mm.   ║
 * ║                                                                    ║
 * ║  NOTE ON WAVELENGTH:                                               ║
 * ║    DE 1 183 707 B publishes n_e / ν_e, not n_d / ν_d. The patent  ║
 * ║    e-line values are retained in the surface nd slots to preserve  ║
 * ║    the published paraxial prescription. Catalog d-line equivalents ║
 * ║    are documented in the paired analysis file.                     ║
 * ║                                                                    ║
 * ║  NOTE ON STOP AND SEMI-DIAMETERS:                                  ║
 * ║    The patent drawing places the stop just behind r6 but gives no  ║
 * ║    stop diameter or clear apertures. The stop is placed 0.03000 f  ║
 * ║    behind r6 from the drawing; its SD is computed for f/4. Surface ║
 * ║    SDs are conservative inferred clear apertures constrained by    ║
 * ║    the figure proportions, edge thickness, and cross-gap clearance.║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)    ║
 * ║    ✓ Aperture stop and unit-focus BFD variable gap                 ║
 * ║    ✗ DO NOT include: sensor glass, filters, mechanical parts       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "leica-elmar-m-135mm-f4",
  maker: "Leica",
  name: "Leica Elmar-M 135mm f/4",
  subtitle: "DE 1 183 707 B — Ernst Leitz single worked example",
  specs: ["5 elements / 3 groups", "f ≈ 134.5 mm", "F/4", "2ω ≈ 18°", "all-spherical", "unit focus"],

  focalLengthMarketing: 135,
  focalLengthDesign: 134.49,
  apertureMarketing: 4,
  apertureDesign: 4,
  lensMounts: ["leica-m"],
  imageFormat: "135-full-frame",
  patentYear: 1964,
  elementCount: 5,
  groupCount: 3,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Plano-Convex Positive",
      nd: 1.57125,
      vd: 55.8,
      fl: 114.18,
      glass: "N-BAK4 / BaK4 class (Schott; patent e-line value stored)",
      apd: false,
      role: "Front crown collector in the object-side positive cemented meniscus.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Concave Negative",
      nd: 1.58403,
      vd: 41.4,
      fl: -478.81,
      glass: "Light flint class, 584/414 e-line code (LF5-adjacent, unresolved exact melt)",
      apd: false,
      role: "Weak negative flint cemented to L1; completes the front positive meniscus group.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.51871,
      vd: 64.0,
      fl: 58.92,
      glass: "N-BK7 / BK7 class (Schott; patent e-line value stored)",
      apd: false,
      role: "Strong crown component of the central thick negative cemented meniscus.",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.60718,
      vd: 37.8,
      fl: -34.14,
      glass: "F5 class (Schott; patent e-line value stored)",
      apd: false,
      role: "Dominant negative element; the r5 cemented junction is the diverging cemented surface described in the patent.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.69416,
      vd: 30.9,
      fl: 186.36,
      glass: "Unmatched SF8-class dense flint (Schott e-line source values; patent ne=1.69416, νe=30.9)",
      apd: false,
      role: "Rear positive dense-flint meniscus behind the long telephoto air space.",
    },
  ],

  surfaces: [
    { label: "1", R: 65.2266, d: 5.74965, nd: 1.57125, elemId: 1, sd: 19.0 },
    { label: "2", R: 1e15, d: 3.3102, nd: 1.58403, elemId: 2, sd: 18.9 },
    { label: "3", R: 279.63765, d: 0.2862, nd: 1.0, elemId: 0, sd: 18.5 },
    { label: "4", R: 37.2735, d: 8.62245, nd: 1.51871, elemId: 3, sd: 18.7 },
    { label: "5", R: -156.4029, d: 18.6732, nd: 1.60718, elemId: 4, sd: 18.7 },
    { label: "6", R: 24.975, d: 4.05, nd: 1.0, elemId: 0, sd: 15.3 },
    { label: "STO", R: 1e15, d: 19.0701, nd: 1.0, elemId: 0, sd: 9.8991 },
    { label: "7", R: 70.3647, d: 3.591, nd: 1.69416, elemId: 5, sd: 14.0 },
    { label: "8", R: 151.05555, d: 64.3607969, nd: 1.0, elemId: 0, sd: 14.0 },
  ],

  asph: {},

  var: {
    "8": [64.3607969, 79.463386],
  },

  varLabels: [["8", "BF"]],

  groups: [
    { text: "G1 positive", fromSurface: "1", toSurface: "3" },
    { text: "G2 negative", fromSurface: "4", toSurface: "6" },
    { text: "G3 positive", fromSurface: "7", toSurface: "8" },
  ],

  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6" },
  ],

  closeFocusM: 1.5,
  focusDescription:
    "Unit focus; the complete optical cell translates, represented by BFD extension from 64.361 mm at infinity to 79.463 mm at 1.5 m.",

  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  apertureBlades: 10,

  maxFstop: 22,
  scFill: 0.48,
  yScFill: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
