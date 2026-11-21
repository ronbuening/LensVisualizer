import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "werfeli-us2744445-figure1-dline-reference",
  maker: null,
  name: "WERFELI US2744445 FIG.1 — PATENT REFERENCE",
  subtitle:
    "100mm f/1.4 patent-only · source±8° design field · estimated iris/rims · reduction-direction D-line infinity",
  visible: false,
  source: {
    patentNumber: "US 2,744,445 A",
    patentYear: 1956,
    example: {
      label: "Figure 1",
      id: "1",
    },
    authors: ["Arnold Werfeli"],
    assignees: ["Paillard S.A."],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 27.715742799207472,
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 1.4,
    },
    specs: [
      "4E/4G · TWO FUNCTIONAL AIR-SPACED ACHROMATIC PAIRS",
      "SOURCE NOMINAL100mm f/1.4 AND±8° DESIGN FIELD",
      "PATENT-ONLY · NO VERIFIED PAILLARD/BOLEX RETAIL IDENTITY",
      "NOMINALf/1.4 · FINITE ENTRANCE EQUIVALENT≈f/1.4684",
      "IRIS MIDPOINT AND CLEAR RADII ESTIMATED · CLIPPING RETAINED",
      "D-LINE REDUCTION-DIRECTION INFINITY ONLY",
      "NO FINITE CONJUGATE, CALIBRATED SPECTRUM OR THROUGHPUT CLAIM",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Biconvex Positive",
      nd: 1.67741,
      vd: 55.6,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no catalog substitution, D-only scope)",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Biconcave Negative",
      nd: 1.68873,
      vd: 31.2,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no catalog substitution, D-only scope)",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconvex Positive",
      nd: 1.67741,
      vd: 55.6,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no catalog substitution, D-only scope)",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Plano-Concave Negative",
      nd: 1.74174,
      vd: 27.5,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no catalog substitution, D-only scope)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 89.8,
      d: 17.5,
      sd: 39,
      medium: 1,
    },
    {
      label: "2",
      R: -162.2,
      d: 1.15,
      sd: 36,
    },
    {
      label: "3",
      R: -131.55,
      d: 10,
      sd: 36,
      medium: 2,
    },
    {
      label: "4",
      R: 365.7,
      d: 36.9,
      sd: 38,
    },
    {
      label: "STO",
      R: "flat",
      d: 36.9,
    },
    {
      label: "5",
      R: 57.85,
      d: 12.5,
      sd: 26,
      medium: 3,
    },
    {
      label: "6",
      R: -70.3,
      d: 1.75,
      sd: 25.6,
    },
    {
      label: "7",
      R: -59.95,
      d: 2.5,
      sd: 27,
      medium: 4,
    },
    {
      label: "8",
      R: "flat",
      d: 37.745784091453295,
      sd: 26.5,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Source Fig1/claim2 only; object-left reduction-direction D-line infinity, no verified finite projector or factoryBolex identity. Literal optical R/d/nD/V and printed±8degree field retained, with clipping. Iris midpoint in73.8mm airgap and optical clear caps are estimates; physical diameter and image distance derived, not source measurements. Claim3 and unverified regional tables are excluded.",
  },
  aperture: {
    nominalFNumber: 1.4,
    fStops: [1.4, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 16,
    maxTraceFieldDeg: 8,
  },
  groups: [
    {
      text: "Front functional pair (air-spaced)",
      fromSurface: "1",
      toSurface: "4",
    },
    {
      text: "Rear functional pair (air-spaced)",
      fromSurface: "5",
      toSurface: "8",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
