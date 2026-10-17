import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════╗
 * ║      LENS DATA — CANON PowerShot G7 X 8.8-36.8mm f/1.8-2.8                   ║
 * ╠════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2016/0062096 A1, Numerical Example 1 (Canon / Hatada).       ║
 * ║  Five-unit positive-lead compact-camera zoom: L1(+), L2(-), L3(+), L4(+       ║
 * ║  focus), L5(-), with an independently moving aperture stop.                  ║
 * ║  11 elements / 9 air-spaced groups, 4 aspherical surfaces on 3 elements.      ║
 * ║  Focus: single-element L4 inner focus.                                        ║
 * ║                                                                                ║
 * ║  Zoom variable gaps: d3, d9, d10/STO, d15, d17, d21/BF.                       ║
 * ║  Focus variable gaps: d15 and d17 only. Close-focus values are paraxial       ║
 * ║  estimates, not patent-published finite-distance spacing tables. The wide    ║
 * ║  and tele close states use the production MFD endpoints (0.05 m wide,        ║
 * ║  0.40 m tele); the intermediate close state is only a smooth internal        ║
 * ║  modeling point. The patent itself publishes aberration plots at 0.10 m      ║
 * ║  wide and 0.50 m tele but no corresponding d15/d17 table.                    ║
 * ║                                                                                ║
 * ║  NOTE ON SCALING:                                                             ║
 * ║  The patent prescription is left unscaled. The patent EFL range is            ║
 * ║  9.06-35.69 mm; production metadata is 8.8-36.8 mm. No single uniform        ║
 * ║  scale factor maps both endpoints, so the design prescription and marketing   ║
 * ║  specifications are recorded separately.                                      ║
 * ║                                                                                ║
 * ║  NOTE ON SEMI-DIAMETERS AND STOP DIAMETER:                                    ║
 * ║  The patent column is labeled "Effective diameter" and lists full clear       ║
 * ║  diameters. Each surface `sd` below is exactly one half of the patent-listed  ║
 * ║  effective diameter. The OCR text drops leading "1" digits on several rows;  ║
 * ║  the values here were checked against the rendered patent table. The stop     ║
 * ║  radius is derived from the design f-number at each zoom station. The         ║
 * ║  Numerical Example 1 patent surface table prints a 10.62 mm effective         ║
 * ║  diameter at stop surface 10; it is not treated as a fixed iris opening at    ║
 * ║  every zoom state.                                                            ║
 * ║                                                                                ║
 * ║  IMPORTANT: This file describes only the optical prescription. It excludes    ║
 * ║  sensor cover glass, filters, stabilization mechanics, shutter/iris blade     ║
 * ║  mechanics, and camera-body parts.                                            ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-powershot-g7x-8-8-36-8-f1-8-2-8",
  maker: "Canon",
  name: "CANON 8.8-36.8mm f/1.8-2.8 (Canon PowerShot G7 X)",
  subtitle: "US 2016/0062096 A1 Example 1 — Canon / Hatada",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "1-inch-type",
    specs: [
      "Patent f=9.06-35.69 mm",
      "Marketed 8.8-36.8 mm",
      "f/1.8-2.8",
      "11 elements / 9 groups",
      "4 aspherical surfaces / 1 UD element",
    ],
    elementCount: 11,
    groupCount: 9,
    focalLengthMm: { marketing: [8.8, 36.8], design: [9.06, 35.69] },
    fNumber: { marketing: 1.8, design: 1.85 },
  },

  source: {
    patentNumber: "US 2016/0062096 A1",
    patentYear: 2016,
    authors: ["Takahiro Hatada"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.94595,
      vd: 18.0,
      focalLengthMm: -93.74,
      glass: "FDS18 (HOYA; 946180 class)",
      role: "High-index dense-flint negative member of the front cemented collector.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L1b",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.8042,
      vd: 46.5,
      focalLengthMm: 32.47,
      glass: "TAF3 / N-LASF44 class (HOYA/SCHOTT; 804465)",
      role: "Positive lanthanum-flint member of the front cemented collector.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L2a",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -13.35,
      glass: "S-LAH66N / S-LAH66 class (OHARA; 773496)",
      role: "Strong leading negative member of the variator group.",
      nC: 1.76779,
      nF: 1.78338,
      ng: 1.79199,
    },
    {
      id: 4,
      name: "L2b",
      label: "Element 4",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.76802,
      vd: 49.2,
      focalLengthMm: -20.34,
      glass: "M-TAF101 (HOYA moldable; 768492 class)",
      role: "Molded aspherical negative member in L2; front surface is aspherical.",
    },
    {
      id: 5,
      name: "L2c",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.95906,
      vd: 17.5,
      focalLengthMm: 33.3,
      glass: "S-NPH3 (OHARA; 959175)",
      role: "Very-high-index, very-high-dispersion positive compensation member in L2.",
      nC: 1.94376,
      nF: 1.99866,
      ng: 2.03488,
    },
    {
      id: 6,
      name: "L3a",
      label: "Element 6",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.76802,
      vd: 49.2,
      focalLengthMm: 15.29,
      glass: "M-TAF101 (HOYA moldable; 768492 class)",
      role: "Strong double-sided molded aspherical positive relay element immediately behind the stop.",
    },
    {
      id: 7,
      name: "L3b",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.7,
      focalLengthMm: 14.79,
      glass: "S-LAH55VS (OHARA; 835427)",
      role: "Positive member of the rear L3 cemented chromatic-correction doublet.",
      cemented: "D2",
      nC: 1.82899,
      nF: 1.84852,
      ng: 1.85955,
    },
    {
      id: 8,
      name: "L3c",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: -10.13,
      glass: "S-NBH56 (OHARA; 855248)",
      role: "Dense niobium-flint negative member of the rear L3 cemented doublet.",
      cemented: "D2",
      nC: 1.84488,
      nF: 1.87935,
      ng: 1.90045,
    },
    {
      id: 9,
      name: "L4",
      label: "Element 9 / LF",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 23.26,
      glass: "S-FPL51 (OHARA; 497816)",
      apd: "inferred",
      apdNote: "ED fluorophosphate; catalog C/F/g line indices included.",
      role: "Single lightweight positive inner-focus element and the design's UD-class glass element.",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 10,
      name: "L5a",
      label: "Element 10",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.85135,
      vd: 40.1,
      focalLengthMm: -24.99,
      glass: "M-TAFD305 (HOYA moldable; 851401 class)",
      role: "High-index molded aspherical negative member in the image-side field-correction group.",
    },
    {
      id: 11,
      name: "L5b",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.63854,
      vd: 55.4,
      focalLengthMm: 32.32,
      glass: "S-BSM18 (OHARA; 639554)",
      role: "Moderate-index crown compensator at the rear of L5.",
      nC: 1.63505,
      nF: 1.64658,
      ng: 1.65293,
    },
  ],

  surfaces: [
    { label: "1", R: 32.903, d: 0.85, sd: 11.555, medium: 1 },
    { label: "2", R: 23.697, d: 3.39, sd: 11.08, medium: 2 },
    { label: "3", R: 239.525, sd: 10.835 },

    { label: "4", R: 104.318, d: 0.67, sd: 8.85, medium: 3 },
    { label: "5", R: 9.356, d: 4.75, sd: 6.665 },
    {
      label: "6A",
      R: -18.059,
      d: 0.4,
      sd: 6.265,
      medium: 4,
      asphere: { K: 0, A4: -2.29119e-5, A6: 8.28299e-8, A8: -1.2026e-8, A10: 1.04155e-10 },
    },
    { label: "7", R: 116.691, d: 0.1, sd: 6.17 },
    { label: "8", R: 30.603, d: 1.2, sd: 6.135, medium: 5 },
    { label: "9", R: 717.339, sd: 6.06 },

    // US 2016/0062096 A1, Numerical Example 1 surface table, surface 10: printed effective
    // diameter 10.62 mm at the stop.
    { label: "STO", R: "flat" },

    { label: "11A", R: 15.47, d: 2.65, sd: 6.485, medium: 6, asphere: { K: 0, A4: -4.42389e-5, A6: 1.20948e-7, A8: 0, A10: 0, A12: 0, A14: 0 } },
    {
      label: "12A",
      R: -45.132,
      d: 0.1,
      sd: 6.41,
      asphere: { K: 0, A4: 1.80026e-5, A6: 3.00368e-7, A8: -3.24113e-9, A10: 2.62387e-11 },
    },
    { label: "13", R: 11.775, d: 2.52, sd: 5.895, medium: 7 },
    { label: "14", R: 230.169, d: 0.45, sd: 5.505, medium: 8 },
    { label: "15", R: 8.338, sd: 4.78 },

    { label: "16", R: 30.731, d: 2.88, sd: 5.975, medium: 9 },
    { label: "17", R: -17.952, sd: 6.1 },

    { label: "18", R: -22.355, d: 0.4, sd: 6.15, medium: 10 },
    {
      label: "19A",
      R: 444.58,
      d: 0.1,
      sd: 6.375,
      asphere: { K: 0, A4: 5.63992e-5, A6: -4.35159e-8, A8: -9.87071e-10, A10: 8.77351e-12 },
    },
    { label: "20", R: 21.426, d: 1.94, sd: 6.785, medium: 11 },
    { label: "21", R: -542.945, sd: 6.845 },
  ],

  zoom: {
    stations: [
      { focalLengthMm: 9.06, nominalFNumber: 1.8, label: "Wide" },
      { focalLengthMm: 16.39, nominalFNumber: 2.54 },
      { focalLengthMm: 35.69, nominalFNumber: 2.8, label: "Tele" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.05,
    description:
      "Single-element L4 inner focus; close endpoints use paraxial L4 travel estimates. Patent close plots are 0.10 m wide / 0.50 m tele; data close endpoints follow production 0.05 m wide / 0.40 m tele MFD metadata.",
  },

  gaps: {
    "3": {
      label: "D3 L1-L2",
      values: [
        [0.31, 0.31],
        [4.81, 4.81],
        [15.34, 15.34],
      ],
    },
    "9": {
      label: "D9 L2-STO",
      values: [
        [12.26, 12.26],
        [3.51, 3.51],
        [0.7, 0.7],
      ],
    },
    STO: {
      label: "D10 STO-L3",
      values: [
        [5.34, 5.34],
        [4.39, 4.39],
        [0.31, 0.31],
      ],
    },
    "15": {
      label: "D15 L3-L4",
      values: [
        [8.38, 7.0276878271],
        [7.6, 6.5911782586],
        [6.58, 4.1964660313],
      ],
    },
    "17": {
      label: "D17 L4-L5",
      values: [
        [1.4, 2.7523121729],
        [2.95, 3.9588217414],
        [10.04, 12.4235339687],
      ],
    },
    "21": {
      label: "BF",
      values: [
        [8.9, 8.9],
        [13.3, 13.3],
        [12.4, 12.4],
      ],
    },
  },

  aperture: { fStops: [1.8, 2, 2.2, 2.5, 2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11], maxFNumber: 11 },

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "3" },
    { text: "L2", fromSurface: "4", toSurface: "9" },
    { text: "L3", fromSurface: "11A", toSurface: "15" },
    { text: "L4 / LF", fromSurface: "16", toSurface: "17" },
    { text: "L5 / LBB", fromSurface: "18", toSurface: "21" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "13", toSurface: "15" },
  ],

  layout: { scFill: 0.74, yScFill: 0.58 },
} satisfies LensDataV2Input;

export default LENS_DATA;
