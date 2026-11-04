import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** Whole literal patent example; Grade B probable family, not factory-exact.
 * Clear caps and unprinted iris data are disclosed hypotheses; source planes remain fixed.
 * S4/S5 retain positive0.0444391mm physical clearance; minimal gapSagFrac0.925935
 * admits the source-F2.5 axial beam at S5 SD9.2mm. No source R/d/index was altered.
 * Unqualified source N/Abbe use an explicit d587.5618nm reference hypothesis.
 */
const LENS_DATA = {
  schema: 2,
  key: "canon-ef-50mm-f25-compact-macro",
  maker: "Canon",
  name: "CANON EF 50mm f/2.5 Compact Macro",
  subtitle: "JP S63-179308 A Numerical Example 2 — probable family; inferred apertures",
  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    elementCount: 9,
    groupCount: 8,
    focalLengthMm: {
      marketing: 50,
      design: 50.3,
    },
    fNumber: {
      marketing: 2.5,
      design: 2.5,
    },
    specs: [
      "9 POWERED ELEMENTS / 8 GROUPS",
      "PROBABLE FAMILY; INFERRED APERTURES",
      "SOURCE FINITE SPACING; DERIVED CONJUGATE",
    ],
  },
  source: {
    patentNumber: "JP S63-179308 A",
    example: {
      label: "Numerical Example 2",
      id: "2",
    },
    patentYear: 1988,
    authors: ["Takashi Matsushita"],
    assignees: ["Canon Inc."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.2,
      glass: "Unmatched (literal unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: 73.91359215522337,
      role: "Source positive element. Isolated-in-air power is descriptive, not cemented in-system power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 40.9,
      glass: "Unmatched (literal unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: 48.43047757002394,
      role: "Source positive element. Isolated-in-air power is descriptive, not cemented in-system power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.60717,
      vd: 40.3,
      glass: "Unmatched (literal unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: -27.67386070617443,
      role: "Source negative element. Isolated-in-air power is descriptive, not cemented in-system power.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.69895,
      vd: 30.1,
      glass: "Unmatched (literal unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: 95.97179628769526,
      role: "Source positive element. Isolated-in-air power is descriptive, not cemented in-system power.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      glass: "Unmatched (literal unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: -16.56395949737902,
      role: "Source negative element. Isolated-in-air power is descriptive, not cemented in-system power.",
      cemented: "CD1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.834,
      vd: 37.2,
      glass: "Unmatched (literal unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: 26.377815409965656,
      role: "Source positive element. Isolated-in-air power is descriptive, not cemented in-system power.",
      cemented: "CD1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      glass: "Unmatched (literal unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: 43.46771845183897,
      role: "Source positive element. Isolated-in-air power is descriptive, not cemented in-system power.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.66672,
      vd: 48.3,
      glass: "Unmatched (literal unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: -116.38728602870907,
      role: "Source negative element. Isolated-in-air power is descriptive, not cemented in-system power.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.58144,
      vd: 40.7,
      glass: "Unmatched (literal unqualified N/Abbe; d-line hypothesis)",
      indexReference: "d",
      indexReferenceNote:
        "Printed N/Abbe reference line is unspecified. Literal indices are implemented at d587.5618nm as an explicit hypothesis; supplier/full dispersion unresolved.",
      focalLengthMm: 115.92,
      role: "Source positive element. Isolated-in-air power is descriptive, not cemented in-system power.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 76.72,
      d: 2.25,
      sd: 11.1,
      medium: 1,
    },
    {
      label: "2",
      R: -171.59,
      d: 0.15,
      sd: 11.1,
    },
    {
      label: "3",
      R: 25.09,
      d: 3.6,
      sd: 10.5,
      medium: 2,
    },
    {
      label: "4",
      R: 65.72,
      d: 0.6,
      sd: 10.5,
    },
    {
      label: "5",
      R: 462.21,
      d: 3.27,
      sd: 9.2,
      medium: 3,
    },
    {
      label: "6",
      R: 16.17,
      d: 4.0,
      sd: 10,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.1,
    },
    {
      label: "8",
      R: -38.34,
      d: 3.3,
      sd: 10.5,
      medium: 4,
    },
    {
      label: "9",
      R: -25.26,
      d: 1.35,
      sd: 8.4,
    },
    {
      label: "10",
      R: -14.66,
      d: 1.87,
      sd: 8.4,
      medium: 5,
    },
    {
      label: "11",
      R: 156.19,
      d: 4.77,
      sd: 10.5,
      medium: 6,
    },
    {
      label: "12",
      R: -25.25,
      d: 0.25,
      sd: 10.5,
    },
    {
      label: "13",
      R: -88.58,
      d: 3.6,
      sd: 11.1,
      medium: 7,
    },
    {
      label: "14",
      R: -24.78,
      sd: 11.1,
    },
    {
      label: "15",
      R: 85.78,
      d: 1.8,
      sd: 13.7,
      medium: 8,
    },
    {
      label: "16",
      R: 40.4,
      d: 1.06,
      sd: 13.7,
    },
    {
      label: "17",
      R: 64.44,
      d: 3.0,
      sd: 13.7,
      medium: 9,
    },
    {
      label: "18",
      R: 1441.23,
      d: 38.907158076,
      sd: 13.7,
    },
  ],
  focus: {
    closeFocusM: 0.228547738,
    keyframes: [0, 1],
    published: [1],
    description:
      "JP S63-179308 A Numerical Example2 prints D14=1.7 to26.9mm and describes front-group objectward motion. This constrained endpoint reconstruction holds the rear two elements and image plane fixed; the front seven plus literal stop therefore translate25.2mm objectward. Object distance is calculated from literal geometry and independently derived frozen infinity BFL, not a printed object-distance datum or retail230mm calibration. Source0.5x beta residual remains. Only the explicit endpoint has a finite conjugate; intermediate gap interpolation is an implementation approximation, not a published cam. Physical iris follows the infinity f-number rule; source effectiveF3.5 is compared separately.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 124.77058004778468,
        distanceReference: "first-surface",
        source:
          "JP S63-179308 A Numerical Example2 prints D14=1.7 to26.9mm and describes front-group objectward motion. This constrained endpoint reconstruction holds the rear two elements and image plane fixed; the front seven plus literal stop therefore translate25.2mm objectward. Object distance is calculated from literal geometry and independently derived frozen infinity BFL, not a printed object-distance datum or retail230mm calibration. Source0.5x beta residual remains.",
      },
    ],
  },
  aperture: {
    nominalFNumber: 2.5,
    fStops: [2.5, 2.8, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 46,
    maxTraceFieldDeg: 23,
  },
  groups: [
    {
      text: "I",
      fromSurface: "1",
      toSurface: "14",
    },
    {
      text: "II",
      fromSurface: "15",
      toSurface: "18",
    },
  ],
  doublets: [
    {
      text: "CD1",
      fromSurface: "10",
      toSurface: "12",
    },
  ],
  layout: {
    yScFill: 0.7,
  },
  checks: {
    gapSagFrac: 0.925935,
  },
  gaps: {
    "14": {
      label: "D14",
      values: [[1.7, 26.9]],
    },
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
