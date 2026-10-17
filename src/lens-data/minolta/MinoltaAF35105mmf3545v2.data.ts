import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Minolta AF 35-105mm f/3.5-4.5 New (v2)
 *
 * Source: US 4,871,239, Example 3 / claim 29, Minolta Camera Kabushiki Kaisha.
 * Prescription scale: patent scale, f = 36.0-60.0-102.0 mm.
 *
 * Corrections/modeling notes:
 * - The printed wide-angle d13 value is 5.505 mm. Paraxial tracing gives f = 74.636 mm with that value,
 *   not the stated 36.0 mm. The data model uses d13 = 15.505 mm at wide angle, which reproduces the
 *   patent focal length and condition values.
 * - The printed final "d = 66.067" is the wide-position construction length from r1 to r23 after the d13
 *   correction, not the back focal distance. The last surface d values are computed BFLs from r23 to image.
 * - Table 3 has no explicit aperture row. The stop is inferred from the figure and inserted 1.0 mm before r14;
 *   the corrected r13-to-r14 gap is therefore split as d13_to_stop + 1.0 mm.
 * - Semi-diameters are inferred clear apertures for rendering and validation, not patent-published values.
 */

const LENS_DATA = {
  schema: 2,
  key: "minolta-af-35-105mm-f3-5-4-5-v2",
  maker: "Minolta",
  name: "MINOLTA AF 35-105mm f/3.5-4.5 New (v2)",
  subtitle: "US 4,871,239 Example 3 / Claim 29",

  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "135-full-frame",
    specs: [
      "35-105 mm full-frame A-mount zoom",
      "Patent f = 36.0-60.0-102.0 mm",
      "13 optical media / 10 groups (12 production elements)",
      "1 rear-unit aspherical surface",
      "0.85 m minimum focus distance",
    ],
    elementCount: 13,
    groupCount: 10,
    focalLengthMm: { marketing: [35, 105], design: [35.998, 101.996] },
    fNumber: { marketing: 3.5, design: 3.6 },
  },

  source: {
    patentNumber: "US 4,871,239",
    patentYear: 1989,
    authors: ["Hisayuki Masumoto", "Akira Fukushima"],
    assignees: ["Minolta Camera Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.83,
      focalLengthMm: -85.5,
      glass: "SF57 (Schott exact match; production vendor unproven)",
      role: "Dense-flint negative member of the front cemented achromat.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.67,
      vd: 57.07,
      focalLengthMm: 59.4,
      glass: "S-LAL52 (OHARA catalog-equivalent to 670571; patent vendor unspecified)",
      role: "Positive crown member of the front cemented achromat.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 56.47,
      focalLengthMm: 93.5,
      glass: "H-LAK12 (CDGM equivalent; patent 697565)",
      role: "Air-spaced positive member completing the front positive group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.77,
      focalLengthMm: -24.1,
      glass: "772498 - lanthanum flint class (N-LAF34 / TAF1 catalog equivalent)",
      role: "Strong negative leading element of the variator group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Concave Negative",
      nd: 1.67,
      vd: 57.07,
      focalLengthMm: -50.5,
      glass: "S-LAL52 (OHARA catalog-equivalent to 670571; patent vendor unspecified)",
      role: "Weaker negative variator element with nearly plano front surface.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.83,
      focalLengthMm: 28.0,
      glass: "SF57 (Schott exact match; production vendor unproven)",
      role: "Dense-flint positive element that chromatically balances the negative variator group.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.618,
      vd: 63.39,
      focalLengthMm: -34.8,
      glass: "N-PSK53A (Schott exact match; production vendor unproven)",
      role: "High-Abbe trailing negative element of the variator group.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.67,
      vd: 57.07,
      focalLengthMm: 27.6,
      glass: "S-LAL52 (OHARA catalog-equivalent to 670571; patent vendor unspecified)",
      role: "Strong positive lead element of Group III-F.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      focalLengthMm: 21.4,
      glass: "N-BK7 / BK7-family crown (517/642 class)",
      role: "Low-dispersion positive crown member of the Group III-F cemented doublet.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.80741,
      vd: 31.59,
      focalLengthMm: -15.7,
      glass: "807316 - high-index dense flint class (unresolved)",
      role: "Strong negative flint member of the Group III-F correction doublet.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 42.02,
      focalLengthMm: 22.7,
      glass: "S-LAM58 (OHARA)",
      role: "Positive front member of Group III-B.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Thin Aspheric Layer",
      nd: 1.5179,
      vd: 52.31,
      focalLengthMm: 379.6,
      glass: "518523 - thin hybrid aspheric layer (unresolved)",
      role: "Thin layer carrying the rear-unit aspherical surface.",
      cemented: "H1",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.805,
      vd: 40.97,
      focalLengthMm: -27.1,
      glass: "805410 - dense lanthanum-flint / LASF-class glass (unresolved)",
      role: "Rear negative component for field, coma, and back-focus control.",
      cemented: "H1",
    },
  ],

  surfaces: [
    { label: "1", R: 120.926, d: 2.2, sd: 22.0, medium: 1 },
    { label: "2", R: 44.896, d: 7.15, sd: 21.0, medium: 2 },
    { label: "3", R: -326.54, d: 0.1, sd: 19.0 },
    { label: "4", R: 29.132, d: 3.25, sd: 18.5, medium: 3 },
    { label: "5", R: 50.276, sd: 17.0 },
    { label: "6", R: 66.325, d: 1.2, sd: 11.0, medium: 4 },
    { label: "7", R: 14.43, d: 3.95, sd: 9.4 },
    { label: "8", R: -1357.755, d: 1.15, sd: 9.4, medium: 5 },
    { label: "9", R: 34.737, d: 0.3, sd: 9.8 },
    { label: "10", R: 19.885, d: 2.68, sd: 10.0, medium: 6 },
    { label: "11", R: 114.785, d: 1.62, sd: 8.15 },
    { label: "12", R: -29.666, d: 1.15, sd: 8.15, medium: 7 },
    { label: "13", R: 79.294, sd: 8.4 },
    { label: "STO", R: "flat", d: 1.0 },
    { label: "14", R: 24.547, d: 3.15, sd: 8.3, medium: 8 },
    { label: "15", R: -71.33, d: 0.15, sd: 8.4 },
    { label: "16", R: 36.161, d: 6.0, sd: 8.4, medium: 9 },
    { label: "17", R: -15.061, d: 2.5, sd: 8.3, medium: 10 },
    { label: "18", R: 87.398, sd: 8.5 },
    { label: "19", R: 59.168, d: 3.0, sd: 9.1, medium: 11 },
    { label: "20", R: -22.059, d: 3.605, sd: 9.1 },
    {
      label: "21A",
      R: -25.806,
      d: 0.035,
      sd: 9.0,
      medium: 12,
      asphere: { K: 0, A4: -0.6602e-4, A6: -0.522e-7, A8: -0.64384e-8, A10: -0.11612e-9, A12: -0.84797e-12 },
    },
    { label: "22", R: -22.822, d: 1.8, sd: 9.0, medium: 13 },
    { label: "23", R: 503.492, sd: 9.0 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 35.998, nominalFNumber: 3.5, label: "35 mm" },
      { focalLengthMm: 59.997, nominalFNumber: 4.2 },
      { focalLengthMm: 101.996, nominalFNumber: 4.5, label: "105 mm" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.85,
    description:
      "Rear-group focusing by Group III-F and Group III-B. The patent gives no close-focus spacing table for Example 3, so the model represents the verified infinity-focus zoom positions only.",
  },

  gaps: {
    "5": {
      label: "D5",
      values: [
        [0.9, 0.9],
        [9.586, 9.586],
        [17.809, 17.809],
      ],
    },
    "13": {
      label: "D13",
      values: [
        [14.505, 14.505],
        [7.926, 7.926],
        [1.36, 1.36],
      ],
    },
    "18": {
      label: "D18",
      values: [
        [4.673, 4.673],
        [2.566, 2.566],
        [0.909, 0.909],
      ],
    },
    "23": {
      label: "BF",
      values: [
        [36.766621, 36.766621],
        [45.362004, 45.362004],
        [53.43524, 53.43524],
      ],
    },
  },

  aperture: { fStops: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22], maxFNumber: 27 },

  groups: [
    { text: "I", fromSurface: "1", toSurface: "5" },
    { text: "II", fromSurface: "6", toSurface: "13" },
    { text: "III-F", fromSurface: "14", toSurface: "18" },
    { text: "III-B", fromSurface: "19", toSurface: "23" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "16", toSurface: "18" },
    { text: "H1", fromSurface: "21A", toSurface: "23" },
  ],

  layout: { scFill: 0.58, yScFill: 0.45 },
} satisfies LensDataV2Input;

export default LENS_DATA;
