/*
STEINHEIL PERISKOP f/40 (von Rohr 1899, Fig. 109)
Literature reconstruction staged from the von Rohr package file SteinheilPeriskop1865VonRohr.data.ts (held in
ProposedDeployment/VonRohr_1899_Reconstructions_Held). Header, labels, rims and notes are rewritten in the audit.
*/
import type { LensDataV2Input } from "../../types/lensDataV2.js";

const LENS_DATA = {
  schema: 2,
  key: "steinheil-periskop-1865-von-rohr-1899",
  maker: null,
  name: "STEINHEIL PERISKOP f/40 (von Rohr 1899, Fig. 109)",
  visible: false,
  catalog: {
    specs: ["2 ELEMENTS / 2 GROUPS", "NORMALIZED f = 100 mm", "nD ONLY"],
    elementCount: 2,
    groupCount: 2,
    focalLengthMm: { design: 100 },
    fNumber: { design: 40 },
  },
  source: {
    sdSource: "heuristic",
    literature: {
      authors: ["Moritz von Rohr"],
      title: "Theorie und Geschichte des photographischen Objektivs",
      year: 1899,
      publisher: "Julius Springer",
      place: "Berlin",
      locator: "p. 288, Fig. 109",
      url: "https://www.e-rara.ch/download/pdf/4637944.pdf#page=44",
      after: "J. M. Eder",
    },
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Front crown meniscus",
      type: "Positive Meniscus",
      nd: 1.5233,
      indexReference: "D",
      glass: "Unmatched (historical nD only)",
    },
    {
      id: 2,
      name: "L2",
      label: "Rear crown meniscus",
      type: "Positive Meniscus",
      nd: 1.5233,
      indexReference: "D",
      glass: "Unmatched (historical nD only)",
    },
  ],
  surfaces: [
    { label: "1", R: 17.5, d: 1.3, sd: 6.28, medium: 1 },
    { label: "2", R: 20.8, d: 6.3, sd: 6.28 },
    { label: "STO", R: "flat", d: 6.3 },
    { label: "3", R: -20.8, d: 1.3, sd: 6.28, medium: 2 },
    { label: "4", R: -17.5, d: 90.94758671799075, sd: 6.28 },
  ],
  focus: {
    closeFocusM: 1e15,
    description:
      "Infinity-only sodium-D historical reference; no finite-focus or photographic-focus correction is modeled.",
  },
  aperture: { nominalFNumber: 40, fStops: [40, 45, 56, 64], maxFNumber: 64 },
  projection: { kind: "rectilinear", maxTraceFieldDeg: 46 },
  groups: [
    { text: "FRONT", fromSurface: "1", toSurface: "2" },
    { text: "REAR", fromSurface: "3", toSurface: "4" },
  ],
  layout: { yScFill: 0.5 },
} satisfies LensDataV2Input;

export default LENS_DATA;
