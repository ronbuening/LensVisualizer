import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "dallmeyer-langton-gb553844-infinity-reference",
  maker: null,
  name: "DALLMEYER GB553844 — PATENT REFERENCE",
  subtitle:
    "Preferred example · F1 at ×100 · nominal f/1.5 · chosen0–12° D-line infinity diagnostic",
  visible: false,
  source: {
    patentNumber: "GB 553844 A",
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Bertram Langton"],
    assignees: ["Dallmeyer"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 42.98721114539852,
    elementCount: 7,
    groupCount: 4,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 1.5,
    },
    specs: [
      "7E/4G · 1|3|2|1 · CEMENT R4/R5/R8; TRUE OPTICAL PLANE R8",
      "SOURCE F1 REPRESENTED AT UNIFORM100WORKING MM/UNIT; NO RETAIL SCALE",
      "LITERAL EFL101.384348/BFD52.933704; NOMINAL100 f1.5 NOT FITTED",
      "nD1.6436 AND1.6435 KEPT DISTINCT; NO GLASS SUBSTITUTION",
      "ESTIMATED11.4/10.1 IRIS AND CLEAR CAPS; NO BAFFLES/OVERRIDE",
      "NOMINAL f1.5; NATIVE FINITE ENTRANCE EQUIVALENT APPROX f1.51079",
      "SOURCE APPROX50° DESIGN AIM ONLY; CHOSEN0–12° DIAGNOSTIC",
      "SEPTAC LINEAGE ASSOCIATION IS NOT A SERIAL/FACTORY PRESCRIPTION",
      "D-LINE INFINITY ONLY; NO FINITE/RETAIL/BROADBAND COVERAGE CLAIM",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.6436,
      vd: 48.3,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no exact modern glass or calibrated spectral curve)",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.6436,
      vd: 48.3,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no exact modern glass or calibrated spectral curve)",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.51,
      vd: 64.5,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no exact modern glass or calibrated spectral curve)",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.7005,
      vd: 30.2,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no exact modern glass or calibrated spectral curve)",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.6193,
      vd: 36.4,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no exact modern glass or calibrated spectral curve)",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Source Spherical Element",
      nd: 1.6435,
      vd: 48.3,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no exact modern glass or calibrated spectral curve)",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Source Spherical Element",
      nd: 1.6142,
      vd: 56.3,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no exact modern glass or calibrated spectral curve)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 66.07,
      d: 10.5,
      sd: 35,
      medium: 1,
    },
    {
      label: "2",
      R: 414.47,
      d: 0.5,
      sd: 35,
    },
    {
      label: "3",
      R: 43.827,
      d: 12,
      sd: 33,
      medium: 2,
    },
    {
      label: "4",
      R: 94.874,
      d: 8,
      sd: 31,
      medium: 3,
    },
    {
      label: "5",
      R: -950.5,
      d: 2,
      sd: 26,
      medium: 4,
    },
    {
      label: "6",
      R: 28.096,
      d: 11.4,
      sd: 21,
    },
    {
      label: "STO",
      R: "flat",
      d: 10.1,
    },
    {
      label: "7",
      R: -33.465,
      d: 2,
      sd: 21,
      medium: 5,
    },
    {
      label: "8",
      R: "flat",
      d: 11,
      sd: 22,
      medium: 6,
    },
    {
      label: "9",
      R: -43.123,
      d: 2,
      sd: 26,
    },
    {
      label: "10",
      R: 122.69,
      d: 11,
      sd: 31,
      medium: 7,
    },
    {
      label: "11",
      R: -92.14,
      d: 52.933704085610145,
      sd: 31,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Dallmeyer/BertramLangton GB553844 preferred unnumbered example, native labelSoleexample by authoring convention. Literal F1 uniformly represented100workingmm/unit, no retail scale or source fit. Original3DPMApages independently visually/hash verified; no local originals or denied-route retry. Literal1.6436vs1.6435 preserved. Iris11.4/10.1,z44.4 and caps estimated. Approx50degree design aim is not validated coverage; chosen0–12degrees only. Septac association from engraved specimens is not a serial prescription/production match. D-line infinity only, no calibrated broadband, finite-focus or retail claim. Exact event dates/legal company expansion are not invented from uninspected header.",
  },
  aperture: {
    nominalFNumber: 1.5,
    fStops: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 24,
    maxTraceFieldDeg: 12,
  },
  groups: [
    {
      text: "G1 · L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 · L2–L4",
      fromSurface: "3",
      toSurface: "6",
    },
    {
      text: "G3 · L5–L6",
      fromSurface: "7",
      toSurface: "9",
    },
    {
      text: "G4 · L7",
      fromSurface: "10",
      toSurface: "11",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
