import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Olympus M.Zuiko Digital 17mm f/1.8
 *
 * Source prescription: JP 2013-186458 A, Numerical Example 3 (Olympus Imaging Corporation).
 * Patent values: f = 17.30 mm, FNO = 1.716, IH = 10.82 mm, TL(in air) = 52.27 mm.
 *
 * The patent's sensor-side cover plate (surfaces 17–18: 4.082 mm, nd 1.51633, νd 64.14) and
 * its 0.745 mm air gap to the image are modeled in `rearPlates` (traced, not drawn). Final
 * surface 16 keeps the patent's 10.832 mm gap to the plate (air-equivalent BFD 14.2690 mm).
 *
 * Semi-diameters are inferred from paraxial marginal/chief-ray traces and constrained by:
 *   sd/|R| < 0.90, per-element SD ratio <= 1.25, positive edge thickness,
 *   and cross-gap sag intrusion <= 90% of the relevant air gap.
 */
const lensData = {
  schema: 2,
  key: "olympus-mzuiko-17mm-f18",
  maker: "Olympus",
  name: "OLYMPUS M.ZUIKO DIGITAL 17mm f/1.8",
  subtitle: "JP 2013-186458 A — Numerical Example 3",

  catalog: {
    lensMounts: ["micro-four-thirds"],
    imageFormat: "four-thirds",
    specs: [
      "17mm f/1.8",
      "Patent f = 17.30 mm / FNO = 1.716",
      "9 elements / 6 groups",
      "5 aspherical surfaces",
      "Inner focus by G2 translation",
    ],
    elementCount: 9,
    groupCount: 6,
    focalLengthMm: { marketing: 17, design: 17.2989 },
    fNumber: { marketing: 1.8, design: 1.716 },
  },

  source: {
    patentNumber: "JP 2013-186458 A",
    patentYear: 2013,
    authors: ["Yasuharu Yamada", "Daichi Murakami", "Yuki Kubota"],
    assignees: ["Olympus Imaging Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1 — DSA front negative meniscus",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.38,
      focalLengthMm: -25.86,
      glass: "L-BAL42 (OHARA low-Tg family; patent nd=1.58313)",
      role: "Double-sided aspherical negative front meniscus that widens the field and pre-corrects off-axis aberrations.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2 — negative member of D1",
      type: "Biconcave Negative",
      nd: 1.56732,
      vd: 42.82,
      focalLengthMm: -22.78,
      glass: "S-TIL26 (OHARA)",
      role: "Negative member of the first cemented correction pair; supplies Petzval and chromatic balancing with L3.",
      cemented: "D1",
      nC: 1.56339,
      nF: 1.57664,
      ng: 1.58423,
    },
    {
      id: 3,
      name: "L3",
      label: "L3 — Super-HR positive member of D1",
      type: "Biconvex Positive",
      nd: 1.91082,
      vd: 35.25,
      focalLengthMm: 23.1,
      glass: "TAFD35L (HOYA)",
      role: "Ultra-high-index positive element corresponding to the production Super-HR role.",
      cemented: "D1",
      nC: 1.90324,
      nF: 1.92907,
      ng: 1.94414,
    },
    {
      id: 4,
      name: "L4",
      label: "L4 — positive member of D2",
      type: "Biconvex Positive",
      nd: 1.816,
      vd: 46.62,
      focalLengthMm: 13.54,
      glass: "S-LAH59 (OHARA)",
      role: "Strongest standalone positive element in G1; paired with high-dispersion L5.",
      cemented: "D2",
      nC: 1.81075,
      nF: 1.82825,
      ng: 1.838,
    },
    {
      id: 5,
      name: "L5",
      label: "L5 — negative member of D2",
      type: "Negative Meniscus",
      nd: 1.75211,
      vd: 25.05,
      focalLengthMm: -36.41,
      glass: "FF8 (HOYA fluor flint)",
      role: "High-dispersion negative flint member of the second G1 cemented correction pair.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "L6 — negative focus-group member of D3",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.07,
      focalLengthMm: -10.92,
      glass: "S-TIM28 (OHARA)",
      role: "Strong negative front member of the moving focus group; helps control focus-induced aberration changes.",
      cemented: "D3",
      nC: 1.6825,
      nF: 1.70467,
      ng: 1.71797,
    },
    {
      id: 7,
      name: "L7",
      label: "L7 — positive focus-group member of D3",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58313,
      vd: 59.38,
      focalLengthMm: 21.97,
      glass: "L-BAL42 (OHARA low-Tg family; patent nd=1.58313)",
      role: "Positive cemented focus-group member with an aspherical exit surface.",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L8",
      label: "L8 — rear focus-group aspherical positive",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.7432,
      vd: 49.34,
      focalLengthMm: 14.45,
      glass: "S-LAM60 (OHARA; low-Tg L-LAM60 family is adjacent)",
      role: "Strong positive double-aspherical element that supplies most of G2's net convergence.",
      nC: 1.73865,
      nF: 1.75372,
      ng: 1.76205,
    },
    {
      id: 9,
      name: "L9",
      label: "L9 — fixed rear negative meniscus",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.31,
      focalLengthMm: -79.52,
      glass: "S-FTM16 (OHARA)",
      role: "Fixed weak negative rear group for field correction and air-equivalent back-focus control.",
      nC: 1.58779,
      nF: 1.60458,
      ng: 1.61454,
    },
  ],

  surfaces: [
    {
      label: "1A",
      R: 670.392,
      d: 1.2,
      sd: 10.4,
      medium: 1,
      asphere: { K: 10.0016, A4: 9.8615e-6, A6: -2.3574e-7, A8: 1.1769e-9, A10: 0, A12: 0 },
    },
    {
      label: "2A",
      R: 14.739,
      d: 4.985,
      sd: 9.4,
      asphere: { K: 1.112, A4: -2.1754e-5, A6: -4.8981e-7, A8: -1.9711e-9, A10: 0, A12: 0 },
    },
    { label: "3", R: -13.171, d: 1.1, sd: 7.45, medium: 2 },
    { label: "4", R: 701.582, d: 3.031, sd: 8.0, medium: 3 },
    { label: "5", R: -21.642, d: 0.187, sd: 8.6 },
    { label: "6", R: 22.931, d: 4.752, sd: 8.8, medium: 4 },
    { label: "7", R: -19.343, d: 1, sd: 8.1, medium: 5 },
    { label: "8", R: -67.331, d: 1.782, sd: 7.8 },
    { label: "STO", R: "flat" },
    { label: "10", R: -12.518, d: 0.8, sd: 8.2, medium: 6 },
    { label: "11", R: 19.337, d: 3.286, sd: 8.4, medium: 7 },
    {
      label: "12A",
      R: -35.6,
      d: 0.239,
      sd: 8.8,
      asphere: { K: 4.5711, A4: -2.191e-5, A6: 1.9461e-6, A8: 6.5052e-9, A10: -1.7209e-10, A12: 0 },
    },
    {
      label: "13A",
      R: 48.56,
      d: 5.252,
      sd: 9.6,
      medium: 8,
      asphere: { K: -10.0646, A4: -8.4836e-5, A6: 1.2594e-6, A8: -5.7141e-9, A10: 0, A12: 0 },
    },
    {
      label: "14A",
      R: -13.158,
      sd: 10.0,
      asphere: { K: -0.4054, A4: 2.8349e-5, A6: -4.6349e-7, A8: 3.2328e-9, A10: 0, A12: 0 },
    },
    { label: "15", R: -44.201, d: 1.1, sd: 10.2, medium: 9 },
    { label: "16", R: -717.676, d: 10.832, sd: 10.2 },
  ],

  focus: {
    closeFocusM: 0.25,
    description: "Inner focus: G2 (L6+L7 and L8) translates object-ward; G1, aperture stop, and G3 remain fixed.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { STO: { label: "d9", values: [[7.1972, 5.7877]] }, "14A": { label: "d14", values: [[2.0857, 3.4951]] } },

  aperture: { nominalFNumber: 1.8, fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  /* ── Sensor-side cover plate (patent surfaces 17–18): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 4.082,
      nd: 1.51633,
      vd: 64.14,
      glass: "S-BSL7",
      gapAfterMm: 0.745,
      source: "JP 2013-186458 A, Numerical Example 3 surfaces 17–18",
    },
  ],

  groups: [
    { text: "G1 (+ fixed)", fromSurface: "1A", toSurface: "8" },
    { text: "STO", fromSurface: "STO", toSurface: "STO" },
    { text: "G2 (+ focus)", fromSurface: "10", toSurface: "14A" },
    { text: "G3 (− fixed)", fromSurface: "15", toSurface: "16" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
    { text: "D3", fromSurface: "10", toSurface: "12A" },
  ],

  layout: { yScFill: 0.82 },
} satisfies LensDataV2Input;

export default lensData;
