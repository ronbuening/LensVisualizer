import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "reiss-us2388869-example2-infinity-reference",
  maker: null,
  name: "REISS US2388869 EX.II \u2014 PATENT REFERENCE",
  visible: false,
  source: {
    patentNumber: "US 2,388,869",
    patentYear: 1945,
    example: {
      label: "Example II",
      id: "2",
    },
    authors: ["Max Reiss"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    elementCount: 3,
    groupCount: 3,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 8,
    },
    specs: [
      "Literal sodium-D patent-only ExampleII; source p1drawing belongs to ExampleI",
      "Actual post-glass diaphragm modeled2mm afterR6; no fake lens or relocation",
      "Nominal100/f8/BF89.5; literal99.594153/89.110640; no fit",
      "Physical iris/caps estimated; chosen \u00b125deg diagnostic only; no retail or finite claim",
      "Chosen metric circle is twice actual25deg chief image height, not source format",
      "UI Cardinal BFD starts at final modeled STO:87.110640mm; glass-rear BFD89.110640mm",
    ],
    imageCircleMm: 93.44113199987868,
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.611,
      vd: 58.8,
      indexReference: "D",
      glass: "Unmatched literal sodiumD/V; no calibrated curve",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.605,
      vd: 38.0,
      indexReference: "D",
      glass: "Unmatched literal sodiumD/V; no calibrated curve",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.611,
      vd: 58.8,
      indexReference: "D",
      glass: "Unmatched literal sodiumD/V; no calibrated curve",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 32.9,
      d: 5.5,
      sd: 15,
      medium: 1,
    },
    {
      label: "2",
      R: -1604,
      d: 4.5,
      sd: 15,
    },
    {
      label: "3",
      R: -45.7,
      d: 1.5,
      sd: 12.5,
      medium: 2,
    },
    {
      label: "4",
      R: 35.0,
      d: 5.6,
      sd: 12.5,
    },
    {
      label: "5",
      R: "flat",
      d: 2.7,
      sd: 10,
      medium: 3,
    },
    {
      label: "6",
      R: -32.2,
      d: 2,
      sd: 10,
    },
    {
      label: "STO",
      R: "flat",
      d: 87.11063991897167,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Max Reiss/EastmanKodak US2388869 ExampleII, literal sodiumD infinity diagnostic. Source says about2mm rear diaphragm; model fixes2mm afterR6 and derived87.110640mm fromstoptoimage. Original PDFp2 externally visually verified; p1Fig belongs to ExI. No original bytes/pixels or denied-route retry, no fake glass/stop relocation, no retail or finite state. Estimated caps/physicaliris, chosen\u00b125deg only.",
  },
  aperture: {
    nominalFNumber: 8,
    fStops: [8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 50,
    maxTraceFieldDeg: 25,
  },
  layout: {
    yScFill: 0.5,
  },
  subtitle:
    "100mm nominal f/8 \u00b7 sodium D \u00b7 rear diaphragm \u00b7 chosen \u00b125\u00b0 infinity diagnostic",
  groups: [
    {
      text: "G1 \u00b7 L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 \u00b7 L2",
      fromSurface: "3",
      toSurface: "4",
    },
    {
      text: "G3 \u00b7 L3",
      fromSurface: "5",
      toSurface: "6",
    },
  ],
} satisfies LensDataV2Input;
export default data;
