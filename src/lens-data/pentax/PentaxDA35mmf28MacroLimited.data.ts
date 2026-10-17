import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
  schema: 2,
  key: "pentax-da-35mm-f28-macro-limited",
  maker: "Pentax",
  name: "PENTAX DA 35mm f/2.8 Macro Limited",
  subtitle: "US 7,715,118 B2 Example 1 — Hoya / Koji Kato",

  catalog: {
    lensMounts: ["pentax-k"],
    imageFormat: "aps-c",
    specs: [
      "9 elements / 8 groups",
      "35 mm marketed; 34.41 mm patent EFL",
      "f/2.8 marketed; 1:2.88 patent FNO",
      "1:1 macro; 0.139 m MFD",
      "APS-C, Pentax KAF / K mount",
      "All-spherical",
    ],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: { marketing: 35, design: 34.415 },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: {
    patentNumber: "US 7,715,118 B2",
    patentYear: 2010,
    authors: ["Koji Kato"],
    assignees: ["Hoya Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 80.55,
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
      focalLengthMm: -25.37,
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
      focalLengthMm: 14.36,
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
      focalLengthMm: -22.14,
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
      focalLengthMm: -24.33,
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
      focalLengthMm: 39.6,
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
      focalLengthMm: 31.79,
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
      focalLengthMm: -43.49,
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
      focalLengthMm: 56.38,
      glass: "E-FEL1 / S-TIL1 / LLF1 class (548/458)",
      role: "Rear positive biconvex element of the fixed third lens group.",
    },
  ],

  surfaces: [
    { label: "1", R: 29.593, d: 3.2, sd: 15.5, medium: 1 },
    { label: "2", R: 51.8, d: 0.44, sd: 14.0 },
    { label: "3", R: 26.8, d: 1.68, sd: 12.2, medium: 2 },
    { label: "4", R: 11.117, d: 11.89, sd: 9.8 },
    { label: "5", R: 41.849, d: 5.97, sd: 11.0, medium: 3 },
    { label: "6", R: -14.155, d: 1.3, sd: 9.8, medium: 4 },
    { label: "7", R: 87.954, d: 4.005, sd: 9.4 },
    { label: "STO", R: "flat", d: 4.425 },
    { label: "8", R: -25.42, d: 1.2, sd: 8.7, medium: 5 },
    { label: "9", R: 63.19, d: 1.2, sd: 8.6 },
    { label: "10", R: -76.294, d: 3.12, sd: 8.6, medium: 6 },
    { label: "11", R: -18.874, d: 0.2, sd: 10.6 },
    { label: "12", R: 46.415, d: 3.22, sd: 11.1, medium: 7 },
    { label: "13", R: -46.415, sd: 11.1 },
    { label: "14", R: -265.321, d: 1.2, sd: 11.5, medium: 8 },
    { label: "15", R: 38.543, d: 0.62, sd: 10.4 },
    { label: "16", R: 61.3, d: 2.85, sd: 10.4, medium: 9 },
    { label: "17", R: -61.3, d: 38.72, sd: 11.5 },
  ],

  focus: {
    closeFocusM: 0.139,
    keyframes: [0, 0.858792011850653, 1],
    step: 0.001,
    description:
      "Front assembly focus: groups G10 and G20 move objectward together while G30 remains fixed. Modeled by D13 increasing from 1.00 mm at infinity to 24.13 mm at 1:1.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: { "13": { label: "D13", values: [[1.0, 12.57, 24.13]] } },

  aperture: { nominalFNumber: 2.88, fStops: [2.88, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, step: 0.004, blades: 9 },

  groups: [
    { text: "G10 / positive first group", fromSurface: "1", toSurface: "7" },
    { text: "11 / negative sub-group", fromSurface: "1", toSurface: "4" },
    { text: "12 / positive sub-group", fromSurface: "5", toSurface: "7" },
    { text: "G20 / positive second group", fromSurface: "8", toSurface: "13" },
    { text: "G30 / fixed negative third group", fromSurface: "14", toSurface: "17" },
  ],
  doublets: [{ text: "D1", fromSurface: "5", toSurface: "7" }],

  layout: { scFill: 0.58, yScFill: 0.58 },

  rays: { offAxisFieldFrac: 0.55 },
} satisfies LensDataV2Input;

export default LENS_DATA;
