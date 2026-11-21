import type { LensDataV2Input } from "../main/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "ernemann-bertele-de428657-figure2-infinity-reference",
  maker: "Ernemann",
  name: "BERTELE DE428657 FIGURE 2 — INFINITY REFERENCE",
  subtitle:
    "Patent-only hidden reference · assumed R1-side infinity · estimated iris/rims/field · no finite projection claim",
  visible: false,
  source: {
    patentNumber: "DE 428,657 A",
    example: {
      label: "Figure 2",
      id: "2",
    },
    authors: ["Ludwig Bertele"],
    assignees: ["Ernemann-Werke AG"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 17.508766838175543,
    elementCount: 5,
    groupCount: 5,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2,
    },
    specs: [
      "PATENT FIGURE 2 · FIVE SINGLET GROUPS",
      "SOURCE NOMINAL f/2 · NOT A PRODUCTION IDENTITY",
      "ASSUMED R1-SIDE INFINITY TRAVERSAL · NO FINITE CONJUGATE",
      "ESTIMATED MID-GAP IRIS, CLEAR RADII AND 10° FULL FIELD",
      "D-LINE ONLY · OTHER CHANNELS UNCALIBRATED",
      "FIGURE 1 HELD SEPARATELY · NO SOURCE FITTING",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Biconvex Positive",
      nd: 1.6068,
      vd: 59.5,
      indexReference: "D",
      indexReferenceNote:
        "Literal source nD/Abbe relayed from primary scan; no identified catalog glass or measured spectral curve. D-line-only validation.",
      glass:
        "Unmatched (historical primary nD/V only; no exact catalog glass identity asserted)",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Positive Meniscus",
      nd: 1.6068,
      vd: 59.5,
      indexReference: "D",
      indexReferenceNote:
        "Literal source nD/Abbe relayed from primary scan; no identified catalog glass or measured spectral curve. D-line-only validation.",
      glass:
        "Unmatched (historical primary nD/V only; no exact catalog glass identity asserted)",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconcave Negative",
      nd: 1.6477,
      vd: 33.9,
      indexReference: "D",
      indexReferenceNote:
        "Literal source nD/Abbe relayed from primary scan; no identified catalog glass or measured spectral curve. D-line-only validation.",
      glass:
        "Unmatched (historical primary nD/V only; no exact catalog glass identity asserted)",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Negative Meniscus",
      nd: 1.6068,
      vd: 59.5,
      indexReference: "D",
      indexReferenceNote:
        "Literal source nD/Abbe relayed from primary scan; no identified catalog glass or measured spectral curve. D-line-only validation.",
      glass:
        "Unmatched (historical primary nD/V only; no exact catalog glass identity asserted)",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Biconvex Positive",
      nd: 1.6068,
      vd: 59.5,
      indexReference: "D",
      indexReferenceNote:
        "Literal source nD/Abbe relayed from primary scan; no identified catalog glass or measured spectral curve. D-line-only validation.",
      glass:
        "Unmatched (historical primary nD/V only; no exact catalog glass identity asserted)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 48.57,
      d: 8.57,
      sd: 25.5,
      medium: 1,
    },
    {
      label: "2",
      R: -952.45,
      d: 0.48,
      sd: 25.5,
    },
    {
      label: "3",
      R: 38.1,
      d: 9.52,
      sd: 22.5,
      medium: 2,
    },
    {
      label: "4",
      R: 48.19,
      d: 5.71,
      sd: 19.25,
    },
    {
      label: "5",
      R: -223.83,
      d: 2.86,
      sd: 18.25,
      medium: 3,
    },
    {
      label: "6",
      R: 27.43,
      d: 9.525,
      sd: 16.25,
    },
    {
      label: "STO",
      R: "flat",
      d: 9.525,
    },
    {
      label: "7",
      R: 200.01,
      d: 2.86,
      sd: 16.25,
      medium: 4,
    },
    {
      label: "8",
      R: 56.19,
      d: 0.48,
      sd: 16.25,
    },
    {
      label: "9",
      R: 51.43,
      d: 14.29,
      sd: 16.25,
      medium: 5,
    },
    {
      label: "10",
      R: -56.15,
      d: 56.18336028624677,
      sd: 16.25,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Infinity-only reference in explicitly assumed R1-to-R10 traversal. Long-conjugate side is a modeling choice, not a source arrow or measured projector state. No finite projection/retail focus range.",
  },
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 10,
    maxTraceFieldDeg: 5,
  },
  groups: [
    {
      text: "L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "L2",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "L3",
      fromSurface: "5",
      toSurface: "6",
    },
    {
      text: "L4",
      fromSurface: "7",
      toSurface: "8",
    },
    {
      text: "L5",
      fromSurface: "9",
      toSurface: "10",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
