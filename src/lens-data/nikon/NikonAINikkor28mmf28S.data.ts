import type { LensDataInput } from "../../types/optics.js";

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
  key: "nikon-ai-nikkor-28mm-f28s",
  maker: "Nikon",
  name: "NIKON AI NIKKOR 28mm f/2.8S",
  subtitle: "US 5,917,663 Example 2 - Nikon / Kenzaburo Suzuki",
  specs: ["8 elements / 8 groups", "f = 28.610 mm", "FNO = 2.89", "2omega = 74.1 deg", "all-spherical"],

  focalLengthMarketing: 28,
  focalLengthDesign: 28.6097,
  apertureMarketing: 2.8,
  apertureDesign: 2.89,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 5,917,663",
  patentAuthors: ["Kenzaburo Suzuki"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1999,
  elementCount: 8,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.67003,
      vd: 47.07,
      fl: 180.42,
      glass: "N-BAF10 (SCHOTT; J-BAF10 class)",
      ng: 1.68806,
      role: "Weak positive front meniscus; front-group distortion and field corrector.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.1,
      fl: -52.39,
      glass: "N-BK7 (SCHOTT; J-BK7A class)",
      ng: 1.52669,
      role: "First strong negative retrofocus meniscus in GF.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.1,
      fl: -65.74,
      glass: "N-BK7 (SCHOTT; J-BK7A class)",
      ng: 1.52669,
      role: "Second negative retrofocus meniscus in GF.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Plano-Convex",
      nd: 1.66755,
      vd: 41.96,
      fl: 42.84,
      glass: "J-BASF6 (HIKARI)",
      ng: 1.68787,
      role: "First rear-group positive element; begins reconvergence after GF.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Plano-Convex",
      nd: 1.62041,
      vd: 60.14,
      fl: 54.75,
      glass: "S-BSM16 (OHARA; J-SK16 class)",
      ng: 1.63314,
      role: "Positive element before the aperture stop; CRC partner interval follows L4 in production.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7552,
      vd: 27.61,
      fl: -19.51,
      glass: "SF4 (SCHOTT; J-SF4 class)",
      ng: 1.79112,
      role: "Strong post-stop dense flint negative element for Petzval and chromatic balancing.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.67025,
      vd: 57.53,
      fl: 41.86,
      glass: "Unmatched J-LAK02 class (HIKARI nearest)",
      ng: 1.68466,
      role: "Front element of the patent GLP image-stabilizing subgroup.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.67025,
      vd: 57.53,
      fl: 39.75,
      glass: "Unmatched J-LAK02 class (HIKARI nearest)",
      ng: 1.68466,
      role: "Rear element of GLP and final converging element before the image plane.",
    },
  ],

  surfaces: [
    { label: "1", R: 60.5, d: 3.5, nd: 1.67003, elemId: 1, sd: 24.5 },
    { label: "2", R: 118.3, d: 0.1, nd: 1.0, elemId: 0, sd: 24.5 },
    { label: "3", R: 36.9, d: 1.5, nd: 1.5168, elemId: 2, sd: 13.5 },
    { label: "4", R: 15.4, d: 4.0, nd: 1.0, elemId: 0, sd: 12.6 },
    { label: "5", R: 28.2, d: 1.5, nd: 1.5168, elemId: 3, sd: 13.2 },
    { label: "6", R: 15.13, d: 14.4, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "7", R: 28.6, d: 4.4, nd: 1.66755, elemId: 4, sd: 12.0 },
    { label: "8", R: 1e15, d: 1.35, nd: 1.0, elemId: 0, sd: 12.0 },
    { label: "9", R: 1e15, d: 4.0, nd: 1.62041, elemId: 5, sd: 10.8 },
    { label: "10", R: -33.97, d: 1.0, nd: 1.0, elemId: 0, sd: 10.8 },
    { label: "STO", R: 1e15, d: 4.3, nd: 1.0, elemId: 0, sd: 6.7245 },
    { label: "12", R: -20.8, d: 2.55, nd: 1.7552, elemId: 6, sd: 8.2 },
    { label: "13", R: 53.18, d: 1.0, nd: 1.0, elemId: 0, sd: 6.6 },
    { label: "14", R: -46.001, d: 3.1, nd: 1.67025, elemId: 7, sd: 7.4 },
    { label: "15", R: -17.9, d: 0.1, nd: 1.0, elemId: 0, sd: 8.5 },
    { label: "16", R: 109.097, d: 3.5, nd: 1.67025, elemId: 8, sd: 9.3 },
    { label: "17", R: -34.8, d: 38.9793, nd: 1.0, elemId: 0, sd: 9.7 },
  ],

  asph: {},

  var: {
    "17": [38.9793, 46.3152],
  },
  varLabels: [["17", "BF"]],

  groups: [
    { text: "GF", fromSurface: "1", toSurface: "6" },
    { text: "GL", fromSurface: "7", toSurface: "17" },
    { text: "GLP", fromSurface: "14", toSurface: "17" },
  ],

  doublets: [],

  closeFocusM: 0.2,
  focusDescription:
    "Production CRC changes the L4-L5 interval while the whole lens extends; patent Example 2 lists only infinity spacing, so close focus is approximated by BFD extension to the published 1:3.9 reproduction ratio.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,

  scFill: 0.58,
  yScFill: 0.56,
} satisfies LensDataInput;

export default LENS_DATA;
