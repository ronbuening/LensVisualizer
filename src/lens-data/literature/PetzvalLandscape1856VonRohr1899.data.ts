/*
PETZVAL LANDSCAPE 1856 f/8.1 (von Rohr 1899, Fig. 103)
Literature reconstruction staged from the von Rohr package file PetzvalLandscape1856.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "petzval-landscape-1856-von-rohr-1899",
  maker: null,
  name: "PETZVAL LANDSCAPE 1856 f/8.1 (von Rohr 1899, Fig. 103)",
  visible: false,
  catalog: {
    specs: ["4 ELEMENTS / 3 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: { design: 100 },
    fNumber: { design: 8.1 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 258, Fig. 103",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=14",
    },
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front crown",
      type: "Biconvex Positive",
      nd: 1.517,
      indexReference: "D",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Front flint",
      type: "Biconcave Negative",
      nd: 1.575,
      indexReference: "D",
      cemented: "D1",
    },
    { id: 3, name: "L3", label: "Rear negative crown", type: "Biconcave Negative", nd: 1.517, indexReference: "D" },
    { id: 4, name: "L4", label: "Rear positive flint", type: "Positive Meniscus", nd: 1.575, indexReference: "D" },
  ],
  surfaces: [
    { label: "1", R: 22.5, d: 2.5, sd: 6.5, medium: 1 },
    { label: "2", R: -17.6, d: 0.6, sd: 6.5, medium: 2 },
    { label: "3", R: 185.7, d: 3.7, sd: 6.5 },
    { label: "STO", R: "flat", d: 1.2 },
    { label: "4", R: -31.5, d: 0.6, sd: 6.5, medium: 3 },
    { label: "5", R: 53.5, d: 1.6, sd: 6.5 },
    { label: "6", R: -78.2, d: 1.2, sd: 6.5, medium: 4 },
    { label: "7", R: -22.8, d: 88.19510228491673, sd: 6.5 },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only D-line reconstruction at computed Gaussian plane. No factory focus schedule.",
  },
  aperture: { nominalFNumber: 8.1, fStops: [8.1, 11, 16, 22, 32], maxFNumber: 32 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 30 },
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "3" },
    { text: "REAR", fromSurface: "4", toSurface: "7" },
  ],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],
  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
