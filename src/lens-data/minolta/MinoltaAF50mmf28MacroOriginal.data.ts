import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** Whole literal patent example; Grade B probable family, not factory-exact.
 * Missing stop/caps are frozen source-informed hypotheses. Derived planes/conjugates are disclosed.
 * Source residuals, clipping and aperture distinctions are retained; no optical tuning.
 */
const LENS_DATA = {
  schema: 2,
  key: "minolta-af-50mm-f28-macro-original",
  maker: "Minolta",
  name: "MINOLTA AF 50mm f/2.8 MACRO",
  subtitle: "JP S59-228220 A Embodiment 3 — probable family; inferred apertures",
  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "135-full-frame",
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: {
      marketing: 50,
      design: 50.0,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    specs: [
      "7 ELEMENTS / 6 GROUPS",
      "PROBABLE FAMILY; INFERRED APERTURES",
      "TABLE F/2.8; SOURCE PLOT F/2.88 DISTINCT",
      "SOURCE FINITE ENDPOINT; DERIVED CONJUGATE",
    ],
  },
  source: {
    patentNumber: "JP S59-228220 A",
    example: {
      label: "Embodiment 3",
      id: "3",
    },
    patentYear: 1984,
    authors: ["Hisashi Tokumaru"],
    assignees: ["Minolta Camera Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.72,
      vd: 50.31,
      indexReference: "d",
      glass: "Unmatched (literal Nd/nu-d; supplier unresolved)",
      indexReferenceNote:
        "Source explicitly labels Nd/nu-d; engine d587.5618nm is the conventional implementation reference.",
      focalLengthMm: 81.8619914462117,
      role: "Literal whole-source positive element. Isolated-in-air focal power is descriptive, not cemented-group power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.77,
      indexReference: "d",
      glass: "Unmatched (literal Nd/nu-d; supplier unresolved)",
      indexReferenceNote:
        "Source explicitly labels Nd/nu-d; engine d587.5618nm is the conventional implementation reference.",
      focalLengthMm: 41.779133379896884,
      role: "Literal whole-source positive element. Isolated-in-air focal power is descriptive, not cemented-group power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.60342,
      vd: 38.01,
      indexReference: "d",
      glass: "Unmatched (literal Nd/nu-d; supplier unresolved)",
      indexReferenceNote:
        "Source explicitly labels Nd/nu-d; engine d587.5618nm is the conventional implementation reference.",
      focalLengthMm: -27.951935500993372,
      role: "Literal whole-source negative element. Isolated-in-air focal power is descriptive, not cemented-group power.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Negative Meniscus",
      nd: 1.67339,
      vd: 29.25,
      indexReference: "d",
      glass: "Unmatched (literal Nd/nu-d; supplier unresolved)",
      indexReferenceNote:
        "Source explicitly labels Nd/nu-d; engine d587.5618nm is the conventional implementation reference.",
      focalLengthMm: -35.73239050268183,
      role: "Literal whole-source negative element. Isolated-in-air focal power is descriptive, not cemented-group power.",
      cemented: "CD1",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.713,
      vd: 53.93,
      indexReference: "d",
      glass: "Unmatched (literal Nd/nu-d; supplier unresolved)",
      indexReferenceNote:
        "Source explicitly labels Nd/nu-d; engine d587.5618nm is the conventional implementation reference.",
      focalLengthMm: 38.569424083202506,
      role: "Literal whole-source positive element. Isolated-in-air focal power is descriptive, not cemented-group power.",
      cemented: "CD1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.7725,
      vd: 49.77,
      indexReference: "d",
      glass: "Unmatched (literal Nd/nu-d; supplier unresolved)",
      indexReferenceNote:
        "Source explicitly labels Nd/nu-d; engine d587.5618nm is the conventional implementation reference.",
      focalLengthMm: 62.23589122845941,
      role: "Literal whole-source positive element. Isolated-in-air focal power is descriptive, not cemented-group power.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Negative Meniscus",
      nd: 1.4914,
      vd: 57.82,
      indexReference: "d",
      glass: "Unmatched (source polymer-compatible rear medium; n1.49140/v57.82)",
      indexReferenceNote:
        "Source explicitly labels Nd/nu-d; engine d587.5618nm is the conventional implementation reference.",
      focalLengthMm: -647.2240862935438,
      role: "Weak negative rear meniscus; source explicitly permits plastic for E3. Polymer identity and factory material are unproved; no catalog glass substituted.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 187.018,
      d: 2.33,
      sd: 9.8,
      medium: 1,
    },
    {
      label: "2",
      R: -85.616,
      d: 0.1455,
      sd: 9.8,
    },
    {
      label: "3",
      R: 20.74,
      d: 2.461,
      sd: 8.4,
      medium: 2,
    },
    {
      label: "4",
      R: 55.0315,
      d: 1.015,
      sd: 8.4,
    },
    {
      label: "5",
      R: -572.108,
      d: 3.7505,
      sd: 8,
      medium: 3,
    },
    {
      label: "6",
      R: 17.422,
      sd: 8,
    },
    {
      label: "STO",
      R: "flat",
    },
    {
      label: "7",
      R: -17.3265,
      d: 2.629,
      sd: 7.5,
      medium: 4,
    },
    {
      label: "8",
      R: -65.678,
      d: 3.449,
      sd: 7.5,
      medium: 5,
    },
    {
      label: "9",
      R: -19.8075,
      d: 0.1455,
      sd: 7.5,
    },
    {
      label: "10",
      R: 272.658,
      d: 3.182,
      sd: 8.4,
      medium: 6,
    },
    {
      label: "11",
      R: -58.0725,
      sd: 8.4,
    },
    {
      label: "12",
      R: 51.4725,
      d: 1.7475,
      sd: 12.3,
      medium: 7,
    },
    {
      label: "13",
      R: 43.807,
      sd: 12.3,
    },
  ],
  focus: {
    closeFocusM: 0.199895048134069,
    keyframes: [0, 1],
    published: [1],
    description:
      "JP S59-228220 A Embodiment 3 tabulates finite intergroup gaps and magnification. Object distance is derived by two independently checked paraxial methods, not printed. Image gap is solved from literal beta=-.997, not undefined LB. Fixed-sensor registration moves all three groups objectward; global offset is documented. Only endpoints have explicit conjugates; slider interpolation is an implementation approximation, not a published cam law. Physical iris radius is held at the infinity-derived value; near effective F-number is diagnostic, not a replacement nominal aperture.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 78.3784888276426,
        distanceReference: "first-surface",
        source:
          "JP S59-228220 A Embodiment 3 tabulates finite intergroup gaps and magnification. Object distance is derived by two independently checked paraxial methods, not printed. Image gap is solved from literal beta=-.997, not undefined LB. Fixed-sensor registration moves all three groups objectward; global offset is documented.",
      },
    ],
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 47,
    maxTraceFieldDeg: 23.5,
  },
  layout: {
    yScFill: 0.7,
  },
  doublets: [
    {
      text: "CD1",
      fromSurface: "7",
      toSurface: "9",
    },
  ],
  groups: [
    {
      text: "I",
      fromSurface: "1",
      toSurface: "6",
    },
    {
      text: "II",
      fromSurface: "7",
      toSurface: "11",
    },
    {
      text: "III",
      fromSurface: "12",
      toSurface: "13",
    },
  ],
  gaps: {
    "6": {
      label: "D6",
      values: [[2.87975, 7.003]],
    },
    STO: {
      label: "DSTO",
      values: [[2.87975, 7.003]],
    },
    "11": {
      label: "D11",
      values: [[0.4855, 41.9515]],
    },
    "13": {
      label: "BF",
      values: [[39.031021897323, 44.70405930642638]],
    },
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
