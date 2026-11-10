import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** H1 NATIVE-QUALIFIED REPRESENTATIVE MODEL; full integration pending.
 * Whole JPS45-39874 Example 3; exactly 35 times every source length.
 * Source N/V are modeled with explicitly ASSUMED d-reference, not a source fact.
 * Stop is midpoint of unchanged dB4; all caps are inferred hypotheses.
 * Published back focus 1.05 is retained, not fitted to calculated focus.
 * No factory or finite-focus claim; bounded native MTF limits documented in analysis.
 */
const LENS_DATA = {
  schema: 2,
  key: "minolta-mc-w-rokkor-x-35f18",
  maker: "Minolta",
  name: "MINOLTA MC W ROKKOR-X 35mm f/1.8",
  subtitle: "JP 1970-039874 B EXAMPLE 3 — REPRESENTATIVE SOURCE DESIGN",
  visible: true,
  catalog: {
    lensMounts: ["minolta-sr"],
    imageFormat: "135-full-frame",
    specs: [
      "8 ELEMENTS / 6 GROUPS",
      "35× NORMALIZED SOURCE",
      "SOURCE F/1.8; FULL FIELD 64°",
      "ASSUMED D-REFERENCE",
      "ALL SPHERICAL",
    ],
    elementCount: 8,
    groupCount: 6,
    closeFocusM: {
      marketing: 0.3,
    },
    focalLengthMm: {
      marketing: 35,
      design: 35,
    },
    fNumber: {
      marketing: 1.8,
      design: 1.8,
    },
  },
  source: {
    patentNumber: "JP 1970-039874 B",
    example: {
      label: "Example 3",
      id: "3",
    },
    patentYear: 1970,
    authors: ["Toshinobu Ogura"],
    assignees: ["Minolta Camera Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      glass: "Unmatched (source N/V; assumed d-reference, catalog identity unverified)",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.6176,
      vd: 52.7,
      indexReference: "d",
      glass: "Unmatched (source N/V; assumed d-reference, catalog identity unverified)",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.6775,
      vd: 55.4,
      indexReference: "d",
      glass: "Unmatched (source N/V; assumed d-reference, catalog identity unverified)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.6775,
      vd: 55.4,
      indexReference: "d",
      glass: "Unmatched (source N/V; assumed d-reference, catalog identity unverified)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.6477,
      vd: 33.9,
      indexReference: "d",
      glass: "Unmatched (source N/V; assumed d-reference, catalog identity unverified)",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.708,
      vd: 53.3,
      indexReference: "d",
      glass: "Unmatched (source N/V; assumed d-reference, catalog identity unverified)",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.7557,
      vd: 27.2,
      indexReference: "d",
      glass: "Unmatched (source N/V; assumed d-reference, catalog identity unverified)",
      cemented: "D2",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.708,
      vd: 53.3,
      indexReference: "d",
      glass: "Unmatched (source N/V; assumed d-reference, catalog identity unverified)",
      cemented: "D2",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 225.19,
      d: 5.775,
      sd: 18,
      medium: 1,
    },
    {
      label: "2",
      R: -59.7625,
      d: 1.225,
      sd: 18,
      medium: 2,
    },
    {
      label: "3",
      R: 21.3325,
      d: 19.0295,
      sd: 18,
    },
    {
      label: "4",
      R: 46.34,
      d: 17.0205,
      sd: 17,
      medium: 3,
    },
    {
      label: "5",
      R: -50.68,
      d: 0.1715,
      sd: 17,
    },
    {
      label: "6",
      R: 27.0235,
      d: 2.9295,
      sd: 15,
      medium: 4,
    },
    {
      label: "7",
      R: 47.2255,
      d: 3.17975,
      sd: 15,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.17975,
    },
    {
      label: "8",
      R: -60.9665,
      d: 5.558,
      sd: 11.50796,
      medium: 5,
    },
    {
      label: "9",
      R: 27.349,
      d: 3.64,
      sd: 11,
    },
    {
      label: "10",
      R: -135.3695,
      d: 2.9155,
      sd: 12,
      medium: 6,
    },
    {
      label: "11",
      R: -32.739,
      d: 0.175,
      sd: 12,
    },
    {
      label: "12",
      R: 113.085,
      d: 0.9205,
      sd: 12,
      medium: 7,
    },
    {
      label: "13",
      R: 32.2175,
      d: 3.7135,
      sd: 12,
      medium: 8,
    },
    {
      label: "14",
      R: -88.403,
      d: 36.75,
      sd: 12,
    },
  ],
  layout: {
    yScFill: 0.3,
  },
  focus: {
    closeFocusM: 1000,
    description:
      "Infinity-only source station. The 1000 m software control bound is a placeholder, not the maker 0.3 m close-focus specification. No finite-focus law is supplied.",
  },
  gaps: {},
  aperture: {
    nominalFNumber: 1.8,
    fStops: [1.8, 2, 2.8, 4, 5.6, 8, 11, 16],
  },
  doublets: [
    {
      text: "D1",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "D2",
      fromSurface: "12",
      toSurface: "14",
    },
  ],
} satisfies LensDataV2Input;

export default LENS_DATA;
