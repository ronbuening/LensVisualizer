import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — CANON EF 20mm f/2.8 USM                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP H08-110467 A, Numerical Example 2 (Canon/Endo).   ║
 * ║  Two-group all-spherical rear-focus retrofocus design.             ║
 * ║  11 elements / 9 air-spaced groups.                                ║
 * ║  Focus: fixed negative L1; complete positive L2 moves objectward.  ║
 * ║                                                                    ║
 * ║  NOTE ON PRODUCTION CORRESPONDENCE:                                 ║
 * ║    Example 2 is the closest published patent match to the Canon    ║
 * ║    EF 20mm f/2.8 USM by focal length, 11/9 construction, field,    ║
 * ║    rear-focus architecture, and Canon's public block diagram.      ║
 * ║    Canon has not published a factory prescription, so literal      ║
 * ║    production identity is not asserted.                            ║
 * ║                                                                    ║
 * ║  NOTE ON PRESCRIPTION SCALE:                                        ║
 * ║    The patent dimensions are retained without scaling. The         ║
 * ║    re-extracted prescription computes to EFL 20.498624494 mm,      ║
 * ║    consistent with a nominally marketed 20 mm lens and with the    ║
 * ║    patent's 93.1° full field on the 36 × 24 mm format.              ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE AND FIELD:                                        ║
 * ║    The patent design is f/2.9 and 93.1° full field. nominalFno     ║
 * ║    carries f/2.9; the published 94° diagonal field is kept. The    ║
 * ║    stop radius is derived from the design f-number.                ║
 * ║                                                                    ║
 * ║  NOTE ON FOCUS:                                                     ║
 * ║    The patent supplies only infinity D6 = 3.97 mm and no close     ║
 * ║    spacing table. The close state is a paraxial reconstruction at  ║
 * ║    Canon's 0.25 m MFD, with the image plane fixed: D6 changes      ║
 * ║    3.970000 → 0.992301 mm and physical BF changes                  ║
 * ║    38.387749 → 41.365448 mm. The resulting magnification magnitude ║
 * ║    is 0.13633×, consistent with Canon's rounded 0.14× value.       ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                            ║
 * ║    The patent omits clear apertures. SDs are inferred from the     ║
 * ║    f/2.8 marginal/chief-ray envelope, patent Figure 2, Canon's     ║
 * ║    block diagram and 72 mm filter specification, then constrained ║
 * ║    by sd/|R| < 0.90, element SD ratio ≤ 1.25, edge thickness   ║
 * ║    ≥ 0.5 mm, and cross-gap sag intrusion ≤ 90%. They are not    ║
 * ║    production measurements.                                      ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes ONLY the optical design:           ║
 * ║    ✓ Glass elements and surfaces from front element to image plane ║
 * ║    ✓ Aperture stop and reconstructed variable focus gaps           ║
 * ║    ✗ No sensor glass, filters, or mechanical barrel components     ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-20mm-f28-usm",
  maker: "Canon",
  name: "CANON EF 20mm f/2.8 USM",
  subtitle: "JP H08-110467 A Example 2 — Canon / Tadashi Endo",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "11 elements / 9 groups",
      "Patent EFL 20.498624 mm; retained at printed scale",
      "f/2.8 marketed; f/2.9 patent design",
      "94° marketed diagonal field; 93.1° patent field",
      "All-spherical negative-positive retrofocus",
      "Rear focus; complete L2 moves objectward",
    ],
    elementCount: 11,
    groupCount: 9,
    focalLengthMm: { marketing: 20, design: 20.498624 },
    fNumber: { marketing: 2.8, design: 2.9 },
  },

  source: { patentNumber: "JP H08-110467 A", patentYear: 1996, authors: ["Tadashi Endo"], assignees: ["Canon Inc."] },

  elements: [
    {
      id: 1,
      name: "L11",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.62299,
      vd: 58.2,
      focalLengthMm: -96.920882,
      glass: "S-BSM15 (OHARA 623582 coordinate equivalent)",
      role: "First object-convex negative meniscus; begins the gradual redirection of steep off-axis bundles.",
      nC: 1.619739,
      nF: 1.63045,
      ng: 1.636296,
    },
    {
      id: 2,
      name: "L12",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.7,
      focalLengthMm: -77.741259,
      glass: "S-BSM14 (OHARA 603607 coordinate equivalent)",
      role: "Second object-convex negative meniscus; continues front-group divergence while limiting extreme surface angles.",
      nC: 1.600079,
      nF: 1.610024,
      ng: 1.615409,
    },
    {
      id: 3,
      name: "L13",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.58313,
      vd: 59.4,
      focalLengthMm: 90.148977,
      glass: "S-BAL42 (OHARA 583594 coordinate equivalent)",
      role: "Positive front-group corrector assigned by the patent to reduce distortion generated by L11 and L12.",
      nC: 1.580139,
      nF: 1.58996,
      ng: 1.595297,
    },
    {
      id: 4,
      name: "L21",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: -24.99507,
      glass: "S-LAH66 (OHARA 773496 historical/current special-order coordinate match)",
      role: "Front negative meniscus of the moving rear group; supports long back focus and moderates off-axis incidence.",
      nC: 1.767798,
      nF: 1.783374,
      ng: 1.791972,
    },
    {
      id: 5,
      name: "L22",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 57.45438,
      glass: "PBH6 / S-TIH6 coordinate (OHARA 805254 equivalent; actual melt unspecified)",
      role: "Dense-flint positive meniscus assigned to correct negative distortion generated by the fixed front group.",
      nC: 1.796106,
      nF: 1.827775,
      ng: 1.847286,
    },
    {
      id: 6,
      name: "L23",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.51633,
      vd: 64.2,
      focalLengthMm: 26.02091,
      glass: "S-BSL7 (OHARA 516641 coordinate equivalent; catalog νd = 64.14)",
      role: "Strong positive element assigned to distortion and L21-generated spherical-aberration correction.",
      nC: 1.51386,
      nF: 1.52191,
      ng: 1.52621,
    },
    {
      id: 7,
      name: "L24",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.62096,
      vd: 35.9,
      focalLengthMm: -13.358232,
      glass: "TIM11 (OHARA historical 621359 exact coordinate match)",
      role: "Negative component of D1; its high-index junction with L25 is assigned to sagittal-halo and chromatic correction.",
      cemented: "D1",
      nC: 1.61588,
      nF: 1.63319,
      ng: 1.64339,
    },
    {
      id: 8,
      name: "L25",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.4,
      focalLengthMm: 18.432337,
      glass: "PBH6 / S-TIH6 coordinate (OHARA 805254 equivalent; actual melt unspecified)",
      role: "Positive component of D1; N25 − N24 = 0.18422 satisfies the patent's junction-index condition.",
      cemented: "D1",
      nC: 1.796106,
      nF: 1.827775,
      ng: 1.847286,
    },
    {
      id: 9,
      name: "L26",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.84666,
      vd: 23.9,
      focalLengthMm: -19.933002,
      glass: "PBH53 (OHARA historical 847239 exact coordinate match)",
      role: "High-index dense-flint negative component of D2; paired with L27 in the rear aberration-balancing section.",
      cemented: "D2",
      nC: 1.83653,
      nF: 1.87198,
      ng: 1.89382,
    },
    {
      id: 10,
      name: "L27",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      focalLengthMm: 20.530523,
      glass: "S-FSL5 (OHARA 487702 coordinate match)",
      role: "Low-dispersion positive component of D2; the assembled doublet has weak positive paraxial power.",
      cemented: "D2",
      nC: 1.485344,
      nF: 1.492285,
      ng: 1.495964,
    },
    {
      id: 11,
      name: "L28",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      focalLengthMm: 49.51674,
      glass: "S-LAH66 (OHARA 773496 historical/current special-order coordinate match)",
      role: "Final positive singlet; works with D2 to balance spherical aberration and coma while preserving back focus.",
      nC: 1.767798,
      nF: 1.783374,
      ng: 1.791972,
    },
  ],

  surfaces: [
    { label: "1", R: 39.03, d: 2, sd: 25.62328, medium: 1 },
    { label: "2", R: 23.24, d: 6.06, sd: 20.9 },
    { label: "3", R: 52.92, d: 1.7, sd: 18.0, medium: 2 },
    { label: "4", R: 24.56, d: 6.3, sd: 17.0 },
    { label: "5", R: 115.45, d: 10.8, sd: 19.5, medium: 3 },
    { label: "6", R: -93.19, sd: 18.0 },

    { label: "7", R: 25.08, d: 1, sd: 9.019395, medium: 4 },
    { label: "8", R: 10.72, d: 3.34, sd: 7.420502 },
    { label: "9", R: -1747.11, d: 2.8, sd: 9.019395, medium: 5 },
    { label: "10", R: -45.1, d: 1.27, sd: 8.814409 },
    { label: "11", R: 149.79, d: 11.6, sd: 9.019395, medium: 6 },
    { label: "12", R: -14.37, d: 0.73, sd: 7.379505 },

    { label: "STO", R: "flat", d: 3.5 },

    { label: "14", R: -23.5, d: 1.1, sd: 8.19945, medium: 7 },
    { label: "15", R: 13.05, d: 6.7, sd: 8.19945, medium: 8 },
    { label: "16", R: 83.36, d: 0.66, sd: 7.789477 },
    { label: "17", R: -145.33, d: 1.1, sd: 8.711915, medium: 9 },
    { label: "18", R: 19.16, d: 7.6, sd: 10.659285, medium: 10 },
    { label: "19", R: -18.23, d: 0.15, sd: 10.659285 },
    { label: "20", R: 283.36, d: 3.4, sd: 13.529092, medium: 11 },
    { label: "21", R: -43.99, sd: 14.349037 },
  ],

  focus: {
    closeFocusM: 0.25,
    description:
      "Rear focus: fixed negative L1; complete positive L2, including the stop, moves 2.977699 mm objectward in the paraxial 0.25 m reconstruction.",
  },

  gaps: {
    "6": { label: "D6", values: [[3.97, 0.9923012365164733]] },
    "21": { label: "BF", values: [[38.38774906787699, 41.36544783136051]] },
  },

  aperture: { nominalFNumber: 2.9, fStops: [2.9, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 6 },

  projection: { kind: "rectilinear", fullFieldDeg: 94, maxTraceFieldDeg: 47 },

  groups: [
    { text: "L1 · FIXED NEGATIVE", fromSurface: "1", toSurface: "6" },
    { text: "L2 · MOVING POSITIVE", fromSurface: "7", toSurface: "21" },
  ],
  doublets: [
    { text: "D1 · L24/L25", fromSurface: "14", toSurface: "16" },
    { text: "D2 · L26/L27", fromSurface: "17", toSurface: "19" },
  ],

  layout: { scFill: 0.58, yScFill: 0.64 },

  rays: { offAxisFieldFrac: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
