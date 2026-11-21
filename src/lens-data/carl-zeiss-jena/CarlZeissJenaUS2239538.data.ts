import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "richter-us2239538-figure2-infinity-reference",
  maker: null,
  name: "RICHTER US2239538 FIG.2 — PATENT REFERENCE",
  subtitle:
    "100mm nominal f/6.3 · literal n_d · source stop/detector · chosen0–10° infinity diagnostic",
  visible: false,
  source: {
    patentNumber: "US 2,239,538",
    patentYear: 1941,
    example: {
      label: "Figure 2",
      id: "2",
    },
    authors: ["Robert Richter"],
    assignees: ["Firm Carl Zeiss, Jena"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 35.27489329343408,
    elementCount: 4,
    groupCount: 4,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 6.3,
    },
    specs: [
      "4E/4G · FOUR SEPARATE SINGLETS;0.07mm AIR GAPS NOT CEMENT",
      "FIGURE2 ONLY; NO TELIKON/TELEMAR COMMERCIAL IDENTITY",
      "SOURCE n_d /Vd; L1/L3 V45.0/46.2 DISTINCT; NOT SODIUM-D",
      "LITERAL EFL100.026931 / GAUSSIAN BFD41.599494",
      "PRINTED79.37 IS FRONT-VERTEX TO IMAGE; SOURCE LASTGAP41.58",
      "SOURCE STOP14.23/16.14,z18.71; IRIS/CAPS ESTIMATED",
      "NOMINAL f6.3; NATIVE FINITE ENTRANCE EQUIVALENT APPROX f6.40561",
      "APPROX30° DESIGN FIELD NOT VERIFIED COVERAGE; CHOSEN0–10° ONLY",
      "INFINITY AT SOURCE DETECTOR; NO FINITE/RETAIL/BROADBAND CLAIM",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.60801,
      vd: 45,
      indexReference: "d",
      glass:
        "Unmatched (literal source n_d/Vd, distinct sourceAbbe values; no glass substitution/calibrated dispersion)",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.72825,
      vd: 28.3,
      indexReference: "d",
      glass:
        "Unmatched (literal source n_d/Vd, distinct sourceAbbe values; no glass substitution/calibrated dispersion)",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.60801,
      vd: 46.2,
      indexReference: "d",
      glass:
        "Unmatched (literal source n_d/Vd, distinct sourceAbbe values; no glass substitution/calibrated dispersion)",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.72825,
      vd: 28.3,
      indexReference: "d",
      glass:
        "Unmatched (literal source n_d/Vd, distinct sourceAbbe values; no glass substitution/calibrated dispersion)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 21.1,
      d: 3.21,
      sd: 8.7,
      medium: 1,
    },
    {
      label: "2",
      R: -40,
      d: 0.07,
      sd: 8.7,
    },
    {
      label: "3",
      R: -40.2,
      d: 1.2,
      sd: 8.7,
      medium: 2,
    },
    {
      label: "4",
      R: 70.95,
      d: 14.23,
      sd: 9,
    },
    {
      label: "STO",
      R: "flat",
      d: 16.14,
    },
    {
      label: "5",
      R: -13,
      d: 1,
      sd: 9.5,
      medium: 3,
    },
    {
      label: "6",
      R: -70,
      d: 0.07,
      sd: 9.5,
    },
    {
      label: "7",
      R: "flat",
      d: 1.87,
      sd: 9.5,
      medium: 4,
    },
    {
      label: "8",
      R: -33.18,
      d: 41.58,
      sd: 9.5,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Richter/CarlZeiss US2239538 Figure2 patent-only Fraunhoferd infinity reference, no Telikon/Telemar retail identity. Source original4pages/PDFp3 table verified in independent scout custody; no local PDF/hash/pixels or blocked-route retry. Literal source n_d and distinctL1/L3 Abbe45/46.2 preserved, not sodiumD. Four separate singlets and0.07airgaps kept, R7plane active. Exact source stop14.23/16.14,z18.71; iris/caps estimated. Printed79.37frontvertex-to-image preserved as lastgap41.58, separateGaussianBFD41.599494/offset−.019494, no focus fit. Chosen0–10degrees diagnostic only, sourceapprox30full and ±15control not verifiedcoverage. No finite or calibrated broadband claim.",
  },
  aperture: {
    nominalFNumber: 6.3,
    fStops: [6.3, 8, 11, 16, 22, 32],
    maxFNumber: 32,
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
      text: "G2 · L2",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "G3 · L3",
      fromSurface: "5",
      toSurface: "6",
    },
    {
      text: "G4 · L4",
      fromSurface: "7",
      toSurface: "8",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
