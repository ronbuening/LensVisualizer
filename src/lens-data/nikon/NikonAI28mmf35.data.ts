import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║    The patent states that the diaphragm lies between L3 and L4 but ║
 * ║    does not give an exact axial position or clear apertures. The   ║
 * ║    stop is placed at the midpoint of the L3-L4 air space,          ║
 * ║    consistent with Fig. 1. The stop radius is derived from the     ║
 * ║    design f-number, f/3.5, at the scaled 28.000 mm EFL. Element    ║
 * ║    SDs are conservative render apertures constrained by ray        ║
 * ║    height, sd/|R| < 0.90, element SD ratio ≤ 1.25, positive edge   ║
 * ║    thickness, and signed cross-gap sag clearance. They are not     ║
 * ║    patent-published values.                                        ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-ai-28mm-f35",
  maker: "Nikon",
  name: "NIKON AI NIKKOR 28mm f/3.5",
  subtitle: "US 4,099,850 Example 5 — Sei Matsui / Nippon Kogaku",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["6 elements / 6 groups", "f ≈ 28.00 mm", "f/3.5", "2ω = 74.2°", "all-spherical"],
    elementCount: 6,
    groupCount: 6,
    focalLengthMm: { marketing: 28, design: 28.00007 },
    fNumber: { marketing: 3.5, design: 3.5 },
  },

  source: {
    patentNumber: "US 4,099,850",
    patentYear: 1978,
    authors: ["Sei Matsui"],
    assignees: ["Nippon Kogaku K.K."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.62374,
      vd: 47.0,
      focalLengthMm: 191.29,
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
      focalLengthMm: -35.02,
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
      focalLengthMm: 23.68,
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
      focalLengthMm: -16.67,
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
      focalLengthMm: 35.2,
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
      focalLengthMm: 51.85,
      glass: "N-SK5 / S-BAL35 / J-SK5 class",
      apd: false,
      role: "Final positive relay element setting the image-side convergence and infinity back focal distance.",
    },
  ],

  surfaces: [
    { label: "1", R: 99.91016, d: 2.9372, sd: 21.5, medium: 1 },
    { label: "2", R: 607.38468, d: 0.098, sd: 18.0 },
    { label: "3", R: 55.80428, d: 1.56632, sd: 16.8, medium: 2 },
    { label: "4", R: 15.4686, d: 26.7274, sd: 13.5 },
    { label: "5", R: 23.7902, d: 2.7412, sd: 9.2, medium: 3 },
    { label: "6", R: -52.41684, d: 2.7412, sd: 8.3 },
    { label: "STO", R: "flat", d: 2.7412 },
    { label: "7", R: -21.042, d: 4.40552, sd: 7.0, medium: 4 },
    { label: "8", R: 34.16784, d: 1.07688, sd: 6.4 },
    { label: "9", R: -88.1118, d: 2.64348, sd: 6.4, medium: 5 },
    { label: "10", R: -17.70076, d: 0.098, sd: 8.0 },
    { label: "11", R: 80.27964, d: 2.44748, sd: 8.2, medium: 6 },
    { label: "12", R: -48.75528, sd: 9.8 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "Unit extension; the whole optical assembly moves object-ward and the final BFD increases at close focus.",
  },

  gaps: { "12": { label: "BF", values: [[38.45846, 42.10834]] } },

  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  groups: [
    { text: "FRONT DIVERGENT", fromSurface: "1", toSurface: "4" },
    { text: "REAR RELAY", fromSurface: "5", toSurface: "12" },
  ],
  doublets: [],

  layout: { scFill: 0.62, yScFill: 0.46 },
} satisfies LensDataV2Input;

export default LENS_DATA;
