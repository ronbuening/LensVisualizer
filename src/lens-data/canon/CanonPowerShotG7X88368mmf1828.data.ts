import type { LensDataInput } from "../../types/optics.js";

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
 * ║  `sd` is treated as the patent clear diameter/2; the wide-open f-number      ║
 * ║  comes from `nominalFno`, not from treating that clear aperture as a fixed    ║
 * ║  iris opening at every zoom state.                                            ║
 * ║                                                                                ║
 * ║  IMPORTANT: This file describes only the optical prescription. It excludes    ║
 * ║  sensor cover glass, filters, stabilization mechanics, shutter/iris blade     ║
 * ║  mechanics, and camera-body parts.                                            ║
 * ╚════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-powershot-g7x-8-8-36-8-f1-8-2-8",
  maker: "Canon",
  name: "CANON ZOOM LENS 8.8-36.8mm f/1.8-2.8 (PowerShot G7 X)",
  subtitle: "US 2016/0062096 A1 Example 1 — Canon / Hatada",
  specs: [
    "Patent f=9.06-35.69 mm",
    "Marketed 8.8-36.8 mm",
    "f/1.8-2.8",
    "11 elements / 9 groups",
    "4 aspherical surfaces / 1 UD element",
  ],

  focalLengthMarketing: [8.8, 36.8],
  focalLengthDesign: [9.06, 35.69],
  apertureMarketing: 1.8,
  apertureDesign: 1.85,
  lensMounts: ["fixed-lens-camera"],
  imageFormat: "1-inch-type",
  patentYear: 2016,
  elementCount: 11,
  groupCount: 9,

  elements: [
    {
      id: 1,
      name: "L1a",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.94595,
      vd: 18.0,
      fl: -93.74,
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
      fl: 32.47,
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
      fl: -13.35,
      glass: "S-LAH66N / S-LAH66 class (OHARA; 773496)",
      nC: 1.76779,
      nF: 1.78338,
      ng: 1.79199,
      role: "Strong leading negative member of the variator group.",
    },
    {
      id: 4,
      name: "L2b",
      label: "Element 4",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.76802,
      vd: 49.2,
      fl: -20.34,
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
      fl: 33.3,
      glass: "S-NPH3 (OHARA; 959175)",
      nC: 1.94376,
      nF: 1.99866,
      ng: 2.03488,
      role: "Very-high-index, very-high-dispersion positive compensation member in L2.",
    },
    {
      id: 6,
      name: "L3a",
      label: "Element 6",
      type: "Biconvex Positive (2× Asph)",
      nd: 1.76802,
      vd: 49.2,
      fl: 15.29,
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
      fl: 14.79,
      glass: "S-LAH55VS (OHARA; 835427)",
      nC: 1.82899,
      nF: 1.84852,
      ng: 1.85955,
      role: "Positive member of the rear L3 cemented chromatic-correction doublet.",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L3c",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.85478,
      vd: 24.8,
      fl: -10.13,
      glass: "S-NBH56 (OHARA; 855248)",
      nC: 1.84488,
      nF: 1.87935,
      ng: 1.90045,
      role: "Dense niobium-flint negative member of the rear L3 cemented doublet.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L4",
      label: "Element 9 / LF",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      fl: 23.26,
      glass: "S-FPL51 (OHARA; 497816)",
      apd: "inferred",
      apdNote: "ED fluorophosphate; catalog C/F/g line indices included.",
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
      role: "Single lightweight positive inner-focus element and the design's UD-class glass element.",
    },
    {
      id: 10,
      name: "L5a",
      label: "Element 10",
      type: "Biconcave Negative (1× Asph)",
      nd: 1.85135,
      vd: 40.1,
      fl: -24.99,
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
      fl: 32.32,
      glass: "S-BSM18 (OHARA; 639554)",
      nC: 1.63505,
      nF: 1.64658,
      ng: 1.65293,
      role: "Moderate-index crown compensator at the rear of L5.",
    },
  ],

  surfaces: [
    { label: "1", R: 32.903, d: 0.85, nd: 1.94595, elemId: 1, sd: 11.555 },
    { label: "2", R: 23.697, d: 3.39, nd: 1.8042, elemId: 2, sd: 11.08 },
    { label: "3", R: 239.525, d: 0.31, nd: 1.0, elemId: 0, sd: 10.835 },

    { label: "4", R: 104.318, d: 0.67, nd: 1.7725, elemId: 3, sd: 8.85 },
    { label: "5", R: 9.356, d: 4.75, nd: 1.0, elemId: 0, sd: 6.665 },
    { label: "6A", R: -18.059, d: 0.4, nd: 1.76802, elemId: 4, sd: 6.265 },
    { label: "7", R: 116.691, d: 0.1, nd: 1.0, elemId: 0, sd: 6.17 },
    { label: "8", R: 30.603, d: 1.2, nd: 1.95906, elemId: 5, sd: 6.135 },
    { label: "9", R: 717.339, d: 12.26, nd: 1.0, elemId: 0, sd: 6.06 },

    { label: "STO", R: 1e15, d: 5.34, nd: 1.0, elemId: 0, sd: 5.31 },

    { label: "11A", R: 15.47, d: 2.65, nd: 1.76802, elemId: 6, sd: 6.485 },
    { label: "12A", R: -45.132, d: 0.1, nd: 1.0, elemId: 0, sd: 6.41 },
    { label: "13", R: 11.775, d: 2.52, nd: 1.83481, elemId: 7, sd: 5.895 },
    { label: "14", R: 230.169, d: 0.45, nd: 1.85478, elemId: 8, sd: 5.505 },
    { label: "15", R: 8.338, d: 8.38, nd: 1.0, elemId: 0, sd: 4.78 },

    { label: "16", R: 30.731, d: 2.88, nd: 1.497, elemId: 9, sd: 5.975 },
    { label: "17", R: -17.952, d: 1.4, nd: 1.0, elemId: 0, sd: 6.1 },

    { label: "18", R: -22.355, d: 0.4, nd: 1.85135, elemId: 10, sd: 6.15 },
    { label: "19A", R: 444.58, d: 0.1, nd: 1.0, elemId: 0, sd: 6.375 },
    { label: "20", R: 21.426, d: 1.94, nd: 1.63854, elemId: 11, sd: 6.785 },
    { label: "21", R: -542.945, d: 8.9, nd: 1.0, elemId: 0, sd: 6.845 },
  ],

  asph: {
    "6A": {
      K: 0,
      A4: -2.29119e-5,
      A6: 8.28299e-8,
      A8: -1.2026e-8,
      A10: 1.04155e-10,
      A12: 0,
      A14: 0,
    },
    "11A": {
      K: 0,
      A4: -4.42389e-5,
      A6: 1.20948e-7,
      A8: 0,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "12A": {
      K: 0,
      A4: 1.80026e-5,
      A6: 3.00368e-7,
      A8: -3.24113e-9,
      A10: 2.62387e-11,
      A12: 0,
      A14: 0,
    },
    "19A": {
      K: 0,
      A4: 5.63992e-5,
      A6: -4.35159e-8,
      A8: -9.87071e-10,
      A10: 8.77351e-12,
      A12: 0,
      A14: 0,
    },
  },

  zoomPositions: [9.06, 16.39, 35.69],
  zoomLabels: ["Wide", "Tele"],
  zoomStep: 0.004,

  var: {
    "3": [
      [0.31, 0.31],
      [4.81, 4.81],
      [15.34, 15.34],
    ],
    "9": [
      [12.26, 12.26],
      [3.51, 3.51],
      [0.7, 0.7],
    ],
    STO: [
      [5.34, 5.34],
      [4.39, 4.39],
      [0.31, 0.31],
    ],
    "15": [
      [8.38, 7.0276878271],
      [7.6, 6.5911782586],
      [6.58, 4.1964660313],
    ],
    "17": [
      [1.4, 2.7523121729],
      [2.95, 3.9588217414],
      [10.04, 12.4235339687],
    ],
    "21": [
      [8.9, 8.9],
      [13.3, 13.3],
      [12.4, 12.4],
    ],
  },
  varLabels: [
    ["3", "D3 L1-L2"],
    ["9", "D9 L2-STO"],
    ["STO", "D10 STO-L3"],
    ["15", "D15 L3-L4"],
    ["17", "D17 L4-L5"],
    ["21", "BF"],
  ],

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

  closeFocusM: 0.05,
  focusDescription:
    "Single-element L4 inner focus; close endpoints use paraxial L4 travel estimates. Patent close plots are 0.10 m wide / 0.50 m tele; data close endpoints follow production 0.05 m wide / 0.40 m tele MFD metadata.",

  nominalFno: [1.8, 2.54, 2.8],
  fstopSeries: [1.8, 2, 2.2, 2.5, 2.8, 3.2, 3.5, 4, 4.5, 5, 5.6, 6.3, 7.1, 8, 9, 10, 11],
  maxFstop: 11,

  scFill: 0.74,
  yScFill: 0.58,
} satisfies LensDataInput;

export default LENS_DATA;
