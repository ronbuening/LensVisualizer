import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "cox-us2354503-infinity-reference",
  maker: null,
  name: "COX US2354503 SOLE EXAMPLE \u2014 SOURCE f/6.3",
  subtitle:
    "Patent-only 4E/3G \u00b7 sodium-D infinity \u00b7 estimated iris/rims",
  visible: false,
  source: {
    patentNumber: "US 2,354,503",
    patentYear: 1944,
    example: {
      label: "Sole example",
      id: null,
    },
    authors: ["Arthur Cox"],
    assignees: ["Taylor, Taylor & Hobson Limited"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 6.3,
    },
    elementCount: 4,
    groupCount: 3,
    specs: [
      "Literal4E3G1+2|3|4,R2cement from suppliedsourceconstraints;Dindices/Abbe unchanged. Nominal100mm f6.3 vs literalEFL99.487403350/BFD50.277889658mm,computedBFD/no fit. No retail identity.",
      "Exact23.5mmgapafterR3,estimatedstop13/10.5split,z18.1,boreandclearcaps inferred/not factorymeasurements.",
      "Literal.1mmairgapR5-R6 unchanged;8.3mmcommoncap,noenlargement/override. Source1.20rear/frontclearapertureratio appliedonlyestimatedexternalfaces9.84/8.2,not whole rear effectivepupil/fieldcoverage.",
      "Savednativef6.3 derivesparaxialiris;finite-marginalradius5.337549556 separate. Finiteentrance/image-sine equivalents reported,not silentlyconflated.",
      "Actualnative+/-5degreeD-lineinfinitydiagnostic only,noinventedformat/imagecircle,finitefocus,retail,broadband,baffles,measuredMTForthroughputclaim. Widerautomaticmetrics andbench10deg unqualified.",
      "Originalsignedtranscription/hash externalparent/scoutcustody,nolocaloriginalPDF/pixels/rehash. Googleproseopen inaccessible,notretried;R2mapping independentlychecks source4E3G/airgapordering andliteralEFL/BFD,notneworiginalpixelinspection.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.613,
      vd: 55.7,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
      cemented: "G1",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.676,
      vd: 32.3,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
      cemented: "G1",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.613,
      vd: 55.7,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.652,
      vd: 33.5,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 19.1,
      d: 4.1,
      sd: 8.2,
      medium: 1,
    },
    {
      label: "2",
      R: -52.4,
      d: 1.0,
      sd: 8.2,
      medium: 2,
    },
    {
      label: "3",
      R: 46.2,
      d: 13,
      sd: 8.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 10.5,
    },
    {
      label: "4",
      R: -11.05,
      d: 1.4,
      sd: 8.3,
      medium: 3,
    },
    {
      label: "5",
      R: -22.3,
      d: 0.1,
      sd: 8.3,
    },
    {
      label: "6",
      R: -21.25,
      d: 2.7,
      sd: 8.3,
      medium: 4,
    },
    {
      label: "7",
      R: -16.1,
      d: 50.27788965764479,
      sd: 9.84,
    },
  ],
  aperture: {
    nominalFNumber: 6.3,
    fStops: [6.3, 8, 11, 16, 22, 32],
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
      "Literal4E3G1+2|3|4,R2cement from suppliedsourceconstraints;Dindices/Abbe unchanged. Nominal100mm f6.3 vs literalEFL99.487403350/BFD50.277889658mm,computedBFD/no fit. No retail identity. Exact23.5mmgapafterR3,estimatedstop13/10.5split,z18.1,boreandclearcaps inferred/not factorymeasurements. Literal.1mmairgapR5-R6 unchanged;8.3mmcommoncap,noenlargement/override. Source1.20rear/frontclearapertureratio appliedonlyestimatedexternalfaces9.84/8.2,not whole rear effectivepupil/fieldcoverage. Savednativef6.3 derivesparaxialiris;finite-marginalradius5.337549556 separate. Finiteentrance/image-sine equivalents reported,not silentlyconflated. Actualnative+/-5degreeD-lineinfinitydiagnostic only,noinventedformat/imagecircle,finitefocus,retail,broadband,baffles,measuredMTForthroughputclaim. Widerautomaticmetrics andbench10deg unqualified. Originalsignedtranscription/hash externalparent/scoutcustody,nolocaloriginalPDF/pixels/rehash. Googleproseopen inaccessible,notretried;R2mapping independentlychecks source4E3G/airgapordering andliteralEFL/BFD,notneworiginalpixelinspection.",
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
