import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Canon's JP 2019-070689 A gives Numerical Example 1-A as the master lens with
 * both converters withdrawn. Its seven elements match the layout of the 1993
 * EF 400mm f/5.6 L USM. Canon filed this converter design in 2017.
 * Pages 6–7 give the spherical radii, axial spacings, d-line glass data and
 * effective diameters at infinity in the original millimetre prescription.
 * Each clear radius is half the printed diameter. At the stop, the paraxial
 * f/5.80 aperture gives a 15.50 mm radius. The table gives 15.65 mm.
 * The image plane is at the printed 167.00 mm back focus. Ohara glasses
 * match the printed indices and Abbe numbers. The Super UD and UD positions
 * follow Canon's production drawing.
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-400mm-f56-l-usm",
  maker: "Canon",
  name: "CANON EF 400mm f/5.6 L USM",
  subtitle: "JP 2019-070689 A, Numerical Example 1A — Canon / Sugita",
  visible: true,

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    imageCircleMm: 43.28,
    specs: ["7 ELEMENTS / 6 GROUPS", "DESIGN f = 391.91 mm", "DESIGN F/5.8", "1 SUPER UD + 1 UD"],
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: { marketing: 400, design: 391.91 },
    fNumber: { marketing: 5.6, design: 5.8 },
    closeFocusM: { marketing: 3.5 },
  },

  source: {
    patentNumber: "JP 2019-070689 A",
    example: { label: "Numerical Example 1A", id: "1A" },
    patentYear: 2019,
    authors: ["Shigenobu Sugita"],
    assignees: ["Canon Inc."],
    sdSource: "source-table",
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      focalLengthMm: 168.15,
      glass: "S-FSL5 (OHARA)",
      role: "Collects the incoming beam and directs it into the Super UD meniscus.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 95,
      indexReference: "d",
      focalLengthMm: 269.75,
      glass: "S-FPL53 (OHARA)",
      role: "Adds positive power at the front with little chromatic spread.",
      apd: "inferred",
      apdNote: "Canon identifies its second element as Super UD, consistent with the printed Abbe number of 95.0.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7859,
      vd: 44.2,
      indexReference: "d",
      focalLengthMm: -141.91,
      glass: "S-LAH51 (OHARA)",
      role: "Reduces the convergence of the front pair before the long air space.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      focalLengthMm: 155.57,
      glass: "S-FPL51 (OHARA)",
      role: "Converges the beam after the long air space with little chromatic spread.",
      apd: "inferred",
      apdNote: "Canon's drawing marks this fourth element as UD, consistent with the printed Abbe number of 81.6.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      focalLengthMm: -221.18,
      glass: "S-BSM14 (OHARA)",
      role: "Reduces the convergence from L4 just ahead of the diaphragm.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      focalLengthMm: 204.28,
      glass: "S-TIH6 (OHARA)",
      role: "Positive front member of the cemented rear doublet.",
      cemented: "C1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: -90.65,
      glass: "S-LAL14 (OHARA)",
      role: "Gives the rear doublet its net negative power.",
      cemented: "C1",
    },
  ],
  surfaces: [
    { label: "1", R: "flat", d: 1.5, sd: 33.795 },
    { label: "2", R: 122.745, d: 10.5, sd: 33.795, medium: 1 },
    { label: "3", R: -239.839, d: 0.5, sd: 33.475 },
    { label: "4", R: 107.673, d: 7.3, sd: 31.84, medium: 2 },
    { label: "5", R: 1168.744, d: 1.95, sd: 31.14 },
    { label: "6", R: -350.082, d: 3.7, sd: 31.085, medium: 3 },
    { label: "7", R: 164.436, d: 53.38, sd: 29.96 },
    { label: "8", R: 65.795, d: 6.9, sd: 23.865, medium: 4 },
    { label: "9", R: 426.118, d: 0.25, sd: 23.25 },
    { label: "10", R: 67.46, d: 3.5, sd: 22.31, medium: 5 },
    { label: "11", R: 43.928, d: 29.62, sd: 20.805 },
    { label: "12", R: "flat", d: 5.2, sd: 16.555 },
    { label: "STO", R: "flat", d: 2.5 },
    { label: "14", R: 290.57, d: 3.5, sd: 15.145, medium: 6 },
    { label: "15", R: -377.01, d: 2, sd: 14.81, medium: 7 },
    { label: "16", R: 76.046, d: 167, sd: 14.34 },
  ],

  groups: [{ text: "MA", fromSurface: "1", toSurface: "16" }],
  doublets: [{ text: "C1", fromSurface: "14", toSurface: "16" }],

  focus: {
    closeFocusM: 1e15,
    description:
      "Canon's 2019 example gives the base lens at infinity. The production lens focuses internally to 3.5 m. The patent gives no finite-focus spacings.",
  },

  aperture: { nominalFNumber: 5.8, fStops: [5.8, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 8 },

  projection: { kind: "rectilinear", fullFieldDeg: 6.32, maxTraceFieldDeg: 3.16 },

  layout: { yScFill: 0.5 },
  checks: { gapSagFrac: 0.922 },
} satisfies LensDataV2Input;

export default LENS_DATA;
