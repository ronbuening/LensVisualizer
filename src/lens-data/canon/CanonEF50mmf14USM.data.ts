import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon's JP H06-242370 A, Numerical Example 2. The printed radii and axial spacings
 * are multiplied by 50 to express the f = 1 prescription in millimetres. The table
 * gives the seven glass index and Abbe-number pairs. Its f/1.14 heading is a
 * misprint. The text and Figure 6 specify f/1.4, which sets the stop radius.
 * The division of D6 at the stop is estimated from the drawings. Clear radii follow
 * Figure 2: L2 is square-cut at 16.2 mm, and the figure's vertical lands carry L3's
 * rear face out to 15 mm and L4's front face out to 15.6 mm. R5 ends at 15 mm, where it
 * nearly meets R4. R7's curved face ends at 12.6 mm, within the figure's reading and
 * clear of the f/1.4 axial beam. The final air gap is the calculated d-line paraxial
 * back focal distance at infinity.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-ef-50mm-f14-usm",
  maker: "Canon",
  name: "CANON EF 50mm f/1.4 USM",
  subtitle: "JP H06-242370 A, Numerical Example 2 — Canon / Kato",
  visible: true,

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: ["7 ELEMENTS / 6 GROUPS", "ALL SPHERICAL", "DOUBLE GAUSS"],
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: { marketing: 50, design: 50 },
    fNumber: { marketing: 1.4, design: 1.4 },
    closeFocusM: { marketing: 0.45 },
  },

  source: {
    patentNumber: "JP H06-242370 A",
    example: { label: "Numerical Example 2", id: "2" },
    patentYear: 1994,
    authors: ["Masatake Kato"],
    assignees: ["Canon Inc."],
    errata: [
      {
        status: "unresolved",
        note: "All four tables print f/1.14. Paragraphs 0001 and 0020 and the aberration plots in Figures 5–8 give f/1.4. The f/1.14 axial marginal ray misses surface 6. The aperture follows the text and plots at f/1.4.",
      },
    ],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      glass: "S-LAH66 (Ohara equivalent)",
      focalLengthMm: 76.09,
      role: "Front positive meniscus. It shares the converging power ahead of the stop with L2; their balance sets back focus against barrel distortion.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      glass: "S-LAH55 (Ohara equivalent)",
      focalLengthMm: 72.32,
      role: "Second positive meniscus, slightly stronger than L1. The curvature of its rear face helps hold down sagittal flare.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.8,
      indexReference: "d",
      glass: "S-TIM22 (Ohara equivalent)",
      focalLengthMm: -37.66,
      role: "Negative meniscus. Its steep concave rear face, one of the two facing the stop, carries much of the correction of spherical aberration, astigmatism and Petzval sum.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      glass: "S-TIH6 (Ohara equivalent)",
      focalLengthMm: -21.68,
      role: "Negative, more dispersive member of the rear doublet. Its steep concave front face, opposite L3 across the stop, shares that correction.",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.757,
      vd: 47.8,
      indexReference: "d",
      glass: "S-LAM54 (Ohara equivalent)",
      focalLengthMm: 40.74,
      role: "Positive member of the rear doublet, cemented to L4 at a nearly flat interface. It offsets part of L4's negative power and is the first of three high-index positive elements behind the stop.",
      cemented: "C1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      indexReference: "d",
      glass: "S-LAH58 (Ohara equivalent)",
      focalLengthMm: 51.83,
      role: "High-index positive meniscus, convex to the image. It is the stronger of the two positive singlets behind the doublet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      glass: "S-LAH65V (Ohara equivalent)",
      focalLengthMm: 77.76,
      role: "Nearly symmetric biconvex singlet that provides the final convergence toward the image.",
    },
  ],

  surfaces: [
    { label: "1", R: 50.9595, d: 5.3175, sd: 19.2, medium: 1 },
    { label: "2", R: 365.759, d: 1.015, sd: 19.2 },
    { label: "3", R: 25.521, d: 4.9595, sd: 16.2, medium: 2 },
    { label: "4", R: 40.302, d: 1.1165, sd: 16.2 },
    { label: "5", R: 62.3045, d: 1.7985, sd: 15, medium: 3 },
    { label: "6", R: 17.3305, d: 8.958561828818294, sd: 12.9, rimExtensionSd: 15 },
    { label: "STO", R: "flat", d: 6.163438171181706 },
    { label: "7", R: -18.1055, d: 1.8755, sd: 12.6, rimExtensionSd: 15.6, medium: 4 },
    { label: "8", R: 508.7735, d: 6.1295, sd: 15.6, medium: 5 },
    { label: "9", R: -32.657, d: 0.1545, sd: 15.6 },
    { label: "10", R: -80.548, d: 4.138, sd: 16.2, medium: 6 },
    { label: "11", R: -29.886, d: 0.145, sd: 16.2 },
    { label: "12", R: 124.391, d: 2.9005, sd: 15.6, medium: 7 },
    { label: "13", R: -124.393, d: 37.5752097445, sd: 15.6 },
  ],

  focus: {
    closeFocusM: 1e15,
    description:
      "The patent gives spacings only at infinity, and the model stays focused there. The production lens focuses to 0.45 m by moving the whole optical assembly forward.",
  },

  aperture: {
    nominalFNumber: 1.4,
    fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 8,
  },

  groups: [
    { text: "Front group", fromSurface: "1", toSurface: "6" },
    { text: "Rear group", fromSurface: "7", toSurface: "13" },
  ],
  doublets: [{ text: "C1", fromSurface: "7", toSurface: "9" }],

  layout: { yScFill: 0.5 },
  checks: { gapSagFrac: 0.96 },
} satisfies LensDataV2Input;

export default LENS_DATA;
