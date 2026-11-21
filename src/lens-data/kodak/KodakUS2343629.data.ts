import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "altman-us2343629-example2-infinity-reference",
  maker: null,
  name: "FRED E. ALTMAN US2343629 EXAMPLE II \u2014 SOURCE f/3.5",
  subtitle:
    "Patent-only 4E/4G \u00b7 sodium-D infinity \u00b7 estimated iris/rims",
  visible: false,
  source: {
    patentNumber: "US 2,343,629",
    patentYear: 1944,
    example: {
      label: "Example II",
      id: "2",
    },
    authors: ["Fred E. Altman"],
    assignees: ["Eastman Kodak Company"],
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
    groupCount: 4,
    specs: [
      "Literal100mm f3.5 ExampleII,Fig3section/Fig4table,4E/4G all-airspaced,R2realplane. No retail identity.",
      "Source sodium-D n/V retained without modern glass match or calibrated broadband.",
      "Literal EFL100.259568165/BFD80.607861379mm vs source100/80.4. Calculated Gaussian infinity image plane,no fit or radius/spacing repair.",
      "Stop split6.0/4.15 in literal10.15mm afterR6,z27.3 and caps estimated; no printed iris bore/station or field.",
      "Source/controlf3.5 preserved; stock paraxial-derived iris and exact finite pupil equivalents documented separately from relayed11.4543845mm finite-marginal estimate.",
      "Actual +/-10deg diagnostic only,no invented format or source/retail coverage,finitefocus or measured throughput.",
      "Native geometric sodium-D MTF only at supported fractions within10deg; wider automatic/spectral results unqualified.",
      "Original signed primary transcription/pin externally visually verified; no localoriginal PDF,pixels or rehash,known denied route not retried.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.611,
      vd: 57.2,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair;no calibrated spectral curve.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.605,
      vd: 38,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair;no calibrated spectral curve.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.649,
      vd: 33.8,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair;no calibrated spectral curve.",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.62,
      vd: 60.2,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair;no calibrated spectral curve.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 50.3,
      d: 5.5,
      sd: 20,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 0.5,
      sd: 19,
    },
    {
      label: "3",
      R: 50,
      d: 9.5,
      sd: 18,
      medium: 2,
    },
    {
      label: "4",
      R: 57.2,
      d: 2.8,
      sd: 12.25,
    },
    {
      label: "5",
      R: -65.74,
      d: 3,
      sd: 12.25,
      medium: 3,
    },
    {
      label: "6",
      R: 42.04,
      d: 6,
      sd: 14,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.15,
    },
    {
      label: "7",
      R: 176.6,
      d: 5.6,
      sd: 16,
      medium: 4,
    },
    {
      label: "8",
      R: -43.84,
      d: 80.60786137879815,
      sd: 16,
    },
  ],
  aperture: {
    nominalFNumber: 3.5,
    fStops: [3.5, 4, 5.6, 8, 11, 16, 22],
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
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Literal100mm f3.5 ExampleII,Fig3section/Fig4table,4E/4G all-airspaced,R2realplane. No retail identity. Source sodium-D n/V retained without modern glass match or calibrated broadband. Literal EFL100.259568165/BFD80.607861379mm vs source100/80.4. Calculated Gaussian infinity image plane,no fit or radius/spacing repair. Stop split6.0/4.15 in literal10.15mm afterR6,z27.3 and caps estimated; no printed iris bore/station or field. Source/controlf3.5 preserved; stock paraxial-derived iris and exact finite pupil equivalents documented separately from relayed11.4543845mm finite-marginal estimate. Actual +/-10deg diagnostic only,no invented format or source/retail coverage,finitefocus or measured throughput. Native geometric sodium-D MTF only at supported fractions within10deg; wider automatic/spectral results unqualified. Original signed primary transcription/pin externally visually verified; no localoriginal PDF,pixels or rehash,known denied route not retried.",
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
      text: "G4 \u00b7 L4",
      fromSurface: "7",
      toSurface: "8",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
