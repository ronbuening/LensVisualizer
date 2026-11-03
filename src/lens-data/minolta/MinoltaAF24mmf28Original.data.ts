import type { LensDataV2Input } from "../../types/lensDataV2.js";

/** Whole literal patent example; Grade B probable family, not factory-exact.
 * Missing stop/caps are frozen source-informed hypotheses. Derived planes/conjugates are disclosed.
 * Source residuals, clipping and aperture distinctions are retained; no optical tuning.
 */
const LENS_DATA = {
  schema: 2,
  key: "minolta-af-24mm-f28-original",
  maker: "Minolta",
  name: "MINOLTA AF 24mm f/2.8",
  subtitle: "US 4,759,619 Embodiment 2 — probable family; inferred apertures",
  catalog: {
    lensMounts: ["sony-a"],
    imageFormat: "135-full-frame",
    elementCount: 8,
    groupCount: 8,
    focalLengthMm: {
      marketing: 24,
      design: 24.0,
    },
    fNumber: {
      marketing: 2.8,
      design: 2.8,
    },
    specs: [
      "8 ELEMENTS / 8 GROUPS",
      "PROBABLE FAMILY; INFERRED APERTURES",
      "SOURCE FINITE ENDPOINT; DERIVED CONJUGATE",
    ],
  },
  source: {
    patentNumber: "US 4,759,619",
    example: {
      label: "Embodiment 2",
      id: "2",
    },
    patentYear: 1988,
    authors: ["Akiyoshi Nakamura", "Tetsuya Arimoto"],
    assignees: ["Minolta Camera Co., Ltd."],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.7106,
      vd: 43.25,
      indexReference: "d",
      glass: "Unmatched (literal Nd/nu-d; supplier unresolved)",
      indexReferenceNote:
        "Source explicitly labels Nd/nu-d; engine d587.5618nm is the conventional implementation reference.",
      focalLengthMm: 238.58281427176686,
      role: "Literal whole-source positive element. Isolated-in-air focal power is descriptive, not cemented-group power.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.51112,
      vd: 60.5,
      indexReference: "d",
      glass: "Unmatched (literal Nd/nu-d; supplier unresolved)",
      indexReferenceNote:
        "Source explicitly labels Nd/nu-d; engine d587.5618nm is the conventional implementation reference.",
      focalLengthMm: -69.75318668978854,
      role: "Literal whole-source negative element. Isolated-in-air focal power is descriptive, not cemented-group power.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.5168,
      vd: 64.2,
      indexReference: "d",
      glass: "Unmatched (literal Nd/nu-d; supplier unresolved)",
      indexReferenceNote:
        "Source explicitly labels Nd/nu-d; engine d587.5618nm is the conventional implementation reference.",
      focalLengthMm: -32.20345401386272,
      role: "Literal whole-source negative element. Isolated-in-air focal power is descriptive, not cemented-group power.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.77551,
      vd: 37.9,
      indexReference: "d",
      glass: "Unmatched (literal Nd/nu-d; supplier unresolved)",
      indexReferenceNote:
        "Source explicitly labels Nd/nu-d; engine d587.5618nm is the conventional implementation reference.",
      focalLengthMm: 37.61951606696508,
      role: "Literal whole-source positive element. Isolated-in-air focal power is descriptive, not cemented-group power.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.741,
      vd: 52.67,
      indexReference: "d",
      glass: "Unmatched (literal Nd/nu-d; supplier unresolved)",
      indexReferenceNote:
        "Source explicitly labels Nd/nu-d; engine d587.5618nm is the conventional implementation reference.",
      focalLengthMm: 36.16777148510904,
      role: "Literal whole-source positive element. Isolated-in-air focal power is descriptive, not cemented-group power.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      glass: "Unmatched (literal Nd/nu-d; supplier unresolved)",
      indexReferenceNote:
        "Source explicitly labels Nd/nu-d; engine d587.5618nm is the conventional implementation reference.",
      focalLengthMm: -22.2098439411515,
      role: "Literal whole-source negative element. Isolated-in-air focal power is descriptive, not cemented-group power.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.62135,
      vd: 61.28,
      indexReference: "d",
      glass: "Unmatched (literal Nd/nu-d; supplier unresolved)",
      indexReferenceNote:
        "Source explicitly labels Nd/nu-d; engine d587.5618nm is the conventional implementation reference.",
      focalLengthMm: 60.203341766476726,
      role: "Literal whole-source positive element. Isolated-in-air focal power is descriptive, not cemented-group power.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.6583,
      vd: 58.52,
      indexReference: "d",
      glass: "Unmatched (literal Nd/nu-d; supplier unresolved)",
      indexReferenceNote:
        "Source explicitly labels Nd/nu-d; engine d587.5618nm is the conventional implementation reference.",
      focalLengthMm: 35.460797562085475,
      role: "Literal whole-source positive element. Isolated-in-air focal power is descriptive, not cemented-group power.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 123.35952,
      d: 2.86272,
      sd: 22,
      medium: 1,
    },
    {
      label: "2",
      R: 448.53911999999997,
      d: 0.11688,
      sd: 22,
    },
    {
      label: "3",
      R: 26.96088,
      d: 1.07328,
      sd: 15.8,
      medium: 2,
    },
    {
      label: "4",
      R: 15.14496,
      sd: 12.9,
    },
    {
      label: "5",
      R: 39.575759999999995,
      d: 1.07352,
      sd: 9.9,
      medium: 3,
    },
    {
      label: "6",
      R: 11.6076,
      d: 7.8048,
      sd: 8.1,
    },
    {
      label: "7",
      R: 34.89816,
      d: 9.56112,
      sd: 6.9,
      medium: 4,
    },
    {
      label: "8",
      R: -156.58944,
      d: 1.7987424,
      sd: 6.9,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.6603776,
    },
    {
      label: "9",
      R: 135.29424,
      d: 1.98,
      sd: 6.9,
      medium: 5,
    },
    {
      label: "10",
      R: -33.212399999999995,
      d: 1.91232,
      sd: 6.9,
    },
    {
      label: "11",
      R: -35.98728,
      d: 2.54064,
      sd: 7.3,
      medium: 6,
    },
    {
      label: "12",
      R: 36.66647999999999,
      d: 1.75608,
      sd: 7.3,
    },
    {
      label: "13",
      R: -34.790879999999994,
      d: 1.9512,
      sd: 7.3,
      medium: 7,
    },
    {
      label: "14",
      R: -18.413279999999997,
      d: 0.11688,
      sd: 7.3,
    },
    {
      label: "15",
      R: 171.64775999999998,
      d: 2.73168,
      sd: 9,
      medium: 8,
    },
    {
      label: "16",
      R: -26.847599999999996,
      sd: 9,
    },
  ],
  focus: {
    closeFocusM: 0.3227288484089109,
    keyframes: [0, 1],
    published: [1],
    description:
      "US 4,759,619 Embodiment 2 tabulates finite intergroup gaps and magnification. Object distance is derived by two independently checked paraxial methods, not printed. Front group and assumed camera plane fixed; beta residual retained. Only endpoints have explicit conjugates; slider interpolation is an implementation approximation, not a published cam law. Physical iris radius is held at the infinity-derived value; near effective F-number is diagnostic, not a replacement nominal aperture.",
    conjugates: [
      {
        zoomStation: 0,
        keyframe: 1,
        objectDistanceMm: 238.41762792826887,
        distanceReference: "first-surface",
        source:
          "US 4,759,619 Embodiment 2 tabulates finite intergroup gaps and magnification. Object distance is derived by two independently checked paraxial methods, not printed. Front group and assumed camera plane fixed; beta residual retained.",
      },
    ],
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 84,
    maxTraceFieldDeg: 42.0,
  },
  layout: {
    yScFill: 0.7,
  },
  groups: [
    {
      text: "F",
      fromSurface: "1",
      toSurface: "4",
    },
    {
      text: "R",
      fromSurface: "5",
      toSurface: "16",
    },
  ],
  gaps: {
    "4": {
      label: "D4",
      values: [[9.268320000000001, 6.65472]],
    },
    "16": {
      label: "BF",
      values: [[36.10266048064201, 38.71626048064201]],
    },
  },
} satisfies LensDataV2Input;

export default LENS_DATA;
