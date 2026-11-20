import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * DE 700,699 C, sole example, at the printed 100 mm focal length (scale 1).
 * Radii, glass thicknesses, air spaces and nd/νd are printed in the patent;
 * dimensions are used in millimetres without conversion. The printed iris
 * position splits the 9.44 mm air space into 7.50 mm after R6 and 1.94 mm
 * before R7. Its diameter is inferred for paraxial f/2.
 * R1–R5 and R8–R10 rims follow the figure; R6/R7 retain the larger f/2
 * clearances. The image plane is computed paraxially. The 22° field follows
 * the historical distortion plot; its image-circle diameter is traced.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-100mm-f2-de700699",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA 100mm f/2 (DE 700,699 Design)",
  subtitle: "DE 700,699 C, Sole example — improved-distortion Sonnar design",
  visible: true,
  source: {
    patentNumber: "DE 700,699 C",
    patentYear: 1941,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Ludwig Bertele"],
    assignees: ["Zeiss Ikon AG"],
  },
  catalog: {
    elementCount: 7,
    groupCount: 3,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2,
    },
    imageCircleMm: 81.61,
    specs: ["7 ELEMENTS / 3 GROUPS", "DESIGN f = 100 mm", "DESIGN F/2", "ALL SPHERICAL"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.6204,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: 131.3,
      glass: "N-SK16 (Schott)",
      role: "Positive front collecting meniscus",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7016,
      vd: 41.2,
      indexReference: "d",
      focalLengthMm: 95.27,
      glass: "BAFD7 (Hoya)",
      role: "Positive front meniscus of the middle triplet",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.54,
      vd: 59.6,
      indexReference: "d",
      focalLengthMm: 104,
      glass: "BAK2 (Sumita)",
      role: "Positive low-index middle element of the middle triplet",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.6883,
      vd: 31.2,
      indexReference: "d",
      focalLengthMm: -33.27,
      glass: "Unmatched (nd 1.6883 / νd 31.2)",
      role: "Negative rear element of the middle triplet",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.6204,
      vd: 60.3,
      indexReference: "d",
      focalLengthMm: 104.04,
      glass: "N-SK16 (Schott)",
      role: "Positive front meniscus of the rear triplet",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.5174,
      vd: 52.4,
      indexReference: "d",
      focalLengthMm: -41.07,
      glass: "S-NSL36 (Ohara)",
      role: "Negative middle element of the rear triplet",
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
      focalLengthMm: 45.23,
      glass: "Unmatched (nd 1.6689 / νd 48.8)",
      role: "Positive rear element of the rear triplet",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 67.54,
      d: 6.79,
      sd: 28,
      medium: 1,
    },
    {
      label: "2",
      R: 380.08,
      d: 0.38,
      sd: 28,
    },
    {
      label: "3",
      R: 34.01,
      d: 7.17,
      sd: 23.7,
      medium: 2,
    },
    {
      label: "4",
      R: 63.22,
      d: 7.55,
      sd: 23.7,
      medium: 3,
    },
    {
      label: "5",
      R: -481.81,
      d: 1.89,
      sd: 23.7,
      medium: 4,
    },
    {
      label: "6",
      R: 24.08,
      d: 7.5,
      sd: 16.8,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.94,
    },
    {
      label: "7",
      R: -128.76,
      d: 10.76,
      sd: 17,
      medium: 5,
    },
    {
      label: "8",
      R: -44.37,
      d: 1.13,
      sd: 23.7,
      medium: 6,
    },
    {
      label: "9",
      R: 41.14,
      d: 22.46,
      sd: 23.7,
      medium: 7,
    },
    {
      label: "10",
      R: -89.32,
      d: 54.5352,
      sd: 23.7,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description: "Infinity focus only; the patent gives no close-focus spacings or focusing mechanism.",
  },
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  projection: {
    kind: "rectilinear",
    maxTraceFieldDeg: 22,
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
      text: "G3 (3 cemented)",
      fromSurface: "7",
      toSurface: "10",
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
      toSurface: "10",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
