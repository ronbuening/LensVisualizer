import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "kingslake-stevens-us2341385-infinity-reference",
  maker: null,
  name: "KINGSLAKE / STEVENS US2341385 \u2014 PATENT REFERENCE",
  subtitle:
    "100mm nominal f/3.5 \u00b7 literal D \u00b7 chosen \u00b125\u00b0 infinity diagnostic",
  visible: false,
  source: {
    patentNumber: "US 2,341,385",
    patentYear: 1944,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Kingslake", "Stevens"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 92.67013420062605,
    elementCount: 5,
    groupCount: 4,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 3.5,
    },
    specs: [
      "5E/4G; R8 cement; literal source prescription, no optical fitting",
      "SOURCE100/f3.5/BF101.7; LITERAL EFL100.077588/BFD101.527023",
      "Source D indices preserved; Abbe values are not calibrated dispersion",
      "Stop near R5 drawn; inferred11.7/2.6,z40.8 and clear rims/physical iris estimates",
      "Chosen \u00b125\u00b0 diagnostic; no historical measured field/coverage or retail claim",
      "Nominal f3.5; modeled finite entrance-equivalent f3.586752 (estimated iris)",
      "Infinity/reference-D only; no calibrated broadband or source-performance claim; no baffles/override",
      "Diagnostic image-circle is twice native/independent25deg chief height; not a surveyed format",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.62,
      vd: 60.4,
      indexReference: "D",
      glass:
        "Unmatched literal source D/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.697,
      vd: 56.1,
      indexReference: "D",
      glass:
        "Unmatched literal source D/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.617,
      vd: 36.6,
      indexReference: "D",
      glass:
        "Unmatched literal source D/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.617,
      vd: 36.6,
      indexReference: "D",
      glass:
        "Unmatched literal source D/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.611,
      vd: 57.2,
      indexReference: "D",
      glass:
        "Unmatched literal source D/V; no exact catalog glass or calibrated spectral curve",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 81.9,
      d: 7.1,
      sd: 29,
      medium: 1,
    },
    {
      label: "2",
      R: 31.6,
      d: 10.6,
      sd: 27,
    },
    {
      label: "3",
      R: 48.2,
      d: 11.4,
      sd: 24,
      medium: 2,
    },
    {
      label: "4",
      R: -172.6,
      d: 11.7,
      sd: 24,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.6,
    },
    {
      label: "5",
      R: -410.4,
      d: 4.9,
      sd: 22,
      medium: 3,
    },
    {
      label: "6",
      R: 46.1,
      d: 9.7,
      sd: 22,
    },
    {
      label: "7",
      R: 362.3,
      d: 4.6,
      sd: 25,
      medium: 4,
    },
    {
      label: "8",
      R: 48.9,
      d: 19.4,
      sd: 25,
      medium: 5,
    },
    {
      label: "9",
      R: -45.9,
      d: 101.52702279426268,
      sd: 25,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Kingslake/Stevens Eastman Kodak US2341385 sole patent design, not a retail match. Original drawingp1/tablep3 independently visually verified in external scout custody; original PDF hash pinned in evidence, no local source bytes/pixels/hash verification and no retry of denied provider. Literal R/t/D/V preserved; nominal100/f3.5/BF101.7 and calculated100.077588/101.527023 distinct, no fit. Chosen \u00b125deg infinity diagnostic only; no published measured field or finite conjugates. Stop nearR5 drawn but11.7/2.6,z40.8 and caps/physical iris estimated; no baffles/override/spectral calibration.",
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
    {
      text: "G4 \u00b7 L4+L5",
      fromSurface: "7",
      toSurface: "9",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
