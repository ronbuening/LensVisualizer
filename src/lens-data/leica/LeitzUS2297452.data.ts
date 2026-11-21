import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "berek-zimmermann-kleineberg-us2297452-infinity-reference",
  maker: null,
  name: "BEREK, ZIMMERMANN & KLEINEBERG US2297452 \u2014 SOURCE f/1.3",
  subtitle:
    "Sole patent example \u00b7 6E/4G \u00b7 sodium-D infinity \u00b7 estimated iris/rims",
  visible: false,
  source: {
    patentNumber: "US 2,297,452",
    patentYear: 1942,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Max Berek", "Otto Zimmermann", "Gustav Kleineberg"],
    assignees: [],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 1.3,
    },
    elementCount: 6,
    groupCount: 4,
    specs: [
      "Literal100mm f1.3 soleexample/Fig1,6E/4G2+2|1|1,cementR2/R5,R7opticalplane. No commercial Leitz identity.",
      "Source sodium-D n/V retained,no fabricatedC/Fglass from observationalcrossings,no calibrated broadband or catalog substitution.",
      "Literal EFL100.005617633/BFD34.878822756mm versus printedD-axisBFD34.875,computedGaussian plane separate,no fitting.",
      "ExactS3air12.82mm afterR8 retained;stop split11.75/1.07,z77.83 and caps estimated,no source bore.",
      "Saved source/controlf1.3 uses stockparaxialiris,independent finite-marginal16.989196mm seed separate and not forced across native source-aperture guard. Actual equivalents documented.",
      "Chosen actual +/-5deg diagnostic only,no invented format,sourcefield,retail,finite,broadband,widerautomaticMTF or throughputclaim.",
      "Reference geometric sodium-D MTF only through supported fractions within5deg. Relayed10degbench and sourceC/Fobservations are not localnative or calibrated spectralclaims.",
      "Signed original/pin visually verified externally,no localPDF/pixels/rehash. Separate localpatent prose corroborates firsttwo doublets then twosinglets;no source-route retry.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.5338,
      vd: 55.4,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair;no invented C/F indices or calibrated spectral curve.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.7283,
      vd: 28.3,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair;no invented C/F indices or calibrated spectral curve.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.623,
      vd: 58.1,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair;no invented C/F indices or calibrated spectral curve.",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.7283,
      vd: 28.3,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair;no invented C/F indices or calibrated spectral curve.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.6073,
      vd: 49.2,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair;no invented C/F indices or calibrated spectral curve.",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Source Spherical Element",
      nd: 1.6074,
      vd: 56.7,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair;no invented C/F indices or calibrated spectral curve.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 78.9,
      d: 17.76,
      sd: 40,
      medium: 1,
    },
    {
      label: "2",
      R: -167.68,
      d: 3.94,
      sd: 40,
      medium: 2,
    },
    {
      label: "3",
      R: -1183.62,
      d: 2.96,
      sd: 40,
    },
    {
      label: "4",
      R: 50.8,
      d: 18.74,
      sd: 37,
      medium: 3,
    },
    {
      label: "5",
      R: -986.34,
      d: 3.94,
      sd: 33,
      medium: 4,
    },
    {
      label: "6",
      R: 98.64,
      d: 12.82,
      sd: 33,
    },
    {
      label: "7",
      R: "flat",
      d: 5.92,
      sd: 30,
      medium: 5,
    },
    {
      label: "8",
      R: 28.6,
      d: 11.75,
      sd: 22,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.07,
    },
    {
      label: "9",
      R: 47.34,
      d: 13.32,
      sd: 26,
      medium: 6,
    },
    {
      label: "10",
      R: -108.5,
      d: 34.87882275568537,
      sd: 26,
    },
  ],
  aperture: {
    nominalFNumber: 1.3,
    fStops: [1.3, 1.4, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
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
      "Literal100mm f1.3 soleexample/Fig1,6E/4G2+2|1|1,cementR2/R5,R7opticalplane. No commercial Leitz identity. Source sodium-D n/V retained,no fabricatedC/Fglass from observationalcrossings,no calibrated broadband or catalog substitution. Literal EFL100.005617633/BFD34.878822756mm versus printedD-axisBFD34.875,computedGaussian plane separate,no fitting. ExactS3air12.82mm afterR8 retained;stop split11.75/1.07,z77.83 and caps estimated,no source bore. Saved source/controlf1.3 uses stockparaxialiris,independent finite-marginal16.989196mm seed separate and not forced across native source-aperture guard. Actual equivalents documented. Chosen actual +/-5deg diagnostic only,no invented format,sourcefield,retail,finite,broadband,widerautomaticMTF or throughputclaim. Reference geometric sodium-D MTF only through supported fractions within5deg. Relayed10degbench and sourceC/Fobservations are not localnative or calibrated spectralclaims. Signed original/pin visually verified externally,no localPDF/pixels/rehash. Separate localpatent prose corroborates firsttwo doublets then twosinglets;no source-route retry.",
  },
  groups: [
    {
      text: "G1 \u00b7 L1+L2",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "G2 \u00b7 L3+L4",
      fromSurface: "4",
      toSurface: "6",
    },
    {
      text: "G3 \u00b7 L5",
      fromSurface: "7",
      toSurface: "8",
    },
    {
      text: "G4 \u00b7 L6",
      fromSurface: "9",
      toSurface: "10",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
