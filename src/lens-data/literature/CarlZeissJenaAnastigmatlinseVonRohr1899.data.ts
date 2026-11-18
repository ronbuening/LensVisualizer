/*
CARL ZEISS JENA ANASTIGMATLINSE f/12.5 (von Rohr 1899, Fig. 140)
Literature reconstruction staged from the von Rohr package file RudolphAnastigmatSingleFig140.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-anastigmatlinse-von-rohr-1899",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA ANASTIGMATLINSE f/12.5 (von Rohr 1899, Fig. 140)",
  visible: false,
  catalog: {
    specs: ["4 ELEMENTS / 1 GROUP", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 4,
    groupCount: 1,
    focalLengthMm: { design: 100 },
    fNumber: { design: 12.5 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "Fig. 140",
    },
  },
  elements: [
    { id: 1, name: "L1", label: "L1 historical glass", type: "Biconcave Negative", nd: 1.51743, indexReference: "D" },
    { id: 2, name: "L2", label: "L2 historical glass", type: "Biconvex Positive", nd: 1.61002, indexReference: "D" },
    { id: 3, name: "L3", label: "L3 historical glass", type: "Positive Meniscus", nd: 1.51156, indexReference: "D" },
    { id: 4, name: "L4", label: "L4 historical glass", type: "Negative Meniscus", nd: 1.58254, indexReference: "D" },
  ],
  surfaces: [
    { label: "STO", R: "flat", d: 1.9 },
    { label: "1", R: -14.7, d: 1.3, sd: 4.8, medium: 1 },
    { label: "2", R: 23.4, d: 1.7, sd: 4.8, medium: 2 },
    { label: "3", R: -11.2, d: 1.7, sd: 4.8, medium: 3 },
    { label: "4", R: -7.4, d: 1.3, sd: 4.8, medium: 4 },
    { label: "5", R: -15.4, d: 112.1927965269014, sd: 4.8 },
  ],
  focus: { closeFocusM: 1e15, description: "Infinity only, computed paraxial image plane." },
  aperture: { nominalFNumber: 12.5, fStops: [12.5, 16, 22], maxFNumber: 22 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 34 },
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
