import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF 28mm f/2.8 IS USM — JP 2013-054269 A, Numerical Example 1.
 * Original-PDF shape/glass review: 2026-10-30. All published R/d, clear semi-diameters,
 * asphere coefficients, stops and focus spacings remain. Three resolved air-facing shoulders
 * preserve clear caps; the rear doublet uses a conservative bonded-cap outer anchor.
 * The source explicitly defines d-line indices (paragraph 0052); nine compatible catalog
 * curves remain qualified spectral proxies, not historical supplier/melt/chemistry evidence.
 * No source C/F/g indices, partial dispersions or per-lens catalog overrides are authored.
 *
 * Focus is a constrained reconstruction: rigid L2, including STO and Gis, moves objectward
 * 6.0676600764 mm at the product-constrained 0.23 m endpoint. D5 decreases as BF increases.
 * No source finite-focus spacing table or millimetre IS decenter is published; runtime is centered.
 * Design dummy surface 1 and inactive co-located flare cutter 19 remain omitted; no scaling.
 * The stop's 13.11 mm source effective-diameter row is envelope evidence, while the existing
 * iris remains derived from f/2.86. Existing gapSagFrac 0.95 and source s3/s4 caps remain.
 * See the audit for native figure resolution, rejected full-blank trials and runtime limits.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-28mm-f28-is-usm",
  maker: "Canon",
  name: "CANON EF 28mm f/2.8 IS USM",
  subtitle: "JP 2013-054269 A — Numerical Example 1; production correlation inferred",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "9 ELEMENTS / 7 GROUPS",
      "DESIGN f = 28.60 mm",
      "DESIGN F/2.86",
      "2ω = 74.22°",
      "1 ASPHERICAL SURFACE",
      "OPTICAL IMAGE STABILIZATION",
    ],
    elementCount: 9,
    groupCount: 7,
    focalLengthMm: { marketing: 28, design: 28.6 },
    fNumber: { marketing: 2.8, design: 2.86 },
  },

  source: {
    patentNumber: "JP 2013-054269 A",
    example: { label: "Numerical Example 1", id: "1" },
    patentYear: 2013,
    authors: ["Makoto Nakahara"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.6,
      focalLengthMm: -79.06770868196946,
      glass: "J-SK14 (Hikari; compatible spectral proxy; historical glass unresolved)",
      apd: false,
      role: "Fixed front-group negative meniscus providing the principal retrofocus expansion.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 131.07705183894166,
      glass: "J-LASF016 (Hikari; compatible spectral proxy; historical glass unresolved)",
      apd: false,
      role: "Fixed front-group biconvex positive element moderating the front pair's net negative power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: -55.24882941282274,
      glass: "S-FSL5 (Ohara; compatible spectral proxy; historical glass unresolved)",
      apd: false,
      role: "Front element of the rigid moving focus unit and pre-stop aberration corrector.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.3,
      focalLengthMm: 16.55194183225374,
      glass: "H-ZLaF4LA (CDGM; compatible spectral proxy; historical glass unresolved)",
      apd: false,
      role: "Strong positive component of the pre-stop cemented doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.3,
      focalLengthMm: -23.405599839130957,
      glass: "J-KZFH9 (Hikari; compatible spectral proxy; historical glass unresolved)",
      apd: false,
      role: "Negative component of the pre-stop cemented doublet.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "Gis",
      label: "Element 6 — IS Group",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: 72.82236010257928,
      glass: "TAC8 (Hoya; compatible spectral proxy; historical glass unresolved)",
      apd: false,
      role: "Single positive stabilization element translated laterally for image-shift correction.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.74,
      vd: 28.3,
      focalLengthMm: -19.67300605089382,
      glass: "S-TIH3 (Ohara; compatible spectral proxy; historical glass unresolved)",
      apd: false,
      role: "Negative component of the rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 28.319493241638853,
      glass: "J-LAK14 (Hikari; compatible spectral proxy; historical glass unresolved)",
      apd: false,
      role: "Positive component of the rear cemented doublet.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: 47.61292970706964,
      glass: "J-SK12 (Hikari; compatible spectral proxy; historical glass unresolved)",
      apd: false,
      role: "Final positive meniscus; its object-side asphere controls peripheral aberrations.",
    },
  ],

  surfaces: [
    { label: "2", R: 62.223, d: 1.53, sd: 21, medium: 1 },
    { label: "3", R: 26.747, d: 6.75, sd: 18.075, rimExtensionSd: 21 },
    { label: "4", R: 277.138, d: 2.79, sd: 17.945, medium: 2 },
    { label: "5", R: -158.852, sd: 17.62 },
    { label: "6", R: 72.398, d: 1.13, sd: 11.72, medium: 3 },
    { label: "7", R: 19.53, d: 10.06, sd: 10.27, rimExtensionSd: 11.72 },
    { label: "8", R: 22.447, d: 3.4, sd: 6.995, medium: 4 },
    { label: "9", R: -42.595, d: 0.72, sd: 6.845, medium: 5 },
    { label: "10", R: 29.265, d: 3.28, sd: 6.62 },
    // JP 2013-054269 A, Numerical Example 1 surface table: printed effective diameter 13.11 mm at the stop.
    { label: "STO", R: "flat", d: 4.09 },
    { label: "12", R: 105.862, d: 1.59, sd: 6.75, medium: 6 },
    { label: "13", R: -105.862, d: 3.57, sd: 6.75 },
    {
      label: "14",
      R: -13.728,
      d: 1.45,
      sd: 6.41,
      medium: 7,
      rimExtensionSd: 7.59,
    },
    { label: "15", R: -251.595, d: 4.39, sd: 7.59, medium: 8 },
    { label: "16", R: -18.429, d: 0.8, sd: 8.75 },
    {
      label: "17A",
      R: -64.983,
      d: 3.21,
      sd: 9.735,
      medium: 9,
      asphere: {
        K: 0,
        A4: -2.52195e-5,
        A6: 4.30341e-8,
        A8: -6.12181e-10,
        A10: 1.94445e-12,
        A12: 0,
        A14: 0,
      },
    },
    { label: "18", R: -19.807, sd: 10.25 },
  ],

  focus: {
    closeFocusM: 0.23,
    description:
      "CONSTRAINED_RECONSTRUCTION: patent-disclosed rigid rear focus. L2 (surfaces 6-18, including STO and Gis) " +
      "moves 6.067660 mm objectward at the modeled 0.23 m state; D5 decreases as BF increases by the same amount.",
  },

  gaps: {
    "5": { label: "D5", values: [[7.05, 0.9823399235756094]] },
    "18": { label: "BF", values: [[38.28, 44.34766007642439]] },
  },

  aperture: { nominalFNumber: 2.86, fStops: [2.86, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "L1 — FIXED", fromSurface: "2", toSurface: "5" },
    { text: "L2a — FOCUS", fromSurface: "6", toSurface: "10" },
    { text: "Gis — IS", fromSurface: "12", toSurface: "13" },
    { text: "L2b — FOCUS", fromSurface: "14", toSurface: "18" },
  ],
  doublets: [
    { text: "D1", fromSurface: "8", toSurface: "10" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
  ],

  layout: { yScFill: 0.55 },

  checks: { gapSagFrac: 0.95 },
} satisfies LensDataV2Input;

export default LENS_DATA;
