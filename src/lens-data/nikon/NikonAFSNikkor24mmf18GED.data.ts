import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * NIKON AF-S NIKKOR 24mm f/1.8 G ED
 *
 * Data source: JP 2017-3807 A, Example 4 (Konica Minolta / Nikon).
 * Prescription is retained at patent scale: computed d-line EFL = 24.423 mm;
 * patent stated f = 24.43 mm, FNO = 1.86, 2ω = 84.4°, y'max = 21.6 mm.
 *
 * The manufacturer/patent photographic count is 12 elements in 9 groups. This
 * data file models the two thin hybrid aspherical resin layers as explicit
 * optical media so refraction through the patent-listed nd = 1.51380 layers is
 * not lost; therefore the `elements` array has 14 entries while elementCount
 * remains the physical/published 12-element count.
 *
 * Focus: rear-group inner focus. Gr1 is fixed; Gr2 moves 4.98 mm object-ward
 * from infinity to close focus. The final back-focus gap increases by the same
 * amount, keeping total track constant at 124.37 mm.
 *
 * Semi-diameters are inferred because the patent does not list clear apertures.
 * They were sized from paraxial marginal/chief-ray envelopes with mechanical
 * clearance, then constrained by edge thickness, sd/|R|, element SD ratio, and
 * signed cross-gap sag-intrusion checks.
 */
