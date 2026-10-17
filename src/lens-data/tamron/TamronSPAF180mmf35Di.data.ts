import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — TAMRON SP AF 180mm f/3.5 Di LD [IF] MACRO 1:1             ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP 2003-329924 A, Example 2 (Tamron / Yuichi Muramatsu).   ║
 * ║  Four patent lens groups with + / − / + / − power; all spherical.       ║
 * ║  14 elements / 11 air-separated groups / 0 aspherical surfaces.          ║
 * ║  Focus: floating internal focus. LG1 and the stop are fixed; LG2 moves   ║
 * ║  imageward, while LG3 and LG4 move objectward from infinity to 1:1.      ║
 * ║                                                                            ║
 * ║  NOTE ON SCALING:                                                         ║
 * ║  The patent infinity-focus EFL is 176.9587 mm. All radii, thicknesses,    ║
 * ║  variable gaps, BFL, element focal lengths, and inferred semi-diameters   ║
 * ║  are scaled ×1.0171864961 to the manufacturer's marketed 180 mm focal     ║
 * ║  length. The scaled paraxial EFL is 180.0004 mm after decimal rounding.   ║
 * ║                                                                            ║
 * ║  TRANSCRIPTION NOTES:                                                     ║
 * ║  Patent surface 23 is R = −69.3962 mm. The printed fourth variable-gap   ║
 * ║  label D(20) is a typographical carry-over; the physical variable gap is  ║
 * ║  after surface 22 and is stored as var["22"].                            ║
 * ║                                                                            ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                  ║
 * ║  The patent does not list clear semi-diameters. Values were inferred from ║
 * ║  combined paraxial marginal/chief-ray envelopes, then constrained by the  ║
 * ║  72 mm filter diameter, sd/|R| < 0.90, element SD ratio ≤ 1.25, edge      ║
 * ║  thickness ≥ 0.5 mm, and signed cross-gap sag intrusion ≤ 90%.            ║
 * ║                                                                            ║
 * ║  IMPORTANT: This file describes only the optical prescription. Sensor     ║
 * ║  cover glass, filters, and mechanical components are excluded.            ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "tamron-sp-af-180mm-f35-di",
  maker: "Tamron",
  name: "TAMRON SP AF 180mm f/3.5 Di LD [IF] MACRO 1:1 (B01)",
  subtitle: "JP 2003-329924 A — EXAMPLE 2",

  catalog: {
    lensMounts: ["canon-ef", "nikon-f", "sony-a"],
    imageFormat: "135-full-frame",
    specs: [
      "14 ELEMENTS / 11 GROUPS",
      "PATENT f = 176.9587 mm; DATA SCALED TO 180 mm",
      "F/3.5 (PATENT FNO 3.536)",
      "2ω = 14°",
      "2 LD ELEMENTS",
      "1:1 AT 0.47 m",
    ],
    elementCount: 14,
    groupCount: 11,
    focalLengthMm: { marketing: 180, design: 180.0004 },
    fNumber: { marketing: 3.5, design: 3.536 },
  },

  source: {
    patentNumber: "JP 2003-329924 A",
    patentYear: 2003,
    authors: ["Yuichi Muramatsu"],
    assignees: ["Tamron Co., Ltd."],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.21,
      focalLengthMm: 166.541,
      glass: "S-FSL5 (OHARA)",
      role: "Front positive collector in fixed group LG1.",
      nC: 1.48534,
      nF: 1.49228,
      ng: 1.49596,
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 152.537,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "ΔP_g,F = +0.0280 from the OHARA S-FPL51 catalog; the patent lists only nd and νd.",
      role: "First low-dispersion positive element in LG1.",
      dPgF: 0.028,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.834,
      vd: 37.17,
      focalLengthMm: -143.168,
      glass: "S-LAH60 (OHARA)",
      role: "High-index negative chromatic partner between the two LD elements.",
      nC: 1.82738,
      nF: 1.84982,
      ng: 1.86278,
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.61,
      focalLengthMm: 156.657,
      glass: "S-FPL51 (OHARA)",
      apd: "inferred",
      apdNote: "ΔP_g,F = +0.0280 from the OHARA S-FPL51 catalog; the patent lists only nd and νd.",
      role: "Second low-dispersion positive element in LG1.",
      dPgF: 0.028,
      nC: 1.49514,
      nF: 1.50123,
      ng: 1.50451,
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.744,
      vd: 44.79,
      focalLengthMm: -82.445,
      glass: "S-LAM2 (OHARA)",
      role: "Negative first member of the weak-power cemented achromat at the rear of LG1.",
      cemented: "D1",
      nC: 1.73905,
      nF: 1.75566,
      ng: 1.76506,
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.51633,
      vd: 64.15,
      focalLengthMm: 81.35,
      glass: "S-BSL7 (OHARA)",
      role: "Positive second member of cemented doublet D1.",
      cemented: "D1",
      nC: 1.51386,
      nF: 1.52191,
      ng: 1.52621,
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: -66.125,
      glass: "S-LAL14 (OHARA)",
      role: "Principal negative element of moving group LG2.",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: -59.298,
      glass: "S-LAL14 (OHARA)",
      role: "Negative first member of cemented doublet D2 in LG2.",
      cemented: "D2",
      nC: 1.69297,
      nF: 1.70552,
      ng: 1.71234,
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.78,
      focalLengthMm: 77.801,
      glass: "S-TIH53 (OHARA)",
      role: "Dense-flint positive second member of cemented doublet D2.",
      cemented: "D2",
      nC: 1.83649,
      nF: 1.8721,
      ng: 1.89419,
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.18,
      focalLengthMm: 95.326,
      glass: "S-BAL35 (OHARA)",
      role: "Positive first component of moving group LG3 behind the stop.",
      nC: 1.58619,
      nF: 1.59582,
      ng: 1.60103,
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.18,
      focalLengthMm: 67.606,
      glass: "S-BAL35 (OHARA)",
      role: "Positive first member of cemented doublet D3 in LG3.",
      cemented: "D3",
      nC: 1.58619,
      nF: 1.59582,
      ng: 1.60103,
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Negative Meniscus",
      nd: 1.72825,
      vd: 28.46,
      focalLengthMm: -127.102,
      glass: "S-TIH10 (OHARA)",
      role: "Dense-flint negative second member of cemented doublet D3.",
      cemented: "D3",
      nC: 1.72086,
      nF: 1.74645,
      ng: 1.762,
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Biconcave Negative",
      nd: 1.53172,
      vd: 48.91,
      focalLengthMm: -45.971,
      glass: "S-TIL6 (OHARA)",
      role: "Strong negative first element of moving rear group LG4.",
      nC: 1.52846,
      nF: 1.53934,
      ng: 1.54547,
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Positive Meniscus",
      nd: 1.67003,
      vd: 47.25,
      focalLengthMm: 91.573,
      glass: "S-BAH10 (OHARA)",
      role: "Positive final meniscus; LG4 remains net negative.",
      nC: 1.66579,
      nF: 1.67997,
      ng: 1.68796,
    },
  ],

  /* ── Surfaces ── */
  surfaces: [
    { label: "1", R: 127.076906, d: 8.137492, sd: 34.5, medium: 1 },
    { label: "2", R: -220.102679, d: 1.017186, sd: 34.5 },
    { label: "3", R: 74.733506, d: 7.425461, sd: 31.5, medium: 2 },
    { label: "4", R: 5085.93248, d: 1.322342, sd: 26.4 },
    { label: "5", R: -315.327814, d: 2.542966, sd: 26.4, medium: 3 },
    { label: "6", R: 192.873716, d: 1.830936, sd: 25.0 },
    { label: "7", R: 90.0503, d: 7.120305, sd: 25.0, medium: 4 },
    { label: "8", R: -559.983442, d: 1.576639, sd: 25.0 },
    { label: "9", R: 64.298495, d: 3.560153, sd: 29.0, medium: 5 },
    { label: "10", R: 30.650372, d: 8.035773, sd: 22.7, medium: 6 },
    { label: "11", R: 103.273724, sd: 26.0 },
    { label: "12", R: -281.233553, d: 1.627498, sd: 19.7, medium: 7 },
    { label: "13", R: 55.234549, d: 7.934055, sd: 19.3 },
    { label: "14", R: 342.821754, d: 1.52578, sd: 17.7, medium: 8 },
    { label: "15", R: 36.806893, d: 3.661871, sd: 17.5, medium: 9 },
    { label: "16", R: 79.613763, sd: 16.8 },
    { label: "STO", R: "flat" },
    { label: "18", R: 91.503249, d: 3.254997, sd: 13.8, medium: 10 },
    { label: "19", R: -143.475579, d: 0.508593, sd: 13.9 },
    { label: "20", R: 1117.840762, d: 5.085932, sd: 13.9, medium: 11 },
    { label: "21", R: -41.230332, d: 1.52578, sd: 13.8, medium: 12 },
    { label: "22", R: -75.506567, sd: 13.8 },
    { label: "23", R: -70.588878, d: 1.52578, sd: 12.0, medium: 13 },
    { label: "24", R: 37.672417, d: 7.425461, sd: 12.0 },
    { label: "25", R: 46.896163, d: 3.356715, sd: 13.0, medium: 14 },
    { label: "26", R: 193.265434, sd: 13.0 },
  ],

  focus: {
    closeFocusM: 0.47,
    /* Patent infinity, −1/2×, and −1× keyframes, uniformly scaled to 180 mm. */
    keyframes: [0, 0.7387189937888587, 1],
    description:
      "Floating internal focus: LG1 and the stop remain fixed; LG2 moves imageward, LG3 moves objectward, and LG4 moves slightly objectward from infinity to 1:1. The infinity, −1/2×, and −1× patent rows are exact focus keyframes.",
    // (moved from publishedStations) Every focus keyframe is a source row.
    published: [1, 2],
  },

  gaps: {
    "11": { label: "D(11)", values: [[4.800307, 21.360001, 37.375399]] },
    "16": { label: "D(16)", values: [[36.204007, 19.644007, 3.628915]] },
    STO: { label: "D(17)", values: [[15.512908, 9.265247, 3.254997]] },
    "22": { label: "D(22)", values: [[15.4059, 20.634747, 25.631676]] },
    "26": { label: "BF", values: [[60.292712, 61.310916, 62.324034]] },
  },

  aperture: { nominalFNumber: 3.536, fStops: [3.536, 4, 5.6, 8, 11, 16], blades: 7 },

  groups: [
    { text: "LG1 (+)", fromSurface: "1", toSurface: "11" },
    { text: "LG2 (−)", fromSurface: "12", toSurface: "16" },
    { text: "LG3 (+)", fromSurface: "18", toSurface: "22" },
    { text: "LG4 (−)", fromSurface: "23", toSurface: "26" },
  ],
  doublets: [
    { text: "D1", fromSurface: "9", toSurface: "11" },
    { text: "D2", fromSurface: "14", toSurface: "16" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
  ],

  layout: { scFill: 0.58, yScFill: 0.48, maxAspectRatio: 2.0 },
} satisfies LensDataV2Input;

export default LENS_DATA;
