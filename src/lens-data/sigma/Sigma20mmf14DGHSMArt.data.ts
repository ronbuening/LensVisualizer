import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Sigma 20mm F1.4 DG HSM | Art (A015)
 *
 * Data source: JP 2019-117419 A, Numerical Example 1 (Sigma / Kenta Fujita).
 * Production match: Sigma 20mm F1.4 DG HSM | Art, 15 elements in 11 groups,
 * 2 FLD + 5 SLD + 2 aspherical elements.
 *
 * Prescription notes:
 * - Patent focal length is f = 20.69 mm and F-number is 1.46. nominalFno and apertureDesign
 *   carry that patent value; apertureMarketing records the marketed 1.4.
 * - The patent lists a 1.45 mm LPF plate (surfaces 28–29; nd 1.52301, νd 58.59) after surface 27.
 *   It is modeled in `rearPlates` (traced, not drawn); surface 27A keeps the patent's physical d27 to
 *   the plate (36.5001 mm at infinity, 37.0527 mm in the tabulated finite state). BF is printed only
 *   symbolically, so BF = 0.9970 mm is derived from the stated 161.26 mm total track.
 * - The patent only tabulates one finite-focus state at an object-image distance of roughly 959 mm.
 *   The close-focus entries below extrapolate the same L2/L3 floating-motion ratio until the paraxial
 *   magnification reaches Sigma's published 1:7.1 at the published 0.276 m minimum focus distance.
 *   The patent-tabulated finite state is documented in the companion analysis. The extrapolated
 *   d27 (39.569472 mm) is the former air-equivalent 41.518534 mm less the plate fold, so its image
 *   plane is unchanged.
 * - Semi-diameters are renderer-safe estimates. The patent does not publish clear apertures; values were
 *   estimated from paraxial marginal/chief-ray envelopes, then reduced where required by edge thickness,
 *   sd/|R|, and cross-gap sag-clearance checks. They should not be read as mechanical barrel dimensions.
 *   Surfaces 1-4A (E1/E2) were raised to pass the traced chief ray to the patent's Y = 21.63 mm corner
 *   (2026-09-24 field-coverage audit).
 */

