import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LENS DATA — LEICA SUMMICRON 35mm f/2 I
 *
 * Source: US 3,006,249, Example II, Walter Mandler / Ernst Leitz Canada Limited.
 * Production match: strong convergent correlation to the first 8-element 35 mm Summicron, but no located
 * manufacturer source explicitly assigns Example II to the production lens.
 *
 * SCALE: The patent prescription is normalized to f = 100 mm. Every dimensional prescription value is uniformly
 * scaled by 0.35. There are no aspheres, so no coefficient scaling is needed. The resulting paraxial design EFL is
 * 35.225961 mm.
 *
 * STOP: Figure 2 places diaphragm 10 approximately at the midpoint of a3 = 10.9 mm. Because the patent does not
 * dimension the split, the modeled scaled gap 3.815 mm is split equally as 1.9075 mm + 1.9075 mm. The physical stop
 * diameter is unpublished. The stop radius is derived from the design f-number; this is not independent evidence of
 * diaphragm diameter. The design f-number 2.000000026 is the modeled f-number of the former paraxial stop calibration
 * to the patent F:2 target, retained in fNumber.design and nominalFNumber.
 *
 * SEMI-DIAMETERS: The patent publishes none. These are modeled from exact meridional ray envelopes for the infinity
 * state (full on-axis aperture plus the default fan at ±0.6 of the full-frame diagonal half-field), then constrained
 * by edge thickness, spherical rim slope, and cross-gap intrusion. They are construction values, not source clear
 * apertures.
 *
 * FOCUS: NO_INTERNAL_RECONSTRUCTION. Internal Example-II spacings remain fixed. For the selected Leica M2/M1
 * production variant, the final image-space gap alone varies from the infinity BFD to a paraxially solved 0.7112 m
 * (2 ft 4 in) unit-focus equivalent. Intermediate focusT states linearly interpolate this rear-gap representation;
 * they are viewer states, not a published focus-distance law. No internal floating motion is asserted.
 *
 * INDEX REFERENCE: The patent explicitly defines N_D at the sodium D line (~589.3 nm). The current schema accepts only
 * "d" or "e". indexReference: "d" below is therefore a schema-compatibility marker only; the stored numeric indices
 * remain the patent sodium-D values and must not be read as proof of a modern helium-d catalog melt.
 */

const LENS_DATA = {
  schema: 2,
  key: "leica-summicron-35mm-f2-i",
  maker: "Leica",
  name: "LEICA SUMMICRON 35mm f/2 I",
  subtitle: "US 3,006,249 Example II — scaled ×0.35; production correlation not manufacturer-confirmed",

  catalog: {
    lensMounts: ["leica-m"],
    imageFormat: "135-full-frame",
    specs: ["8 ELEMENTS / 6 GROUPS", "35.226 mm DESIGN EFL", "f/2.0", "62° PATENT FIELD"],
    elementCount: 8,
    groupCount: 6,
    focalLengthMm: { marketing: 35, design: 35.225961 },
    fNumber: { marketing: 2, design: 2.000000026 },
  },

  source: {
    patentNumber: "US 3,006,249",
    patentYear: 1961,
    authors: ["Walter Mandler"],
    assignees: ["Ernst Leitz Canada Limited"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element I",
      type: "Positive Meniscus",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      focalLengthMm: 123.692106,
      glass: "H-LaF3B (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Outer positive meniscus of the front half.",
      diagramLabel: "I",
    },
    {
      id: 2,
      name: "L2",
      label: "Element II",
      type: "Positive Meniscus",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      focalLengthMm: 19.070418,
      glass: "H-LaF3B (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Front member of the first cemented composite negative pair.",
      diagramLabel: "II",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element III",
      type: "Negative Meniscus",
      nd: 1.6477,
      vd: 33.88,
      indexReference: "d",
      focalLengthMm: -15.137974,
      glass: "H-ZF1 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Rear member of the first cemented composite negative pair.",
      diagramLabel: "III",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element IV",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.31,
      indexReference: "d",
      focalLengthMm: 121.820695,
      glass: "LAC10 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Positive meniscus adjacent to the diaphragm in the front half.",
      diagramLabel: "IV",
    },
    {
      id: 5,
      name: "L5",
      label: "Element V",
      type: "Positive Meniscus",
      nd: 1.72,
      vd: 50.31,
      indexReference: "d",
      focalLengthMm: 48.191255,
      glass: "LAC10 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Positive meniscus adjacent to the diaphragm in the rear half.",
      diagramLabel: "V",
    },
    {
      id: 6,
      name: "L6",
      label: "Element VI",
      type: "Negative Meniscus",
      nd: 1.6989,
      vd: 30.05,
      indexReference: "d",
      focalLengthMm: -16.867163,
      glass: "S-TIM35 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Front member of the second cemented composite negative pair.",
      diagramLabel: "VI",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element VII",
      type: "Positive Meniscus",
      nd: 1.788,
      vd: 47.44,
      indexReference: "d",
      focalLengthMm: 21.042373,
      glass: "N-LAF21 (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Rear member of the second cemented composite negative pair; patent composition is published.",
      diagramLabel: "VII",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element VIII",
      type: "Positive Meniscus",
      nd: 1.744,
      vd: 44.9,
      indexReference: "d",
      focalLengthMm: 76.200464,
      glass: "H-LaF3B (coordinate-compatible dispersion proxy; historical supplier unconfirmed)",
      apd: false,
      role: "Outer positive meniscus of the rear half.",
      diagramLabel: "VIII",
    },
  ],

  surfaces: [
    { label: "1", R: 29.015, d: 2.625, sd: 12, medium: 1 },
    { label: "2", R: 40.74, d: 0.231, sd: 11.2 },
    { label: "3", R: 12.635, d: 3.955, sd: 9.5, medium: 2 },
    { label: "4", R: 99.995, d: 1.12, sd: 9.4, medium: 3 },
    { label: "5", R: 8.89, d: 2.065, sd: 7 },
    { label: "6", R: 17.01, d: 1.68, sd: 6.8, medium: 4 },
    { label: "7", R: 20.23, d: 1.9075, sd: 6.5 },
    { label: "STO", R: "flat", d: 1.9075 },
    { label: "8", R: -44.905, d: 1.68, sd: 6.2, medium: 5 },
    { label: "9", R: -19.88, d: 1.26, sd: 6.1 },
    { label: "10", R: -10.01, d: 1.12, sd: 6.1, medium: 6 },
    { label: "11", R: -69.405, d: 3.955, sd: 7.8, medium: 7 },
    { label: "12", R: -13.72, d: 0.231, sd: 8.6 },
    { label: "13", R: -36.155, d: 5.005, sd: 9, medium: 8 },
    { label: "14", R: -23.38, sd: 10 },
  ],

  focus: {
    closeFocusM: 0.7112,
    description:
      "Approximate unit focus from infinity to 0.7112 m: all elements move together away from the fixed image plane. Intermediate distances are interpolated.",
  },

  gaps: { "14": { label: "BF", values: [[22.658268, 24.591778]] } },

  aperture: { nominalFNumber: 2.000000026, fStops: [2, 2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "7" },
    { text: "REAR", fromSurface: "8", toSurface: "14" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "10", toSurface: "12" },
  ],

  layout: { yScFill: 0.42 },
} satisfies LensDataV2Input;

export default LENS_DATA;
