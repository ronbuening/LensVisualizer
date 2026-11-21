import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "cook-gilkeson-us2769372-example1-infinity-reference",
  maker: null,
  name: "COOK GILKESON US2769372 EXAMPLE I \u2014 SOURCE f/3.2 \u00b7 CONTROL f/3.3",
  subtitle:
    "Patent-only 4E/3G \u00b7 selected f/3.3 control \u00b7 sodium-D infinity",
  visible: false,
  source: {
    patentNumber: "US 2,769,372",
    patentYear: 1956,
    example: {
      label: "Example I",
      id: "1",
    },
    authors: ["Alan A. Cook", "David C. Gilkeson"],
    assignees: ["Wollensak Optical Company"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 3.2,
    },
    elementCount: 4,
    groupCount: 3,
    specs: [
      "Cook/Gilkeson Wollensak US2769372 ExampleI/Figs1-2,4E3G1|2|3+4,R6cement,trueplanorefractiveR2. Not GordonHenryCook/TT&H;noRaptar/Optarretailidentity. Source100/f3.2/BF82.9 vs literal99.992697857/82.910303500mm,no fit/glasschange.",
      "Selectednative softwarecontrol f/3.3,distinctfromsource nominalf3.2. Sourcef3.2 finite/physicalrimclipping preservedindependently;no R4enlargement toforcepass. Actualfiniteaperture equivalentsdocumented separately.",
      "Sourceglassdiameters32/27/28/28mm;R4rearopticalcap12.5mm atsource45degreebevelstart25mmdiameter;othercaps[16,16,13.5,14,14,14]. Beveldepth/profile notinvented;effectiveopticalcap proxydoesnotclaim literal3Dbevel.",
      "Source stop4.4mm beforeL3,therefore4.3/4.4in exact8.7mmgap,z22. Irisboreestimated,notfactorymeasurement. No sourcegeometryedit,capenlargement,trim,override,extra plate or baffle.",
      "Actualnativeatmost+/-5degree sodium-D infinity only,notpublished55degreecoverage. No fullpupil,retail,format,finitefocus,broadband,calibrateddispersion,measuredMTF/throughput or widerautomaticmetricsclaim.",
      "Originalsignednumbers/PDFhash externalparent/scoutcustody,no localPDF/pixels/rehash. Officialwebread inaccessibleonce,noretry;primaryprose independentlycorroboratestop/diameters/bevel/Dline/topology,not numericfacsimilepixelinspection.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.638,
      vd: 55,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.62,
      vd: 36,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.605,
      vd: 38,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
      cemented: "G3",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.7,
      vd: 48,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
      cemented: "G3",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 38,
      d: 6.6,
      sd: 16,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 6.9,
      sd: 16,
    },
    {
      label: "3",
      R: -73,
      d: 4.2,
      sd: 13.5,
      medium: 2,
    },
    {
      label: "4",
      R: 36,
      d: 4.3,
      sd: 12.5,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.4,
    },
    {
      label: "5",
      R: 344,
      d: 2.2,
      sd: 14,
      medium: 3,
    },
    {
      label: "6",
      R: 44,
      d: 7.2,
      sd: 14,
      medium: 4,
    },
    {
      label: "7",
      R: -55.1,
      d: 82.91030349965871,
      sd: 14,
    },
  ],
  aperture: {
    nominalFNumber: 3.3,
    fStops: [3.3, 4, 5.6, 8, 11, 16, 22, 32],
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
      "Cook/Gilkeson Wollensak US2769372 ExampleI/Figs1-2,4E3G1|2|3+4,R6cement,trueplanorefractiveR2. Not GordonHenryCook/TT&H;noRaptar/Optarretailidentity. Source100/f3.2/BF82.9 vs literal99.992697857/82.910303500mm,no fit/glasschange. Selectednative softwarecontrol f/3.3,distinctfromsource nominalf3.2. Sourcef3.2 finite/physicalrimclipping preservedindependently;no R4enlargement toforcepass. Actualfiniteaperture equivalentsdocumented separately. Sourceglassdiameters32/27/28/28mm;R4rearopticalcap12.5mm atsource45degreebevelstart25mmdiameter;othercaps[16,16,13.5,14,14,14]. Beveldepth/profile notinvented;effectiveopticalcap proxydoesnotclaim literal3Dbevel. Source stop4.4mm beforeL3,therefore4.3/4.4in exact8.7mmgap,z22. Irisboreestimated,notfactorymeasurement. No sourcegeometryedit,capenlargement,trim,override,extra plate or baffle. Actualnativeatmost+/-5degree sodium-D infinity only,notpublished55degreecoverage. No fullpupil,retail,format,finitefocus,broadband,calibrateddispersion,measuredMTF/throughput or widerautomaticmetricsclaim. Originalsignednumbers/PDFhash externalparent/scoutcustody,no localPDF/pixels/rehash. Officialwebread inaccessibleonce,noretry;primaryprose independentlycorroboratestop/diameters/bevel/Dline/topology,not numericfacsimilepixelinspection.",
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
