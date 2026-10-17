import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Sigma 30mm F1.4 DC HSM | Art (A013)                   ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2014-142520 A, Numerical Example 1 (Sigma).        ║
 * ║  APS-C DSLR large-aperture standard lens; 9 elements / 8 groups.    ║
 * ║  Focus: G1 fixed; G2 + stop translate objectward as a rigid group.  ║
 * ║                                                                      ║
 * ║  NOTE ON FOCUS SPACINGS:                                            ║
 * ║    The patent publishes infinity and 600 mm spacing values. The      ║
 * ║    close-focus state below is a paraxial extension of the same       ║
 * ║    rigid-G2 mechanism to Sigma's official 0.30 m MFD. This gives     ║
 * ║    |β| = 0.1468, matching Sigma's published 1:6.8 magnification.     ║
 * ║                                                                      ║
 * ║  Patent 600 mm check state: d6 = 3.5754, BF = 40.2725.              ║
 * ║  Production-MFD derived state: d6 = 0.9202559462, BF = 42.9277440538.║
 * ║                                                                      ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    Patent semi-diameters are not published. SDs were inferred from   ║
 * ║    paraxial on-axis marginal rays plus full-field chief rays, then   ║
 * ║    checked for edge thickness, SD ratios, rim limits, and signed     ║
 * ║    cross-gap sag clearance.                                          ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "sigma-30mm-f14-dc-hsm-a",
  maker: "Sigma",
  name: "SIGMA 30mm f/1.4 DC HSM | Art",
  subtitle: "JP2014142520A Example 1 — Sigma / Daiki Uehara",

  catalog: {
    lensMounts: ["sigma-sa", "canon-ef", "nikon-f", "pentax-k", "sony-a"],
    imageFormat: "aps-c",
    specs: [
      "9 elements / 8 groups",
      "f = 30.785 mm design",
      "F1.4 marketed / F1.46 design",
      "2ω = 50.64°",
      "2 aspherical surfaces",
    ],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: { marketing: 30, design: 30.7848614652 },
    fNumber: { marketing: 1.4, design: 1.46 },
  },

  source: {
    patentNumber: "JP 2014-142520 A",
    patentYear: 2014,
    authors: ["Hiroki Uehara"],
    assignees: ["Sigma Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: -67.6,
      glass: "BSC7 (Hoya, 517/642; N-BK7 / S-BSL7 class)",
      role: "Front negative meniscus for long-back-focus front-group power distribution.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.44,
      focalLengthMm: -74.2,
      glass: "FC5 (Hoya, 487/704; N-FK5 / S-FSL5 class)",
      role: "Low-dispersion front negative meniscus.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.34,
      focalLengthMm: 39.8,
      glass: "BACD16 (Hoya, 620/603; N-SK16 / S-BSM16 class)",
      role: "Positive recovery element in G1; suppresses distortion from L1/L2.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex Positive",
      nd: 1.7552,
      vd: 27.53,
      focalLengthMm: 52.5,
      glass: "E-FD4L / Ref. E-FD4 (Hoya, 755/275; N-SF4 / S-TIH4 class)",
      role: "Positive lead element of the rear imaging group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.46,
      focalLengthMm: -43.7,
      glass: "FD60 (Hoya, 805/255; N-SF6 / S-TIH6 class)",
      role: "Pre-stop negative element in G2.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.61,
      focalLengthMm: -18.7,
      glass: "FD140 (Hoya, 762/266; S-TIH14 class)",
      role: "Negative half of the post-stop cemented doublet.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: 31.4,
      glass: "TAF3 (Hoya, 804/465; N-LASF44 / S-LAH65VS class)",
      role: "Dense lanthanum-flint positive half of the net-negative cemented doublet.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.67,
      focalLengthMm: 74.5,
      glass: "TAC8 (Hoya, 729/547; S-LAL18 class)",
      role: "Rear positive meniscus for Petzval and oblique-bundle balance.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.7725,
      vd: 49.47,
      focalLengthMm: 43.0,
      glass: "M-TAF1 (Hoya molded-glass reference, 773/495)",
      role: "Rearmost glass-molded double-aspherical positive element.",
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 79.7416, d: 1.0, sd: 15.0, medium: 1 },
    { label: "2", R: 24.1967, d: 5.8508, sd: 14.8 },
    { label: "3", R: 821.6299, d: 1.0, sd: 14.5, medium: 2 },
    { label: "4", R: 34.6531, d: 6.9632, sd: 14.5 },
    { label: "5", R: 34.8591, d: 7.6704, sd: 16.0, medium: 3 },
    { label: "6", R: -77.7385, sd: 16.0 },
    { label: "7", R: 40.6045, d: 6.2678, sd: 15.5, medium: 4 },
    { label: "8", R: -1548.9374, d: 3.0312, sd: 15.0 },
    { label: "9", R: -169.5439, d: 1.0, sd: 14.5, medium: 5 },
    { label: "10", R: 44.513, d: 4.381, sd: 14.0 },
    { label: "STO", R: "flat", d: 7.1696 },
    { label: "12", R: -17.9099, d: 1.6071, sd: 13.8, medium: 6 },
    { label: "13", R: 71.7339, d: 6.1003, sd: 14.2, medium: 7 },
    { label: "14", R: -37.5094, d: 0.15, sd: 15.0 },
    { label: "15", R: -200.1294, d: 3.7906, sd: 15.0, medium: 8 },
    { label: "16", R: -43.0881, d: 0.15, sd: 15.5 },
    { label: "17A", R: 142.2414, d: 5.019, sd: 15.5, medium: 9, asphere: { K: 0, A4: -4.06947e-7, A6: 0, A8: 0, A10: 0 } },
    {
      label: "18A",
      R: -42.648,
      sd: 15.5,
      asphere: { K: 0, A4: 5.73182e-6, A6: -1.99338e-9, A8: 5.80103e-12, A10: -3.50184e-15 },
    },
  ],

  focus: {
    closeFocusM: 0.3,
    keyframes: [0, 0.49996964183249615, 1],
    description:
      "Rear-group focus: G1 is fixed; G2 and the stop translate objectward as a rigid group. The patent 600 mm row is exact before the constrained 0.30 m endpoint.",
    // (moved from publishedStations) The intermediate focus row is source-tabulated; the close endpoint is reconstructed.
    published: [1],
  },

  gaps: {
    "6": { label: "G1-G2", values: [[5.449, 3.5754, 0.9202559462]] },
    "18A": { label: "BF", values: [[38.399, 40.2725, 42.9277440538]] },
  },

  aperture: { nominalFNumber: 1.46, fStops: [1.46, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 9 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "7", toSurface: "18A" },
  ],
  doublets: [{ text: "D1", fromSurface: "12", toSurface: "14" }],

  layout: { scFill: 0.55, yScFill: 0.48 },
} satisfies LensDataV2Input;

export default LENS_DATA;
