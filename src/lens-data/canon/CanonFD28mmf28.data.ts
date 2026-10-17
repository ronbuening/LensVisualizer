import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON FD 28mm f/2.8 S.C.                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,046,459, Example 2 / Fig. 5 / Table 3.          ║
 * ║  Canon/Kawamura compact retrofocus wide-angle objective.           ║
 * ║  7 elements / 7 groups, all spherical.                             ║
 * ║  Focus: unit extension modeled by variable final back-focus gap.   ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                  ║
 * ║    Patent prescription is normalized to f = 1. All R, d, and       ║
 * ║    semi-diameter values here are scaled ×28.0 to represent the     ║
 * ║    Canon FD 28 mm production class. The rounded patent table       ║
 * ║    recomputes to EFL = 27.9976 mm and BFD = 35.8581 mm.            ║
 * ║                                                                    ║
 * ║  NOTE ON STOP POSITION:                                            ║
 * ║    The patent does not tabulate the aperture-stop position. For    ║
 * ║    visualization the stop is inferred in the large L4-L5 air gap   ║
 * ║    and d8 is split evenly about STO. The stop radius is derived    ║
 * ║    from the design f-number (f/2.8); the paraxial entrance-pupil   ║
 * ║    diameter is 10.0 mm.                                            ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent omits clear apertures. SDs are inferred from real    ║
 * ║    meridional marginal/chief ray envelopes at the inferred stop,   ║
 * ║    then reduced where necessary for spherical rim slope, minimum   ║
 * ║    edge thickness, element SD ratio, and cross-gap sag clearance.  ║
 * ║    L1, L3, and the L5-L6 air gap are the binding constraints.      ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces from front element to image plane ║
 * ║    ✓ Inferred aperture stop and variable focus gap                 ║
 * ║    ✗ No sensor glass, filters, or mechanical barrel components     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-fd-28mm-f28",
  maker: "Canon",
  name: "CANON FD 28mm f/2.8 S.C.",
  subtitle: "US 4,046,459 Example 2 — Canon / Kawamura",

  catalog: {
    lensMounts: ["canon-fd"],
    imageFormat: "135-full-frame",
    specs: ["7 elements / 7 groups", "28 mm", "F/2.8", "75° diagonal AoV", "All-spherical retrofocus"],
    elementCount: 7,
    groupCount: 7,
    focalLengthMm: { marketing: 28, design: 27.9976 },
    fNumber: { marketing: 2.8 },
  },

  source: { patentNumber: "US 4,046,459", patentYear: 1977, authors: ["Naoto Kawamura"], assignees: ["Canon Inc."] },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.61117,
      vd: 55.9,
      focalLengthMm: -54.45,
      glass: "SK8/BACD8 class (legacy 611/559 dense barium crown)",
      apd: false,
      role: "First forward-convex negative meniscus of the divergent retrofocus front assembly.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.60729,
      vd: 49.3,
      focalLengthMm: -45.36,
      glass: "BAF5 (HOYA catalog-equivalent; production supplier unspecified)",
      apd: false,
      role: "Second forward-convex negative meniscus; controlled rear radius sets front-group divergence.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.72342,
      vd: 38,
      focalLengthMm: 57.45,
      glass: "S-BAH28 (OHARA) / BAFD8 (HOYA) equivalent",
      apd: false,
      role: "High-index positive corrector immediately behind the negative front pair; governed by N3 > 1.72 and vd < 40.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.60311,
      vd: 60.7,
      focalLengthMm: 29.42,
      glass: "S-BSM14 (OHARA) / BACD14 (HOYA) / N-SK14 equivalent",
      apd: false,
      role: "Principal positive power element of the rear convergent group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.74077,
      vd: 27.8,
      focalLengthMm: -17.89,
      glass: "S-TIH13 (OHARA) / E-FD13 (HOYA) equivalent",
      apd: false,
      role: "Dense-flint negative color-correction element in the rear group.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 53.3,
      focalLengthMm: 31.77,
      glass: "S-LAL13 / LAC13 class (694/533 lanthanum crown equivalent)",
      apd: false,
      role: "Rearward-convex positive meniscus restoring convergence after L5.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 53.3,
      focalLengthMm: 49.48,
      glass: "S-LAL13 / LAC13 class (694/533 lanthanum crown equivalent)",
      apd: false,
      role: "Final rearward-convex positive meniscus that sets exit vergence and back focus.",
    },
  ],

  surfaces: [
    { label: "1", R: 36.5792, d: 1.7696, sd: 18.75, medium: 1 },
    { label: "2", R: 17.1052, d: 8.8256, sd: 15.05 },
    { label: "3", R: 105.3416, d: 1.4728, sd: 15.6, medium: 2 },
    { label: "4", R: 21.7196, d: 5.88, sd: 14.4 },
    { label: "5", R: 49.3332, d: 2.9484, sd: 14.1, medium: 3 },
    { label: "6", R: -257.1884, d: 4.2, sd: 14.1 },
    { label: "7", R: 30.352, d: 10.1556, sd: 13.9, medium: 4 },
    { label: "8", R: -37.3408, d: 4.074, sd: 12.7 },

    // Stop position inferred from Fig. 5 / rear-group layout; not tabulated in the patent.
    { label: "STO", R: "flat", d: 4.074 },

    { label: "9", R: -17.822, d: 0.9828, sd: 7.75, medium: 5 },
    { label: "10", R: 52.8556, d: 1.3748, sd: 8.65 },
    { label: "11", R: -71.764, d: 2.6516, sd: 9.25, medium: 6 },
    { label: "12", R: -17.1136, d: 0.196, sd: 9.3 },
    { label: "13", R: -751.156, d: 2.5536, sd: 11.2, medium: 7 },
    { label: "14", R: -32.8608, sd: 11.4 },
  ],

  focus: {
    closeFocusM: 0.3,
    description: "Unit focus modeled as whole-cell extension; only the final back-focus gap varies.",
  },

  gaps: { "14": { label: "BF", values: [[35.85809049187277, 39.5148363693372]] } },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 5 },

  groups: [
    { text: "Divergent front", fromSurface: "1", toSurface: "4" },
    { text: "Convergent rear", fromSurface: "5", toSurface: "14" },
  ],
  doublets: [],

  layout: { scFill: 0.58, yScFill: 0.64 },
} satisfies LensDataV2Input;

export default LENS_DATA;
