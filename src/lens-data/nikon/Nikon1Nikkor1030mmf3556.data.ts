import type { LensDataInput } from "../../types/optics.js";

/**
 * NIKON 1 NIKKOR VR 10-30mm f/3.5-5.6
 *
 * Data source: US 2012/0019926 A1, Numerical Example 4, Table 4 (Nikon / Akira Yamagami).
 * The prescription is the patent design at f = 10.3 / 17.3 / 29.1 mm, not scaled to the
 * marketed 10-30 mm endpoint labels. It contains 12 elements in 9 air-spaced groups, with
 * three aspherical surfaces and a negative-positive-negative zoom group distribution.
 *
 * Zoom variables: D8 (G1-G2), D18 (G2-G3), and BF vary with zoom. D11 is internally fixed
 * at infinity but varies during focus because the L21+L22 cemented doublet translates toward
 * the image side. The flare stopper surface is retained as surface 18 because Table 4 uses it
 * as the boundary of the G2-G3 variable spacing.
 *
 * Focus model: the patent publishes a beta = -0.01 finite-conjugate state. The close-focus
 * endpoint in this file is instead solved paraxially for the production 0.20 m minimum focus
 * distance by moving only the L21+L22 focus doublet and preserving the Table 4 image-plane
 * location. The solved focus travels are 2.2047 / 2.1046 / 2.4198 mm at the wide, middle, and
 * telephoto zoom positions respectively; telephoto paraxial magnification is about -0.210x.
 *
 * Semi-diameters are inferred. The patent does not publish clear apertures, so the values here
 * were constrained by the patent section drawing, a 40.5 mm production filter thread, paraxial
 * marginal/chief-ray envelopes for the display field, element edge thickness, sd/|R| < 0.90,
 * and cross-gap sag intrusion at all zoom/focus states.
 */

