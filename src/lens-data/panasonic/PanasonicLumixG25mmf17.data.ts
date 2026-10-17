import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║    Patent surfaces 17 and 18 are the 4.2 mm plane-parallel plate M   ║
 * ║    (nd 1.51680, νd 64.2), followed by a 1.0 mm air space and a       ║
 * ║    dummy flat plane with BF = 0.00461 / 0.00488 / 0.00594 mm. M is   ║
 * ║    modeled in `rearPlates` (traced, not drawn) with 1.00461 mm to    ║
 * ║    the image. Surface 16 keeps the patent 10.8 mm gap to M; the BF   ║
 * ║    growth at close focus (+0.00027 / +0.00133 mm) is carried in      ║
 * ║    that gap (10.80027 / 10.80133), so the total path is as printed.  ║
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
  schema: 2,
  key: "panasonic-lumix-g-25mm-f17",
  maker: "Panasonic",
  name: "PANASONIC LUMIX G 25mm f/1.7 ASPH.",
  subtitle: "US 2017/0059832 A1 Example 4 — Panasonic / Yoshinaga",

  catalog: {
    lensMounts: ["micro-four-thirds"],
    imageFormat: "four-thirds",
    specs: [
      "8 elements / 7 groups",
      "f = 25.878 mm design / 25 mm nominal",
      "F/1.760 design / f/1.7 nominal",
      "2ω = 47.26° patent field",
      "4 aspherical surfaces on 2 elements",
    ],
    elementCount: 8,
    groupCount: 7,
    focalLengthMm: { marketing: 25, design: 25.8784 },
    fNumber: { marketing: 1.7, design: 1.76012 },
  },

  source: {
    patentNumber: "US 2017/0059832 A1",
    patentYear: 2017,
    authors: ["Shunichiro Yoshinaga"],
    assignees: ["Panasonic Intellectual Property Management Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 2.00069,
      vd: 25.5,
      focalLengthMm: 28.747,
      glass: "TAFD40 (Hoya) / H-ZLaF90 class",
      apd: false,
      apdNote: "Patent Table 23 line indices retained; not a Table 36 APD-condition element.",
      role: "Ultra-high-index front positive collector; main front-group power source.",
      dPgF: 0.0126,
      nC: 1.98941,
      nF: 2.02872,
      ng: 2.05283,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.51742,
      vd: 52.1,
      focalLengthMm: -20.587,
      glass: "E-CF6 (Hoya) / S-NSL36 class",
      apd: false,
      apdNote: "Patent Table 23 line indices retained; not a Table 36 APD-condition element.",
      role: "Front negative meniscus that moderates the strong convergence from L1.",
      dPgF: 0.0027,
      nC: 1.51444,
      nF: 1.52436,
      ng: 1.5299,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.75211,
      vd: 25.0,
      focalLengthMm: -11.172,
      glass: "FF8 (Hoya, 752/251)",
      apd: "patent",
      apdNote: "Table 36 condition (1) element A; patent line indices: PgF = 0.61909; ΔPgF ≈ +0.0173.",
      role: "Dense-flint half of the cemented chromatic corrector in G1.",
      cemented: "D1",
      dPgF: 0.0173,
      nC: 1.74352,
      nF: 1.77355,
      ng: 1.79214,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.72916,
      vd: 54.7,
      focalLengthMm: 14.691,
      glass: "TAC8 (Hoya) / S-LAL18 class",
      apd: false,
      apdNote: "Patent Table 23 line indices retained; not a Table 36 APD-condition element.",
      role: "Lanthanum-crown positive half of the L3-L4 cemented corrector.",
      cemented: "D1",
      dPgF: -0.0066,
      nC: 1.7251,
      nF: 1.73844,
      ng: 1.74571,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: 27.466,
      glass: "TAF3 (Hoya) / N-LASF44 class",
      apd: false,
      apdNote: "Patent Table 23 line indices retained; not a Table 36 APD-condition element.",
      role: "Post-stop positive element completing the first positive lens unit.",
      dPgF: -0.0077,
      nC: 1.799,
      nF: 1.8163,
      ng: 1.82594,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.5338,
      vd: 55.6,
      focalLengthMm: -45.555,
      glass: "Unmatched (53380/55.6 anomalous PGM crown; patent line indices)",
      apd: "patent",
      apdNote: "Table 36 condition (3) element C; patent line indices: PgF = 0.56232; ΔPgF ≈ +0.0120.",
      role: "Single-element negative focusing group G2; both surfaces are aspherical.",
      dPgF: 0.012,
      nC: 1.531,
      nF: 1.5406,
      ng: 1.546,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.5338,
      vd: 55.6,
      focalLengthMm: 24.177,
      glass: "Unmatched (53380/55.6 anomalous PGM crown; patent line indices)",
      apd: "patent",
      apdNote: "Table 36 condition (2) element B; patent line indices: PgF = 0.56232; ΔPgF ≈ +0.0120.",
      role: "Main rear positive relay element; both surfaces are aspherical.",
      dPgF: 0.012,
      nC: 1.531,
      nF: 1.5406,
      ng: 1.546,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.9,
      focalLengthMm: -84.462,
      glass: "E-FL5 (Hoya) / S-TIL25 class",
      apd: false,
      apdNote: "Patent Table 23 line indices retained; not a Table 36 APD-condition element.",
      role: "Weak rear negative field-flattening meniscus.",
      dPgF: 0.0017,
      nC: 1.57723,
      nF: 1.59145,
      ng: 1.59965,
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 23.8785, d: 4.3, sd: 14.3, medium: 1 },
    { label: "2", R: 127.8616, d: 1.5265, sd: 14.3 },
    { label: "3", R: 183.8699, d: 0.7, sd: 8.2, medium: 2 },
    { label: "4", R: 10.0557, d: 7.3268, sd: 8.0 },
    { label: "5", R: -14.1493, d: 2.77, sd: 8.0, medium: 3 },
    { label: "6", R: 22.4277, d: 5.15, sd: 8.5, medium: 4 },
    { label: "7", R: -18.52, d: 0.6, sd: 8.5 },
    { label: "STO", R: "flat", d: 1.7 },
    { label: "9", R: 36.688, d: 5.5, sd: 9.8, medium: 5 },
    { label: "10", R: -51.7984, sd: 9.8 },
    {
      label: "11A",
      R: 253.2104,
      d: 2.5,
      sd: 10.2,
      medium: 6,
      asphere: {
        K: 0,
        A4: 1.61276e-5,
        A6: -5.81668e-7,
        A8: -2.09502e-9,
        A10: 7.71341e-10,
        A12: -2.108e-11,
        A14: 2.38633e-13,
        A16: -1.00673e-15,
      },
    },
    {
      label: "12A",
      R: 22.1105,
      sd: 10.2,
      asphere: {
        K: 0,
        A4: 1.81047e-5,
        A6: 1.27838e-6,
        A8: -1.03829e-7,
        A10: 3.56865e-9,
        A12: -6.09424e-11,
        A14: 5.06181e-13,
        A16: -1.58084e-15,
      },
    },
    {
      label: "13A",
      R: 31.3591,
      d: 6.5,
      sd: 11.8,
      medium: 7,
      asphere: {
        K: 0,
        A4: 1.78062e-5,
        A6: 2.01697e-7,
        A8: -9.59188e-9,
        A10: 2.58013e-10,
        A12: -3.40082e-12,
        A14: 2.22992e-14,
        A16: -5.27487e-17,
      },
    },
    {
      label: "14A",
      R: -20.3491,
      d: 3.5472,
      sd: 11.8,
      asphere: {
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
    { label: "15", R: -30.6242, d: 1.0, sd: 11.8, medium: 8 },
    { label: "16", R: -82.3348, sd: 11.8 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.25,
    /* ── Variable air spacings ── */
    keyframes: [0, 0.2477119647035117, 1],
    description:
      "Inner focus: the single negative L6 element (G2) moves imageward; patent plate M is modeled in rearPlates (traced, not drawn).",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    "10": { label: "d10", values: [[2.35, 3.4869, 8.6131]] },
    "12A": { label: "d12", values: [[9.5295, 8.3965, 3.2651]] },
    "16": { label: "BF", values: [[10.8, 10.80027, 10.80133]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 1.76012, fStops: [1.76012, 2, 2.8, 4, 5.6, 8, 11, 16, 22], blades: 7 },

  /* ── Plane-parallel plate M (patent surfaces 17–18): traced, not drawn ── */
  rearPlates: [
    {
      label: "M",
      thicknessMm: 4.2,
      nd: 1.5168,
      vd: 64.2,
      glass: "BSC7 (Hoya)",
      dPgF: -0.00164,
      nC: 1.51432,
      nF: 1.52237,
      ng: 1.52667,
      gapAfterMm: 1.00461,
      source: "US 2017/0059832 A1, Numerical Example 4 surfaces 17–19 (Tables 22–23, 25; patent θgF 0.53418)",
    },
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "10" },
    { text: "G2 (-) Focus", fromSurface: "11A", toSurface: "12A" },
    { text: "G3 (+)", fromSurface: "13A", toSurface: "16" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  /* ── Layout tuning ── */
  layout: { scFill: 0.56, yScFill: 0.44 },
} satisfies LensDataV2Input;

export default LENS_DATA;
