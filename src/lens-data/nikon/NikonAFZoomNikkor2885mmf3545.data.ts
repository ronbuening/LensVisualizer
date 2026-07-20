import type { LensDataInput } from "../../types/optics.js";

/**
 * ╔════════════════════════════════════════════════════════════════════════════════════════════════════╗
 * ║  LENS DATA — NIKON AF ZOOM-NIKKOR 28-85mm f/3.5-4.5                                           ║
 * ╠════════════════════════════════════════════════════════════════════════════════════════════════════╣
 * ║  Data source: US 4,806,000, Tables 1 and 2, Nikon Corporation.                                  ║
 * ║  Embodiment: the single numerical prescription corresponding to Fig. 15.                         ║
 * ║  15 elements / 11 groups; all spherical.                                                        ║
 * ║  Architecture: four-group negative-positive-negative-positive wide-angle zoom.                   ║
 * ║  Zoom: G2 and G4 translate together; G3 is fixed; G1 follows its own cam path.                  ║
 * ║  Focus: patent normal focus moves G1 alone; the tabulated close state is the wide-end            ║
 * ║  macro state, beta = -0.25, in which G1, G2, and G4 translate together toward the object.        ║
 * ║                                                                                                  ║
 * ║  NOTE ON STOP PLACEMENT:                                                                         ║
 * ║    Table 1 lists d15 as the full G2-G3 air space. Fig. 15 places the diaphragm in this gap       ║
 * ║    on the fixed G3 barrel. The file splits d15 into a variable G2-to-stop distance and a         ║
 * ║    fixed 0.600 mm stop-to-G3 distance.                                                           ║
 * ║                                                                                                  ║
 * ║  NOTE ON ZOOM/CLOSE DATA:                                                                         ║
 * ║    Table 2 gives two infinity zoom positions (28.8 and 83.3 mm) and one macro state              ║
 * ║    at beta = -0.25 from the wide end. Because no tele-end macro prescription is published,        ║
 * ║    the second zoom close-focus pairs are held equal to infinity.                                 ║
 * ║                                                                                                  ║
 * ║  NOTE ON SEMI-DIAMETERS:                                                                         ║
 * ║    The patent does not publish clear apertures. Semi-diameters were estimated from paraxial       ║
 * ║    marginal/chief-ray envelopes, the 62 mm filter-thread constraint, rim-slope limits,            ║
 * ║    element front/rear SD ratio limits, minimum edge thickness, and cross-gap sag clearance.       ║
 * ╚════════════════════════════════════════════════════════════════════════════════════════════════════╝
 */

