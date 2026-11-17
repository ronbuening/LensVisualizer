import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * Booth US1421156A, sole numerical example. PATENT-ONLY, not a retail Pentac claim.
 * Literal source lengths scaled x16 from F=6 1/4 to nominal 100 mm.
 * All radii, thicknesses and clear diameters retained; BFD is on-axis RMS-optimized at sodium D; Gaussian BFD83.724027mm.
 * MONOCHROMATIC DIAGNOSTIC: source gives nD and nG' only, not conventional Abbe.
 * vd is deliberately absent; native engine constant-index fallback is NOT achromatic
 * evidence. nG' is retained in analysis/source.json, never mislabeled as mercury ng.
 * Patent permits stop in either air gap. Position selected by documented comparison.
 * No finite-focus mechanism, image-circle or production manufacturer is asserted.
 */
const LENS_DATA = {
  schema: 2,
  key: "booth-patent-100mm-f3",
  maker: null,
  name: "BOOTH PATENT 100mm f/3 Monochromatic Reference",
  subtitle: "US1421156A — PATENT-ONLY; D-LINE DIAGNOSTIC; NOT FACTORY-IDENTIFIED",
  visible: false, // Diagnostic-only; do not publish as a production-correlated color model.
  catalog: {
    specs: ["5 ELEMENTS / 3 GROUPS", "PATENT-ONLY", "SODIUM-D MONOCHROMATIC MODEL", "NOMINAL 100mm f/3"],
    elementCount: 5,
    groupCount: 3,
    focalLengthMm: { marketing: 100, design: 100.427740793352 },
    fNumber: { marketing: 3, design: 3 },
  },
  source: {
    patentNumber: "US 1,421,156 A",
    example: { label: "Sole example", id: null },
    patentYear: 1922,
    authors: ["Lionel Barton Booth"],
    assignees: [],
    sdSource: "source-table",
  },
  elements: [
    { id: 1, name: "L1", label: "Front crown", type: "Biconvex Positive", nd: 1.6109, indexReference: "D", glass: "Unmatched (source nD/nGprime only; constant-index diagnostic)", cemented: "D1" },
    { id: 2, name: "L2", label: "Front flint", type: "Negative Meniscus", nd: 1.5485, indexReference: "D", glass: "Unmatched (source nD/nGprime only; constant-index diagnostic)", cemented: "D1" },
    { id: 3, name: "L3", label: "Central negative", type: "Biconcave Negative", nd: 1.5485, indexReference: "D", glass: "Unmatched (source nD/nGprime only; constant-index diagnostic)" },
    { id: 4, name: "L4", label: "Rear flint", type: "Negative Meniscus", nd: 1.5485, indexReference: "D", glass: "Unmatched (source nD/nGprime only; constant-index diagnostic)", cemented: "D2" },
    { id: 5, name: "L5", label: "Rear crown", type: "Biconvex Positive", nd: 1.6109, indexReference: "D", glass: "Unmatched (source nD/nGprime only; constant-index diagnostic)", cemented: "D2" },
  ],
  surfaces: [
    { label: "1", R: 42.16, d: 7.84, sd: 17.44, medium: 1 },
    { label: "2", R: -47.248, d: 1.6, sd: 17.44, medium: 2 },
    { label: "3", R: -1505.6, d: 8.32, sd: 17.44 },
    { label: "4", R: -43.84, d: 1.6, sd: 15.2, medium: 3 },
    { label: "5", R: 38, d: 4.24, sd: 15.2 },
    // Rear-gap midpoint is a comparative modeling choice, not a printed stop station.
    { label: "STO", R: "flat", d: 4.24 },
    { label: "6", R: 838.4, d: 1.6, sd: 15.6, medium: 4 },
    { label: "7", R: 39.216, d: 7.84, sd: 15.6, medium: 5 },
    { label: "8", R: -39.216, d: 83.23666687989012, sd: 15.6 },
  ],
  focus: { closeFocusM: 1e15, description: "Infinity-only D-line diagnostic; no finite-focus schedule is claimed." },
  aperture: { nominalFNumber: 3, fStops: [3, 4, 5.6, 8, 11, 16], maxFNumber: 16 },
  // Diagnostic sampled field only, NOT a manufacturer image-circle specification.
  projection: { kind: "rectilinear", fullFieldDeg: 20, maxTraceFieldDeg: 10 },
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "3" },
    { text: "MIDDLE", fromSurface: "4", toSurface: "5" },
    { text: "REAR", fromSurface: "6", toSurface: "8" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "6", toSurface: "8" },
  ],
  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;
export default LENS_DATA;
