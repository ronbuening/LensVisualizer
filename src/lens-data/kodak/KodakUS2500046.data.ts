import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "schade-us2500046-infinity-reference",
  maker: null,
  name: "SCHADE US2500046 SOLE EXAMPLE \u2014 f/2 REFERENCE",
  subtitle:
    "Patent-only 4E/3G \u00b7 sodium-D infinity \u00b7 proxy stop / estimated rims",
  visible: false,
  source: {
    patentNumber: "US 2,500,046",
    patentYear: 1950,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Willy Schade"],
    assignees: ["Eastman Kodak Company"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2,
    },
    elementCount: 4,
    groupCount: 3,
    specs: [
      "LiteralPetzvaltype4E3G1+2|3|4,R2cement,R3trueplanorearof frontdoublet;Dindices/Abbeunchanged. Printed100/BF56.5 vs literalEFL99.983760999/BFD56.452649017mm,no fitting/glasschanges/retailidentity.",
      "Selectedf2referencestate,distinctfromFig3f2.8label. Native/controlf2vsfinitepupil equivalents separatelydocumented. InferredmarginalirisR20.698297833 notfactorybore.",
      "Principal-raycrossover18.9mmbehindfrontdoublet isONLY computationalproxyforstop,notpublishedphysicaldiaphragm. Exact49.3R3-R4gap,modeled18.9/30.4split,z38.4,iris/capsestimated.",
      "Exactrear.9mmairgap retained,defaultpositivegeometry,no capenlargement,trim,overrideorbaffle.",
      "Actualnative+/-5degree sodium-D infinity only;Fig4upto7deg/general8or10degreeproseaim notViewer/format/coverage. No widerautomaticmetrics,retail,physicalformat,imagecircle,finite,broadband ormeasuredMTF/throughputclaim.",
      "Originalnumericaltranscription/hash externalparent/scoutcustody,nolocalPDF/pixels/originalrehash. Primaryprose independentlycorroborateslayout,Dline,datesandprincipal-raycrossovercomputation,notlocalfacsimiletableinspection.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.523,
      vd: 58.6,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
      cemented: "G1",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Plano Element",
      nd: 1.617,
      vd: 38.5,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
      cemented: "G1",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.649,
      vd: 33.8,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.697,
      vd: 56.1,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 70.97,
      d: 15,
      sd: 28,
      medium: 1,
    },
    {
      label: "2",
      R: -56.79,
      d: 4.5,
      sd: 26,
      medium: 2,
    },
    {
      label: "3",
      R: "flat",
      d: 18.9,
      sd: 25,
    },
    {
      label: "STO",
      R: "flat",
      d: 30.4,
    },
    {
      label: "4",
      R: 119.91,
      d: 3.8,
      sd: 18,
      medium: 3,
    },
    {
      label: "5",
      R: 40.87,
      d: 0.9,
      sd: 18,
    },
    {
      label: "6",
      R: 46.87,
      d: 7.5,
      sd: 18,
      medium: 4,
    },
    {
      label: "7",
      R: -282.05,
      d: 56.452649017221006,
      sd: 18,
    },
  ],
  aperture: {
    nominalFNumber: 2,
    fStops: [2, 2.8, 4, 5.6, 8, 11, 16, 22],
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
      "LiteralPetzvaltype4E3G1+2|3|4,R2cement,R3trueplanorearof frontdoublet;Dindices/Abbeunchanged. Printed100/BF56.5 vs literalEFL99.983760999/BFD56.452649017mm,no fitting/glasschanges/retailidentity. Selectedf2referencestate,distinctfromFig3f2.8label. Native/controlf2vsfinitepupil equivalents separatelydocumented. InferredmarginalirisR20.698297833 notfactorybore. Principal-raycrossover18.9mmbehindfrontdoublet isONLY computationalproxyforstop,notpublishedphysicaldiaphragm. Exact49.3R3-R4gap,modeled18.9/30.4split,z38.4,iris/capsestimated. Exactrear.9mmairgap retained,defaultpositivegeometry,no capenlargement,trim,overrideorbaffle. Actualnative+/-5degree sodium-D infinity only;Fig4upto7deg/general8or10degreeproseaim notViewer/format/coverage. No widerautomaticmetrics,retail,physicalformat,imagecircle,finite,broadband ormeasuredMTF/throughputclaim. Originalnumericaltranscription/hash externalparent/scoutcustody,nolocalPDF/pixels/originalrehash. Primaryprose independentlycorroborateslayout,Dline,datesandprincipal-raycrossovercomputation,notlocalfacsimiletableinspection.",
  },
  groups: [
    {
      text: "G1 \u00b7 L1+L2",
      fromSurface: "1",
      toSurface: "3",
    },
    {
      text: "G2 \u00b7 L3",
      fromSurface: "4",
      toSurface: "5",
    },
    {
      text: "G3 \u00b7 L4",
      fromSurface: "6",
      toSurface: "7",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
