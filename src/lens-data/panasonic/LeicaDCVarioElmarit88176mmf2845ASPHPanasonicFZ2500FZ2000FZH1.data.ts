import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LEICA DC VARIO-ELMARIT 8.8-176mm f/2.8-4.5 ASPH — Panasonic FZ2500/FZ2000/FZH1 correlation.
 * Source: US 2018/0081156 A1, Numerical Example 1. The production correlation is strong but not manufacturer-confirmed.
 *
 * Implemented prescription: 16 physical lens elements, 11 air-separated components, five powered zoom groups,
 * eight aspherical surfaces on five elements. No geometric scaling is applied.
 *
 * Model normalization:
 * - Five 0.005 mm generic cement media at source surfaces 2/3, 17/18, 21/22, 27/28, and 31/32 are collapsed.
 *   Each surviving junction carries the downstream element index and the 0.005 mm is added to its thickness.
 * - Rear plane-parallel plate P (source surfaces 34-35) is omitted. Surface 33 uses the conjugate-correct rear air gap
 *   recomputed after cement collapse: 9.9178922602 / 9.8940327020 / 9.8855150655 mm at wide/middle/tele.
 * - Patent Table 3A prints "Aperture diameter" values 5.249 / 5.249 / 5.892 mm. The analysis reads these as
 *   semi-diameters to compute the modeled f-numbers retained in nominalFNumber. The stop radius is derived from the
 *   design f-number at each station, preserving the variable-aperture behavior without inventing a focus state.
 * - Zoom control points retain the published Table 3A state focal lengths (9.1401 / 39.1047 / 168.6806 mm);
 *   focalLengthDesign separately stores the recomputed normalized endpoint EFLs.
 * - Focus status is NO_INTERNAL_RECONSTRUCTION. All zoom var vectors repeat infinity values at the UI close endpoint.
 *   closeFocusM = 0.03 m is production minimum-focus metadata only; it is not a solved internal close-focus prescription.
 *
 * Partial dispersion: Table 1 prints a per-glass deviation "dPgF"; the patent states no formula or normal line for it.
 * The line is inferred, not printed. L1-L4, L6, L8, L9, L11, L14, L16 and plate P sit on a HOYA catalog nd/νd and carry
 * HOYA's catalog ΔPgF to four decimals, as do eight more HOYA glasses in Examples 2-4. HOYA measures ΔPgF from its
 * C7-F2 line, PgF = 0.64842 − 0.001802·νd. For those elements `dPgF` is PgF minus the engine's normal line
 * (0.6438 − 0.001682·νd), with PgF = printed deviation + 0.64842 − 0.001802·νd; L9 moves by under 0.0003 and keeps
 * the printed figure. L5, L7, L10, L12, L13 and L15 match no HOYA figure at their coordinates, so their line is not
 * established and they keep the patent's printed deviation unconverted. The analysis quotes the patent's deviations.
 *
 * Semi-diameters are modeled, not patent-published. They were inferred from exact meridional d-line ray envelopes at
 * the three published zoom states, containing the full-field chief ray plus the viewer's default on/off-axis bundles;
 * representative intermediate zoom samples were also checked. Final SDs pass portable edge-thickness, actual rim-slope,
 * conic-domain, and shared-gap intrusion checks. Production render-trim diagnostics passed in the repository audit.
 */

