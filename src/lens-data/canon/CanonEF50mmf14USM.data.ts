import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — CANON EF 50mm f/1.4 USM                                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Exported from Build your own lens. Verify data and provenance.       ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "canon-ef-50mm-f14-usm",
  maker: "Canon",
  name: "CANON EF 50mm f/1.4 USM",
  subtitle: "JPH06242370A Example 2; estimated real entrance f/1.4 iris, app ray-control f/1.41532; source table f/1.14",
  visible: false,

  catalog: {
    lensMounts: ["canon-ef"],
    imageFormat: "135-full-frame",
    specs: [
      "7 ELEMENTS / 6 GROUPS",
      "SOURCE TABLE F/1.14; ABSTRACT APPROX F/1.4; MARKETED F/1.4",
      "Estimated iris/caps; derived paraxial infinity image plane",
      "Parent-verified production overlay; not factory exact",
      "App calibrated control 1.415320521221115 reproduces estimated physical iris; not factory measured",
      "Inner diagnostic rims; wide-open edge clipping not factory vignetting",
      "Derived d-line Gaussian infinity detector; no printed detector gap supplied",
    ],
    elementCount: 7,
    groupCount: 6,
    focalLengthMm: { marketing: 50, design: 49.9999054525 },
    fNumber: { marketing: 1.4, design: 1.14 },
  },

  source: {
    patentNumber: "JP H06-242370 A",
    example: { label: "Example 2", id: "2" },
    patentYear: 1994,
    authors: ["Masatake Kato"],
    assignees: ["Canon Inc."],
    sdSource: "heuristic",
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "L1",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      indexReference: "d",
      glass: "Literal source nd/Vd; no factory material identity",
    },
    {
      id: 2,
      name: "L2",
      label: "L2",
      type: "Positive Meniscus",
      nd: 1.83481,
      vd: 42.7,
      indexReference: "d",
      glass: "Literal source nd/Vd; no factory material identity",
    },
    {
      id: 3,
      name: "L3",
      label: "L3",
      type: "Negative Meniscus",
      nd: 1.64769,
      vd: 33.8,
      indexReference: "d",
      glass: "Literal source nd/Vd; no factory material identity",
    },
    {
      id: 4,
      name: "L4",
      label: "L4",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.4,
      indexReference: "d",
      glass: "Literal source nd/Vd; no factory material identity",
    },
    {
      id: 5,
      name: "L5",
      label: "L5",
      type: "Biconvex Positive",
      nd: 1.757,
      vd: 47.8,
      indexReference: "d",
      glass: "Literal source nd/Vd; no factory material identity",
    },
    {
      id: 6,
      name: "L6",
      label: "L6",
      type: "Positive Meniscus",
      nd: 1.883,
      vd: 40.8,
      indexReference: "d",
      glass: "Literal source nd/Vd; no factory material identity",
    },
    {
      id: 7,
      name: "L7",
      label: "L7",
      type: "Biconvex Positive",
      nd: 1.804,
      vd: 46.6,
      indexReference: "d",
      glass: "Literal source nd/Vd; no factory material identity",
    },
  ],
  surfaces: [
    { label: "1", R: 50.959500000000006, d: 5.3175, sd: 18.95, medium: 1 },
    { label: "2", R: 365.759, d: 1.015, sd: 18.95 },
    { label: "3", R: 25.521, d: 4.9595, sd: 17.8, medium: 2 },
    { label: "4", R: 40.302, d: 1.1165, sd: 14.85 },
    { label: "5", R: 62.3045, d: 1.7985000000000002, sd: 14.85, medium: 3 },
    { label: "6", R: 17.330499999999997, d: 8.958561828818294, sd: 13 },
    { label: "STO", R: "flat", d: 6.163438171181706 },
    { label: "7", R: -18.1055, d: 1.8755000000000002, sd: 12.6, medium: 4 },
    { label: "8", R: 508.7735, d: 6.1295, sd: 14.8, medium: 5 },
    { label: "9", R: -32.657000000000004, d: 0.1545, sd: 15.6 },
    { label: "10", R: -80.548, d: 4.138, sd: 16, medium: 6 },
    { label: "11", R: -29.886000000000003, d: 0.145, sd: 16 },
    { label: "12", R: 124.391, d: 2.9005, sd: 15.3, medium: 7 },
    { label: "13", R: -124.393, d: 37.5752097445, sd: 15.3 },
  ],

  focus: {
    closeFocusM: 1000000000000000,
    description: "Only static infinity. No finite prescription or factory MFD reproduction.",
  },

  aperture: { nominalFNumber: 1.415320521221115, fStops: [1.415320521221115, 2, 2.8, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22 },

  projection: { kind: "rectilinear", fullFieldDeg: 46, maxTraceFieldDeg: 23 },

  layout: { yScFill: 0.5 },
  rays: { offAxisFieldFrac: 1 },
  checks: { gapSagFrac: 0.932 },
} satisfies LensDataV2Input;

export default LENS_DATA;