const LENS_DATA = {
  schema: 2,
  key: "sigma-20mm-f14-dg-hsm-art",
  maker: "Sigma",
  name: "SIGMA 20mm f/1.4 DG HSM | Art",
  subtitle: "JP 2019-117419 A — Numerical Example 1",

  catalog: {
    lensMounts: ["sigma-sa", "canon-ef", "nikon-f", "sony-fe", "l-mount"],
    imageFormat: "135-full-frame",
    specs: [
      "15 elements / 11 groups",
      "Patent f = 20.69 mm",
      "Patent F1.46; marketed F1.4",
      "2 FLD + 5 SLD + 2 aspherical elements",
      "Dual-group floating internal focus",
    ],
    elementCount: 15,
    groupCount: 11,
    focalLengthMm: { marketing: 20, design: 20.693 },
    fNumber: { marketing: 1.4, design: 1.46 },
  },

  source: {
    patentNumber: "JP 2019-117419 A",
    patentYear: 2019,
    authors: ["Kenta Fujita"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: -85.8,
      glass: "E-FDS1 (Hoya)",
      apd: "inferred",
      role: "Front dense-flint diverging component G1; controls the first stage of retrofocus field bending.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Neg. Meniscus (2x Asph)",
      nd: 1.6935,
      vd: 53.2,
      focalLengthMm: -64.9,
      glass: "M-LAC130 (HOYA)",
      role: "Front molded asphere used for distortion and field-curvature correction in L1f.",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: -103.1,
      glass: "FCD1 (Hoya) / S-FPL51 class",
      apd: "inferred",
      role: "Low-dispersion front meniscus; one of the SLD-class elements in the production census.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.8,
      focalLengthMm: 51.2,
      glass: "TAFD30 (Hoya)",
      role: "High-index positive collector beginning L1r.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: -62.6,
      glass: "FCD100 (Hoya) / S-FPL53 class",
      apd: "inferred",
      role: "FLD negative element in the L1r cemented achromat.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: 46.4,
      glass: "TAFD55 (Hoya)",
      role: "Very-high-index positive partner cemented to the FLD element E5.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.63,
      focalLengthMm: 64.8,
      glass: "FCD515 (Hoya)",
      apd: "inferred",
      role: "Leading low-dispersion positive element of the negative floating focus group L2.",
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.63,
      focalLengthMm: 47.7,
      glass: "FCD515 (Hoya)",
      apd: "inferred",
      role: "Low-dispersion positive crown in the L2 cemented doublet.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: -22.0,
      glass: "NBFD15 (Hoya)",
      role: "Dense-flint negative partner that gives the L2 doublet net negative power.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 45.1,
      glass: "FCD100 (Hoya) / S-FPL53 class",
      apd: "inferred",
      role: "Second FLD element, placed just behind the stop in the L3 cemented triplet.",
      cemented: "T1",
    },
    {
      id: 11,
      name: "E11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 33.27,
      focalLengthMm: -18.9,
      glass: "NBFD15 (Hoya)",
      role: "Dense-flint center element of the L3 triplet.",
      cemented: "T1",
    },
    {
      id: 12,
      name: "E12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.63,
      focalLengthMm: 95.1,
      glass: "FCD515 (Hoya)",
      apd: "inferred",
      role: "Low-dispersion rear crown of the L3 triplet.",
      cemented: "T1",
    },
    {
      id: 13,
      name: "E13",
      label: "Element 13",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.63,
      focalLengthMm: 39.5,
      glass: "FCD515 (Hoya)",
      apd: "inferred",
      role: "Strong low-dispersion positive singlet supplying much of L3's converging power.",
    },
    {
      id: 14,
      name: "E14",
      label: "Element 14",
      type: "Biconcave Negative",
      nd: 1.70154,
      vd: 41.15,
      focalLengthMm: -58.7,
      glass: "BAFD7 (HOYA)",
      role: "Rear negative field-balancing element before the final asphere.",
    },
    {
      id: 15,
      name: "E15",
      label: "Element 15",
      type: "Biconvex Positive (2x Asph)",
      nd: 1.7645,
      vd: 49.1,
      focalLengthMm: 30.9,
      glass: "L-LAH91 (OHARA catalog-equivalent; patent supplier unspecified)",
      role: "Rear positive molded asphere and strongest individual positive element in the design.",
    },
  ],

  surfaces: [
    { label: "1", R: 55.8667, d: 2.0, sd: 32.2, medium: 1 },
    { label: "2", R: 32.188, d: 11.1453, sd: 27.0 },
    {
      label: "3A",
      R: 39.6726,
      d: 3.0,
      sd: 25.2,
      medium: 2,
      asphere: { K: -2.4116, A4: 6.6683e-7, A6: -8.6532e-9, A8: 1.5787e-11, A10: -1.446e-14, A12: 5.7555e-18 },
    },
    {
      label: "4A",
      R: 20.4304,
      d: 19.693,
      sd: 21.9,
      asphere: { K: -0.9479, A4: -1.1248e-7, A6: -1.995e-8, A8: 3.17347e-11, A10: -3.4771e-14, A12: 1.7899e-17 },
    },
    { label: "5", R: 518.9274, d: 1.9, sd: 20.5, medium: 3 },
    { label: "6", R: 46.5995, d: 7.4808, sd: 20.7 },
    { label: "7", R: 88.5605, d: 8.0408, sd: 22.7, medium: 4 },
    { label: "8", R: -88.5605, d: 2.8258, sd: 22.1 },
    { label: "9", R: -48.6468, d: 1.9, sd: 22.1, medium: 5 },
    { label: "10", R: 63.2408, d: 6.9907, sd: 22.6, medium: 6 },
    { label: "11", R: -165.6233, sd: 22.4 },
    { label: "12", R: 48.77, d: 5.3297, sd: 19.6, medium: 7 },
    { label: "13", R: -173.3714, d: 0.2, sd: 18.0 },
    { label: "14", R: 55.4982, d: 5.8716, sd: 17.65, medium: 8 },
    { label: "15", R: -55.4982, d: 0.9, sd: 15.2, medium: 9 },
    { label: "16", R: 26.2988, sd: 14.8 },
    { label: "STO", R: "flat", d: 3.1958 },
    { label: "18", R: -149.925, d: 8.4815, sd: 14.0, medium: 10 },
    { label: "19", R: -17.7149, d: 0.9, sd: 15.3, medium: 11 },
    { label: "20", R: 112.16, d: 3.2223, sd: 15.8, medium: 12 },
    { label: "21", R: -112.16, d: 0.15, sd: 16.8 },
    { label: "22", R: 61.3754, d: 7.6624, sd: 17.7, medium: 13 },
    { label: "23", R: -36.1032, d: 0.15, sd: 17.7 },
    { label: "24", R: -205.2853, d: 0.9, sd: 17.0, medium: 14 },
    { label: "25", R: 51.6317, d: 0.3905, sd: 15.5 },
    {
      label: "26A",
      R: 54.8683,
      d: 7.1599,
      sd: 15.5,
      medium: 15,
      asphere: { K: 0, A4: -3.0887e-6, A6: -3.8195e-9, A8: 1.5976e-11, A10: -2.5938e-14, A12: 0 },
    },
    {
      label: "27A",
      R: -39.1917,
      sd: 18.3,
      asphere: { K: 0, A4: 4.5465e-6, A6: -3.8413e-9, A8: 1.6837e-11, A10: -1.1342e-14, A12: 0 },
    },
  ],

  focus: {
    closeFocusM: 0.276,
    keyframes: [0, 0.2858808070165786, 1],
    description:
      "Dual-group floating internal focus: L1 is fixed; the patent finite state is stored exactly, followed by a constrained extrapolation of the L2:L3 motion ratio to Sigma's published 0.276 m / 1:7.1 limit.",
    // (moved from publishedStations) The intermediate focus row is source-tabulated; the close endpoint is reconstructed.
    published: [1],
  },

  gaps: {
    "11": { label: "D11 L1-L2", values: [[7.5732, 6.5175, 1.709399]] },
    "16": { label: "D16 L2-STO", values: [[5.2496, 5.7528, 8.044584]] },
    "27A": { label: "BF", values: [[36.5001, 37.0527, 39.569472]] },
  },

  aperture: {
    nominalFNumber: 1.46,
    fStops: [1.46, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
    blades: 9,
    bladeRoundedness: 1,
  },

  /* ── Low-pass filter LPF (patent surfaces 28–29): traced, not drawn ── */
  rearPlates: [
    {
      label: "LPF",
      thicknessMm: 1.45,
      nd: 1.52301,
      vd: 58.59,
      glass: "C12 (HOYA)",
      gapAfterMm: 0.997,
      source: "JP 2019-117419 A, Numerical Example 1 surfaces 28–29 (BF from the 161.26 mm total track)",
    },
  ],

  groups: [
    { text: "L1f", fromSurface: "1", toSurface: "6" },
    { text: "L1r", fromSurface: "7", toSurface: "11" },
    { text: "L2", fromSurface: "12", toSurface: "16" },
    { text: "L3", fromSurface: "18", toSurface: "27A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
    { text: "T1", fromSurface: "18", toSurface: "21" },
  ],

  layout: { scFill: 0.54, yScFill: 0.62 },

  rays: { offAxisFieldFrac: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
