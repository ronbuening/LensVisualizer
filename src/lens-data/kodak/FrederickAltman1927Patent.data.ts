import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  schema: 2,
  key: "kodak-frederick-altman-us1620337-patent-reference",
  maker: "Kodak",
  name: "FREDERICK / ALTMAN f/2 PATENT REFERENCE",
  subtitle: "1927 PROJECTION EXAMPLE; HIDDEN QUALIFIED REFERENCE",
  visible: false,
  catalog: {
    specs: [
      "4 ELEMENTS / 4 GROUPS",
      "PATENT REFERENCE; RETAIL IDENTITY UNPROVED",
      "ESTIMATED STOP AND RIMS",
      "INFINITY ONLY",
    ],
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: {
      design: 100.07863175683997,
    },
    fNumber: {
      design: 2,
    },
  },
  source: {
    patentNumber: "US 1,620,337",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1927,
    authors: ["Charles W. Frederick", "Fred E. Altman"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Biconvex",
      nd: 1.61088,
      vd: 57.2,
      indexReference: "D",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Biconcave",
      nd: 1.6168,
      vd: 36.4,
      indexReference: "D",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Negative Meniscus",
      nd: 1.6168,
      vd: 36.4,
      indexReference: "D",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconvex",
      nd: 1.61088,
      vd: 57.2,
      indexReference: "D",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 64,
      d: 12,
      sd: 26,
      medium: 1,
    },
    {
      label: "2",
      R: -126,
      d: 1.5,
      sd: 22.5,
    },
    {
      label: "3",
      R: -77.2,
      d: 4.1,
      sd: 22.5,
      medium: 2,
    },
    {
      label: "4",
      R: 684.5,
      d: 9,
      sd: 23,
    },
    {
      label: "STO",
      R: "flat",
      d: 9,
    },
    {
      label: "5",
      R: 222.2,
      d: 4.1,
      sd: 23,
      medium: 3,
    },
    {
      label: "6",
      R: 52.4,
      d: 3,
      sd: 21,
    },
    {
      label: "7",
      R: 126,
      d: 12,
      sd: 21,
      medium: 4,
    },
    {
      label: "8",
      R: -64,
      d: 74.33910968551392,
      sd: 26,
    },
  ],
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Infinity-only reciprocal projection reference; computed paraxial BFD. Exact retail prescription not established.",
  },
  groups: [],
  doublets: [],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
