import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "rayton-hudson-us2390387-figure2-infinity-reference",
  maker: null,
  name: "RAYTON / HUDSON US2390387 FIG.2 \u2014 PATENT REFERENCE",
  subtitle:
    "100mm nominal f/5.6 \u00b7 D-line \u00b7 two cemented doublets \u00b7 chosen \u00b110\u00b0 infinity diagnostic",
  visible: false,
  source: {
    patentNumber: "US 2,390,387",
    patentYear: 1945,
    example: {
      label: "Figure 2",
      id: "2",
    },
    authors: ["Rayton", "Hudson"],
    assignees: ["Bausch & Lomb"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 35.833311531527514,
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 5.6,
    },
    specs: [
      "Figure2 only;4E/2G, both R2/R5 cemented, no inserted air",
      "Literal signed sourceR/t/nD/V; EFL100.003467/BFD50.304060, no fit",
      "Source nominal100/f5.6; no printedBFD or exactfield; priorclass30deg not this scope",
      "Inferred stop10.9/10.18,z16.7; iris/rims estimated, no geometryoverride/baffle",
      "Chosen\u00b110deg D-line infinity diagnostic only; no retail/finite/calibrated spectrum claim",
      "Metric circle is twice traced10deg chief image height; not a source format",
      "Nominal f5.6 retained; modeled finite entrance equivalent f5.713298 (estimated iris)",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.517,
      vd: 64.5,
      indexReference: "D",
      glass:
        "Unmatched literal nD/V; no exact catalog glass or calibrated dispersion",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.621,
      vd: 36.2,
      indexReference: "D",
      glass:
        "Unmatched literal nD/V; no exact catalog glass or calibrated dispersion",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.5286,
      vd: 51.6,
      indexReference: "D",
      glass:
        "Unmatched literal nD/V; no exact catalog glass or calibrated dispersion",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.72,
      vd: 29.3,
      indexReference: "D",
      glass:
        "Unmatched literal nD/V; no exact catalog glass or calibrated dispersion",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 16.95,
      d: 4.5,
      sd: 9.9,
      medium: 1,
    },
    {
      label: "2",
      R: -45.4,
      d: 1.3,
      sd: 9.9,
      medium: 2,
    },
    {
      label: "3",
      R: 57.4,
      d: 10.9,
      sd: 9.9,
    },
    {
      label: "STO",
      R: "flat",
      d: 10.18,
    },
    {
      label: "4",
      R: -10.75,
      d: 1.2,
      sd: 7.5,
      medium: 3,
    },
    {
      label: "5",
      R: -28.5,
      d: 1.8,
      sd: 7.5,
      medium: 4,
    },
    {
      label: "6",
      R: -19.49,
      d: 50.30405972406503,
      sd: 7.5,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Rayton/Hudson Bausch&Lomb US2390387 Fig2 patent-only D-line infinity reference, not Fig1/US2325275 or retail. Original all3pages externally visually verified, source table magnitudes signed from actual drawing; fullPDFhash pinned externally, no local original/pixels/hash or deniedroute retry. Both R2/R5 cemented and all literalR/t/nD/V preserved. Source100/f5.6 with no publishedBFD/field; model100.003467/50.304060 calculated nofit. Inferred10.9/10.18stop,z16.7, iris/caps estimates, chosen\u00b110degdiagnostic only. Prior-class30deg not assigned, no finite/baffles/override/calibratedbroadband.",
  },
  aperture: {
    nominalFNumber: 5.6,
    fStops: [5.6, 8, 11, 16, 22],
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
      text: "G2 \u00b7 L3+L4",
      fromSurface: "4",
      toSurface: "6",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
