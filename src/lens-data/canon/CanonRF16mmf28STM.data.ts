import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON RF 16mm f/2.8 STM                      ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2022-085382 A, Numerical Example 3                ║
 * ║  (Canon Inc. / Takumi Suzuki).                                     ║
 * ║  Short-back-focus negative-front / positive-rear ultra-wide prime. ║
 * ║  9 elements / 7 groups, 2 aspherical surfaces on one PMo element.  ║
 * ║  Focus: patent publishes only the infinity prescription. The BF    ║
 * ║  focus variable is a visualization approximation derived from the  ║
 * ║  production 0.26× maximum magnification, not a patent gap table.   ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    No focal-length scaling is applied. The patent EFL is retained  ║
 * ║    at 16.486 mm and the production focal length is stored as the   ║
 * ║    marketed 16 mm value.                                           ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE:                                                 ║
 * ║    The patent reports F/2.90 and does not publish a stop radius.    ║
 * ║    The STO semi-diameter below is inferred for the marketed f/2.8  ║
 * ║    production aperture; apertureDesign records the patent value.   ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent omits clear apertures. SDs were inferred from a      ║
 * ║    paraxial marginal/chief-ray envelope and constrained by element ║
 * ║    SD ratio, edge thickness, rim slope, and cross-gap sag checks.  ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces from front element to image plane ║
 * ║    ✓ Aperture stop and approximate focus variable gap              ║
 * ║    ✗ Sensor glass, filters, mechanical parts, and donor designs    ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-rf-16mm-f28-stm",
  maker: "Canon",
  name: "CANON RF 16mm f/2.8 STM",
  subtitle: "JP 2022-085382 A Example 3 — Canon / Takumi Suzuki",
  specs: [
    "9 elements / 7 groups",
    "f = 16.49 mm design / 16 mm marketed",
    "F/2.90 design / f/2.8 marketed",
    "2ω = 95.68° patent trace / 108°10′ marketed diagonal",
    "1 PMo aspherical element / 2 aspherical surfaces",
  ],
  focalLengthMarketing: 16,
  focalLengthDesign: 16.4857,
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["canon-rf"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2022-085382 A",
  patentAuthors: ["Takumi Suzuki"],
  patentAssignees: ["Canon Inc"],
  patentYear: 2022,
  elementCount: 9,
  groupCount: 7,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 108.1667,
    maxTraceFieldDeg: 47.84,
  },
  apertureBlades: 7,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.6,
      fl: -25.79,
      glass: "S-BSM14 (OHARA)",
      nC: 1.60008,
      nF: 1.61002,
      ng: 1.61541,
      role: "First front-group negative meniscus; shares the wide-angle diverging load and limits front-element diameter.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: -33.82,
      glass: "S-FSL5 (OHARA)",
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
      role: "Second front-group negative meniscus; low-dispersion crown partner to L1 before the positive front-group lens.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.2,
      fl: 43.79,
      glass: "S-LAH60 (OHARA)",
      nC: 1.82738,
      nF: 1.84982,
      ng: 1.86278,
      role: "Positive front-group correction element; moderates the net negative power before the aperture stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.83481,
      vd: 42.7,
      fl: 8.57,
      glass: "S-LAH55VS (OHARA)",
      nC: 1.82899,
      nF: 1.84852,
      ng: 1.85955,
      cemented: "D1",
      role: "Strong positive element at the front of the first rear-group cemented doublet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      fl: -19.27,
      glass: "S-LAH95 (OHARA)",
      nC: 1.89528,
      nF: 1.92411,
      ng: 1.9413,
      cemented: "D1",
      role: "Dense flint negative partner to L4; provides axial-colour correction at the strongest rear-group junction.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.1,
      fl: -12.94,
      glass: "S-TIM28 (OHARA)",
      nC: 1.6825,
      nF: 1.70467,
      ng: 1.71797,
      cemented: "D2",
      role: "Negative front element of the second rear-group cemented doublet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.59282,
      vd: 68.6,
      fl: 20.01,
      glass: "FCD515 (HOYA)",
      cemented: "D2",
      role: "Low-dispersion positive crown partner to L6; the L6/L7 junction supplies the largest Abbe-number split in the rear group.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.5311,
      vd: 55.9,
      fl: 169.46,
      glass: "Unmatched (Canon PMo optical resin, nd=1.53110, νd=55.9)",
      role: "Weak positive resin aspherical element; both surfaces carry polynomial aspheric correction.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.62299,
      vd: 58.2,
      fl: 70.05,
      glass: "S-BSM15 (OHARA)",
      nC: 1.61974,
      nF: 1.63045,
      ng: 1.6363,
      role: "Rear positive meniscus field-flattening element near the image plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 27.125, d: 1.1, nd: 1.60311, elemId: 1, sd: 9.5 },
    { label: "2", R: 9.735, d: 3.67, nd: 1, elemId: 0, sd: 8.2 },
    { label: "3", R: 30.493, d: 1, nd: 1.48749, elemId: 2, sd: 7.5 },
    { label: "4", R: 10.586, d: 3.21, nd: 1, elemId: 0, sd: 8 },
    { label: "5", R: 40.191, d: 1.71, nd: 1.834, elemId: 3, sd: 6.8 },
    { label: "6", R: -392.36, d: 5.43, nd: 1, elemId: 0, sd: 6.8 },
    { label: "STO", R: 1e15, d: 1.8, nd: 1, elemId: 0, sd: 4.842 },
    { label: "8", R: 38.857, d: 6.25, nd: 1.83481, elemId: 4, sd: 6.3 },
    { label: "9", R: -8.128, d: 0.9, nd: 1.90366, elemId: 5, sd: 6.9 },
    { label: "10", R: -16.045, d: 4.69, nd: 1, elemId: 0, sd: 7 },
    { label: "11", R: -16.526, d: 0.92, nd: 1.68893, elemId: 6, sd: 7.2 },
    { label: "12", R: 19.781, d: 5.8, nd: 1.59282, elemId: 7, sd: 7.4 },
    { label: "13", R: -26.412, d: 0.91, nd: 1, elemId: 0, sd: 8.4 },
    { label: "14A", R: -50.009, d: 2.1, nd: 1.5311, elemId: 8, sd: 9 },
    { label: "15A", R: -32.615, d: 6.74, nd: 1, elemId: 0, sd: 9.5 },
    { label: "16", R: -109.118, d: 4.42, nd: 1.62299, elemId: 9, sd: 10 },
    { label: "17", R: -31.658, d: 12.54, nd: 1, elemId: 0, sd: 10.5 },
  ],

  asph: {
    "14A": {
      K: 0,
      A4: 5.22756e-5,
      A6: -1.9265e-6,
      A8: 3.51677e-8,
      A10: -3.71946e-10,
      A12: 1.36387e-12,
      A14: 0,
    },
    "15A": {
      K: 0,
      A4: 1.10438e-4,
      A6: -1.14287e-6,
      A8: 2.01498e-8,
      A10: -1.88642e-10,
      A12: 6.2866e-13,
      A14: 0,
    },
  },

  var: {
    "17": [12.54, 16.83],
  },
  varLabels: [["17", "BF"]],
  focusDescription:
    "Patent example is infinity-only. BF close-focus value is a unit-focus visualization approximation from Canon's 0.26× maximum magnification; it is not a published patent spacing.",

  groups: [
    { text: "Front group", fromSurface: "1", toSurface: "6" },
    { text: "Rear group", fromSurface: "8", toSurface: "17" },
  ],
  doublets: [
    { text: "D1", fromSurface: "8", toSurface: "10" },
    { text: "D2", fromSurface: "11", toSurface: "13" },
  ],

  closeFocusM: 0.13,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  scFill: 0.58,
  yScFill: 0.48,
} satisfies LensDataInput;

export default LENS_DATA;
