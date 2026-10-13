import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔══════════════════════════════════════════════════════════════════════════════════╗
 * ║ LENS DATA — NIKON AF-S ZOOM-NIKKOR 17-35mm f/2.8 D IF-ED                       ║
 * ╠══════════════════════════════════════════════════════════════════════════════════╣
 * ║ Source: JP 2001-083421 A, Example 1 (Nikon Corporation / Naoko Fukuda).          ║
 * ║ Native patent scale; no uniform scaling is applied.                              ║
 * ║ Patent design stations: 17.50 / 24.00 / 34.00 mm, each printed f/2.9.            ║
 * ║ Production correlation: strong, but not manufacturer-confirmed as a patent link. ║
 * ║                                                                                  ║
 * ║ Physical construction: 13 elements / 10 air-separated groups. The compound L2   ║
 * ║ asphere contains a thin resin layer bonded to a glass substrate; the schema      ║
 * ║ therefore uses 14 optical-medium element entries while elementCount remains 13.  ║
 * ║                                                                                  ║
 * ║ Zoom gaps: D9, D14, D17 (the patent variable table prints the D17 row as d18),   ║
 * ║ and Bf. D12 is fixed with zoom but participates in focus.                         ║
 * ║ Focus: CONSTRAINED_RECONSTRUCTION. G2F alone translates imageward; close-focus   ║
 * ║ endpoints at each published zoom station are code-solved for Nikon's 0.28 m MFD, ║
 * ║ conserving D9+D12 and retaining the published image plane. Intermediate focus    ║
 * ║ interpolation is modeled and is not patent-published.                            ║
 * ║                                                                                  ║
 * ║ STO position: source-derived from patent Laa/Lai distances. D14 is split into     ║
 * ║ S14→STO plus a fixed 3.300 mm STO→S15 spacing. The patent does not publish a      ║
 * ║ diaphragm diameter. STO.sd is the wide-end f/2.9-calibrated value;                ║
 * ║ zoomApertureModel infers the physical iris schedule from nominalFno. Agreement    ║
 * ║ with f/2.9 is calibration-dependent, not independent stop-diameter evidence.      ║
 * ║                                                                                  ║
 * ║ Semi-diameters: modeled, because Example 1 publishes none. They were derived from ║
 * ║ exact meridional ray sampling of the published/reconstructed states and selected  ║
 * ║ intermediate zoom/focus states, then checked for edge thickness, actual rim slope,║
 * ║ conic domain, shared-band cross-gap intrusion, and sampled off-axis containment.  ║
 * ║ Rear G4 rims refined against Figure 2; L12 capped below its edge crossing.                   ║
 * ╚══════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-af-s-zoom-nikkor-17-35mm-f28d-if-ed",
  maker: "Nikon",
  name: "NIKON AF-S ZOOM-NIKKOR 17-35mm f/2.8 D IF-ED",
  subtitle: "JP 2001-083421 A, Example 1 — strong production correlation; not manufacturer-confirmed",
  specs: [
    "13 ELEMENTS / 10 GROUPS",
    "17.50–34.00 mm DESIGN STATIONS",
    "f/2.9 DESIGN",
    "3 ASPHERICAL SURFACES",
    "2 ED-CLASS COORDINATES",
  ],
  focalLengthMarketing: [17, 35],
  focalLengthDesign: [17.49569644407934, 33.99522109715811],
  apertureMarketing: 2.8,
  apertureDesign: 2.9,
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "JP 2001-083421 A",
  patentAuthors: ["Naoko Fukuda"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 2001,
  elementCount: 13,
  groupCount: 10,

  elements: [
    {
      id: 1,
      name: "L1",
      diagramLabel: "L1",
      label: "Element 1",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.796681,
      vd: 45.37,
      indexReference: "d",
      fl: -28.267288,
      glass: "Q-LASFPH3S — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Front negative aspherical element of G1.",
    },
    {
      id: 2,
      name: "L2r",
      diagramLabel: "L2r",
      label: "Element 2 resin layer",
      type: "Thin Aspherical Resin Layer",
      nd: 1.49521,
      vd: 56.34,
      indexReference: "d",
      fl: 589.777136,
      glass: "Unmatched (unnamed aspherical resin layer, nd=1.495210 νd=56.34)",
      role: "Thin compound-asphere resin layer on the L2 glass substrate.",
      cemented: "H1",
    },
    {
      id: 3,
      name: "L2g",
      diagramLabel: "L2g",
      label: "Element 2 glass substrate",
      type: "Negative Meniscus",
      nd: 1.772789,
      vd: 49.45,
      indexReference: "d",
      fl: -601.89412,
      glass: "773495 — lanthanum class (supplier unresolved)",
      role: "Glass substrate of the compound L2 aspherical element in G1.",
      cemented: "H1",
    },
    {
      id: 4,
      name: "L3",
      diagramLabel: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.80384,
      vd: 33.89,
      indexReference: "d",
      fl: -39.289431,
      glass: "E-LAFH2 class (legacy HIKARI coordinate match; supplier not proven)",
      role: "Negative element of G1.",
    },
    {
      id: 5,
      name: "L4",
      diagramLabel: "L4",
      label: "Element 4",
      type: "Biconvex Positive",
      nd: 1.805182,
      vd: 25.35,
      indexReference: "d",
      fl: 49.734047,
      glass: "805254 — SF6 class",
      role: "Positive rear element of G1.",
    },
    {
      id: 6,
      name: "L5",
      diagramLabel: "L5",
      label: "Element 5",
      type: "Negative Meniscus",
      nd: 1.749501,
      vd: 35.19,
      indexReference: "d",
      fl: -55.690725,
      glass: "J-LAF7 — coordinate-compatible spectral proxy (supplier unresolved)",
      role: "Front member of the cemented G2F focusing subgroup.",
      cemented: "D1",
    },
    {
      id: 7,
      name: "L6",
      diagramLabel: "L6",
      label: "Element 6",
      type: "Biconvex Positive",
      nd: 1.58913,
      vd: 61.09,
      indexReference: "d",
      fl: 30.072608,
      glass: "589611/589612 — SK5 class",
      role: "Rear member of the cemented G2F focusing subgroup.",
      cemented: "D1",
    },
    {
      id: 8,
      name: "L7",
      diagramLabel: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.716999,
      vd: 48.04,
      indexReference: "d",
      fl: 83.947853,
      glass: "717480 — LAF3 class",
      role: "Positive G2R element immediately ahead of the aperture stop.",
    },
    {
      id: 9,
      name: "L8",
      diagramLabel: "L8",
      label: "Element 8",
      type: "Biconcave Negative",
      nd: 1.748099,
      vd: 52.3,
      indexReference: "d",
      fl: -24.947549,
      glass: "748523 — class unresolved",
      role: "Front member of the net-negative G3 cemented pair.",
      cemented: "D2",
    },
    {
      id: 10,
      name: "L9",
      diagramLabel: "L9",
      label: "Element 9",
      type: "Positive Meniscus",
      nd: 1.84666,
      vd: 23.82,
      indexReference: "d",
      fl: 47.284028,
      glass: "847238 — SF57/J-SF03 class",
      role: "Rear member of the net-negative G3 cemented pair.",
      cemented: "D2",
    },
    {
      id: 11,
      name: "L10",
      diagramLabel: "L10",
      label: "Element 10",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      indexReference: "d",
      fl: 48.888569,
      glass: "498825/498826 — J-FKH1 class (supplier unresolved)",
      apd: "inferred",
      apdNote:
        "ED-class inference from the coordinate-compatible J-FKH1 curve (catalog dPgF approximately +0.0337); not patent-measured partial dispersion or proof of production glass identity.",
      role: "Positive ED-class element at the front of G4.",
    },
    {
      id: 12,
      name: "L11",
      diagramLabel: "L11",
      label: "Element 11",
      type: "Negative Meniscus",
      nd: 1.805182,
      vd: 25.35,
      indexReference: "d",
      fl: -38.4258,
      glass: "805254 — SF6 class",
      role: "Negative front member of the central G4 cemented pair.",
      cemented: "D3",
    },
    {
      id: 13,
      name: "L12",
      diagramLabel: "L12",
      label: "Element 12",
      type: "Biconvex Positive",
      nd: 1.49782,
      vd: 82.52,
      indexReference: "d",
      fl: 31.036607,
      glass: "498825/498826 — J-FKH1 class (supplier unresolved)",
      apd: "inferred",
      apdNote:
        "ED-class inference from the coordinate-compatible J-FKH1 curve (catalog dPgF approximately +0.0337); not patent-measured partial dispersion or proof of production glass identity.",
      role: "Positive ED-class rear member of the central G4 cemented pair.",
      cemented: "D3",
    },
    {
      id: 14,
      name: "L13",
      diagramLabel: "L13",
      label: "Element 13",
      type: "Negative Meniscus (1× Asph)",
      nd: 1.76684,
      vd: 46.8,
      indexReference: "d",
      fl: -654.339565,
      glass: "767468 — J-LASFH2 class (HIKARI coordinate match; supplier unresolved)",
      role: "Final weak negative aspherical element of G4.",
    },
  ],

  surfaces: [
    { label: "1A", R: 542.0779, d: 3, nd: 1.796681, elemId: 1, sd: 24.5 },
    { label: "2", R: 21.5687, d: 12.6, nd: 1, elemId: 0, sd: 18 },
    { label: "3A", R: -218.5609, d: 0.17, nd: 1.49521, elemId: 2, sd: 16 },
    { label: "4", R: -125.0432, d: 3.4, nd: 1.772789, elemId: 3, sd: 16 },
    { label: "5", R: -173.0452, d: 0.7, nd: 1, elemId: 0, sd: 15.3 },
    { label: "6", R: -100.0603, d: 2.15, nd: 1.80384, elemId: 4, sd: 15.2 },
    { label: "7", R: 46.5903, d: 1.9, nd: 1, elemId: 0, sd: 14.4 },
    { label: "8", R: 46.3354, d: 6.9, nd: 1.805182, elemId: 5, sd: 14.5 },
    { label: "9", R: -275.3788, d: 21.825, nd: 1, elemId: 0, sd: 14.9 },
    { label: "10", R: 40.8188, d: 1.5, nd: 1.749501, elemId: 6, sd: 15.4 },
    { label: "11", R: 20.3123, d: 6.9, nd: 1.58913, elemId: 7, sd: 14.2 },
    { label: "12", R: -121.1836, d: 5.475, nd: 1, elemId: 0, sd: 14.2 },
    { label: "13", R: 71.9497, d: 2.9, nd: 1.716999, elemId: 8, sd: 14.2 },
    { label: "14", R: -362.0832, d: 1.752, nd: 1, elemId: 0, sd: 14 },
    { label: "STO", R: 1e15, d: 3.3, nd: 1, elemId: 0, sd: 8.068345186927502 },
    { label: "15", R: -47.047, d: 1.5, nd: 1.748099, elemId: 9, sd: 11.1 },
    { label: "16", R: 31.357, d: 3, nd: 1.84666, elemId: 10, sd: 11.3 },
    { label: "17", R: 138.3354, d: 12.785, nd: 1, elemId: 0, sd: 11.3 },
    { label: "18", R: 35.3292, d: 6.7, nd: 1.49782, elemId: 11, sd: 15.2 },
    { label: "19", R: -73.2963, d: 0.1, nd: 1, elemId: 0, sd: 15.2 },
    { label: "20", R: 70.8879, d: 1.5, nd: 1.805182, elemId: 12, sd: 15.5 },
    { label: "21", R: 21.3356, d: 9.8, nd: 1.49782, elemId: 13, sd: 15.5 },
    { label: "22", R: -47.464, d: 0.2, nd: 1, elemId: 0, sd: 15.5 },
    { label: "23A", R: -111.7388, d: 2, nd: 1.76684, elemId: 14, sd: 16.3 },
    { label: "24", R: -144.8669, d: 38.515, nd: 1, elemId: 0, sd: 16.3 },
  ],

  asph: {
    "1A": {
      K: 19,
      A3: -9.5109e-6,
      A4: 1.682e-5,
      A5: -3.2312e-7,
      A6: -6.3775e-9,
      A7: 7.6231e-11,
      A8: 6.3872e-12,
      A9: 9.6455e-14,
      A10: -5.9857e-15,
      A12: 0,
      A14: 0,
    },
    "3A": {
      K: 98,
      A4: -9.5504e-6,
      A6: 2.7475e-8,
      A8: -3.5095e-11,
      A10: 4.8894e-14,
      A12: 0,
      A14: 0,
    },
    "23A": {
      K: -11,
      A4: -7.8998e-6,
      A6: -1.488e-8,
      A8: 3.1034e-11,
      A10: -9.56e-14,
      A12: 0,
      A14: 0,
    },
  },

  var: {
    "9": [
      [21.825, 26.01605641341964],
      [9.781, 13.8543506516412],
      [0.938, 5.249353050367893],
    ],
    "12": [
      [5.475, 1.2839435865803601],
      [5.475, 1.4016493483588004],
      [5.475, 1.1636469496321062],
    ],
    "14": [
      [1.752, 1.752],
      [9.215, 9.215],
      [17.468, 17.468],
    ],
    "17": [
      [12.785, 12.785],
      [7.735, 7.735],
      [0.98, 0.98],
    ],
    "24": [
      [38.515, 38.515],
      [43.726, 43.726],
      [53.343, 53.343],
    ],
  },
  varLabels: [
    ["9", "D9"],
    ["12", "D12"],
    ["14", "D14→STO"],
    ["17", "D17"],
    ["24", "BF"],
  ],

  zoomPositions: [17.5, 24, 34],
  zoomLabels: ["Wide", "Tele"],

  groups: [
    { text: "G1", fromSurface: "1A", toSurface: "9" },
    { text: "G2F", fromSurface: "10", toSurface: "12" },
    { text: "G2R", fromSurface: "13", toSurface: "14" },
    { text: "G3", fromSurface: "15", toSurface: "17" },
    { text: "G4", fromSurface: "18", toSurface: "24" },
  ],
  doublets: [
    { text: "H1", fromSurface: "3A", toSurface: "5" },
    { text: "D1", fromSurface: "10", toSurface: "12" },
    { text: "D2", fromSurface: "15", toSurface: "17" },
    { text: "D3", fromSurface: "20", toSurface: "22" },
  ],

  closeFocusM: 0.28,
  focusDescription:
    "For close focus, G2F moves toward the image plane while the other groups stay fixed. Travel to 0.28 m is a constrained estimate at each zoom station; the patent does not publish close-focus spacings.",

  nominalFno: 2.9,
  zoomApertureModel: "from-nominal-fno",
  fstopSeries: [2.9, 4, 5.6, 8, 11, 16],

  yScFill: 0.3,
} satisfies LensDataInput;

export default LENS_DATA;
