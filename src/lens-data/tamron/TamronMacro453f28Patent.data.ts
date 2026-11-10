import type { LensDataV2Input } from "../../types/lensDataV2.js";

// Integration draft: native endpoint geometry and infinity reference MTF checked; full gates pending.
// Literal source S1 is an air reference 3 mm before first glass S2, not a glass plate.
// Inferred caps are not measured rims. Stop S10 is mapped to STO with exact 4+4 mm gaps.
// No source tuning, glass-name substitution, camera plate, or sag override.
// Grant wording/wavelength conflicts are retained in source.errata and the audit.
const LENS_DATA = {
  schema: 2,
  key: "tamron-macro-45-3mm-f2-8-patent",
  maker: "Tamron",
  name: "TAMRON MACRO 45.3mm f/2.8 PATENT DESIGN",
  subtitle: "US7286303B2; no identified retail lens",
  catalog: {
    specs: [
      "9 ELEMENTS / 8 GROUPS",
      "PATENT DESIGN; NO RETAIL IDENTIFICATION",
      "f = 45.3 mm",
      "F/2.8",
      "IMAGE HEIGHT = 21.633 mm",
    ],
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: {
      design: 45.3,
    },
    fNumber: {
      design: 2.8,
    },
    imageCircleMm: 43.266,
  },
  source: {
    patentNumber: "US 7,286,303 B2",
    example: {
      label: "Sole example",
      id: null,
    },
    patentYear: 2007,
    authors: ["Akio Arakawa", "Yuichi Muramatsu"],
    assignees: ["Tamron Co., Ltd."],
    errata: [
      {
        status: "unresolved",
        note: "Grant claim describes first-element object face as concave; table, description, Fig. 1 and application claim instead support convex. Literal table retained.",
      },
      {
        status: "unresolved",
        note: "Grant wavelengths are truncated to 87.56 and 84 nm. Application paragraph 0048 prints 587.56 and 435.84 nm; d-line interpretation uses the application.",
      },
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      glass: "Unmatched (patent nd = 1.6968, νd = 55.5)",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7552,
      vd: 27.5,
      indexReference: "d",
      glass: "Unmatched (patent nd = 1.7552, νd = 27.5)",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      glass: "Unmatched (patent nd = 1.72, νd = 50.3)",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.3,
      indexReference: "d",
      glass: "Unmatched (patent nd = 1.62004, νd = 36.3)",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.71736,
      vd: 29.5,
      indexReference: "d",
      glass: "Unmatched (patent nd = 1.71736, νd = 29.5)",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      glass: "Unmatched (patent nd = 1.7725, νd = 49.6)",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      glass: "Unmatched (patent nd = 1.72, νd = 50.3)",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.72,
      vd: 50.3,
      indexReference: "d",
      glass: "Unmatched (patent nd = 1.72, νd = 50.3)",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.54072,
      vd: 47.2,
      indexReference: "d",
      glass: "Unmatched (patent nd = 1.54072, νd = 47.2)",
    },
  ],
  surfaces: [
    {
      label: "2",
      R: 31.9956,
      d: 1.5,
      sd: 12,
      medium: 1,
    },
    {
      label: "3",
      R: 17.3927,
      d: 2,
      sd: 10.179,
    },
    {
      label: "4",
      R: 35.0333,
      d: 3,
      sd: 10.179,
      medium: 2,
    },
    {
      label: "5",
      R: 70.9037,
      d: 1,
      sd: 11,
    },
    {
      label: "6",
      R: 20.4157,
      d: 3.5,
      sd: 10.5,
      medium: 3,
    },
    {
      label: "7",
      R: -304.9499,
      d: 1,
      sd: 10.5,
    },
    {
      label: "8",
      R: 200,
      d: 1.5,
      sd: 9.5,
      medium: 4,
    },
    {
      label: "9",
      R: 16.6496,
      d: 4,
      sd: 9.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 4,
    },
    {
      label: "11",
      R: -14.6537,
      d: 2,
      sd: 9.5,
      medium: 5,
    },
    {
      label: "12",
      R: 233.334,
      d: 5,
      sd: 10.5,
      medium: 6,
    },
    {
      label: "13",
      R: -20.0075,
      d: 0.2,
      sd: 10.5,
    },
    {
      label: "14",
      R: 257.9798,
      d: 3.5,
      sd: 11.5,
      medium: 7,
    },
    {
      label: "15",
      R: -34.8265,
      sd: 11.5,
    },
    {
      label: "16",
      R: 61.6658,
      d: 1,
      sd: 13,
      medium: 8,
    },
    {
      label: "17",
      R: 36.9213,
      d: 1.8,
      sd: 12.318,
    },
    {
      label: "18",
      R: 147.6397,
      d: 3,
      sd: 12.318,
      medium: 9,
    },
    {
      label: "19",
      R: -182.6472,
      sd: 13,
    },
  ],
  focus: {
    closeFocusM: 0.1844049802420535,
    published: [1],
    description:
      "Two source-tabulated endpoints only. Both assemblies move objectward; stop moves with front assembly. Intermediate interpolation is not a source cam law. Near distance is paraxially derived, not measured working distance.",
  },
  gaps: {
    "15": {
      label: "D15",
      values: [[0.669, 21.832]],
    },
    "19": {
      label: "BF",
      values: [[42.605, 63.767]],
    },
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16],
  },
  groups: [
    {
      text: "FRONT",
      fromSurface: "2",
      toSurface: "15",
    },
    {
      text: "REAR",
      fromSurface: "16",
      toSurface: "19",
    },
  ],
  doublets: [
    {
      text: "D1",
      fromSurface: "11",
      toSurface: "13",
    },
  ],
  layout: {
    scFill: 0.55,
    yScFill: 0.35,
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
