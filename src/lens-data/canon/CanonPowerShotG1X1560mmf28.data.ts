import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON POWERSHOT G1 X 15.1-60.4mm f/2.8-5.8  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2013/0176385 A1, Numerical Example 4.            ║
 * ║  Canon positive-negative-positive-positive compact zoom.            ║
 * ║  11 elements / 10 groups, 5 aspherical surfaces.                  ║
 * ║  Focus: rear focus by the fourth lens unit; patent provides only   ║
 * ║  infinity-focus zoom spacing, so close-focus pairs are left equal. ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D6, D12, D20/STO, BF.                         ║
 * ║  Gaps D6 and D12 are group-separation gaps. D20/STO is the         ║
 * ║  aperture-stop-to-fourth-unit gap. BF is the air-equivalent back   ║
 * ║  focal distance after the fourth-unit rear asphere.                 ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    No scaling applied. The prescription is retained at the patent  ║
 * ║    design focal lengths of 15.57 / 30.33 / 58.93 mm.              ║
 * ║                                                                    ║
 * ║  NOTE ON SENSOR/FILTER BLOCK:                                      ║
 * ║    Patent surfaces 23-24 are the flat optical block G (filter /    ║
 * ║    faceplate / low-pass / IR-cut block). Per the project data      ║
 * ║    convention, that block is omitted from the surfaces array and   ║
 * ║    folded into the final air-equivalent BF values.                 ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish semi-diameters. Values here were    ║
 * ║    estimated from paraxial marginal/chief-ray envelopes at the     ║
 * ║    patent's three zoom positions, then constrained to preserve     ║
 * ║    rim slope, edge thickness, element SD ratio, and cross-gap sag. ║
 * ║    Several internal apertures are intentionally renderer-safe and  ║
 * ║    should not be read as manufacturer-published clear apertures.   ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces (front element to image plane)   ║
 * ║    ✓ Aperture stop and variable zoom gaps                         ║
 * ║    ✗ DOES NOT include sensor glass / filter block G as surfaces   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "canon-powershot-g1x-1560-f28",
  maker: "Canon",
  name: "CANON POWERSHOT G1 X 15.1-60.4mm f/2.8-5.8",
  subtitle: "US 2013/0176385 A1 Example 4 — Canon / Hiroshi Saruwatari",
  specs: [
    "11 elements / 10 groups",
    "Patent f = 15.57-58.93 mm",
    "Marketed 15.1-60.4 mm",
    "f/2.8-5.8 marketed; patent Fno 2.88-5.94",
    "5 aspherical surfaces",
  ],

  focalLengthMarketing: [15.1, 60.4],
  focalLengthDesign: [15.57, 58.93],
  lensMounts: ["fixed-lens-camera"],
  // imageFormat intentionally omitted: the project taxonomy has no canonical id for the G1 X 1.5-inch format.
  patentNumber: "US 2013/0176385 A1",
  patentAuthors: ["Hiroshi Saruwatari"],
  patentAssignees: ["Canon Inc."],
  patentYear: 2013,
  elementCount: 11,
  groupCount: 10,

  zoomPositions: [15.57, 30.33, 58.93],
  zoomLabels: ["Wide", "Middle", "Telephoto"],
  zoomStep: 0.004,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      fl: -134.0,
      glass: "S-TIH53 (OHARA)",
      apd: false,
      role: "Front negative meniscus in the positive first lens unit.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.6968,
      vd: 55.5,
      fl: 136.5,
      glass: "S-LAL14 (OHARA)",
      apd: false,
      role: "Low-index positive element in the first lens unit; sets the patent Np condition.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 70.5,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Rear positive component of the first lens unit.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Neg. Meniscus (2× Asph)",
      nd: 1.85135,
      vd: 40.1,
      fl: -17.8,
      glass: "M-TAFD305 (HOYA)",
      apd: false,
      role: "Principal negative aspherical variator element in the second lens unit.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      fl: -39.0,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Supplementary negative power in the second lens unit.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.92286,
      vd: 18.9,
      fl: 36.8,
      glass: "S-NPH2 (OHARA)",
      apd: false,
      role: "High-index, high-dispersion positive corrector at the rear of the second lens unit.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Pos. Meniscus (2× Asph)",
      nd: 1.84954,
      vd: 40.1,
      fl: 18.1,
      glass: "M-TAFD305 class (HOYA, inferred; stored nd=1.84954)",
      apd: false,
      role: "Leading molded aspherical positive element in the third lens unit.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 14.6,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Positive member of the cemented chromatic-correction doublet in the third lens unit.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      fl: -8.8,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      cemented: "D1",
      role: "Negative member of the third-unit cemented doublet.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 91.9,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Low-dispersion rear positive element of the image-stabilization third lens unit.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive (1× Asph)",
      nd: 1.58313,
      vd: 59.4,
      fl: 44.8,
      glass: "S-BAL42 (OHARA)",
      apd: false,
      role: "Single-element fourth lens unit; rear-focus group with an aspherical image-side surface.",
    },
  ],

  surfaces: [
    { label: "1", R: 257.708, d: 1.7, nd: 1.84666, elemId: 1, sd: 20.0 },
    { label: "2", R: 78.524, d: 0.42, nd: 1.0, elemId: 0, sd: 18.7 },
    { label: "3", R: 100.224, d: 2.3, nd: 1.6968, elemId: 2, sd: 16.3 },
    { label: "4", R: -1848.888, d: 0.15, nd: 1.0, elemId: 0, sd: 16.3 },
    { label: "5", R: 45.061, d: 2.9, nd: 1.7725, elemId: 3, sd: 16.3 },
    { label: "6", R: 253.867, d: 1.0, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "7A", R: 426.612, d: 1.3, nd: 1.85135, elemId: 4, sd: 12.7 },
    { label: "8A", R: 14.644, d: 5.29, nd: 1.0, elemId: 0, sd: 9.9 },
    { label: "9", R: -67.927, d: 1.0, nd: 1.7725, elemId: 5, sd: 12.9 },
    { label: "10", R: 54.445, d: 0.15, nd: 1.0, elemId: 0, sd: 12.9 },
    { label: "11", R: 22.994, d: 2.55, nd: 1.92286, elemId: 6, sd: 12.4 },
    { label: "12", R: 67.427, d: 20.46, nd: 1.0, elemId: 0, sd: 12.1 },
    { label: "13A", R: 14.237, d: 2.6, nd: 1.84954, elemId: 7, sd: 8.3 },
    { label: "14A", R: 182.28, d: 0.15, nd: 1.0, elemId: 0, sd: 8.3 },
    { label: "15", R: 10.892, d: 3.0, nd: 1.7725, elemId: 8, sd: 7.6 },
    { label: "16", R: 307.386, d: 0.6, nd: 1.80518, elemId: 9, sd: 7.2 },
    { label: "17", R: 6.914, d: 1.75, nd: 1.0, elemId: 0, sd: 6.1 },
    { label: "18", R: -427.643, d: 1.7, nd: 1.48749, elemId: 10, sd: 4.3 },
    { label: "19", R: -40.597, d: 1.0, nd: 1.0, elemId: 0, sd: 4.3 },
    { label: "STO", R: 1e15, d: 11.0, nd: 1.0, elemId: 0, sd: 3.55 },
    { label: "21", R: 515.35, d: 4.4, nd: 1.58313, elemId: 11, sd: 13.1 },
    { label: "22A", R: -27.443, d: 9.41, nd: 1.0, elemId: 0, sd: 13.4 },
  ],

  asph: {
    "7A": {
      K: -9.92306e3,
      A4: 5.32644e-6,
      A6: -2.24579e-8,
      A8: 5.90488e-11,
      A10: 0,
      A12: 0,
      A14: 0,
    },
    "8A": {
      K: 1.87034e-1,
      A4: -8.10318e-6,
      A6: 2.62959e-7,
      A8: -2.74956e-9,
      A10: 1.3619e-11,
      A12: 0,
      A14: 0,
    },
    "13A": {
      K: -2.29599e-1,
      A4: -2.19651e-5,
      A6: -1.60274e-7,
      A8: 8.38039e-10,
      A10: -1.30242e-10,
      A12: 0,
      A14: 0,
    },
    "14A": {
      K: 4.80661e1,
      A4: -7.13403e-6,
      A6: -3.77287e-8,
      A8: -5.23381e-9,
      A10: -4.54059e-11,
      A12: 0,
      A14: 0,
    },
    "22A": {
      K: -7.99912,
      A4: -4.30088e-5,
      A6: 5.11595e-8,
      A8: 4.13624e-10,
      A10: -1.51765e-12,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "6": [
      [1.0, 1.0],
      [6.55, 6.55],
      [17.05, 17.05],
    ],
    "12": [
      [20.46, 20.46],
      [8.58, 8.58],
      [0.9, 0.9],
    ],
    STO: [
      [11.0, 11.0],
      [23.5, 23.5],
      [35.91, 35.91],
    ],
    "22A": [
      [9.41, 9.41],
      [7.95, 7.95],
      [7.58, 7.58],
    ],
  },
  varLabels: [
    ["6", "D6"],
    ["12", "D12"],
    ["STO", "D20"],
    ["22A", "BF"],
  ],

  groups: [
    { text: "L1 +", fromSurface: "1", toSurface: "6" },
    { text: "L2 -", fromSurface: "7A", toSurface: "12" },
    { text: "L3 + / IS", fromSurface: "13A", toSurface: "19" },
    { text: "L4 + / Focus", fromSurface: "21", toSurface: "22A" },
  ],
  doublets: [{ text: "D1", fromSurface: "15", toSurface: "17" }],

  focusDescription:
    "Rear focus by the fourth lens unit. The patent gives infinity-focus zoom gaps only; close-focus gap pairs are not inferred.",
  closeFocusM: 0.2,
  nominalFno: [2.8, 4.58, 5.8],
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16],
  maxFstop: 16,
  apertureBlades: 6,

  scFill: 0.58,
  yScFill: 0.72,
} satisfies LensDataInput;

export default LENS_DATA;
