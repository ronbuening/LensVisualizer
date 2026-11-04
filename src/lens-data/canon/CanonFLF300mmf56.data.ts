import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** Whole literal patent example; Grade B probable family, not factory-exact.
 * Clear caps and unprinted iris data are disclosed hypotheses; source planes remain fixed.
 * Maker extra front item is unprescribed and omitted. Source L controls the image plane.
 * Unqualified source N/Abbe use an explicit d587.5618nm reference hypothesis.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-fl-f-300mm-f56",
  maker: "Canon",
  name: "CANON FL-F 300mm f/5.6",
  subtitle: "JP S47-8749 B Example 2 — probable family; inferred apertures",
  catalog: {
    lensMounts: ["canon-fl"],
    imageFormat: "135-full-frame",
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: {
      marketing: 300,
      design: 300,
    },
    fNumber: {
      marketing: 5.6,
      design: 5.6,
    },
    specs: [
      "6 POWERED ELEMENTS / 5 GROUPS",
      "PROBABLE FAMILY; INFERRED APERTURES",
      "INFINITY BASELINE",
      "MAKER EXTRA FRONT ELEMENT UNPRESCRIBED; OMITTED",
    ],
  },
  source: {
    patentNumber: "JP S47-8749 B",
    example: {
      label: "Example 2",
      id: "2",
    },
    patentYear: 1972,
    authors: ["Michiyoshi Suwa"],
    assignees: ["Canon Inc."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.43387,
      vd: 95.1,
      glass: "Unmatched (literal CaF2; unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: 128.68635382982097,
      role: "Source CaF2 positive element. Isolated-in-air power is descriptive, not cemented in-system power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.43387,
      vd: 95.1,
      glass: "Unmatched (literal CaF2; unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: 182.08966946254128,
      role: "Source CaF2 positive element. Isolated-in-air power is descriptive, not cemented in-system power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.7847,
      vd: 26.1,
      glass: "Unmatched (literal SFS3; unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: 345.34846160563654,
      role: "Source SFS3 positive element. Isolated-in-air power is descriptive, not cemented in-system power.",
      cemented: "CD1",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.8044,
      vd: 39.6,
      glass: "Unmatched (literal LaSFo13; unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: -84.20133605539667,
      role: "Source LaSFo13 negative element. Isolated-in-air power is descriptive, not cemented in-system power.",
      cemented: "CD1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.7432,
      vd: 49.3,
      glass: "Unmatched (literal LaFo10; unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: -41.803556975448735,
      role: "Source LaFo10 negative element. Isolated-in-air power is descriptive, not cemented in-system power.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.4,
      glass: "Unmatched (literal F16; unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: 71.49156035175966,
      role: "Source F16 positive element. Isolated-in-air power is descriptive, not cemented in-system power.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 64.077,
      d: 8.34,
      sd: 28.9,
      medium: 1,
    },
    {
      label: "2",
      R: -416.88300000000004,
      d: 0.18,
      sd: 28.9,
    },
    {
      label: "3",
      R: 66.816,
      d: 6.218999999999999,
      sd: 28.9,
      medium: 2,
    },
    {
      label: "4",
      R: 420.933,
      d: 5.9910000000000005,
      sd: 28.9,
    },
    {
      label: "5",
      R: -647.2560000000001,
      d: 3.609,
      sd: 28.9,
      medium: 3,
    },
    {
      label: "6",
      R: -191.487,
      d: 1.479,
      sd: 28.9,
      medium: 4,
    },
    {
      label: "7",
      R: 105.162,
      d: 59.824799999999996,
      sd: 28.9,
    },
    {
      label: "STO",
      R: "flat",
      d: 25.639200000000002,
    },
    {
      label: "8",
      R: -32.367,
      d: 2.8409999999999997,
      sd: 13.3,
      medium: 5,
    },
    {
      label: "9",
      R: 803.346,
      d: 3.75,
      sd: 13.3,
    },
    {
      label: "10",
      R: 344.637,
      d: 6.0600000000000005,
      sd: 13.3,
      medium: 6,
    },
    {
      label: "11",
      R: -47.997,
      d: 83.19300000000001,
      sd: 13.3,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Frozen source infinity baseline; finite source motion is assessed separately where tabulated. No retail minimum-focus law or unprinted cam interpolation is asserted.",
  },
  aperture: {
    nominalFNumber: 5.6,
    fStops: [5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 8.2,
    maxTraceFieldDeg: 4.1,
  },
  groups: [
    {
      text: "Front",
      fromSurface: "1",
      toSurface: "7",
    },
    {
      text: "Rear",
      fromSurface: "8",
      toSurface: "11",
    },
  ],
  doublets: [
    {
      text: "CD1",
      fromSurface: "5",
      toSurface: "7",
    },
  ],
  layout: {
    yScFill: 0.7,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