const LENS_DATA = {
  key: "nikon-1-nikkor-vr-10-30-f35-56",
  maker: "Nikon",
  name: "NIKON 1 NIKKOR VR 10-30mm f/3.5-5.6",
  subtitle: "US 2012/0019926 A1 Example 4 — Nikon / Yamagami",
  specs: [
    "12 ELEMENTS / 9 GROUPS",
    "10.3-29.1 mm patent design",
    "f/3.5-5.6 marketed",
    "3 ASPHERICAL SURFACES",
    "INNER FOCUS + VR SHIFT GROUP",
  ],

  focalLengthMarketing: [10, 30],
  focalLengthDesign: [10.3, 29.1],
  apertureMarketing: 3.5,
  apertureDesign: 3.63,
  lensMounts: ["nikon-1"],
  imageFormat: "1-inch-type",
  patentYear: 2012,
  elementCount: 12,
  groupCount: 9,

  zoomPositions: [10.3, 17.3, 29.1],
  zoomLabels: ["10 mm", "30 mm"],
  zoomStep: 0.004,
  // Endpoint values are the marketed maximum apertures; the middle value follows the patent design state.
  nominalFno: [3.5, 4.35, 5.6],
  closeFocusM: 0.2,
  focusDescription: "Inner focus by image-ward translation of the L21+L22 cemented doublet.",
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16],
  apertureBlades: 7,

  yScFill: 0.72,
  scFill: 0.62,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.851348,
      vd: 40.1,
      fl: -19.94,
      glass: "M-TAFD305 (HOYA)",
      role: "Front negative meniscus and first-group aspheric corrector.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.882997,
      vd: 40.76,
      fl: -20.53,
      glass: "S-LAH58 (OHARA)",
      role: "Second high-index negative component in G1.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      fl: 63.31,
      glass: "FDS90 (HOYA) / N-SF57 class",
      role: "Weak high-dispersion positive component in the first group.",
    },
    {
      id: 4,
      name: "L14",
      label: "L14",
      type: "Positive Meniscus",
      nd: 1.80809,
      vd: 22.79,
      fl: 43.71,
      glass: "S-NPH1 (OHARA)",
      role: "Second positive meniscus in G1, paired across a narrow air gap with L13.",
    },
    {
      id: 5,
      name: "L21",
      label: "L21",
      type: "Neg. Meniscus (1× Asph)",
      nd: 1.83441,
      vd: 37.28,
      fl: -32.9,
      glass: "M-NBFD10 (HOYA)",
      cemented: "D21",
      role: "Front element of the moving focus doublet.",
    },
    {
      id: 6,
      name: "L22",
      label: "L22",
      type: "Positive Meniscus",
      nd: 1.729157,
      vd: 54.66,
      fl: 18.17,
      glass: "S-LAL18 (OHARA)",
      cemented: "D21",
      role: "Rear element of the moving focus doublet.",
    },
    {
      id: 7,
      name: "L23",
      label: "L23",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.4,
      fl: 30.85,
      glass: "FC5 (HOYA) / N-FK5 class",
      role: "Low-dispersion positive element immediately behind the aperture stop.",
    },
    {
      id: 8,
      name: "L24",
      label: "L24",
      type: "Biconvex Positive",
      nd: 1.6172,
      vd: 54.01,
      fl: 19.73,
      glass: "617540 - K-SSK1 / SSK1 class (no source-backed catalog match)",
      cemented: "D24",
      role: "Front element of the VR shift doublet.",
    },
    {
      id: 9,
      name: "L25",
      label: "L25",
      type: "Negative Meniscus",
      nd: 1.755199,
      vd: 27.51,
      fl: -36.73,
      glass: "S-TIH4 (OHARA)",
      cemented: "D24",
      role: "Rear flint element of the VR shift doublet.",
    },
    {
      id: 10,
      name: "L31",
      label: "L31",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 40.94,
      fl: -13.89,
      glass: "S-LAH53 (OHARA; S-LAH53V class)",
      cemented: "D31",
      role: "Dominant negative element of the rear group.",
    },
    {
      id: 11,
      name: "L32",
      label: "L32",
      type: "Positive Meniscus",
      nd: 1.6779,
      vd: 55.4,
      fl: 38.47,
      glass: "S-LAL12 (OHARA; S-LAL12Q class)",
      cemented: "D31",
      role: "Positive cemented partner for L31.",
    },
    {
      id: 12,
      name: "L33",
      label: "L33",
      type: "Pos. Meniscus (1× Asph)",
      nd: 1.73077,
      vd: 40.51,
      fl: 61.85,
      glass: "M-LAF81 (HOYA)",
      role: "Final positive meniscus and rear aspheric field corrector.",
    },
  ],

  surfaces: [
    { label: "1", R: 21.1624, d: 1.3, nd: 1.851348, elemId: 1, sd: 9.9 },
    { label: "2A", R: 9.1533, d: 5.6715, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "3", R: 183.3314, d: 1.0, nd: 1.882997, elemId: 2, sd: 8.2 },
    { label: "4", R: 16.4545, d: 1.9218, nd: 1.0, elemId: 0, sd: 7.4 },
    { label: "5", R: 22.9775, d: 2.0, nd: 1.84666, elemId: 3, sd: 8.0 },
    { label: "6", R: 38.6113, d: 0.2, nd: 1.0, elemId: 0, sd: 7.8 },
    { label: "7", R: 19.9798, d: 2.0, nd: 1.80809, elemId: 4, sd: 7.8 },
    { label: "8", R: 43.9471, d: 23.6823, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "9A", R: 18.8319, d: 0.8, nd: 1.83441, elemId: 5, sd: 5.8 },
    { label: "10", R: 10.9539, d: 2.0, nd: 1.729157, elemId: 6, sd: 5.7 },
    { label: "11", R: 58.3204, d: 4.45228, nd: 1.0, elemId: 0, sd: 5.6 },
    { label: "STO", R: 1e15, d: 1.85, nd: 1.0, elemId: 0, sd: 4.4 },
    { label: "13", R: 20.4401, d: 1.7293, nd: 1.48749, elemId: 7, sd: 4.85 },
    { label: "14", R: -55.3404, d: 1.5, nd: 1.0, elemId: 0, sd: 4.85 },
    { label: "15", R: 33.397, d: 1.85, nd: 1.6172, elemId: 8, sd: 4.95 },
    { label: "16", R: -18.7603, d: 1.0, nd: 1.755199, elemId: 9, sd: 4.85 },
    { label: "17", R: -59.2931, d: 0.6, nd: 1.0, elemId: 0, sd: 4.85 },
    { label: "18", R: 1e15, d: 0.96721, nd: 1.0, elemId: 0, sd: 4.8 },
    { label: "19", R: -83.0798, d: 0.8, nd: 1.8061, elemId: 10, sd: 5.05 },
    { label: "20", R: 13.0017, d: 1.3, nd: 1.6779, elemId: 11, sd: 5.05 },
    { label: "21", R: 24.8837, d: 1.358, nd: 1.0, elemId: 0, sd: 5.1 },
    { label: "22", R: -266.4009, d: 1.15, nd: 1.73077, elemId: 12, sd: 5.35 },
    { label: "23A", R: -38.714, d: 18.49472, nd: 1.0, elemId: 0, sd: 5.45 },
  ],

  asph: {
    "2A": {
      K: -0.3204,
      A4: -4.72344e-6,
      A6: 1.65253e-7,
      A8: -1.4879e-9,
      A10: -9.66922e-13,
      A12: 0,
      A14: 0,
    },
    "9A": {
      K: 0,
      A4: -1.27907e-5,
      A6: -7.54124e-8,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "23A": {
      K: -7.2766,
      A4: 6.20471e-5,
      A6: 5.84177e-7,
      A8: -2.35856e-9,
      A10: 0,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "8": [
      [23.6823, 25.8870253974],
      [9.7015, 11.8061475188],
      [1.44017, 3.8600098513],
    ],
    "11": [
      [4.45228, 2.2475546026],
      [4.45228, 2.3476324812],
      [4.45228, 2.0324401487],
    ],
    "18": [
      [0.96721, 0.96721],
      [1.02197, 1.02197],
      [0.99017, 0.99017],
    ],
    "23A": [
      [18.49472, 18.49472],
      [26.58717, 26.58717],
      [40.52334, 40.52334],
    ],
  },

  varLabels: [
    ["8", "D8 (G1-G2)"],
    ["11", "D11 (focus)"],
    ["18", "D18 (G2-G3)"],
    ["23A", "BF"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "8" },
    { text: "G2", fromSurface: "9A", toSurface: "18" },
    { text: "G3", fromSurface: "19", toSurface: "23A" },
  ],

  doublets: [
    { text: "D21", fromSurface: "9A", toSurface: "11" },
    { text: "D24", fromSurface: "15", toSurface: "17" },
    { text: "D31", fromSurface: "19", toSurface: "21" },
  ],
} satisfies LensDataInput;

export default LENS_DATA;
