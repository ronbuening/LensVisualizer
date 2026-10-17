import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — smc PENTAX-FA645 120mm F4 Macro                       ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 6,154,324, Example 1, Table 1 (Murata / Ito).      ║
 * ║  Positive front group, independently moving aperture stop, and      ║
 * ║  negative rear group for life-size medium-format macro focusing.    ║
 * ║  9 elements / 7 air-separated groups; all spherical surfaces.       ║
 * ║  Focus: floating focus; G1, stop, and G2 move independently.        ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    No scale factor applied. Patent Example 1 computes to            ║
 * ║    f = 123.09 mm at infinity; marketing focal length is 120 mm.     ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE:                                                  ║
 * ║    The patent Example 1 gives F/3.8 at infinity, recorded in        ║
 * ║    catalog.fNumber.design. The production lens is marketed as F/4,  ║
 * ║    recorded in nominalFNumber and catalog.fNumber.marketing. The    ║
 * ║    stop radius is derived from nominalFNumber (F/4), not F/3.8.     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    The patent does not publish clear-aperture semi-diameters.       ║
 * ║    Values below were estimated from paraxial axial and field-ray    ║
 * ║    envelopes at infinity and 1:1, then limited by element edge      ║
 * ║    thickness, rim slope, and cross-gap sag intrusion constraints.   ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:            ║
 * ║    ✓ Glass elements and surfaces from front element to image plane  ║
 * ║    ✓ Aperture stop and variable focusing gaps                       ║
 * ║    ✗ Sensor glass, filters, and mechanical components omitted       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "pentax-645-fa-120mm-f4-macro",
  maker: "Pentax",
  name: "PENTAX SMC FA 645 120mm f/4 Macro",
  subtitle: "US 6,154,324 Example 1 — Murata / Ito",

  catalog: {
    lensMounts: ["pentax-645"],
    imageFormat: "645",
    specs: [
      "9 elements / 7 groups",
      "120 mm marketed; 123.09 mm patent EFL",
      "F4 marketed; F3.8 patent design aperture",
      "1:1 macro at 0.395 m",
      "All-spherical floating-focus macro",
    ],
    elementCount: 9,
    groupCount: 7,
    focalLengthMm: { marketing: 120, design: 123.09 },
    fNumber: { marketing: 4, design: 3.8 },
  },

  source: {
    patentNumber: "US 6,154,324",
    patentYear: 2000,
    authors: ["Masayuki Murata", "Takayuki Ito"],
    assignees: ["Asahi Kogaku Kogyo Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7859,
      vd: 44.2,
      focalLengthMm: 131.9,
      glass: "S-LAH51 (OHARA)",
      apd: false,
      role: "High-index front collector that begins the positive front group's convergence.",
      nC: 1.78058,
      nF: 1.79836,
      ng: 1.80838,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: 96.6,
      glass: "S-PHM52 (OHARA)",
      apd: false,
      role: "Low-dispersion positive member of the first cemented corrector doublet.",
      cemented: "D1",
      nC: 1.61504,
      nF: 1.62479,
      ng: 1.6301,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.54072,
      vd: 47.2,
      focalLengthMm: -56.4,
      glass: "S-TIL2 (OHARA)",
      apd: false,
      role: "Light-flint negative member that gives the L2/L3 cemented doublet net negative power.",
      cemented: "D1",
      nC: 1.5373,
      nF: 1.54875,
      ng: 1.55522,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 92.1,
      glass: "S-FSL5 (OHARA)",
      apd: false,
      role: "Low-dispersion positive element in the front group; the probable ED element in the production lens.",
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.8,
      focalLengthMm: -37.6,
      glass: "S-TIM22 (OHARA)",
      apd: false,
      role: "Dense flint negative member of the second cemented chromatic corrector doublet.",
      cemented: "D2",
      nC: 1.6421,
      nF: 1.66126,
      ng: 1.67265,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.734,
      vd: 51.5,
      focalLengthMm: 39,
      glass: "S-LAL59 (OHARA)",
      apd: false,
      role: "Lanthanum-crown positive member that nearly cancels L5's strong negative power.",
      cemented: "D2",
      nC: 1.72968,
      nF: 1.74394,
      ng: 1.75176,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -98.1,
      glass: "S-LAH66 (OHARA)",
      apd: false,
      role: "First rear-group negative element; main diverging member immediately behind the stop.",
      nC: 1.7678,
      nF: 1.78337,
      ng: 1.79197,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.6779,
      vd: 55.3,
      focalLengthMm: -213.3,
      glass: "S-LAL12 (OHARA)",
      apd: false,
      role: "Weak lanthanum-crown negative field-correcting element in the rear group.",
      nC: 1.67419,
      nF: 1.68644,
      ng: 1.69314,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.7859,
      vd: 44.2,
      focalLengthMm: 102.9,
      glass: "S-LAH51 (OHARA)",
      apd: false,
      role: "Final high-index positive element that moderates the rear group's net negative power and image-side ray angles.",
      nC: 1.78058,
      nF: 1.79836,
      ng: 1.80838,
    },
  ],

  /* ── Surface prescription ── */
  /* (moved from asph) ── Aspherical coefficients ── */
  surfaces: [
    { label: "1", R: 64.35, d: 5.28, sd: 30, medium: 1 },
    { label: "2", R: 163.546, d: 4.44, sd: 29 },
    { label: "3", R: 30.938, d: 5.93, sd: 22.2, medium: 2 },
    { label: "4", R: 59.5, d: 2.1, sd: 21.8, medium: 3 },
    { label: "5", R: 19.92, d: 15.72, sd: 17.5 },
    { label: "6", R: -6450, d: 3.64, sd: 16.4, medium: 4 },
    { label: "7", R: -44.59, d: 3.32, sd: 15.7 },
    { label: "8", R: -24.14, d: 3.92, sd: 15.7, medium: 5 },
    { label: "9", R: -2559.81, d: 8.3, sd: 17.2, medium: 6 },
    { label: "10", R: -28.36, sd: 18.7 },
    { label: "STO", R: "flat" },
    { label: "11", R: 242.198, d: 2.1, sd: 16, medium: 7 },
    { label: "12", R: 57.5, d: 2.35, sd: 16 },
    { label: "13", R: 315.412, d: 2.3, sd: 16.6, medium: 8 },
    { label: "14", R: 98.849, d: 16.03, sd: 16.8 },
    { label: "15", R: 94.754, d: 5, sd: 23.3, medium: 9 },
    { label: "16", R: -540, sd: 23.5 },
  ],

  /* ── Focus configuration ── */
  focus: {
    closeFocusM: 0.395,
    description:
      "Floating macro focus: the positive front group, aperture stop, and negative rear group move independently toward the object from infinity to 1:1.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  /* (moved from var) ── Variable air spacings ── */
  gaps: {
    "10": { label: "G1–STO", values: [[1.5, 18.98]] },
    STO: { label: "STO–G2", values: [[2.5, 32.27]] },
    "16": { label: "BF", values: [[76, 91.75]] },
  },

  /* ── Aperture configuration ── */
  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32 },

  /* ── Group and doublet annotations ── */
  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "10" },
    { text: "G2 (−)", fromSurface: "11", toSurface: "16" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
  ],

  /* ── Layout tuning ── */
  layout: { scFill: 0.52, yScFill: 0.34 },
} satisfies LensDataV2Input;

export default LENS_DATA;
