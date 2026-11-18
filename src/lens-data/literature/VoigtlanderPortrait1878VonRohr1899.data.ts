/*
VOIGTLÄNDER PORTRAIT f/3.5 (von Rohr 1899, Fig. 107)
Literature reconstruction staged from the von Rohr package file Voigtlander1878Reference.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "voigtlander-portrait-1878-von-rohr-1899",
  maker: "Voigtländer",
  name: "VOIGTLÄNDER PORTRAIT f/3.5 (von Rohr 1899, Fig. 107)",
  visible: false,
  catalog: {
    specs: ["4 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 3.5 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 276, Fig. 107",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=32",
    },
  },
  elements: [
    { id: 1, name: "L1", label: "Crown", type: "Biconvex Positive", nd: 1.536, indexReference: "D", cemented: "D1" },
    { id: 2, name: "L2", label: "Flint", type: "Biconcave Negative", nd: 1.602, indexReference: "D", cemented: "D1" },
    {
      id: 3,
      name: "L3",
      label: "Crown (von Rohr ordering)",
      type: "Plano-convex Positive",
      nd: 1.536,
      indexReference: "D",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      label: "Flint (von Rohr ordering)",
      type: "Negative Meniscus",
      nd: 1.602,
      indexReference: "D",
      cemented: "D2",
    },
  ],
  surfaces: [
    { label: "1", R: 64.7, d: 5.3, sd: 17, medium: 1 },
    { label: "2", R: -52.3, d: 3.9, sd: 17, medium: 2 },
    { label: "3", R: 579.4, d: 22.2, sd: 17 },
    { label: "STO", R: "flat", d: 29 },
    { label: "4", R: "flat", d: 7.7, sd: 17, medium: 3 },
    { label: "5", R: -24.1, d: 3.9, sd: 17, medium: 4 },
    { label: "6", R: -64.7, d: 60.28769887996922, sd: 17 },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity only; D-line Gaussian plane for published reconstruction, not factoryfocus.",
  },
  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 12 },
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "3" },
    { text: "REAR", fromSurface: "4", toSurface: "6" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6" },
  ],
  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
