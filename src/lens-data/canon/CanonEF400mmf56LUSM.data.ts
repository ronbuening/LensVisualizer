import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 400mm f/5.6 L USM                               ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Exported from Build your own lens. Verify data and provenance.       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-400mm-f56l-usm",
  maker: "Canon",
  name: "CANON EF 400mm f/5.6 L USM",
  subtitle: "JP2019070689A Example 1-A; app f/5.74 control calibrates source iris, patent f/5.80, marketed f/5.6",
  visible: false,

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "7 ELEMENTS / 6 GROUPS",
      "PUBLISHED f391.89 mm F/5.80; marketed400mm f/5.6",
      "STATIC INFINITY ONLY; CONVERTERS EXCLUDED",
      "Parent-verified production overlay; not factory exact",
      "APP f/5.74 IS RAY-CONTROL CALIBRATION TO SOURCE r15.650mm IRIS; NOT A FACTORY-MEASURED F-NUMBER",
    ],
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: { marketing: 400, design: 391.89 },
    fNumber: { marketing: 5.6, design: 5.8 },
  },

  source: {
    patentNumber: "JP 2019-070689 A",
    example: { label: "Numerical Example 1A", id: "1A" },
    patentYear: 2019,
    authors: ["Shigenobu Sugita"],
    assignees: ["Canon Inc."],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      indexReference: "d",
      glass: "Literal published nd/Vd; no factory glass identity",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Positive Meniscus",
      nd: 1.43875,
      vd: 95,
      indexReference: "d",
      glass: "Literal published nd/Vd; no factory glass identity",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Biconcave Negative",
      nd: 1.7859,
      vd: 44.2,
      indexReference: "d",
      glass: "Literal published nd/Vd; no factory glass identity",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.6,
      indexReference: "d",
      glass: "Literal published nd/Vd; no factory glass identity",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Negative Meniscus",
      nd: 1.60311,
      vd: 60.7,
      indexReference: "d",
      glass: "Literal published nd/Vd; no factory glass identity",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      glass: "Literal published nd/Vd; no factory glass identity",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Biconcave Negative",
      nd: 1.6968,
      vd: 55.5,
      indexReference: "d",
      glass: "Literal published nd/Vd; no factory glass identity",
    },
  ],
  surfaces: [
    { label: "1", R: "flat", d: 1.5, sd: 33.795 },
    { label: "2", R: 122.745, d: 10.5, sd: 33.795, medium: 1 },
    { label: "3", R: -239.839, d: 0.5, sd: 33.475 },
    { label: "4", R: 107.673, d: 7.3, sd: 31.84, medium: 2 },
    { label: "5", R: 1168.744, d: 1.95, sd: 31.14 },
    { label: "6", R: -350.082, d: 3.7, sd: 31.085, medium: 3 },
    { label: "7", R: 164.436, d: 53.38, sd: 29.96 },
    { label: "8", R: 65.795, d: 6.9, sd: 23.865, medium: 4 },
    { label: "9", R: 426.118, d: 0.25, sd: 23.25 },
    { label: "10", R: 67.46, d: 3.5, sd: 22.31, medium: 5 },
    { label: "11", R: 43.928, d: 29.62, sd: 20.805 },
    { label: "12", R: "flat", d: 5.2, sd: 16.555 },
    { label: "STO", R: "flat", d: 2.5 },
    { label: "14", R: 290.57, d: 3.5, sd: 15.145, medium: 6 },
    { label: "15", R: -377.01, d: 2, sd: 14.81, medium: 7 },
    { label: "16", R: 76.046, d: 167, sd: 14.81 },
  ],

  focus: {
    closeFocusM: 1000000000000000,
    description: "Only literal unconverted infinity Example1-A. No finite focus or converter states.",
  },

  aperture: { nominalFNumber: 5.744666578191286, fStops: [5.744666578191286, 8, 11, 16], maxFNumber: 16 },

  projection: { kind: "rectilinear", fullFieldDeg: 6.32, maxTraceFieldDeg: 3.16 },

  layout: { yScFill: 0.5 },
  rays: { offAxisFieldFrac: 0.98 },
  checks: { gapSagFrac: 0.922 },
} satisfies LensDataV2Input;

export default LENS_DATA;
