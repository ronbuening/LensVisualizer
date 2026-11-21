import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "kupka-us2543856-example1-infinity-reference",
  maker: null,
  name: "FRANTIŠEK KUPKA US2543856 EXAMPLE 1 — SOURCE f/1.8",
  subtitle:
    "Meopta cinema patent only · derived iris/calibrated control · sodium-D infinity",
  visible: false,
  source: {
    patentNumber: "US 2,543,856",
    example: {
      label: "Example 1",
      id: "1",
    },
    authors: ["František Kupka"],
    assignees: ["Meopta"],
    sdSource: "heuristic",
  },
  catalog: {
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 1.8,
    },
    imageCircleMm: 35.40431999587676,
    specs: [
      "Patent-only cinema optical reference; no retail lens identity or finite projection state.",
      "Literal five elements, R4 plano glass-to-glass cement and 0.1 mm front air preserved.",
      "Source design f/1.8 differs from saved software iris-calibration control.",
      "Iris station R7 + 9.4 mm / R8 - 15.6 mm is published; diameter is not.",
      "Derived iris radius 16.734857895572 mm from source axial height 27.78 mm; software control 1.753644790435.",
      "All per-face clear apertures estimated; actual clipping documented through chosen +/-10-degree diagnostic scope.",
      "Explicit sodium-D source indices; Abbe values retained, no calibrated broadband/glass-catalog claim.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.65981,
      vd: 50.3,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D index and Abbe value; no calibrated dispersion or catalog identification.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.65981,
      vd: 50.3,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D index and Abbe value; no calibrated dispersion or catalog identification.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.71715,
      vd: 29.6,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D index and Abbe value; no calibrated dispersion or catalog identification.",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.71715,
      vd: 29.6,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D index and Abbe value; no calibrated dispersion or catalog identification.",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.61216,
      vd: 58.0,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D index and Abbe value; no calibrated dispersion or catalog identification.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 78,
      d: 9.5,
      sd: 32,
      medium: 1,
    },
    {
      label: "2",
      R: 270,
      d: 0.1,
      sd: 32,
    },
    {
      label: "3",
      R: 45.5,
      d: 13,
      sd: 30,
      medium: 2,
    },
    {
      label: "4",
      R: "flat",
      d: 2.5,
      sd: 27,
      medium: 3,
    },
    {
      label: "5",
      R: 200,
      d: 8.2,
      sd: 27,
    },
    {
      label: "6",
      R: -600,
      d: 1.5,
      sd: 24,
      medium: 4,
    },
    {
      label: "7",
      R: 31.5,
      d: 9.4,
      sd: 21,
    },
    {
      label: "STO",
      R: "flat",
      d: 15.6,
    },
    {
      label: "8",
      R: 109,
      d: 7,
      sd: 22,
      medium: 5,
    },
    {
      label: "9",
      R: -72.82,
      d: 52.31996624092534,
      sd: 22,
    },
  ],
  aperture: {
    nominalFNumber: 1.7536447904353865,
    fStops: [1.7536447904353865, 1.8, 2, 2.8, 4, 5.6, 8, 11, 16],
    maxFNumber: 16,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 20,
    maxTraceFieldDeg: 10,
  },
  rays: {
    offAxisFieldFrac: 1,
  },
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Private literal US2543856 Example 1 infinity reference in source direction; no retail or solved finite projection state. Source f/1.8 is catalog design, while saved control f/1.753644790435 reproduces a derived iris radius 16.734857895572 mm at the published station z44.2 mm. Diameter is inferred from the source h27.78 mm axial witness, not a printed hardware dimension. No fake fixed-stop flag, invented glass, baffle, optical retuning or engine change. All caps estimated; +/-10-degree field is chosen diagnostic only. Literal sodium-D quantitative metrics; any generic Abbe chromatic output is not qualified. Original pages visually verified in independent external custody, not locally fetched or pixel-inspected.",
  },
  groups: [
    {
      text: "G1 · L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 · L2 + L3",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "G3 · L4",
      fromSurface: "6",
      toSurface: "7",
    },
    {
      text: "G4 · L5",
      fromSurface: "8",
      toSurface: "9",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
