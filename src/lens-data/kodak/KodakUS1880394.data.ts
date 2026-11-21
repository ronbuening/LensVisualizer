import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "altman-us1880394-infinity-reference",
  maker: null,
  name: "ALTMAN US1880394 SOLE EXAMPLE \u2014 SOURCE f/6",
  subtitle:
    "Patent-only aerial objective \u00b7 5E/3G \u00b7 sodium-D infinity / estimated iris-rims",
  visible: false,
  source: {
    patentNumber: "US 1,880,394",
    patentYear: 1932,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Fred Altman"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 6,
    },
    elementCount: 5,
    groupCount: 3,
    specs: [
      "Literal5E3G1|2+3|4+5,R4/R7bonds;Dindices/Abbe unchanged. Source100mm f6 vs literalEFL100.011790567/BFD88.635299002mm,BFDcomputed/no fit. DistinctfromUS1880393,not retailidentity.",
      "Sourcephysicaldiaphragmingap7.54afterR5;estimated4.6/2.94split,z15.08,boreandallclearcapsestimated/notfactorymeasurements. No sourcegeometryedits,trim,overrideorbaffle.",
      "Savednativef6 derivesparaxialiris;finite-marginalR7.111676824 separate. Realfiniteentrance/image-sineequivalentsdocumented,notconflatedwith nominal.",
      "Actualnative+/-5degree sodium-Dinfinity only;source15degreeimagefield notViewer/format/coverage,half/fullinterpretation notinvented. No retail,finite,broadband,measuredMTF/throughput orwiderautomaticclaim.",
      "SourceGprimeacknowledgedindocumentaryappendix,valuesnot supplied/retrievedor invented. No nativeGprime/lowercaseg/Findexinference,onlyDopticalclaims.",
      "Originalsignedtranscription/hash externalparent/scoutcustody,nolocalPDF/pixels/rehash. Prosemirrorinaccessibleonce,noretry;R4/R7mappingverifiedbyliteralordering/S2gap/EFL-BFD,not newprimarypixelinspection. Upstreamfive-elementstandalonefocalschecknotlocallyrecomparedwithoutprintedvalues.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.61088,
      vd: 57.2,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair; no calibrated spectral curve or G-prime/g/F inference.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.61088,
      vd: 57.2,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair; no calibrated spectral curve or G-prime/g/F inference.",
      cemented: "G2",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.54995,
      vd: 45.8,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair; no calibrated spectral curve or G-prime/g/F inference.",
      cemented: "G2",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.52301,
      vd: 50.5,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair; no calibrated spectral curve or G-prime/g/F inference.",
      cemented: "G3",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.61088,
      vd: 57.2,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair; no calibrated spectral curve or G-prime/g/F inference.",
      cemented: "G3",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 27.52,
      d: 2.74,
      sd: 10.6,
      medium: 1,
    },
    {
      label: "2",
      R: -237.52,
      d: 5.22,
      sd: 10.6,
    },
    {
      label: "3",
      R: -35.24,
      d: 1.96,
      sd: 9.2,
      medium: 2,
    },
    {
      label: "4",
      R: -15.7,
      d: 0.56,
      sd: 9.2,
      medium: 3,
    },
    {
      label: "5",
      R: 22.26,
      d: 4.6,
      sd: 10,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.94,
    },
    {
      label: "6",
      R: -136.41,
      d: 0.84,
      sd: 10.4,
      medium: 4,
    },
    {
      label: "7",
      R: 21.69,
      d: 3.35,
      sd: 8.6,
      medium: 5,
    },
    {
      label: "8",
      R: -32.73,
      d: 88.63529900189627,
      sd: 8.6,
    },
  ],
  aperture: {
    nominalFNumber: 6,
    fStops: [6, 8, 11, 16, 22],
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
      "Literal5E3G1|2+3|4+5,R4/R7bonds;Dindices/Abbe unchanged. Source100mm f6 vs literalEFL100.011790567/BFD88.635299002mm,BFDcomputed/no fit. DistinctfromUS1880393,not retailidentity. Sourcephysicaldiaphragmingap7.54afterR5;estimated4.6/2.94split,z15.08,boreandallclearcapsestimated/notfactorymeasurements. No sourcegeometryedits,trim,overrideorbaffle. Savednativef6 derivesparaxialiris;finite-marginalR7.111676824 separate. Realfiniteentrance/image-sineequivalentsdocumented,notconflatedwith nominal. Actualnative+/-5degree sodium-Dinfinity only;source15degreeimagefield notViewer/format/coverage,half/fullinterpretation notinvented. No retail,finite,broadband,measuredMTF/throughput orwiderautomaticclaim. SourceGprimeacknowledgedindocumentaryappendix,valuesnot supplied/retrievedor invented. No nativeGprime/lowercaseg/Findexinference,onlyDopticalclaims. Originalsignedtranscription/hash externalparent/scoutcustody,nolocalPDF/pixels/rehash. Prosemirrorinaccessibleonce,noretry;R4/R7mappingverifiedbyliteralordering/S2gap/EFL-BFD,not newprimarypixelinspection. Upstreamfive-elementstandalonefocalschecknotlocallyrecomparedwithoutprintedvalues.",
  },
  groups: [
    {
      text: "G1 \u00b7 L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 \u00b7 L2+L3",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "G3 \u00b7 L4+L5",
      fromSurface: "6",
      toSurface: "8",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
