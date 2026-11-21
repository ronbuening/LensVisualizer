import type { LensDataV2Input } from "../repo/src/types/lensDataV2.js";
const data = {
  schema: 2,
  key: "cook-us2601369-infinity-reference",
  maker: null,
  name: "COOK US2601369 TABLE REFERENCE \u2014 100mm PATENT f/2.67",
  subtitle: "Patent-only 4E/3G \u00b7 sodium-D infinity / estimated iris-rims",
  visible: false,
  source: {
    patentNumber: "US 2,601,369",
    patentYear: 1952,
    example: {
      label: "Sole example",
      id: null,
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
      "Patent-only four-element, three-group reference at a declared 100 mm representation of the f=1 table. No sold-lens identity is established.",
      "Both tables specify first-element thickness .130F (13 mm here), supported by the prose total .403F. Figure 1 prints .103F; that conflict is preserved, not fitted away.",
      "Sodium D (589.2938 nm), infinity only. Validated diagnostic field: \u00b15\u00b0. The published \u00b126\u00b0, wider automatic analyses and broadband results are unqualified.",
      "Iris station, bore and clear radii are estimates. Stop split 4.8 / 0.20 mm. Source dimensions stay unchanged; default geometry passes without overrides and modeled clipping is retained.",
      "Nominal/control f/2.67 derives the iris. See the companion analysis for finite-aperture equivalents and provenance. Original numerical table pixels/hash remain externally verified scout evidence.",
    ],
  },
  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Source Spherical Element",
      nd: 1.657,
      vd: 50.8,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair; no verified catalog identity or calibrated spectral curve.",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Source Spherical Element",
      nd: 1.6535,
      vd: 33.5,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair; no verified catalog identity or calibrated spectral curve.",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Source Spherical Element",
      nd: 1.7,
      vd: 41.2,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair; no verified catalog identity or calibrated spectral curve.",
      cemented: "G3",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Source Spherical Element",
      nd: 1.744,
      vd: 44.7,
      indexReference: "D",
      glass:
        "Literal sodium-D/Abbe pair; no verified catalog identity or calibrated spectral curve.",
      cemented: "G3",
    },
  ],
  surfaces: [
    {
      label: "1",
      R: 35.09,
      d: 13,
      sd: 23,
      medium: 1,
    },
    {
      label: "2",
      R: "flat",
      d: 4,
      sd: 20,
    },
    {
      label: "3",
      R: -77.52,
      d: 2,
      sd: 18,
      medium: 2,
    },
    {
      label: "4",
      R: 30.12,
      d: 4.8,
      sd: 15.4,
    },
    {
      label: "STO",
      R: "flat",
      d: 0.2,
    },
    {
      label: "5",
      R: 285.71,
      d: 2,
      sd: 17,
      medium: 3,
    },
    {
      label: "6",
      R: 20.7,
      d: 14.3,
      sd: 17,
      medium: 4,
    },
    {
      label: "7",
      R: -54.74,
      d: 79.47436764045179,
      sd: 17,
    },
  ],
  aperture: {
    nominalFNumber: 2.67,
    fStops: [2.67, 4, 5.6, 8, 11, 16, 22, 32],
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
      "Infinity-only patent reference. Finite focusing is not modeled.",
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
