import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA - PANASONIC LUMIX G FISHEYE 8mm f/3.5                  ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2012/0147254 A1, Numerical Example 4.             ║
 * ║  Panasonic / Nobuyuki Adachi and Takuya Imaoka.                    ║
 * ║  10 elements / 9 groups; one cemented doublet; all spherical in    ║
 * ║  the patent prescription.                                          ║
 * ║                                                                    ║
 * ║  Focus: inner focus by L9. The variable gaps below reproduce the   ║
 * ║  patent-published infinity and 1 m states. Panasonic's production  ║
 * ║  lens minimum focus distance is 0.1 m, but the patent does not      ║
 * ║  publish that focus position and it is not extrapolated here.       ║
 * ║                                                                    ║
 * ║  Aperture: the patent tabulates F/2.951. This file uses the         ║
 * ║  production marketed wide-open aperture, F/3.5, for nominalFno and  ║
 * ║  the stop semi-diameter. The equivalent patent stop semi-diameter   ║
 * ║  is about 3.413 mm; the production F/3.5 stop semi-diameter used    ║
 * ║  here is 2.878 mm from independent paraxial entrance-pupil trace.   ║
 * ║                                                                    ║
 * ║  Semi-diameters: the patent omits clear-aperture data. SDs are      ║
 * ║  conservative estimates checked by ray height, element edge         ║
 * ║  thickness, front/rear SD ratio, sd/|R| < 0.90, and signed          ║
 * ║  cross-gap sag-intrusion limits.                                   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  key: "panasonic-lumix-g-8mm-f35",
  maker: "Panasonic",
  name: "PANASONIC LUMIX G FISHEYE 8mm f/3.5",
  subtitle: "US 2012/0147254 A1 Example 4 — Panasonic / Adachi, Imaoka",
  specs: [
    "10 ELEMENTS / 9 GROUPS",
    "f = 7.850 mm patent / 8 mm marketed",
    "F/3.5 marketed; patent F/2.951",
    "180° diagonal fisheye",
    "1 ED ELEMENT",
  ],

  focalLengthMarketing: 8,
  focalLengthDesign: 7.849690087965294,
  apertureMarketing: 3.5,
  apertureDesign: 2.951,
  lensMounts: ["micro-four-thirds"],
  imageFormat: "four-thirds",
  patentYear: 2012,
  elementCount: 10,
  groupCount: 9,
  projection: {
    kind: "fisheye-equisolid",
    focalLengthMm: 8,
    fullFieldDeg: 180,
    imageCircleMm: 21.66,
    maxTraceFieldDeg: 89.9,
  },
  apertureBlades: 7,

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: -29.775,
      glass: "S-LAL14 (OHARA)",
      role: "First negative fisheye collector, convex to the object side.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      fl: -17.624,
      glass: "S-LAL14 (OHARA)",
      role: "Second negative collector; completes the leading diverging pair.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.5,
      fl: 38.845,
      glass: "S-TIH6 (OHARA)",
      role: "Dense-flint positive corrector behind the two front negative elements.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconcave Negative",
      nd: 1.497,
      vd: 81.6,
      fl: -33.895,
      glass: "S-FPL51 (OHARA)",
      role: "ED fluorophosphate negative element in the front-unit chromatic corrector.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.8061,
      vd: 33.3,
      fl: 24.249,
      glass: "NBFD15 / NBFD15-W (HOYA)",
      role: "High-index positive element closing the front unit before the stop.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: 26.518,
      glass: "S-LAH66 (OHARA)",
      role: "First rear-unit positive element after the aperture diaphragm.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.3,
      fl: 14.979,
      glass: "S-BAL35 (OHARA)",
      cemented: "D1",
      role: "Crown component of the L7/L8 cemented achromat; listed focal length is the isolated in-air value.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      fl: -13.571,
      glass: "S-TIH53 (OHARA)",
      cemented: "D1",
      role: "Dense-flint component of the L7/L8 cemented doublet; the doublet net focal length is about -63.204 mm.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      fl: 37.221,
      glass: "S-PHM52 (OHARA)",
      role: "Single moving inner-focus element in the rear unit.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 64.2,
      fl: 103.183,
      glass: "N-BK7 class (SCHOTT / S-BSL7 equivalent)",
      role: "Weak fixed rear positive element closest to the image side.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 48.254, d: 1.7, nd: 1.6968, elemId: 1, sd: 15.5 },
    { label: "2", R: 14.299, d: 7.18, nd: 1.0, elemId: 0, sd: 12.5 },
    { label: "3", R: 142.5, d: 1.5, nd: 1.6968, elemId: 2, sd: 10.8 },
    { label: "4", R: 11.257, d: 6.27, nd: 1.0, elemId: 0, sd: 9.5 },
    { label: "5", R: -47.621, d: 2.9, nd: 1.80518, elemId: 3, sd: 6.0 },
    { label: "6", R: -19.391, d: 0.56, nd: 1.0, elemId: 0, sd: 5.2 },
    { label: "7", R: -17.239, d: 0.8, nd: 1.497, elemId: 4, sd: 5.1 },
    { label: "8", R: 750.0, d: 3.06, nd: 1.0, elemId: 0, sd: 5.1 },
    { label: "9", R: 14.505, d: 2.2, nd: 1.8061, elemId: 5, sd: 5.8 },
    { label: "10", R: 52.423, d: 4.608, nd: 1.0, elemId: 0, sd: 5.5 },
    { label: "STO", R: 1e15, d: 2.402, nd: 1.0, elemId: 0, sd: 2.878 },
    { label: "12", R: -86.523, d: 1.6, nd: 1.7725, elemId: 6, sd: 4.2 },
    { label: "13", R: -16.697, d: 0.23, nd: 1.0, elemId: 0, sd: 4.2 },
    { label: "14", R: -16.036, d: 3.0, nd: 1.58913, elemId: 7, sd: 4.4 },
    { label: "15", R: -6.087, d: 1.82, nd: 1.84666, elemId: 8, sd: 4.4 },
    { label: "16", R: -14.719, d: 4.513, nd: 1.0, elemId: 0, sd: 4.4 },
    { label: "17", R: 500.0, d: 2.8, nd: 1.618, elemId: 9, sd: 6.6 },
    { label: "18", R: -24.06, d: 2.105, nd: 1.0, elemId: 0, sd: 6.6 },
    { label: "19", R: 106.24, d: 2.4, nd: 1.5168, elemId: 10, sd: 7.8 },
    { label: "20", R: -106.24, d: 16.169, nd: 1.0, elemId: 0, sd: 7.8 },
  ],

  asph: {},
  var: {
    "16": [4.513, 4.405],
    "18": [2.105, 2.214],
  },
  varLabels: [
    ["16", "D16"],
    ["18", "D18"],
  ],
  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "10" },
    { text: "G2 (+)", fromSurface: "12", toSurface: "20" },
  ],
  doublets: [{ text: "D1", fromSurface: "14", toSurface: "16" }],

  /* ── UI / behavior ── */
  closeFocusM: 0.1,
  focusDescription: "Inner focus by L9. Variable gaps reproduce the patent's 1 m state; production MFD is 0.1 m.",
  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  scFill: 0.55,
  yScFill: 0.66,
} satisfies LensDataInput;

export default LENS_DATA;
