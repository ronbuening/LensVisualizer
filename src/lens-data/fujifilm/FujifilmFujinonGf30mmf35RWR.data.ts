import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * FUJIFILM FUJINON GF 30mm f/3.5 R WR
 *
 * Data source: US 2021/0231930 A1, Example 1 (FUJIFILM Corporation / Shunsuke Miyagishima).
 * Production correlation: GF30mmF3.5 R WR; 13 elements / 10 groups, two aspherical elements,
 * two low-dispersion elements, 30 mm marketed focal length, f/3.5, and internal focus all converge.
 *
 * Prescription policy:
 * - Patent d-line prescription is retained at native scale. Computed EFL from the rounded Table 1 data is
 *   30.890120992212 mm; no scaling to the marketed 30 mm focal length is applied.
 * - Patent optional parallel plate PP (Table 1 S25-S26: 3.200 mm, nd 1.51680, vd 64.20) and its 0.020 mm air gap
 *   to the image plane are modeled in `rearPlates` (traced, not drawn). S24 keeps the patent's 20.812 mm gap to PP;
 *   the paraxial air equivalent is 20.812 + 3.200 / 1.51680 + 0.020 = 22.941704641350 mm.
 * - Patent asphere convention uses KA in sqrt(1 - KA*C^2*h^2); LensVisualizer uses (1+K), so K = KA - 1.
 *   Example 1 has KA = 1 on S1, S2, S16, and S17, therefore K = 0 on all four modeled aspheres.
 *
 * Focus status: CONSTRAINED_RECONSTRUCTION.
 * - Infinity and 1.2 m spacings are patent-published.
 * - Only G2 moves, objectward, with DD8 + DD17 = 11.410 mm fixed.
 * - The 0.32 m endpoint is code-solved from Fujifilm's production MFD while preserving that rigid-group constraint;
 *   it is not a patent-published close-focus row. The reconstructed paraxial magnification is -0.14845x, consistent
 *   with Fujifilm's rounded 0.15x specification.
 *
 * Semi-diameters are modeled inferences because the patent publishes no clear-aperture table. They were derived from
 * exact meridional marginal/chief-ray envelopes at infinity, 1.2 m, and the reconstructed 0.32 m state, then bounded by
 * current edge-thickness, actual-rim-slope, conic, shared-band cross-gap, and off-axis-containment rules.
 * The stop radius is derived from the design f-number (f/3.51); it is not a published stop aperture.
 *
 * Glass labels describe coordinate matches/classes only; the patent names no glass supplier. No catalog line indices
 * or dPgF values are promoted to source facts, so nC/nF/ng/dPgF are intentionally omitted where not independently
 * source-defensible.
 *
 * Manufacturer metadata sources:
 * - https://www.fujifilm-x.com/en-us/products/lenses/gf30mmf35-r-wr/specifications/
 * - https://www.fujifilm-x.com/global/news/portable-high-resolution-lens-ideally-suited-for-landscape-and-everyday-adventures-announcing-fujinon-gf30mmf3-5-r-wr/
 * - https://dl.fujifilm-x.com/support/manual/lenses/lens_gf30mmf35_r_wr_manual_02.pdf
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "fujifilm-fujinon-gf-30mm-f35-r-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON GF 30mm f/3.5 R WR",
  subtitle: "US 2021/0231930 A1 — Example 1; production correlation to GF30mmF3.5 R WR",

  catalog: {
    lensMounts: ["fujifilm-g"],
    imageFormat: "44x33",
    specs: [
      "13 ELEMENTS / 10 GROUPS",
      "f = 30.890 mm (design)",
      "F/3.51 (design)",
      "2ω = 84.2° (patent, infinity)",
      "2 ASPHERICAL / 2 ED ELEMENTS (production specification)",
    ],
    elementCount: 13,
    groupCount: 10,
    focalLengthMm: { marketing: 30, design: 30.890120992212 },
    fNumber: { marketing: 3.5, design: 3.51 },
  },

  source: {
    patentNumber: "US 2021/0231930 A1",
    patentYear: 2021,
    authors: ["Shunsuke Miyagishima"],
    assignees: ["Fujifilm Corporation"],
  },

  /* ── Glass elements ── */
  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.85108,
      vd: 40.12,
      focalLengthMm: -22.654508,
      glass: "Q-LASFH58S equivalent (coordinate-compatible catalog proxy; vendor unresolved)",
      role: "Fixed G1 front negative meniscus; both surfaces are aspherical.",
      diagramLabel: "L11",
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.59,
      focalLengthMm: -67.090837,
      glass: "497816 low-dispersion class",
      // Compatible catalog curve supports APD; production glass identity is unresolved.
      apd: "inferred",
      role: "Fixed G1 low-dispersion negative element; production ED correlation is inferred, not patent-labeled.",
      diagramLabel: "L12",
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Biconvex Positive",
      nd: 1.7847,
      vd: 26.29,
      focalLengthMm: 103.347804,
      glass: "S-TIH23-class (OHARA exact-coordinate candidate)",
      role: "Fixed G1 positive element.",
      diagramLabel: "L13",
    },
    {
      id: 4,
      name: "L14",
      label: "Element L14",
      type: "Biconvex Positive",
      nd: 1.7859,
      vd: 44.21,
      focalLengthMm: 41.022976,
      glass: "S-LAH51-class (OHARA coordinate candidate)",
      role: "Fixed G1 positive rear element.",
      diagramLabel: "L14",
    },
    {
      id: 5,
      name: "L21",
      label: "Element L21",
      type: "Negative Meniscus",
      nd: 1.79952,
      vd: 42.25,
      focalLengthMm: -33.159271,
      glass: "S-LAH52Q-class (OHARA coordinate candidate)",
      role: "Moving G2 negative member of the L21/L22 cemented pair.",
      diagramLabel: "L21",
      cemented: "D21",
    },
    {
      id: 6,
      name: "L22",
      label: "Element L22",
      type: "Positive Meniscus",
      nd: 1.62299,
      vd: 58.16,
      focalLengthMm: 23.748995,
      glass: "S-BSM15-class (OHARA exact-coordinate candidate)",
      role: "Moving G2 positive member of the L21/L22 cemented pair, immediately before the stop.",
      diagramLabel: "L22",
      cemented: "D21",
    },
    {
      id: 7,
      name: "L23",
      label: "Element L23",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.32,
      focalLengthMm: -19.76209,
      glass: "954323 class (S-LAH98 / TAFD45L exact-coordinate candidates)",
      role: "Moving G2 negative member of the L23/L24 cemented pair, immediately after the stop.",
      diagramLabel: "L23",
      cemented: "D23",
    },
    {
      id: 8,
      name: "L24",
      label: "Element L24",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.59,
      focalLengthMm: 25.77939,
      glass: "497816 low-dispersion class",
      // Compatible catalog curve supports APD; production glass identity is unresolved.
      apd: "inferred",
      role: "Moving G2 low-dispersion positive member; production ED correlation is inferred, not patent-labeled.",
      diagramLabel: "L24",
      cemented: "D23",
    },
    {
      id: 9,
      name: "L25",
      label: "Element L25",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.58135,
      vd: 59.38,
      focalLengthMm: 35.250879,
      glass: "Q-SK52S equivalent (qualified spectral proxy; patent 1.58135 / 59.38; vendor unresolved)",
      role: "Moving G2 rear positive single lens; both surfaces are aspherical.",
      diagramLabel: "L25",
    },
    {
      id: 10,
      name: "L31",
      label: "Element L31",
      type: "Positive Meniscus",
      nd: 2.00272,
      vd: 19.32,
      focalLengthMm: 33.722243,
      glass: "E-FDS2-class (HOYA exact-coordinate candidate)",
      // Compatible catalog curve supports APD; production glass identity is unresolved.
      apd: "inferred",
      role: "Fixed G3 positive member of the L31/L32 cemented pair.",
      diagramLabel: "L31",
      cemented: "D31",
    },
    {
      id: 11,
      name: "L32",
      label: "Element L32",
      type: "Biconcave Negative",
      nd: 1.738,
      vd: 32.33,
      focalLengthMm: -22.806542,
      glass: "S-NBH53V-class (OHARA exact-coordinate candidate)",
      role: "Fixed G3 negative member of the L31/L32 cemented pair.",
      diagramLabel: "L32",
      cemented: "D31",
    },
    {
      id: 12,
      name: "L33",
      label: "Element L33",
      type: "Negative Meniscus",
      nd: 1.94595,
      vd: 17.98,
      focalLengthMm: -84.984736,
      glass: "FDS18-class (HOYA exact-coordinate candidate)",
      // Compatible catalog curve supports APD; production glass identity is unresolved.
      apd: "inferred",
      role: "Fixed G3 negative single lens.",
      diagramLabel: "L33",
    },
    {
      id: 13,
      name: "L34",
      label: "Element L34",
      type: "Biconvex Positive",
      nd: 1.56883,
      vd: 56.06,
      focalLengthMm: 72.516912,
      glass: "569560 crown class (H-BaK7GT / BAC4 near-coordinate candidates)",
      role: "Fixed G3 rear positive element.",
      diagramLabel: "L34",
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    {
      label: "1A",
      R: 131.2588,
      d: 2,
      sd: 17.5,
      medium: 1,
      asphere: {
        K: 0,
        A4: -2.8886874e-6,
        A6: 2.0127359e-8,
        A8: 1.3104211e-11,
        A10: -1.5905045e-13,
        A12: -4.01125e-17,
        A14: 2.3430938e-18,
        A16: 6.0688836e-21,
        A18: -6.8412335e-23,
        A20: -7.1601272e-26,
        A5: -6.5306725e-7,
        A7: 1.3907664e-9,
        A9: -2.3166044e-12,
        A11: -3.5069163e-15,
        A13: -1.3482658e-18,
        A15: 7.8738693e-20,
        A17: -5.842528e-22,
        A19: 4.7409996e-24,
      },
    },
    {
      label: "2A",
      R: 16.69358,
      d: 8.02,
      sd: 13.8,
      asphere: {
        K: 0,
        A4: -1.9266855e-5,
        A6: -5.1386769e-8,
        A8: -1.8823117e-10,
        A10: -5.8433378e-14,
        A12: 1.158616e-14,
        A14: 2.3396195e-17,
        A16: -9.16173e-19,
        A18: -3.5245709e-22,
        A20: 3.7488999e-24,
        A5: -6.8136315e-7,
        A7: 1.5435168e-9,
        A9: 1.2882017e-11,
        A11: -9.246179e-14,
        A13: -1.3601845e-15,
        A15: 4.6200395e-18,
        A17: 7.7555717e-20,
        A19: -1.7353689e-22,
      },
    },
    { label: "3", R: -66.86544, d: 1.07, sd: 14, medium: 2 },
    { label: "4", R: 66.86544, d: 5.45, sd: 14 },
    { label: "5", R: 438.52916, d: 3.05, sd: 14.6, medium: 3 },
    { label: "6", R: -99.19269, d: 4.69, sd: 14.6 },
    { label: "7", R: 49.02177, d: 5.25, sd: 14.6, medium: 4 },
    { label: "8", R: -89.73855, sd: 14.6 },
    { label: "9", R: 30.26741, d: 1.29, sd: 12.5, medium: 5 },
    { label: "10", R: 13.865, d: 6.75, sd: 11.2, medium: 6 },
    { label: "11", R: 179.28363, d: 6.56, sd: 10.6 },
    { label: "STO", R: "flat", d: 5 },
    { label: "13", R: 38.64477, d: 1.5, sd: 8.8, medium: 7 },
    { label: "14", R: 12.429, d: 5.99, sd: 8.7, medium: 8 },
    { label: "15", R: 348.93176, d: 4.67, sd: 9.4 },
    {
      label: "16A",
      R: -153.06892,
      d: 4.68,
      sd: 10.9,
      medium: 9,
      asphere: {
        K: 0,
        A4: 1.1426426e-10,
        A6: -5.197376e-8,
        A8: -1.8237844e-8,
        A10: 8.3598439e-10,
        A12: -2.2603381e-11,
        A14: 3.2181986e-13,
        A16: -2.6332566e-15,
        A18: 9.1228254e-18,
        A20: -3.9051285e-20,
        A5: -5.7428082e-6,
        A7: 2.9635184e-7,
        A9: -9.4716911e-9,
        A11: 2.1406144e-10,
        A13: -2.7933578e-12,
        A15: 2.2872157e-14,
        A17: -1.0554255e-16,
        A19: 6.2511786e-19,
      },
    },
    {
      label: "17A",
      R: -18.27655,
      sd: 11.3,
      asphere: {
        K: 0,
        A4: 2.1286361e-5,
        A6: 3.2648953e-6,
        A8: 1.0856552e-7,
        A10: -1.9454358e-9,
        A12: 1.34228e-12,
        A14: 9.4470544e-14,
        A16: -1.702131e-15,
        A18: 6.028905e-18,
        A20: -1.217978e-20,
        A5: -1.1336064e-5,
        A7: -7.1293049e-7,
        A9: -4.7133356e-9,
        A11: 3.3012812e-10,
        A13: -3.7812852e-12,
        A15: 3.1663551e-14,
        A17: -9.4195383e-17,
        A19: 2.026655e-19,
      },
    },
    { label: "18", R: -161.76271, d: 5.34, sd: 13, medium: 10 },
    { label: "19", R: -28.43, d: 1.21, sd: 13.4, medium: 11 },
    { label: "20", R: 42.00097, d: 3.9, sd: 13.33 },
    { label: "21", R: -67.54157, d: 1.02, sd: 14.3, medium: 12 },
    { label: "22", R: -425.65965, d: 3.05, sd: 15.1 },
    { label: "23", R: 125.0308, d: 6.5, sd: 19, medium: 13 },
    // Last surface: patent gap to the parallel plate PP
    { label: "24", R: -60.39887, d: 20.812, sd: 19.8 },
  ],

  /* ── Focus / aperture configuration ── */
  focus: {
    closeFocusM: 0.32,
    /* ── Focus movement ── */
    keyframes: [0, 0.266666666667, 1],
    description:
      "Internal focus: G2 alone translates objectward. Infinity and 1.2 m are patent-published; 0.32 m is a " +
      "code-solved constrained reconstruction with DD8 + DD17 fixed at 11.410 mm.",
    // (moved from publishedStations) The intermediate focus row is source-tabulated; the close endpoint is reconstructed.
    published: [1],
  },

  gaps: {
    "8": { label: "DD8", values: [[6.19, 5.791, 4.108859949689]] },
    "17A": { label: "DD17", values: [[5.22, 5.619, 7.301140050311]] },
  },

  aperture: { nominalFNumber: 3.51, fStops: [3.51, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  /* ── Optional parallel plate PP (patent Table 1 surfaces 25–26): traced, not drawn ── */
  rearPlates: [
    {
      label: "PP",
      thicknessMm: 3.2,
      nd: 1.5168,
      vd: 64.2,
      glass: "N-BK7",
      gapAfterMm: 0.02,
      source: "US 2021/0231930 A1, Example 1 Table 1 surfaces 25–26",
    },
  ],

  /* ── Patent group / cemented-pair annotations ── */
  groups: [
    { text: "G1", fromSurface: "1A", toSurface: "8" },
    { text: "G2 (FOCUS)", fromSurface: "9", toSurface: "17A" },
    { text: "G3", fromSurface: "18", toSurface: "24" },
  ],
  doublets: [
    { text: "L21/L22", fromSurface: "9", toSurface: "11" },
    { text: "L23/L24", fromSurface: "13", toSurface: "15" },
    { text: "L31/L32", fromSurface: "18", toSurface: "20" },
  ],

  /* ── Layout ── */
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
