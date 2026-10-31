import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon EF 28–90mm f/4–5.6 II USM — JP 2009-282554 A, Numerical Example 6.
 * Original prescription/asphere: PDF p. 15; selected wide section Fig. 21: PDF p. 28. R/d, asphere, source zoom
 * gaps and existing reconstructed G1 finite-focus trajectories are retained. The source's inactive flare cutter
 * (surface 20) remains omitted; modeled BF is independently solved, with inferred FC-to-image distance about
 * 38.72–38.74 mm rather than an explicitly published camera-side spacing.
 *
 * All ten source index/Abbe pairs are literal, including rounded Abbe values formerly replaced by catalog decimals.
 * ¶0035 (PDF p. 9) does not identify their spectral reference. All media are Unmatched with explicit approximate
 * d-line tracing; nine former catalog curves and 36 catalog-derived nC/nF/ng/dPgF overrides are disabled/removed.
 * The plastic-asphere teaching permits a material class but does not establish this medium's formulation or process.
 *
 * Source aperture targets are 3.83/4.45/5.88 rather than the retail endpoint marks. Source headline 3.83 versus wide
 * plot 3.84 remains unresolved in source.errata; no physical iris schedule is inferred and the derived rule is retained.
 * Table 1's extra Abbe-difference precision also remains unresolved; source pairs are not tuned to fit catalog values.
 *
 * Fig. 21 is a native roughly 200 ppi raster at about 6.77 px/mm, practical rim uncertainty ±0.5 mm. S2 keeps clear
 * sd 14.7 and adds a resolved flat shoulder to 19.2, beyond its 18.35 mm sphere radius without optical extrapolation.
 * Facing S3 follows the independently visible roughly 15 mm rim. No opaque interface land, hybrid wing or cut is added.
 *
 * Production correlation is inferred; the original does not name the 2002 retail lens. Only three published infinity
 * stations are quantitative anchors; current interpolation and 0.38 m finite focus remain illustrative reconstructions.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-28-90mm-f4-56-ii-usm",
  maker: "Canon",
  name: "CANON EF 28-90mm f/4-5.6 II USM",
  subtitle: "JP 2009-282554 A — Numerical Example 6; production correlation inferred",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "10 elements / 8 air-spaced groups",
      "28-90mm f/4-5.6",
      "Canon EF / 135 format",
      "4 moving zoom groups (- / + / - / +)",
      "1 aspherical surface",
      "Micro-USM; front-group focus",
    ],
    elementCount: 10,
    groupCount: 8,
    focalLengthMm: { marketing: [28, 90], design: [28.9, 86.89] },
    fNumber: { marketing: 4, design: 3.83 },
  },

  source: {
    patentNumber: "JP 2009-282554 A",
    example: { label: "Numerical Example 6", id: "6" },
    patentYear: 2009,
    authors: ["Makoto Misaka"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "Numerical Example 6 headline (PDF p. 15) prints wide Fno 3.83, whereas corresponding Fig. 22 (PDF p. 29) prints 3.84. The model uses the prescription headline as its declared target; no cause or physical iris schedule is inferred. Source Fig. 23/24 print 4.45/5.88. The retail 4/5.6 marks are kept separate.",
      },
      {
        status: "unresolved",
        note: "Table 1, Numerical Example 6 (PDF p. 17), prints ν2p−ν2n=36.860 and ν3n−ν3p=7.290, while literal Example 6 material rows (PDF p. 15) give 60.6−23.8=36.8 and 31.1−23.8=7.3. The table's precision basis is not printed. Retained source Abbe pairs are not replaced with catalog decimals to reproduce those table cells; rounding is an unconfirmed explanation.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Group 1 front negative meniscus",
      type: "Negative Meniscus, convex to object",
      nd: 1.622992,
      vd: 58.2,
      focalLengthMm: -59.434955,
      glass:
        "S-BSM15 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Front negative collector; moderates wide-angle distortion and coma while limiting the front-group diameter.",
    },
    {
      id: 2,
      name: "E2",
      label: "Group 1 biconcave negative",
      type: "Biconcave Negative",
      nd: 1.622992,
      vd: 58.2,
      focalLengthMm: -46.69339,
      glass:
        "S-BSM15 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Second negative member concentrating Group 1 power and shaping the negative-lead entrance geometry.",
    },
    {
      id: 3,
      name: "E3",
      label: "Group 1 positive meniscus",
      type: "Positive Meniscus, convex to object",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 76.59215,
      glass:
        "S-TIH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "High-dispersion positive member that balances Group 1 spherical and longitudinal chromatic aberration.",
    },
    {
      id: 4,
      name: "E4",
      label: "Group 2 front biconvex positive",
      type: "Biconvex Positive",
      nd: 1.701536,
      vd: 41.2,
      focalLengthMm: 60.21314,
      glass:
        "S-BAH27 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Front positive singlet of the principal variator group.",
    },
    {
      id: 5,
      name: "E5",
      label: "Group 2 negative cemented member",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -41.769774,
      glass:
        "S-TIH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Dispersive negative member of the Group 2 achromatizing doublet.",
      cemented: "J2",
    },
    {
      id: 6,
      name: "E6",
      label: "Group 2 positive cemented member",
      type: "Biconvex Positive",
      nd: 1.603112,
      vd: 60.6,
      focalLengthMm: 22.061658,
      glass:
        "S-BSM14 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Crown positive member providing most of the rear-doublet power and longitudinal color correction.",
      cemented: "J2",
    },
    {
      id: 7,
      name: "E7",
      label: "Group 3 negative cemented member",
      type: "Biconcave Negative",
      nd: 1.688931,
      vd: 31.1,
      focalLengthMm: -16.651422,
      glass:
        "S-TIM28 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Strong negative member of the stop-coupled compensator group.",
      cemented: "J3",
    },
    {
      id: 8,
      name: "E8",
      label: "Group 3 positive cemented member",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: 23.954582,
      glass:
        "S-TIH53 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "High-index positive partner controlling the net negative Group 3 power and cemented-interface coma.",
      cemented: "J3",
    },
    {
      id: 9,
      name: "E9",
      label: "Group 4 negative asphere; material unresolved",
      type: "Negative Meniscus, concave to object (1× Asph)",
      nd: 1.58306,
      vd: 30.2,
      focalLengthMm: -277.806212,
      glass: "Unmatched (source plastic-asphere option; n=1.58306, ν=30.2; POLYCARB is a near candidate)",
      role: "Weak negative aspheric corrector; the source permits a plastic form, but formulation and manufacturing process are unresolved.",
    },
    {
      id: 10,
      name: "E10",
      label: "Group 4 rear positive meniscus",
      type: "Positive Meniscus, concave to object",
      nd: 1.51633,
      vd: 64.1,
      focalLengthMm: 66.761785,
      glass:
        "S-BSL7 (spectral proxy; d-line inferred from printed coordinates; supplier, melt and chemistry unspecified)",
      role: "Rear positive relay and field-flattening member that completes the positive fourth group.",
    },
  ],

  surfaces: [
    { label: "1", R: 37.748, d: 1.8, sd: 19.2, medium: 1 },
    { label: "2", R: 18.35, d: 9.59, sd: 14.7, rimExtensionSd: 19.2 },
    { label: "3", R: -90.75, d: 1.6, sd: 15.0, medium: 2 },
    { label: "4", R: 43.103, d: 0.15, sd: 15.0 },
    { label: "5", R: 28.478, d: 2.62, sd: 14.5, medium: 3 },
    { label: "6", R: 48.635, sd: 14.5 },
    { label: "7", R: 50.008, d: 2.0, sd: 10.0, medium: 4 },
    { label: "8", R: -267.513, d: 0.1, sd: 10.0 },
    { label: "9", R: 26.915, d: 1.0, sd: 10.0, medium: 5 },
    { label: "10", R: 15.023, d: 5.26, sd: 10.0, medium: 6 },
    { label: "11", R: -101.063, sd: 10.0 },
    { label: "STO", R: "flat", d: 1.8 },
    { label: "13", R: -68.91, d: 0.8, sd: 7.3, medium: 7 },
    { label: "14", R: 13.828, d: 2.64, sd: 7.3, medium: 8 },
    { label: "15", R: 39.654, sd: 7.3 },
    { label: "16", R: -90.382, d: 1.0, sd: 10.0, medium: 9 },
    {
      label: "17A",
      R: -205.313,
      d: 0.4,
      sd: 10.0,
      asphere: { K: 0, A4: 1.91256e-5, A6: 4.84357e-8, A8: -2.85693e-10, A10: 1.98932e-12, A12: 0, A14: 0 },
    },
    { label: "18", R: -190.913, d: 2.42, sd: 10.0, medium: 10 },
    { label: "19", R: -29.325, sd: 10.0 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 28.9, nominalFNumber: 3.83, label: "28.90 mm" },
      { focalLengthMm: 50.02, nominalFNumber: 4.45 },
      { focalLengthMm: 86.89, nominalFNumber: 5.88, label: "86.89 mm" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.38,
    description:
      "CONSTRAINED_RECONSTRUCTION: the patent identifies Group 1 focusing but gives no finite-focus table. D6 close-focus values are independently solved for a 0.38 m image-plane-referenced object distance while Groups 2-4 and the image plane remain fixed; the result is not patent-published.",
  },

  gaps: {
    "6": {
      label: "D6 / Focus",
      values: [
        [34.38, 38.935758879],
        [12.71, 17.135015168],
        [1.09, 5.701506721],
      ],
    },
    "11": {
      label: "D11",
      values: [
        [2.0, 2.0],
        [6.87, 6.87],
        [12.46, 12.46],
      ],
    },
    "15": {
      label: "D15",
      values: [
        [14.09, 14.09],
        [9.21, 9.21],
        [3.62, 3.62],
      ],
    },
    "19": {
      label: "BF",
      values: [
        [38.719113072, 38.719113072],
        [51.794644886, 51.794644886],
        [75.537349273, 75.537349273],
      ],
    },
  },

  aperture: { fStops: [3.83, 4.45, 5.88, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 5 },

  groups: [
    { text: "L1 (-)", fromSurface: "1", toSurface: "6" },
    { text: "L2 (+)", fromSurface: "7", toSurface: "11" },
    { text: "STO + L3 (-)", fromSurface: "STO", toSurface: "15" },
    { text: "L4 (+)", fromSurface: "16", toSurface: "19" },
  ],
  doublets: [
    { text: "J2", fromSurface: "9", toSurface: "11" },
    { text: "J3", fromSurface: "13", toSurface: "15" },
  ],

  layout: { yScFill: 0.72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
