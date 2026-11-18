/*
STEINHEIL APLANAT SECOND FORM f/7.7 (von Rohr 1899, Fig. 111)
Literature reconstruction staged from the von Rohr package file SteinheilAplanatSecondFormVonRohr.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "steinheil-aplanat-second-form-von-rohr-1899",
  maker: null,
  name: "STEINHEIL APLANAT SECOND FORM f/7.7 (von Rohr 1899, Fig. 111)",
  visible: false,
  catalog: {
    specs: ["4 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 7.7 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 298, Fig. 111",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=54",
    },
  },
  elements: [
    { id: 1, name: "L1", label: "Outer flint1", type: "Negative Meniscus", nd: 1.61912, indexReference: "D" },
    { id: 2, name: "L2", label: "Inner glass2", type: "Positive Meniscus", nd: 1.58027, indexReference: "D" },
    { id: 3, name: "L3", label: "Inner glass3", type: "Positive Meniscus", nd: 1.58027, indexReference: "D" },
    { id: 4, name: "L4", label: "Outer flint4", type: "Negative Meniscus", nd: 1.61912, indexReference: "D" },
  ],
  surfaces: [
    { label: "1", R: 26.3, d: 1.05, sd: 6.8, medium: 1 },
    { label: "2", R: 11, d: 2, sd: 6.8, medium: 2 },
    { label: "3", R: 38.3, d: 9, sd: 6.8 },
    { label: "STO", R: "flat", d: 9 },
    { label: "4", R: -38.3, d: 2, sd: 6.8, medium: 3 },
    { label: "5", R: -11, d: 1.05, sd: 6.8, medium: 4 },
    { label: "6", R: -26.3, d: 87.12462594288928, sd: 6.8 },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only historical reconstruction; no finite-focus motion.",
  },
  aperture: { nominalFNumber: 7.7, fStops: [7.7, 9.1, 11, 16, 22, 32], maxFNumber: 32 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 30 },
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
