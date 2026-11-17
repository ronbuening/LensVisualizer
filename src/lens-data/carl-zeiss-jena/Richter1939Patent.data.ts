import type { LensDataV2Input } from "../../types/lensDataV2.js";
const LENS_DATA = {
  schema: 2,
  key: "zeiss-richter-us2170428-patent-reference",
  maker: "Carl Zeiss Jena",
  name: "RICHTER f/1.9 PATENT REFERENCE",
  subtitle: "1939 FOUR-LENS PROJECTION OBJECTIVE; PATENT ONLY",
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
      design: 99.77549430250204,
    },
    fNumber: {
      design: 1.9,
    },
  },
  source: {
    patentNumber: "US 2,170,428",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 1939,
    authors: ["Robert Richter"],
    assignees: ["Carl Zeiss Jena"],
    sdSource: "heuristic",
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Biconvex",
      nd: 1.6138,
      vd: 56.3,
      indexReference: "d",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Positive Meniscus",
      nd: 1.6138,
      vd: 56.3,
      indexReference: "d",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconcave",
      nd: 1.7174,
      vd: 29.5,
      indexReference: "d",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconvex",
      nd: 1.6138,
      vd: 56.3,
      indexReference: "d",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 85.4,
      d: 7.7,
      sd: 28,
      medium: 1,
    },
    {
      label: "2",
      R: -500,
      d: 0.5,
      sd: 28,
    },
    {
      label: "3",
      R: 44.5,
      d: 19,
      sd: 28,
      medium: 2,
    },
    {
      label: "4",
      R: 70,
      d: 4.5,
      sd: 19,
    },
    {
      label: "5",
      R: -135,
      d: 2,
      sd: 19,
      medium: 3,
    },
    {
      label: "6",
      R: 34.3,
      d: 9.5,
      sd: 19,
    },
    {
      label: "STO",
      R: "flat",
      d: 9.5,
    },
    {
      label: "7",
      R: 146,
      d: 8,
      sd: 22,
      medium: 4,
    },
    {
      label: "8",
      R: -46.8,
      d: 63.210155829439294,
      sd: 22,
    },
  ],
  aperture: {
    nominalFNumber: 1.9,
    fStops: [1.9, 2.8, 4, 5.6, 8, 11, 16],
  },
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Infinity-only reciprocal projection reference; literal nd/V retained; calculated paraxial BFD; estimated iris in final air gap. No production identity.",
  },
  groups: [],
  doublets: [],
  layout: {
    yScFill: 0.4,
  },
} satisfies LensDataV2Input;
export default LENS_DATA;
