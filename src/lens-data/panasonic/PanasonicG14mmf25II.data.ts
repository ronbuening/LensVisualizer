import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — PANASONIC LUMIX G 14mm f/2.5 II ASPH          ║
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
 * ║    Patent-listed effective diameters are used as semi-diameters.     ║
 * ║    Surface 7 is padded from 3.396 mm to 3.477 mm so the rendered L3  ║
 * ║    element satisfies the project element-SD-ratio limit without      ║
 * ║    reducing a patent-listed downstream clear aperture.               ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "panasonic-g-14mm-f25-ii",
  maker: "Panasonic",
  name: "PANASONIC LUMIX G 14mm f/2.5 II ASPH",
  subtitle: "US 2013/0148006 A1 — Numerical Example 1",
  specs: [
    "6 elements / 5 groups",
    "f = 14.5456 mm design; 14 mm nominal",
    "F2.5 nominal; F2.521 design",
    "75° diagonal angle of view",
    "5 aspherical surfaces on 3 lenses",
  ],

  focalLengthMarketing: 14,
  focalLengthDesign: 14.5456,
  apertureMarketing: 2.5,
  apertureDesign: 2.52134,
  lensMounts: ["micro-four-thirds"],
  imageFormat: "four-thirds",
  patentNumber: "US 2013/0148006 A1",
  patentAuthors: ["Shunichiro Yoshinaga", "Kyoichi Miyazaki", "Takao Yamanaka", "Keiichi Zaitsu"],
  patentAssignees: ["Panasonic Corporation"],
  patentYear: 2013,
  elementCount: 6,
  groupCount: 5,
  apertureBlades: 7,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.58332,
      vd: 59.1,
      fl: -16.714,
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
      fl: 16.964,
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
      fl: -8.159,
      glass: "S-TIH53 / FDS90 class (847/238 dense flint)",
      apd: false,
      cemented: "D1",
      role: "Negative high-dispersion member of the moving focus-unit achromat.",
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
      cemented: "D1",
      role: "Explicit 0.01 mm adhesive medium between L3 and L4 as published in the patent.",
    },
    {
      id: 5,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      fl: 11.834,
      glass: "S-LAH58 / TAFD30 class (883/408 lanthanum dense flint)",
      apd: false,
      cemented: "D1",
      role: "Positive member of the moving cemented achromat; balances L3 dispersion while adding focus-unit power.",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.5825,
      vd: 59.4,
      fl: 13.651,
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
      fl: -60.845,
      glass: "Unmatched dense flint (684/313; nearest S-TIM28 / M-FD80 class is 689/311)",
      apd: false,
      role: "Fixed negative rear unit; lengthens back focus and trims peripheral astigmatism/field curvature.",
    },
  ],

  surfaces: [
    { label: "1A", R: 150.1369, d: 0.7, nd: 1.58332, elemId: 1, sd: 6.069 },
    { label: "2A", R: 9.1393, d: 1.5825, nd: 1.0, elemId: 0, sd: 5.16 },
    { label: "3", R: 14.9173, d: 1.73, nd: 1.91082, elemId: 2, sd: 4.829 },
    { label: "4", R: 408.0238, d: 1.863, nd: 1.0, elemId: 0, sd: 5.036 },
    { label: "STO", R: 1e15, d: 4.9334, nd: 1.0, elemId: 0, sd: 3.11 },
    { label: "7", R: -5.7312, d: 0.5, nd: 1.84666, elemId: 3, sd: 3.477 },
    { label: "8", R: -35.0, d: 0.01, nd: 1.56732, elemId: 4, sd: 4.346 },
    { label: "9", R: -35.0, d: 2.83, nd: 1.883, elemId: 5, sd: 4.353 },
    { label: "10", R: -8.3519, d: 0.2, nd: 1.0, elemId: 0, sd: 5.227 },
    { label: "11A", R: 25.0833, d: 4.58, nd: 1.5825, elemId: 6, sd: 7.073 },
    { label: "12A", R: -10.86, d: 1.45, nd: 1.0, elemId: 0, sd: 7.371 },
    { label: "13", R: -611.6969, d: 0.8, nd: 1.684, elemId: 7, sd: 7.49 },
    { label: "14A", R: 44.6801, d: 16.1399, nd: 1.0, elemId: 0, sd: 7.526 },
  ],

  asph: {
    "1A": {
      K: 0,
      A4: -3.85e-5,
      A6: 1.82e-6,
      A8: -9.53e-8,
      A10: 1.88e-9,
      A12: -1.12e-11,
      A14: 0,
    },
    "2A": {
      K: 0,
      A4: -1.3e-4,
      A6: -6.84e-7,
      A8: -3.09e-8,
      A10: -2.92e-9,
      A12: 9.26e-11,
      A14: 0,
    },
    "11A": {
      K: 0,
      A4: -1.88e-5,
      A6: -7.59e-7,
      A8: 2.03e-8,
      A10: -1.45e-10,
      A12: 0,
      A14: 0,
    },
    "12A": {
      K: 0,
      A4: 2.69e-4,
      A6: -4.5e-6,
      A8: 1.05e-7,
      A10: -1.05e-9,
      A12: 4.67e-12,
      A14: 0,
    },
    "14A": {
      K: 0,
      A4: -9.05e-5,
      A6: 4.19e-6,
      A8: -8.41e-8,
      A10: 9.16e-10,
      A12: -4.09e-12,
      A14: 0,
    },
  },

  var: {
    STO: [4.9334, 4.024496721291],
    "12A": [1.45, 2.358903278709],
  },

  varLabels: [
    ["STO", "D(STO–L3)"],
    ["12A", "D(L5–L6)"],
  ],

  groups: [
    { text: "G1 fixed +", fromSurface: "1A", toSurface: "4" },
    { text: "G2 focus +", fromSurface: "7", toSurface: "12A" },
    { text: "G3 fixed −", fromSurface: "13", toSurface: "14A" },
  ],

  doublets: [{ text: "D1", fromSurface: "7", toSurface: "10" }],

  closeFocusM: 0.18,
  focusDescription:
    "Inner focus: front unit and rear unit fixed; positive G2 moves 0.909 mm toward the object at 0.18 m. Close spacings are paraxially inferred from official 0.10× magnification because the patent publishes only infinity spacing.",

  nominalFno: 2.5,
  fstopSeries: [2.5, 2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.44,
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
