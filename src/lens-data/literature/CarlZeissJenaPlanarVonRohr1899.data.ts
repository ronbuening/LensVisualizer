/*
CARL ZEISS JENA PLANAR f/3.3 (von Rohr 1899, Fig. 146)
Literature reconstruction staged from the von Rohr package file RudolphPlanarPortraitVonRohr1899.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-planar-1896-von-rohr-1899",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA PLANAR f/3.3 (von Rohr 1899, Fig. 146)",
  visible: false,
  catalog: {
    specs: ["6 ELEMENTS / 4 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 6,
    groupCount: 4,
    focalLengthMm: { design: 100 },
    fNumber: { design: 3.3 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 391, Fig. 146",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=147",
    },
  },
  elements: [
    { id: 1, name: "L1", label: "Source L1", type: "Positive Meniscus", nd: 1.56785, indexReference: "D" },
    { id: 2, name: "L2", label: "Source L2", type: "Biconvex Positive", nd: 1.56768, indexReference: "D" },
    { id: 3, name: "L3", label: "Source L3", type: "Biconcave Negative", nd: 1.57087, indexReference: "D" },
    { id: 4, name: "L4", label: "Source L4", type: "Biconcave Negative", nd: 1.57087, indexReference: "D" },
    { id: 5, name: "L5", label: "Source L5", type: "Biconvex Positive", nd: 1.56768, indexReference: "D" },
    { id: 6, name: "L6", label: "Source L6", type: "Positive Meniscus", nd: 1.56785, indexReference: "D" },
  ],
  surfaces: [
    { label: "1", R: 32, d: 5, sd: 16, medium: 1 },
    { label: "2", R: 144.1, d: 0.27, sd: 16 },
    { label: "3", R: 37.6, d: 5.3, sd: 13.8, medium: 2 },
    { label: "4", R: -45.5, d: 2.7, sd: 13.8, medium: 3 },
    { label: "5", R: 20.5, d: 5.9, sd: 13.8 },
    { label: "STO", R: "flat", d: 5.9 },
    { label: "6", R: -20.5, d: 2.7, sd: 13.8, medium: 4 },
    { label: "7", R: 45.5, d: 5.3, sd: 13.8, medium: 5 },
    { label: "8", R: -32.6, d: 0.27, sd: 13.8 },
    { label: "9", R: -144.1, d: 5, sd: 16, medium: 6 },
    { label: "10", R: -33.9, d: 80.53188187719734, sd: 16 },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only historical reconstruction, no finite-focus motion.",
  },
  aperture: { nominalFNumber: 3.3, fStops: [3.3, 4, 5.6, 8, 11, 16] },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 25 },
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
