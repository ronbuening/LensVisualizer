import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║          LENS DATA — Carl Zeiss Distagon T* 28mm f/2               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: DE 2359156 A1, Beispiel 12, Figure 7.                ║
 * ║  Erhard Glatzel / Carl Zeiss high-speed retrofocus wide-angle.     ║
 * ║  9 elements / 8 air-spaced groups, all spherical surfaces.         ║
 * ║  Focus: production lens uses floating close-range correction, but  ║
 * ║  the patent publishes only the infinity-focus prescription.        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent values are normalized to F = 1.0000.  All radii and      ║
 * ║    thicknesses below are scaled by 28.8 mm, the focal length       ║
 * ║    listed in the historical Carl Zeiss Contax/Yashica data sheet.  ║
 * ║    The marketed focal length remains 28 mm.                        ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    DE 2359156 A1 does not list clear apertures.  Semi-diameters    ║
 * ║    are conservative inferred values constrained by the patent      ║
 * ║    figure, the 55 mm production filter thread, rim slope, element  ║
 * ║    edge thickness, and cross-gap sag intrusion.                    ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE:                                                 ║
 * ║    The patent prescription is f/2.1. The nominal and design        ║
 * ║    f-numbers retain f/2.1, from which the stop radius is derived;  ║
 * ║    the marketing aperture remains f/2.                             ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "zeiss-distagon-28mm-f2",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS DISTAGON T* 28mm f/2",
  subtitle: "DE 2359156 A1 Example 12 — Erhard Glatzel / Carl Zeiss",

  catalog: {
    lensMounts: ["contax-yashica"],
    imageFormat: "135-full-frame",
    specs: ["9 elements / 8 groups", "f = 28.8 mm design", "f/2 marketed; f/2.1 patent", "2ω = 74.5°", "all-spherical"],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: { marketing: 28, design: 28.8 },
    fNumber: { marketing: 2, design: 2.1 },
  },

  source: {
    patentNumber: "DE 2359156 A1",
    patentYear: 1975,
    authors: ["Erhard Glatzel"],
    assignees: ["Carl-Zeiss-Stiftung"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front negative meniscus",
      type: "Negative Meniscus",
      nd: 1.63854,
      vd: 55.38,
      focalLengthMm: -47.63,
      glass: "SK18A / N-SK18 class (Schott, 639554; patent νd retained)",
      role: "Weak front diverging meniscus N,B in the object-side B group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Front positive collector",
      type: "Positive Meniscus",
      nd: 1.66446,
      vd: 35.84,
      focalLengthMm: 189.54,
      glass: "J-BASF2 (HIKARI catalog equivalent; production supplier unspecified; patent νd retained)",
      role: "Thick, low-power positive meniscus completing the object-side B group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Pre-stop negative meniscus",
      type: "Negative Meniscus",
      nd: 1.744,
      vd: 44.77,
      focalLengthMm: -102.63,
      glass: "LAF2 / N-LAF2 class (Schott, 744448; patent values retained)",
      role: "Negative meniscus N,A in the stop-side A group.",
    },
    {
      id: 4,
      name: "L4a",
      label: "Positive doublet front element",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.77,
      focalLengthMm: 18.71,
      glass: "LAF2 / N-LAF2 class (Schott, 744448; patent values retained)",
      role: "Dominant positive element of the cemented doublet in group A.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L4b",
      label: "Negative doublet rear element",
      type: "Biconcave Negative",
      nd: 1.60562,
      vd: 43.92,
      focalLengthMm: -31.25,
      glass: "BAF4 / N-BAF4 class (Schott, 606439; patent values retained)",
      role: "Negative cemented partner that relaxes the strong L4a power and contributes Petzval correction.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L4c",
      label: "Air-spaced positive singlet",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.42,
      focalLengthMm: 45.29,
      glass: "LAC10 (HOYA catalog equivalent; production supplier unspecified; patent values retained)",
      role: "Secondary positive collector immediately ahead of the central stop space.",
    },
    {
      id: 7,
      name: "L5",
      label: "Post-stop negative element",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.43,
      focalLengthMm: -19.99,
      glass: "SF6 (Schott legacy, 805254)",
      role: "Strong negative dense-flint element behind the stop, central to retrofocus throw and chromatic balance.",
    },
    {
      id: 8,
      name: "L6",
      label: "Rear positive meniscus 1",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.85,
      focalLengthMm: 57.38,
      glass: "LAK8 / N-LAK8 class (Schott, 713538; patent values retained)",
      role: "First positive rear meniscus after the strong negative element.",
    },
    {
      id: 9,
      name: "L7",
      label: "Rear positive meniscus 2",
      type: "Positive Meniscus",
      nd: 1.78831,
      vd: 47.37,
      focalLengthMm: 48.31,
      glass: "LAF21 / N-LAF21 class (Schott, 788474; patent values retained)",
      role: "Final positive meniscus; supplies final convergence and rear-field correction.",
    },
  ],

  surfaces: [
    { label: "1", R: 76.624128, d: 1.589962, sd: 18.5, medium: 1 },
    { label: "2", R: 21.595392, d: 11.049725, sd: 15.0 },
    { label: "3", R: -64.936512, d: 11.869718, sd: 19.0, medium: 2 },
    { label: "4", R: -45.972, d: 0.049997, sd: 19.0 },
    { label: "5", R: 30.286368, d: 2.299939, sd: 18.5, medium: 3 },
    { label: "6", R: 20.982528, d: 7.109827, sd: 15.0 },
    { label: "7", R: 31.850208, d: 9.0, sd: 16.5, medium: 4 },
    { label: "8", R: -21.751488, d: 6.859843, sd: 13.6, medium: 5 },
    { label: "9", R: 163.116, d: 4.999882, sd: 14.5 },
    { label: "10", R: 135.286848, d: 5.969866, sd: 11.3, medium: 6 },
    { label: "11", R: -42.16896, d: 0.001, sd: 9.1 },
    { label: "STO", R: "flat", d: 1.758968 },
    { label: "12", R: -25.851456, d: 7.769808, sd: 8.85, medium: 7 },
    { label: "13", R: 48.346848, d: 2.059949, sd: 10.4 },
    { label: "14", R: -125.887104, d: 2.879942, sd: 12.0, medium: 8 },
    { label: "15", R: -31.17024, d: 0.099994, sd: 10.8 },
    { label: "16", R: -728.60256, d: 3.029933, sd: 10.8, medium: 9 },
    { label: "17", R: -36.255168, sd: 13.3 },
  ],

  focus: {
    closeFocusM: 0.24,
    description:
      "Production Contax/Yashica literature identifies floating close-range correction, but DE 2359156 A1 Example 12 provides only the infinity-focus prescription; the model keeps the infinity BFD fixed.",
  },

  gaps: { "17": { label: "BF", values: [[36.539184, 36.539184]] } },

  aperture: { nominalFNumber: 2.1, fStops: [2.1, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "B", fromSurface: "1", toSurface: "4" },
    { text: "A", fromSurface: "5", toSurface: "11" },
    { text: "N", fromSurface: "12", toSurface: "13" },
    { text: "Rear", fromSurface: "14", toSurface: "17" },
  ],
  doublets: [{ text: "D1", fromSurface: "7", toSurface: "9" }],

  layout: { scFill: 0.5, yScFill: 0.45 },
} satisfies LensDataV2Input;

export default LENS_DATA;
