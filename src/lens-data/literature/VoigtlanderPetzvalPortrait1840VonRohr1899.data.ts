/*
VOIGTLÄNDER PETZVAL PORTRAIT f/3.4 (von Rohr 1899, Fig. 100)
Literature reconstruction staged from the von Rohr package file Petzval1840PortraitVonRohr.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "voigtlander-petzval-portrait-1840-von-rohr-1899",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER PETZVAL PORTRAIT f/3.4 (von Rohr 1899, Fig. 100)",
  visible: false,
  catalog: {
    specs: ["4 ELEMENTS / 3 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: { design: 100 },
    fNumber: { design: 3.4 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 250, Fig. 100",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=6",
    },
  },
  elements: [
    { id: 1, name: "L1", label: "Crown 1", type: "Biconvex Positive", nd: 1.517, indexReference: "D" },
    { id: 2, name: "L2", label: "Flint 2", type: "Biconcave Negative", nd: 1.575, indexReference: "D" },
    { id: 3, name: "L3", label: "Flint 3", type: "Negative Meniscus", nd: 1.575, indexReference: "D" },
    { id: 4, name: "L4", label: "Crown 4", type: "Biconvex Positive", nd: 1.517, indexReference: "D" },
  ],
  surfaces: [
    { label: "1", R: 52.9, d: 5.8, sd: 15.5, medium: 1 },
    { label: "2", R: -41.4, d: 1.5, sd: 15.5, medium: 2 },
    { label: "3", R: 436.2, d: 23.3, sd: 15.5 },
    { label: "STO", R: "flat", d: 23.3 },
    { label: "4", R: 104.8, d: 2.2, sd: 14.5, medium: 3 },
    { label: "5", R: 36.8, d: 0.7, sd: 14.5 },
    { label: "6", R: 45.5, d: 3.6, sd: 14.5, medium: 4 },
    { label: "7", R: -149.5, d: 58.57589111487009, sd: 14.5 },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only historical reconstruction; no finite-focus motion modeled.",
  },
  aperture: { nominalFNumber: 3.4, fStops: [3.4, 4, 5.6, 8, 11, 16] },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 12 },
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
