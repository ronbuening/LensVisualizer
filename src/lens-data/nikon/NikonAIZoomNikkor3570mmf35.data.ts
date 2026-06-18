import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════╗
 * ║ Nikon AI-S Zoom-Nikkor 35–70mm f/3.5                                    ║
 * ╠════════════════════════════════════════════════════════════════════════════╣
 * ║ Data source: US 4,266,860, Second Embodiment / Claim 8.                  ║
 * ║ Inventor: Kiyoshi Hayashi; Assignee: Nippon Kogaku K.K.                  ║
 * ║                                                                          ║
 * ║ 10 elements / 9 air-spaced groups; all spherical surfaces.               ║
 * ║ Patent focal range: f = 36.0–68.8 mm, F/3.5.                             ║
 * ║ Production lens: Nikon AI-S Zoom-Nikkor 35–70mm f/3.5.                   ║
 * ║                                                                          ║
 * ║ Zoom variables:                                                          ║
 * ║   D8: L1–L2 separation, 33.45 mm at wide and 0.65 mm at tele.            ║
 * ║   BF: patent back focal distance, 43.7 mm at wide and 66.3 mm at tele.   ║
 * ║                                                                          ║
 * ║ Focus variables:                                                         ║
 * ║   D6: close-distance correction spacing between L11 and L12,             ║
 * ║       5.7 mm at infinity and 6.2 mm at beta = -0.25.                    ║
 * ║   D8 close values are paraxial derived, not patent-tabulated:            ║
 * ║       L2 and the image plane are held fixed while L11/L12 move           ║
 * ║       objectward; D8 is solved to give beta = -0.25.                     ║
 * ║                                                                          ║
 * ║ NOTE ON STOP PLACEMENT:                                                  ║
 * ║   The patent does not identify an aperture-stop surface. A synthetic     ║
 * ║   flat STO is inserted in the d15 air space between L8 and L9, splitting ║
 * ║   the 3.9 mm patent gap into 1.95 mm + 1.95 mm. This preserves the       ║
 * ║   prescription's optical power while providing a stable renderer pupil.  ║
 * ║                                                                          ║
 * ║ NOTE ON SEMI-DIAMETERS:                                                  ║
 * ║   Semi-diameters are inferred from paraxial marginal/chief ray envelopes ║
 * ║   plus edge-thickness and cross-gap sag checks. They are clear-aperture  ║
 * ║   estimates, not patent-published mechanical diameters.                  ║
 * ╚════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-ai-s-zoom-nikkor-35-70mm-f35",
  maker: "Nikon",
  name: "Nikon AI-S Zoom-Nikkor 35–70mm f/3.5",
  subtitle: "US 4,266,860, Second Embodiment — Nippon Kogaku / Hayashi",
  specs: [
    "10 elements / 9 groups",
    "f = 36.02–68.79 mm design; marketed 35–70 mm",
    "F/3.5 constant aperture",
    "negative-positive two-group zoom",
    "differential L11/L12 close-distance correction",
  ],

  focalLengthMarketing: [35, 70],
  focalLengthDesign: [36.02194, 68.79028],
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentYear: 1981,
  elementCount: 10,
  groupCount: 9,

  zoomPositions: [36.02194, 68.79028],
  zoomLabels: ["35 mm", "70 mm"],
  zoomStep: 0.004,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.60323,
      vd: 42.5,
      fl: 97.03,
      glass: "603/425 barium flint; Sumita K-BaSF5-equivalent",
      apd: false,
      role: "Front positive collector in the divergent L11 sub-group.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.6779,
      vd: 55.5,
      fl: -36.14,
      glass: "S-LAL12 (OHARA), lanthanum crown",
      apd: false,
      role: "Primary negative-power element of L11.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.713,
      vd: 53.9,
      fl: -78.98,
      glass: "S-LAL8 (OHARA), lanthanum crown",
      apd: false,
      role: "Secondary negative meniscus completing the divergent L11 power.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.59507,
      vd: 35.6,
      fl: 95.31,
      glass: "Unmatched 595/356 light flint class",
      apd: false,
      role: "Convergent L12 element; the close-distance correction element within L1.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      fl: 59.25,
      glass: "S-BSM16 / SK16 class dense barium crown",
      apd: false,
      role: "Positive crown member of the cemented achromat at the front of L2.",
      cemented: "D1",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.80518,
      vd: 25.5,
      fl: -183.99,
      glass: "S-TIH6 / SF6 class dense flint",
      apd: false,
      role: "Dense-flint member of the cemented achromat.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.51118,
      vd: 50.9,
      fl: 58.02,
      glass: "Unmatched 511/509 light crown class",
      apd: false,
      role: "Positive relay element in the second group.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.2,
      fl: 127.95,
      glass: "N-BK7 / BK7-type borosilicate crown; current OHARA S-BSL7 is not exact",
      apd: false,
      role: "Moderate positive relay meniscus behind L7.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.5,
      fl: -22.07,
      glass: "S-TIH6 / SF6 class dense flint",
      apd: false,
      role: "Strong negative field-flattening and chromatic-correction element in L2.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.64831,
      vd: 33.8,
      fl: 38.17,
      glass: "648/338 dense flint; SF12 / FD12 class, exact current catalog identity unresolved",
      apd: false,
      role: "Rear positive element controlling final convergence, field curvature, and distortion balance.",
    },
  ],

  surfaces: [
    { label: "1", R: 61.849, d: 8.2, nd: 1.60323, elemId: 1, sd: 22.5 },
    { label: "2", R: -1037.164, d: 0.7, nd: 1.0, elemId: 0, sd: 22.0 },
    { label: "3", R: 1000.0, d: 1.5, nd: 1.6779, elemId: 2, sd: 20.5 },
    { label: "4", R: 23.9, d: 6.8, nd: 1.0, elemId: 0, sd: 20.0 },
    { label: "5", R: 178.734, d: 1.5, nd: 1.713, elemId: 3, sd: 16.8 },
    { label: "6", R: 42.672, d: 5.7, nd: 1.0, elemId: 0, sd: 16.8 },
    { label: "7", R: 34.11, d: 3.9, nd: 1.59507, elemId: 4, sd: 18.0 },
    { label: "8", R: 81.925, d: 33.45, nd: 1.0, elemId: 0, sd: 17.8 },
    { label: "9", R: 72.84, d: 3.5, nd: 1.62041, elemId: 5, sd: 14.5 },
    { label: "10", R: -72.84, d: 1.0, nd: 1.80518, elemId: 6, sd: 14.5 },
    { label: "11", R: -144.173, d: 0.1, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "12", R: 26.644, d: 4.9, nd: 1.51118, elemId: 7, sd: 14.5 },
    { label: "13", R: 246.0, d: 0.1, nd: 1.0, elemId: 0, sd: 14.5 },
    { label: "14", R: 20.743, d: 4.5, nd: 1.5168, elemId: 8, sd: 13.8 },
    { label: "15", R: 27.99, d: 1.95, nd: 1.0, elemId: 0, sd: 13.2 },
    { label: "STO", R: 1e15, d: 1.95, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "16", R: -370.855, d: 1.5, nd: 1.80518, elemId: 9, sd: 11.2 },
    { label: "17", R: 18.7, d: 5.2, nd: 1.0, elemId: 0, sd: 11.2 },
    { label: "18", R: 64.66, d: 3.8, nd: 1.64831, elemId: 10, sd: 12.0 },
    { label: "19", R: -39.168, d: 43.7, nd: 1.0, elemId: 0, sd: 12.0 },
  ],

  asph: {},

  var: {
    "6": [
      [5.7, 6.2],
      [5.7, 6.2],
    ],
    "8": [
      [33.45, 57.06354],
      [0.65, 12.32451],
    ],
    "19": [
      [43.7, 43.7],
      [66.3, 66.3],
    ],
  },
  varLabels: [
    ["6", "D6 close correction"],
    ["8", "D8 L1–L2 spacing"],
    ["19", "BF"],
  ],

  groups: [
    { text: "L11", fromSurface: "1", toSurface: "6" },
    { text: "L12", fromSurface: "7", toSurface: "8" },
    { text: "L1", fromSurface: "1", toSurface: "8" },
    { text: "L2", fromSurface: "9", toSurface: "19" },
  ],
  doublets: [{ text: "D1", fromSurface: "9", toSurface: "11" }],

  focusDescription:
    "L11 and L12 move objectward for close focus, with L11 moving farther so D6 increases from 5.7 mm to 6.2 mm; D8 close-focus values are paraxial beta=-0.25 proxy values.",
  nominalFno: 3.5,
  closeFocusM: 0.35,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  scFill: 0.62,
  yScFill: 0.5,
  offAxisFieldFrac: 0.5,
} satisfies LensDataInput;

export default LENS_DATA;
