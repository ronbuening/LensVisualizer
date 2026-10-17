import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Nikon AI Nikkor 28mm f/2.8S
 *
 * Data source: US 5,917,663, Example 2 (Kenzaburo Suzuki / Nikon Corporation).
 * The patent example is an 8-element / 8-group all-spherical retrofocus wide-angle
 * with a two-element GLP group described for rotational image stabilization.
 *
 * Production identification: AI Nikkor 28mm f/2.8S, matched by focal length,
 * aperture, 8/8 construction, all-spherical prescription, positive convex front
 * element, and Nikon-documented CRC close-range correction architecture.
 * The production lens does not include the patent's image-stabilizing mechanism.
 *
 * Focus note: the production lens uses CRC by changing the L4-L5 interval while
 * the whole lens extends. The patent publishes only the infinity prescription,
 * so this file models close focus as approximate BFD extension only. Close-focus
 * BFD is estimated from Nikon's published 1:3.9 maximum reproduction ratio.
 *
 * Semi-diameter note: the patent does not publish clear apertures. Semi-diameters
 * below are conservative rendering estimates constrained by a 52 mm filter thread,
 * paraxial/meridional ray heights, element-ratio sanity, sd/|R| < 0.90, edge
 * thickness, and signed cross-gap sag clearance. They should not be read as
 * measured Nikon mechanical clear apertures.
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-ai-nikkor-28mm-f28s",
  maker: "Nikon",
  name: "NIKON AI NIKKOR 28mm f/2.8 S",
  subtitle: "US 5,917,663 Example 2 - Nikon / Kenzaburo Suzuki",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "135-full-frame",
    specs: ["8 elements / 8 groups", "f = 28.610 mm", "FNO = 2.89", "2omega = 74.1 deg", "all-spherical"],
    elementCount: 8,
    groupCount: 8,
    focalLengthMm: { marketing: 28, design: 28.6097 },
    fNumber: { marketing: 2.8, design: 2.89 },
  },

  source: {
    patentNumber: "US 5,917,663",
    patentYear: 1999,
    authors: ["Kenzaburo Suzuki"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.67003,
      vd: 47.07,
      focalLengthMm: 180.42,
      glass: "N-BAF10 (SCHOTT; J-BAF10 class)",
      role: "Weak positive front meniscus; front-group distortion and field corrector.",
      ng: 1.68806,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.1,
      focalLengthMm: -52.39,
      glass: "N-BK7 (SCHOTT; J-BK7A class)",
      role: "First strong negative retrofocus meniscus in GF.",
      ng: 1.52669,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.1,
      focalLengthMm: -65.74,
      glass: "N-BK7 (SCHOTT; J-BK7A class)",
      role: "Second negative retrofocus meniscus in GF.",
      ng: 1.52669,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex",
      nd: 1.66755,
      vd: 41.96,
      focalLengthMm: 42.84,
      glass: "J-BASF6 (HIKARI)",
      role: "First rear-group positive element; begins reconvergence after GF.",
      ng: 1.68787,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Convex",
      nd: 1.62041,
      vd: 60.14,
      focalLengthMm: 54.75,
      glass: "S-BSM16 (OHARA; J-SK16 class)",
      role: "Positive element before the aperture stop; CRC partner interval follows L4 in production.",
      ng: 1.63314,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.61,
      focalLengthMm: -19.51,
      glass: "SF4 (SCHOTT; J-SF4 class)",
      role: "Strong post-stop dense flint negative element for Petzval and chromatic balancing.",
      ng: 1.79112,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.67025,
      vd: 57.53,
      focalLengthMm: 41.86,
      glass: "J-LAK02 (HIKARI catalog equivalent; patent coordinate)",
      role: "Front element of the patent GLP image-stabilizing subgroup.",
      ng: 1.68466,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.67025,
      vd: 57.53,
      focalLengthMm: 39.75,
      glass: "J-LAK02 (HIKARI catalog equivalent; patent coordinate)",
      role: "Rear element of GLP and final converging element before the image plane.",
      ng: 1.68466,
    },
  ],

  surfaces: [
    { label: "1", R: 60.5, d: 3.5, sd: 24.5, medium: 1 },
    { label: "2", R: 118.3, d: 0.1, sd: 24.5 },
    { label: "3", R: 36.9, d: 1.5, sd: 13.5, medium: 2 },
    { label: "4", R: 15.4, d: 4.0, sd: 12.6 },
    { label: "5", R: 28.2, d: 1.5, sd: 13.2, medium: 3 },
    { label: "6", R: 15.13, d: 14.4, sd: 13.2 },
    { label: "7", R: 28.6, d: 4.4, sd: 12.0, medium: 4 },
    { label: "8", R: "flat", d: 1.35, sd: 12.0 },
    { label: "9", R: "flat", d: 4.0, sd: 10.8, medium: 5 },
    { label: "10", R: -33.97, d: 1.0, sd: 10.8 },
    { label: "STO", R: "flat", d: 4.3 },
    { label: "12", R: -20.8, d: 2.55, sd: 8.2, medium: 6 },
    { label: "13", R: 53.18, d: 1.0, sd: 6.6 },
    { label: "14", R: -46.001, d: 3.1, sd: 7.4, medium: 7 },
    { label: "15", R: -17.9, d: 0.1, sd: 8.5 },
    { label: "16", R: 109.097, d: 3.5, sd: 9.3, medium: 8 },
    { label: "17", R: -34.8, sd: 9.7 },
  ],

  focus: {
    closeFocusM: 0.2,
    description:
      "Production CRC changes the L4-L5 interval while the whole lens extends; patent Example 2 lists only infinity spacing, so close focus is approximated by BFD extension to the published 1:3.9 reproduction ratio.",
  },

  gaps: { "17": { label: "BF", values: [[38.9793, 46.3152]] } },

  aperture: { nominalFNumber: 2.89, fStops: [2.89, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  groups: [
    { text: "GF", fromSurface: "1", toSurface: "6" },
    { text: "GL", fromSurface: "7", toSurface: "17" },
    { text: "GLP", fromSurface: "14", toSurface: "17" },
  ],
  doublets: [],

  layout: { scFill: 0.58, yScFill: 0.56 },
} satisfies LensDataV2Input;

export default LENS_DATA;
