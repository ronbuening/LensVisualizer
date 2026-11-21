import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "doi-us2718174-figure1-infinity-reference",
  maker: null,
  name: "YOSHIKAZU DOI US2718174 FIG.1 \u2014 PATENT REFERENCE",
  subtitle:
    "95mm nominal f/1.3 \u00b7 literal \u00d7100 \u00b7 explicit d-line \u00b7 chosen \u00b110\u00b0 infinity diagnostic",
  visible: false,
  source: {
    patentNumber: "US 2,718,174",
    patentYear: 1955,
    example: {
      label: "Figure 1",
      id: "1",
    },
    authors: ["Yoshikazu Doi"],
    assignees: ["Fuji Photo Film"],
    sdSource: "heuristic",
  },
  catalog: {
    imageCircleMm: 33.607544552935906,
    elementCount: 8,
    groupCount: 4,
    focalLengthMm: {
      design: 95,
    },
    fNumber: {
      design: 1.3,
    },
    specs: [
      "Figure1 exact100\u00d7 patent-only;8E/4G with two cemented triplets",
      "BondsR4/R5 andR8/R9; shallowR2+6083 preserved, all airliteral",
      "Explicit lowercase d/V retained, no sodiumD or catalogglass substitution",
      "LiteralEFL95.010636/BFD44.020298/track83.82; nominal95/f1.3, no fit",
      "Inferred stop14/4,z49.5 and iris/caps; chosen\u00b110deg actualray scope only",
      "No retail/finite/coverage/calibrated spectrum or manufactured aperture claim",
      "Metric circle uses actual10deg chief image height, not measuredformat; panel fraction1",
      "Nominal f1.3 retained; modeled finite entrance equivalent f1.335184 (estimated iris)",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.6713,
      vd: 47.0,
      indexReference: "d",
      glass:
        "Unmatched literal explicit d/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.6713,
      vd: 47.0,
      indexReference: "d",
      glass:
        "Unmatched literal explicit d/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.5414,
      vd: 47.1,
      indexReference: "d",
      glass:
        "Unmatched literal explicit d/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.7572,
      vd: 27.5,
      indexReference: "d",
      glass:
        "Unmatched literal explicit d/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.5414,
      vd: 47.1,
      indexReference: "d",
      glass:
        "Unmatched literal explicit d/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Source Spherical Element",
      nd: 1.6738,
      vd: 47.0,
      indexReference: "d",
      glass:
        "Unmatched literal explicit d/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Source Spherical Element",
      nd: 1.648,
      vd: 47.8,
      indexReference: "d",
      glass:
        "Unmatched literal explicit d/V; no exact catalog glass or calibrated spectral curve",
    },
    {
      id: 8,
      name: "L8",
      label: "L8",
      type: "Source Spherical Element",
      nd: 1.6216,
      vd: 60.2,
      indexReference: "d",
      glass:
        "Unmatched literal explicit d/V; no exact catalog glass or calibrated spectral curve",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 82.01,
      d: 12,
      sd: 39,
      medium: 1,
    },
    {
      label: "2",
      R: 6083,
      d: 0.4,
      sd: 39,
    },
    {
      label: "3",
      R: 42.44,
      d: 12.2,
      sd: 34,
      medium: 2,
    },
    {
      label: "4",
      R: 139.83,
      d: 8.3,
      sd: 32,
      medium: 3,
    },
    {
      label: "5",
      R: -212.19,
      d: 2.6,
      sd: 32,
      medium: 4,
    },
    {
      label: "6",
      R: 28.29,
      d: 14,
      sd: 23,
    },
    {
      label: "STO",
      R: "flat",
      d: 4,
    },
    {
      label: "7",
      R: -65.76,
      d: 1.8,
      sd: 21,
      medium: 5,
    },
    {
      label: "8",
      R: 57.12,
      d: 19.31,
      sd: 21,
      medium: 6,
    },
    {
      label: "9",
      R: -23.86,
      d: 1.81,
      sd: 21,
      medium: 7,
    },
    {
      label: "10",
      R: -77,
      d: 0.4,
      sd: 26,
    },
    {
      label: "11",
      R: 124.1,
      d: 7,
      sd: 27,
      medium: 8,
    },
    {
      label: "12",
      R: -209.6,
      d: 44.02029809798847,
      sd: 27,
    },
  ],
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "YoshikazuDoi/FujiPhotoFilm US2718174 Fig1 patent-only explicitlowercase-d infinity reference, exact100\u00d7source; not retail/finite. Originalissuefacsimilep1\u20133 independently verified inexternalcustody withPDFhashpin, no localoriginal/pixels/hash or deniedroute retry. AllsignedR/t/d-index/V preserved; R2+6083shallow and two tripletbondsR4/R5,R8/R9 remain, no glasssubstitution. Nominal95/f1.3 vs literal95.010636/BFD44.020298/track83.82; unprintedGaussianimagegap derived, no fit. Stop14/4,z49.5 and iris/rims estimates; chosen\u00b110degdiagnosticactualpanel, no sourcecoverage/broadband/baffle/finiteclaim. Altmanunrelatedbench untouched.",
  },
  aperture: {
    nominalFNumber: 1.3,
    fStops: [1.3, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
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
  groups: [
    {
      text: "G1 \u00b7 L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 \u00b7 L2+L3+L4",
      fromSurface: "3",
      toSurface: "6",
    },
    {
      text: "G3 \u00b7 L5+L6+L7",
      fromSurface: "7",
      toSurface: "10",
    },
    {
      text: "G4 \u00b7 L8",
      fromSurface: "11",
      toSurface: "12",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
