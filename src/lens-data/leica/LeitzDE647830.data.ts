import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "leitz-de647830-infinity-patent-reference",
  maker: null,
  name: "LEITZ DE647830 — PATENT REFERENCE",
  subtitle:
    "100-unit nominal f/1.5 · printed n′ / representative D metadata · chosen 0–10° infinity diagnostic",
  visible: false,
  source: {
    patentNumber: "DE 647830",
    patentYear: 1937,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: [],
    assignees: ["Ernst Leitz Wetzlar"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 35.263249918973194,
    elementCount: 7,
    groupCount: 5,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 1.5,
    },
    specs: [
      "7E/5G · SPLIT-REAR GAUSSIAN · CEMENT R4/R7",
      "PRINTED n′ SCALARS; D METADATA IS A MODEL CONVENTION",
      "SOURCE NOMINAL100 f/1.5; CALCULATED EFL99.993914/BFD53.652699",
      "ESTIMATED12/9.75 IRIS SPLIT AND CLEAR CAPS; TAPERED R4/R5 PROXY",
      "NO SOURCE FIELD / PHYSICAL IRIS / RIMS / BACK FOCUS",
      "NOMINAL f/1.5; MODELED FINITE ENTRANCE EQUIVALENT APPROX f/1.45190",
      "CHOSEN0–10° INFINITY DIAGNOSTIC; NO RETAIL XENON CLAIM",
      "NO FINITE, CALIBRATED SPECTRAL OR FULL-PUPIL COVERAGE CLAIM",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.6202,
      vd: 60.4,
      indexReference: "D",
      glass:
        "Unmatched (literal source n′/V; representative D convention, no verified spectral identity or curve)",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.6202,
      vd: 60.4,
      indexReference: "D",
      glass:
        "Unmatched (literal source n′/V; representative D convention, no verified spectral identity or curve)",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.5814,
      vd: 40.8,
      indexReference: "D",
      glass:
        "Unmatched (literal source n′/V; representative D convention, no verified spectral identity or curve)",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.5822,
      vd: 42,
      indexReference: "D",
      glass:
        "Unmatched (literal source n′/V; representative D convention, no verified spectral identity or curve)",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.6202,
      vd: 60.4,
      indexReference: "D",
      glass:
        "Unmatched (literal source n′/V; representative D convention, no verified spectral identity or curve)",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Source Spherical Element",
      nd: 1.6202,
      vd: 60.4,
      indexReference: "D",
      glass:
        "Unmatched (literal source n′/V; representative D convention, no verified spectral identity or curve)",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Source Spherical Element",
      nd: 1.6202,
      vd: 60.4,
      indexReference: "D",
      glass:
        "Unmatched (literal source n′/V; representative D convention, no verified spectral identity or curve)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 80.37,
      d: 12.29,
      sd: 36,
      medium: 1,
    },
    {
      label: "2",
      R: 1068.5,
      d: 0.378,
      sd: 36,
    },
    {
      label: "3",
      R: 45.39,
      d: 17.02,
      sd: 32,
      medium: 2,
    },
    {
      label: "4",
      R: -387.6,
      d: 5.673,
      sd: 31,
      medium: 3,
    },
    {
      label: "5",
      R: 26.21,
      d: 12,
      sd: 21.4,
    },
    {
      label: "STO",
      R: "flat",
      d: 9.75,
    },
    {
      label: "6",
      R: -33.19,
      d: 5.673,
      sd: 21.4,
      medium: 4,
    },
    {
      label: "7",
      R: 43.5,
      d: 18.91,
      sd: 27,
      medium: 5,
    },
    {
      label: "8",
      R: -60.51,
      d: 0.378,
      sd: 27,
    },
    {
      label: "9",
      R: -176.8,
      d: 9.455,
      sd: 34,
      medium: 6,
    },
    {
      label: "10",
      R: -71.2,
      d: 0.378,
      sd: 34,
    },
    {
      label: "11",
      R: 139.9,
      d: 9.455,
      sd: 34,
      medium: 7,
    },
    {
      label: "12",
      R: -191,
      d: 53.65269925341628,
      sd: 34,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Patent-only DE647830 infinity reference. Independent scout verified original3pages, no local PDF, known denied DPMA route not retried. Literal radii, spacings and source nprime preserved; D-reference metadata is a modeling convention, not verified source spectral identity. Estimated iris12/9.75, z47.361 and clear caps including tapered R4/R5 proxy; no source field/iris/rims/BFD.0–10degrees is chosen diagnostic only. No Xenon/retail, finite-focus, broadband or full-pupil coverage claim.",
  },
  aperture: {
    nominalFNumber: 1.5,
    fStops: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 20,
    maxTraceFieldDeg: 10,
  },
  groups: [
    {
      text: "G1 · L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 · L2–L3",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "G3 · L4–L5",
      fromSurface: "6",
      toSurface: "8",
    },
    {
      text: "G4 · L6",
      fromSurface: "9",
      toSurface: "10",
    },
    {
      text: "G5 · L7",
      fromSurface: "11",
      toSurface: "12",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
