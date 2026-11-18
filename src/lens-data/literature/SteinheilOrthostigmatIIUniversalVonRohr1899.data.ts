/*
STEINHEIL ORTHOSTIGMAT TYPE II f/6 (von Rohr 1899, Fig. 143)
Literature reconstruction staged from the von Rohr package file SteinheilOrthostigmatIIUniversalVonRohr.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "steinheil-orthostigmat-ii-universal-von-rohr-1899",
  maker: null,
  name: "STEINHEIL ORTHOSTIGMAT TYPE II f/6 (von Rohr 1899, Fig. 143)",
  visible: false,
  catalog: {
    specs: ["6 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 6,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 6 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 383, Fig. 143",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=139",
    },
  },
  elements: [
    { id: 1, name: "L1", label: "Baryta crown1", type: "Biconvex Positive", nd: 1.61003, indexReference: "D" },
    {
      id: 2,
      name: "L2",
      label: "High-dispersion crown2",
      type: "Positive Meniscus",
      nd: 1.51874,
      indexReference: "D",
    },
    { id: 3, name: "L3", label: "Baryta light flint3", type: "Biconcave Negative", nd: 1.5637, indexReference: "D" },
    { id: 4, name: "L4", label: "Baryta light flint4", type: "Biconcave Negative", nd: 1.5637, indexReference: "D" },
    {
      id: 5,
      name: "L5",
      label: "High-dispersion crown5",
      type: "Positive Meniscus",
      nd: 1.51874,
      indexReference: "D",
    },
    { id: 6, name: "L6", label: "Baryta crown6", type: "Biconvex Positive", nd: 1.61003, indexReference: "D" },
  ],
  surfaces: [
    { label: "1", R: 35, d: 4.1, sd: 10, medium: 1 },
    { label: "2", R: -28.3, d: 5.1, sd: 10, medium: 2 },
    { label: "3", R: -15.8, d: 0.8, sd: 10, medium: 3 },
    { label: "4", R: 41, d: 5.06, sd: 10 },
    { label: "STO", R: "flat", d: 5.06 },
    { label: "5", R: -41, d: 0.8, sd: 10, medium: 4 },
    { label: "6", R: 15.8, d: 5.1, sd: 10, medium: 5 },
    { label: "7", R: 28.3, d: 4.1, sd: 10, medium: 6 },
    { label: "8", R: -35, d: 85.49822408612587, sd: 10 },
  ],
  focus: { closeFocusM: 1e15, description: "Infinity-only historical reference, no finite-focus motion." },
  aperture: { nominalFNumber: 6, fStops: [6, 8, 11, 16] },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 28 },
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
