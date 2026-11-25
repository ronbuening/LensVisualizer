import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * JP S47-8749 B, Example 3, is a probable match for the Canon FD 300mm f/5.6 S.C.
 * All lengths use the same ×3 scale from the patent's f = 100 to a nominal 300 mm.
 * The table gives eleven spherical radii, ten spacings and six glasses at infinity.
 * Its N and V have no spectral subscript. The named glasses support a d-line reading.
 * Figure 5 supplies the clear radii and places the diaphragm 77.04 mm behind the first
 * vertex. Its 13.12 mm radius follows from f/5.6. The image lies at paraxial infinity
 * focus, 73.4384 mm behind surface 11. The printed total length implies 73.152 mm.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-fd-300mm-f56-sc",
  maker: "Canon",
  name: "CANON FD 300mm f/5.6 S.C.",
  subtitle: "JP S47-8749 B, Example 3 — Canon / Suwa",
  visible: true,
  catalog: {
    lensMounts: ["canon-fd"],
    imageFormat: "135-full-frame",
    specs: ["6 ELEMENTS / 5 GROUPS", "ALL SPHERICAL", "DESIGN f = 300.47 mm"],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: {
      marketing: 300,
      design: 300.47,
    },
    fNumber: {
      marketing: 5.6,
      design: 5.6,
    },
    closeFocusM: {
      marketing: 4,
    },
  },
  source: {
    patentNumber: "JP S47-8749 B",
    example: {
      label: "Example 3",
      id: "3",
    },
    patentYear: 1972,
    authors: ["Michiyoshi Suwa"],
    assignees: ["Canon Inc."],
    sdSource: "figure-measured",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70,
      indexReference: "d",
      glass: "Unmatched (nd 1.48749 / νd 70.0)",
      focalLengthMm: 122.13,
      role: "The strongly curved front face starts the convergence of the incoming beam.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70,
      indexReference: "d",
      glass: "Unmatched (nd 1.48749 / νd 70.0)",
      focalLengthMm: 174.37,
      role: "Shares the positive power of the front group with L1 across a narrow air gap.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.7859,
      vd: 44,
      indexReference: "d",
      glass: "NBFD11 (Hoya catalog equivalent)",
      focalLengthMm: -49.92,
      role: "Strong negative member of the cemented doublet at the back of the front group.",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.47069,
      vd: 67.2,
      indexReference: "d",
      glass: "Unmatched (nd 1.47069 / νd 67.2)",
      focalLengthMm: 128.66,
      role: "Lower-dispersion positive partner to L3. The cemented pair has net negative power.",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      glass: "LAC8 (Hoya catalog equivalent)",
      focalLengthMm: -57.72,
      role: "Diverges the converging beam behind the diaphragm and supplies the rear group's negative power.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.4,
      indexReference: "d",
      glass: "FF5 (Hoya catalog equivalent)",
      focalLengthMm: 87.3,
      role: "Partly offsets L5 with a strong convex face toward the image.",
    },
  ],
  surfaces: [
    { label: "1", R: 62.778, d: 10.668, sd: 26.9, medium: 1 },
    { label: "2", R: -1089.312, d: 0.516, sd: 26.9 },
    { label: "3", R: 61.8, d: 7.914, sd: 26.8, medium: 2 },
    { label: "4", R: 216.879, d: 8.46, sd: 26.8 },
    { label: "5", R: -1151.19, d: 3.384, sd: 22, medium: 3 },
    { label: "6", R: 40.671, d: 7.467, sd: 22, medium: 4 },
    { label: "7", R: 116.562, d: 38.6314, sd: 22 },
    { label: "STO", R: "flat", d: 48.8096 },
    { label: "8", R: -34.791, d: 2.4, sd: 12, medium: 5 },
    { label: "9", R: -231.423, d: 5.643, sd: 12 },
    { label: "10", R: 812.637, d: 8.907, sd: 13.95, medium: 6 },
    { label: "11", R: -55.038, d: 73.4384, sd: 13.95 },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only. The patent gives no spacings for the production lens’s 4 m minimum focus.",
  },
  aperture: {
    nominalFNumber: 5.6,
    fStops: [5.6, 8, 11, 16, 22],
    maxFNumber: 22,
    blades: 8,
  },
  groups: [
    {
      text: "Front",
      fromSurface: "1",
      toSurface: "7",
    },
    {
      text: "Rear",
      fromSurface: "8",
      toSurface: "11",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "5",
      toSurface: "7",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
