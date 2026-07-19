import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Nikon AI Micro-Nikkor 105mm f/2.8S                    ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,392,724, Example 1, Yoshinari Hamanishi /       ║
 * ║  Nippon Kogaku K.K.                                                ║
 * ║                                                                    ║
 * ║  Patent prescription: f = 105 mm, F/2.8, 2ω = 23.25°,              ║
 * ║  β = -0.5 at close focus.                                          ║
 * ║  Production identification: Nikon AI Micro-Nikkor 105mm f/2.8S.    ║
 * ║                                                                    ║
 * ║  10 elements / 9 air-separated groups, all spherical.              ║
 * ║  Focus: CRC-style floating focus; G1 and G2 move objectward        ║
 * ║  relative to the fixed rear divergent group G3 while D6 and D11    ║
 * ║  increase. The diaphragm is carried with G2.                       ║
 * ║                                                                    ║
 * ║  NOTE ON SCALING:                                                   ║
 * ║    None. Patent Example 1 is already given at f = 105 mm.          ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║    The patent does not list clear apertures. Semi-diameters here   ║
 * ║    are estimated from the f/2.8 entrance pupil, 135-format field    ║
 * ║    coverage, Fig. 1 relative element sizes, production 52 mm       ║
 * ║    filter constraint, minimum edge thickness, sd/|R|, and signed   ║
 * ║    cross-gap sag clearance.                                        ║
 * ║                                                                    ║
 * ║  IMPORTANT: This file describes only the optical design. It omits   ║
 * ║  filters, mechanical parts, and sensor cover glass.                 ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-ai-micro-nikkor-105mm-f28s",
  maker: "Nikon",
  name: "Nikon AI Micro-Nikkor 105mm f/2.8S",
  subtitle: "US 4,392,724 Example 1 — Hamanishi / Nippon Kogaku",
  specs: [
    "10 elements / 9 groups",
    "f = 105.003 mm",
    "F/2.8",
    "2ω = 23.25°",
    "All-spherical",
    "CRC floating focus to 1:2",
  ],

  focalLengthMarketing: 105,
  focalLengthDesign: 105.003,
  apertureMarketing: 2.8,
  apertureDesign: 2.8,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,392,724",
  patentAuthors: ["Yoshinari Hamanishi"],
  patentAssignees: ["Nippon Kogaku KK"],
  patentYear: 1983,
  elementCount: 10,
  groupCount: 9,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 front positive collector",
      type: "Biconvex Positive",
      nd: 1.77279,
      vd: 49.4,
      fl: 90.15,
      glass: "TAF1 / TAF105 class (HOYA, 773/496)",
      role: "High-index front positive collector; near plano-convex bend set by patent q1 condition.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 positive meniscus",
      type: "Positive Meniscus",
      nd: 1.717,
      vd: 48.1,
      fl: 76.62,
      glass: "LAF3 class (HOYA, 717/480; S-LAM3 equivalent)",
      role: "Second positive component in G1, convex to the object side.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13 negative meniscus",
      type: "Negative Meniscus",
      nd: 1.7495,
      vd: 35.2,
      fl: -44.33,
      glass: "E-LAF7 / S-LAM7 class (750/350-353)",
      role: "Achromatizing negative meniscus in the first group.",
    },
    {
      id: 4,
      name: "L21a",
      label: "L21a cemented flint",
      type: "Biconcave Negative",
      nd: 1.68893,
      vd: 31.1,
      fl: -40.91,
      glass: "E-FD8 / S-TIM28 class (689/311-313)",
      cemented: "L21",
      role: "Front flint member of the weakly negative G2 cemented meniscus.",
    },
    {
      id: 5,
      name: "L21b",
      label: "L21b cemented crown",
      type: "Biconvex Positive",
      nd: 1.7335,
      vd: 51.1,
      fl: 50.87,
      glass: "TAC4 class (HOYA, 734/511)",
      cemented: "L21",
      role: "Rear lanthanum-crown member of the G2 cemented meniscus.",
    },
    {
      id: 6,
      name: "L22",
      label: "L22 rear positive singlet",
      type: "Biconvex Positive",
      nd: 1.6935,
      vd: 53.8,
      fl: 83.04,
      glass: "LAC13 class (HOYA, 694/533; patent νd = 53.8)",
      role: "Main positive power element of G2, immediately behind the diaphragm.",
    },
    {
      id: 7,
      name: "L31",
      label: "L31 G3 positive meniscus",
      type: "Positive Meniscus",
      nd: 1.59507,
      vd: 35.5,
      fl: 130.32,
      glass: "Unmatched (595/355 vintage flint; near FF5 / S-FTM16 class but higher nd)",
      role: "Positive entry element of the divergent rear group.",
    },
    {
      id: 8,
      name: "L32",
      label: "L32 main rear diverger",
      type: "Biconcave Negative",
      nd: 1.79668,
      vd: 45.5,
      fl: -43.97,
      glass: "TAF2 / J-LASF017 class (795/454; patent nd = 1.79668)",
      role: "Strong negative element carrying most of the rear group's divergent power.",
    },
    {
      id: 9,
      name: "L33",
      label: "L33 G3 positive reconverger",
      type: "Biconvex Positive",
      nd: 1.59507,
      vd: 35.5,
      fl: 61.57,
      glass: "Unmatched (595/355 vintage flint; near FF5 / S-FTM16 class but higher nd)",
      role: "Positive element that balances the L32 divergence and assists field correction.",
    },
    {
      id: 10,
      name: "L34",
      label: "L34 final negative meniscus",
      type: "Negative Meniscus",
      nd: 1.80454,
      vd: 39.6,
      fl: -97.92,
      glass: "NBFD3 class (HOYA, 805/396)",
      role: "Final high-index negative meniscus in the fixed rear group.",
    },
  ],

  surfaces: [
    { label: "1", R: 74.5, d: 5, nd: 1.77279, elemId: 1, sd: 25.2 },
    { label: "2", R: -1042.7, d: 0.15, nd: 1, elemId: 0, sd: 24.7 },
    { label: "3", R: 29, d: 5, nd: 1.717, elemId: 2, sd: 20 },
    { label: "4", R: 57, d: 2, nd: 1, elemId: 0, sd: 20 },
    { label: "5", R: 91.28, d: 2, nd: 1.7495, elemId: 3, sd: 20 },
    { label: "6", R: 24.131, d: 13.9866, nd: 1, elemId: 0, sd: 19.8 },
    { label: "7", R: -31.19, d: 2, nd: 1.68893, elemId: 4, sd: 16 },
    { label: "8", R: 300, d: 10.5, nd: 1.7335, elemId: 5, sd: 16 },
    { label: "9", R: -41.983, d: 1.5, nd: 1, elemId: 0, sd: 16 },
    { label: "STO", R: 1e15, d: 1.5, nd: 1, elemId: 0, sd: 14.024 },
    { label: "10", R: 310.3, d: 5, nd: 1.6935, elemId: 6, sd: 15.8 },
    { label: "11", R: -70.248, d: 8.1258, nd: 1, elemId: 0, sd: 15.8 },
    { label: "12", R: -191.637, d: 4, nd: 1.59507, elemId: 7, sd: 16 },
    { label: "13", R: -55.637, d: 2, nd: 1, elemId: 0, sd: 16 },
    { label: "14", R: -114.216, d: 1.8, nd: 1.79668, elemId: 8, sd: 15.5 },
    { label: "15", R: 50.88, d: 1.8, nd: 1, elemId: 0, sd: 15.5 },
    { label: "16", R: 45.69, d: 6, nd: 1.59507, elemId: 9, sd: 16 },
    { label: "17", R: -175.85, d: 4.6, nd: 1, elemId: 0, sd: 16 },
    { label: "18", R: -38.545, d: 2, nd: 1.80454, elemId: 10, sd: 16.2 },
    { label: "19", R: -77.213, d: 43.1068, nd: 1, elemId: 0, sd: 16.2 },
  ],

  asph: {},

  var: {
    "6": [13.9866, 20.682],
    "11": [8.1258, 34.3666],
  },

  varLabels: [
    ["6", "D6 G1–G2"],
    ["11", "D11 G2–G3"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "6" },
    { text: "G2", fromSurface: "7", toSurface: "11" },
    { text: "G3", fromSurface: "12", toSurface: "19" },
  ],

  doublets: [{ text: "L21", fromSurface: "7", toSurface: "9" }],

  closeFocusM: 0.41,
  focusDescription:
    "CRC floating focus: G1 and G2 move objectward relative to the fixed rear divergent group G3 while D6 and D11 increase; the diaphragm moves with G2.",

  nominalFno: 2.8,
  fstopSeries: [2.8, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,
  apertureBlades: 9,

  scFill: 0.58,
  yScFill: 0.58,
} satisfies LensDataInput;

export default LENS_DATA;
