import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "warmisham-wynne-us2319171-example2-infinity-reference",
  maker: null,
  name: "WARMISHAM / WYNNE US2319171 EXAMPLE II \u2014 SOURCE f/2",
  subtitle:
    "Patent-only 6E/4G \u00b7 KBr E3 \u00b7 sodium-D infinity \u00b7 estimated iris/rims",
  visible: false,
  source: {
    patentNumber: "US 2,319,171",
    patentYear: 1943,
    example: {
      label: "Example II",
      id: "2",
    },
    authors: ["Arthur Warmisham", "Charles Gorrie Wynne"],
    assignees: ["Taylor, Taylor & Hobson Limited"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2,
    },
    elementCount: 6,
    groupCount: 4,
    specs: [
      "Literal100mm f2 ExampleII/Fig2,6E/4G1|2+3|4+5|6,plano cementsR4/R7. No named retail identity.",
      "E3 is source potassium bromide crystal,not substituted glass. Literal sodiumD1.558/V31.5 retained;source partialdispersions[1.02,1.02,1.00,1.07,1.02,1.02] documentation only,not consumed by native optics.",
      "Quantitative sodium-D589.2938nm only. No native secondary-spectrum,calibrated/measured broadband or exact modern glass match. Generic Abbe spectral panels are not this reconstruction.",
      "Literal EFL99.997844068/BFD73.905063648mm,no fitting;BFDcomputed,not supplied as sourcehardware.",
      "Exactcentral15.91airgap preserved;stop8.8/7.11,z31.46,bore and caps estimated. Savedsource/controlf2 stockiris vs unprinted finite-marginal17.966954estimate and actual equivalents documented separately.",
      "Chosen actual +/-10degree sodium-D infinity diagnostic only,no format,finite,sourcewidefield,measuredperformance or widerautomaticMTF claims.",
      "Primary signednumerics/material/partialdispersion/hash externally verified;no localoriginalPDF,pixels/rehash. GooglePatents source open inaccessible,not claimed locallyverifiedprimary.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "E1",
      label: "E1",
      type: "Source Spherical Element",
      nd: 1.644,
      vd: 48.3,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair;printedpartialdispersion1.02 documentation only. No calibrated native secondary spectrum/broadband.",
    },
    {
      id: 2,
      name: "E2",
      label: "E2",
      type: "Source Spherical Element",
      nd: 1.644,
      vd: 48.3,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair;printedpartialdispersion1.02 documentation only. No calibrated native secondary spectrum/broadband.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "E3 \u00b7 Potassium bromide crystal",
      label: "E3 \u00b7 KBr",
      type: "Source Potassium Bromide Crystal",
      nd: 1.558,
      vd: 31.5,
      indexReference: "D",
      glass:
        "Source potassium bromide crystal;literalnD1.558/V31.5,printedpartialdispersion1.00 documentation only. Native quantitativeD-only;no secondary-spectrum or broadband reconstruction.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "E4",
      label: "E4",
      type: "Source Spherical Element",
      nd: 1.651,
      vd: 33.5,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair;printedpartialdispersion1.07 documentation only. No calibrated native secondary spectrum/broadband.",
      cemented: "D2",
    },
    {
      id: 5,
      name: "E5",
      label: "E5",
      type: "Source Spherical Element",
      nd: 1.644,
      vd: 48.3,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair;printedpartialdispersion1.02 documentation only. No calibrated native secondary spectrum/broadband.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "E6",
      label: "E6",
      type: "Source Spherical Element",
      nd: 1.644,
      vd: 48.3,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair;printedpartialdispersion1.02 documentation only. No calibrated native secondary spectrum/broadband.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 64.32,
      d: 8.45,
      sd: 29,
      medium: 1,
    },
    {
      label: "2",
      R: 159.9,
      d: 0.53,
      sd: 29,
    },
    {
      label: "3",
      R: 41.75,
      d: 9.5,
      sd: 26,
      medium: 2,
    },
    {
      label: "4",
      R: "flat",
      d: 4.18,
      sd: 23,
      medium: 3,
    },
    {
      label: "5",
      R: 27.81,
      d: 8.8,
      sd: 18.6,
    },
    {
      label: "STO",
      R: "flat",
      d: 7.11,
    },
    {
      label: "6",
      R: -31.62,
      d: 3.98,
      sd: 18.4,
      medium: 4,
    },
    {
      label: "7",
      R: "flat",
      d: 10.43,
      sd: 20,
      medium: 5,
    },
    {
      label: "8",
      R: -41.58,
      d: 0.5,
      sd: 22,
    },
    {
      label: "9",
      R: 316.7,
      d: 7.46,
      sd: 23,
      medium: 6,
    },
    {
      label: "10",
      R: -87.73,
      d: 73.90506364847226,
      sd: 23,
    },
  ],
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
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
      "Literal100mm f2 ExampleII/Fig2,6E/4G1|2+3|4+5|6,plano cementsR4/R7. No named retail identity. E3 is source potassium bromide crystal,not substituted glass. Literal sodiumD1.558/V31.5 retained;source partialdispersions[1.02,1.02,1.00,1.07,1.02,1.02] documentation only,not consumed by native optics. Quantitative sodium-D589.2938nm only. No native secondary-spectrum,calibrated/measured broadband or exact modern glass match. Generic Abbe spectral panels are not this reconstruction. Literal EFL99.997844068/BFD73.905063648mm,no fitting;BFDcomputed,not supplied as sourcehardware. Exactcentral15.91airgap preserved;stop8.8/7.11,z31.46,bore and caps estimated. Savedsource/controlf2 stockiris vs unprinted finite-marginal17.966954estimate and actual equivalents documented separately. Chosen actual +/-10degree sodium-D infinity diagnostic only,no format,finite,sourcewidefield,measuredperformance or widerautomaticMTF claims. Primary signednumerics/material/partialdispersion/hash externally verified;no localoriginalPDF,pixels/rehash. GooglePatents source open inaccessible,not claimed locallyverifiedprimary.",
  },
  groups: [
    {
      text: "G1 \u00b7 E1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 \u00b7 E2+E3(KBr)",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "G3 \u00b7 E4+E5",
      fromSurface: "6",
      toSurface: "8",
    },
    {
      text: "G4 \u00b7 E6",
      fromSurface: "9",
      toSurface: "10",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
