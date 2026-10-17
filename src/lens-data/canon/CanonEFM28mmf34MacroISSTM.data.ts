import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — Canon EF-M 28mm f/3.5 Macro IS STM                     ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2016/0313535 A1, Numerical Example 1 (Canon / Nakahara).║
 * ║  Positive L1 plus negative rear-focus L2 cemented doublet.              ║
 * ║  10 powered elements / 9 powered groups in this file. The patent's      ║
 * ║  1.00 mm plane-parallel plate (surfaces 23–24; nd 1.51633, νd 64.1)     ║
 * ║  is modeled in `rearPlates` (traced, not drawn) with d24 = 12.28 mm     ║
 * ║  to the image; surface 22 keeps the patent d22 to the plate:            ║
 * ║  29.28 mm at infinity, 20.49 mm at the 1.2× third finite state.         ║
 * ║  3 aspherical surfaces on 2 physical elements.                          ║
 * ║  Focus: rear focus by the cemented L2 doublet; this data file uses the  ║
 * ║  patent's infinity state and 1.2× third finite state as focus endpoints.║
 * ║  Semi-diameters are inferred from paraxial marginal/chief-ray envelopes ║
 * ║  and reduced where needed to satisfy edge, slope, and cross-gap checks. ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-efm-28mm-f35-macro-is-stm",
  maker: "Canon",
  name: "CANON EF-M 28mm f/3.5 Macro IS STM",
  subtitle: "US 2016/0313535 A1 — Numerical Example 1",

  catalog: {
    lensMounts: ["canon-ef-m"],
    imageFormat: "aps-c",
    specs: [
      "Canon EF-M / APS-C",
      "Patent f = 27.74 mm; recomputed f = 27.76 mm",
      "F/3.61 design; f/3.5 marketed",
      "10 powered elements / 9 powered groups (+ rear cover plate)",
      "3 aspherical surfaces on 2 elements; 1 UD-class element",
      "Rear-focus L2 cemented doublet; two-mode macro patent mechanism",
    ],
    elementCount: 10,
    groupCount: 9,
    focalLengthMm: { marketing: 28, design: 27.76 },
    fNumber: { marketing: 3.5, design: 3.61 },
  },

  source: {
    patentNumber: "US 2016/0313535 A1",
    patentYear: 2016,
    authors: ["Makoto Nakahara"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "101",
      label: "Element 101",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.58313,
      vd: 59.5,
      focalLengthMm: -13.19,
      glass: "S-BAL42 (OHARA)",
      role: "Front negative aspherical element controlling entrance ray height, spherical aberration, coma, and distortion.",
      nC: 1.58014,
      nF: 1.58996,
      ng: 1.5953,
    },
    {
      id: 2,
      name: "102",
      label: "Element 102",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 21.86,
      glass: "S-TIH6 (OHARA)",
      role: "High-index, high-dispersion positive collector in the front unit.",
      nC: 1.79611,
      nF: 1.82777,
      ng: 1.84729,
    },
    {
      id: 3,
      name: "103",
      label: "Element 103",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 77.59,
      glass: "S-LAH66 (OHARA)",
      role: "Weak positive dense-lanthanum-flint meniscus for ray-angle conditioning ahead of the stop region.",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
    },
    {
      id: 4,
      name: "104",
      label: "Element 104",
      type: "Biconcave Negative",
      nd: 1.95375,
      vd: 32.3,
      focalLengthMm: -19.13,
      glass: "S-LAH98 (OHARA)",
      role: "Very high-index negative corrector in L1 for Petzval, spherical, and chromatic balancing.",
      nC: 1.94514,
      nF: 1.97465,
      ng: 1.99207,
    },
    {
      id: 5,
      name: "105",
      label: "Element 105",
      type: "Biconvex Positive",
      nd: 1.51823,
      vd: 58.9,
      focalLengthMm: 17.25,
      glass: "S-NSL3 (OHARA)",
      role: "Large stop-adjacent positive crown element carrying major positive power in L1.",
      nC: 1.51556,
      nF: 1.52435,
      ng: 1.52915,
    },
    {
      id: 6,
      name: "106",
      label: "Element 106",
      type: "Negative Meniscus",
      nd: 1.90366,
      vd: 31.3,
      focalLengthMm: -15.76,
      glass: "S-LAH95 (OHARA)",
      role: "Thin high-index negative meniscus behind the stop-side positive element, used as a local aberration corrector.",
      nC: 1.89528,
      nF: 1.92411,
      ng: 1.9413,
    },
    {
      id: 7,
      name: "107",
      label: "Element 107",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 22.38,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "Catalog UD fluorophosphate element matching Canon's published one-UD production count.",
      role: "UD/ED-class low-dispersion positive element for axial and lateral chromatic correction.",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 8,
      name: "108",
      label: "Element 108",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.58313,
      vd: 59.5,
      focalLengthMm: 23.63,
      glass: "S-BAL42 (OHARA)",
      role: "Double-sided asphere at the rear of L1; field, distortion, chief-ray-angle, and probable IS-member correction leverage.",
      nC: 1.58014,
      nF: 1.58996,
      ng: 1.5953,
    },
    {
      id: 9,
      name: "109a",
      label: "Element 109a",
      type: "Positive Meniscus",
      nd: 1.95906,
      vd: 17.5,
      focalLengthMm: 63.44,
      glass: "S-NPH3 (OHARA)",
      role: "Positive high-dispersion front member of the lightweight rear focusing cemented doublet.",
      cemented: "L2",
      nC: 1.94376,
      nF: 1.99866,
      ng: 2.03488,
    },
    {
      id: 10,
      name: "109b",
      label: "Element 109b",
      type: "Negative Meniscus",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: -21.46,
      glass: "S-LAH55V (OHARA)",
      role: "Negative rear member of the focusing cemented doublet; L2 group focal length is -33.22 mm.",
      cemented: "L2",
      nC: 1.82898,
      nF: 1.84852,
      ng: 1.85956,
    },
  ],

  surfaces: [
    { label: "1", R: -197.665, d: 0.5, sd: 6.3, medium: 1 },
    {
      label: "2A",
      R: 8.009,
      d: 3.03,
      sd: 6.3,
      asphere: { K: 0, A4: -1.76791e-4, A6: -2.65273e-6, A8: 7.81442e-9, A10: -6.68614e-10 },
    },
    { label: "3", R: 34.792, d: 1.84, sd: 6.4, medium: 2 },
    { label: "4", R: -34.792, d: 2.55, sd: 6.4 },
    { label: "5", R: -39.399, d: 1.22, sd: 6.5, medium: 3 },
    { label: "6", R: -24.094, d: 1.67, sd: 6.5 },
    { label: "7", R: -23.519, d: 0.6, sd: 6.1, medium: 4 },
    { label: "8", R: 82.44, d: 0.95, sd: 6.1 },
    { label: "FP", R: "flat", d: 1.9, sd: 6.1 },
    { label: "STO", R: "flat", d: 0.61 },
    { label: "11", R: 16.94, d: 5.23, sd: 8.2, medium: 5 },
    { label: "12", R: -16.94, d: 2.75, sd: 7.5 },
    { label: "13", R: -12.932, d: 0.65, sd: 7.5, medium: 6 },
    { label: "14", R: -143.739, d: 0.15, sd: 7.5 },
    { label: "15", R: 26.215, d: 4.23, sd: 8.5, medium: 7 },
    { label: "16", R: -18.292, d: 0.15, sd: 8.5 },
    {
      label: "17A",
      R: 64.432,
      d: 2.97,
      sd: 10.2,
      medium: 8,
      asphere: { K: 0, A4: -7.23379e-5, A6: -1.23764e-8, A8: -2.58452e-9, A10: 1.02225e-10 },
    },
    {
      label: "18A",
      R: -17.234,
      d: 0.29,
      sd: 10.2,
      asphere: { K: 0, A4: 6.10927e-5, A6: 1.3072e-7, A8: -2.33941e-9, A10: 1.12506e-10 },
    },
    { label: "FC", R: "flat", sd: 10.1 },
    { label: "20", R: 51.516, d: 1.22, sd: 9.8, medium: 9 },
    { label: "21", R: 332.148, d: 0.45, sd: 9.8, medium: 10 },
    { label: "22", R: 16.99, sd: 9.7 },
  ],

  focus: {
    closeFocusM: 0.093,
    description:
      "Patent rear-focus mechanism: L2 cemented doublet moves imageward within each focus mode; L1 and L2 shift objectward for the Super Macro mode. This file interpolates from infinity to the 1.2× third finite state; the patent rear plate is modeled in rearPlates.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { FC: { label: "D19", values: [[0.94, 10.32]] }, "22": { label: "BF", values: [[29.28, 20.49]] } },

  aperture: { nominalFNumber: 3.61, fStops: [3.61, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  /* ── Plane-parallel plate (patent surfaces 23–24): traced, not drawn ── */
  rearPlates: [
    {
      thicknessMm: 1.0,
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7 (OHARA)",
      gapAfterMm: 12.28,
      source: "US 2016/0313535 A1, Numerical Example 1 surfaces 23–24",
    },
  ],

  groups: [
    { text: "L1 positive fixed / mode-changing unit", fromSurface: "1", toSurface: "18A" },
    { text: "L2 negative rear-focus doublet", fromSurface: "20", toSurface: "22" },
  ],
  doublets: [{ text: "L2 focus", fromSurface: "20", toSurface: "22" }],

  layout: { scFill: 0.52, yScFill: 0.46 },
} satisfies LensDataV2Input;

export default LENS_DATA;
