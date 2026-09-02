import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════╗
 * ║     LENS DATA — NIKON SERIES E ZOOM 36-72mm f/3.5                 ║
 * ╠══════════════════════════════════════════════════════════════════════╣
 * ║  Data source: JP S55-163511 A Example 1 (Nippon Kogaku / Mogami). ║
 * ║  8 elements / 8 air-spaced lens groups; 2 moving zoom groups.   ║
 * ║                                                                    ║
 * ║  Zoom: patent infinity spacing l = 41.4 -> 0.1 mm.               ║
 * ║  The literal patent prescription traces to EFL 39.353836 mm at   ║
 * ║  l=41.4 and 69.653851 mm at l=0.1. The printed f=37-69 mm       ║
 * ║  labels are retained as zoomPositions; the wide-end discrepancy  ║
 * ║  is not silently corrected.                                      ║
 * ║                                                                    ║
 * ║  Focus status: NO_INTERNAL_RECONSTRUCTION. The patent publishes ║
 * ║  no finite-focus spacing rows, and the available Nikon sources   ║
 * ║  establish the 1.2 m minimum focus distance but not a uniquely   ║
 * ║  constrained internal focusing motion. Close-focus gap pairs     ║
 * ║  therefore remain identical to infinity.                         ║
 * ║                                                                    ║
 * ║  Stop: the patent omits a numerical stop position/diameter.       ║
 * ║  Nikon's production cross-section places the iris between L4/L5. ║
 * ║  The 2.65 mm S8-S9 air gap is therefore split 0.70/1.95 mm,      ║
 * ║  inferred from the cross-section. STO sd is the wide-state real  ║
 * ║  ray value for nominalFno=3.5; buildLens recomputes stop size at ║
 * ║  each zoom position from the same modeled f-number.               ║
 * ║                                                                    ║
 * ║  Semi-diameters are inferred, not patent-published. They were     ║
 * ║  constrained by paraxial/exact ray envelopes, 135-format field,  ║
 * ║  edge thickness, actual spherical rim slope, shared-gap sag, and  ║
 * ║  the patent Figure 1 silhouette. The rear L7/L8 rims were reduced ║
 * ║  to reproduce the visibly stepped-down rear profile.              ║
 * ║                                                                    ║
 * ║  No filters, cover glass, dummy planes, or mechanical parts are  ║
 * ║  included. No scaling is applied.                                ║
 * ╚══════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-series-e-zoom-36-72mm-f35",
  maker: "Nikon",
  name: "NIKON SERIES E ZOOM 36-72mm f/3.5",
  subtitle: "JP S55-163511 A Example 1 — Satoshi Mogami; production correlation by Nikon Tale 91",
  specs: [
    "8 ELEMENTS / 8 AIR-SPACED GROUPS",
    "2 MOVING ZOOM GROUPS",
    "MARKETED 36-72mm",
    "PATENT f=37-69mm",
    "TRACED EFL=39.354-69.654mm",
    "F/3.5",
    "ALL SPHERICAL",
  ],

  focalLengthMarketing: [36, 72],
  focalLengthDesign: [39.353836021781, 69.65385117607],
  apertureMarketing: 3.5,
  apertureDesign: 3.5,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP S55-163511 A",
  patentAuthors: ["Satoshi Mogami"],
  patentAssignees: ["Nippon Kogaku K.K."],
  patentYear: 1980,
  elementCount: 8,
  groupCount: 8,

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Negative Meniscus",
      nd: 1.80454,
      vd: 39.5,
      fl: -52.894891415307,
      glass: "NBFD3 catalog equivalent (patent 805395; production supplier unspecified)",
      apd: false,
      role: "Front-group negative meniscus.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.744,
      vd: 44.9,
      fl: -118.430931688251,
      glass: "744449 — lanthanum-flint class (vendor unresolved)",
      apd: false,
      role: "Second negative meniscus in the diverging front group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Positive Meniscus",
      nd: 1.79504,
      vd: 28.4,
      fl: 69.989001373897,
      glass: "J-LAFH3 catalog equivalent (patent 795284; production supplier unspecified)",
      apd: false,
      role: "Positive meniscus completing the negative-power front group.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.62041,
      vd: 60.3,
      fl: 44.591867146401,
      glass: "620603 — crown class (vendor unresolved)",
      apd: false,
      role: "Leading positive element of the rear master group.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.62041,
      vd: 60.3,
      fl: 52.949615016993,
      glass: "620603 — crown class (vendor unresolved)",
      apd: false,
      role: "Positive meniscus immediately behind the aperture stop.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Biconcave Negative",
      nd: 1.79504,
      vd: 28.4,
      fl: -20.562586867498,
      glass: "J-LAFH3 catalog equivalent (patent 795284; production supplier unspecified)",
      apd: false,
      role: "Strong negative corrector in the rear group.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Positive Meniscus",
      nd: 1.79631,
      vd: 40.8,
      fl: 71.372191875632,
      glass: "NBFD2 catalog equivalent (patent 796408; production supplier unspecified)",
      apd: false,
      role: "Positive rear-group meniscus.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Positive Meniscus",
      nd: 1.79631,
      vd: 40.8,
      fl: 145.362989532865,
      glass: "NBFD2 catalog equivalent (patent 796408; production supplier unspecified)",
      apd: false,
      role: "Final positive meniscus of the rear master group.",
    },
  ],

  surfaces: [
    { label: "1", R: 108.5, d: 2.5, nd: 1.80454, elemId: 1, sd: 24.0 },
    { label: "2", R: 30.253, d: 5.5, nd: 1.0, elemId: 0, sd: 18.6 },
    { label: "3", R: 115.83, d: 1.6, nd: 1.744, elemId: 2, sd: 18.6 },
    { label: "4", R: 49.749, d: 2.6, nd: 1.0, elemId: 0, sd: 19.0 },
    { label: "5", R: 38.3, d: 4.1, nd: 1.79504, elemId: 3, sd: 19.8 },
    { label: "6", R: 117.05, d: 41.4, nd: 1.0, elemId: 0, sd: 19.8 },
    { label: "7", R: 33.125, d: 4.2, nd: 1.62041, elemId: 4, sd: 13.2 },
    { label: "8", R: -159.7, d: 0.7, nd: 1.0, elemId: 0, sd: 12.8 },
    // STO position inferred from Nikon Tale 91 Fig. 1; original S8-S9 air gap = 2.65 mm.
    { label: "STO", R: 1e15, d: 1.95, nd: 1.0, elemId: 0, sd: 9.268004407231 },
    { label: "9", R: 26.82, d: 7.0, nd: 1.62041, elemId: 5, sd: 12.0 },
    { label: "10", R: 131.5, d: 1.15, nd: 1.0, elemId: 0, sd: 9.6 },
    { label: "11", R: -70.1, d: 5.7, nd: 1.79504, elemId: 6, sd: 9.6 },
    { label: "12", R: 22.088, d: 3.15, nd: 1.0, elemId: 0, sd: 9.1 },
    { label: "13", R: -49.749, d: 3.9, nd: 1.79631, elemId: 7, sd: 10.0 },
    { label: "14", R: -27.45, d: 0.1, nd: 1.0, elemId: 0, sd: 10.0 },
    { label: "15", R: 63.03, d: 2.0, nd: 1.79631, elemId: 8, sd: 9.0 },
    { label: "16", R: 136.434, d: 42.775967995267, nd: 1.0, elemId: 0, sd: 9.0 },
  ],

  asph: {},

  var: {
    // Inter-group gap: patent infinity endpoints. No finite-focus reconstruction is authored.
    "6": [
      [41.4, 41.4],
      [0.1, 0.1],
    ],
    // BFD: independently traced infinity image plane. No finite-focus reconstruction is authored.
    "16": [
      [42.775967995267, 42.775967995267],
      [59.085706837127, 59.085706837127],
    ],
  },

  varLabels: [
    ["6", "G1-G2"],
    ["16", "BF"],
  ],

  zoomPositions: [37, 69],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1 (-)", fromSurface: "1", toSurface: "6" },
    { text: "G2 (+)", fromSurface: "7", toSurface: "16" },
  ],

  doublets: [],

  closeFocusM: 1.2,
  focusDescription:
    "NO_INTERNAL_RECONSTRUCTION: the patent publishes no finite-focus spacing rows. Nikon sources establish a 1.2 m minimum focusing distance, but the available source set does not uniquely constrain the internal focus motion, so close-focus spacing pairs remain equal to infinity.",

  nominalFno: 3.5,
  fstopSeries: [3.5, 4, 5.6, 8, 11, 16, 22, 32],
  maxFstop: 32,

  yScFill: 0.42,
} satisfies LensDataInput;

export default LENS_DATA;
