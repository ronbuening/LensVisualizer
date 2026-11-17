import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,124,356 (Wilbur B. Rayton, assignor to Bausch & Lomb Optical Company; filed February 8, 1937, granted
 * July 19, 1938), the patent's only numerical example: a seven-element, three-group f/1.5 photographic objective
 * printed at f = 100 with a 42° field, in the Sonnar-type 1-3-3 arrangement. Radii, thicknesses, air spaces,
 * sodium-D indices and Abbe numbers are transcribed from the printed table, which appears identically on the drawing
 * sheet and in the specification. The scan prints radius magnitudes only; the signs follow the figure and the text
 * (L3, L5 and L7 biconvex; L4 and L6 biconcave; the L5/L6 junction concave toward the diaphragm).
 * Glass: L3 matches the FSL3 (OHARA) catalogue row at the sodium D line within the printed precision; the other
 * printed index pairs match no catalogue row and keep their printed values.
 *
 * Stop: printed. S2 = 12.32 mm runs from L4 to the diaphragm X and S3 = 4.08 mm from the diaphragm to L5.
 * Back focus: not printed; the image plane is the computed paraxial back focal distance, 41.193 mm from R10.
 * Rims: not published; estimated from the drawing (32.7 px/mm at 600 dpi from three element thicknesses, checked on
 * the R6 arc radius) and floor-checked by real-ray trace. L1 (36 mm) and the front triplet (30 mm) agree with the
 * drawn 34.9 and 30.4 mm within measurement noise. R6 ends at 19.3 mm as drawn, just above the f/1.5 axial ray
 * (19.27 mm), so the concave rear face of L4 stops well in front of the diaphragm. L5's front face ends at 19.4 mm,
 * where the drawing starts its edge chamfer, with a flat land out to the 23.1 mm triplet rim. The rear triplet takes
 * the drawn 23.1 mm; there the steep R8 junction (-23.4 mm) reaches an 80.8° rim slope, so checks.maxRimAngleDeg is 81.
 * Focus: the patent gives the infinity state only.
 * No production lens is documented for this example.
 */
const LENS_DATA = {
  schema: 2,
  key: "bausch-lomb-100mm-f15-us2124356",
  maker: "Bausch & Lomb",
  name: "BAUSCH & LOMB 100mm f/1.5 (US 2,124,356 Design)",
  subtitle: "US 2,124,356 A, sole example — Sonnar-type 1-3-3 objective",
  visible: true,
  catalog: {
    specs: ["7 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN F/1.5", "TWO CEMENTED TRIPLETS"],
    elementCount: 7,
    groupCount: 3,
    focalLengthMm: {
      design: 100.12,
    },
    fNumber: {
      design: 1.5,
    },
  },
  source: {
    patentNumber: "US 2,124,356 A",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1938,
    authors: ["Wilbur B. Rayton"],
    assignees: ["Bausch & Lomb Optical Company"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Positive Meniscus",
      nd: 1.6369,
      vd: 56,
      indexReference: "D",
      glass: "Unmatched (dense barium crown, nD 1.6369 / V 56.0)",
      role: "High-index front collector; converges the f/1.5 beam into the front triplet",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Positive Meniscus",
      nd: 1.6707,
      vd: 47.4,
      indexReference: "D",
      glass: "Unmatched (barium flint, nD 1.6707 / V 47.4)",
      role: "Positive front member of the negative cemented triplet; its strong front face points toward L1",
      cemented: "C1",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconvex Positive",
      nd: 1.4644,
      vd: 66,
      indexReference: "D",
      glass: "FSL3 (OHARA)",
      role: "Low-index positive middle member of the front cemented triplet",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconcave Negative",
      nd: 1.689,
      vd: 30.9,
      indexReference: "D",
      glass: "Unmatched (dense flint, nD 1.6890 / V 30.9)",
      role: "Strong negative flint closing the front triplet; its deep rear face is concave toward the diaphragm",
      cemented: "C1",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Biconvex Positive",
      nd: 1.6574,
      vd: 50.8,
      indexReference: "D",
      glass: "Unmatched (extra-dense barium crown, nD 1.6574 / V 50.8)",
      role: "Thick, strongest positive member of the rear cemented triplet, next to the diaphragm",
      cemented: "C2",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Biconcave Negative",
      nd: 1.54832,
      vd: 53.3,
      indexReference: "D",
      glass: "Unmatched (barium light flint, nD 1.54832 / V 53.3)",
      role: "Low-index negative middle member of the rear triplet; its steep front junction is concave toward the diaphragm",
      cemented: "C2",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Biconvex Positive",
      nd: 1.6574,
      vd: 50.8,
      indexReference: "D",
      glass: "Unmatched (extra-dense barium crown, nD 1.6574 / V 50.8)",
      role: "Weaker positive rear member of the rear cemented triplet",
      cemented: "C2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 67.2,
      d: 10.8,
      sd: 36,
      medium: 1,
    },
    {
      label: "2",
      R: 309.2,
      d: 0.52,
      sd: 36,
    },
    {
      label: "3",
      R: 38.36,
      d: 12.1,
      sd: 30,
      medium: 2,
    },
    {
      label: "4",
      R: 107.22,
      d: 7.8,
      sd: 30,
      medium: 3,
    },
    {
      label: "5",
      R: -269.2,
      d: 2,
      sd: 30,
      medium: 4,
    },
    {
      label: "6",
      R: 23.68,
      d: 12.32,
      sd: 19.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.08,
    },
    {
      label: "7",
      R: 207,
      d: 22.7,
      sd: 19.4,
      rimExtensionSd: 23.1,
      medium: 5,
    },
    {
      label: "8",
      R: -23.4,
      d: 3.6,
      sd: 23.1,
      medium: 6,
    },
    {
      label: "9",
      R: 57,
      d: 8,
      sd: 23.1,
      medium: 7,
    },
    {
      label: "10",
      R: -224.2,
      d: 41.193,
      sd: 23.1,
    },
  ],
  aperture: {
    nominalFNumber: 1.5,
    fStops: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [],
  doublets: [
    { text: "C1", fromSurface: "3", toSurface: "6" },
    { text: "C2", fromSurface: "7", toSurface: "10" },
  ],
  layout: {
    yScFill: 0.4,
  },
  checks: {
    maxRimAngleDeg: 81,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
