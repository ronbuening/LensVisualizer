import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "cook-us2601595-example7-chamfer-proxy-dline-reference",
  maker: null,
  name: "COOK US2601595 EX.VII — CHAMFER PROXY",
  subtitle:
    "Normalized100-unit representation · nominal f/3.5 / cap-limited≈f/3.595 · source50° design field · D-line infinity",
  visible: false,
  source: {
    patentNumber: "US 2,601,595 A",
    patentYear: 1952,
    example: {
      label: "Example VII",
      id: "7",
    },
    authors: ["Gordon Henry Cook"],
    assignees: ["Taylor, Taylor & Hobson Limited"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 93.32155407299163,
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 3.5,
    },
    specs: [
      "6E/5G · FRONT CEMENTED, REAR CONTACT INTENTIONALLY BROKEN",
      "100mm IS A DECLARED NORMALIZED SCALE, NOT A SOURCE ABSOLUTE FOCAL LENGTH",
      "SOURCE NOMINAL f/3.5; CONSERVATIVE R3 PROXY LIMITS FINITE ENTRANCE TO≈f/3.595",
      "SOURCE50° DESIGN FIELD REQUEST WITH EXPLICIT CLIPPING",
      "SOURCE SUGGESTED CHAMFER DIAMETERS ARE CONSERVATIVE SPHERICAL CAP PROXIES, NOT MEASUREMENTS",
      "R9 ESTIMATED; LITERAL0.005F REAR AIR RETAINED",
      "D-LINE INFINITY ONLY · NO RETAIL IDENTITY OR CALIBRATED DISPERSION",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Meniscus Component",
      nd: 1.657,
      vd: 50.8,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no catalog curve substitution, D-line scope)",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Meniscus Component",
      nd: 1.6205,
      vd: 36.2,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no catalog curve substitution, D-line scope)",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Positive Meniscus",
      nd: 1.6234,
      vd: 56.2,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no catalog curve substitution, D-line scope)",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Positive Meniscus",
      nd: 1.6234,
      vd: 56.2,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no catalog curve substitution, D-line scope)",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Meniscus Component",
      nd: 1.6055,
      vd: 38,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no catalog curve substitution, D-line scope)",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Meniscus Component",
      nd: 1.657,
      vd: 50.8,
      indexReference: "D",
      glass:
        "Unmatched (literal source nD/V; no catalog curve substitution, D-line scope)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 23.26,
      d: 7,
      sd: 15,
      medium: 1,
    },
    {
      label: "2",
      R: 51.65,
      d: 4,
      sd: 15,
      medium: 2,
    },
    {
      label: "3",
      R: 16.95,
      d: 2.8,
      sd: 11,
    },
    {
      label: "4",
      R: 28.41,
      d: 3.2,
      sd: 12.3,
      medium: 3,
    },
    {
      label: "5",
      R: 45.25,
      d: 2.55,
      sd: 11,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.55,
    },
    {
      label: "6",
      R: -76.92,
      d: 3.6,
      sd: 11,
      medium: 4,
    },
    {
      label: "7",
      R: -38.76,
      d: 2.8,
      sd: 12.6,
    },
    {
      label: "8",
      R: -19.61,
      d: 4,
      sd: 11,
      medium: 5,
    },
    {
      label: "9",
      R: -116.28,
      d: 0.5,
      sd: 13,
    },
    {
      label: "10",
      R: -116.55,
      d: 5.2,
      sd: 13,
      medium: 6,
    },
    {
      label: "11",
      R: -24.12,
      d: 80.3196970246873,
      sd: 13,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Patent-only normalized ExampleVII, larger-conjugate/front infinity direction. 100mm is a declared scale. Literal source R/d/nD/V and0.005F rear air retained. Approximate midpoint stop and conservative spherical cap proxies of suggested chamfer diameters; no bevel geometry inferred. R4/R7/R9 caps estimated. Source nominalf/3.5 is distinct from actual cap-limited≈f/3.595. Source50degree full field requested with clipping; no full-pupil, finite-conjugate or retail identity claim. Quantitative D-line only.",
  },
  aperture: {
    nominalFNumber: 3.5,
    fStops: [3.5, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 50,
    maxTraceFieldDeg: 25,
  },
  groups: [
    {
      text: "Front cemented pair",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "Inner positive meniscus",
      fromSurface: "4",
      toSurface: "5",
    },
    {
      text: "Inner positive meniscus",
      fromSurface: "6",
      toSurface: "7",
    },
    {
      text: "Broken rear group L5",
      fromSurface: "8",
      toSurface: "9",
    },
    {
      text: "Broken rear group L6",
      fromSurface: "10",
      toSurface: "11",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
