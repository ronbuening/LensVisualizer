import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 4,257,678, Example 1 (Fig. 1 and col. 4). All lengths in the f = 1 table
 * are multiplied by 35 mm, including the printed back focus of 1.1033. The table
 * gives the radii, axial separations and d-line glass constants at infinity.
 * The diaphragm position is estimated at 24.50 mm behind R1, within the printed D5
 * space. Its clear radius follows from f/2.8. Nine clear radii are read from Fig. 1.
 * The beveled edges at R7 and R8 are too close to measure separately, so their clear
 * radii are estimated from the air clearance between the two spherical faces.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-new-fd-35mm-f28",
  maker: "Canon",
  visible: true,
  name: "CANON NEW FD 35mm f/2.8",
  subtitle: "US 4,257,678, Example 1 — Canon / Momiyama & Yokota",
  source: {
    patentNumber: "US 4,257,678",
    patentYear: 1981,
    example: {
      label: "Example 1",
      id: "1",
    },
    authors: ["Kikuo Momiyama", "Hideo Yokota"],
    assignees: ["Canon Inc."],
  },
  catalog: {
    lensMounts: ["canon-fd"],
    imageFormat: "135-full-frame",
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: {
      marketing: 35,
      design: 35.01,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    closeFocusM: {
      marketing: 0.35,
    },
    specs: ["6 ELEMENTS / 5 GROUPS", "ALL SPHERICAL", "DESIGN f = 35.01 mm", "RETROFOCUS"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.51633,
      vd: 64.1,
      indexReference: "d",
      focalLengthMm: -61.75,
      glass: "K-BK7 (SUMITA equivalent)",
      role: "Diverges the incoming beam and gives the lens its long back focus.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconvex Positive",
      nd: 1.8061,
      vd: 40.9,
      indexReference: "d",
      focalLengthMm: 14.76,
      glass: "S-LAH53 (OHARA equivalent)",
      role: "High-index front member of the positive doublet ahead of the diaphragm.",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38,
      indexReference: "d",
      focalLengthMm: -25.29,
      glass: "F5 (Schott equivalent)",
      role: "Negative member of the doublet. The curved cemented interface helps correct spherical aberration and coma.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.74077,
      vd: 27.8,
      indexReference: "d",
      focalLengthMm: -20.42,
      glass: "S-TIH13 (OHARA equivalent)",
      role: "Diverges the beam just behind the diaphragm before the two rear positive elements.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6935,
      vd: 53.3,
      indexReference: "d",
      focalLengthMm: 32.12,
      glass: "LAC13 (Hoya equivalent)",
      role: "The convex face points toward the image and supplies most of the convergence of this meniscus.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.3,
      indexReference: "d",
      focalLengthMm: 50.28,
      glass: "LAC13 (Hoya equivalent)",
      role: "Brings the beam to the image with most of its power at the rear face.",
    },
  ],
  surfaces: [
    { label: "1", R: 21.196, d: 1.7745, sd: 12.9, medium: 1 },
    { label: "2", R: 12.369, d: 15.099, sd: 10.8 },
    { label: "3", R: 34.5695, d: 4.1335, sd: 8.7, medium: 2 },
    { label: "4", R: -17.1815, d: 2.17, sd: 8.7, medium: 3 },
    { label: "5", R: 142.737, d: 1.323, sd: 8 },
    { label: "STO", R: "flat", d: 5.1765 },
    { label: "6", R: -18.935, d: 1.498, sd: 8.45, medium: 4 },
    { label: "7", R: 77.784, d: 0.7875, sd: 7.02 },
    { label: "8", R: -61.999, d: 2.786, sd: 7.04, medium: 5 },
    { label: "9", R: -16.688, d: 0.147, sd: 8.45 },
    { label: "10", R: 225.5715, d: 2.366, sd: 9.6, medium: 6 },
    { label: "11", R: -41.0725, d: 38.6155, sd: 9.6 },
  ],
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 5,
  },
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only. The patent gives one set of spacings. The production lens uses helicoid focusing to 0.35 m.",
  },
  groups: [
    { text: "G1", fromSurface: "1", toSurface: "2" },
    { text: "G2", fromSurface: "3", toSurface: "5" },
    { text: "G3", fromSurface: "6", toSurface: "7" },
    { text: "G4", fromSurface: "8", toSurface: "9" },
    { text: "G5", fromSurface: "10", toSurface: "11" },
  ],
  doublets: [{ text: "C1", fromSurface: "3", toSurface: "5" }],
  checks: {
    gapSagFrac: 0.91,
  },
  layout: {
    yScFill: 0.65,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
