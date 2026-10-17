import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — Olympus M.Zuiko Digital ED 12-100mm f/4.0 IS PRO                    ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP2017-090535A, Numerical Example 1, Olympus Corporation.           ║
 * ║ Five-zoom-group positive/negative/positive/negative/positive high-ratio zoom.    ║
 * ║ 17 elements / 11 air-separated production groups, 6 aspherical surfaces.         ║
 * ║ Focus: inner focus by G4, the L14-L15 cemented negative group.                   ║
 * ║ IS: L12-L13 cemented doublet in G3 shifts perpendicular to the optical axis.     ║
 * ║                                                                                    ║
 * ║ Zoom variable gaps: d5, d12, d23, d26, and final BF.                             ║
 * ║ Close-focus variable gaps are not published in Example 1; focus pairs therefore  ║
 * ║ duplicate infinity spacings and model zoom only.                                 ║
 * ║                                                                                    ║
 * ║ Cover glass note: patent surfaces 30-31 are the camera cover/LPF plate and are    ║
 * ║ omitted per project policy. Surface 29A uses the patent BF(in air) values.       ║
 * ║                                                                                    ║
 * ║ Semi-diameters: estimated by paraxial marginal/chief-ray envelope at the default ║
 * ║ off-axis field fraction, then reduced where required by edge-thickness and       ║
 * ║ cross-gap sag constraints. They are renderer-safe clear-aperture estimates, not  ║
 * ║ patent-published mechanical diameters.                                           ║
 * ║ Surface 6A was raised to pass the traced wide chief ray at the patent's 2ω =     ║
 * ║ 83.05° (Y ≈ 9.76 mm; 2026-09-24 field-coverage audit).                           ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "olympus-mzuiko-12100mm-f4-is-pro",
  maker: "Olympus",
  name: "OLYMPUS M.ZUIKO DIGITAL ED 12-100mm f/4.0 IS PRO",
  subtitle: "JP2017-090535A Example 1 — Olympus / Yanai et al.",

  catalog: {
    lensMounts: ["micro-four-thirds"],
    imageFormat: "four-thirds",
    specs: [
      "12-100mm f/4.0",
      "Patent f=12.36-97.98mm, F/4.08",
      "17 elements / 11 groups",
      "6 aspherical surfaces",
      "5 ED / 1 DSA / 2 Super HR / 1 HR",
    ],
    elementCount: 17,
    groupCount: 11,
    focalLengthMm: { marketing: [12, 100], design: [12.354, 97.966] },
    fNumber: { marketing: 4, design: 4.08 },
  },

  source: {
    patentNumber: "JP 2017-090535 A",
    patentYear: 2017,
    authors: ["Tetsuya Yanai", "Toyonori Kon", "Daichi Murakami", "Yuki Kubota"],
    assignees: ["Olympus Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: -294.1,
      glass: "S-NBH56 (OHARA)",
      role: "High-index, high-dispersion negative component of the front achromat; balances the ED positive L2.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Plano-Convex Positive",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 136.4,
      glass: "S-FPL51 (OHARA)",
      role: "ED positive component of the front cemented doublet; supplies front-group convergence with low secondary color.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 187.5,
      glass: "S-FPL51 (OHARA)",
      role: "Second positive ED element in G1; splits the front-group power to reduce bending and tele-end color.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Neg. Meniscus (2× Asph, DSA)",
      nd: 1.88227,
      vd: 37.18,
      focalLengthMm: -17.1,
      glass: "882372 — M-TAFD307 / MC-TAFD307-class (HOYA moldable high-index; no exact public catalog match)",
      role: "Dual-surface aspherical variator element in G2; the principal DSA element for wide-end distortion, field curvature, and coma control.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.59282,
      vd: 68.62,
      focalLengthMm: -22.2,
      glass: "FCD515 (HOYA)",
      role: "Low-dispersion negative element in the G2 cemented pair; inverted-achromat partner to the ultra-high-index positive L6.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 2.00069,
      vd: 25.46,
      focalLengthMm: 19.2,
      glass: "TAFD40 (HOYA)",
      role: "Super-HR positive element in the G2 doublet; high index provides strong positive correction with controlled curvature.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.73,
      focalLengthMm: -54.4,
      glass: "S-LAH55V (OHARA)",
      role: "Trailing negative meniscus of G2; shapes the variator exit pupil and contributes field-curvature control.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58253,
      vd: 59.32,
      focalLengthMm: 40.4,
      glass: "L-BAL42-class (OHARA)",
      role: "Near-stop molded aspherical positive element; primary spherical-aberration balancing surface in G3.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 57.6,
      glass: "S-FPL51 (OHARA)",
      role: "Symmetric ED biconvex in G3; shares positive relay power with L8 while keeping chromatic contribution low.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.25,
      focalLengthMm: -25.9,
      glass: "TAFD35L (HOYA)",
      role: "HR negative component of the G3 achromat; corrects color from the preceding positive G3 subgroup.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.54,
      focalLengthMm: 43,
      glass: "S-FPL51 (OHARA)",
      role: "ED positive partner to L10; provides strong Abbe-number contrast in the G3 cemented negative subgroup.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: -67,
      glass: "S-NBH56 (OHARA)",
      role: "Negative front element of the IS doublet; helps suppress decenter-induced color and field curvature during stabilization.",
      cemented: "IS",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58253,
      vd: 59.32,
      focalLengthMm: 23.9,
      glass: "L-BAL42-class (OHARA)",
      role: "Positive molded-aspherical rear member of the IS doublet; the L12-L13 group shifts for image stabilization.",
      cemented: "IS",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.73,
      focalLengthMm: -14.3,
      glass: "S-LAH55V (OHARA)",
      role: "Dominant negative member of the G4 inner-focus doublet.",
      cemented: "FOCUS",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Positive Meniscus",
      nd: 1.80809,
      vd: 22.76,
      focalLengthMm: 29.6,
      glass: "S-NPH1 (OHARA)",
      role: "High-dispersion positive partner in the negative focus group; minimizes focus-driven color shift.",
      cemented: "FOCUS",
    },
    {
      id: 16,
      name: "L16",
      label: "Element 16",
      type: "Negative Meniscus",
      nd: 2.001,
      vd: 29.13,
      focalLengthMm: -68.5,
      glass: "TAFD55 (HOYA)",
      role: "Second Super-HR element; negative front member of the G5 field-flattening/color-balancing doublet.",
      cemented: "D6",
    },
    {
      id: 17,
      name: "L17",
      label: "Element 17",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.51593,
      vd: 64.25,
      focalLengthMm: 25.5,
      glass: "S-BSL7 / BK7-class (OHARA)",
      role: "Positive rear member of G5; final aspherical surface trims field-edge residuals before the sensor cover glass.",
      cemented: "D6",
    },
  ],

  surfaces: [
    { label: "1", R: 94.387, d: 2.5, sd: 32, medium: 1 },
    { label: "2", R: 67.783, d: 7.13, sd: 29.5, medium: 2 },
    { label: "3", R: "flat", d: 0.15, sd: 29.3 },
    { label: "4", R: 61.099, d: 5.02, sd: 28.3, medium: 3 },
    { label: "5", R: 172.659, sd: 28.3 },
    {
      label: "6A",
      R: 231.854,
      d: 1.65,
      sd: 13.4,
      medium: 4,
      asphere: { K: 0, A4: -7.50532e-6, A6: 1.23396e-7, A8: -4.26522e-10, A10: 6.20739e-13 },
    },
    {
      label: "7A",
      R: 14.124,
      d: 7.35,
      sd: 10.2,
      asphere: {
        K: 0,
        A4: -3.12688e-5,
        A6: 6.45994e-8,
        A8: -5.06358e-10,
        A10: 1.39139e-11,
        A12: -1.22469e-13,
        A14: 3.55245e-16,
      },
    },
    { label: "8", R: -22.507, d: 1, sd: 10.2, medium: 5 },
    { label: "9", R: 32.319, d: 4.23, sd: 11.6, medium: 6 },
    { label: "10", R: -44.031, d: 1.39, sd: 11.4 },
    { label: "11", R: -21.208, d: 1.2, sd: 9.5, medium: 7 },
    { label: "12", R: -40.812, sd: 10.5 },
    { label: "STO", R: "flat", d: 1.5 },
    {
      label: "14A",
      R: 24.286,
      d: 4.49,
      sd: 9.7,
      medium: 8,
      asphere: { K: 0, A4: -1.21943e-5, A6: -3.40663e-8, A8: -3.0461e-11, A10: 4.72594e-13 },
    },
    { label: "15A", R: -700, d: 4.37, sd: 10.1, asphere: { K: 0, A4: 7.50787e-6, A6: -4.91245e-8, A8: 9.97723e-11 } },
    { label: "16", R: 56.643, d: 3.37, sd: 11, medium: 9 },
    { label: "17", R: -56.643, d: 0.5, sd: 11.1 },
    { label: "18", R: 43.59, d: 1, sd: 11.1, medium: 10 },
    { label: "19", R: 15.142, d: 4.13, sd: 11.1, medium: 11 },
    { label: "20", R: 47.223, d: 1.2, sd: 11.1 },
    { label: "21", R: 24.303, d: 0.8, sd: 10.6, medium: 12 },
    { label: "22", R: 16.8, d: 5.1, sd: 10.4, medium: 13 },
    { label: "23A", R: -71.5, sd: 10.4, asphere: { K: 0, A4: 7.7695e-6, A6: -7.45428e-9, A8: -5.82084e-11 } },
    { label: "24", R: 188.666, d: 0.9, sd: 8.8, medium: 14 },
    { label: "25", R: 11.201, d: 3.1, sd: 8.9, medium: 15 },
    { label: "26", R: 18.472, sd: 9 },
    { label: "27", R: 30, d: 1.2, sd: 11.3, medium: 16 },
    { label: "28", R: 20.454, d: 9.46, sd: 11.4, medium: 17 },
    {
      label: "29A",
      R: -31.238,
      sd: 12.4,
      asphere: { K: 0, A4: 3.64978e-6, A6: -5.98934e-8, A8: 1.63111e-10, A10: -4.69751e-13 },
    },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 12.36, label: "12 mm" },
      { focalLengthMm: 34.62 },
      { focalLengthMm: 97.98, label: "100 mm" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.15,
    description:
      "Inner focus by the fourth zoom group, the L14-L15 cemented negative doublet. JP2017-090535A Example 1 publishes infinity-focus zoom spacings only; close-focus spacings are not modeled.",
  },

  gaps: {
    "5": {
      label: "G1-G2",
      values: [
        [0.72, 0.72],
        [25.09, 25.09],
        [53.6, 53.6],
      ],
    },
    "12": {
      label: "G2-G3",
      values: [
        [37.65, 37.65],
        [13.89, 13.89],
        [1.3, 1.3],
      ],
    },
    "23A": {
      label: "G3-G4",
      values: [
        [2.44, 2.44],
        [10.11, 10.11],
        [20.2, 20.2],
      ],
    },
    "26": {
      label: "G4-G5",
      values: [
        [4.87, 4.87],
        [12.72, 12.72],
        [12.5, 12.5],
      ],
    },
    "29A": {
      label: "BF",
      values: [
        [15.67, 15.67],
        [15.65, 15.65],
        [15.69, 15.69],
      ],
    },
  },

  aperture: {
    nominalFNumber: 4.08,
    fStops: [4.08, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 7,
    bladeRoundedness: 1,
  },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "5" },
    { text: "G2", fromSurface: "6A", toSurface: "12" },
    { text: "G3 / IS", fromSurface: "STO", toSurface: "23A" },
    { text: "G4 / FOCUS", fromSurface: "24", toSurface: "26" },
    { text: "G5", fromSurface: "27", toSurface: "29A" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
    { text: "IS", fromSurface: "21", toSurface: "23A" },
    { text: "FOCUS", fromSurface: "24", toSurface: "26" },
    { text: "D6", fromSurface: "27", toSurface: "29A" },
  ],

  layout: { scFill: 0.64, yScFill: 0.74 },
} satisfies LensDataV2Input;

export default LENS_DATA;
