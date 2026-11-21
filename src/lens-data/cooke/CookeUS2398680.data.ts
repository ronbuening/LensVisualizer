import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "warmisham-us2398680-example1-infinity-reference",
  maker: null,
  name: "ARTHUR WARMISHAM US2398680 EXAMPLE I — f/1.5",
  subtitle:
    "TT&H all-glass patent-only · sodium-D infinity · estimated iris/rims",
  visible: false,
  source: {
    patentNumber: "US 2,398,680",
    patentYear: 1946,
    example: {
      label: "Example I",
      id: "1",
    },
    authors: ["Arthur Warmisham"],
    assignees: ["Taylor, Taylor & Hobson"],
    sdSource: "heuristic",
  },
  catalog: {
    focalLengthMm: {
      design: 100,
    },
    fNumber: {
      design: 1.5,
    },
    elementCount: 7,
    groupCount: 5,
    imageCircleMm: 35.23444167675022,
    specs: [
      "Literal Example I at source x100 scale; patent-only, no retail or finite projection identity.",
      "Seven all-glass elements/five groups; R4/R7 cemented, both rear members separate positive singlets.",
      "All three 0.2 mm air gaps, signed radii, sodium-D indices and Abbe values retained without fit.",
      "Source nominal 100 mm f/1.5 and BFD57.31 mm; literal EFL100.001709/BFD57.321981 mm retained separately, no fitting.",
      "Stop at z42.22 mm, split11.10/8.96 mm afterR5, is an estimate, not published.",
      "Stock native f/1.5 yields estimated iris radius20.723959727 mm; exact nominal marginal maps to20.651007860 mm, separate conventions.",
      "All caps estimated; chosen +/-10-degree diagnostic has explicit physical clipping and no source-field claim.",
      "Quantitative sodium-D infinity only; Abbe-based chromatic outputs not calibrated or qualified.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.6135,
      vd: 59.3,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D index/Abbe pair; no exact catalog glass or calibrated dispersion identification.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.6431,
      vd: 48.3,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D index/Abbe pair; no exact catalog glass or calibrated dispersion identification.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.67605,
      vd: 32.3,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D index/Abbe pair; no exact catalog glass or calibrated dispersion identification.",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.621,
      vd: 36.2,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D index/Abbe pair; no exact catalog glass or calibrated dispersion identification.",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Source Spherical Element",
      nd: 1.7445,
      vd: 45.8,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D index/Abbe pair; no exact catalog glass or calibrated dispersion identification.",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Source Spherical Element",
      nd: 1.613,
      vd: 59.3,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D index/Abbe pair; no exact catalog glass or calibrated dispersion identification.",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Source Spherical Element",
      nd: 1.6135,
      vd: 59.3,
      indexReference: "D",
      glass:
        "Unmatched literal sodium-D index/Abbe pair; no exact catalog glass or calibrated dispersion identification.",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 80.84,
      d: 10.86,
      sd: 37,
      medium: 1,
    },
    {
      label: "2",
      R: 616.6,
      d: 0.2,
      sd: 37,
    },
    {
      label: "3",
      R: 39.72,
      d: 16.93,
      sd: 33,
      medium: 2,
    },
    {
      label: "4",
      R: 447.1,
      d: 3.13,
      sd: 32,
      medium: 3,
    },
    {
      label: "5",
      R: 27.36,
      d: 11.1,
      sd: 21.1,
    },
    {
      label: "STO",
      R: "flat",
      d: 8.96,
    },
    {
      label: "6",
      R: -35.68,
      d: 4.14,
      sd: 22,
      medium: 4,
    },
    {
      label: "7",
      R: 126.3,
      d: 14.09,
      sd: 23,
      medium: 5,
    },
    {
      label: "8",
      R: -53.51,
      d: 0.2,
      sd: 29,
    },
    {
      label: "9",
      R: 421,
      d: 5.76,
      sd: 28,
      medium: 6,
    },
    {
      label: "10",
      R: -168.3,
      d: 0.2,
      sd: 26,
    },
    {
      label: "11",
      R: 388.6,
      d: 4.95,
      sd: 26,
      medium: 7,
    },
    {
      label: "12",
      R: -232.1,
      d: 57.321981470393965,
      sd: 26,
    },
  ],
  aperture: {
    nominalFNumber: 1.5,
    fStops: [1.5, 2, 2.8, 4, 5.6, 8, 11, 16, 22],
    maxFNumber: 22,
  },
  focus: {
    closeFocusM: 1000000000000000.0,
    description:
      "Private literal Warmisham/TT&H US2398680 Example I all-glass sodium-D infinity reference. No retail identity, finite state or calibrated broadband claim. Seven elements/five groups, cement R4/R7 and three0.2mm air gaps unchanged. Source nominal100mm f/1.5 and printedBF57.31mm retained separately from literal EFL100.001709/BF57.321981mm; computed Gaussian infinity detector. Stop station z42.22mm, split11.10/8.96mm afterR5, physical iris and all rims are estimated. Stock native f/1.5 derives iris radius20.723959727mm; exact nominal marginal maps to20.651007860mm and does not define published hardware. +/-10degree chosen diagnostic only, real clipping retained; no source coverage, full-pupil edge or throughput claim. Original seven-page facsimile visually verified in independent external custody only; no local original PDF/pixels/rehash or denied source request. No override, baffle, optical retuning, engine/schema change or source substitution.",
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
      text: "G1 · L1",
      fromSurface: "1",
      toSurface: "2",
    },
    {
      text: "G2 · L2 + L3",
      fromSurface: "3",
      toSurface: "5",
    },
    {
      text: "G3 · L4 + L5",
      fromSurface: "6",
      toSurface: "8",
    },
    {
      text: "G4 · L6",
      fromSurface: "9",
      toSurface: "10",
    },
    {
      text: "G5 · L7",
      fromSurface: "11",
      toSurface: "12",
    },
  ],
  layout: {
    yScFill: 0.5,
  },
} satisfies LensDataV2Input;
export default data;
