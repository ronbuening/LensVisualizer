import type { LensDataV2Input } from "../main/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "deser-de636166-100mm-f28-patent-reference",
  maker: "Voigtländer",
  name: "DESER DE636166 — 100mm f/2.8 PATENT REFERENCE",
  subtitle:
    "Patent-only reconstruction · estimated iris/rims/10° field · infinity D-line reference",
  source: {
    patentNumber: "DE 636,166 C",
    patentYear: 1936,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Hans Deser"],
    assignees: ["Voigtländer & Sohn AG"],
    sdSource: "heuristic",
  },
  catalog: {
    elementCount: 5,
    groupCount: 3,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2.8,
    },
    specs: [
      "PATENT-ONLY REFERENCE · NOT A RETAIL HELIAR",
      "5 ELEMENTS / 3 GROUPS 2|1|2",
      "SOURCE NOMINAL f/2.8 · REAL PUPIL DIFFERENCE DOCUMENTED",
      "ESTIMATED MIDPOINT IRIS AND CLEAR RADII",
      "CHOSEN 10° FULL DIAGNOSTIC FIELD · NOT SOURCE COVERAGE",
      "INFINITY / SODIUM D ONLY · OTHER CHANNELS UNCALIBRATED",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Biconvex Positive",
      type: "Biconvex Positive",
      nd: 1.65772,
      vd: 51.2,
      indexReference: "D",
      indexReferenceNote:
        "Source n_D/V preserved. No catalog/melt identity or measured spectral curve; D-line-only optical verification.",
      glass:
        "Unmatched (historical patent n_D/V only; no verified catalog glass identity)",
    },
    {
      id: 2,
      name: "L2",
      label: "Plano-Concave Negative",
      type: "Plano-Concave Negative",
      nd: 1.58131,
      vd: 40.8,
      indexReference: "D",
      indexReferenceNote:
        "Source n_D/V preserved. No catalog/melt identity or measured spectral curve; D-line-only optical verification.",
      glass:
        "Unmatched (historical patent n_D/V only; no verified catalog glass identity)",
    },
    {
      id: 3,
      name: "L3",
      label: "Biconcave Negative",
      type: "Biconcave Negative",
      nd: 1.58131,
      vd: 40.8,
      indexReference: "D",
      indexReferenceNote:
        "Source n_D/V preserved. No catalog/melt identity or measured spectral curve; D-line-only optical verification.",
      glass:
        "Unmatched (historical patent n_D/V only; no verified catalog glass identity)",
    },
    {
      id: 4,
      name: "L4",
      label: "Biconvex Positive",
      type: "Biconvex Positive",
      nd: 1.65772,
      vd: 51.2,
      indexReference: "D",
      indexReferenceNote:
        "Source n_D/V preserved. No catalog/melt identity or measured spectral curve; D-line-only optical verification.",
      glass:
        "Unmatched (historical patent n_D/V only; no verified catalog glass identity)",
    },
    {
      id: 5,
      name: "L5",
      label: "Negative Meniscus",
      type: "Negative Meniscus",
      nd: 1.60704,
      vd: 40.2,
      indexReference: "D",
      indexReferenceNote:
        "Source n_D/V preserved. No catalog/melt identity or measured spectral curve; D-line-only optical verification.",
      glass:
        "Unmatched (historical patent n_D/V only; no verified catalog glass identity)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 43,
      d: 9,
      sd: 18.5,
      medium: 1,
    },
    {
      label: "2",
      R: -85,
      d: 3,
      sd: 18.5,
      medium: 2,
    },
    {
      label: "3",
      R: "flat",
      d: 7,
      sd: 18.5,
    },
    {
      label: "4",
      R: -58,
      d: 4,
      sd: 15.25,
      medium: 3,
    },
    {
      label: "5",
      R: 34.5,
      d: 4.5,
      sd: 15.25,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.5,
    },
    {
      label: "6",
      R: 130,
      d: 10,
      sd: 15.25,
      medium: 4,
    },
    {
      label: "7",
      R: -20.5,
      d: 3,
      sd: 15.25,
      medium: 5,
    },
    {
      label: "8",
      R: -57.45,
      d: 78.99147854817156,
      sd: 15.25,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Infinity-only patent reference; no source focusing schedule or production identity.",
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  projection: {
    kind: "rectilinear",
    maxTraceFieldDeg: 5,
  },
  groups: [
    {
      text: "G1 (2 cemented)",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "G2 (1)",
      fromSurface: "4",
      toSurface: "5",
    },
    {
      text: "G3 (2 cemented)",
      fromSurface: "6",
      toSurface: "8",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
