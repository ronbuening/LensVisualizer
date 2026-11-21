import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "zeiss-ikon-de630224-source-pending-dline-diagnostic",
  maker: null,
  name: "ZEISS IKON DE630224 — SOURCE-PENDING DIAGNOSTIC",
  subtitle:
    "Patent-only D-line infinity · nominal f/2 / cap-limited≈f/2.070 · estimated0–6° diagnostic field",
  visible: false,
  source: {
    patentNumber: "DE 630224",
    patentYear: 1936,
    authors: [],
    assignees: ["Zeiss Ikon"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 21.01344842179863,
    elementCount: 7,
    groupCount: 4,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2,
    },
    specs: [
      "7E/4G · 1|3|2|1 · NO RETAIL SONNAR/BIOTAR ATTRIBUTION",
      "SOURCE NOMINAL f/2; ESTIMATED R6 CAP LIMITS ENTRANCE≈f/2.070",
      "ORIGINAL R7/R11 MINUS SIGNS ATTRIBUTED UPSTREAM; LOCAL SCAN READ BLOCKED",
      "LITERAL OPTICS/GAPS; ESTIMATED STOP6.33/.87 IN7.2mm GAP",
      "DEFAULT GEOMETRY ONLY · NO RAISE TO FORCE f/2",
      "NO SOURCE FIELD:0–6° IS ONLY A CHOSEN DIAGNOSTIC REQUEST",
      "D-LINE INFINITY · NO FINITE FOCUS OR CALIBRATED SPECTRUM",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.6203,
      vd: 60.4,
      indexReference: "D",
      glass:
        "Unmatched (literal source-transcribed nD/V, no catalog substitution, D-line diagnostic)",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.6716,
      vd: 47.2,
      indexReference: "D",
      glass:
        "Unmatched (literal source-transcribed nD/V, no catalog substitution, D-line diagnostic)",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.5163,
      vd: 64,
      indexReference: "D",
      glass:
        "Unmatched (literal source-transcribed nD/V, no catalog substitution, D-line diagnostic)",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.689,
      vd: 31,
      indexReference: "D",
      glass:
        "Unmatched (literal source-transcribed nD/V, no catalog substitution, D-line diagnostic)",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.5017,
      vd: 56.5,
      indexReference: "D",
      glass:
        "Unmatched (literal source-transcribed nD/V, no catalog substitution, D-line diagnostic)",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Source Spherical Element",
      nd: 1.6716,
      vd: 47.2,
      indexReference: "D",
      glass:
        "Unmatched (literal source-transcribed nD/V, no catalog substitution, D-line diagnostic)",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Source Spherical Element",
      nd: 1.6716,
      vd: 47.2,
      indexReference: "D",
      glass:
        "Unmatched (literal source-transcribed nD/V, no catalog substitution, D-line diagnostic)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 51.8,
      d: 8,
      sd: 26,
      medium: 1,
    },
    {
      label: "2",
      R: 179.3,
      d: 0.6,
      sd: 26,
    },
    {
      label: "3",
      R: 34,
      d: 8.9,
      sd: 24,
      medium: 2,
    },
    {
      label: "4",
      R: 76.4,
      d: 5,
      sd: 24,
      medium: 3,
    },
    {
      label: "5",
      R: 707.3,
      d: 2.8,
      sd: 22.2,
      medium: 4,
    },
    {
      label: "6",
      R: 22.3,
      d: 6.33,
      sd: 15.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 0.87,
    },
    {
      label: "7",
      R: -298.6,
      d: 3.9,
      sd: 15.3,
      medium: 5,
    },
    {
      label: "8",
      R: 30.2,
      d: 10.8,
      sd: 18,
      medium: 6,
    },
    {
      label: "9",
      R: 285.9,
      d: 15.6,
      sd: 18,
    },
    {
      label: "10",
      R: 114.4,
      d: 9.7,
      sd: 17,
      medium: 7,
    },
    {
      label: "11",
      R: -297,
      d: 41.31961088181356,
      sd: 17,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Provisional patent-only DE630224 source-transcribed D-line infinity diagnostic. Official scan GET blockedHTTP403: local overwritten-minus/drawing inspection remains a source gate, no qualification claim. No individual inventor supplied. Literal R/d/nD/V retained, L4V31.0. Stop and caps are estimates; source nominalf2 is separate from cap-limited≈f2.070. No printed field;0-6degrees is a diagnostic request with clipping. No retail Sonnar/Biotar, finite focus or calibrated spectral claim.",
  },
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 12,
    maxTraceFieldDeg: 6,
  },
  groups: [
    {
      text: "Front singlet",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Cemented triplet",
      fromSurface: "3",
      toSurface: "6",
    },
    {
      text: "Cemented doublet",
      fromSurface: "7",
      toSurface: "9",
    },
    {
      text: "Rear singlet",
      fromSurface: "10",
      toSurface: "11",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
