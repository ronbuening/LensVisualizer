import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — Fujifilm GA645W/Wi 45mm f/4                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,621,575 Embodiment 6 (Fuji Photo Optical /      ║
 * ║  Nobuaki Toyama).                                                   ║
 * ║  Compact all-spherical wide-angle lens for a 6 x 4.5 cm lens-       ║
 * ║  shutter camera.                                                     ║
 * ║  7 elements / 5 groups, 0 aspherical surfaces.                       ║
 * ║  Focus: unit-focus model. The patent gives only the infinity        ║
 * ║  prescription; close focus is modeled by increasing BFD to match    ║
 * ║  the published 0.7 m minimum focus distance.                         ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent prescription is normalized to f = 100.00 mm. All radii,   ║
 * ║    thicknesses, air gaps, BFD, and inferred semi-diameters are      ║
 * ║    scaled by 0.45 for the production 45 mm lens. Independent        ║
 * ║    paraxial trace of the rounded patent table gives EFL = 45.03 mm. ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    The patent does not list clear apertures. Semi-diameters below   ║
 * ║    were estimated from marginal/chief-ray envelopes, then reduced   ║
 * ║    to satisfy renderer limits: sd/|R| < 0.90, element SD ratio      ║
 * ║    <= 1.25, positive edge thickness, and cross-gap sag intrusion.  ║
 * ║    They should be treated as conservative drawing apertures, not    ║
 * ║    measured production clear apertures.                              ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ Glass elements and surfaces from front element to film plane   ║
 * ║    ✓ Aperture stop and variable focus gap                           ║
 * ║    ✗ Sensor glass, filters, and mechanical parts are not included   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "fujifilm-ga645widepro-45mm-f4",
  maker: "Fujifilm",
  name: "FUJIFILM Super EBC Fujinon 45mm f/4 (Fujifilm GA645W/GA645Wi Professional)",
  subtitle: "US 5,621,575 Embodiment 6 — Fuji Photo Optical / Toyama",
  specs: ["7 elements / 5 groups", "45mm f/4", "2ω = 75.2° patent field", "All spherical"],

  focalLengthMarketing: 45,
  focalLengthDesign: 45.0301,
  apertureMarketing: 4,
  apertureDesign: 4.08,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "645",
  patentYear: 1997,
  elementCount: 7,
  groupCount: 5,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.4,
      fl: -82.69,
      glass: "FC5 / N-FK5 class (487/704)",
      apd: false,
      role: "Front low-index negative meniscus; widens the field and moderates front-group ray angles.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.805,
      vd: 39.6,
      fl: 23.66,
      glass: "NBFD3 (Hoya, 805/396; S-LAH63-class)",
      apd: false,
      role: "Strong positive element in the front cemented doublet; high index limits curvature for the required power.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.78472,
      vd: 25.7,
      fl: -29.85,
      glass: "FD110 (Hoya, 785/257; N-SF11 / S-TIH11 class)",
      apd: false,
      role: "Dense-flint negative partner of the front achromat; supplies dispersion leverage against L2.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 17.2,
      glass: "TAF1 (Hoya, 773/496; S-LAH66 / N-LAF34 class)",
      apd: false,
      role: "Strong post-stop positive element; supplies the principal convergence in the rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.8,
      fl: -21.52,
      glass: "E-FL5 (Hoya, 581/409; S-TIL25 class)",
      apd: false,
      role: "Negative light-flint partner of the rear achromat; balances L4's power and contributes Petzval correction.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 46.27,
      glass: "TAF1 (Hoya, 773/496; S-LAH66 / N-LAF34 class)",
      apd: false,
      role: "Rear positive meniscus, convex to image; collects the rear doublet output and controls field curvature.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.8,
      fl: -55.04,
      glass: "E-FL5 (Hoya, 581/409; S-TIL25 class)",
      apd: false,
      role: "Rear negative meniscus, convex to image; main field-flattening and distortion-correction element.",
    },
  ],

  surfaces: [
    { label: "1", R: 20.93175, d: 1.782, nd: 1.48749, elemId: 1, sd: 15.0 },
    { label: "2", R: 13.39335, d: 10.08, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "3", R: 21.7755, d: 5.328, nd: 1.805, elemId: 2, sd: 11.5 },
    { label: "4", R: -135.45675, d: 2.2455, nd: 1.78472, elemId: 3, sd: 9.2 },
    { label: "5", R: 28.5327, d: 2.2275, nd: 1.0, elemId: 0, sd: 7.5 },

    // Stop position inferred from Fig. 11; the patent table gives only the total surface 5-to-6 air gap.
    { label: "STO", R: 1e15, d: 2.2275, nd: 1.0, elemId: 0, sd: 5.3565 },

    { label: "6", R: 55.26495, d: 9.9, nd: 1.7725, elemId: 4, sd: 8.0 },
    { label: "7", R: -16.12305, d: 1.197, nd: 1.58144, elemId: 5, sd: 10.0 },
    { label: "8", R: 57.39075, d: 1.179, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "9", R: -143.3475, d: 3.069, nd: 1.7725, elemId: 6, sd: 9.0 },
    { label: "10", R: -28.8747, d: 5.931, nd: 1.0, elemId: 0, sd: 11.25 },
    { label: "11", R: -13.39335, d: 1.782, nd: 1.58144, elemId: 7, sd: 12.0 },
    { label: "12", R: -24.1605, d: 27.3825, nd: 1.0, elemId: 0, sd: 15.0 },
  ],

  asph: {},

  var: {
    "12": [27.3825, 30.8265],
  },

  varLabels: [["12", "BF"]],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "8" },
    { text: "G4", fromSurface: "9", toSurface: "10" },
    { text: "G5", fromSurface: "11", toSurface: "12" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  closeFocusM: 0.7,
  focusDescription:
    "Unit-focus model: the patent gives only the infinity prescription; close focus is modeled by increasing BFD by 3.444 mm for a 0.7 m film-plane-to-subject distance.",

  nominalFno: 4,
  fstopSeries: [4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.5,
  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
