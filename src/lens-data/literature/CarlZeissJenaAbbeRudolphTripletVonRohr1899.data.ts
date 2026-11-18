/*
CARL ZEISS JENA ABBE–RUDOLPH TRIPLET f/7.2 (von Rohr 1899, Fig. 125)
Literature reconstruction staged from the von Rohr package file AbbeRudolphTripletVonRohr1899.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-jena-abbe-rudolph-triplet-von-rohr-1899",
  maker: "Carl Zeiss Jena",
  name: "CARL ZEISS JENA ABBE–RUDOLPH TRIPLET f/7.2 (von Rohr 1899, Fig. 125)",
  visible: false,
  catalog: {
    specs: ["5 ELEMENTS / 3 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 5,
    groupCount: 3,
    focalLengthMm: { design: 100 },
    fNumber: { design: 7.2 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 357, Fig. 125",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=113",
    },
  },
  elements: [
    { id: 1, name: "L1", label: "Source L1", type: "Positive Meniscus", nd: 1.5166, indexReference: "D" },
    { id: 2, name: "L2", label: "Source L2", type: "Negative Meniscus", nd: 1.5676, indexReference: "D" },
    { id: 3, name: "L3", label: "Source L3", type: "Biconvex", nd: 1.50846, indexReference: "D" },
    { id: 4, name: "L4", label: "Source L4", type: "Negative Meniscus", nd: 1.5676, indexReference: "D" },
    { id: 5, name: "L5", label: "Source L5", type: "Positive Meniscus", nd: 1.5166, indexReference: "D" },
  ],
  surfaces: [
    { label: "1", R: 26.2, d: 3.4, sd: 10, medium: 1 },
    { label: "2", R: 39.2, d: 4.3, sd: 10 },
    { label: "3", R: 235, d: 1.1, sd: 8, medium: 2 },
    { label: "4", R: 14, d: 5.7, sd: 8, medium: 3 },
    { label: "5", R: -14, d: 1.1, sd: 8, medium: 4 },
    { label: "6", R: -235, d: 0.8, sd: 8 },
    { label: "STO", R: "flat", d: 3.5 },
    { label: "7", R: -39.2, d: 3.4, sd: 10, medium: 5 },
    { label: "8", R: -26.2, d: 90.23774390530268, sd: 10 },
  ],
  focus: { closeFocusM: 1e15, description: "Infinity-only historical reconstruction." },
  aperture: { nominalFNumber: 7.2, fStops: [7.2, 8, 11, 16] },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 26.5 },
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
