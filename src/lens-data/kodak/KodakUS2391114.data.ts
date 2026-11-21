import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "aklin-us2391114-example2-infinity-reference",
  maker: null,
  name: "AKLIN US2391114 EX.II — PATENT REFERENCE",
  subtitle:
    "100mm nominal f/2.25 · literal nD · chosen0–15° infinity diagnostic",
  visible: false,
  source: {
    patentNumber: "US 2,391,114",
    patentYear: 1945,
    example: {
      label: "Example II",
      id: "2",
    },
    authors: ["George H. Aklin"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 53.43060634981295,
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2.25,
    },
    specs: [
      "3E/3G · LITERAL HIGH-INDEX TRIPLET EXAMPLEII; NOT EXAMPLEI f2.5",
      "SOURCE100/f2.25/BFD73.5; LITERAL EFL99.920682/BFD73.493161",
      "DLINE SPECIFIED IN SOURCE; NO GLASS SUBSTITUTION/SPECTRAL CALIBRATION",
      "PREFERRED INFERRED STOP7.2/3.0,z40.8; SUPERSEDED5.8/4.4 NOT USED",
      "CAPS/PHYSICAL IRIS ESTIMATED; NO BAFFLE/OVERRIDE/GEOMETRY FIT",
      "NOMINAL f2.25; NATIVE FINITE ENTRANCE EQUIVALENT APPROX f2.31901",
      "CHOSEN0–15° DIAGNOSTIC; FIELD-CURVE MARKERS NOT COVERAGE",
      "NO PRODUCTION, FINITE-FOCUS OR BROADBAND CLAIM",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.755,
      vd: 47.2,
      indexReference: "D",
      glass:
        "Unmatched (literal printed nD/V; no exact catalog glass or calibrated curve)",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.72,
      vd: 29.3,
      indexReference: "D",
      glass:
        "Unmatched (literal printed nD/V; no exact catalog glass or calibrated curve)",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.734,
      vd: 51.1,
      indexReference: "D",
      glass:
        "Unmatched (literal printed nD/V; no exact catalog glass or calibrated curve)",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 54.1,
      d: 16.1,
      sd: 28,
      medium: 1,
    },
    {
      label: "2",
      R: -552,
      d: 9.4,
      sd: 28,
    },
    {
      label: "3",
      R: -70,
      d: 8.1,
      sd: 27,
      medium: 2,
    },
    {
      label: "4",
      R: 43,
      d: 7.2,
      sd: 23,
    },
    {
      label: "STO",
      R: "flat",
      d: 3,
    },
    {
      label: "5",
      R: 140.7,
      d: 17.9,
      sd: 25,
      medium: 3,
    },
    {
      label: "6",
      R: -53.2,
      d: 73.49316141965102,
      sd: 25,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Aklin/EastmanKodak US2391114 ExampleII/Fig2 high-index triplet, not ExIf2.5. All3originalpages/tableFig2+p2 and Dlinep3 externally verified in scout custody; no local PDF/hash/pixels or denied-source retry. Literal sourceR/d/nD/V preserved; EFL99.920682/GaussianBFD73.493161 not fitted to printed100/73.5. Preferred inferred stop7.2/3.0,z40.8 and clearcaps/physicaliris estimated, no superseded5.8/4.4 station or baffle. Chosen0–15degrees only; original fieldcurve markers not physical field or coverage. No retail/finite/spectralcalibration or source measured-performance claim.",
  },
  aperture: {
    nominalFNumber: 2.25,
    fStops: [2.25, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 30,
    maxTraceFieldDeg: 15,
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
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
