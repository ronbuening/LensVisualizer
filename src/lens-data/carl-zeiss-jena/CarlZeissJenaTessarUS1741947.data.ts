import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "merte-us1741947-dline-reference",
  maker: null,
  name: "MERTÉ US1741947 — PATENT REFERENCE",
  subtitle:
    "100-unit f/3.5 patent-only · published iris station · estimated clear radii · no retail identity",
  visible: false,
  source: {
    patentNumber: "US 1,741,947 A",
    patentYear: 1929,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Willy Merté"],
    assignees: ["Carl-Zeiss-Stiftung"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 103.28187606617861,
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 3.5,
    },
    specs: [
      "4E/3G · SOURCE NOMINAL100 UNITS f/3.5,55°",
      "PATENT-ONLY · NO VERIFIED RETAIL IDENTITY",
      "MODELED55° FIELD VIGNETTED · NOMINALf/3.5 / FINITE EQUIVALENT≈f/3.549",
      "PUBLISHED IRIS STATION · DIAMETER/CLEAR RADII ESTIMATED",
      "SODIUM-D ONLY · ABBE VALUES ARE NOT CALIBRATED GLASS CURVES",
      "INFINITY ONLY · DERIVED GAUSSIAN IMAGE DISTANCE",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Plano-Convex Positive",
      nd: 1.60717,
      vd: 59.5,
      indexReference: "D",
      glass: "Unmatched (literal historical nD/V; D-only optical scope)",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Biconcave Negative",
      nd: 1.57596,
      vd: 41.3,
      indexReference: "D",
      glass: "Unmatched (literal historical nD/V; D-only optical scope)",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Plano-Concave Negative",
      nd: 1.52648,
      vd: 51.4,
      indexReference: "D",
      glass: "Unmatched (literal historical nD/V; D-only optical scope)",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconvex Positive",
      nd: 1.62377,
      vd: 56.9,
      indexReference: "D",
      glass: "Unmatched (literal historical nD/V; D-only optical scope)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 32.08,
      d: 4.63,
      sd: 16.2,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 5.42,
      sd: 15.8,
    },
    {
      label: "3",
      R: -71.13,
      d: 3.73,
      sd: 16,
      medium: 2,
    },
    {
      label: "4",
      R: 28.85,
      d: 4.42,
      sd: 15.2,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.29,
    },
    {
      label: "5",
      R: "flat",
      d: 1.5,
      sd: 15.2,
      medium: 3,
    },
    {
      label: "6",
      R: 28.5,
      d: 8,
      sd: 15.7,
      medium: 4,
    },
    {
      label: "7",
      R: -47.22,
      d: 85.28442868969088,
      sd: 16.5,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Infinity-only patent reference;1 source optical unit represented as1mm without focal rescaling. Source iris4.42 behind R4 and2.29 ahead of R5; physical diameter and clear radii estimated. No finite-focus or production claim.",
  },
  aperture: {
    nominalFNumber: 3.5,
    fStops: [3.5, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 55,
    maxTraceFieldDeg: 27.5,
  },
  groups: [
    {
      text: "Front singlet",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Middle singlet",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "Rear cemented doublet",
      fromSurface: "5",
      toSurface: "7",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
