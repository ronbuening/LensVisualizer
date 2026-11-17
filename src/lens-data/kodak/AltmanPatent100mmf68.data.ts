import type { LensDataV2Input } from "../../types/lensDataV2.js";
/** Specification S1=1.98 retained per owner's instruction after A/B source comparison.
 * Drawing S1=1.89 retained in audit, not silently repaired. Whole F100 agrees at
 * printed G-prime indices, not D. D-line EFL98.897767; no scaling to force100.
 * Stop and SDs are diagnostic modeling assumptions, not a factory claim.
 */
const LENS_DATA = {
  schema: 2,
  key: "altman-patent-100mm-f68",
  maker: null,
  name: "ALTMAN PATENT 100mm f/6.8 Triplet Reference",
  subtitle: "US1880393A — SPECIFICATION S1=1.98; PATENT-ONLY",
  visible: false,
  catalog: {
    specs: ["3 ELEMENTS / 3 GROUPS", "PATENT-ONLY", "SPECIFICATION-TABLE GAP"],
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: { marketing: 100, design: 98.8977671586475 },
    fNumber: { marketing: 6.8, design: 6.8 },
  },
  source: {
    patentNumber: "US 1,880,393 A",
    example: { label: "Sole example", id: null },
    patentYear: 1932,
    authors: ["Fred E. Altman"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front barium crown",
      type: "Biconvex Positive",
      nd: 1.611,
      vd: 57.2,
      indexReference: "D",
      glass: "Barium crown (source constants)",
    },
    {
      id: 2,
      name: "L2",
      label: "Middle flint",
      type: "Biconcave Negative",
      nd: 1.573,
      vd: 41.4,
      indexReference: "D",
      glass: "Flint (source constants)",
    },
    {
      id: 3,
      name: "L3",
      label: "Rear low-index crown",
      type: "Positive Meniscus",
      nd: 1.523,
      vd: 59,
      indexReference: "D",
      glass: "Low-index crown (source constants)",
    },
  ],
  surfaces: [
    { label: "1", R: 24.06, d: 2.96, sd: 9.5, medium: 1 },
    { label: "2", R: -198.1, d: 1.98, sd: 9.5 },
    { label: "3", R: -54.52, d: 1.18, sd: 9, medium: 2 },
    { label: "4", R: 24.85, d: 3.4, sd: 9 },
    { label: "STO", R: "flat", d: 3.4 },
    { label: "5", R: -183.8, d: 2.66, sd: 10, medium: 3 },
    { label: "6", R: -33.36, d: 89.00202507755924, sd: 10 },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity-only diagnostic. Patent front-cell focus mentioned, but finite schedule not supplied or modeled.",
  },
  aperture: { nominalFNumber: 6.8, fStops: [6.8, 8, 11, 16], maxFNumber: 16 },
  projection: { kind: "rectilinear", fullFieldDeg: 6, maxTraceFieldDeg: 3 },
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "2" },
    { text: "NEGATIVE", fromSurface: "3", toSurface: "4" },
    { text: "REAR", fromSurface: "5", toSurface: "6" },
  ],
  layout: { yScFill: 0.3 },
} satisfies LensDataV2Input;
export default LENS_DATA;
