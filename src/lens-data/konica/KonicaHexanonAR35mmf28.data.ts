import type { LensDataInput } from "../../types/optics.js";

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
  key: "konica-hexanon-ar-35mm-f28",
  maker: "Konica",
  name: "KONICA HEXANON AR 35mm f/2.8",
  subtitle: "US 4,170,403 Example 1 — Konishiroku / Shimokura",
  specs: ["5 ELEMENTS / 5 GROUPS", "f ≈ 35.00 mm", "F/2.8", "2ω = 64°", "ALL-SPHERICAL"],

  focalLengthMarketing: 35,
  focalLengthDesign: 35.0008,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["konica-ar"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,170,403",
  patentAuthors: ["Toshiko Shimokura"],
  patentAssignees: ["Konica Minolta, Inc."],
  patentYear: 1979,
  elementCount: 5,
  groupCount: 5,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5163,
      vd: 64.1,
      fl: -40.27,
      glass: "S-BSL7 (OHARA)",
      nC: 1.51386,
      nF: 1.52191,
      ng: 1.52621,
      role: "Front negative meniscus providing retrofocus back focal distance.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.757,
      vd: 47.9,
      fl: 24.12,
      glass: "J-LAF04 (HIKARI)",
      nC: 1.752239,
      nF: 1.768055,
      ng: 1.776843,
      role: "Thick high-index positive lens; primary front positive collector and aberration-correction element.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7407,
      vd: 27.8,
      fl: -19.37,
      glass: "S-TIH13 (OHARA)",
      nC: 1.73309,
      nF: 1.75975,
      ng: 1.77599,
      role: "Dense-flint negative element behind the stop; chromatic correction partner to L2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: 64.26,
      glass: "S-LAL14 (OHARA)",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
      role: "First rear positive meniscus, concave to object; distortion correction through rear diverging action.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.9,
      fl: 32.43,
      glass: "S-LAL8 (OHARA)",
      nC: 1.70897,
      nF: 1.72221,
      ng: 1.72943,
      role: "Final positive meniscus, concave to object; rear image-forming power.",
    },
  ],

  surfaces: [
    { label: "1", R: 49.5915, d: 1.4805, nd: 1.5163, elemId: 1, sd: 16.0 },
    { label: "2", R: 14.5005, d: 8.89, nd: 1.0, elemId: 0, sd: 12.9 },
    { label: "3", R: 26.649, d: 11.851, nd: 1.757, elemId: 2, sd: 12.9 },
    { label: "4", R: -46.865, d: 2.45, nd: 1.0, elemId: 0, sd: 12.1 },
    { label: "STO", R: 1e15, d: 2.6845, nd: 1.0, elemId: 0, sd: 6.734 },
    { label: "5", R: -20.3, d: 2.4675, nd: 1.7407, elemId: 3, sd: 7.6 },
    { label: "6", R: 51.443, d: 1.302, nd: 1.0, elemId: 0, sd: 6.6 },
    { label: "7", R: -29.652, d: 2.072, nd: 1.6968, elemId: 4, sd: 6.6 },
    { label: "8", R: -18.3505, d: 0.098, nd: 1.0, elemId: 0, sd: 8.4 },
    { label: "9", R: -489.51, d: 3.059, nd: 1.713, elemId: 5, sd: 9.4 },
    { label: "10", R: -22.134, d: 39.061967, nd: 1.0, elemId: 0, sd: 11.4 },
  ],

  asph: {},

  var: {
    "10": [39.061967, 44.885799],
  },
  varLabels: [["10", "BF"]],
  focusDescription:
    "Unit focus approximation; whole optical unit translates and only the final back focal distance changes.",

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "6" },
    { text: "G4", fromSurface: "7", toSurface: "8" },
    { text: "G5", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [],

  closeFocusM: 0.3,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  scFill: 0.62,
  yScFill: 0.52,
} satisfies LensDataInput;

export default LENS_DATA;
