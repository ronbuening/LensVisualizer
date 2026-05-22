import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ Sony FE 28mm F2 (SEL28F20)                                         ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 10,191,254 B2, Numerical Example 10 (Sony).        ║
 * ║ 9 elements / 8 air-spaced optical groups; six aspherical surfaces. ║
 * ║ Functional groups: G1 positive, G2 negative focus group, G3 positive.║
 * ║ Focus: inner focus by axial travel of L6 / G2 toward the image.     ║
 * ║                                                                    ║
 * ║ NOTE ON COVER GLASS:                                               ║
 * ║   The patent lists a 2.5 mm cover glass after surface 18 and a      ║
 * ║   final 1.0 mm BF. Per project convention, the cover glass is not   ║
 * ║   included as an optical surface here; it is folded into the final  ║
 * ║   air-equivalent BFD: 15.309 + 2.5 / 1.516798 + 1.000 = 17.957209. ║
 * ║                                                                    ║
 * ║ NOTE ON SEMI-DIAMETERS:                                            ║
 * ║   The patent does not publish clear semi-diameters. Values below    ║
 * ║   are paraxial ray-envelope estimates checked against edge          ║
 * ║   thickness, sd/|R|, front/rear SD ratio, and cross-gap sag limits. ║
 * ║   The front L1/L2 air gap is the binding clearance constraint.      ║
 * ║                                                                    ║
 * ║ NOTE ON CLOSE FOCUS:                                               ║
 * ║   The patent gives only the infinity prescription for Example 10.   ║
 * ║   The close-focus gaps are a paraxial solve in the folded-cover     ║
 * ║   data coordinate against Sony's 0.25 m MF / 0.16× specification.  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "sony-fe-28mm-f2",
  maker: "Sony",
  name: "Sony FE 28mm F2",
  subtitle: "US 10,191,254 B2 Example 10 — Sony / Katou et al.",
  specs: [
    "9 elements / 8 groups",
    "f = 28.23 mm patent design",
    "F2.0 marketed / F2.06 patent",
    "2ω = 76.54° patent diagonal",
    "3 aspherical elements / 2 ED elements",
  ],

  focalLengthMarketing: 28,
  focalLengthDesign: 28.233938,
  apertureMarketing: 2,
  apertureDesign: 2.06,
  lensMounts: ["sony-fe"],
  imageFormat: "135-full-frame",
  patentYear: 2019,
  elementCount: 9,
  groupCount: 8,
  apertureBlades: 9,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.487489,
      vd: 70.4,
      fl: -40.0,
      glass: "N-FK5 / FC5 class (Schott/HOYA, 487/704)",
      apd: false,
      role: "Front negative meniscus / wide-converter element in G1F.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.9,
      fl: -30.3,
      glass: "LF5 / E-FL5 class (Schott/HOYA, 581/409)",
      apd: false,
      role: "Thin negative relay element at the front of G1R.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.846663,
      vd: 23.8,
      fl: -119.3,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Dense-flint member of the G1 cemented chromatic-correction pair; focal length is standalone in air.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.496997,
      vd: 81.6,
      fl: 28.0,
      glass: "S-FPL51 (OHARA) / FCD1 (HOYA)",
      apd: "inferred",
      apdNote:
        "ED fluorophosphate glass; catalog anomalous partial-dispersion behavior inferred, not patent-tabulated.",
      role: "Positive ED member of the G1 cemented doublet.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.772502,
      vd: 49.5,
      fl: 24.4,
      glass: "M-TAF1 / TAF1 class (HOYA, 773/495)",
      apd: false,
      role: "High-index double-aspherical pre-stop positive element; probable AA element in the production lens.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.5,
      fl: -53.0,
      glass: "M-BACD12 (HOYA) / S-BAL42 (OHARA) class, 583/595",
      apd: false,
      role: "Single-element G2 inner-focus group; moves imageward for close focus.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus (2× Asph)",
      nd: 1.58313,
      vd: 59.5,
      fl: 57.7,
      glass: "M-BACD12 (HOYA) / S-BAL42 (OHARA) class, 583/595",
      apd: false,
      role: "First G3 relay element and rear-group aspherical corrector.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.496997,
      vd: 81.6,
      fl: 45.5,
      glass: "S-FPL51 (OHARA) / FCD1 (HOYA)",
      apd: "inferred",
      apdNote:
        "ED fluorophosphate glass; catalog anomalous partial-dispersion behavior inferred, not patent-tabulated.",
      role: "Rear ED positive element paired optically with the final dense flint.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.846663,
      vd: 23.8,
      fl: -34.0,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Final negative dense-flint field-flattening and chromatic-correction element.",
    },
  ],

  surfaces: [
    { label: "1", R: 72.567, d: 1.4, nd: 1.487489, elemId: 1, sd: 13.4 },
    { label: "2", R: 15.271, d: 10.231, nd: 1.0, elemId: 0, sd: 11.3 },
    { label: "3", R: -17.441, d: 0.8, nd: 1.58144, elemId: 2, sd: 11.3 },
    { label: "4", R: -1782.041, d: 0.2, nd: 1.0, elemId: 0, sd: 11.4 },
    { label: "5", R: 36.075, d: 1.0, nd: 1.846663, elemId: 3, sd: 11.5 },
    { label: "6", R: 26.243, d: 6.348, nd: 1.496997, elemId: 4, sd: 11.5 },
    { label: "7", R: -27.198, d: 0.2, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "8A", R: 33.775, d: 5.458, nd: 1.772502, elemId: 5, sd: 12.1 },
    { label: "9A", R: -39.765, d: 2.3, nd: 1.0, elemId: 0, sd: 11.2 },
    { label: "STO", R: 1e15, d: 2.3, nd: 1.0, elemId: 0, sd: 9.76 },
    { label: "11A", R: 44.681, d: 1.0, nd: 1.58313, elemId: 6, sd: 9.95 },
    { label: "12A", R: 18.127, d: 8.871, nd: 1.0, elemId: 0, sd: 9.9 },
    { label: "13A", R: -44.784, d: 3.142, nd: 1.58313, elemId: 7, sd: 11.5 },
    { label: "14A", R: -19.714, d: 2.428, nd: 1.0, elemId: 0, sd: 12.2 },
    { label: "15", R: -137.164, d: 5.845, nd: 1.496997, elemId: 8, sd: 12.2 },
    { label: "16", R: -19.682, d: 5.367, nd: 1.0, elemId: 0, sd: 12.4 },
    { label: "17", R: -32.556, d: 1.3, nd: 1.846663, elemId: 9, sd: 10.8 },
    { label: "18", R: 250.0, d: 17.957208924326114, nd: 1.0, elemId: 0, sd: 10.8 },
  ],

  asph: {
    "8A": { K: 0, A4: -4.52e-6, A6: -4.73e-8, A8: 4.64e-10, A10: -3.5e-13, A12: 0, A14: 0 },
    "9A": { K: 0, A4: 1.82e-5, A6: -6.29e-8, A8: 5.57e-10, A10: -6.15e-13, A12: 0, A14: 0 },
    "11A": { K: 0, A4: -5.29e-5, A6: 3.38e-7, A8: -1.35e-9, A10: 0, A12: 0, A14: 0 },
    "12A": { K: 0, A4: -5.19e-5, A6: 3.65e-7, A8: -1.3e-9, A10: -3.7e-12, A12: 0, A14: 0 },
    "13A": { K: 0, A4: 0, A6: 3.09e-7, A8: -8.76e-10, A10: 1.1e-12, A12: 0, A14: 0 },
    "14A": { K: 0, A4: 2.68e-5, A6: 2.47e-7, A8: 0, A10: 0, A12: 0, A14: 0 },
  },

  var: {
    STO: [2.3, 6.719239536941148],
    "12A": [8.871, 4.451760463058853],
  },

  varLabels: [
    ["STO", "D(STO-L6)"],
    ["12A", "D(L6-G3)"],
  ],

  groups: [
    { text: "G1F", fromSurface: "1", toSurface: "2" },
    { text: "G1R", fromSurface: "3", toSurface: "9A" },
    { text: "G2 focus", fromSurface: "11A", toSurface: "12A" },
    { text: "G3", fromSurface: "13A", toSurface: "18" },
  ],

  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  closeFocusM: 0.25,
  focusDescription:
    "Inner focus: only L6 / G2 moves imageward. The close-focus state is paraxially solved in the folded-cover data coordinate for Sony's 0.25 m MF minimum focus distance; AF minimum focus is 0.29 m with shorter travel.",

  nominalFno: 2.0,
  maxFstop: 22,
  fstopSeries: [2, 2.8, 4, 5.6, 8, 11, 16, 22],

  scFill: 0.58,
  yScFill: 0.46,
  offAxisFieldFrac: 0.55,
} satisfies LensDataInput;

export default LENS_DATA;
