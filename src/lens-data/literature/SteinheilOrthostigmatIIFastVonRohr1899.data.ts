/*
STEINHEIL ORTHOSTIGMAT TYPE II f/4 (von Rohr 1899, Fig. 142)
Literature reconstruction staged from the von Rohr package file SteinheilOrthostigmatIIFastVonRohr.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "steinheil-orthostigmat-ii-fast-von-rohr-1899",
  maker: null,
  name: "STEINHEIL ORTHOSTIGMAT TYPE II f/4 (von Rohr 1899, Fig. 142)",
  visible: false,
  catalog: {
    specs: ["6 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 6,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 4.02 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 383, Fig. 142",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=139",
    },
  },
  elements: [
    { id: 1, name: "L1", label: "Baryta flint1", type: "Biconvex Positive", nd: 1.62356, indexReference: "D" },
    { id: 2, name: "L2", label: "Borosilicate crown2", type: "Positive Meniscus", nd: 1.50786, indexReference: "D" },
    { id: 3, name: "L3", label: "Light flint3", type: "Biconcave Negative", nd: 1.60304, indexReference: "D" },
    { id: 4, name: "L4", label: "Light flint4", type: "Biconcave Negative", nd: 1.60304, indexReference: "D" },
    { id: 5, name: "L5", label: "Borosilicate crown5", type: "Positive Meniscus", nd: 1.50786, indexReference: "D" },
    { id: 6, name: "L6", label: "Baryta flint6", type: "Biconvex Positive", nd: 1.62356, indexReference: "D" },
  ],
  surfaces: [
    { label: "1", R: 47.9, d: 4.2, sd: 14, medium: 1 },
    { label: "2", R: -117.6, d: 5.2, sd: 14, medium: 2 },
    { label: "3", R: -29.7, d: 0.8, sd: 14, medium: 3 },
    { label: "4", R: 102.4, d: 5.2, sd: 14 },
    { label: "STO", R: "flat", d: 5.2 },
    { label: "5", R: -102.4, d: 0.8, sd: 14, medium: 4 },
    { label: "6", R: 29.7, d: 5.2, sd: 14, medium: 5 },
    { label: "7", R: 117.6, d: 4.2, sd: 14, medium: 6 },
    { label: "8", R: -47.9, d: 86.55314815779174, sd: 14 },
  ],
  focus: { closeFocusM: 1e15, description: "Infinity-only historical reference, no finite-focus motion." },
  aperture: { nominalFNumber: 4.02, fStops: [4.02, 4.5, 5.6, 8, 11, 16] },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 29 },
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
