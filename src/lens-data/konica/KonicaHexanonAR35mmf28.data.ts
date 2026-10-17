import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — KONICA HEXANON AR 35mm f/2.8                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,170,403, Example 1 (Shimokura / Konishiroku).   ║
 * ║  Five-element, five-group all-spherical retrofocus wide-angle lens.║
 * ║  Focus: unit focus modeled by varying final back focal distance.   ║
 * ║                                                                    ║
 * ║  Scaling: patent is normalized to f = 1. All radii, thicknesses,   ║
 * ║  and inferred semi-diameters are scaled ×35 to the nominal 35 mm   ║
 * ║  production focal length.                                          ║
 * ║                                                                    ║
 * ║  Stop: patent places the diaphragm 0.07f behind surface 4; surface ║
 * ║  4 to STO is therefore 2.45 mm and STO to surface 5 is 2.6845 mm. ║
 * ║                                                                    ║
 * ║  Semi-diameters: not published in the patent. Values below are     ║
 * ║  inferred from paraxial marginal/chief-ray heights, then reduced   ║
 * ║  where necessary to satisfy rim and cross-gap sag constraints.     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "konica-hexanon-ar-35mm-f28",
  maker: "Konica",
  name: "KONICA HEXANON AR 35mm f/2.8",
  subtitle: "US 4,170,403 Example 1 — Konishiroku / Shimokura",

  catalog: {
    lensMounts: ["konica-ar"],
    imageFormat: "135-full-frame",
    specs: ["5 ELEMENTS / 5 GROUPS", "f ≈ 35.00 mm", "F/2.8", "2ω = 64°", "ALL-SPHERICAL"],
    elementCount: 5,
    groupCount: 5,
    focalLengthMm: { marketing: 35, design: 35.0008 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "US 4,170,403",
    patentYear: 1979,
    authors: ["Toshiko Shimokura"],
    assignees: ["Konishiroku Photo Industry Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5163,
      vd: 64.1,
      focalLengthMm: -40.27,
      glass: "S-BSL7 (OHARA)",
      role: "Front negative meniscus providing retrofocus back focal distance.",
      nC: 1.51386,
      nF: 1.52191,
      ng: 1.52621,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.757,
      vd: 47.9,
      focalLengthMm: 24.12,
      glass: "J-LAF04 (HIKARI)",
      role: "Thick high-index positive lens; primary front positive collector and aberration-correction element.",
      nC: 1.752239,
      nF: 1.768055,
      ng: 1.776843,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7407,
      vd: 27.8,
      focalLengthMm: -19.37,
      glass: "S-TIH13 (OHARA)",
      role: "Dense-flint negative element behind the stop; chromatic correction partner to L2.",
      nC: 1.73309,
      nF: 1.75975,
      ng: 1.77599,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 64.26,
      glass: "S-LAL14 (OHARA)",
      role: "First rear positive meniscus, concave to object; distortion correction through rear diverging action.",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      focalLengthMm: 32.43,
      glass: "S-LAL8 (OHARA)",
      role: "Final positive meniscus, concave to object; rear image-forming power.",
      nC: 1.70897,
      nF: 1.72221,
      ng: 1.72943,
    },
  ],

  surfaces: [
    { label: "1", R: 49.5915, d: 1.4805, sd: 16.0, medium: 1 },
    { label: "2", R: 14.5005, d: 8.89, sd: 12.9 },
    { label: "3", R: 26.649, d: 11.851, sd: 12.9, medium: 2 },
    { label: "4", R: -46.865, d: 2.45, sd: 12.1 },
    { label: "STO", R: "flat", d: 2.6845 },
    { label: "5", R: -20.3, d: 2.4675, sd: 7.6, medium: 3 },
    { label: "6", R: 51.443, d: 1.302, sd: 6.6 },
    { label: "7", R: -29.652, d: 2.072, sd: 6.6, medium: 4 },
    { label: "8", R: -18.3505, d: 0.098, sd: 8.4 },
    { label: "9", R: -489.51, d: 3.059, sd: 9.4, medium: 5 },
    { label: "10", R: -22.134, sd: 11.4 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "Unit focus approximation; whole optical unit translates and only the final back focal distance changes.",
  },

  gaps: { "10": { label: "BF", values: [[39.061967, 44.885799]] } },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "6" },
    { text: "G4", fromSurface: "7", toSurface: "8" },
    { text: "G5", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [],

  layout: { scFill: 0.62, yScFill: 0.52 },
} satisfies LensDataV2Input;

export default LENS_DATA;
