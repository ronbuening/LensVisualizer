import type { LensDataInput } from "../../types/optics.js";

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
 * ║    marketed as f/8 and has no adjustable diaphragm. `nominalFno`   ║
 * ║    and the stop SD are therefore set to the marketed f/8 value;    ║
 * ║    `apertureDesign` records the patent value.                      ║
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
  key: "nikon-dodotto-400f8",
  maker: "Nikon",
  name: "NIKON DODOTTO 400mm f/8",
  subtitle: "JP H9-105860 Example 1 — Nikon / Kouichi Ohshita",
  specs: [
    "4 ELEMENTS / 2 GROUPS",
    "f = 390.0 mm design / 400 mm marketed",
    "FNO = 8.13 patent / f/8 marketed",
    "2ω = 10.1°",
    "ALL-SPHERICAL",
  ],

  focalLengthMarketing: 400,
  focalLengthDesign: 390.008,
  apertureMarketing: 8,
  apertureDesign: 8.13,
  lensMounts: ["nikon-f"],
  imageFormat: "645",
  patentYear: 1997,
  elementCount: 4,
  groupCount: 2,
  projection: {
    kind: "rectilinear",
    fullFieldDeg: 10.1,
    maxTraceFieldDeg: 5.05,
  },

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.6228,
      vd: 57.03,
      fl: 98.17,
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
      fl: -181.11,
      glass: "Unmatched dense flint (757/316 code, patent nd=1.75692 νd=31.62)",
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
      fl: 174.63,
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
      fl: -92.72,
      glass: "N-BK7 (Schott) / BSC7 class",
      apd: false,
      role: "BK7-class negative crown in the rear cemented field-flattener / teleconverter group.",
      cemented: "D2",
    },
  ],

  surfaces: [
    { label: "1", R: 146.186, d: 7.5, nd: 1.6228, elemId: 1, sd: 28.0 },
    { label: "2", R: -103.02, d: 3.0, nd: 1.75692, elemId: 2, sd: 28.0 },
    { label: "3", R: -419.76, d: 60.0, nd: 1.0, elemId: 0, sd: 27.5 },
    { label: "STO", R: 1e15, d: 47.0, nd: 1.0, elemId: 0, sd: 16.835 },
    { label: "5", R: 191.786, d: 3.0, nd: 1.62004, elemId: 3, sd: 18.6 },
    { label: "6", R: -247.184, d: 2.0, nd: 1.5168, elemId: 4, sd: 18.6 },
    { label: "7", R: 59.608, d: 174.594, nd: 1.0, elemId: 0, sd: 18.6 },
  ],

  asph: {},

  var: {
    "7": [174.594, 211.603],
  },
  varLabels: [["7", "BF"]],

  groups: [
    { text: "GF", fromSurface: "1", toSurface: "3" },
    { text: "GR", fromSurface: "5", toSurface: "7" },
  ],
  doublets: [
    { text: "D1", fromSurface: "1", toSurface: "3" },
    { text: "D2", fromSurface: "5", toSurface: "7" },
  ],

  closeFocusM: 4.5,
  focusDescription:
    "Unit focus; the whole optical assembly translates, modeled by increasing the final BFD gap from 174.594 mm to 211.603 mm at 4.5 m.",

  nominalFno: 8,
  fstopSeries: [8],
  maxFstop: 8,

  scFill: 0.58,
  yScFill: 0.28,
} satisfies LensDataInput;

export default LENS_DATA;
