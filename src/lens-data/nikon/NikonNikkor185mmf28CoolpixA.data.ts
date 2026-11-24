import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 9,915,803 B2, Example 1, Table 1 and Figures 1–2. The patent prints f = 1.00.
 * Radii, thicknesses, spacings and the image plane are scaled ×18.5, and each
 * aspheric coefficient of order n is divided by the scale factor to the power n−1.
 * The table specifies the stop position and both rear plates. The clear radii and
 * outer lands are read from Figure 1. The stop radius follows from the printed f/2.88.
 * The prescription describes infinity focus.
 */
const LENS_DATA = {
  schema: 2,
  key: "nikon-nikkor-185mm-f28-coolpix-a",
  name: "NIKON NIKKOR 18.5mm f/2.8 (Nikon COOLPIX A)",
  maker: "Nikon",
  visible: true,
  subtitle: "US 9,915,803 B2, Example 1 — scaled ×18.5; probable COOLPIX A design",

  catalog: {
    lensMounts: ["fixed-lens-camera"],
    imageFormat: "aps-c",
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: { marketing: 18.5, design: 18.5 },
    fNumber: { marketing: 2.8, design: 2.88 },
    closeFocusM: { marketing: 0.1 },
    specs: ["7 ELEMENTS / 5 GROUPS", "1 ASPHERICAL ELEMENT", "DESIGN F/2.88"],
  },

  source: {
    patentNumber: "US 9,915,803 B2",
    patentYear: 2018,
    example: { label: "Example 1", id: "1" },
    authors: ["Atsushi Suzuki"],
    assignees: ["Nikon Corporation"],
    sdSource: "figure-measured",
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.57957,
      vd: 53.74,
      indexReference: "d",
      focalLengthMm: -23.65,
      glass: "BAFL4 (Hoya)",
      role: "Negative front element that spreads the incoming bundle for the wide field.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.62,
      indexReference: "d",
      focalLengthMm: 25.1,
      glass: "J-LASF016 (Hikari)",
      role: "Positive lens ahead of the stop that counterbalances the power of L1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.883,
      vd: 40.66,
      indexReference: "d",
      focalLengthMm: 8.84,
      glass: "J-LASF08A (Hikari)",
      cemented: "C1",
      role: "Positive member of the converging doublet immediately behind the stop.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.13,
      indexReference: "d",
      focalLengthMm: -13.47,
      glass: "S-TIM35 (Ohara)",
      cemented: "C1",
      role: "Higher-dispersion negative lens that reduces the power of the first doublet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.69895,
      vd: 30.13,
      indexReference: "d",
      focalLengthMm: -11.94,
      glass: "S-TIM35 (Ohara)",
      cemented: "C2",
      role: "Higher-dispersion lens that gives the second doublet its negative power.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.755,
      vd: 52.33,
      indexReference: "d",
      focalLengthMm: 20.12,
      glass: "J-LASKH2 (Hikari)",
      cemented: "C2",
      role: "Positive lens that offsets some of L5's power before the rear meniscus.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus (1× Asph)",
      nd: 1.7905,
      vd: 45.01,
      indexReference: "d",
      focalLengthMm: 39.19,
      glass: "Unmatched (nd 1.79050 / νd 45.01)",
      role: "Rear positive meniscus with an aspherical image-side face for field curvature and astigmatism.",
    },
  ],

  surfaces: [
    { label: "1", R: 44.98275, d: 1.2099, sd: 10.05, medium: 1 },
    { label: "2", R: 10.4007, d: 7.7922, sd: 8.07, rimExtensionSd: 10.05 },
    { label: "3", R: 11.5292, d: 2.89155, sd: 5.9, medium: 2 },
    { label: "4", R: 25.32835, d: 2.31805, sd: 5, rimExtensionSd: 5.9 },
    { label: "STO", R: "flat", d: 1.18585 },
    { label: "6", R: 17.2975, d: 2.41055, sd: 4.59, medium: 3 },
    { label: "7", R: -13.29595, d: 0.60495, sd: 4.59, medium: 4 },
    { label: "8", R: 32.83935, d: 2.3162, sd: 4.83 },
    { label: "9", R: -10.7374, d: 0.70485, sd: 5.03, rimExtensionSd: 6.29, medium: 5 },
    { label: "10", R: 38.4541, d: 2.0461, sd: 6.29, medium: 6 },
    { label: "11", R: -24.52545, d: 0.20165, sd: 6.29 },
    { label: "12", R: -40.42805, d: 1.51145, sd: 6.96, medium: 7 },
    {
      label: "13A",
      R: -17.82845,
      d: 13.35515,
      sd: 6.96,
      asphere: {
        K: 0,
        A4: 1.6341776400213216e-4,
        A6: 1.4074766457299228e-6,
        A8: 8.187091875483689e-9,
        A10: -1.1885442611306995e-10,
      },
    },
  ],

  rearPlates: [
    {
      label: "Filter plate 1",
      thicknessMm: 1.84445,
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      glass: "BSC7 (Hoya)",
      gapAfterMm: 1.48185,
      sd: 14.84,
      source: "US 9,915,803 B2, Example 1, Table 1, surfaces 14–15",
    },
    {
      label: "Filter plate 2",
      thicknessMm: 0.70485,
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      glass: "BSC7 (Hoya)",
      gapAfterMm: 0.70485,
      sd: 15.67,
      source: "US 9,915,803 B2, Example 1, Table 1, surfaces 16–17",
    },
  ],

  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only. The patent gives a single set of lens spacings.",
  },

  aperture: { nominalFNumber: 2.88, fStops: [2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },
  doublets: [
    { text: "C1", fromSurface: "6", toSurface: "8" },
    { text: "C2", fromSurface: "9", toSurface: "11" },
  ],
  layout: { yScFill: 0.7 },
} satisfies LensDataV2Input;

export default LENS_DATA;
