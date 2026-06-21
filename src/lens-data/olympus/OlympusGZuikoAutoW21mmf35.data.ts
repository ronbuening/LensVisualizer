import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        OLYMPUS G.ZUIKO AUTO-W 21mm f/3.5                          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,884,556, Embodiment 3 / Claim 4                 ║
 * ║  (Olympus Optical Co., Jihei Nakagawa).                            ║
 * ║                                                                    ║
 * ║  Seven air-spaced spherical singlets in a compact retrofocus        ║
 * ║  wide-angle layout. Patent prescription normalized to f = 1.0;     ║
 * ║  all radii, spacings, BFD, and inferred semi-diameters are scaled   ║
 * ║  by 21.0 for the production 21 mm focal length.                    ║
 * ║                                                                    ║
 * ║  Focus: unit focus. The internal prescription is fixed; focusing is ║
 * ║  represented by changing only the back-focus gap from infinity to   ║
 * ║  the 0.20 m manufacturer close-focus distance.                     ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                             ║
 * ║    The patent drawing places the aperture stop in the L4-L5 air     ║
 * ║    space but does not tabulate a stop coordinate. The d8 air space  ║
 * ║    is split equally around STO. The stop semi-diameter is set from  ║
 * ║    the paraxial entrance pupil for f/3.5.                           ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish clear-aperture semi-diameters. The   ║
 * ║    values below are conservative ray-envelope/mechanical estimates  ║
 * ║    constrained by the 49 mm filter thread, element SD ratios, edge  ║
 * ║    thickness, sd/|R| < 0.90, and cross-gap sag clearance.           ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes only the optical design: glass      ║
 * ║  elements, refracting surfaces, aperture stop, and focus BFD. It    ║
 * ║  excludes filters, sensor glass, mount hardware, and mechanics.     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "olympus-g-zuiko-auto-w-21mm-f35",
  maker: "Olympus",
  name: "OLYMPUS G.ZUIKO AUTO-W 21mm f/3.5",
  subtitle: "US 3,884,556 Embodiment 3 — Olympus / Nakagawa",
  specs: ["7 ELEMENTS / 7 GROUPS", "f ≈ 21.00 mm", "F/3.5", "2ω ≈ 92°", "ALL-SPHERICAL"],

  focalLengthMarketing: 21,
  focalLengthDesign: 21.0005,
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["olympus-om"],
  imageFormat: "135-full-frame",
  patentYear: 1975,
  elementCount: 7,
  groupCount: 7,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 42.1,
      fl: 90.84,
      glass: "Unmatched (vintage lanthanum flint, code 720/421)",
      apd: false,
      role: "Front positive meniscus for retrofocus ray-angle and distortion control.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.618,
      vd: 63.4,
      fl: -26.24,
      glass: "S-PHM52 (OHARA, current equivalent)",
      apd: false,
      role: "First negative front-group meniscus; low-dispersion diverging power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 54.0,
      fl: -21.33,
      glass: "S-LAL8 (OHARA) / N-LAK8 class",
      apd: false,
      role: "Second negative front-group meniscus; completes the strong diverging retrofocus group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.5955,
      vd: 39.2,
      fl: 17.46,
      glass: "S-TIM8 (OHARA) / F8 class",
      apd: false,
      role: "Thick central positive power element; balances front-group spherical aberration and astigmatism.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.8467,
      vd: 23.9,
      fl: -21.07,
      glass: "SF57 (SCHOTT, legacy dense flint class)",
      apd: false,
      role: "Dense-flint negative corrector behind the stop; principal chromatic-balancing element.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.4,
      fl: 32.86,
      glass: "S-PHM52 (OHARA, current equivalent)",
      apd: false,
      role: "Rear positive meniscus with concave object-side surface; spherical aberration and coma correction.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.4,
      fl: 36.24,
      glass: "S-PHM52 (OHARA, current equivalent)",
      apd: false,
      role: "Final rear positive meniscus; exit power and field-shape correction.",
    },
  ],

  surfaces: [
    { label: "1", R: 34.1313, d: 3.9018, nd: 1.72, elemId: 1, sd: 18.0 },
    { label: "2", R: 67.9665, d: 0.0966, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "3", R: 19.6203, d: 1.4637, nd: 1.618, elemId: 2, sd: 9.4 },
    { label: "4", R: 8.6247, d: 3.7842, nd: 1.0, elemId: 0, sd: 7.55 },
    { label: "5", R: 21.525, d: 1.4637, nd: 1.713, elemId: 3, sd: 8.2 },
    { label: "6", R: 8.6604, d: 2.6523, nd: 1.0, elemId: 0, sd: 6.85 },
    { label: "7", R: 23.3247, d: 12.9213, nd: 1.5955, elemId: 4, sd: 7.5 },
    { label: "8", R: -14.8806, d: 0.78015, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "STO", R: 1e15, d: 0.78015, nd: 1.0, elemId: 0, sd: 4.5823 },
    { label: "9", R: -23.5032, d: 4.5444, nd: 1.8467, elemId: 5, sd: 6.0 },
    { label: "10", R: 80.6085, d: 0.6342, nd: 1.0, elemId: 0, sd: 5.45 },
    { label: "11", R: -42.3192, d: 1.9509, nd: 1.618, elemId: 6, sd: 5.45 },
    { label: "12", R: -13.9629, d: 0.147, nd: 1.0, elemId: 0, sd: 6.6 },
    { label: "13", R: -249.249, d: 2.6334, nd: 1.618, elemId: 7, sd: 7.4 },
    { label: "14", R: -20.6304, d: 36.39934, nd: 1.0, elemId: 0, sd: 8.2 },
  ],

  asph: {},

  var: {
    "14": [36.39934, 39.83527],
  },
  varLabels: [["14", "BF"]],

  groups: [
    { text: "L1-L3 DIVERGING FRONT GROUP", fromSurface: "1", toSurface: "6" },
    { text: "L4-L7 CONVERGING REAR GROUP", fromSurface: "7", toSurface: "14" },
  ],

  doublets: [],

  closeFocusM: 0.2,
  focusDescription:
    "Unit focus; the full optical cell translates, modeled as a back-focus change from 36.40 mm at infinity to 39.84 mm at 0.20 m.",

  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16],

  scFill: 0.58,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
