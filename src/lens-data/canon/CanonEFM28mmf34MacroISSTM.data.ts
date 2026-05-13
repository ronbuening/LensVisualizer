import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — Canon EF-M 28mm f/3.5 Macro IS STM                     ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2016/0313535 A1, Numerical Example 1 (Canon / Nakahara).║
 * ║  Positive L1 plus negative rear-focus L2 cemented doublet.              ║
 * ║  10 powered elements / 9 powered groups in this file; the patent also   ║
 * ║  tabulates a 1.00 mm nd=1.51633 plane-parallel plate after surface 22.  ║
 * ║  Project convention treats that plate as cover/window glass and folds    ║
 * ║  its air-equivalent optical path into the final BFD.                    ║
 * ║  3 aspherical surfaces on 2 physical elements.                          ║
 * ║  Focus: rear focus by the cemented L2 doublet; this data file uses the  ║
 * ║  patent's infinity state and 1.2× third finite state as focus endpoints.║
 * ║  Semi-diameters are inferred from paraxial marginal/chief-ray envelopes ║
 * ║  and reduced where needed to satisfy edge, slope, and cross-gap checks. ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-efm-28mm-f35-macro-is-stm",
  maker: "Canon",
  name: "Canon EF-M 28mm f/3.5 Macro IS STM",
  subtitle: "US 2016/0313535 A1 — Numerical Example 1",
  specs: [
    "Canon EF-M / APS-C",
    "Patent f = 27.74 mm; recomputed f = 27.76 mm",
    "F/3.61 design; f/3.5 marketed",
    "10 powered elements / 9 powered groups (+ folded cover plate)",
    "3 aspherical surfaces on 2 elements; 1 UD-class element",
    "Rear-focus L2 cemented doublet; two-mode macro patent mechanism",
  ],
  focalLengthMarketing: 28,
  focalLengthDesign: 27.76,
  apertureMarketing: 3.5,
  apertureDesign: 3.61,
  lensMounts: ["canon-ef-m"],
  imageFormat: "aps-c",
  patentYear: 2016,
  elementCount: 10,
  groupCount: 9,
  apertureBlades: 7,

  elements: [
    {
      id: 1,
      name: "101",
      label: "Element 101",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.58313,
      vd: 59.5,
      fl: -13.19,
      glass: "S-BAL42 (OHARA)",
      nC: 1.58014,
      nF: 1.58996,
      ng: 1.5953,
      role: "Front negative aspherical element controlling entrance ray height, spherical aberration, coma, and distortion.",
    },
    {
      id: 2,
      name: "102",
      label: "Element 102",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      fl: 21.86,
      glass: "S-TIH6 (OHARA)",
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
      role: "High-index, high-dispersion positive collector in the front unit.",
    },
    {
      id: 3,
      name: "103",
      label: "Element 103",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 77.59,
      glass: "S-LAH66 (OHARA)",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
      role: "Weak positive dense-lanthanum-flint meniscus for ray-angle conditioning ahead of the stop region.",
    },
    {
      id: 4,
      name: "104",
      label: "Element 104",
      type: "Biconcave Negative",
      nd: 1.95375,
      vd: 32.3,
      fl: -19.13,
      glass: "S-LAH98 (OHARA)",
      nC: 1.94514,
      nF: 1.97465,
      ng: 1.99207,
      role: "Very high-index negative corrector in L1 for Petzval, spherical, and chromatic balancing.",
    },
    {
      id: 5,
      name: "105",
      label: "Element 105",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 58.9,
      fl: 17.25,
      glass: "S-NSL3 (OHARA)",
      nC: 1.51556,
      nF: 1.52435,
      ng: 1.52915,
      role: "Large stop-adjacent positive crown element carrying major positive power in L1.",
    },
    {
      id: 6,
      name: "106",
      label: "Element 106",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      fl: -15.76,
      glass: "S-LAH95 (OHARA)",
      nC: 1.89528,
      nF: 1.92411,
      ng: 1.9413,
      role: "Thin high-index negative meniscus behind the stop-side positive element, used as a local aberration corrector.",
    },
    {
      id: 7,
      name: "107",
      label: "Element 107",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 22.38,
      glass: "S-FPL51 (OHARA)",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      role: "UD/ED-class low-dispersion positive element for axial and lateral chromatic correction.",
    },
    {
      id: 8,
      name: "108",
      label: "Element 108",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58313,
      vd: 59.5,
      fl: 23.63,
      glass: "S-BAL42 (OHARA)",
      nC: 1.58014,
      nF: 1.58996,
      ng: 1.5953,
      role: "Double-sided asphere at the rear of L1; field, distortion, chief-ray-angle, and probable IS-member correction leverage.",
    },
    {
      id: 9,
      name: "109a",
      label: "Element 109a",
      type: "Positive Meniscus",
      nd: 1.95906,
      vd: 17.5,
      fl: 63.44,
      glass: "S-NPH3 (OHARA)",
      nC: 1.94376,
      nF: 1.99866,
      ng: 2.03488,
      role: "Positive high-dispersion front member of the lightweight rear focusing cemented doublet.",
      cemented: "L2",
    },
    {
      id: 10,
      name: "109b",
      label: "Element 109b",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      fl: -21.46,
      glass: "S-LAH55V (OHARA)",
      nC: 1.82898,
      nF: 1.84852,
      ng: 1.85956,
      role: "Negative rear member of the focusing cemented doublet; L2 group focal length is -33.22 mm.",
      cemented: "L2",
    },
  ],

  surfaces: [
    { label: "1", R: -197.665, d: 0.5, nd: 1.58313, elemId: 1, sd: 6.3 },
    { label: "2A", R: 8.009, d: 3.03, nd: 1.0, elemId: 0, sd: 6.3 },
    { label: "3", R: 34.792, d: 1.84, nd: 1.80518, elemId: 2, sd: 6.4 },
    { label: "4", R: -34.792, d: 2.55, nd: 1.0, elemId: 0, sd: 6.4 },
    { label: "5", R: -39.399, d: 1.22, nd: 1.7725, elemId: 3, sd: 6.5 },
    { label: "6", R: -24.094, d: 1.67, nd: 1.0, elemId: 0, sd: 6.5 },
    { label: "7", R: -23.519, d: 0.6, nd: 1.95375, elemId: 4, sd: 6.1 },
    { label: "8", R: 82.44, d: 0.95, nd: 1.0, elemId: 0, sd: 6.1 },
    { label: "FP", R: 1e15, d: 1.9, nd: 1.0, elemId: 0, sd: 6.1 },
    { label: "STO", R: 1e15, d: 0.61, nd: 1.0, elemId: 0, sd: 6.05 },
    { label: "11", R: 16.94, d: 5.23, nd: 1.51823, elemId: 5, sd: 8.2 },
    { label: "12", R: -16.94, d: 2.75, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "13", R: -12.932, d: 0.65, nd: 1.90366, elemId: 6, sd: 7.5 },
    { label: "14", R: -143.739, d: 0.15, nd: 1.0, elemId: 0, sd: 7.5 },
    { label: "15", R: 26.215, d: 4.23, nd: 1.497, elemId: 7, sd: 8.5 },
    { label: "16", R: -18.292, d: 0.15, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "17A", R: 64.432, d: 2.97, nd: 1.58313, elemId: 8, sd: 10.2 },
    { label: "18A", R: -17.234, d: 0.29, nd: 1.0, elemId: 0, sd: 10.2 },
    { label: "FC", R: 1e15, d: 0.94, nd: 1.0, elemId: 0, sd: 10.1 },
    { label: "20", R: 51.516, d: 1.22, nd: 1.95906, elemId: 9, sd: 9.8 },
    { label: "21", R: 332.148, d: 0.45, nd: 1.83481, elemId: 10, sd: 9.8 },
    { label: "22", R: 16.99, d: 42.21948705097176, nd: 1.0, elemId: 0, sd: 9.7 },
  ],

  asph: {
    "2A": {
      K: 0,
      A4: -1.76791e-4,
      A6: -2.65273e-6,
      A8: 7.81442e-9,
      A10: -6.68614e-10,
      A12: 0,
      A14: 0,
    },
    "17A": {
      K: 0,
      A4: -7.23379e-5,
      A6: -1.23764e-8,
      A8: -2.58452e-9,
      A10: 1.02225e-10,
      A12: 0,
      A14: 0,
    },
    "18A": {
      K: 0,
      A4: 6.10927e-5,
      A6: 1.3072e-7,
      A8: -2.33941e-9,
      A10: 1.12506e-10,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    FC: [0.94, 10.32],
    "22": [42.21948705097176, 33.42948705097175],
  },

  varLabels: [
    ["FC", "D19"],
    ["22", "BF"],
  ],

  groups: [
    { text: "L1 positive fixed / mode-changing unit", fromSurface: "1", toSurface: "18A" },
    { text: "L2 negative rear-focus doublet", fromSurface: "20", toSurface: "22" },
  ],

  doublets: [{ text: "L2 focus", fromSurface: "20", toSurface: "22" }],

  closeFocusM: 0.093,
  focusDescription:
    "Patent rear-focus mechanism: L2 cemented doublet moves imageward within each focus mode; L1 and L2 shift objectward for the Super Macro mode. This file interpolates from infinity to the 1.2× third finite state and folds the patent cover plate into final BF.",

  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.52,
  yScFill: 0.46,
} satisfies LensDataInput;

export default LENS_DATA;