const LENS_DATA = {
  key: "nikon-af-zoom-nikkor-28-85mm-f3-5-4-5",
  maker: "Nikon",
  name: "NIKON AF ZOOM-NIKKOR 28-85mm f/3.5-4.5",
  subtitle: "US 4,806,000 — Tables 1-2",
  specs: [
    "15 elements / 11 groups",
    "computed f = 28.833-83.289 mm",
    "production f/3.5-4.5; patent f/3.5-4.0",
    "all spherical",
    "patent macro state beta = -0.25 at wide end",
  ],
  focalLengthMarketing: [28, 85],
  focalLengthDesign: [28.833, 83.289],
  lensMounts: ["nikon-f"],
  imageFormat: "135-full-frame",
  patentNumber: "US 4,806,000",
  patentAuthors: ["Yoshiharu Shiokama", "Naoto Ohta", "Hiroshi Okano", "Kiyotaka Inadome"],
  patentAssignees: ["Nikon Corporation"],
  patentYear: 1989,
  elementCount: 15,
  groupCount: 11,
  apertureBlades: 7,
  focusDescription:
    "Normal focusing is by front-group G1 translation. The tabulated close-focus state models the patent macro setting at the wide end: G1, G2, and G4 move together toward the object while G3 and the stop remain fixed.",

  elements: [
    {
      id: 1,
      name: "L1",
      label: "Element 1",
      type: "Positive Meniscus",
      nd: 1.48749,
      vd: 70.2,
      fl: 470.2,
      glass: "S-FSL5 (OHARA)",
      role: "Weak positive entrance meniscus in G1.",
    },
    {
      id: 2,
      name: "L2",
      label: "Element 2",
      type: "Negative Meniscus",
      nd: 1.717,
      vd: 48.1,
      fl: -55.3,
      glass: "S-LAM3 (OHARA)",
      role: "Primary negative meniscus power in the first group.",
    },
    {
      id: 3,
      name: "L3",
      label: "Element 3",
      type: "Biconcave Negative",
      nd: 1.79668,
      vd: 45.5,
      fl: -35.9,
      glass: "797455 - TAF2 class (Hoya legacy; no exact catalog match)",
      cemented: "D1",
      role: "Negative component of the G1 cemented chromatic-correction doublet.",
    },
    {
      id: 4,
      name: "L4",
      label: "Element 4",
      type: "Positive Meniscus",
      nd: 1.80458,
      vd: 25.5,
      fl: 71,
      glass: "S-TIH6 class (OHARA)",
      cemented: "D1",
      role: "High-dispersion positive component of the G1 cemented doublet.",
    },
    {
      id: 5,
      name: "L5",
      label: "Element 5",
      type: "Positive Meniscus",
      nd: 1.86074,
      vd: 23,
      fl: 130,
      glass: "861231 - J-SFH2 (Hikari; no source-backed catalog match)",
      role: "High-index dense flint positive meniscus at the rear of G1.",
    },
    {
      id: 6,
      name: "L6",
      label: "Element 6",
      type: "Negative Meniscus",
      nd: 1.86074,
      vd: 23,
      fl: -72.5,
      glass: "861231 - J-SFH2 (Hikari; no source-backed catalog match)",
      cemented: "T1",
      role: "Front dense-flint component of the G2 cemented triplet.",
    },
    {
      id: 7,
      name: "L7",
      label: "Element 7",
      type: "Biconvex Positive",
      nd: 1.48749,
      vd: 70.2,
      fl: 27.7,
      glass: "S-FSL5 (OHARA)",
      cemented: "T1",
      role: "Strong positive crown core of the G2 cemented triplet.",
    },
    {
      id: 8,
      name: "L8",
      label: "Element 8",
      type: "Negative Meniscus",
      nd: 1.58144,
      vd: 40.8,
      fl: -121.8,
      glass: "E-FL5 equivalent (legacy LF5 class)",
      cemented: "T1",
      role: "Rear flint component of the G2 cemented triplet.",
    },
    {
      id: 9,
      name: "L9",
      label: "Element 9",
      type: "Plano-Convex Positive",
      nd: 1.60311,
      vd: 60.7,
      fl: 53.1,
      glass: "S-BSM14 (OHARA)",
      role: "Rear positive singlet of G2.",
    },
    {
      id: 10,
      name: "L10",
      label: "Element 10",
      type: "Positive Meniscus",
      nd: 1.7847,
      vd: 26.1,
      fl: 60.9,
      glass: "S-TIH11 class (OHARA)",
      cemented: "D2",
      role: "Dense-flint positive component of the near-afocal G3 doublet.",
    },
    {
      id: 11,
      name: "L11",
      label: "Element 11",
      type: "Biconcave Negative",
      nd: 1.5168,
      vd: 64.1,
      fl: -58.4,
      glass: "S-BSL7 / N-BK7 class",
      cemented: "D2",
      role: "Crown negative component of the near-afocal G3 doublet.",
    },
    {
      id: 12,
      name: "L12",
      label: "Element 12",
      type: "Biconcave Negative",
      nd: 1.51835,
      vd: 60.3,
      fl: -40.8,
      glass: "518603 - unmatched crown (closest current S-NSL3 differs in nu_d)",
      role: "Strong negative singlet providing most of G3's negative power.",
    },
    {
      id: 13,
      name: "L13",
      label: "Element 13",
      type: "Plano-Convex Positive",
      nd: 1.58913,
      vd: 61.2,
      fl: 48.1,
      glass: "SK5 type (589/612)",
      role: "Front positive singlet of G4.",
    },
    {
      id: 14,
      name: "L14",
      label: "Element 14",
      type: "Biconvex Positive",
      nd: 1.6228,
      vd: 57,
      fl: 65.4,
      glass: "S-BSM10 (OHARA)",
      role: "Middle positive singlet of G4.",
    },
    {
      id: 15,
      name: "L15",
      label: "Element 15",
      type: "Negative Meniscus",
      nd: 1.79504,
      vd: 28.6,
      fl: -46.6,
      glass: "795287 - J-LAFH3 (Hikari; no source-backed catalog match)",
      role: "Rear negative meniscus and field-flattening/chromatic-balancing element.",
    },
  ],

  surfaces: [
    { label: "1", R: 149.991, d: 3, nd: 1.48749, elemId: 1, sd: 30.8 },
    { label: "2", R: 431.194, d: 0.1, nd: 1, elemId: 0, sd: 29 },
    { label: "3", R: 75.043, d: 1.7, nd: 1.717, elemId: 2, sd: 22.7 },
    { label: "4", R: 25.703, d: 7.9, nd: 1, elemId: 0, sd: 17.5 },
    { label: "5", R: -1130.61, d: 1.2, nd: 1.79668, elemId: 3, sd: 23 },
    { label: "6", R: 29.317, d: 3.9, nd: 1.80458, elemId: 4, sd: 18.6 },
    { label: "7", R: 56.658, d: 0.25, nd: 1, elemId: 0, sd: 18.6 },
    { label: "8", R: 34.009, d: 2.4, nd: 1.86074, elemId: 5, sd: 19.5 },
    { label: "9", R: 47.268, d: 41.311, nd: 1, elemId: 0, sd: 19.5 },
    { label: "10", R: 36.551, d: 1.2, nd: 1.86074, elemId: 6, sd: 15.0 },
    { label: "11", R: 22.699, d: 7.4, nd: 1.48749, elemId: 7, sd: 12.2 },
    { label: "12", R: -29.749, d: 1.2, nd: 1.58144, elemId: 8, sd: 12.2 },
    { label: "13", R: -52.051, d: 0.1, nd: 1, elemId: 0, sd: 15.0 },
    { label: "14", R: 32.773, d: 3.6, nd: 1.60311, elemId: 9, sd: 13.1 },
    { label: "15", R: -1305.526, d: 2.345, nd: 1, elemId: 0, sd: 13.1 },
    { label: "STO", R: 1e15, d: 0.6, nd: 1, elemId: 0, sd: 7.9 },
    { label: "16", R: -100.418, d: 1.9, nd: 1.7847, elemId: 10, sd: 9.3 },
    { label: "17", R: -32.631, d: 1, nd: 1.5168, elemId: 11, sd: 9.3 },
    { label: "18", R: 410.041, d: 1.3, nd: 1, elemId: 0, sd: 9.3 },
    { label: "19", R: -51.601, d: 1.2, nd: 1.51835, elemId: 12, sd: 9.3 },
    { label: "20", R: 36.052, d: 19.92, nd: 1, elemId: 0, sd: 9.8 },
    { label: "21", R: 849.83, d: 5.4, nd: 1.58913, elemId: 13, sd: 14.9 },
    { label: "22", R: -29.228, d: 0.1, nd: 1, elemId: 0, sd: 14.9 },
    { label: "23", R: 94.23, d: 3.7, nd: 1.6228, elemId: 14, sd: 14.9 },
    { label: "24", R: -70.653, d: 2.7, nd: 1, elemId: 0, sd: 14.1 },
    { label: "25", R: -29.86, d: 1.2, nd: 1.79504, elemId: 15, sd: 14.1 },
    { label: "26", R: -156.189, d: 39.287, nd: 1, elemId: 0, sd: 14.4 },
  ],

  asph: {},

  zoomPositions: [28.8, 83.3],
  zoomLabels: ["28.8 mm", "83.3 mm"],
  zoomStep: 0.004,

  var: {
    "9": [
      [41.311, 41.311],
      [0.835, 0.835],
    ],
    "15": [
      [2.345, 4.658],
      [20.144, 20.144],
    ],
    "20": [
      [19.92, 17.606],
      [2.12, 2.12],
    ],
    "26": [
      [39.287, 41.601],
      [57.087, 57.087],
    ],
  },

  varLabels: [
    ["9", "D9 G1-G2"],
    ["15", "D15 G2-STO"],
    ["20", "D20 G3-G4"],
    ["26", "BF"],
  ],

  groups: [
    { text: "G1", fromSurface: "1", toSurface: "9" },
    { text: "G2", fromSurface: "10", toSurface: "15" },
    { text: "G3", fromSurface: "16", toSurface: "20" },
    { text: "G4", fromSurface: "21", toSurface: "26" },
  ],

  doublets: [
    { text: "D1", fromSurface: "5", toSurface: "7" },
    { text: "T1", fromSurface: "10", toSurface: "13" },
    { text: "D2", fromSurface: "16", toSurface: "18" },
  ],

  nominalFno: [3.5, 4.5],
  closeFocusM: 0.25,
  fstopSeries: [3.5, 4, 4.5, 5.6, 8, 11, 16, 22],
  maxFstop: 22,
  scFill: 0.84,
  yScFill: 0.7,
} satisfies LensDataInput;

export default LENS_DATA;
