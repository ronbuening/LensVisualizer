import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — Nikon AF-P NIKKOR 70-300mm f/4.5-5.6E ED VR           ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 2019/0353880 A1, First Example / Table 1.         ║
 * ║  18 elements / 14 production air-separated groups.                 ║
 * ║  Five zoom groups: G1(+), G2(-), G3(+), G4(- focus), G5(+).        ║
 * ║  No aspherical surfaces in the numerical example.                  ║
 * ║                                                                    ║
 * ║  Zoom variables from Table 1: D5 and D13 are zoom-only gaps;       ║
 * ║  D25 and D29 are zoom + focus gaps around the G4 rear-focus group. ║
 * ║  BF is stored as a zoom-only variable because the table gives a    ║
 * ║  different back focus at W/M/T; the short-distance columns keep    ║
 * ║  the same BF for each zoom state while D25/D29 exchange travel.    ║
 * ║                                                                    ║
 * ║  Surface 20 in the patent is labeled STO here as required by the   ║
 * ║  project schema.                                                   ║
 * ║                                                                    ║
 * ║  Semi-diameters are inferred. The patent omits clear apertures, so ║
 * ║  the SDs below were estimated from paraxial marginal/chief-ray     ║
 * ║  envelopes, constrained by the production 67 mm filter class and   ║
 * ║  then reduced where necessary to satisfy renderer edge-thickness   ║
 * ║  and cross-gap sag-clearance checks. These SDs are rendering       ║
 * ║  apertures, not patent-published mechanical diameters.             ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-af-p-70-300-f45-56e-ed-vr",
  maker: "Nikon",
  name: "NIKON AF-P NIKKOR 70-300mm f/4.5-5.6 E ED VR",
  subtitle: "US 2019/0353880 A1 — Example 1 / Nikon Machida",
  specs: [
    "18 elements / 14 groups",
    "Patent design f=72.10-292.01 mm",
    "Marketed 70-300 mm f/4.5-5.6",
    "One ED element in Nikon production specification",
    "Rear internal focus; optical VR group",
    "All-spherical prescription",
  ],

  focalLengthMarketing: [70, 300],
  focalLengthDesign: [72.099, 292.007],
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentYear: 2019,
  elementCount: 18,
  groupCount: 14,
  apertureBlades: 9,
  apertureBladeRoundedness: 1,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11 front collector",
      type: "Plano-Convex Positive",
      nd: 1.48749,
      vd: 70.31,
      fl: 224.6,
      glass: "J-FK5 (Hikari)",
      apd: false,
      role: "Weak positive front collector in low-dispersion FK crown glass.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12 front-doublet negative",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.4,
      fl: -160.4,
      glass: "F2 (Schott) / J-F2 class (Hikari)",
      apd: false,
      cemented: "D1",
      role: "Flint member of the front cemented achromat.",
    },
    {
      id: 3,
      name: "L13",
      label: "L13 front-doublet ED candidate",
      type: "Positive Meniscus",
      nd: 1.497,
      vd: 81.61,
      fl: 114.3,
      glass: "J-FK01A (Hikari, ED fluorophosphate candidate)",
      apd: "inferred",
      apdNote:
        "ED candidate from patent nd/vd and Nikon's one-ED production spec; patent gives no partial-dispersion table.",
      cemented: "D1",
      role: "Very-low-dispersion positive member of the front achromat; most plausible counterpart to Nikon's one ED element.",
    },
    {
      id: 4,
      name: "L21",
      label: "L21 variator entrance",
      type: "Negative Meniscus",
      nd: 1.6968,
      vd: 55.52,
      fl: -55.0,
      glass: "S-LAL14 (OHARA) / J-LAK14 class (Hikari)",
      apd: false,
      role: "High-index negative meniscus at the entrance of the principal variator group.",
    },
    {
      id: 5,
      name: "L22",
      label: "L22 variator positive compensator",
      type: "Biconvex Positive",
      nd: 1.78472,
      vd: 25.64,
      fl: 33.7,
      glass: "SF11 (Schott) / J-SF11 class (Hikari; patent vd=25.64)",
      apd: false,
      role: "Dense-flint positive compensator inside the net-negative G2 variator.",
    },
    {
      id: 6,
      name: "L23",
      label: "L23 variator biconcave",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      fl: -41.0,
      glass: "N-LAF34 (Schott) / S-LAH66 / J-LASF016 class",
      apd: false,
      role: "Strong negative dense lanthanum-flint element in G2.",
    },
    {
      id: 7,
      name: "L24",
      label: "L24 variator exit",
      type: "Negative Meniscus",
      nd: 1.85026,
      vd: 32.35,
      fl: -46.7,
      glass: "J-LASF021 (Hikari)",
      apd: false,
      role: "High-index negative meniscus completing the G2 variator.",
    },
    {
      id: 8,
      name: "L31",
      label: "L31 VR negative member",
      type: "Negative Meniscus",
      nd: 1.801,
      vd: 34.92,
      fl: -66.9,
      glass: "J-LAF016 (Hikari)",
      apd: false,
      cemented: "D2",
      role: "Negative member of the positive cemented vibration-reduction group.",
    },
    {
      id: 9,
      name: "L32",
      label: "L32 VR positive member",
      type: "Biconvex Positive",
      nd: 1.64,
      vd: 60.2,
      fl: 33.8,
      glass: "S-BSM81 (OHARA) / J-LAK01 class (patent vd=60.20)",
      apd: false,
      cemented: "D2",
      role: "Positive crown member of the vibration-reduction cemented group.",
    },
    {
      id: 10,
      name: "L33",
      label: "L33 pre-stop positive",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.31,
      fl: 39.9,
      glass: "J-FK5 (Hikari)",
      apd: false,
      cemented: "D3",
      role: "Low-dispersion positive member of the pre-stop cemented pair.",
    },
    {
      id: 11,
      name: "L34",
      label: "L34 pre-stop negative",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 40.97,
      fl: -47.7,
      glass: "H-ZLAF52A (CDGM) / J-LASF03 class",
      apd: false,
      cemented: "D3",
      role: "Dense lanthanum-flint negative partner to L33.",
    },
    {
      id: 12,
      name: "L35",
      label: "L35 post-stop negative",
      type: "Negative Meniscus",
      nd: 1.834,
      vd: 37.18,
      fl: -39.6,
      glass: "S-LAH60 (OHARA) / J-LASF010 class",
      apd: false,
      cemented: "D4",
      role: "High-index negative member of the weak post-stop negative cemented pair.",
    },
    {
      id: 13,
      name: "L36",
      label: "L36 post-stop positive",
      type: "Biconvex Positive",
      nd: 1.5168,
      vd: 63.88,
      fl: 44.9,
      glass: "J-BK7A / BK7-family class (Hikari)",
      apd: false,
      cemented: "D4",
      role: "Borosilicate-crown positive partner in the post-stop achromat.",
    },
    {
      id: 14,
      name: "L37",
      label: "L37 G3 rear positive",
      type: "Biconvex Positive",
      nd: 1.801,
      vd: 34.92,
      fl: 55.5,
      glass: "J-LAF016 (Hikari)",
      apd: false,
      role: "High-index positive rear element of the M2/G3 group.",
    },
    {
      id: 15,
      name: "L41",
      label: "L41 focus-group positive",
      type: "Positive Meniscus",
      nd: 1.80518,
      vd: 25.45,
      fl: 102.6,
      glass: "H-ZF7LA (CDGM) / S-TIH6 / J-SF6 class",
      apd: false,
      role: "Positive dense-flint member of the moving rear-focus group.",
    },
    {
      id: 16,
      name: "L42",
      label: "L42 focus-group negative",
      type: "Biconcave Negative",
      nd: 1.7725,
      vd: 49.62,
      fl: -30.9,
      glass: "N-LAF34 (Schott) / S-LAH66 / J-LASF016 class",
      apd: false,
      role: "Dominant negative member of the moving rear-focus group.",
    },
    {
      id: 17,
      name: "L51",
      label: "L51 rear relay negative",
      type: "Negative Meniscus",
      nd: 1.62004,
      vd: 36.4,
      fl: -100.9,
      glass: "F2 (Schott) / J-F2 class (Hikari)",
      apd: false,
      role: "Fixed negative meniscus immediately behind the moving focus group.",
    },
    {
      id: 18,
      name: "L52",
      label: "L52 final positive relay",
      type: "Biconvex Positive",
      nd: 1.67003,
      vd: 47.14,
      fl: 79.7,
      glass: "N-BAF10 (Schott) / J-BAF10 class",
      apd: false,
      role: "Final positive relay and field-shaping element.",
    },
  ],

  surfaces: [
    { label: "1", R: 109.487, d: 4.6, nd: 1.48749, elemId: 1, sd: 30.0 },
    { label: "2", R: 1e15, d: 0.2, nd: 1.0, elemId: 0, sd: 29.7 },
    { label: "3", R: 101.18, d: 1.8, nd: 1.62004, elemId: 2, sd: 29.0 },
    { label: "4", R: 49.8109, d: 7.2, nd: 1.497, elemId: 3, sd: 26.3 },
    { label: "5", R: 385.8166, d: 6.204, nd: 1.0, elemId: 0, sd: 26.3 },
    { label: "6", R: 176.0187, d: 1.7, nd: 1.6968, elemId: 4, sd: 20.0 },
    { label: "7", R: 31.368, d: 5.15, nd: 1.0, elemId: 0, sd: 16.2 },
    { label: "8", R: 32.6087, d: 5.5, nd: 1.78472, elemId: 5, sd: 15.8 },
    { label: "9", R: -129.7634, d: 1.447, nd: 1.0, elemId: 0, sd: 15.8 },
    { label: "10", R: -415.4105, d: 1.3, nd: 1.7725, elemId: 6, sd: 13.5 },
    { label: "11", R: 34.3083, d: 4.3, nd: 1.0, elemId: 0, sd: 11.0 },
    { label: "12", R: -33.1502, d: 1.2, nd: 1.85026, elemId: 7, sd: 11.0 },
    { label: "13", R: -203.5644, d: 30.0, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "14", R: 70.904, d: 1.2, nd: 1.801, elemId: 8, sd: 15.0 },
    { label: "15", R: 30.2785, d: 5.9, nd: 1.64, elemId: 9, sd: 15.0 },
    { label: "16", R: -70.1396, d: 1.5, nd: 1.0, elemId: 0, sd: 15.0 },
    { label: "17", R: 34.0885, d: 6.0, nd: 1.48749, elemId: 10, sd: 14.2 },
    { label: "18", R: -42.6106, d: 1.3, nd: 1.8061, elemId: 11, sd: 13.8 },
    { label: "19", R: 401.2557, d: 2.7, nd: 1.0, elemId: 0, sd: 13.5 },
    { label: "STO", R: 1e15, d: 14.11, nd: 1.0, elemId: 0, sd: 11.2 },
    { label: "21", R: 350.0, d: 1.2, nd: 1.834, elemId: 12, sd: 13.8 },
    { label: "22", R: 30.1592, d: 4.8, nd: 1.5168, elemId: 13, sd: 13.8 },
    { label: "23", R: -94.9908, d: 0.2, nd: 1.0, elemId: 0, sd: 13.8 },
    { label: "24", R: 66.3243, d: 2.8, nd: 1.801, elemId: 14, sd: 14.5 },
    { label: "25", R: -132.5118, d: 2.18, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "26", R: -92.0997, d: 2.2, nd: 1.80518, elemId: 15, sd: 14.2 },
    { label: "27", R: -44.009, d: 6.5, nd: 1.0, elemId: 0, sd: 14.2 },
    { label: "28", R: -36.9702, d: 1.0, nd: 1.7725, elemId: 16, sd: 13.2 },
    { label: "29", R: 68.3346, d: 21.418, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "30", R: -24.5, d: 1.4, nd: 1.62004, elemId: 17, sd: 13.2 },
    { label: "31", R: -41.1519, d: 0.2, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "32", R: 106.0, d: 3.8, nd: 1.67003, elemId: 18, sd: 18.5 },
    { label: "33", R: -106.0, d: 39.12, nd: 1.0, elemId: 0, sd: 18.5 },
  ],

  asph: {},

  zoomPositions: [72.1, 100.0, 292.0],
  zoomStep: 0.004,
  zoomLabels: ["Wide", "Middle", "Tele"],

  var: {
    "5": [
      [6.204, 6.204],
      [21.15, 21.15],
      [61.895, 61.895],
    ],
    "13": [
      [30.0, 30.0],
      [22.666, 22.666],
      [2.0, 2.0],
    ],
    "25": [
      [2.18, 2.837],
      [3.742, 4.562],
      [3.895, 5.614],
    ],
    "29": [
      [21.418, 20.761],
      [19.856, 19.036],
      [19.703, 17.984],
    ],
    "33": [
      [39.12, 39.12],
      [46.45, 46.45],
      [67.12, 67.12],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["13", "D13"],
    ["25", "D25"],
    ["29", "D29"],
    ["33", "BF"],
  ],

  groups: [
    { text: "G1 (+)", fromSurface: "1", toSurface: "5" },
    { text: "G2 (-)", fromSurface: "6", toSurface: "13" },
    { text: "G3 (+)", fromSurface: "14", toSurface: "25" },
    { text: "G4 focus (-)", fromSurface: "26", toSurface: "29" },
    { text: "G5 relay (+)", fromSurface: "30", toSurface: "33" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2 / VR", fromSurface: "14", toSurface: "16" },
    { text: "D3", fromSurface: "17", toSurface: "19" },
    { text: "D4", fromSurface: "21", toSurface: "23" },
  ],

  closeFocusM: 1.2,
  focusDescription:
    "Rear internal focus: the negative G4/RN group (L41-L42) translates imageward. Patent short-distance travel is 0.657 mm at wide, 0.820 mm at middle, and 1.719 mm at telephoto; Nikon's production MFD is 1.2 m.",

  nominalFno: [4.5, 4.86, 5.6],
  fstopSeries: [4.5, 5, 5.6, 6.3, 8, 11, 16, 22, 32, 40],
  maxFstop: 40,

  scFill: 0.62,
  yScFill: 0.44,
} satisfies LensDataInput;

export default LENS_DATA;
