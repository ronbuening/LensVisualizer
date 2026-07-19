import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — Nikon AI Nikkor 28mm f/3.5                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,099,850, Example 5 (Sei Matsui / Nippon Kogaku).║
 * ║  Six-element, six-group all-spherical retrofocus wide-angle design.║
 * ║  Focus: unit extension; the final image-side gap is varied.        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription is normalized to f=100. All radii,          ║
 * ║    thicknesses, air spaces, BFD, and semi-diameters are scaled      ║
 * ║    ×0.28 for a 28 mm production-scale model.                       ║
 * ║                                                                    ║
 * ║  NOTE ON STOP AND SEMI-DIAMETERS:                                  ║
 * ║    The patent states that the diaphragm lies between L3 and L4      ║
 * ║    but does not give an exact axial position or clear apertures.    ║
 * ║    The stop is placed at the midpoint of the L3-L4 air space,       ║
 * ║    consistent with Fig. 1. Stop SD is paraxially solved for f/3.5   ║
 * ║    at the scaled 28.000 mm EFL. Element SDs are conservative        ║
 * ║    render apertures constrained by ray height, sd/|R| < 0.90,       ║
 * ║    element SD ratio ≤ 1.25, positive edge thickness, and signed     ║
 * ║    cross-gap sag clearance. They are not patent-published values.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-ai-28mm-f35",
  maker: "Nikon",
  name: "NIKON AI NIKKOR 28mm f/3.5",
  subtitle: "US 4,099,850 Example 5 — Sei Matsui / Nippon Kogaku",
  specs: ["6 elements / 6 groups", "f ≈ 28.00 mm", "f/3.5", "2ω = 74.2°", "all-spherical"],

  focalLengthMarketing: 28,
  focalLengthDesign: 28.00007,
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,099,850",
  patentAuthors: ["Sei Matsui"],
  patentAssignees: ["Nippon Kogaku KK"],
  patentYear: 1978,
  elementCount: 6,
  groupCount: 6,
  apertureBlades: 7,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62374,
      vd: 47.0,
      fl: 191.29,
      glass: "E-BAF8 (Hikari) / J-BAF8 class",
      apd: false,
      role: "Weak front positive meniscus used to moderate retrofocus distortion and front-group ray bending.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.62041,
      vd: 60.3,
      fl: -35.02,
      glass: "N-SK16 / S-BSM16 / J-SK16 class",
      apd: false,
      role: "Strong negative meniscus forming the divergent front group and setting the retrofocus back-focus ratio.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.70154,
      vd: 41.1,
      fl: 23.68,
      glass: "BAFD7 (HOYA) / S-BAH27 / J-BASF7 class",
      apd: false,
      role: "Primary positive collector ahead of the stop; redirects the front group divergence into the rear section.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.5,
      fl: -16.67,
      glass: "E-FD4 (HOYA) / H-ZF6 / J-SF4 class",
      apd: false,
      role: "Strong post-stop negative element for off-axis aberration, field, and Petzval correction.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      fl: 35.2,
      glass: "N-SK16 / S-BSM16 / J-SK16 class",
      apd: false,
      role: "Positive rear meniscus that relays the beam after L4 and contributes low-dispersion chromatic balance.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.2,
      fl: 51.85,
      glass: "N-SK5 / S-BAL35 / J-SK5 class",
      apd: false,
      role: "Final positive relay element setting the image-side convergence and infinity back focal distance.",
    },
  ],

  surfaces: [
    { label: "1", R: 99.91016, d: 2.9372, nd: 1.62374, elemId: 1, sd: 21.5 },
    { label: "2", R: 607.38468, d: 0.098, nd: 1.0, elemId: 0, sd: 18.0 },
    { label: "3", R: 55.80428, d: 1.56632, nd: 1.62041, elemId: 2, sd: 16.8 },
    { label: "4", R: 15.4686, d: 26.7274, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "5", R: 23.7902, d: 2.7412, nd: 1.70154, elemId: 3, sd: 9.2 },
    { label: "6", R: -52.41684, d: 2.7412, nd: 1.0, elemId: 0, sd: 8.3 },
    { label: "STO", R: 1e15, d: 2.7412, nd: 1.0, elemId: 0, sd: 5.68506 },
    { label: "7", R: -21.042, d: 4.40552, nd: 1.7552, elemId: 4, sd: 7.0 },
    { label: "8", R: 34.16784, d: 1.07688, nd: 1.0, elemId: 0, sd: 6.4 },
    { label: "9", R: -88.1118, d: 2.64348, nd: 1.62041, elemId: 5, sd: 6.4 },
    { label: "10", R: -17.70076, d: 0.098, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "11", R: 80.27964, d: 2.44748, nd: 1.58913, elemId: 6, sd: 8.2 },
    { label: "12", R: -48.75528, d: 38.45846, nd: 1.0, elemId: 0, sd: 9.8 },
  ],

  asph: {},

  var: {
    "12": [38.45846, 42.10834],
  },
  varLabels: [["12", "BF"]],

  groups: [
    { text: "FRONT DIVERGENT", fromSurface: "1", toSurface: "4" },
    { text: "REAR RELAY", fromSurface: "5", toSurface: "12" },
  ],
  doublets: [],

  focusDescription:
    "Unit extension; the whole optical assembly moves object-ward and the final BFD increases at close focus.",
  closeFocusM: 0.3,
  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  scFill: 0.62,
  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
