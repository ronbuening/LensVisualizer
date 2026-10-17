import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║       LENS DATA — CANON TS-E 50mm f/2.8 L MACRO                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 10,571,651 B2, Numerical Data 1 (Hideki Sakai,    ║
 * ║  Canon Kabushiki Kaisha).                                          ║
 * ║                                                                    ║
 * ║  12 elements / 9 groups, all-spherical. Negative-positive-positive ║
 * ║  retrofocus tilt-shift macro design with three lens units.         ║
 * ║                                                                    ║
 * ║  Focus: all units move objectward from infinity to β = -0.5; L1    ║
 * ║  and L3 move together while L2 moves objectward by a smaller       ║
 * ║  amount. This is represented by variable d6, d10, and BF.          ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  The patent's "Effective diameter" entries are full clear          ║
 * ║  diameters. They are divided by two for surface `sd` values. The   ║
 * ║  Numerical Data 1 surface table prints a 29.80 mm effective        ║
 * ║  diameter at the stop; it is not the physical aperture diameter.   ║
 * ║  The patent quotes F/2.88, but the stop radius is derived from     ║
 * ║  aperture.nominalFNumber 2.8.                                      ║
 * ║                                                                    ║
 * ║  NOTE ON FIELD COVERAGE:                                           ║
 * ║  The patent image height is 33.63 mm (67.26 mm image circle), so   ║
 * ║  projection metadata declares the full patent field rather than    ║
 * ║  limiting tracing to the 36 x 24 mm centered full-frame diagonal.  ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-tse-50f28l-macro",
  maker: "Canon",
  name: "CANON TS-E 50mm f/2.8 L MACRO",
  subtitle: "US 10,571,651 B2 Numerical Data 1 — Canon / Hideki Sakai",

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "12 elements / 9 groups",
      "f = 51.40 mm design",
      "F/2.88 design; marketed f/2.8",
      "2ω = 66.4° patent field",
      "67.3 mm image circle",
      "0.5× close focus",
      "±12 mm shift / ±8.5° tilt",
    ],
    elementCount: 12,
    groupCount: 9,
    focalLengthMm: { marketing: 50, design: 51.397 },
    fNumber: { marketing: 2.8, design: 2.88 },
  },

  source: { patentNumber: "US 10,571,651 B2", patentYear: 2020, authors: ["Hideki Sakai"], assignees: ["Canon Inc."] },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5927,
      vd: 35.3,
      focalLengthMm: -81.9,
      glass: "S-FTM16 (OHARA)",
      role: "Front diverging meniscus of the retrofocus first unit.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.5927,
      vd: 35.3,
      focalLengthMm: -58.6,
      glass: "S-FTM16 (OHARA)",
      role: "Second negative element of the first unit; distributes front negative power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.7495,
      vd: 35.3,
      focalLengthMm: 48.5,
      glass: "S-LAM7 (OHARA)",
      role: "Strong positive element completing the weak negative first unit.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.65412,
      vd: 39.7,
      focalLengthMm: -76.0,
      glass: "S-NBH5 (OHARA)",
      role: "Negative part of the floating second unit.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.85478,
      vd: 24.8,
      focalLengthMm: 62.8,
      glass: "S-NBH56 (OHARA)",
      role: "High-index positive meniscus completing the weak positive floating second unit.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 39.5,
      glass: "S-FPL51 (OHARA)",
      role: "Positive ED crown component of the first L3a cemented doublet.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.8,
      vd: 29.8,
      focalLengthMm: -102.3,
      glass: "S-NBH55 (OHARA)",
      role: "Dense flint partner cemented to L6 for primary color correction.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: 33.5,
      glass: "S-PHM52 (OHARA)",
      role: "Symmetric crown element in the weak negative L3a field-correcting doublet.",
      cemented: "D2",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.65412,
      vd: 39.7,
      focalLengthMm: -26.3,
      glass: "S-NBH5 (OHARA)",
      role: "Flint component giving the second L3a doublet weak net negative power.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconcave Negative",
      nd: 1.95375,
      vd: 32.3,
      focalLengthMm: -17.9,
      glass: "S-LAH98 (OHARA)",
      role: "Very high-index negative component immediately behind the stop.",
      cemented: "D3",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.5,
      focalLengthMm: 36.8,
      glass: "S-FPL51 (OHARA)",
      role: "Second ED crown element; positive partner in the rear cemented doublet.",
      cemented: "D3",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Positive Meniscus",
      nd: 2.001,
      vd: 29.1,
      focalLengthMm: 47.9,
      glass: "S-LAH99 (OHARA)",
      role: "Final high-index positive meniscus controlling rear convergence and field behavior.",
    },
  ],

  surfaces: [
    { label: "1", R: 53.017, d: 2.6, sd: 24.8, medium: 1 },
    { label: "2", R: 24.876, d: 13.45, sd: 20.45 },
    { label: "3", R: -140.44, d: 2.2, sd: 20.1, medium: 2 },
    { label: "4", R: 46.402, d: 5.97, sd: 19.3 },
    { label: "5", R: 49.736, d: 9.35, sd: 19.8, medium: 3 },
    { label: "6", R: -124.558, sd: 19.9 },
    { label: "7", R: 71.41, d: 2.0, sd: 19.4, medium: 4 },
    { label: "8", R: 28.981, d: 6.9, sd: 16.15 },
    { label: "9", R: 33.591, d: 5.0, sd: 16.0, medium: 5 },
    { label: "10", R: 83.69, sd: 15.5 },
    { label: "11", R: 79.836, d: 8.4, sd: 14.15, medium: 6 },
    { label: "12", R: -25.138, d: 1.9, sd: 13.9, medium: 7 },
    { label: "13", R: -37.507, d: 0.2, sd: 14.05 },
    { label: "14", R: 40.0, d: 7.2, sd: 12.75, medium: 8 },
    { label: "15", R: -40.0, d: 1.3, sd: 11.75, medium: 9 },
    { label: "16", R: 30.497, d: 4.44, sd: 10.4 },
    // US 10,571,651 B2, Numerical Data 1 surface table, stop row: printed effective
    // diameter 29.80 mm at the stop.
    { label: "STO", R: "flat", d: 6.53 },
    { label: "18", R: -19.525, d: 1.2, sd: 8.8, medium: 10 },
    { label: "19", R: 139.306, d: 5.5, sd: 9.3, medium: 11 },
    { label: "20", R: -20.756, d: 0.4, sd: 10.5 },
    { label: "21", R: -477.536, d: 4.3, sd: 12.75, medium: 12 },
    { label: "22", R: -43.8, sd: 13.55 },
  ],

  focus: {
    closeFocusM: 0.273,
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: {
    "6": { label: "D6", values: [[1.01, 6.84]] },
    "10": { label: "D10", values: [[7.61, 1.78]] },
    "22": { label: "BF", values: [[55.96, 81.07]] },
  },

  aperture: { nominalFNumber: 2.8, fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },

  projection: { kind: "rectilinear", fullFieldDeg: 66.4, maxTraceFieldDeg: 33.2 },

  perspectiveControl: {
    shiftRangeMm: [-12, 12],
    tiltRangeDeg: [-8.5, 8.5],
    shiftStepMm: 0.1,
    tiltStepDeg: 0.1,
    // Reference-state rear vertex fallback; not a measured mechanical tilt hinge.
    tiltPivot: { frame: "camera", basis: "rear-vertex-fallback", zOffsetFromImagePlaneMm: -55.96 },
  },

  groups: [
    { text: "L1", fromSurface: "1", toSurface: "6" },
    { text: "L2", fromSurface: "7", toSurface: "10" },
    { text: "L3a", fromSurface: "11", toSurface: "16" },
    { text: "L3b", fromSurface: "18", toSurface: "22" },
  ],
  doublets: [
    { text: "D1", fromSurface: "11", toSurface: "13" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
    { text: "D3", fromSurface: "18", toSurface: "20" },
  ],

  layout: { scFill: 0.64, yScFill: 0.58 },
} satisfies LensDataV2Input;

export default LENS_DATA;
