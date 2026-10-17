import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — PANASONIC LUMIX G 14mm f/2.5 II ASPH.          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2013/0148006 A1, Numerical Example 1.              ║
 * ║  Compact Micro Four Thirds wide-angle prime with inner focus.        ║
 * ║  6 glass elements / 5 air-spaced groups, 5 aspherical surfaces.      ║
 * ║  Focus: fixed G1 and G3; G2 (L3-C1-L4-L5) moves object-side.         ║
 * ║                                                                      ║
 * ║  NOTE ON OPTICALLY NEUTRAL PATENT SURFACES:                         ║
 * ║    Patent surface 6 is a flare-cut diaphragm in air. It has no       ║
 * ║    optical power and is omitted here as a mechanical stop; its       ║
 * ║    air spacing is folded into the STO-to-L3 gap.                     ║
 * ║                                                                      ║
 * ║  NOTE ON CEMENT:                                                     ║
 * ║    Patent surface 8 is a 0.01 mm adhesive layer (nd=1.56732). It is  ║
 * ║    modeled explicitly as C1 to preserve the patent paraxial values.  ║
 * ║                                                                      ║
 * ║  NOTE ON FOCUS SPACINGS:                                             ║
 * ║    The patent publishes only infinity spacings. Close-focus spacings ║
 * ║    are paraxially inferred from the official MFD 0.18 m,             ║
 * ║    magnification 0.10x, constant total track, and the patent's       ║
 * ║    single positive moving focus group.                               ║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS:                                             ║
 * ║    Patent-listed effective diameters of the lens surfaces are used   ║
 * ║    as semi-diameters; the stop radius is derived from the design     ║
 * ║    f-number.                                                         ║
 * ║    Surface 7 is padded from 3.396 mm to 3.477 mm so the rendered L3  ║
 * ║    element satisfies the project element-SD-ratio limit without      ║
 * ║    reducing a patent-listed downstream clear aperture.               ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "panasonic-g-14mm-f25-ii",
  maker: "Panasonic",
  name: "PANASONIC LUMIX G 14mm f/2.5 II ASPH.",
  subtitle: "US 2013/0148006 A1 — Numerical Example 1",

  catalog: {
    lensMounts: ["micro-four-thirds"],
    imageFormat: "four-thirds",
    specs: [
      "6 elements / 5 groups",
      "f = 14.5456 mm design; 14 mm nominal",
      "F2.5 nominal; F2.521 design",
      "75° diagonal angle of view",
      "5 aspherical surfaces on 3 lenses",
    ],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: { marketing: 14, design: 14.5456 },
    fNumber: { marketing: 2.5, design: 2.52134 },
  },

  source: {
    patentNumber: "US 2013/0148006 A1",
    patentYear: 2013,
    authors: ["Shunichiro Yoshinaga", "Kyoichi Miyazaki", "Takao Yamanaka", "Keiichi Zaitsu"],
    assignees: ["Panasonic Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58332,
      vd: 59.1,
      focalLengthMm: -16.714,
      glass: "S-BAL42 / L-BAL42 / M-BACD12 class (583/594 barium crown; patent nd=1.58332)",
      apd: false,
      role: "Aspherical leading negative meniscus; controls oblique astigmatism in the compact wide-angle front unit.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.91082,
      vd: 35.2,
      focalLengthMm: 16.964,
      glass: "TAFD35 class (911/353 high-index lanthanum glass)",
      apd: false,
      role: "High-index positive meniscus completing the weakly positive fixed front unit.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -8.159,
      glass: "S-TIH53 / FDS90 class (847/238 dense flint)",
      apd: false,
      role: "Negative high-dispersion member of the moving focus-unit achromat.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "C1",
      label: "Adhesive layer",
      type: "Optical Cement Layer",
      nd: 1.56732,
      vd: 42.8,
      glass: "UV-curing optical cement (patent-listed nd=1.56732, νd=42.8)",
      apd: false,
      role: "Explicit 0.01 mm adhesive medium between L3 and L4 as published in the patent.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 11.834,
      glass: "S-LAH58 / TAFD30 class (883/408 lanthanum dense flint)",
      apd: false,
      role: "Positive member of the moving cemented achromat; balances L3 dispersion while adding focus-unit power.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.5825,
      vd: 59.4,
      focalLengthMm: 13.651,
      glass: "S-BAL42 / L-BAL42 / M-BACD12 class (583/594 barium crown; patent nd=1.58250)",
      apd: false,
      role: "High-power aspherical positive singlet in the moving focus unit; primary spherical-aberration and coma control.",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.684,
      vd: 31.3,
      focalLengthMm: -60.845,
      glass: "Unmatched dense flint (684/313; nearest S-TIM28 / M-FD80 class is 689/311)",
      apd: false,
      role: "Fixed negative rear unit; lengthens back focus and trims peripheral astigmatism/field curvature.",
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 150.1369,
      d: 0.7,
      sd: 6.069,
      medium: 1,
      asphere: { K: 0, A4: -3.85e-5, A6: 1.82e-6, A8: -9.53e-8, A10: 1.88e-9, A12: -1.12e-11 },
    },
    {
      label: "2A",
      R: 9.1393,
      d: 1.5825,
      sd: 5.16,
      asphere: { K: 0, A4: -1.3e-4, A6: -6.84e-7, A8: -3.09e-8, A10: -2.92e-9, A12: 9.26e-11 },
    },
    { label: "3", R: 14.9173, d: 1.73, sd: 4.829, medium: 2 },
    { label: "4", R: 408.0238, d: 1.863, sd: 5.036 },
    // Patent Table 1 (Numerical Example 1), surface 5 (Diaphragm), prints a 3.110 mm "effective diameter";
    // read as a semi-diameter (the convention used for the lens surfaces), it matches the derived 3.110 mm radius.
    { label: "STO", R: "flat" },
    { label: "7", R: -5.7312, d: 0.5, sd: 3.477, medium: 3 },
    { label: "8", R: -35.0, d: 0.01, sd: 4.346, medium: 4 },
    { label: "9", R: -35.0, d: 2.83, sd: 4.353, medium: 5 },
    { label: "10", R: -8.3519, d: 0.2, sd: 5.227 },
    {
      label: "11A",
      R: 25.0833,
      d: 4.58,
      sd: 7.073,
      medium: 6,
      asphere: { K: 0, A4: -1.88e-5, A6: -7.59e-7, A8: 2.03e-8, A10: -1.45e-10, A12: 0 },
    },
    {
      label: "12A",
      R: -10.86,
      sd: 7.371,
      asphere: { K: 0, A4: 2.69e-4, A6: -4.5e-6, A8: 1.05e-7, A10: -1.05e-9, A12: 4.67e-12 },
    },
    { label: "13", R: -611.6969, d: 0.8, sd: 7.49, medium: 7 },
    {
      label: "14A",
      R: 44.6801,
      d: 16.1399,
      sd: 7.526,
      asphere: { K: 0, A4: -9.05e-5, A6: 4.19e-6, A8: -8.41e-8, A10: 9.16e-10, A12: -4.09e-12 },
    },
  ],

  focus: {
    closeFocusM: 0.18,
    description:
      "Inner focus: front unit and rear unit fixed; positive G2 moves 0.909 mm toward the object at 0.18 m. Close spacings are paraxially inferred from official 0.10× magnification because the patent publishes only infinity spacing.",
  },

  gaps: {
    STO: { label: "D(STO–L3)", values: [[4.9334, 4.024496721291]] },
    "12A": { label: "D(L5–L6)", values: [[1.45, 2.358903278709]] },
  },

  aperture: { nominalFNumber: 2.52134, fStops: [2.52134, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  groups: [
    { text: "G1 fixed +", fromSurface: "1A", toSurface: "4" },
    { text: "G2 focus +", fromSurface: "7", toSurface: "12A" },
    { text: "G3 fixed −", fromSurface: "13", toSurface: "14A" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "10" }],

  layout: { scFill: 0.44, yScFill: 0.44 },
} satisfies LensDataV2Input;

export default LENS_DATA;
