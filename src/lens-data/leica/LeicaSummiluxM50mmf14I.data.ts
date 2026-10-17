import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * LEICA SUMMILUX-M 50mm f/1.4 — DE 1 045 120 B, Example 1.
 *
 * Source prescription: DE1045120, normalized at f = 100 and uniformly scaled ×0.5 for the 50 mm product model.
 * All radii, thicknesses, air gaps, and the computed image-plane spacing are scaled by ×0.5; indices and νe are
 * unchanged.
 * The source is all-spherical, so there are no asphere coefficients to transform.
 *
 * Stop: the patent gives only the topology (between the two cemented negative menisci), not a numerical stop coordinate
 * or diameter. STO is placed at the midpoint of scaled a2 = 10.125 mm, splitting it 5.0625 + 5.0625 mm. The stop radius
 * is derived from the design f-number, the published f/1.4. This is not independent evidence of the physical iris.
 *
 * Semi-diameters: modeled, not patent-published. They contain the default LensVisualizer on-axis fan (±0.83 pupil)
 * and the default off-axis fan (±0.75 pupil) at 0.6 × the published 22.5° half-field, with at least 0.52 mm radial
 * clearance in an independent exact spherical trace. Full-field vignetting therefore remains model-dependent.
 *
 * Focus: NO_INTERNAL_RECONSTRUCTION. DE1045120 publishes no finite-focus spacing state. closeFocusM = 1.0 is historical
 * product metadata from the October 1961 Leitz dealer catalogue; no internal focus movement is modeled.
 */

const LENS_DATA = {
  schema: 2,
  key: "leica-summilux-m-50mm-f14-i",
  maker: "Leica",
  name: "LEICA SUMMILUX-M 50mm f/1.4 I",
  subtitle: "DE 1 045 120 B — Example 1; first-version Summilux-M 50mm f/1.4 correlation",

  catalog: {
    lensMounts: ["leica-m"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 5 GROUPS", "f = 49.811 mm (scaled design)", "f/1.4", "45° published image angle"],
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: { marketing: 50, design: 49.811269597096 },
    fNumber: { marketing: 1.4, design: 1.4 },
  },

  source: {
    patentNumber: "DE 1 045 120 B",
    patentYear: 1958,
    authors: ["Otto Zimmermann", "Gustav Kleineberg", "Eugen Hermanni"],
    assignees: ["Ernst Leitz GmbH"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element I",
      type: "Positive Meniscus",
      nd: 1.79128,
      vd: 47.4,
      indexReference: "e",
      focalLengthMm: 74.364122,
      glass: "Unmatched (Leitz rare-earth borate glass; composition published in DE1045120)",
      diagramLabel: "I",
    },
    {
      id: 2,
      name: "L2",
      label: "Element II",
      type: "Positive Meniscus",
      nd: 1.64515,
      vd: 57.8,
      indexReference: "e",
      focalLengthMm: 43.360891,
      glass: "LAK6 class (coordinate-compatible spectral proxy; native e 1.64515/57.8; supplier/melt unproven)",
      diagramLabel: "II",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element III",
      type: "Negative Meniscus",
      nd: 1.69416,
      vd: 30.9,
      indexReference: "e",
      focalLengthMm: -27.534801,
      glass: "SF8/ZF10 class (supplier unconfirmed)",
      diagramLabel: "III",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element IV",
      type: "Biconcave Negative",
      nd: 1.67158,
      vd: 32.9,
      indexReference: "e",
      focalLengthMm: -19.31102,
      glass: "H-ZF39 / S-TIM39 class (supplier unconfirmed)",
      diagramLabel: "IV",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "Element V",
      type: "Biconvex Positive",
      nd: 1.74793,
      vd: 44.7,
      indexReference: "e",
      focalLengthMm: 23.982502,
      glass: "LAF2 / S-LAM2 class (supplier unconfirmed)",
      diagramLabel: "V",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element VI",
      type: "Biconvex Positive",
      nd: 1.79128,
      vd: 47.4,
      indexReference: "e",
      focalLengthMm: 85.953938,
      glass: "Unmatched (Leitz rare-earth borate glass; composition published in DE1045120)",
      diagramLabel: "VI",
    },
    {
      id: 7,
      name: "L7",
      label: "Element VII",
      type: "Biconvex Positive",
      nd: 1.79128,
      vd: 47.4,
      indexReference: "e",
      focalLengthMm: 108.819465,
      glass: "Unmatched (Leitz rare-earth borate glass; composition published in DE1045120)",
      diagramLabel: "VII",
    },
  ],

  surfaces: [
    { label: "1", R: 46.531, d: 6.125, sd: 19.5, medium: 1 },
    { label: "2", R: 209.4575, d: 1.25, sd: 18.5 },
    { label: "3", R: 21.1635, d: 7.375, sd: 15.0, medium: 2 },
    { label: "4", R: 75.047, d: 2.798, sd: 13.25, medium: 3 },
    { label: "5", R: 15.001, d: 5.0625, sd: 10.0 },
    { label: "STO", R: "flat", d: 5.0625 },
    { label: "6", R: -19.3885, d: 2.029, sd: 9.5, medium: 4 },
    { label: "7", R: 40.8155, d: 7.625, sd: 11.5, medium: 5 },
    { label: "8", R: -29.4425, d: 0.25, sd: 12.75 },
    { label: "9", R: 291.594, d: 3.375, sd: 13.5, medium: 6 },
    { label: "10", R: -88.25, d: 0.25, sd: 13.75 },
    { label: "11", R: 150.123, d: 2.548, sd: 14.0, medium: 7 },
    { label: "12", R: -200.4125, d: 27.211066837388, sd: 14.0 },
  ],

  focus: {
    closeFocusM: 1.0,
    description: "Focus travel is not modeled: patent infinity state only; 1.0 m is historical product metadata.",
  },

  aperture: { nominalFNumber: 1.4, fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16] },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "8" },
    { text: "G4", fromSurface: "9", toSurface: "10" },
    { text: "G5", fromSurface: "11", toSurface: "12" },
  ],
  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],

  layout: { yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
