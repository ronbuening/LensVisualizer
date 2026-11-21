import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "tronnier-us2202749-example2-yellow-infinity-reference",
  maker: null,
  name: "TRONNIER US2202749 EX.II — YELLOW-INDEX REFERENCE",
  subtitle:
    "100mm nominal f/3.5 table branch · printed yellow indices / representative D metadata · chosen0–12° infinity diagnostic",
  visible: false,
  source: {
    patentNumber: "US 2,202,749",
    example: {
      label: "Example II",
      id: "2",
    },
    authors: ["Albrecht Wilhelm Tronnier"],
    assignees: ["Schneider"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 42.18608947079678,
    elementCount: 5,
    groupCount: 2,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 3.5,
    },
    specs: [
      "5E/2G · CEMENTED3+2 · R2/R5 ARE TRUE OPTICAL PLANES",
      "PRINTED YELLOW-RAY INDICES; EXACT SOURCE WAVELENGTH UNVERIFIED",
      "D-REFERENCE METADATA IS REPRESENTATIVE ONLY · NO BROADBAND CLAIM",
      "TABLE f/3.5 BRANCH; SEPARATE FIG2 f/5 TEXT RETAINED, NOT BLENDED",
      "ESTIMATED IRIS: NATIVE GEOMETRIC ENTRANCE EQUIVALENT≈f/3.5199",
      "PRINTED10.9mm GAP; ESTIMATED7.6/3.3mm STOP SPLIT AND PHYSICAL SIZE/RIMS",
      "NO NUMERIC SOURCE FIELD · CHOSEN0–12° DIAGNOSTIC ONLY",
      "NO ANGULON/RETAIL ATTRIBUTION; OTHER EXAMPLEI VIOLET EXCLUDED",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.7015,
      vd: 41.2,
      indexReference: "D",
      glass:
        "Unmatched (literal printed yellow n/V; representative D metadata, not exact source line)",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.4875,
      vd: 70,
      indexReference: "D",
      glass:
        "Unmatched (literal printed yellow n/V; representative D metadata, not exact source line)",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.6545,
      vd: 33.8,
      indexReference: "D",
      glass:
        "Unmatched (literal printed yellow n/V; representative D metadata, not exact source line)",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.6254,
      vd: 35.6,
      indexReference: "D",
      glass:
        "Unmatched (literal printed yellow n/V; representative D metadata, not exact source line)",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.7015,
      vd: 41.2,
      indexReference: "D",
      glass:
        "Unmatched (literal printed yellow n/V; representative D metadata, not exact source line)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 29.2,
      d: 7.6,
      sd: 17.5,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 6.1,
      sd: 17.5,
      medium: 2,
    },
    {
      label: "3",
      R: -41.1,
      d: 1.8,
      sd: 18,
      medium: 3,
    },
    {
      label: "4",
      R: 22.6,
      d: 7.6,
      sd: 16.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.3,
    },
    {
      label: "5",
      R: "flat",
      d: 1.8,
      sd: 17,
      medium: 4,
    },
    {
      label: "6",
      R: 21.7,
      d: 14.1,
      sd: 17,
      medium: 5,
    },
    {
      label: "7",
      R: -62.3,
      d: 77.94862552893022,
      sd: 17,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Patent-only ExampleII printed-yellow-index infinity reference. Source original drawing/table verified in independent scout custody; known worker USPTO denial not retried, no local PDF claim. D metadata at589.2938nm is a representative authoring convention, not a verified source wavelength or calibrated spectrum. Literal optics/glass/10.9mm gap preserved; stop7.6/3.3 split, diameter and rims estimated. Tablef3.5 retained separately from Fig2f5 text; no ExampleIviolet blend.0–12degrees chosen diagnostic only; no source/fullcoverage, finite or Angulon/retail claim.",
  },
  aperture: {
    nominalFNumber: 3.5,
    fStops: [3.5, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 24,
    maxTraceFieldDeg: 12,
  },
  groups: [
    {
      text: "Front cemented triplet",
      fromSurface: "1",
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
