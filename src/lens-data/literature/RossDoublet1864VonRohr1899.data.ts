/*
ROSS DOUBLET f/19.4 (von Rohr 1899, Fig. 76)
Literature reconstruction staged from the von Rohr package file Ross1864Reference.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "ross-doublet-1864-von-rohr-1899",
  maker: null,
  name: "ROSS DOUBLET f/19.4 (von Rohr 1899, Fig. 76)",
  visible: false,
  catalog: {
    specs: ["4 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 19.4 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 177, Fig. 76",
      after: "H. Schroeder",
    },
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Estimated crown",
      type: "Biconvex Positive",
      nd: 1.516,
      indexReference: "D",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Estimated flint",
      type: "Biconcave Negative",
      nd: 1.5738,
      indexReference: "D",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Estimated crown",
      type: "Positive Meniscus",
      nd: 1.516,
      indexReference: "D",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      label: "Estimated flint",
      type: "Negative Meniscus",
      nd: 1.5738,
      indexReference: "D",
      cemented: "D2",
    },
  ],
  surfaces: [
    { label: "1", R: 35.8, d: 3.6, sd: 10, medium: 1 },
    { label: "2", R: -241, d: 1.4, sd: 10, medium: 2 },
    { label: "3", R: 62.5, d: 5.9, sd: 10 },
    { label: "STO", R: "flat", d: 10.1 },
    { label: "4", R: -36.9, d: 4.8, sd: 10, medium: 3 },
    { label: "5", R: -15.3, d: 1.6, sd: 10, medium: 4 },
    { label: "6", R: -25.7, d: 89.70782995856074, sd: 10 },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity only at computedD-line Gaussian plane; nofactoryfocusclaim.",
  },
  aperture: { nominalFNumber: 19.4, fStops: [19.4, 22, 32, 45], maxFNumber: 45 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 20 },
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
