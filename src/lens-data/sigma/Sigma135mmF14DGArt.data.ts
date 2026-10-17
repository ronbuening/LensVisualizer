import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Sigma 135mm F1.4 DG | Art (A025): US20260086332A1 Numerical Example 1.
 * Selected production correlation, not a manufacturer-confirmed patent attribution.
 * Native 131.00 mm / F1.46 prescription is unscaled; marketing is 135 mm / F1.4.
 * 17 elements / 13 air-separated groups; four aspheres with all A4-A20 coefficients.
 * Focus status PUBLISHED: three printed configurations, no reconstructed optical values.
 * US paragraph 0205 prints (y/z)^2 in the sag equation. The original Japanese family
 * JP2026-056718 A paragraph 0097 explicitly prints (y/r)^2 with 1+K; that primary-backed
 * correction is used. No coefficient refit. The literal US error remains in the dossier.
 * Plane 32 is a neutral air plane at the image; omit it and retain the physical d31 gap.
 * Stop radius is derived from the design f-number F1.46 by exact tracing, not a published diameter.
 * All surface SDs are estimated from Figure 1 (PDF page 2, infinity state) and floor-checked
 * by exact ray trace; they are not patent-listed clear apertures. Figure 1 is drawn 0.92 as
 * tall as it is long (surface-curve fits and the drawn stop opening agree), and the readings
 * correct for that. Figure 1 and Sigma's construction diagram draw L5, L7 and L9 as flanged
 * blocks: the concave rear curve ends at 32.7, 25.3 and 18.8 mm and a flat annulus runs out
 * to the 37.6, 29.7 and 21.8 mm blank. The annulus is not modeled. Rear faces 9, 13 and 18
 * sit between the two at 36.0, 26.5 and 20.5 mm (Sigma steps those corners at 36.2, 27.1 and
 * 20.3 mm), so each rim draws as a block with a shallow slope whose lip stays more than
 * 1 mm short of the next element's rim; the axial F1.46 ray needs 32.51, 25.30 and
 * 18.78 mm there. L16 and L17 share the 17.8 mm rim line
 * FIG. 1 and Sigma's diagram draw and surface 27 ends at its drawn 17.0 mm; gapSagFrac 0.97 is
 * the smallest two-decimal cross-gap limit that admits them (the 29-30A faces close 0.969 of
 * their 1.299 mm gap without crossing). Source radii,
 * spacings, indices and coefficients are never adjusted for aperture, geometry or
 * performance. Final diagnostics govern SDs.
 * Glass labels are coordinate/PgF-compatible catalog equivalents; supplier/melt unknown.
 * Patent absolute PgF is converted to runtime dPgF using its own documented normal line.
 * No absolute nC/nF/ng values are fabricated from nd/vd/PgF.
 */

