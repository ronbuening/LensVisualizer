import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Literal specification TABLE, printed p3/PDFp4, not differing drawing labels.
 * Patent-only reciprocal infinity reference for a projection objective.
 * Front free diameter45.4mm source; rear17.5mm semi-diameter is a documented
 * provisional mechanical aperture, not factory/film-format evidence.
 */
const LENS_DATA = {
  schema: 2,
  key: "repp-patent-100mm-f22",
  maker: null,
  name: "REPP PATENT 100mm f/2.2 Projection Reference",
  subtitle: "US1479251A — PATENT-ONLY; RECIPROCAL INFINITY REFERENCE",
  visible: false,
  catalog: {
    specs: [
      "4 ELEMENTS / 2 GROUPS",
      "PATENT-ONLY",
      "PROJECTION DESIGN; INFINITY REFERENCE",
    ],
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: { marketing: 100, design: 99.99649 },
    fNumber: { marketing: 2.2, design: 2.2025659532520065 },
  },
  source: {
    patentNumber: "US 1,479,251 A",
    example: { label: "Sole example", id: null },
    patentYear: 1924,
    authors: ["William H. Repp"],
    assignees: [],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front borosilicate crown",
      type: "Biconvex Positive",
      nd: 1.516,
      vd: 63.8,
      indexReference: "D",
      glass: "Borosilicate crown (source constants)",
      cemented: "A",
    },
    {
      id: 2,
      name: "L2",
      label: "Front dense flint",
      type: "Plano-Concave Negative",
      nd: 1.6182,
      vd: 36.4,
      indexReference: "D",
      glass: "Dense flint (source constants)",
      cemented: "A",
    },
    {
      id: 3,
      name: "L3",
      label: "Rear borosilicate crown",
      type: "Biconvex Positive",
      nd: 1.516,
      vd: 63.8,
      indexReference: "D",
      glass: "Borosilicate crown (source constants)",
      cemented: "B",
    },
    {
      id: 4,
      name: "L4",
      label: "Rear dense flint",
      type: "Plano-Concave Negative",
      nd: 1.6182,
      vd: 36.4,
      indexReference: "D",
      glass: "Dense flint (source constants)",
      cemented: "B",
    },
  ],
  surfaces: [
    { label: "STO", R: "flat", d: 0 },
    { label: "1", R: 82.57, d: 8.54, sd: 22.7, medium: 1 },
    { label: "2", R: -82.57, d: 2.85, sd: 22.7, medium: 2 },
    { label: "3", R: "flat", d: 94.54, sd: 22.7 },
    { label: "4", R: 41.28, d: 8.54, sd: 17.5, medium: 3 },
    { label: "5", R: -41.28, d: 2.85, sd: 17.5, medium: 4 },
    { label: "6", R: "flat", d: 39.82254, sd: 17 },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Reciprocal infinity-only reference; finite projection throw not modeled.",
  },
  aperture: {
    nominalFNumber: 2.2025659532520065,
    fStops: [2.2025659532520065],
    maxFNumber: 2.2025659532520065,
  },
  projection: { kind: "rectilinear", fullFieldDeg: 6, maxTraceFieldDeg: 3 },
  groups: [
    { text: "A", fromSurface: "1", toSurface: "3" },
    { text: "B", fromSurface: "4", toSurface: "6" },
  ],
  doublets: [
    { text: "A", fromSurface: "1", toSurface: "3" },
    { text: "B", fromSurface: "4", toSurface: "6" },
  ],
  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;
export default LENS_DATA;
