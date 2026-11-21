import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "miles-us2527370-figure1-infinity-reference",
  maker: null,
  name: "JOHN R. MILES US2527370 FIGURE 1 \u2014 SOURCE approx f/6.3",
  subtitle:
    "Patent-only 2E/1G \u00b7 exact rear stop \u00d810.12 mm \u00b7 sodium-D infinity",
  visible: false,
  source: {
    patentNumber: "US 2,527,370",
    patentYear: 1950,
    example: {
      label: "Figure 1",
      id: "1",
    },
    authors: ["John R. Miles"],
    assignees: ["La Croix Optical"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 6.3,
    },
    elementCount: 2,
    groupCount: 1,
    specs: [
      "Literal2E1G Fig1,cementR2,no sourceR/thickness/index edits. Source100mm approximatelyf6.3 andapproximately19degree full,not retailidentity or measuredperformance.",
      "Literal EFL100.042892149/glassrearBFD88.198578061mm,computedGaussian infinity focus,no fit.",
      "SOURCE EXACT rearstop24.36mm afterR3,z37.48,bore10.12mm. Native softwarecontrol6.308159887455 differs transparently from sourceapprox6.3 and preserves exactbore;unadjusted6.3 would produce diameter10.133107628737mm,not accepted.",
      "R3-to-stop24.36 andstop-to-image63.838578061mm;native last-surface/BFD UI may reference stop rather than finalglass,do not conflate glassrear88.198578.",
      "Glasscaps13mm estimated,stopstation/bore published,not estimates. No fakeoptic,stoprelocation,unrecognizedfixediris or source-aperture exception.",
      "SodiumD589.2938 only,literaln/V unmatched. No calibrated/measuredbroadband,finitefocus,physicalformat,widerautomaticMTF or retail claim.",
      "Chosen actualnative +/-9.5degree diagnostic,approxsource19full separate from verifiedpupil/MTF scope;clips and exactfinitefnumber documented.",
      "Primarysource opticaldata/stopdimensions/hash suppliedbyparent;no localoriginalPDF,pixels/rehash or known deniedroute retry.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "E1",
      label: "E1",
      type: "Source Spherical Element",
      nd: 1.516,
      vd: 59.1,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair;no calibrated spectral curve.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "E2",
      label: "E2",
      type: "Source Spherical Element",
      nd: 1.617,
      vd: 36.6,
      indexReference: "D",
      glass:
        "Literal unmatched sodium-D/Abbe pair;no calibrated spectral curve.",
      cemented: "D1",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 35.01,
      d: 7.87,
      sd: 13,
      medium: 1,
    },
    {
      label: "2",
      R: -50.7,
      d: 5.25,
      sd: 13,
      medium: 2,
    },
    {
      label: "3",
      R: 187.36,
      d: 24.36,
      sd: 13,
    },
    {
      label: "STO",
      R: "flat",
      d: 63.838578061040295,
    },
  ],
  aperture: {
    nominalFNumber: 6.3081598874545755,
    fStops: [6.3081598874545755, 8, 11, 16, 22, 32],
    maxFNumber: 32,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 19,
    maxTraceFieldDeg: 9.5,
  },
  rays: {
    offAxisFieldFrac: 1,
  },
  focus: {
    closeFocusM: 1000000000000000,
    description:
      "Literal2E1G Fig1,cementR2,no sourceR/thickness/index edits. Source100mm approximatelyf6.3 andapproximately19degree full,not retailidentity or measuredperformance. Literal EFL100.042892149/glassrearBFD88.198578061mm,computedGaussian infinity focus,no fit. SOURCE EXACT rearstop24.36mm afterR3,z37.48,bore10.12mm. Native softwarecontrol6.308159887455 differs transparently from sourceapprox6.3 and preserves exactbore;unadjusted6.3 would produce diameter10.133107628737mm,not accepted. R3-to-stop24.36 andstop-to-image63.838578061mm;native last-surface/BFD UI may reference stop rather than finalglass,do not conflate glassrear88.198578. Glasscaps13mm estimated,stopstation/bore published,not estimates. No fakeoptic,stoprelocation,unrecognizedfixediris or source-aperture exception. SodiumD589.2938 only,literaln/V unmatched. No calibrated/measuredbroadband,finitefocus,physicalformat,widerautomaticMTF or retail claim. Chosen actualnative +/-9.5degree diagnostic,approxsource19full separate from verifiedpupil/MTF scope;clips and exactfinitefnumber documented. Primarysource opticaldata/stopdimensions/hash suppliedbyparent;no localoriginalPDF,pixels/rehash or known deniedroute retry.",
  },
  groups: [
    {
      text: "G1 \u00b7 E1+E2",
      fromSurface: "1",
      toSurface: "3",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
