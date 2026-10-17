import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Nikon AF-S NIKKOR 20mm f/1.8G ED                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Source: JP 2016-021011 A, Example 4.                             ║
 * ║  Negative-positive retrofocus wide-angle lens for Nikon F / FX.    ║
 * ║  Production count: 13 lens elements / 11 groups.                   ║
 * ║  Model count: 13 lens elements + hybrid resin + two cement layers. ║
 * ║  Focus: rear group Gr2 translates object-ward for close focus.     ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                              ║
 * ║    Patent surfaces 29-30 are a 2.00 mm plane-parallel plate        ║
 * ║    (nd 1.51680, νd 64.2) followed by fB = 1.00 mm. It is modeled   ║
 * ║    physically in `rearPlates` (traced, not drawn); surface 28      ║
 * ║    stores the patent gap to the plate, 36.31 mm at infinity.       ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS DATA:                                               ║
 * ║    The patent publishes only the infinity prescription. Close      ║
 * ║    focus values are paraxial estimates for Nikon's 0.20 m MFD,     ║
 * ║    holding total physical track constant while moving Gr2 forward. ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    Patent clear apertures are not published. SDs are inferred      ║
 * ║    for stable rendering from the patent section diagram, the       ║
 * ║    entrance-pupil geometry, spherical/aspherical rim limits, and   ║
 * ║    cross-gap sag clearance. They are not manufacturer clear        ║
 * ║    aperture specifications. Surfaces 1-2 were raised to pass the   ║
 * ║    traced chief ray to the FX corner at 47.1° (patent 2Y' =        ║
 * ║    43.2 mm), and surfaces 14-21 and 24 to pass the full f/1.8      ║
 * ║    on-axis marginal ray, which the former 3.8-11.0 mm rims cut to  ║
 * ║    about f/5.6. Figure 4 draws L21-L24 at 12.8-13.4 mm (2026-09-24 ║
 * ║    field-coverage audit).                                          ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass/resin/cement optical media and surfaces                 ║
 * ║    ✓ Aperture stop and variable focus gaps                         ║
 * ║    ✗ No sensor cover glass as a surface (it is in `rearPlates`)    ║
 * ║    ✗ No filters, motors, aperture blades as geometry, or barrel    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-nikkor-afs-20mm-f18g",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 20mm f/1.8 G ED",
  subtitle: "JP 2016-021011 A Example 4 — Konica Minolta / Nikon",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "13 elements / 11 groups",
      "f = 20.600 mm design EFL",
      "F/1.86 design, f/1.8 marketed",
      "2 ED elements / 2 aspherical lens elements",
      "Rear-group focusing",
    ],
    elementCount: 13,
    groupCount: 11,
    focalLengthMm: { marketing: 20, design: 20.600083 },
    fNumber: { marketing: 1.8, design: 1.86 },
  },

  source: {
    patentNumber: "JP 2016-021011 A",
    patentYear: 2016,
    authors: ["Yasunari Fukuda", "Atsuo Masui", "Kosuke Machida"],
    assignees: ["Konica Minolta, Inc.", "Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: -59.94,
      glass: "S-LAL18 / TAC8 class (729/547)",
      role: "Large front negative meniscus for the retrofocus entrance group.",
    },
    {
      id: 2,
      name: "L12g",
      label: "L12 glass body",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: -71.6,
      glass: "S-LAL18 / TAC8 class (729/547)",
      role: "Glass substrate for the hybrid composite front-group asphere.",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L12r",
      label: "L12 resin layer",
      type: "Hybrid Aspherical Resin Layer",
      nd: 1.5138,
      vd: 53.0,
      glass: "514530 — patent UV-cure resin (nd=1.51380, νd=53.0)",
      role: "Thin molded resin aspherical layer on the rear of L12.",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L13",
      label: "L13",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: -66.21,
      glass: "S-FPL51 / FCD1 class (ED fluorophosphate, 497/816)",
      apd: "inferred",
      apdNote: "ED-class high-Abbe glass; partial dispersion is not published in the patent.",
      role: "Low-dispersion negative element for lateral chromatic correction in Gr1.",
    },
    {
      id: 5,
      name: "L14",
      label: "L14",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 33.3,
      focalLengthMm: 37.86,
      glass: "NBFD15 (HOYA, 806/333)",
      role: "Positive member of the first cemented doublet LS.",
      cemented: "LS",
    },
    {
      id: 6,
      name: "C1",
      label: "LS cement layer",
      type: "Cement Layer",
      nd: 1.514,
      vd: 42.8,
      glass: "514428 — patent cement layer (nd=1.51400, νd=42.8)",
      role: "Explicit 0.01 mm cement layer from the patent prescription.",
      cemented: "LS",
    },
    {
      id: 7,
      name: "L15",
      label: "L15",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -78.18,
      glass: "S-TIH53 / FDS90 class (847/238)",
      role: "Very dense flint negative member of the first cemented doublet.",
      cemented: "LS",
    },
    {
      id: 8,
      name: "L16",
      label: "L16",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.5,
      focalLengthMm: 76.57,
      glass: "FD60 / S-TIH6 class (805/255)",
      role: "Positive collecting meniscus behind LS, completing fixed Gr1.",
    },
    {
      id: 9,
      name: "L21",
      label: "L21",
      type: "Negative Meniscus",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: -66.9,
      glass: "TAF3 / S-LAH65V / N-LASF44 class (804/465)",
      role: "First element of the moving Gr2 focus group; field-curvature corrector.",
    },
    {
      id: 10,
      name: "L22",
      label: "L22",
      type: "Biconvex Positive",
      nd: 1.63854,
      vd: 55.5,
      focalLengthMm: 26.78,
      glass: "BACD18 / S-BSM18 class (639/555)",
      role: "Main positive-power element of the rear group.",
    },
    {
      id: 11,
      name: "L23",
      label: "L23",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.6,
      focalLengthMm: 51.04,
      glass: "FCD515 (HOYA, ED phosphate crown, 593/686)",
      apd: "inferred",
      apdNote: "ED-class high-Abbe glass; partial dispersion is not published in the patent.",
      role: "Low-dispersion positive member of the rear near-afocal achromatizing doublet.",
      cemented: "D2",
    },
    {
      id: 12,
      name: "C2",
      label: "Rear doublet cement layer",
      type: "Cement Layer",
      nd: 1.514,
      vd: 42.8,
      glass: "514428 — patent cement layer (nd=1.51400, νd=42.8)",
      role: "Explicit 0.01 mm cement layer from the patent prescription.",
      cemented: "D2",
    },
    {
      id: 13,
      name: "L24",
      label: "L24",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 33.3,
      focalLengthMm: -45.6,
      glass: "NBFD15 (HOYA, 806/333)",
      role: "Dense-flint negative member of the rear achromatizing doublet.",
      cemented: "D2",
    },
    {
      id: 14,
      name: "L25",
      label: "L25",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      focalLengthMm: -20.65,
      glass: "S-LAH95 (OHARA, 904/313)",
      role: "Post-stop high-index negative meniscus for Petzval and spherical-aberration balance.",
    },
    {
      id: 15,
      name: "L26",
      label: "L26",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: 35.34,
      glass: "L-LAL13 / 694532 moldable lanthanum-crown class (close)",
      role: "Double-aspherical positive element for post-stop spherical aberration and coma correction.",
    },
    {
      id: 16,
      name: "L27",
      label: "L27",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: 39.51,
      glass: "S-PHM52 (OHARA, 618/633)",
      role: "Rear positive meniscus for final convergence and field shaping.",
    },
  ],

  surfaces: [
    { label: "1", R: 44.748, d: 2.05, sd: 21.8, medium: 1 },
    { label: "2", R: 21.684, d: 6.42, sd: 17.7 },
    { label: "3", R: 37.165, d: 1.7, sd: 20.0, medium: 2 },
    { label: "4", R: 21.292, d: 0.08, sd: 16.5, medium: 3 },
    {
      label: "5A",
      R: 17.396,
      d: 10.52,
      sd: 16.5,
      asphere: {
        K: -0.14701,
        A4: -1.42e-5,
        A6: -9.1344e-8,
        A8: 5.7092e-10,
        A10: -3.8761e-12,
        A12: 1.1697e-14,
        A14: -1.68e-17,
      },
    },
    { label: "6", R: -164.083, d: 1.9, sd: 20.0, medium: 4 },
    { label: "7", R: 41.317, d: 2.75, sd: 14.0 },
    { label: "8", R: 73.126, d: 5.75, sd: 14.0, medium: 5 },
    { label: "9", R: -50.534, d: 0.01, sd: 16.0, medium: 6 },
    { label: "10", R: -50.534, d: 1.89, sd: 16.0, medium: 7 },
    { label: "11", R: -217.291, d: 0.15, sd: 14.0 },
    { label: "12", R: 55.437, d: 9.28, sd: 20.0, medium: 8 },
    { label: "13", R: 508.643, sd: 20.0 },
    { label: "14", R: 173.481, d: 1.0, sd: 12.8, medium: 9 },
    { label: "15", R: 40.958, d: 0.2, sd: 12.9 },
    { label: "16", R: 26.018, d: 6.47, sd: 13.4, medium: 10 },
    { label: "17", R: -45.032, d: 0.15, sd: 13.3 },
    { label: "18", R: -157.818, d: 3.82, sd: 12.8, medium: 11 },
    { label: "19", R: -25.619, d: 0.01, sd: 12.6, medium: 12 },
    { label: "20", R: -25.619, d: 1.1, sd: 12.6, medium: 13 },
    { label: "21", R: -86.163, d: 1.5, sd: 12.4 },
    { label: "STO", R: "flat", d: 7.31 },
    { label: "23", R: -18.136, d: 1.1, sd: 12.0, medium: 14 },
    { label: "24", R: -663.566, d: 0.4, sd: 11.5 },
    {
      label: "25A",
      R: 310.584,
      d: 4.88,
      sd: 13.0,
      medium: 15,
      asphere: {
        K: 0,
        A4: 1.6819e-5,
        A6: 1.1963e-7,
        A8: 5.3088e-10,
        A10: -7.1472e-13,
        A12: -1.8781e-14,
        A14: 7.696e-17,
      },
    },
    {
      label: "26A",
      R: -26.434,
      d: 2.2,
      sd: 12.5,
      asphere: {
        K: -0.63616,
        A4: 3.5114e-5,
        A6: 1.1816e-7,
        A8: 8.6824e-10,
        A10: -8.9067e-13,
        A12: 5.2841e-16,
        A14: -1.7693e-17,
      },
    },
    { label: "27", R: -106.408, d: 5.85, sd: 12.5, medium: 16 },
    { label: "28", R: -20.279, sd: 13.0 }, // [var: BF, patent d28 to the cover plate]
  ],

  focus: {
    closeFocusM: 0.2,
    step: 0.004,
    description:
      "Rear-group focusing: Gr2 (surfaces 14-28) moves approximately 5.375 mm object-ward at 0.20 m; the 2.00 mm cover glass and 1.00 mm fB follow the last lens surface as a traced rear plate.",
  },

  /* (moved from var) "28" = patent d28 to the cover plate (36.31 at infinity); the close value is the paraxial
   * 0.20 m solve (Gr2 forward 5.375 mm at constant physical track). Plate + fB are in `rearPlates`. */
  gaps: {
    "13": { label: "Gr1-Gr2 gap", values: [[7.51, 2.135171345030911]] },
    "28": { label: "BF", values: [[36.31, 41.68482865496909]] },
  },

  aperture: { nominalFNumber: 1.86, fStops: [1.86, 2, 2.8, 4, 5.6, 8, 11, 16], maxFNumber: 16, step: 0.004, blades: 7 },

  /* ── Sensor cover plate (patent surfaces 29–30): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 2.0,
      nd: 1.5168,
      vd: 64.2,
      glass: "J-BK7A",
      gapAfterMm: 1.0,
      source: "JP 2016-021011 A, Example 4 surfaces 29–30 (fB = 1.00 mm)",
    },
  ],

  groups: [
    { text: "Gr1 fixed", fromSurface: "1", toSurface: "13" },
    { text: "Gr2 focus", fromSurface: "14", toSurface: "28" },
  ],
  doublets: [
    { text: "H1", fromSurface: "3", toSurface: "5A" },
    { text: "LS", fromSurface: "8", toSurface: "11" },
    { text: "D2", fromSurface: "18", toSurface: "21" },
  ],

  layout: { scFill: 0.58, yScFill: 0.44 },
} satisfies LensDataV2Input;

export default LENS_DATA;
