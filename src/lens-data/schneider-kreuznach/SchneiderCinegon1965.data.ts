import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Schneider-Kreuznach Cinegon 6.5 mm f/1.9 — DE 927 540, Example 1.
 *
 * Source prescription: f = 1 normalized patent example, uniformly scaled by 6.5 mm.
 * The rounded table computes EFL = 6.497604437 mm; the source image plane remains
 * 8.5345 mm behind surface 14 rather than being silently refocused to the Gaussian BFD.
 *
 * Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes one fixed design state.
 * No focus var is authored. closeFocusM uses a schema-required static-model sentinel and
 * is not a production minimum-focus-distance claim.
 *
 * STO is not published. It is modeled at the midpoint of source gap a5, the widest rear
 * air space and the mechanically plausible gap immediately before the final positive lens.
 * Its radius is derived from the design f-number f/1.9; this is not independent evidence
 * of the physical diaphragm.
 *
 * No source semi-diameters are published. SDs are modeled from exact meridional full-field
 * (±25°) wide-open ray envelopes with clearance, then geometry-constrained for edge
 * thickness, actual spherical rim slope, and shared-band cross-gap clearance.
 *
 * Glass labels are coordinate classes only. The patent does not identify supplier/melt
 * and publishes no line indices or partial-dispersion data.
 */
const LENS_DATA = {
  schema: 2,
  key: "schneider-cinegon-65f19",
  maker: "Schneider-Kreuznach",
  name: "SCHNEIDER-KREUZNACH CINEGON 6.5mm f/1.9",
  subtitle: "DE 927 540 Example 1 — strong research correlation; not manufacturer-confirmed",

  catalog: {
    lensMounts: ["d-mount"],
    imageFormat: "normal-8",
    specs: ["8 ELEMENTS / 6 GROUPS", "ALL-SPHERICAL", "50° FULL FIELD", "f/1.9"],
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: { marketing: 6.5, design: 6.49760443712227 },
    fNumber: { marketing: 1.9, design: 1.9 },
  },

  source: {
    patentNumber: "DE 927 540",
    patentYear: 1955,
    authors: ["Wolfram W. Albrecht"],
    assignees: ["Jos. Schneider & Co., Optische Werke"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6727,
      vd: 32.2,
      indexReference: "d",
      focalLengthMm: 35.994503281436636,
      glass: "673322 flint class (supplier unresolved)",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.5101,
      vd: 63.4,
      indexReference: "d",
      focalLengthMm: -15.367234866734293,
      glass: "510634 crown class (supplier unresolved)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.6727,
      vd: 32.2,
      indexReference: "d",
      focalLengthMm: -60.405215983250116,
      glass: "673322 flint class (supplier unresolved)",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.5101,
      vd: 63.4,
      indexReference: "d",
      focalLengthMm: 30.293562542339696,
      glass: "510634 crown class (supplier unresolved)",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6204,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: 13.928291240195238,
      glass: "620603 crown class (supplier unresolved)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.6204,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: 29.612474239193332,
      glass: "620603 crown class (supplier unresolved)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.699,
      vd: 30.1,
      indexReference: "d",
      focalLengthMm: -5.299172206184146,
      glass: "699301 dense-flint class (supplier unresolved)",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.6385,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: 7.46125268813929,
      glass: "639555 crown class (supplier unresolved)",
    },
  ],

  surfaces: [
    { label: "1", R: 86.58, d: 6.0125, sd: 12.3, medium: 1 },
    { label: "2", R: -32.6755, d: 1.183, sd: 11.12, medium: 2 },
    { label: "3", R: 10.439, d: 25.22, sd: 8.25 },
    { label: "4", R: -53.027, d: 1.183, sd: 5.4, medium: 3 },
    { label: "5", R: 175.435, d: 2.3855, sd: 5.34, medium: 4 },
    { label: "6", R: -16.8675, d: 0.9555, sd: 5.28 },
    { label: "7", R: 9.139, d: 1.43, sd: 4.6, medium: 5 },
    { label: "8", R: -149.11, d: 0.026, sd: 4.45 },
    { label: "9", R: 5.46, d: 1.4105, sd: 3.62, medium: 6 },
    { label: "10", R: 7.0005, d: 0.962, sd: 3.01 },
    { label: "11", R: -18.2, d: 0.403, sd: 2.8, medium: 7 },
    { label: "12", R: 4.693, d: 0.9685, sd: 2.45 },
    { label: "STO", R: "flat", d: 0.9685 },
    { label: "13", R: 13.065, d: 1.5275, sd: 3.04, medium: 8 },
    { label: "14", R: -7.1565, d: 8.5345, sd: 3.14 },
  ],

  focus: {
    closeFocusM: 1000000000000000,
    description:
      "NO_INTERNAL_RECONSTRUCTION — static published design state only; production barrel focus is not modeled and the schema-required closeFocusM value is an infinity sentinel, not a product MFD.",
  },

  aperture: { nominalFNumber: 1.9, fStops: [1.9, 2.8, 4, 5.6, 8, 11, 16] },

  projection: { kind: "rectilinear", fullFieldDeg: 50, maxTraceFieldDeg: 25 },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "3" },
    { text: "G2", fromSurface: "4", toSurface: "6" },
    { text: "G3", fromSurface: "7", toSurface: "8" },
    { text: "G4", fromSurface: "9", toSurface: "10" },
    { text: "G5", fromSurface: "11", toSurface: "12" },
    { text: "G6", fromSurface: "13", toSurface: "14" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6" },
  ],

  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
