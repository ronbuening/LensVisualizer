/*
BUSCH PANTOSKOP f/30.4 (von Rohr 1899, Fig. 108)
Literature reconstruction staged from the von Rohr package file BuschPantoskop1865.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "busch-pantoskop-1865-von-rohr-1899",
  maker: null,
  name: "BUSCH PANTOSKOP f/30.4 (von Rohr 1899, Fig. 108)",
  visible: false,
  catalog: {
    specs: ["4 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 30.4 },
  },
  source: {
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 281, Fig. 108",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=37",
      after: "J. M. Eder",
    },
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front crown",
      type: "Positive Meniscus",
      nd: 1.5331,
      indexReference: "D",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Front flint",
      type: "Negative Meniscus",
      nd: 1.6079,
      indexReference: "D",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Rear flint",
      type: "Negative Meniscus",
      nd: 1.6079,
      indexReference: "D",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      label: "Rear crown",
      type: "Positive Meniscus",
      nd: 1.5331,
      indexReference: "D",
      cemented: "D2",
    },
  ],
  surfaces: [
    { label: "1", R: 7.45, d: 1.74, sd: 6, medium: 1 },
    { label: "2", R: 10.39, d: 0.19, sd: 6, medium: 2 },
    { label: "3", R: 7.63, d: 6.2, sd: 6 },
    { label: "STO", R: "flat", d: 6.2 },
    { label: "4", R: -7.63, d: 0.19, sd: 6, medium: 3 },
    { label: "5", R: -10.39, d: 1.74, sd: 6, medium: 4 },
    { label: "6", R: -7.45, d: 91.07041616826949, sd: 6 },
  ],
  focus: {
    closeFocusM: 1e15,
    description: "Infinity-only D-line historical reference; Gaussian image plane; no close-focus schedule.",
  },
  aperture: { nominalFNumber: 30.4, fStops: [30.4, 40, 56, 64], maxFNumber: 64 },
  projection: { kind: "rectilinear", fullFieldDeg: 98, maxTraceFieldDeg: 49 },
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "3" },
    { text: "REAR", fromSurface: "4", toSurface: "6" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "4", toSurface: "6" },
  ],
  layout: { yScFill: 0.35 },
} satisfies LensDataV2Input;

export default LENS_DATA;
