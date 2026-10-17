import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — Sigma 10-18mm F2.8 DC DN | Contemporary          ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2024-104911 A, Numerical Example 2 (Sigma).        ║
 * ║  13 elements / 10 groups; 7 aspherical surfaces on 4 elements.      ║
 * ║  Zoom: five moving mechanical units, transcribed at infinity focus. ║
 * ║  Focus: patent states imageward inner-focus movement of G4/L11,     ║
 * ║         but publishes no close-focus variable-spacing table.        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING: none. Patent Example 2 already computes to        ║
 * ║  f = 10.30 / 13.50 / 17.50 mm, corresponding to the marketed        ║
 * ║  10-18 mm APS-C lens.                                              ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS: the patent does not list clear apertures.  ║
 * ║  SDs are conservative rendering estimates constrained by paraxial   ║
 * ║  ray heights, element SD ratio, edge thickness, and signed          ║
 * ║  cross-gap sag intrusion. They are not production aperture data.    ║
 * ║  Surfaces 1A/2, 22 and 23A were raised to pass the traced chief     ║
 * ║  ray to the patent's Y = 14.20 mm APS-C corner at the wide end,     ║
 * ║  with partners 21/24A scaled (2026-09-24 field-coverage audit).     ║
 * ║                                                                    ║
 * ║  NOTE ON ASPHERES: patent surface 4 includes odd-order terms.       ║
 * ║  Numerical Example 2 A3–A14 are transcribed exactly; the other      ║
 * ║  six aspheres retain their patent even-order coefficients.          ║
 * ║                                                                      ║
 * ║  NOTE ON PARTIAL DISPERSION: the patent lists θgF per element.       ║
 * ║  `dPgF` is θgF minus the engine's normal line (0.6438 − 0.001682·νd),║
 * ║  not the patent's dPgF = θgF − (0.648285 − 0.00180123·νd), which the ║
 * ║  analysis quotes as ΔPgF. L1 and L7 already sat within 0.0003 of the ║
 * ║  engine-line value (the two lines cross near νd 37.6) and keep their ║
 * ║  four-decimal figures.                                               ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "sigma-10-18mm-f28-dc-dn",
  maker: "Sigma",
  name: "SIGMA 10-18mm f/2.8 DC DN | Contemporary",
  subtitle: "JP 2024-104911 A, Numerical Example 2 — Sigma / Ryo Shioda",

  catalog: {
    lensMounts: ["l-mount", "canon-rf", "fujifilm-x", "sony-fe"],
    imageFormat: "aps-c",
    specs: [
      "13 elements / 10 groups",
      "10.30-17.50 mm design EFL",
      "F2.8 marketed; F2.92 patent",
      "APS-C image circle, Y = 14.20 mm",
      "7 aspherical surfaces / 4 aspherical elements",
    ],
    elementCount: 13,
    groupCount: 10,
    focalLengthMm: { marketing: [10, 18], design: [10.3, 17.5] },
    fNumber: { marketing: 2.8, design: 2.92 },
  },

  source: {
    patentNumber: "JP 2024-104911 A",
    patentYear: 2024,
    authors: ["Ryo Shioda"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.85135,
      vd: 40.1,
      focalLengthMm: -20.93,
      glass: "M-TAFD305 (Hoya)",
      apd: false,
      role: "High-index object-side aspherical negative meniscus that starts the retrofocus wide-angle front group.",
      dPgF: -0.0067,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.59201,
      vd: 67.02,
      focalLengthMm: -41.78,
      glass: "M-PCD51 (Hoya)",
      apd: false,
      role: "Second object-convex negative meniscus; both faces are aspherical in the patent.",
      dPgF: 0.004728,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: -30.94,
      glass: "FCD100 (Hoya)",
      apd: "patent",
      apdNote:
        "Patent θgF = 0.5335; ΔPgF = +0.0565 by the patent's line (θgF − 0.648285 + 0.00180123·νd), runtime dPgF +0.04966; FLD-class crown",
      role: "Fluorite-class negative member of the front cemented achromatizing doublet.",
      cemented: "D1",
      dPgF: 0.049658,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.87071,
      vd: 40.73,
      focalLengthMm: 25.66,
      glass: "TAFD32 (Hoya)",
      apd: false,
      role: "Dense positive partner to L3; completes a weakly positive cemented front-group corrector.",
      cemented: "D1",
      dPgF: -0.007192,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.85883,
      vd: 30.0,
      focalLengthMm: 66.89,
      glass: "NBFD30 (Hoya)",
      apd: false,
      role: "Weak positive collector at the front of the rear positive lens group.",
      dPgF: 0.00446,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 2.0509,
      vd: 26.94,
      focalLengthMm: -27.22,
      glass: "TAFD65 (Hoya)",
      apd: false,
      role: "Very-high-index negative member NR1 of the first rear cemented doublet.",
      cemented: "D2",
      dPgF: 0.006513,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.5927,
      vd: 35.45,
      focalLengthMm: 21.19,
      glass: "FF5 (Hoya)",
      apd: false,
      role: "Positive member PR1 of the first rear cemented doublet.",
      cemented: "D2",
      dPgF: 0.0082,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.9165,
      vd: 31.6,
      focalLengthMm: -37.18,
      glass: "S-LAH88 (Ohara)",
      apd: false,
      role: "Dense negative member NR2 of the second rear cemented doublet.",
      cemented: "D3",
      dPgF: 0.000351,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 32.12,
      glass: "FCD100 (Hoya)",
      apd: "patent",
      apdNote:
        "Patent θgF = 0.5335; ΔPgF = +0.0565 by the patent's line (θgF − 0.648285 + 0.00180123·νd), runtime dPgF +0.04966; FLD-class crown, PR2",
      role: "Fluorite-class positive member PR2 behind the stop.",
      cemented: "D3",
      dPgF: 0.049658,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.55332,
      vd: 71.68,
      focalLengthMm: 21.32,
      glass: "M-FCD500 (Hoya)",
      apd: "patent",
      apdNote:
        "Patent θgF = 0.5402; ΔPgF = +0.0210 by the patent's line (θgF − 0.648285 + 0.00180123·νd), runtime dPgF +0.01697; strongest non-FLD SLD candidate.",
      role: "Strong positive aspherical low-dispersion element immediately behind the stop group.",
      dPgF: 0.016966,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.7433,
      vd: 49.22,
      focalLengthMm: -25.7,
      glass: "NBF1 (Hoya) / H-LaF53 (CDGM equivalent)",
      apd: false,
      role: "Single-element inner-focus group moving imageward for near focus.",
      dPgF: -0.011712,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.437,
      vd: 95.1,
      focalLengthMm: 24.41,
      glass: "FCD100 (Hoya)",
      apd: "patent",
      apdNote:
        "Patent θgF = 0.5335; ΔPgF = +0.0565 by the patent's line (θgF − 0.648285 + 0.00180123·νd), runtime dPgF +0.04966; FLD-class crown",
      role: "Rear fluorite-class positive element contributing strong gathering power in G5.",
      dPgF: 0.049658,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative (2× Asph)",
      nd: 1.8061,
      vd: 40.73,
      focalLengthMm: -37.03,
      glass: "M-NBFD130 (Hoya)",
      apd: false,
      role: "Rear aspherical negative field/distortion corrector.",
      dPgF: -0.005992,
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 72.6802,
      d: 1.9,
      sd: 16.8,
      medium: 1,
      asphere: { K: 0, A4: 3.57607e-5, A6: -1.17819e-7, A8: 3.35081e-10, A10: -6.45434e-13, A12: 5.60529e-16 },
    },
    { label: "2", R: 14.1404, d: 6.0015, sd: 12.3 },
    {
      label: "3A",
      R: 25.7643,
      d: 1.3,
      sd: 12.0,
      medium: 2,
      asphere: { K: 0, A4: -1.08527e-4, A6: 9.36708e-7, A8: -3.94825e-9, A10: 8.177e-12, A12: -7.19759e-15 },
    },
    {
      label: "4A",
      R: 12.3826,
      d: 6.9302,
      sd: 10.25,
      asphere: {
        K: -0.2,
        A4: -9.04369e-5,
        A6: -6.10593e-9,
        A8: -5.78057e-8,
        A10: 1.20097e-10,
        A12: 1.23408e-12,
        A14: 7.16732e-15,
        A3: -8.61492e-6,
        A5: 1.49662e-6,
        A7: 3.07996e-7,
        A9: 3.22483e-9,
        A11: -1.86496e-11,
        A13: -1.53332e-13,
      },
    },
    { label: "5", R: -33.1567, d: 0.9, sd: 10.25, medium: 3 },
    { label: "6", R: 23.0203, d: 3.7847, sd: 10.5, medium: 4 },
    { label: "7", R: -699.7264, sd: 10.5 },
    { label: "8", R: 37.9214, d: 1.6669, sd: 9.0, medium: 5 },
    { label: "9", R: 109.3038, d: 0.15, sd: 7.2 },
    { label: "10", R: 16.4389, d: 0.9, sd: 5.35, medium: 6 },
    { label: "11", R: 10.1471, d: 4.0909, sd: 6.68, medium: 7 },
    { label: "12", R: 44.9237, sd: 7.0 },
    { label: "STO", R: "flat", d: 1.6302 },
    { label: "14", R: 46.1313, d: 0.9, sd: 7.7, medium: 8 },
    { label: "15", R: 19.4148, d: 3.5181, sd: 8.0, medium: 9 },
    { label: "16", R: -47.8864, d: 0.3, sd: 8.4 },
    {
      label: "17A",
      R: 20.1908,
      d: 4.2241,
      sd: 8.6,
      medium: 10,
      asphere: { K: 0, A4: -3.94666e-5, A6: -2.00299e-7, A8: 3.02534e-10, A10: -3.61272e-12, A12: 1.10093e-13 },
    },
    {
      label: "18A",
      R: -26.248,
      sd: 8.8,
      asphere: { K: 0, A4: -2.0255e-5, A6: -2.24984e-7, A8: 1.61641e-9, A10: -9.56611e-12, A12: 5.04251e-14 },
    },
    { label: "19", R: -119.0214, d: 0.9, sd: 8.8, medium: 11 },
    { label: "20", R: 22.8303, sd: 8.8 },
    { label: "21", R: 24.8505, d: 5.2005, sd: 8.7, medium: 12 },
    { label: "22", R: -17.5, d: 0.3091, sd: 7.0 },
    {
      label: "23A",
      R: -72.4668,
      d: 0.85,
      sd: 7.1,
      medium: 13,
      asphere: { K: -1, A4: -3.17786e-5, A6: -6.56688e-7, A8: 3.22451e-9, A10: -4.39587e-13 },
    },
    {
      label: "24A",
      R: 51.0249,
      sd: 8.8,
      asphere: { K: 0, A4: 5.38996e-5, A6: -2.9294e-7, A8: -4.43503e-10, A10: 6.04648e-11, A12: -3.46836e-13 },
    },
  ],

  zoom: {
    stations: [{ focalLengthMm: 10.3, label: "Wide" }, { focalLengthMm: 13.5 }, { focalLengthMm: 17.5, label: "Tele" }],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.116,
    step: 0.004,
    description:
      "Inner-focus L11/G4 moves toward the image plane for near focus. The patent publishes only infinity-focus zoom spacings; close-focus travel is therefore not modeled.",
  },

  gaps: {
    "7": {
      label: "G1-G2",
      values: [
        [16.5964, 16.5964],
        [7.7505, 7.7505],
        [1.572, 1.572],
      ],
    },
    "12": {
      label: "G2-STO/G3",
      values: [
        [3.2532, 3.2532],
        [3.0431, 3.0431],
        [2.5382, 2.5382],
      ],
    },
    "18A": {
      label: "G3-G4",
      values: [
        [1.6, 1.6],
        [2.5118, 2.5118],
        [3.3767, 3.3767],
      ],
    },
    "20": {
      label: "G4-G5",
      values: [
        [4.6173, 4.6173],
        [3.7055, 3.7055],
        [2.8406, 2.8406],
      ],
    },
    "24A": {
      label: "BF",
      values: [
        [16.3954, 16.3954],
        [19.7381, 19.7381],
        [23.9736, 23.9736],
      ],
    },
  },

  aperture: { nominalFNumber: 2.92, fStops: [2.92, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, step: 0.004, blades: 7 },

  groups: [
    { text: "G1 / GF (-)", fromSurface: "1A", toSurface: "7" },
    { text: "G2 (+)", fromSurface: "8", toSurface: "12" },
    { text: "G3 (+)", fromSurface: "STO", toSurface: "18A" },
    { text: "G4 focus (-)", fromSurface: "19", toSurface: "20" },
    { text: "G5 (+)", fromSurface: "21", toSurface: "24A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
    { text: "D3", fromSurface: "14", toSurface: "16" },
  ],

  layout: { scFill: 0.58, yScFill: 0.62 },
} satisfies LensDataV2Input;

export default LENS_DATA;
