/*
VON HÖEGH DOPPEL-ANASTIGMAT f/8 (von Rohr 1899, Fig. 138)
Literature reconstruction staged from the von Rohr package file HoeghDoppelAnastigmatVonRohr1899.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "hoegh-doppel-anastigmat-von-rohr-1899",
  maker: null,
  name: "VON HÖEGH DOPPEL-ANASTIGMAT f/8 (von Rohr 1899, Fig. 138)",
  visible: false,
  catalog: {
    specs: ["6 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 6,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 8 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 376, Fig. 138",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=132",
    },
  },
  elements: [
    { id: 1, name: "L1", label: "Baryta crown1", type: "Biconvex Positive", nd: 1.6131, indexReference: "D" },
    { id: 2, name: "L2", label: "Baryta light flint2", type: "Biconcave Negative", nd: 1.56804, indexReference: "D" },
    { id: 3, name: "L3", label: "Silicate crown3", type: "Positive Meniscus", nd: 1.51497, indexReference: "D" },
    { id: 4, name: "L4", label: "Silicate crown4", type: "Positive Meniscus", nd: 1.51497, indexReference: "D" },
    { id: 5, name: "L5", label: "Baryta light flint5", type: "Biconcave Negative", nd: 1.56804, indexReference: "D" },
    { id: 6, name: "L6", label: "Baryta crown6", type: "Biconvex Positive", nd: 1.6131, indexReference: "D" },
  ],
  surfaces: [
    { label: "1", R: 19.1, d: 3.1, sd: 6.2, medium: 1 },
    { label: "2", R: -22.7, d: 0.8, sd: 6.2, medium: 2 },
    { label: "3", R: 8.3, d: 1.9, sd: 6.2, medium: 3 },
    { label: "4", R: 20.5, d: 2.3, sd: 6.2 },
    { label: "STO", R: "flat", d: 2.3 },
    { label: "5", R: -20.5, d: 1.9, sd: 6.2, medium: 4 },
    { label: "6", R: -8.3, d: 0.8, sd: 6.2, medium: 5 },
    { label: "7", R: 22.7, d: 3.1, sd: 6.2, medium: 6 },
    { label: "8", R: -19.1, d: 91.28936108120946, sd: 6.2 },
  ],
  focus: { closeFocusM: 1e15, description: "Infinity-only historical reference, no finite-focus motion." },
  aperture: { nominalFNumber: 8, fStops: [8, 11, 16, 22], maxFNumber: 22 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 36 },
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
