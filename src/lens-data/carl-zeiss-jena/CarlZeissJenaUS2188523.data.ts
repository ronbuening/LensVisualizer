import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "bertele-us2188523-infinity-patent-reference",
  maker: "Zeiss Ikon",
  name: "BERTELE US2188523 — PATENT REFERENCE",
  subtitle:
    "Hidden patent-only infinity reconstruction · estimated iris, rims and 0–10° diagnostic field · no retail identity",
  visible: false,
  source: {
    patentNumber: "US 2,188,523 A",
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Ludwig Bertele"],
    assignees: ["Zeiss Ikon AG"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 36.2,
    elementCount: 7,
    groupCount: 3,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2,
    },
    specs: [
      "PATENT-ONLY · NOT A VERIFIED SONNAR OR JUPITER-9",
      "LITERAL 7E/3G PRESCRIPTION · SOURCE NOMINAL 100 mm f/2",
      "ESTIMATED 79%-GAP IRIS AND CLEAR SEMIDIAMETERS",
      "0–10° HALF-FIELD DIAGNOSTIC · NO RETAIL COVERAGE CLAIM",
      "D-LINE OPTICS VALIDATED · OTHER SPECTRAL OUTPUTS ESTIMATED",
      "INFINITY ONLY · NO FINITE FOCUS OR BAFFLE MODEL",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Positive Meniscus",
      nd: 1.62,
      vd: 60.3,
      indexReference: "D",
      glass:
        "Unmatched (primary historical nD/V; no exact catalog glass identity)",
      indexReferenceNote:
        "Literal historical source nD/Abbe. Sodium D center is the native modeling convention; no measured spectral curve. Only D-line optical claims validated; other channels are runtime estimates.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Positive Meniscus",
      nd: 1.7015,
      vd: 41.2,
      indexReference: "D",
      glass:
        "Unmatched (primary historical nD/V; no exact catalog glass identity)",
      indexReferenceNote:
        "Literal historical source nD/Abbe. Sodium D center is the native modeling convention; no measured spectral curve. Only D-line optical claims validated; other channels are runtime estimates.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconvex Positive",
      nd: 1.5487,
      vd: 45.8,
      indexReference: "D",
      glass:
        "Unmatched (primary historical nD/V; no exact catalog glass identity)",
      indexReferenceNote:
        "Literal historical source nD/Abbe. Sodium D center is the native modeling convention; no measured spectral curve. Only D-line optical claims validated; other channels are runtime estimates.",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconcave Negative",
      nd: 1.6883,
      vd: 30,
      indexReference: "D",
      glass:
        "Unmatched (primary historical nD/V; no exact catalog glass identity)",
      indexReferenceNote:
        "Literal historical source nD/Abbe. Sodium D center is the native modeling convention; no measured spectral curve. Only D-line optical claims validated; other channels are runtime estimates.",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Positive Meniscus",
      nd: 1.62,
      vd: 60.3,
      indexReference: "D",
      glass:
        "Unmatched (primary historical nD/V; no exact catalog glass identity)",
      indexReferenceNote:
        "Literal historical source nD/Abbe. Sodium D center is the native modeling convention; no measured spectral curve. Only D-line optical claims validated; other channels are runtime estimates.",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Biconcave Negative",
      nd: 1.515,
      vd: 50,
      indexReference: "D",
      glass:
        "Unmatched (primary historical nD/V; no exact catalog glass identity)",
      indexReferenceNote:
        "Literal historical source nD/Abbe. Sodium D center is the native modeling convention; no measured spectral curve. Only D-line optical claims validated; other channels are runtime estimates.",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Biconvex Positive",
      nd: 1.6682,
      vd: 48.8,
      indexReference: "D",
      glass:
        "Unmatched (primary historical nD/V; no exact catalog glass identity)",
      indexReferenceNote:
        "Literal historical source nD/Abbe. Sodium D center is the native modeling convention; no measured spectral curve. Only D-line optical claims validated; other channels are runtime estimates.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 68.41,
      d: 6.87,
      sd: 30,
      medium: 1,
    },
    {
      label: "2",
      R: 384.32,
      d: 0.38,
      sd: 29.6,
    },
    {
      label: "3",
      R: 34.35,
      d: 7.25,
      sd: 25.4,
      medium: 2,
    },
    {
      label: "4",
      R: 63.93,
      d: 7.63,
      sd: 24.5,
      medium: 3,
    },
    {
      label: "5",
      R: -362.56,
      d: 1.91,
      sd: 22.9,
      medium: 4,
    },
    {
      label: "6",
      R: 24.29,
      d: 7.5366,
      sd: 17.4,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.0034,
    },
    {
      label: "7",
      R: -128.8,
      d: 10.88,
      sd: 17.3,
      medium: 5,
    },
    {
      label: "8",
      R: -44.84,
      d: 1.15,
      sd: 18.6,
      medium: 6,
    },
    {
      label: "9",
      R: 41.79,
      d: 22.52,
      sd: 19.9,
      medium: 7,
    },
    {
      label: "10",
      R: -88.43,
      d: 54.62585395995285,
      sd: 21.1,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Infinity-only patent reference; no published finite conjugates or production focusing behavior.",
  },
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 20,
    maxTraceFieldDeg: 10,
  },
  groups: [
    {
      text: "L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "L2–L4",
      fromSurface: "3",
      toSurface: "6",
    },
    {
      text: "L5–L7",
      fromSurface: "7",
      toSurface: "10",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
