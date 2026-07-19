import type { LensDataInput } from "../../types/optics.js";

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
 * ║    Patent surfaces 15-20 are the sensor/filter stack and are excluded from   ║
 * ║    the renderer prescription. Their air-equivalent optical path length is    ║
 * ║    folded into the final BFD after surface 14A.                              ║
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
  key: "nikon-1-nikkor-10mm-f28",
  maker: "Nikon",
  name: "NIKON 1 NIKKOR 10mm f/2.8",
  subtitle: "JP 2011-248340 A, Example 1 — Nikon / Take Toshinori",
  specs: [
    "6 elements / 5 groups",
    "f = 10.300 mm patent; 10 mm marketed",
    "f/2.8 marketed; FNO 2.92 design",
    "2ω = 78.61° patent; 77° CX production",
    "2 aspherical surfaces",
    "Patent close-focus table: 0.50 m",
  ],

  focalLengthMarketing: 10,
  focalLengthDesign: 10.300145,
  apertureMarketing: 2.8,
  apertureDesign: 2.92,
  lensMounts: ["nikon-1"],
  imageFormat: "1-inch-type",
  patentNumber: "JP 2011-248340 A",
  patentAuthors: ["Toshinori Take"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2011,
  elementCount: 6,
  groupCount: 5,
  apertureBlades: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Front weak positive element",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.23,
      fl: 164.91,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
      role: "Weak fixed positive front element; gently reduces off-axis ray heights before the powered rear group.",
    },
    {
      id: 2,
      name: "L21",
      label: "G2 front negative asphere",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.58913,
      vd: 61.16,
      fl: -10.39,
      glass: "S-BAL35 (OHARA)",
      apd: false,
      nC: 1.58619,
      nF: 1.59582,
      ng: 1.60103,
      role: "Strong negative meniscus at the front of G2; surface 4A provides primary spherical-aberration and field correction.",
    },
    {
      id: 3,
      name: "L22",
      label: "Pre-stop positive meniscus",
      type: "Positive Meniscus",
      nd: 1.7495,
      vd: 35.28,
      fl: 13.36,
      glass: "S-LAM7 (OHARA)",
      apd: false,
      nC: 1.74328,
      nF: 1.76452,
      ng: 1.77699,
      role: "High-index, high-dispersion positive meniscus that reconverges the divergent bundle from L21 before the stop.",
    },
    {
      id: 4,
      name: "L23",
      label: "Cemented doublet negative component",
      type: "Biconcave Negative",
      nd: 1.8081,
      vd: 22.76,
      fl: -9.89,
      glass: "S-NPH1/S-NPH1W (OHARA)",
      apd: false,
      nC: 1.79801,
      nF: 1.83351,
      ng: 1.8559,
      role: "Very high-dispersion negative component of the rear achromatizing cemented doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L24",
      label: "Cemented doublet positive component",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.32,
      fl: 12.97,
      glass: "S-LAH97 (OHARA)",
      apd: false,
      nC: 1.75063,
      nF: 1.76506,
      ng: 1.77296,
      role: "High-index positive partner to L23; the L23/L24 pair is net weakly negative but strongly chromatic-correcting.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L25",
      label: "Rear positive field-corrector asphere",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.59201,
      vd: 67.02,
      fl: 14.65,
      glass: "M-PCD51 (HOYA, molded phosphate crown)",
      apd: "inferred",
      apdNote: "HOYA molded-glass code 592/670; patent does not publish partial-dispersion or line-index data.",
      role: "Low-dispersion rear positive element; surface 14A is the main rear field/distortion-correction asphere.",
    },
  ],

  /* ── Surface prescription ──
   * Filter stack removed. Patent d14 at infinity = 10.5166 mm plus 3.914368872 mm of
   * air-equivalent filter/sensor-stack path gives folded final d = 14.430968872 mm.
   * Flare-cut stops FS1/FS2 are non-refracting mechanical apertures; their axial spaces are
   * retained around the single optical aperture stop STO.
   */
  surfaces: [
    { label: "1", R: 160.5145, d: 1.55, nd: 1.48749, elemId: 1, sd: 9.5 },
    { label: "2", R: -160.544, d: 2.1334, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "3", R: 26.1848, d: 1.1, nd: 1.58913, elemId: 2, sd: 5.1 },
    { label: "4A", R: 4.8842, d: 3.95, nd: 1.0, elemId: 0, sd: 4.35 },
    { label: "5", R: 9.014, d: 2.5, nd: 1.7495, elemId: 3, sd: 4.35 },
    { label: "6", R: 79.5499, d: 2.0, nd: 1.0, elemId: 0, sd: 3.75 },
    { label: "STO", R: 1e15, d: 2.3, nd: 1.0, elemId: 0, sd: 2.23036 },
    { label: "10", R: -8.6375, d: 1.2, nd: 1.8081, elemId: 4, sd: 3.75 },
    { label: "11", R: 113.7348, d: 2.5, nd: 1.755, elemId: 5, sd: 3.75 },
    { label: "12", R: -10.6165, d: 0.4, nd: 1.0, elemId: 0, sd: 4.0 },
    { label: "13", R: 21.1214, d: 2.95, nd: 1.59201, elemId: 6, sd: 4.9 },
    { label: "14A", R: -13.9521, d: 14.4309688722, nd: 1.0, elemId: 0, sd: 6.0 },
  ],

  /* Patent tabulates κ in sqrt(1 − κ h²/R²); standard renderer K = κ − 1. */
  asph: {
    "4A": {
      K: -0.4472,
      A4: 7.226e-5,
      A6: -3.0492e-6,
      A8: 2.2154e-7,
      A10: -7.9802e-10,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: -12.4868,
      A4: -3.0331e-4,
      A6: 1.1991e-5,
      A8: -1.9031e-7,
      A10: 1.43e-9,
      A12: 0,
      A14: 0,
    },
  },

  /* Patent Example 1 focus table, infinity and 0.50 m close-focus state. */
  var: {
    "2": [2.1334, 1.9061],
    "14A": [14.4309688722, 14.6582688722],
  },
  varLabels: [
    ["2", "D2"],
    ["14A", "BF"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "14A" },
  ],
  doublets: [{ text: "D1", fromSurface: "10", toSurface: "12" }],

  closeFocusM: 0.5,
  focusDescription:
    "Rear focusing by translating the entire second lens group G2 toward the object; data file close state follows the patent 0.50 m table, not the production 0.20 m MFD.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11],
  maxFstop: 11,

  scFill: 0.62,
  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
