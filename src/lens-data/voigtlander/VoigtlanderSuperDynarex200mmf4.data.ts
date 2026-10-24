import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — VOIGTLÄNDER SUPER-DYNAREX 200mm f/4 (Bessamatic)              ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,388,956, Example 1 / Figure 2 (Eggert, Tronnier,         ║
 * ║  Ueberhagen; Voigtländer AG).                                               ║
 * ║  Production correlation: Bessamatic / Ultramatic Super-Dynarex 200mm f/4,  ║
 * ║  5 elements / 4 groups, 12.5° diagonal, DKL mount, 24×36 mm format.        ║
 * ║  Example 4 of the same patent is also a 5-element f/4 design; Example 1 is  ║
 * ║  the selected embodiment and is not claimed as the factory prescription.   ║
 * ║                                                                            ║
 * ║  SCALE: The patent table is normalized to f = 1.00. Every radius and axial ║
 * ║  distance is scaled ×200; the computed Gaussian EFL is 199.868 mm.          ║
 * ║                                                                            ║
 * ║  STOP: Printed. The patent splits the large air space a3 = 0.52203 into     ║
 * ║  a3V = 0.40290 before and a3H = 0.11913 after the diaphragm (80.58 mm +    ║
 * ║  23.826 mm here). The stop radius is derived by the engine from f/4.       ║
 * ║                                                                            ║
 * ║  BACK FOCUS: The printed intercept s′ = 0.20324 (40.648 mm) is kept as the ║
 * ║  last gap; the scaled prescription computes a paraxial BFD of 40.619 mm.   ║
 * ║                                                                            ║
 * ║  FOCUS: Infinity only. The patent publishes no focus state; the 8.5 m      ║
 * ║  close-focus figure from collector compilations is metadata only.          ║
 * ║                                                                            ║
 * ║  SEMI-DIAMETERS: Not published. Values follow the Figure 2 silhouette      ║
 * ║  (axial scale from the first-to-last vertex length) and were checked to    ║
 * ║  pass the f/4 axial bundle and the 21.6 mm full-field chief ray.           ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "voigtlander-super-dynarex-200mm-f4",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER SUPER-DYNAREX 200mm f/4 (Bessamatic)",
  subtitle: "US 3,388,956 Example 1 — correlated to the Bessamatic Super-Dynarex 200mm f/4",

  catalog: {
    lensMounts: ["dkl"],
    imageFormat: "135-full-frame",
    specs: ["5 ELEMENTS / 4 GROUPS", "200mm f/4", "12.5° DIAGONAL (MARKETED)", "DKL / BESSAMATIC", "ALL-SPHERICAL"],
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: { marketing: 200, design: 199.87 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: {
    patentNumber: "US 3,388,956 A",
    patentYear: 1968,
    authors: ["Joachim Eggert", "Ernst Tronnier", "Fritz Ueberhagen"],
    assignees: ["Voigtländer AG"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6425,
      vd: 58.09,
      indexReference: "d",
      focalLengthMm: 90.6074,
      glass: "LAK6 (Sumita; coordinate-equivalent lanthanum crown, 1964 melt vendor not stated)",
      apd: false,
      cemented: "D1",
      role: "Converging lens of the front tele-positive group; carries most of the system's positive power (φI = +2.25Φ).",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7283,
      vd: 28.66,
      indexReference: "d",
      focalLengthMm: -254.8516,
      glass: "Unmatched (728/287 SF10-class dense flint; nearest catalog SF10 differs by 0.25 in νd)",
      apd: false,
      cemented: "D1",
      role: "First diverging lens; dense-flint partner that achromatizes L1 in the cemented front doublet.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.65446,
      vd: 33.79,
      indexReference: "d",
      focalLengthMm: -567.0819,
      glass: "SF9 (Hikari; coordinate-equivalent dense flint, 1964 melt vendor not stated)",
      apd: false,
      role: "Second diverging lens of the tele-positive; forms the diverging air lens a2 with L2 and bounds the large air space.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.75787,
      vd: 31.56,
      indexReference: "d",
      focalLengthMm: 125.8645,
      glass: "Unmatched (758/316 dense flint; no catalog glass within 0.0001 in nd)",
      apd: false,
      role: "Converging front element of the rear tele-negative group; with L3 it encloses the strongly positive large air lens.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.65016,
      vd: 39.31,
      indexReference: "d",
      focalLengthMm: -65.9946,
      glass: "BAFD10 (Hoya; coordinate-equivalent barium dense flint, 1964 melt vendor not stated)",
      apd: false,
      role: "Strong negative rear element (φV = −3.02Φ) that sets the telephoto power and flattens the field.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 84.312, d: 13.352, sd: 35, medium: 1 },
    { label: "2", R: -176.428, d: 3.89, sd: 35, medium: 2 },
    { label: "3", R: -3600.146, d: 2.366, sd: 35 },
    { label: "4", R: -274.576, d: 3.89, sd: 32.1, medium: 3 },
    { label: "5", R: -1061.298, d: 80.58, sd: 32.1 },
    // Printed diaphragm position: a3V = 0.40290 and a3H = 0.11913 of the a3 = 0.52203 air space.
    { label: "STO", R: "flat", d: 23.826 },
    { label: "6", R: 68.404, d: 4.468, sd: 11.5, medium: 4 },
    { label: "7", R: 234.992, d: 7.718, sd: 11.5 },
    { label: "8", R: -62.138, d: 1.052, sd: 10.5, medium: 5 },
    // Printed intercept s′ = 0.20324 kept; paraxial BFD of the scaled table is 40.619 mm.
    { label: "9", R: 139.564, d: 40.648, sd: 10.5 },
  ],

  focus: {
    closeFocusM: 8.5,
    description:
      "The patent provides only an infinity prescription; the 8.5 m minimum focus distance from collector listings is not modeled.",
  },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

  groups: [
    { text: "A", fromSurface: "1", toSurface: "5" },
    { text: "B", fromSurface: "6", toSurface: "9" },
  ],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],

  layout: { scFill: 0.65, yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
