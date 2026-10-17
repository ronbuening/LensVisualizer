import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Nikon 1 NIKKOR 10mm f/2.8                                    ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2011-248340 A, Example 1 (Nikon / Take Toshinori).        ║
 * ║  Compact CX-format 10 mm pancake lens: weak positive G1 + strong positive  ║
 * ║  G2, 6 elements / 5 groups, 2 aspherical surfaces.                         ║
 * ║  Focus: entire G2 translates toward the object. Patent close-focus table    ║
 * ║  is for a 0.50 m object distance; production MFD is 0.20 m.                ║
 * ║                                                                              ║
 * ║  NOTE ON FILTER STACK:                                                       ║
 * ║    Patent surfaces 15-20 (three plates, nd=1.51633, νd=64.14; t = 0.50 /     ║
 * ║    1.59 / 0.70 mm with air 1.11 / 0.30 / d20 = 0.6644 mm) are modeled in     ║
 * ║    `rearPlates` (traced, not drawn). d14 = patent 10.5166 / 10.7439 mm;      ║
 * ║    air-equivalent BF matches the patent 14.43 mm, physical TL 37.96 mm.      ║
 * ║                                                                              ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                     ║
 * ║    Patent Example 1 does not publish clear semi-diameters. Values below are  ║
 * ║    paraxial/figure-constrained estimates, limited by rim slope, cross-gap    ║
 * ║    sag intrusion, front-element envelope, and the steep aspherical surface   ║
 * ║    4A. They are intentionally conservative at the full 78.61° design field. ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "nikon-1-nikkor-10mm-f28",
  maker: "Nikon",
  name: "NIKON 1 NIKKOR 10mm f/2.8",
  subtitle: "JP 2011-248340 A, Example 1 — Nikon / Take Toshinori",

  catalog: {
    lensMounts: ["nikon-1"],
    imageFormat: "1-inch-type",
    specs: [
      "6 elements / 5 groups",
      "f = 10.300 mm patent; 10 mm marketed",
      "f/2.8 marketed; FNO 2.92 design",
      "2ω = 78.61° patent; 77° CX production",
      "2 aspherical surfaces",
      "Patent close-focus table: 0.50 m",
    ],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: { marketing: 10, design: 10.300145 },
    fNumber: { marketing: 2.8, design: 2.92 },
  },

  source: {
    patentNumber: "JP 2011-248340 A",
    patentYear: 2011,
    authors: ["Toshinori Take"],
    assignees: ["Nikon Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Front weak positive element",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.23,
      focalLengthMm: 164.91,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Weak fixed positive front element; gently reduces off-axis ray heights before the powered rear group.",
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
    },
    {
      id: 2,
      name: "L21",
      label: "G2 front negative asphere",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.58913,
      vd: 61.16,
      focalLengthMm: -10.39,
      glass: "S-BAL35 (OHARA)",
      apd: false,
      role: "Strong negative meniscus at the front of G2; surface 4A provides primary spherical-aberration and field correction.",
      nC: 1.58619,
      nF: 1.59582,
      ng: 1.60103,
    },
    {
      id: 3,
      name: "L22",
      label: "Pre-stop positive meniscus",
      type: "Positive Meniscus",
      nd: 1.7495,
      vd: 35.28,
      focalLengthMm: 13.36,
      glass: "S-LAM7 (OHARA)",
      apd: false,
      role: "High-index, high-dispersion positive meniscus that reconverges the divergent bundle from L21 before the stop.",
      nC: 1.74328,
      nF: 1.76452,
      ng: 1.77699,
    },
    {
      id: 4,
      name: "L23",
      label: "Cemented doublet negative component",
      type: "Biconcave Negative",
      nd: 1.8081,
      vd: 22.76,
      focalLengthMm: -9.89,
      glass: "S-NPH1/S-NPH1W (OHARA)",
      apd: false,
      role: "Very high-dispersion negative component of the rear achromatizing cemented doublet.",
      cemented: "D1",
      nC: 1.79801,
      nF: 1.83351,
      ng: 1.8559,
    },
    {
      id: 5,
      name: "L24",
      label: "Cemented doublet positive component",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.32,
      focalLengthMm: 12.97,
      glass: "S-LAH97 (OHARA)",
      apd: false,
      role: "High-index positive partner to L23; the L23/L24 pair is net weakly negative but strongly chromatic-correcting.",
      cemented: "D1",
      nC: 1.75063,
      nF: 1.76506,
      ng: 1.77296,
    },
    {
      id: 6,
      name: "L25",
      label: "Rear positive field-corrector asphere",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.59201,
      vd: 67.02,
      focalLengthMm: 14.65,
      glass: "M-PCD51 (HOYA, molded phosphate crown)",
      apd: "inferred",
      apdNote: "HOYA molded-glass code 592/670; patent does not publish partial-dispersion or line-index data.",
      role: "Low-dispersion rear positive element; surface 14A is the main rear field/distortion-correction asphere.",
    },
  ],

  /* ── Surface prescription ──
   * d14 is the patent's physical gap from surface 14A to the first filter plate (10.5166 mm
   * at infinity); the three-plate filter stack follows in `rearPlates`.
   * Flare-cut stops FS1/FS2 are non-refracting mechanical apertures; their axial spaces are
   * retained around the single optical aperture stop STO.
   */
  /* (moved from asph) Patent tabulates κ in sqrt(1 − κ h²/R²); standard renderer K = κ − 1. */
  surfaces: [
    { label: "1", R: 160.5145, d: 1.55, sd: 9.5, medium: 1 },
    { label: "2", R: -160.544, sd: 8.5 },
    { label: "3", R: 26.1848, d: 1.1, sd: 5.1, medium: 2 },
    {
      label: "4A",
      R: 4.8842,
      d: 3.95,
      sd: 4.35,
      asphere: { K: -0.4472, A4: 7.226e-5, A6: -3.0492e-6, A8: 2.2154e-7, A10: -7.9802e-10 },
    },
    { label: "5", R: 9.014, d: 2.5, sd: 4.35, medium: 3 },
    { label: "6", R: 79.5499, d: 2.0, sd: 3.75 },
    { label: "STO", R: "flat", d: 2.3 },
    { label: "10", R: -8.6375, d: 1.2, sd: 3.75, medium: 4 },
    { label: "11", R: 113.7348, d: 2.5, sd: 3.75, medium: 5 },
    { label: "12", R: -10.6165, d: 0.4, sd: 4.0 },
    { label: "13", R: 21.1214, d: 2.95, sd: 4.9, medium: 6 },
    {
      label: "14A",
      R: -13.9521,
      sd: 6.0,
      asphere: { K: -12.4868, A4: -3.0331e-4, A6: 1.1991e-5, A8: -1.9031e-7, A10: 1.43e-9 },
    },
  ],

  focus: {
    closeFocusM: 0.5,
    description:
      "Rear focusing by translating the entire second lens group G2 toward the object; data file close state follows the patent 0.50 m table, not the production 0.20 m MFD.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) Patent Example 1 focus table, infinity and 0.50 m close-focus state. */
  gaps: { "2": { label: "D2", values: [[2.1334, 1.9061]] }, "14A": { label: "D14", values: [[10.5166, 10.7439]] } },

  aperture: { nominalFNumber: 2.92, fStops: [2.92, 4, 5.6, 8, 11], maxFNumber: 11, blades: 7 },

  /* ── Filter/sensor stack (patent surfaces 15–20): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 0.5,
      nd: 1.51633,
      vd: 64.14,
      glass: "S-BSL7",
      gapAfterMm: 1.11,
      source: "JP 2011-248340 A, Example 1 (Table 1) surfaces 15–16",
    },
    {
      thicknessMm: 1.59,
      nd: 1.51633,
      vd: 64.14,
      glass: "S-BSL7",
      gapAfterMm: 0.3,
      source: "JP 2011-248340 A, Example 1 (Table 1) surfaces 17–18",
    },
    {
      thicknessMm: 0.7,
      nd: 1.51633,
      vd: 64.14,
      glass: "S-BSL7",
      gapAfterMm: 0.6644,
      source: "JP 2011-248340 A, Example 1 (Table 1) surfaces 19–20 (d20)",
    },
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "14A" },
  ],
  doublets: [{ text: "D1", fromSurface: "10", toSurface: "12" }],

  layout: { scFill: 0.62, yScFill: 0.46 },
} satisfies LensDataV2Input;

export default LENS_DATA;
