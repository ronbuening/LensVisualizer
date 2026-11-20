import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,254,511 A, sole numerical example, at the printed f = 100 mm scale.
 * Radii, thicknesses, air gaps, nd and Abbe numbers follow the table in mm;
 * no dimensional conversion is applied. The iris lies at an inferred 90%
 * of the R6–R7 gap, consistent with the drawing, and is sized from f/1.4.
 * Clear radii are checked against the patent drawing, which is to scale
 * (about 10.55 px/mm at 400 dpi). The cemented triplet is square-cut at
 * 31 mm, the rear quadruplet front at 21 mm and L8's rear at 23.9 mm, as
 * drawn. L1 is 37 mm (drawn 35.8, the f/1.4 entrance beam is 35.7) and
 * R6 is 21.5 mm (drawn 20.7, the iris-limited axial beam is 20.7), so
 * corner light is not lost. The image plane is the computed paraxial
 * infinity focus.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-100mm-f14-us2254511",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA 100mm f/1.4 (US 2,254,511 Design)",
  visible: true,
  subtitle: "US 2,254,511 A, sole example — Zeiss Ikon / Bertele",
  source: {
    patentNumber: "US 2,254,511 A",
    patentYear: 1941,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Ludwig Bertele"],
    assignees: ["Zeiss Ikon AG"],
  },
  catalog: {
    elementCount: 8,
    groupCount: 3,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 1.4,
    },
    imageCircleMm: 84.8,
    specs: [
      "8 ELEMENTS / 3 GROUPS",
      "DESIGN f = 100 mm",
      "DESIGN F/1.4",
      "ALL SPHERICAL",
      "45° FIELD",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6202,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: 132.31,
      glass: "Unmatched (nd 1.6202 / νd 60.3)",
      role: "Positive front collector",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7015,
      vd: 41.1,
      indexReference: "d",
      focalLengthMm: 94.62,
      glass: "BAFD7 (Hoya)",
      role: "Positive front member of the middle cemented triplet",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.445,
      vd: 68.4,
      indexReference: "d",
      focalLengthMm: 162.89,
      glass: "Unmatched (nd 1.4450 / νd 68.4)",
      role: "Low-index positive middle member of the cemented triplet",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.7219,
      vd: 28.1,
      indexReference: "d",
      focalLengthMm: -34.2,
      glass: "Unmatched (nd 1.7219 / νd 28.1)",
      role: "Negative rear member of the middle cemented triplet",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6385,
      vd: 55.5,
      indexReference: "d",
      focalLengthMm: 139.82,
      glass: "K-SK18 (Sumita)",
      role: "Positive front member of the rear cemented quadruplet",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.515,
      vd: 50,
      indexReference: "d",
      focalLengthMm: -65.1,
      glass: "Unmatched (nd 1.5150 / νd 50.0)",
      role: "Negative second member of the rear cemented quadruplet",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.6689,
      vd: 48.8,
      indexReference: "d",
      focalLengthMm: 27.81,
      glass: "Unmatched (nd 1.6689 / νd 48.8)",
      role: "Strong positive third member of the rear cemented quadruplet",
      cemented: "C2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.6102,
      vd: 56.5,
      indexReference: "d",
      focalLengthMm: -50.22,
      glass: "SK1 (Sumita)",
      role: "Negative rear member of the cemented quadruplet",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 74.4,
      d: 9.8,
      sd: 37,
      medium: 1,
    },
    {
      label: "2",
      R: 756.8,
      d: 0.24,
      sd: 37,
    },
    {
      label: "3",
      R: 38.16,
      d: 11.1,
      sd: 31,
      medium: 2,
    },
    {
      label: "4",
      R: 79,
      d: 8.4,
      sd: 31,
      medium: 3,
    },
    {
      label: "5",
      R: -850,
      d: 2,
      sd: 31,
      medium: 4,
    },
    {
      label: "6",
      R: 25.45,
      d: 12.15,
      sd: 21.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.35,
    },
    {
      label: "7",
      R: -740,
      d: 8,
      sd: 21,
      medium: 5,
    },
    {
      label: "8",
      R: -80,
      d: 1.2,
      sd: 21,
      medium: 6,
    },
    {
      label: "9",
      R: 58,
      d: 20,
      sd: 21,
      medium: 7,
    },
    {
      label: "10",
      R: -23.6,
      d: 2.6,
      sd: 21,
      medium: 8,
    },
    {
      label: "11",
      R: -106.94,
      d: 46.0395,
      sd: 23.9,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description: "Infinity focus only; the patent supplies no close-focus spacings or focusing mechanism.",
  },
  aperture: {
    nominalFNumber: 1.4,
    fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
  },
  projection: {
    kind: "rectilinear",
    maxTraceFieldDeg: 22.5,
  },
  groups: [
    {
      text: "G1 (1)",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 (3 cemented)",
      fromSurface: "3",
      toSurface: "6",
    },
    {
      text: "G3 (4 cemented)",
      fromSurface: "7",
      toSurface: "11",
    },
  ],
  doublets: [
    {
      text: "C1",
      fromSurface: "3",
      toSurface: "6",
    },
    {
      text: "C2",
      fromSurface: "7",
      toSurface: "11",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
