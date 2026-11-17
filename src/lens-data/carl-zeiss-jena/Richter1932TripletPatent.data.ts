import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  schema: 2,
  key: "zeiss-richter-us1892162-patent-reference",
  maker: "Carl Zeiss Jena",
  name: "RICHTER THREE-LENS PATENT REFERENCE",
  subtitle: "1932 100 mm f/4.5; PATENT ONLY",
  visible: false,
  catalog: {
    specs: [
      "3 ELEMENTS / 3 GROUPS",
      "PATENT ONLY; RETAIL IDENTITY UNPROVED",
      "SOURCE LENS DIAMETERS; ESTIMATED STOP",
      "INFINITY ONLY",
    ],
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: {
      design: 100.000439907571,
    },
    fNumber: {
      design: 4.5,
    },
  },
  source: {
    patentNumber: "US 1,892,162",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1932,
    authors: ["Robert Richter"],
    assignees: ["Carl Zeiss Jena"],
    sdSource: "source-table",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Plano-convex",
      nd: 1.6227,
      vd: 56.9,
      indexReference: "D",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Biconcave",
      nd: 1.6128,
      vd: 37.0,
      indexReference: "D",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconvex",
      nd: 1.6423,
      vd: 48.0,
      indexReference: "D",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 23.25,
      d: 4.5,
      sd: 11.7,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 3.7,
      sd: 11.7,
    },
    {
      label: "3",
      R: -78.6,
      d: 1.3,
      sd: 10.4,
      medium: 2,
    },
    {
      label: "4",
      R: 22.85,
      d: 5,
      sd: 10.4,
    },
    {
      label: "STO",
      R: "flat",
      d: 5,
    },
    {
      label: "5",
      R: 205,
      d: 2.5,
      sd: 10,
      medium: 3,
    },
    {
      label: "6",
      R: -59.96,
      d: 82.23402737346156,
      sd: 10,
    },
  ],
  aperture: {
    nominalFNumber: 4.5,
    fStops: [4.5, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Infinity-only; literal nD/V, signed radii, source lens diameters retained; calculated paraxial BFD; estimated iris midway in final air gap. No production identity.",
  },
  groups: [],
  doublets: [],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
