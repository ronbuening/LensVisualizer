import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * FUJIFILM FUJINON GF 500mm f/5.6 R LM OIS WR — WO 2025/013477 A1, Example 7.
 *
 * Source prescription: patent Table 13 / Example 7, unscaled (s = 1.000000).
 * Design values are kept separate from marketed values: patent f = 485.45 mm and FNo = 5.70;
 * Fujifilm markets the production lens as 500 mm f/5.6.
 * 21 physical glass elements / 14 air-separated groups; all Example-7 surfaces are spherical.
 *
 * Focus status: CONSTRAINED_RECONSTRUCTION. The patent states that G2 = L21 moves imageward
 * from infinity toward nearest focus while G1 and G3 remain fixed relative to the image plane,
 * but it does not publish close-focus spacings. The 2.75 m state below is code-solved from the
 * manufacturer MFD measured from the focal plane while conserving D9 + D11 = 17.001 mm:
 * D9 = 14.868863573 mm and D11 = 2.132136427 mm. These values are a mechanism-constrained
 * reconstruction, not patent-published focus data.
 *
 * Semi-diameters are modeled values because Example 7 publishes no clear-aperture table. They
 * were derived from exact spherical ray envelopes at infinity and at the reconstructed 2.75 m
 * state, including the default 0.6-field off-axis fan and additional full-field chief/marginal
 * checks, then constrained by edge thickness, actual rim slope, and cross-gap sag clearance.
 * Fig. 15 was used only as a silhouette sanity check. The stop radius is derived from the
 * design f-number (FNo = 5.70); the patent does not publish a stop diameter, so that aperture
 * size is explicitly a modeling inference.
 *
 * Glass vendors are not named by the patent. Generic six-digit classes are retained unless the
 * catalog match is unusually strong; L44 is labeled as an OHARA S-NBH58 equivalent because
 * nd = 1.78880, vd = 28.43, and SG = 3.33 all match the current OHARA entry. This is still an
 * equivalence label, not a claim that Fujifilm specified OHARA glass. Table 13 theta_gF is retained as
 * dPgF = theta_gF - (0.6438 - 0.001682 * vd), preserving patent g-line dispersion alongside
 * compatible catalog curves. Complete nC/nF/ng triplets are not published and remain omitted.
 */

