import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "litten-aklin-altman-us2503751-example2-infinity-reference",
  maker: null,
  name: "LITTEN / AKLIN / ALTMAN US2503751 EXAMPLE II \u2014 SOURCE f/2.5",
  subtitle:
    "Patent-only 3E/3G \u00b7 sodium-D infinity \u00b7 estimated iris/rims",
  visible: false,
  source: {
    patentNumber: "US 2,503,751",
    patentYear: 1950,
    example: {
      label: "Example II",
      id: "2",
    },
    authors: ["Walter Litten", "George H. Aklin", "Fred E. Altman"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2.5,
    },
    elementCount: 3,
    groupCount: 3,
    specs: [
      "Literal100mm f2.5 ExampleII/Fig3 triplet,3E3G allairspaced,no cement. No retail association.",
      "Source sodium-D n/V retained without calibrateddispersion or modern glass substitution.",
      "Literal EFL100.036129153/BFD67.679265130mm,BFDcomputed/not sourcehardware,no fitting or source edits.",
      "Exactrear17.66airgap retained;stop split11/6.66,z40.65,bore and clearcaps estimated,not measured.",
      "Source/controlf2.5 uses stockparaxialiris;supplied13.975482finite-marginal estimate separate. Actual pupil equivalents documented distinctly.",
      "Author +/-14degree designfield separate from actualnative +/-10degree diagnostic,no invented physicalformat/imagecircle. No finitefocus,broadband,retail or throughputclaim.",
      "Scoped native geometric sodium-D MTF only within10degrees;widerautomatic/spectralresults unqualified.",
      "Signed originalnumerics/hash externally verified;no localoriginalPDF,pixels/rehash or deniedroute retry. Separate localprose read corroborates authornames andD-line,not localfacsimile table.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.734,
      vd: 51.1,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair;no calibrated spectral curve.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.689,
      vd: 30.9,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair;no calibrated spectral curve.",
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
        "Literal unmatched sodium-D/Abbe pair;no calibrated spectral curve.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 43.01,
      d: 13.65,
      sd: 25,
      medium: 1,
    },
    {
      label: "2",
      R: -431.4,
      d: 6.76,
      sd: 25,
    },
    {
      label: "3",
      R: -82.99,
      d: 9.24,
      sd: 22,
      medium: 2,
    },
    {
      label: "4",
      R: 35.26,
      d: 11,
      sd: 20,
    },
    {
      label: "STO",
      R: "flat",
      d: 6.66,
    },
    {
      label: "5",
      R: 133.5,
      d: 5.3,
      sd: 20,
      medium: 3,
    },
    {
      label: "6",
      R: -71.19,
      d: 67.67926513002558,
      sd: 20,
    },
  ],
  aperture: {
    nominalFNumber: 2.5,
    fStops: [2.5, 2.8, 4, 5.6, 8, 11, 16, 22],
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
      "Literal100mm f2.5 ExampleII/Fig3 triplet,3E3G allairspaced,no cement. No retail association. Source sodium-D n/V retained without calibrateddispersion or modern glass substitution. Literal EFL100.036129153/BFD67.679265130mm,BFDcomputed/not sourcehardware,no fitting or source edits. Exactrear17.66airgap retained;stop split11/6.66,z40.65,bore and clearcaps estimated,not measured. Source/controlf2.5 uses stockparaxialiris;supplied13.975482finite-marginal estimate separate. Actual pupil equivalents documented distinctly. Author +/-14degree designfield separate from actualnative +/-10degree diagnostic,no invented physicalformat/imagecircle. No finitefocus,broadband,retail or throughputclaim. Scoped native geometric sodium-D MTF only within10degrees;widerautomatic/spectralresults unqualified. Signed originalnumerics/hash externally verified;no localoriginalPDF,pixels/rehash or deniedroute retry. Separate localprose read corroborates authornames andD-line,not localfacsimile table.",
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
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
