import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "berger-us2760406-infinity-reference",
  maker: null,
  name: "BERGER US2760406 SOLE EXAMPLE \u2014 SOURCE f/2",
  subtitle:
    "Patent-only 4E/3G \u00b7 sodium-D infinity \u00b7 estimated iris/rims",
  visible: false,
  source: {
    patentNumber: "US 2,760,406",
    patentYear: 1956,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Johannes Berger"],
    assignees: ["Carl Zeiss"],
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
      "Literal4E3G1|2|3+4,sourcecementR6;D-line indices/Abbe retained,no catalogglass substitution,geometry fit or retuning. No exact production identity.",
      "Sourceabout100mm f2,+/-14degree designfield;literalEFL100.894744038/BFD69.018474912mm,BFDcomputed/not prescribedhardware. No roundingrepair or invented finitefocus.",
      "Source places iris in11.3mmR4-R5gap;estimated10.06/1.24split,z40.06,bore andclearcaps estimated,not measured.",
      "Savedstocknativef2 yieldsparaxialiris;independent17.921290332mm finite-marginal radius separate. Finite entrance/image-sine equivalents documented distinctly.",
      "Actualnative+/-5degree sodium-D infinity diagnostic only,no inventedformat/imagecircle,retail,finite,broadband,baffles,measuredMTF or throughputclaim. Source14deg andwiderautomaticmetrics unqualified.",
      "Originalnumericaltranscription/hash externalparent/scout custody;no localoriginalPDF,pixels/rehash. Supportedpatentprose corroboratesDline,topology,stopgapanddates,notlocalfacsimiledigits.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.691,
      vd: 54.8,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.64831,
      vd: 33.8,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.691,
      vd: 54.8,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
      cemented: "G3",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.60729,
      vd: 49.2,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
      cemented: "G3",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 41.567,
      d: 14,
      sd: 28,
      medium: 1,
    },
    {
      label: "2",
      R: 434.01,
      d: 11,
      sd: 28,
    },
    {
      label: "3",
      R: -100,
      d: 5,
      sd: 24,
      medium: 2,
    },
    {
      label: "4",
      R: 27.384,
      d: 10.06,
      sd: 20.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 1.24,
    },
    {
      label: "5",
      R: 77.179,
      d: 24,
      sd: 22,
      medium: 3,
    },
    {
      label: "6",
      R: -23.714,
      d: 5,
      sd: 20.5,
      medium: 4,
    },
    {
      label: "7",
      R: -69.783,
      d: 69.01847491170966,
      sd: 22,
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
      "Literal4E3G1|2|3+4,sourcecementR6;D-line indices/Abbe retained,no catalogglass substitution,geometry fit or retuning. No exact production identity. Sourceabout100mm f2,+/-14degree designfield;literalEFL100.894744038/BFD69.018474912mm,BFDcomputed/not prescribedhardware. No roundingrepair or invented finitefocus. Source places iris in11.3mmR4-R5gap;estimated10.06/1.24split,z40.06,bore andclearcaps estimated,not measured. Savedstocknativef2 yieldsparaxialiris;independent17.921290332mm finite-marginal radius separate. Finite entrance/image-sine equivalents documented distinctly. Actualnative+/-5degree sodium-D infinity diagnostic only,no inventedformat/imagecircle,retail,finite,broadband,baffles,measuredMTF or throughputclaim. Source14deg andwiderautomaticmetrics unqualified. Originalnumericaltranscription/hash externalparent/scout custody;no localoriginalPDF,pixels/rehash. Supportedpatentprose corroboratesDline,topology,stopgapanddates,notlocalfacsimiledigits.",
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