const LENS_DATA = {
  schema: 2,
  key: "nikon-af-s-nikkor-24mm-f18g-ed",
  maker: "Nikon",
  name: "NIKON AF-S NIKKOR 24mm f/1.8 G ED",
  subtitle: "JP 2017-3807 A Example 4 — Konica Minolta / Nikon",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: [
      "12 elements / 9 groups",
      "24 mm f/1.8 marketed",
      "f = 24.423 mm design",
      "F/1.86 design",
      "2 ED + 2 hybrid aspherical elements",
      "84.4° patent field",
    ],
    elementCount: 12,
    groupCount: 9,
    focalLengthMm: { marketing: 24, design: 24.423 },
    fNumber: { marketing: 1.8, design: 1.86 },
  },

  source: {
    patentNumber: "JP 2017-003807 A",
    patentYear: 2017,
    authors: ["Yasunari Fukuda", "Kana Inoue", "Akiko Furuta"],
    assignees: ["Konica Minolta, Inc.", "Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -54.77,
      glass: "S-LAH66 (OHARA)",
      role: "Front negative meniscus for retrofocus field opening and front-group distortion control.",
    },
    {
      id: 2,
      name: "L2g",
      label: "L2 glass body",
      type: "Negative Meniscus substrate",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: -70.54,
      glass: "S-PHM52 (OHARA)",
      role: "Glass body of the front hybrid aspherical element.",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L2r",
      label: "L2 resin layer",
      type: "Hybrid aspherical resin layer",
      nd: 1.5138,
      vd: 53,
      focalLengthMm: -240.3,
      glass: "UV-curable resin (patent nd=1.51380, νd=53.0)",
      role: "Thin composite-asphere layer carrying surface 5A.",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L3",
      label: "L3",
      type: "Biconvex Positive",
      nd: 1.90366,
      vd: 31.3,
      focalLengthMm: 20.43,
      glass: "S-LAH95 (OHARA)",
      role: "High-index positive member of the front-group cemented doublet.",
      cemented: "LS",
    },
    {
      id: 5,
      name: "L4",
      label: "L4",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.6,
      focalLengthMm: -30.66,
      glass: "S-TIH14 (OHARA)",
      role: "Dense-flint negative member of the front-group cemented doublet.",
      cemented: "LS",
    },
    {
      id: 6,
      name: "L5",
      label: "L5",
      type: "Positive Meniscus",
      nd: 1.68893,
      vd: 31.2,
      focalLengthMm: 565.14,
      glass: "S-TIM28 (OHARA)",
      role: "Weak terminal positive element of Gr1, reducing Gr2 diameter and focus sensitivity.",
    },
    {
      id: 7,
      name: "L6",
      label: "L6",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 35.62,
      glass: "S-LAL14 (OHARA)",
      role: "First collector element of the moving positive focus group.",
    },
    {
      id: 8,
      name: "L7",
      label: "L7",
      type: "Negative Meniscus",
      nd: 1.51823,
      vd: 59,
      focalLengthMm: -57.87,
      glass: "S-NSL3 (OHARA)",
      role: "Pre-stop negative meniscus balancing convergence into the aperture stop.",
    },
    {
      id: 9,
      name: "L8",
      label: "L8",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.1,
      focalLengthMm: -26.34,
      glass: "S-TIM35 (OHARA)",
      role: "Dense-flint negative member of the first post-stop chromatic-correction doublet.",
      cemented: "D1",
    },
    {
      id: 10,
      name: "L9",
      label: "L9",
      type: "Biconvex Positive ED",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 70.93,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "OHARA S-FPL51 line indices imply Δθg,F ≈ +0.029 versus the OHARA NSL7-PBM2 normal line.",
      role: "First ED positive element behind the aperture stop.",
      cemented: "D1",
      dPgF: 0.02904,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 11,
      name: "L10",
      label: "L10",
      type: "Negative Meniscus",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: -68.3,
      glass: "S-LAL18 (OHARA)",
      role: "Negative member of the second post-stop cemented doublet.",
      cemented: "D2",
    },
    {
      id: 12,
      name: "L11",
      label: "L11",
      type: "Biconvex Positive ED",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 30.27,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "OHARA S-FPL51 line indices imply Δθg,F ≈ +0.029 versus the OHARA NSL7-PBM2 normal line.",
      role: "Second ED positive element and principal rear converging member.",
      cemented: "D2",
      dPgF: 0.02904,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 13,
      name: "L12r",
      label: "L12 resin layer",
      type: "Hybrid aspherical resin layer",
      nd: 1.5138,
      vd: 53,
      focalLengthMm: 407.7,
      glass: "UV-curable resin (patent nd=1.51380, νd=53.0)",
      role: "Thin front resin layer carrying final aspherical surface 22A.",
      cemented: "H2",
    },
    {
      id: 14,
      name: "L12g",
      label: "L12 glass body",
      type: "Positive Meniscus substrate",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: 73.14,
      glass: "S-PHM52 (OHARA)",
      role: "Glass body of the final hybrid aspherical positive meniscus.",
      cemented: "H2",
    },
  ],

  surfaces: [
    { label: "1", R: 40.617, d: 2, sd: 22, medium: 1 },
    { label: "2", R: 20.279, d: 10.82, sd: 18 },
    { label: "3", R: 61.02, d: 1.65, sd: 18.2, medium: 2 },
    { label: "4", R: 25.165, d: 0.08, sd: 18.2, medium: 3 },
    {
      label: "5A",
      R: 20.881,
      d: 14.52,
      sd: 18.2,
      asphere: {
        K: 0,
        A4: -0.10527e-4,
        A6: -0.36577e-7,
        A8: 0.58633e-10,
        A10: -0.28305e-12,
        A12: 0.8221e-16,
      },
    },
    { label: "6", R: 68.315, d: 10.04, sd: 16.5, medium: 4 },
    { label: "7", R: -23.529, d: 1.5, sd: 16, medium: 5 },
    { label: "8", R: 3223.071, d: 0.15, sd: 16 },
    { label: "9", R: 52.776, d: 2.5, sd: 12, medium: 6 },
    { label: "10", R: 59.872, sd: 11.5 },
    { label: "11", R: 31.7, d: 4.93, sd: 14, medium: 7 },
    { label: "12", R: -107.081, d: 0.61, sd: 13.4 },
    { label: "13", R: 638.554, d: 1, sd: 13, medium: 8 },
    { label: "14", R: 28.631, d: 4.88, sd: 12.4 },
    { label: "STO", R: "flat", d: 4.09 },
    { label: "16", R: -21.838, d: 1, sd: 12, medium: 9 },
    { label: "17", R: 119.399, d: 3.61, sd: 12.5, medium: 10 },
    { label: "18", R: -49.519, d: 0.2, sd: 13 },
    { label: "19", R: 39.257, d: 1, sd: 13.2, medium: 11 },
    { label: "20", R: 21.717, d: 7.09, sd: 13.2, medium: 12 },
    { label: "21", R: -43.658, d: 0.52, sd: 13 },
    {
      label: "22A",
      R: -126.06,
      d: 0.12,
      sd: 14,
      medium: 13,
      asphere: {
        K: 0,
        A4: -0.17739e-4,
        A6: 0.2994e-8,
        A8: -0.12218e-10,
        A10: 0.111346e-12,
        A12: 0,
      },
    },
    { label: "23", R: -78.726, d: 4.24, sd: 14, medium: 14 },
    { label: "24", R: -29.306, sd: 15 },
  ],

  focus: {
    closeFocusM: 0.23,
    description:
      "Rear-group inner focus: Gr1 is fixed; Gr2 moves 4.98 mm object-ward from infinity to close focus while BFD increases by 4.98 mm.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { "10": { label: "Gr1–Gr2", values: [[9.36, 4.38]] }, "24": { label: "BF", values: [[38.46, 43.44]] } },

  aperture: {
    nominalFNumber: 1.86,
    fStops: [1.86, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
    blades: 7,
    bladeRoundedness: 0.8,
  },

  groups: [
    { text: "Gr1 fixed", fromSurface: "1", toSurface: "10" },
    { text: "Gr2 focus", fromSurface: "11", toSurface: "24" },
  ],
  doublets: [
    { text: "H1", fromSurface: "3", toSurface: "5A" },
    { text: "LS", fromSurface: "6", toSurface: "8" },
    { text: "D1", fromSurface: "16", toSurface: "18" },
    { text: "D2", fromSurface: "19", toSurface: "21" },
    { text: "H2", fromSurface: "22A", toSurface: "24" },
  ],

  layout: { scFill: 0.58, yScFill: 0.78 },
} satisfies LensDataV2Input;

export default LENS_DATA;
