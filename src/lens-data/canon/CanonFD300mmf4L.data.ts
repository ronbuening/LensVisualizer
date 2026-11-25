import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 4,251,133, Numerical Example 4 (Sadahiko Tsuji, Canon). The patent uses
 * f = 1. All lengths are scaled ×300 to millimetres, including the printed
 * diaphragm position and back focus. The table gives d-line glass data and
 * infinity spacings for six air-spaced lenses. Canon's seven elements in seven
 * groups include the front protective flat. Neither it nor the removable rear
 * filter is dimensioned in the patent, so both are omitted.
 *
 * The clear radii follow Figure 4, enlarged where the axial f/4 marginal ray
 * requires more clearance. The diaphragm radius is calculated from f/4.
 * Figure 12 shows aberrations at 10f without giving the focusing-group travel.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-fd-300mm-f4-l",
  maker: "Canon",
  visible: true,
  name: "CANON FD 300mm f/4 L",
  subtitle: "US 4,251,133, Numerical Example 4 — Canon / Tsuji",
  source: {
    patentNumber: "US 4,251,133",
    patentYear: 1981,
    example: { label: "Numerical Example 4", id: "4" },
    authors: ["Sadahiko Tsuji"],
    assignees: ["Canon Inc."],
  },
  catalog: {
    lensMounts: ["canon-fd"],
    imageFormat: "135-full-frame",
    elementCount: 7,
    groupCount: 7,
    focalLengthMm: { marketing: 300, design: 300.11 },
    fNumber: { marketing: 4, design: 4 },
    closeFocusM: { marketing: 3 },
    specs: ["7 ELEMENTS / 7 GROUPS", "ALL SPHERICAL", "2 UD ELEMENTS", "DESIGN f = 300.11 mm", "REAR FOCUS"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.3,
      indexReference: "d",
      focalLengthMm: 153.66,
      glass: "K-PFK80 (SUMITA)",
      apd: "inferred",
      apdNote: "The FD L glass diagram identifies the first positive lens as ultra-low dispersion.",
      role: "Provides the strongest positive power in the front group with low chromatic dispersion.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.8061,
      vd: 40.9,
      indexReference: "d",
      focalLengthMm: -169.5,
      glass: "S-LAH53 (OHARA)",
      role: "Its negative power and higher dispersion balance the colour of the two positive front lenses.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.3,
      indexReference: "d",
      focalLengthMm: 205.68,
      glass: "K-PFK80 (SUMITA)",
      apd: "inferred",
      apdNote: "The FD L glass diagram identifies the third lens as the second ultra-low-dispersion positive.",
      role: "Shares the front group's converging power with L1 and directs the beam toward the rear group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.58913,
      vd: 61.1,
      indexReference: "d",
      focalLengthMm: -1030.31,
      glass: "S-BAL35 (OHARA)",
      role: "Weakens the convergence of the beam ahead of the fixed diaphragm.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.3,
      indexReference: "d",
      focalLengthMm: 113,
      glass: "S-FTM16 (OHARA)",
      role: "Positive member of the rear focusing pair, air-spaced from L6.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      focalLengthMm: -67.22,
      glass: "S-LAH66 (OHARA)",
      role: "Supplies the net negative power of the moving pair.",
    },
  ],
  surfaces: [
    { label: "1", R: 186.27, d: 12.27, sd: 37.6, medium: 1 },
    { label: "2", R: -126.6, d: 3.45, sd: 37.6 },
    { label: "3", R: -121.29, d: 4.26, sd: 36.4, medium: 2 },
    { label: "4", R: -1096.92, d: 3.87, sd: 36.4 },
    { label: "5", R: 122.25, d: 10.05, sd: 36.1, medium: 3 },
    { label: "6", R: -606.93, d: 63.03, sd: 36.1 },
    { label: "7", R: 29.07, d: 4.47, sd: 20.4, medium: 4 },
    { label: "8", R: 26.16, d: 15.06, sd: 20.4 },
    { label: "STO", R: "flat", d: 2.19 },
    { label: "9", R: 75.93, d: 3.66, sd: 16.3, medium: 5 },
    { label: "10", R: -557.91, d: 2.04, sd: 16.3 },
    { label: "11", R: -866.25, d: 1.74, sd: 16.4, medium: 6 },
    { label: "12", R: 55.29, d: 116.52, sd: 16.4 },
  ],
  aperture: { nominalFNumber: 4, fStops: [4, 5.6, 8, 11, 16, 22, 32], maxFNumber: 32, blades: 9 },
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity focus only. L5 and L6 move together in the production lens. The patent tabulates their position only at infinity.",
  },
  groups: [
    { text: "Front group", fromSurface: "1", toSurface: "6" },
    { text: "Fixed rear subgroup", fromSurface: "7", toSurface: "8" },
    { text: "Focusing subgroup", fromSurface: "9", toSurface: "12" },
  ],
  doublets: [],
  layout: { yScFill: 0.65 },
} satisfies LensDataV2Input;

export default LENS_DATA;
