import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP 2011-48232 A, Numerical Example 3, selected 45 mm macro design correlation.
 * 14 elements / 10 air-separated groups / six functional groups / four cemented pairs.
 * Source values are unscaled; S5A on L3 preserves the conventional K=0 polynomial.
 * Neutral air planes S13/S15 are omitted with their physical gaps combined exactly.
 * Published infinity, 0.5x and 1x spacings include the variable source BF; no invented rear stack.
 * Literal residuals of nominally fixed anchors are retained; their cause is unresolved.
 * Apertures are inferred from Figure 7 proportions and exact-ray/geometry checks, not source dimensions.
 * Iris radius derived from the design f-number, table F2.89 at infinity; Figure 8 prints F2.88.
 * A fixed inferred iris does not reproduce finite table F4.32/F5.75; no aperture schedule is invented.
 * All three source spacing stations are retained. UI distances are calculated paraxial object-to-image
 * conjugates, not the marketed 0.15 m or certified finiteConjugates. Intermediate linear interpolation
 * is a visualization approximation, explicitly not the actual cam law (patent paragraph 0018).
 * Catalog curves are coordinate-compatible spectral proxies, not identified factory suppliers or melts.
 * L3 uses a qualified MC-TAF101-100 proxy. OIS is centered; lateral compensation and wave-optical performance are unmodeled.
 * Default geometry limits; no gap-sag or rim-angle override and no hidden-trim allowance.
 */

