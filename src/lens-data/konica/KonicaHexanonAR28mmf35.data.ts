import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 4,170,403, Example 3. A scale factor of 28 converts the f = 1 table to
 * millimetres, including the stop position and the printed infinity back focus.
 * Figure 5 supplies the clear radii. Surfaces 6 and 7 end at 5.0 mm to keep
 * their spherical faces apart. Flat lands carry the rear of L1 to its 13.3 mm
 * edge and L3 and L4 to their shared 6.05 mm edge, as Figure 5 draws them.
 * The stop radius follows from f/3.5.
 * Only infinity is tabulated. The 0.30 m setting assumes the five elements
 * move together and preserves the infinity offset from paraxial focus.
 */
const LENS_DATA = {
  schema: 2,
  key: "konica-hexanon-ar-28mm-f35",
  maker: "Konica",
  visible: true,
  name: "KONICA HEXANON AR 28mm f/3.5",
  subtitle: "US 4,170,403, Example 3 — Konishiroku / Shimokura (late 5-element, 5-group f/22 version, 703-191)",

  source: {
    patentNumber: "US 4,170,403",
    patentYear: 1979,
    example: { label: "Example 3", id: "3" },
    authors: ["Toshiko Shimokura"],
    assignees: ["Konishiroku Photo Industry Co., Ltd."],
    sdSource: "figure-measured",
  },

  catalog: {
    lensMounts: ["konica-ar"],
    imageFormat: "135-full-frame",
    imageCircleMm: 42.29,
    elementCount: 5,
    groupCount: 5,
    focalLengthMm: { marketing: 28, design: 28.01 },
    fNumber: { marketing: 3.5, design: 3.5 },
    closeFocusM: { marketing: 0.3 },
    specs: ["5 ELEMENTS / 5 GROUPS", "ALL SPHERICAL", "75° FIELD"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.5891,
      vd: 61.1,
      indexReference: "d",
      focalLengthMm: -36.17,
      glass: "S-BAL35 (OHARA)",
      role: "The front meniscus diverges the incoming beam to lengthen the back focus.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 43.7,
      indexReference: "d",
      focalLengthMm: 20.99,
      glass: "S-LAM52 (OHARA)",
      role: "The thick biconvex element turns the diverging beam toward the stop.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7847,
      vd: 26.2,
      indexReference: "d",
      focalLengthMm: -14.09,
      glass: "PBH23 (OHARA)",
      role: "The dispersive negative element spreads the beam across the rear menisci.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 40.9,
      indexReference: "d",
      focalLengthMm: 28.37,
      glass: "S-LAH53 (OHARA)",
      role: "The first rear meniscus supplies positive power and helps correct barrel distortion.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.623,
      vd: 58.2,
      indexReference: "d",
      focalLengthMm: 37.59,
      glass: "S-BSM15 (OHARA)",
      role: "The final meniscus shares the distortion correction and converges the beam onto the film.",
    },
  ],

  surfaces: [
    { label: "1", R: 30.2652, d: 1.4644, sd: 13.3, medium: 1 },
    { label: "2", R: 12.2808, d: 13.6808, sd: 10.45, rimExtensionSd: 13.3 },
    { label: "3", R: 22.6128, d: 5.8632, sd: 7.6, medium: 2 },
    { label: "4", R: -40.642, d: 2.436, sd: 7.6 },
    { label: "STO", R: "flat", d: 2.254 },
    { label: "5", R: -15.3048, d: 1.9544, sd: 5.25, rimExtensionSd: 6.05, medium: 3 },
    { label: "6", R: 42.0252, d: 0.5852, sd: 5.0, rimExtensionSd: 6.05 },
    { label: "7", R: -55.2944, d: 1.9544, sd: 5.0, rimExtensionSd: 6.05, medium: 4 },
    { label: "8", R: -16.4332, d: 0.098, sd: 6.05 },
    { label: "9", R: -64.3104, d: 1.9544, sd: 7.2, medium: 5 },
    { label: "10", R: -17.3684, sd: 7.2 },
  ],

  aperture: {
    nominalFNumber: 3.5,
    fStops: [3.5, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 6,
  },
  focus: {
    closeFocusM: 0.3,
    description:
      "Only infinity is tabulated in the patent. At 0.30 m the model moves all five elements 3.469 mm toward the subject.",
  },
  gaps: { "10": { label: "BF", values: [[34.748, 38.2168]] } },

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "4" },
    { text: "G3", fromSurface: "5", toSurface: "6" },
    { text: "G4", fromSurface: "7", toSurface: "8" },
    { text: "G5", fromSurface: "9", toSurface: "10" },
  ],
  doublets: [],
  layout: { yScFill: 0.65 },
} satisfies LensDataV2Input;

export default LENS_DATA;
