import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** Whole literal patent example; Grade B probable family, not factory-exact.
 * Clear caps and unprinted iris data are disclosed hypotheses; source planes remain fixed.
 * Maker extra front item is unprescribed and omitted. Source L controls the image plane.
 * Unqualified source N/Abbe use an explicit d587.5618nm reference hypothesis.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-fl-f-500mm-f56",
  maker: "Canon",
  name: "CANON FL-F 500mm f/5.6",
  subtitle: "JP S47-8109 B Example 1 — probable family; inferred apertures",
  catalog: {
    lensMounts: ["canon-fl"],
    imageFormat: "135-full-frame",
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: {
      marketing: 500,
      design: 500,
    },
    fNumber: {
      marketing: 5.6,
      design: 5.6,
    },
    specs: [
      "5 POWERED ELEMENTS / 4 GROUPS",
      "PROBABLE FAMILY; INFERRED APERTURES",
      "INFINITY BASELINE",
      "MAKER EXTRA FRONT ELEMENT UNPRESCRIBED; OMITTED",
    ],
  },
  source: {
    patentNumber: "JP S47-8109 B",
    example: {
      label: "Example 1",
      id: "1",
    },
    patentYear: 1972,
    authors: ["Michiyoshi Suwa", "Shuji Koyanagi"],
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
      focalLengthMm: 187.646167407593,
      role: "Source CaF2 positive element. Isolated-in-air power is descriptive, not cemented in-system power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Biconcave Negative",
      nd: 1.79952,
      vd: 42.3,
      glass: "Unmatched (literal LaSF02; unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: -191.79556557069063,
      role: "Source LaSF02 negative element. Isolated-in-air power is descriptive, not cemented in-system power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.0,
      glass: "Unmatched (literal FK5; unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: 233.79682226854194,
      role: "Source FK5 positive element. Isolated-in-air power is descriptive, not cemented in-system power.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.713,
      vd: 53.9,
      glass: "Unmatched (literal LaK8; unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: -45.22075259995423,
      role: "Source LaK8 negative element. Isolated-in-air power is descriptive, not cemented in-system power.",
      cemented: "CD1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.4,
      glass: "Unmatched (literal F16; unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: 83.45540747803705,
      role: "Source F16 positive element. Isolated-in-air power is descriptive, not cemented in-system power.",
      cemented: "CD1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 123.765,
      d: 15.415000000000001,
      sd: 48.2,
      medium: 1,
    },
    {
      label: "2",
      R: -228.95499999999998,
      d: 16.025,
      sd: 48.2,
    },
    {
      label: "3",
      R: -183.46499999999997,
      d: 4.82,
      sd: 48.2,
      medium: 2,
    },
    {
      label: "4",
      R: 944.9250000000001,
      d: 3.37,
      sd: 48.2,
    },
    {
      label: "5",
      R: 109.17,
      d: 11.565000000000001,
      sd: 48.2,
      medium: 3,
    },
    {
      label: "6",
      R: 2500.31,
      d: 63.4875,
      sd: 48.2,
    },
    {
      label: "STO",
      R: "flat",
      d: 63.4875,
    },
    {
      label: "7",
      R: -55.175,
      d: 7.4350000000000005,
      sd: 19.3,
      medium: 4,
    },
    {
      label: "8",
      R: 81.92500000000001,
      d: 17.63,
      sd: 19.3,
      medium: 5,
    },
    {
      label: "9",
      R: -114.84,
      d: 125.6,
      sd: 19.3,
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
    fullFieldDeg: 5.0,
    maxTraceFieldDeg: 2.5,
  },
  groups: [
    {
      text: "Front",
      fromSurface: "1",
      toSurface: "6",
    },
    {
      text: "Rear",
      fromSurface: "7",
      toSurface: "9",
    },
  ],
  doublets: [
    {
      text: "CD1",
      fromSurface: "7",
      toSurface: "9",
    },
  ],
  layout: {
    yScFill: 0.7,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
