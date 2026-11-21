import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "cox-us2433438-example1-infinity-reference",
  maker: null,
  name: "ARTHUR COX US2433438 EX.I \u2014 PATENT REFERENCE",
  subtitle:
    "100mm nominal f/2.8 \u00b7 literal \u00d7100 \u00b7 D-line \u00b7 chosen \u00b110\u00b0 infinity diagnostic",
  visible: false,
  source: {
    patentNumber: "US 2,433,438",
    patentYear: 1947,
    example: {
      label: "Example I",
      id: "1",
    },
    authors: ["Arthur Cox"],
    assignees: ["Taylor, Taylor & Hobson"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 36.96866617109642,
    elementCount: 5,
    groupCount: 3,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 2.8,
    },
    specs: [
      "Literal ExampleI \u00d7100 source;5E/3G, truecement R2/R7",
      "R2/R3 remain distinct D2 glass;0.10mm R3\u2192R4 air opens, never merged",
      "Nominal100/f2.8/sourceBF53.75; literal100.021277/BFD53.776780; no fit",
      "Stop1.5/2.47,z17.47 and iris/caps estimated; no override/baffle",
      "Chosen\u00b110deg infinity diagnostic only, not sourcecoverage; no retail/finite/calibrated broadband claim",
      "Metric circle is twice actual10deg chief height, not a source format",
      "Authored source last-gap53.75 retained; Gaussian BFD53.776780 differs by0.026780mm, no fit",
      "Diagnostic metric circle is twice source-plane10deg chief height; not measuredformat",
      "Nominal f2.8 retained; modeled finite entrance equivalent f2.946277 (estimated iris)",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.623,
      vd: 60.3,
      indexReference: "D",
      glass:
        "Unmatched literal nD/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.699,
      vd: 30.5,
      indexReference: "D",
      glass:
        "Unmatched literal nD/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.623,
      vd: 60.3,
      indexReference: "D",
      glass:
        "Unmatched literal nD/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.547,
      vd: 45.7,
      indexReference: "D",
      glass:
        "Unmatched literal nD/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.613,
      vd: 57.6,
      indexReference: "D",
      glass:
        "Unmatched literal nD/V; no exact catalog glass or calibrated spectral curve",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 49.6,
      d: 7.94,
      sd: 18.6,
      medium: 1,
    },
    {
      label: "2",
      R: -76.18,
      d: 3.47,
      sd: 18.6,
      medium: 2,
    },
    {
      label: "3",
      R: 76.18,
      d: 0.1,
      sd: 17.7,
    },
    {
      label: "4",
      R: 37.01,
      d: 4.46,
      sd: 17.7,
      medium: 3,
    },
    {
      label: "5",
      R: 151,
      d: 1.5,
      sd: 16.3,
    },
    {
      label: "STO",
      R: "flat",
      d: 2.47,
    },
    {
      label: "6",
      R: 23.63,
      d: 8.93,
      sd: 15.1,
      medium: 4,
    },
    {
      label: "7",
      R: -99.2,
      d: 3.47,
      sd: 14.5,
      medium: 5,
    },
    {
      label: "8",
      R: 14.17,
      d: 53.75,
      sd: 12.3,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "ArthurCox/TT&H US2433438 ExampleI, exact100\u00d7 normalizedsource, D-line infinity patent-only reference, not retail/finite identity. Independent externalfivepagefacsimile custody with originalhash pin, no localoriginal/pixels/hash or deniedproviderretry. All literalR/t/nD/V preserved; both R2/R7cemented; R2/R3distinct enclosing D2glass and thin0.10air R3\u2192R4 retained. Nominal100/f2.8/sourceBF.5375\u219253.75 vs literal100.021277/BFD53.776780, no fit. Inferred1.5/2.47stop,z17.47 and iris/caps estimates, chosen\u00b110degdiagnostic, no sourcefield claim. Independent15deg TIRbenchmark is not coverage; no calibrated broadband/baffles/override. Source printedlastgap53.75 retained, Gaussianfocus0.026780mm beyondsourceplane; no opticalretuning.",
  },
  aperture: {
    nominalFNumber: 2.8,
    fStops: [2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 20,
    maxTraceFieldDeg: 10,
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
