import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * US 2,760,406 A, sole example: four spherical elements in three groups.
 * The unitless prescription is represented in millimetres, without changing
 * its numerical scale. The prescription gives EFL 100.89 mm against
 * the stated "about f = 100".
 * The text names D, but the printed glass coordinates are d-line values;
 * the model uses d and retains every printed index and Abbe number.
 * The stop is inferred from the drawing, 9.0 mm after R4 and 2.3 mm before R5;
 * its opening is derived for f/2. Clear rims are estimated from the page 1
 * drawing, checked against the axial f/2 beam and 14-degree chief ray.
 * Front rims exceed the drawing to retain corner light; the rear cemented
 * pair has a common rim. The image plane is the computed paraxial back
 * focus, 69.02 mm after R7.
 */
const LENS_DATA = {
  schema: 2,
  key: "carl-zeiss-100mm-f2-us2760406",
  maker: "Carl Zeiss Oberkochen",
  name: "CARL ZEISS 100mm f/2 (US 2,760,406 Design)",
  subtitle: "US 2,760,406 A, sole example — Zeiss / Berger",
  visible: true,
  source: {
    patentNumber: "US 2,760,406 A",
    patentYear: 1956,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Johannes Berger"],
    assignees: ["Carl-Zeiss-Stiftung"],
    errata: [
      {
        status: "unresolved",
        note: "The text names the D line, but the printed glass coordinates correspond to d-line catalogue values. The model uses d while retaining every printed index and Abbe number.",
      },
    ],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100.89,
    },
    fNumber: {
      design: 2,
    },
    elementCount: 4,
    groupCount: 3,
    imageCircleMm: 49.6,
    specs: ["4 ELEMENTS / 3 GROUPS", "ALL SPHERICAL", "DESIGN f = 100 mm", "DESIGN F/2"],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.691,
      vd: 54.8,
      indexReference: "d",
      indexReferenceNote: "The text names D, but the printed glass coordinates are d-line catalogue values.",
      glass: "Unmatched (nd 1.69100 / ν 54.8)",
      focalLengthMm: 65.57,
      role: "Positive front component that converges the incoming beam",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.64831,
      vd: 33.8,
      indexReference: "d",
      indexReferenceNote: "The text names D, but the printed glass coordinates are d-line catalogue values.",
      glass: "Unmatched (nd 1.64831 / ν 33.8)",
      focalLengthMm: -32.65,
      role: "Negative middle component balancing the positive components",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.691,
      vd: 54.8,
      indexReference: "d",
      indexReferenceNote: "The text names D, but the printed glass coordinates are d-line catalogue values.",
      glass: "Unmatched (nd 1.69100 / ν 54.8)",
      focalLengthMm: 29.08,
      role: "Positive front member of the rear cemented component",
      cemented: "C1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.60729,
      vd: 49.2,
      indexReference: "d",
      indexReferenceNote: "The text names D, but the printed glass coordinates are d-line catalogue values.",
      glass: "Unmatched (nd 1.60729 / ν 49.2)",
      focalLengthMm: -61.68,
      role: "Negative rear member balancing the rear cemented component",
      cemented: "C1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 41.567,
      d: 14,
      sd: 28,
      medium: 1,
    },
    {
      label: "2",
      R: 434.01,
      d: 11,
      sd: 26,
    },
    {
      label: "3",
      R: -100,
      d: 5,
      sd: 20.6,
      medium: 2,
    },
    {
      label: "4",
      R: 27.384,
      d: 9,
      sd: 17.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.3,
    },
    {
      label: "5",
      R: 77.179,
      d: 24,
      sd: 21.1,
      medium: 3,
    },
    {
      label: "6",
      R: -23.714,
      d: 5,
      sd: 21.1,
      medium: 4,
    },
    {
      label: "7",
      R: -69.783,
      d: 69.018475,
      sd: 21.1,
    },
  ],
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 28,
    maxTraceFieldDeg: 14,
  },
  focus: {
    closeFocusM: 1e15,
    description: "Infinity focus only; the patent gives no close-focus data.",
  },
  groups: [
    {
      text: "Front positive component",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Middle negative component",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Rear cemented component",
      fromSurface: "5",
      toSurface: "7",
    },
  ],
  doublets: [{ text: "C1", fromSurface: "5", toSurface: "7" }],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
