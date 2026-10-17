import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════╗
 * ║                 LENS DATA — Minolta AF 28mm f/2                            ║
 * ╠══════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,258,985, Example 4 / Table 4 / claim 9                  ║
 * ║  (Akiyoshi Nakamura, Minolta Camera K.K.).                                 ║
 * ║                                                                            ║
 * ║  Fast all-spherical inverted-telephoto 28mm design for the 135 SLR format.  ║
 * ║  The patent prescription is normalized to f = 100 and is scaled ×0.28       ║
 * ║  to the 28mm production focal length.                                      ║
 * ║                                                                            ║
 * ║  9 elements / 9 air-spaced groups, 0 aspherical surfaces.                  ║
 * ║  Focus: patent publishes only the infinity prescription. Close focus is     ║
 * ║  represented by unit extension of the complete optical cell to the          ║
 * ║  manufacturer's 0.3 m minimum-focus distance.                              ║
 * ║                                                                            ║
 * ║  NOTE ON STOP PLACEMENT:                                                   ║
 * ║    The patent figure places the aperture stop in d8, immediately before L5. ║
 * ║    The 14.50 patent-unit r8→r9 air gap is split as 12.50 + STO + 2.00.     ║
 * ║    The stop radius is derived from the design f-number, the f/2            ║
 * ║    entrance-pupil target at infinity.                                      ║
 * ║                                                                            ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                   ║
 * ║    Semi-diameters are inferred from paraxial marginal/chief-ray envelopes   ║
 * ║    and then constrained by spherical rim slope, element edge thickness,     ║
 * ║    ≤1.25 front/rear element SD ratio, and ≤90% cross-gap sag intrusion.    ║
 * ║    Surfaces 1-5 (L1, L2, L3 front) were later raised to pass the traced    ║
 * ║    chief ray to the 24x36 corner (21.65 mm at 38.4°; patent 2ω = 75°,      ║
 * ║    28 tan 37.5° = 21.49 mm); the old rims clipped it from 33.6°            ║
 * ║    (2026-09-24 field-coverage audit).                                      ║
 * ╚══════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "minolta-af-28mm-f2",
  maker: "Minolta",
  name: "MINOLTA AF 28mm f/2",
  subtitle: "US 4,258,985 Example 4 — Minolta / Akiyoshi Nakamura",

  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "135-full-frame",
    specs: ["9 elements / 9 groups", "f = 28.0 mm", "F2.0", "2ω = 75°", "all-spherical"],
    elementCount: 9,
    groupCount: 9,
    focalLengthMm: { marketing: 28, design: 28.0015 },
    fNumber: { marketing: 2, design: 2 },
  },

  source: {
    patentNumber: "US 4,258,985",
    patentYear: 1981,
    authors: ["Akiyoshi Nakamura"],
    assignees: ["Minolta Camera Co., Ltd."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Weak Biconvex Positive",
      nd: 1.6935,
      vd: 53.61,
      focalLengthMm: 503.737,
      glass: "H-LaK6A (CDGM catalog equivalent; patent code 694536, supplier unspecified)",
      apd: false,
      role: "Very weak front positive that shapes the retrofocus front group without forcing excessive negative meniscus power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.5111,
      vd: 60.49,
      focalLengthMm: -56.777,
      glass: "NSL7 (OHARA legacy catalog equivalent; patent code 511605, supplier unspecified)",
      apd: false,
      role: "First object-convex negative meniscus in the retrofocus front group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.5111,
      vd: 60.49,
      focalLengthMm: -55.009,
      glass: "NSL7 (OHARA legacy catalog equivalent; patent code 511605, supplier unspecified)",
      apd: false,
      role: "Second object-convex negative meniscus; shares front-group divergence with L2.",
    },
    {
      id: 4,
      name: "L4a",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.762,
      vd: 40.38,
      focalLengthMm: 48.692,
      glass: "NBFD5 (Hoya catalog equivalent; patent code 762404, supplier unspecified)",
      apd: false,
      role: "First positive singlet of the split second group; starts reconverging the front-group output.",
    },
    {
      id: 5,
      name: "L4b",
      label: "Element 5",
      type: "Weak Biconvex Positive",
      nd: 1.762,
      vd: 40.38,
      focalLengthMm: 68.503,
      glass: "NBFD5 (Hoya catalog equivalent; patent code 762404, supplier unspecified)",
      apd: false,
      role: "Second air-spaced positive singlet of the patent's two-element second group.",
    },
    {
      id: 6,
      name: "L5",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.7495,
      vd: 50.41,
      focalLengthMm: 41.622,
      glass: "750504 - dense lanthanum crown class (catalog unresolved)",
      apd: false,
      role: "Post-stop positive meniscus constrained by patent condition (4) for spherical-aberration and coma correction.",
    },
    {
      id: 7,
      name: "L6",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.8052,
      vd: 25.21,
      focalLengthMm: -18.285,
      glass: "S-TIH6 (OHARA catalog equivalent; patent code 805252, supplier unspecified)",
      apd: false,
      role: "High-index dense-flint chromatic corrector in the rear positive group.",
    },
    {
      id: 8,
      name: "L7",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 50.14,
      focalLengthMm: 39.583,
      glass: "773501 - lanthanum flint (catalog unresolved)",
      apd: false,
      role: "Rear positive meniscus that reconverges the bundle after the dense-flint negative element.",
    },
    {
      id: 9,
      name: "L8",
      label: "Element 9",
      type: "Weak Biconvex Positive",
      nd: 1.6968,
      vd: 55.8,
      focalLengthMm: 53.163,
      glass: "K-LaK14 (SUMITA catalog equivalent; patent code 697558, supplier unspecified)",
      apd: false,
      role: "Terminal positive field element near the image plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 2105.264, d: 3.78, sd: 16.7, medium: 1 },
    { label: "2", R: -418.5356, d: 0.1456, sd: 15.9 },
    { label: "3", R: 33.0176, d: 1.68, sd: 12.9, medium: 2 },
    { label: "4", R: 15.1788, d: 3.36, sd: 10.7 },
    { label: "5", R: 32.2, d: 1.68, sd: 10.2, medium: 3 },
    { label: "6", R: 14.7448, d: 8.6016, sd: 11.5 },
    { label: "7", R: 31.4328, d: 3.92, sd: 12.2, medium: 4 },
    { label: "7p", R: 194.5804, d: 1.12, sd: 11.5 },
    { label: "7pp", R: 351.3188, d: 6.16, sd: 11.5, medium: 5 },
    { label: "8", R: -60.844, d: 3.5, sd: 10.4 },
    { label: "STO", R: "flat", d: 0.56 },
    { label: "9", R: -119.7616, d: 3.0716, sd: 9.6, medium: 6 },
    { label: "10", R: -25.0208, d: 2.408, sd: 9.2 },
    { label: "11", R: -20.7368, d: 2.982, sd: 9.2, medium: 7 },
    { label: "12", R: 54.0232, d: 1.96, sd: 10.1 },
    { label: "13", R: -65.282, d: 3.22, sd: 10.1, medium: 8 },
    { label: "14", R: -21.2716, d: 0.1456, sd: 11.4 },
    { label: "15", R: 547.946, d: 3.5, sd: 11.5, medium: 9 },
    { label: "16", R: -39.6256, sd: 12.1 },
  ],

  focus: {
    closeFocusM: 0.3,
    description:
      "Single patent configuration; close focus is represented by unit-extension BFD change to the 0.3 m production MFD.",
  },

  gaps: { "16": { label: "BF", values: [[36.106195, 39.764799]] } },

  aperture: { nominalFNumber: 2, fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  groups: [
    { text: "G1 negative", fromSurface: "1", toSurface: "6" },
    { text: "G2 positive", fromSurface: "7", toSurface: "8" },
    { text: "G3 positive", fromSurface: "9", toSurface: "16" },
  ],
  doublets: [],

  layout: { scFill: 0.62, yScFill: 0.78 },
} satisfies LensDataV2Input;

export default LENS_DATA;
