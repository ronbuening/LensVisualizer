import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "cook-us2502508-example1-infinity-reference",
  maker: null,
  name: "COOK US2502508 EXAMPLE I \u2014 SOURCE f/2.67",
  subtitle:
    "Patent-only 4E/3G \u00b7 sodium-D infinity \u00b7 estimated iris/rims",
  visible: false,
  source: {
    patentNumber: "US 2,502,508",
    patentYear: 1950,
    example: {
      label: "Example I",
      id: "1",
    },
    authors: ["Gordon Henry Cook"],
    assignees: ["Taylor, Taylor & Hobson Limited"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2.67,
    },
    elementCount: 4,
    groupCount: 3,
    specs: [
      "Literal4E3G1|2|3+4,sourceconstraintR6cement;Dindices/Abbe literal,no glasssubstitution oropticalfit. Source100mm f2.67 vs literalEFL99.967529825/BFD76.297288379mm,computedBFD/not hardware. No retail identification.",
      "Exact11.4mmgapafterR4,estimatedstop7.2/4.2,z30,bore andallclearcapsestimated,notfactoryreadings.",
      "Front18.75mmclear-radius estimate partlyusesprinted.375F effectiveaperture at100mm;not a measuredrim orfullpupil/fieldcoverage claim. Allradii/gaps/glassesunchanged,no trim/override/baffle.",
      "Savednativef2.67 derivesparaxialiris;independentfinite-marginalR14.247040182 separate. Finiteentrance/image-sine equivalents documented,not conflatedwith nominal.",
      "Actualnative+/-5degreeD-lineinfinity diagnostic only,noinventedformat/imagecircle,finitefocus,retail,broadband,measuredMTF/throughput orwiderautomaticcoverage claim. Source hasno fieldnumber;10degexternalbench unqualified asnativefield.",
      "Originalsignedtranscription/hash externalparent/scoutcustody,no localPDF/pixels/originalrehash. Googleproseopen inaccessibleonce,noretry;R6mapping verifiedbysuppliedsourceordering/airgapconstraints+literalEFL/BFD,not an additionalprimarypixelread.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.6225,
      vd: 60.4,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.62266,
      vd: 36,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.6138,
      vd: 57.5,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
      cemented: "G3",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.51414,
      vd: 56.5,
      indexReference: "D",
      glass: "Literal sodium-D/Abbe pair; no calibrated spectral curve.",
      cemented: "G3",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 37.74,
      d: 8.1,
      sd: 18.75,
      medium: 1,
    },
    {
      label: "2",
      R: -606.07,
      d: 10.9,
      sd: 18.75,
    },
    {
      label: "3",
      R: -55.56,
      d: 3.8,
      sd: 18,
      medium: 2,
    },
    {
      label: "4",
      R: 30.3,
      d: 7.2,
      sd: 17,
    },
    {
      label: "STO",
      R: "flat",
      d: 4.2,
    },
    {
      label: "5",
      R: 101.06,
      d: 9,
      sd: 17,
      medium: 3,
    },
    {
      label: "6",
      R: -23.34,
      d: 3,
      sd: 16,
      medium: 4,
    },
    {
      label: "7",
      R: -53.79,
      d: 76.2972883785474,
      sd: 17,
    },
  ],
  aperture: {
    nominalFNumber: 2.67,
    fStops: [2.67, 2.8, 4, 5.6, 8, 11, 16, 22],
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
      "Literal4E3G1|2|3+4,sourceconstraintR6cement;Dindices/Abbe literal,no glasssubstitution oropticalfit. Source100mm f2.67 vs literalEFL99.967529825/BFD76.297288379mm,computedBFD/not hardware. No retail identification. Exact11.4mmgapafterR4,estimatedstop7.2/4.2,z30,bore andallclearcapsestimated,notfactoryreadings. Front18.75mmclear-radius estimate partlyusesprinted.375F effectiveaperture at100mm;not a measuredrim orfullpupil/fieldcoverage claim. Allradii/gaps/glassesunchanged,no trim/override/baffle. Savednativef2.67 derivesparaxialiris;independentfinite-marginalR14.247040182 separate. Finiteentrance/image-sine equivalents documented,not conflatedwith nominal. Actualnative+/-5degreeD-lineinfinity diagnostic only,noinventedformat/imagecircle,finitefocus,retail,broadband,measuredMTF/throughput orwiderautomaticcoverage claim. Source hasno fieldnumber;10degexternalbench unqualified asnativefield. Originalsignedtranscription/hash externalparent/scoutcustody,no localPDF/pixels/originalrehash. Googleproseopen inaccessibleonce,noretry;R6mapping verifiedbysuppliedsourceordering/airgapconstraints+literalEFL/BFD,not an additionalprimarypixelread.",
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
