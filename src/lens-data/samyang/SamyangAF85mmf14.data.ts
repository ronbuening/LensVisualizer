import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Samyang AF 85mm f/1.4 FE
 *
 * Data source: WO 2021/085655 A1, Example 3, Tables 5-7.
 * 11 elements / 8 air-spaced groups, all spherical surfaces.
 * Focus: single negative meniscus focus group G320 moves image-ward by 5.053 mm.
 *
 * Table 5 surfaces 21-22 are a filter plate (2.5 mm, nd 1.5168, νd 64.2) followed by
 * 0.5 mm air and D3 (0.03 mm at infinity) to the image. It is modeled in `rearPlates`
 * (traced, not drawn) with gapAfter = 0.5 + 0.03 = 0.53 mm. Surface 20 stores the printed
 * 14.678 mm gap to the filter at infinity. At 0.90 m the printed D3 row (0.033) disagrees
 * with the printed "in Air" BFD row (16.854 -> 17.045, +0.191 mm), and only the in-Air
 * value reproduces the close-focus image; the file keeps that image plane by carrying the
 * +0.191 mm in the surface-20 gap (14.869 mm at 0.90 m, derived, not printed).
 *
 * Semi-diameters are inferred from the f/1.47 paraxial marginal ray and chief-ray traces,
 * then constrained by edge thickness, sd/|R| < 0.90, cross-gap sag clearance, and the 77 mm
 * production filter-thread envelope. The final pass keeps the fixed front group broad while
 * narrowing the single moving focus lens and final meniscus to match the patent figure's
 * stepped telephoto silhouette. The stop radius is derived from the design f-number F/1.47
 * and EFL=83.996 mm; patent Table 5's STOP row (16.097 mm) follows the inconsistent prose value
 * f=85.86 mm rather than the tabulated f=84 mm prescription.
 */

