import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║         LENS DATA — Carl Zeiss B-Distagon 35mm f/4                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 3,038,380, sole numerical example.                ║
 * ║  Asymmetric all-spherical retrofocus objective for Contarex.        ║
 * ║  7 elements / 4 groups, 0 aspherical surfaces.                     ║
 * ║  Focus: unit focus; close-focus BFD inferred from 15 in film-plane  ║
 * ║  specification in the Contarex booklet.                            ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    Patent data are normalized to f = 1. All radii and thicknesses   ║
 * ║    are scaled ×35 to represent the 35 mm Contarex production lens.  ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                             ║
 * ║    The patent gives the stop only as D in the d5 air space. The     ║
 * ║    d5 air space is split 2.10000 / 3.17275 mm from the patent       ║
 * ║    drawing; total d5 remains the patent value after scaling.        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent omits semi-diameters. These values are constrained    ║
 * ║    by paraxial marginal/chief rays, element edge thickness,         ║
 * ║    sd/|R| < 0.90, cross-gap sag intrusion, and ≤1.25 element SD     ║
 * ║    ratios where physically practical.                              ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "zeiss-distagon-35mm-f4-contarex",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS B-DISTAGON 35mm f/4 (Contarex)",
  subtitle: "US 3,038,380 — Eismann / Lange",

  catalog: {
    lensMounts: ["zeiss-contarex"],
    imageFormat: "135-full-frame",
    specs: ["7 elements / 4 groups", "f = 35 mm", "F/4", "2ω = 64°", "all spherical"],
    elementCount: 7,
    groupCount: 4,
    focalLengthMm: { marketing: 35, design: 34.9995 },
    fNumber: { marketing: 4, design: 4 },
  },

  source: {
    patentNumber: "US 3,038,380",
    patentYear: 1962,
    authors: ["Helmut Eismann", "Günther Lange"],
    assignees: ["Carl-Zeiss-Stiftung"],
  },

  elements: [
    {
      id: 1,
      name: "LI",
      label: "LI",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      focalLengthMm: 29.667,
      glass: "N-SK16 / SK16 (Schott)",
      role: "Positive crown member of the negative retrofocus front cemented doublet.",
      cemented: "C1",
    },
    {
      id: 2,
      name: "LII",
      label: "LII",
      type: "Biconcave Negative",
      nd: 1.50137,
      vd: 56.5,
      focalLengthMm: -17.185,
      glass: "K10 (Schott)",
      role: "Negative rear member of the front cemented doublet; provides the main front-group divergence.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "LIII",
      label: "LIII",
      type: "Positive Meniscus",
      nd: 1.7552,
      vd: 27.5,
      focalLengthMm: 69.678,
      glass: "SF4 (Schott)",
      role: "High-index dense-flint positive collector immediately in front of the diaphragm.",
    },
    {
      id: 4,
      name: "LIV",
      label: "LIV",
      type: "Positive Meniscus",
      nd: 1.6516,
      vd: 58.4,
      focalLengthMm: 17.433,
      glass: "N-LAK7 / LAK7 (Schott)",
      role: "Front positive lanthanum crown member of the post-stop cemented triplet.",
      cemented: "C2",
    },
    {
      id: 5,
      name: "LV",
      label: "LV",
      type: "Biconcave Negative",
      nd: 1.72339,
      vd: 38,
      focalLengthMm: -8.358,
      glass: "BAFD8 / S-BAH28 class (723/380; patent vendor not named)",
      role: "Central high-index dispersive member of the rear cemented triplet.",
      cemented: "C2",
    },
    {
      id: 6,
      name: "LVI",
      label: "LVI",
      type: "Biconvex Positive",
      nd: 1.66672,
      vd: 48.4,
      focalLengthMm: 16.087,
      glass: "BAFN11 / BAF11 / S-BAH11 class (667/484; patent vendor not named)",
      role: "Rear positive member of the post-stop triplet; completes the triplet chromatic correction.",
      cemented: "C2",
    },
    {
      id: 7,
      name: "LVII",
      label: "LVII",
      type: "Positive Meniscus",
      nd: 1.69067,
      vd: 54.9,
      focalLengthMm: 44.351,
      glass: "N-LAK9 / LAK9 (Schott)",
      role: "Final positive meniscus and rear field-shaping element before the long back focal distance.",
    },
  ],

  surfaces: [
    { label: "1", R: 24.81045, d: 6.50615, sd: 12.8, medium: 1 },
    { label: "2", R: -64.1403, d: 1.3034, sd: 10.3, medium: 2 },
    { label: "3", R: 10.02085, d: 3.8997, sd: 8.3 },
    { label: "4", R: 33.56395, d: 8.05805, sd: 8.75, medium: 3 },
    { label: "5", R: 83.1047, d: 2.1, sd: 7.0 },
    { label: "STO", R: "flat", d: 3.17275 },
    { label: "6", R: -18.73865, d: 2.60645, sd: 7.25, medium: 4 },
    { label: "7", R: -7.46025, d: 0.7959, sd: 5.8, medium: 5 },
    { label: "8", R: 33.3242, d: 4.33755, sd: 7.25, medium: 6 },
    { label: "9", R: -14.99225, d: 0.0994, sd: 9.06 },
    { label: "10", R: -105.38325, d: 2.1686, sd: 10.0, medium: 7 },
    { label: "11", R: -23.933, sd: 10.0 },
  ],

  focus: {
    closeFocusM: 0.381,
    description: "Unit focus; close-focus back focus inferred from the Contarex 15 in film-plane specification.",
  },

  gaps: { "11": { label: "BF", values: [[40.6455, 44.7555]] } },

  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "3" },
    { text: "II", fromSurface: "4", toSurface: "5" },
    { text: "III", fromSurface: "6", toSurface: "9" },
    { text: "IV", fromSurface: "10", toSurface: "11" },
  ],
  doublets: [
    { text: "C1", fromSurface: "1", toSurface: "3" },
    { text: "C2", fromSurface: "6", toSurface: "9" },
  ],

  layout: { scFill: 0.58, yScFill: 0.44 },
} satisfies LensDataV2Input;

export default LENS_DATA;
