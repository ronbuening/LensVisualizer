import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "kleineberg-zimmermann-us2622478-example2-infinity-reference",
  maker: null,
  name: "KLEINEBERG ZIMMERMANN US2622478 EXAMPLE II \u2014 100mm PATENT f/2",
  subtitle: "Patent-only 7E/6G \u00b7 helium-d infinity / estimated iris-rims",
  visible: false,
  source: {
    patentNumber: "US 2,622,478",
    patentYear: 1952,
    example: {
      label: "Example II",
      id: "2",
    },
    authors: ["Gustav Kleineberg", "Otto Zimmermann"],
    assignees: ["Ernst Leitz GmbH"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2,
    },
    elementCount: 7,
    groupCount: 6,
    specs: [
      "Patent-only Example II at the table\u2019s 100 mm scale: seven elements in six groups, nominal f/2. This is not an exact retail Summicron reconstruction.",
      "Helium d (587.5618 nm), infinity only. Validated diagnostic field: \u00b15\u00b0. The patent\u2019s 50\u00b0 total field, broadband results and wider automatic analyses are unqualified.",
      "Iris station, bore and clear radii are estimates. Modeled clipping is retained. No extra plate is included in Example II; the separate plate belongs to Fig. 1.",
      "The nominal f/2 control derives its iris. Finite entrance equivalent is about f/2.008; an exact physical aperture is not established.",
      "Original numerical data and hash were verified by the source scout. Local original pixel/hash verification is unavailable. See the companion analysis for provenance, sensitivity and optical limits.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.6923,
      vd: 54.7,
      indexReference: "d",
      indexReferenceNote:
        "Patent explicitly defines nd for lowercase d-line;native helium-d587.5618nm. No calibrated broadband interpretation.",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.65017,
      vd: 33.7,
      indexReference: "d",
      indexReferenceNote:
        "Patent explicitly defines nd for lowercase d-line;native helium-d587.5618nm. No calibrated broadband interpretation.",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.6923,
      vd: 54.7,
      indexReference: "d",
      indexReferenceNote:
        "Patent explicitly defines nd for lowercase d-line;native helium-d587.5618nm. No calibrated broadband interpretation.",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.57501,
      vd: 41.3,
      indexReference: "d",
      indexReferenceNote:
        "Patent explicitly defines nd for lowercase d-line;native helium-d587.5618nm. No calibrated broadband interpretation.",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.58217,
      vd: 38,
      indexReference: "d",
      indexReferenceNote:
        "Patent explicitly defines nd for lowercase d-line;native helium-d587.5618nm. No calibrated broadband interpretation.",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
      cemented: "G5",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Source Spherical Element",
      nd: 1.6923,
      vd: 54.7,
      indexReference: "d",
      indexReferenceNote:
        "Patent explicitly defines nd for lowercase d-line;native helium-d587.5618nm. No calibrated broadband interpretation.",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
      cemented: "G5",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Source Spherical Element",
      nd: 1.71715,
      vd: 47.9,
      indexReference: "d",
      indexReferenceNote:
        "Patent explicitly defines nd for lowercase d-line;native helium-d587.5618nm. No calibrated broadband interpretation.",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 53.84,
      d: 13.25,
      sd: 28,
      medium: 1,
    },
    {
      label: "2",
      R: -382.69,
      d: 0.54,
      sd: 27,
    },
    {
      label: "3",
      R: -328.33,
      d: 3.92,
      sd: 27,
      medium: 2,
    },
    {
      label: "4",
      R: 110.12,
      d: 0.2,
      sd: 25,
    },
    {
      label: "5",
      R: 34.36,
      d: 6.67,
      sd: 24,
      medium: 3,
    },
    {
      label: "6",
      R: 56.75,
      d: 0.39,
      sd: 20,
    },
    {
      label: "7",
      R: 59.27,
      d: 4.51,
      sd: 20,
      medium: 4,
    },
    {
      label: "8",
      R: 23.69,
      d: 11.25,
      sd: 19,
    },
    {
      label: "STO",
      R: "flat",
      d: 8.77,
    },
    {
      label: "9",
      R: -34.28,
      d: 3.63,
      sd: 19,
      medium: 5,
    },
    {
      label: "10",
      R: 115.3,
      d: 8.78,
      sd: 22,
      medium: 6,
    },
    {
      label: "11",
      R: -54.16,
      d: 1.96,
      sd: 22,
    },
    {
      label: "12",
      R: 268.86,
      d: 6.08,
      sd: 23,
      medium: 7,
    },
    {
      label: "13",
      R: -106.21,
      d: 55.440549238988154,
      sd: 23,
    },
  ],
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 10,
    maxTraceFieldDeg: 5,
  },
  rays: {
    offAxisFieldFrac: 1,
  },
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Infinity-only patent reference. Finite focusing is not modeled.",
  },
  groups: [
    {
      text: "G1 \u00b7 L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 \u00b7 L2",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "G3 \u00b7 L3",
      fromSurface: "5",
      toSurface: "6",
    },
    {
      text: "G4 \u00b7 L4",
      fromSurface: "7",
      toSurface: "8",
    },
    {
      text: "G5 \u00b7 L5+L6",
      fromSurface: "9",
      toSurface: "11",
    },
    {
      text: "G6 \u00b7 L7",
      fromSurface: "12",
      toSurface: "13",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
