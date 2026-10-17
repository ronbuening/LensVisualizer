import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * SIGMA MACRO 70mm f/2.8 EX DG — JP 2008-020656 A, Numerical Example 1.
 * Production correlation is qualified, not manufacturer-confirmed factory identity.
 * Native prescription retained, scale 1: f=68.9061 mm and infinity F=2.8823.
 * Ten elements/nine components, all spherical. S9 is STO; S17 is a real refracting
 * plane into glass, not a sensor plate/dummy. R7 and R13 remain finite 1000 mm.
 * PUBLISHED focus states: D0 infinity/150/79 mm; D16 1.5/16.8/31 mm;
 * BF 55.8157/65.7028/77.5409 mm. focusPositions uses native object-to-image distances.
 * Between-station motion is modeled piecewise-linear interpolation, not a source cam law.
 * APERTURE LIMITATION: one fixed physical iris has its radius derived from the design
 * f-number by exact axial tracing at the nominal entrance-pupil radius,
 * Gaussian EFL / (2 * source infinity F).
 * Published F=2.8823/3.8824/5.0151 is retained in the dossier. Finite-focus f-number
 * reproduction remains unverified; no focus-dependent iris schedule is invented.
 * NAMING: the patent uses "L" for sub-groups (L1 = elements 2-4, L2 = cemented L2A + L2B,
 * L3 = L3A + L3B) inside lens group G2; G1 is the front negative meniscus; G1 + G2 form the
 * first group and elements 9-10 the second group. Elements are therefore named E1..E10 and
 * the four lenses the patent itself designates carry diagramLabel L2A/L2B/L3A/L3B.
 * Semi-diameters are estimated from Fig.1 (both focus panels, measured at 5.85 px/mm)
 * and floor-checked by real-ray trace at all three published focus states. The figure's
 * chamfers on E4 and E5 (L2A) are kept as face steps: S8 below S7, S10 below S11/S12.
 * The rear rims follow the drawn staircase E6 13.4 / E7 13.8 / E8 14.1 / E9 14.4 / E10 15.0.
 * They are modeled clear apertures, not patent dimensions. No source surfaces omitted.
 * Patent partial-dispersion deviations are converted from its explicit normal line
 * to current application dPgF; no catalog candidate line indices are substituted.
 * Catalog labels are coordinate-equal HOYA rows; they do not identify the production supplier or melt.
 */

