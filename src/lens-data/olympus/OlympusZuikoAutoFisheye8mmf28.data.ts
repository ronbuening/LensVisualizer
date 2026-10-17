import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║ OLYMPUS ZUIKO AUTO-FISHEYE 8mm f/2.8                                     ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: DE 2157160 A1, Example 1 / Tabelle 1 (Olympus / Nakagawa).    ║
 * ║ Six-group negative-lead circular fisheye patent form, all-spherical.       ║
 * ║ Patent prescription is normalized to f = 1.0; all R, d, and SD values      ║
 * ║ below are scaled ×8.000 to the marketed 8 mm production focal length.      ║
 * ║                                                                            ║
 * ║ Production correlation: Olympus OM Zuiko Auto-Fisheye 8mm f/2.8. The       ║
 * ║ production lens is documented as 11 elements / 7 groups; this file uses     ║
 * ║ the 10 element / 6 group patent Example 1 prescription, not the final       ║
 * ║ production construction.                                                   ║
 * ║                                                                            ║
 * ║ Stop: patent table does not numerically locate the aperture. Fig. 1 shows  ║
 * ║ the stop in the d11 air gap between Groups IV and V, nearer Group V. The   ║
 * ║ d11 gap is split 1.0647f / 0.4563f. The stop radius is derived from the    ║
 * ║ design f-number, f/2.8.                                                    ║
 * ║                                                                            ║
 * ║ Focus: patent publishes infinity only. Runtime close focus uses a unit-    ║
 * ║ focus approximation with the final back-focus gap varied from the patent    ║
 * ║ fB = 4.5855f to the conjugate required for 0.20 m from the image plane.    ║
 * ║                                                                            ║
 * ║ Semi-diameters: patent omits clear apertures. SDs are conservative         ║
 * ║ estimates from Fig. 1 proportions, paraxial stop geometry, edge-thickness   ║
 * ║ checks, slope checks, air-gap sag checks, and off-axis ray diagnostics.     ║
 * ║ The front surface is intentionally taller than the L1 rear surface to match ║
 * ║ the Fig. 1 field-acceptance meniscus and admit the 54° display ray bundle.  ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "olympus-zuiko-auto-fisheye-8mm-f28",
  maker: "Olympus",
  name: "OLYMPUS ZUIKO AUTO-FISHEYE 8mm f/2.8",
  subtitle: "DE 2157160 A1 Example 1 — Olympus / Nakagawa",

  catalog: {
    lensMounts: ["olympus-om"],
    imageFormat: "135-full-frame",
    specs: [
      "Patent Example 1: 10 elements / 6 groups",
      "Production correlation: 8mm f/2.8 OM circular fisheye",
      "180° field, 23 mm circular image",
      "All-spherical prescription",
    ],
    elementCount: 10,
    groupCount: 6,
    focalLengthMm: { marketing: 8, design: 7.9999 },
    fNumber: { marketing: 2.8, design: 2.8 },
  },

  source: {
    patentNumber: "DE 2157160 A1",
    patentYear: 1973,
    authors: ["Jihei Nakagawa"],
    assignees: ["Olympus Optical Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5891,
      vd: 61.0,
      focalLengthMm: -43.82,
      glass: "S-BAL35 class (OHARA; SK5 / 589/610 equivalent)",
      role: "Large front negative meniscus for 180° field acceptance and retrofocus front-section divergence.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7847,
      vd: 25.6,
      focalLengthMm: 153.93,
      glass: "S-TIH11 class (OHARA; SF11 / 785/256 equivalent)",
      role: "High-index dense-flint front component of Group II cemented chromatic-correction doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.5891,
      vd: 61.0,
      focalLengthMm: -33.31,
      glass: "S-BAL35 class (OHARA; SK5 / 589/610 equivalent)",
      role: "Crown rear component of Group II; produces the net negative power of the cemented meniscus.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.67,
      vd: 57.3,
      focalLengthMm: -24.3,
      glass: "J-LAK02 class (Hikari; 670/573)",
      role: "Lanthanum-crown component of the hyperchromatic Group III doublet.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6668,
      vd: 33.0,
      focalLengthMm: 30.66,
      glass: "H-ZF39 class (CDGM; 667/330)",
      role: "Dense-flint partner of Group III; supplies dispersion leverage while leaving the group weakly negative.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.7865,
      vd: 50.1,
      focalLengthMm: -14.97,
      glass: "YGH52 (OHARA catalog-equivalent; patent supplier unspecified)",
      role: "Negative component of the nearly afocal Group IV axial-aberration compensator.",
      cemented: "D3",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6032,
      vd: 42.3,
      focalLengthMm: 15.19,
      glass: "BAM25 (OHARA catalog-equivalent; patent supplier unspecified)",
      role: "Positive partner of Group IV; nearly cancels L6 power while preserving chromatic and axial correction.",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.5173,
      vd: 69.3,
      focalLengthMm: 80.2,
      glass: "J-PKH1 class (Hikari; 517/693 low-dispersion crown)",
      role: "Low-dispersion rear positive meniscus beginning the convergence into the final doublet.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.9229,
      vd: 20.9,
      focalLengthMm: -49.74,
      glass: "N-SF66 class (SCHOTT; 923/209 very dense flint)",
      role: "Very dense flint in the rear achromat; the principal high-dispersion correction element.",
      cemented: "D4",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.5173,
      vd: 69.3,
      focalLengthMm: 21.1,
      glass: "J-PKH1 class (Hikari; 517/693 low-dispersion crown)",
      role: "Positive crown exit element; completes the strong rear achromatic doublet.",
      cemented: "D4",
    },
  ],

  surfaces: [
    { label: "1", R: 95.0304, d: 2.7232, sd: 28, medium: 1 },
    { label: "2", R: 20.0848, d: 19.064, sd: 17.2 },
    { label: "3", R: 67.308, d: 4.1336, sd: 12.4, medium: 2 },
    { label: "4", R: 147.9128, d: 1.9456, sd: 12.4, medium: 3 },
    { label: "5", R: 17.24, d: 14.0448, sd: 12.4 },
    { label: "6", R: -303.4224, d: 1.556, sd: 8.8, medium: 4 },
    { label: "7", R: 17.24, d: 4.7656, sd: 8.8, medium: 5 },
    { label: "8", R: 97.7904, d: 8.0456, sd: 8.8 },
    { label: "9", R: 151.7928, d: 1.9456, sd: 7.4, medium: 6 },
    { label: "10", R: 10.8672, d: 6.7016, sd: 7.4, medium: 7 },
    { label: "11", R: -44.8096, d: 8.5176, sd: 7.4 },
    { label: "STO", R: "flat", d: 3.6504 },
    { label: "12", R: -61.8168, d: 4.5424, sd: 7.3, medium: 8 },
    { label: "13", R: -25.4472, d: 0.1944, sd: 7.3 },
    { label: "14", R: 26.6992, d: 1.4592, sd: 7.0, medium: 9 },
    { label: "15", R: 16.4376, d: 4.9896, sd: 7.0, medium: 10 },
    { label: "16", R: -29.1208, sd: 7.0 },
  ],

  focus: {
    closeFocusM: 0.2,
    description:
      "Unit-focus approximation. The patent publishes only the infinity prescription; runtime focus varies the final back-focus gap after surface 16.",
  },

  gaps: { "16": { label: "BF", values: [[36.684, 37.34335]] } },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  // Projection metadata follows the production-lens correlation, not a projection equation stated in the patent.
  projection: {
    kind: "fisheye-equisolid",
    focalLengthMm: 8,
    fullFieldDeg: 180,
    imageCircleMm: 23,
    maxTraceFieldDeg: 90,
  },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "2" },
    { text: "II", fromSurface: "3", toSurface: "5" },
    { text: "III", fromSurface: "6", toSurface: "8" },
    { text: "IV", fromSurface: "9", toSurface: "11" },
    { text: "V", fromSurface: "12", toSurface: "13" },
    { text: "VI", fromSurface: "14", toSurface: "16" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "9", toSurface: "11" },
    { text: "D4", fromSurface: "14", toSurface: "16" },
  ],

  layout: { scFill: 0.5, yScFill: 0.78 },

  rays: { offAxisFieldFrac: 0.6 },
} satisfies LensDataV2Input;

export default LENS_DATA;
