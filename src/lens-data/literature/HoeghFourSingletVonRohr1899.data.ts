/*
VON HÖEGH FOUR-SINGLET OBJECTIVE f/7.6 (von Rohr 1899, Fig. 147)
Literature reconstruction staged from the von Rohr package file HoeghFourSingletVonRohr1899.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "hoegh-four-singlet-1898-von-rohr-1899",
  maker: null,
  name: "VON HÖEGH FOUR-SINGLET OBJECTIVE f/7.6 (von Rohr 1899, Fig. 147)",
  visible: false,
  catalog: {
    specs: ["4 ELEMENTS / 4 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: { design: 100 },
    fNumber: { design: 7.6 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 392, Fig. 147",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=148",
    },
  },
  elements: [
    { id: 1, name: "L1", label: "Source L1", type: "Biconvex Positive", nd: 1.6112, indexReference: "D" },
    { id: 2, name: "L2", label: "Source L2", type: "Biconcave Negative", nd: 1.5356, indexReference: "D" },
    { id: 3, name: "L3", label: "Source L3", type: "Biconcave Negative", nd: 1.5356, indexReference: "D" },
    { id: 4, name: "L4", label: "Source L4", type: "Biconvex Positive", nd: 1.6112, indexReference: "D" },
  ],
  surfaces: [
    { label: "1", R: 24.4, d: 2, sd: 7, medium: 1 },
    { label: "2", R: -53.8, d: 0.7, sd: 7 },
    { label: "3", R: -36.6, d: 0.9, sd: 7, medium: 2 },
    { label: "4", R: 29.6, d: 2.5, sd: 7 },
    { label: "STO", R: "flat", d: 2.5 },
    { label: "5", R: -29.6, d: 0.9, sd: 7, medium: 3 },
    { label: "6", R: 36.6, d: 0.7, sd: 7 },
    { label: "7", R: 53.8, d: 2, sd: 7, medium: 4 },
    { label: "8", R: -24.4, d: 95.17451282047368, sd: 7 },
  ],
  focus: { closeFocusM: 1e15, description: "Infinity-only historical reconstruction." },
  aperture: { nominalFNumber: 7.6, fStops: [7.6, 8, 11, 16] },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 30.5 },
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
