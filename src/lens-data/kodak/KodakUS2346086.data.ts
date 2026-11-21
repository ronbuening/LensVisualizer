import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "schade-tolle-us2346086-example2-infinity-reference",
  maker: null,
  name: "SCHADE / TOLLE US2346086 EX.II \u2014 PATENT REFERENCE",
  subtitle:
    "100mm nominal f/4.5 \u00b7 D-line \u00b7 chosen \u00b110\u00b0 source-plane infinity diagnostic",
  visible: false,
  source: {
    patentNumber: "US 2,346,086",
    patentYear: 1944,
    example: {
      label: "Example II",
      id: "2",
    },
    authors: ["Schade", "Tolle"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 35.226612480839634,
    elementCount: 4,
    groupCount: 3,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 4.5,
    },
    specs: [
      "ExampleII patent-only;4E/3G, R2 true refractive plane, R6 cemented",
      "Nominal100/f4.5/sourceBF89.7; literal100.203804/GaussianBF89.990410, no fit",
      "Authored source imagegap89.7 retained; Gaussianfocus0.290410mm farther, no MTFrefocus",
      "Estimated stop4.2/3.3,z11.2, iris/caps, no override/baffle",
      "Chosen\u00b110deg actual ray-panel scope; source27deg designaim not coverage/format",
      "Not commercial Tessar/Ektar or RudolphUS721240; no finite/calibrated broadband claim",
      "Metric circle is twice source-plane10deg chief height; offAxisFieldFrac1 sets panel edge",
      "Nominal f4.5 retained; modeled finite entrance equivalent f4.562707 (estimated iris)",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.697,
      vd: 56.1,
      indexReference: "D",
      glass:
        "Unmatched literal source nD/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.605,
      vd: 43.6,
      indexReference: "D",
      glass:
        "Unmatched literal source nD/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.621,
      vd: 36.2,
      indexReference: "D",
      glass:
        "Unmatched literal source nD/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.744,
      vd: 45.8,
      indexReference: "D",
      glass:
        "Unmatched literal source nD/V; no exact catalog glass or calibrated spectral curve",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 26.4,
      d: 3.9,
      sd: 13.3,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 2.0,
      sd: 13.3,
    },
    {
      label: "3",
      R: -85.6,
      d: 1.1,
      sd: 12.85,
      medium: 2,
    },
    {
      label: "4",
      R: 24.7,
      d: 4.2,
      sd: 12.85,
    },
    {
      label: "STO",
      R: "flat",
      d: 3.3,
    },
    {
      label: "5",
      R: -90.5,
      d: 1.0,
      sd: 13.15,
      medium: 3,
    },
    {
      label: "6",
      R: 48.3,
      d: 4.0,
      sd: 13.15,
      medium: 4,
    },
    {
      label: "7",
      R: -44.5,
      d: 89.7,
      sd: 13.15,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Schade/Tolle EastmanKodak US2346086 ExII patent-only D-line infinity reference; no commercialTessar/Ektar label. Original independently verified externalfacsimile custody withhashpin, no localoriginal/pixels/hash or deniedprovider retry. AllsourceR/t/nD/V preserved, R2refractiveplane/R6bond. Source100/f4.5/BF89.7 retained atsourceimageplane89.7; literalEFL100.203804/GaussianBF89.990410, no opticsfit/refocus. Stop4.2/3.3,z11.2 andphysicaliris/caps estimated; chosen\u00b110deg raypanel+metrics, source27degdesignaim not measuredcoverage. RelatedRudolphUS721240 differs, no retail/finite/broadbandcalibration/baffle/override.",
  },
  aperture: {
    nominalFNumber: 4.5,
    fStops: [4.5, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 20,
    maxTraceFieldDeg: 10,
  },
  rays: {
    offAxisFieldFrac: 1,
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
