/*
DALLMEYER RAPID LANDSCAPE f/11 (von Rohr 1899, Fig. 77)
Literature reconstruction staged from the von Rohr package file Dallmeyer1865Reference.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "dallmeyer-rapid-landscape-1865-von-rohr-1899",
  maker: null,
  name: "DALLMEYER RAPID LANDSCAPE f/11 (von Rohr 1899, Fig. 77)",
  visible: false,
  catalog: {
    specs: ["3 ELEMENTS / 1 GROUP", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 3,
    groupCount: 1,
    focalLengthMm: { design: 100 },
    fNumber: { design: 11.04 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 178, Fig. 77",
      after: "D. van Monckhoven",
    },
  },
  elements: [
    { id: 1, name: "L1", label: "Crown1", type: "Positive Meniscus", nd: 1.521, indexReference: "D", cemented: "T1" },
    { id: 2, name: "L2", label: "Flint", type: "Negative Meniscus", nd: 1.581, indexReference: "D", cemented: "T1" },
    { id: 3, name: "L3", label: "Crown2", type: "Positive Meniscus", nd: 1.514, indexReference: "D", cemented: "T1" },
  ],
  surfaces: [
    { label: "STO", R: "flat", d: 10 },
    { label: "1", R: -60.4, d: 3, sd: 10, medium: 1 },
    { label: "2", R: -17.3, d: 1, sd: 10, medium: 2 },
    { label: "3", R: -48.1, d: 1.5, sd: 10, medium: 3 },
    { label: "4", R: -25.6, d: 102.89762259426269, sd: 10 },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity only atD-line Gaussian plane ofpublishedreconstruction.",
  },
  aperture: { nominalFNumber: 11.04, fStops: [11.04, 16, 22, 32, 45], maxFNumber: 45 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 20 },
  groups: [{ text: "CEMENTED TRIPLET", fromSurface: "1", toSurface: "4" }],
  doublets: [{ text: "T1", fromSurface: "1", toSurface: "4" }],
  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
