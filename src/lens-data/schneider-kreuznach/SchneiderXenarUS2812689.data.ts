import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "albrecht-us2812689-infinity-reference",
  maker: null,
  name: "ALBRECHT US2812689 REFERENCE \u2014 100mm PATENT f/3.5",
  subtitle: "Patent-only 4E/3G \u00b7 helium-d infinity / estimated iris-rims",
  visible: false,
  source: {
    patentNumber: "US 2,812,689",
    patentYear: 1957,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Wolfram Wilhelm Albrecht"],
    assignees: ["Jos. Schneider & Co."],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 3.5,
    },
    elementCount: 4,
    groupCount: 3,
    specs: [
      "Patent-only source-literal four-element, three-group reference. No substantiated Xenar or Retina-Xenar production identity.",
      "Helium d (587.5618 nm), infinity only. Validated diagnostic scope is limited to \u00b15\u00b0. No printed numerical field is inherited.",
      "Iris station, bore and clear rims are estimates. Stop split 4.50 / 2.56 mm in the unchanged 7.06 mm second air gap.",
      "Both original tables specify front index 1.69347 per independent scout verification. Original PDF pixels and hash remain external source custody.",
      "Nominal/control f/3.5 and finite aperture equivalents are distinct. Quantitative broadband, retail and finite-focus behavior are unqualified.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.69347,
      vd: 53.5,
      indexReference: "d",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.62004,
      vd: 36.3,
      indexReference: "d",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.62364,
      vd: 36.7,
      indexReference: "d",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
      cemented: "G3",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.74472,
      vd: 44.7,
      indexReference: "d",
      glass:
        "Literal helium-d/Abbe pair; no verified catalog identity or calibrated spectral curve.",
      cemented: "G3",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 37.3,
      d: 9.79,
      sd: 18,
      medium: 1,
    },
    {
      label: "2",
      R: 1373,
      d: 4.77,
      sd: 18,
    },
    {
      label: "3",
      R: -70.6,
      d: 2.84,
      sd: 16,
      medium: 2,
    },
    {
      label: "4",
      R: 32.4,
      d: 4.5,
      sd: 15,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.56,
    },
    {
      label: "5",
      R: -415.4,
      d: 2.17,
      sd: 16,
      medium: 3,
    },
    {
      label: "6",
      R: 33.5,
      d: 7.2,
      sd: 15.5,
      medium: 4,
    },
    {
      label: "7",
      R: -50.6,
      d: 83.21204898227607,
      sd: 15.5,
    },
  ],
  aperture: {
    nominalFNumber: 3.5,
    fStops: [3.5, 4, 5.6, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 10,
    maxTraceFieldDeg: 5,
  },
  rays: {
    offAxisFieldFrac: 1,
  },
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Infinity-only patent reference. Finite focusing is not modeled.",
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
      text: "G3 \u00b7 L3+L4",
      fromSurface: "5",
      toSurface: "7",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