const LENS_DATA = {
  schema: 2,
  key: "samyang-af-85mm-f14-fe",
  maker: "Samyang",
  name: "SAMYANG AF 85mm f/1.4 FE",
  subtitle: "WO 2021/085655 A1 Example 3 - Samyang Optics / Kim Moon-Kyung",

  catalog: {
    lensMounts: ["sony-fe"],
    imageFormat: "135-full-frame",
    specs: [
      "11 elements / 8 groups",
      "f = 83.996 mm design / 85 mm marketed",
      "F/1.47 design / f/1.4 marketed",
      "2ω = 28.9°",
      "All-spherical, 4 HR + 1 ED",
    ],
    elementCount: 11,
    groupCount: 8,
    focalLengthMm: { marketing: 85, design: 83.996 },
    fNumber: { marketing: 1.4, design: 1.47 },
  },

  source: {
    patentNumber: "WO 2021/085655 A1",
    patentYear: 2021,
    authors: ["Moon-Kyung Kim"],
    assignees: ["Samyang Optics Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 2.00069,
      vd: 25.46,
      focalLengthMm: 76.92,
      glass: "TAFD40 (HOYA) / H-ZLaF90 class",
      apd: false,
      role: "High-index front positive meniscus for the large f/1.4 entrance cone.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 80.91,
      glass: "FCD1 (HOYA) / S-FPL51 class",
      apd: false,
      role: "ED crown component of the front achromatizing doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Plano-Concave Negative",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -35.25,
      glass: "FDS90 (HOYA) / S-TIH53 class",
      apd: false,
      role: "Dense-flint partner to the ED element; primary axial-color correction.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.62,
      focalLengthMm: 54.44,
      glass: "S-LAH66 (OHARA) / TAF1 (HOYA) class",
      apd: false,
      role: "Strong positive lanthanum-flint element closing the fixed front group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.94,
      focalLengthMm: -47.1,
      glass: "LAC8 (HOYA) / S-LAL8 class",
      apd: false,
      role: "Single-element internal-focus group G320.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.7552,
      vd: 27.53,
      focalLengthMm: -26.43,
      glass: "E-FD4 (HOYA) / S-TIH4 class",
      apd: false,
      role: "Negative flint component of the first rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.713,
      vd: 53.94,
      focalLengthMm: 23.31,
      glass: "LAC8 (HOYA) / S-LAL8 class",
      apd: false,
      role: "Positive lanthanum-crown component of the first rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.53,
      focalLengthMm: -25.2,
      glass: "E-FD4 (HOYA) / S-TIH4 class",
      apd: false,
      role: "Negative dense-flint component of the second rear doublet.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.92286,
      vd: 20.88,
      focalLengthMm: 31.02,
      glass: "E-FDS1 (HOYA) / H-ZF62 class",
      apd: false,
      role: "High-index positive flint in the second rear cemented doublet.",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: 45.78,
      glass: "TAFD55 (HOYA) / S-LAH99 class",
      apd: false,
      role: "High-index positive rear relay element.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.94595,
      vd: 17.98,
      focalLengthMm: -91.09,
      glass: "FDS18 (HOYA) / H-ZF88 class",
      apd: false,
      role: "Rear negative meniscus with convex image-side surface for ghost suppression.",
    },
  ],

  surfaces: [
    { label: "1", R: 58.93, d: 7.67, sd: 31.8, medium: 1 },
    { label: "2", R: 235.051, d: 1.232, sd: 31.2 },
    { label: "3", R: 40.211, d: 10.395, sd: 26.6, medium: 2 },
    { label: "4", R: "flat", d: 1.9, sd: 26.5, medium: 3 },
    { label: "5", R: 29.846, d: 3.637, sd: 25.7 },
    { label: "6", R: 35.905, d: 6.862, sd: 21.9, medium: 4 },
    { label: "7", R: 225.077, sd: 21.0 },
    { label: "8", R: 656.333, d: 1, sd: 19.2, medium: 5 },
    { label: "9", R: 31.93, sd: 19.0 },
    { label: "STO", R: "flat", d: 4.197 },
    { label: "11", R: 541.689, d: 1.9, sd: 16.5, medium: 6 },
    { label: "12", R: 19.223, d: 10.447, sd: 15.8, medium: 7 },
    { label: "13", R: -94.886, d: 2.331, sd: 15.7 },
    { label: "14", R: -44.171, d: 1.5, sd: 16.8, medium: 8 },
    { label: "15", R: 33.915, d: 6.366, sd: 17.0, medium: 9 },
    { label: "16", R: -167.037, d: 4.428, sd: 17.2 },
    { label: "17", R: 145.893, d: 4.589, sd: 18.4, medium: 10 },
    { label: "18", R: -65.755, d: 16.474, sd: 18.3 },
    { label: "19", R: -36.344, d: 1.5, sd: 19.6, medium: 11 },
    { label: "20", R: -64.119, sd: 19.4 },
  ],

  focus: {
    closeFocusM: 0.9,
    description: "Single-element internal focus: negative meniscus G320 moves image-ward by 5.053 mm.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: {
    "7": { label: "D1", values: [[1.94373, 6.99684]] },
    "9": { label: "D2", values: [[9.91877, 4.86565]] },
    "20": { label: "BF (to filter)", values: [[14.678, 14.869]] },
  },

  aperture: { nominalFNumber: 1.47, fStops: [1.47, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 9 },

  /* ── Filter plate (patent Table 5 surfaces 21–22): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 2.5,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 0.53,
      source: "WO 2021/085655 A1, Example 3 Table 5 surfaces 21–22 (0.5 mm + Table 6 D3 0.03 mm after)",
    },
  ],

  groups: [
    { text: "G310 (+)", fromSurface: "1", toSurface: "7" },
    { text: "G320 focus (-)", fromSurface: "8", toSurface: "9" },
    { text: "G330 (+)", fromSurface: "11", toSurface: "20" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "11", toSurface: "13" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
  ],

  layout: { scFill: 0.58, yScFill: 0.72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