const LENS_DATA = {
  schema: 2,
  key: "sigma-macro-70mm-f28-ex-dg",
  maker: "Sigma",
  name: "SIGMA MACRO 70mm f/2.8 EX DG",
  subtitle: "JP 2008-020656 A, Example 1 — qualified production correlation",

  catalog: {
    lensMounts: ["sigma-sa", "canon-ef", "nikon-f", "pentax-k", "sony-a"],
    imageFormat: "135-full-frame",
    specs: ["10 ELEMENTS / 9 GROUPS", "DESIGN f = 68.91 mm", "DESIGN F/2.88", "ALL SPHERICAL"],
    elementCount: 10,
    groupCount: 9,
    focalLengthMm: { marketing: 70, design: 68.9061 },
    fNumber: { marketing: 2.8, design: 2.8823 },
  },

  source: {
    patentNumber: "JP 2008-020656 A",
    patentYear: 2008,
    authors: ["Yutaka Kamimura", "Ai Hoshina"],
    assignees: ["Sigma Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "E1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.54072,
      vd: 47.2,
      focalLengthMm: -71.59033,
      glass: "E-FEL2 (HOYA, coordinate equivalent)",
      role: "Negative meniscus that alone forms the patent's lens group G1, the front of the first group.",
    },
    {
      id: 2,
      name: "E2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 45.215389,
      glass: "TAF1 (HOYA, coordinate equivalent)",
      role: "Positive first member of the patent's pre-stop sub-group L1 (inside lens group G2).",
    },
    {
      id: 3,
      name: "E3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: 80.719761,
      glass: "LAC14 (HOYA, coordinate equivalent)",
      role: "Positive meniscus, middle member of the patent's pre-stop sub-group L1.",
    },
    {
      id: 4,
      name: "E4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.0,
      focalLengthMm: -38.576952,
      glass: "E-F5 (HOYA, coordinate equivalent)",
      role: "Negative meniscus closing the patent's sub-group L1; its strong concave rear face looks at the stop.",
    },
    {
      id: 5,
      name: "E5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.58144,
      vd: 40.9,
      focalLengthMm: -36.614433,
      glass: "E-FL5 (HOYA, coordinate equivalent)",
      role: "Patent lens L2A: negative partner of the net-negative cemented sub-group L2 behind the stop.",
      diagramLabel: "L2A",
      cemented: "L2",
    },
    {
      id: 6,
      name: "E6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.56045,
      vd: 71.6,
      focalLengthMm: 47.340327,
      glass: "Unmatched (anomalous-dispersion crown; catalog identity unresolved)",
      apd: "patent",
      apdNote:
        "Patent identifies anomalous dispersion: native delta=0.0285 on 0.6575 - 0.002*vd; application dPgF=0.0194312 after baseline conversion. No measured line indices supplied.",
      role: "Patent lens L2B: positive anomalous-dispersion partner cemented to L2A; the patent tabulates its partial-dispersion deviation.",
      diagramLabel: "L2B",
      cemented: "L2",
      dPgF: 0.0194312,
    },
    {
      id: 7,
      name: "E7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.56045,
      vd: 71.6,
      focalLengthMm: 90.222707,
      glass: "Unmatched (anomalous-dispersion crown; catalog identity unresolved)",
      apd: "patent",
      apdNote:
        "Patent identifies anomalous dispersion: native delta=0.0285 on 0.6575 - 0.002*vd; application dPgF=0.0194312 after baseline conversion. No measured line indices supplied.",
      role: "Patent lens L3A: first positive anomalous-dispersion lens of sub-group L3 at the rear of the first group.",
      diagramLabel: "L3A",
      dPgF: 0.0194312,
    },
    {
      id: 8,
      name: "E8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      focalLengthMm: 105.729177,
      glass: "FCD1 (HOYA, coordinate equivalent)",
      apd: "patent",
      apdNote:
        "Patent identifies anomalous dispersion: native delta=0.0443 on 0.6575 - 0.002*vd; application dPgF=0.0320512 after baseline conversion. No measured line indices supplied.",
      role: "Patent lens L3B: second positive lens of sub-group L3, the higher-Abbe anomalous-dispersion glass; last element of the first group.",
      diagramLabel: "L3B",
      dPgF: 0.0320512,
    },
    {
      id: 9,
      name: "E9",
      label: "Element 9",
      type: "Plano-Concave",
      nd: 1.64,
      vd: 60.2,
      focalLengthMm: -82.53125,
      glass: "LACL60 (HOYA, coordinate equivalent)",
      role: "Negative plano-concave front element of the net-negative second group (the floating group).",
    },
    {
      id: 10,
      name: "E10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: 121.404589,
      glass: "TAFD5G (HOYA, coordinate equivalent)",
      role: "Positive rear element of the second group, partly balancing the negative element ahead of it.",
    },
  ],

  surfaces: [
    { label: "1", R: 369.55, d: 1.8, sd: 20, medium: 1 },
    { label: "2", R: 34.98, d: 13.45, sd: 20 },
    { label: "3", R: 46.16, d: 5.65, sd: 18, medium: 2 },
    { label: "4", R: -135.9, d: 0.15, sd: 18 },
    { label: "5", R: 31.73, d: 3.5, sd: 15.6, medium: 3 },
    { label: "6", R: 69.5, d: 5.79, sd: 15.6 },
    { label: "7", R: 1000.0, d: 1.0, sd: 13.1, medium: 4 },
    { label: "8", R: 22.74, d: 12.1, sd: 12.1 },
    { label: "STO", R: "flat", d: 4.2 },
    { label: "10", R: -27.01, d: 1.0, sd: 11.7, medium: 5 },
    { label: "11", R: 101.88, d: 4.7, sd: 13.4, medium: 6 },
    { label: "12", R: -35.28, d: 1.85, sd: 13.4 },
    { label: "13", R: 1000.0, d: 3.05, sd: 13.8, medium: 7 },
    { label: "14", R: -53.2, d: 0.15, sd: 13.8 },
    { label: "15", R: 125.46, d: 3.0, sd: 14.1, medium: 8 },
    { label: "16", R: -89.7, sd: 14.1 },
    { label: "17", R: "flat", d: 1.2, sd: 14.4, medium: 9 },
    { label: "18", R: 52.82, d: 2.6, sd: 14.4 },
    { label: "19", R: 931.0, d: 2.35, sd: 15, medium: 10 },
    { label: "20", R: -113.6, sd: 15 },
  ],

  focus: {
    closeFocusM: 0.2550809,
    keyframes: [0, 0.8501483788312867, 1],
    description:
      "PUBLISHED three-state floating extension: D16/BF follow JP 2008-020656 A Example 1 (infinity, 0.50x, 1.02x). Both groups extend toward the object relative to the fixed image: the first group (G1 + G2, S1-S16) by 25.19 mm then 51.23 mm, the second group (S17-S20) by 9.89 mm then 21.73 mm, so D16 opens from 1.5 to 31.0 mm. Intermediate slider positions are modeled interpolation, not published cam positions. The fixed physical iris is inferred by exact axial tracing at the nominal infinity entrance pupil for F/2.8823; reproduction of finite-focus published F/3.8824 and F/5.0151 remains unverified.",
  },

  gaps: {
    "16": { label: "D16", values: [[1.5, 16.8, 31.0]] },
    "20": { label: "BF", values: [[55.8157, 65.7028, 77.5409]] },
  },

  aperture: { nominalFNumber: 2.8823, fStops: [2.8823, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 9 },

  groups: [
    { text: "1ST GROUP (+): G1, G2", fromSurface: "1", toSurface: "16" },
    { text: "2ND GROUP (-)", fromSurface: "17", toSurface: "20" },
  ],
  doublets: [{ text: "L2", fromSurface: "10", toSurface: "12" }],

  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;

export default LENS_DATA;
