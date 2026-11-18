/*
VOIGTLÄNDER COLLINEAR SERIES II f/6.9 (von Rohr 1899, Fig. 144)
Literature reconstruction staged from the von Rohr package file KaempferCollinearIIVonRohr1899.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "voigtlander-collinear-ii-von-rohr-1899",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER COLLINEAR SERIES II f/6.9 (von Rohr 1899, Fig. 144)",
  visible: false,
  catalog: {
    specs: ["6 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 6,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 6.9 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 385, Fig. 144",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=141",
    },
  },
  elements: [
    { id: 1, name: "L1", label: "Source L1", type: "Negative Meniscus", nd: 1.5682, indexReference: "D" },
    { id: 2, name: "L2", label: "Source L2", type: "Positive Meniscus", nd: 1.5262, indexReference: "D" },
    { id: 3, name: "L3", label: "Source L3", type: "Positive Meniscus", nd: 1.6112, indexReference: "D" },
    { id: 4, name: "L4", label: "Source L4", type: "Positive Meniscus", nd: 1.6112, indexReference: "D" },
    { id: 5, name: "L5", label: "Source L5", type: "Positive Meniscus", nd: 1.5262, indexReference: "D" },
    { id: 6, name: "L6", label: "Source L6", type: "Negative Meniscus", nd: 1.5682, indexReference: "D" },
  ],
  surfaces: [
    { label: "1", R: 32.6, d: 1.3, sd: 8, medium: 1 },
    { label: "2", R: 11, d: 1.8, sd: 8, medium: 2 },
    { label: "3", R: 14.5, d: 3, sd: 8, medium: 3 },
    { label: "4", R: 41.1, d: 3.3, sd: 8 },
    { label: "STO", R: "flat", d: 3.3 },
    { label: "5", R: -41.1, d: 3, sd: 8, medium: 4 },
    { label: "6", R: -14.5, d: 1.8, sd: 8, medium: 5 },
    { label: "7", R: -11, d: 1.3, sd: 8, medium: 6 },
    { label: "8", R: -32.6, d: 91.88982563193497, sd: 8 },
  ],
  focus: { closeFocusM: 1e15, description: "Infinity-only historical reconstruction." },
  aperture: { nominalFNumber: 6.9, fStops: [6.9, 8, 11, 16] },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 30.5 },
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
