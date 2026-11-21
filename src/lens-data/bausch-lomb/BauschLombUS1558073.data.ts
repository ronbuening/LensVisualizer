import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "bielicke-us1558073-dline-infinity-reference",
  maker: null,
  name: "BIELICKE US1558073 — PATENT REFERENCE",
  subtitle:
    "188mm f/4.5 patent-only · published iris station / estimated diameter and rims · chosen0–12° D-line infinity diagnostic",
  visible: false,
  source: {
    patentNumber: "US 1,558,073",
    patentYear: 1925,
    authors: ["William F. Bielicke"],
    assignees: ["Bausch & Lomb"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 80.09607598911735,
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: {
      design: 188,
    },
    fNumber: {
      design: 4.5,
    },
    specs: [
      "4E/3G · REAR CEMENT AT R6",
      "SOURCE NOMINAL188mm f/4.5 · LITERAL OPTICS/GLASS/GAPS",
      "NATIVE FINITE ENTRANCE EQUIVALENT≈f/4.5549 WITH ESTIMATED IRIS",
      "PUBLISHED STOP8.7/6.2mm IN R4–R5 GAP · PHYSICAL SIZE/RIMS ESTIMATED",
      "D-LINE INFINITY ONLY · NO CALIBRATED BROADBAND OR RETAIL IDENTITY",
      "G-PRIME INDICES RETAINED IN SEPARATE EVIDENCE, NOT MERCURYg",
      "NO SOURCE COVERAGE CLAIM · CHOSEN0–12° DIAGNOSTIC WITH CLIPPING",
      "ORIGINAL DRAWING/TABLE CUSTODY VERIFIED BY SCOUT; NO LOCAL PIXEL CLAIM",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Biconvex Positive",
      nd: 1.6088,
      vd: 56.5,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; G-prime retained separately, no invented curve)",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Biconcave Negative",
      nd: 1.5602,
      vd: 45.3,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; G-prime retained separately, no invented curve)",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Rear Cemented Component",
      nd: 1.5602,
      vd: 45.3,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; G-prime retained separately, no invented curve)",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconvex Positive",
      nd: 1.6165,
      vd: 55,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; G-prime retained separately, no invented curve)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 49.01,
      d: 7.8,
      sd: 23.5,
      medium: 1,
    },
    {
      label: "2",
      R: -478.7,
      d: 5.4,
      sd: 23.5,
    },
    {
      label: "3",
      R: -114.3,
      d: 3.3,
      sd: 25,
      medium: 2,
    },
    {
      label: "4",
      R: 44.5,
      d: 8.7,
      sd: 24,
    },
    {
      label: "STO",
      R: "flat",
      d: 6.2,
    },
    {
      label: "5",
      R: -271.9,
      d: 3.8,
      sd: 24,
      medium: 3,
    },
    {
      label: "6",
      R: 47.11,
      d: 9.7,
      sd: 21.5,
      medium: 4,
    },
    {
      label: "7",
      R: -74.5,
      d: 166.97779594813107,
      sd: 21.5,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Patent-only US1558073, independent scout verified original drawing/table; executor GET deniedHTTP403, no local pixels claimed. D-line infinity only. Literal R/d/nD/V retained, published stop afterR4 by8.7 and beforeR5 by6.2mm preserved. Physical diameter and clear rims are estimates under ordinary native aperture convention; finite equivalence documented separately from nominalf4.5. G-prime is separate direct-line evidence, not a custom native broadband model.0-12deg is chosen diagnostic, no published/full coverage, finite conjugate or retail identity. US1540752 is distinct.",
  },
  aperture: {
    nominalFNumber: 4.5,
    fStops: [4.5, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 24,
    maxTraceFieldDeg: 12,
  },
  groups: [
    {
      text: "Front singlet",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "Negative middle singlet",
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
