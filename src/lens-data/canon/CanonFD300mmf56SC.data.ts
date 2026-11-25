import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON FD 300mm f/5.6 S.C.                                ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Exported from Build your own lens. Verify data and provenance.       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-fd-300mm-f56-sc",
  maker: "Canon",
  name: "CANON FD 300mm f/5.6 S.C.",
  subtitle: "S47-008749B Example3; patent-correlated1973SC, estimated iris/rims, simulation-derived infinity plane",
  visible: false,

  catalog: {
    lensMounts: ["canon-fd"],
    imageFormat: "135-full-frame",
    specs: [
      "1973 S.C. 6 ELEMENTS / 5 GROUPS; NOT FL-F OR1977S.S.C.",
      "ALL LENGTHS×3 FROM NORMALIZED f100",
      "ESTIMATED STOP/RIMS; DERIVED GAUSSIAN INFINITY PLANE, NOT PRINTED d11",
      "ACTIVE SIMULATION REAR AIR73.438416869mm; NOMINAL SUMMARY-DERIVED73.152mm RETAINED ASREFERENCE",
      "IRISz77.04mm / RIMS ARE ESTIMATES; NO FACTORY VIGNETTING OR FINITEFOCUS CLAIM",
    ],
    elementCount: 6,
    groupCount: 5,
    focalLengthMm: { marketing: 300, design: 300 },
    fNumber: { marketing: 5.6, design: 5.6 },
  },

  source: {
    patentNumber: "JP S47-8749 B",
    example: { label: "Example 3", id: "3" },
    patentYear: 1972,
    authors: ["Michiyoshi Suwa"],
    assignees: ["Canon Inc."],
    sdSource: "heuristic",
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70,
      indexReference: "d",
      glass: "FK5 (literal source label, no modern catalog substitution)",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70,
      indexReference: "d",
      glass: "FK5 (literal source label, no modern catalog substitution)",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconcave Negative",
      nd: 1.7859,
      vd: 44,
      indexReference: "d",
      glass: "LaSFo1 (literal source label, no modern catalog substitution)",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Positive Meniscus",
      nd: 1.47069,
      vd: 67.2,
      indexReference: "d",
      glass: "FK1 (literal source label, no modern catalog substitution)",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.9,
      indexReference: "d",
      glass: "LaK8 (literal source label, no modern catalog substitution)",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Biconvex Positive",
      nd: 1.5927,
      vd: 35.4,
      indexReference: "d",
      glass: "F16 (literal source label, no modern catalog substitution)",
    },
  ],
  surfaces: [
    { label: "1", R: 62.77799999999999, d: 10.668, sd: 28.5, medium: 1 },
    { label: "2", R: -1089.312, d: 0.516, sd: 28.5 },
    { label: "3", R: 61.800000000000004, d: 7.914, sd: 26.8, medium: 2 },
    { label: "4", R: 216.87900000000002, d: 8.459999999999999, sd: 26.8 },
    { label: "5", R: -1151.19, d: 3.3839999999999995, sd: 22.5, medium: 3 },
    { label: "6", R: 40.671, d: 7.467, sd: 22.5, medium: 4 },
    { label: "7", R: 116.562, d: 38.63143380000001, sd: 22.5 },
    { label: "STO", R: "flat", d: 48.80956619999999 },
    { label: "8", R: -34.791, d: 2.4000000000000004, sd: 14.5, medium: 5 },
    { label: "9", R: -231.423, d: 5.643, sd: 14.5 },
    { label: "10", R: 812.6370000000001, d: 8.907, sd: 14.5, medium: 6 },
    { label: "11", R: -55.038, d: 73.43841686894342, sd: 14.5 },
  ],

  focus: {
    closeFocusM: 1000000000000000,
    description: "Single static infinity only; no4m or floating/finite states represented.",
  },

  aperture: { nominalFNumber: 5.6, fStops: [5.6, 8, 11, 16, 22], maxFNumber: 22 },

  projection: { kind: "rectilinear", fullFieldDeg: 8.2, maxTraceFieldDeg: 4.1 },

  layout: { yScFill: 0.5 },
  rays: { offAxisFieldFrac: 1 },
} satisfies LensDataV2Input;

export default LENS_DATA;