const LENS_DATA = {
  schema: 2,
  key: "sigma-135mm-f14-dg-art",
  maker: "Sigma",
  name: "SIGMA 135mm f/1.4 DG | Art",
  subtitle: "US 2026/0086332 A1, Numerical Example 1 — correlated with the A025 production lens",

  catalog: {
    lensMounts: ["l-mount", "sony-fe"],
    imageFormat: "135-full-frame",
    imageCircleMm: 43.26,
    specs: [
      "17 ELEMENTS / 13 GROUPS",
      "DESIGN f = 131.00 mm",
      "DESIGN F/1.46",
      "2ω = 18.16°",
      "4 ASPHERICAL SURFACES / 2 ELEMENTS",
    ],
    elementCount: 17,
    groupCount: 13,
    focalLengthMm: { marketing: 135, design: 131 },
    fNumber: { marketing: 1.4, design: 1.46 },
  },

  source: {
    patentNumber: "US 2026/0086332 A1",
    patentYear: 2026,
    authors: ["Yukihiro Yamamoto"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.86966,
      vd: 20.02,
      focalLengthMm: 366.484444,
      glass: "FDS20-W (HOYA)",
      apd: "patent",
      apdNote:
        "Patent conditions (10) and (11) bound the Abbe number and the g-F anomalous dispersion of the positive lens closest to the object: ΔPgF = θgF − 0.64833 + 0.00180·νd = +0.031 for this element, inside the claimed 0.010 to 0.100. The same θgF 0.6435 is +0.0334 from the engine's normal line.",
      role: "Fixed front-group element",
      dPgF: 0.03337364,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 385.919889,
      glass: "FCD100 (HOYA)",
      apd: "inferred",
      apdNote:
        "Fluorite-like low-dispersion coordinate at one of the four positions Sigma's construction diagram fills as FLD glass; inferred from the glass family and the patent θgF, not a patent designation.",
      role: "Fixed front-group element",
      dPgF: 0.0497582,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 312.344828,
      glass: "FCD100 (HOYA)",
      apd: "inferred",
      apdNote:
        "Fluorite-like low-dispersion coordinate at one of the four positions Sigma's construction diagram fills as FLD glass; inferred from the glass family and the patent θgF, not a patent designation.",
      role: "Fixed front-group element",
      dPgF: 0.0497582,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 94.93,
      focalLengthMm: 207.579221,
      glass: "S-FPL53 (OHARA)",
      apd: "inferred",
      apdNote:
        "Fluorite-like low-dispersion coordinate at one of the four positions Sigma's construction diagram fills as FLD glass; inferred from the glass family and the patent θgF, not a patent designation.",
      role: "Fixed front-group element",
      cemented: "D1",
      dPgF: 0.04987226,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.90043,
      vd: 37.37,
      focalLengthMm: -127.700406,
      glass: "TAFD37A (HOYA)",
      role: "Fixed front-group element",
      cemented: "D1",
      dPgF: -0.00424366,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 94.93,
      focalLengthMm: 151.669531,
      glass: "S-FPL53 (OHARA)",
      apd: "inferred",
      apdNote:
        "Fluorite-like low-dispersion coordinate at one of the four positions Sigma's construction diagram fills as FLD glass; inferred from the glass family and the patent θgF, not a patent designation.",
      role: "Fixed front-group element",
      dPgF: 0.04987226,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.85451,
      vd: 25.15,
      focalLengthMm: -99.697902,
      glass: "NBFD25 (HOYA)",
      role: "Fixed front-group element",
      dPgF: 0.0088023,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus Aspheric",
      nd: 1.58313,
      vd: 59.46,
      focalLengthMm: 128.316112,
      glass: "M-BACD12 (HOYA)",
      role: "Fixed front-group element",
      dPgF: -0.00328828,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.755,
      vd: 52.32,
      focalLengthMm: -53.348088,
      glass: "TAC6 (HOYA)",
      role: "Imageward-moving negative focus singlet",
      dPgF: -0.00849776,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: -68.385673,
      glass: "FDS90-SG (HOYA)",
      role: "Objectward-moving focus doublet",
      cemented: "D2",
      dPgF: 0.01539796,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.72916,
      vd: 54.54,
      focalLengthMm: 89.958329,
      glass: "TAC8P (HOYA)",
      role: "Objectward-moving focus doublet",
      cemented: "D2",
      dPgF: -0.00676372,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.881,
      vd: 40.14,
      focalLengthMm: 30.856384,
      glass: "TAFD33 (HOYA)",
      role: "Fixed rear-group element",
      cemented: "D3",
      dPgF: -0.00628452,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Negative Meniscus",
      nd: 1.76634,
      vd: 35.82,
      focalLengthMm: -131.023532,
      glass: "S-NBH59 (OHARA)",
      role: "Fixed rear-group element",
      cemented: "D3",
      dPgF: -0.00435076,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.94594,
      vd: 17.98,
      focalLengthMm: 57.722587,
      glass: "FDS18-W (HOYA)",
      role: "Fixed rear-group element",
      cemented: "D4",
      dPgF: 0.04104236,
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Biconcave Negative",
      nd: 1.76182,
      vd: 26.61,
      focalLengthMm: -34.426792,
      glass: "FD140 (HOYA)",
      role: "Fixed rear-group element",
      cemented: "D4",
      dPgF: 0.01325802,
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Biconvex Positive",
      nd: 2.00069,
      vd: 25.46,
      focalLengthMm: 82.909044,
      glass: "TAFD40-W (HOYA)",
      role: "Fixed rear-group element",
      dPgF: 0.01262372,
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconcave Negative Aspheric",
      nd: 1.58313,
      vd: 59.46,
      focalLengthMm: -95.851232,
      glass: "M-BACD12 (HOYA)",
      role: "Fixed rear-group element",
      dPgF: -0.00328828,
    },
  ],

  surfaces: [
    { label: "1", R: 139.1088, d: 4.8329, sd: 48, medium: 1 },
    { label: "2", R: 242.8613, d: 0.9, sd: 48 },
    { label: "3", R: 92.4653, d: 8.0166, sd: 45, medium: 2 },
    { label: "4", R: 199.2979, d: 0.15, sd: 45 },
    { label: "5", R: 66.2231, d: 9.2418, sd: 42, medium: 3 },
    { label: "6", R: 123.1719, d: 0.7, sd: 42 },
    { label: "7", R: 57.9228, d: 11.0967, sd: 38, medium: 4 },
    { label: "8", R: 149.8268, d: 2.4925, sd: 38, medium: 5 },
    { label: "9", R: 64.5442, d: 0.15, sd: 36.0 },
    { label: "10", R: 53.9493, d: 10.9955, sd: 33.8, medium: 6 },
    { label: "11", R: 267.3073, d: 0.15, sd: 33.8 },
    { label: "12", R: 71.7755, d: 1.451, sd: 30, medium: 7 },
    { label: "13", R: 38.5925, d: 3.6698, sd: 26.5 },
    {
      label: "14A",
      R: 47.4008,
      d: 6.5576,
      sd: 26.8,
      medium: 8,
      asphere: {
        K: 1.31969,
        A4: -1.746e-06,
        A6: -2.74822e-10,
        A8: -5.27433e-12,
        A10: 1.14794e-14,
        A12: -1.96123e-17,
        A14: 1.81911e-20,
        A16: -1.23654e-23,
        A18: 2.16244e-27,
        A20: -6.33221e-31,
      },
    },
    {
      label: "15A",
      R: 122.7395,
      d: 5.7746,
      sd: 26.8,
      asphere: {
        K: -0.49418,
        A4: 8.007e-07,
        A6: 1.89969e-09,
        A8: -1.05116e-11,
        A10: 3.73574e-14,
        A12: -7.5348e-17,
        A14: 8.48844e-20,
        A16: -4.45989e-23,
        A18: -6.26134e-27,
        A20: 1.29953e-29,
      },
    },
    { label: "STO", R: "flat" },
    { label: "17", R: 402.5829, d: 1.083, sd: 22.5, medium: 9 },
    { label: "18", R: 36.5722, sd: 20.5 },
    { label: "19", R: 61.6251, d: 1.0, sd: 20.5, medium: 10 },
    { label: "20", R: 29.63, d: 4.2961, sd: 20.5, medium: 11 },
    { label: "21", R: 50.7374, sd: 20.5 },
    { label: "22", R: 52.1881, d: 8.939, sd: 20.5, medium: 12 },
    { label: "23", R: -52.1881, d: 1.0, sd: 20.5, medium: 13 },
    { label: "24", R: -109.5737, d: 0.7, sd: 20.5 },
    { label: "25", R: 1000.0, d: 5.3636, sd: 19.0, medium: 14 },
    { label: "26", R: -57.6051, d: 1.0, sd: 19.0, medium: 15 },
    { label: "27", R: 48.51, d: 1.9463, sd: 17.0 },
    { label: "28", R: 116.6417, d: 3.1455, sd: 17.8, medium: 16 },
    { label: "29", R: -283.4942, d: 1.2989, sd: 17.8 },
    {
      label: "30A",
      R: -72.1371,
      d: 1.4004,
      sd: 17.8,
      medium: 17,
      asphere: {
        K: -9.33638,
        A4: 1.40182e-06,
        A6: 6.12079e-09,
        A8: -1.36953e-10,
        A10: 1.20007e-12,
        A12: -5.23473e-15,
        A14: 1.15364e-17,
        A16: -8.53231e-21,
        A18: -9.90443e-24,
        A20: 1.46825e-26,
      },
    },
    {
      label: "31A",
      R: 250.0,
      d: 28.4437,
      sd: 17.8,
      asphere: {
        K: 3.00773,
        A4: 5.9741e-06,
        A6: 5.19546e-09,
        A8: -1.40827e-10,
        A10: 1.3663e-12,
        A12: -6.38593e-15,
        A14: 1.58507e-17,
        A16: -1.69005e-20,
        A18: -3.43479e-24,
        A20: 1.53859e-26,
      },
    },
  ],

  focus: {
    closeFocusM: 1.1040276,
    keyframes: [0, 0.4586547991042496, 1],
    description:
      "PUBLISHED: fixed front/rear groups and iris; GrFC1 moves imageward and GrFC2 objectward. Three tabulated states are preserved at infinity, 2.4070992 m and 1.1040276 m object-to-image. Between-state gap interpolation is illustrative, not a published cam law. Marketed minimum focus is 1.1 m.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 2254.5496,
        distanceReference: "first-surface",
        source:
          "US 2026/0086332 A1 Example 1, printed page 10: d0 and the 2407 mm gap column; authored image plane retained.",
      },
      {
        zoomStation: 0,
        keyframe: 2,
        objectDistanceMm: 951.478,
        distanceReference: "first-surface",
        source:
          "US 2026/0086332 A1 Example 1, printed page 10: d0 and the 1104 mm gap column; authored image plane retained.",
      },
    ],
  },

  gaps: {
    STO: { label: "D16", values: [[3.2297, 7.6457, 14.4546]] },
    "18": { label: "D18", values: [[20.3908, 15.192, 7.0477]] },
    "21": { label: "D21", values: [[3.1336, 3.9164, 5.2518]] },
  },

  aperture: { nominalFNumber: 1.46, fStops: [1.46, 2, 2.8, 4, 5.6, 8, 11, 16], blades: 13 },

  groups: [
    { text: "GrF", fromSurface: "1", toSurface: "15A" },
    { text: "GrFC1", fromSurface: "17", toSurface: "18" },
    { text: "GrFC2", fromSurface: "19", toSurface: "21" },
    { text: "GrR", fromSurface: "22", toSurface: "31A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "19", toSurface: "21" },
    { text: "D3", fromSurface: "22", toSurface: "24" },
    { text: "D4", fromSurface: "25", toSurface: "27" },
  ],

  layout: { yScFill: 0.67 },

  checks: { gapSagFrac: 0.97 },
} satisfies LensDataV2Input;

export default LENS_DATA;
