import type { LensDataV2Input } from "../../types/lensDataV2.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║           LENS DATA — NIKON DODOTTO 400mm f/8                     ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP H9-105860 Example 1 (Nikon / Kouichi Ohshita).    ║
 * ║  Compact all-spherical telephoto lens for the Dodotto 400.         ║
 * ║  4 elements / 2 cemented groups, positive front / negative rear.   ║
 * ║  Focus: unit focus, modeled by increasing the final BFD gap.       ║
 * ║                                                                    ║
 * ║  NOTE ON APERTURE:                                                 ║
 * ║    The patent table gives FNO = 8.13. The production lens is       ║
 * ║    marketed as f/8 and has no adjustable diaphragm.                ║
 * ║    `nominalFNumber` follows the patent value, as `fNumber.design`  ║
 * ║    does, and the runtime sizes the stop from it;                   ║
 * ║    `fNumber.marketing` is f/8.                                     ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not publish SDs. Values here are inferred from  ║
 * ║    paraxial stop geometry, published field, and spherical rim      ║
 * ║    thickness checks. A fully unvignetted 645-corner f/8.13 bundle  ║
 * ║    would require >31 mm at L1, which is mechanically inconsistent  ║
 * ║    with the Example 1 L1 thickness; the 645 coverage should be     ║
 * ║    read as illumination/coverage rather than unvignetted aperture. ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  schema: 2,
  key: "nikon-dodotto-400f8",
  maker: "Nikon",
  name: "NIKON DODOTTO 400mm f/8",
  subtitle: "JP H9-105860 Example 1 — Nikon / Kouichi Ohshita",

  catalog: {
    lensMounts: ["nikon-f"],
    imageFormat: "645",
    specs: [
      "4 ELEMENTS / 2 GROUPS",
      "f = 390.0 mm design / 400 mm marketed",
      "FNO = 8.13 patent / f/8 marketed",
      "2ω = 10.1°",
      "ALL-SPHERICAL",
    ],
    elementCount: 4,
    groupCount: 2,
    focalLengthMm: { marketing: 400, design: 390.008 },
    fNumber: { marketing: 8, design: 8.13 },
  },

  source: {
    patentNumber: "JP H9-105860 A",
    patentYear: 1997,
    authors: ["Kouichi Ohshita"],
    assignees: ["Nikon Corporation"],
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6228,
      vd: 57.03,
      focalLengthMm: 98.17,
      glass: "S-BSM10 (OHARA)",
      apd: false,
      role: "Front positive crown of the converging cemented front group.",
      cemented: "D1",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.75692,
      vd: 31.62,
      focalLengthMm: -181.11,
      glass: "E-LAF11 catalog equivalent (production supplier not established; patent 757316)",
      apd: false,
      role: "Front-group negative flint; cemented achromatizing and spherical-aberration correction partner for L1.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconvex Positive",
      nd: 1.62004,
      vd: 36.27,
      focalLengthMm: 174.63,
      glass: "S-TIM2 (OHARA)",
      apd: false,
      role: "Positive flint component of the negative rear cemented group.",
      cemented: "D2",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.1,
      focalLengthMm: -92.72,
      glass: "N-BK7 (Schott) / BSC7 class",
      apd: false,
      role: "BK7-class negative crown in the rear cemented field-flattener / teleconverter group.",
      cemented: "D2",
    },
  ],

  surfaces: [
    { label: "1", R: 146.186, d: 7.5, sd: 28.0, medium: 1 },
    { label: "2", R: -103.02, d: 3.0, sd: 28.0, medium: 2 },
    { label: "3", R: -419.76, d: 60.0, sd: 27.5 },
    { label: "STO", R: "flat", d: 47.0 },
    { label: "5", R: 191.786, d: 3.0, sd: 18.6, medium: 3 },
    { label: "6", R: -247.184, d: 2.0, sd: 18.6, medium: 4 },
    { label: "7", R: 59.608, sd: 18.6 },
  ],

  focus: {
    closeFocusM: 4.5,
    description:
      "Unit focus; the whole optical assembly translates, modeled by increasing the final BFD gap from 174.594 mm to 211.603 mm at 4.5 m.",
  },

  gaps: { "7": { label: "BF", values: [[174.594, 211.603]] } },

  aperture: { nominalFNumber: 8.13, fStops: [8.13], maxFNumber: 8.13 },

  projection: { kind: "rectilinear", fullFieldDeg: 10.1, maxTraceFieldDeg: 5.05 },

  groups: [
    { text: "GF", fromSurface: "1", toSurface: "3" },
    { text: "GR", fromSurface: "5", toSurface: "7" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "5", toSurface: "7" },
  ],

  layout: { scFill: 0.58, yScFill: 0.28 },
} satisfies LensDataV2Input;

export default LENS_DATA;
