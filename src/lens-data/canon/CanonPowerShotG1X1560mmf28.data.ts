import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON 15.1-60.4mm f/2.8-5.8 (Canon PowerShot G1 X)  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2013/0176385 A1, Numerical Example 4.            ║
 * ║  Canon positive-negative-positive-positive compact zoom.            ║
 * ║  11 elements / 10 groups, 5 aspherical surfaces.                  ║
 * ║  Focus: rear focus by the fourth lens unit; patent provides only   ║
 * ║  infinity-focus zoom spacing, so close-focus pairs are left equal. ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D6, D12, D20/STO, BF.                         ║
 * ║  Gaps D6 and D12 are group-separation gaps. D20/STO is the         ║
 * ║  aperture-stop-to-fourth-unit gap. BF is the patent d22, the gap   ║
 * ║  from the fourth-unit rear asphere to optical block G.             ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    No scaling applied. The prescription is retained at the patent  ║
 * ║    design focal lengths of 15.57 / 30.33 / 58.93 mm.              ║
 * ║                                                                    ║
 * ║  NOTE ON SENSOR/FILTER BLOCK:                                      ║
 * ║    Patent surfaces 23-24 are the flat optical block G (1.56 mm,    ║
 * ║    nd 1.51633, νd 64.1, S-BSL7 class) with 1.56 mm air to the      ║
 * ║    image. It is modeled in `rearPlates` (traced, not drawn). BF    ║
 * ║    stores d22 = 6.82 / 5.36 / 4.9912 mm. Tele keeps the printed    ║
 * ║    BF 7.58 image plane: printed d22 5.00 would sit 0.009 mm longer ║
 * ║    (both rounded; true d22 about 4.995). Air-equivalent BF         ║
 * ║    = 9.409 / 7.949 / 7.580 mm (patent 9.41 / 7.95 / 7.58).         ║
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
 * ║    ✗ DO NOT include: mechanical parts (cover glass: `rearPlates`) ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-powershot-g1x-1560-f28",
  maker: "Canon",
  name: "CANON 15.1-60.4mm f/2.8-5.8 (Canon PowerShot G1 X)",
  subtitle: "US 2013/0176385 A1 Example 4 — Canon / Hiroshi Saruwatari",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "1.5-inch-type",
    specs: [
      "11 elements / 10 groups",
      "Patent f = 15.57-58.93 mm",
      "Marketed 15.1-60.4 mm",
      "f/2.8-5.8 marketed; patent Fno 2.88-5.94",
      "5 aspherical surfaces",
    ],
    elementCount: 11,
    groupCount: 10,
    focalLengthMm: { marketing: [15.1, 60.4], design: [15.57, 58.93] },
  },

  source: {
    patentNumber: "US 2013/0176385 A1",
    patentYear: 2013,
    authors: ["Hiroshi Saruwatari"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -134.0,
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
      focalLengthMm: 136.5,
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
      focalLengthMm: 70.5,
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
      focalLengthMm: -17.8,
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
      focalLengthMm: -39.0,
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
      focalLengthMm: 36.8,
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
      focalLengthMm: 18.1,
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
      focalLengthMm: 14.6,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "Positive member of the cemented chromatic-correction doublet in the third lens unit.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: -8.8,
      glass: "S-TIH6 (OHARA)",
      apd: false,
      role: "Negative member of the third-unit cemented doublet.",
      cemented: "D1",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 91.9,
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
      focalLengthMm: 44.8,
      glass: "S-BAL42 (OHARA)",
      apd: false,
      role: "Single-element fourth lens unit; rear-focus group with an aspherical image-side surface.",
    },
  ],

  surfaces: [
    { label: "1", R: 257.708, d: 1.7, sd: 20.0, medium: 1 },
    { label: "2", R: 78.524, d: 0.42, sd: 18.7 },
    { label: "3", R: 100.224, d: 2.3, sd: 16.3, medium: 2 },
    { label: "4", R: -1848.888, d: 0.15, sd: 16.3 },
    { label: "5", R: 45.061, d: 2.9, sd: 16.3, medium: 3 },
    { label: "6", R: 253.867, sd: 16.0 },
    {
      label: "7A",
      R: 426.612,
      d: 1.3,
      sd: 12.7,
      medium: 4,
      asphere: { K: -9.92306e3, A4: 5.32644e-6, A6: -2.24579e-8, A8: 5.90488e-11 },
    },
    {
      label: "8A",
      R: 14.644,
      d: 5.29,
      sd: 9.9,
      asphere: { K: 1.87034e-1, A4: -8.10318e-6, A6: 2.62959e-7, A8: -2.74956e-9, A10: 1.3619e-11 },
    },
    { label: "9", R: -67.927, d: 1.0, sd: 12.9, medium: 5 },
    { label: "10", R: 54.445, d: 0.15, sd: 12.9 },
    { label: "11", R: 22.994, d: 2.55, sd: 12.4, medium: 6 },
    { label: "12", R: 67.427, sd: 12.1 },
    {
      label: "13A",
      R: 14.237,
      d: 2.6,
      sd: 8.3,
      medium: 7,
      asphere: { K: -2.29599e-1, A4: -2.19651e-5, A6: -1.60274e-7, A8: 8.38039e-10, A10: -1.30242e-10 },
    },
    {
      label: "14A",
      R: 182.28,
      d: 0.15,
      sd: 8.3,
      asphere: { K: 4.80661e1, A4: -7.13403e-6, A6: -3.77287e-8, A8: -5.23381e-9, A10: -4.54059e-11 },
    },
    { label: "15", R: 10.892, d: 3.0, sd: 7.6, medium: 8 },
    { label: "16", R: 307.386, d: 0.6, sd: 7.2, medium: 9 },
    { label: "17", R: 6.914, d: 1.75, sd: 6.1 },
    { label: "18", R: -427.643, d: 1.7, sd: 4.3, medium: 10 },
    { label: "19", R: -40.597, d: 1.0, sd: 4.3 },
    { label: "STO", R: "flat" },
    { label: "21", R: 515.35, d: 4.4, sd: 13.1, medium: 11 },
    {
      label: "22A",
      R: -27.443,
      sd: 13.4,
      asphere: { K: -7.99912, A4: -4.30088e-5, A6: 5.11595e-8, A8: 4.13624e-10, A10: -1.51765e-12 },
    }, // d22 variable (zoom), gap to block G
  ],

  zoom: {
    stations: [
      { focalLengthMm: 15.57, nominalFNumber: 2.8, label: "Wide" },
      { focalLengthMm: 30.33, nominalFNumber: 4.58, label: "Middle" },
      { focalLengthMm: 58.93, nominalFNumber: 5.8, label: "Telephoto" },
    ],
    step: 0.004,
  },

  focus: {
    closeFocusM: 0.2,
    description:
      "Rear focus by the fourth lens unit. The patent gives infinity-focus zoom gaps only; close-focus gap pairs are not inferred.",
  },

  gaps: {
    "6": {
      label: "D6",
      values: [
        [1.0, 1.0],
        [6.55, 6.55],
        [17.05, 17.05],
      ],
    },
    "12": {
      label: "D12",
      values: [
        [20.46, 20.46],
        [8.58, 8.58],
        [0.9, 0.9],
      ],
    },
    STO: {
      label: "D20",
      values: [
        [11.0, 11.0],
        [23.5, 23.5],
        [35.91, 35.91],
      ],
    },
    "22A": {
      label: "BF",
      values: [
        [6.82, 6.82],
        [5.36, 5.36],
        [4.9912, 4.9912], // printed BF 7.58 − 1.56/1.51633 − 1.56 (printed d22 5.00 rounds 0.009 longer)
      ],
    },
  },

  aperture: { fStops: [2.8, 4, 5.6, 8, 11, 16], maxFNumber: 16, blades: 6 },

  /* ── Optical block G (patent surfaces 23–24): traced, not drawn ── */
  rearPlates: [
    {
      label: "G",
      thicknessMm: 1.56,
      nd: 1.51633,
      vd: 64.1,
      glass: "S-BSL7",
      gapAfterMm: 1.56,
      source: "US 2013/0176385 A1, Numerical Example 4 surfaces 23–24",
    },
  ],

  groups: [
    { text: "L1 +", fromSurface: "1", toSurface: "6" },
    { text: "L2 -", fromSurface: "7A", toSurface: "12" },
    { text: "L3 + / IS", fromSurface: "13A", toSurface: "19" },
    { text: "L4 + / Focus", fromSurface: "21", toSurface: "22A" },
  ],
  doublets: [{ text: "D1", fromSurface: "15", toSurface: "17" }],

  layout: { scFill: 0.58, yScFill: 0.72 },
} satisfies LensDataV2Input;

export default LENS_DATA;
