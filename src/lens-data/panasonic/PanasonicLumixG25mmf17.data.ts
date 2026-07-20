import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║        LENS DATA — PANASONIC LUMIX G 25mm f/1.7 ASPH.              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2017/0059832 A1, Numerical Example 4.              ║
 * ║  Panasonic single-focal-length positive / negative / positive        ║
 * ║  inner-focus normal prime for Micro Four Thirds.                     ║
 * ║  8 elements / 7 groups; 4 aspherical surfaces on 2 molded elements.  ║
 * ║  Focus: L6 alone (G2) moves imageward from infinity to close focus.  ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    No scaling applied. The patent prescription is already in real    ║
 * ║    millimeter units with f = 25.8784 mm and close-focus geometry     ║
 * ║    matching the production 0.25 m specification.                     ║
 * ║                                                                    ║
 * ║  NOTE ON COVER GLASS:                                               ║
 * ║    Patent surfaces 17 and 18 are a 4.2 mm plane-parallel cover       ║
 * ║    plate, followed by a 1.0 mm air space and a dummy flat BF plane.  ║
 * ║    Per project convention, the cover plate is omitted from the       ║
 * ║    surfaces array. Its paraxial optical thickness is folded into     ║
 * ║    the final air-equivalent BFD after L8:                            ║
 * ║      BF_air = 10.8 + 4.2 / 1.51680 + 1.0 + BF_patent.               ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    The patent does not publish clear semi-diameters. Values below    ║
 * ║    were estimated from paraxial marginal/chief-ray envelopes, Fig. 7 ║
 * ║    proportions, the 46 mm filter thread, and renderer constraints.   ║
 * ║    L2/L3 and L7/L8 are deliberately rim-limited by curvature,        ║
 * ║    aspheric-slope, edge-thickness, and cross-gap checks; the data    ║
 * ║    therefore models the physical lens rather than an unvignetted     ║
 * ║    mathematical full-field pupil.                                    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "panasonic-lumix-g-25mm-f17",
  maker: "Panasonic",
  name: "PANASONIC LUMIX G 25mm f/1.7 ASPH.",
  subtitle: "US 2017/0059832 A1 Example 4 — Panasonic / Yoshinaga",
  specs: [
    "8 elements / 7 groups",
    "f = 25.878 mm design / 25 mm nominal",
    "F/1.760 design / f/1.7 nominal",
    "2ω = 47.26° patent field",
    "4 aspherical surfaces on 2 elements",
  ],

  focalLengthMarketing: 25,
  focalLengthDesign: 25.8784,
  apertureMarketing: 1.7,
  apertureDesign: 1.76012,
  lensMounts: ["micro-four-thirds"],
  imageFormat: "four-thirds",
  patentNumber: "US 2017/0059832 A1",
  patentAuthors: ["Shunichiro Yoshinaga"],
  patentAssignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  patentYear: 2017,
  elementCount: 8,
  groupCount: 7,
  apertureBlades: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 2.00069,
      vd: 25.5,
      fl: 28.747,
      glass: "TAFD40 (Hoya) / H-ZLaF90 class",
      apd: false,
      dPgF: 0.0126,
      nC: 1.98941,
      nF: 2.02872,
      ng: 2.05283,
      apdNote: "Patent Table 23 line indices retained; not a Table 36 APD-condition element.",
      role: "Ultra-high-index front positive collector; main front-group power source.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.51742,
      vd: 52.1,
      fl: -20.587,
      glass: "E-CF6 (Hoya) / S-NSL36 class",
      apd: false,
      dPgF: 0.0027,
      nC: 1.51444,
      nF: 1.52436,
      ng: 1.5299,
      apdNote: "Patent Table 23 line indices retained; not a Table 36 APD-condition element.",
      role: "Front negative meniscus that moderates the strong convergence from L1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.75211,
      vd: 25.0,
      fl: -11.172,
      glass: "FF8 (Hoya, 752/251)",
      apd: "patent",
      dPgF: 0.0173,
      nC: 1.74352,
      nF: 1.77355,
      ng: 1.79214,
      apdNote: "Table 36 condition (1) element A; patent line indices: PgF = 0.61909; ΔPgF ≈ +0.0173.",
      role: "Dense-flint half of the cemented chromatic corrector in G1.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      fl: 14.691,
      glass: "TAC8 (Hoya) / S-LAL18 class",
      apd: false,
      dPgF: -0.0066,
      nC: 1.7251,
      nF: 1.73844,
      ng: 1.74571,
      apdNote: "Patent Table 23 line indices retained; not a Table 36 APD-condition element.",
      role: "Lanthanum-crown positive half of the L3-L4 cemented corrector.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      fl: 27.466,
      glass: "TAF3 (Hoya) / N-LASF44 class",
      apd: false,
      dPgF: -0.0077,
      nC: 1.799,
      nF: 1.8163,
      ng: 1.82594,
      apdNote: "Patent Table 23 line indices retained; not a Table 36 APD-condition element.",
      role: "Post-stop positive element completing the first positive lens unit.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.5338,
      vd: 55.6,
      fl: -45.555,
      glass: "Unmatched (53380/55.6 anomalous PGM crown; patent line indices)",
      apd: "patent",
      dPgF: 0.012,
      nC: 1.531,
      nF: 1.5406,
      ng: 1.546,
      apdNote: "Table 36 condition (3) element C; patent line indices: PgF = 0.56232; ΔPgF ≈ +0.0120.",
      role: "Single-element negative focusing group G2; both surfaces are aspherical.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.5338,
      vd: 55.6,
      fl: 24.177,
      glass: "Unmatched (53380/55.6 anomalous PGM crown; patent line indices)",
      apd: "patent",
      dPgF: 0.012,
      nC: 1.531,
      nF: 1.5406,
      ng: 1.546,
      apdNote: "Table 36 condition (2) element B; patent line indices: PgF = 0.56232; ΔPgF ≈ +0.0120.",
      role: "Main rear positive relay element; both surfaces are aspherical.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.9,
      fl: -84.462,
      glass: "E-FL5 (Hoya) / S-TIL25 class",
      apd: false,
      dPgF: 0.0017,
      nC: 1.57723,
      nF: 1.59145,
      ng: 1.59965,
      apdNote: "Patent Table 23 line indices retained; not a Table 36 APD-condition element.",
      role: "Weak rear negative field-flattening meniscus.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 23.8785, d: 4.3, nd: 2.00069, elemId: 1, sd: 14.3 },
    { label: "2", R: 127.8616, d: 1.5265, nd: 1.0, elemId: 0, sd: 14.3 },
    { label: "3", R: 183.8699, d: 0.7, nd: 1.51742, elemId: 2, sd: 8.2 },
    { label: "4", R: 10.0557, d: 7.3268, nd: 1.0, elemId: 0, sd: 8.0 },
    { label: "5", R: -14.1493, d: 2.77, nd: 1.75211, elemId: 3, sd: 8.0 },
    { label: "6", R: 22.4277, d: 5.15, nd: 1.72916, elemId: 4, sd: 8.5 },
    { label: "7", R: -18.52, d: 0.6, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "STO", R: 1e15, d: 1.7, nd: 1.0, elemId: 0, sd: 8.34 },
    { label: "9", R: 36.688, d: 5.5, nd: 1.8042, elemId: 5, sd: 9.8 },
    { label: "10", R: -51.7984, d: 2.35, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "11A", R: 253.2104, d: 2.5, nd: 1.5338, elemId: 6, sd: 10.2 },
    { label: "12A", R: 22.1105, d: 9.5295, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "13A", R: 31.3591, d: 6.5, nd: 1.5338, elemId: 7, sd: 11.8 },
    { label: "14A", R: -20.3491, d: 3.5472, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "15", R: -30.6242, d: 1.0, nd: 1.58144, elemId: 8, sd: 11.8 },
    { label: "16", R: -82.3348, d: 14.573597341772153, nd: 1.0, elemId: 0, sd: 11.8 },
  ],

  /* ── Aspherical coefficients ── */
  asph: {
    "11A": {
      K: 0,
      A4: 1.61276e-5,
      A6: -5.81668e-7,
      A8: -2.09502e-9,
      A10: 7.71341e-10,
      A12: -2.108e-11,
      A14: 2.38633e-13,
      A16: -1.00673e-15,
    },
    "12A": {
      K: 0,
      A4: 1.81047e-5,
      A6: 1.27838e-6,
      A8: -1.03829e-7,
      A10: 3.56865e-9,
      A12: -6.09424e-11,
      A14: 5.06181e-13,
      A16: -1.58084e-15,
    },
    "13A": {
      K: 0,
      A4: 1.78062e-5,
      A6: 2.01697e-7,
      A8: -9.59188e-9,
      A10: 2.58013e-10,
      A12: -3.40082e-12,
      A14: 2.22992e-14,
      A16: -5.27487e-17,
    },
    "14A": {
      K: 0,
      A4: 4.8716e-5,
      A6: -1.55628e-7,
      A8: 3.63235e-9,
      A10: -5.25127e-11,
      A12: 9.47811e-13,
      A14: -9.91324e-15,
      A16: 4.47375e-17,
    },
  },

  /* ── Variable air spacings ── */
  var: {
    "10": [2.35, 8.6131],
    "12A": [9.5295, 3.2651],
    "16": [14.573597341772153, 14.574927341772154],
  },

  varLabels: [
    ["10", "d10"],
    ["12A", "d12"],
    ["16", "BF"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "10" },
    { text: "G2 (-) Focus", fromSurface: "11A", toSurface: "12A" },
    { text: "G3 (+)", fromSurface: "13A", toSurface: "16" },
  ],

  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  /* ── Focus configuration ── */
  closeFocusM: 0.25,
  focusDescription:
    "Inner focus: the single negative L6 element (G2) moves imageward; patent cover glass is folded into the final air-equivalent BF.",

  /* ── Aperture configuration ── */
  nominalFno: 1.7,
  fstopSeries: [1.7, 2, 2.8, 4, 5.6, 8, 11, 16, 22],

  /* ── Layout tuning ── */
  scFill: 0.56,
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
