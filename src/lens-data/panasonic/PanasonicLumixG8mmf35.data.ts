import type { LensDataV2Input } from "../../types/lensDataV2.js";

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
 * ║  production marketed wide-open aperture, F/3.5, for nominalFNumber. ║
 * ║  The stop radius is derived from nominalFNumber (F/3.5), not the    ║
 * ║  patent F/2.951. A paraxial calculation for the patent F/2.951      ║
 * ║  gives a stop radius of about 3.413 mm; this is not a published     ║
 * ║  iris dimension.                                                    ║
 * ║                                                                    ║
 * ║  Semi-diameters: the patent omits clear-aperture data. SDs are      ║
 * ║  conservative estimates checked by ray height, element edge         ║
 * ║  thickness, front/rear SD ratio, sd/|R| < 0.90, and signed          ║
 * ║  cross-gap sag-intrusion limits.                                   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  /* ── Identity ── */
  schema: 2,
  key: "panasonic-lumix-g-8mm-f35",
  maker: "Panasonic",
  name: "PANASONIC LUMIX G FISHEYE 8mm f/3.5",
  subtitle: "US 2012/0147254 A1 Example 4 — Panasonic / Adachi, Imaoka",

  catalog: {
    lensMounts: ["micro-four-thirds"],
    imageFormat: "four-thirds",
    specs: [
      "10 ELEMENTS / 9 GROUPS",
      "f = 7.850 mm patent / 8 mm marketed",
      "F/3.5 marketed; patent F/2.951",
      "180° diagonal fisheye",
      "1 ED ELEMENT",
    ],
    elementCount: 10,
    groupCount: 9,
    focalLengthMm: { marketing: 8, design: 7.849690087965294 },
    fNumber: { marketing: 3.5, design: 2.951 },
  },

  source: {
    patentNumber: "US 2012/0147254 A1",
    patentYear: 2012,
    authors: ["Nobuyuki Adachi", "Takuya Imaoka"],
    assignees: ["Panasonic Corporation"],
  },

  /* ── Elements ── */
  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.5,
      focalLengthMm: -29.775,
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
      focalLengthMm: -17.624,
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
      focalLengthMm: 38.845,
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
      focalLengthMm: -33.895,
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
      focalLengthMm: 24.249,
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
      focalLengthMm: 26.518,
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
      focalLengthMm: 14.979,
      glass: "S-BAL35 (OHARA)",
      role: "Crown component of the L7/L8 cemented achromat; listed focal length is the isolated in-air value.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.84666,
      vd: 23.8,
      focalLengthMm: -13.571,
      glass: "S-TIH53 (OHARA)",
      role: "Dense-flint component of the L7/L8 cemented doublet; the doublet net focal length is about -63.204 mm.",
      cemented: "D1",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconvex Positive",
      nd: 1.618,
      vd: 63.4,
      focalLengthMm: 37.221,
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
      focalLengthMm: 103.183,
      glass: "N-BK7 class (SCHOTT / S-BSL7 equivalent)",
      role: "Weak fixed rear positive element closest to the image side.",
    },
  ],

  /* ── Surface prescription ── */
  surfaces: [
    { label: "1", R: 48.254, d: 1.7, sd: 15.5, medium: 1 },
    { label: "2", R: 14.299, d: 7.18, sd: 12.5 },
    { label: "3", R: 142.5, d: 1.5, sd: 10.8, medium: 2 },
    { label: "4", R: 11.257, d: 6.27, sd: 9.5 },
    { label: "5", R: -47.621, d: 2.9, sd: 6.0, medium: 3 },
    { label: "6", R: -19.391, d: 0.56, sd: 5.2 },
    { label: "7", R: -17.239, d: 0.8, sd: 5.1, medium: 4 },
    { label: "8", R: 750.0, d: 3.06, sd: 5.1 },
    { label: "9", R: 14.505, d: 2.2, sd: 5.8, medium: 5 },
    { label: "10", R: 52.423, d: 4.608, sd: 5.5 },
    { label: "STO", R: "flat", d: 2.402 },
    { label: "12", R: -86.523, d: 1.6, sd: 4.2, medium: 6 },
    { label: "13", R: -16.697, d: 0.23, sd: 4.2 },
    { label: "14", R: -16.036, d: 3.0, sd: 4.4, medium: 7 },
    { label: "15", R: -6.087, d: 1.82, sd: 4.4, medium: 8 },
    { label: "16", R: -14.719, sd: 4.4 },
    { label: "17", R: 500.0, d: 2.8, sd: 6.6, medium: 9 },
    { label: "18", R: -24.06, sd: 6.6 },
    { label: "19", R: 106.24, d: 2.4, sd: 7.8, medium: 10 },
    { label: "20", R: -106.24, d: 16.169, sd: 7.8 },
  ],

  /* ── UI / behavior ── */
  focus: {
    closeFocusM: 0.1,
    description: "Inner focus by L9. Variable gaps reproduce the patent's 1 m state; production MFD is 0.1 m.",
    // (moved from publishedStations) The close-focus row is source-tabulated.
    published: [1],
  },

  gaps: { "16": { label: "D16", values: [[4.513, 4.405]] }, "18": { label: "D18", values: [[2.105, 2.214]] } },

  aperture: { nominalFNumber: 3.5, fStops: [3.5, 4, 5.6, 8, 11, 16, 22], maxFNumber: 22, blades: 7 },

  projection: {
    kind: "fisheye-equisolid",
    focalLengthMm: 8,
    fullFieldDeg: 180,
    imageCircleMm: 21.66,
    maxTraceFieldDeg: 89.9,
  },

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "10" },
    { text: "G2 (+)", fromSurface: "12", toSurface: "20" },
  ],
  doublets: [{ text: "D1", fromSurface: "14", toSurface: "16" }],

  layout: { scFill: 0.55, yScFill: 0.66 },
} satisfies LensDataV2Input;

export default LENS_DATA;