const LENS_DATA = {
  schema: 2,
  key: "panasonic-leica-dg-macro-elmarit-45mm-f28-asph-mega-ois",
  maker: "Panasonic",
  name: "PANASONIC LEICA DG MACRO-ELMARIT 45mm f/2.8 ASPH. MEGA O.I.S.",
  subtitle: "JP 2011-48232 A, Example 3; selected production correlation, not manufacturer-confirmed prescription",

  catalog: {
    lensMounts: ["micro-four-thirds"],
    imageFormat: "four-thirds",
    specs: [
      "14 ELEMENTS / 10 GROUPS",
      "1 ASPHERICAL ELEMENT / 1 ED ELEMENT",
      "PUBLISHED INFINITY / 0.5× / 1× SPACINGS",
    ],
    elementCount: 14,
    groupCount: 10,
    focalLengthMm: { marketing: 45, design: 45.9 },
    fNumber: { marketing: 2.8, design: 2.89 },
  },

  source: {
    patentNumber: "JP 2011-48232 A",
    patentYear: 2011,
    authors: ["Koji Hoshi", "Kyoichi Miyazaki", "Noriyuki Adachi"],
    assignees: ["Panasonic Corporation"],
    errata: [
      {
        status: "unresolved",
        note: "Example 3 table (PDF p.12) gives infinity F2.89, while Figure 8(a) (p.15) gives F2.88. Both remain source facts; table F2.89 controls the inferred infinity iris calibration. No source correction is applied.",
      },
      {
        status: "unresolved",
        note: "Paragraph 0025 calls G1/G3/G6 axially fixed relative to the image, but the literal focus gaps and BF produce nonzero anchor changes (G3 about -0.04922 mm at 0.5x). Cause unresolved; no last-digit-rounding explanation is established. Preserve all printed values.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      focalLengthMm: 126.06835769366111,
      glass: "H-K9L (CDGM spectral proxy for 517642; supplier unconfirmed)",
      diagramLabel: "L1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.92286,
      vd: 20.9,
      indexReference: "d",
      focalLengthMm: -44.81023380957653,
      glass: "N-SF66 (Schott spectral proxy for 923209; supplier unconfirmed)",
      diagramLabel: "L2",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.7693,
      vd: 49.3,
      indexReference: "d",
      focalLengthMm: 18.243061900302095,
      glass: "MC-TAF101-100 (HOYA spectral proxy; source 1.76930/49.3 retained; supplier and melt unconfirmed)",
      diagramLabel: "L3",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Concave",
      nd: 1.91082,
      vd: 35.2,
      indexReference: "d",
      focalLengthMm: -23.020465075426543,
      glass: "K-LaSFn23 (Sumita spectral proxy for 911352; supplier unconfirmed)",
      diagramLabel: "L4",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.91082,
      vd: 35.2,
      indexReference: "d",
      focalLengthMm: -14.17888330395097,
      glass: "K-LaSFn23 (Sumita spectral proxy for 911352; supplier unconfirmed)",
      diagramLabel: "L5",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.94595,
      vd: 18.0,
      indexReference: "d",
      focalLengthMm: 18.50914826666562,
      glass: "FDS18 (Hoya spectral proxy for 946180; supplier unconfirmed)",
      diagramLabel: "L6",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      indexReference: "d",
      focalLengthMm: 68.8345126609913,
      glass: "TAC8 (Hoya spectral proxy for 729547; supplier unconfirmed)",
      diagramLabel: "L7",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: 42.11639867329221,
      glass: "E-LASF016 (Hikari spectral proxy for 772496; supplier unconfirmed)",
      diagramLabel: "L8",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      indexReference: "d",
      focalLengthMm: -26.637061120251925,
      glass: "J-SF03 (Hikari spectral proxy for 847238; supplier unconfirmed)",
      diagramLabel: "L9",
      cemented: "D3",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      indexReference: "d",
      focalLengthMm: 20.972761505169633,
      glass: "TAC8 (Hoya spectral proxy for 729547; supplier unconfirmed)",
      diagramLabel: "L10",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 70.15748240945136,
      glass: "H-FK61 (CDGM spectral proxy for 497816; supplier unconfirmed)",
      apd: "inferred",
      apdNote:
        "Inferred from the H-FK61 spectral proxy: catalog PgF ≈ 0.53801, ΔPgF ≈ +0.03147. This low-dispersion element corresponds to the production ED position; the original glass is unconfirmed.",
      diagramLabel: "L11",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.4,
      indexReference: "d",
      focalLengthMm: -27.128740182071528,
      glass: "N-FK5 (Schott spectral proxy for 487704; supplier unconfirmed)",
      diagramLabel: "L12",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.48749,
      vd: 70.4,
      indexReference: "d",
      focalLengthMm: -23.683313789817678,
      glass: "N-FK5 (Schott spectral proxy for 487704; supplier unconfirmed)",
      diagramLabel: "L13",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      focalLengthMm: 23.00580180121412,
      glass: "J-LASF05 (Hikari spectral proxy for 835427; supplier unconfirmed)",
      diagramLabel: "L14",
      cemented: "D4",
    },
  ],

  surfaces: [
    { label: "1", R: 85.5932, d: 1.558, sd: 10.0, medium: 1 },
    { label: "2", R: -271.1205, d: 0.15, sd: 10.0 },
    { label: "3", R: 23.5836, d: 0.8, sd: 9.5, medium: 2 },
    { label: "4", R: 14.7741, d: 4.4084, sd: 9.5, medium: 3 },
    {
      label: "5A",
      R: -243.9386,
      sd: 9.5,
      asphere: { K: 0, A4: 9.64948e-6, A6: -3.28988e-8, A8: 3.8517e-10, A10: -2.58623e-12 },
    },
    { label: "6", R: "flat", d: 0.8, sd: 6.7, medium: 4 },
    { label: "7", R: 20.9675, d: 1.4841, sd: 6.7 },
    { label: "8", R: -104.1415, d: 0.8, sd: 6.7, medium: 5 },
    { label: "9", R: 14.7966, d: 2.3547, sd: 6.7, medium: 6 },
    { label: "10", R: 88.1331, sd: 6.7 },
    { label: "11", R: 100.0, d: 1.8084, sd: 8.0, medium: 7 },
    { label: "12", R: -100.0, d: 1.8, sd: 8.0 },
    { label: "STO", R: "flat" },
    { label: "16", R: 48.4208, d: 3.2992, sd: 9.0, medium: 8 },
    { label: "17", R: -96.2229, d: 0.15, sd: 9.0 },
    { label: "18", R: 65.975, d: 0.8, sd: 9.0, medium: 9 },
    { label: "19", R: 16.7138, d: 4.201, sd: 9.0, medium: 10 },
    { label: "20", R: -160.7718, d: 0.15, sd: 9.0 },
    { label: "21", R: 49.8443, d: 2.8849, sd: 9.0, medium: 11 },
    { label: "22", R: -113.8211, sd: 9.0 },
    { label: "23", R: -75.7748, d: 0.8, sd: 8.5, medium: 12 },
    { label: "24", R: 16.0766, sd: 8.5 },
    { label: "25", R: -17.3499, d: 0.75, sd: 10.0, medium: 13 },
    { label: "26", R: 34.9984, d: 3.6264, sd: 10.0, medium: 14 },
    { label: "27", R: -40.5544, sd: 10.0 },
  ],

  focus: {
    closeFocusM: 0.14490906777855106,
    keyframes: [0, 0.7769437738467989, 1],
    description:
      "The patent gives infinity, 0.5× and 1× prescriptions. For closer focus, G2 moves toward the image and G4/G5 toward the object. Distances are calculated for this prescription, rather than taken from the production lens's 0.15 m minimum. Intermediate spacings are interpolated. The iris stays at its infinity setting, so finite-focus apertures differ from the patent's tabulated values. Optical stabilization remains centered.",
    published: [1, 2],
  },

  gaps: {
    "5A": { label: "d5", values: [[1.7316, 5.4823, 9.2513]] },
    "10": { label: "d10", values: [[9.0043, 5.2277, 1.4853]] },
    STO: { label: "d15 + 1.3", values: [[11.873700000000001, 6.2688999999999995, 2.3908]] },
    "22": { label: "d22", values: [[2.0973, 4.7756, 8.3665]] },
    "24": { label: "d24", values: [[7.06, 10.0034, 10.2794]] },
    "27": { label: "BF", values: [[15.01368, 15.046, 15.00427]] },
  },

  aperture: { nominalFNumber: 2.89, fStops: [2.89, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5A" },
    { text: "G2", fromSurface: "6", toSurface: "10" },
    { text: "G3", fromSurface: "11", toSurface: "12" },
    { text: "G4", fromSurface: "16", toSurface: "22" },
    { text: "G5", fromSurface: "23", toSurface: "24" },
    { text: "G6", fromSurface: "25", toSurface: "27" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5A" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4", fromSurface: "25", toSurface: "27" },
  ],

  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
