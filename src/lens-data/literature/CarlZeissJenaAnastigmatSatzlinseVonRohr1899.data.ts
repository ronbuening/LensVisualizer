/*
CARL ZEISS JENA ANASTIGMAT-SATZLINSE f/14.4 (von Rohr 1899, Fig. 137)
Literature reconstruction staged from the von Rohr package file RudolphSatzSingleFig137.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-anastigmat-satzlinse-von-rohr-1899",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA ANASTIGMAT-SATZLINSE f/14.4 (von Rohr 1899, Fig. 137)",
  visible: false,
  catalog: {
    specs: ["3 ELEMENTS / 1 GROUP", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 3,
    groupCount: 1,
    focalLengthMm: { design: 100 },
    fNumber: { design: 14.4 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "Fig. 137",
    },
  },
  elements: [
    { id: 1, name: "L1", label: "L1 historical glass", type: "Positive Meniscus", nd: 1.52246, indexReference: "D" },
    { id: 2, name: "L2", label: "L2 historical glass", type: "Biconcave Negative", nd: 1.56724, indexReference: "D" },
    { id: 3, name: "L3", label: "L3 historical glass", type: "Biconvex Positive", nd: 1.6112, indexReference: "D" },
  ],
  surfaces: [
    { label: "STO", R: "flat", d: 1 },
    { label: "1", R: -14.2, d: 1.7, sd: 4, medium: 1 },
    { label: "2", R: -5.5, d: 0.5, sd: 4, medium: 2 },
    { label: "3", R: 20.7, d: 1.4, sd: 4, medium: 3 },
    { label: "4", R: -12.6, d: 109.43039198086672, sd: 4 },
  ],
  focus: { closeFocusM: 1e15, description: "Infinity only, computed D-line paraxial image plane." },
  aperture: { nominalFNumber: 14.4, fStops: [14.4, 16, 22], maxFNumber: 22 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 34 },
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
