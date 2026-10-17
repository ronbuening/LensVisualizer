import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — FUJIFILM GA645 PROFESSIONAL SUPER EBC FUJINON 60/4     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 5,548,447, Example 1, Table I (Toyama / Fuji).     ║
 * ║  Compact all-spherical lens-shutter wide-angle design.              ║
 * ║  7 elements / 6 groups, rear cemented doublet, 0 aspherical         ║
 * ║  surfaces.                                                          ║
 * ║  Focus: patent publishes only the infinity prescription; this file  ║
 * ║  models the production camera as inferred unit focus by varying the ║
 * ║  final back-focus distance.                                         ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent prescription is normalized to f = 100.00 mm. All radii,   ║
 * ║    center thicknesses, air spaces, BFD, and inferred semi-diameters ║
 * ║    are scaled by ×0.6 for the 60 mm GA645 production lens.          ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                             ║
 * ║    The patent locates the diaphragm in d8 between L4 and L5 but     ║
 * ║    gives no axial split. The stop is placed at the midpoint of d8   ║
 * ║    for rendering and f-number modeling.                             ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    Semi-diameters are conservative renderer estimates, constrained  ║
 * ║    by paraxial marginal/chief-ray heights, sd/|R| < 0.90, element   ║
 * ║    SD ratio <= 1.25, positive edge thickness, and signed cross-gap  ║
 * ║    sag clearance. They are not manufacturer-published clear         ║
 * ║    aperture values.                                                 ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "fujifilm-ga645-pro-60mm-f4",
  maker: "Fujifilm",
  name: "FUJIFILM SUPER EBC FUJINON 60mm f/4 (Fujifilm GA645 Professional)",
  subtitle: "US 5,548,447 Example 1 — Fuji Photo Optical / Nobuaki Toyama",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "645",
    specs: [
      "7 elements / 6 groups",
      "f = 59.998 mm (patent f=100 scaled ×0.6)",
      "f/4",
      "2ω = 59.2° patent; 60° camera specification",
      "all-spherical",
      "unit-focus model to 0.7 m",
    ],
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: { marketing: 60, design: 59.9983 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: {
    patentNumber: "US 5,548,447",
    patentYear: 1996,
    authors: ["Nobuaki Toyama"],
    assignees: ["Fuji Photo Optical Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.34,
      focalLengthMm: 71.8,
      glass: "NBFD10 (HOYA; 834/373; S-LAH60V-class equivalent)",
      apd: false,
      role: "High-index front positive meniscus; begins the collector section and participates in stop-symmetric aberration balancing with L5.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7859,
      vd: 43.93,
      focalLengthMm: 69.3,
      glass: "NBFD11 (HOYA; 786/439; S-LAH51-class equivalent)",
      apd: false,
      role: "Second front positive meniscus; distributes the front positive power across the L1-L2 pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.5,
      focalLengthMm: -29.4,
      glass: "FD60 (HOYA; 805/255; S-TIH6 equivalent)",
      apd: false,
      role: "High-dispersion negative meniscus; primary front-group achromatizing and Petzval-correction element.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.72342,
      vd: 37.99,
      focalLengthMm: 82.1,
      glass: "BAFD8 (HOYA; 723/380; S-BAH28 equivalent)",
      apd: false,
      role: "Final front-group positive meniscus; completes the positive front group before the shutter/diaphragm space.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.834,
      vd: 37.34,
      focalLengthMm: 80.5,
      glass: "NBFD10 (HOYA; 834/373; S-LAH60V-class equivalent)",
      apd: false,
      role: "Principal rear-group positive element; quasi-symmetric counterpart to L1 across the stop.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.9,
      focalLengthMm: -23.8,
      glass: "E-FD2 class (HOYA; 648/338; patent νd = 33.90)",
      apd: false,
      role: "Negative component of the rear cemented doublet; supplies local chromatic and field correction.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.7859,
      vd: 43.93,
      focalLengthMm: 26.9,
      glass: "NBFD11 (HOYA; 786/439; S-LAH51-class equivalent)",
      apd: false,
      role: "Positive component of the rear cemented doublet; balances L6 so the doublet remains nearly afocal.",
      cemented: "D1",
    },
  ],

  surfaces: [
    { label: "1", R: 18.597, d: 2.442, sd: 14.0, medium: 1 },
    { label: "2", R: 25.3692, d: 0.096, sd: 13.6 },
    { label: "3", R: 17.9484, d: 2.91, sd: 9.7, medium: 2 },
    { label: "4", R: 24.8694, d: 0.324, sd: 7.8 },
    { label: "5", R: 31.839, d: 0.972, sd: 7.8, medium: 3 },
    { label: "6", R: 13.3884, d: 1.986, sd: 8.2 },
    { label: "7", R: 32.5086, d: 2.676, sd: 8.2, medium: 4 },
    { label: "8", R: 69.3306, d: 3.444, sd: 8.8 },
    { label: "STO", R: "flat", d: 3.444 },
    { label: "9", R: -31.6698, d: 2.082, sd: 8.4, medium: 5 },
    { label: "10", R: -22.1628, d: 0.96, sd: 7.8 },
    { label: "11", R: -14.5392, d: 1.02, sd: 7.8, medium: 6 },
    // Common cemented interface: patent R12/R13 = -453.111 at f=100; duplicate zero gap omitted.
    { label: "12", R: -271.8666, d: 4.194, sd: 9.6, medium: 7 },
    { label: "14", R: -19.728, sd: 11.9 },
  ],

  focus: {
    closeFocusM: 0.7,
    description:
      "Inferred unit focus. The patent gives no variable-spacing table; close focus is modeled by increasing the final BFD from 44.4518 mm to 50.7215 mm for a 0.7 m film-plane subject distance.",
  },

  gaps: { "14": { label: "BF", values: [[44.4518, 50.7215]] } },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "8" },
    { text: "G2", fromSurface: "9", toSurface: "14" },
  ],
  doublets: [{ text: "D1", fromSurface: "11", toSurface: "14" }],

  layout: { scFill: 0.56, yScFill: 0.48 },
} satisfies LensDataV2Input;

export default LENS_DATA;
