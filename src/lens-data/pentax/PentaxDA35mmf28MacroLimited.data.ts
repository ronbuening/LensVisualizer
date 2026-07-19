import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Pentax DA 35mm f/2.8 Macro Limited                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 7,715,118 B2, Example 1, Table 1                  ║
 * ║  (Koji Kato / Hoya Corporation).                                   ║
 * ║                                                                    ║
 * ║  9 elements / 8 groups, all spherical.                             ║
 * ║  Patent EFL = 34.41498 mm; patent FNO = 1:2.88.                   ║
 * ║  Production hard specs are carried separately as 35 mm f/2.8.      ║
 * ║                                                                    ║
 * ║  Focus: the positive first group and positive second group move     ║
 * ║  together toward the object while the negative third group remains  ║
 * ║  fixed relative to the image plane. This is modeled by the single   ║
 * ║  variable air space D13, from 1.00 mm at infinity to 24.13 mm       ║
 * ║  at approximately -1.0x magnification.                             ║
 * ║                                                                    ║
 * ║  Stop: the patent places the diaphragm 4.425 mm in front of         ║
 * ║  surface 8. The published surface-7 air space is therefore split    ║
 * ║  into D7 = 4.005 mm and STO = 4.425 mm.                             ║
 * ║                                                                    ║
 * ║  No optical scaling is applied. The prescription is transcribed at  ║
 * ║  the patent scale.                                                  ║
 * ║                                                                    ║
 * ║  Semi-diameters are inferred because the patent does not publish    ║
 * ║  clear-aperture radii. They were estimated from paraxial marginal   ║
 * ║  and chief ray envelopes at infinity, -0.5x, and -1.0x, then        ║
 * ║  reduced where necessary to satisfy renderer constraints on         ║
 * ║  sd/|R|, element edge thickness, element SD ratio, and cross-gap    ║
 * ║  sag intrusion. They are visualization apertures, not production    ║
 * ║  mechanical clear-aperture claims.                                  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "pentax-da-35mm-f28-macro-limited",
  maker: "Pentax",
  name: "PENTAX DA 35mm f/2.8 Macro Limited",
  subtitle: "US 7,715,118 B2 Example 1 — Hoya / Koji Kato",
  specs: [
    "9 elements / 8 groups",
    "35 mm marketed; 34.41 mm patent EFL",
    "f/2.8 marketed; 1:2.88 patent FNO",
    "1:1 macro; 0.139 m MFD",
    "APS-C, Pentax KAF / K mount",
    "All-spherical",
  ],

  focalLengthMarketing: 35,
  focalLengthDesign: 34.415,
  apertureMarketing: 2.8,
  apertureDesign: 2.88,
  lensMounts: ["pentax-k"],
  imageFormat: "aps-c",
  patentNumber: "US 7,715,118 B2",
  patentAuthors: ["Koji Kato"],
  patentAssignees: ["Hoya Corp"],
  patentYear: 2010,
  elementCount: 9,
  groupCount: 8,
  apertureBlades: 9,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: 80.55,
      glass: "FD60 / S-TIH6 / N-SF6 class (patent code 805/254)",
      role: "Front positive meniscus in the negative first sub-lens group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.7859,
      vd: 44.2,
      fl: -25.37,
      glass: "NBFD11 / S-LAH51 class (patent code 786/442)",
      role: "Strong negative meniscus in sub-group 11; convex to the object and concave to the image.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      fl: 14.36,
      glass: "TAF1 / S-LAH66 class (773/496)",
      role: "Positive front component of the cemented doublet in sub-group 12.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.54814,
      vd: 45.8,
      fl: -22.14,
      glass: "E-FEL1 / S-TIL1 / LLF1 class (548/458)",
      role: "Negative rear component of the cemented doublet in sub-group 12.",
      cemented: "D1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.74077,
      vd: 27.8,
      fl: -24.33,
      glass: "E-FD13 / S-TIH13 class (741/278)",
      role: "Biconcave negative element immediately behind the stop in the positive second lens group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      fl: 39.6,
      glass: "BACD16 / N-SK16 / S-BSM16 class (620/603)",
      role: "Positive meniscus in group 20, convex toward the image.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.741,
      vd: 52.7,
      fl: 31.79,
      glass: "TAC2 / S-LAL61 class (patent code 741/527)",
      role: "Rear positive biconvex element of group 20; its rear surface bounds the focus variable gap.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -43.49,
      glass: "TAF1 / S-LAH66 class (773/496)",
      role: "Negative element at the front of the fixed third lens group.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.54814,
      vd: 45.8,
      fl: 56.38,
      glass: "E-FEL1 / S-TIL1 / LLF1 class (548/458)",
      role: "Rear positive biconvex element of the fixed third lens group.",
    },
  ],

  surfaces: [
    { label: "1", R: 29.593, d: 3.2, nd: 1.80518, elemId: 1, sd: 15.5 },
    { label: "2", R: 51.8, d: 0.44, nd: 1.0, elemId: 0, sd: 14.0 },
    { label: "3", R: 26.8, d: 1.68, nd: 1.7859, elemId: 2, sd: 12.2 },
    { label: "4", R: 11.117, d: 11.89, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "5", R: 41.849, d: 5.97, nd: 1.7725, elemId: 3, sd: 11.0 },
    { label: "6", R: -14.155, d: 1.3, nd: 1.54814, elemId: 4, sd: 9.8 },
    { label: "7", R: 87.954, d: 4.005, nd: 1.0, elemId: 0, sd: 9.4 },
    { label: "STO", R: 1e15, d: 4.425, nd: 1.0, elemId: 0, sd: 6.86 },
    { label: "8", R: -25.42, d: 1.2, nd: 1.74077, elemId: 5, sd: 8.7 },
    { label: "9", R: 63.19, d: 1.2, nd: 1.0, elemId: 0, sd: 8.6 },
    { label: "10", R: -76.294, d: 3.12, nd: 1.62041, elemId: 6, sd: 8.6 },
    { label: "11", R: -18.874, d: 0.2, nd: 1.0, elemId: 0, sd: 10.6 },
    { label: "12", R: 46.415, d: 3.22, nd: 1.741, elemId: 7, sd: 11.1 },
    { label: "13", R: -46.415, d: 1.0, nd: 1.0, elemId: 0, sd: 11.1 },
    { label: "14", R: -265.321, d: 1.2, nd: 1.7725, elemId: 8, sd: 11.5 },
    { label: "15", R: 38.543, d: 0.62, nd: 1.0, elemId: 0, sd: 10.4 },
    { label: "16", R: 61.3, d: 2.85, nd: 1.54814, elemId: 9, sd: 10.4 },
    { label: "17", R: -61.3, d: 38.72, nd: 1.0, elemId: 0, sd: 11.5 },
  ],

  asph: {},
  var: {
    "13": [1.0, 24.13],
  },
  varLabels: [["13", "D13"]],
  groups: [
    { text: "G10 / positive first group", fromSurface: "1", toSurface: "7" },
    { text: "11 / negative sub-group", fromSurface: "1", toSurface: "4" },
    { text: "12 / positive sub-group", fromSurface: "5", toSurface: "7" },
    { text: "G20 / positive second group", fromSurface: "8", toSurface: "13" },
    { text: "G30 / fixed negative third group", fromSurface: "14", toSurface: "17" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  focusDescription:
    "Front assembly focus: groups G10 and G20 move objectward together while G30 remains fixed. Modeled by D13 increasing from 1.00 mm at infinity to 24.13 mm at 1:1.",
  closeFocusM: 0.139,
  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  focusStep: 0.001,
  apertureStep: 0.004,
  offAxisFieldFrac: 0.55,
  scFill: 0.58,
  yScFill: 0.58,
} satisfies LensDataInput;

export default LENS_DATA;
