import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF ZOOM-NIKKOR 28-80mm f/3.5-5.6D              ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP H11-030748 A, Example 1 (Nikon / Keiji Moriyama). ║
 * ║  Negative-positive two-group standard zoom for 135-format SLR use. ║
 * ║  Eight all-spherical, air-spaced glass elements in two zoom groups. ║
 * ║                                                                    ║
 * ║  Zoom variable gaps: D8 (G1-G2 separation) and BF.                 ║
 * ║  The patent also describes a moving fixed-diameter auxiliary stop  ║
 * ║  on the image side of G2; it is not modeled because no numerical   ║
 * ║  location or aperture diameter is published.                       ║
 * ║  Focus: unit-focus approximation only. The patent publishes        ║
 * ║  infinity-focus zoom spacings but no close-focus prescription.     ║
 * ║                                                                    ║
 * ║  NOTE ON PRINTED Bf VALUES:                                        ║
 * ║  The patent Table 1 printed Bf row is not used for the data file.  ║
 * ║  Independent paraxial and finite spherical D-line traces of the     ║
 * ║  published prescription give in-focus BFD values of 45.756923,     ║
 * ║  65.249564, and 90.996686 mm at 28.8, 50.0, and 78.0 mm.          ║
 * ║  The printed Bf row (46.553, 57.664, 72.340 mm) does not focus     ║
 * ║  the mid and tele positions. It is retained in the analysis as a    ║
 * ║  published inconsistency, but not used for the rendered model.      ║
 * ║                                                                    ║
 * ║  NOTE ON STOP PLACEMENT:                                           ║
 * ║  The patent places the iris substantially midway between L5 and L6. ║
 * ║  The d10 air gap is therefore split 1.25 / STO / 1.25 mm.          ║
 * ║                                                                    ║
 * ║  NOTE ON SEMI-DIAMETERS:                                           ║
 * ║  The patent does not publish clear semi-diameters. SDs below are   ║
 * ║  conservative estimates from marginal/chief-ray traces, constrained║
 * ║  by rim slope, edge thickness, element SD ratios, cross-gap sag,   ║
 * ║  and the production 58 mm filter-thread envelope. Several internal ║
 * ║  clear apertures are intentionally vignetted to satisfy renderer    ║
 * ║  cross-gap constraints because the patent gives no aperture data.   ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-af-zoom-nikkor-28-80mm-f35-56d",
  maker: "Nikon",
  name: "NIKON AF ZOOM-NIKKOR 28-80mm f/3.5-5.6 D",
  subtitle: "JP 1999-030748 A Example 1 - Nikon / Keiji Moriyama",
  specs: [
    "8 elements / 8 air-spaced groups",
    "2 zoom groups: G1 (-) / G2 (+)",
    "f = 28.8-78.0 mm (patent)",
    "F/3.57-5.81 (patent)",
    "2ω = 76.5°-31.0°",
    "all-spherical prescription",
  ],

  focalLengthMarketing: [28, 80],
  focalLengthDesign: [28.798973, 77.998495],
  apertureMarketing: 3.5,
  apertureDesign: 3.57,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentYear: 1999,
  elementCount: 8,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Biconvex Positive",
      nd: 1.51454,
      vd: 54.55,
      fl: 231.956,
      glass: "515546 - unmatched light crown",
      apd: false,
      role: "Weak front positive corrector in the negative zoom group; reduces wide-angle distortion before the strong negative menisci.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.79668,
      vd: 45.37,
      fl: -35.468,
      glass: "797454 - high-index lanthanum flint class",
      apd: false,
      role: "Principal negative-power element in G1.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Negative Meniscus",
      nd: 1.79668,
      vd: 45.37,
      fl: -63.191,
      glass: "797454 - high-index lanthanum flint class",
      apd: false,
      role: "Secondary negative-power element in G1; shares divergence with L2 and controls tele-end spherical balance.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.86074,
      vd: 23.01,
      fl: 69.647,
      glass: "861230 - dense flint class",
      apd: false,
      role: "Positive closing element of G1; offsets part of the negative Petzval contribution of L2-L3.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Biconvex Positive",
      nd: 1.6172,
      vd: 54.01,
      fl: 39.929,
      glass: "617540 - SSK-class crown",
      apd: false,
      role: "First positive lens in G2 and the front half of the rear converging core.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Positive Meniscus",
      nd: 1.6172,
      vd: 54.01,
      fl: 63.623,
      glass: "617540 - SSK-class crown",
      apd: false,
      role: "Positive meniscus immediately behind the iris; continues the converging power of G2.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconcave Negative",
      nd: 1.80518,
      vd: 25.41,
      fl: -18.14,
      glass: "Dense flint / SF6-family class (805/254)",
      apd: false,
      role: "Strong negative flint in G2; primary chromatic and Petzval balancing element of the rear group.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Biconvex Positive",
      nd: 1.61293,
      vd: 36.98,
      fl: 29.126,
      glass: "Moderate-dispersion flint class (613/370)",
      apd: false,
      role: "Final positive relay element completing the rear-group image formation.",
    },
  ],

  surfaces: [
    { label: "1", R: 136.538, d: 4.5, nd: 1.51454, elemId: 1, sd: 28.5 },
    { label: "2", R: -937.516, d: 0.1, nd: 1.0, elemId: 0, sd: 26.5 },
    { label: "3", R: 86.189, d: 2.0, nd: 1.79668, elemId: 2, sd: 20.0 },
    { label: "4", R: 21.061, d: 8.5, nd: 1.0, elemId: 0, sd: 16.0 },
    { label: "5", R: 168.022, d: 1.6, nd: 1.79668, elemId: 3, sd: 16.0 },
    { label: "6", R: 38.573, d: 3.5, nd: 1.0, elemId: 0, sd: 15.2 },
    { label: "7", R: 31.861, d: 4.0, nd: 1.86074, elemId: 4, sd: 14.6 },
    { label: "8", R: 64.054, d: 34.842, nd: 1.0, elemId: 0, sd: 14.6 },
    { label: "9", R: 28.074, d: 3.7, nd: 1.6172, elemId: 5, sd: 10.8 },
    { label: "10", R: -191.563, d: 1.25, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "STO", R: 1e15, d: 1.25, nd: 1.0, elemId: 0, sd: 8.7 },
    { label: "11", R: 24.663, d: 4.2, nd: 1.6172, elemId: 6, sd: 10.0 },
    { label: "12", R: 62.0, d: 1.2, nd: 1.0, elemId: 0, sd: 8.2 },
    { label: "13", R: -76.033, d: 8.0, nd: 1.80518, elemId: 7, sd: 8.2 },
    { label: "14", R: 18.928, d: 1.6, nd: 1.0, elemId: 0, sd: 7.0 },
    { label: "15", R: 34.353, d: 4.7, nd: 1.61293, elemId: 8, sd: 8.6 },
    { label: "16", R: -35.233, d: 45.756923, nd: 1.0, elemId: 0, sd: 10.5 },
  ],

  asph: {},

  zoomPositions: [28.8, 50.0, 78.0],
  zoomLabels: ["28.8 mm", "78.0 mm"],
  zoomStep: 0.004,
  nominalFno: [3.57, 4.57, 5.81],

  var: {
    "8": [
      [34.842, 34.842],
      [12.086, 12.086],
      [0.988, 0.988],
    ],
    "16": [
      [45.756923, 48.706768],
      [65.249564, 75.071976],
      [90.996686, 123.596601],
    ],
  },
  varLabels: [
    ["8", "D8"],
    ["16", "BF"],
  ],

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "8" },
    { text: "G2 (+)", fromSurface: "9", toSurface: "16" },
  ],
  doublets: [],

  closeFocusM: 0.4,
  focusDescription:
    "Unit-focus approximation. The patent gives infinity zoom spacings only; close-focus BFD values are paraxially solved for a 0.4 m setting measured from the image plane.",
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 36,
  apertureStep: 0.004,
  scFill: 0.56,
  yScFill: 0.62,
} satisfies LensDataInput;

export default LENS_DATA;
