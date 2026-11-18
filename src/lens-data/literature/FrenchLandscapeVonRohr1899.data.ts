/*
FRENCH LANDSCAPE f/12.1 (von Rohr 1899, Fig. 54)
Literature reconstruction staged from the von Rohr package file FrenchLandscape1899.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "french-landscape-von-rohr-1899",
  maker: null,
  name: "FRENCH LANDSCAPE f/12.1 (von Rohr 1899, Fig. 54)",
  visible: false,
  catalog: {
    specs: ["2 ELEMENTS / 1 GROUP", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 2,
    groupCount: 1,
    focalLengthMm: { design: 100 },
    fNumber: { design: 12.1 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 94, Fig. 54",
      after: "E. Français",
    },
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Estimated flint",
      type: "Biconcave Negative",
      nd: 1.613,
      indexReference: "D",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Estimated crown",
      type: "Biconvex Positive",
      nd: 1.516,
      indexReference: "D",
      cemented: "D1",
    },
  ],
  surfaces: [
    { label: "STO", R: "flat", d: 18.1 },
    { label: "1", R: -80.3, d: 1.3, sd: 10, medium: 1 },
    { label: "2", R: 77.2, d: 3.1, sd: 10, medium: 2 },
    { label: "3", R: -28, d: 102.64842671081, sd: 10 },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity only at computed D-line Gaussian plane; no factory focus schedule.",
  },
  aperture: { nominalFNumber: 12.1, fStops: [12.1, 14, 16, 22, 32], maxFNumber: 32 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 15 },
  groups: [{ text: "DOUBLET", fromSurface: "1", toSurface: "3" }],
  doublets: [{ text: "D1", fromSurface: "1", toSurface: "3" }],
  layout: { yScFill: 0.4 },
} satisfies LensDataV2Input;

export default LENS_DATA;
