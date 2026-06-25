import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║ Nikon NIKKOR Z DX 50-250mm f/4.5-6.3 VR                            ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║ Data source: JP WO2020/105107 A1, Example 1, Nikon Corporation.     ║
 * ║ 16 glass elements / 12 air-separated groups; all spherical.         ║
 * ║ Moving groups: GP1(+), GN1(-/VR), GP2(+/stop), GN2(-/focus), GN3(-).║
 * ║ Zoom variable gaps: D5, D10, D22, D25, D29.                         ║
 * ║ Focus: GN2 moves image-side; close-focus gaps are paraxial          ║
 * ║ estimates from Nikon's published MFDs because the patent publishes  ║
 * ║ infinity-focus spacings only.                                       ║
 * ║                                                                    ║
 * ║ No production scaling is applied. Patent f = 51.50-242.80 mm;       ║
 * ║ production is marketed as 50-250 mm.                                ║
 * ║                                                                    ║
 * ║ Semi-diameters are inferred. They were constrained by the 62 mm      ║
 * ║ filter envelope, paraxial ray envelopes, edge thickness, element     ║
 * ║ front/rear SD ratios, sd/|R|, and signed cross-gap sag clearance.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-z-dx-50-250mm-f45-63-vr",
  maker: "Nikon",
  name: "NIKON NIKKOR Z DX 50-250mm f/4.5-6.3 VR",
  subtitle: "JP WO2020/105107 A1 Example 1 — Nikon Corporation",
  specs: [
    "Production: 50-250 mm, f/4.5-6.3",
    "Patent Example 1: f = 51.50-242.80 mm",
    "16 elements / 12 groups",
    "1 ED element; all-spherical prescription",
    "GN1 optical VR; GN2 internal focus",
  ],

  focalLengthMarketing: [50, 250],
  focalLengthDesign: [51.499, 242.804],
  lensMounts: ["nikon-z"],
  imageFormat: "aps-c",
  patentYear: 2020,
  elementCount: 16,
  groupCount: 12,
  apertureBlades: 7,
  apertureBladeRoundedness: 1,

  elements: [
    {
      id: 1,
      name: "L11",
      label: "L11",
      type: "Positive Meniscus",
      nd: 1.5168,
      vd: 64.1,
      fl: 170.2,
      glass: "N-BK7 / S-BSL7 / J-BK7A class",
      role: "Weak positive front collector of GP1.",
    },
    {
      id: 2,
      name: "L12",
      label: "L12",
      type: "Negative Meniscus",
      nd: 1.60342,
      vd: 38.0,
      fl: -108.0,
      glass: "F5 (Schott) / S-TIM5 / J-F5 class",
      role: "Flint member of the front cemented positive doublet.",
      cemented: "D1",
    },
    {
      id: 3,
      name: "L13",
      label: "L13",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.3,
      fl: 95.0,
      glass: "J-FK5 (Hikari)",
      role: "Low-index, high-Abbe positive member completing the GP1 doublet.",
      cemented: "D1",
    },
    {
      id: 4,
      name: "L21",
      label: "L21",
      type: "Negative Meniscus",
      nd: 1.7725,
      vd: 49.6,
      fl: -62.9,
      glass: "E-LASF016 (Hikari) / J-LASF016 class",
      role: "First element of GN1, the negative VR group.",
    },
    {
      id: 5,
      name: "L22",
      label: "L22",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 41.0,
      fl: -28.4,
      glass: "H-ZLAF52A (CDGM) / J-LASF03 class",
      role: "Dominant negative element in the GN1 cemented component.",
      cemented: "D2",
    },
    {
      id: 6,
      name: "L23",
      label: "L23",
      type: "Biconvex Positive",
      nd: 1.94595,
      vd: 18.0,
      fl: 48.2,
      glass: "Dense flint class 946180 (HOYA FDS18/FDS18-W equivalent, vendor unspecified)",
      role: "High-index, high-dispersion positive member trimming GN1 residuals.",
      cemented: "D2",
    },
    {
      id: 7,
      name: "L31",
      label: "L31",
      type: "Biconvex Positive",
      nd: 1.497,
      vd: 81.6,
      fl: 38.7,
      glass: "J-FK01A (Hikari, ED fluorophosphate)",
      apd: "inferred",
      apdNote: "Sole ED-class element; patent gives nd/νd only and no partial-dispersion table.",
      role: "The sole ED-class element in the patent prescription.",
      cemented: "D3",
    },
    {
      id: 8,
      name: "L32",
      label: "L32",
      type: "Negative Meniscus",
      nd: 1.85026,
      vd: 32.4,
      fl: -42.1,
      glass: "J-LASF021 (Hikari)",
      role: "Dense-flint negative member paired with the ED element in GP2.",
      cemented: "D3",
    },
    {
      id: 9,
      name: "L33",
      label: "L33",
      type: "Positive Meniscus",
      nd: 1.51823,
      vd: 58.8,
      fl: 68.7,
      glass: "E-C3 (HOYA) / S-NSL3 / J-K3 class",
      role: "Pre-stop positive meniscus conditioning the beam into the aperture.",
    },
    {
      id: 10,
      name: "L34",
      label: "L34",
      type: "Negative Meniscus",
      nd: 1.902,
      vd: 25.3,
      fl: -60.4,
      glass: "902253 — high-index dense flint (J-LASFH24 class; no exact public catalog match)",
      role: "High-index post-stop negative corrector in GP2.",
    },
    {
      id: 11,
      name: "L35",
      label: "L35",
      type: "Biconvex Positive",
      nd: 1.744,
      vd: 44.8,
      fl: 55.7,
      glass: "S-LAM2 (OHARA) / J-LAF2 class",
      role: "Positive relay element following the post-stop negative meniscus.",
    },
    {
      id: 12,
      name: "L36",
      label: "L36",
      type: "Positive Meniscus",
      nd: 1.795,
      vd: 45.3,
      fl: 56.9,
      glass: "J-LASF017 (Hikari)",
      role: "Final positive element of GP2 before the focus doublet.",
    },
    {
      id: 13,
      name: "L41",
      label: "L41",
      type: "Biconvex Positive",
      nd: 1.80518,
      vd: 25.4,
      fl: 31.9,
      glass: "H-ZF7LA (CDGM) / S-TIH6 / J-SF6 class",
      role: "Positive member of the moving GN2 focus doublet.",
      cemented: "D4",
    },
    {
      id: 14,
      name: "L42",
      label: "L42",
      type: "Biconcave Negative",
      nd: 1.8061,
      vd: 41.0,
      fl: -20.6,
      glass: "H-ZLAF52A (CDGM) / J-LASF03 class",
      role: "Dominant negative member of the GN2 focus doublet.",
      cemented: "D4",
    },
    {
      id: 15,
      name: "L51",
      label: "L51",
      type: "Positive Meniscus",
      nd: 1.58913,
      vd: 61.2,
      fl: 57.8,
      glass: "N-SK5 / S-BAL35 / J-SK5 class",
      role: "Positive meniscus starting the rear negative correction group.",
    },
    {
      id: 16,
      name: "L52",
      label: "L52",
      type: "Negative Meniscus",
      nd: 1.91082,
      vd: 35.2,
      fl: -39.3,
      glass: "High-index lanthanum-flint class 911353 (CDGM H-ZLaF4LA / HOYA TAFD35L equivalent, vendor unspecified)",
      role: "Final negative meniscus for rear field and back-focus correction.",
    },
  ],

  surfaces: [
    { label: "1", R: 87.9319, d: 4.1, nd: 1.5168, elemId: 1, sd: 24.5 },
    { label: "2", R: 303555.26, d: 0.1, nd: 1.0, elemId: 0, sd: 24.0 },
    { label: "3", R: 121.996, d: 2.3, nd: 1.60342, elemId: 2, sd: 23.5 },
    { label: "4", R: 42.1657, d: 6.3, nd: 1.48749, elemId: 3, sd: 22.0 },
    { label: "5", R: 450.0045, d: 11.8, nd: 1.0, elemId: 0, sd: 21.5 },
    { label: "6", R: 539.7528, d: 1.2, nd: 1.7725, elemId: 4, sd: 12.0 },
    { label: "7", R: 44.5639, d: 2.596, nd: 1.0, elemId: 0, sd: 9.8 },
    { label: "8", R: -40.0811, d: 1.2, nd: 1.8061, elemId: 5, sd: 9.8 },
    { label: "9", R: 53.945, d: 2.2, nd: 1.94595, elemId: 6, sd: 10.0 },
    { label: "10", R: -287.1993, d: 37.855, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "11", R: 81.306, d: 4.75, nd: 1.497, elemId: 7, sd: 12.0 },
    { label: "12", R: -24.717, d: 1.3, nd: 1.85026, elemId: 8, sd: 11.8 },
    { label: "13", R: -81.9845, d: 0.1, nd: 1.0, elemId: 0, sd: 11.8 },
    { label: "14", R: 35.5809, d: 2.65, nd: 1.51823, elemId: 9, sd: 11.6 },
    { label: "15", R: 66022.919, d: 2.0, nd: 1.0, elemId: 0, sd: 11.2 },
    { label: "STO", R: 1e15, d: 11.87, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "17", R: 71.9716, d: 1.7, nd: 1.902, elemId: 10, sd: 10.5 },
    { label: "18", R: 30.6656, d: 0.965, nd: 1.0, elemId: 0, sd: 9.0 },
    { label: "19", R: 82.459, d: 2.23, nd: 1.744, elemId: 11, sd: 9.0 },
    { label: "20", R: -82.459, d: 0.1, nd: 1.0, elemId: 0, sd: 10.5 },
    { label: "21", R: 32.7781, d: 2.25, nd: 1.795, elemId: 12, sd: 10.5 },
    { label: "22", R: 115.5977, d: 6.151, nd: 1.0, elemId: 0, sd: 10.8 },
    { label: "23", R: 38.4958, d: 2.56, nd: 1.80518, elemId: 13, sd: 9.8 },
    { label: "24", R: -75.0934, d: 1.3, nd: 1.8061, elemId: 14, sd: 9.6 },
    { label: "25", R: 21.4236, d: 29.739, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "26", R: -51.0001, d: 3.42, nd: 1.58913, elemId: 15, sd: 12.0 },
    { label: "27", R: -20.9315, d: 0.31, nd: 1.0, elemId: 0, sd: 12.2 },
    { label: "28", R: -24.8038, d: 1.25, nd: 1.91082, elemId: 16, sd: 12.0 },
    { label: "29", R: -82.9036, d: 16.906, nd: 1.0, elemId: 0, sd: 12.0 },
  ],

  asph: {},

  var: {
    "5": [
      [11.8, 11.8],
      [36.593, 36.593],
      [73.195, 73.195],
    ],
    "10": [
      [37.855, 37.855],
      [24.078, 24.078],
      [3.134, 3.134],
    ],
    "22": [
      [6.151, 9.008],
      [8.639, 14.923],
      [3.0, 18.313],
    ],
    "25": [
      [29.739, 26.882],
      [25.019, 18.735],
      [28.466, 13.153],
    ],
    "29": [
      [16.906, 16.906],
      [23.174, 23.174],
      [38.12, 38.12],
    ],
  },

  varLabels: [
    ["5", "D5"],
    ["10", "D10"],
    ["22", "D22 / GN2 front"],
    ["25", "D25 / GN2 rear"],
    ["29", "BF"],
  ],

  zoomPositions: [51.5, 86.28, 242.8],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "GP1", fromSurface: "1", toSurface: "5" },
    { text: "GN1 / VR", fromSurface: "6", toSurface: "10" },
    { text: "GP2 / STO", fromSurface: "11", toSurface: "22" },
    { text: "GN2 / FOCUS", fromSurface: "23", toSurface: "25" },
    { text: "GN3", fromSurface: "26", toSurface: "29" },
  ],

  doublets: [
    { text: "D1", fromSurface: "3", toSurface: "5" },
    { text: "D2", fromSurface: "8", toSurface: "10" },
    { text: "D3", fromSurface: "11", toSurface: "13" },
    { text: "D4", fromSurface: "23", toSurface: "25" },
  ],

  closeFocusM: 0.5,
  focusDescription:
    "Internal focus by image-side movement of GN2 (L41/L42). Close-focus spacings are paraxial estimates from Nikon's published MFDs; the patent table gives infinity spacings only.",

  nominalFno: [4.5, 5.1, 6.3],
  fstopSeries: [4.5, 5, 5.6, 6.3, 8, 11, 16, 22, 32],
  maxFstop: 32,

  scFill: 0.68,
  yScFill: 0.58,
} satisfies LensDataInput;

export default LENS_DATA;