const LENS_DATA = {
  schema: 2,
  key: "leica-dc-vario-elmarit-fz2500-fz2000-fzh1",
  maker: "Panasonic",
  name: "PANASONIC LEICA DC VARIO-ELMARIT 8.8-176mm f/2.8-4.5 ASPH. (Panasonic Lumix FZ2500 / FZ2000 / FZH1)",
  subtitle: "US 2018/0081156 A1 Numerical Example 1 — correlated, not manufacturer-confirmed",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "1-inch-type",
    specs: ["16 ELEMENTS / 11 GROUPS", "5 POWERED ZOOM GROUPS", "8 ASPHERICAL SURFACES / 5 ASPHERICAL ELEMENTS"],
    elementCount: 16,
    groupCount: 11,
    focalLengthMm: { marketing: [8.8, 176], design: [9.1438563761, 168.7076238864] },
    fNumber: { marketing: 2.8, design: 2.9079337237 },
  },

  source: {
    patentNumber: "US 2018/0081156 A1",
    patentYear: 2018,
    authors: ["Hiroaki Suzuki", "Yoshiaki Kurioka", "Takehiro Nishioka", "Hisayuki Ii"],
    assignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element L1",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      indexReference: "d",
      focalLengthMm: -122.847038,
      glass: "J-LASFH13 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      diagramLabel: "L1",
      cemented: "D1",
      dPgF: 0.003664,
    },
    {
      id: 2,
      name: "L2",
      label: "Element L2",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.6,
      indexReference: "d",
      focalLengthMm: 85.461478,
      glass: "FCD515 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "patent",
      apdNote:
        "US 2018/0081156 A1 Table 1: patent dPgF = +0.0194, printed without a formula. It equals HOYA's catalog ΔPgF at this nd/νd, which HOYA measures from its own line (PgF − 0.64842 + 0.001802·νd), so PgF = 0.5442; runtime dPgF +0.015788. Supplier unconfirmed.",
      diagramLabel: "L2",
      cemented: "D1",
      dPgF: 0.015788,
    },
    {
      id: 3,
      name: "L3",
      label: "Element L3",
      type: "Positive Meniscus",
      nd: 1.59282,
      vd: 68.6,
      indexReference: "d",
      focalLengthMm: 106.4645,
      glass: "FCD515 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "patent",
      apdNote:
        "US 2018/0081156 A1 Table 1: patent dPgF = +0.0194, printed without a formula. It equals HOYA's catalog ΔPgF at this nd/νd, which HOYA measures from its own line (PgF − 0.64842 + 0.001802·νd), so PgF = 0.5442; runtime dPgF +0.015788. Supplier unconfirmed.",
      diagramLabel: "L3",
      dPgF: 0.015788,
    },
    {
      id: 4,
      name: "L4",
      label: "Element L4",
      type: "Negative Meniscus",
      nd: 1.95375,
      vd: 32.3,
      indexReference: "d",
      focalLengthMm: -17.273281,
      glass: "J-LASFH21 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      diagramLabel: "L4",
      dPgF: 0.000744,
    },
    {
      id: 5,
      name: "L5",
      label: "Element L5",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.80525,
      vd: 40.9,
      indexReference: "d",
      focalLengthMm: -21.932007,
      glass: "S-LAH53 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      diagramLabel: "L5",
      dPgF: -0.0066,
    },
    {
      id: 6,
      name: "L6",
      label: "Element L6",
      type: "Biconvex Positive",
      nd: 1.94595,
      vd: 18,
      indexReference: "d",
      focalLengthMm: 27.305795,
      glass: "FDS18 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "patent",
      apdNote:
        "US 2018/0081156 A1 Table 1: patent dPgF = +0.0386, printed without a formula. It equals HOYA's catalog ΔPgF at this nd/νd, which HOYA measures from its own line (PgF − 0.64842 + 0.001802·νd), so PgF = 0.6546; runtime dPgF +0.041060. Supplier unconfirmed.",
      diagramLabel: "L6",
      dPgF: 0.04106,
    },
    {
      id: 7,
      name: "L7",
      label: "Element L7",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.77182,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: 19.619984,
      glass: "S-LAH66N (coordinate-compatible spectral proxy; supplier unconfirmed)",
      diagramLabel: "L7",
      dPgF: -0.007,
    },
    {
      id: 8,
      name: "L8",
      label: "Element L8",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 15.76195,
      glass: "H-FK61 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "patent",
      apdNote:
        "US 2018/0081156 A1 Table 1: patent dPgF = +0.0375, printed without a formula. It equals HOYA's catalog ΔPgF at this nd/νd, which HOYA measures from its own line (PgF − 0.64842 + 0.001802·νd), so PgF = 0.5389; runtime dPgF +0.032328. Supplier unconfirmed.",
      diagramLabel: "L8",
      cemented: "D2",
      dPgF: 0.032328,
    },
    {
      id: 9,
      name: "L9",
      label: "Element L9",
      type: "Biconcave Negative",
      nd: 1.883,
      vd: 40.8,
      indexReference: "d",
      focalLengthMm: -6.8434,
      glass: "S-LAH58 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      diagramLabel: "L9",
      cemented: "D2",
      dPgF: -0.0094,
    },
    {
      id: 10,
      name: "L10",
      label: "Element L10",
      type: "Biconvex Positive",
      nd: 1.55024,
      vd: 75.6,
      indexReference: "d",
      focalLengthMm: 14.508633,
      glass: "FCD705 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "patent",
      apdNote: "US 2018/0081156 A1 Table 1: ΔPgF = +0.0194; supplier unconfirmed.",
      diagramLabel: "L10",
      cemented: "D3",
      dPgF: 0.0194,
    },
    {
      id: 11,
      name: "L11",
      label: "Element L11",
      type: "Negative Meniscus",
      nd: 1.69895,
      vd: 30,
      indexReference: "d",
      focalLengthMm: -33.629244,
      glass: "SF15 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      diagramLabel: "L11",
      cemented: "D3",
      dPgF: 0.00962,
    },
    {
      id: 12,
      name: "L12",
      label: "Element L12",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.6882,
      vd: 31.1,
      indexReference: "d",
      focalLengthMm: 63.918951,
      glass: "S-TIM28 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      diagramLabel: "L12",
      dPgF: 0.0074,
    },
    {
      id: 13,
      name: "L13",
      label: "Element L13",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.6882,
      vd: 31.1,
      indexReference: "d",
      focalLengthMm: 16.443119,
      glass: "S-TIM28 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      diagramLabel: "L13",
      cemented: "D4",
      dPgF: 0.0074,
    },
    {
      id: 14,
      name: "L14",
      label: "Element L14",
      type: "Biconcave Negative",
      nd: 1.8042,
      vd: 46.5,
      indexReference: "d",
      focalLengthMm: -8.39882,
      glass: "N-LASF44 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      diagramLabel: "L14",
      cemented: "D4",
      dPgF: -0.00756,
    },
    {
      id: 15,
      name: "L15",
      label: "Element L15",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.80525,
      vd: 40.9,
      indexReference: "d",
      focalLengthMm: 14.560878,
      glass: "S-LAH53 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      diagramLabel: "L15",
      cemented: "D5",
      dPgF: -0.0066,
    },
    {
      id: 16,
      name: "L16",
      label: "Element L16",
      type: "Negative Meniscus",
      nd: 1.92119,
      vd: 24,
      indexReference: "d",
      focalLengthMm: -25.769745,
      glass: "FDS24 (coordinate-compatible spectral proxy; supplier unconfirmed)",
      apd: "patent",
      apdNote:
        "US 2018/0081156 A1 Table 1: patent dPgF = +0.0151, printed without a formula. It equals HOYA's catalog ΔPgF at this nd/νd, which HOYA measures from its own line (PgF − 0.64842 + 0.001802·νd), so PgF = 0.6203; runtime dPgF +0.016840. Supplier unconfirmed.",
      diagramLabel: "L16",
      cemented: "D5",
      dPgF: 0.01684,
    },
  ],

  surfaces: [
    { label: "1", R: 91.824, d: 1.5, sd: 25.9, medium: 1 },
    { label: "2", R: 49.8655, d: 7.055, sd: 25.3, medium: 2 },
    { label: "4", R: 3000, d: 0.15, sd: 25.2 },
    { label: "5", R: 50.3677, d: 4.62, sd: 22.8, medium: 3 },
    { label: "6", R: 240.88, sd: 22.8 },
    { label: "7", R: 386.9769, d: 1.0476, sd: 13.8, medium: 4 },
    { label: "8", R: 15.7808, d: 7.36, sd: 11.1 },
    {
      label: "9A",
      R: -27.106,
      d: 1.2,
      sd: 10.3,
      medium: 5,
      asphere: { K: 3.51523, A4: 9.50609e-5, A6: -1.19316e-6, A8: 1.02224e-8, A10: -2.26985e-11, A12: 0, A14: 0 },
    },
    {
      label: "10A",
      R: 51.6837,
      d: 0.33,
      sd: 10.2,
      asphere: { K: 0, A4: 6.80001e-5, A6: -1.23885e-6, A8: 1.06516e-8, A10: -3.2077e-11, A12: 0, A14: 0 },
    },
    { label: "11", R: 35.3366, d: 3.59, sd: 10.3, medium: 6 },
    { label: "12", R: -91.2689, sd: 10.2 },
    // Patent Table 3A prints "Aperture diameter" 5.249 / 5.249 / 5.892 mm at wide/middle/tele;
    // the analysis reads these as semi-diameters (a source-label correction).
    { label: "STO", R: "flat" },
    {
      label: "14A",
      R: 14.094,
      d: 4.6,
      sd: 9.9,
      medium: 7,
      asphere: {
        K: 0.836518,
        A4: -4.21007e-5,
        A6: 7.09284e-8,
        A8: -6.19453e-9,
        A10: 5.96586e-11,
        A12: -4.68713e-13,
        A14: 0,
      },
    },
    {
      label: "15A",
      R: 174.5151,
      d: 0.5,
      sd: 9.9,
      asphere: { K: 0, A4: -1.45079e-5, A6: 3.76423e-7, A8: -4.65945e-9, A10: 4.02785e-11, A12: 0, A14: 0 },
    },
    { label: "16", R: 16.3423, d: 5.12, sd: 8.4, medium: 8 },
    { label: "17", R: -13.481, d: 0.505, sd: 7.6, medium: 9 },
    { label: "19", R: 11.1441, d: 2.57, sd: 6.6 },
    { label: "20", R: 18.1467, d: 4.06, sd: 6.7, medium: 10 },
    { label: "21", R: -13.122, d: 0.505, sd: 6.6, medium: 11 },
    { label: "23", R: -30.1756, d: 1.54, sd: 6.6 },
    {
      label: "24A",
      R: 34.1615,
      d: 1.76,
      sd: 6.2,
      medium: 12,
      asphere: { K: 0, A4: -8.67409e-5, A6: -6.8032e-7, A8: 2.20681e-8, A10: -4.09626e-10, A12: 0, A14: 0 },
    },
    {
      label: "25A",
      R: 149.699,
      sd: 6.1,
      asphere: { K: 0, A4: -6.76312e-5, A6: -8.32658e-7, A8: 2.65808e-8, A10: -4.37836e-10, A12: 0, A14: 0 },
    },
    {
      label: "26A",
      R: 104.0648,
      d: 3.33,
      sd: 6,
      medium: 13,
      asphere: { K: 0, A4: 2.07523e-5, A6: -3.49617e-7, A8: 1.56939e-8, A10: -1.68224e-10, A12: 0, A14: 0 },
    },
    { label: "27", R: -12.5312, d: 0.505, sd: 5.9, medium: 14 },
    { label: "29", R: 14.9147, sd: 5.8 },
    {
      label: "30A",
      R: 27.1679,
      d: 6.85,
      sd: 8.8,
      medium: 15,
      asphere: { K: 0, A4: 1.07094e-5, A6: 1.16689e-7, A8: -7.07962e-10, A10: 2.28709e-12, A12: 0, A14: 0 },
    },
    { label: "31", R: -18.3077, d: 0.805, sd: 8.8, medium: 16 },
    { label: "33", R: -81.7079, sd: 8.9 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 9.1401, nominalFNumber: 2.9079337237, label: "Wide" },
      { focalLengthMm: 39.1047, nominalFNumber: 4.3005135058 },
      { focalLengthMm: 168.6806, nominalFNumber: 4.6221659784, label: "Tele" },
    ],
  },

  focus: {
    closeFocusM: 0.03,
    description:
      "Not modeled — the patent publishes only infinity-focus zoom states; Panasonic minimum-focus metadata does not define a close-focus G4 displacement.",
  },

  gaps: {
    "6": {
      label: "D6",
      values: [
        [0.8772, 0.8772],
        [27.3614, 27.3614],
        [51.9806, 51.9806],
      ],
    },
    "12": {
      label: "D12",
      values: [
        [41.4217, 41.4217],
        [12.5974, 12.5974],
        [1.5, 1.5],
      ],
    },
    STO: {
      label: "D13",
      values: [
        [25.723, 25.723],
        [13.9366, 13.9366],
        [2, 2],
      ],
    },
    "25A": {
      label: "D25",
      values: [
        [1.4, 1.4],
        [7.0507, 7.0507],
        [3.9102, 3.9102],
      ],
    },
    "29": {
      label: "D29",
      values: [
        [2.6253, 2.6253],
        [11.1011, 11.1011],
        [12.6566, 12.6566],
      ],
    },
    "33": {
      label: "BF",
      values: [
        [9.9178922602, 9.9178922602],
        [9.894032702, 9.894032702],
        [9.8855150655, 9.8855150655],
      ],
    },
  },

  aperture: { fStops: [2.8, 4, 5.6, 8, 11], blades: 9 },

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (-)", fromSurface: "7", toSurface: "12" },
    { text: "G3 (+)", fromSurface: "14A", toSurface: "25A" },
    { text: "G4 (-)", fromSurface: "26A", toSurface: "29" },
    { text: "G5 (+)", fromSurface: "30A", toSurface: "33" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "4" },
    { text: "D2", fromSurface: "16", toSurface: "19" },
    { text: "D3", fromSurface: "20", toSurface: "23" },
    { text: "D4", fromSurface: "26A", toSurface: "29" },
    { text: "D5", fromSurface: "30A", toSurface: "33" },
  ],

  layout: { yScFill: 0.48 },
} satisfies LensDataV2Input;

export default LENS_DATA;