const LENS_DATA = {
  schema: 2,
  key: "fujifilm-fujinon-gf-500mm-f56-r-lm-ois-wr",
  maker: "Fujifilm",
  name: "FUJIFILM FUJINON GF 500mm f/5.6 R LM OIS WR",
  subtitle: "WO 2025/013477 A1 Example 7 — constrained 2.75 m focus reconstruction",

  catalog: {
    lensMounts: ["fujifilm-g"],
    imageFormat: "44x33",
    specs: [
      "21 ELEMENTS / 14 GROUPS",
      "500 mm f/5.6 MARKETED",
      "485.45 mm F/5.70 DESIGN",
      "2ω = 6.38° (PATENT)",
      "5 ED + 2 SUPER ED (MARKETED)",
    ],
    elementCount: 21,
    groupCount: 14,
    acceptsTeleconverters: true, // GF1.4X TC WR per Fujifilm's compatibility chart
    focalLengthMm: { marketing: 500, design: 485.45 },
    fNumber: { marketing: 5.6, design: 5.7 },
  },

  source: {
    patentNumber: "WO 2025/013477 A1",
    patentYear: 2025,
    authors: ["Takuya Tanaka", "Shunsuke Miyagishima"],
    assignees: ["Fujifilm Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element L11",
      type: "Plano-Convex Positive",
      nd: 1.63980,
      vd: 34.47,
      focalLengthMm: 450.138,
      glass: "S-TIM27 equivalent (coordinate-compatible catalog proxy; vendor unresolved)",
      diagramLabel: "L11",
      dPgF: 0.00650854, // Table 13 theta_gF = 0.59233.
    },
    {
      id: 2,
      name: "L12",
      label: "Element L12",
      type: "Positive Meniscus",
      nd: 1.49700,
      vd: 81.61,
      focalLengthMm: 255.393,
      glass: "497816 class — vendor unresolved",
      apd: "patent",
      apdNote: "Table 13 theta_gF = 0.53887; positive departure from the Schott normal line, without a supplier claim.",
      diagramLabel: "L12",
      dPgF: 0.03233802, // Table 13 theta_gF = 0.53887.
    },
    {
      id: 3,
      name: "L13",
      label: "Element L13",
      type: "Plano-Convex Positive",
      nd: 1.43700,
      vd: 95.10,
      focalLengthMm: 114.151,
      glass: "437951 class — vendor unresolved",
      apd: "patent",
      apdNote: "Table 13 theta_gF = 0.53364; positive departure from the Schott normal line, without a supplier claim.",
      diagramLabel: "L13",
      dPgF: 0.04979820, // Table 13 theta_gF = 0.53364.
    },
    {
      id: 4,
      name: "L14",
      label: "Element L14",
      type: "Biconcave Negative",
      nd: 1.80420,
      vd: 46.50,
      focalLengthMm: -47.914,
      glass: "804465 class — vendor unresolved",
      diagramLabel: "L14",
      cemented: "D1",
      dPgF: -0.00831700, // Table 13 theta_gF = 0.55727.
    },
    {
      id: 5,
      name: "L15",
      label: "Element L15",
      type: "Biconvex Positive",
      nd: 1.43700,
      vd: 95.10,
      focalLengthMm: 89.560,
      glass: "437951 class — vendor unresolved",
      apd: "patent",
      apdNote: "Table 13 theta_gF = 0.53364; positive departure from the Schott normal line, without a supplier claim.",
      diagramLabel: "L15",
      cemented: "D1",
      dPgF: 0.04979820, // Table 13 theta_gF = 0.53364.
    },
    {
      id: 6,
      name: "L21",
      label: "Element L21",
      type: "Negative Meniscus",
      nd: 1.69680,
      vd: 55.46,
      focalLengthMm: -111.793,
      glass: "697555 class — vendor unresolved",
      diagramLabel: "L21",
      dPgF: -0.00791628, // Table 13 theta_gF = 0.54260.
    },
    {
      id: 7,
      name: "L31",
      label: "Element L31",
      type: "Plano-Convex Positive",
      nd: 1.49700,
      vd: 81.61,
      focalLengthMm: 59.356,
      glass: "497816 class — vendor unresolved",
      apd: "patent",
      apdNote: "Table 13 theta_gF = 0.53887; positive departure from the Schott normal line, without a supplier claim.",
      diagramLabel: "L31",
      dPgF: 0.03233802, // Table 13 theta_gF = 0.53887.
    },
    {
      id: 8,
      name: "L32",
      label: "Element L32",
      type: "Negative Meniscus",
      nd: 1.92119,
      vd: 23.96,
      focalLengthMm: -24.256,
      glass: "921240 class — vendor unresolved",
      diagramLabel: "L32",
      cemented: "D2",
      dPgF: 0.01675072, // Table 13 theta_gF = 0.62025.
    },
    {
      id: 9,
      name: "L33",
      label: "Element L33",
      type: "Positive Meniscus",
      nd: 1.55032,
      vd: 75.50,
      focalLengthMm: 43.391,
      glass: "550755 class — vendor unresolved",
      apd: "patent",
      apdNote: "Table 13 theta_gF = 0.54001; positive departure from the Schott normal line, without a supplier claim.",
      diagramLabel: "L33",
      cemented: "D2",
      dPgF: 0.02320100, // Table 13 theta_gF = 0.54001.
    },
    {
      id: 10,
      name: "L34",
      label: "Element L34",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.84,
      focalLengthMm: 32.847,
      glass: "847238 class — vendor unresolved",
      diagramLabel: "L34",
      cemented: "D3",
      dPgF: 0.01641888, // Table 13 theta_gF = 0.62012.
    },
    {
      id: 11,
      name: "L35",
      label: "Element L35",
      type: "Biconcave Negative",
      nd: 1.83481,
      vd: 42.72,
      focalLengthMm: -22.613,
      glass: "835427 class — vendor unresolved",
      diagramLabel: "L35",
      cemented: "D3",
      dPgF: -0.00717496, // Table 13 theta_gF = 0.56477.
    },
    {
      id: 12,
      name: "L36",
      label: "Element L36",
      type: "Biconcave Negative",
      nd: 1.94595,
      vd: 17.98,
      focalLengthMm: -77.334,
      glass: "946180 class — vendor unresolved",
      apd: "patent",
      apdNote: "Table 13 theta_gF = 0.65460; positive departure from the Schott normal line, without a supplier claim.",
      diagramLabel: "L36",
      dPgF: 0.04104236, // Table 13 theta_gF = 0.65460.
    },
    {
      id: 13,
      name: "L37",
      label: "Element L37",
      type: "Biconvex Positive",
      nd: 1.63980,
      vd: 34.47,
      focalLengthMm: 23.720,
      glass: "S-TIM27 equivalent (coordinate-compatible catalog proxy; vendor unresolved)",
      diagramLabel: "L37",
      cemented: "D4",
      dPgF: 0.00650854, // Table 13 theta_gF = 0.59233.
    },
    {
      id: 14,
      name: "L38",
      label: "Element L38",
      type: "Negative Meniscus",
      nd: 1.77250,
      vd: 49.62,
      focalLengthMm: -33.980,
      glass: "773496 class — vendor unresolved",
      diagramLabel: "L38",
      cemented: "D4",
      dPgF: -0.00995916, // Table 13 theta_gF = 0.55038.
    },
    {
      id: 15,
      name: "L39",
      label: "Element L39",
      type: "Biconvex Positive",
      nd: 1.59551,
      vd: 39.24,
      focalLengthMm: 29.302,
      glass: "596392 class — vendor unresolved",
      diagramLabel: "L39",
      cemented: "D5",
      dPgF: 0.00263168, // Table 13 theta_gF = 0.58043.
    },
    {
      id: 16,
      name: "L40",
      label: "Element L40",
      type: "Biconcave Negative",
      nd: 1.49700,
      vd: 81.61,
      focalLengthMm: -35.210,
      glass: "497816 class — vendor unresolved",
      apd: "patent",
      apdNote: "Table 13 theta_gF = 0.53887; positive departure from the Schott normal line, without a supplier claim.",
      diagramLabel: "L40",
      cemented: "D5",
      dPgF: 0.03233802, // Table 13 theta_gF = 0.53887.
    },
    {
      id: 17,
      name: "L41",
      label: "Element L41",
      type: "Negative Meniscus",
      nd: 1.87070,
      vd: 40.73,
      focalLengthMm: -25.116,
      glass: "871407 class — vendor unresolved",
      diagramLabel: "L41",
      cemented: "D6",
      dPgF: -0.00704214, // Table 13 theta_gF = 0.56825.
    },
    {
      id: 18,
      name: "L42",
      label: "Element L42",
      type: "Biconvex Positive",
      nd: 1.84666,
      vd: 23.84,
      focalLengthMm: 20.446,
      glass: "847238 class — vendor unresolved",
      diagramLabel: "L42",
      cemented: "D6",
      dPgF: 0.01641888, // Table 13 theta_gF = 0.62012.
    },
    {
      id: 19,
      name: "L43",
      label: "Element L43",
      type: "Biconcave Negative",
      nd: 1.49700,
      vd: 81.61,
      focalLengthMm: -41.249,
      glass: "497816 class — vendor unresolved",
      apd: "patent",
      apdNote: "Table 13 theta_gF = 0.53887; positive departure from the Schott normal line, without a supplier claim.",
      diagramLabel: "L43",
      dPgF: 0.03233802, // Table 13 theta_gF = 0.53887.
    },
    {
      id: 20,
      name: "L44",
      label: "Element L44",
      type: "Biconvex Positive",
      nd: 1.78880,
      vd: 28.43,
      focalLengthMm: 24.449,
      glass: "S-NBH58 (OHARA) equivalent — patent vendor not named",
      diagramLabel: "L44",
      cemented: "D7",
      dPgF: 0.00493926, // Table 13 theta_gF = 0.60092.
    },
    {
      id: 21,
      name: "L45",
      label: "Element L45",
      type: "Plano-Concave Negative",
      nd: 1.98613,
      vd: 16.48,
      focalLengthMm: -27.482,
      glass: "986165 class — vendor unresolved",
      apd: "patent",
      apdNote: "Table 13 theta_gF = 0.66558; positive departure from the Schott normal line, without a supplier claim.",
      diagramLabel: "L45",
      cemented: "D7",
      dPgF: 0.04949936, // Table 13 theta_gF = 0.66558.
    },
  ],

  surfaces: [
    { label: "1", R: 287.9986, d: 4.5000, sd: 46.5, medium: 1 },
    { label: "2", R: "flat", d: 0.9510, sd: 46.5 },
    { label: "3", R: 88.2297, d: 9.0900, sd: 45, medium: 2 },
    { label: "4", R: 279.4780, d: 63.5240, sd: 45 },
    { label: "5", R: 49.8839, d: 8.0000, sd: 25.5, medium: 3 },
    { label: "6", R: "flat", d: 0.6970, sd: 25.5 },
    { label: "7", R: -1153.3576, d: 1.5000, sd: 22.7, medium: 4 },
    { label: "8", R: 39.8871, d: 7.5900, sd: 22.7, medium: 5 },
    { label: "9", R: -1962.8727, sd: 22.7 },
    { label: "10", R: 395.3446, d: 1.2200, sd: 19.5, medium: 6 },
    { label: "11", R: 64.9927, sd: 19.5 },
    { label: "12", R: 29.4999, d: 6.3200, sd: 17, medium: 7 },
    { label: "13", R: "flat", d: 2.5590, sd: 17 },
    // radius derived from the design f-number; no stop diameter is published.
    { label: "STO", R: "flat", d: 4.4860 },
    { label: "15", R: 346.7425, d: 0.8800, sd: 13.2, medium: 8 },
    { label: "16", R: 20.9662, d: 4.8700, sd: 13.2, medium: 9 },
    { label: "17", R: 157.7037, d: 7.4000, sd: 13.2 },
    { label: "18", R: 415.7340, d: 3.6700, sd: 10.6, medium: 10 },
    { label: "19", R: -29.6829, d: 0.7600, sd: 10.6, medium: 11 },
    { label: "20", R: 52.4615, d: 1.2150, sd: 10.6 },
    { label: "21", R: -320.5664, d: 0.8600, sd: 9.6, medium: 12 },
    { label: "22", R: 94.9071, d: 2.9990, sd: 9.6 },
    { label: "23", R: 38.1656, d: 5.8300, sd: 11.4, medium: 13 },
    { label: "24", R: -23.6923, d: 1.0000, sd: 11.4, medium: 14 },
    { label: "25", R: -247.6705, d: 9.2240, sd: 11.4 },
    { label: "26", R: 56.5577, d: 6.8600, sd: 13.5, medium: 15 },
    { label: "27", R: -24.0928, d: 1.0000, sd: 13.5, medium: 16 },
    { label: "28", R: 64.8246, d: 2.9130, sd: 13.5 },
    { label: "29", R: 297.9934, d: 1.0000, sd: 13.8, medium: 17 },
    { label: "30", R: 20.3416, d: 8.1400, sd: 13.8, medium: 18 },
    { label: "31", R: -94.8636, d: 3.0670, sd: 13.8 },
    { label: "32", R: -28.3317, d: 0.9700, sd: 14.5, medium: 19 },
    { label: "33", R: 75.0160, d: 1.2000, sd: 14.5 },
    { label: "34", R: 57.4938, d: 8.6200, sd: 15.8, medium: 20 },
    { label: "35", R: -27.1008, d: 1.0500, sd: 15.8, medium: 21 },
    { label: "36", R: "flat", d: 66.3210, sd: 15.8 },
  ],

  focus: {
    closeFocusM: 2.75,
    description:
      "Inner focus. Patent Example 7 moves only G2 (L21) imageward; the 2.75 m endpoint is a constrained reconstruction solved from Fujifilm MFD with D9 + D11 conserved at 17.001 mm.",
  },

  gaps: {
    "9": { label: "D9 — before G2", values: [[2.001, 14.868863573]] },
    "11": { label: "D11 — after G2", values: [[15.0, 2.132136427]] },
  },

  aperture: { nominalFNumber: 5.7, fStops: [5.7, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "9" },
    { text: "G2 (FOCUS)", fromSurface: "10", toSurface: "11" },
    { text: "G3", fromSurface: "12", toSurface: "36" },
    { text: "OIS L34–L36", fromSurface: "18", toSurface: "22" },
  ],
  doublets: [
    { text: "D1", fromSurface: "7", toSurface: "9" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
    { text: "D5", fromSurface: "26", toSurface: "28" },
    { text: "D6", fromSurface: "29", toSurface: "31" },
    { text: "D7", fromSurface: "34", toSurface: "36" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
